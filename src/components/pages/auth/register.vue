<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                <div class="row">
                    <div class="col-sm-12 mt-3">
                        <h2 class="text-center"><img src="~img/logo-purple.png" alt="Logo"></h2>
                    </div>
                </div>
                <vue-form :state="formstate" @submit.prevent="register_user">
                    <div v-if="show_error" class="center alert alert-danger">
                        {{ this.error_message }}

                    </div>
                    <div v-if="show_success" class="center alert alert-success">
                        {{ this.success_message }}
                    </div>


                    <div class="row">
                        <div class="col-sm-12 mt-3">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="full_name"> Full Name</label>
                                    <input v-model="model.fullname" id="full_name" name="fullname" type="text" required autofocus placeholder="Full Name" class="form-control" />
                                    <field-messages name="fullname" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Fullname is a required field</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>

                        <div class="col-sm-12 mt-3">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="phone_number"> Phone Number</label>
                                    <input v-model="model.phone_number" id="phone_number" name="phone_number" type="text" required autofocus placeholder="Phone number" class="form-control" />
                                    <field-messages name="phone_number" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Phone number is a required field</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>

                        <div class="col-sm-12 mt-3">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="user_name"> Username</label>
                                    <input v-model="model.username" id="user_name" name="username" type="text" required autofocus placeholder="User Name" class="form-control" />
                                    <field-messages name="username" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Username is a required field</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="email"> E-mail</label>
                                    <input  v-model="model.email" id="email" name="email" type="email" required placeholder="E-mail" class="form-control" />
                                    <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Email is a required field</div>
                                        <div slot="email">Email is not valid</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>

                        
                        <div class="col-sm-6">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="password"> Password</label>
                                    <input v-model="model.password" id="password" name="password" type="password" required placeholder="Password" class="form-control" minlength="6" maxlength="15" />
                                    <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Password is required</div>
                                        <div slot="minlength">Password should be atleast 6 characters long</div>
                                        <div slot="maxlength">Password should be atmost 10 characters long</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="confirm_password"> Confirm Password</label>
                                    <input v-model="model.repeatPassword" name="repeatpassword" id="confirm_password" type="password" required placeholder="Confirm Password" class="form-control" :sameas="model.password">
                                    <field-messages name="repeatpassword" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Password confirmatoin is required</div>
                                        <div slot="sameas">Password and Confirm password should match</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                       <!--<div class="col-sm-12">
                                    <validate tag="label">
                                      <b-form-checkbox>I agree the
                                <span>
                                <router-link to="/">terms &amp; conditions</router-link></span>
                                      </b-form-checkbox>
                                        <field-messages name="terms" show="$invalid && $submitted" class="text-danger">
                                            <div slot="checkbox">Terms must be accepted</div>
                                        </field-messages>
                                    </validate>
                        </div>-->




                        <div class="col-sm-12">
                            <div class="form-group float-right">
                                <input type="submit" :value="submit_btn" class="btn btn-success" />
                            </div>
                        </div>
                        <br>
                        <div class="col-sm-12 text-center">
                            <div class="form-group">
                                <router-link tag="a" to="/login" class="btn btn-primary btn-block">Already a member? Sign In
                                </router-link>
                            </div>
                        </div>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
import options from "src/validations/validations.js";
import store from 'src/store/store.js';
Vue.use(VueForm, options);
export default {
    name: "register",
    data() {
        return {
            formstate: {},
            submit_btn: "Sign Up",
            show_error: false,
            show_success: false,
            success_message: '',
            error_message: '',
            model: {
                fullname: "",
                phone_number: "",
                username: "",
                email: "",
                password: '',
                repeatPassword: '',
                terms: false
                }
         }
    },
    methods: {
        register_user() {
            this.show_error=false;
            this.show_success= false;
            if (this.formstate.$invalid) {
            } else {
            let user_details = {
                user: this.model
            };
            this.submit_btn = "Registering...";
            ////console.log(JSON.stringify(user_details));
            let host_url = this.$store.state.host_url;
            axios.post(host_url+'/users', user_details).then(response => {
                //console.log(response.data);
            if (response.data.status == true) {
                //this.model = {};
                this.success_message = "Thanks for registering with us, " +
                    "an email has been sent to you, please verify your email. Thanks";
                this.submit_btn = "Sign up";
                this.show_success = true;
            }
        }).catch(error => {
               if(error.response.status == 500){
                        this.login_submit = "LOGIN";
                        this.show_error = true;
                        this.error_message =  "An error occurred!";
                        }
                    else{
                        this.login_submit = "LOGIN";
                        this.show_error = true;
                        this.error_message =  error.response.data.message;
                    }

        })
            }
    }
    }
}
</script>
<style scoped>
.login-content {
    margin-top: 6%;
    margin-bottom: 6%;
    padding-bottom: 20px;
    box-shadow: 0 0 30px #ccc;
    background-size: 100% 100%;
    border-radius: 7px;
}
.img_backgrond{
    background-image: url("~img/pages/Login-03-01.png");
    background-size: cover;
    padding: 75px 15px;
}
    .text_gray{
        color:#625e5e;
    }
label{
    font-size: 14px !important;
}
::-webkit-input-placeholder {
   font-size: 14px;
}
</style>
