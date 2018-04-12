<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
import Vue from "vue";
window.axios = require('axios');
import store from './store/store.js'
import BootstrapVue from 'bootstrap-vue';
import ToggleButton from 'vue-js-toggle-button'
import VueRouter from 'vue-router'
Vue.use(ToggleButton)
Vue.use(BootstrapVue);
var url = window.location+"go";
//ole.log(urlParams); 
if(!url.includes('external_query=true')){
    //nt external query, not from mail
let user_details = JSON.parse(localStorage.getItem('user_details'));
         if (user_details == null || user_details == undefined) {
            window.location.href='/#/login';
        }
}
export default {
    name: 'app'
}
</script>
<style lang="scss" src="assets/sass/bootstrap/bootstrap.scss"></style>
<style src="font-awesome/css/font-awesome.css"></style>
<style src="bootstrap-vue/dist/bootstrap-vue.css"></style>
