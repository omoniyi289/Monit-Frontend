<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate" @submit.prevent="add_company_roles">
              <div class="row">
                <div class="col-sm-6">
                  <div class="col-lg-12">
                      <div class="form-group" v-if="show_multi_company">
                      <validate tag="div">
                      Select Company
                        <select  name="company"  size="1" class="form-control" v-on:change="show_company_roles(preset.company_id)" v-model="preset.company_id" >
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
                        <select  name="company"  size="1" class="form-control" v-on:change="show_company_roles(preset.company_id)" v-model="preset.company_id" >
                          <option :value="available_company.id"
                            >{{ available_company.name }}
                          </option>
                          
                        </select>
                        
                        <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                          <div slot="requred">Company is required</div>
                        </field-messages>
                      </validate>
                    </div>
                   <!-- <button v-on:click="onclick_add_role = !onclick_add_role" class="btn btn-success">ADD NEW ROLE</button>
                    -->
                  </div>

                </div>

                <div class="col-sm-6" v-show="show_setup_form && fill_form">
                  <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="name"> Role Name</label>
                      <input v-model="role.name" name="name" type="text" required autofocus placeholder="Name" class="form-control" id="serial_number"/>
                      <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Role Name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="description"> Description</label>
                      <input v-model="role.description" name="description" type="text" required autofocus placeholder="Description" class="form-control" id="serial_number"/>
                      <field-messages name="description" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Description is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <label>Privileges</label>
          
                <div class="col-sm-12">
                    <div class="form-group">
                     
                      <b-card v-if="available_privileges.length" header="Available Privileges" header-tag="h4" class="bg-info-card">            
                        <div v-if="show_selector" style="margin-bottom: 2%">
                          <span class="btn btn-sm btn-info" @click="selectAllPriv">Select All</span>
                          <span class="btn btn-sm btn-warning" @click="deselectAllPriv"> Unselect All</span>
                        </div>
                        <multiselect  v-model="role.selected_privileges" tag-placeholder="Add privilege(s) to role" 
                        placeholder="Select Privileges"
                        label="name" track-by="id" 
                        :options="available_privileges" :multiple="true" :hide-selected="true" 
                        :taggable="true" @tag="addTag"  :close-on-select="false">
                        </multiselect>        
                       </b-card>
                
                    </div>
                </div>

                <br>
                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" :value="role.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>

              </div>
            </vue-form>
          
          </div>
          <div class="col-sm-12" v-show="show_setup_form">
             <br>
            <div class="table-responsive">
              <div>
                <span v-on:click="button_toggle" style=" margin-bottom: 10px" class="toggle btn btn-primary ">{{this.button_text}}</span>             
            </div>
              <datatable title="Defined Roles" :rows="tableData" :columns="columndata">
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
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  import Multiselect from 'vue-multiselect';
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
       Multiselect,
    },
    data() {
      return {columndata: [{
          label: 'Role Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Description',
          field: 'description',
          numeric: false,
          html: false,
        }, {
          label: 'Privileges',
          field: 'permissions',
          numeric: false,
          html: true,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/roles',
        formstate: {},
        show_setup_form : false,
        tableData: [],
        fill_form: false,
        onclick_add_role: false,
        available_companies: [],
        available_company: [],
        products: "",
        show_selector: true,
        button_text: "ADD A NEW ROLE",
        show_multi_company: false,
        show_single_company: false,
        station_pumps:"",
        available_privileges: [],

        preset : {
          company_id: "",
          station_id: ""
        },
        registered_priv_ids:[],
          registered_priv_names:[],
        role : {
          name: "",
          description: "",
          selected_privileges: [],
          
          submit_mode: "CREATE",

        }

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
      button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "ADD A NEW ROLE"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "ADD A NEW ROLE";
        }
      },

      load_company_privileges(){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params= 'company_id='+this.preset.company_id;
         this.available_privileges = [];
        axios.get(this.$store.state.host_url+"/company_permissions?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }}).then(response => {
              store.commit("activateLoader", "end");
               response.data.data.forEach(item => {
                this.available_privileges.push(item.permission);
              });
                })
              .catch(function(error) {
                  store.commit("activateLoader", "end");   
                  store.commit("catch_errors", error); 
                });
        },

      show_company_roles(company_id){
          store.commit("activateLoader", "start");
          //store.commit("showAlertBox", {'alert_type': 'alert-danger', 'alert_message': 'This is sweet', 'show_alert': true});
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          //let company_id= this.preset.company_id;
          axios.get(this.$store.state.host_url+"/roles/by_company/"+company_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            store.commit("activateLoader", "end");  
            this.tableData = response.data.data;
            this.load_company_privileges();
            this.tableData.forEach((item, index) => {
            let perm='';
          this.tableData[index]['selected_privileges']=[];
          item.role_permissions.forEach(inner_item => {
          if(inner_item.permission !==undefined){
            var element = '';
                      element = inner_item.permission;
          perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
          this.tableData[index]['selected_privileges'].push(element);
          
          this.tableData[index]['permissions']=perm;
          this.tableData[index]['tabledata_index']=index;
          }}
          );
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
      }
      , onAction (action, data, index) {
                this.$SmoothScroll(document.getElementById("content-header"));
                if(action == 'edit'){
                    this.fill_form = true;this.button_text = "HIDE FORM";
                    this.show_selector = false;
                    this.role = data;
                    this.role.submit_mode="UPDATE"
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
                if_part(id){
                 //  //console.log(id);
                  return this.registered_priv_ids.includes(id);
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
                            message:'Role Deleted Successfully',transition:''});
                            }
                            }).catch(error => { 
                                store.commit("activateLoader", "end");   
                                store.commit("catch_errors", error); 
                    });
            },
      add_company_roles() {
         if (this.formstate.$invalid) {
          return;
        } else {
        this.$SmoothScroll(document.getElementById("content-header"));
       store.commit("activateLoader", "start");
       store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          this.role.station_id= this.preset.station_id;
          this.role.company_id= this.preset.company_id;
          // //console.log(this.role);
        //   let new_ids=[];
        //  this.role.selected_privileges_full.forEach(element => {
       //     new_ids.push(element.id);
       //   });
         // this.role.selected_privileges= new_ids;
          let role_detail = {
            role: this.role
          };
          //console.log(this.role);
          let user_details = JSON.parse(localStorage.getItem('user_details'));
           if(this.role.submit_mode == 'CREATE'){
          axios.post(this.url, role_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let api_response = response.data;
          if (api_response.status === true) {
            ////console.log(response.data);
                  this.tableData.push(response.data.data);
                  this.tableData.forEach((item, index) => {
                  let perm='';
                  this.tableData[index]['selected_privileges']=[];
                  item.role_permissions.forEach(inner_item => {
                  if(inner_item.permission !==undefined){
                    var element = '';
                              element = inner_item.permission;
                  perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                  this.tableData[index]['selected_privileges'].push(element);
                  
                  this.tableData[index]['permissions']=perm;
                  this.tableData[index]['tabledata_index']=index;
                  }}
                  );
                      });
          
                  store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Role added successfully', 'show_alert': true});
                  this.formstate.$submitted=false;
                  this.role= {submit_mode: "CREATE"};
          }
        }).catch(error => {
           store.commit("activateLoader", "end");  
            store.commit("catch_errors", error); 
        })
        }
        else if(this.role.submit_mode == 'UPDATE'){
          //console.log("here here");
                    axios.patch(this.url+"/"+this.role.id, role_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        //console.log(response);
                        let api_response = response.data;
                        if (api_response.status === true) {
                          //update UI table data, not working yet
                              this.tableData = response.data.data;
                              this.tableData.forEach((item, index) => {
                              let perm='';
                              this.tableData[index]['selected_privileges']=[];
                              item.role_permissions.forEach(inner_item => {
                              if(inner_item.permission !==undefined){
                                var element = '';
                                          element = inner_item.permission;
                              perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                              this.tableData[index]['selected_privileges'].push(element);
                              
                              this.tableData[index]['permissions']=perm;
                              this.tableData[index]['tabledata_index']=index;
                              }}
                              );
                                  });
                
                        store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Role Updated Successfully', 'show_alert': true});
                        this.formstate.$submitted=false;
                        this.role= {submit_mode: "CREATE"};
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }
        }
      },
       addTag(newTag) {
            const tag = {
                id: newTag,
                name: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.all_groups.push(tag)
            this.selected_groups.push(tag)
        },
        selectAllPriv() {
          this.role.selected_privileges= this.available_privileges;
           },
        deselectAllPriv() {
          this.role.selected_privileges= [];
           },
    },
    mounted: function() {
      store.commit("check_login_details");
      this.show_available_companies();
      this.show_permissions();
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
