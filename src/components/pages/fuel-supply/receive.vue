<template>
  <div class="row">
    <div class="col-lg-12">
       <div id ="mytable"  style="display: none">
            </div>
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <csview  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button class="btn btn-success" 
                      @click="show_station_fuel_supply( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
            </csview>
            <hr>
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
                      <input v-model="fuel_supply.request_code" name="quantity_requested" type="text" required autofocus placeholder="Request Code" class="form-control" id="request_code"/>
                      <field-messages name="request_code" show="$invalid && $submitted" class="text-danger">
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
                    <div class="form-group">
                        Truck Registration Time: <input v-model="fuel_supply.truck_reg_number" name="truck_reg_number" type="text"  autofocus  class="form-control" readonly/>
                    </div>
                     <div class="form-group">
                        Qty Loaded: <input v-model="fuel_supply.quantity_loaded" name="quantity_loaded" type="text"  autofocus  class="form-control" readonly/>
                    </div>
                     <div class="form-group">
                        Waybill Number: <input v-model="fuel_supply.waybill_number" name="waybill_number" type="text"  autofocus  class="form-control" readonly/>
                    </div>
                     <div class="form-group">
                        Driver Departure Time: <input v-model="fuel_supply.truck_departure_time" name="truck_departure_time" type="text"  autofocus  class="form-control" readonly/>
                    </div>
                    
                    </div>
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.quantity_supplied" name="quantity_supplied" type="text" required autofocus placeholder="Quantity Supplied" class="form-control" id="quantity_supplied"/>
                        <field-messages name="quantity_supplied" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Quantity Supplied is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.arrival_time" name="arrival_time" type="text" required autofocus placeholder="Arrival Time" class="form-control" id="arrival_time"/>
                        <field-messages name="arrival_time" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Arrival Time is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                  
                    <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.quantity_before_discharge" name="quantity_before_discharge" type="text" required autofocus placeholder="Tank Vol before Discharge" class="form-control" id="quantity_before_discharge"/>
                        <field-messages name="quantity_before_discharge" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Tank Volume before Discharge is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
                     <div class="col-sm-12">
                    <div class="form-group">
                        <validate tag="div">
                        
                        <input v-model="fuel_supply.quantity_after_discharge" name="quantity_after_discharge" type="text" required autofocus placeholder="Tank Vol after Discharge" class="form-control" id="quantity_after_discharge"/>
                        <field-messages name="quantity_after_discharge" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">Tank Volume after Discharge is a required field</div>
                        </field-messages>
                        </validate>
                    </div>
                    </div>
               

                    <div class="col-sm-12">
                    <div class="form-group float-left">
                        <input type="submit" value="SUBMIT STOCK DETAILS" class="btn btn-success" />
                    </div>
                    </div>
                 </div>
              </div>
            </vue-form>
            </b-card>
          </div>
          <div class="col-sm-8" v-show="show_setup_form">
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
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview
    },
    data() {
      return {columndata: [
         {
          label: 'Date/Time',
          field: 'created_at',
          numeric: false,
          html: true,
        },
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
        }, {
          
          label: 'Quantity Loaded',
          field: 'quantity_loaded',
          numeric: true,
          html: true,
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
          label: 'Driver\'s Departure Time',
          field: 'truck_departure_time',
          numeric: false,
          html: true,
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
        
],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/stock-received',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
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
          created_at:"",
          truck_departure_time:"",
      
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
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
              store.commit("activateLoader", "end");   
              this.company_stations = response.data.data;

      })
      .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
      },
      show_station_fuel_supply(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let params = 'station_id='+station_id; 
          axios.get(this.$store.state.host_url+"/stock-received/params?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
                store.commit("activateLoader", "end");                  
              this.tableData = response.data.data;
          
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });
        }},
      show_available_companies(){
        this.products = store.state.products;
        if(store.state.show_single_company){
          this.available_company = store.state.available_company;
          this.show_single_company = store.state.show_single_company;
        }else if(store.state.show_multi_company == true){
          this.available_companies = store.state.available_companies;
          this.show_multi_company = store.state.show_multi_company;
        }
      }
      ,
      update_price_panel(tabledata_id){
        console.log(tabledata_id);
      },
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          //include station and company_id
          this.fuel_supply.station_id= this.preset.station_id;
          this.fuel_supply.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.fuel_supply.stock_received_by = user_details.id;
           let fuel_supply_detail = {
            stock_received: this.fuel_supply
          };
          axios.post(this.url, fuel_supply_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache",
              
            }
          }).then( response => {
            store.commit("activateLoader", "end");
           
            this.tableData=response.data.data;
            this.tableData.forEach(element =>{
           if(this.fuel_supply.request_code == element.request_code){
            axios.get(this.url+'/print-delivery-pdf?id='+element.id, 
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
          });}
            }
            );
            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Request cleared successfully, delivery note downloaded', 'show_alert': true});
         
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        })}
      },
      check_request_code(code){
        this.$SmoothScroll(document.getElementById("content-header"));
         store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let params='code='+code+'&company_id='+this.preset.company_id+'&station_id='+this.preset.station_id;
          axios.get(this.$store.state.host_url+"/fuel-supply/by_request_code/params?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
                store.commit("activateLoader", "end");  
                    this.is_code_valid= true;
                     this.fuel_supply.quantity_requested = response.data.data.stock_received.quantity_requested;
                     this.fuel_supply.created_at = response.data.data.stock_received.created_at;
                     this.fuel_supply.quantity_loaded = response.data.data.stock_received.quantity_loaded;
                     this.fuel_supply.driver_name = response.data.data.stock_received.driver_name;
                     this.fuel_supply.truck_departure_time = response.data.data.stock_received.truck_departure_time;
                     this.fuel_supply.truck_reg_number = response.data.data.stock_received.truck_reg_number;
                     this.fuel_supply.waybill_number = response.data.data.stock_received.waybill_number;
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
