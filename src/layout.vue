<template >

    <div>
        <div id="content-header">.</div>
        <v-dialog/>
        <preloader v-show="this.$store.state.preloader"></preloader>
        <vueadmin_header></vueadmin_header>
        <div class="wrapper row-offcanvas">
            <left_side v-show="this.$store.state.left_open"></left_side>
            
            <right_side>
                <router-view></router-view>
            </right_side>
        </div>
    </div>
</template>
<script>
    /**
     * These are the files that enable you to change layouts and other options
     */

    /**
     * import preloader
     * choose from preloader and bounce
     */
    import preloader from 'components/layouts/preloader/preloader'

    /**
     * The right side content
     */
    import right_side from 'components/layouts/right-side'

    /**
     * import left-side from default or horizontal-menu or mini-menu
     * eg: import left_side from 'components/layouts/left-side/horizontal-menu/left-side'
     */
     
    import left_side from 'components/layouts/left-side/default/left-side'

    /**
     * import from header or fixed-header or no-header
     */
    import vueadmin_header from 'components/layouts/header/fixed-header'

    /**
     * Styles
     */

    /**
     * Main stylesheet for the layout
     */
    import 'assets/sass/custom.scss'

    /**
     * Style required for a boxed layout
     */
//     import 'components/layouts/css/boxed.scss'

    /**
     * Style required for a fixed-menu layout
     */
    import 'components/layouts/css/fixed-menu.scss'

    /**
     * Style required for a compact-menu layout
     */
//     import 'components/layouts/css/compact-menu.scss'

    /**
     * Style required for a centered-logo layout
     */
    // import 'components/layouts/css/centered-logo.scss'

    /**
     * Style required for a content-menu layout
     */
    // import 'components/layouts/css/content_menu.scss'


    /**
     * import animejs for the menu transition effects
     */
    import anime from 'animejs'
    import store from 'src/store/store.js';
    export default {
        name: 'layout',
        components: {
            preloader,
            vueadmin_header,
            left_side,
            right_side
        },
        data() {
            return {
                showtopbtn: false,
                user_details : JSON.parse(localStorage.getItem('user_details')),
                //company_details: JSON.parse(localStorage.getItem('company_details')),
            }
        },
        mounted() {
            store.commit("check_login_details");
          
           if (window.innerWidth <= 992) {
                this.$store.commit('left_menu', 'close')
            }

        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        store.state.menu_items= JSON.parse(localStorage.getItem('role_details'));
        var company_route = '';
        //console.log(user_details);
        if(user_details.is_verified !== undefined && user_details.is_verified == 2){
          ///e360 super user
          company_route = '/companies/e360_super_user';
        }else if(user_details.is_company_set_up !== undefined && user_details.is_company_set_up == 1){
          //first company super user
          company_route = '/companies/first_company_user/'+user_details.id;
        }else if(user_details.company_id !== undefined){
          ///for regular company users
          company_route = '/companies/company_user/'+user_details.company_id;
        }
        //console.log(company_route);
        axios.get(store.state.host_url+company_route,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          store.commit("activateLoader", "end"); 
          
          ///one company
        if(response.data.data.length == 1){
            store.state.available_company = response.data.data[0];
            store.state.show_single_company = true;
        }else{
          ///multi companies
          store.state.available_companies = response.data.data;
          store.state.show_multi_company = true;
        }
        axios.get(store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
                store.state.products = response.data.data;
      });
      })
      .catch(error => {
       store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
      });
      
        },
        methods: {
         
          
        }

    }
</script>
<style lang="scss" scoped>
    .wrapper:before,
    .wrapper:after {
        display: table;
        content: " ";
    }

    .wrapper:after {
        clear: both;
    }

    .wrapper {
        display: table;
        overflow-x: hidden;
        width: 100%;
        max-width: 100%;
        table-layout: fixed
    }

    .right-aside,
    .left-aside {
        padding: 0;
        display: table-cell;
        vertical-align: top;
    }

    .right-aside {
        background-color: #ebf2f6 !important;
    }

    @media (max-width: 992px) {
        .wrapper>.right-aside {
            width: 100vw;
            min-width: 100vw;
        }
    }
</style>
