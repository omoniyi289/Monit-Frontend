<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
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
  import Vue from 'vue'
  import datatable from "components/plugins/DataTable/DataTable.vue";
  import VueForm from "vue-form";
  import options from "src/validations/validations.js";
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable
    },
    data() {
      return {columndata: [{
          label: 'ID',
          field: 'id',
          numeric: true,
          html: false,
        }, {
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
        url: 'http://127.0.0.1:8000/api/v1/privileges',
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
              axios.get("http://127.0.0.1:8000/api/v1/permissions",
                {
                  headers : {
                    "Authorization" : "Bearer " + user_details.token
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
