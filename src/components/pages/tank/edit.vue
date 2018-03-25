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
                      <label for="code"> Tank Code</label>
                      <input v-model="tank.code" name="code" type="text" required autofocus placeholder="Tank Code" class="form-control" id="code"/>
                      <field-messages name="code" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Station name is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-lg-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="product_id">Product</label>
                      <select id="product_id" name="product_id" size="1" class="form-control" v-model="tank.product_id" required checkbox>

                        <option
                          v-for="option in products"
                          v-bind:value="option.id"
                          :selected="option == 1" >{{ option.name }}
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
                      <label for="shape">Shape</label>
                      <select id="shape" name="shape" size="1" class="form-control" v-model="tank.shape" required checkbox>

                        <option
                          v-for="option in shapes"
                          v-bind:value="option"
                          :selected="option == tank.shape" >{{ option }}
                        </option>
                      </select>
                      <field-messages name="shape" show="$invalid && $submitted" class="text-danger">
                        <div slot="checkbox">Shape is required</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="width"> Tank Width</label>
                      <input v-model="tank.width" name="width" type="text" required autofocus placeholder="Tank Width" class="form-control" id="width"/>
                      <field-messages name="width" show="$invalid && $submitted" class="text-danger">
                        <div slot="required"> Width is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="height"> Tank Height</label>
                      <input v-model="tank.height" name="height" type="text" required autofocus placeholder="Tank Height" class="form-control" id="height"/>
                      <field-messages name="height" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Height is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="capacity"> Tank Capacity</label>
                      <input v-model="tank.capacity" name="capacity" type="text" required autofocus placeholder="Tank Capacity" class="form-control" id="capacity"/>
                      <field-messages name="capacity" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Capacity is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="low_volume"> Low Volume</label>
                      <input v-model="tank.low_volume" name="low_volume" type="text" required autofocus placeholder="Low Volume" class="form-control" id="low_volume"/>
                      <field-messages name="low_volume" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Low volume is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="reorder_volume"> Reorder Volume</label>
                      <input v-model="tank.reorder_volume" name="reorder_volume" type="text" required autofocus placeholder="Reorder Volume" class="form-control" id="reorder_volume"/>
                      <field-messages name="reorder_volume" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Reorder Volume is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="deadstock"> Deadstock</label>
                      <input v-model="tank.deadstock" name="deadstock" type="text" required autofocus placeholder="Deadstock" class="form-control" id="deadstock"/>
                      <field-messages name="deadstock" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Deadstock is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="max_temperate"> Max Temperature</label>
                      <input v-model="tank.max_temperate" name="max_temperate" type="text" required autofocus placeholder="Max Temperature" class="form-control" id="max_temperate"/>
                      <field-messages name="max_temperate" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Max Temp is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="max_water_level"> Max Water Level</label>
                      <input v-model="tank.max_water_level" name="max_water_level" type="text" required autofocus placeholder="Max Water Level" class="form-control" id="max_water_level"/>
                      <field-messages name="max_water_level" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Max Water Level is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <validate tag="div">
                      <label for="daily_budget"> Daily  Budget</label>
                      <input v-model="tank.daily_budget" name="daily_budget" type="text" required autofocus placeholder="Daily Budget" class="form-control" id="daily_budget"/>
                      <field-messages name="daily_budget" show="$invalid && $submitted" class="text-danger">
                        <div slot="required">Daily Budget is a required field</div>
                      </field-messages>
                    </validate>
                  </div>
                </div>


                <div class="col-sm-12">
                  <div class="form-group float-right">
                    <input type="submit" value="Update Tank" class="btn btn-success" />
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
  import VueForm from "vue-form";     import vueSmoothScroll from 'vue-smoothscroll';     Vue.use(vueSmoothScroll);
  import options from "src/validations/validations.js";
  import store from 'src/store/store.js';
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
          label: 'Tank Code',
          field: 'code',
          numeric: false,
          html: false,
        }, {
          label: 'Capacity',
          field: 'capacity',
          numeric: false,
          html: false,
        }, {
          label: 'Deadstock',
          field: 'deadstock',
          numeric: true,
          html: false,
        }, {
          label: "Shape",
          field: 'shape',
          numeric: false,
          html: false,
        }, {
          label: 'Actions',
          field: 'action',
          numeric: false,
          html: true,
        }],
        ajaxLoading: true,
        loading: true,
        url: this.$store.state.host_url+'/tanks',
        formstate: {},
        formstate2: {},
        show_setup_form : false,
        tableData: [],
        available_companies: "",
        products: "",
        station_tanks:"",
        company_stations: "",
        preset : {
          company_id: "",
          station_id: ""
        },
        shapes: {1: "Box Shaped", 2: "Cylindrical"},
        tank: {
          company_id: "",
          station_id: "",
          code: "",
          width:"",
          height: "",
          product: "",
          type: "",
          shape: "",
          capacity: "",
          low_volume: "",
          reorder_volume: "",
          deadstock: "",
          max_temperature: "",
          max_water_level: "",
          daily_budget: "",

        }

      }
    },
    methods: {
      show_edit_form() {
         store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        let id= this.$route.query.tank;
        axios.get(this.$store.state.host_url+"/tanks/"+ id,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          store.commit("activateLoader", "end"); 
          this.tank= response.data.data[0];
          console.log(response);
          ///get products///
          axios.get(this.$store.state.host_url+"/products",
            {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }}).then(response => {
          this.products = response.data.data;
        });
      })
      .catch(function(error) {
         store.commit("activateLoader", "end");   
            store.commit("catch_errors", error); 
        });
      },
      onSubmit() {
          if (this.formstate.$invalid) {
            return;
          } else {
            store.commit("activateLoader", "start");
            let tank_detail = {
              tank: this.tank
            };
            let user_details = JSON.parse(localStorage.getItem('user_details'));

            let id= this.$route.query.tank;
            axios.patch(this.$store.state.host_url+"/tanks/"+id, tank_detail, {
              headers : {
                "Authorization" : "Bearer " + user_details.token
              }
            }).then( response => {                         
              store.commit("activateLoader", "end");
              let station_response = response.data;
            if (station_response.status === true) {
              store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Tank Updated Successfully', 'show_alert': true});
            }
          }).catch(error => { 
            store.commit("activateLoader", "end");   
            store.commit("catch_errors", error); 
        })}
      }
    },
    mounted: function() {
      store.commit("check_login_details");
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
