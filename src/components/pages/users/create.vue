<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-10">
            <vue-form :state="formstate2" @submit.prevent="onSubmit">
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

                  
                  <div class="col-sm-6">  
                    <br>
                    <div class="col-sm-12">   
                    <label v-if="company_stations.length">           
                      <label class="col-sm-4" v-for="input in company_stations">
                        <input  v-bind:value="input.id"  v-model="user.selected_stations"   type="checkbox" > {{ input.name }}
                      </label>
                    </label>
                    <p v-else>{{this.company_stations_null}}</p>
                      
                    </div>                            
                  </div>
                  <br>
                  


                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="number"> Full Name</label>
                      <input v-model="user.fullname" name="number" type="text" required autofocus placeholder="Full Name" class="form-control" id="number"/>
                      <field-messages name="fullname" show="$invalid && $submitted" class="text-danger">
                        <div slot="required"> Full Name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="nozzle_code"> Username</label>
                      <input v-model="user.username" name="nozzle_code" type="text" required autofocus placeholder="Username" class="form-control" id="nozzle_code"/>
                      <field-messages name="username" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Username is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="brand"> Email</label>
                      <input v-model="user.email" name="brand" type="text" required autofocus placeholder="Email" class="form-control" id="brand"/>
                      <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Email is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="serial_number"> Phone Number</label>
                      <input v-model="user.phone_number" name="serial_number" type="text" required autofocus placeholder="Phone Number" class="form-control" id="serial_number"/>
                      <field-messages name="phone_number" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Phone Number is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product">Roles</label>
                      <select id="role" name="role_id" size="1" class="form-control" v-model="user.role_id" required checkbox>

                        <option
                          v-for="option in available_roles"
                          v-bind:value="option.id"
                          :selected="option.name == user.role" >{{ option.name }}
                        </option>

                      </select>
                      <field-messages name="product" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Role is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>


                
                
                <div class="col-sm-12">
                  <div class="form-group float-right">
                    <input type="submit" value="Submit" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-12">
            <div class="table-responsive">
              <datatable title="Registered Users" :rows="tableData" :columns="columndata"></datatable>
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
          label: "Role",
          field: 'role.name',
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
        url: 'http://127.0.0.1:8000/api/v1/company_users',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        available_roles: "",
        products: "",
        station_pumps:"",
        company_stations: "",
        company_stations_null: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        user : {
          company_id: "",
          station_id: "",
          phone_number: "",
          selected_stations : [],
          email: "",
          username: "",
          fullname: "",
          role_id: "",
          privilege: "",
        }

      }
    },
    methods: {
      check_login_details(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        if (user_details == null || user_details == undefined) {
          this.$router.push('/login');
        }
      },
      show_company_stations(company_name){

        let user_details = JSON.parse(localStorage.getItem('user_details'));
        this.company_stations_null = 'No Station Added Yet';
        axios.get("http://127.0.0.1:8000/api/v1/stations/by_company/"+company_name,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          this.company_stations = response.data.data;
          ///get roles///
            axios.get("http://127.0.0.1:8000/api/v1/roles/by_company/"+company_name,
              {
                headers : {
                  "Authorization" : "Bearer " + user_details.token
                }}).then(response => {
            this.available_roles = response.data.data;
          });
        ///get users
          axios.get("http://127.0.0.1:8000/api/v1/company_users/by_company/"+company_name,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            this.tableData = response.data.data;
          console.log(response.data.data);
          this.tableData.forEach((item, index) => {
            this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/pump/edit?pump=" + item.id + "'>Edit</a>");
        });
        
        });

      })
      .catch(function(error) {
        console.log(error);
          if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
        });
      },
        show_available_companies(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get("http://127.0.0.1:8000/api/v1/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        this.available_companies = response.data.data;
      })
      .catch(error => {
          if(error.response.status == 401){
          this.$router.push('/login?message='+error.response.data.error);
        }
      });
      }
      ,
      
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          //include station and company_id
         // this.users.station_id= this.preset.station_id;
          this.user.company_id= this.preset.company_id;
          let user_detail = {
            user: this.user
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          axios.post(this.url, user_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
            let station_response = response.data;
          if (station_response.status === true) {
            //console.log(response.data);
            this.tableData.push(response.data.data);
            this.tableData.forEach((item, index) => {
              this.$set(item, "action", "<a class='btn btn-info' href='#/admin/user/edit?user=" + item.id + "'>Edit</a>");
          });
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
<style>
  .form-control{
    transition: initial;
  }
</style>
