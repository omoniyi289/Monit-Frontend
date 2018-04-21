<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header=""  header-tag="h4" class="bg-primary-card">
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-6">
                        <vue-form :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="name"> Company Name</label>
                                            <input v-model="company.name" name="name" type="text" required autofocus placeholder="Company Name" class="form-control" id="name"/>
                                            <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="registration_number"> Registration Number</label>
                                            <input v-model="company.registration_number" name="registration_number" type="text" required autofocus placeholder="Registration Number" class="form-control" id="registration_number"/>
                                            <field-messages name="registration_number" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="email_input">Company E-mail</label>
                                            <input v-model="company.email" name="email" type="email" required autofocus placeholder="Company E-mail" class="form-control" id="email_input"/>
                                            <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company Email is a required field</div>
                                                <div slot="email">Email is not valid</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="state">State</label>
                                            <select id="state" name="state" class="form-control" v-model="company.state" required autofocus >
                                            
                                                <option
                                                    v-for="option in available_states"
                                                    v-bind:value="option.states.name" >
                                                    {{ option.states.name }}
                                                </option>
                                                
                                            </select>
                                            <field-messages name="state" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">State is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="city">City</label>
                                            <input v-model="company.city" class="form-control" name="city" id="city" placeholder="Enter your Company City" required  />
                                            <field-messages name="city" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">City is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="address"> Company Address</label>
                                            <input v-model="company.address" name="address" type="text" required  placeholder="Company Address" class="form-control" id="address"/>
                                            <field-messages name="address" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company Address is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group float-right">
                                        <input type="submit" :value="company.submit_mode" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-md-3">
                -    </div>
                    <div class="col-sm-12">
                        <div class="table-responsive">
                            <datatable title="Company"  :rows="tableData" :columns="columndata">
                            <template slot="actions" slot-scope="props">
                                <div >
                                <i class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)"></i>
                                <i class='fa fa-trash text-danger' @click="onAction('deete', props.rowData, props.rowIndex)"></i>
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
    import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
    import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
    import options from "src/validations/validations.js";
    Vue.use(VueForm, options);
    import api_states from "src/assets/json/states.json";
    export default {
        name: "formfeatures",
         components: {
        datatable,csview,
        },
         props:['data'],
        data() {
            return {
        
                columndata: [{
                label: 'Name',
                field: 'name',
                numeric: false,
                html: false,
                }
                , {
                label: 'Address',
                field: 'address',
                numeric: false,
                html: false,
                }, {
                label: 'Email',
                field: 'email',
                numeric: false,
                html: false,
                }, {
                label: 'Registered On',
                field: 'created_at',
                numeric: true,
                html: false,
                }
                ,{
                field: '__slot:actions',
                label: 'Actions',
                }
               ],
                tableData: [],
                ajaxLoading: true,
                loading: true,
                url: this.$store.state.host_url+'/companies',
                formstate: {},
                company: {
                    name: "",
                    email: "",
                    state:0,
                    address: "",
                    city: "",
                    registration_number: "",
                    submit_mode: "CREATE"
                },
                available_states: "",
            }
        },
        methods: {
           show_available_companies(){
        this.products = store.state.products;
        if(store.state.show_single_company){
            console.log(store.state.available_company);
          this.tableData.push(store.state.available_company);
        }else if(store.state.show_multi_company == true){
          this.tableData = store.state.available_companies;
        }
      }
      ,
    onAction (action, data, index) {
      this.$SmoothScroll(document.getElementById("content-header"));
      console.log('slot action: ' + action, data.name, index);
      if(action == 'edit'){
        this.company = data;
        this.company.submit_mode="UPDATE"
      }else if(action =='delete'){
          
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
                        message:'Company Deleted Successfully',transition:''});
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
                } else {store.commit("activateLoader", "start");
                    store.commit("activateLoader", "start");
                    let company_detail = {
                        company: this.company
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    //console.log(JSON.stringify(company_detail));
                    if(this.company.submit_mode == 'CREATE'){
                    axios.post(this.url, company_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
        
                        let company_response = response.data;
                        if (company_response.status === true) {
                            this.tableData.push(company_response.data);
                            localStorage.setItem('company_details', response.data);
                            console.log(response.data.data);
                            this.$alert.success({duration:10000,forceRender:'',
                            message:'Company Registered Successfully, please re-login to continue',transition:''});
                            this.formstate.$submitted=false;
                            this.company= {submit_mode: "CREATE"};
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });}else if(this.company.submit_mode == 'UPDATE'){
                    axios.patch(this.url+'/'+this.company.id, company_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
        
                        let company_response = response.data;
                        if (company_response.status === true) {
                            this.company='';
                        this.$alert.success({duration:10000,forceRender:'',
                        message:'Company Updated Successfully',transition:''});
                        this.formstate.$submitted=false;
                        this.company= {submit_mode: "CREATE"};
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
            this.available_states = api_states;
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
