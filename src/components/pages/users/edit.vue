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
                                                <label for="fullname">Full Name</label>
                                                <textarea v-model="user.fullname" rows="4" class="form-control resize_vertical" name="fullname" id="fullname" placeholder="Full Name" required></textarea>
                                                <field-messages name="fullname" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Full Name is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="username">Username</label>
                                                <input v-model="user.username" rows="4" class="form-control resize_vertical" name="daily_budget" id="address" placeholder="Username" required />
                                                <field-messages name="username" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Username is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="phone_number">Phone Number</label>
                                                <input v-model="user.phone_number" rows="4" class="form-control resize_vertical" name="phone_number" id="monthly_budget" placeholder="Phone Number" required/>
                                                <field-messages name="phone_number" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Phone Number is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="email">Email</label>
                                                <input name="email" id="email" type="email" required placeholder="Email" class="form-control" v-model="user.email" />
                                                <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">email is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>

                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="role_id">Role</label>

                                                <select id="role_id" name="role_id" size="1" class="form-control" v-model="user.role_id" required >
                                                    <option
                                                            v-for="option in available_states"
                                                            v-bind:value="option.states.name"
                                                            :selected="option.states.name == model.state"
                                                    >{{ option.states.name }}</option>
                                                </select>
                                                <field-messages name="role_id" show="$invalid && $submitted" class="text-danger">
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
      
            user : {
                company_id: "",
                station_id: "",
                phone_number: "",
                selected_stations : [],
                email: "",
                username: "",
                fullname: "",
                role_id: 0,
                privilege: "",
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
