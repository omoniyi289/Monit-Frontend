<template>
  <div class="row">
    <div class="col-lg-12">
      <b-card header="" header-tag="h4" class="bg-default-card">
        <div class="row">
          <div class="col-md-12">


            <vue-form :state="formstate" @submit.prevent="onSubmit">
              <div class="row">

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="number"> Pump Code</label>
                      <input v-model="pump.number" name="number" type="text" required autofocus placeholder="Pump Code" class="form-control" id="number"/>
                      <field-messages name="number" show="$invalid && $submitted" class="text-danger">
                        <div slot="required"> Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="nozzle_code"> Nozzle Code</label>
                      <input v-model="pump.nozzle_code" name="nozzle_code" type="text" required autofocus placeholder="Nozzle Code" class="form-control" id="nozzle_code"/>
                      <field-messages name="nozzle_code" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Nozzle Code is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="brand"> Brand</label>
                      <input v-model="pump.brand" name="brand" type="text" required autofocus placeholder="Brand" class="form-control" id="brand"/>
                      <field-messages name="brand" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Brand is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="serial_number"> Serial Number</label>
                      <input v-model="pump.serial_number" name="serial_number" type="text" required autofocus placeholder="Serial Number" class="form-control" id="serial_number"/>
                      <field-messages name="serial_number" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Serial Number is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product">Product</label>
                      <select id="product" name="product" size="1" class="form-control" v-model="pump.product_id" required checkbox>

                        <option
                          v-for="option in products"
                          v-bind:value="option.id"
                          :selected="option.name == pump.product_id" >{{ option.name }}
                        </option>

                      </select>
                      <field-messages name="product" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Product is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>


                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="type">Type</label>
                      <select id="type" name="type" size="1" class="form-control" v-model="pump.type" required checkbox>

                        <option value="Dual Pump">Dual Pump</option>
                        <option value="Single Pump">Single Pump</option>
                      </select>
                      <field-messages name="type" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Type is required</div>
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
  import store from 'src/store/store.js';
  Vue.use(VueForm, options);
  export default {
    name: "formfeatures",
    components: {
      datatable
    },
    data() {
      return {
        ajaxLoading: true,
        loading: true,
        url: 'http://127.0.0.1:8000/api/v1/tanks',
        formstate: {},
        formstate2: {},
        available_companies: "",
        products: "",
        station_tanks:"",
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        shapes: {1: "Box Shaped", 2: "Cylindrical"},
        pump : {
          company_id: "",
          station_id: "",
          number: "",
          brand:"",
          nozzle_code: "",
          product: "",
          type: "",
          serial_number: "",

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

      show_edit_form() {
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let id= this.$route.query.pump;
        axios.get("http://127.0.0.1:8000/api/v1/pumps/"+ id,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {

          this.pump = response.data.data;
        console.log(this.pump);
        ///get products///
        axios.get("http://127.0.0.1:8000/api/v1/products",
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          this.products = response.data.data;
      });
      })
      .catch(function(error) {
          console.log(error);
        });
      },
      onSubmit() {
        if (this.formstate.$invalid) {
          return;
        } else {
          let pump_detail = {
            pump: this.pump
          };
          let user_details = JSON.parse(localStorage.getItem('user_details'));

          let id= this.$route.query.pump;
          axios.patch("http://127.0.0.1:8000/api/v1/pumps/"+id, pump_detail, {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }
          }).then( response => {
            let station_response = response.data;
          if (station_response.status === true) {
            store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Pump Successfully Updated', 'show_alert': true});
            console.log(response.data);
          }
        }).catch(error => {
            if(error.response.status == 401){
            this.$router.push('/login?message='+error.response.data.error);
          }
          if(error.response.status == 500){
            //this.$router.push('/login?message='+error.response.data.error);
          }
          console.log(error);
        })}
      }
    },
    mounted: function() {
      this.check_login_details();
      this.show_edit_form();
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
