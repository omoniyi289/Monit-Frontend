<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <csview title="Custom Table"  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button class="btn btn-success" 
                      @click="show_station_expenses( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
                </csview>
            <hr>    
          </div>

          <div class="col-sm-6">
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form && fill_form">
              <div class="row">
                
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="amount"> Amount</label>
                      <input v-model="expense.amount" name="amount" type="number" required autofocus placeholder="Amount" class="form-control" id="serial_number"/>
                      <field-messages name="amount" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Amount is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                    <div class="form-group">
                      <validate tag="div">
                        <label for="expenses_type">Expenses Type</label>
                        <select id="expenses_type" name="expenses_type" size="1" class="form-control" v-model="expense.expense_type" required checkbox>
                          <option value="0" selected disabled>Please select</option>
                          <option value="Prepaid">Prepaid</option>
                          <option value="Postpaid">Postpaid</option>
                        </select>
                        <field-messages name="expenses_type" show="$invalid && $submitted" class="text-danger">
                              <div slot="required">Expenses Type is required</div>
                        </field-messages>
                      </validate>
                  </div>
                </div>
                <div class="col-sm-8">
                    <datepicker required :format="format" v-model="selected_date"  placeholder="Select Date"></datepicker>
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
          <div class="col-sm-12"  v-show="show_setup_form">
           
            <div>
                <span v-on:click="button_toggle" style="float: right; margin-bottom: 10px" class="toggle btn btn-info ">{{this.button_text}}</span>             
            </div>
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
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import Datepicker from 'vuejs-datepicker';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
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
          label: 'Code',
          field: 'expense_code',
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
        format: 'yyyy-MM-dd',
        url: this.$store.state.host_url+'/expenses',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        fill_form:'',
        available_companies: "",
        selected_date: "",
        station_pumps:"",
        button_text: "ADD NEW EXPENSE",
        company_stations: "",
        added_product_name: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        expense : {
          expense_type: "",
          amount: "",
          date:"",
          description: "",
      
        }

      }
    },
    methods: {
      button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "ADD NEW EXPENSE"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "ADD NEW EXPENSE";
        }
      },
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
      
         show_station_expenses(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
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
     
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          //include station and company_id
          this.expense.station_id= this.preset.station_id;
          this.expense.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.expense.created_by= user_details.id;
          if(this.selected_date == ''){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Please select date to continue', 'show_alert': true});
          store.commit("activateLoader", "end");
          return;
            }
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
                       'alert_message': 'Expenses Added Successfully', 'show_alert': true});
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
