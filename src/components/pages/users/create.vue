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
                      <select  name="company"  size="1" class="form-control" v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" >
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
                      <select  name="company" size="1" class="form-control" v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" >
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
              <div class="col-lg-5" v-show="show_setup_form && fill_form" >
                
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="number"> Full Name</label>
                      <input v-model="user.fullname" name="fullname" type="text" required autofocus placeholder="Full Name" class="form-control" id="number"/>
                      <field-messages name="fullname" show="$invalid && $submitted" class="text-danger">
                        <div slot="required"> Full Name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="nozzle_code"> Username</label>
                      <input v-model="user.username" name="username" type="text" required autofocus placeholder="Username" class="form-control" id="nozzle_code"/>
                      <field-messages name="username" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Username is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="brand"> Email</label>
                      <input v-model="user.email" name="email" type="email" required autofocus placeholder="Email" class="form-control" id="brand"/>
                      <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Email is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="serial_number"> Phone Number</label>
                      <input v-model="user.phone_number" name="phone_number" type="text" required autofocus placeholder="Phone Number" class="form-control" id="serial_number"/>
                      <field-messages name="phone_number" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Phone Number is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-12">
                    <div class="form-group">
                      <b-card v-if="company_stations.length" header="Select stations for users" header-tag="h4" class="bg-info-card">            
                        <multiselect v-model="user.selected_stations" tag-placeholder="Add station(s) to user" 
                        placeholder="Select Stations"
                        label="name" track-by="id" 
                        :options="company_stations" :multiple="true" :hide-selected="true" 
                        :taggable="true" @tag="addTag">
                        </multiselect>        
                       </b-card>
                        <p v-else>{{this.company_stations_null}}</p>
                    </div>
                </div>


                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="role_id">Select Role</label>
                      <select id="role" name="role_id" size="1" class="form-control" v-model="user.role_id" required checkbox>

                        <option
                          v-for="option in available_roles"
                          v-bind:value="option.id" >{{ option.name }}
                        </option>

                      </select>
                      <field-messages name="role_id" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Role is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                    <div class="form-group">
                      <b-card v-if="company_notifications.length" header="Select notifications for user" header-tag="h4" class="bg-info-card">            
                        <multiselect v-model="user.selected_notifications" tag-placeholder="Add Notification Module(s) to user" 
                        placeholder="Select Modules"
                        label="name" track-by="id" 
                        :options="company_notifications" :multiple="true" :hide-selected="true" 
                        :taggable="true" @tag="addTag">
                        </multiselect>        
                       </b-card>
                        <p v-else>{{this.company_notifications_null}}</p>
                    </div>
                </div>


                
                
                <div class="col-sm-12">
                  <div class="form-group float-right">
                    <input type="submit" :value="user.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
            <div>
                <button v-on:click="fill_form=!fill_form" style=" margin-bottom: 10px" class="btn btn-success"> ADD A NEW USER</button>
            </div>
              <datatable title="Registered Users" :rows="tableData" :columns="columndata">
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
          label: 'Full Name',
          field: 'fullname',
          numeric: false,
          html: false,
        }, {
          label: 'EMail',
          field: 'email',
          numeric: false,
          html: false,
        }, {
          label: 'Phone',
          field: 'phone_number',
          numeric: true,
          html: false,
        }, {
          label: 'Stations',
          field: 'stations',
          numeric: true,
          html: true,
        }, {
          label: 'Notifications Allowed',
          field: 'notifications',
          numeric: true,
          html: true,
        }, {
          label: "Role",
          field: 'role.name',
          numeric: false,
          html: false,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/company_users',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
       available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        available_roles: "",
        station_pumps:"",
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

        user : {
          company_id: "",
          station_id: "",
          phone_number: "",
          selected_stations : [],
          selected_notifications:[],
          email: "",
          username: "",
          fullname: "",
          role_id: 0,
          privilege: "",
          submit_mode: 'CREATE',
        }

      }
    },
    methods: {

      show_company_stations(company_name){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        this.company_stations_null = 'No Station Added Yet';
        this.company_notifications_null = 'No available notofication modules';
        axios.get(this.$store.state.host_url+"/stations/by_company/"+company_name,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          this.company_stations = response.data.data;
          ///get roles///
            axios.get(this.$store.state.host_url+"/roles/by_company/"+company_name,
              {
                headers : {
                  "Authorization" : "Bearer " + user_details.token
                }}).then(response => {
            this.available_roles = response.data.data;
          });
        ///get users
          axios.get(this.$store.state.host_url+"/company_users/by_company/"+company_name,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            store.commit("activateLoader", "end");   
            this.tableData = response.data.data;
            this.tableData.forEach((item, index) => {
              let perm='';
              this.tableData[index]['selected_stations']=[];              
              if(item.station_users !==undefined && item.station_users !==null){
              item.station_users.forEach((inner_item, inner_index) => {
                    var element = '';
                  if(inner_item.station !==undefined){
                      element = inner_item.station;
                      perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                      this.tableData[index]['selected_stations'].push(element);
                      
                      this.tableData[index]['stations']=perm;
                      this.tableData[index]['tabledata_index']=index;
                      }
                       });
              }
              let notf='';
              this.tableData[index]['selected_notifications']=[];              
              if(item.user_notifications !==undefined && item.user_notifications !==null){
              item.user_notifications.forEach((inner_item, inner_index) => {
                    var element = '';
                  if(inner_item.module !==undefined && item.module !==null){
                      element = inner_item.module;
                      notf=notf+"<span class='col-xs-4 btn btn-sm btn-warning' style='margin-left:10px'>"+ element.name+"</span>";
                      this.tableData[index]['selected_notifications'].push(element);
                      
                      this.tableData[index]['notifications']=notf;
                      this.tableData[index]['tabledata_index']=index;
                      }
                       });
              }
              
                  });
            this.show_setup_form=true;
          //console.log(response.data.data);     
        });

      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },
       show_notification_modules(){
                     ///get products///
              let user_details = JSON.parse(localStorage.getItem('user_details'));
              axios.get(this.$store.state.host_url+"/notifications",
                {
                  headers : {
                    "Authorization" : "Bearer " + user_details.token
                  }}).then(response => {
                //
                this.company_notifications = response.data.data;
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
      }
        , onAction (action, data, index) {
                this.$SmoothScroll(document.getElementById("content-header"));
                console.log('slot action: ' + action, data.fullname, index);
                if(action == 'edit'){
                    this.fill_form = true;
                    this.user = data;
                    this.user.submit_mode="UPDATE"
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
            deleteItem(data){
                store.commit("activateLoader", "start");
                this.$modal.hide('dialog');
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                axios.delete(this.url+'/'+data.id, {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }
                        }).then( response => {                         
                            store.commit("activateLoader", "end");        
                            let company_response = response.data;
                            if (company_response.status === true) {
                                this.tableData.splice(this.tableData.indexOf(data), 1);
                                this.$alert.success({duration:10000,forceRender:'',
                            message:'User Deleted Successfully',transition:''});
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
          //include station and company_id
         // this.users.station_id= this.preset.station_id;
          this.user.company_id= this.preset.company_id;
          let user_detail = {
            user: this.user
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          if(this.user.submit_mode == 'CREATE'){
          axios.post(this.url, user_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
            console.log(response.data.data);
             this.tableData.push(response.data.data);  
            //  console.log(inner_item);
             this.tableData.forEach((item, index) => {
              let perm='';
              this.tableData[index]['selected_stations']=[];              
              if(item.station_users !==undefined && item.station_users!==null){
              item.station_users.forEach((inner_item, inner_index) => {
                    var element = '';
                   
                  if(inner_item.station !==undefined){
                      element = inner_item.station;
                      perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                      this.tableData[index]['selected_stations'].push(element);
                      
                      this.tableData[index]['stations']=perm;
                      this.tableData[index]['tabledata_index']=index;
                      }
                       });
              }

              let notf='';
              this.tableData[index]['selected_notifications']=[];              
              if(item.user_notifications !==undefined && item.user_notifications !==null){
              item.user_notifications.forEach((inner_item, inner_index) => {
                    var element = '';
                  if(inner_item.module !==undefined && item.module!== null){
                      element = inner_item.module;
                      notf=notf+"<span class='col-xs-4 btn btn-sm btn-warning' style='margin-left:10px'>"+ element.name+"</span>";
                      this.tableData[index]['selected_notifications'].push(element);
                      
                      this.tableData[index]['notifications']=notf;
                      this.tableData[index]['tabledata_index']=index;
                      }
                       });
              }
                  });        
            this.$alert.success({duration:10000,forceRender:'',
            message:'User registered successfully, default password is 123456',transition:''});
            this.formstate.$submitted=false;
            this.user= {submit_mode: "CREATE"};
          }
        }).catch(error => { 
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        })}
        else if(this.user.submit_mode == 'UPDATE'){
                    axios.patch(this.url+"/"+this.user.id, user_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        console.log(response);
                        let company_response = response.data;
                        if(company_response.status === true) {
                          this.tableData = response.data.data;
                          this.tableData.forEach((item, index) => {
                          let perm='';
                          this.tableData[index]['selected_stations']=[];              
                          if(item.station_users !==undefined && item.station_users !==null){
                          item.station_users.forEach((inner_item, inner_index) => {
                                var element = '';
                                console.log(inner_item);
                              if(inner_item.station !==undefined){
                                  element = inner_item.station;
                                  perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                                  this.tableData[index]['selected_stations'].push(element);
                                  
                                  this.tableData[index]['stations']=perm;
                                  this.tableData[index]['tabledata_index']=index;
                                  }
                                  });
                          }

                          let notf='';
                          this.tableData[index]['selected_notifications']=[];              
                          if(item.user_notifications !==undefined && item.user_notifications !==null){
                          item.user_notifications.forEach((inner_item, inner_index) => {
                                var element = '';
                              if(inner_item.module !==undefined && item.module!==null){
                                  element = inner_item.module;
                                  notf=notf+"<span class='col-xs-4 btn btn-sm btn-warning' style='margin-left:10px'>"+ element.name+"</span>";
                                  this.tableData[index]['selected_notifications'].push(element);
                                  
                                  this.tableData[index]['notifications']=notf;
                                  this.tableData[index]['tabledata_index']=index;
                                  }
                                  });
                          }

                              });
                        this.$alert.success({duration:10000,forceRender:'',
                        message:'User Updated Successfully',transition:''});
                        this.formstate.$submitted=false;
                        this.user= {submit_mode: "CREATE"};
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
          this.user = {
          company_id: "",
          station_id: "",
          phone_number: "",
          selected_stations : [],
          email: "",
          username: "",
          fullname: "",
          role_id: 0,
          privilege: "",
          submit_mode: 'CREATE',
        }
        },
    },
    mounted: function() {
      store.commit("check_login_details");
      this.show_available_companies();
      this.show_notification_modules();
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
