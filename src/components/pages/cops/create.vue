<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
         <div class="col-md-12">
          <cview  v-on:update_comany_id="show_station_cops">
      
          </cview>                 
          <hr>
         </div>

          <div class="col-sm-12">
          <b-card header='' class="bg-info-card" v-show="fill_form">
            <vue-form :state="formstate" @submit.prevent="onSubmit" >
              <div class="row">
                
              <div class="form-group">

                <div class="col-sm-12">
                   <label for="date" style="font-weight: bold">Survey Date</label>
                    <datepicker :format="format" v-model="selected_survey_date"  placeholder="Select Survey Date">
                    </datepicker> 
                </div>

                <div class="col-sm-12"> 
                      <label style="font-weight: bold" for="location_frequency"> Number of Locations</label>
                      <input v-model="cops.location_frequency"  name="location_frequency" type="number"  min="0" required autofocus placeholder="Number of Locations" class="form-control" id=""/>
                </div>

                <div class="col-sm-12"> 
                      <label  style="font-weight: bold" for="competitor_frequency"> Number of Competitors</label>
                      <input v-model="cops.competitor_frequency"  name="competitor_frequency" type="number"  min="0" required autofocus placeholder="Number of Competitors" class="form-control" id=""/>
                </div>

                <div class="col-sm-12"> 
                      <label style="font-weight: bold" for="d2d_frequency"> Number of D2Ds</label>
                      <input v-model="cops.d2d_frequency"  name="d2d_frequency" type="number"  min="0" required autofocus placeholder="Number of D2Ds" class="form-control" id=""/>
                </div>
              </div>

                <div class="col-sm-12" >
                  <br><br>
                  <table class="table  table-striped" >
                      <tr  class="btn-primary" style="font-size: 20px">
                          <th colspan="4"></th>
                          <th colspan="2" style="text-align: center" >PMS</th>
                          <th colspan="2"  style="text-align: center" >AGO</th>
                          <th colspan="2"  style="text-align: center">DPK</th>
                          <th colspan="2"  style="text-align: center" >LUBES</th>
                          <th colspan="2"  style="text-align: center" >LPG</th>
                      </tr>
                      <tr style="text-align: center">
                          <th colspan="4" style="text-align: left" >B2B</th>
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

                      <tr  class="btn-info">
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

                      <tr v-for="n in parseInt(cops.location_frequency)" > 
                          <td colspan="4"  >
                            <select  class="form-control" v-model="cops.location_name[n-1]">
                              <option value="Anambra" >Anambra </option>
                              <option value="Enugu" >Enugu </option>
                              <option value="Kaduna" >Kaduna </option>
                              <option value="Kano" >Kano </option>
                              <option value="Lagos Area" >Lagos Area </option>
                              <option value="Makurdi" >Makurdi </option>
                              <option value="Benin" >Benin </option>
                              <option value="Calabar" >Calabar </option>
                              <option value="Suleja" >Suleja </option>
                              <option value="Gombe" >Gombe </option>
                              <option value="Gusau" >Gusau </option>                
                              <option value="Ibadan" >Ibadan </option>
                              <option value="Aba" >Aba </option>
                              <option value="Ilorin" >Ilorin </option>             
                              <option value="Jos" >Jos </option>
                              <option value="Minna" >Minna </option>
                              <option value="Ore" >Ore </option>
                              <option value="Owerri" >Owerri </option>
                              <option value="Port Harcourt" >Port Harcourt </option>
                              <option value="Warri" >Warri </option>
                              <option value="Yola" >Yola </option>
                            </select>
                     
                          </td>
        
                          <td ><input v-model="cops.location_omp_pms[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.location_company_pms[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.location_omp_ago[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.location_company_ago[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.location_omp_dpk[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.location_company_dpk[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.location_omp_lube[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.location_company_lube[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.location_omp_lpg[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.location_company_lpg[n-1]" type="text" class="form-control" /> </td>
                          
                         
                      </tr>    


                      <tr  class="btn-info">
                          <th colspan="9" >COMPETITORS PRICE</th>
                          
                          <th ></th>
                          
                          <th ></th>
                          <th ></th>

                          <th ></th>
                          <th ></th>
                      </tr> 

                      <tr v-for="n in parseInt(cops.competitor_frequency)" >
                          <td colspan="4"  >
                            <select  class="form-control" v-model="cops.competitor_name[n-1]">
                              <option value="Oando" >Oando </option>
                              <option value="Forte Oil" >Forte Oil   </option>
                              <option value="Total" >Total </option>
                              <option value="Sahara" >Sahara </option>
                              <option value="NIPCO" >NIPCO </option>
                              <option value="A A Rano" > A A Rano  </option>
                              <option value="Rahamaniya" >Rahamaniya </option>
                              <option value="Prudent Oil" >Prudent Oil   </option>
                              <option value="MRS" >MRS </option>
                              <option value="Petrocam" >Petrocam </option>
                              <option value="Second Coming" >Second Coming </option>
                              <option value="OVH" > OVH  </option>
                              <option value="Oko Oba/Ikeja" >Oko Oba/Ikeja </option>

                            </select>

                          </td>
                          <td ><input v-model="cops.competitor_omp_pms[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.competitor_company_pms[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.competitor_omp_ago[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.competitor_company_ago[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.competitor_omp_dpk[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.competitor_company_dpk[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.competitor_omp_lube[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.competitor_company_lube[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.competitor_omp_lpg[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.competitor_company_lpg[n-1]" type="text" class="form-control" /> </td>
                      </tr>

                      <tr  class="btn-info">
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

                      <tr v-for="n in parseInt(cops.d2d_frequency)" >
                          <td colspan="4"  >
                            <select  class="form-control" v-model="cops.d2d_name[n-1]">
                              <option value="Sahara" >Sahara </option>
                              <option value="Inter Oil" >Inter Oil </option>
                              <option value="NDYTEX" >NDYTEX </option>
                              <option value="Oando" >Oando </option>
                          </select>
                           </td>
                          <td ><input v-model="cops.d2d_omp_pms[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.d2d_company_pms[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.d2d_omp_ago[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.d2d_company_ago[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.d2d_omp_dpk[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.d2d_company_dpk[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.d2d_omp_lube[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.d2d_company_lube[n-1]" type="text" class="form-control" /> </td>

                          <td ><input v-model="cops.d2d_omp_lpg[n-1]" type="text" class="form-control" /> </td>
                          <td ><input v-model="cops.d2d_company_lpg[n-1]" type="text" class="form-control" /> </td>
                      </tr>             
                      

                  </table>
                </div>

                <div class="col-sm-5">
                </div>
                <div class="col-sm-7">
                  <div class="form-group float-left">
                    <input type="submit" value="CLICK TO SUBMIT SURVEY" class="btn btn-success" />
                  </div>
                </div>
               
              </div>

            </vue-form>
          </b-card>
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
  import cview from "components/plugins/Company-Station-View/CompanyView.vue";
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
      datatable,cview,
      Datepicker,
    },
    data() {
      return {columndata: [
         {
          label: 'Survey Date',
          field: 'survey_date',
          numeric: false,
          html: false,
        },{
          label: 'PC 1',
          field: 'pc1',
          numeric: false,
          html: true,
        },{
          label: 'PC 2',
          field: 'pc2',
          numeric: false,
          html: true,
        },{
          label: 'PC 3',
          field: 'pc3',
          numeric: false,
          html: true,
        },{
          label: 'SC 1',
          field: 'sc1',
          numeric: false,
          html: true,
        },{
          label: 'SC 2',
          field: 'sc2',
          numeric: false,
          html: true,
        },{
          label: 'SC 3',
          field: 'sc3',
          numeric: false,
          html: true,
        },{
          label: 'PC 1',
          field: 'pc1',
          numeric: false,
          html: true,
        },{
          label: 'PC 2',
          field: 'pc2',
          numeric: false,
          html: true,
        },{
          label: 'Nearest Depot',
          field: 'nearest_depot',
          numeric: false,
          html: true,
        },{
          label: 'Current S.P',
          field: 'current_selling_price',
          numeric: false,
          html: true,
        },{
          label: 'Recommended S.P',
          field: 'recommended_selling_price',
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
        show_single_company: false,
        show_multi_company: false,
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
          d2d_frequency: 0,
          location_frequency: 0,
          competitor_frequency: 0,
          
          d2d_name: [],
          location_name: [],
          competitor_name: [],

          d2d_omp_pms:[],
          d2d_omp_ago:[],
          d2d_omp_dpk:[],
          d2d_omp_lube:[],
          d2d_omp_lpg:[],

          competitor_omp_pms:[],
          competitor_omp_ago:[],
          competitor_omp_dpk:[],
          competitor_omp_lube:[],
          competitor_omp_lpg:[],

          location_omp_pms:[],
          location_omp_ago:[],
          location_omp_dpk:[],
          location_omp_lube:[],
          location_omp_lpg:[],


          d2d_company_pms:[],
          d2d_company_ago:[],
          d2d_company_dpk:[],
          d2d_company_lube:[],
          d2d_company_lpg:[],

          competitor_company_pms:[],
          competitor_company_ago:[],
          competitor_company_dpk:[],
          competitor_company_lube:[],
          competitor_company_lpg:[],

          location_company_pms:[],
          location_company_ago:[],
          location_company_dpk:[],
          location_company_lube:[],
          location_company_lpg:[],
        }

      }
    },
    methods: {
     button_toggle(){
        this.fill_form = !this.fill_form;
        if(this.button_text == "ADD NEW SURVEY"){
        this.button_text = "HIDE FORM";
        }else if("HIDE FORM"){
          this.button_text = "ADD NEW SURVEY";
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

      
      show_station_cops(company_id){
          this.preset.company_id = company_id;
          this.fill_form= true;
        },

      show_available_companies(){ 
        this.products = store.state.products;
        if(store.state.show_single_company){
          this.available_company = store.state.available_company;
          this.show_single_company = store.state.show_single_company;
          this.preset.company_id = this.available_company.id;
        }else if(store.state.show_multi_company == true){
          this.available_companies = store.state.available_companies;
          this.show_multi_company = store.state.show_multi_company;
        }
      }
      ,
     
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'input error, please fill all necessary fields', 'show_alert': true});
          return;
        }else if(this.selected_survey_date == ''){
          store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Please select necessary date to continue', 'show_alert': true});
           return;
            }
        else {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          //include station and company_id
          this.cops.station_id= this.preset.station_id;
          this.cops.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.cops.uploaded_by= user_details.id;
          this.cops.survey_date = new Date(this.selected_survey_date).toDateString();
          //this.cops.reading_date = new Date(this.selected_survey_date).toDateString();
           let rops_detail = {
            cops: this.cops
          };
          axios.post(this.url, rops_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            //console.log(response.data);
            let api_response = response.data;
          if (api_response.status === true) {
              this.tableData.push(api_response.data);
             
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Survey Submitted Successfully', 'show_alert': true});
              this.formstate.$submitted=false;
              
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
  .col-md-2{
    margin-right: 3%;
  }
</style>
