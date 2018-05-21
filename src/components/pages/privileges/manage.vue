<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-info-card">
        <div class="row">
          
          <div class="col-sm-12">
            <div class="table-responsive">
              <datatable title="Avaialable Privileges" :rows="tableData" :columns="columndata"></datatable>
            </div>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'; import store from 'src/store/store.js';
  import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable
    },
    data() {
      return {columndata: [{
          label: 'Privilege Name',
          field: 'name',
          numeric: false,
          html: false,
        }, {
          label: 'Description',
          field: 'description',
          numeric: false,
          html: false,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/privileges',
        formstate: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
        station_pumps:"",
        available_privileges: [],
        preset : {
          company_id: "",
          station_id: ""
        },
        role : {
          name: "",
          description: "",
          selected_privileges: [],
        }

      }
    },
    methods: {
      check_login_details(){
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        if (user_details == null || user_details == undefined) {
          this.$router.push('/login');
        }
      },
        show_permissions(){
                     ///get products///
              let user_details = JSON.parse(localStorage.getItem('user_details'));
              axios.get(this.$store.state.host_url+"/permissions",
                {
                  headers : {
                    "Authorization" : "Bearer " + user_details.token,  "Cache-Control": "no-cache"
                  }}).then(response => {
                console.log(response.data.data);
                this.tableData = response.data.data;
                 this.tableData.forEach((item, index) => {
              //this.$set(item, "action", "<a class='btn btn-info' href='#/admin/roles/edit?role=" + item.id + "'></a>");
          });
                });
        },
    },
    mounted: function() {
      this.check_login_details();
      this.show_permissions();
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
