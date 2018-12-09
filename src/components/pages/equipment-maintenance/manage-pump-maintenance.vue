<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <MaintenanceCsview title="Custom Table"  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button class="btn btn-success" 
                      @click="show_open_station_info( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
            </MaintenanceCsview>
            <hr>
          </div>
          
          <div class="col-md-12">
           
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              <div class="col-lg-12">
                <span v-on:click="button_toggle" style="margin-bottom: 10px" class="toggle btn btn-primary">{{this.button_text}}</span>             
            </div>
            <br>
            <br>
              <b-card header-tag="h4" class="bg-info-card" v-show="fill_form" header="Station Pumps">
                <div class="row ">
                  <div class="col-lg-12">               
                    <b-tabs>
          
                        <b-tab title="Totalizer Readings" >
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>STATION</th>
                                  <th>PUMP NUMBER</th>
                                  <th>CURRENT TOTALIZER READING</th>
                                  <th>>=500,000 LITRES VOLUME CATEGORY<hr>
                                   Issue Date <br> Invoice Number<br> Payment Status</th>
                                  <th> >=1,500,000 LITRES VOLUME CATEGORY<hr>
                                   Issue Date <br> Invoice Numbe0<br> Payment Statusr</th>
                                  <th> >=2,500,000 LITRES VOLUME CATEGORY<hr>
                                   Issue Date <br> Invoice Number<br> Payment Status</th>
                                  <th>NOTE</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in open_pump_reading">
                                  <th>{{option.station_name}}</th>
                                  <th>{{option.combined_pump_nozzle_code}}</th>
                                  <td>                
                                      <input  id="cr"  type="text" v-model="open_pump_reading[index].combined_totalizer_reading" readonly placeholder="" class="form-control" />
                                            
                                  </td>
                                  <td>                
                                      
                                      <datepicker v-if="open_pump_reading[index].combined_totalizer_reading >= 500000" :format="format" v-model="open_pump_reading[index].D_issue_date"  placeholder="Select Issue Date" />

                                      <datepicker v-if="open_pump_reading[index].combined_totalizer_reading < 500000" :format="format" v-model="open_pump_reading[index].D_issue_date" :disabledPicker="true" placeholder="Select Issue Date" />
                                      
                                      <input v-if="open_pump_reading[index].combined_totalizer_reading >= 500000" id="cr"  type="text" v-model="open_pump_reading[index].D_invoice_number"  placeholder="Invoice Number" class="form-control" />
                                     
                                      <input  v-if="open_pump_reading[index].combined_totalizer_reading < 500000"  id="cr"  type="text" v-model="open_pump_reading[index].D_invoice_number" readonly="" placeholder="Invoice Number" class="form-control" />

                                      <select v-if="open_pump_reading[index].combined_totalizer_reading >= 500000"  v-model="open_pump_reading[index].D_payment_status"   >
                                        <option value="Paid">Paid</option>
                                        <option selected value="Unpaid">Unpaid</option>
                                      </select>

                                      <select v-if="open_pump_reading[index].combined_totalizer_reading < 500000"  v-model="open_pump_reading[index].D_payment_status" disabled  >
                                        <option value="Paid">Paid</option>
                                        <option selected value="Unpaid">Unpaid</option>
                                      </select>

                                  </td>

                                  <td>                
                                      
                                      <datepicker v-if="open_pump_reading[index].combined_totalizer_reading >= 1500000" :format="format" v-model="open_pump_reading[index].MD_issue_date"  placeholder="Select Issue Date" />

                                      <datepicker v-if="open_pump_reading[index].combined_totalizer_reading < 1500000" :format="format"  v-model="open_pump_reading[index].MD_issue_date" :disabledPicker="true" placeholder="Select Issue Date" />


                                      <input v-if="open_pump_reading[index].combined_totalizer_reading >= 1500000" id="cr"  type="text" v-model="open_pump_reading[index].MD_invoice_number"  placeholder="Invoice Number" class="form-control" />

                                      <input v-if="open_pump_reading[index].combined_totalizer_reading < 1500000"  id="cr" readonly type="text" v-model="open_pump_reading[index].MD_invoice_number"  placeholder="Invoice Number" class="form-control" />

                                      <select v-if="open_pump_reading[index].combined_totalizer_reading >= 1500000"  v-model="open_pump_reading[index].MD_payment_status"   >
                                        <option value="Paid">Paid</option>
                                        <option selected value="Unpaid">Unpaid</option>
                                      </select>

                                      <select v-if="open_pump_reading[index].combined_totalizer_reading < 1500000"  v-model="open_pump_reading[index].MD_payment_status" disabled  >
                                        <option value="Paid">Paid</option>
                                        <option selected value="Unpaid">Unpaid</option>
                                      </select>
                                            
                                  </td>

                                  <td>                
                                      
                                      <datepicker v-if="open_pump_reading[index].combined_totalizer_reading >= 2500000" :format="format" v-model="open_pump_reading[index].MMD_issue_date"  placeholder="Select Issue Date" />

                                      <datepicker v-if="open_pump_reading[index].combined_totalizer_reading < 2500000"  :format="format"v-model="open_pump_reading[index].MMD_issue_date"  placeholder="Select Issue Date"  :disabledPicker="true"  />

                                      <input v-if="open_pump_reading[index].combined_totalizer_reading >= 2500000" id="cr"  type="text" v-model="open_pump_reading[index].MMD_invoice_number"  placeholder="Invoice Number" class="form-control" />

                                      <input v-if="open_pump_reading[index].combined_totalizer_reading < 2500000" id="cr" readonly  type="text" v-model="open_pump_reading[index].MMD_invoice_number"  placeholder="Invoice Number" class="form-control" />

                                      <select v-if="open_pump_reading[index].combined_totalizer_reading >= 2500000"  v-model="open_pump_reading[index].MMD_payment_status"   >
                                        <option value="Paid">Paid</option>
                                        <option selected value="Unpaid">Unpaid</option>
                                      </select>

                                      <select v-if="open_pump_reading[index].combined_totalizer_reading < 2500000"  v-model="open_pump_reading[index].MMD_payment_status" disabled  >
                                        <option value="Paid">Paid</option>
                                        <option selected value="Unpaid">Unpaid</option>
                                      </select>

                                     
                                            
                                  </td>


                                   <td>
                                      <input v-model="open_pump_reading[index].note"  id="note" :name="note+index" type="text"  placeholder="" class="form-control" />
                                      
                                  </td>
                  
                                </tr>
                              </tbody>
                            </table> 
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <input type="submit" value="UPDATE LOG" class="btn btn-success"></input>
                              </div>
                            </div>
                        </b-tab>
                        
                    </b-tabs>           
                  </div>
                </div>
              </b-card>
<!--               <div class="table-responsive">
              <datatable title="Pump Maintenance Log" :rows="open_maintenance_log" :columns="columndata">
              </datatable>
            </div> -->

            </vue-form>
          </div>   
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import MaintenanceCsview from "components/plugins/Company-Station-View/CSView_With_All_Stations.vue";
  import VueForm from "vue-form";     
  import vueSmoothScroll from 'vue-smoothscroll';     
  Vue.use(vueSmoothScroll);
  import Datepicker from 'vuejs-datepicker';
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  import moment from 'moment';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,MaintenanceCsview,Datepicker
    },
    data() {
      return {
        columndata: 
        [{
          label: 'Maintenance Date',
          field: 'maintenance_date',
          numeric: false,
          html: false,
        },
         {
          label: 'Nozzle Code',
          field: 'pump_nozzle_code',
          numeric: false,
          html: false,
        },
        {
          label: 'Totalizer Readings Before Maintenance',
          field: 'totalizer_before_maintenance',
          numeric: false,
          html: false,
        }, {
          label: 'Totalizer Readings After Maintenance',
          field: 'totalizer_after_maintenance',
          numeric: false,
          html: false,
        }, {
          label: 'Note',
          field: 'note',
          numeric: false,
          html: false,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url,
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: [],
        available_company: [],
        products: "",
        set_date: "",
       
        show_multi_company: false,
        show_single_company: false,
        nr: "new_reading",
        cr: "current_reading",
        md: "maintenance_date",
        station_pumps:[],
        format: 'yyyy-MM-dd',
        maintenance_readings:[],
        final_stock_info: {},
        final_pump_info: {},
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        disabledDates: {
          to: new Date(Date.now()),
          from: new Date(Date.now())
        },
        note:'',
        open_pump_reading : [],
        open_maintenance_log : [],
        fill_form : true,
        button_text : "HIDE UPLOAD FORM"
      }
    },
    methods: {
      to_totalizer(){
        
      },
       button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "CLICK TO UPLOAD PUMP MAINTENANCE LOG"){
        this.button_text = "HIDE UPLOAD FORM";
        }else if("HIDE UPLOAD FORM"){
          this.button_text = "CLICK TO UPLOAD PUMP MAINTENANCE LOG";
        }
      },
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
      
      show_open_station_info(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        this.$store.state.show_alert = false;
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        this.open_pump_readings = [];
        let params = 'station_id='+this.preset.station_id;  
         axios.get(this.$store.state.host_url+"/equipment_maintenance/get_pump_maintenance_and_current_readings?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            this.station_pumps = response.data.data;
            this.open_pump_reading = [];
            //if(){
            this.show_setup_form= true;
            this.station_pumps.forEach(element => {
              let pump_split_array = element.combined_pump_nozzle_code.split(" ");
              let number = parseInt(pump_split_array[pump_split_array.length-1]);
              //get the latest reading, opening or closing
              // let latest_totalizer_reading = '';
              // if(element.last_closing_reading != null){
              //     latest_totalizer_reading =element.last_closing_reading;
              // }
              // else{
              //     latest_totalizer_reading =element.last_opening_reading;
              // }
             this.open_pump_reading.push({'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station_name,'product': element.product,'station_id': element.station_id,'pump_1_nozzle_code': element.pump_1_nozzle_code,'pump_2_nozzle_code': element.pump_2_nozzle_code,'totalizer_1_reading': element.totalizer_1_reading,'totalizer_2_reading': element.totalizer_2_reading,
               'combined_totalizer_reading': parseFloat(element.combined_totalizer_reading).toFixed(2), 
            'D_issue_date': ( element.past_log.D_issue_date), 
            'MD_issue_date': ( element.past_log.MD_issue_date), 
            'MMD_issue_date': ( element.past_log.MMD_issue_date), 
            'D_invoice_number': ( element.past_log.D_invoice_number), 
            'MD_invoice_number': ( element.past_log.MD_invoice_number), 
            'MMD_invoice_number': ( element.past_log.MMD_invoice_number),
            'D_maintenenance_date': ( element.past_log.D_maintenenance_date), 
            'MD_maintenenance_date': ( element.past_log.MD_maintenenance_date), 
            'MMD_maintenenance_date': ( element.past_log.MMD_maintenenance_date),
            'D_payment_status': ( element.past_log.D_payment_status), 
            'MD_payment_status': ( element.past_log.MD_payment_status), 
            'MMD_payment_status': ( element.past_log.MMD_payment_status),
               
             'serial' : number, 'note' :''});            
            });
             this.open_pump_reading.sort(function(a, b){return a.station_id - b.station_id});

            let params = 'station_id='+this.preset.station_id; 
            axios.get(this.$store.state.host_url+"/equipment_maintenance/get_pump_maintenance_log?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            this.maintenance_readings = response.data.data;
            console.log(this.maintenance_readings);
            this.open_maintenance_log = [];
            this.maintenance_readings.forEach(element => {
            this.open_maintenance_log.push({'pump_nozzle_code': element.nozzle_code,'pump_id': element.pump_id,
           'totalizer_before_maintenance': parseFloat(element.totalizer_before_maintenance), 'totalizer_after_maintenance': parseFloat(element.totalizer_after_maintenance), 'maintenance_date': element.maintenance_date,  'note' :element.note});
          });
            store.commit("activateLoader", "end"); 
          
                  }).catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });
        })
        .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });

        }},
     
      onSubmit() {
          this.$SmoothScroll(document.getElementById("content-header"));
        if (true) {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          let empty_monitor = 0;
          let invalid_monitor = false;
              this.open_pump_reading.forEach(element => {
                //user should not be able to select a future date
              // var new_date = new Date();
              // let today = moment( moment(new_date)..format('YYYY-MM-DD') );
              // console.log(new_date+' '+element.maintenance_date);
              // let selected_date = moment(element.maintenance_date.setDate(element.maintenance_date.getDate()));

                if(element.new_totalizer_reading != '' && element.maintenance_date ==''){
                     store.commit("showAlertBox", {'alert_type': 'alert-danger',
                           'alert_message': 'Oops! please fill in the maintenance date for '+element.pump_nozzle_code, 'show_alert': true});
                     store.commit("activateLoader", "end");     
                     invalid_monitor = true;
                         
                }
                else if(element.new_totalizer_reading == '' && element.maintenance_date !=''){
                     store.commit("showAlertBox", {'alert_type': 'alert-danger',
                           'alert_message': 'Oops! please fill in the new totalizer reading for '+element.pump_nozzle_code, 'show_alert': true});
                     store.commit("activateLoader", "end");   
                     invalid_monitor = true;          
                }
                //  else if( selected_date > today ){
                //      store.commit("showAlertBox", {'alert_type': 'alert-danger',
                //            'alert_message': 'Oops! please fill in the new totalizer reading for '+element.pump_nozzle_code, 'show_alert': true});
                //      store.commit("activateLoader", "end");   
                //      invalid_monitor = true;          
                // }
              else if(element.new_totalizer_reading == '' && element.maintenance_date ==''){
                    empty_monitor++;              
                }


              });


          if (this.open_pump_reading.length == empty_monitor) {
              store.commit("showAlertBox", {'alert_type': 'alert-danger',
                           'alert_message': 'Oops! No Entries', 'show_alert': true});
                     store.commit("activateLoader", "end");   
                     return; 
           }

          if (invalid_monitor) {
             //stop script execution
                     return; 
           }

            let user_details = JSON.parse(localStorage.getItem('user_details')); 
          ////pumps///
      
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.created_by = user_details.id;
          this.final_pump_info.readings = this.open_pump_reading;
          //this.show_setup_form= false; 
                           
            store.commit("activateLoader", "end");
              axios.post(this.$store.state.host_url+"/equipment_maintenance/create_pump_maintenance_log", {'pumps': this.final_pump_info}, {
                headers : {
                  "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }
              }).then( response => {                         
                    let api_response = response.data;
                    if (api_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings Updated Successfully', 'show_alert': true});
                       //this.formstate.$submitted=false;
                       //this.open_pump_reading= {};
                        store.commit("activateLoader", "end");
                    }
                  }).catch(error => { store.commit("activateLoader", "end");   
                    store.commit("catch_errors", error); 
              }).
              catch(error => { 
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        })}
      }
    },
    mounted: function() {
      store.commit("check_login_details");
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
