<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
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
          
          <div class="col-sm-3">
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product_id">Product</label>
                      <select readonly id="product_id" name="product_id" size="1" class="form-control" v-model="pricing.product_id" required checkbox>

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

                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="is_approved">Approve/Disapprove</label>
                      <select id="is_approved" name="is_approved" size="1" class="form-control" v-model="pricing.is_approved" required >
                            <option value="1">Approve</option>
                            <option value="0">Disapprove</option>
                      </select>
                      <field-messages name="is_approved" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Approval Choice is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="current_price_tag">Current Price</label>
                      <input readonly v-model="pricing.current_price_tag" name="current_price_tag" type="text" required autofocus placeholder="Price Tag" class="form-control" id="serial_number"/>
                      <field-messages name="current_price_tag" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Current Price is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="requested_price_tag">Requested Price</label>
                      <input readonly v-model="pricing.requested_price_tag" name="requested_price_tag" type="text" required autofocus placeholder="Price Tag" class="form-control" id="serial_number"/>
                      <field-messages name="requested_price_tag" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Requested Price is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" v-if="approve" value="Submit" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-9"  v-show="show_setup_form">
            <div class="table-responsive">
                <datatable title="Product Price Changes Log" :rows="log_tableData" :columns="log_columndata">
                    <template slot="actions" slot-scope="props">
                        <div >
                            <i class='fa fa-pencil text-info mr-3' @click="onAction('update', props.rowData, props.rowIndex)"></i>
                        </div>
                    </template>
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
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
    },
    data() {
      return {
            log_columndata: [
              {
          label: 'Requested On',
          field: 'created_at',
          numeric: false,
          html: false,
        },
         {
          label: 'Product',
          field: 'product.code',
          numeric: false,
          html: false,
        },
        {
          field: '__slot:actions',
          label: 'Actions',
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
        }
        , {
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
          label: 'Approver',
          field: 'approver.fullname',
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
        approve:false,
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
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
          is_approved: "",
          approved_by: 0,
          requested_price_tag:"",
          current_price_tag: "",  
        }

      }
    },
    methods: {
     
      
       show_station_pricing(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        if (this.formstate2.$invalid) {
          return;
        } else {
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
                "Authorization" : "Bearer " + user_details.token
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
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
                store.commit("activateLoader", "end");   
            this.log_tableData = response.data.data;
            this.log_tableData.forEach(element => {
              if(element.is_approved == null){
            this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Not yet Approved</span>");
          }else if(element.is_approved == 1){
            this.$set(element, "status", "<span class='btn btn-success btn-sm' >Approved</span>");
          }else if(element.is_approved == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved</span>");
          }
            });
            console.log(response.data.data);
        });
        }},
     onAction (action, data, index) {
      this.$SmoothScroll(document.getElementById("content-header"));
      console.log('slot action: ' + action, data, index);
      if(action == 'update'){
        this.pricing = data;
        this.approve = true;
      }
    },
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          //include station and company_id
          this.pricing.station_id= this.preset.station_id;
          this.pricing.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.pricing.updated_by = user_details.id;
          this.pricing.log_id = this.pricing.id;
          console.log(this.pricing);
             let price_detail = {
            details: this.pricing
          };
          axios.post(store.state.host_url+'/fromMail_pricing', price_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
            store.commit("activateLoader", "end");    
            let station_response = response.data;
          if (station_response.status === true) {
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Product  Change Updated Successfully', 'show_alert': true});
                let element = this.pricing;
              if(element.is_approved == null){
            this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Not yet Approved</span>");
          }else if(element.is_approved == 1){
            this.$set(element, "status", "<span class='btn btn-success btn-sm' >Approved</span>");
          }else if(element.is_approved == 0){
            this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Disapproved</span>");
          }  
          }
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
        }
        },
        load_products(){
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          axios.get(store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
                this.products = response.data.data;
      });
        }
      
    },
    mounted: function() {
      store.commit("check_login_details");
      this.load_products();
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
