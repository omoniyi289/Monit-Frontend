<template>
    <div class="row">
        <div class="col-lg-12">
            <b-card header="" header-tag="h4" class="bg-default-card">
                <div class="row">
                    <div class="col-md-12">
                        <csview title="Custom Table"  :companies="available_companies" :stations="company_stations">
                        <template slot="actions" slot-scope="props">
                            <div >
                            <button class="btn btn-success" 
                            @click="show_station_tanks( props.rowData, props.rowIndex)">Proceed</button>
                                
                            </div>
                        </template>
                        </csview>
                        <hr>
                    </div>

                    <div class="col-md-8">
                        <vue-form :state="formstate" @submit.prevent="onSubmit" v-show="show_setup_form && fill_form">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="code"> Tank Code</label>
                                            <input v-model="tank.code" name="code" type="text" required autofocus placeholder="Tank Code" class="form-control" id="code"/>
                                            <field-messages name="code" show="$invalid && $submitted" class="text-danger">
                                                <div slot="required">Tank Code is a required field</div>
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
                                      <field-messages name="product_id" show="$invalid && $submitted" class="text-danger">
                                        <div slot="checkbox">Product is required</div>
                                      </field-messages>
                                    </validate>
                                  </div>
                                </div>


                              <div class="col-lg-6">
                                    <div class="form-group">
                                        <validate tag="div">
                                            <label for="type">Type</label>
                                            <select id="type" name="type" size="1" class="form-control" v-model="tank.type" required checkbox>

                                                <option value="Surface">Surface</option>
                                                <option value="Underground">Underground</option>
                                            </select>
                                            <field-messages name="type" show="$invalid && $submitted" class="text-danger">
                                                <div slot="checkbox">Type is required</div>
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
                                      <label for="probe_id"> Probe ID</label>
                                      <input v-model="tank.probe_id" name="probe_id" type="text" required autofocus placeholder="Probe ID" class="form-control" id="probe_id"/>
                                      <field-messages name="probe_id" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Probe ID is a required field</div>
                                      </field-messages>
                                    </validate>
                                  </div>
                                </div>
                                <div class="col-sm-6">
                                  <div class="form-group">
                                    <validate tag="div">
                                      <label for="atg_tank_id"> ATG Tank ID</label>
                                      <input v-model="tank.atg_tank_id" name="atg_tank_id" type="text" required autofocus placeholder="ATG Tank ID" class="form-control" id="atg_tank_id"/>
                                      <field-messages name="atg_tank_id" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">ATG Tank ID is a required field</div>
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
                                      <label for="max_water_level"> Max Water Level</label>
                                      <input v-model="tank.max_water_level" name="max_water_level" type="text" required autofocus placeholder="Max Water Level" class="form-control" id="max_water_level"/>
                                      <field-messages name="max_water_level" show="$invalid && $submitted" class="text-danger">
                                        <div slot="required">Max Water Level is a required field</div>
                                      </field-messages>
                                    </validate>
                                  </div>
                                </div>
                            
                                <div class="col-sm-12">
                                    <div class="form-group float-right">
                                        <input type="submit" :value="tank.submit_mode" class="btn btn-success" />
                                    </div>
                                </div>
                            </div>
                        </vue-form>
                    </div>
                    <div class="col-md-12"  v-show="show_setup_form">
                        <div>
                            <button v-on:click="fill_form=!fill_form" style="float: right; margin-bottom: 10px" class="btn btn-success"> ADD NEW TANK</button>
                        </div>
                        <div class="table-responsive">
                            <datatable title="Registered Tanks" :rows="tableData" :columns="columndata">
                                <template slot="actions" slot-scope="props">
                                    <div >
                                    <i class='fa fa-pencil text-info mr-3' @click="onAction('edit', props.rowData, props.rowIndex)"></i>
                                    <i class='fa fa-trash text-danger' @click="onAction('delete', props.rowData, props.rowIndex)"></i>
                                    </div>
                                </template>
                            </datatable>
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
            datatable,csview,
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
                    label: 'ATG Tank Id',
                    field: 'atg_tank_id',
                    numeric: true,
                    html: false,
                }, {
                    label: "Product",
                    field: 'product.code',
                    numeric: false,
                    html: false,
                },{
          field: '__slot:actions',
          label: 'Actions',
          }],
                ajaxLoading: true,
                loading: true,
                url: this.$store.state.host_url+'/tanks',
                formstate: {},
                formstate2: {},
                show_setup_form : false,
                tableData: [],
                available_companies: [],
                available_company: [],
                products: "",
                fill_form:false,
                show_multi_company: false,
                show_single_company: false,
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
                    product_id: 0,
                    type: 0,        
                    capacity: "",
                    atg_tank_id: "",
                    reorder_volume: "",
                    deadstock: "",
                    probe_id: "",
                    max_water_level: "",
                    submit_mode: "CREATE",

                }

            }
        },
        methods: {
        
        show_station_tanks(station_id, company_id){
        this.preset.company_id = company_id;
        this.preset.station_id = station_id;
                if (this.formstate2.$invalid) {
                    return;
                } else {
                    store.commit("activateLoader", "start");
                    this.show_setup_form= true;
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    let station_id= this.preset.station_id;
                    console.log(station_id);
                    axios.get(this.$store.state.host_url+"/tanks/by_station/"+station_id,
                        {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }}).then(response => {
                        store.commit("activateLoader", "end");
                        this.tableData = response.data.data;
                        console.log(response);
                })
                .catch(function(error) {
                    store.commit("activateLoader", "end");
                    store.commit("catch_errors", error); 
                    });
                }},
            show_available_companies(){ 
                this.products = store.state.products;
                if(store.state.show_single_company){
                this.available_company = store.state.available_company;
                this.show_single_company = store.state.show_single_company;
                }else if(store.state.show_multi_company == true){
                this.available_companies = store.state.available_companies;
                this.show_multi_company = store.state.show_multi_company;
                }
            } , onAction (action, data, index) {
                this.$SmoothScroll(document.getElementById("content-header"));
                if(action == 'edit'){
                    this.fill_form = true;
                    this.tank = data;
                    this.tank.submit_mode="UPDATE"
                }else{
                    this.$modal.show('dialog', {
                        title: 'Alert!',
                        text: 'Click Okay to confirm DELETE',
                        buttons: [
                            {
                            title: 'OKAY',       // Button title
                            default: true,    // Will be triggered by default if 'Enter' pressed.
                            handler: () => {this.deleteItem(data)} // Button click handler
                            },
                            {
                            title: 'CLOSE'
                            }
                        ]
                        });
                }
                },
            deleteItem(data){
                console.log("QSAdtfgyuhj");
                store.commit("activateLoader", "start");
                this.$modal.hide('dialog');
                let user_details = JSON.parse(localStorage.getItem('user_details'));
                axios.delete(this.url+'/'+data.id, {
                            headers : {
                                "Authorization" : "Bearer " + user_details.token
                            }
                        }).then( response => {                         
                            store.commit("activateLoader", "end");        
                            let company_response = response.data;
                            if (company_response.status === true) {
                                this.tableData.splice(this.tableData.indexOf(data), 1);
                                this.$alert.success({duration:10000,forceRender:'',
                            message:'Tank Deleted Successfully',transition:''});
                            }
                            }).catch(error => { 
                                store.commit("activateLoader", "end");   
                                store.commit("catch_errors", error); 
                    });
            }
            ,
            onSubmit() {
                if (this.formstate.$invalid) {
                    return;
                } else {
                    this.$SmoothScroll(document.getElementById("content-header"));
                    store.commit("activateLoader", "start");
                    //include station and company_id
                    this.tank.station_id= this.preset.station_id;
                    this.tank.company_id= this.preset.company_id;
                    this.tank.name= this.tank.code;
                    let tank_detail = {
                        tank: this.tank
                    };
                    let user_details = JSON.parse(localStorage.getItem('user_details'));
                    if(this.tank.submit_mode == 'CREATE'){
                    axios.post(this.url, tank_detail, {
                        headers : {
                            "Authorization" : "Bearer " + user_details.token
                        }
                    }).then( response => {
                    store.commit("activateLoader", "end");
                        let station_response = response.data;
                    if (station_response.status === true) {
                        this.tableData = response.data.data;
                        store.commit("showAlertBox", {'alert_type': 'alert-success',
                       'alert_message': 'Tank Added Successfully', 'show_alert': true});
                       this.formstate.$submitted=false;
                        this.tank= {submit_mode: "CREATE"};
                    }
                }).catch(error => { 
                    store.commit("activateLoader", "end");
                    store.commit("catch_errors", error); 
                });}
                    else if(this.tank.submit_mode == 'UPDATE'){
                    console.log("here here");
                                axios.patch(this.$store.state.host_url+"/tanks/"+this.tank.id, tank_detail, {
                                    headers : {
                                        "Authorization" : "Bearer " + user_details.token
                                    }
                                }).then( response => {                         
                                    store.commit("activateLoader", "end");        
                                    let company_response = response.data;
                                    if (company_response.status === true) {
                                    this.tableData = response.data.data;
                                    this.$alert.success({duration:10000,forceRender:'',
                                    message:'Tank Updated Successfully',transition:''});
                                    this.formstate.$submitted=false;
                                    this.tank= {submit_mode: "CREATE"};
                                    }
                                    }).catch(error => { 
                                        store.commit("activateLoader", "end");   
                                        store.commit("catch_errors", error); 
                            });
                                
                            }

                }
            }
        },
        mounted: function() {
            store.commit("check_login_details");
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
