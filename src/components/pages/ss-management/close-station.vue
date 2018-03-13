<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate2" @submit.prevent="show_open_station_info">
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
          
          <div class="col-md-12">
           
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              <br>
               <b>Date : {{new Date().toDateString()}}</b>
              
              <b-card header-tag="h4" class="bg-info-card" header="Open the Station">
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
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <button type="submit" value="NEXT" class="btn btn-success" v-on:click ="to_totalizer">NEXT</button>
                              </div>
                            </div>
                        </b-tab>
                        <b-tab title="Totalizer Readings" >
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Pump Number</th>
                                  <th>Dispenser</th>
                                  <th>Opening Totalizer Reading</th>
                                  <th>Closing Totalizer Reading</th>
                                  <th>Cash Collected </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in close_pump_reading">
                                  <th>{{option.pump_number}}</th>
                                  <td>{{option.nozzle_code}}</td>
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
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import VueForm from "vue-form";
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable
    },
    data() {
      return {
        ajaxLoading: true,
        loading: true,
        url: 'http://127.0.0.1:8000/api/v1/product_price_change',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
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
      })
      .catch(function(error) {
          if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
        });
      },
      show_open_station_info(){
        if (this.formstate2.$invalid) {
          return;
        } else {
           store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params = 'station_id='+this.preset.station_id; 
        axios.get("http://127.0.0.1:8000/api/v1/stock-readings/by_station?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(stock_response => {
              console.log(stock_response);
       if(stock_response.data.data.length == 0){
         store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No opened Shift', 'show_alert': true});
                       this.show_setup_form= false;
       }else{
           this.station_tanks = stock_response.data.data;
            this.close_tank_reading = [];
            this.station_tanks.forEach(element => {
            this.close_tank_reading.push({'tank_code': element.tank_code,'tank_id': element.tank_id,'opening_reading': element.phy_shift_start_volume_reading, 'tank_id' : element.tank_id,'closing_reading': '', 'c_closing_reading': ''});
          });
           
          ///pumps//
          let params = 'station_id='+this.preset.station_id; 
        axios.get("http://127.0.0.1:8000/api/v1/pump-readings/by_station?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(pump_response => {
   
            this.station_pumps = pump_response.data.data;
            this.close_pump_reading = [];
            this.station_pumps.forEach(element => {
              if(element.shift_1_totalizer_reading != null){
            this.close_pump_reading.push({'pump_number': element.pump_number,'pump_id': element.pump_id,
            'nozzle_code': element.nozzle_code,'rtt':'','qty_recieved':'','c_rtt':'','c_qty_recieved':'', 'opening_reading' : element.shift_1_totalizer_reading , 
            'closing_reading': '', 'c_closing_reading': '', 'status': 'Closed'});
            }else{
              this.close_pump_reading.push({'pump_number': element.pump_number,'pump_id': element.pump_id,
            'nozzle_code': element.nozzle_code,'rtt':'','qty_recieved':'','c_rtt':'','c_qty_recieved':'','opening_reading' : element.open_shift_totalizer_reading  , 
            'closing_reading': '', 'c_closing_reading': '', 'status': 'Closed'});
            }
          });
         // console.log(this.close_tank_reading);
  
        })
        .catch(function(error) {
              if(error.response.status == 401){
              this.$router.push('/login?message='+error.response.data.error);
            }
          });}
          
          });
          store.commit("activateLoader", "end");
        }},
      show_available_companies(){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get("http://127.0.0.1:8000/api/v1/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        this.available_companies = response.data.data;
        ///get products///
        axios.get("http://127.0.0.1:8000/api/v1/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        this.products = response.data.data;
      });
      })
      .catch(error => {
          if(error.response.status == 401){
          this.$router.push('/login?message='+error.response.data.error);
        }
      });
      store.commit("activateLoader", "end");
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
          ////stock//
          this.final_stock_info.station_id= this.preset.station_id;
          this.final_stock_info.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_stock_info.created_by = user_details.id;
          this.final_stock_info.readings = this.close_tank_reading;

          ////pumps///
          this.final_pump_info.station_id= this.preset.station_id;
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.created_by = user_details.id;
          this.final_pump_info.readings = this.close_pump_reading;

          axios.patch("http://127.0.0.1:8000/api/v1/stock-readings", {'stocks': this.final_stock_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
              axios.patch("http://127.0.0.1:8000/api/v1/pump-readings", {'pumps': this.final_pump_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
            }).then( response => {
                    let station_response = response.data;
                    if (station_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings updated', 'show_alert': true});
                    }
                  }).catch(error => {
                  if(error.response.status == 401){
                  this.$router.push('/login?message='+error.response.data.error);
                }
                console.log(error);
              });
        }).catch(error => {
            if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
          console.log(error);
        })}
        store.commit("activateLoader", "end");
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
