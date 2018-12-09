<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate" @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-lg-5">
                  <div class="form-group" v-if="show_multi_company">
                    <validate tag="div">
                      Select Company
                      <select  name="company"  size="1" class="form-control" v-on:change="show_company_customers(preset.company_id)" v-model="preset.company_id" >
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
                      <select  name="company" size="1" class="form-control" v-on:change="show_company_customers(preset.company_id)" v-model="preset.company_id" >
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
              <div class="col-sm-12" >
                 <hr>
              </div>

              <div class="col-lg-5" v-if="show_customer_pane">
                  <div class="form-group" >
                    <validate tag="div">
                      Select Customer
                      <select  name="company"  size="1" class="form-control" v-on:change="show_customer_creditlimit_history(model.selected_customer)" v-model="model.selected_customer" >
                          <option
                            v-for="(option, index) in company_customers"
                            v-bind:value="option"
                            >{{ option.name }}
                          </option>                       
                      </select>                     
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Customer Selection is required</div>
                      </field-messages>
                    </validate>
                  </div>

                </div>
              <div class="col-sm-12" v-if="show_customer_pane">
                 <hr>
              </div>

              <div class="col-sm-8 col-md-offset-3" v-show="show_setup_form && fill_form" >
                <div class="col-sm-8">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="requested_creditlimit"> New Credit Limit </label>
                      <input v-model="model.requested_creditlimit" name="requested_creditlimit" type="number" min="0" required autofocus placeholder="New Credit Limit" class="form-control" id="requested_creditlimit"/>
                      <field-messages name="requested_creditlimit" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">New Credit Limit</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-8">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="c_requested_creditlimit">Confirm New Credit Limit </label>
                      <input v-model="model.c_requested_creditlimit" name="c_requested_creditlimit" type="number" min="0" required autofocus placeholder="New Credit Limit" class="form-control" id="c_requested_creditlimit"/>
                      <field-messages name="c_requested_creditlimit" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">New Credit Limit</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                
                <div class="col-sm-5">
                  <div class="form-group float-right">
                    <input type="submit" :value="model.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>
              </div>
            </vue-form>

            <div class="col-sm-8 col-md-offset-3" v-show="show_setup_form && fill_form_2" >
                <div class="col-sm-8">
                  <div class="form-group">
                      <label for="requested_creditlimit">Request Credit Limit </label>
                      <input readonly v-model="model_2.requested_creditlimit" name="requested_creditlimit" type="number" min="0" required autofocus placeholder="Request Credit Limit" class="form-control" id="requested_creditlimit"/>
                      
                  </div>
                </div>

                <div class="col-sm-8">
                  <div class="form-group">
                      <label for="status">Credit Limit Status</label>
                            <select id="status" name="status" class="form-control" v-model="model_2.status" required >
                                    <option value="Pending">Pending</option>
                                    <option value="Approved">Approved</option>
                                    <option value="Disapproved">Disapproved</option>
                                                
                              </select>
                         
                    </div>
                  </div>


                
                <div class="col-sm-5">
                  <div class="form-group float-right">
                    <input type="submit" :value="model_2.submit_mode" @click="onCreditLimitUpdate" class="btn btn-success" />
                  </div>
                </div>
              </div>
            <br>
            <br>
          </div>

          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
              <div>
                <span v-on:click="button_toggle" style=" margin-bottom: 10px" class="toggle btn btn-info ">{{this.button_text}}</span>             
              </div>
              <datatable title="Credit Limit Change Log" :rows="tableData" :columns="columndata">
                  <template slot="actions" slot-scope="props">
                    <div >
                       <i style="cursor: pointer" class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)">UPDATE STATUS</i> 
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
  import Datepicker from 'vuejs-datepicker';

  Vue.use(VueForm, options);
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Multiselect,
      Datepicker
    },
    data() {
      return {columndata: [
        {
          label: 'Request Date',
          field: 'created_at',
          numeric: false,
          html: false,
        },
        {
          label: 'Approval Status',
          field: 'status',
          numeric: true,
          html: true,
        }, {
          label: 'Current Credit Limit',
          field: 'current_creditlimit',
          numeric: true,
          html: true,
        }
        , {
          label: 'Requested Credit Limit',
          field: 'requested_creditlimit',
          numeric: true,
          html: true,
        }
       ,{
            field: '__slot:actions',
            label: 'Actions',
        }
        
        , {
          label: 'Credit Limit Uploaded By',
          field: 'limit_requested_by',
          numeric: true,
          html: true,
        } , {
          label: 'Credit Limit Validated By',
          field: 'limit_approved_by',
          numeric: true,
          html: true,
        },{
          label: 'Last Updated At',
          field: 'updated_at',
          numeric: true,
          html: true,
        }],
        
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/velox_manage_creditlimits',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        show_selector: true,
        available_companies: [],
        available_company: [],
        show_customer_pane: "",
        show_multi_company: false,
        show_single_company: false,
        available_roles: "",
        station_pumps:"",
        format: 'yyyy-MM-dd',
        selected_date:'',
        button_text: "ADD A NEW CREDIT LIMIT",
        fill_form: false,
        fill_form_2: false,
        company_customers: [],
        preset : {
          company_id: "",
        },
        model : {
          submit_mode: 'UPLOAD CREDIT LIMIT',
        },
         model_2 : {
          submit_mode: 'UPDATE CREDIT LIMIT STATUS',
        }

      }
    },
    methods: {
       button_toggle(){
        this.fill_form = !this.fill_form;
        this.fill_form_2 = false;
        if(this.button_text == "ADD A NEW CREDIT LIMIT"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "ADD A NEW CREDIT LIMIT";
        }
      },
      show_company_customers(company_id){
        store.commit("activateLoader", "start");
        this.model = {
          submit_mode: 'UPLOAD CREDIT LIMIT'
        };
        this.company_customers = [];
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params='vendor_id='+company_id+'&status=In Partnership';
        axios.get(this.$store.state.host_url+"/velox_customer_accounts?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
                    this.company_customers = response.data.data; 
                    store.commit("activateLoader", "end");
                    this.show_customer_pane=true;


            ////console.log(this.tableData);     
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },
    show_customer_creditlimit_history(selected_customer){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params='customer_id='+selected_customer.company_id+'&vendor_id='+this.preset.company_id;
        axios.get(this.$store.state.host_url+"/velox_manage_creditlimits?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
                     let result = response.data.data;
                    this.sort_data(result);
                    store.commit("activateLoader", "end");
                    this.show_setup_form=true;


            ////console.log(this.tableData);     
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },

    sort_data(result){
        this.tableData = [];
        result.forEach(item => {
          this.tableData.push(item);
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

    onAction (action, data, index) {
        this.$SmoothScroll(document.getElementById("content-header"));
        this.show_selector = false;
        if(action == 'edit'){
          if(data.status == 'Approved' || data.status == 'Disapproved')
           {
              store.commit("showAlertBox", {'alert_type': 'alert-danger',
                         'alert_message': 'Oops! Credit Limit Already Updated', 'show_alert': true});
             return;
            }
            let permissions =  store.user_permission_slugs;
            if(permissions.includes("EVCMPC50")){                 
              this.fill_form_2 = true;
              this.fill_form = false;
              this.model_2 = data;
              this.model_2.submit_mode= 'UPDATE CREDIT LIMIT STATUS';            
              }
              else{
                store.commit("showAlertBox", {'alert_type': 'alert-danger',
                         'alert_message': 'Oops! You do not have the permission to approve or disapprove customer\'s credit limit', 'show_alert': true});
                 return;
                }
      }},

    
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        }else if (this.model.requested_creditlimit != this .model.requested_creditlimit) {
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Oops! credit limit fields do not match', 'show_alert': true});
        }
         else {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
         
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.model.company_id = this.preset.company_id;
          this.model.limit_requested_by = user_details.fullname;
          let customer_detail = {
            customer_creditlimit : this.model
          };
           if(this.model.submit_mode == 'UPLOAD CREDIT LIMIT'){
                    axios.post(this.url, customer_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        //console.log(response);
                        let api_response = response.data;
                        if(api_response.status === true) {
                            this.tableData.push(response.data.data);
                            store.commit("showAlertBox", {'alert_type': 'alert-success',
                           'alert_message': 'Credit Limit Uploaded for approval Successfully', 'show_alert': true});
                            this.formstate.$submitted=false;
                            this.form_reset();
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }
          }},
      onCreditLimitUpdate(){
                       //this.model.creditlimit_date = new Date(this.selected_date).toDateString();
                      this.$SmoothScroll(document.getElementById("content-header"));
                      store.commit("activateLoader", "start");   
                      let user_details = JSON.parse(localStorage.getItem('user_details'));
                      this.model_2.company_id = this.preset.company_id;
                      let creditlimit_details = this.model_2;
                      creditlimit_details.limit_approved_by = user_details.fullname;
                      creditlimit_details.selected_customer = this.model.selected_customer;
                      let customer_detail = {
                        customer_creditlimit : creditlimit_details
                      };
                   axios.patch(this.url+"/"+creditlimit_details.id, customer_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        //console.log(response);
                        let api_response = response.data;
                        if(api_response.status === true) {
                            this.tableData.splice(this.tableData.indexOf(this.model_2), 1);
                            this.tableData.push(response.data.data);
                            store.commit("showAlertBox", {'alert_type': 'alert-success',
                           'alert_message': 'Credit Limit Updated Successfully', 'show_alert': true});
                            this.formstate.$submitted=false;
                            this.creditlimit_update_form_reset();
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
              
      },
      addTag(newTag) {
            const tag = {
                id: newTag,
                name: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.all_groups.push(tag)
            this.selected_groups.push(tag)
        },
        form_reset(){
        //   this.model = {
        //   wallet: [],
        //   customer: [],
        //   submit_mode: 'CREATE',
        // }
        this.button_toggle();
        },
         creditlimit_update_form_reset(){
          this.model_2 = {};
          this.fill_form_2 = false;
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
