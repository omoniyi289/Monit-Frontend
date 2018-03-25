import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

function addDays(noOfDays) {
    return (noOfDays * 24 * 60 * 60 * 1000)
}

//=======vuex store start===========
let user_detials= JSON.parse(localStorage.getItem('user_details'));
let username='';
console.log(user_detials);
if(user_detials !== null){
     username= user_detials.username;
}
const store = new Vuex.Store({
    state: {
        left_open: true,
        preloader: true,
        show_alert: false,
        alert_message: "",
        alert_type: "",
        host_url: "http://localhost:8000/api/v1",
        //host_url: "http://sm2.api.energy360africa.com/api/v1",
        site_name: "Station Manager",
        page_title: null,
        user: {
            name: username,
            picture: require("img/authors/prf4.jpg"),
            job: "Project Manager"
        },
        cal_events: [{
            id: 0,
            title: 'Office',
            start: Date.now(),
            end: Date.now() + addDays(1)
        }, {
            id: 1,
            title: 'Holidays',
            start: Date.now() + addDays(3),
            end: Date.now() + addDays(4)
        }],
        // Add your application keys
        gmap_key: 'AIzaSyBTnQCx3FXEnfWPPWTKAwIxt6wSjAn_8ug',
        openWeather_key: 'c00194f61244d2b33b863bff6d94e663',
        google_analytics_key: null

    },
    mutations
})
//=======vuex store end===========
export default store
