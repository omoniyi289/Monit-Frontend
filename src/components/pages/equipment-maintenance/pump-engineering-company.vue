<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">

          <div class="col-md-12">
            <MaintenanceCsview title="Custom Table"  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button class="btn btn-success" 
                      @click="show_open_station_info( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
            </MaintenanceCsview>
         
            
            <hr>
          </div>
             <div class="col-lg-2">  
             Start Date          
                    <datepicker :format="format" v-model="selected_start_date"  placeholder="Select Start Date"></datepicker>     
            </div>
            <div class="col-lg-2">  
            End Date            
                    <datepicker :format="format" v-model="selected_end_date"  placeholder="Select End Date"></datepicker>     
            </div>
            <div class="col-lg-2">  
            Volume Categories            
                <select class="form-control" v-model="selected_volume_category">
                  <option selected value="0"> All Categories</option>
                  <option value="500000"> >=500,000 Litres</option>
                  <option value="1500000"> >=1,500,000 Litres</option>
                  <option value="2500000"> >=2,500,000 Litres</option>
                </select>     
            </div>
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
              <datatable title="Pump Readings Table" :rows="open_pump_readings" :columns="columndata">
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
          label: 'Totalizer Reading At Start Date',
          field: 'combined_min_reading',
          numeric: false,
          html: false,
        }, {
          label: 'Totalizer Reading At End Date',
          field: 'combined_max_reading',
          numeric: false,
          html: false,
        }, {
          label: 'Total Sales',
          field: 'total_sales',
          numeric: false,
          html: false,
        }, {
          label: '@ 500,000L Issue Date',
          field: 'D_issue_date',
          numeric: false,
          html: false,
        }, {
          label: '@ 500,000L Invoice Number',
          field: 'D_invoice_number',
          numeric: false,
          html: false,
        }, {
          label: '@ 1,500,000L Issue Date',
          field: 'MD_issue_date',
          numeric: false,
          html: false,
        }, {
          label: '@ 1,500,000L Invoice Number',
          field: 'MD_invoice_number',
          numeric: false,
          html: false,
        }, {
          label: '@ 2,500,000L Issue Date',
          field: 'MMD_issue_date',
          numeric: false,
          html: false,
        }, {
          label: '@ 2,500,000L Invoice Number',
          field: 'MMD_invoice_number',
          numeric: false,
          html: false,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/product_price_change',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: [],
        available_company: [],
        selected_volume_category: '',
        products: "",
        format: 'yyyy-MM-dd',
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
      
      show_open_station_info(station_id, company_id){
          store.commit("activateLoader", "start");
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        this.$store.state.show_alert = false;
        this.open_pump_readings = [];
        if(this.selected_start_date == ''  || this.selected_end_date == '' ){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Please select Start and End Date to continue', 'show_alert': true});
          store.commit("activateLoader", "end");
          return;
            }

        if (this.formstate2.$invalid) {
          return;
        } else {
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          var d_date = new Date(this.selected_start_date);
          d_date.setDate(d_date.getDate());
          this.selected_start_date = moment(d_date).format('YYYY-MM-DD');
          var d_date = new Date(this.selected_end_date);
          d_date.setDate(d_date.getDate());
          this.selected_end_date = moment(d_date).format('YYYY-MM-DD');

          let params = 'station_id='+this.preset.station_id+'&start_date='+this.selected_start_date+'&end_date='+this.selected_end_date+'&volume_category='+this.selected_volume_category; 
         
          axios.get(this.$store.state.host_url+"/equipment_maintenance/pump_readings?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
      
              this.pump_readings = response.data.data;
              this.show_setup_form = true;
              this.pump_readings.forEach(element => {
                   this.open_pump_readings.push({'combined_pump_nozzle_code': element.combined_pump_nozzle_code,'station_name': element.station_name, 'station_id': element.station_id,
                'combined_totalizer_reading': parseFloat(element.combined_totalizer_reading).toFixed(2), 
                'combined_min_reading': parseFloat(element.combined_min_reading).toFixed(2), 
                'combined_max_reading': parseFloat(element.combined_max_reading).toFixed(2), 
                 'total_sales': parseFloat(element.combined_max_reading - element.combined_min_reading).toFixed(2), 
                'D_issue_date': ( element.past_log.D_issue_date), 
                'MD_issue_date': ( element.past_log.MD_issue_date), 
                'MMD_issue_date': ( element.past_log.MMD_issue_date), 
                'D_invoice_number': ( element.past_log.D_invoice_number), 
                'MD_invoice_number': ( element.past_log.MD_invoice_number), 
                'MMD_invoice_number': ( element.past_log.MMD_invoice_number)});
                 });
                store.commit("activateLoader", "end"); 
                  }) 
          .catch(function(error) {
            store.commit("activateLoader", "end");   
            store.commit("catch_errors", error); 
            });
          
        }
      },
     

    },
    mounted: function() {
      store.commit("check_login_details");
      console.log(this.available_companies);
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
