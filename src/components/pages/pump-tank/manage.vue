<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <div class = "col-md-12">
              <csview title="Custom Table"  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button class="btn btn-success" 
                      @click="show_station_pumps_to_tanks( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
                </csview>
                <hr>
            </div>
          </div>

            <div class="col-sm-5" v-show="show_setup_form">
              <vue-form :state="formstate3" @submit.prevent="add_pump_group">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <validate tag="div">
                        <label for="name">Pump Group Name</label>
                        <input v-model="pump_map.name" name="name" type="text"
                              required autofocus placeholder="Pump Group Name" class="form-control" id="name"/>
                          <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                            <div slot="checkbox">Pump Group Name is required</div>
                          </field-messages>
                      </validate>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group">
                      <b-card header="Select Pumps Here" header-tag="h4" class="bg-info-card">            
                        <multiselect v-model="pump_map.selected_pumps" tag-placeholder="Add this as new Pump Group" 
                        placeholder="Select Pumps"
                        label="pump_nozzle_code" track-by="pump_nozzle_code" 
                        :options="available_pumps" :multiple="true" :hide-selected="true" 
                        :taggable="true" @tag="addTag">
                        </multiselect>        
                       </b-card>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-group float-left">
                      <input type="submit" value="Add Pump Group" class="btn btn-success" />
                    </div>
                  </div>
                </div>
              </vue-form>
            </div>
            <div class="col-sm-2"></div>
            <div class="col-sm-5" v-show="show_setup_form">
              <vue-form :state="formstate4" @submit.prevent="add_tank_group">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group">
                      <validate tag="div">
                        <label for="name">Tank Group Name</label>
                        <input v-model="tank_map.name" name="name" type="text"
                              required autofocus placeholder="Tank Group Name" class="form-control" id="name"/>
                          <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                            <div slot="checkbox">Tank Group Name is required</div>
                          </field-messages>
                      </validate>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-group">
                      <b-card header="Select Tanks Here" header-tag="h4" class="bg-info-card">            
                        <multiselect v-model="tank_map.selected_tanks" tag-placeholder="Add this as new Tank Group" 
                        placeholder="Select Tanks"
                        label="code" track-by="code" 
                        :options="available_tanks" :multiple="true" :hide-selected="true" 
                        :taggable="true" @tag="addTag">
                        </multiselect>        
                       </b-card>
                    </div>
                  </div>

                  

                  <div class="col-sm-12">
                    <div class="form-group float-left">
                      <input type="submit" value="Add Tank Group" class="btn btn-success" />
                    </div>
                  </div>
                </div>
              </vue-form>
            </div>

            <div class="col-sm-6" v-show="show_setup_form">
              <div class="table-responsive">
                <datatable title="Pump Groups" :rows="pumpgroup_tableData" :columns="columndata">
                  <template slot="actions" slot-scope="props">
                    <div >
                       <i class='fa fa-trash text-danger' @click="onAction('delete', '/pump_groups/', props.rowData, props.rowIndex)"></i>
                    </div>
                  </template>
                </datatable>
              </div>
            </div>
            
            <div class="col-sm-6" v-show="show_setup_form">
              <div class="table-responsive">
                <datatable title="Tanks Groups" :rows="tankgroup_tableData" :columns="columndata">
                  <template slot="actions" slot-scope="props">
                    <div >
                        <i class='fa fa-trash text-danger' @click="onAction('delete', '/tank_groups/', props.rowData, props.rowIndex)"></i>
                    </div>
                  </template>
                </datatable>
              </div>
            </div>
            <div class="col-sm-4" v-show="show_setup_form">      
              <b-card header="Select respective Groups" header-tag="h4" class="bg-info-card">
                <vue-form :state="formstate" @submit.prevent="add_new_map">
                  <div class="col-sm-12 "> 
                      <div class="col-lg-12">
                        <div class="form-group">
                          <validate tag="div">
                            <input v-model="p_t_group.name" name="name" type="text"
                                  required autofocus placeholder="Map Group Name" class="form-control" id="name"/>
                              <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                <div slot="checkbox">Map Name is required</div>
                              </field-messages>
                          </validate>
                        </div>
                      </div>
                
                    <div class="col-lg-12">
                      <div class="form-group">
                        <validate tag="div">
                          <label for="station">Pump Group</label>
                          <select id="station" name="station" size="1" class="form-control" v-model="p_t_group.pump_group_id" required checkbox>

                            <option
                              v-for="option in pumpgroup_tableData"
                              v-bind:value="option.id"
                              :selected="option.name == preset.station_id" >{{ option.name }}
                            </option>
                          </select>
                          <field-messages name="station" show="$invalid && $submitted" class="text-danger">
                            <div slot="checkbox">Pump Group is required</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="form-group">
                        <validate tag="div">
                          <label for="station">Tank Group</label>
                          <select id="station" name="station" size="1" class="form-control" v-model="p_t_group.tank_group_id" required checkbox>

                            <option
                              v-for="option in tankgroup_tableData"
                              v-bind:value="option.id"
                              :selected="option.name == preset.station_id" >{{ option.name }}
                            </option>
                          </select>
                          <field-messages name="station" show="$invalid && $submitted" class="text-danger">
                            <div slot="checkbox">Tank Group is required</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>


                  </div>
                    <br><br>
                    <div class="col-sm-12">
                      <div class="form-group float-left">
                        <input type="submit" value="Add New Mapping" class="btn btn-success" />
                      </div>
                    </div>
                </vue-form>    
              </b-card>
          
            </div>
            
            <div class="col-sm-8" v-show="show_setup_form">
              <div class="table-responsive">
                <datatable title="Pump to Tank Mapping" :rows="map_tableData" :columns="columndata">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <i class='fa fa-trash text-danger' @click="onAction('delete', '/pumps-tanks/', props.rowData, props.rowIndex)"></i>
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
  import Multiselect from 'vue-multiselect';
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Multiselect
    },
    data() {
      return {
        columndata: [{
          label: 'Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Registered Indexes',
          field: 'registered_indexes',
          numeric: true,
          html: false,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
        ajaxLoading: true,
        loading: true,
        formstate: {},
        formstate3: {},
        formstate4: {},
        formstate2: {},
        show_setup_form : false,
        pumpgroup_tableData: [],
        tankgroup_tableData: [],
        map_tableData: [],
        available_pumps: {},
        available_tanks: {},
        p_t_group: {},
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        all_groups: [],
        station_tanks: [],
        company_stations: [],
        input: "",
        pump_map: {
          name: "",
          selected_pumps: [],
        },
        tank_map: {
          name: "",
          selected_tanks: [],
        },

        preset : {
          company_id: "",
          station_id: ""
        },
        pump : {
          company_id: "",
          station_id: 0,
          number: "",
          brand:"",
          nozzle_code: "",
          product: "",
          type: "",
          serial_number: "",

        }

      }
    },
    methods: {
      show_company_stations(company_id){

        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let host_url = this.$store.state.host_url;
        axios.get(host_url+"/stations/by_company/"+company_id,
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
      show_station_pumps_to_tanks(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
         let host_url = this.$store.state.host_url;
          axios.get(host_url+"/pumps-tanks/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            store.commit("activateLoader", "end");
            this.pumpgroup_tableData = response.data.data[0].pump_groups;
            this.tankgroup_tableData = response.data.data[0].tank_groups;
            this.map_tableData = response.data.data[0].pump_groups_to_tank_groups;
            //this.pumpgroup_tableData = response.data.data[0].pump_groups;
            this.available_pumps = response.data.data[0].pumps;
            this.available_tanks = response.data.data[0].tanks;
            
             this.pumpgroup_tableData.forEach((item, index) => {
               let pump_concat= '';
               item.pumps.forEach(element => {
                 pump_concat = pump_concat+ ' | '+ element.pump_nozzle_code;
                  console.log(element.pump_nozzle_code);
               });
            this.$set(item, "registered_indexes", pump_concat);
        });

        this.tankgroup_tableData.forEach((item, index) => {
               let tank_concat= '';
               item.tanks.forEach(element => {
                 tank_concat = tank_concat+ ' | '+ element.code
               });
            this.$set(item, "registered_indexes", tank_concat);
        });

        this.map_tableData.forEach((item, index) => {
               let p_t_concat= '';
               //item.get.forEach(element => {
                 p_t_concat = item.get_pump_group.name;
                 p_t_concat = p_t_concat+ ' | '+item.get_tank_group.name;
              // });
            this.$set(item, "registered_indexes", p_t_concat);
        });
         
        })
        .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
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
      add_pump_group(){
        if (this.formstate3.$invalid) {
          return;
            } else {
              this.$SmoothScroll(document.getElementById("content-header"));
              store.commit("activateLoader", "start");
                //include station and company_id
            this.pump_map.station_id = this.preset.station_id;
            this.pump_map.company_id= this.preset.company_id;
            this.pump_map.code= this.pump_map.name;
            let pumpgroup_detail = {
              pump_group : this.pump_map
            };
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.post(this.$store.state.host_url+"/pump_groups",pumpgroup_detail,
              {
                headers : {
                  "Authorization" : "Bearer " + user_details.token
                }}).then(response => {
              store.commit("activateLoader", "end");   
       
              this.pumpgroup_tableData.push(response.data.data);
              this.pumpgroup_tableData.forEach((item, index) => {
                ///last element
                if(this.pumpgroup_tableData.length-1 == index){
                let pump_concat= '';
               this.pump_map.selected_pumps.forEach(element => {
                 pump_concat = pump_concat+ ' | '+ element.pump_nozzle_code;
                
               });
                this.$set(item, "registered_indexes", pump_concat);
                }
            });
               store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Pump Group Added Successfully', 'show_alert': true});
              })
              .catch(error => {
                store.commit("activateLoader", "end");   
                store.commit("catch_errors", error); 
              });
          }
      }
      ,
      addTag(newTag) {
            const tag = {
                id: newTag,
                name: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.all_groups.push(tag)
            this.selected_groups.push(tag)
        },
        add_new_map(){
          if (this.formstate.$invalid) {
          return;
            } else {
              store.commit("activateLoader", "start");
              this.$SmoothScroll(document.getElementById("content-header"));
              this.p_t_group.station_id = this.preset.station_id;
              this.p_t_group.company_id= this.preset.company_id;
             
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.post(this.$store.state.host_url+"/pumps-tanks", {'p_t_group' : this.p_t_group},
              {
                  headers : {
                    "Authorization" : "Bearer " + user_details.token
                  }}).then(response => {
                store.commit("activateLoader", "end");
                this.map_tableData= response.data.data;
                this.map_tableData.forEach((item, index) => {
                let p_t_concat= '';
               //item.get.forEach(element => {
                 p_t_concat = item.get_pump_group.name;
                 p_t_concat = p_t_concat+ ' | '+item.get_tank_group.name;
              // });
                this.$set(item, "registered_indexes", p_t_concat);
                 });
                store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Map Created Successfully', 'show_alert': true});
                  })
                  .catch(function(error) {
                      console.log(error);
                      if(error.response.status == 401){
                        this.$router.push('/login?message='+error.response.data.error);
                      }
                    });
            }
        },
      add_tank_group(){
        if (this.formstate4.$invalid) {
          return;
            } else {store.commit("activateLoader", "start");
              this.$SmoothScroll(document.getElementById("content-header"));
                //include station and company_id
            this.tank_map.station_id = this.preset.station_id;
            this.tank_map.company_id= this.preset.company_id;
            this.tank_map.code= this.tank_map.name;
            console.log(this.tank_map.selected_tanks);
            let tankgroup_detail = {
              tank_group: this.tank_map
            };
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            let host_url = this.$store.state.host_url;
            axios.post(host_url+"/tank_groups", tankgroup_detail,
              {
                headers : {
                  "Authorization" : "Bearer " + user_details.token
                }}).then(response => {
             store.commit("activateLoader", "end");
              this.tankgroup_tableData.push(response.data.data);
              this.tankgroup_tableData.forEach((item, index) => {
                ///last element
                if(this.tankgroup_tableData.length-1 == index){
                let tank_concat= '';
               this.tank_map.selected_tanks.forEach(element => {
                 tank_concat = tank_concat+ ' | '+ element.code;
                 console.log(element.code);
               });
                this.$set(item, "registered_indexes", tank_concat);
                }            
            });
            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Tank Group Created Successfully', 'show_alert': true});
              })
              .catch(error => {
     
                console.log(error);
              });
          }
      },
      onAction (action,url,data, index) {
                this.$SmoothScroll(document.getElementById("content-header"));
                if(action == 'delete'){
                    this.$modal.show('dialog', {
                        title: 'Alert!',
                        text: 'Click Okay to confirm DELETE',
                        buttons: [
                            {
                            title: 'OKAY',       // Button title
                            default: true,    // Will be triggered by default if 'Enter' pressed.
                            handler: () => {this.deleteItem(data, url)} // Button click handler
                            },
                            {
                            title: 'CLOSE'
                            }
                        ]
                        });
                }
                },
            deleteItem(data, url){
                store.commit("activateLoader", "start");
                this.$modal.hide('dialog');
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                axios.delete(store.state.host_url+url+data.id, {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }
                        }).then( response => {                         
                            store.commit("activateLoader", "end");        
                            let company_response = response.data;
                            if (company_response.status === true) {
                                if(url == '/pumps-tanks/'){
                                  this.map_tableData.splice(this.map_tableData.indexOf(data), 1);
                                    }
                                else if(url == '/pump_groups/'){
                                  this.pumpgroup_tableData.splice(this.pumpgroup_tableData.indexOf(data), 1);
                                    }
                                  else if(url == '/tank_groups/'){
                                    this.tankgroup_tableData.splice(this.tankgroup_tableData.indexOf(data), 1);
                                  }
                                this.$alert.success({duration:10000,forceRender:'',
                            message:'Item Deleted Successfully',transition:''});
                            }
                            }).catch(error => { 
                                store.commit("activateLoader", "end");   
                                store.commit("catch_errors", error); 
                    });
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
