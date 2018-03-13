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

            <div class="col-sm-6">
              <vue-form :state="formstate3" @submit.prevent="add_pump_group">
                <div class="row">
                  <div class="col-lg-6">
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
                      <div v-for="input in available_pumps">
                        <label >
                          <input  v-bind:value="input.id"  v-model="pump_map.selected_pumps"   type="checkbox" > {{ input.number }}
                        </label>
                      </div>
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

            <div class="col-sm-6">
              <vue-form :state="formstate4" @submit.prevent="add_tank_group">
                <div class="row">
                  <div class="col-lg-6">
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
                      <div v-for="input in available_tanks">
                        <label >
                          <input  v-bind:value="input.id"  v-model="tank_map.selected_tanks"   type="checkbox" > {{ input.code }}
                        </label>
                      </div>
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

            <div class="col-sm-5">
              <div class="table-responsive">
                <datatable title="Pump Groups" :rows="pumpgroup_tableData" :columns="columndata"></datatable>
              </div>
            </div>
            <div class="col-sm-2" >
            <button id="button" >Press</button>
                <br><br><br><br>
                <b-card class="bg-info-card">
                  <div class="col-sm-12">
                   MAP SELECTED PUMPS TO SELECTED TANKS
                  </div>

                </b-card>
            </div>
            <div class="col-sm-5">
              <div class="table-responsive">
              
                 <datatable :columns="columndata" :rows="tankgroup_tableData">
                    <template scope="{ row, columns }">
                        <tr :class="{info: selected_rows.indexOf(row) !== -1}" @click="selectRow(row)">
                            <template>
                                <datatable-cell v-for="(column, j) in columns" :key="j" :column="column" :row="row">

                                </datatable-cell>
                            </template>
                        </tr>
                    </template>
                </datatable>
              </div>
            </div>
            <div class="col-sm-12">
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
  require("checkbox.css/dist/css/checkbox.min.css");
  require("https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css");
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import VueForm from "vue-form";
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable
    },
    data() {
      return {columndata: [{
          label: 'ID',
          field: 'id',
          numeric: true,
          html: false,
        }, {
          label: 'Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Registered Indexes',
          field: 'serial_number',
          numeric: true,
          html: false,
        }, {
          label: "Product",
          field: 'pump.product.code',
          numeric: false,
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
        selected_rows: [],
        show_setup_form : false,
        pumpgroup_tableData: [],
        tankgroup_tableData: [],
        map_tableData: [],
        available_companies: "",
        available_pumps: "",
        available_tanks: "",
        products: "",
        station_tanks:"",
        company_stations: "",
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
          station_id: "",
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
      selectRow(row){
            if(this.selected_rows.indexOf(row) !== -1){
                let index = this.selected_rows.indexOf(row);
                this.selected_rows.splice(index, 1);

                return;
            }

            this.selected_rows.push(row);
        },
      check_login_details(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        if (user_details == null || user_details == undefined) {
          this.$router.push('/login');
        }
      },
      show_company_stations(company_id){

        let user_details = JSON.parse(localStorage.getItem('user_details'));
        //let company_name= this.preset.company_name;
        axios.get("http://127.0.0.1:8000/api/v1/stations/by_company/"+company_id,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          this.company_stations = response.data.data;
        console.log(response.data.data);

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
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
         
          axios.get("http://127.0.0.1:8000/api/v1/pumps-tanks/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            this.pumpgroup_tableData = response.data.data[0].pump_groups;
            this.tankgroup_tableData = response.data.data[0].tank_groups;
            //this.pumpgroup_tableData = response.data.data[0].pump_groups;
            this.available_pumps = response.data.data[0].pumps;
            this.available_tanks = response.data.data[0].tanks;
            console.log(response.data.data[0].tanks);

          // this.loader
        })
        .catch(function(error) {
            console.log(error);
            if(error.response.status == 401){
              this.$router.push('/login?message='+error.response.data.error);
            }
          });
        }},
      show_available_companies(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get("http://127.0.0.1:8000/api/v1/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.available_companies = response.data.data;
        ///get products///
        axios.get("http://127.0.0.1:8000/api/v1/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.products = response.data.data;
      });
      })
      .catch(error => {
          if(error.response.status == 401){
          this.$router.push('/login?message='+error.response.data.error);
        }
        console.log(error.response.status);
      });
      }
      ,
      add_pump_group(){
        if (this.formstate3.$invalid) {
          return;
            } else {

                //include station and company_id
            this.pump_map.station_id = this.preset.station_id;
            this.pump_map.company_id= this.preset.company_id;
            this.pump_map.code= this.pump_map.name;
            console.log(this.pump_map.selected_pumps);
            let pumpgroup_detail = {
              pump_group: this.pump_map
            };
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.post("http://127.0.0.1:8000/api/v1/pump_groups",pumpgroup_detail,
              {
                headers : {
                  "Authorization" : "Bearer " + user_details.token
                }}).then(response => {
              console.log(response.data.data);
              this.pumpgroup_tableData.push(response.data.data);
              this.pumpgroup_tableData.forEach((item, index) => {
                this.$set(item, "action", "<a class='btn btn-info' >Edit</a>");
            });
              })
              .catch(error => {
                  if(error.response.status == 401){
                  this.$router.push('/login?message='+error.response.data.error);
                }
                console.log(error.response.status);
              });
          }
      }
      ,
      add_tank_group(){
        if (this.formstate4.$invalid) {
          return;
            } else {

                //include station and company_id
            this.tank_map.station_id = this.preset.station_id;
            this.tank_map.company_id= this.preset.company_id;
            this.tank_map.code= this.tank_map.name;
            console.log(this.tank_map.selected_tanks);
            let tankgroup_detail = {
              tank_group: this.tank_map
            };
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.post("http://127.0.0.1:8000/api/v1/tank_groups", tankgroup_detail,
              {
                headers : {
                  "Authorization" : "Bearer " + user_details.token
                }}).then(response => {
              console.log(response.data.data);
              this.tankgroup_tableData.push(response.data.data);
              this.tankgroup_tableData.forEach((item, index) => {
                this.$set(item, "action", "<a class='btn btn-info' >Edit</a>");
            });
              })
              .catch(error => {
                  if(error.response.status == 401){
                  this.$router.push('/login?message='+error.response.data.error);
                }
                console.log(error.response.status);
              });
          }
      }
      ,
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
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
            let station_response = response.data;
          if (station_response.status === true) {
            console.log(response.data);
          }
        }).catch(error => {
            if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
          console.log(error);
        })}
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
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<script>
$(document).ready(function() {
    var table = $('#example').DataTable();
 
    $('#example tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    } );
 
    $('#button').click( function () {
        alert( table.rows('.selected').data().length +' row(s) selected' );
    } );
} );
</script>
<style>
  .form-control{
    transition: initial;
  }
</style>
