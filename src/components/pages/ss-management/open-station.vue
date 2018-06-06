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
              
              <b-card header-tag="h4" class="bg-info-card" header="Open the Station">
                <div class="row ">
                  <div class="col-lg-12">               
                    <b-tabs>
                        <b-tab title="Stock Readings" >
                           <table class="table">
                              <thead>
                                <tr>
                                  <th>Tank Name</th>
                                  <th>Opening Volume Reading</th>
                                  <th>Confirm Opening Volume Reading</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for ="(option, index) in open_tank_reading">
                                  <th>{{option.tank_code}}</th>
                                  <td>
                  
                                    <validate tag="div">
                                      <input v-model="open_tank_reading[index].opening_reading" id="rd" :name="trd+index" type="number" required placeholder="Opening Reading" class="form-control" />
                                      <field-messages :name="trd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Opening Reading is required</div>
                                      </field-messages>
                                    </validate>        
                                  </td>
                                  <td>
                                    <validate tag="div">
                                      <input v-model="open_tank_reading[index].c_opening_reading"  id="c_rd" :name="c_trd+index" type="number" required placeholder="Confirm Opening Reading" class="form-control" :sameas="open_tank_reading[index].opening_reading"/>
                                      <field-messages :name="c_trd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Confirm Opening Reading is required</div>
                                          <div slot="sameas">Opening and Confirm Opening Reading should match</div>
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
                                  <th>Confirm Opening Totalizer Reading</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in open_pump_reading">
                                  <th>{{option.pump_nozzle_code}}</th>
                                  <td>
                  
                                    <validate tag="div">
                                      <input v-model="open_pump_reading[index].opening_reading" id="rd" :name="prd+index" type="number" required placeholder="Opening Reading" class="form-control" />
                                      <field-messages :name="prd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Opening Reading is required</div>
                                      </field-messages>
                                    </validate>        
                                  </td>
                                  <td>
                                    <validate tag="div">
                                      <input v-model="open_pump_reading[index].c_opening_reading"  id="c_rd" :name="c_prd+index" type="number" required placeholder="Confirm Opening Reading" class="form-control" :sameas="open_pump_reading[index].opening_reading"/>
                                      <field-messages :name="c_prd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Confirm Opening Reading is required</div>
                                          <div slot="sameas">Opening and Confirm Opening Reading should match</div>
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
  import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     
  import vueSmoothScroll from 'vue-smoothscroll';     
  Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  import moment from 'moment';
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
        set_date: "",
        show_multi_company: false,
        show_single_company: false,
        trd: "tank_reading",
        c_trd: "confirm_tank_reading",
        prd: "pump_reading",
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
        open_pump_reading : [],
        open_tank_reading : [],
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
        this.$store.state.show_alert = false;
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params = 'station_id='+this.preset.station_id; 
        axios.get(this.$store.state.host_url+"/stock-readings/by_station?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
       if(response.data.data.length > 0){
         ///station has data
         let last_transaction = response.data.data[0];
         if(last_transaction.phy_shift_start_volume_reading > 0 && last_transaction.phy_shift_end_volume_reading == null){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                      'alert_message': 'Oops! please close previous day readings to proceed', 'show_alert': true});
          store.commit("activateLoader", "end");
          return;
         }
         var d_date = new Date(last_transaction.reading_date);
         d_date.setDate(d_date.getDate() + 1);
         this.set_date = moment(d_date).format('YYYY-MM-DD HH:mm:ss');
         }else{
           ///new station
           var new_date = new Date();
           this.set_date = moment(new_date.setDate(new_date.getDate()-1)).format('YYYY-MM-DD HH:mm:ss');
           store.commit("showAlertBox", {'alert_type': 'alert-warning',
                      'alert_message': 'new station alert! make sure you have pumps and tanks configured before proceeding', 'show_alert': true});
         this.show_setup_form= true;  
         }
         ///check if next date is tomorrow
         
         if(response.data.data.length > 0 && response.data.data[0].reading_date.includes(moment(new Date()).format('YYYY-MM-DD'))){
        
           store.commit("showAlertBox", {'alert_type': 'alert-danger',
                      'alert_message': 'Readings already exist for today', 'show_alert': true});
            this.show_setup_form= false;  
             store.commit("activateLoader", "end");
         return;
         }
         this.show_setup_form= true;    
         let station_id= this.preset.station_id;
          axios.get(this.$store.state.host_url+"/pumps/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            this.station_pumps = response.data.data;
            this.open_pump_reading = [];
            //if(){
            this.show_setup_form= true;
            this.station_pumps.forEach(element => {
            this.open_pump_reading.push({'pump_nozzle_code': element.pump_nozzle_code,'pump_id': element.id,
           'opening_reading': '', 'c_opening_reading': '' , 'status': 'Opened', 'product': element.product.code});
          });
            ///  }
            axios.get(this.$store.state.host_url+"/tanks/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            this.station_tanks = response.data.data;
            this.open_tank_reading = [];
            this.station_tanks.forEach(element => {
            this.open_tank_reading.push({'tank_code': element.code, 'tank_id' : element.id,'opening_reading': '', 'c_opening_reading': ''
            , 'status': 'Opened', 'product': element.product.code});
          });
            store.commit("activateLoader", "end"); 
          
                  });
        })
        .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });
          });  
        }},
     
     
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
          this.final_stock_info.readings = this.open_tank_reading;
          this.final_stock_info.reading_date = this.set_date;
          ////pumps///
          this.final_pump_info.station_id= this.preset.station_id;
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.created_by = user_details.id;
          this.final_pump_info.reading_date = this.set_date;
          this.final_pump_info.readings = this.open_pump_reading;

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
                store.commit("activateLoader", "end");
                    let station_response = response.data;
                    if (station_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings Saved Successfully', 'show_alert': true});
                       this.formstate.$submitted=false;
                        this.open_pump_reading= {};
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
