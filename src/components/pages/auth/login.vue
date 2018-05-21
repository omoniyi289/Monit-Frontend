<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                <div class="row">
                    <div class="col-sm-12 mt-3">
                        <h2 class="text-center">
                            <img src="~img/logo-purple.png" alt="Logo">
                        </h2>
                    </div>
                </div>
                 <div class="row mt-2">
                     <div class="col-sm-12">
                         <div class="text-center">
                         <img src="~img/pages/login_user-01.png" class="rounded-circle">
                         </div>
                     </div>
                 </div>
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <div v-if="show_error" class="center alert alert-danger">
                        {{ this.error_message }}

                    </div>
                    <div v-if="show_success" class="center alert alert-success">
                        {{ this.success_message }}
                    </div>
                    <div class="row">
                        <div class="col-sm-12 mt-3 ">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="email"> E-mail</label>
                                    <input v-model="user.email" name="email" id="email" type="email" required autofocus placeholder="E-mail" class="form-control" />
                                    <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Email is a required field</div>
                                        <div slot="email">Email is not valid</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="password"> Password</label>
                                    <input v-model="user.password" name="password" id="password" type="password" required placeholder="Password" class="form-control"  />
                                    <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Password is required</div>
                                        
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <validate tag="label">
                                <b-form-checkbox id="remember" v-model="user.remember">Remember Me</b-form-checkbox>
                                <field-messages name="remember" show="$invalid && $submitted" class="text-danger">
                                    <div slot="check-box">Terms must be accepted</div>
                                </field-messages>
                            </validate>
                        </div>
                        <div class="col-lg-6 col-md-6 text-right">
                            <div class="form-group">
                                <input type="submit" :value="login_submit" class="btn btn-success" />
                            </div>
                        </div>
                        <br>
                        <div class="col-sm-12 text-center">
                            <div class="form-group">
                                <p>
                                    <router-link tag="a" to="/forgotpassword" class="">Forgot Your Password ?</router-link>
                                </p>
                                <router-link tag="a" to="/register" class="btn btn-primary btn-block ">New User? Sign Up Now
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
    name: "login2",
    data() {
        return {
            formstate: {},
            user: {
                email: '',
                password: '',
            },
            show_error: false,
            show_success: false,
            success_message: '',
            error_message: '',
            message: '',
           localStorge: {},
            login_submit: 'LOGIN',
        }
    },
    methods: {
        onSubmit() {
            this.show_error=false;
            this.show_success= false;
            if (this.formstate.$invalid) {
                return;
            } else {
            console.log("loggin in");
            this.login_submit = "Logging In...";
            let host_url = this.$store.state.host_url;
            axios.post(host_url+'/auth', JSON.stringify(this.user), {
                headers: {
                    'Content-type': 'application/json'
                         }
            }).then(response => {
                console.log('main resp');
            let auth_response = response.data;
            if (auth_response.status === true) {
                console.log('rwsponse!');
                this.login_submit = "LOGIN";
                let user_data = auth_response.data;
                    localStorage.setItem('user_details',JSON.stringify(user_data));
                    this.$store.state.user = auth_response.data;
             
                if (user_data.is_company_set_up == 0 && user_data.role_id == 'super'){
                    this.$router.push('/#/admin/company/setup');
                }
                else{
                //this.$router.push('/');
                window.location.href="/";
                }
            }
        }).catch(error => {
            if (error.status === false){
                this.login_submit = "LOGIN";
                this.show_error = true;
                console.log('reset password!');
                this.message =  error.message;
            }
            this.show_error = true;
            this.error_message = error.response.data.message;
            this.login_submit = "LOGIN";
            //console.log(error.message);
        })}
        }
       }
    ,
    mounted: function() {
        //unset user data
        localStorage.setItem('user_details', null);
        localStorage.setItem('company_details', null);
        if(this.$route.params.message == "token_expired"){
            this.show_error = true;
            this.error_message = "session expired, please re-login";
        }
    
    },
    destroyed: function() {

    },

}
</script>
<style scoped>
.login-content {
    margin-top: 7%;
    margin-bottom: 7%;
    box-shadow: 0 0 20px #ccc;
    background-size: 100% 100%;
    border-radius: 7px;
}
    .img_backgrond{
        background-image: url("~img/pages/Login-03-01.png");
        background-size:cover;
        background-repeat:no-repeat;
        width: 100%;
        padding: 75px 15px;
    }
label{
    font-size: 14px !important;
}
::-webkit-input-placeholder {
    font-size:14px;
}
</style>
