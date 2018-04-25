 <template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-aside sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar-->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <profile></profile>
                </div>
                <vmenu>
                    <template v-for="item in final_permissions">
                        <li class="divider mt-3 " v-if="item.title">
                            <span>{{item.name}}</span>
                        </li>
                        <vsub-menu v-if="item.child" :title="item.name" :icon="item.icon">
                            <vmenu-item v-for="child in item.child" :link="child.link" :icon="child.icon" :key="child.name">{{child.name}}</vmenu-item>
                        </vsub-menu>
                        <vmenu-item v-if="item.link" :link="item.link" :icon="item.icon">{{ item.name}}
                        </vmenu-item>
                    </template>
                </vmenu>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
import {
    vmenu,
    vmenuItem,
    vsubMenu
} from './menu';
import store from 'src/store/store.js';
import profile from "../left-profile/user_profile2.vue"
export default {
    name: "left-side",
    components: {
        vmenu,
        vsubMenu,
        vmenuItem,
        profile
    },
    data() {
        return {
            final_permissions: [],
        }
    },
   
    mounted: function() {
        let user_data = JSON.parse(localStorage.getItem('user_details'));
        console.log(user_data.role_id);
        if(user_data.role_id == 'master' || user_data.role_id == 'super'){
            this.final_permissions= this.f_menu_items("all");
        }else{
            var r_p_array=[];
            var permissions= [];
            console.log( "i did tis "  +user_data.role_id);
            axios.get(store.state.host_url+'/roles/permissions/'+user_data.role_id).then( response => {
                  r_p_array = response.data.data;  
                this.final_permissions= this.f_menu_items(r_p_array);               
                      });
                        
                    }
    },
    destroyed: function() {

    },
     methods: {
     f_menu_items(r_p_array){
    var permissions =[];

        if ( r_p_array == "all" ){
        permissions = [ "CMUs","CMSt","CMCo","CMSt", "CPCR", "APCR","CMRo","APDS",
                        "AExp","SSCo","MSCo","CSSt","MSSt","AMPa", "AMEx",
                        "RFSu","AFRe","PFRe","RStk", "AMIs20", "FRSk20", "TStk20"
                        ,"RStk20","CStk20"];
        }
        else
        {   ///company user
        //  var r_p_array = [];
        //  r_p_array = JSON.parse(localStorage.getItem('role_details'));  
            r_p_array.role_permissions.forEach((item, index) => {
                console.log(item); 
                if(item.permission !== null){
                permissions.push(item.permission.UI_slug);
                }
            });
            console.log(permissions);
        }

       let menu_items=[];
       
        
        menu_items.push({
                    name: 'Dashboard',
                    link: '/',
                    icon: ' fa fa-home'
                });
       if(permissions.includes('CMCo') || permissions.includes('CMSt') || 
       permissions.includes('CMRo') || permissions.includes('CMUs') ||
       permissions.includes('APCR') || permissions.includes('CPCR')){
       menu_items.push(
                {name: 'Admin',
                icon: 'fa fa-server',
                child: [],
                    });
                    }
            var current_index = menu_items.length-1;    
                if(permissions.includes('CMCo')){
                menu_items[current_index].child.push({
                    name: 'Company Profile',
                    link: '/admin/company/setup',
                    icon: 'fa fa-registered'
                });}
               
                if(permissions.includes('CMRo')){
                        menu_items[current_index].child.push({
                        name: 'Manage Roles',
                        link: '/admin/roles/manage',
                        icon: 'fa fa-angle-double-right'
                    });}
                if(permissions.includes('CMUs')){
                        menu_items[current_index].child.push({
                            name: 'Users',
                            link: '/admin/users/create',
                            icon: 'fa fa-user-plus'
                        });}
                
                if(permissions.includes('CPCR')){
                        menu_items[current_index].child.push({
                            name: 'Request Product Price',
                            link: '/admin/pricing/setup',
                            icon: 'fa fa-angle-double-right'
                        });}
                if(permissions.includes('APCR')){
                        menu_items[current_index].child.push({
                            name: 'Approve Product Price',
                            link: '/admin/pricing/approve',
                            icon: 'fa fa-angle-double-right'
                        });}

        ///configuration
        if(permissions.includes('SSCo') || permissions.includes('MSCo')){
        menu_items.push({ name: 'Configuration',
                        icon: 'fa fa-cog',
                        child: [],
                            });
                        var current_index = menu_items.length-1;    
                        //console.log(menu_items);   
                         if(permissions.includes('CMSt')){
                    menu_items[current_index].child.push({
                        name: 'Manage Stations',
                        link: '/configuration/station/manage',
                        icon: 'fa fa-qrcode'
                    });}      
                        menu_items[current_index].child.push({
                            name: 'Tanks',
                            link: '/configuration/tank/manage',
                            icon: 'fa fa-angle-double-right'
                                    });

                        menu_items[current_index].child.push({
                            name: 'Pumps',
                            link: '/configuration/pump/manage',
                            icon: 'fa fa-angle-double-right'
                        });
                        menu_items[current_index].child.push({
                            name: 'P to T Mapping',
                            link: '/configuration/pump-tank/manage',
                            icon: 'fa fa-angle-double-right'
                        });
                        }

        ///SS Mgt
        if(permissions.includes('CSSt') || permissions.includes('MSSt')){
            menu_items.push({ name: 'Sales and Stock Management',
                            icon: 'fa fa-pencil',
                            child: [],
                                });      
                            var current_index = menu_items.length-1;           
                            menu_items[current_index].child.push({
                                name: 'Open Station',
                                link: '/ss-management/open-station',
                                icon: 'fa fa-angle-double-right'
                            });
            
                            menu_items[current_index].child.push({
                                name: 'End Sales Shift',
                                link: '/ss-management/end-shift',
                                icon: 'fa fa-angle-double-right'
                            });

                            menu_items[current_index].child.push({
                                name: 'Close Station',
                                link: '/ss-management/close-station',
                                icon: 'fa fa-angle-double-right'
                            });
                            if(permissions.includes('MSSt')){
                            menu_items[current_index].child.push({
                                name: 'Modify Data',
                                link: '/ss-management/modify',
                                icon: 'fa fa-angle-double-right'
                            });
                                }
                            }
        ///Store Mng
        if( true){
            menu_items.push({ name: 'Store Management',
                            icon: 'fa fa-pencil',
                            child: [],
                                });      
                            var current_index = menu_items.length-1;  
                            if(permissions.includes("AMIs20")){         
                            menu_items[current_index].child.push({
                                name: 'Items',
                                link: '/store-management/manage-item',
                                icon: 'fa fa-angle-double-right'
                            });
                            }
                            if(permissions.includes("FRSk20")){
                            menu_items[current_index].child.push({
                                name: 'Stock Fill/Refill',
                                link: '/store-management/stock-refill',
                                icon: 'fa fa-angle-double-right'
                            });
                            }
                            if(permissions.includes("CStk20")){
                            menu_items[current_index].child.push({
                                name: 'Stock Count',
                                link: '/store-management/stock-count',
                                icon: 'fa fa-angle-double-right'
                            });
                            }
                            if(permissions.includes("TStk20")){
                            menu_items[current_index].child.push({
                                name: 'Stock Transfer',
                                link: '/store-management/stock-transfer',
                                icon: 'fa fa-angle-double-right'
                            });
                              }
                            if(permissions.includes("RStk20")){
                          menu_items[current_index].child.push({
                                name: 'Manage Stock Received',
                                link: '/store-management/receive-stock',
                                icon: 'fa fa-angle-double-right'
                            });
                            }
                            }

        ///Exp Mgt
        if(permissions.includes('AMEx')){
            menu_items.push({
                            name: 'Expenses Management',
                            icon: 'fa fa-vcard',
                            child: [{
                                name: 'Manage Expenses',
                                link: '/exp-management/manage',
                                icon: 'fa fa-angle-double-right'
                            }]
                        }); 
                            }

        ///Fuel Supply Mgt
        if(permissions.includes('RFSu') || permissions.includes('AFRe') || permissions.includes('RStk')){
            menu_items.push({ name: 'Fuel Supply',
                            icon: 'fa fa-truck',
                            child: [],
                                });      
                            var current_index = menu_items.length-1;  

                            if(permissions.includes('RFSu')){         
                            menu_items[current_index].child.push({
                                name: 'Request Supply',
                                link: '/fuel-supply/request',
                                icon: 'fa fa-angle-double-right'
                            });}

                            if(permissions.includes('AFRe')){
                            menu_items[current_index].child.push({
                                name: 'Update Request',
                                link: '/fuel-supply/manage',
                                icon: 'fa fa-angle-double-right'
                            });}

                            if(permissions.includes('RStk')){
                            menu_items[current_index].child.push({
                                name: 'Receive Stock',
                                link: '/fuel-supply/receive',
                                icon: 'fa fa-truck'
                            });}

                            }

        ///Exp Mgt
        if(permissions.includes('AMPa')){
            menu_items.push({
                    name: 'Cash Management',
                    icon: 'fa fa-money',
                    child: [{
                        name: 'Manage Payments',
                        link: '/cash-management/create',
                        icon: 'fa fa-angle-double-right'
                    }]
                    }); 
                            }
        //console.log(menu_items);
        return menu_items;
        }
  },
}
</script>
<style scoped lang="scss">
@import "../../css/customvariables";
.left-aside {
    width: $left_menu_width;
    background: $leftmenu_color;
    background-repeat: repeat-y;
}

.navigation {
    padding: 0;
}

.divider {
    margin-top: 10px;
    list-style-type: none;
    border-bottom:1px solid #ececec;
    padding-bottom: 6px;
}

.divider span {
    font-size: 15px;
    font-weight: 700;
    color: $divider-leftheader;
    margin: 20px 20px -15px 20px;
}

.sidebar {
    display: block;
    font-size: 14px;
    letter-spacing: 1px;
}

.content {
    display: block;
    width: auto;
    overflow-x: hidden;
    padding: 0 15px;
}

.badge-success {
    background-color: #22d69d;
}

.badge {
    padding: 0.60em 0.7em;
    border-radius: 0.75rem;
}
.nav_profile{
    border-bottom:1px solid #eee;
}
</style>
