<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate2" @submit.prevent="show_station_pumps">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="company">Select Company</label>
                      <select id="company" name="company" size="1" class="form-control" v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" required checkbox>
                        <option value="0" selected disabled>
                          Select Company
                        </option>
                        <option
                          v-for="option in available_companies"
                          v-bind:value="option.id"
                          :selected="option.id == preset.company_id" >{{ option.name }}
                        </option>
                      </select>
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="station">Select Station</label>
                      <select id="station" name="station" size="1" class="form-control" v-model="preset.station_id" required checkbox>

                        <option
                          v-for="option in company_stations"
                          v-bind:value="option.id"
                          :selected="option.name == preset.station_id" >{{ option.name }}
                        </option>
                      </select>
                      <field-messages name="station" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Station is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" value="Show Pumps" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>

          </div>
          <div class="col-sm-12">
            <div class="table-responsive">
              <datatable title="Registered Pumps" :rows="tableData" :columns="columndata"></datatable>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'; import store from 'src/store/store.js';
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable
    },
    data() {
      return {columndata: [{
          label: 'Pump Code',
          field: 'number',
          numeric: false,
          html: false,
        }
        , {
          label: 'Dispenser',
          field: 'nozzle_code',
          numeric: false,
          html: false,
        }, {
          label: 'Brand',
          field: 'brand',
          numeric: false,
          html: false,
        },{
          label: "Product",
          field: 'product.code',
          numeric: false,
          html: false,
        }, {
          label: 'Actions',
          field: 'action',
          numeric: false,
          html: true,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/pumps',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
        station_tanks:"",
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        pump : {
          company_id: "",
          station_id: "",
          number: "",
          brand:"",
          nozzle_code: "",
          product: "",
          type: "",
          serial_number: "",

        }

      }
    },
    methods: {
  
      show_company_stations(company_id){
        store.commit("activateLoader", "start");   
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        //let company_name= this.preset.company_name;
        axios.get(this.$store.state.host_url+"/stations/by_company/"+company_id,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
              store.commit("activateLoader", "end");   
          this.company_stations = response.data.data;
      })
      .catch(function(error) {
         store.commit("activateLoader", "end");   
         store.commit("catch_errors", error); 
        });
      },
      show_station_pumps(){
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
          console.log(station_id);
          axios.get(this.$store.state.host_url+"/pumps/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            store.commit("activateLoader", "end");   
            this.tableData = response.data.data;
          console.log(response);
          this.tableData.forEach((item, index) => {
            this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/pump/manage?pump=" + item.id + "'>Edit</a>");
        });
          // this.loader
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");  
           store.commit("catch_errors", error); 
          });
        }},
      show_available_companies(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.available_companies = response.data.data;
        ///get products///
        axios.get(this.$store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.products = response.data.data;
      });
      })
      .catch(error => {
          if(error.response.status == 401){
          this.$router.push('/login?message='+error.response.data.error);
        }
        console.log(error.response.status);
      });
      }
      ,
    },
    mounted: function() {
      store.commit("check_login_details");
      this.show_available_companies();
    },
    destroyed: function() {

    }
  }
</script>
<style>
  .form-control{
    transition: initial;
  }
</style>
