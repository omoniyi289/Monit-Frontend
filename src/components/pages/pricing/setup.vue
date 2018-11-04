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
                      @click="show_station_pricing( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
            </csview>
            <hr>
          </div>

          <div class="col-sm-4">

            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_approval_pane && show_setup_form">
             <b-card header="Add/Request Price" header-tag="h5" class="bg-info-card">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product_id">Product</label>
                      <select id="product_id" name="product_id" size="1" class="form-control" v-model="pricing.product_id" required checkbox>

                        <option
                          v-for="option in products"
                          v-bind:value="option.id"
                           >{{ option.code }}
                        </option>

                      </select>
                      <field-messages name="product_id" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Product is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="requested_price_tag">New Price</label>
                      <input v-model="pricing.requested_price_tag" name="requested_price_tag" type="text" required autofocus placeholder="Price Tag" maxlength="3" class="form-control" id="serial_number"/>
                      <field-messages name="requested_price_tag" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Price is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" :value="pricing.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </b-card>
            </vue-form>
          </div>
          <div class="col-sm-8"  v-show="show_setup_form">
            <div class="table-responsive">
              <datatable title="Product Prices" :rows="tableData" :columns="columndata">
                <template slot="actions" slot-scope="props">
                  <div >
                        <i class='fa fa-pencil text-info mr-3' @click="onAction('update', props.rowData, props.rowIndex)">Change Price</i>
                  </div>
                </template>
              </datatable>
            </div>
          </div>

          <div class="col-sm-12"  v-show="show_setup_form">
            <div class="table-responsive">
              <datatable title="Product Price Changes Log" :rows="log_tableData" :columns="log_columndata">
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
  import csview from "components/plugins/Company-Station-View/CSView_With_All_Stations.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
    },
    data() {
      return {columndata: [
         {
          label: 'Station',
          field: 'station.name',
          numeric: false,
          html: false,
        },
        {
          label: 'Product',
          field: 'product.code',
          numeric: false,
          html: false,
        }, {
          label: 'Current Price',
          field: 'new_price_tag',
          numeric: false,
          html: false,
        },
        {
          field: '__slot:actions',
          label: 'Actions',
          }],
            log_columndata: [
         
        {
          label: 'Requested On',
          field: 'created_at',
          numeric: false,
          html: false,
        },
         {
          label: 'Station',
          field: 'station.name',
          numeric: false,
          html: false,
        },
         {
          label: 'Product',
          field: 'product.code',
          numeric: false,
          html: false,
        }, {
          label: 'Current Price',
          field: 'current_price_tag',
          numeric: false,
          html: false,
        }, {
          label: 'Requested Price',
          field: 'requested_price_tag',
          numeric: false,
          html: false,
        }, {
          label: 'Status',
          field: 'status',
          numeric: false,
          html: true,
        }, {
          label: 'Last Updated On',
          field: 'updated_at',
          numeric: false,
          html: false,
        }, { 
          label: 'Valid From',
          field: 'valid_from',
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
        log_tableData:[],
        approvers:[],
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        show_approval_pane: true,
        station_pumps:"",
        company_stations: "",
        added_product_name: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        pricing : {
          new_price_tag: "",
          station_id: "",
          company_id: "",
          product_id:0,
          updated_by: "",
          approved_by: 0,
          requested_price_tag:"",
          submit_mode: "Add Price",  
        }

      }
    },
    methods: {
     
      
       show_station_pricing(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        this.show_setup_form= false;
        if (this.formstate2.$invalid) {
          return;
        }
        else if(this.preset.company_id == 6 && this.preset.station_id != 81){
          //FOR E360 AFRICA ACCOUNT, only e360 lab station should be allowed 
           store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Oops! Invalid E360 Station Selected for Pricing', 'show_alert': true}); 
           return;
        }
        else {
          store.commit("activateLoader", "start");

          this.show_setup_form= true;
          this.pricing = {new_price_tag: "",station_id: "",company_id: "",product_id:0,
          updated_by: "",approved_by: 0,requested_price_tag:"",submit_mode: "Add Price",  
                    };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
          
          axios.get(this.$store.state.host_url+"/product_price/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
                store.commit("activateLoader", "end");   
                this.tableData = response.data.data;
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");   
           store.commit("catch_errors", error); 
          });

          axios.get(this.$store.state.host_url+"/product_price_change/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
                store.commit("activateLoader", "end");   
            this.log_tableData = response.data.data;
            this.log_tableData.forEach(element => {
           if(element.is_executed == 1){
            this.$set(element, "status", "<span class='btn btn-success btn-sm' >Executed</span>");
             }
          else if(element.is_approved_level_3 == 1){
            this.$set(element, "status", "<span class='btn btn-info btn-sm' >Approved- Level 3</span>");
          }else if(element.is_approved_level_3 == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved- Level 3</span>");
          }else if(element.is_approved_level_2 == 1){
            this.$set(element, "status", "<span class='btn btn-info btn-sm' >Approved- Level 2</span>");
          }else if(element.is_approved_level_2 == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved- Level 2</span>");
          }else if(element.is_approved == 1){
            this.$set(element, "status", "<span class='btn btn-info btn-sm' >Approved- Level 1</span>");
          }else if(element.is_approved == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved- Level 1</span>");
          } else if(element.is_approved == null){
            this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Not yet Approved</span>");
          }
            });
            //console.log(response.data.data);
        });
        }},
      show_available_companies(){ 
       ////console.log(store.state.show_multi_company + "multi3");
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
     onAction (action, data, index) {
      this.$SmoothScroll(document.getElementById("content-header"));
      //console.log('slot action: ' + action, data, index);
      if(action == 'update'){
        this.pricing = data;
        this.pricing.requested_price_tag = data.new_price_tag;
        this.show_approval_pane=true;
         this.pricing.submit_mode="Request Price Change";
      }
    },
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        }
        else{
          store.commit("activateLoader", "start");
           this.show_approval_pane=false;
          //include station and company_id
          
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.pricing.creator_name = user_details.fullname;
          this.pricing.updated_by = user_details.id;

          if(this.pricing.submit_mode == 'Add Price'){
            this.pricing.mode ="create";
            console.log(this.preset.station_id);
            //make sure a particular station is selected
            if(Array.isArray(this.preset.station_id)  || this.preset.station_id == ""){
              store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Oops!! Please select a particular station, then proceed', 'show_alert': true}); 
              this.show_approval_pane=true;
              store.commit("activateLoader", "end");
              return;
            }
            else{
            this.pricing.station_id= this.preset.station_id;
            this.pricing.company_id= this.preset.company_id;
            }

             let price_detail = {
            product_change_log: this.pricing
          };
          axios.post(this.url, price_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            
            let api_response = response.data;
          if (api_response.status === true) {
            
              for( var i = 0, len = this.products.length; i < len; i++ ) {
                  if( this.products[i]['id'] === this.pricing.product_id ) {                    
                      this.added_product_name = this.products[i]['code'];
                      break;
                  }
              }          
              this.tableData.push(api_response.data);
              

              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Product Price Added Successfully', 'show_alert': true});  
               this.show_approval_pane=true;
          }
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
        }
        else if(this.pricing.submit_mode == 'Request Price Change'){
          this.pricing.mode ="update";
          
          this.pricing.station_id= this.pricing.station.id;
          this.pricing.company_id= this.pricing.station.company_id;

          //set current price tag value, requested price is still retained
          this.pricing.current_price_tag = this.pricing.new_price_tag;
             let price_detail = {
            product_change_log: this.pricing
          };
          axios.post(this.url+'/request/', price_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            
            let api_response = response.data;
          if (api_response.status === true) {
            this.log_tableData.push(response.data.data);
            
            this.log_tableData.forEach(element => {
           if(element.is_executed == 1){
            this.$set(element, "status", "<span class='btn btn-success btn-sm' >Executed</span>");
             }
          else if(element.is_approved_level_3 == 1){
            this.$set(element, "status", "<span class='btn btn-info btn-sm' >Approved- Level 3</span>");
          }else if(element.is_approved_level_3 == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved- Level 3</span>");
          }else if(element.is_approved_level_2 == 1){
            this.$set(element, "status", "<span class='btn btn-info btn-sm' >Approved- Level 2</span>");
          }else if(element.is_approved_level_2 == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved- Level 2</span>");
          }else if(element.is_approved == 1){
            this.$set(element, "status", "<span class='btn btn-info btn-sm' >Approved- Level 1</span>");
          }else if(element.is_approved == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved- Level 1</span>");
          } else if(element.is_approved == null){
            this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Not yet Approved</span>");
          }
            });

              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Request Made Successfully, Awaiting approval', 'show_alert': true}); 
              this.formstate.$submitted=false;
                this.pricing= {submit_mode: "Add Price"}; 
          }
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
        }
        }
      },
     /*  get_pricing_approver(){
          store.commit("activateLoader", "start"); 
            ///get approvals
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let params = 'UI_slug=APCR&company_id='+this.preset.company_id+'&station_id='+this.preset.station_id; 
          //console.log(params);
          axios.get(this.$store.state.host_url+"/role_permissions/by_company?"+params,
              {
                headers : {
                  "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                }
              }).then(response => {
                  store.commit("activateLoader", "end");   
                  let list = response.data.data;
                  list.forEach(element => {
                    element.roles.forEach(inner_element => {
                       
                       inner_element.users_via_permission.forEach(innest_element => {
                         ////console.log(innest_element);
                         if(innest_element !== undefined){
                         this.approvers.push(innest_element);
                         }
                       });
                      
                    });
                  });
                      
          }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
      },*/

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
