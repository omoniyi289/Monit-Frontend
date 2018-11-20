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
                      @click="show_station_cops( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
                </csview>
                <div class="col-lg-3">
                <i><b>please select date before proceed</b></i>
                    <datepicker :format="format" v-model="selected_survey_date"  placeholder="Select Date"></datepicker>     
               </div>
            <hr>      
          </div>

          <div class="col-sm-12">
          <b-card header='COPS Form' class="bg-info-card" v-show="fill_form">
            <vue-form :state="formstate" @submit.prevent="onSubmit" >
              <div class="row">
                
              <div class="form-group">

             
                <div class="col-sm-12"> 
                      <label style="font-weight: bold" for="location_frequency"> Number of Locations</label>
                      <input readonly v-model="cops.location_data.length"  name="location_frequency" type="number"  min="0" required autofocus placeholder="Number of Locations" class="form-control" id=""/>
                </div>

                <div class="col-sm-12"> 
                      <label  style="font-weight: bold" for="competitor_frequency"> Number of Competitors</label>
                      <input readonly v-model="cops.competitor_data.length"  name="competitor_frequency" type="number"  min="0" required autofocus placeholder="Number of Competitors" class="form-control" id=""/>
                </div>

                <div class="col-sm-12"> 
                      <label style="font-weight: bold" for="d2d_frequency"> Number of D2Ds</label>
                      <input readonly v-model="cops.d2d_data.length"  name="d2d_frequency" type="number"  min="0" required autofocus placeholder="Number of D2Ds" class="form-control" id=""/>
                </div>
              </div>

                <div class="col-sm-12" >
                  <br><br>
                  <table class="table  table-striped" >
                      <tr>
                          <th colspan="4"></th>
                          <th colspan="2" style="text-align: center" >PMS</th>
                          <th colspan="2"  style="text-align: center" >AGO</th>
                          <th colspan="2"  style="text-align: center">DPK</th>
                          <th colspan="2"  style="text-align: center" >LUBES</th>
                          <th colspan="2"  style="text-align: center" >LPG</th>
                      </tr>
                      <tr style="text-align: center">
                          <th colspan="4" >B2B</th>
                          <th >OMP</th>
                          <th >COMPANY</th>
                          
                          <th >OMP</th>
                          <th >COMPANY</th>
                          
                          <th >OMP</th>
                          <th >COMPANY</th>
                          
                          <th >OMP</th>
                          <th >COMPANY</th>

                          <th >OMP</th>
                          <th >COMPANY</th>
                      </tr> 

                      <tr>
                          <th colspan="4" >LOCATION</th>
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>

                          <th ></th>
                          <th ></th>
                      </tr> 

                      <tr v-for="n in cops.location_data" > 
                          <td colspan="4"  ><input readonly v-model="n.location" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_pms" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_pms" type="text" class="form-control" /> </td>

                          <td ><input readonly v-model="n.omp_ago" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_ago" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_dpk" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_dpk" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_lube" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_lube" type="text" class="form-control" /> </td>

                          <td ><input readonly v-model="n.omp_lpg" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_lpg" type="text" class="form-control" /> </td>
                          
                         
                      </tr>    


                      <tr>
                          <th colspan="4" >COMPETITOR'S DATA</th>
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>

                          <th ></th>
                          <th ></th>
                      </tr> 

                      <tr v-for="n in cops.competitor_data" > 
                          <td colspan="4"  ><input readonly v-model="n.location" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_pms" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_pms" type="text" class="form-control" /> </td>

                          <td ><input readonly v-model="n.omp_ago" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_ago" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_dpk" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_dpk" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_lube" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_lube" type="text" class="form-control" /> </td>

                          <td ><input readonly v-model="n.omp_lpg" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_lpg" type="text" class="form-control" /> </td>
                          
                         
                      </tr>    

                      <tr>
                          <th colspan="4" >D2D</th>
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>

                          <th ></th>
                          <th ></th>
                      </tr> 

                      <tr v-for="n in cops.d2d_data" > 
                          <td colspan="4"  ><input readonly v-model="n.location" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_pms" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_pms" type="text" class="form-control" /> </td>

                          <td ><input readonly v-model="n.omp_ago" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_ago" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_dpk" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_dpk" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.omp_lube" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_lube" type="text" class="form-control" /> </td>

                          <td ><input readonly v-model="n.omp_lpg" type="text" class="form-control" /> </td>
                          <td ><input readonly v-model="n.company_lpg" type="text" class="form-control" /> </td>
                          
                         
                      </tr>                
                      

                  </table>
                </div>

               
              </div>

            </vue-form>
          </b-card>
          </div>
          
        </div>
      </b-card>
    </div>
            <div class="col-sm-12" v-show="fill_form_2">
              <div class="table-responsive">
                <datatable title="Survey History" :rows="tableData" :columns="columndata">
                 
                </datatable>
              </div>
            </div>

  </div>
</template>
<script>
  import Vue from 'vue';
  import store from 'src/store/store.js';
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     
  import vueSmoothScroll from 'vue-smoothscroll';     
  Vue.use(vueSmoothScroll);
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
      return {
        columndata: [
         {
          label: 'Survey Date',
          field: 'survey_date',
          numeric: false,
          html: false,
        },{
          label: 'Uploaded By',
          field: 'uploader.fullname',
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
        url: this.$store.state.host_url+'/cops',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_banks : '',
        available_companies: "",
        button_text: "ADD NEW SURVEY",
        selected_survey_date: "",
        company_stations: "",
        added_product_name: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        show_submit_button: false,
        cops : {
         d2d_data: [],
        competitor_data: [],
        location_data: [],
        },
        fill_form_2: false,
        

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
         show_station_cops(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        this.fill_form= false; 
        this.show_past_report_summary();
        if (this.formstate2.$invalid) {
          return;
        } else if(this.selected_survey_date == ''){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Please select a survey date to view a detailed report', 'show_alert': true});
           return;
            }
          else {
          store.commit("activateLoader", "start");
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let survey_date = new Date(this.selected_survey_date).toDateString();
          let params= 'station_id='+this.preset.station_id+'&survey_date='+survey_date;
          axios.get(this.$store.state.host_url+"/cops?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
             }).then(response => {
                store.commit("activateLoader", "end");   
                let response_data = response.data.data;

                if(response_data.length > 0){
                  this.fill_form= true; 
                    for(var i = 0; i < response_data.length ; i++) {
                           let b2b = response_data[i];
                           if(b2b.location!= null){
                               this.cops.location_data.push(b2b);
                           }
                           else if(b2b.competitor != null){
                               this.cops.competitor_data.push(b2b);
                           }
                           else if(b2b.d2d != null){
                              this.cops.d2d_data.push(b2b);
                           }
                      }

                  }else
                  {
                    store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Oops! No survey submitted for the selected date', 'show_alert': true});
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
      show_past_report_summary(){
          store.commit("activateLoader", "start");
          this.fill_form_2 = true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
           let params= 'station_id='+this.preset.station_id+'&request_type=summary';
          axios.get(this.$store.state.host_url+"/cops?"+params,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
             }).then(response => {
                store.commit("activateLoader", "end");   
                this.tableData = response.data.data;

              });
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
<style>
  .form-control{
    transition: initial;
  }
  .col-md-2{
    margin-right: 3%;
  }
</style>
