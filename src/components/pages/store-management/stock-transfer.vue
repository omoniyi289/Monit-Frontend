<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card"> 
          <div class="col-md-12">
            FROM
            <csview title="Custom Table"  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button  class="btn btn-success" 
                        @click="set_home_station( props.rowData, props.rowIndex)">Proceed
                      </button>
                        
                    </div>
                  </template>
            </csview>
          </div>
          <div v-show="show_station_to" class="col-md-12">
               TO
            <csview  title="Custom Table"  :companies="available_companies" :stations="company_stations">
                  <template slot="actions" slot-scope="props">
                    <div >
                      <button class="btn btn-success" 
                        @click="set_away_station( props.rowData, props.rowIndex)">Proceed
                      </button>
                        
                    </div>
                  </template>
            </csview>
          </div>
            <hr>
    
        <div class="row">
          <div style="margin-left: 3%" class="col-md-12">
            <vue-form  v-show="show_setup_form" :state="formstate2" @submit.prevent="update_variant_for_station">
              <div class="row">
                <div class="col-lg-5">
                  
                  <div class="form-group" >
                    <validate tag="div">
                      Select Item
                      <select  name="company" size="1" class="form-control" v-on:change="show_item_variants(item_variant.item_id)" v-model="item_variant.item_id" >
                       <option
                            v-for="(option, index) in tableData"
                            v-bind:value="option.id"
                            >{{ option.name }}
                          </option> 
                        
                      </select>
                      
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Item is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
              <b-card header-tag="h4" class="bg-info-card" header="Stock Count">
                <div class="row ">
                  <div class="col-12">               
                    <b-tabs>
                      <b-tab title="" >
                            <table class="table">
                              <thead>
                                <tr>
                                  <th>Item Name</th>
                                  <th>Parent SKU</th>
                                  <th>Variant Option</th>
                                  <th>Variant Value</th>
                                  <th>Composite SKU</th>
                                  <th>Current Available Quantity</th>                                  
                                  <th>Quantity to Transfter</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr  v-for="(option, index) in item_variants">
                                  <td>{{option.item.name}}</td>
                                  <td>{{option.item.parentsku}}</td>
                                  <td>{{option.variant_option}}</td>
                                  <td>{{option.variant_value}}</td>
                                  <td>{{option.compositesku}}</td>
                                  
                                  <td>
                                    <validate tag="div">
                                      <input readonly v-model="item_variants[index].qty_in_stock" id="cc" :name="cc+index" type="number" required placeholder="Quantity in Stock" class="form-control" />
                                      <field-messages :name="cc+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Quantity in Stock is required</div>
                                      </field-messages>
                                    </validate>        
                                  </td>
                                  <td>
                                    <validate tag="div">
                                      <input v-model="item_variants[index].quantity_transferred"  id="c_rd"  :name="c_cc+index" type="number" required placeholder="Quantity Counted" class="form-control" />
                                      <field-messages :name="c_cc+index" show="$invalid && $submitted" class="text-danger">
                                          <div slot="required">Quantity Counted is required</div>
                                        
                                      </field-messages>
                                    </validate>
                                  </td>
                  
                                </tr>
                              </tbody>
                            </table> 
                            <div class="col-sm-12">
                              <div class="form-group float-right">
                                <input type="submit" value="COMPLETE TRANSFER" class="btn btn-success"></input>
                              </div>
                            </div>
                        </b-tab>
                      </b-tabs>           
                  </div>
                </div>
              </b-card>
                
              </div>
            </vue-form>
          </div>
          </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'; import store from 'src/store/store.js';
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";    
  import vueSmoothScroll from 'vue-smoothscroll'; 
  Vue.use(vueSmoothScroll);
  import Datepicker from 'vuejs-datepicker';
  import options from "src/validations/validations.js";
  import Multiselect from 'vue-multiselect';
  Vue.use(VueForm, options);
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Multiselect,
      Datepicker,
    },
    data() {
      return {
        
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/items',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        show_station_to : false,
        tableData_2: [],
        format: 'yyyy-MM-dd',
        available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        available_roles: "",
        station_pumps:"",
        fill_form: false,
        fill_form_2: false,
        rd: "reading",
        c_rd: "_reading",
        cc:"collected",
        c_cc: "_collected",
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
         variant_transfer : {
          company_id: "",
          station_id: ""
        },
          phone_number: "",
          selected_stations : [],
          email: "",
          username: "",
          fullname: "",
          role_id: 0,
          item_variants :{
            },
          item_variant : [],
          final_data:{},

      }
    },
    methods: {

      set_home_station(station_id, company_id){
        this.preset.company_id= company_id;
        this.preset.station_id= station_id;
        this.variant_transfer.company_id= company_id;
        this.variant_transfer.tx_station_id= station_id;
        this.show_station_to = true;
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        
        axios.get(this.$store.state.host_url+"/items/by_company/"+company_id,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
          this.tableData = response.data.data;
  
          store.commit("activateLoader", "end");   
         
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },
      set_away_station(station_id, company_id){
        this.show_setup_form = true;
        this.variant_transfer.rx_station_id= station_id;
        
      },
       show_item_variants(item_id){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let params='station_id='+this.preset.station_id+'&item_id='+item_id;
        axios.get(this.$store.state.host_url+"/item-variants/by_station/params?"+params,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
              this.update_view(response);
          store.commit("activateLoader", "end");   
         
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },
     update_view(response){
       let table_data = [];
        //  table_data.item_variants=response.data.data.item_variants;
          table_data.item_variants=response.data.data.item_variants_by_station;
          ///set current item_variants to db items_variants
          //console.log(response.data.data.item_variants_by_station);
          this.item_variants = table_data.item_variants;
          this.item_variants.forEach( (element, index) => {
            var quantity_transferred = 0;
          this.item_variants[index].quantity_transferred = quantity_transferred;
          });

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
      },
        update_variant_for_station() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          //include station and company_id
         // this.users.station_id= this.preset.station_id;
          this.final_data.company_id= this.preset.company_id;
          this.final_data.tx_station_id= this.variant_transfer.tx_station_id;
          this.final_data.rx_station_id= this.variant_transfer.rx_station_id;
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          this.final_data.transfered_by= user_details.id;
          this.final_data.item_variants= this.item_variants;
          
          axios.post(this.$store.state.host_url+"/item-variants/stock-transfer/", this.final_data, {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
            this.update_view(response);
            this.$alert.success({duration:10000,forceRender:'',
            message:'Stock Transfered successfully',transition:''});
            this.formstate.$submitted=false;
          }
        }).catch(error => { 
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        })}
      
      },
      addTag(newTag) {
            const tag = {
                id: newTag,
                name: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.all_groups.push(tag)
            this.selected_groups.push(tag)
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
  .form-control{
    transition: initial;
  }
</style>
