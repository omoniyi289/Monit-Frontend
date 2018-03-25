<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <div class = "col-md-12">
              <vue-form :state="formstate2" @submit.prevent="show_station_pumps_to_tanks">
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
                      <input type="submit" value="Show Station Details" class="btn btn-success" />
                    </div>
                  </div>
                </div>
              </vue-form>
            </div>
          </div>

            <div class="col-sm-5">
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
                        label="number" track-by="id" 
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
            <div class="col-sm-5">
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
                        label="code" track-by="name" 
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

            <div class="col-sm-6">
              <div class="table-responsive">
                <datatable title="Pump Groups" :rows="pumpgroup_tableData" :columns="columndata"></datatable>
              </div>
            </div>
            
            <div class="col-sm-6">
              <div class="table-responsive">
                <datatable title="Tanks Groups" :rows="tankgroup_tableData" :columns="columndata"></datatable>
              </div>
            </div>
            <div class="col-sm-4" >      
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
            
            <div class="col-sm-8">
              <div class="table-responsive">
                <datatable title="Pump to Tank Mapping" :rows="map_tableData" :columns="columndata"></datatable>
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
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import Multiselect from 'vue-multiselect';
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,
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
        }, {
          label: 'Actions',
          field: 'action',
          numeric: false,
          html: true,
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
        available_companies: {},
        available_pumps: {},
        available_tanks: {},
        p_t_group: {},
        products: "",
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
      show_station_pumps_to_tanks(){
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
                 pump_concat = pump_concat+ ' | '+ element.number
               });
               
            this.$set(item, "action", "<a class='btn btn-info'>DEL</a>");
            this.$set(item, "registered_indexes", pump_concat);
        });

        this.tankgroup_tableData.forEach((item, index) => {
               let tank_concat= '';
               item.tanks.forEach(element => {
                 tank_concat = tank_concat+ ' | '+ element.code
               });
              
            this.$set(item, "action", "<a class='btn btn-info'>DEL</a>");
            this.$set(item, "registered_indexes", tank_concat);
        });

        this.map_tableData.forEach((item, index) => {
               let p_t_concat= '';
               //item.get.forEach(element => {
                 p_t_concat = item.get_pump_group.name;
                 p_t_concat = p_t_concat+ ' | '+item.get_tank_group.name;
              // });
              
            this.$set(item, "action", "<a class='btn btn-info'>DEL</a>");
            this.$set(item, "registered_indexes", p_t_concat);
        });
         
        })
        .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });
        }},
      show_available_companies(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let host_url = this.$store.state.host_url;
        axios.get(host_url+"/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          
        this.available_companies = response.data.data;
        ///get products///
        axios.get(this.$store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        this.products = response.data.data;
      });
      })
      .catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
      });
      }
      ,
      add_pump_group(){
        if (this.formstate3.$invalid) {
          return;
            } else {
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
                 pump_concat = pump_concat+ ' | '+ element.number;
               });
                this.$set(item, "registered_indexes", pump_concat);
                }
                this.$set(item, "action", "<a class='btn btn-info' >Edit</a>");
                
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

              this.p_t_group.station_id = this.preset.station_id;
              this.p_t_group.company_id= this.preset.company_id;
              //this.p_t_group.name= this.p_t_group.name;
              console.log(this.p_t_group);

              //let tankgroup_detail = ;
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.post(this.$store.state.host_url+"/pumps-tanks", {'p_t_group' : this.p_t_group},
              {
                  headers : {
                    "Authorization" : "Bearer " + user_details.token
                  }}).then(response => {
                store.commit("activateLoader", "end");
                this.map_tableData.push(response.data.data);
                this.map_tableData.forEach((item, index) => {
                ///last element
                if(this.map_tableData.length-1 == index){
                let tank_concat= '';
               // p_t_concat = p_t_group.get_pump_group.name;
                //p_t_concat = p_t_concat+ ' | '+item.get_tank_group.name;

                this.$set(item, "registered_indexes", tank_concat);
                }
                this.$set(item, "action", "<a class='btn btn-info' >Edit</a>");
                
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
                this.$set(item, "action", "<a class='btn btn-info' >Edit</a>");
                
            });
            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Tank Group Created Successfully', 'show_alert': true});
              })
              .catch(error => {
                
                console.log(error);
              });
          }
      }
      ,
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {store.commit("activateLoader", "start");
          //include station and company_id
          this.tank.station_id= this.preset.station_id;
          this.tank.company_id= this.preset.company_id;
          let tank_detail = {
            tank: this.tank
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          console.log(JSON.stringify(tank_detail));
          axios.post(this.url, tank_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
            console.log(response.data);
          }
        }).catch(error => { 
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
            if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
          console.log(error);
        })}
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
