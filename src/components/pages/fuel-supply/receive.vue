<template>
  <div class="row">
    <div class="col-lg-12">
       <div id ="mytable"  style="display: none">
            </div>
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
                       
                        <option
                          v-for="(option,index) in available_companies"
                          v-bind:value="option.id"
                          :selected="index == 0">{{ option.name }}
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
            <b-card header="Receive Stock" header-tag="h5" class="bg-info-card">
            <vue-form :state="formstate" @submit.prevent="onSubmit" >
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="quantity_requested"> Request Code</label>
                      <input v-model="fuel_supply.request_code" name="quantity_requested" type="text" required autofocus placeholder="Request Code" class="form-control" id="serial_number"/>
                      <field-messages name="quantity_requested" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Request Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <span v-on:click="check_request_code(fuel_supply.request_code)" class="btn btn-info">LOAD REQUEST</span>
                  </div>
                </div>
                <div  v-show="is_code_valid">
                    <div class="col-sm-12">
                    <div class="form-group">
                        Qty Requested: <input v-model="fuel_supply.quantity_requested" name="quantity_requested" type="text"  autofocus  class="form-control" readonly/>
                    </div>
                     <div class="form-group">
                        Created At: <input v-model="fuel_supply.created_at" name="created_at" type="text"  autofocus  class="form-control" readonly/>
                    </div>
                    </div>
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.quantity_supplied" name="quantity_supplied" type="text" required autofocus placeholder="Request Supplied" class="form-control" id="serial_number"/>
                        <field-messages name="quantity_supplied" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Request Supplied is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                    
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.truck_reg_number" name="truck_reg_number" type="text" required autofocus placeholder="Truck Reg. Number" class="form-control" id="serial_number"/>
                        <field-messages name="truck_reg_number" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Truck Reg. Number is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.waybill_number" name="waybill_number" type="text" required autofocus placeholder="Way Bill Number" class="form-control" id="serial_number"/>
                        <field-messages name="waybill_number" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Way Bill Number is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.arrival_time" name="arrival_time" type="text" required autofocus placeholder="Arrival Time" class="form-control" id="serial_number"/>
                        <field-messages name="arrival_time" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Arrival Time is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                     <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.driver_name" name="driver_name" type="text" required autofocus placeholder="Driver's Name" class="form-control" id="serial_number"/>
                        <field-messages name="driver_name" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Driver's Name is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.quantity_before_discharge" name="quantity_before_discharge" type="text" required autofocus placeholder="Quantity before Discharge" class="form-control" id="serial_number"/>
                        <field-messages name="quantity_before_discharge" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Quantity before Discharge is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                     <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.quantity_after_discharge" name="quantity_after_discharge" type="text" required autofocus placeholder="Quantity after Discharge" class="form-control" id="serial_number"/>
                        <field-messages name="quantity_after_discharge" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Quantity after Discharge is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
               

                    <div class="col-sm-12">
                    <div class="form-group float-left">
                        <input type="submit" value="UPDATE REQUEST" class="btn btn-success" />
                    </div>
                    </div>
                 </div>
              </div>
            </vue-form>
            </b-card>
          </div>
          <div class="col-sm-8" >
            <div class="table-responsive">
              <datatable title="Fuel Deliveries"  :rows="tableData" :columns="columndata"></datatable>
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
          label: 'Request Code',
          field: 'request_code',
          numeric: false,
          html: false,
        }, 
        {
          
          label: 'Quantity Requested',
          field: 'quantity_requested',
          numeric: false,
          html: false,
        },{
          label: 'Quantity Supplied',
          field: 'quantity_supplied',
          numeric: false,
          html: false,
        },
        {
          label: 'Truck Reg. No',
          field: 'truck_reg_number',
          numeric: false,
          html: false,
        }, {
          
          label: 'Driver\'s name',
          field: 'driver_name',
          numeric: false,
          html: false,
        },{
          label: 'Arrival Time',
          field: 'arrival_time',
          numeric: false,
          html: true,
        }, {
          label: 'Waybill Number',
          field: 'waybill_number',
          numeric: false,
          html: false,
        },{
          label: 'Quantity Before Discharge',
          field: 'quantity_before_discharge',
          numeric: false,
          html: true,
        }
        ,{
          label: 'Quantity After Discharge',
          field: 'quantity_after_discharge',
          numeric: false,
          html: true,
        }
         ,{
          label: 'Date/Time',
          field: 'created_at',
          numeric: false,
          html: true,
        }
],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/stock-received',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
        station_pumps:"",
        company_stations: "",
        is_code_valid: false,
        added_product_name: "",
        statuses: [
          'Pending', 'Approved', 'Rejected', 'Order in Process',
          'Goods in Transit', 'Arrived at Destintation', 'Delivery Completed'

        ],

        preset : {
          company_id: 0,
          station_id: 0
        },
        fuel_supply : {
          quantity_supplied: "",
          station_id: "",
          company_id: "",
          product_id:0,
          created_by: "",
          last_modified_by:"",
          truck_reg_number: "",
          arrival_time: "",
          waybill_number: "",
          quantity_before_discharge:"",
          quantity_after_discharge:"",
          request_code:"",
          driver_name:"",
          created_at:""
      
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
          axios.get(this.$store.state.host_url+"/stock-received/by_station?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
                store.commit("activateLoader", "end");                  
        this.tableData=response.data.data;
          
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
          this.fuel_supply.created_by = user_details.id;
           let fuel_supply_detail = {
            stock_received: this.fuel_supply
          };
          axios.post(this.url, fuel_supply_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,
              
            }
          }).then( response => {
            store.commit("activateLoader", "end");
             console.log(response.data.data.id);
              axios.get(this.url+'/print-pdf?id='+response.data.data.id, 
            { responseType: 'blob' }
          ).then( response => {
              console.log(response);
              const url = window.URL.createObjectURL(new Blob([response.data]));
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', 'delivery-note.pdf');
              document.body.appendChild(link);
              link.click();
          }).catch(error =>{
            console.log(error);
          });
            this.tableData.push(response.data.data);
            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Request Cleared Successfully', 'show_alert': true});
         
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        })}
      },
      check_request_code(code){
        console.log(code);
         store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          axios.get(this.$store.state.host_url+"/fuel-supply/by_request_code/"+code,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
                store.commit("activateLoader", "end");  
                console.log(response.data.data);                
                if(response.data.data.length> 0){
                    this.is_code_valid= true;
                     this.fuel_supply.quantity_requested= response.data.data[0].quantity_requested;
                     this.fuel_supply.created_at= response.data.data[0].created_at;
                }else{
                    store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Invalid Request Code', 'show_alert': true});
                }
          
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });
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
