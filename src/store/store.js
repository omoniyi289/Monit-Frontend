import 'es6-promise/auto'
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

function addDays(noOfDays) {
    return (noOfDays * 24 * 60 * 60 * 1000)
}
let user_detials='';
//=======vuex store start===========
try{
    user_detials = JSON.parse(localStorage.getItem('user_details'));
}catch(e){
  alert("Please enable the use of third party cookies and site data in your brower\'s settings to continue with the application");
}

let username='';
let host_url='';
if(process.env.NODE_ENV == 'production'){
    host_url = "http://sm2.api.energy360africa.com/api/v1";
}else{
    host_url=  "http://sm2.api.energy360africa.com/api/v1";
}
process.env.NODE_ENV;
const store = new Vuex.Store({
    state: {
        left_open: true,
        preloader: true,
        show_alert: false,
        alert_message: "",
        alert_type: "",
        menu_items: [],
        available_companies: "",
        available_company: "",
        products:"",
        show_single_company: false,
        show_multi_company: false,
        //host_url: "http://localhost:8000/api/v1",
        host_url: host_url,
        site_name: "Station Manager",
        page_title: null,
        /*user: {
            name: username,
            picture: require("img/authors/prf4.jpg"),
            job: "Project Manager"
        },*/
        user: user_detials,
        preset : {
            company_id: 0,
            station_id: 0
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
