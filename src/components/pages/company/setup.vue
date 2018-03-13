<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="" header-tag="h4" class="bg-default-card">
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
                                            <input v-model="company.email" name="email" type="email" required placeholder="Company E-mail" class="form-control" id="email_input"/>
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
                                            <label for="name_gen">State</label>
                                            <select id="name_gen" name="state" size="1" class="form-control" v-model="company.state" required checkbox>
                                                <option value="0" selected disabled>
                                                    Please select
                                                </option>
                                                <option
                                                    v-for="option in available_states"
                                                    v-bind:value="option.id" >{{ option.states.name }}
                                                </option>
                                                
                                            </select>
                                            <field-messages name="state" show="$invalid && $submitted" class="text-danger">
                                                <div slot="checkbox">State is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="city">City</label>
                                            <input v-model="company.city" rows="5" class="form-control resize_vertical" name="city" id="city" placeholder="Enter your Company City" required />
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
                                            <input v-model="company.address" name="address" type="text" required autofocus placeholder="Company Address" class="form-control" id="address"/>
                                            <field-messages name="address" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company Address is a required field</div>
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
                    <div class="col-md-3">
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'

    import VueForm from "vue-form";
    import options from "src/validations/validations.js";
    Vue.use(VueForm, options);
    import x from "src/assets/json/states.json";
    export default {
        name: "formfeatures",
        data() {
            return {
                ajaxLoading: true,
                loading: true,
                url: 'http://127.0.0.1:8000/api/v1/companies',
                formstate: {},
                company: {
                    name: "",
                    email: "",
                    state:0,
                    address: "",
                    city: "",
                    registration_number: "",
                },
                available_states: "",

            }
        },
        methods: {
            check_login_details(){
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                if (user_details == null || user_details == undefined) {
                    this.$router.push('/login');
                }
            },
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    let company_detail = {
                        company: this.company
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    console.log(JSON.stringify(company_detail));
                    axios.post(this.url, company_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {
                        let company_response = response.data;
                        if (company_response.status === true) {
                            //update user's local storage for with company details
                            //let user_details = JSON.parse(localStorage.getItem('user_details'));
                            //user_details['company_id'] = response.data.id;
                            localStorage.setItem('company_details', response.data);
                            console.log(response.data);
                        }
                        }).catch(error => {
                        if (error.status === false){
                        //this.show_error = true;
                        console.log('reset password!');
                        //this.message =  error.message;
                    }
                    console.log(error);
                })}
            }
        },
        mounted: function() {
            this.check_login_details();
            this.available_states = x;
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
