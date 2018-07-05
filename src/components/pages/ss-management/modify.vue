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
                      @click="show_open_station_info( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
                </csview>
            <div class="col-lg-3">
                <i><b>please select date before proceed</b></i>
                    <datepicker :format="format" v-model="selected_date"  placeholder="Select Date"></datepicker>     
            </div>
            <hr>
          </div>
          
          <div class="col-md-12">
           
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form" >
               <input readonly type="text"  :value="selected_date" placeholder=""/>
              
              <b-card header-tag="h4" class="bg-info-card" header="Modify Station Data">
                <div class="row ">
                  <div class="col-lg-12">               
                    <b-tabs>
                        <b-tab title="Stock Readings" >
                           <table class="table">
                              <thead>
                                <tr>
                                  <th>Tank Code</th>
                                  <th>Opening Volume Reading</th>
                                  <th>Quantity Received</th>
                                  <th>Return to Tank</th>
                                  <th>Closing Volume Reading</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for ="(option, index) in close_tank_reading">
                                  <th>{{option.tank_code}}</th>
                                  <td>     
                                      <input v-model="close_tank_reading[index].opening_reading"  type="number" :disabled="isDisabled" class="form-control" />
                                  </td>
                                  <td>         
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].qty_received" id="qr" :disabled="isDisabled"  :name="qr+index" type="number" required placeholder="" class="form-control" />
                                      <field-messages :name="qr+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Quantity Recieved is required</div>
                                      </field-messages>
                                    </validate>        
                                    
                                  </td>
                                  <td>         
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].rtt" id="qr" :disabled="isDisabled" :name="rtt+index" type="number" required placeholder="" class="form-control" />
                                      <field-messages :name="rtt+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Retun to Tank is required</div>
                                      </field-messages>
                                    </validate>        
                                    
                                  </td>
                                  <td>
                  
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].closing_reading" id="rd"  :disabled="isDisabled" :name="trd+index" type="number" required placeholder="Closing Reading" class="form-control" />
                                      <field-messages :name="trd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Closing Reading is required</div>
                                      </field-messages>
                                    </validate>        
                                    
                                  </td>
                                </tr>
                              </tbody>
                            </table> 
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <span class="btn btn-success" v-on:click ="isDisabled = !isDisabled">EDIT</span>
                              </div>
                            </div>
                        </b-tab>
                        <b-tab title="Totalizer Readings" >
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Pump Nozzle Code</th>
                                  <th>Opening Totalizer Reading</th>
                                  <th>First Shift Reading</th>
                                  <th>Second Shift Reading</th>
                                  <th>Closing Totalizer Reading</th>
                                   <th>PPV </th>
                                  <th>First Shift Cash Collected</th>
                                  <th>Second Shift Cash Collected</th>
                                  <th>Closing Cash Collected </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in close_pump_reading">
                                  <td>{{option.nozzle_code}}</td>
                                  <td>     
                                      <input v-model="close_pump_reading[index].opening_reading" :disabled="isDisabled" type="number"  class="form-control" />
                                  </td>
                                  <td>               
                                
                                      <input v-model="close_pump_reading[index].first_shift_reading" id="rd" :disabled="isDisabled" :name="fsprd+index" type="number"  placeholder="" class="form-control" />
                  
                                  </td>
                                  <td>               
                                
                                      <input v-model="close_pump_reading[index].second_shift_reading" id="rd" :disabled="isDisabled" :name="ssprd+index" type="number"  placeholder="" class="form-control" />
                  
                                  </td>
                                  <td>                                         
                                      <input v-model="close_pump_reading[index].closing_reading" id="rd" :disabled="isDisabled" :name="prd+index" type="number"  placeholder="" class="form-control" />
                                
                                  </td>
                                  <td>                                         
                                      <input v-model="close_pump_reading[index].ppv" id="rd" :disabled="isDisabled" :name="ppv+index" type="number"  placeholder="" class="form-control" />
                                
                                  </td>
                                  <td>                            
                                      <input v-model="close_pump_reading[index].first_shift_cash_collected"  :disabled="isDisabled" id="cc" :name="fscc+index" type="number"  placeholder="" class="form-control" />
                                   
                                  </td>
                                  <td>                            
                                      <input v-model="close_pump_reading[index].second_shift_cash_collected"  :disabled="isDisabled" id="cc" :name="f=sscc+index" type="number"  placeholder="" class="form-control" />
                                   
                                  </td>
                                  <td>                            
                                      <input v-model="close_pump_reading[index].cash_collected" id="cc" :disabled="isDisabled" :name="cc+index" type="number"  placeholder="" class="form-control" />
                                   
                                  </td>

                  
                                </tr>
                              </tbody>
                            </table> 
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <input type="submit" value="UPDATE READINGS" class="btn btn-success"></input>
                              </div>
                            </div>
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
  import Datepicker from 'vuejs-datepicker';
  import Vue from 'vue';
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     
  import vueSmoothScroll from 'vue-smoothscroll';     
  Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Datepicker,
    },
    data() {
      return {
        ajaxLoading: true,
        format: 'yyyy-MM-dd',
        loading: true,
        url: this.$store.state.host_url+'/product_price_change',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        isDisabled: true,
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        selected_date: "",
        trd: "tank_reading",
        ppv: "price_per_vol",
        qr: "quantity_received",
        prd: "pump_reading",
        rtt: "rtt",
        fsprd: "first_shift_pump_reading",
        ssprd: "second_shift_pump_reading",
        cc:"cash_collected",
        fscc: "first_shift_cash_collected",//0037116128
        sscc: "second_shift_cash_collected",
        station_pumps:[],
        station_tanks:[],
        final_stock_info: {},
        final_pump_info: {},
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        close_pump_reading : [],
        close_tank_reading : [],
      }
    },
    methods: {
      to_totalizer(){
        
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
  show_open_station_info(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        if (this.formstate2.$invalid) {
           store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'input error, please cross-check stock and totalizer readings', 'show_alert': true});
          return;
        } else {
          if(this.selected_date == ''){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Please select date to continue', 'show_alert': true});
          store.commit("activateLoader", "end");
          return;
            }
          store.commit("activateLoader", "start");
          this.selected_date = new Date(this.selected_date).toDateString();
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params = 'station_id='+this.preset.station_id+'&date='+this.selected_date; 
        axios.get(this.$store.state.host_url+"/stock-readings/by_station?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(stock_response => {
       if(stock_response.data.data.length == 0){
         store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No opened shift', 'show_alert': true});
                       this.show_setup_form= false;
                        store.commit("activateLoader", "end");   
       }else{
           this.station_tanks = stock_response.data.data;
            this.close_tank_reading = [];
            this.station_tanks.forEach(element => {
            this.close_tank_reading.push({'tank_code': element.tank_code,
            'tank_id': element.tank_id,'opening_reading': element.phy_shift_start_volume_reading, 
            'tank_id' : element.tank_id,'closing_reading': element.phy_shift_end_volume_reading,
            'reading_date': element.reading_date,
            'rtt':element.return_to_tank,'qty_received':element.end_delivery, 'status': 'Modified'});
          });
           
          ///pumps//
        let params = 'station_id='+this.preset.station_id+'&date='+this.selected_date; 
        axios.get(this.$store.state.host_url+"/pump-readings/by_station?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(pump_response => {
            this.station_pumps = pump_response.data.data;
            this.close_pump_reading = [];
            this.station_pumps.forEach(element => {   
            this.close_pump_reading.push({
            'pump_id': element.pump_id,'nozzle_code': element.nozzle_code, 
            'first_shift_reading' : element.shift_1_totalizer_reading , 
            'second_shift_reading' : element.shift_2_totalizer_reading , 
            'opening_reading': element.open_shift_totalizer_reading, 
            'closing_reading': element.close_shift_totalizer_reading,
            'cash_collected': element.cash_collected, 
            'first_shift_cash_collected': element.shift_1_cash_collected, 
            'second_shift_cash_collected': element.shift_2_cash_collected, 
            'ppv':element.ppv,
            'reading_date': element.reading_date,
            'status': 'Modified'});
            
          });
              store.commit("activateLoader", "end"); 
  
        })
        .catch(function(error) {
            store.commit("activateLoader", "end");   
          store.commit("catch_errors", error);
          });}
          
          });
        }},
     
        onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          this.$SmoothScroll(document.getElementById("content-header"));
          
          ////stock//
          this.final_stock_info.station_id= this.preset.station_id;
          this.final_stock_info.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_stock_info.last_modified_by = user_details.id;
          this.final_stock_info.readings = this.close_tank_reading;

          ////pumps///
          this.final_pump_info.station_id= this.preset.station_id;
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.last_modified_by = user_details.id;
          this.final_pump_info.readings = this.close_pump_reading;
          //console.log(this.final_stock_info);
          //console.log(this.final_pump_info);
          this.show_setup_form= false;
          axios.patch(this.$store.state.host_url+"/stock-readings", {'stocks': this.final_stock_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
              store.commit("activateLoader", "end");
              axios.patch(this.$store.state.host_url+"/pump-readings", {'pumps': this.final_pump_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
            }).then( response => {                        
                    let api_response = response.data;
                    if (api_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings Updated Successfully', 'show_alert': true});
                       this.formstate.$submitted=false;
                        this.close_pump_reading= {};
                        this.close_tank_reading= {};
                    }
                     store.commit("activateLoader", "end");
                  }).catch(error => { 
                  store.commit("activateLoader", "end");   
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
