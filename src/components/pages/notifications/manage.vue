<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate" @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-lg-6">
                  <div class="col-lg-12">
                  <div class="form-group" v-if="show_multi_company">
                    <validate tag="div">
                      Select Company
                      <select  name="company"  size="1" class="form-control" v-on:change="load_company_notifications(preset.company_id)" v-model="preset.company_id" >
                          <option
                            v-for="(option, index) in available_companies"
                            v-bind:value="option.id"
                            >{{ option.name }}
                          </option>                       
                      </select>                     
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>

                  <div class="form-group" v-if="show_single_company">
                    <validate tag="div">
                      Select Company
                      <select  name="company" size="1" class="form-control" v-on:change="load_company_notifications(preset.company_id)" v-model="preset.company_id" >
                        <option :value="available_company.id"
                          >{{ available_company.name }}
                        </option>
                        
                      </select>
                      
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                </div>

              <div class="col-lg-6">
              </div>
              <div class="col-lg-12">
                <hr>
              </div>
              
              <div class="col-lg-6" v-if='show_setup_form'>
                
                <div class="col-sm-12">
                    <div class="form-group">
                      <b-card  header="Notifications Settings (Beta)" header-tag="h4" class="bg-info-card ">            
                          <div class="col-sm-12 row" v-if='has_WORe'>
                            <div class="col-sm-6 ">
                              <div class="form-group">
                                  <label for="number"> Weekly Station Operations Report </label>
                              </div>
                            </div>
                            <div class="col-sm-6">
                              <div class="form-group">
                                  Colation Day of the week
                                  <select id="weekday" name="weekday" size="1" class="form-control" v-model="weekly_stations_operations_report.notification_weekday" required >

                                        <option
                                          v-for="option in weekdays"
                                          v-bind:value="option.name"
                                          :selected="option.name == weekly_stations_operations_report.notification_weekday" >{{ option.name }}
                                        </option>

                                  </select>
                              </div>
                            </div>

                            <div class="col-sm-3 " v-if='false'>
                              <div class="form-group">
                                  Colation Day Time
                                  <select id="daytime" name="daytime" size="1" class="form-control" v-model="weekly_stations_operations_report.notification_daytime" required >

                                        <option
                                          v-for="option in daytimes"
                                          v-bind:value="option.name"
                                           >{{ option.name }}
                                        </option>

                                  </select>
                              </div>
                            </div>


                    
                          </div>

                          <div class="col-sm-12 row" v-if='has_SLTR'>
                            <div class="col-sm-6 ">
                              <div class="form-group">
                                  <label for="number">Station League Table Report </label>
                              </div>
                            </div>
                           
                            <div class="col-sm-6">
                              <div class="form-group">
                                  Colation Day Time
                                  <select id="daytime" name="daytime" size="1" class="form-control" v-model="station_league_table_report.notification_daytime" required >

                                        <option
                                          v-for="option in daytimes"
                                          v-bind:value="option.name"
                                           >{{ option.name }}
                                        </option>

                                  </select>
                              </div>
                            </div>


                    
                          </div>

                          

              
                       </b-card>
                       
                    </div>
                </div>


                
                <div class="col-sm-12">
                  <div class="form-group form-inline">
                    <input type="submit" :value="company_notification.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
            
              <datatable title="Company Notifications based on Subscription" :rows="tableData" :columns="columndata">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <i class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)"></i>
                      <i class='fa fa-trash text-danger' @click="onAction('delete', props.rowData, props.rowIndex)"></i>
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
  import Vue from 'vue'; import store from 'src/store/store.js';
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";    
  import vueSmoothScroll from 'vue-smoothscroll'; 
  Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import Multiselect from 'vue-multiselect';
  Vue.use(VueForm, options);
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Multiselect,
    },
    data() {
      return {columndata: [{
          label: '',
          field: '',
          numeric: false,
          html: false,
          sortable: false,
        }
        , {
          label: 'Notificaton Name',
          field: 'name',
          numeric: true,
          html: true,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/notification_settings',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        show_selector: true,
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        available_roles: "",
        station_pumps:"",
        has_WORe: false,
        has_SLTR: false,
        button_text: "ADD A NEW USER",
        fill_form: false,
        company_stations: "",
        company_stations_null: "",
        company_notifications_null: "",
        company_notifications: [],
        preset : {
          company_id: "",
          station_id: ""
        },
          phone_number: "",
          selected_stations : [],
          email: "",
          username: "",
          fullname: "",
          role_id: 0,

        company_notification : {
          company_id: "",
          submit_mode: 'SAVE CHANGES',
        },
        weekly_stations_operations_report:[],
        station_league_table_report:[],
        weekdays:[{'name': 'Monday'}, {'name': 'Tuesday'}, 
                  {'name': 'Wednesday'}, {'name': 'Thursday'},
                  {'name': 'Friday'}, {'name': 'Saturday'}, {'name': 'Sunday'}],
        daytimes:[{'name': '12:00 AM'}, {'name': '01:00 AM'},
                  {'name': '02:00 AM'}, {'name': '03:00 AM'},
                  {'name': '04:00 AM'}, {'name': '05:00 AM'},
                  {'name': '06:00 AM'}, {'name': '07:00 AM'},
                  {'name': '08:00 AM'}, {'name': '09:00 AM'},
                  {'name': '10:00 AM'}, {'name': '11:00 AM'},

                  {'name': '12:00 PM'}, {'name': '01:00 PM'},
                  {'name': '02:00 PM'}, {'name': '03:00 PM'},
                  {'name': '04:00 PM'}, {'name': '05:00 PM'},
                  {'name': '06:00 PM'}, {'name': '07:00 PM'},
                  {'name': '08:00 PM'}, {'name': '09:00 PM'},
                  {'name': '10:00 PM'}, {'name': '11:00 PM'} ]


      }
    },
    methods: {
       load_company_notifications(company_id){
      store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params= 'company_id='+this.preset.company_id;
        this.tableData=[];
        axios.get(this.$store.state.host_url+"/company_notifications?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }}).then(response => {
              store.commit("activateLoader", "end");
              this.show_setup_form = true;
              this.weekly_stations_operations_report=[];
              this.station_league_table_report=[];
              this.has_SLTR = false;
              this.has_WORe = false;

              response.data.data.forEach(item => {
                this.tableData.push(item.notification);
                 if(item['notification_UI_Slug'] == 'WORe'){
                           this.has_WORe= true;
                           this.weekly_stations_operations_report.notification_weekday = item['notification_weekday'];
                     } 
                 if(item['notification_UI_Slug'] == 'SLTR'){
                           this.has_SLTR = true;
                           this.station_league_table_report.notification_daytime = item['notification_daytime'];
              
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
     },
     onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        } 
         else {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          //for users whose phone number isnt avaialable yet          
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let notification_settings = Array();
          notification_settings.push({'company_id': this.preset.company_id, 'notification_name': 'Weekly Station Operations Report', 'notification_UI_slug': 'WORe', 'notification_weekday': this.weekly_stations_operations_report.notification_weekday});

          notification_settings.push({'company_id': this.preset.company_id, 'notification_name': 'Station League Table Report', 'notification_UI_slug': 'SLTR', 'notification_daytime': this.station_league_table_report.notification_daytime});

          let settings_detail = {
            notification_settings: notification_settings
          };
          if(this.company_notification.submit_mode == 'SAVE CHANGES'){
          axios.post(this.url, settings_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let api_response = response.data;
          if (api_response.status === true) {
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                         'alert_message': 'Changes Saved Successfully', 'show_alert': true});
              this.formstate.$submitted=false;
              this.company_notification= {submit_mode: "SAVE CHANGES"};
          }
        }).catch(error => { 
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        })}
      }},
      
        form_reset(){
          this.company_notification = {
          company_id: "",
          station_id: "",
          phone_number: "",
          selected_stations : [],
          email: "",
          username: "",
          fullname: "",
          role_id: 0,
          privilege: "",
          submit_mode: 'SAVE CHANGES',
        }
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .form-control{
    transition: initial;
  }
</style>
