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

          <div class="col-sm-4">

            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_approval_pane && show_setup_form">
             <b-card header="Configuration Pane" header-tag="h5" class="bg-info-card">
              <div class="row">

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="requested_price_tag">Name</label>
                      <input v-model="cops_lcd_config.name" name="name" type="text" required autofocus placeholder="Name"  class="form-control" />
                      <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="type">Type</label>
                      <select name="type"  class="form-control" v-model="cops_lcd_config.type" required checkbox>
                        <option value="Location"> Location </option>
                        <option value="D2D"> D2D </option>
                        <option value="Competition" > Competition </option>
                      </select>
                      <field-messages name="type" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Type is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="type">Status</label>
                      <select name="type"  class="form-control" v-model="cops_lcd_config.status" required checkbox>
                        <option value="Active"> Active </option>
                        <option value="Inactive"> Inactive </option>
            
                      </select>
                      <field-messages name="type" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">status is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                

                <div class="col-sm-12">
                  <div class="form-group float-left">
                    <input type="submit" :value="cops_lcd_config.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </b-card>
            </vue-form>
          </div>
          <div class="col-sm-8"  v-show="show_setup_form">
            <div class="table-responsive">
              <datatable title="Configurations" :rows="tableData" :columns="columndata">
                <template slot="actions" slot-scope="props">
                  <div >
                        <i class='fa fa-pencil text-info mr-3' @click="onAction('update', props.rowData, props.rowIndex)">Update Config</i>
                  </div>
                </template>
              </datatable>
            </div>
          </div>

          <!-- <div class="col-sm-12"  v-show="show_setup_form">
            <div class="table-responsive">
              <datatable title="Product Price Changes Log" :rows="log_tableData" :columns="log_columndata">
                </datatable>
            </div>
          </div> -->
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
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,cview,
    },
    data() {
      return {columndata: [
         {
          label: 'Name',
          field: 'name',
          numeric: false,
          html: false,
        },
        {
          label: 'Type',
          field: 'type',
          numeric: false,
          html: false,
        }, {
          label: 'Status',
          field: 'status',
          numeric: false,
          html: false,
        },
        {
          field: '__slot:actions',
          label: 'Actions',
          }],

        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/cops_lcd_config',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
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
        },
        cops_lcd_config : {
          company_id: "",
          name: "",
          active: 1,
          type: "",
          submit_mode: "Add Config",  
        }

      }
    },
    methods: {
     
      
       show_station_cops(company_id){
        this.preset.company_id = company_id;
        
          store.commit("activateLoader", "start");

          this.show_setup_form= true;
         
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          
          axios.get(this.$store.state.host_url+"/cops_lcd_config/by_company/"+company_id,
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

         },
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
        this.cops_lcd_config = data;
        
        this.show_approval_pane=true;
         this.cops_lcd_config.submit_mode="Update Config";
      }
    },
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        }
        else{
          store.commit("activateLoader", "start");
         //  this.show_approval_pane=false;
          //include station and company_id
          
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.cops_lcd_config.creator_name = user_details.fullname;
          this.cops_lcd_config.updated_by = user_details.id;

          if(this.cops_lcd_config.submit_mode == 'Add Config'){
            this.cops_lcd_config.mode ="create";
            
            this.cops_lcd_config.company_id= this.preset.company_id;
          

             let detail = {
            cops_lcd_config: this.cops_lcd_config
          };
          axios.post(this.url, detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            
            let api_response = response.data;
          if (api_response.status === true) {
                
              this.tableData.push(api_response.data);
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': ' Config Added Successfully', 'show_alert': true});  
               this.show_approval_pane=true;
          }
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
        }
        else if(this.cops_lcd_config.submit_mode == 'Update Config'){
          this.cops_lcd_config.mode ="update";
          
          this.cops_lcd_config.company_id= this.preset.company_id;

             let detail = {
            cops_lcd_config : this.cops_lcd_config
          };
          axios.patch(this.url+'/'+this.cops_lcd_config.id, detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {
            store.commit("activateLoader", "end");
            
            let api_response = response.data;
          if (api_response.status === true) {
           
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Config updated Successfully', 'show_alert': true}); 
              this.formstate.$submitted=false;
                this.cops_lcd_config= {submit_mode: "Add Config"}; 
          }
        }).catch(error => {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
        }
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
<style>
  .form-control{
    transition: initial;
  }
</style>
