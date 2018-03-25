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
                
                 
                <div class="col-lg-4">
                    <datepicker :format="format" v-model="selected_date"  placeholder="Select Date"></datepicker>
                    <br>
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
           
            <vue-form :state="formstate" @submit.prevent="onSubmit" >
               <input readonly type="text"  :value="selected_date" placeholder=""/>
              
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
                                  <th>Pump Number</th>
                                  <th>Dispenser</th>
                                  <th>Opening Totalizer Reading</th>
                                  <th>First Shift Reading</th>
                                  <th>Closing Totalizer Reading</th>
                                   <th>PPV </th>
                                  <th>First Shift Cash Collected</th>
                                  <th>Closing Cash Collected </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in close_pump_reading">
                                  <th>{{option.pump_number}}</th>
                                  <td>{{option.nozzle_code}}</td>
                                  <td>     
                                      <input v-model="close_pump_reading[index].opening_reading" :disabled="isDisabled" type="number"  class="form-control" />
                                  </td>
                                  <td>               
                                
                                      <input v-model="close_pump_reading[index].first_shift_reading" id="rd" :disabled="isDisabled" :name="fsprd+index" type="number"  placeholder="" class="form-control" />
                  
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
                                      <input v-model="close_pump_reading[index].cash_collected" id="cc" :disabled="isDisabled" :name="cc+index" type="number"  placeholder="" class="form-control" />
                                   
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
  import Datepicker from 'vuejs-datepicker';
  import Vue from 'vue';
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,
      Datepicker,
    },
    data() {
      return {
        ajaxLoading: true,
        format: 'yyyy-MM-d',
        loading: true,
        url: this.$store.state.host_url+'/product_price_change',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        isDisabled: true,
        available_companies: "",
        products: "",
        selected_date: "",
        trd: "tank_reading",
        ppv: "price_per_vol",
        qr: "quantity_received",
        prd: "pump_reading",
        rtt: "rtt",
        fsprd: "first_shift_pump_reading",
        cc:"cash_collected",
        fscc: "first_shift_cash_collected",//0037116128
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
      show_open_station_info(){
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.selected_date = new Date(this.selected_date).toDateString();
           store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params = 'station_id='+this.preset.station_id+'&date='+this.selected_date; 
        axios.get(this.$store.state.host_url+"/stock-readings/by_station?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(stock_response => {
              store.commit("activateLoader", "end");   
       if(stock_response.data.data.length == 0){
         store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No opened Shift', 'show_alert': true});
                       this.show_setup_form= false;
       }else{
           this.station_tanks = stock_response.data.data;
            this.close_tank_reading = [];
            this.station_tanks.forEach(element => {
            this.close_tank_reading.push({'tank_code': element.tank_code,
            'tank_id': element.tank_id,'opening_reading': element.phy_shift_start_volume_reading, 
            'tank_id' : element.tank_id,'closing_reading': element.phy_shift_end_volume_reading,
            'created_at': element.created_at,
            'rtt':element.return_to_tank,'qty_received':element.end_delivery, 'status': 'Modified'});
          });
           
          ///pumps//
        let params = 'station_id='+this.preset.station_id+'&date='+this.selected_date; 
        axios.get(this.$store.state.host_url+"/pump-readings/by_station?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(pump_response => {
              store.commit("activateLoader", "end");   
            this.station_pumps = pump_response.data.data;
            this.close_pump_reading = [];
            this.station_pumps.forEach(element => {
            
            this.close_pump_reading.push({'pump_number': element.pump_number,
            'pump_id': element.pump_id,'nozzle_code': element.nozzle_code, 
            'first_shift_reading' : element.shift_1_totalizer_reading , 
            'opening_reading': element.open_shift_totalizer_reading, 
            'closing_reading': element.close_shift_totalizer_reading,
            'cash_collected': element.cash_collected, 
            'first_shift_cash_collected': element.shift_1_cash_collected, 
            'ppv':element.ppv,
            'created_at': element.created_at,
            'status': 'Modified'});
            
          });
  
        })
        .catch(function(error) {
            store.commit("activateLoader", "end");   
          store.commit("catch_errors", error);
          });}
          
          });
        }},
      show_available_companies(){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        store.commit("activateLoader", "end");   
        this.available_companies = response.data.data;
        ///get products///
        axios.get(this.$store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        this.products = response.data.data;
      });
      })
      .catch(error => {
       store.commit("activateLoader", "end");   
          store.commit("catch_errors", error);
      });
      }
      ,
        onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
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
          console.log(this.final_stock_info);
          console.log(this.final_pump_info);
          axios.patch(this.$store.state.host_url+"/stock-readings", {'stocks': this.final_stock_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {                         
              store.commit("activateLoader", "end");
              axios.patch(this.$store.state.host_url+"/pump-readings", {'pumps': this.final_pump_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
            }).then( response => {                        
              store.commit("activateLoader", "end");
                    let station_response = response.data;
                    if (station_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings updated', 'show_alert': true});
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
