<template>
    <div class="container-fluid img_backgrond">
        <div class="row">
            <div class="col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5">
                <div class="row">
                    <div class="col-sm-12 mt-3">
                        <h2 class="text-center">
                            <img src="~img/logo_black.png" alt="Logo">
                        </h2>
                    </div>
                </div> 
                <div >
                    <div v-if="show_message" class="center alert alert-info">
                        {{ this.message }}<br>
                      
                    </div>
                     <div v-if="passed" class="col-sm-12 text-center">
                            <div class="form-group">
                                <router-link tag="a" to="/login" class="btn btn-success btn-block">
                                Verification Successful. Click to Login
                                </router-link>
                            </div>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'; import store from 'src/store/store.js';
import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
import options from "src/validations/validations.js";
//unset user data
localStorage.setItem('user_details', null);
localStorage.setItem('company_details', null);
Vue.use(VueForm, options);
export default {
    name: "login2",
    data() {
        return {
            formstate: {},
            url: this.$store.state.host_url+'/auth',
            user: {
                email: '',
                password: '',
            },
            passed: '',
            show_message: false,
            message: '',
            localStorge: {},
            login_submit: 'LOGIN',
        }
    },
   
    mounted: function() {
            //console.log(this.$route.query);
            let id= this.$route.query.meta;
             axios.get(this.$store.state.host_url+"/users/verify/"+id,  {
                headers: {
                    'Content-type': 'application/json'
                         }
            }).then(response => {
            
            if(response.data.message == "passed"){
                this.passed = true;
            }else{
                this.show_message = true;
            this.message = response.data.message;
            }
            
            ////console.log(response);
        }).catch(error => { store.commit("activateLoader", "end");   store.commit("catch_errors", error);       
            this.show_message = true;
            this.message = error.response.data.message;
            //console.log(error.message);
        });
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
