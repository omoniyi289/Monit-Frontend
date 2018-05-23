<template>
    <div class="row">
                    <div class="col-lg-12">
                        <b-card header=" " header-tag="h4" class="bg-info-card">
                            <div class="row">
                                <div class="col-lg-4 col-4 mb-3">
                                    <b-card class="bg-info-card">
                            
                            <div class="profile_details">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="nav-tabs-custom">
                                            <b-tabs v-if="is_e360_super_user">
                                                <b-tab title="E360 Super User">
                                                    <div class="row">
                                                        <div class="col-12 mt-3">
                                                            <div class="row">
                                                                <div class="col-6 text-right mt-1">Companies :</div>
                                                                <div class="col-6 mt-1">{{this.available_companies.length}} 
                                                                    Registered Companies
                                                                </div>
                                                                <div class="col-6 text-right mt-1">Stations :</div>
                                                                <div class="col-6 mt-1">{{this.company_stations.length}}
                                                                     Registered Stations
                                                                </div>
                    
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-tab>
                                                
                                            </b-tabs>
                                            <b-tabs v-if="is_company_super_user">
                                                <b-tab title="Company">
                                                    <div class="row">
                                                        <div class="col-12 mt-3">
                                                            <div class="row">
                                                                <div class="col-6 text-right mt-1">Name :</div>
                                                                <div class="col-6 mt-1">{{this.csu_company.name}}</div>
                                                                <div class="col-6 text-right mt-1">Address :</div>
                                                                <div class="col-6 mt-1">{{this.csu_company.address}}</div>
                                                                <div class="col-6 text-right mt-1">City :</div>
                                                                <div class="col-6 mt-1">{{this.csu_company.city}}</div>
                                                                <div class="col-6 text-right mt-1">Reg. No :</div>
                                                                <div class="col-6 mt-1">{{this.csu_company.registration_number}}</div>
                                                                <div class="col-6 text-right mt-1">Email :</div>
                                                                <div class="col-6 mt-1">{{this.csu_company.email}}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-tab>
                                                
                                            </b-tabs>
                                            <b-tabs v-if="is_company_regular_user">
                                                <b-tab title="Company">
                                                    <div class="row">
                                                        <div class="col-12 mt-3">
                                                            <div class="row">
                                                                <div class="col-6 text-right mt-1">Name :</div>
                                                                <div class="col-6 mt-1">{{this.cru_company.name}}</div>
                                                                <div class="col-6 text-right mt-1">Address :</div>
                                                                <div class="col-6 mt-1">{{this.cru_company.address}}</div>
                                                                <div class="col-6 text-right mt-1">City :</div>
                                                                <div class="col-6 mt-1">{{this.cru_company.city}}</div>
                                                                <div class="col-6 text-right mt-1">Reg. No :</div>
                                                                <div class="col-6 mt-1">{{this.cru_company.registration_number}}</div>
                                                                <div class="col-6 text-right mt-1">Email :</div>
                                                                <div class="col-6 mt-1">{{this.cru_company.email}}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </b-tab>
                                               
                                            </b-tabs>
                                             <b>Role : </b>
                                                <button class="btn btn-sm btn-warning" >{{this.myrole}}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card>
                        <button v-on:click="is_change_password=true" class="btn btn-primary btn-md"> CHANGE PASSWORD</button>
                                        
                    </div>
                    <div class="col-lg-8 col-8 mb-3">
                        <vue-form class="form-horizontal" :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="name"> User Name</label>
                                                <input v-model="model.username" id="name" name="username" type="text" required autofocus placeholder="User Name" class="form-control" />
                                                <field-messages name="username" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Username is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="fullname"> Full Name</label>
                                                <input v-model="model.fullname" id="fullname" name="fullname" type="text" required autofocus placeholder="Full Name" class="form-control" />
                                                <field-messages name="fullname" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Fullname is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="email"> E-mail</label>
                                                <input v-model="model.email" id="email" name="email" type="email" required placeholder="E-mail" class="form-control" />
                                                <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Email is a required field</div>
                                                    <div slot="email">Email is not valid</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="mobile"> Mobile</label>
                                                <input v-model="model.phone_number" id="mobile" name="mobile" type="text" required placeholder="Mobile Number(10 Digits)" class="form-control" />
                                                <field-messages name="mobile" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Mobile number is a required field</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-12 mt-4" v-if="is_change_password">
                                    
                                        <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="currentpassword"> Current Password</label>
                                                <input v-model="model.currentpassword" id="currentpassword" name="currentpassword" type="password"  placeholder="Current Password" class="form-control"  />
                                                <field-messages name="currentpassword" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="required">Current Password is required</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    
                                        <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="password">New Password</label>
                                                <input v-model="model.password" id="password" name="password" type="password"  placeholder="New Password" class="form-control" minlength="6" maxlength="10" />
                                                <field-messages name="password" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="">New Password is required</div>
                                                    <div slot="minlength">New Password should be atleast 6 characters long</div>
                                                    <div slot="maxlength">New Password should be atmost 10 characters long</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                            <validate tag="div">
                                                <label for="repeatpassword"> Confirm New Password</label>
                                                <input v-model="model.repeatPassword" id="repeatpassword" name="repeatpassword" type="password"  placeholder="Confirm New Password" class="form-control" :sameas="model.password">
                                                <field-messages name="repeatpassword" show="$invalid && $submitted" class="text-danger">
                                                    <div slot="">Confirm New password is required</div>
                                                    <div slot="sameas">New Password and Confirm New password should match</div>
                                                </field-messages>
                                            </validate>
                                        </div>
                                    </div>
                                    </div>
                               </div>
                            
                            <div class="col-md-offset-4 col-md-8 m-t-25">
                                <button type="submit" class="btn btn-primary">Submit
                                </button>
                               
                            </div>
                        </vue-form>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import Vue from 'vue' ; 
import store from 'src/store/store.js';
import VueForm from "vue-form";   
import vueSmoothScroll from 'vue-smoothscroll';     
Vue.use(vueSmoothScroll);
import options from "src/validations/validations.js";
Vue.use(VueForm, options);
export default {
    name: "edit_user",
    data() {
        return {
            formstate: {},
            csu_company:"",
            is_change_password:false,
            csu_stations:[],
            cru_company:"",
            cru_stations:[],
            myrole:"",
            company_stations: [],                
            available_companies: [],
            is_company_regular_user: false,
            is_company_super_user: false,
            is_e360_super_user: false,
            preset : {
                    company_id: 0,
                    station_id: 0
                    },
                
            model: {
                username: "",
                email: "",
                fullname:"",
                phone_number: "",
                password: "",
                repeatPassword: "",
                currentpassword:"",
                address: "hyd ",
                city: "Hyderabad",
                           },
            old_file: ""
        }
    },
    methods: {    
        onSubmit: function() {
            this.$SmoothScroll(document.getElementById("content-header"));
           
            if (this.formstate.$invalid) {
                return;
            } else {
              // this.$router.push("/edit_users");
               //console.log(this.model);
                let url='';
                let user_detail= '';
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                if(this.model.is_verified == undefined){
                    ///company regular user
                    url ='/company_users/profile/';
                     user_detail = {
                            company_user: this.model
                        };
                }else{
                    ///super user
                    url ='/users/profile/';
                     user_detail = {
                            user: this.model
                        };
                }
                    axios.patch(store.state.host_url+url+this.model.id, user_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
                        //console.log(response);
                        let company_response = response.data;
                        if (company_response.status === true) {
                         let password_message= "";
                        if(this.model.password !== undefined){
                        password_message = ", password changed";
                        }
                        this.$alert.success({duration:10000,forceRender:'',
                        message:'Account Updated Successfully'+password_message,transition:''});
                        ///finally
                        
                        localStorage.setItem('user_details',
                       JSON.stringify(this.model));
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                
            }
        },
        show_available_companies(){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        store.state.menu_items= JSON.parse(localStorage.getItem('role_details'));
        var company_route = '';
        ////console.log(user_details);
        if(user_details.role_id == 'master' && user_details.company_id == 'master'){
          ///e360 super user
          this.myrole = "e360 Super User";
          company_route = '/companies/e360_super_user';
          axios.get(store.state.host_url+company_route,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
          store.commit("activateLoader", "end"); 
          this.available_companies = response.data.data;;
          this.is_e360_super_user = true;
          axios.get(this.$store.state.host_url+"/stations",
                    {
                        headers : {
                        "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }}).then(response => {
                        store.commit("activateLoader", "end");   
                        this.company_stations = response.data.data;
                });
            })
            .catch(error => {
            store.commit("activateLoader", "end");   
                store.commit("catch_errors", error); 
            });
            
        }
        else if(user_details.role_id == 'super' && user_details.company_id == 'super'){
          //first company super user
          this.myrole = "Super User";
          company_route = '/companies/first_company_user/'+user_details.id;
          axios.get(store.state.host_url+company_route,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
          store.commit("activateLoader", "end"); 
          this.available_companies = response.data.data;;
          ///one company  
            this.csu_company = response.data.data[0];
            this.preset.company_id = this.csu_company.id;
            this.is_company_super_user = true;   
             axios.get(this.$store.state.host_url+"/stations/by_company/"+this.csu_company.id,
                    {
                        headers : {
                        "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }}).then(response => {
                        store.commit("activateLoader", "end");   
                        this.csu_stations = response.data.data;
                });
            })
            .catch(error => {
            store.commit("activateLoader", "end");   
                store.commit("catch_errors", error); 
            });
        }else{
          ///for regular company users
          company_route = '/companies/company_user/'+user_details.company_id;
          axios.get(store.state.host_url+company_route,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
          store.commit("activateLoader", "end"); 
          ///one company
            this.cru_company = response.data.data[0];
            this.is_company_regular_user = true;   
            this.preset.company_id = user_details.company_id;
            axios.get(this.$store.state.host_url+"/stations/by_user/"+user_details.id,
                    {
                        headers : {
                        "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }}).then(response => {
                        store.commit("activateLoader", "end");   
                        var stations = response.data.data;
                        stations.forEach((item, index) => {
                            //console.log(item);
                            this.cru_stations.push(item.station);
                        });

                        axios.get(this.$store.state.host_url+"/company_users/"+user_details.id,
                        {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }}).then(response => {
                            this.myrole = response.data.data.role.name;
                        });
                });

            })
            .catch(error => {
            store.commit("activateLoader", "end");   
                store.commit("catch_errors", error); 
            });
        }
        }
       
    },
    mounted: function() {
       
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        this.model= user_details;
        this.model.password=undefined;
        this.model.currentpassword=undefined;
        this.model.repeatPassword=undefined;
        this.show_available_companies();
    },
    destroyed: function() {

    }
}
</script>
<style scoped>
.dropzone_wrapper {
    width: 100%;
}
/deep/.quill-editor .ql-tooltip.ql-editing{
    z-index:99;
}
</style>
