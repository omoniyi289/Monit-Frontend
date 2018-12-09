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

          <div class="col-sm-9">
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form && fill_form">
              <div class="row">
                
                <div class="col-sm-7">
                    <label for="date">Select the Transaction Date</label>
                    <datepicker :format="format" v-model="selected_reading_date"  placeholder="Sales Transaction Date">
                    </datepicker>
                    <br>
                    <span class="btn btn-sm btn-primary" @click="validate_payment_amount"> VALIDATE</span>
                    <br><br>
                </div>
                <div class="col-sm-7">
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

               <!--  <div class="col-sm-12">
                    <div class="form-group">
                      <validate tag="div">
                        <label for="payment_type">Payment Type</label>
                        <select id="payment_type" name="payment_type" size="1" class="form-control" v-model="deposit.payment_type" required >
                          <option value="POS">POS Payment</option>
                          <option value="Cash Deposit">Cash Deposit</option>
                        </select>
                        <field-messages name="payment_type" show="$invalid && $submitted" class="text-danger">
                              <div slot="required">Payment Type is required</div>
                        </field-messages>
                      </validate>
                  </div>
                </div> -->
                <br><br>
                <div class="col-sm-7" v-show="show_payment_form_details" style="margin-bottom: 10px; margin-top: 10px">
                    <datepicker :format="format" v-model="selected_payment_date"  placeholder="Select the date the payment was made">
                    </datepicker>
                </div>
                <br><br>
                <div class="col-sm-12" v-show="show_payment_form_details">
                    <div class="col-sm-7"> 
                      <label for="compartments"> Number of Cash Deposits</label>
                      <input v-model="deposit.cash_deposit_frequency"  name="compartments" type="number"  min="0" required autofocus placeholder="Number of Cash Deposits" class="form-control" id=""/>
                    </div>
                        <br>
                      <div v-for="n in parseInt(deposit.cash_deposit_frequency)" >
                       
                        <div class="form-group row">    
                                  <div class="col-sm-3">
                                    <validate tag="div">
                                    <div class="form-group">
                                        <label for="bank_name">Bank Name</label>
                                         <select  name="cash_bank_name+n"  size="1" class="form-control" v-model="deposit.cash_deposit_bank[n-1]" >
                                            <option v-for="(option, index) in available_banks"
                                                                  v-bind:value="option.name" >{{ option.name }}
                                            </option>                       
                                         </select>
                                    </div>
                                    <field-messages name="cash_bank_name+n" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Bank Name is required</div>
                                    </field-messages>
                                    </validate>
                                  </div>
                                  
                                  <div class="col-sm-3">
                                    <!-- <validate tag="div"> -->
                                    <div class="form-group">
                                        <label for="account_number">Account Number</label>
                                        <input v-model="deposit.account_number[n-1]" name="account_number+n" type="text" autofocus :placeholder="account_number+' '+n" class="form-control" id="account_number"/>

                                    </div>
                                    <!-- <field-messages name="account_number+n" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Account Number is required</div>
                                    </field-messages>
                                    </validate> -->
                                  </div>
                                  <div class="col-sm-3">
                                    <!-- <validate tag="div"> -->
                                    <div class="form-group">
                                        <label for="teller_number">Teller Number</label>
                                        <input v-model="deposit.teller_number[n-1]" name="teller_number+n" type="text" autofocus :placeholder="teller_number+' '+n" class="form-control" id="teller_number"/>  

                                    </div>
                                    <!-- <field-messages name="teller_number+n" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Teller Number is required</div>
                                    </field-messages>
                                    </validate> -->
                                  </div>

                                  <div class="col-sm-3">
                                    <validate tag="div">
                                    <div class="form-group">
                                        <label for="deposit_amount">Amount Deposited</label>
                                        <input v-model="deposit.deposit_amount[n-1]" name="deposit_amount+n" type="text" autofocus  class="form-control" id="deposit_amount"/>  

                                    </div>
                                    <field-messages name="deposit_amount+n" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Amount Deposited</div>
                                    </field-messages>
                                    </validate>
                                  </div>
                                 
                        </div>
                      </div>
                  </div>

                  <div class="col-sm-12" v-show="show_payment_form_details">
                    <div class="col-sm-7"> 
                      <label for="compartments"> Number of Bank POS Payment</label>
                      <input v-model="deposit.pos_frequency"  name="compartments" type="number" required autofocus placeholder="Number of Bank POS Payment" class="form-control" min="0" id=""/>
                    </div>
                        <br>
                      <div v-for="n in parseInt(deposit.pos_frequency)" >
                       
                        <div class="form-group row">    
                                  <div class="col-sm-4">
                                    <validate tag="div">
                                    <div class="form-group">
                                        <label for="bank_name">Bank Name</label>
                                         <select  name="bank_name+n"  size="1" class="form-control" v-model="deposit.pos_bank[n-1]" >
                                            <option v-for="(option, index) in available_banks"
                                                                  v-bind:value="option.name" >{{ option.name }}
                                            </option>                       
                                         </select>
                                    </div>
                                    <field-messages name="bank_name+n" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Bank Name is required</div>
                                    </field-messages>
                                    </validate>
                                  </div>
                                  
                                  <div class="col-sm-4">
                                   <!--  <validate tag="div"> -->
                                    <div class="form-group">
                                        <label for="pos_receipt_range">POS Receipt Range</label>
                                        <input v-model="deposit.pos_receipt_range[n-1]" name="pos_receipt_range+n" type="text" autofocus class="form-control" id="pos_receipt_range"/>

                                    </div>
                                   <!--  <field-messages name="bank_name" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">POS Receipt Range</div>
                                    </field-messages>
                                    </validate> -->
                                  </div>
                                  <div class="col-sm-4">
                                    <validate tag="div">
                                    <div class="form-group">
                                        <label for="pos_amount">Total Amount Collected</label>
                                        <input v-model="deposit.pos_amount[n-1]" name="pos_amount+n" type="text" autofocus  class="form-control" id="pos_amount"/>  

                                    </div>
                                    <field-messages name="pos_amount+n" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Total Amount Collected</div>
                                    </field-messages>
                                    </validate>
                                  </div>
                                 
                        </div>
                      </div>
                  </div>
                
                <!-- <div class="col-sm-12">
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
              
                <div class="col-sm-12">
                    <datepicker :format="format" v-model="selected_payment_date"  placeholder="Select the date the payment was made">
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
                </div> -->
                <div class="col-sm-12" v-show="show_note_form">
                    <label  class="col-sm-7" for="date">Note for cash difference</label>
                    <br>
                    <textarea   class="col-sm-7" v-model="deposit.note"  placeholder="Leave a note explaining cash difference">
                   </textarea> 
                      <br><br><br>
                </div>
              
                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input v-show="show_payment_form_details" type="submit" value="Submit Payment" class="btn btn-success" />
                  </div>
                </div>
                <br>
              </div>

            </vue-form>
          </div>
          <div class="col-sm-12"  v-show="show_setup_form">
            
            <div>
                <span v-on:click="button_toggle" style="float: left; margin-bottom: 10px" class="toggle btn btn-info btn-lg">{{this.button_text}}</span>             
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
          html: true,
        },
        {
          label: 'Payment Date',
          field: 'teller_date',
          numeric: false,
          html: true,
        },{
          label: 'Amount(N)',
          field: 'amount',
          numeric: false,
          html: true,
        }, 
        {
          label: 'Date Total Expected(N)',
          field: 'date_total_expected_amount',
          numeric: false,
          html: true,
        },{
          label: 'Type',
          field: 'payment_type',
          numeric: false,
          html: true,
        },{
          label: 'Bank Name',
          field: 'bank',
          numeric: false,
          html: true,
        },{
          label: 'Teller Number',
          field: 'teller_number',
          numeric: false,
          html: true,
        }, {
          label: 'Account Number',
          field: 'account_number',
          numeric: false,
          html: true,
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
        },
        {
          label: 'Note',
          field: 'note',
          numeric: false,
          html: true,
        },{
          label: 'Uploaded On',
          field: 'created_at',
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
        account_number: "Account Number",
        teller_number: "Teller Number",
        selected_payment_date: "",
        station_pumps:"",
        company_stations: "",
        added_product_name: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        show_payment_form_details: false,
        show_note_form: false,
        deposit : {
          teller_date: "",
          reading_date:"",
          cash_deposit_bank: [],
          pos_bank:[],
          expected_amount:0.00,
          deposit_amount:[],
          pos_amount: [],
          teller_number:[],
          cash_deposit_frequency: 0,
          pos_frequency:0,
          account_number:[],
          pos_receipt_range:[],         
          note: "",
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
          store.commit("activateLoader", "start");
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
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
              store.commit("activateLoader", "end");   
              if(response.data.data == 0){
                this.$SmoothScroll(document.getElementById("content-header"));
                store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No sales recorded for the selected date', 'show_alert': true});
                  return ;
                  }
              this.deposit.expected_amount = parseFloat(response.data.data);
              this.show_payment_form_details = true;
              this.show_note_form = false;
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
          //console.log(station_id);
          axios.get(this.$store.state.host_url+"/deposits/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
             }).then(response => {
                store.commit("activateLoader", "end");   
                let payment_data = response.data.data;
                let payment_data_by_date = {};
                payment_data.forEach(element => {
                  if( payment_data_by_date[element.reading_date] == undefined){
                      payment_data_by_date[element.reading_date] = Array();
                      payment_data_by_date[element.reading_date].push(element);
                  }
                  else{
                    payment_data_by_date[element.reading_date].push(element);
                  }
                });
                //console.log(payment_data_by_date);
                // var payment_data_by_date_array = Object.keys(payment_data_by_date).map(function(key) {
                //  return [key, payment_data_by_date[key]];
                // });

                for(var element in payment_data_by_date){
                  var amount_string = '';
                  var account_number_string = '';
                  var pos_receipt_range_string = '';
                  var teller_number_string = '';
                  var bank_string = '';
                  var teller_date_string = '';
                  var reading_date = element;
                  var date_total_expected_amount = element[0].date_total_expected_amount;
                  var payment_type_string = '';
                  var created_at_string= '';
                  var note_string = '';
                  //console.log(payment_data_by_date[reading_date]);
                  payment_data_by_date[reading_date].forEach( inner_element => {
                    console.log(inner_element);
                    amount_string = amount_string+'<span >'+inner_element.amount + '</span><br>';
                    account_number_string = account_number_string + '<span >'+inner_element.account_number + '</span><br>';
                    pos_receipt_range_string =  pos_receipt_range_string + '<span >'+inner_element.pos_receipt_range + '</span><br>';
                    teller_number_string = teller_number_string='<span >'+inner_element.teller_number + '</span><br>';
                    bank_string = bank_string + '<span >'+inner_element.bank + '</span><br>';
                    teller_date_string = teller_date_string + '<span >'+inner_element.teller_date + '</span><br>';
                    payment_type_string = payment_type_string + '<span >'+inner_element.payment_type + '</span><br>';
                    created_at_string = created_at_string + '<span >'+inner_element.created_at + '</span><br>';
                    note_string =note_string + '<span >'+inner_element.note + '</span><br>';
                  });

                 this.tableData.push({'amount': amount_string, 'account_number': account_number_string, 
                'pos_receipt_range': pos_receipt_range_string, 'bank': bank_string, 'teller_number': teller_number_string, 'teller_date': 
                teller_date_string, 'created_at': created_at_string, 'payment_type': payment_type_string, 'note': note_string});

                }
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
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
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

          let total_amount_filled = 0;
          for (var i = 0; i <this.deposit.pos_amount.length ;  i++) {
            total_amount_filled = total_amount_filled + parseFloat(this.deposit.pos_amount[i]);
          }
          for (var i =0; i < this.deposit.deposit_amount.length;  i++) {
            total_amount_filled = total_amount_filled + parseFloat(this.deposit.deposit_amount[i]);
          }
           console.log(this.deposit.note);
          console.log(total_amount_filled);

          if( ( (this.deposit.expected_amount - total_amount_filled) > 200 || (this.deposit.expected_amount - total_amount_filled) < -200) && (this.deposit.note == "") ){
              store.commit("showAlertBox", {'alert_type': 'alert-danger',
                         'alert_message': 'A difference of over NGN 200.00 is detected, please fill the note below stating the reason', 'show_alert': true});
              store.commit("activateLoader", "end");
              this.show_note_form = true;
              return;
          }

          this.deposit.payment_date = new Date(this.selected_payment_date).toDateString();
          this.deposit.reading_date = new Date(this.selected_reading_date).toDateString();
           let deposit_detail = {
            deposits: this.deposit
          };
          axios.post(this.url, deposit_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            //console.log(response.data);
            let api_response = response.data;
          if (api_response.status === true) {
             this.tableData = response.data.data;
             
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Payment Added Successfully', 'show_alert': true});
              this.formstate.$submitted=false;
              this.button_toggle();
             // this.deposit= {};
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
