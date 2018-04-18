<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">
            <vue-form :state="formstate" @submit.prevent="onSubmit">
              <div class="row">
                <div class="col-lg-5">
                  <div class="form-group" v-if="show_multi_company">
                    <validate tag="div">
                      Select Company
                      <select  name="company"  size="1" class="form-control" v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" >
                          <option
                            v-for="(option, index) in available_companies"
                            v-bind:value="option.id"
                            >{{ option.name }}
                          </option>                       
                      </select>                     
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>

                  <div class="form-group" v-if="show_single_company">
                    <validate tag="div">
                      Select Company
                      <select  name="company" size="1" class="form-control" v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" >
                        <option :value="available_company.id"
                          >{{ available_company.name }}
                        </option>
                        
                      </select>
                      
                      <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                        <div slot="requred">Company is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
              <div class="col-lg-5" v-show="show_setup_form && fill_form" >
                
                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="name">Name</label>
                      <input v-model="item.name" name="name" type="text" required autofocus placeholder="Name" class="form-control" id="name"/>
                      <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="category"> Category</label>
                      <select id="role" name="role_id" size="1" class="form-control" v-model="item.category" required>
                        <option value="LPG" >LPG </option>
                        <option value="Lubricants" >Lubricants </option>
                      </select>
                      <field-messages name="Category" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Category is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="parentsku"> Parent SKU</label>
                      <input v-model="item.parentsku" name="parentsku" type="text" required autofocus placeholder="Parent SKU" class="form-control" id="parentsku"/>
                      <field-messages name="parentsku" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Parent SKU is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
               
                <div class="col-lg-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="uom">Unit of Measurement</label>
                      <select id="uom" name="uom" size="1" class="form-control" v-model="item.uom" >
                        <option value="Litres" >Litres</option>
                        <option value="Kilograms" >Kilograms</option>
                        <option value="Pounds" >Pounds</option>
                      </select>
                      <field-messages name="uom" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">UOM is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-12">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="brand">Brand</label>
                      <input v-model="item.brand" name="brand" type="text" required autofocus placeholder="Brand" class="form-control" id="brand"/>
                      <field-messages name="brand" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Brand is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>


                
                
                <div class="col-sm-12">
                  <div class="form-group float-right">
                    <input type="submit" :value="item.submit_mode" class="btn btn-success" />
                  </div>
                </div>
              </div>
              </div>
            </vue-form>
          </div>
          <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
            <div>
                <button v-on:click="fill_form=!fill_form" style=" margin-bottom: 10px" class="btn btn-success"> ADD A NEW ITEM</button>
            </div>
              <datatable title="Added Items" :rows="tableData" :columns="columndata">
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
  import Vue from 'vue'; import store from 'src/store/store.js';
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";    
  import vueSmoothScroll from 'vue-smoothscroll'; 
  Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import Multiselect from 'vue-multiselect';
  Vue.use(VueForm, options);
  Vue.component(Multiselect);
  export default {
    name: "formfeatures",
    components: {
      datatable,csview,
      Multiselect,
    },
    data() {
      return {columndata: [{
          label: 'Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Category',
          field: 'category',
          numeric: false,
          html: false,
        }, {
          label: 'Brand',
          field: 'brand',
          numeric: true,
          html: false,
        }, {
          label: 'Parent SKU',
          field: 'parentsku',
          numeric: true,
          html: true,
        }, {
          label: 'UOM',
          field: 'uom',
          numeric: true,
          html: true,
        },{
          field: '__slot:actions',
          label: 'Actions',
          }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/items',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
       available_companies: [],
        available_company: [],
        products: "",
        show_multi_company: false,
        show_single_company: false,
        available_roles: "",
        station_pumps:"",
        fill_form: false,
        company_stations: "",
        company_stations_null: "",
        company_notifications_null: "",
        company_notifications: [],
        preset : {
          company_id: "",
          station_id: ""
        },
          phone_number: "",
          selected_stations : [],
          email: "",
          username: "",
          fullname: "",
          role_id: 0,

        item : {
          category: 0,
          station_id: "",
          name: "",
          brand: "",
          uom: 0,
          submit_mode: 'CREATE',
        }

      }
    },
    methods: {

      show_company_stations(company_name){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        
        axios.get(this.$store.state.host_url+"/items/by_company/"+company_name,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          this.tableData = response.data.data;
          this.show_setup_form=true;
          store.commit("activateLoader", "end");   
         
      })
      .catch(function(error) {
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        });
        
      },
       show_notification_modules(){
                     ///get products///
              let user_details = JSON.parse(localStorage.getItem('user_details'));
              axios.get(this.$store.state.host_url+"/notifications",
                {
                  headers : {
                    "Authorization" : "Bearer " + user_details.token
                  }}).then(response => {
                //
                this.company_notifications = response.data.data;
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
      }
        , onAction (action, data, index) {
                this.$SmoothScroll(document.getElementById("content-header"));
                console.log('slot action: ' + action, data.fullname, index);
                if(action == 'edit'){
                    this.fill_form = true;
                    this.item = data;
                    this.item.submit_mode="UPDATE"
                }else if(action =='delete'){
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
                            message:'Item Deleted Successfully',transition:''});
                            }
                            }).catch(error => { 
                                store.commit("activateLoader", "end");   
                                store.commit("catch_errors", error); 
                    });
            },
      onSubmit() {
        this.$SmoothScroll(document.getElementById("content-header"));
        if (this.formstate.$invalid) {
          return;
        } else {
          store.commit("activateLoader", "start");
          //include station and company_id
         // this.users.station_id= this.preset.station_id;
          this.item.company_id= this.preset.company_id;
          let item_detail = {
            item: this.item
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));
          if(this.item.submit_mode == 'CREATE'){
          axios.post(this.url, item_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {                         
            store.commit("activateLoader", "end");
            let station_response = response.data;
          if (station_response.status === true) {
            console.log(response.data.data);
             this.tableData.push(response.data.data);  
            this.$alert.success({duration:10000,forceRender:'',
            message:'Item registered successfully',transition:''});
            this.formstate.$submitted=false;
            this.item= {submit_mode: "CREATE"};
          }
        }).catch(error => { 
        store.commit("activateLoader", "end");   
        store.commit("catch_errors", error); 
        })}
        else if(this.item.submit_mode == 'UPDATE'){
                    axios.patch(this.url, item_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        console.log(response);
                        this.$alert.success({duration:10000,forceRender:'',
                        message:'Item Updated Successfully',transition:''});
                        this.formstate.$submitted=false;
                        this.item= {submit_mode: "CREATE"};
                        this.form_reset();
                        
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }
      }},
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
      this.show_notification_modules();
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
