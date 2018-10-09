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
             <div class="col-lg-3">  
             Start Date          
                    <datepicker :format="format" v-model="selected_start_date"  placeholder="Select Start Date"></datepicker>     
            </div>
            <div class="col-lg-3">  
            End Date            
                    <datepicker :format="format" v-model="selected_end_date"  placeholder="Select End Date"></datepicker>     
            </div>
          <br><br><br>
          <div class="col-md-12">
           
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              
              <b-card header-tag="h4" class="bg-info-card" header="Pump Readings">
                <div class="row ">
                  <div class="col-lg-12">               
                    <b-tabs>
                        <b-tab title="Pump Readings" >
                           <table class="table">
                              <thead>
                                <tr>
                                  <th>Nozzle Code</th>
                                  <th>Start Totalizer Reading</th>
                                  <th>End Totalizer Reading</th>
                                  <th>Total Sales</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for ="(option, index) in open_pump_readings">
                                  <th>{{option.nozzle_code}}</th>
                                  <td>
                  
                                      <input id="rd" readonly :name="a+index" type="number" v-model="open_pump_readings[index].min_reading" placeholder="" class="form-control" />
                                     
                                  </td>
                                  <td>
                                      <input id="rd" readonly :name="b+index" type="number" v-model="open_pump_readings[index].max_reading" placeholder="" class="form-control" />    
                                  </td>
                                  <td>
                                      <input id="rd" readonly :name="c+index" type="number" v-model="open_pump_readings[index].total_sales" placeholder="" class="form-control" />    
                                  </td>
                                </tr>
                              </tbody>
                            </table> 
                            
                        </b-tab>
                       
                    </b-tabs>           
                  </div>
                </div>
              </b-card>
             
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
  import MaintenanceCsview from "components/plugins/Company-Station-View/Maintenance-CSView.vue";
  import VueForm from "vue-form";   
  import Datepicker from 'vuejs-datepicker';  
  import vueSmoothScroll from 'vue-smoothscroll';     
  Vue.use(vueSmoothScroll);
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
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/product_price_change',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: [],
        available_company: [],
        products: "",
        format: 'yyyy-MM-dd',
        set_date: "",
        selected_start_date: "",
        selected_end_date: "",
        show_multi_company: false,
        show_single_company: false,
        trd: "tank_reading",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        e: "e",//0037116128
        pump_readings:[],
        final_stock_info: {},
        final_pump_info: {},
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        open_pump_readings : [],

      }
    },
    methods: {
      to_totalizer(){
        
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
          store.commit("activateLoader", "start");
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        this.$store.state.show_alert = false;
        this.open_pump_readings = [];
        if(this.selected_start_date == ''  || this.selected_end_date == '' ){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Please select Start and End Date to continue', 'show_alert': true});
          store.commit("activateLoader", "end");
          return;
            }

        if (this.formstate2.$invalid) {
          return;
        } else {
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          var d_date = new Date(this.selected_start_date);
          d_date.setDate(d_date.getDate() + 1);
          this.selected_start_date = moment(d_date).format('YYYY-MM-DD');
          var d_date = new Date(this.selected_end_date);
          d_date.setDate(d_date.getDate() + 1);
          this.selected_end_date = moment(d_date).format('YYYY-MM-DD');

          let params = 'station_id='+this.preset.station_id+'&start_date='+this.selected_start_date+'&end_date='+this.selected_end_date; 
         
          axios.get(this.$store.state.host_url+"/equipment_maintenance/pump_readings?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
      
              this.pump_readings = response.data.data;
              this.show_setup_form = true;
              this.pump_readings.forEach(element => {
              this.open_pump_readings.push({'nozzle_code': element.nozzle_code,'min_reading': parseFloat(element.min_reading),'total_sales': parseFloat(element.total_sales),'max_reading': parseFloat(element.max_reading)});
            });

                store.commit("activateLoader", "end"); 
                  }) 
          .catch(function(error) {
            store.commit("activateLoader", "end");   
            store.commit("catch_errors", error); 
            });
          
        }
      },
     
      onSubmit() {
          this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'input error, please cross-check stock and totalizer readings', 'show_alert': true});
          return;
        }else if ( this.open_pump_reading == 0) {
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'input error, No pump readings supplied', 'show_alert': true});
          return;
        }else if ( this.open_tank_reading == 0) {
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'input error, No tank readings supplied', 'show_alert': true});
          return;
        } else {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          let invalid_monitor = false;
              this.open_pump_reading.forEach(element => {
                if(parseFloat(element.opening_reading) < parseFloat(element.last_closing_reading)){
                     invalid_monitor = true;
                     store.commit("showAlertBox", {'alert_type': 'alert-danger',
                           'alert_message': 'invalid input for '+element.pump_nozzle_code+'. Opening reading cannot be less than previous day\'s closing reading', 'show_alert': true});
                     store.commit("activateLoader", "end");                
                }
              });
          if (invalid_monitor) {
              //stop script eecution if true
              return;
           }

          this.final_stock_info.station_id= this.preset.station_id;
          this.final_stock_info.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_stock_info.created_by = user_details.id;
          this.final_stock_info.readings = this.open_tank_reading;
          this.final_stock_info.reading_date = this.set_date;
          ////pumps///
          this.final_pump_info.station_id= this.preset.station_id;
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.created_by = user_details.id;
          this.final_pump_info.reading_date = this.set_date;
          this.final_pump_info.readings = this.open_pump_reading;
          this.show_setup_form= false; 
          axios.post(this.$store.state.host_url+"/stock-readings", {'stocks': this.final_stock_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
              axios.post(this.$store.state.host_url+"/pump-readings", {'pumps': this.final_pump_info}, {
                headers : {
                  "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }
              }).then( response => {                         
                    let api_response = response.data;
                    if (api_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings Saved Successfully', 'show_alert': true});
                       this.formstate.$submitted=false;
                        this.open_pump_reading= {};
                        store.commit("activateLoader", "end");
                    }
                  }).catch(error => { store.commit("activateLoader", "end");   
                    store.commit("catch_errors", error); 
              });
        }).catch(error => { 
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        })}
      }
    },
    mounted: function() {
      store.commit("check_login_details");
      console.log(this.available_companies);
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
