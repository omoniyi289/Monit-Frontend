<template class="body-404" >
    <section class="error-wrapper" >
        <p>{{ message }}</p>
        <a href="/login" class="back-btn">{{ button_msg }}</a>
    </section>
</template>
<script>
    import store from 'src/store/store.js';
    export default {
        data(){
            return {
                message: '',
                button_msg : '',
            }
        },
        methods: {
            do_verify(){
                let host_url = this.$store.state.host_url;
                axios.get(host_url+'/users/vefify/' +  this.$route.params.token).then(response => {
                    let verify_res = response.data;
                    if (verify_res.status === true){
                        this.message = "Thanks for taking your time to verify your email," +
                            " you have access to station manager now";
                        this.button_msg = 'Click to Login';
                    }else if (verify_res.status === false){
                        this.message = verify_res.message;
                    }
                }).catch(error => {
                    let verify_err = error.response;
                    if (verify_err.status === false){
                        this.message = verify_err.data.message;
                    }
                });
            }
        },
        mounted: function () {
            this.do_verify();
        }
    }
</script>