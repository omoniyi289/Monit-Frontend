<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header=""  header-tag="h4" class="bg-primary-card">
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-6">
                        <vue-form :state="formstate" @submit.prevent="onSubmit"  v-show=" fill_form">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="name"> Company Name</label>
                                            <input v-model="company.name" name="name" type="text" required autofocus placeholder="Company Name" class="form-control" id="name"/>
                                            <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="registration_number"> Registration Number</label>
                                            <input v-model="company.registration_number" name="registration_number" type="text" required autofocus placeholder="Registration Number" class="form-control" id="registration_number"/>
                                            <field-messages name="registration_number" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group">
                                            <label for="email_input">Contact Email</label>
                                            <input v-model="company.email" name="email" type="email"  autofocus placeholder="Company E-mail" class="form-control" id="email_input"/>
                                           
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group">
                                            <label for="registration_number">Preferred SMS ID</label>
                                            <input v-model="company.sms_sender_id" name="sms_sender_id" type="text" maxlength="9" autofocus placeholder="SMS Sender ID" class="form-control" id="email_input"/>
                                           
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="state">State</label>
                                            <select id="state" name="state" class="form-control" v-model="company.state" required autofocus >
                                            
                                                <option
                                                    v-for="option in available_states"
                                                    v-bind:value="option.states.name" >
                                                    {{ option.states.name }}
                                                </option>
                                                
                                            </select>
                                            <field-messages name="state" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">State is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="city">City</label>
                                            <input v-model="company.city" class="form-control" name="city" id="city" placeholder="Enter your Company City" required  />
                                            <field-messages name="city" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">City is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="address"> Company Address</label>
                                            <input v-model="company.address" name="address" type="text" required  placeholder="Company Address" class="form-control" id="address"/>
                                            <field-messages name="address" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company Address is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="active">Is Company Active? </label>
                                            <select id="active" name="active" size="1" class="form-control" v-model="company.active" required>
                                                
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>

                                            </select>
                                            <field-messages name="active" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Is Company Active is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                 <div class="col-sm-12">
                                        <div class="form-group">
                                          <b-card  header="Select permissions for Company" header-tag="h4" class="bg-info-card">            
                                            <multiselect  v-model="company.selected_privileges" tag-placeholder="Add privilege(s) to company" 
                                            placeholder="Select privileges"
                                            label="name" track-by="id" 
                                            :options="available_privileges" :multiple="true" :hide-selected="true"  :taggable="true" :close-on-select="false" >
                                            </multiselect>                                 
                                           </b-card>     
                                        </div> 
                                    </div>
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                          <b-card  header="Select notifications for Company" header-tag="h4" class="bg-info-card">            
                                            <multiselect  v-model="company.selected_notifications" tag-placeholder="Add notifications(s) to company" 
                                            placeholder="Select notifications"
                                            label="name" track-by="id" 
                                            :options="available_notifications" :multiple="true" :hide-selected="true"  :close-on-select="false">
                                            </multiselect>                                 
                                           </b-card>     
                                        </div>
                                    </div>
                                <div class="col-sm-12">
                                    <div class="form-group float-right">
                                        <input type="submit" :value="company.submit_mode" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-md-3">
                -   </div>
                    <div class="col-sm-12">
                        <div>
                             <span v-if="activate_create_button" v-on:click="button_toggle" style=" margin-bottom: 10px" class="toggle btn btn-primary ">{{this.button_text}}</span>   
                        </div>
                        <div class="table-responsive">
                            <datatable title="Company Account"  :rows="tableData" :columns="columndata">
                            <template slot="actions" slot-scope="props">
                                <div >
                                <i class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)"></i>
                                <!-- <i class='fa fa-trash text-danger' @click="onAction('delete', props.rowData, props.rowIndex)"></i> -->
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
    import Vue from 'vue';
    import store from 'src/store/store.js';
    import VueForm from "vue-form";     
    import vueSmoothScroll from 'vue-smoothscroll';     
    Vue.use(vueSmoothScroll);
    import datatable from "components/plugins/DataTable/DataTable.vue";
    import csview from "components/plugins/Company-Station-View/CSView.vue";
    import options from "src/validations/validations.js";
    Vue.use(VueForm, options);
    import Multiselect from 'vue-multiselect';
    Vue.component(Multiselect);
    import api_states from "src/assets/json/states.json";
    export default {
        name: "formfeatures",
         components: {
        datatable,csview, Multiselect

        },
         props:['data'],
        data() {
            return {
        
                columndata: [{
                label: 'Name',
                field: 'name',
                numeric: false,
                html: false,
                }, {
                label: ' subscribed permissions',
                field: 'permissions',
                numeric: false,
                html: true,
                }, {
                label: 'subscribed notifications',
                field: 'notifications',
                numeric: false,
                html: true,
                }, {
                label: 'Registered On',
                field: 'created_at',
                numeric: true,
                html: false,
                }
                ,{
                field: '__slot:actions',
                label: 'Actions',
                }
               ],
                tableData: [],
                ajaxLoading: true,
                fill_form: false,
                button_text: "CREATE COMPANY ACCOUNT",
                loading: true,
                activate_create_button: false,
                url: this.$store.state.host_url+'/companies',
                formstate: {},
                available_notifications:[],
                available_privileges:[],
                company: {
                    name: "",
                    email: "",
                    state:0,
                    address: "",
                    sms_sender_id:"",
                    city: "",
                    registration_number: "",
                    submit_mode: "CREATE"
                },
                available_states: "",
            }
        },
        methods: {
        button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "CREATE COMPANY ACCOUNT"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "CREATE COMPANY ACCOUNT";
        }
      },
        show_available_companies(){
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.get(store.state.host_url+"/companies/all",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }}).then(response => {
              store.commit("activateLoader", "end");
              this.tableData = response.data.data;
              this.activate_create_button = true;
              this.tableData.forEach((item, index) => {
              let perm='';
              let notf='';
              this.tableData[index]['selected_privileges']=[];
              this.tableData[index]['selected_notifications']=[];
              ///permissions arrangement in table
              item.company_permissions.forEach(inner_item => {
                  if(inner_item.permission !==undefined){
                        var element = '';
                        element = inner_item.permission;
                        perm=perm+"<span class='btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                        this.tableData[index]['selected_privileges'].push(element);  
                        this.tableData[index]['permissions']=perm;
                              }}
                              );

               ///notifications arrangement in table
              item.company_notifications.forEach(inner_item => {
                  
                  if(inner_item.notification !==undefined){
                        var element = '';
                        element = inner_item.notification;
                        notf=notf+"<span class=' btn btn-sm btn-warning' style='margin-left:10px'>"+ element.name+"</span>";
                        this.tableData[index]['selected_notifications'].push(element);  
                        this.tableData[index]['notifications']=notf;

                              }}
                              );

                                  });
            
      });
    }
      ,
    onAction (action, data, index) {
      this.$SmoothScroll(document.getElementById("content-header"));
      //console.log('slot action: ' + action, data.name, index);
      if(action == 'edit'){
        this.company = data;
        this.fill_form = true;
        this.button_text = "HIDE FORM";
        this.company.submit_mode="UPDATE"
      }else if(action =='delete'){
          this.$modal.show('dialog', {
            title: 'Alert!',
            text: 'Click Okay to confirm DELETE',
            buttons: [
                {
                title: 'OKAY',       // Button title
                default: true,    // Will be triggered by default if 'Enter' pressed.
                handler: () => {this.deleteItem(data)} // Button click handler
                },
                {
                title: 'CLOSE'
                }
            ]
            });
      }
    },
    load_platfrom_privileges(){
        store.commit("activateLoader", "start");
        this.show_table= true;
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/permissions",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }}).then(response => {
              store.commit("activateLoader", "end");
              this.available_privileges = response.data.data;
              // response.data.data.forEach( inner_item => {
              //     this.available_privileges.push(inner_item.name);
              // });

                })
              .catch(function(error) {
                  store.commit("activateLoader", "end");   
                  store.commit("catch_errors", error); 
                });
        },

        load_platfrom_notifications(){
        store.commit("activateLoader", "start");
        this.show_table= true;
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/notifications",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }}).then(response => {
              store.commit("activateLoader", "end");
              this.available_notifications = response.data.data;
                })
              .catch(function(error) {
                  store.commit("activateLoader", "end");   
                  store.commit("catch_errors", error); 
                });
        },
        deleteItem(data){
            store.commit("activateLoader", "start");
            this.$modal.hide('dialog');
            let user_details = JSON.parse(localStorage.getItem('user_details'));
          axios.delete(this.url+'/'+data.id, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        let api_response = response.data;
                        if (api_response.status === true) {
                            this.tableData.splice(this.tableData.indexOf(data), 1);
                            this.$alert.success({duration:10000,forceRender:'',
                        message:'Company Deleted Successfully',transition:''});
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
        },
            onSubmit() {
                this.$SmoothScroll(document.getElementById("content-header"));
                if (this.formstate.$invalid) {
                    return;
                } else {
                    store.commit("activateLoader", "start");
                    store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
                    let company_detail = {
                        company: this.company
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    ////console.log(JSON.stringify(company_detail));
                    if(this.company.submit_mode == 'CREATE'){
                        if(user_details.role_id != 'master' && parseInt(user_details.company_id) > 0){
                            ///not an e360 super user
                            store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Invalid Request, company already created', 'show_alert': true});
                            store.commit("activateLoader", "end");
                            this.formstate.$submitted=false;
                            return;
                        }
                    axios.post(this.url, company_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
        
                        let api_response = response.data;
                        if (api_response.status === true) {
                            this.tableData.push(api_response.data);
                            localStorage.setItem('company_details', response.data);
                            //console.log(response.data.data);
                           
                             store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Company Registered Successfully, please re-load page to continue', 'show_alert': true});
                            this.formstate.$submitted=false;
                            this.fill_form = false;
                            this.company= {submit_mode: "CREATE"};
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });}else if(this.company.submit_mode == 'UPDATE'){
                    axios.patch(this.url+'/'+this.company.id, company_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
        
                        let api_response = response.data;
                        if (api_response.status === true) {
                          this.company='';
                          this.tableData = response.data.data;
                          this.activate_create_button = true;
                          this.tableData.forEach((item, index) => {
                          let perm='';
                          let notf='';
                          this.tableData[index]['selected_privileges']=[];
                          this.tableData[index]['selected_notifications']=[];
                          ///permissions arrangement in table
                          item.company_permissions.forEach(inner_item => {
                              if(inner_item.permission !==undefined){
                                    var element = '';
                                    element = inner_item.permission;
                                    perm=perm+"<span class='btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                                    this.tableData[index]['selected_privileges'].push(element);  
                                    this.tableData[index]['permissions']=perm;
                                          }}
                                          );

                           ///notifications arrangement in table
                          item.company_notifications.forEach(inner_item => {
                              
                              if(inner_item.notification !==undefined){
                                    var element = '';
                                    element = inner_item.notification;
                                    notf=notf+"<span class=' btn btn-sm btn-warning' style='margin-left:10px'>"+ element.name+"</span>";
                                    this.tableData[index]['selected_notifications'].push(element);  
                                    this.tableData[index]['notifications']=notf;

                                          }}
                                          );

                                              });
                        store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Company Updated Successfully', 'show_alert': true});
                        this.formstate.$submitted=false;
                        this.company= {submit_mode: "CREATE"};
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }
            }
        }, 
        },
        mounted: function() {          
            store.commit("check_login_details");
            this.show_available_companies();
            this.load_platfrom_privileges();
            this.load_platfrom_notifications();
            this.available_states = api_states;
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

