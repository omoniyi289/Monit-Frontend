<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate" @submit.prevent="add_company_roles">
              <div class="row">
                <div class="col-sm-6">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <validate tag="div">
                        <label for="company">Select Company</label>
                        <select id="company" name="company" size="1" class="form-control" v-on:change="show_company_roles(preset.company_id)" v-model="preset.company_id" required checkbox>
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
                </div>

                <div class="col-sm-6">
                  <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="name"> Role Name</label>
                      <input v-model="role.name" name="serial_number" type="text" required autofocus placeholder="Name" class="form-control" id="serial_number"/>
                      <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Role Name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="serial_number"> Description</label>
                      <input v-model="role.description" name="serial_number" type="text" required autofocus placeholder="Description" class="form-control" id="serial_number"/>
                      <field-messages name="description" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Description is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <label>Privileges</label>
                <div class="col-sm-12">                    
                  <label class="col-sm-4" v-for="input in available_privileges">
                    <input  v-bind:value="input.id"  v-model="role.selected_privileges"   type="checkbox" > {{ input.name }}
                  </label>                            
                </div>
                <br>
                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" value="Add Role" class="btn btn-success" />
                  </div>
                </div>
              </div>

              </div>
            </vue-form>
          
          </div>
          <div class="col-sm-12">
            <div class="table-responsive">
              <datatable title="Defined Roles" :rows="tableData" :columns="columndata"></datatable>
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
  import store from 'src/store/store.js';
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
          field: 'privileges',
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
        url: this.$store.state.host_url+'/roles',
        formstate: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
        station_pumps:"",
        available_privileges: [],
        preset : {
          company_id: "",
          station_id: ""
        },
        role : {
          name: "",
          description: "",
          selected_privileges: [],
        }

      }
    },
    methods: {
      show_company_roles(){
          store.commit("activateLoader", "start");
          //store.commit("showAlertBox", {'alert_type': 'alert-danger', 'alert_message': 'This is sweet', 'show_alert': true});
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let company_id= this.preset.company_id;
          axios.get(this.$store.state.host_url+"/roles/by_company/"+company_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            store.commit("activateLoader", "end");  
            this.tableData = response.data.data;
          console.log(response);
          this.tableData.forEach((item, index) => {
            this.$set(item, "action", "<a class='btn btn-info'>Edit</a>");
        });
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");  
            store.commit("catch_errors", error); 
          });
        },
        show_permissions(){
                     ///get products///
              let user_details = JSON.parse(localStorage.getItem('user_details'));
              axios.get(this.$store.state.host_url+"/permissions",
                {
                  headers : {
                    "Authorization" : "Bearer " + user_details.token
                  }}).then(response => {
                console.log(response.data.data);
                this.available_privileges = response.data.data;
                });
        },
      show_available_companies(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.available_companies = response.data.data;
      })
      .catch(error => {
       store.commit("activateLoader", "end");  
        store.commit("catch_errors", error); 
      });
      }
      ,
      add_company_roles() {
       store.commit("activateLoader", "start");
          this.role.station_id= this.preset.station_id;
          this.role.company_id= this.preset.company_id;
          let role_detail = {
            role: this.role
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          console.log(JSON.stringify(role_detail));
          axios.post(this.url, role_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
            //console.log(response.data);
            this.tableData.push(response.data.data);
            this.tableData.forEach((item, index) => {
              this.$set(item, "action", "<a class='btn btn-info' href='#/admin/roles/edit?role=" + item.id + "'>Edit</a>");
          });
          store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Role added successfully', 'show_alert': true});
          }
        }).catch(error => {
           store.commit("activateLoader", "end");  
            store.commit("catch_errors", error); 
        })
        //}
      }
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
<style>
  .form-control{
    transition: initial;
  }
</style>
