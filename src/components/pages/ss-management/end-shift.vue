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
              <br>
              Enter Readings for the {{this.shift_batch}}
              <br>
              <b-card header-tag="h4" class="bg-info-card" header="End Sales Shift">
                <div class="row ">
                  <div class="col-lg-12">               
                    <b-tabs>
                       
                        <b-tab title="Totalizer Readings" >
                            <table class="table">
                              <thead>
                                <tr>
                               
                                  <th>Pump Nozzle Code</th>
                                  <th>Closing Totalizer Reading</th>
                                  <th>Confirm Closing Totalizer Reading</th>
                                  <th>Cash Collected</th>
                                  <th>Confirm Cash Collected</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in close_pump_reading">
                               
                                  <td>{{option.pump_nozzle_code}}</td>
                                  <td>
                  
                                    <validate tag="div">
                                      <input v-model="close_pump_reading[index].closing_reading" id="rd" :name="rd+index" type="number" required placeholder="Closing Reading" class="form-control" />
                                      <field-messages :name="rd+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Closing Reading is required</div>
                                      </field-messages>
                                    </validate>        
                                  </td>
                                  <td>
                                    <validate tag="div">
                                      <input v-model="close_pump_reading[index].c_closing_reading"  id="c_rd" :name="c_rd+index" type="number" required placeholder="Confirm Closing Reading" class="form-control" :sameas="close_pump_reading[index].closing_reading"/>
                                      <field-messages :name="c_rd+index" show="$invalid && $submitted" class="text-danger">
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
                                  </td>
                                  <td>
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
        set_date:"",
        show_multi_company: false,
        show_single_company: false,
        rd: "reading",
        c_rd: "confirm_reading",
        cc:"cash_collected",
        c_cc: "confirm_cash_collected",
        station_pumps:[],
        station_tanks:[],
        final_stock_info: {},
        final_pump_info: {},
        company_stations: "",
        shift_batch: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        close_pump_reading : [],
        close_tank_reading : [],
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
         show_open_station_info(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        if (this.formstate2.$invalid) {
          return;
        } else {store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let params = 'station_id='+this.preset.station_id; 
        axios.get(this.$store.state.host_url+"/pump-readings/by_station?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
       if(response.data.data.length == 0){
         store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No opened Shift', 'show_alert': true});
                       this.show_setup_form= false;
       }else{
         this.set_date = response.data.data[0].reading_date;
         if(response.data.data[0].shift_1_totalizer_reading == null){
           this.shift_batch="First Shift";
         }else if(response.data.data[0].shift_2_totalizer_reading == null){
           this.shift_batch="Second Shift";
         }else{
           store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Data already entered for two shifts', 'show_alert': true});
          this.show_setup_form= false;
          return;
         }
          let station_id= this.preset.station_id;

          axios.get(this.$store.state.host_url+"/pumps/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
                store.commit("activateLoader", "end");   
            this.station_pumps = response.data.data;
            this.close_pump_reading = [];
            this.close_pump_reading.reading_date= this.set_date;
            this.station_pumps.forEach(element => {
            this.close_pump_reading.push({'pump_id': element.id
            ,'pump_nozzle_code': element.pump_nozzle_code, 'closing_reading': '', 'c_closing_reading': ''
            , 'cash_collected':'', 'c_cash_collected': '', 'status': 'Shift End', 'reading_date':this.set_date});
          });
        })
        .catch(function(error) {
            store.commit("activateLoader", "end");   
            store.commit("catch_errors", error); 
          });
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
        console.log(tabledata_id);
      },
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.$SmoothScroll(document.getElementById("content-header"));
          
          ////pumps///
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_pump_info.station_id= this.preset.station_id;
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.created_by = user_details.id;
          this.final_pump_info.readings = this.close_pump_reading;
          this.final_pump_info.reading_date = this.set_date;
          this.final_pump_info.shift_batch = this.shift_batch;
          
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
                       this.formstate.$submitted=false;
                       this.close_pump_reading= {};
                    }
                  }).catch(error => { 
                    store.commit("activateLoader", "end");   
                    store.commit("catch_errors", error); 
                  if(error.response.status == 401){
                  this.$router.push('/login?message='+error.response.data.error);
                }
                console.log(error);
              });
            }
        store.commit("activateLoader", "end");
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
