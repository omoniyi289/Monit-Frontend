<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                <div class="row">
                    <div class="col-sm-12 mt-4">
                        <h2 class="text-center">
              <img src="~img/logo_black.png" alt="Logo">
            </h2>
                    </div>
                    <div class="col-sm-12 mt-4">
                        <h3 class="page-name text-center">Forgot Password</h3>
                    </div>
                </div>
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <div v-if="show_error" class="center alert alert-danger">
                        {{ this.error_message }}

                    </div>
                    <div v-if="show_success" class="center alert alert-success">
                        {{ this.success_message }}
                    </div>
                    <div class="col-lg-12">
                        <p class="user-message "> Please enter the email you are registered with. An email message will be sent to the email address with further instructions.</p>
                        <div class="form-group">
                            <validate tag="div">
                                <input v-model="model.email" name="email" type="email" required placeholder="E-mail" class="form-control" />
                                <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                    <div slot="required">Email is a required field</div>
                                    <div slot="email">Email is not valid</div>
                                </field-messages>
                            </validate>
                        </div>
                    </div>
                    <div class="col-12 mt-4">
                        <div class="form-group">
                            <input type="submit" :value="login_submit" class="btn btn-primary btn-block" />
                        </div>
                    </div>
                    <div class="col-sm-12 text-center">
                            <div class="form-group">
                                <router-link tag="a" to="/login" class="btn btn-primary btn-block">Sign In
                                </router-link>
                            </div>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueForm from "vue-form";    
import vueSmoothScroll from 'vue-smoothscroll'; 
Vue.use(vueSmoothScroll);
import options from "src/validations/validations.js";
Vue.use(VueForm, options);
export default {
    name: "forgetpassword",
    data() {
        return {
            formstate: {},
            model: {
                email: ""
            },
            show_error: false,
            show_success: false,
            success_message: '',
            error_message: '',
            message: '',
           localStorge: {},
            login_submit: 'Send Confirmation Mail',
        }
    },
    methods: {
        onSubmit() {
            if (this.formstate.$invalid) {
                return;
            } else {
                 //console.log(JSON.stringify(this.user));
            this.login_submit = "Please Wait...";
            let host_url = this.$store.state.host_url;
            axios.post(host_url+'/auth/forgotpass/verifyemail', {'email': this.model.email}, {
                headers: {
                    'Content-type': 'application/json'
                         }
            }).then(response => {
                this.login_submit = "Send Confirmation Mail";
                this.success_message = 
                    "Confirmation successful, an email has been sent to you with further instructions";
                this.show_success = true; 
                this.show_error = false;      
            
        }).catch(error => {
            this.show_error = true;
            this.show_success = false;
            this.error_message = error.response.data.message;
            this.login_submit = "Send Confirmation Mail";
            ////console.log(error.message);
        });
            }
        }
    },
    mounted: function() {

    },
    destroyed: function() {

    }
}
</script>
<style scoped>
.login-content {
    margin-top: 7%;
    margin-bottom: 7%;
    padding-bottom: 20px;
    box-shadow: 0 0 20px #ccc;
    background-size: 100% 100%;
    border-radius: 7px;
}

.user-message {
    padding: 15px 0;
    font-size: 14px;
    color: #777;
}
.img_backgrond{
    background-image: url("~img/pages/Login-03-01.png");
    background-size: cover;
    height: 100vh;
    width:100%;
}
label{
    font-size: 14px !important;
}
::-webkit-input-placeholder {
    font-size:14px;
}
</style>
