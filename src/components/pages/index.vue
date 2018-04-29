<template>
    <div>
      <div class="row">
        <div class="col-sm-3">
            <div class="row">
                <div class="col-lg-12">
                    <b-card header="Quick Links" header-tag="h4" class="bg-success-card">
                        <a href="/#/admin/users/profile"><b-breadcrumb class="breadcrumb1" >
                            ACCOUNT SETTINGS</b-breadcrumb></a>
                        <a href="/#/ss-management/open-station"><b-breadcrumb class="breadcrumb1" >
                            OPEN STATION</b-breadcrumb></a>
                        <a href="/#/ss-management/close-station"><b-breadcrumb class="breadcrumb2" >
                           CLOSE STATION </b-breadcrumb></a>
                        <a href="/#/fuel-supply/request"><b-breadcrumb class="breadcrumb3" >
                           REQUEST FUEL SUPPLY </b-breadcrumb></a>
                    </b-card>
                </div>
            </div>
        </div>
        <div class="col-sm-9">
            <div class="row">
            <div class="col-xl-4 text-center">
                <b-card claass="bg-default-card easy_pie_chart1">
                   <div class="row">
                        <div class="col-12 mb-3 mt-3">
                            <div class="row">
                                <div class="col-4 p-t-10 push-1">
                                    <div class="top_border4 bg_color1">
                                        <i class="fa fa-server circle_round"></i>
                                    </div>
                                </div>
                                <div class="col-8 m-t-10">
                                    <p class="user_font">Stations</p>
                                   <p class="number_size">{{parseFloat(this.final_data.total_stations).toLocaleString()}}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-xl-4 text-center">
                <b-card claass="bg-default-card easy_pie_chart1">
                    <div class="row">
                        <div class="col-12 mb-3 mt-3">
                            <div class="row">
                                <div class="col-4 p-t-10 push-1">
                                    <div class="top_border4 bg_color2">
                                        <i class="fa fa-server circle_round"></i>
                                    </div>
                                </div>
                                <div class="col-8 m-t-10">
                                    <p class="user_font">Tanks</p>
                                    <p class="number_size">{{parseFloat(this.final_data.total_tanks).toLocaleString()}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-xl-4 text-center">
                <b-card claass="bg-default-card easy_pie_chart1">
                    <div class="row">
                        <div class="col-12 mb-3 mt-3">
                            <div class="row">
                                <div class="col-4 p-t-10 push-1">
                                    <div class="top_border2 bg_color3">
                                        <i class="fa fa-server circle_round1"></i>
                                    </div>
                                </div>
                                <div class="col-8 m-t-10">
                                    <p class="user_font">Pumps</p>
                                    <p class="number_size">{{parseFloat(this.final_data.total_pumps).toLocaleString()}} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            </div>
            <div class="row">
            <div class="col-xl-4 text-center">
              <b-card claass="bg-default-card easy_pie_chart1">
                  <div class="row">
                      <div class="col-12 mb-3 mt-3">
                           <div class="row">
                               <div class="col-4 p-t-10 push-1">
                                   <div class="top_border1 bg_color4">
                                   <i class="fa fa-line-chart circle_round"></i>
                                   </div>
                               </div>
                               <div class="col-8 m-t-10">
                                   <p class="user_font">Total Vol Supplied</p>
                                    <p class="number_size">{{parseFloat(this.final_data.total_vol_supplied).toLocaleString()}} Ltrs.</p>
                                   
                               </div>
                           </div>
                      </div>
                  </div>
              </b-card>
            </div>
            <div class="col-xl-4 text-center">
                <b-card claass="bg-default-card easy_pie_chart1">
                   <div class="row">
                        <div class="col-12 mb-3 mt-3">
                            <div class="row">
                                <div class="col-4 p-t-10 push-1">
                                    <div class="top_border4 bg_color5">
                                        <i class="fa fa-line-chart circle_round"></i>
                                    </div>
                                </div>
                                <div class="col-8 m-t-10">
                                    <p class="user_font">Total Pump Sales</p>
                                    <p class="number_size">{{parseFloat(this.final_data.total_pump_sales).toLocaleString()}} Ltrs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            <div class="col-xl-4 text-center">
                <b-card claass="bg-default-card easy_pie_chart1">
                    <div class="row">
                        <div class="col-12 mb-3 mt-3">
                            <div class="row">
                                <div class="col-4 p-t-10 push-1">
                                    <div class="top_border4 bg_color6">
                                        <i class="fa fa-line-chart circle_round"></i>
                                    </div>
                                </div>
                                <div class="col-8 m-t-10">
                                    <p class="user_font">Total Tank Sales</p>
                                    <p class="number_size">{{parseFloat(this.final_data.total_tank_sales).toLocaleString()}} Ltrs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </b-card>
            </div>
            </div>
        </div>
        </div>
        
        <div class="col-sm-12" v-show="show_setup_form">
            <div class="table-responsive">
              <datatable title="Sales and Stock Data" :rows="tableData" :columns="columndata">
              </datatable>
            </div>
          </div>
    </div>
</template>
<script>
    import Vue from 'vue' ;    import store from 'src/store/store.js';

    import IEcharts from 'vue-echarts-v3/src/full.js';

    import 'zrender/lib/vml/vml';
    require('swiper/dist/css/swiper.css')

    import VueAwesomeSwiper from 'vue-awesome-swiper';
    import countTo from 'vue-count-to';

    import datatable from "components/plugins/DataTable/DataTable.vue";import csview from "components/plugins/Company-Station-View/CSView.vue";
    import vScroll from "components/plugins/scroll/vScroll.vue";
    import portfolio from "components/widgets/portfolio/portfolio.vue"
    import VueChartist from 'v-chartist'

    Vue.use(VueAwesomeSwiper);
    var unsub;
    export default {
        name: "index2",
        components: {
            IEcharts,
            datatable,csview,
            countTo,
            vScroll,
            portfolio,
            VueChartist
        },
        data() {
            return {
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
            final_data: [],
            preset : {
                    company_id: 0,
                    station_id: 0
                    },
            
                loading: false,
                ajaxloading: true,
                tableData: [],
                show_setup_form: false,
                columndata: [{
                    label: 'Date',
                    color: ['#ccc'],
                    field: 'date',
                    numeric: true,
                    html: false,
                }, {
                    label: 'Station',
                    field: 'station',
                    numeric: false,
                    html: true,
                },{
                    label: 'Product',
                    field: 'product',
                    numeric: false,
                    html: true,
                }, {
                    label: 'PPV',
                    field: 'ppv',
                    numeric: false,
                    html: true,
                }, {
                    label: 'Pump Sales',
                    field: 'pump_sales',
                    numeric: false,
                    html: true,
                }, {
                    label: 'Tank Sales',
                    field: 'tank_sales',
                    numeric: false,
                    html: true,
                }, {
                    label: 'Expected Pump Sales',
                    field: 'expected_pump_sales',
                    numeric: false,
                    html: true,
                }, {
                    label: 'Tolerance',
                    field: 'tolerance',
                    numeric: false,
                    html: true,
                }]

            }
        },
        mounted: function () {
            var url = window.location+"go";
            if(url.includes('company_user')){
                this.$route.query.company_user = undefined;
                //do a reload to set menu permissions to the newly stored        
                console.log("here");
                //this.$forceUpdate();
                // vm.$forceUpdate();
                window.location.href = "/#/index/";
                location.reload();         
            }
            this.populate_dashboard();
          
         
        },
        methods: {
          populate_dashboard(){
            store.commit("activateLoader", "start");
        let user_details = JSON.parse(localStorage.getItem('user_details'));
        var company_route = '';
        //console.log(user_details);
        if(user_details.role_id == 'master' && user_details.company_id == 'master'){
          ///e360 super user
          this.is_e360_super_user = true;
          company_route = '/dashboard?user=e360_super_user&user_id='+user_details.id+'company_id=master';
          }
          else if(user_details.role_id == 'super' && user_details.company_id == 'super'){
          //first company super user
          company_route = '/dashboard?user=first_company_user&user_id='+user_details.id+'company_id=super';
          this.is_company_super_user = true;
          }
          else{
          ///for regular company users
          company_route = '/dashboard?user=company_regular_user&user_id='+user_details.id+'company_id='+user_details.company_id;
          this.is_company_regular_user = true;
          }
          axios.get(store.state.host_url+company_route,
          {
            headers : {
              "Authorization" : "Bearer " + user_details.token
            }}).then(response => {
          store.commit("activateLoader", "end"); 
            this.final_data = response.data.data;
          var table_data = [];
          if(this.final_data.total_pumps > 0 && this.final_data.total_tanks >0 && this.final_data.total_stations >0 )
            {
             this.show_setup_form = true;
           }

        table_data=this.final_data.merged_data_by_date;
       try{
         var table_data_by_date = Object.keys(table_data).map(function(key) {
         return [key, table_data[key]];
         });
          }catch(error){
              console.log(error);
          }
         table_data_by_date= table_data_by_date.reverse();
         ////by date///////
         table_data_by_date.forEach(element => {
             let main_date = element[0];
             let table_data_by_station = element[1];
             var _result = Object.keys(table_data_by_station).map(function(key) {
            return [key, table_data_by_station[key]];
            });
            
               
                 ////by station//////
            _result.forEach(element => {
                 var total_pump_sales_string='';
                var total_tank_sales_string='';
                var ppv_string= '';
                var tolerance_string='';
                var expected_pump_sales_string='';
                var station_name_string = '';
                let product_string='';




                 let station = element[0];
             let stock_and_pump_data_by_product = element[1];
             var i_result = Object.keys(stock_and_pump_data_by_product).map(function(key) {
            return [key, stock_and_pump_data_by_product[key]];
            });
                ////by product//////
            i_result.forEach(element => {
                let total_pump_sales=0;
                var total_tank_sales=0;
                var expected_pump_sales=0;
                var tolerance=0;
                var ppv= 0;
                let product = element[0];
                let stock_and_pump_data = element[1];
                //console.log(stock_and_pump_data);
                var ii_result = Object.keys(stock_and_pump_data).map(function(key) {
            return [key, stock_and_pump_data[key]];
            });
            if(ii_result[0] !== undefined){
            if(ii_result[0][0]=="pump_data"){
                var tot_open_pump_reading= 0.00;
                var tot_close_pump_reading = 0.00;

                var tot_shift_start_tank_reading= 0.00;
                var tot_shift_end_tank_reading = 0.00;
                var tot_delivery = 0.00;
                var tot_rtt = 0.00;

                ii_result[0][1].forEach(element =>{
                    tot_open_pump_reading = tot_open_pump_reading + parseFloat(element.open_shift_totalizer_reading);
                    tot_close_pump_reading = tot_close_pump_reading + parseFloat(element.close_shift_totalizer_reading);
                    ppv = parseFloat(element.ppv);
                  
                }
                );
                total_pump_sales = tot_close_pump_reading - tot_open_pump_reading;
                
                
            }}
            if(ii_result[1] !== undefined){
            if(ii_result[1][0]=="tank_data"){
                ii_result[1][1].forEach(element =>{
                  tot_shift_start_tank_reading = tot_shift_start_tank_reading + parseFloat(element.phy_shift_start_volume_reading);
                  tot_shift_end_tank_reading = tot_shift_end_tank_reading + parseFloat(element.phy_shift_end_volume_reading);
                  tot_delivery = tot_delivery + parseFloat(element.end_delivery);
                  tot_rtt = tot_rtt + parseFloat(element.return_to_tank);
                
                }
                );
                total_tank_sales = tot_shift_start_tank_reading - tot_shift_end_tank_reading + tot_delivery;
                expected_pump_sales = total_tank_sales/20*0.5 + total_tank_sales;
                total_pump_sales = total_pump_sales -tot_rtt;
              }}  
                if(total_tank_sales !=0){
                    tolerance = (total_pump_sales/total_tank_sales*20).toFixed(2).toLocaleString();      
                }else{
                    tolerance ='Invalid';
                }
                //consider rtt for pump sales
                
                 station_name_string = station;
                station_name_string='<span >'+station_name_string + '</span><br>';
                total_pump_sales_string='<span class="'+product+'">'+total_pump_sales_string + 
                total_pump_sales.toFixed(2).toLocaleString()+'</span><br>';
                total_tank_sales_string='<span class="'+product+'">'+total_tank_sales_string + 
                total_tank_sales.toFixed(2).toLocaleString()+'</span><br>';
                product_string = '<span class="'+product+'">'+product_string +product+'</span><br>';
                expected_pump_sales_string = '<span class="'+product+'">'+expected_pump_sales_string
                + expected_pump_sales.toFixed(2).toLocaleString()+'</span><br>';
                
                tolerance_string = '<span class="'+product+'">'+tolerance_string +tolerance+'</span><br>';
                
                //all return readings with real values return station, just pick one
                
                //if(station_name !='c'){
                    //console.log(station_name);
                 
               //    }
                ppv_string = '<span class="'+product+'">'+ppv_string + ppv.toLocaleString() +'</span><br>';
                
                 }
             
                 );
                  this.tableData.push({'date': main_date, 'product': product_string, 
                'ppv': ppv_string, 'tank_sales': total_tank_sales_string, 'pump_sales': 
                total_pump_sales_string, 'station': station_name_string, 'tolerance': 
                tolerance_string, 'expected_pump_sales': expected_pump_sales_string });
                  
                  }
                  
             
                 );
               }
         
               );
         
            })
            .catch(error => {
            store.commit("activateLoader", "end");   
                store.commit("catch_errors", error); 
            });
            
        }
        }
    }
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style src="chartist/dist/chartist.css"></style>
<style scoped src="assets/css/index.css"></style>
<style>
.index1_swiper .swiper-pagination-bullet-active {
    background: #fff !important;
}
.swiper-widget{
  padding: 7px;

}
.sales-info{
    color: #636c72;
}
.echarts{
    height: 179px !important;
}
/*socio-tabs*/

.socio-tabs {
    min-height: 370px;
    background-color:#f5f8fa;
}

.socio-tabs .tab-content {
    min-height: 315px;
}

.socio-tabs .nav-item a {
    padding: 15px 0;
    text-align: center;
}

.socio-tabs .nav-tabs li:first-child a.active {
    background-color: #55ACEE;
}

.socio-tabs .nav-tabs li:nth-child(2) a.active {
    background-color: #3B5998;
}

.socio-tabs .nav-tabs li:last-child a.active {
    background-color: #3F729B;
}

.socio-tabs .nav-tabs {
    border-top: 3px solid #FFF;
    border-bottom: 0;
}

.socio-tabs .nav-item {
    width: 33.33%;
}

.socio-tabs .nav-tabs .nav-link,
.socio-tabs .nav-tabs .nav-link:focus,
.socio-tabs .nav-tabs .nav-link:hover {
    border-color: #fff #fff #ddd;
    font-size: 14px;
    color: #777;
}

.socio-tabs .nav-tabs .nav-link.active,
.socio-tabs .nav-tabs .nav-item.show .nav-link {
    border-color: #fff #fff #ddd;
    color: #FFF;
}

.tab-pane .card {
    border-color: #FFF;
    margin:3px 0 0 0;
}

.tab-pane .card-block {
    padding: 12px;
}
.PMS{
    color: #1d8a99;
}
.AGO{
    color: #c5b451;
}
.DPK{
    color: #360568;
}
.twitter .tweet-img {
    width: 17%;
}
.twitter .tweet {
    width: 83%;
    padding-left: 3%;
}
.swiper-container{
    margin-top: 22px;
}
.swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 26px !important;
}
a.prfl-link {
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.twitter .tweet .options {
    margin: 0;
}

.twitter .tweet .options i {
    margin-left: 15px;
    cursor: pointer;
}

.facebook .page-img,
.instagram .page-img {
    width: 17%;
}

.facebook .page-name,
.instagram .page-name {
    width: 83%;
    padding-left: 3%;
}
.fb-friends{
    overflow: hidden;
}
.fb-friends img {
    width: 23%;
    margin: 0 0 5px 2px;
    cursor: pointer;
}
.fb-friends img:hover{
    transform: scale(1.1,1.1);
    transition: 300ms
}
.insta-pins .insta-img {
    width: 49%;
    margin: 0 1px;
    float: left;
    position: relative;
}

.insta-pins .insta-img img {
    width: 100%;
    height: 130px;
}

.insta-pins .insta-img .pic-credits {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 3px 7px;
    color: #555;
    background-color: rgba(255, 255, 255, .6);
}

.task1 {
    padding-bottom: 20px!important;
}

.task1 .btn {
    margin-right: 15px!important;
}


/*========chart============*/

#annual-sales {
    position: relative;
    height: 260px;
}

#annual-sales .ct-grid {
    stroke: rgba(0, 0, 0, .07);
    stroke-width: 1px;
    stroke-dasharray: 0;
}

#annual-sales .ct-label {
    color: rgba(0, 0, 0, .7);
    font-size: 1.1rem;
}

#annual-sales .ct-label.ct-horizontal.ct-end {
    margin-left: -15px;
}

@media screen and (max-width:390px) {
    #annual-sales {
        height: 200px;
    }
    #annual-sales .ct-label.ct-horizontal.ct-end {
        transform: rotate(-45deg);
    }
}

#annual-sales .ct-series-a .ct-line,
#annual-sales .ct-series-a .ct-point {
    stroke: #4FC1E9;
}

#annual-sales .ct-series-b .ct-line,
#annual-sales .ct-series-b .ct-point {
    stroke: #09BD8F;
}

#annual-sales .ct-point {
    stroke-width: 7px;
    cursor: pointer;
}

#annual-sales .ct-series-a .ct-area {
    fill: #BFBFC6;
    fill-opacity: .05
}

#annual-sales .ct-series-b .ct-area {
    fill: #4086C1;
    fill-opacity: .05
}

#annual-sales .ct-line {
    stroke-width: 1px
}


.chartist-tooltip {
    background-color: #0a0a0a;
    color: #FFF;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}

.chartist-tooltip:before,
.chartist-tooltip:after {
    content: none;
}

.nav-tabs:focus {
    outline: none;
}

.icon_color {
    color: #22b1e3;
    font-size: 25px;
}

.circle_round{
    font-size: 20px;
}
.circle_round1{
    font-size: 22px;
}
.top_border1{
    width:60px;
    height:60px;
    border-radius: 50%;
    line-height: 4.1;
    font-size: 15px;
    color: #fff;
    box-shadow:1px 1px 20px rgba(75, 156, 228, 0.88);
}
.top_border2{
    width:60px;
    height:60px;
    border-radius: 50%;
    line-height: 4.1;
    font-size: 15px;
    color: #fff;
    box-shadow: 1px 1px 20px rgba(82, 162, 185, 0.86);
}
.top_border3{
    width:60px;
    height:60px;
    border-radius: 50%;
    line-height: 4.1;
    font-size: 15px;
    color: #fff;
    box-shadow: 1px 1px 22px rgb(19, 191, 210);
}
.top_border4{
    width:60px;
    height:60px;
    border-radius: 50%;
    line-height: 4.1;
    font-size: 15px;
    color: #fff;
    box-shadow:1px 1px 20px rgba(23, 96, 160, 0.89);
}
.bg_color1{
    background-color: #4b9ce4;
}
.bg_color2{
    background-color: #328ba7;
}
.bg_color3{
    background-color: #13d269;
}
.bg_color4{
    background-color: #d83ad0;
}
.bg_color5{
    background-color: #3d8368;
}
.bg_color6{
    background-color: #1760a0;
}
.number_size{
    font-size: 20px;
    color: #646567;
    margin-bottom: 0 !important;
}
.user_font{
    font-size: 13px;
    color: #646567;
    margin-bottom: 0!important;
}
.m-t-10{
    margin-top: 8px;
}
/*======chartist=========*/
</style>
<style scoped lang="scss">
    /*========================easy pie chart========================*/

.easychart {
    & .chart {
        margin: 2px auto;
        position: relative;
        display: inline-block;
        text-align: center;
    }
    .circle_val {
        display: block;
        font-weight: normal;
        color: #646a6f;
        position: relative;
    }
    .percent {
        display: inline-block;
        z-index: 2;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
