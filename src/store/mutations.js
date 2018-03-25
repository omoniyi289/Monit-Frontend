let mutations = {
    left_menu(state, option) {
        if (option == "open") {
            state.left_open = true
        } else if (option == "close") {
            state.left_open = false
        } else if (option == "toggle") {
            state.left_open = !state.left_open
        }
        if (state.left_open) {
            document.getElementsByTagName("body")[0].classList.remove("left-hidden")
        } else {
            document.getElementsByTagName("body")[0].classList.add("left-hidden")
        }
    },
    routeChange(state, loader) {
        state.show_alert= false;
        if (loader == "start") {
            state.preloader = true
        } else if (loader == "end") {
            state.preloader = false
        }
    },
    activateLoader(state, loader) {
        if (loader == "start") {
            state.preloader = true
        } else if (loader == "end") {
            state.preloader = false
        }
    },
    check_login_details(state){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
         if (user_details == null || user_details == undefined) {
          //this.$router.push('/login');
          //if(window.location.port !== 80 || window.location.port !== 443){
            window.location.href='/#/login';
       // }else{
        //    window.location.href= ':'+window.location.hostname+'/#/login';
     ///   }
        }
      },
    catch_errors(state, payload){
        console.log(payload);
        if(payload.response.status == 401){
            window.location.href='/#/login?message='+payload.response.data.error;
          }
          else if(payload.response.status == 500){
            state.show_alert= true;
            state.alert_message = payload.message;
            state.alert_type = 'alert-danger';
          }
          else if(payload.response.status == 422){
            state.show_alert= true;
            state.alert_message = payload.message;
            state.alert_type = 'alert-danger';
          }
          else if(payload.response.status == 400){
            state.show_alert= true;
            state.alert_message = payload.response.data.message;
            state.alert_type = 'alert-danger';
          }
    },
    changePageTitle(state, title) {
        state.page_title = title
        document.title = title + " - " +state.site_name
    },
    showAlertBox(state, details) {
        state.show_alert= details.show_alert;
        state.alert_message = details.alert_message;
        state.alert_type = details.alert_type;
    },
    addevent(state, event) {
        let id = state.cal_events[state.cal_events.length - 1] ? state.cal_events[state.cal_events.length - 1].id + 1 : 0;
        state.cal_events.push({ id: id, title: event.evtname, start: event.date.from, end: event.date.to })
    },
    editevent(state, event) {
        let evt = JSON.parse(JSON.stringify(event));
        let id_index = "";
        state.cal_events.forEach(function(currentValue, index) {
            if (currentValue.id == evt.id) {
                id_index = index;
            }
        });
        state.cal_events[id_index].title = evt.title;
        state.cal_events[id_index].start = evt.start;
        state.cal_events[id_index].end = evt.end;
    },
    removeevent(state, id) {
        let id_index = "";
        state.cal_events.forEach(function(currentValue, index) {
            if (currentValue.id == id.evtid) {
                id_index = index;
            }
        });
        state.cal_events.splice(id_index, 1);
    }
}
export default mutations
