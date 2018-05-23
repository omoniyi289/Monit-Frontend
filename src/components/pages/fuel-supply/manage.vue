<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
       
                <csview title="Custom Table"  :companies="available_companies" :stations="company_stations">
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
            <b-card header="Update Fuel Request" header-tag="h5" class="bg-info-card">
            <vue-form :state="formstate" @submit.prevent="onSubmit" >
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="request_code"> Request Code</label>
                      <input readonly v-model="fuel_supply.request_code" name="request_code" type="text" required autofocus placeholder="Request Code" class="form-control" id="request_code"/>
                      <field-messages name="request_code" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Request Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="status">Status</label>
                      <select id="status" name="status" size="1" class="form-control" v-model="fuel_supply.status" required  v-on:change="selected_status_action(fuel_supply.status)" >

                        <option
                          v-for="(option,index) in statuses"
                          v-bind:value="option"
                         >{{option}}
                        </option>

                      </select>
                      <field-messages name="status" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Status is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12" v-if="show_git_inputs">
                  <div class="form-group">
                      <label for="quantity_loaded"> Quantity Loaded</label>
                      <input v-model="fuel_supply.quantity_loaded" name="quantity_loaded" type="text" required autofocus placeholder="Quantity Loaded" class="form-control" id="quantity_loaded"/>
                    
                  </div>
                </div>
                <div class="col-sm-12" v-if="show_git_inputs">
                  <div class="form-group">
                      <label for="driver_name"> Driver's Name</label>
                      <input v-model="fuel_supply.driver_name" name="driver_name" type="text" required autofocus placeholder="Driver's Name" class="form-control" id="driver_name"/>
                     
                  </div>
                </div>
                <div class="col-sm-12" v-if="show_git_inputs">
                  <div class="form-group">
                      <label for="truck_reg_number"> Truck Registration Number</label>
                      <input v-model="fuel_supply.truck_reg_number" name="truck_reg_number" type="text" required autofocus placeholder="Truck Registration Number" class="form-control" id="truck_reg_number"/>
                     
                  </div>
                </div>

                <div class="col-sm-12" v-if="show_git_inputs && first_time_seal_input" >
                  <div class="form-group">
                      <label for="compartments"> Number of Truck Compartments</label>
                      <input v-model="fuel_supply.compartments"  name="compartments" type="number" required autofocus placeholder="Compartments" class="form-control" id=""/>
                        <br>
                      <div v-for="n in parseInt(fuel_supply.compartments)" >
                       
                        <div class="form-group">    
                              <div class="form-group row">        
                                  <div class="col-md-6">
                                     <input type="text" v-model="fuel_supply.first_seal_numbers[n-1]" required  :placeholder="seal_no+' '+n" class="form-control" id="rd" :name="seal_no+n"/>
                                  </div>
                 
                                  <div class="col-md-6">
                                    <input type="text" v-model="fuel_supply.first_seal_quantities[n-1]" required  :placeholder="seal_quantity+' '+n" class="form-control" id="rd" :name="seal_quantity+n"/>
                                  </div>
                              </div>                    
                        </div>
                      </div>
                  </div>
                </div>
                <div class="col-12" v-if="show_git_inputs && return_time_seal_input" >
                  <div class="form-group">
                      <label for="compartments"> Seal Numbers vs. Quantity</label>
                      <div v-for="(item, index) in fuel_supply.latest_seal_numbers" >
                      <div >
                   
                        <div class="form-group">               
                          
                          <div class="form-group">
                             <div class="form-group row">        
                                  <div class="col-md-6">
                                     <input type="text"  :value="item" id="rd" readonly required autofocus class="form-control" />
                                  </div>
                 
                                  <div class="col-md-6">
                                    <input type="text"  :value="fuel_supply.latest_seal_quantities[index]" id="rd" readonly required autofocus class="form-control" />
                                  </div>
                              </div>
                          </div>
                       
                      </div>

                   
                        <div class="form-group">
                        
                        <div class="form-group">
                            <div class="form-group row">        
                                  <div class="col-md-6">
                                     <input type="text" v-model="fuel_supply.new_seal_numbers[index]" required  placeholder="New Seal Number" class="form-control" id="rd" :name="seal_no+index"/>
                                  </div>
                 
                                  <div class="col-md-6">
                                    <input type="text" v-model="fuel_supply.new_seal_quantities[index]" required  placeholder="New Quantity" class="form-control" id="rd" :name="seal_quantity+index"/>
                                  </div>
                              </div>
                        </div>
                        </div>
                      </div>
                      
                      </div>
                  </div>
                </div>


                <div class="col-sm-12">
                  <div class="form-group float-left">
                   
                    <input  type="submit" value="UPDATE REQUEST/GENERATE WAYBILL" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
            </b-card>
          </div>
          <div class="col-sm-8" v-show="show_setup_form">
            <div class="table-responsive">
              <datatable title="Fuel Requests"  :rows="tableData" :columns="columndata">
                <template slot="actions" slot-scope="props">
                  <div >
                        <i class='fa fa-pencil text-info mr-3' @click="onAction('update', props.rowData, props.rowIndex)"></i>
                  </div>
                </template>
              </datatable>
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
  import {ServerTable, ClientTable, Event} from 'vue-tables-2';
  import options from "src/validations/validations.js";
  Vue.use(ClientTable, [options]);
  
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
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
                field: '__slot:actions',
                label: 'Actions',
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
          numeric: true,
          html: true,
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
        seal_no:'Seal Number',
        seal_quantity:'Quantity in',
        show_setup_form : false,
        tableData: [],
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        return_time_seal_input:false,
        first_time_seal_input:false,
        show_single_company: false,
        station_pumps:"",
        company_stations: "",
        added_product_name: "",
        show_git_inputs: false,
        statuses: [
          'Pending', 'Approved', 'Rejected', 'Order in Process',
          'Goods in Transit', 'Arrived at Destination'

        ],
  number:0,
        preset : {
          company_id: 0,
          station_id: 0
        },
        fuel_supply : {
          station_id: "",
          company_id: "",
          product_id:0,
          waybill_printed_by: "",
          last_modified_by:"",
          submit_mode: "UPDATE REQUEST/GENERATE WAYBILL",
          status:"",
          first_seal_numbers:[],
          new_seal_numbers:[],
          latest_seal_numbers:[],
          first_seal_quantities:[],
          new_seal_quantities:[],
          latest_seal_quantities:[],
          compartments:1,
          request_code:"",
          driver_name:"",
          quantity_loaded:"",
          truck_reg_number:"",
          truck_departure_time:""
        }

      }
    },
            templates: {
            erase: function(h, row) {
                return h('delete', {attrs: { id: row.id} }, ["del"]);
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
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let params = 'station_id='+station_id; 
          axios.get(this.$store.state.host_url+"/fuel-supply/by_station?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
                store.commit("activateLoader", "end");  
       
        this.tableData=response.data.data;
        //console.log(response.data.data);
        this.tableData.forEach((element, index) => {
        this.$set(element, "update", 
          "<btn class='btn btn-info' v-on:click="+this.number++ +"'>Edit</btn>");
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
         
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });
        },
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
      selected_status_action(status){
          if(status == 'Goods in Transit'){
              this.show_git_inputs = true; 
              this.fuel_supply.compartments = 1;
              this.fuel_supply.latest_seal_numbers = [];
              this.fuel_supply.first_seal_numbers = [];
              this.fuel_supply.new_seal_numbers = [];
              this.fuel_supply.first_seal_quantities=[],
              this.fuel_supply.new_seal_quantities=[],
              this.fuel_supply.latest_seal_quantities=[],
              this.fuel_supply.submit_mode="UPDATE REQUEST/GENERATE WAYBILL"
              //console.log(this.fuel_supply.stock_seal_numbers.length);   
            if(this.fuel_supply.stock_seal_numbers.length == 0){
                this.first_time_seal_input = true;
                this.return_time_seal_input = false;
            }else{
              this.return_time_seal_input= true;
              this.fuel_supply.stock_seal_numbers.forEach(element => {
                this.fuel_supply.latest_seal_numbers.push(element.latest_seal_number);
                this.fuel_supply.latest_seal_quantities.push(element.latest_seal_quantity);
              });
              //console.log(this.fuel_supply.latest_seal_numbers);


        }
          }else{
            this.show_git_inputs = false;
          }
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
          this.fuel_supply.last_modified_by = user_details.id;
          //for goods in transit
          this.fuel_supply.waybill_printed_by=  user_details.id;
           let fuel_supply_detail = {
            fuel_request: this.fuel_supply
          };
          axios.patch(this.url, fuel_supply_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
          
            this.tableData = response.data.data;
             this.tableData.forEach((element, index) => {
          this.$set(element, "update", 
          "<span class='btn btn-info' @click.native="+this.number++ +"'>Edit</span>");
        
         if(element.status == "Pending"){
            this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Pending</span>");
          }else if(element.status == "Approved"){
            this.$set(element, "status", "<span class='btn btn-success btn-sm' >Approved</span>");
          }else if(element.status == "Disapproved"){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved</span>");
          }else{
            this.$set(element, "status", "<span class='btn btn-primary btn-sm' >"+element.status+"</span>");
          }

            if(this.fuel_supply.request_code == element.request_code && this.fuel_supply.status =='Goods in Transit'){
                axios.get(this.url+'/print-waybill-pdf?request_code='+element.request_code, 
              { responseType: 'blob' }
            ).then( response => {
                //console.log(response);
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'waybill-note.pdf');
                document.body.appendChild(link);
                link.click();
            }).catch(error =>{
              //console.log(error);
            });
              }

        });

          if(this.fuel_supply.status== 'Goods in Transit'){
            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Request Updated Successfully, Waybill Downloaded', 'show_alert': true});
              }else{
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Request Updated Successfully', 'show_alert': true});
             
              }
              this.fuel_supply={};
              this.formstate.$submitted=false;
              this.show_git_inputs= false;
         
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        })}
      },
    onAction (action, data, index) {
      this.$SmoothScroll(document.getElementById("content-header"));
      //console.log('slot action: ' + action, data, index);
      if(action == 'update'){
        this.supply_reset();
        this.fuel_supply.id = data.id;
        this.fuel_supply.status='',
        this.fuel_supply.driver_name='',
        this.fuel_supply.quantity_loaded='',
        this.fuel_supply.request_code=data.request_code;
        this.fuel_supply.product_id=data.product_id;
        this.fuel_supply.stock_seal_numbers=data.stock_seal_numbers;
        if(data.stock_received != null){
        this.fuel_supply.driver_name= data.stock_received.driver_name;
        this.fuel_supply.quantity_loaded= data.stock_received.quantity_loaded;
        this.fuel_supply.stock_received_id= data.stock_received.id;
        this.fuel_supply.truck_reg_number= data.stock_received.truck_reg_number;
          }
        this.show_git_inputs = false;
        this.first_time_seal_input = false;
        this.return_time_seal_input = false;
      }
    },
    supply_reset(){
      this.fuel_supply = {
          station_id: "",
          company_id: "",
          product_id:0,
          waybill_printed_by: "",
          last_modified_by:"",
          submit_mode: "UPDATE REQUEST/GENERATE WAYBILL",
          status:"",
          first_seal_numbers:[],
          new_seal_numbers:[],
          latest_seal_numbers:[],
          compartments:1,
          request_code:"",
          driver_name:"",
          quantity_loaded:"",
          truck_reg_number:"",
          truck_departure_time:""
        };
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
