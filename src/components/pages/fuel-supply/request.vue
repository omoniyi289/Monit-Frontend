<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate2" @submit.prevent="show_station_fuel_supply">
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
                    <input type="submit" value="Show Form" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-4" v-show="!show_setup_form">
          </div>
          <div class="col-sm-4" v-show="show_setup_form">
            <b-card header="Request for Fuel" header-tag="h5" class="bg-info-card">
            <vue-form :state="formstate" @submit.prevent="onSubmit" >
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product">Product</label>
                      <select id="product" name="product" size="1" class="form-control" v-model="fuel_supply.product_id" required checkbox>

                        <option
                          v-for="option in products"
                          v-bind:value="option.id"
                          :selected="option.id == fuel_supply.product_id" >{{ option.name }}
                        </option>

                      </select>
                      <field-messages name="product" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Product is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                   

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="quantity_requested"> Request Quantity</label>
                      <input v-model="fuel_supply.quantity_requested" name="quantity_requested" type="text" required autofocus placeholder="Request Quantity" class="form-control" id="serial_number"/>
                      <field-messages name="quantity_requested" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Request Quantity is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" value="Request Fuel" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
            </b-card>
          </div>
          <div class="col-sm-8">
            <div class="table-responsive">
              <datatable title="Fuel Requests"  :rows="tableData" :columns="columndata"></datatable>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import store from 'src/store/store.js';
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
      return {columndata: [
         {
          label: 'Date Requested',
          field: 'created_at',
          numeric: false,
          html: false,
        },
         {
          label: 'Request Code',
          field: 'request_code',
          numeric: false,
          html: false,
        },
        {
          label: 'Product',
          field: 'product.code',
          numeric: false,
          html: false,
        }, {
          
          label: 'Quantity Requested',
          field: 'quantity_requested',
          numeric: false,
          html: false,
        },{
          label: 'Status',
          field: 'status',
          numeric: false,
          html: true,
        },{
          label: 'Last Updated On',
          field: 'updated_at',
          numeric: false,
          html: true,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/fuel-supply',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
        station_pumps:"",
        company_stations: "",
        added_product_name: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        fuel_supply : {
          quantity_requested: "",
          station_id: "",
          company_id: "",
          product_id:0,
          created_by: "",
          last_modified_by:"",
          submit_mode: "Add Price"
      
        }

      }
    },
    methods: {
     
      show_company_stations(company_name){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        //let company_name= this.preset.company_name;
        axios.get(this.$store.state.host_url+"/stations/by_company/"+company_name,
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
      show_station_fuel_supply(){
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let params = 'station_id='+this.preset.station_id; 
          axios.get(this.$store.state.host_url+"/fuel-supply/by_station?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
                store.commit("activateLoader", "end");   
            
            console.log(response.data.data);
            this.tableData = response.data.data.reverse();
            console.log(this.tableData);
          this.tableData.forEach((item, index) => {
            this.$set(item, "action", "<button class='btn btn-info' v-on:click="+this.update_price_panel(item.id)+">Edit</button>");
        });
         this.tableData.forEach((element, index) => {
          
         if(element.status == "Pending"){
            this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Pending</span>");
          }else if(element.status == "Approved"){
            this.$set(element, "status", "<span class='btn btn-success btn-sm' >Approved</span>");
          }else if(element.status == "Disapproved"){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved</span>");
          }else{
            this.$set(element, "status", "<span class='btn btn-primary btn-sm' >"+element.status+"</span>");
          }
        });
       // this.tableData.reverse();
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
       store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
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
          store.commit("activateLoader", "start");
          //include station and company_id
          this.fuel_supply.station_id= this.preset.station_id;
          this.fuel_supply.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.fuel_supply.status= "Pending";
          this.fuel_supply.created_by = user_details.id;
           let fuel_supply_detail = {
            fuel_request: this.fuel_supply
          };
          axios.post(this.url, fuel_supply_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            console.log(response.data);
            let station_response = response.data;
          if (station_response.status === true) {
      
              for( var i = 0, len = this.products.length; i < len; i++ ) {
                  if( this.products[i]['id'] === this.fuel_supply.product_id ) {
                    
                      this.added_product_name = this.products[i]['code'];
                      break;
                  }
              }
              
              this.tableData.push({'product':{'code': this.added_product_name}, 
              'request_code': station_response.data.request_code,
              'quantity_requested': station_response.data.quantity_requested,
               'created_at':station_response.data.created_at ,
               'updated_at':station_response.data.updated_at
              , 'status': station_response.data.status});
         /*      this.tableData.forEach((element, index) => {
        
         if(element.status == "Pending"){
            this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Pending</span>");
          }else if(element.status == "Approved"){
            this.$set(element, "status", "<span class='btn btn-success btn-sm' >Pending</span>");
          }else if(element.status == "Disapproved"){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved</span>");
          }else{
            this.$set(element, "status", "<span class='btn btn-primary btn-sm' >"+element.status+"</span>");
          }
        });*/
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Request Added Successfully', 'show_alert': true});
          console.log(this.tableData);
          }
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        })}
      }
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
