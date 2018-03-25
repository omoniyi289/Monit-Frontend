<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate2" @submit.prevent="show_station_expenses">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="company">Select Company</label>
                      <select id="company" name="company" size="1" class="form-control" v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" required checkbox>
                     
                        <option
                          v-for="(option, index) in available_companies"
                          v-bind:value="option.id"
                         >{{ option.name }}
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
                          v-for="(option, index) in company_stations"
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
                    <input type="submit" value="Show Pricing" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
          </div>

          <div class="col-sm-5">
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              <div class="row">
                
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="amount"> Amount</label>
                      <input v-model="expense.amount" name="amount" type="text" required autofocus placeholder="Amount" class="form-control" id="serial_number"/>
                      <field-messages name="amount" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Amount is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="expense_code">Expense Code</label>
                      <input v-model="expense.expense_code" name="expense_code" type="text" required autofocus placeholder="Expense Code" class="form-control" id="serial_number"/>
                      <field-messages name="expense_code" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Expense Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="expense_type">Expense Type</label>
                      <input v-model="expense.expense_type" name="expense_type" type="text" required autofocus placeholder="Expense Type" class="form-control" id="serial_number"/>
                      <field-messages name="expense_type" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Expense Type is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-8">
                    <datepicker :format="format" v-model="selected_date"  placeholder="Select Date"></datepicker>
                    <br>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="description">Description</label>
                      <input v-model="expense.description" name="description" type="text" required autofocus placeholder="Description" class="form-control" id="serial_number"/>
                      <field-messages name="description" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Description is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" value="Submit Expense" class="btn btn-success" />
                  </div>
                </div>
              </div>

            </vue-form>
          </div>
          <div class="col-sm-7">
            <div class="table-responsive">
              <datatable title="Expenses Incurred" :rows="tableData" :columns="columndata"></datatable>
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
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import Datepicker from 'vuejs-datepicker';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,
      Datepicker,
    },
    data() {
      return {columndata: [
         {
          label: 'Date',
          field: 'date',
          numeric: false,
          html: false,
        }, {
          label: 'Amount',
          field: 'amount',
          numeric: false,
          html: false,
        }, {
          label: 'Type',
          field: 'expense_type',
          numeric: false,
          html: false,
        },{
          label: 'Description',
          field: 'description',
          numeric: false,
          html: true,
        }],
        ajaxLoading: true,
        selected: true,
        loading: true,
        format: 'yyyy-MM-d',
        url: this.$store.state.host_url+'/expenses',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        selected_date: "",
        station_pumps:"",
        company_stations: "",
        added_product_name: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        expense : {
          expense_code: "",
          expense_type: "",
          amount: "",
          date:"",
          description: "",
      
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
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
              store.commit("activateLoader", "end");   
              this.company_stations = response.data.data;

      })
      .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
      },
      show_station_expenses(){
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
          console.log(station_id);
          axios.get(this.$store.state.host_url+"/expenses/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
                store.commit("activateLoader", "end");   
            this.tableData = response.data.data;
          // this.loader
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });
        }},
      show_available_companies(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        this.available_companies = response.data.data;
         console.log(this.available_companies);
        ///get products///
        axios.get(this.$store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.products = response.data.data;
      });
      })
      .catch(error => {
       store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
      });
      }
      ,
     
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          //include station and company_id
          this.expense.station_id= this.preset.station_id;
          this.expense.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.expense.created_by= user_details.id;
          this.expense.date = new Date(this.selected_date).toDateString();
           let expense_detail = {
            expenses: this.expense
          };
          axios.post(this.url, expense_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            console.log(response.data);
            let station_response = response.data;
          if (station_response.status === true) {
              this.tableData.push(station_response.data);
             
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Prduct Price Added Successfully', 'show_alert': true});
            }
          }
        ).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
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
<style>
  .form-control{
    transition: initial;
  }
</style>
