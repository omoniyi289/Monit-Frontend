<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="" header-tag="h4" class="bg-primary-card">
                <div class="row">
                    <div class="col-md-3">
                    </div>
                    <div class="col-md-6">
                        <vue-form :state="formstate" @submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="name"> Company Name</label>
                                            <input v-model="company.name" name="name" type="text" required autofocus placeholder="Company Name" class="form-control" id="name"/>
                                            <field-messages name="name" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="registration_number"> Registration Number</label>
                                            <input v-model="company.registration_number" name="registration_number" type="text" required autofocus placeholder="Registration Number" class="form-control" id="registration_number"/>
                                            <field-messages name="registration_number" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company name is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="email_input">Company E-mail</label>
                                            <input v-model="company.email" name="email" type="email" required autofocus placeholder="Company E-mail" class="form-control" id="email_input"/>
                                            <field-messages name="email" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company Email is a required field</div>
                                                <div slot="email">Email is not valid</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="state">State</label>
                                            <select id="state" name="state" class="form-control" v-model="company.state" required autofocus >
                                                <option value="0" selected disabled>
                                                    Please select
                                                </option>
                                                <option
                                                    v-for="option in available_states"
                                                    v-bind:value="option.states.name" >{{ option.states.name }}
                                                </option>
                                                
                                            </select>
                                            <field-messages name="state" show="$invalid && $submitted" class="text-danger">
                                                <div slot="checkbox">State is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="city">City</label>
                                            <input v-model="company.city" class="form-control" name="city" id="city" placeholder="Enter your Company City" required  />
                                            <field-messages name="city" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">City is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="address"> Company Address</label>
                                            <input v-model="company.address" name="address" type="text" required  placeholder="Company Address" class="form-control" id="address"/>
                                            <field-messages name="address" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Company Address is a required field</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="form-group float-right">
                                        <input type="submit" value="Submit" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-md-3">
                    </div>
                    <div class="col-sm-12">
                        <div class="ui container">
                            <div class="vuetable-pagination ui basic segment grid">
                            <vuetable-pagination-info ref="paginationInfoTop"
                            ></vuetable-pagination-info>
                            <vuetable-pagination ref="paginationTop"
                                @vuetable-pagination:change-page="onChangePage"
                            ></vuetable-pagination>
                            </div>
                            <vuetable ref="vuetable"
                            api-url="http://localhost:8000/api/v1/companies"
                            :fields="fields"
                            pagination-path=""
                            :per-page="20"
                            :multi-sort="true"
                            :sort-order="sortOrder"
                            @vuetable:pagination-data="onPaginationData"
                            >
                            <template slot="actions" scope="props">
                                <div class="custom-actions">
                                 <button class="btn btn-info btn-sm" @click="onAction('edit-item', props.rowData, props.rowIndex)">EDIT</button>
                                 <button class="btn btn-danger btn-sm" @click="onAction('delete-item', props.rowData, props.rowIndex)">DEL</button>
                              
                                </div>
                            </template>
                            </vuetable>
                            <div class="vuetable-pagination ui basic segment grid">
                            <vuetable-pagination-info ref="paginationInfo"
                            ></vuetable-pagination-info>
                            <vuetable-pagination ref="pagination"
                                @vuetable-pagination:change-page="onChangePage"
                            ></vuetable-pagination>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import store from 'src/store/store.js';
    import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
    import vuetable from "vuetable-2";
    import options from "src/validations/validations.js";
     import CustomActions from 'components/plugins/DataTable/CustomActions.vue';
     import accounting from 'accounting'
    import moment from 'moment'
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
    import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'

  Vue.component('custom-actions', CustomActions);
    Vue.use(VueForm, options);
    import api_states from "src/assets/json/states.json";
    export default {
        name: "formfeatures",
        components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationInfo
  },
        data() {
            return {
                fields: [
        {
          name: '__handle',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: '__sequence',
          title: '#',
          titleClass: 'center aligned',
          dataClass: 'right aligned'
        },
        {
          name: '__checkbox',
          titleClass: 'center aligned',
          dataClass: 'center aligned'
        },
        {
          name: 'name',
          sortField: 'name',
        }, 
        {
          name: 'email',
          sortField: 'email'
        },
        {
          name: 'birthdate',
          sortField: 'birthdate',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'formatDate|DD-MM-YYYY'
        },
        {
          name: 'nickname',
          sortField: 'nickname',
          callback: 'allcap'
        },
        {
          name: 'gender',
          sortField: 'gender',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
          callback: 'genderLabel'
        },
        {
          name: 'salary',
          sortField: 'salary',
          titleClass: 'center aligned',
          dataClass: 'right aligned',
          callback: 'formatNumber'
        },
        // {
        //   name: '__component:custom-actions',
        //   title: 'Actions',
        //   titleClass: 'center aligned',
        //   dataClass: 'center aligned',
        // },
        {
          name: '__slot:actions',
          title: 'Slot Actions',
          titleClass: 'center aligned',
          dataClass: 'center aligned',
        }
      ],
      sortOrder: [
        {
          field: 'email',
          sortField: 'email',
          direction: 'asc'
        }
      ],
                tableData: [],
                ajaxLoading: true,
                loading: true,
                url: this.$store.state.host_url+'/companies',
                formstate: {},
             
                company: {
                    name: "",
                    email: "",
                    state:0,
                    address: "",
                    city: "",
                    registration_number: "",
                },
                available_states: "",
                

            }
        },
        methods: {
             allcap (value) {
      return value.toUpperCase()
    },
    genderLabel (value) {
      return value === 'M'
        ? '<span class="ui teal label"><i class="large man icon"></i>Male</span>'
        : '<span class="ui pink label"><i class="large woman icon"></i>Female</span>'
    },
    formatNumber (value) {
      return accounting.formatNumber(value, 2)
    },
    formatDate (value, fmt = 'D MMM YYYY') {
      return (value == null)
        ? ''
        : moment(value, 'YYYY-MM-DD').format(fmt)
    },
    onPaginationData (paginationData) {
      this.$refs.paginationTop.setPaginationData(paginationData)
      this.$refs.paginationInfoTop.setPaginationData(paginationData)
      this.$refs.pagination.setPaginationData(paginationData)
      this.$refs.paginationInfo.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    onAction (action, data, index) {
      console.log('slot action: ' + action, data.name, index)
    },
           show_available_companies(){ store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        axios.get(this.$store.state.host_url+"/companies",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
            }}).then(response => {
          console.log(response.data.data);
        this.tableData = response.data.data;
        ///get products///
        axios.get(this.$store.state.host_url+"/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
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
      ,
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {store.commit("activateLoader", "start");
                    store.commit("activateLoader", "start");
                    let company_detail = {
                        company: this.company
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    console.log(JSON.stringify(company_detail));
                    axios.post(this.url, company_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                        }
                    }).then( response => {                         
                        store.commit("activateLoader", "end");        
        
                        let company_response = response.data;
                        if (company_response.status === true) {
                            this.tableData.push(response.data);
                            localStorage.setItem('company_details', response.data);
                            //console.log(response.data);
                            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Company Registered Successfully', 'show_alert': true});
                        }
                        }).catch(error => { 
                            store.commit("activateLoader", "end");   
                            store.commit("catch_errors", error); 
                });
                    
                }
            }
        },
        mounted: function() {          
            store.commit("check_login_details");
            this.show_available_companies();
            this.available_states = api_states;
        },
        destroyed: function() {

        }
    }
</script>
<style>
    .form-control{
        transition: initial;
    }
</style>
