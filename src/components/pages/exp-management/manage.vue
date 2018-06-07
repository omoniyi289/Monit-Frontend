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
          
          <div class="col-5">
            <vue-form :state="formstate" @submit.prevent="create_expense_header" v-show="show_setup_form && fill_form">
             <b-card header="Add Expense" header-tag="h4" class="bg-info-card">
              <div class="row">
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="amount">Expense Amount</label>
                      <input v-model="expense.total_amount" name="amount" type="number" required autofocus placeholder="Amount" class="form-control" id="serial_number"/>
                      <field-messages name="amount" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Amount is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                    <datepicker required :format="format" v-model="selected_date"  placeholder="Select Date"></datepicker>
                    <br>
                </div>

                
                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" value="NEXT" class="btn btn-primary" />
                  </div>
                </div>
              </div>
             </b-card>
            </vue-form>
            
          </div>
          <div class="col-1">
          </div>
          <div class="col-5">
            <vue-form :state="formstate3" @submit.prevent="submit_expenses" v-show="show_setup_form_2 && fill_form_2">
             <b-card header="Add Expense Items" header-tag="h4" class="bg-info-card"> 
              <div class="row">
                
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="amount"> Expense Code</label>
                      <input  readonly v-model="expense.expense_code" name="amount" type="number" required autofocus placeholder="" class="form-control" id="serial_number"/>
                      <field-messages name="amount" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                    <div class="form-group">
                      <validate tag="div">
                        <label for="expenses_type">Expenses Type</label>
                        <select id="expenses_type" name="expenses_type" size="1" class="form-control" v-model="expense_item.expense_type" required >
                          <option value="0" selected disabled>Please select</option>
                          <option value="Authorised Withdrawals">Authorised Withdrawals</option>
                          <option value="Fuel for Generator">Fuel for Generator</option>
                          <option value="Generator Repairs and Maintenance">Generator Repairs and Maintenance</option>
                          <option value="Others">Others</option>
                          <option value="Product Purchase">Product Purchase</option>
                          <option value="Pump Maintenance">Pump Maintenance</option>
                          <option value="Regulatory Expenses">Regulatory Expenses</option>
                          <option value="Salaries">Salaries</option>
                          <option value="Stationery">Stationery</option>
                          <option value="Tank Maintenance">Tank Maintenance</option>
                        </select>
                        <field-messages name="expenses_type" show="$invalid && $submitted" class="text-danger">
                              <div slot="required">Expenses Type is required</div>
                        </field-messages>
                      </validate>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="item_code">Item Code</label>
                      <input v-model="expense_item.item_code" name="item_code" type="text" required autofocus placeholder="Item Code" class="form-control" id="serial_number"/>
                      <field-messages name="item_code" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Item Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="description">Item Description</label>
                      <input v-model="expense_item.item_description" name="description" type="text" required autofocus placeholder="Description" class="form-control" id="serial_number"/>
                      <field-messages name="description" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Description is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="quantity">Quantity</label>
                      <input v-model="expense_item.quantity" name="quantity" type="number" required autofocus placeholder="Quantity" class="form-control" id="quantity"/>
                      <field-messages name="quantity" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Quantity is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="unit_cost">Unit Cost</label>
                      <input v-model="expense_item.unit_amount" name="unit_cost" type="number" required autofocus placeholder="Unit Cost" class="form-control" id="unit_cost"/>
                      <field-messages name="unit_cost" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Unit Cost is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="total_cost">Total Cost</label>
                      <input readonly  name="total_amount" :value="parseFloat(expense_item.quantity) * parseFloat(expense_item.unit_amount)" type="number" required autofocus placeholder="Total Cost" class="form-control" id="total_cost"/>
                      <field-messages name="total_cost" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Total Cost is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <span v-on:click="add_expense_item" class="btn btn-primary btn-md">Add Item</span>
                    <input type="submit" value="Save Expense" class="btn btn-success btn-lg" />
                  </div>
                </div>
              </div>
              </b-card>
            </vue-form>
            
          </div>
          <div class="col-1">
          </div>
          
          <div class="col-sm-6"  v-show="show_setup_form">
           
            <div>
                <span v-on:click="button_toggle" style="float: right; margin-bottom: 10px" class="toggle btn btn-info ">{{this.button_text}}</span>             
            </div>
            <div class="table-responsive">
              <datatable title="Expenses Incurred" :rows="tableData" :columns="columndata">
                <template slot="actions" slot-scope="props">
                    <div >
                      <i class='fa fa-pencil text-info mr-3' @click="onAction('view', props.rowData, props.rowIndex)">
                        
                      </i>
                    </div>
                </template>
              </datatable>
            </div>
          </div>
          <div class="col-sm-6"  v-show="show_setup_form && add_items">
            <div>
               <br> <br>  
            </div>
            <div class="table-responsive">
              <datatable title="Currently Added Expenses Items Incurred" :rows="expense.items" :columns="columndata_2">
                <template slot="actions" slot-scope="props">
                    <div >
                      <i class='fa fa-trash text-danger' @click="onAction('delete', props.rowData, props.rowIndex)"></i>
                    </div>
                </template>
              </datatable>
            </div>
          </div>
          <div class="col-sm-6" v-show="view_items">
            <div>
               <br> <br>  
            </div>
            <div class="table-responsive">
              <datatable title="Expenses Items for Selected Expense" :rows="items_tableData" :columns="items_columndata">
              </datatable>
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
  import moment from 'moment';
  import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     
  import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
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
          label: 'Code',
          field: 'expense_code',
          numeric: false,
          html: false,
          }, {
          label: 'Date',
          field: 'expense_date',
          numeric: false,
          html: false,
        },{
          field: '__slot:actions',
          label: 'Actions',
          },
        {
          label: 'Station',
          field: 'station.name',
          numeric: false,
          html: false,
        },{
          label: 'Total Cost',
          field: 'total_amount',
          numeric: false,
          html: true,
        }],
        columndata_2: [
         {
            field: '__slot:actions',
            label: 'Actions',
            }
        ,{
          label: 'Expense Type',
          field: 'expense_type',
          numeric: false,
          html: false,
        }, {
          label: 'Item Code',
          field: 'item_code',
          numeric: false,
          html: false,
        },{
          label: 'Item Description',
          field: 'item_description',
          numeric: false,
          html: true,
        }
        ,{
          label: 'Total Cost',
          field: 'total_amount',
          numeric: false,
          html: true,
        }],
        items_columndata: [
          {
          label: 'Item Code',
          field: 'item_code',
          numeric: false,
          html: false,
        },
        {
          label: 'Expense Type',
          field: 'expense_type',
          numeric: false,
          html: false,
        }, {
          label: 'Item Description',
          field: 'item_description',
          numeric: false,
          html: true,
        }
        ,{
          label: 'Total Cost',
          field: 'total_amount',
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
        formstate3: {},
        view_items: false,
        add_items: false,
        show_setup_form : false,
        show_setup_form_2 : false,
        tableData: [],
        items_tableData:[],
        fill_form:false,
        fill_form:false,
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
          total_amount: "",
         expense_date:"",
         expense_code:'',
         items:[],
        },
        expense_item :{
           expense_type: 0,
           item_code:'',
           item_description:'',
           quantity:0,
           unit_amount: 0,
           total_amount: 0,

         },

      }
    },
    methods: {
      button_toggle(){
        this.fill_form = !this.fill_form;
         this.fill_form_2 = !this.fill_form_2;
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
          //console.log(station_id);
          axios.get(this.$store.state.host_url+"/expenses/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
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
     
      submit_expenses() {
        this.$SmoothScroll(document.getElementById("content-header"));
       
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          //include station and company_id
          this.expense.station_id= this.preset.station_id;
          this.expense.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.expense.created_by= user_details.id;
          ////console.log(this.expense);
          //return;
           let expense_detail = {
            expense_header : this.expense
          };
          axios.post(this.url, expense_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
              this.tableData.push(station_response.data);
             
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Expenses Added Successfully', 'show_alert': true});
                       this.expense={};
                       this.formstate.$submitted=false;
                       this.formstate2.$submitted=false;
                       this.view_items= false;
                       this.add_items= false;
            }
          }
        ).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
      }
      ,
     
      create_expense_header() {
        this.$SmoothScroll(document.getElementById("content-header"));

        if (this.formstate.$invalid) {
          return;
        } else {
          this.expense.expense_date = new Date(this.selected_date).toDateString();
          this.expense.expense_code = moment(new Date()).format('YYYYMMDDHHmmss');
          this.show_setup_form_2 = true;
          this.fill_form_2= true;
          this.add_items= true;
          this.view_items= false;
      }
    },
    add_expense_item(){
      this.expense_item.total_amount = parseFloat(this.expense_item.quantity) * parseFloat(this.expense_item.unit_amount);
      let user_details = JSON.parse(localStorage.getItem('user_details'));
      this.expense_item.created_by= user_details.id;
      this.expense.items.push(this.expense_item);
      this.expense_item = {};
      //this.expense.items;
    },
    onAction (action, data, index) {
              //  this.$SmoothScroll(document.getElementById("content-header"));
                if(action == 'view'){
                    this.items_tableData = data.items;
                    //console.log(data.items);
                    this.add_items= false;
                    this.view_items= true;
                    this.show_setup_form= true;
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
            deleteItem(data){
                this.$modal.hide('dialog');    
                this.expense.items.splice(this.expense.items.indexOf(data), 1);
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
