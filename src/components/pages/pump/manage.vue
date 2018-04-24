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
                      @click="show_station_pumps( props.rowData, props.rowIndex)">Proceed</button>
                        
                    </div>
                  </template>
                </csview>
            <hr>
          </div>
          <div class="col-sm-8">
            <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form && fill_form">
              <div class="row">

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="pump_nozzle_code"> Pump Nozzle Code</label>
                      <input v-model="pump.pump_nozzle_code" name="pump_nozzle_code" type="text" required autofocus placeholder="Pump Nozzle Code" class="form-control" id="pump_nozzle_code"/>
                      <field-messages name="pump_nozzle_code" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Pump Nozzle Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="fcc_pump_nozzle_id"> FCC Pump Nozzle ID</label>
                      <input v-model="pump.fcc_pump_nozzle_id" name="fcc_pump_nozzle_id" type="text"  autofocus placeholder="FCC Pump Nozzle ID" class="form-control" id="fcc_pump_nozzle_id"/>
                      <field-messages name="fcc_pump_nozzle_id" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">FCC Pump Nozzle ID is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="brand"> Brand</label>
                      <input v-model="pump.brand" name="brand" type="text" required autofocus placeholder="Brand" class="form-control" id="brand"/>
                      <field-messages name="brand" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Brand is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="serial_number"> Serial Number</label>
                      <input v-model="pump.serial_number" name="serial_number" type="text" required autofocus placeholder="Serial Number" class="form-control" id="serial_number"/>
                      <field-messages name="serial_number" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Serial Number is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product">Product</label>
                      <select id="product" name="product" size="1" class="form-control" v-model="pump.product_id" required checkbox>

                        <option
                          v-for="option in products"
                          v-bind:value="option.id"
                          :selected="option.name == pump.product_id" >{{ option.name }}
                        </option>

                      </select>
                      <field-messages name="product" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Product is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group float-right">
                    <input type="submit" :value="pump.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-12" v-show="show_setup_form">
            <div>
                <button v-on:click="fill_form=!fill_form" style="float: right; margin-bottom: 10px" class="btn btn-success"> ADD NEW PUMP</button>
            </div>
            <div class="table-responsive">
              <datatable title="Registered Pumps" :rows="tableData" :columns="columndata">
                <template slot="actions" slot-scope="props">
                    <div >
                      <i class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)"></i>
                      <i class='fa fa-trash text-danger' @click="onAction('delete', props.rowData, props.rowIndex)"></i>
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
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
    },
    data() {
      return {columndata: [{
          label: 'Pump Nozzle Code',
          field: 'pump_nozzle_code',
          numeric: false,
          html: false,
        }
       , {
          label: '  Product',
          field: 'product.code',
          numeric: false,
          html: false,
        }, {
          label: 'Brand',
          field: 'brand',
          numeric: true,
          html: false,
        },{
          label: 'FCC Pump Nozzle ID',
          field: 'fcc_pump_nozzle_id',
          numeric: false,
          html: false,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/pumps',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: [],
        available_company: [],
        products: "",
        fill_form: false,
        show_multi_company: false,
        show_single_company: false,
        station_pumps:"",
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        pump : {
          company_id: "",
          station_id: "",
          fcc_pump_nozzle_id: "",
          pump_nozzle_code:"",
          product_id: 0,
         
          brand: "",
          submit_mode: "CREATE",
        }

      }
    },
    methods: {

       show_station_pumps(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
        if (this.formstate2.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          this.show_setup_form= true;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          let station_id= this.preset.station_id;
          console.log(station_id);
          axios.get(this.$store.state.host_url+"/pumps/by_station/"+station_id,
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
            store.commit("activateLoader", "end");   
            this.tableData = response.data.data;
          console.log(response);
        
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
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
           this.$SmoothScroll(document.getElementById("content-header"));
           store.commit("activateLoader", "start");
          //include station and company_id
          this.pump.station_id= this.preset.station_id;
          this.pump.company_id= this.preset.company_id;
          let pump_detail = {
            pump: this.pump
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          if(this.pump.submit_mode == 'CREATE'){
          axios.post(this.url, pump_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
            //console.log(response.data);
           this.tableData = response.data.data;
          store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Pump Added Successfully', 'show_alert': true});
                       this.formstate.$submitted=false;
                        this.pump= {submit_mode: "CREATE"};
          }
        }).catch(error => { 
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
           
        });}
        else if(this.pump.submit_mode == 'UPDATE'){
          console.log("here here");
                    axios.patch(this.$store.state.host_url+"/pumps/"+this.pump.id, pump_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        let company_response = response.data;
                        if (company_response.status === true) {
                          this.tableData = response.data.data;
                        this.$alert.success({duration:10000,forceRender:'',
                        message:'Pump Updated Successfully',transition:''});
                        this.formstate.$submitted=false;
                        this.pump = {submit_mode: "CREATE"};
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }

        }
        this.pump = {
          serial_number: " ",
          brand: " ",
          pump_nozzle_code:" ",
          product: " ",
          fcc_pump_nozzle_id: " ",
          submit_mode: "CREATE",
        };
      }
       ,onAction (action, data, index) {
                this.$SmoothScroll(document.getElementById("content-header"));
                if(action == 'edit'){
                    this.fill_form = true;
                    this.pump = data;
                    this.pump.submit_mode="UPDATE"
                }else{
                    this.$modal.show('dialog', {
                        title: 'Alert!',
                        text: 'Click Okay to confirm DELETE',
                        buttons: [
                            {
                            title: 'OKAY',       // Button title
                            default: true,    // Will be triggered by default if 'Enter' pressed.
                            handler: () => {this.deleteItem(data)} // Button click handler
                            },
                            {
                            title: 'CLOSE'
                            }
                        ]
                        });
                }
                },
            deleteItem(data){
                store.commit("activateLoader", "start");
                this.$modal.hide('dialog');
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                axios.delete(this.url+'/'+data.id, {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }
                        }).then( response => {                         
                            store.commit("activateLoader", "end");        
                            let company_response = response.data;
                            if (company_response.status === true) {
                                this.tableData.splice(this.tableData.indexOf(data), 1);
                                this.$alert.success({duration:10000,forceRender:'',
                            message:'Pump Deleted Successfully',transition:''});
                            }
                            }).catch(error => { 
                                store.commit("activateLoader", "end");   
                                store.commit("catch_errors", error); 
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
</style>
