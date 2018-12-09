`<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">

          <div class="col-md-12">
            <MaintenanceCsview title="Custom Table"  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button class="btn btn-success" 
                      @click="show_station_info( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
            </MaintenanceCsview>
         
            
            <hr>
          </div>
             
           <!--  <div class="col-lg-2">  
            Payment Status            
                <select class="form-control" v-model="selected_payment_status">
                  <option selected value=""> All Categories</option>
                  <option value="Paid"> Paid</option>
                  <option value="Unpaid"> Unpaid</option>
                </select>     
            </div> -->

          <br><br><br>
          <div class="col-md-12">
           
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              
             <!--  <b-card header-tag="h4" class="bg-info-card" header="Pump Readings">
                <div class="row ">
                  <div class="col-lg-12">               
                    <b-tabs>
                        <b-tab title="Pump Readings" >
                           <table class="table">
                              <thead>
                                <tr>
                                  <th>Station</th>
                                  <th>Nozzle Code</th>
                                  <th>Start Totalizer Reading</th>
                                  <th>End Totalizer Reading</th>
                                  <th>Total Sales</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for ="(option, index) in open_pump_readings">
                                  <th>{{option.station_name}}</th>
                                  <th>{{option.nozzle_code}}</th>
                                  <td>
                  
                                      <input id="rd" readonly :name="a+index" type="number" v-model="open_pump_readings[index].min_reading" placeholder="" class="form-control" />
                                     
                                  </td>
                                  <td>
                                      <input id="rd" readonly :name="b+index" type="number" v-model="open_pump_readings[index].max_reading" placeholder="" class="form-control" />    
                                  </td>
                                  <td>
                                      <input id="rd" readonly :name="c+index" type="number" v-model="open_pump_readings[index].total_sales" placeholder="" class="form-control" />    
                                  </td>
                                </tr>
                              </tbody>
                            </table> 
                            
                        </b-tab>
                       
                    </b-tabs>           
                  </div>
                </div>
              </b-card> -->
             <div class="table-responsive">
              <datatable title="Invoices Table" :rows="open_maintenance_log" :columns="columndata">
              </datatable>
            </div>
            </vue-form>
          </div>   
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import MaintenanceCsview from "components/plugins/Company-Station-View/Maintenance-CSView.vue";
  import VueForm from "vue-form";   
  import Datepicker from 'vuejs-datepicker';  
  import vueSmoothScroll from 'vue-smoothscroll';     
  Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  import moment from 'moment';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,MaintenanceCsview,Datepicker
    },
    data() {
   
      return {
        columndata: 
        [{
          label: 'Station',
          field: 'station_name',
          numeric: false,
          html: false,
        },
         {
          label: 'Pump Number',
          field: 'combined_pump_nozzle_code',
          numeric: false,
          html: false,
        },
        {
          label: 'Issue Date',
          field: 'issue_date',
          numeric: false,
          html: false,
        }, {
          label: 'Invoice Number',
          field: 'invoice_number',
          numeric: false,
          html: false,
        }, {
          label: 'Payment Status',
          field: 'payment_status',
          numeric: false,
          html: false,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: [],
        available_company: [],
        selected_volume_category: '',
        products: "",
        selected_payment_status:'',
        format: 'yyyy-MM-dd',
        open_maintenance_log:[],
        set_date: "",
        selected_start_date: "",
        selected_end_date: "",
        show_multi_company: false,
        show_single_company: false,
        trd: "tank_reading",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        e: "e",//0037116128
        pump_readings:[],
        final_stock_info: {},
        final_pump_info: {},
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        open_pump_readings : [],

      }
    },
    methods: {
      to_totalizer(){
        
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
      
      show_station_info(station_id, company_id){
          store.commit("activateLoader", "start");
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        this.$store.state.show_alert = false;
        this.open_pump_readings = [];
       

        if (this.formstate2.$invalid) {
          return;
        } else {
          let user_details = JSON.parse(localStorage.getItem('user_details'));
           
          let params = 'station_id='+this.preset.station_id+'&payment_status='+this.selected_payment_status; 
            axios.get(this.$store.state.host_url+"/equipment_maintenance/get_pump_maintenance_log?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            this.maintenance_readings = response.data.data;
            this.open_maintenance_log = [];
            this.show_setup_form = true;
            this.maintenance_readings.forEach(element => {

              if( element.D_invoice_number != null ){
                  this.open_maintenance_log.push({ 'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station.name, 'issue_date': element.D_issue_date,  'payment_status' : element.D_payment_status, 'invoice_number' : element.D_invoice_number });
              }

               if(element.MD_invoice_number != null ){
                  this.open_maintenance_log.push({'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station.name, 'issue_date': element.MD_issue_date,  'payment_status' : element.MD_payment_status, 'invoice_number' : element.MD_invoice_number});
              }

              if(element.MMD_invoice_number != null ){
                  this.open_maintenance_log.push({'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station.name, 'issue_date': element.MMD_issue_date,  'payment_status' : element.MMD_payment_status, 'invoice_number' : element.MMD_invoice_number});
              }


             
          });
            store.commit("activateLoader", "end"); 
          
                  }).catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });

          
        }
      },


       show_company_info(company_id){
          store.commit("activateLoader", "start");
          let user_details = JSON.parse(localStorage.getItem('user_details'));
           
          let params = 'company_id='+company_id+'&payment_status='+this.selected_payment_status; 
            axios.get(this.$store.state.host_url+"/equipment_maintenance/get_pump_maintenance_log?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
            this.maintenance_readings = response.data.data;
            this.open_maintenance_log = [];
            this.show_setup_form = true;
            this.maintenance_readings.forEach(element => {

              if( element.D_invoice_number != null ){
                  this.open_maintenance_log.push({ 'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station.name, 'issue_date': element.D_issue_date,  'payment_status' : element.D_payment_status, 'invoice_number' : element.D_invoice_number });
              }

               if(element.MD_invoice_number != null ){
                  this.open_maintenance_log.push({'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station.name, 'issue_date': element.MD_issue_date,  'payment_status' : element.MD_payment_status, 'invoice_number' : element.MD_invoice_number});
              }

              if(element.MMD_invoice_number != null ){
                  this.open_maintenance_log.push({'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station.name, 'issue_date': element.MMD_issue_date,  'payment_status' : element.MMD_payment_status, 'invoice_number' : element.MMD_invoice_number});
              }


             
          });
            store.commit("activateLoader", "end"); 
          
                  }).catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });

      },
     

    },
    mounted: function() {
      store.commit("check_login_details");
      this.show_company_info(8); //enyo 
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
