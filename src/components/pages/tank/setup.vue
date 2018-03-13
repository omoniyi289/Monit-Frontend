<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="" header-tag="h4" class="bg-default-card">
                <div class="row">
                    <div class="col-md-12">
                        <vue-form :state="formstate2" @submit.prevent="show_station_tanks">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="company">Select Company</label>
                                            <select id="company" name="company" size="1" class="form-control" v-on:change="show_company_stations(preset.company_id)" v-model="preset.company_id" required checkbox>
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

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="station">Select Station</label>
                                            <select id="station" name="station" size="1" class="form-control" v-model="preset.station_id" required checkbox>

                                                <option
                                                        v-for="option in company_stations"
                                                        v-bind:value="option.id"
                                                        :selected="option.name == preset.station_id" >{{ option.name }}
                                                </option>
                                            </select>
                                            <field-messages name="station" show="$invalid && $submitted" class="text-danger">
                                                <div slot="checkbox">Station is required</div>
                                            </field-messages>
                                        </validate>
                                    </div>
                                </div>

                                <div class="col-sm-12">
                                    <div class="form-group float-left">
                                        <input type="submit" value="Add Tank" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>

                    <div class="col-md-6">
                        <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="code"> Tank Code</label>
                                            <input v-model="tank.code" name="name" type="text" required autofocus placeholder="Tank Code" class="form-control" id="code"/>
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
                                          :selected="option.name == tank.product_id" >{{ option.name }}
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

                                                <option value="Cylindrical">Cylindrical</option>
                                                <option value="Box Shaped">Box Shaped</option>
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
                                        <input type="submit" value="Submit" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-md-6">
                        <div class="table-responsive">
                            <datatable title="Registered Tanks" :rows="tableData" :columns="columndata"></datatable>
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
                    label: "Product",
                    field: 'product.code',
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
                url: 'http://127.0.0.1:8000/api/v1/tanks',
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
            check_login_details(){
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                if (user_details == null || user_details == undefined) {
                    this.$router.push('/login');
                }
            },
            show_company_stations(company_name){

                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    //let company_name= this.preset.company_name;
                    axios.get("http://127.0.0.1:8000/api/v1/stations/by_company/"+company_name,
                        {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }}).then(response => {
                            this.company_stations = response.data.data;
                             console.log(response.data.data);

                })
                .catch(function(error) {
                        if(error.response.status == 401){
                            this.$router.push('/login?message='+error.response.data.error);
                        }
                    });
                },
            show_station_tanks(){
                if (this.formstate2.$invalid) {
                    return;
                } else {
                    this.show_setup_form= true;
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    let station_id= this.preset.station_id;
                    console.log(station_id);
                    axios.get("http://127.0.0.1:8000/api/v1/tanks/by_station/"+station_id,
                        {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }}).then(response => {
                        this.tableData = response.data.data;
                        console.log(response);
                    this.tableData.forEach((item, index) => {
                        this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/tank/edit?tank=" + item.id + "'>Edit</a>");
                });
                    // this.loader
                })
                .catch(function(error) {
                        console.log(error);
                        if(error.response.status == 401){
                            this.$router.push('/login?message='+error.response.data.error);
                        }
                    });
                }},
            show_available_companies(){
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                axios.get("http://127.0.0.1:8000/api/v1/companies",
                    {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }}).then(response => {
                    console.log(response.data.data);
                this.available_companies = response.data.data;
                ///get products///
                axios.get("http://127.0.0.1:8000/api/v1/products",
                  {
                    headers : {
                      "Authorization" : "Bearer " + user_details.token
                    }}).then(response => {
                  console.log(response.data.data);
                  this.products = response.data.data;
              });
            })
            .catch(error => {
                    if(error.response.status == 401){
                    this.$router.push('/login?message='+error.response.data.error);
                }
                console.log(error.response.status);
            });
            }
            ,
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    //include station and company_id
                    this.tank.station_id= this.preset.station_id;
                    this.tank.company_id= this.preset.company_id;
                    let tank_detail = {
                        tank: this.tank
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    console.log(JSON.stringify(tank_detail));
                    axios.post(this.url, tank_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {
                        let station_response = response.data;
                    if (station_response.status === true) {
                        console.log(response.data);
                      this.tableData.push(response.data.data);
                      this.tableData.forEach((item, index) => {
                        this.$set(item, "action", "<a class='btn btn-info' href='#/configuration/tank/edit?tank=" + item.id + "'>Edit</a>");
                    });
                    }
                }).catch(error => {
                        if(error.response.status == 401){
                        this.$router.push('/login?message='+error.response.data.error);
                    }
                    console.log(error);
                })}
            }
        },
        mounted: function() {
            this.check_login_details();
            this.show_available_companies();
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
