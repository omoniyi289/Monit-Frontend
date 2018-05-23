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
                      @click="show_station_transfers( props.rowData, props.rowIndex)">Proceed</button>
                        
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
                      <label for="product_id">Item Name</label>
                      <input readonly v-model="item_variant.item.name" name="product_id" type="text" required  class="form-control" id="serial_number"/>
                      <field-messages name="product_id" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Item Name is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="is_approved">Receive/Discard</label>
                      <select id="is_approved" name="is_approved" size="1" class="form-control" v-model="item_variant.status" required >
                            <option value="Received">Receive</option>
                            <option value="Discarded">Discard</option>
                      </select>
                      <field-messages name="is_approved" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Choice is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="current_price_tag">Quantity Transfered</label>
                      <input readonly v-model="item_variant.quantity_transferred" name="current_price_tag" type="number" required autofocus placeholder="Q T" class="form-control" id="serial_number"/>
                      <field-messages name="current_price_tag" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Q T is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="requested_price_tag">Quantity Received</label>
                      <input  v-model="item_variant.quantity_received" name="requested_price_tag" type="number"  autofocus placeholder="Q R" class="form-control" id="serial_number"/>
                      <field-messages name="requested_price_tag" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Q R is a required field</div>
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
                <datatable title="Transfered Stocks" :rows="tableData" :columns="log_columndata">
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
          label: 'Transfered On',
          field: 'date_transfered',
          numeric: false,
          html: false,
        },
         {
          label: 'Item Name',
          field: 'item.name',
          numeric: false,
          html: false,
        },
         {
          label: 'Variant Value',
          field: 'item_variant.variant_value',
          numeric: false,
          html: false,
        },
        {
          field: '__slot:actions',
          label: 'Actions',
        }, {
          label: 'Composite SKU',
          field: 'compositesku',
          numeric: false,
          html: false,
        }
        , {
          label: 'Status',
          field: 'status',
          numeric: false,
          html: true,
        }, {
          label: 'Quantity Transfered',
          field: 'quantity_transferred',
          numeric: false,
          html: false,
        }, {
          label: 'Quantity Received',
          field: 'quantity_received',
          numeric: false,
          html: false,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/item-variants',
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
        item_variant : {
          quantity_received: "",
          quantity_transferred: "",
          item: { name: '',
                },
          is_approved: 0,
          status:0,
        }

      }
    },
    methods: {
     
      
       show_station_transfers(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          //this.pricing = {new_price_tag: "",station_id: "",company_id: "",product_id:0,
          //updated_by: "",approved_by: 0,requested_price_tag:"",submit_mode: "Add Price",  
            //        };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
          
          axios.get(this.$store.state.host_url+"/item-variants/stock-transfer/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
              }}).then(response => {
                store.commit("activateLoader", "end");   
            this.tableData = response.data.data;
            this.tableData.forEach(element => {
              if(element.status == 'Discarded'){
                this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Discarded</span>");
                this.$set(element, "__slot:actions", "");
              }else if(element.status == 'Completed'){
                this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Completed</span>");
              }else if(element.status == 'Received'){
                this.$set(element, "status", "<span class='btn btn-success btn-sm' >Received</span>");
                this.$set(element, "__slot:actions", "");
              }
            });
           
            
        })
        .catch(function(error) {
           store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
          });

        }
        },
     onAction (action, data, index) {
      this.$SmoothScroll(document.getElementById("content-header"));
      //console.log('slot action: ' + action, data, index);
      if(action == 'update'){
        if(data.status != "<span class='btn btn-warning btn-sm' >Completed</span>"){
            store.commit("showAlertBox", {'alert_type': 'alert-danger',
                       'alert_message': 'Stock Already Updated', 'show_alert': true});
           return;
          }else{
        this.item_variant = data;
        this.approve = true;
        }
        ////console.log(data);
        
      }
    },
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          //include station and company_id
          this.item_variant.station_id= this.preset.station_id;
          this.item_variant.company_id= this.preset.company_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.item_variant.received_by= user_details.id;
          //console.log(this.item_variant);
             let item_variant = {
            item_variant: this.item_variant
          };
          axios.patch(store.state.host_url+'/item-variants/stock-transfer/'+this.item_variant.id, item_variant, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");    
            this.approve = false;
            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Stock Updated Successfully', 'show_alert': true});
         this.tableData = response.data.data;
            this.tableData.forEach(element => {
              if(element.status == 'Discarded'){
                this.$set(element, "status", "<span class='btn btn-danger btn-sm' >Discarded</span>");
              }else if(element.status == 'Completed'){
                this.$set(element, "status", "<span class='btn btn-warning btn-sm' >Completed</span>");
              }else if(element.status == 'Received'){
                this.$set(element, "status", "<span class='btn btn-success btn-sm' >Received</span>");
              }
            });

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
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
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
