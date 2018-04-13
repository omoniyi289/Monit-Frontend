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
                    <div v-if="error_show_message" class="center alert alert-danger">
                        {{ this.message }}<br>
                      
                    </div>
                    <div v-if="loading" class="center alert alert-warning">
                        Please Wait...<br>  
                    </div>
                    <div v-if="success_show_message" class="center alert alert-success">
                        Fuel Request {{ this.message }}.<br> Thanks!
                      
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
            url: this.$store.state.host_url+'/fromMail_fuel-supply',
            user: {
                email: '',
                password: '',
            },
            passed: '',
            error_show_message: false,
            success_show_message: false,
            loading: true,
            message: '',
            localStorge: {},
            login_submit: 'LOGIN',
            fuel_supply: {},
        }
    },
   
    mounted: function() {
             
             this.fuel_supply.request_code= this.$route.query.request_code;
             this.fuel_supply.status= this.$route.query.status;
             this.fuel_supply.last_modified_by= this.$route.query.user_id;
            let fuel_supply = {
                details: this.fuel_supply
            }
           // console.log(fuel_supply);
             axios.post(this.url, fuel_supply,  {
                headers: {
                    'Content-type': 'application/json'
                         }
            }).then(response => {
            this.loading= false;
            console.log(response.data.data);
          if(response.data.data == 0){
                this.error_show_message = true;
            this.message = 'Invalid Code Supplied';
            }else if(response.data.data == 1){
                this.success_show_message = true;
                this.message =this.fuel_supply.status;
            }
            
            //console.log(response);
        }).catch(error => { 
            store.commit("activateLoader", "end");  
             this.loading= false;
         store.commit("catch_errors", error);       
             this.error_show_message = true;
            this.message = error.response.data.message;
            console.log(error.message);
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
