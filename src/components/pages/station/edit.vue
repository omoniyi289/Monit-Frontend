<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Edit Station" header-tag="h4" class="bg-success-card">
                <div class="row">
                    <div class="col-lg-12 col-12 mb-3">
                        <vue-form class="form-horizontal form-validation" :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name"> Station Name</label>
                                                <input v-model="model.name" id="name" name="name" type="text" required autofocus placeholder="User Name" class="form-control" />
                                                <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Station Name is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="manager_name"> Station Manager's name</label>
                                                <input v-model="model.manager_name" id="manager_name" name="manager_name" type="text" required placeholder="Station Manager's name" class="form-control" />
                                                <field-messages name="manager_name" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Name is a required field</div>
                                                    <div slot="manager_name">Name is not valid</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="manager_phone"> Manager's Phone</label>
                                                <input v-model="model.manager_phone" id="manager_phone" name="manager_phone" type="manager_phone" required placeholder="Mobile Number(11 Digits)" class="form-control" pattern="[0-9]{11}" />
                                                <field-messages name="manager_phone" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Mobile Phone is a required field</div>
                                                    <div slot="pattern">Mobile Phone is not valid</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="manager_email">Manager's Email</label>
                                                <input name="manager_email" id="manager_email" type="email" required placeholder="Email" class="form-control" v-model="model.manager_email" />
                                                <field-messages name="manager_email" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Email is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="license_type">License Type</label>

                                                <select id="license_type" name="license_type" size="1" class="form-control" v-model="model.license_type" required checkbox>
                                                    <option
                                                            v-for="option in license_options"
                                                            v-bind:value="option"
                                                            :selected="option == model.license_type"
                                                    >{{ option }}</option>
                                                </select>
                                                <field-messages name="gender" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="checkbox">License type is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="expense_type">Expenses Type</label>

                                                <select id="expenses_type" name="expenses_type" size="1" class="form-control" v-model="model.expenses_type" required checkbox>
                                                    <option
                                                            v-for="option in expense_options"
                                                            v-bind:value="option"
                                                            :selected="option == model.expenses_type"
                                                    >{{ option }}</option>
                                                </select>
                                                <field-messages name="expenses_type" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="checkbox">Expenses type is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="address">Address</label>
                                                <textarea v-model="model.address" rows="4" class="form-control resize_vertical" name="address" id="address" placeholder="Enter your Address" required></textarea>
                                                <field-messages name="address" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Address is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="daily_budget">Daily Budget</label>
                                                <input v-model="model.daily_budget" rows="4" class="form-control resize_vertical" name="daily_budget" id="address" placeholder="Daily Budget" required />
                                                <field-messages name="daily_budget" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Daily Budget is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="monthly_budget">Monthly Budget</label>
                                                <input v-model="model.monthly_budget" rows="4" class="form-control resize_vertical" name="monthly_budget" id="monthly_budget" placeholder="Monthly Budget" required/>
                                                <field-messages name="monthly_budget" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Monthly Budget is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="city">City</label>
                                                <input name="city" id="city" type="text" required placeholder="City" class="form-control" v-model="model.city" />
                                                <field-messages name="city" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">City is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="state">State</label>

                                                <select id="state" name="state" size="1" class="form-control" v-model="model.state" required checkbox>
                                                    <option
                                                            v-for="option in available_states"
                                                            v-bind:value="option.states.name"
                                                            :selected="option.states.name == model.state"
                                                    >{{ option.states.name }}</option>
                                                </select>
                                                <field-messages name="state" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="checkbox">State is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div class="col-md-offset-4 col-md-8 m-t-25">
                                <button type="submit" class="btn btn-primary">Submit
                                </button>
                                <button type="reset" class="btn btn-effect-ripple btn-secondary  reset_btn1" @click="form_reset">
                                    Reset
                                </button>
                            </div>
                        </vue-form>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import Vue from 'vue' ;    import store from 'src/store/store.js';
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
import options from "src/validations/validations.js";
import api_states from "src/assets/json/states.json";
Vue.use(VueForm, options);
export default {
    name: "edit_user",
    data() {
        return {
            formstate: {},
            
            license_options : { 1 : "S.B.E", 2:"E.E" },
            expense_options : {1 : "Prepaid", 2:"Postpaid" },
        
            model: {
                username: "",
                email: "add@gmail.com",
                address: "hyd ",
                city: "Hyderabad",
                country: 1,
                pin: "500010",
                terms: true
            },
            available_states: "",
        }
    },
    components: {
        vueDropzone: vue2Dropzone,
    },
    methods: {
        onSubmit: function() {
            if (this.formstate.$invalid) {
                return;
            } else {store.commit("activateLoader", "start");
              let station_details = {
                station: this.model
            };
            let user_details = JSON.parse(localStorage.getItem('user_details'));

                let id= this.$route.query.station;
            axios.patch(this.$store.state.host_url+"/stations/"+id, station_details, {
                headers : {
                    "Authorization" : "Bearer " + user_details.token
                }
            }).then( response => {                         
                store.commit("activateLoader", "end");
                let station_response = response.data;
            if (station_response.status === true) {
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Station Updated Successfully', 'show_alert': true});
                    }
            }).catch(error => { 
                store.commit("activateLoader", "end");   
                store.commit("catch_errors", error); 
                    
            })
            }
        },
        form_reset() {
            this.model = {
                name: "",
                manager_phone: "",
                manager_email: "",
                daily_budget: "",
                monthly_budget: "",
                state: "",
                address: "",
                city: "",
                lincense_type: "",
                expense_type: "",
            };

        }
    },
    mounted: function() {
        this.available_states = api_states;
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let id= this.$route.query.station;
        axios.get(this.$store.state.host_url+"/stations/"+ id,
            {
                headers : {
                    "Authorization" : "Bearer " + user_details.token
                }}).then(response => {
                    console.log(response);
            this.model= response.data.data;
            })
            .catch(function(error) {
                   store.commit("catch_errors", error); 
                });
    },
    destroyed: function() {

    }
}
</script>
<style scoped>
.dropzone_wrapper {
    width: 100%;
}
/deep/.quill-editor .ql-tooltip.ql-editing{
    z-index:99;
}
</style>
