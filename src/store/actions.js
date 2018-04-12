let actions = {
    
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
    show_available_companies(){ 
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
        this.available_companies = response.data.data;store.commit("activateLoader", "end");   
        ///get products///
        axios.get(this.$store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          console.log(response.data.data);
        this.products = response.data.data;
      });
      })
      .catch(error => {
       store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
      });
      }
}
export default actions
