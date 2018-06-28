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
                      @click="show_station_rops( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
                </csview>
            <hr>    
          </div>

          <div class="col-sm-12">
          <b-card header='RPS Form' class="bg-info-card" v-show="fill_form">
            <vue-form :state="formstate" @submit.prevent="onSubmit" >
              <div class="row">
                
                <div class="col-sm-3">
                   <label for="date">Survey Date</label>
                    <datepicker :format="format" v-model="selected_survey_date"  placeholder="Select Survey Date">
                    </datepicker> 
                </div>
                   
               
                  <div class="col-sm-12" style="margin-bottom: 2%" > 
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                      <validate tag="div">
                       <b>PC 1 Name :</b><input v-model="rops.pc1_name" name="pc1_name" type="text" required autofocus placeholder="Primary Competition 1 Name" class="form-control" id="pc1_name"/>
                        <field-messages name="pc1_name" show="$invalid && $submitted" class="text-danger">
                          <div slot="required">PC1 Name is a required field</div>
                        </field-messages>
                      </validate>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                        <validate tag="div">
                          PMS: <input v-model="rops.pc1_price_pms" name="pc1_price_pms" type="number" required autofocus placeholder="" class="form-control" id="pc1_price_pms"/>
                          <field-messages name="pc1_price_pms" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">PC1 PMS is a required field</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                        <validate tag="div">
                          AGO: <input v-model="rops.pc1_price_ago" name="pc1_price_ago" type="number" required autofocus placeholder="" class="form-control" id="pc1_price_ago"/>
                          <field-messages name="pc1_price_ago" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">PC1 AGO is a required field</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                        <validate tag="div">
                          DPK:  <input v-model="rops.pc1_price_dpk" name="pc1_price_dpk" type="number" required autofocus placeholder="" class="form-control" id="pc1_price_dpk"/>
                          <field-messages name="pc1_price_dpk" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">PC1 DPK is a required field</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>

                  <div class="col-sm-12" style="" > 
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                       <b>PC 2 Name :</b><input v-model="rops.pc2_name" name="pc1_name" type="text"  autofocus placeholder="Primary Competition 2 Name" class="form-control" id="pc2_name"/>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                          PMS: <input v-model="rops.pc2_price_pms" name="pc2_price_pms" type="number"  autofocus placeholder="" class="form-control" id="pc2_price_pms"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          AGO: <input v-model="rops.pc2_price_ago" name="pc2_price_ago" type="number"  autofocus placeholder="" class="form-control" id="pc2_price_ago"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          DPK:  <input v-model="rops.pc2_price_dpk" name="pc2_price_dpk" type="number"  autofocus placeholder="" class="form-control" id="pc2_price_dpk"/>
                      </div>
                    </div>

                  <div class="col-sm-12" style="" > 
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                       <b>PC 3 Name : </b> <input v-model="rops.pc3_name" name="pc3_name" type="text"  autofocus placeholder="Primary Competition 3 Name" class="form-control" id="pc3_name"/>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                          PMS: <input v-model="rops.pc3_price_pms" name="pc3_price_pms" type="number" autofocus placeholder="" class="form-control" id="pc3_price_pms"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          AGO: <input v-model="rops.pc3_price_ago" name="pc3_price_ago" type="number"  autofocus placeholder="" class="form-control" id="pc3_price_ago"/>
                          
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          DPK:  <input v-model="rops.pc3_price_dpk" name="pc3_price_dpk" type="number"  autofocus placeholder="" class="form-control" id="pc3_price_dpk"/>
                      </div>
                    </div>



                  <div class="col-sm-12" style="" > 
                      <hr>
                  </div> 
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                      <validate tag="div">
                       <b>SC 1 Name :</b><input v-model="rops.sc1_name" name="sc1_name" type="text" required autofocus placeholder="Secondary Competition 1" class="form-control" id="sc1_name"/>
                        <field-messages name="sc1_name" show="$invalid && $submitted" class="text-danger">
                          <div slot="required">SC1 Name is a required field</div>
                        </field-messages>
                      </validate>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                        <validate tag="div">
                          PMS: <input v-model="rops.sc1_price_pms" name="sc1_price_pms" type="number" required autofocus placeholder="" class="form-control" id="sc1_price_pms"/>
                          <field-messages name="sc1_price_pms" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">SC1 PMS is a required field</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                        <validate tag="div">
                          AGO: <input v-model="rops.sc1_price_ago" name="sc1_price_ago" type="number" required autofocus placeholder="" class="form-control" id="sc1_price_ago"/>
                          <field-messages name="sc1_price_ago" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">SC1 AGO is a required field</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                        <validate tag="div">
                          DPK:  <input v-model="rops.sc1_price_dpk" name="sc1_price_dpk" type="number" required autofocus placeholder="" class="form-control" id="sc1_price_dpk"/>
                          <field-messages name="sc1_price_dpk" show="$invalid && $submitted" class="text-danger">
                            <div slot="required">SC1 DPK is a required field</div>
                          </field-messages>
                        </validate>
                      </div>
                    </div>

                  <div class="col-sm-12" style="" > 
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                       <b>SC 2 Name :</b><input v-model="rops.sc2_name" name="sc1_name" type="text"  autofocus placeholder="Secondary Competition 2" class="form-control" id="sc2_name"/>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                          PMS: <input v-model="rops.sc2_price_pms" name="sc2_price_pms" type="number"  autofocus placeholder="" class="form-control" id="sc2_price_pms"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          AGO: <input v-model="rops.sc2_price_ago" name="sc2_price_ago" type="number"  autofocus placeholder="" class="form-control" id="sc2_price_ago"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          DPK:  <input v-model="rops.sc2_price_dpk" name="sc2_price_dpk" type="number"  autofocus placeholder="" class="form-control" id="sc2_price_dpk"/>
                      </div>
                    </div>

                  <div class="col-sm-12" style="" > 
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                       <b>SC 3 Name :</b><input v-model="rops.sc3_name" name="sc3_name" type="text"  autofocus placeholder="Secondary Competition 3" class="form-control" id="sc3_name"/>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                          PMS: <input v-model="rops.sc3_price_pms" name="sc3_price_pms" type="number" autofocus placeholder="" class="form-control" id="sc3_price_pms"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          AGO: <input v-model="rops.sc3_price_ago" name="sc3_price_ago" type="number"  autofocus placeholder="" class="form-control" id="sc3_price_ago"/>
                          
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          DPK:  <input v-model="rops.sc3_price_dpk" name="sc3_price_dpk" type="number"  autofocus placeholder="" class="form-control" id="sc3_price_dpk"/>
                      </div>
                    </div>

                  <div class="col-sm-12" style="" > 
                      <hr>
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                       <b>Nearest Depot :</b><input v-model="rops.nearest_depot_name" name="nearest_depot_name" type="text"  autofocus placeholder="Nearest Depot Name" class="form-control" id="nearest_depot_name"/>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                          PMS: <input v-model="rops.nearest_depot_pms" name="nearest_depot_pms" type="number" autofocus placeholder="" class="form-control" id="nearest_depot_pms"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          AGO: <input v-model="rops.nearest_depot_ago" name="nearest_depot_ago" type="number"  autofocus placeholder="" class="form-control" id="nearest_depot_ago"/>
                          
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          DPK:  <input v-model="rops.nearest_depot_dpk" name="nearest_depot_dpk" type="number"  autofocus placeholder="" class="form-control" id="nearest_depot_dpk"/>
                      </div>
                    </div>

                   <div class="col-sm-12" style="" > 
                      <hr>
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                       <b>Current Selling Price :</b>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                          PMS: <input v-model="rops.current_selling_price_pms" name="current_selling_price_pms" type="number" autofocus placeholder="" class="form-control" id="current_selling_price_pms"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          AGO: <input v-model="rops.current_selling_price_ago" name="current_selling_price_ago" type="number"  autofocus placeholder="" class="form-control" id="current_selling_price_ago"/>
                          
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          DPK:  <input v-model="rops.current_selling_price_dpk" name="current_selling_price_dpk" type="number"  autofocus placeholder="" class="form-control" id="current_selling_price_dpk"/>
                      </div>
                    </div>
                  <div class="col-sm-12" style="" > 
                   
                  </div>   
                  <div class="col-sm-12 col-md-3" >
                    <div class="form-group form-inline">
                       <b>Recommended Selling Price :</b>
                    </div>
                  </div>

                    <div class="col-sm-12 col-md-2"> 
                      <div class="form-group form-inline">
                          PMS: <input v-model="rops.recommended_selling_price_pms" name="recommended_selling_price_pms" type="number" autofocus placeholder="" class="form-control" id="recommended_selling_price_pms"/>
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          AGO: <input v-model="rops.recommended_selling_price_ago" name="recommended_selling_price_ago" type="number"  autofocus placeholder="" class="form-control" id="recommended_selling_price_ago"/>
                          
                      </div>
                    </div>
                    <div class="col-sm-12 col-md-2">
                      <div class="form-group form-inline">
                          DPK:  <input v-model="rops.recommended_selling_price_dpk" name="recommended_selling_price_dpk" type="number"  autofocus placeholder="" class="form-control" id="recommended_selling_price_dpk"/>
                      </div>
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
        url: this.$store.state.host_url+'/rops',
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
        rops : {
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
      show_details_inputs(selected){
        if(selected == 'POS'){
            this.show_pos_details = true;
            this.show_bank_details = false;
        }else if(selected == 'Cash Deposit'){
            this.show_pos_details = false;
            this.show_bank_details = true;
        }
      },
         show_station_rops(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        if (this.formstate2.$invalid) {
          return;
        } else {
          this.fill_form= true;
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
          this.rops.station_id= this.preset.station_id;
          this.rops.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.rops.uploaded_by= user_details.id;
          this.rops.survey_date = new Date(this.selected_survey_date).toDateString();
          //this.rops.reading_date = new Date(this.selected_survey_date).toDateString();
           let rops_detail = {
            rops: this.rops
          };
          axios.post(this.url, rops_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            //console.log(response.data);
            let station_response = response.data;
          if (station_response.status === true) {
              this.tableData.push(station_response.data);
             
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Suvey Submitted Successfully', 'show_alert': true});
              this.formstate.$submitted=false;
              this.fill_form = !this.fill_form;
              this.rops= {};
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
