<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="" header-tag="h4" class="bg-default-card">
                <div class="row">
                    <div class="col-md-12">
                        <vue-form :state="formstate2" @submit.prevent="show_company_stations">
                            <div class="row">
                                <div class="col-lg-6">
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

                            </div>
                        </vue-form>
                        <hr>
                    </div>
                    <div class="col-md-6">

                        <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form && fill_form">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="name"> Station Name</label>
                                            <input v-model="station.name" name="name" type="text" required autofocus placeholder="Station Name" class="form-control" id="name"/>
                                            <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Station name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="state">State</label>
                                            <select id="state" name="state" class="form-control" v-model="station.state" required autofocus >

                                                <option
                                                    v-for="option in available_states"
                                                    v-bind:value="option.states.name" >{{ option.states.name }}
                                                </option>
                                                
                                            </select>
                                            <field-messages name="state" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">State is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="city">City</label>
                                            <input v-model="station.city" rows="5" class="form-control resize_vertical" name="city" id="city" placeholder="Enter your Station City" required />
                                            <field-messages name="city" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Station City is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="address"> Station Address</label>
                                            <input v-model="station.address" name="address" type="text" required autofocus placeholder="Station Address" class="form-control" id="address"/>
                                            <field-messages name="address" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Station Address is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="manager_name"> Station Manager's Name</label>
                                            <input v-model="station.manager_name" name="manager_name" type="text" required autofocus placeholder="Station Manager's Name" class="form-control" id="manager_name"/>
                                            <field-messages name="manager_name" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Manager's Name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="manager_number">Station Manager's Phone Number</label>
                                            <input v-model="station.manager_phone" name="manager_phone" type="text" required placeholder="Station Manager's Phone Number" class="form-control" id="manager_phone"/>
                                            <field-messages name="manager_phone" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Station Manager's Phone Number is a required field</div>
                                                <div slot="manager_phone">Station Manager's Phone Number is not valid</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="manager_email">Station Manager's Email</label>
                                            <input v-model="station.manager_email" name="manager_email" type="email" required placeholder="Station Manager's Email" class="form-control" id="manager_email"/>
                                            <field-messages name="manager_email" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Station Manager's Email is a required field</div>
                                                <div slot="manager_email">Station Manager's Email is not valid</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="daily_budget"> Daily Budget</label>
                                            <input v-model="station.daily_budget" name="daily_budget" type="text" required autofocus placeholder="Daily Budget" class="form-control" id="daily_budget"/>
                                            <field-messages name="daily_budget" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Daily Budget is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="monthly_budget"> Monthly Budget</label>
                                            <input v-model="station.monthly_budget" name="monthly_budget" type="text" required autofocus placeholder="Monthly Budget" class="form-control" id="monthly_budget"/>
                                            <field-messages name="monthly_budget" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Monthly Budget is a required field</div>
                                            </field-messages>

                                        </validate>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="opening_time">Opening Time</label>
                                            <input v-model="station.opening_time" rows="5" class="form-control resize_vertical" name="opening_time" id="opening_time" placeholder="Enter your Opening Time" required />
                                            <field-messages name="opening_time" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Opening Time is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="expenses_type">Expenses Type</label>
                                            <select id="expenses_type" name="expenses_type" size="1" class="form-control" v-model="station.expenses_type" required checkbox>
                                                <option value="0" selected disabled>
                                                    Please select
                                                </option>
                                                <option value="Prepaid">Prepaid</option>
                                                <option value="Postpaid">Postpaid</option>

                                            </select>
                                            <field-messages name="expenses_type" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Expenses Type is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="license_type">License Type</label>
                                            <select id="license_type" name="license_type" size="1" class="form-control" v-model="station.license_type" required checkbox>
                                                <option value="0" selected disabled>
                                                    Please select
                                                </option>
                                                <option value="S.B.E">S.B.E</option>
                                                <option value="E.E">E.E</option>

                                            </select>
                                            <field-messages name="license_type" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">License Type is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group float-right">
                                        <input type="submit" :value="station.submit_mode" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-sm-12" v-show="show_setup_form">
                        <div>
                        <button v-on:click="fill_form=!fill_form" style="float: right; margin-bottom: 10px" class="btn btn-success"> ADD NEW STATION</button>
                        </div>
                        <div class="table-responsive">
                            
                            <datatable title="Registered Stations" :rows="tableData" :columns="columndata">
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
    import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
    import options from "src/validations/validations.js";
    import api_states from "src/assets/json/states.json";
    Vue.use(VueForm, options);
    export default {
        name: "formfeatures",
        components: {
            datatable
        },
        data() {
            return {columndata: [ {
                    label: 'Name',
                    field: 'name',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Address',
                    field: 'address',
                    numeric: false,
                    html: false,
                }, {
                    label: 'City',
                    field: 'city',
                    numeric: true,
                    html: false,
                }, {
                    label: "Manager's Phone",
                    field: 'manager_phone',
                    numeric: false,
                    html: false,
                }, {
                    label: "Manager's Email",
                    field: 'manager_email',
                    numeric: false,
                    html: false,
                },{
                field: '__slot:actions',
                label: 'Actions',
                }],
                ajaxLoading: true,
                loading: true,
                url: this.$store.state.host_url+'/stations',
                formstate: {},
                formstate2: {},
                fill_form: false,
                show_setup_form : false,
                tableData: [],
                available_companies: [],
                available_company: [],
                products: "",
                show_multi_company: false,
                show_single_company: false,
                available_states:"",
                preset : {
                      company_id: "",
                },
                station: {
                    name: "",
                    state:0,
                    address: "",
                    city: "",
                    manager_name: "",
                    manager_phone: "",
                    manager_email: "",
                    daily_budget: "",
                    monthly_budget: "",
                    license_type: 0,
                    expense_type: 0,
                    opening_time: "",
                    company_id: "",
                    submit_mode: "CREATE"
                }

            }
        },
        methods: {
            show_company_stations(){

                if (this.formstate2.$invalid) {
                    return;
                } else {store.commit("activateLoader", "start");
                    this.show_setup_form= true;
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    let company_id= this.preset.company_id;
                    axios.get(this.$store.state.host_url+"/stations/by_company/"+company_id,
                        {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }}).then(response => {
                                store.commit("activateLoader", "end");
                        this.tableData = response.data.data;
                    console.log(response.data.data);
                    this.tableData.forEach((item, index) => {
                        this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/station/edit?station=" + item.id + "'>Edit</a>");
                });
                    // this.loader
                })
                .catch(function(error) {
                    store.commit("activateLoader", "end");   
                    store.commit("catch_errors", error); 
                });
                }},
            show_available_companies(){ 
                     console.log(store.state.show_multi_company + "multi5");
                    if(store.state.show_single_company){
                        this.available_company = store.state.available_company;
                        this.show_single_company = store.state.show_single_company;
                        }
                    else if(store.state.show_multi_company){
                        this.available_companies = store.state.available_companies;
                        this.show_multi_company = store.state.show_multi_company;
                        }
                    }
            , onAction (action, data, index) {
                this.$SmoothScroll(document.getElementById("content-header"));
                console.log('slot action: ' + action, data.name, index);
                if(action == 'edit'){
                    this.fill_form = true;
                    this.station = data;
                    this.station.submit_mode="UPDATE"
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
                    this.station.company_id = this.preset.company_id;
                    let station_detail = {
                        station: this.station
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    console.log(JSON.stringify(station_detail));
                    if(this.station.submit_mode == 'CREATE'){
                    axios.post(this.url, station_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");
                        let station_response = response.data;
                            if (station_response.status === true) {
                                console.log(response.data);
                              this.tableData.push(response.data.data);
                              this.tableData.forEach((item, index) => {
                                this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/station/edit?station=" + item.id + "'>Edit</a>");
                            });
                             this.$alert.success({duration:10000,forceRender:'',
                        message:'Station Registered Successfully',transition:''});
                        this.formstate.$submitted=false;
                        this.station= {submit_mode: "CREATE"};
                        
                        
                            }
                }).catch(error => { 
                    store.commit("activateLoader", "end");   
                    store.commit("catch_errors", error); 
                       
                    });}
                    else if(this.station.submit_mode == 'UPDATE'){
                    axios.patch(this.url+"/"+this.station.id, station_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        console.log(response);
                        let company_response = response.data;
                        if (company_response.status === true) {
                        
                        this.$alert.success({duration:10000,forceRender:'',
                        message:'Station Updated Successfully',transition:''});
                        this.formstate.$submitted=false;
                        this.station= {submit_mode: "CREATE"};
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }
        
                    
                    }
            }
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
