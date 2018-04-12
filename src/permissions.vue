<script>
    import Vue from 'vue';
    import store from 'src/store/store.js';
    export default {
        name: 'layout',
        components: {
           
        },
        data() {
            return {
                showtopbtn: false,
                user_details : JSON.parse(localStorage.getItem('user_details')),
            }
        },
        mounted() {
            store.commit("check_login_details");
          //  this.check_login_details();
           if (window.innerWidth <= 992) {
                this.$store.commit('left_menu', 'close')
            }
        },
        methods: {
         /*   check_login_details(){
                if (this.user_details == null || this.user_details == undefined) {
                    if (this.company_details == null) {
                        this.$router.push('login');
                    }
                }
            },*/
          
        }

    }
</script>