<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate2" @submit.prevent="show_station_pricing">
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
                    <input type="submit" value="Show Pricing" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
          </div>

          <div class="col-sm-6">
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              <div class="row">
                <div class="col-lg-8">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product">Product</label>
                      <select id="product" name="product" size="1" class="form-control" v-model="pricing.product_id" required checkbox>

                        <option
                          v-for="option in products"
                          v-bind:value="option.id"
                          :selected="option.name == pricing.product_id" >{{ option.name }}
                        </option>

                      </select>
                      <field-messages name="product" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Product is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                   

                <div class="col-sm-8">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="requested_price_tag"> Price</label>
                      <input v-model="pricing.requested_price_tag" name="requested_price_tag" type="text" required autofocus placeholder="Price Tag" class="form-control" id="serial_number"/>
                      <field-messages name="requested_price_tag" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Price is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-8">
                  <div class="form-group float-left">
                    <input type="submit" :value=pricing.submit_mode class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-6">
            <div class="table-responsive">
              <datatable title="Product Prices" :rows="tableData" :columns="columndata"></datatable>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import VueForm from "vue-form";
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable
    },
    data() {
      return {columndata: [{
          label: 'ID',
          field: 'id',
          numeric: true,
          html: false,
        }, {
          label: 'Product',
          field: 'product.name',
          numeric: false,
          html: false,
        }, {
          label: 'Current Price',
          field: 'new_price_tag',
          numeric: false,
          html: false,
        },{
          label: 'Actions',
          field: 'action',
          numeric: false,
          html: true,
        }],
        ajaxLoading: true,
        loading: true,
        url: 'http://127.0.0.1:8000/api/v1/product_price_change',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
        station_pumps:"",
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        pricing : {
          new_price_tag: "",
          station_id: "",
          company_id: "",
          product_id:"",
          updated_by: "",
          requested_price_tag:"",
          submit_mode: "Add Price"
      
        }

      }
    },
    methods: {
      check_login_details(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        if (user_details == null || user_details == undefined) {
          this.$router.push('/login');
        }
      },
      show_company_stations(company_name){

        let user_details = JSON.parse(localStorage.getItem('user_details'));
        //let company_name= this.preset.company_name;
        axios.get("http://127.0.0.1:8000/api/v1/stations/by_company/"+company_name,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          this.company_stations = response.data.data;
        console.log(response.data.data);

      })
      .catch(function(error) {
          if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
        });
      },
      show_station_pricing(){
        if (this.formstate2.$invalid) {
          return;
        } else {
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
          console.log(station_id);
          axios.get("http://127.0.0.1:8000/api/v1/product_price/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            this.tableData = response.data.data;
          console.log(response.data);
          this.tableData.forEach((item, index) => {
            this.$set(item, "action", "<button class='btn btn-info' v-on:click="+this.update_price_panel(item.id)+">Edit</button>");
        });
          // this.loader
        })
        .catch(function(error) {
            console.log(error);
            if(error.response.status == 401){
              this.$router.push('/login?message='+error.response.data.error);
            }
          });
        }},
      show_available_companies(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get("http://127.0.0.1:8000/api/v1/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.available_companies = response.data.data;
        ///get products///
        axios.get("http://127.0.0.1:8000/api/v1/products",
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
      update_price_panel(tabledata_id){
        console.log(tabledata_id);
      },
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          //include station and company_id
          this.pricing.station_id= this.preset.station_id;
          this.pricing.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.pricing.curr = user_details.id;
          this.pricing.updated_by = user_details.id;
           let price_detail = {
            product_change_log: this.pricing
          };
          console.log(JSON.stringify(price_detail));
          axios.post(this.url, price_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
            let station_response = response.data;
          if (station_response.status === true) {
            //console.log(response.data);
           // this.tableData.push(response.data.data);
          //  this.tableData.forEach((item, index) => {
          //    this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/pump/edit?pump=" + item.id + "'>Edit</a>");
         // });
          }
        }).catch(error => {
            if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
          console.log(error);
        })}
      }
    },
    mounted: function() {
      this.check_login_details();
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
