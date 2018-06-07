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
            <hr>
          </div>
          
          <div class="col-md-12">
           
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              <br>
               <b>Date : {{this.set_date}}</b>
              
              <b-card header-tag="h4" class="bg-info-card" header="Close the Station">
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
                                      <input :value="close_tank_reading[index].opening_reading" readonly type="text"  class="form-control" />
                                  </td>
                                  <td>         
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].qty_received" id="qr" :name="qr+index" type="number" required placeholder="Quantity Recieved" class="form-control" />
                                      <field-messages :name="qr+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Quantity Recieved is required</div>
                                      </field-messages>
                                    </validate>        
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].c_qty_received"  id="c_qr" :name="c_qr+index" type="number" required placeholder="Confirm Quantity Recieved" class="form-control" :sameas="close_tank_reading[index].qty_received"/>
                                      <field-messages :name="c_qr+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Confirm Quantity Recieved is required</div>
                                          <div slot="sameas">Quantity Recieved should match</div>
                                      </field-messages>
                                    </validate>
                                  </td>
                                  <td>         
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].rtt" id="qr" :name="rtt+index" type="number" required placeholder="Return to Tank" class="form-control" />
                                      <field-messages :name="rtt+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Retun to Tank is required</div>
                                      </field-messages>
                                    </validate>        
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].c_rtt"  id="c_rtt" :name="c_rtt+index" type="number" required placeholder="Return to Tank" class="form-control" :sameas="close_tank_reading[index].rtt"/>
                                      <field-messages :name="c_rtt+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Confirm RTT Recieved is required</div>
                                          <div slot="sameas">RTT should match</div>
                                      </field-messages>
                                    </validate>
                                  </td>
                                  <td>
                  
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].closing_reading" id="rd" :name="trd+index" type="number" required placeholder="Closing Reading" class="form-control" />
                                      <field-messages :name="trd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Closing Reading is required</div>
                                      </field-messages>
                                    </validate>        
                                    <validate tag="div">
                                      <input v-model="close_tank_reading[index].c_closing_reading"  id="c_rd" :name="c_trd+index" type="number" required placeholder="Confirm Closing Reading" class="form-control" :sameas="close_tank_reading[index].closing_reading"/>
                                      <field-messages :name="c_trd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Confirm Closing Reading is required</div>
                                          <div slot="sameas">Closing and Confirm Closing Reading should match</div>
                                      </field-messages>
                                    </validate>
                                  </td>
                                </tr>
                              </tbody>
                            </table> 
                           
                        </b-tab>
                        <b-tab title="Totalizer Readings" >
                            <table class="table">
                              <thead>
                                <tr>
                                  
                                  <th>Pump Nozzle Code</th>
                                  <th>Opening Totalizer Reading</th>
                                  <th>Closing Totalizer Reading</th>
                                  <th>Cash Collected </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in close_pump_reading">
                                 
                                  <td>{{option.pump_nozzle_code}}</td>
                                  <td>     
                                      <input :value="close_pump_reading[index].opening_reading" readonly type="text"  class="form-control" />
                                  </td>
                                  <td>               
                                    <validate tag="div">
                                      <input v-model="close_pump_reading[index].closing_reading" id="rd" :name="prd+index" type="number" required placeholder="Closing Reading" class="form-control" />
                                      <field-messages :name="prd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Closing Reading is required</div>
                                      </field-messages>
                                    </validate>     
                                     <validate tag="div">
                                      <input v-model="close_pump_reading[index].c_closing_reading"  id="c_rd" :name="c_prd+index" type="number" required placeholder="Confirm Closing Reading" class="form-control" :sameas="close_pump_reading[index].closing_reading"/>
                                      <field-messages :name="c_prd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Confirm Closing Reading is required</div>
                                          <div slot="sameas">Closing and Confirm Closing Reading should match</div>
                                      </field-messages>
                                    </validate>   
                                  </td>
                                  <td>
                                    <validate tag="div">
                                      <input v-model="close_pump_reading[index].cash_collected" id="cc" :name="cc+index" type="number" required placeholder="Cash Collected" class="form-control" />
                                      <field-messages :name="cc+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Cash Collected is required</div>
                                      </field-messages>
                                    </validate>
                                    <validate tag="div">
                                      <input v-model="close_pump_reading[index].c_cash_collected"  id="c_rd"  :name="c_cc+index" type="number" required placeholder="Confirm Cash Collected" class="form-control" :sameas="close_pump_reading[index].cash_collected"/>
                                      <field-messages :name="c_cc+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Confirm Cash Collected is required</div>
                                          <div slot="sameas">Cash and Confirm  Collected should match</div>
                                      </field-messages>
                                    </validate>
                                  </td>

                  
                                </tr>
                              </tbody>
                            </table> 
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <input type="submit" value="UPLOAD READINGS" class="btn btn-success"></input>
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
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
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
        set_date:'',
        show_multi_company: false,
        show_single_company: false,
        trd: "tank_reading",
        c_trd: "confirm_tank_reading",
        qr: "quantity_received",
        c_qr: "confirm_quantity_received",
        prd: "pump_reading",
        rtt: "rtt",
        c_rtt: "c_rtt",
        c_prd: "confirm_pump_reading",
        cc:"cash_collected",
        c_cc: "confirm_cash_collected",//0037116128
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
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params = 'station_id='+this.preset.station_id; 
        axios.get(this.$store.state.host_url+"/stock-readings/by_station?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(stock_response => {
         
       if(stock_response.data.data.length == 0){
             store.commit("activateLoader", "end");
         store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No opened Shift', 'show_alert': true});
                       this.show_setup_form= false;
       }else{
         if(stock_response.data.data[0]['phy_shift_end_volume_reading'] != null){
           store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Station already closed for the last input date', 'show_alert': true});
                       this.show_setup_form= false;
                       store.commit("activateLoader", "end");
         }else{
           ///date///
         
         this.set_date = stock_response.data.data[0].reading_date;

           this.station_tanks = stock_response.data.data;
            this.close_tank_reading = [];
            this.station_tanks.forEach(element => {
            this.close_tank_reading.push({'tank_code': element.tank_code,'tank_id': element.tank_id,
            'opening_reading': element.phy_shift_start_volume_reading, 'tank_id' : element.tank_id,
            'closing_reading': '', 'c_closing_reading': '','rtt':'','qty_recieved':'',
            'c_rtt':'','c_qty_recieved':'', 'status': 'Closed'});
          });
           
          ///pumps//
          let params = 'station_id='+this.preset.station_id; 
        axios.get(this.$store.state.host_url+"/pump-readings/by_station?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(pump_response => {
                store.commit("activateLoader", "end");
            this.station_pumps = pump_response.data.data;
            this.close_pump_reading = [];
            this.station_pumps.forEach(element => {
              if(element.shift_2_totalizer_reading != null){
            this.close_pump_reading.push({'pump_id': element.pump_id,
            'pump_nozzle_code': element.nozzle_code, 'opening_reading' : element.shift_2_totalizer_reading , 
            'closing_reading': '', 'c_closing_reading': '', 'status': 'Closed'});
            }
             else if(element.shift_1_totalizer_reading != null){
            this.close_pump_reading.push({'pump_id': element.pump_id,
            'pump_nozzle_code': element.nozzle_code, 'opening_reading' : element.shift_1_totalizer_reading , 
            'closing_reading': '', 'c_closing_reading': '', 'status': 'Closed'});
            }else{
              this.close_pump_reading.push({'pump_id': element.pump_id,
            'pump_nozzle_code': element.nozzle_code,'opening_reading' : element.open_shift_totalizer_reading  , 
            'closing_reading': '', 'c_closing_reading': '', 'status': 'Closed'});
            }
          });
         // //console.log(this.close_tank_reading);
  
        })
        .catch(function(error) {
         store.commit("activateLoader", "end");   
          store.commit("catch_errors", error);
          });}
       }
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
        //console.log(tabledata_id);
      },
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
          
        if (this.formstate.$invalid) {
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'input error, please cross-check stock and totalizer readings', 'show_alert': true});
          return;
        } else {
          store.commit("activateLoader", "start");
          
          ////stock//
          this.final_stock_info.station_id= this.preset.station_id;
          this.final_stock_info.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_stock_info.created_by = user_details.id;
          this.final_stock_info.readings = this.close_tank_reading;
          this.final_stock_info.reading_date = this.set_date;
          ////pumps///
          this.final_pump_info.station_id= this.preset.station_id;
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.created_by = user_details.id;
          this.final_pump_info.readings = this.close_pump_reading;
          this.final_pump_info.reading_date = this.set_date;
          
          axios.patch(this.$store.state.host_url+"/stock-readings", {'stocks': this.final_stock_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         store.commit("activateLoader", "end");
              axios.patch(this.$store.state.host_url+"/pump-readings", {'pumps': this.final_pump_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
            }).then( response => {                         
              store.commit("activateLoader", "end");
                    let station_response = response.data;
                    if (station_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings updated', 'show_alert': true});
                       this.formstate.$submitted=false;
                        this.close_pump_reading= {};
                        this.close_tank_reading= {};
                    }
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
