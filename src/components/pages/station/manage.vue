<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="Registered Stations" header-tag="h4" class="bg-primary-card">
                <vue-form :state="formstate" @submit.prevent="show_company_stations">
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <validate tag="div">
                                    <label for="company">Select Company</label>
                                    <select id="company" name="company" size="1" class="form-control" v-model="preset.company_id" required="required" checkbox>
                                        <option value="0" selected disabled>
                                            Select Company
                                        </option>
                                        <option
                                                v-for="option in available_companies"
                                                v-bind:value="option.id"
                                                :selected="option.id == preset.company_id" >{{ option.name }}
                                        </option>
                                    </select>
                                    <field-messages name="company" show="$invalid && $submitted" class="text-danger">
                                        <div slot="checkbox">Company is required</div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>

                        <div class="col-sm-12">
                            <div class="form-group float-left">
                                <input type="submit" value="Submit" class="btn btn-success" />
                            </div>
                        </div>
                    </div>
                </vue-form>


                <div class="table-responsive">
                    <datatable title="Registered Stations" :rows="tableData" :columns="columndata"></datatable>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
import Vue from 'vue' ;    import store from 'src/store/store.js';
import datatable from "components/plugins/DataTable/DataTable.vue";
import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
import options from "src/validations/validations.js";
Vue.use(VueForm, options);
export default {
    name: "formfeatures",
    components: {
        datatable
    },
    data() {
        return {
            tableData: [],
            formstate:{},
            preset: {
              company_id: ""
            },
            available_companies: "",
            columndata: [{
                label: 'ID',
                field: 'id',
                numeric: true,
                html: false,
            }, {
                label: 'Name',
                field: 'name',
                numeric: false,
                html: false,
            }, {
                label: 'Address',
                field: 'address',
                numeric: false,
                html: false,
            }, {
                label: 'City',
                field: 'city',
                numeric: true,
                html: false,
            }, {
                label: "Manager's Phone",
                field: 'manager_email',
                numeric: false,
                html: false,
            }, {
                label: 'Actions',
                field: 'action',
                numeric: false,
                html: true,
            }]
        }
    },
    methods: {
        show_available_companies(){
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            axios.get(this.$store.state.host_url+"/companies",
                {
                    headers : {
                        "Authorization" : "Bearer " + user_details.token
                    }}).then(response => {
                    console.log(response.data.data);
                    this.available_companies = response.data.data;
                }).catch(function(error) {
                            console.log(error);
                        });
                    },
        show_company_stations(){
            if (this.formstate.$invalid) {
                return;
            } else {store.commit("activateLoader", "start");
                //this.loadersss= true;
                console.log(this.loadersss);
            let user_details = JSON.parse(localStorage.getItem('user_details'));
            let company_id= this.preset.company_id;
            axios.get(this.$store.state.host_url+"/stations/by_company/"+company_id,
                {
                    headers : {
                        "Authorization" : "Bearer " + user_details.token
                    }}).then(response => {
                store.commit("activateLoader", "end");   
                this.tableData = response.data.data;
                console.log(response.data.data);
                this.tableData.forEach((item, index) => {
                this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/station/edit?station=" + item.id + "'>Edit</a>");
                });
                
                })
                .catch(function(error) {
                   store.commit("activateLoader", "end");   
                   store.commit("catch_errors", error); 
            });
        }}
        },
    mounted: function() {
        store.commit("check_login_details");
        this.show_available_companies();
    },

}
</script>
