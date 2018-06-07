<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate" @submit.prevent="add_company_regions">
              <div class="row">
                <div class="col-sm-6">
                  <div class="col-lg-12">
                      <div class="form-group" v-if="show_multi_company">
                      <validate tag="div">
                      Select Company
                        <select  name="company"  size="1" class="form-control" v-on:change="show_company_regions(preset.company_id)" v-model="preset.company_id" >
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
                        <select  name="company"  size="1" class="form-control" v-on:change="show_company_regions(preset.company_id)" v-model="preset.company_id" >
                          <option :value="available_company.id"
                            >{{ available_company.name }}
                          </option>
                          
                        </select>
                        
                        <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                          <div slot="requred">Company is required</div>
                        </field-messages>
                      </validate>
                    </div>
                   <!-- <button v-on:click="onclick_add_region = !onclick_add_region" class="btn btn-success">ADD NEW REGION</button>
                    -->
                  </div>

                </div>

                <div class="col-sm-6" v-show="show_setup_form && fill_form">
                  <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="name"> Region Name</label>
                      <input v-model="region.name" name="name" type="text" required autofocus placeholder="Name" class="form-control" id="serial_number"/>
                      <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Region Name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <!--
                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="address"> Address</label>
                      <input v-model="region.address" name="address" type="text" required autofocus placeholder="Address" class="form-control" id="serial_number"/>
                      <field-messages name="address" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Address is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                -->
                <div class="col-sm-6">
                  <div class="form-group">
                      <label for="manager_name">Regional Manager's Name</label>
                      <input v-model="region.manager_name" name="manager_name" type="text"  autofocus placeholder="Name" class="form-control" id="manager_name"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                      <label for="manager_email">Regional Manager's Email</label>
                      <input v-model="region.manager_email" name="manager_email" type="text"  autofocus placeholder="Email" class="form-control" id="manager_email"/>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                      <label for="address">Regional Manager's Phone</label>
                      <input v-model="region.manager_phone" name="manager_phone" type="text"  autofocus placeholder="Phone" class="form-control" id="manager_phone"/>
            
                  </div>
                </div>
                <label>Stations</label>
          
                <div class="col-sm-12">
                    <div class="form-group">
                     
                      <b-card header="Available Stations" header-tag="h4" class="bg-info-card">            
                        <div v-if="show_selector" style="margin-bottom: 2%">
                          <span class="btn btn-sm btn-info" @click="selectAllPriv">Select All</span>
                          <span class="btn btn-sm btn-warning" @click="deselectAllPriv"> Unselect All</span>
                        </div>
                        <multiselect v-if="available_stations.length"  v-model="region.selected_stations" tag-placeholder="Add station(s) to region" 
                        placeholder="Select Stations"
                        label="name" track-by="id" 
                        :options="available_stations" :multiple="true" :hide-selected="true" 
                        :taggable="true" @tag="addTag">
                        </multiselect>      
                         <p  style="color: red" v-else>{{this.company_stations_null}}</p>  
                       </b-card>
                      
                
                    </div>
                </div>
              <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" :value="region.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>

              </div>
            </vue-form>
          
          </div>
          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
             <div>
                <span v-on:click="button_toggle" style=" margin-bottom: 10px" class="toggle btn btn-info ">{{this.button_text}}</span>             
            </div>
              <datatable title="Registered Regions" :rows="tableData" :columns="columndata">
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
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";    
   import vueSmoothScroll from 'vue-smoothscroll';  
      Vue.use(vueSmoothScroll);
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
          label: 'Region Name',
          field: 'name',
          numeric: false,
          html: false,
        }, 
         {
          label: 'Stations',
          field: 'stations',
          numeric: false,
          html: true,
        },
        {
          label: 'Manager\'s Name',
          field: 'manager_name',
          numeric: false,
          html: false,
        }
        , {
          label: 'Manager\'s Email',
          field: 'manager_email',
          numeric: false,
          html: false,
        },{
          label: 'Manager\'s Phone',
          field: 'manager_phone',
          numeric: false,
          html: true,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/regions',
        formstate: {},
        show_setup_form : false,
        tableData: [],
        fill_form: false,
        onclick_add_region: false,
        available_companies: [],
        available_company: [],
        products: "",
        company_stations_null: "",
        show_selector: true,
        button_text: "ADD A NEW REGION",
        show_multi_company: false,
        show_single_company: false,
        station_pumps:"",
        available_stations: [],

        preset : {
          company_id: "",
          station_id: ""
        },
        registered_priv_ids:[],
          registered_priv_names:[],
        region : {
          name: "",
          address: "",
          selected_stations: [],
          
          submit_mode: "CREATE",

        }

      }
    },
    methods: {
      button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "ADD A NEW REGION"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "ADD A NEW REGION";
        }
      },

      show_company_regions(company_id){
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          //get stations
          this.company_stations_null= "No stations added yet, please add stations under configuration to proceed with creating regions";
          //console.log(this.company_stations_null);
          axios.get(this.$store.state.host_url+"/stations/by_company/"+company_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
                store.commit("activateLoader", "end");   
                this.available_stations = response.data.data;

        });
        //get regions
          axios.get(this.$store.state.host_url+"/regions/by_company/"+company_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            store.commit("activateLoader", "end");  
            this.tableData = response.data.data;
            this.tableData.forEach((item, index) => {
            let perm='';
          this.tableData[index]['selected_stations']=[];
          item.region_stations.forEach(inner_item => {
          if(inner_item.station !==undefined){
            var element = '';
                      element = inner_item.station;
          perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
          this.tableData[index]['selected_stations'].push(element);
          this.tableData[index]['stations']=perm;
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
                    this.region = data;
                    this.region.submit_mode="UPDATE"
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
                            let company_response = response.data;
                            if (company_response.status === true) {
                                this.tableData.splice(this.tableData.indexOf(data), 1);
                                this.$alert.success({duration:10000,forceRender:'',
                            message:'Region Deleted Successfully',transition:''});
                            }
                            }).catch(error => { 
                                store.commit("activateLoader", "end");   
                                store.commit("catch_errors", error); 
                    });
            },
      add_company_regions() {
         if (this.formstate.$invalid) {
          return;
        }else if (this.region.selected_stations.length == 0) {
          this.$SmoothScroll(document.getElementById("content-header"));
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Err! No stations selected', 'show_alert': true});
        
          return;
        } else {
        this.$SmoothScroll(document.getElementById("content-header"));
        store.commit("activateLoader", "start");
        store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
        this.region.station_id= this.preset.station_id;
        this.region.company_id= this.preset.company_id;
          // //console.log(this.region);
        //   let new_ids=[];
        //  this.region.selected_stations_full.forEach(element => {
       //     new_ids.push(element.id);
       //   });
         // this.region.selected_stations= new_ids;
          let region_detail = {
            region: this.region
          };
          //console.log(this.region);
          let user_details = JSON.parse(localStorage.getItem('user_details'));
           if(this.region.submit_mode == 'CREATE'){
          axios.post(this.url, region_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
            //console.log(response.data.data);
                  this.tableData.push(response.data.data);
                  this.tableData.forEach((item, index) => {
                  let perm='';
                  this.tableData[index]['selected_stations']=[];
                  item.region_stations.forEach(inner_item => {
                  if(inner_item.station !==undefined){
                    var element = '';
                              element = inner_item.station;
                  perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                  this.tableData[index]['selected_stations'].push(element);
                  
                  this.tableData[index]['stations']=perm;
                  this.tableData[index]['tabledata_index']=index;
                  }}
                  );
                      });
          
                  store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Region added successfully', 'show_alert': true});
                  this.formstate.$submitted=false;
                  this.region= {submit_mode: "CREATE"};
          }
        }).catch(error => {
           store.commit("activateLoader", "end");  
            store.commit("catch_errors", error); 
        })
        }
        else if(this.region.submit_mode == 'UPDATE'){
          //console.log("here here");
                    axios.patch(this.url+"/"+this.region.id, region_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        //console.log(response);
                        let company_response = response.data;
                        if (company_response.status === true) {
                          //update UI table data, not working yet
                              this.tableData = response.data.data;
                              this.tableData.forEach((item, index) => {
                              let perm='';
                              this.tableData[index]['selected_stations']=[];
                              item.region_stations.forEach(inner_item => {
                              if(inner_item.station !==undefined){
                                var element = '';
                                          element = inner_item.station;
                              perm=perm+"<span class='col-xs-4 btn btn-sm btn-success' style='margin-left:10px'>"+ element.name+"</span>";
                              this.tableData[index]['selected_stations'].push(element);
                              
                              this.tableData[index]['stations']=perm;
                              this.tableData[index]['tabledata_index']=index;
                              }}
                              );
                                  });
                        
                        store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Region Updated Successfully', 'show_alert': true});
                        this.formstate.$submitted=false;
                        this.region= {submit_mode: "CREATE"};
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
          this.region.selected_stations= this.available_stations;
           },
        deselectAllPriv() {
          this.region.selected_stations= [];
           },
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
