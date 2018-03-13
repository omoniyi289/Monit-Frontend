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
                    <input type="submit" value="Add Pump" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>


            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              <div class="row">

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="number"> Pump Code</label>
                      <input v-model="pump-tank.number" name="number" type="text" required autofocus placeholder="Pump Code" class="form-control" id="number"/>
                      <field-messages name="number" show="$invalid && $submitted" class="text-danger">
                        <div slot="required"> Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="nozzle_code"> Nozzle Code</label>
                      <input v-model="pump.nozzle_code" name="nozzle_code" type="text" required autofocus placeholder="Nozzle Code" class="form-control" id="nozzle_code"/>
                      <field-messages name="nozzle_code" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Nozzle Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="brand"> Brand</label>
                      <input v-model="pump.brand" name="brand" type="text" required autofocus placeholder="Brand" class="form-control" id="brand"/>
                      <field-messages name="brand" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Brand is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="serial_number"> Serial Number</label>
                      <input v-model="pump.serial_number" name="serial_number" type="text" required autofocus placeholder="Serial Number" class="form-control" id="serial_number"/>
                      <field-messages name="serial_number" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Serial Number is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product">Product</label>
                      <select id="product" name="product" size="1" class="form-control" v-model="pump.product_id" required checkbox>

                        <option
                          v-for="option in products"
                          v-bind:value="option.id"
                          :selected="option.name == pump.product_id" >{{ option.name }}
                        </option>

                      </select>
                      <field-messages name="product" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Product is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

              
                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="type">Type</label>
                      <select id="type" name="type" size="1" class="form-control" v-model="pump.type" required checkbox>

                        <option value="Dual Pump">Dual Pump</option>
                        <option value="Single Pump">Single Pump</option>
                      </select>
                      <field-messages name="type" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Type is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>




                <div class="col-sm-12">
                  <div class="form-group float-right">
                    <input type="submit" value="Submit" class="btn btn-success" />
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
          label: 'Pump Code',
          field: 'number',
          numeric: false,
          html: false,
        }, {
          label: 'Type',
          field: 'type',
          numeric: false,
          html: false,
        }, {
          label: 'Brand',
          field: 'brand',
          numeric: true,
          html: false,
        }, {
          label: "Serial Number",
          field: 'serial_number',
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
        url: 'http://127.0.0.1:8000/api/v1/pumps',
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
        pump : {
          company_id: "",
          station_id: "",
          code: "",
          nozzle_code:"",
          product: "",
          type: "",
          brand: "",
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
      show_station_pumps(){
        if (this.formstate2.$invalid) {
          return;
        } else {
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
          console.log(station_id);
          axios.get("http://127.0.0.1:8000/api/v1/pumps/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            this.tableData = response.data.data;
          console.log(response);
          this.tableData.forEach((item, index) => {
            this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/pump/edit?pump=" + item.id + "'>Edit</a>");
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
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          //include station and company_id
          this.pump.station_id= this.preset.station_id;
          this.pump.company_id= this.preset.company_id;
          let pump_detail = {
            pump: this.pump
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          console.log(JSON.stringify(pump_detail));
          axios.post(this.url, pump_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
            let station_response = response.data;
          if (station_response.status === true) {
            //console.log(response.data);
            this.tableData.push(response.data.data);
            this.tableData.forEach((item, index) => {
              this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/pump/edit?pump=" + item.id + "'>Edit</a>");
          });
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
