<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          <div class="col-md-12">
              <div class="row" >               
                <div class="col-lg-4">
                    <div class="form-group" >
                        <b> FOR STOCK READINGS</b> <br>  <br>  
                        <button v-on:click="on_stock_pane_click" class="btn btn-success btn-lg"> CLICK TO UPLOAD STOCK DIPPINGS</button>        
                    </div>
                </div>

               <!--  <div class="col-lg-4">
                    <div class="form-group">
                       <b> FOR SALES READINGS</b><br><br>  
                        <button v-on:click="on_sales_pane_click" class="btn btn-success btn-lg"> CLICK TO UPLOAD SALES READINGS</button>
                    </div>
                </div> -->
            
              </div>
            <hr>
          </div>
          
          <div class="col-md-12">
           
            <vue-form :state="formstate"  v-if="show_stock_pane || show_sales_pane" >   
              <b-card header-tag="h4" class="bg-info-card" header="Upload Station Readings">
                <div class="row ">
                  <div class="col-lg-12">               
                    <b-tabs>
                        <b-tab title="STOCK READINGS" v-if="show_stock_pane">
                          <br>
                          <a target= "_blank" href="http://www.sharecsv.com/s/10da5464ccfbecf1fdafe17dac7fc310/stock.csv"><span  class="btn btn-info btn-sm">DOWNLOAD STOCK EXCEL TEMPLATE</span></a>
                          <br><br>
                          <div class="container">
                            <div class="large-12 medium-12 small-12 cell">
                              <label>Stock Input Excel File: 
                                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                              </label>
                                <span  class="btn btn-primary btn-md" v-on:click="submitStockFile()">Upload File</span>
                            </div>
                          </div>

                          <div class="container" v-if="error_pane">
                            <div class="alert alert-danger alert-sm" v-for = "(value, index) in error_messages">
                              Error {{index+1}}: {{value.message}}
                            </div>
                          </div>
                          <div class="alert alert-warning alert-md" >
                              <b>1. Please ensure your column header is formatted as shown below. (Station code, Date, and Product are compulsory).
                             <br>2. If file is uploaded with a .csv extension, do not use comma to seperate figures as it is being used by the system for delimiting cells.
                              <br>3. Date should be formatted as YYYY-MM-DD.</b>
                            </div>
                           <table class="table">
                              <thead>
                                <tr>
                                  <th>Station Code</th>
                                  <th>Date</th>
                                  <th>Product</th>
                                  <th>Opening Dip</th>
                                  <th>Closing Dip</th>
                                  <th>PPV</th>
                                  <th>Delivery</th>
                                  <th>RTT</th>
                                  <th>GIT Loss</th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for ="(option, index) in close_tank_reading">
                                  <th>{{option.station_code}}</th>
                                  <th>{{option.date}}</th>
                                  <th>{{option.product}}</th>
                                  <td>     
                                      <input v-model="close_tank_reading[index].opening_dip"  type="number" :disabled="isDisabled" class="form-control" />
                                  </td>
                                  <td>
                                   
                                      <input v-model="close_tank_reading[index].closing_dip" id="rd"  :disabled="isDisabled" :name="trd+index" type="number" required placeholder="Closing Reading" class="form-control" />
                                      
                                  </td>
                                  <td>
                                   
                                      <input v-model="close_tank_reading[index].ppv" id="rd"  :disabled="isDisabled" :name="trd+index" type="number" required placeholder="PPV" class="form-control" />
                                      
                                  </td>
                                  <td>         
                                  
                                      <input v-model="close_tank_reading[index].delivery" id="qr" :disabled="isDisabled"  :name="qr+index" type="number" required placeholder="" class="form-control" />
                                    
                                  </td>
                                  <td>         
                                      <input v-model="close_tank_reading[index].rtt" id="qr" :disabled="isDisabled" :name="rtt+index" type="number" required placeholder="" class="form-control" />
                                    
                                  </td>

                                  <td>         
                                      <input v-model="close_tank_reading[index].git_loss" id="qr" :disabled="isDisabled" :name="rtt+index" type="number" required placeholder="" class="form-control" />
                                      
                                    
                                  </td>                   

                                  
                                </tr>
                              </tbody>
                            </table> 
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <span v-if="show_stock_upload_button" class="btn btn-success" v-on:click ="onParsedStockSubmit">UPLOAD STOCK READINGS</span>
                              </div>
                            </div>
                        </b-tab>
                        <!-- <b-tab title="TOTALIZER READINGS" v-if="show_sales_pane">
                          <br>
                           <a target= "_blank" href="http://www.sharecsv.com/s/2b8e37ac676925dde9b3754422168b3f/sales.csv"><span  class="btn btn-info btn-sm">DOWNLOAD SALES EXCEL TEMPLATE</span></a>
                          <br><br>
                          <div class="container">
                            <div class="large-12 medium-12 small-12 cell">
                              <label>Sales Input CSV File: 
                                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                              </label>
                                <span  class="btn btn-primary btn-md" v-on:click="submitSalesFile()">Upload File</span>
                            </div>
                          </div>

                          <div class="container" v-if="error_pane">
                            <div class="alert alert-danger alert-sm" v-for = "(value, index) in error_messages">
                              Error {{index+1}}: {{value.message}}
                            </div>
                          </div>
                          <div class="alert alert-warning alert-md" >
                              <b>Please ensure your column header is formatted as shown below. (Station code, Date, and pump nozzle code are compulsory)</b>
                          </div>
                        
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Station Code</th>
                                  <th>Date</th>
                                  <th>Pump Nozzle Code</th>
                                  <th>Opening Totalizer Reading</th>
                                 
                                  <th>Closing Totalizer Reading</th>
                                   <th>PPV </th>
                                  
                                  <th>Cash Collected </th>
                                  
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in close_pump_reading">
                                  <td>{{option.station_code}}</td>
                                  <td>{{option.date}}</td>
                                  <td>{{option.pump_nozzle_code}}</td>
                                  <td>     
                                      <input v-model="close_pump_reading[index].opening_totalizer" :disabled="isDisabled" type="number"  class="form-control" />
                                  </td>
                                  
                                  <td>                                         
                                      <input v-model="close_pump_reading[index].closing_totalizer" id="rd" :disabled="isDisabled" :name="prd+index" type="number"  placeholder="" class="form-control" />
                                
                                  </td>
                                  <td>                                         
                                      <input v-model="close_pump_reading[index].ppv" id="rd" :disabled="isDisabled" :name="ppv+index" type="number"  placeholder="" class="form-control" />
                                
                                  </td>
                              
                                  <td>                            
                                      <input v-model="close_pump_reading[index].cash_collected" id="cc" :disabled="isDisabled" :name="cc+index" type="number"  placeholder="" class="form-control" />
                                   
                                  </td>

                  
                                </tr>
                              </tbody>
                            </table> 
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <span v-if="show_sales_upload_button" class="btn btn-success" v-on:click ="onParsedSalesSubmit">UPLOAD SALES READINGS</span>
                              </div>
                            </div>
                        </b-tab>  -->
                        
                    </b-tabs>           
                  </div>
                </div>
              </b-card>
             
            </vue-form>
          </div>   
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Datepicker from 'vuejs-datepicker';
  import Vue from 'vue';
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     
  import vueSmoothScroll from 'vue-smoothscroll';     
  Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Datepicker,
    },
    data() {
      return {
        ajaxLoading: true,
        format: 'yyyy-MM-dd',
        loading: true,
        url: this.$store.state.host_url+'/product_price_change',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        isDisabled: false,
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        selected_date: "",
        trd: "tank_reading",
        ppv: "price_per_vol",
        qr: "quantity_received",
        prd: "pump_reading",
        rtt: "rtt",
        fsprd: "first_shift_pump_reading",
        ssprd: "second_shift_pump_reading",
        cc:"cash_collected",
        fscc: "first_shift_cash_collected",//0037116128
        sscc: "second_shift_cash_collected",
        station_pumps:[],
        station_tanks:[],
        final_stock_info: {},
        final_pump_info: {}, 
        show_sales_pane: false,
        show_stock_pane: false,
        error_messages:[],
        error_pane: false,
        show_stock_upload_button: false,
        show_sales_upload_button: false,
        files: '',
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        close_pump_reading : [],
        close_tank_reading : [],
      }
    },
    methods: {
      to_totalizer(){
        
      },
      download_sales_template(){
       
        axios.get(this.$store.state.host_url+'/totalizer-readings/get-template-csv', 
            { responseType: 'blob' ,
            headers: {'Access-Control-Allow-Origin': '*'}
          }
          ).then( response => {
              //console.log(response);
              // const url = window.URL.createObjectURL(new Blob([response.data]));
              // const link = document.createElement('a');
              // link.href = url;
              // link.setAttribute('download', 'sales.csv');
              // document.body.appendChild(link);
              // link.click();
          }).catch(error =>{
           // console.log(error);
          });
      },
      on_sales_pane_click(){
        this.show_stock_pane = false;
        this.show_sales_pane = true;
      }, 
      on_stock_pane_click(){
        this.show_stock_pane = true;
        this.show_sales_pane = false;
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
      }
      ,
        onParsedStockSubmit() {
        if (false) {
          return;
        } else {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          this.$SmoothScroll(document.getElementById("content-header"));
          
          ////stock//
          //this.final_stock_info.station_id= this.preset.station_id;
          //this.final_stock_info.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_stock_info.last_modified_by = user_details.id;
          this.final_stock_info.readings = this.close_tank_reading;
          this.show_setup_form= false;
          axios.post(this.$store.state.host_url+"/stock-readings/bovas_parsed_csv_data", {'stocks': this.final_stock_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
              store.commit("activateLoader", "end");      
                    let api_response = response.data;
                    if (api_response.status === true) {
                        store.commit("showAlertBox", {'alert_type': 'alert-success',
                        'alert_message': 'Readings Uploaded Successfully', 'show_alert': true});
                        this.close_tank_reading = [];
                        this.error_pane = false;
                        this.error_messages = [];
                        this.show_setup_form = false;
                        this.show_stock_upload_button = false;
                    }
                     store.commit("activateLoader", "end");
                  }).catch(error => { 
                  store.commit("activateLoader", "end");   
                  store.commit("catch_errors", error);
              });
        }
      },
    onParsedSalesSubmit() {
        if (false) {
          return;
        } else {
          store.commit("activateLoader", "start");
          store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
          this.$SmoothScroll(document.getElementById("content-header"));
          
          ////stock//
          //this.final_stock_info.station_id= this.preset.station_id;
          //this.final_stock_info.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_pump_info.last_modified_by = user_details.id;
          this.final_pump_info.readings = this.close_pump_reading;
          this.show_setup_form= false;
          axios.post(this.$store.state.host_url+"/pump-readings/bovas_parsed_csv_data", {'pumps': this.final_pump_info}, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
              store.commit("activateLoader", "end");      
                    let api_response = response.data;
                    if (api_response.status === true) {
                        store.commit("showAlertBox", {'alert_type': 'alert-success',
                        'alert_message': 'Readings Uploaded Successfully', 'show_alert': true});
                        this.close_pump_reading = [];
                        this.error_pane = false;
                        this.error_messages = [];
                        this.show_setup_form = false;
                        this.show_sales_upload_button = false;
                    }
                     store.commit("activateLoader", "end");
                  }).catch(error => { 
                  store.commit("activateLoader", "end");   
                  store.commit("catch_errors", error);
              });
        }
      },
       submitStockFile(){
            this.close_tank_reading = [];
            this.error_pane = false;
            this.error_messages = [];
            this.show_setup_form = false;
            this.show_stock_upload_button = false;

            store.commit("activateLoader", "start");
            store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
                       'alert_message': '...Processing Request...', 'show_alert': true});
            this.$SmoothScroll(document.getElementById("content-header"));
            let formData = new FormData();
            formData.append('file', this.file);
            //formData.append('company_id', this.preset.company_id);
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.post( this.$store.state.host_url+"/stock-readings/bovas_file_upload",
                formData,
                {
                headers: {
                    'Content-Type': 'multipart/form-data',
                     "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }
              }
            ).then( response => {      
                let result = response.data.data;
               if(result[0].error.length > 0){
                   this.error_pane = true;
                   this.error_messages = result[0].error;
                   store.commit("showAlertBox", {'alert_type': 'alert-primary',
                       'alert_message': 'File-Read Successful', 'show_alert': true});
              }
               else if(result[0].error.length == 0 && result[0].success.length > 0){
                    this.close_tank_reading= result[0].success;
                    this.show_setup_form = true;
                    this.show_stock_upload_button = true;
                    store.commit("showAlertBox", {'alert_type': 'alert-primary',
                       'alert_message': 'File-Read Successful', 'show_alert': true});
              }else if(result[0].error.length == 0 && result[0].success.length == 0){
                    store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'No entries found', 'show_alert': true});
              }
                store.commit("activateLoader", "end");           
        })
        .catch(error => { 
         store.commit("activateLoader", "end");   
          store.commit("catch_errors", error);
        });
      },
      //  submitSalesFile(){
      //       this.close_pump_reading = [];
      //       this.error_pane = false;
      //       this.error_messages = [];
      //       this.show_setup_form = false;
      //       this.show_sales_upload_button = false;

      //       store.commit("activateLoader", "start");
      //       store.commit("showPermAlertBox", {'alert_type': 'alert-warning',
      //                  'alert_message': '...Processing Request...', 'show_alert': true});
      //       this.$SmoothScroll(document.getElementById("content-header"));
      //       let formData = new FormData();
      //       formData.append('file', this.file);
      //       let user_details = JSON.parse(localStorage.getItem('user_details'));
      //       axios.post( this.$store.state.host_url+"/pump-readings/bovas_file_upload",
      //           formData,
      //           {
      //           headers: {
      //               'Content-Type': 'multipart/form-data',
      //                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
      //           }
      //         }
      //       ).then( response => {      
      //           let result = response.data.data;
      //          if(result[0].error.length > 0){
      //              this.error_pane = true;
      //              this.error_messages = result[0].error;
      //              store.commit("showAlertBox", {'alert_type': 'alert-primary',
      //                  'alert_message': 'File-Read Successful', 'show_alert': true});
      //         }
      //          else if(result[0].error.length == 0 && result[0].success.length > 0){
      //               this.close_pump_reading= result[0].success;
      //               this.show_setup_form = true;
      //               this.show_sales_upload_button = true;
      //               store.commit("showAlertBox", {'alert_type': 'alert-primary',
      //                  'alert_message': 'File-Read Successful', 'show_alert': true});
      //         }else if(result[0].error.length == 0 && result[0].success.length == 0){
      //               store.commit("showAlertBox", {'alert_type': 'alert-danger',
      //                  'alert_message': 'No entries found', 'show_alert': true});
      //         }
      //           store.commit("activateLoader", "end");           
      //   })
      //   .catch(error => { 
      //    store.commit("activateLoader", "end");   
      //     store.commit("catch_errors", error);
      //   });
      // },
      handleFileUpload(){
        this.file = this.$refs.file.files[0];
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
