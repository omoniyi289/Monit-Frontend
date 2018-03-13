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
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <button value="NEXT" class="btn btn-success" v-on:click ="to_totalizer">NEXT</button>
                              </div>
                            </div>
                        </b-tab>
                        <b-tab title="Totalizer Readings" >
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Pump Number</th>
                                  <th>Opening Totalizer Reading</th>
                                  <th>Confirm Opening Totalizer Reading</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in open_pump_reading">
                                  <th>{{option.pump_number}}</th>
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
        this.$store.state.show_alert = false;
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          ///get products///
          //let params = {};
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params = 'station_id='+this.preset.station_id; 
        axios.get("http://127.0.0.1:8000/api/v1/stock-readings/by_station?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
              console.log(response);
       if(response.data.data.length > 0){
         store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Readings already exist for today', 'show_alert': true});
                       this.show_setup_form= false;
       }else{
          let station_id= this.preset.station_id;
          axios.get("http://127.0.0.1:8000/api/v1/pumps/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            this.station_pumps = response.data.data;
            this.open_pump_reading = [];
            //if(){
            this.show_setup_form= true;
            this.station_pumps.forEach(element => {
            this.open_pump_reading.push({'pump_number': element.number,'pump_id': element.id,
            'nozzle_code': element.nozzle_code, 'opening_reading': '', 'c_opening_reading': '' , 'status': 'Opened'});
          });
            ///  }
            axios.get("http://127.0.0.1:8000/api/v1/tanks/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            this.station_tanks = response.data.data;
            this.open_tank_reading = [];
            this.station_tanks.forEach(element => {
            this.open_tank_reading.push({'tank_code': element.code, 'tank_id' : element.id,'opening_reading': '', 'c_opening_reading': '', 'status': 'Opened'});
          });
         // console.log(this.open_tank_reading);
          
                  });
        })
        .catch(function(error) {
              if(error.response.status == 401){
              this.$router.push('/login?message='+error.response.data.error);
            }
          });
          }});
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
          this.final_stock_info.readings = this.open_tank_reading;

          ////pumps///
          this.final_pump_info.station_id= this.preset.station_id;
          this.final_pump_info.company_id= this.preset.company_id;
          this.final_pump_info.created_by = user_details.id;
          this.final_pump_info.readings = this.open_pump_reading;

          axios.post("http://127.0.0.1:8000/api/v1/stock-readings", {'stocks': this.final_stock_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
              axios.post("http://127.0.0.1:8000/api/v1/pump-readings", {'pumps': this.final_pump_info}, {
                headers : {
                  "Authorization" : "Bearer " + user_details.token
                }
              }).then( response => {
                    let station_response = response.data;
                    if (station_response.status === true) {
                      store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Readings saved', 'show_alert': true});
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
