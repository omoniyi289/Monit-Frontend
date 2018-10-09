<template>
    <div class="card p-3">
        <div class="row" v-if="is_e360_super_user">               
            <div class="col-lg-4">
                <div class="form-group" >
                    Select Company
                    <select  name="company"  size="1" class="form-control"
                    v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" >
                        <option v-for="(option, index) in available_companies" v-bind:value="option.id"
                        >{{ option.name }}
                        </option>                       
                    </select>                          
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    Select   Station
                    <select id="station" name="station" size="1" class="form-control" v-model="preset.station_id" required >
                        <option
                          v-for="option in company_stations"
                          v-bind:value="option.id">{{ option.name }}
                        </option>
                    </select>      
                </div>
            </div>

            <div class="col-sm-3">
                <div class="form-group float-left">
                    <br>
                    <slot name="actions" :row-data="preset.station_id" :row-index="preset.company_id">
                    </slot>
                </div>
            </div>             
        </div>



        <div class="row" v-if="is_company_super_user">               
            <div class="col-lg-2">
                <div class="form-group" >
                     Company  <br> 
                     
                    <button class="btn btn-warning btn-md">{{csu_company.name}}</button>                          
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    Select   Station
                    <select id="station" name="station" size="1" class="form-control" v-model="preset.station_id" required >
                        <option
                          v-for="option in csu_stations"
                          v-bind:value="option.id" >{{ option.name }}
                        </option>
                    </select>      
                </div>
            </div>

            <div class="col-sm-3">
                <div class="form-group float-left">
                    <br>
                    <slot name="actions" :row-data="preset.station_id" :row-index="preset.company_id">
                    </slot>
                </div>
            </div>             
        </div>




        <div class="row" v-if="is_company_regular_user">               
            <div class="col-lg-2">
                <div class="form-group" >
                     Company  <br> 
                    <button class="btn btn-warning btn-md">{{cru_company.name}}</button>                          
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group">
                    Assigned Station(s)
                    <select id="station" name="station" size="1" class="form-control" v-model="preset.station_id" required >
                        <option
                          v-for="option in cru_stations"
                          v-bind:value="option.id" >{{ option.name }}
                        </option>
                    </select>    
                </div>
            </div>

            <div class="col-sm-3">
                <div class="form-group float-left">
                    <br>
                    <slot name="actions" :row-data="preset.station_id" :row-index="preset.company_id">
                    </slot>
                </div>
            </div>             
        </div>





    </div>
</template>
<script>
    import Fuse from 'fuse.js';
    import store from 'src/store/store.js';
    export default {
        props: {
            title: {
                default: ""
            },
            companies: {
                required: true
            },
            stations: {
                required: true
            },
            perPage: {
                default: 10
            },
            sortable: {
                default: true
            },
            paginate: {
                default: true
            },
            exportable: {
                default: true
            },
            pagelen: {
                type: Array,
                default () {
                    return [5, 10, 20, 50]
                }
            }
        },

        data() {
            return {
                currentPage: 1,
                currentPerPage: this.perPage,
                sortColumn: -1,
                sortType: 'desc',
                searchInput: '',
                company_stations: [],
                
                available_companies: [],
               
                products: "",
                csu_company:"",
                csu_stations:[],
                cru_company:"",
                cru_stations:[],
                is_company_regular_user: false,
                is_company_super_user: false,
                is_e360_super_user: false,
                
                preset : {
                    company_id: 0,
                    station_id: 0
                    },
                
            }
        },
        mounted() {
           this.show_available_companies();
        },
        methods: {
            show_company_stations(company_name){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        //let company_name= this.preset.company_name;
        axios.get(this.$store.state.host_url+"/stations/by_company/"+company_name,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
              store.commit("activateLoader", "end");   
              this.company_stations = response.data.data;

      })
      .catch(function(error) {
          store.commit("activateLoader", "end");   
          store.commit("catch_errors", error); 
        });
      },
        show_available_companies(){
        store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        store.state.menu_items= JSON.parse(localStorage.getItem('role_details'));
        var company_route = '';
        ////console.log(user_details);
        if(user_details.role_id == 'master' && user_details.company_id == 'master'){
          ///e360 super user
          company_route = '/companies/e360_super_user';
          axios.get(store.state.host_url+company_route,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
          store.commit("activateLoader", "end"); 
          this.available_companies = response.data.data;;
          this.is_e360_super_user = true;
            })
            .catch(error => {
            store.commit("activateLoader", "end");   
                store.commit("catch_errors", error); 
            });
        }
        else{
          
          company_route = '/companies/first_company_user/'+user_details.id;
          axios.get(store.state.host_url+company_route,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
          store.commit("activateLoader", "end"); 
          //this.available_companies = response.data.data;
          //strictly hardcoded for ENYO for now
          this.available_companies = [{"id":8,"name":"ENYO Retail & Supply"}];
          ///one company  
            //this.csu_company = response.data.data[0];
            this.csu_company = {"id":8,"name":"ENYO Retail & Supply"};
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
        }
       
        }},
        watch: {
        }
    }
</script>
<style scoped>
    .pagination {
        margin-top: 12px;
    }

    .sortable {
        cursor: pointer;
    }
</style>
