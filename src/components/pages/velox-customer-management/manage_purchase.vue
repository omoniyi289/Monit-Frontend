<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate" @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-lg-5">
                  <div class="form-group" v-if="show_multi_company">
                    <validate tag="div">
                      Select Company
                      <select  name="company"  size="1" class="form-control" v-on:change="show_company_customers(preset.company_id)" v-model="preset.company_id" >
                          <option
                            v-for="(option, index) in available_companies"
                            v-bind:value="option.id"
                            >{{ option.name }}
                          </option>                       
                      </select>                     
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>

                  <div class="form-group" v-if="show_single_company">
                    <validate tag="div">
                      Select Company
                      <select  name="company" size="1" class="form-control" v-on:change="show_company_customers(preset.company_id)" v-model="preset.company_id" >
                        <option :value="available_company.id"
                          >{{ available_company.name }}
                        </option>
                        
                      </select>
                      
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>

                </div>
              <div class="col-sm-12" >
                 <hr>
              </div>

              <div class="col-lg-5" v-if="show_customer_pane">
                  <div class="form-group" >
                    <validate tag="div">
                      Select Customer
                      <select  name="company"  size="1" class="form-control" v-on:change="show_customer_purchase_history(model.selected_customer)" v-model="model.selected_customer" >
                          <option
                            v-for="(option, index) in company_customers"
                            v-bind:value="option"
                            >{{ option.name }}
                          </option>                       
                      </select>                     
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>

                </div>
              <div class="col-sm-12" v-if="show_customer_pane">
                 <hr>
              </div>

  
              </div>
            </vue-form>
            <br><br>
          </div>

          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
              <datatable title="Purchases Log" :rows="tableData" :columns="columndata">
              </datatable>
            </div>
          </div>
         
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'; import store from 'src/store/store.js';
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";    
  import vueSmoothScroll from 'vue-smoothscroll'; 
  Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import Multiselect from 'vue-multiselect';
  import Datepicker from 'vuejs-datepicker';

  Vue.use(VueForm, options);
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Multiselect,
      Datepicker
    },
    data() {
      return {columndata: [
         {
          label: 'Date',
          field: 'created_at',
          numeric: false,
          html: false,
        },{
          label: 'Bought At (Station)',
          field: 'vendor_station_name',
          numeric: false,
          html: false,
        },
         {
          label: 'Vehicle No.',
          field: 'vehicle_plate_number',
          numeric: false,
          html: false,
        }
        ,
         {
          label: 'Product',
          field: 'product',
          numeric: false,
          html: false,
        } ,
         {
          label: 'Pump',
          field: 'pump',
          numeric: false,
          html: false,
        },
         {
          label: 'Volume',
          field: 'volume',
          numeric: false,
          html: false,
        },
         {
          label: 'Price',
          field: 'amount_paid',
          numeric: false,
          html: false,
        },
         {
          label: 'Attendant',
          field: 'attendant',
          numeric: false,
          html: false,
        }],
        
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/velox_manage_purchases',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        show_selector: true,
        available_companies: [],
        available_company: [],
        show_customer_pane: "",
        show_multi_company: false,
        show_single_company: false,
        available_roles: "",
        station_pumps:"",
        format: 'yyyy-MM-dd',
        selected_date:'',
        fill_form: false,
        company_customers: [],
        preset : {
          company_id: "",
        },
        

      }
    },
    methods: {
      
      show_company_customers(company_id){
        store.commit("activateLoader", "start");
        this.model = {
          submit_mode: 'UPLOAD PAYMENT'
        };
        this.company_customers = [];
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params='vendor_id='+company_id+'&status=In Partnership';
        axios.get(this.$store.state.host_url+"/velox_customer_accounts?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
                    this.company_customers = response.data.data; 
                    store.commit("activateLoader", "end");
                    this.show_customer_pane=true;


            ////console.log(this.tableData);     
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },
    show_customer_purchase_history(selected_customer){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params='customer_id='+selected_customer.company_id+'&vendor_id='+this.preset.company_id;
        axios.get(this.$store.state.host_url+"/velox_manage_purchases?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
                     let result = response.data.data;
                    this.sort_data(result);
                    store.commit("activateLoader", "end");
                    this.show_setup_form=true;


            ////console.log(this.tableData);     
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },

    sort_data(result){
        this.tableData = [];
        result.forEach(item => {
          this.tableData.push(item);
                    });
      },
        show_available_companies(){
          this.products = store.state.products;
        if(store.state.show_single_company){
          this.available_company = store.state.available_company;
          this.show_single_company = store.state.show_single_company;
        }else if(store.state.show_multi_company == true){
          this.available_companies = store.state.available_companies;
          this.show_multi_company = store.state.show_multi_company;
        }
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
