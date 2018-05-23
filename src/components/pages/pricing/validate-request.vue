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
                    <div v-if="error_show_message" class="center alert alert-warning">
                        Invalid Request Id Supplied<br>
                      
                    </div>
                    <div v-if="loading" class="center alert alert-danger">
                        Please Wait...<br>
                      
                    </div>
                    <div v-if="success_show_message" class="center alert alert-warning">
                        price Change Request Updated.<br> Thanks!
                      
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

Vue.use(VueForm, options);
export default {
    name: "login2",
    data() {
        return {
            formstate: {},
            url: this.$store.state.host_url+'/fromMail_pricing',
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
            product_change: {},
        }
    },
   
    mounted: function() {
             
             this.product_change.log_id= this.$route.query.log_id;
             this.product_change.is_approved= this.$route.query.is_approved;
             this.product_change.updated_by= this.$route.query.user_id;
            let product_change = {
                details: this.product_change
            }
            //console.log(product_change);
             axios.post(this.url, product_change,  {
                headers: {
                    'Content-type': 'application/json'
                         }
            }).then(response => {
            this.loading= false;
            //console.log(response.data.data);
          if(response.data.data == 0){
                this.error_show_message = true;
            this.message = 'Invalid Code';
            }else if(response.data.data == 1){
                this.success_show_message = true;
                this.message =this.fuel_supply.status;
            }
            
            ////console.log(response);
        }).catch(error => { store.commit("activateLoader", "end");  
         store.commit("catch_errors", error);       
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
