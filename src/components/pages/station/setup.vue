<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="" header-tag="h4" class="bg-default-card">
                <div class="row">
                    <div class="col-md-12">
                        <vue-form :state="formstate2" @submit.prevent="show_company_stations">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="company">Select Company</label>
                                            <select id="company" name="company" size="1" class="form-control" v-model="preset.company_id" required checkbox>
                                                <option value="0" selected disabled>
                                                    Select Company
                                                </option>
                                                <option
                                                        v-for="option in available_companies"
                                                        v-bind:value="option.id"
                                                        :selected="option.id == preset.company_id" >{{ option.name }}
                                                </option>
                                            </select>
                                            <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                                                <div slot="checkbox">Company is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group float-left">
                                        <input type="submit" value="Submit" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-md-6">

                        <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
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
                                                <option value="0" selected disabled>
                                                    Please select
                                                </option>
                                                <option
                                                    v-for="option in available_states"
                                                    v-bind:value="option.states.name" >{{ option.states.name }}
                                                </option>
                                                
                                            </select>
                                            <field-messages name="state" show="$invalid && $submitted" class="text-danger">
                                                <div slot="checkbox">State is required</div>
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
                                                <div slot="checkbox">Expenses Type is required</div>
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
                                                <div slot="checkbox">License Type is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group float-right">
                                        <input type="submit" value="Submit" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-sm-6">
                        <div class="table-responsive">
                            <datatable title="Registered Stations" :rows="tableData" :columns="columndata"></datatable>
                        </div>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'; import store from 'src/store/store.js';
    import datatable from "components/plugins/DataTable/DataTable.vue";
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
            return {columndata: [{
                    label: 'ID',
                    field: 'id',
                    numeric: true,
                    html: false,
                }, {
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
                    field: 'manager_email',
                    numeric: false,
                    html: false,
                }, {
                    label: 'Actions',
                    field: 'action',
                    numeric: false,
                    html: true,
                }],
                ajaxLoading: true,
                loading: true,
                url: this.$store.state.host_url+'/stations',
                formstate: {},
                formstate2: {},
                show_setup_form : false,
                tableData: [],
                available_companies: "",
                preset : {
                      company_id: "",
                },
                station: {
                    name: "",
                    state:"",
                    address: "",
                    city: "",
                    manager_name: "",
                    manager_phone: "",
                    manager_email: "",
                    daily_budget: "",
                    monthly_budget: "",
                    license_type: "",
                    expense_type: "",
                    opening_time: "",
                    company_id: "",
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
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                axios.get(this.$store.state.host_url+"/companies",
                    {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }}).then(response => {
                            console.log(response.data.data);
                    this.available_companies = response.data.data;
                    })
                    .catch(error => {
                    if(error.response.status == 401){
                        this.$router.push('/login?message='+error.response.data.error);
                    }
                            console.log(error.response.status);
                        });
                    }
            ,
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {store.commit("activateLoader", "start");
                    this.station.company_id = this.preset.company_id;
                    let station_detail = {
                        station: this.station
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    console.log(JSON.stringify(station_detail));
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
                            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Company Registered Successfully', 'show_alert': true});
                            }
                }).catch(error => { 
                    store.commit("activateLoader", "end");   
                    store.commit("catch_errors", error); 
                       
                    })}
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
