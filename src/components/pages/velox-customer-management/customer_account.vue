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
              <div class="col-sm-8 col-md-offset-3" v-show="show_setup_form && fill_form" >
                 
                <div class="col-sm-8">
                  <div class="form-group">
                      <label for="number"> Customer's Details</label>
                      <input readonly v-model="model.name" name="fullname" type="text" required autofocus placeholder="Full Name" class="form-control" id="number"/>
                  </div>
                </div>

                <div class="col-sm-8">
                  <div class="form-group">
                     <input readonly v-model="model.email" name="customername" type="text" required autofocus placeholder="customername" class="form-control" id="nozzle_code"/>
                  </div>
                </div>

                <div class="col-sm-8">
                  <div class="form-group">
                      <input readonly v-model="model.address" name="email" type="text" required autofocus placeholder="Email" class="form-control" id="brand"/>
                     
                  </div>
                </div>

                <div class="col-sm-8">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="current_credit_limit"> Set Credit Limit </label>
                      <input v-model="model.current_credit_limit" name="current_credit_limit" type="number" min="0" required autofocus placeholder="Set Credit Limit" class="form-control" id="current_credit_limit"/>
                      <field-messages name="current_credit_limit" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Set Credit Limit</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-8">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="status">Partnership Status</label>
                                            <select id="status" name="status" size="1" class="form-control" v-model="model.status" required >
                                                <option value="0" selected disabled>
                                                    Please select
                                                </option>
                                                <option value="Request Pending">Request Pending</option>
                                                <option value="Partnership Declined">Partnership Declined</option>
                                                <option value="In Partnership">In Partnership</option>
                                                

                                 </select>
                            <field-messages name="status" show="$invalid && $submitted" class="text-danger">
                              <div slot="required">Status is required</div>
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
            <br><br>
          </div>

          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
             
              <datatable title="Current Customers" :rows="tableData" :columns="columndata">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <i class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)">EDIT</i>
                    </div>
                  </template>
              </datatable>
            </div>
          </div>
          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
             
              <datatable title="New Customers" :rows="newCustomerTableData" :columns="new_customer_columndata">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <i class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)">EDIT</i>
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
          label: 'Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Partnership Status',
          field: 'status',
          numeric: true,
          html: true,
        }, {
          label: 'Wallet Balance',
          field: 'current_balance',
          numeric: true,
          html: true,
        }
        , {
          label: 'Credit Limit',
          field: 'current_credit_limit',
          numeric: true,
          html: true,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
          new_customer_columndata: [{
          label: 'Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Email',
          field: 'email',
          numeric: true,
          html: true,
        }, {
          label: 'Phone',
          field: 'phone',
          numeric: true,
          html: true,
        }
        , {
          label: 'Address',
          field: 'address',
          numeric: true,
          html: true,
        }, {
          label: "Partnership Status",
          field: 'status',
          numeric: false,
          html: false,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/velox_customer_accounts',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        newCustomerTableData: [],
        show_selector: true,
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        available_roles: "",
        station_pumps:"",
        button_text: "ADD A NEW customer",
        fill_form: false,
        preset : {
          company_id: "",
          station_id: ""
        },
          phone_number: "",
          selected_stations : [],
          email: "",
          customername: "",
          fullname: "",
          role_id: 0,

        model : {
          submit_mode: 'CREATE',
        }

      }
    },
    methods: {
       button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "ADD A NEW customer"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "ADD A NEW customer";
        }
      },
      show_company_customers(company_id){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params='vendor_id='+company_id;
        axios.get(this.$store.state.host_url+"/velox_customer_accounts?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
                    this.company_customers = response.data.data; 
                    let result = response.data.data;
                    this.sort_customer(result);
                    store.commit("activateLoader", "end");
                    this.show_setup_form=true;


            ////console.log(this.tableData);     
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },

    sort_customer(result){
        this.newCustomerTableData = [];
        this.tableData = [];
        result.forEach(item => {
                        if(item.status == 'Request Pending' ){
                            //concat all address params
                            item.address = item.address+', '+item.city+', '+item.state;
                            this.newCustomerTableData.push(item);
                        }else{
                            this.tableData.push(item);
                        }
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
                    this.fill_form = true;this.button_text = "HIDE FORM";
                    this.button_text = "HIDE FORM";
                    this.model = data;
                    console.log(data);
                    this.model.submit_mode="UPDATE"
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
          //for customers whose phone number isnt avaialable yet
          let customer_detail = {
            velox_customer: this.model
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
        
         if(this.model.submit_mode == 'UPDATE'){
                    axios.patch(this.url+"/"+this.model.id, customer_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        //console.log(response);
                        let api_response = response.data;
                        if(api_response.status === true) {
                            let result = response.data.data;
                            this.sort_customer(result);
                            store.commit("showAlertBox", {'alert_type': 'alert-success',
                           'alert_message': 'Customer Updated Successfully', 'show_alert': true});
                            this.formstate.$submitted=false;
                            this.form_reset();
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }
      }},
      addTag(newTag) {
            const tag = {
                id: newTag,
                name: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.all_groups.push(tag)
            this.selected_groups.push(tag)
        },
        form_reset(){
          this.model = {
          wallet: [],
          customer: [],
          submit_mode: 'CREATE',
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
