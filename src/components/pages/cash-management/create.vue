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
                      @click="show_station_deposits( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
                </csview>
            <hr>    
          </div>

          <div class="col-sm-6">
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form && fill_form">
              <div class="row">
                
                <div class="col-sm-8">
                    <datepicker :format="format" v-model="selected_reading_date"  placeholder="Sales Transaction Date">
                    </datepicker>
                    <br>
                    <span class="btn btn-sm btn-primary" @click="validate_payment_amount"> VALIDATE</span>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="expected_amount">Expected Amount</label>
                      <input readonly v-model="deposit.expected_amount" name="expected_amount" type="number" required autofocus placeholder="Expected Amount" class="form-control" id="serial_number"/>
                      <field-messages name="expected_amount" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Expected Amount is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                    <div class="form-group">
                      <validate tag="div">
                        <label for="payment_type">Payment Type</label>
                        <select id="payment_type" name="payment_type" size="1" class="form-control" v-model="deposit.payment_type" required v-on:change="show_details_inputs(deposit.payment_type)">
                          <option value="POS">POS Payment</option>
                          <option value="Cash Deposit">Cash Deposit</option>
                        </select>
                        <field-messages name="payment_type" show="$invalid && $submitted" class="text-danger">
                              <div slot="required">Payment Type is required</div>
                        </field-messages>
                      </validate>
                  </div>
                </div>
                
                <div class="col-sm-12">
                  <validate tag="div">
                  <div class="form-group">
                      <label for="bank_name">Bank Name</label>
                       <select  name="bank_name"  size="1" class="form-control" v-model="deposit.bank" >
                          <option v-for="(option, index) in available_banks"
                                                v-bind:value="option.name" >{{ option.name }}
                          </option>                       
                       </select>
                  </div>
                  <field-messages name="bank_name" show="$invalid && $submitted" class="text-danger">
                              <div slot="required">Bank Name is required</div>
                  </field-messages>
                  </validate>
                </div>
                 <div v-if="show_bank_details">
                
                <div class="col-sm-12">
                  <div class="form-group">
                      <label for="account_number">Account Number</label>
                      <input v-model="deposit.account_number" name="account_number" type="text" autofocus placeholder="Account Number" class="form-control" id="account_number"/>  
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                      <label for="teller_number">Teller Number</label>
                      <input v-model="deposit.teller_number" name="teller_number" type="text" autofocus placeholder="Teller Number" class="form-control" id="teller_number"/>  
                  </div>
                </div>
                
                </div>
                <div v-if="show_pos_details">
                <div class="col-sm-12">
                  <div class="form-group">
                      <label for="pos_receipt_number">POS Receipt Number</label>
                      <input v-model="deposit.pos_receipt_number" name="pos_receipt_number" type="text" autofocus placeholder="POS Receipt Number" class="form-control" id="pos_receipt_number"/>  
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                      <label for="pos_receipt_range">POS Receipt Range</label>
                      <input v-model="deposit.pos_receipt_range" name="pos_receipt_range" type="text" autofocus placeholder="POS Receipt Range" class="form-control" id="pos_receipt_range"/>  
                  </div>
                </div>
               </div>
                <div class="col-sm-12">
                    <datepicker :format="format" v-model="selected_payment_date"  placeholder="Sales Payment Date">
                    </datepicker>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="amount"> Amount</label>
                      <input v-model="deposit.amount" name="amount" type="number" required autofocus placeholder="Amount" class="form-control" id="serial_number"/>
                      <field-messages name="amount" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Amount is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input v-show="show_submit_button" type="submit" value="Submit Payment" class="btn btn-success" />
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
              <datatable title="Payments Made" :rows="tableData" :columns="columndata"></datatable>
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
  import api_banks from "src/assets/json/banks.json";
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
          label: 'Transaction Date',
          field: 'reading_date',
          numeric: false,
          html: false,
        },
        {
          label: 'Payment Date',
          field: 'teller_date',
          numeric: false,
          html: false,
        },{
          label: 'Amount',
          field: 'amount',
          numeric: false,
          html: false,
        }, {
          label: 'Type',
          field: 'payment_type',
          numeric: false,
          html: false,
        },{
          label: 'Bank Name',
          field: 'bank',
          numeric: false,
          html: true,
        },{
          label: 'Teller Number',
          field: 'teller_number',
          numeric: false,
          html: false,
        }, {
          label: 'Account Number',
          field: 'account_number',
          numeric: false,
          html: false,
        },{
          label: 'POS Number',
          field: 'pos_receipt_number',
          numeric: false,
          html: true,
        },{
          label: 'POS Range',
          field: 'pos_receipt_range',
          numeric: false,
          html: true,
        }],
        ajaxLoading: true,
        selected: true,
        loading: true,
        show_pos_details: false,
        show_bank_details: false,
        format: 'yyyy-MM-dd',
        fill_form:'',
        url: this.$store.state.host_url+'/deposits',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_banks : '',
        available_companies: "",
        button_text: "ADD NEW PAYMENT",
        selected_reading_date: "",
        selected_payment_date: "",
        station_pumps:"",
        company_stations: "",
        added_product_name: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        show_submit_button: false,
        deposit : {
          payment_type: 0,
          amount: 0.00,
          sales_transaction:"",
          teller_date: "",
          reading_date:"",
          bank: "",
          expected_amount:0.00,
          teller_number:"",
          account_number:"",
          pos_receipt_range:"",
          pos_receipt_number:"",
      
        }

      }
    },
    methods: {
     button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "ADD NEW PAYMENT"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "ADD NEW PAYMENT";
        }
      },
      validate_payment_amount(){
           if(this.selected_reading_date == ''){
             this.$SmoothScroll(document.getElementById("content-header"));
              store.commit("showAlertBox", {'alert_type': 'alert-danger',
                          'alert_message': 'Please select date to continue', 'show_alert': true});
              store.commit("activateLoader", "end");
              return;
            }
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            this.deposit.reading_date = new Date(this.selected_reading_date).toDateString();
            let params="station_id="+this.preset.station_id+"&selected_date="+this.deposit.reading_date;
             axios.get(this.url+"/validate_amount/params?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
              store.commit("activateLoader", "end");   
              if(response.data.data == 0){
                this.$SmoothScroll(document.getElementById("content-header"));
                store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No sales recorded for the selected date', 'show_alert': true});
                  return ;
                  }
              this.deposit.expected_amount = parseFloat(response.data.data);
              this.show_submit_button= true;
      })
      .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });

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
      show_details_inputs(selected){
        if(selected == 'POS'){
            this.show_pos_details = true;
            this.show_bank_details = false;
        }else if(selected == 'Cash Deposit'){
            this.show_pos_details = false;
            this.show_bank_details = true;
        }
      },
         show_station_deposits(station_id, company_id){
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
          axios.get(this.$store.state.host_url+"/deposits/by_station/"+station_id,
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
          this.deposit.station_id= this.preset.station_id;
          this.deposit.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.deposit.created_by= user_details.id;
          if(this.selected_reading_date == '' || this.selected_payment_date == ''){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Please select necessary dates to continue', 'show_alert': true});
          store.commit("activateLoader", "end");
          return;
            }
          this.deposit.payment_date = new Date(this.selected_payment_date).toDateString();
          this.deposit.reading_date = new Date(this.selected_reading_date).toDateString();
           let deposit_detail = {
            deposits: this.deposit
          };
          axios.post(this.url, deposit_detail, {
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
                       'alert_message': 'Payment Added Successfully', 'show_alert': true});
              this.formstate.$submitted=false;
              this.fill_form = !this.fill_form;
              this.deposit= {};
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
      this.available_banks = api_banks;
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
