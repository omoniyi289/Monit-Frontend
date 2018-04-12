import Vue from 'vue'
import VueAlert from '@vuejs-pt/vue-alert'
Vue.use(VueAlert)
import App from './App'
import router from './router'
import store from './store/store.js'
import VueAnalytics from 'vue-analytics'
import VModal from 'vue-js-modal'
Vue.use(VModal, { dialog: true });
console.log("main.js");

        

// window.axios.defaults.headers.common = {
//     'X-Requested-With': 'XMLHttpRequest'
// }

// Google Analytics
const google_analytics_key = store.state.google_analytics_key

if (google_analytics_key && google_analytics_key.length) {

    Vue.use(VueAnalytics, {
        id:google_analytics_key,
        router,
        checkDuplicatedScript: true,
        autoTracking: {
            pageviewTemplate(route) {
                return {
                    page: 'default/' + route.path
                }
            }
        }
    })

}

// Remove the productionTip in dev tool console
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
