webpackJsonp([4],{1029:function(e,t,a){var n=a(1030);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("2cf4e510",n,!0,{})},1030:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,'.wrapper[data-v-ef90bc98]:after,.wrapper[data-v-ef90bc98]:before{display:table;content:" "}.wrapper[data-v-ef90bc98]:after{clear:both}.wrapper[data-v-ef90bc98]{display:table;overflow-x:hidden;width:100%;max-width:100%;table-layout:fixed}.left-aside[data-v-ef90bc98],.right-aside[data-v-ef90bc98]{padding:0;display:table-cell;vertical-align:top}.right-aside[data-v-ef90bc98]{background-color:#ebf2f6!important}@media (max-width:992px){.wrapper>.right-aside[data-v-ef90bc98]{width:100vw;min-width:100vw}}',""])},1031:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1032),i=a.n(n),o=a(1036),r=a.n(o),s=a(1041),d=a.n(s),c=a(1064),l=a.n(c),p=a(1072),u=(a.n(p),a(1074)),f=(a.n(u),a(21)),m=(a.n(f),a(6));t.default={name:"layout",components:{preloader:i.a,vueadmin_header:l.a,left_side:d.a,right_side:r.a},data:function(){return{showtopbtn:!1,user_details:JSON.parse(localStorage.getItem("user_details"))}},mounted:function(){m.a.commit("check_login_details"),window.innerWidth<=992&&this.$store.commit("left_menu","close"),m.a.commit("activateLoader","start");var e=JSON.parse(localStorage.getItem("user_details"));m.a.state.menu_items=JSON.parse(localStorage.getItem("role_details"));var t="";t="master"==e.role_id&&"master"==e.company_id?"/companies/e360_super_user":"super"==e.role_id&&"super"==e.company_id?"/companies/first_company_user/"+e.id:"/companies/company_user/"+e.company_id,axios.get(m.a.state.host_url+t,{headers:{Authorization:"Bearer "+e.token,"Cache-Control":"no-cache"}}).then(function(t){m.a.commit("activateLoader","end"),1==t.data.data.length?(m.a.state.available_company=t.data.data[0],m.a.state.show_single_company=!0):(m.a.state.available_companies=t.data.data,m.a.state.show_multi_company=!0),axios.get(m.a.state.host_url+"/products",{headers:{Authorization:"Bearer "+e.token,"Cache-Control":"no-cache"}}).then(function(e){m.a.state.products=e.data.data})}).catch(function(e){m.a.commit("activateLoader","end"),m.a.commit("catch_errors",e)})},methods:{}}},1032:function(e,t,a){var n=a(18)(null,a(1035),!1,function(e){a(1033)},"data-v-524edaa0",null);e.exports=n.exports},1033:function(e,t,a){var n=a(1034);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("4a102b28",n,!0,{})},1034:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".cssload-aim[data-v-524edaa0]{position:fixed;z-index:1500;left:calc(100% - 42px);top:60px;border-radius:20px;background-color:transparent;border-width:15px;border-style:double;border-color:transparent #428bca;-webkit-animation:cssload-anim-data-v-524edaa0 .7s linear infinite;animation:cssload-anim-data-v-524edaa0 .7s linear infinite}@media screen and (max-width:560px){.cssload-aim[data-v-524edaa0]{top:106px}}@-webkit-keyframes cssload-anim-data-v-524edaa0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes cssload-anim-data-v-524edaa0{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""])},1035:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"cssload-aim"})},staticRenderFns:[]}},1036:function(e,t,a){var n=a(18)(a(1039),a(1040),!1,function(e){a(1037)},"data-v-7034ba36",null);e.exports=n.exports},1037:function(e,t,a){var n=a(1038);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("5a83ef6b",n,!0,{})},1038:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".right-aside[data-v-7034ba36]{padding:0 20px 10px;width:100%;max-width:100%;min-height:100vh}.right-aside .content-header>h1[data-v-7034ba36]{margin:2px;padding-left:13px;padding-top:12px;font-size:20px;line-height:1.5}.right-aside .content-header[data-v-7034ba36]{margin:-2px -20px 25px;height:55px;background:#f9fafb;-webkit-box-shadow:3px 1px 5px #ccc;box-shadow:3px 1px 5px #ccc}.right-aside .fade-enter-active[data-v-7034ba36],.right-aside .fade-leave-active[data-v-7034ba36]{-webkit-transition:opacity 1s;transition:opacity 1s}.right-aside .fade-enter[data-v-7034ba36],.right-aside .fade-leave-to[data-v-7034ba36]{opacity:0}",""])},1039:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"right-side",data:function(){return{formstate:{}}},methods:{},mounted:function(){this.$alert.success({duration:10,forceRender:"",message:"",transition:"",type:""})}}},1040:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"right-aside"},[a("section",{staticClass:"content-header"},[a("vue-alert",{staticStyle:{"margin-left":"0px"}}),e._v(" "),a("h1",[e._v(e._s(this.$store.state.page_title?this.$store.state.page_title:this.$route.meta.title)+"    \n            "),a("transition",{attrs:{name:"fade"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.show_alert,expression:"this.$store.state.show_alert"}],staticClass:"center col-sm-12 alert",class:this.$store.state.alert_type,staticStyle:{"margin-left":"100px"}},[e._v(e._s(this.$store.state.alert_message)+"\n            ")])])],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.show_modal_alert,expression:"this.$store.state.show_modal_alert"}],staticClass:"col-lg-4 mt-3"},[a("b-card",{staticClass:"bg-primary-card"},[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.modal4",modifiers:{modal4:!0}}],attrs:{variant:"outline-secondary"}},[e._v("Launch small modal")]),e._v(" "),a("b-modal",{attrs:{id:"modal4",title:"Small Modal",size:"sm"}},[a("h1",[e._v("modal")])])],1)],1)],1),e._v(" "),a("section",{staticClass:"content"},[e._t("default")],2)])},staticRenderFns:[]}},1041:function(e,t,a){var n=a(18)(a(1044),a(1063),!1,function(e){a(1042)},"data-v-8541b87a",null);e.exports=n.exports},1042:function(e,t,a){var n=a(1043);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("11fff265",n,!0,{})},1043:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".left-aside[data-v-8541b87a]{width:250px;background:#fff;background-repeat:repeat-y}.navigation[data-v-8541b87a]{padding:0}.divider[data-v-8541b87a]{margin-top:10px;list-style-type:none;border-bottom:1px solid #ececec;padding-bottom:6px}.divider span[data-v-8541b87a]{font-size:15px;font-weight:700;color:#1a5f8a;margin:20px 20px -15px}.sidebar[data-v-8541b87a]{display:block;font-size:14px;letter-spacing:1px}.content[data-v-8541b87a]{display:block;width:auto;overflow-x:hidden;padding:0 15px}.badge-success[data-v-8541b87a]{background-color:#22d69d}.badge[data-v-8541b87a]{padding:.6em .7em;border-radius:.75rem}.nav_profile[data-v-8541b87a]{border-bottom:1px solid #eee}",""])},1044:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1045),i=(a.n(n),a(6)),o=a(1059),r=a.n(o);t.default={name:"left-side",components:{vmenu:n.vmenu,vsubMenu:n.vsubMenu,vmenuItem:n.vmenuItem,profile:r.a},data:function(){return{final_permissions:[]}},mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("user_details"));if("master"==t.role_id||"super"==t.role_id)this.final_permissions=this.f_menu_items("all");else{var a=[];axios.get(i.a.state.host_url+"/roles/permissions/"+t.role_id).then(function(t){a=t.data.data,e.final_permissions=e.f_menu_items(a)})}},destroyed:function(){},methods:{f_menu_items:function(e){var t=[];"all"==e?t=["CMUs","CMSt","CMCo","CMSt","CPCR","APCR","EPCR","CMRo","CMRe","APDS","AExp","SSCo","MSCo","CSSt","MSSt","AMPa","AMEx","RFSu","AFRe","PFRe","RStk","AMIs20","FRSk20","TStk20","RStk20","CStk20"]:e.role_permissions.forEach(function(e,a){null!==e.permission&&t.push(e.permission.UI_slug)});var a=[];if(a.push({name:"Dashboard",link:"/",icon:" fa fa-home"}),t.includes("CMCo")||t.includes("CMRe")||t.includes("CMRo")||t.includes("CMUs")){a.push({name:"Admin",icon:"fa fa-server",child:[]});var n=a.length-1;t.includes("CMCo")&&a[n].child.push({name:"Company Profile",link:"/admin/company/setup"}),t.includes("CMRo")&&a[n].child.push({name:"Manage Roles",link:"/admin/roles/manage"}),t.includes("CMUs")&&a[n].child.push({name:"Manage Users",link:"/admin/users/create"}),t.includes("CMRe")&&a[n].child.push({name:"Manage Regions",link:"/admin/regions/manage"})}if(t.includes("SSCo")||t.includes("MSCo")){a.push({name:"Configuration",icon:"fa fa-cog",child:[]});var n=a.length-1;t.includes("CMSt")&&a[n].child.push({name:"Manage Stations",link:"/configuration/station/manage",icon:"fa fa-qrcode"}),a[n].child.push({name:"Tanks",link:"/configuration/tank/manage",icon:"fa fa-angle-double-right"}),a[n].child.push({name:"Pumps",link:"/configuration/pump/manage",icon:"fa fa-angle-double-right"}),a[n].child.push({name:"P to T Mapping",link:"/configuration/pump-tank/manage",icon:"fa fa-angle-double-right"})}if(t.includes("CPCR")||t.includes("APCR")||t.includes("EPCR")){a.push({name:"Fuel Pricing",icon:"fa fa-money",child:[]});n=a.length-1;t.includes("CPCR")&&a[n].child.push({name:"Request Price Change",link:"/admin/pricing/setup"}),t.includes("APCR")&&a[n].child.push({name:"Approve Price Change",link:"/admin/pricing/approve"}),t.includes("EPCR")&&a[n].child.push({name:"Execute Price Change",link:"/admin/pricing/execute"})}(t.includes("CSSt")||t.includes("MSSt"))&&(a.push({name:"Sales and Stock Management",icon:"fa fa-pencil",child:[]}),a[n=a.length-1].child.push({name:"Open Station",link:"/ss-management/open-station",icon:"fa fa-angle-double-right"}),a[n].child.push({name:"End Sales Shift",link:"/ss-management/end-shift",icon:"fa fa-angle-double-right"}),a[n].child.push({name:"Close Station",link:"/ss-management/close-station",icon:"fa fa-angle-double-right"}),t.includes("MSSt")&&a[n].child.push({name:"Modify Data",link:"/ss-management/modify",icon:"fa fa-angle-double-right"}));if(t.includes("AMIs20")||t.includes("FRSk20")||t.includes("CStk20")||t.includes("TStk20")||t.includes("RStk20")){a.push({name:"Store Management",icon:"fa fa-pencil",child:[]});n=a.length-1;t.includes("AMIs20")&&a[n].child.push({name:"Items",link:"/store-management/manage-item",icon:"fa fa-angle-double-right"}),t.includes("FRSk20")&&a[n].child.push({name:"Stock Fill/Refill",link:"/store-management/stock-refill",icon:"fa fa-angle-double-right"}),t.includes("CStk20")&&a[n].child.push({name:"Stock Count",link:"/store-management/stock-count",icon:"fa fa-angle-double-right"}),t.includes("TStk20")&&a[n].child.push({name:"Stock Transfer",link:"/store-management/stock-transfer",icon:"fa fa-angle-double-right"}),t.includes("RStk20")&&a[n].child.push({name:"Manage Stock Received",link:"/store-management/receive-stock",icon:"fa fa-angle-double-right"})}if(t.includes("AMEx")&&a.push({name:"Expense Management",icon:"fa fa-vcard",child:[{name:"Manage Expenses",link:"/exp-management/manage",icon:"fa fa-angle-double-right"}]}),t.includes("RFSu")||t.includes("AFRe")||t.includes("RStk")){a.push({name:"Fuel Supply",icon:"fa fa-truck",child:[]});n=a.length-1;t.includes("RFSu")&&a[n].child.push({name:"Request Supply",link:"/fuel-supply/request",icon:"fa fa-angle-double-right"}),t.includes("AFRe")&&a[n].child.push({name:"Update Request",link:"/fuel-supply/manage",icon:"fa fa-angle-double-right"}),t.includes("RStk")&&a[n].child.push({name:"Receive Stock",link:"/fuel-supply/receive",icon:"fa fa-truck"})}return t.includes("AMPa")&&a.push({name:"Cash Management",icon:"fa fa-money",child:[{name:"Manage Payments",link:"/cash-management/create",icon:"fa fa-angle-double-right"}]}),a}}}},1045:function(e,t,a){t.vmenu=a(1046),t.vsubMenu=a(1049),t.vmenuItem=a(1054)},1046:function(e,t,a){var n=a(18)(a(1047),a(1048),!1,null,null,null);e.exports=n.exports},1047:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={computed:{$collapseItems:function(){return this.$children.filter(function(e){return e._isCollapseItem})}},methods:{openByIndex:function(e){this.$collapseItems.forEach(function(t,a){a!==e&&(t.isActived=!1)})}},mounted:function(){var e=this;this.$on("closeall",function(t){e.openByIndex(t)})}}},1048:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{staticClass:"vuemenu navigation"},[this._t("default")],2)},staticRenderFns:[]}},1049:function(e,t,a){var n=a(18)(a(1052),a(1053),!1,function(e){a(1050)},"data-v-193aed75",null);e.exports=n.exports},1050:function(e,t,a){var n=a(1051);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("36370380",n,!0,{})},1051:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".collapse-item .submenu-header[data-v-193aed75]{cursor:pointer;color:#536973;padding:11px 10px 11px 30px}.collapse-item .submenu-header[data-v-193aed75]:hover{color:#0a3c5f}.collapse-item .submenu-header .submenu-header-title[data-v-193aed75]{vertical-align:text-bottom}.collapse-item .submenu-header .active .submenu-header-title[data-v-193aed75]{font-weight:600}.collapse-item .submenu-content[data-v-193aed75]{background-color:#f3f3f3;overflow-y:hidden;position:relative}.collapse-item .submenu-content-box[data-v-193aed75]:active{color:#000}.collapse-item .submenu_icon[data-v-193aed75]{-webkit-transition:all .3s;transition:all .3s;font-size:16px;margin-top:-2px;color:#3e6174}.collapse-item.active>.submenu-header[data-v-193aed75]{background-color:#1e6e9f;color:#fff;font-weight:500}.collapse-item.active>.submenu-header>.submenu_icon[data-v-193aed75]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.collapse-item.active>.submenu-header i[data-v-193aed75]{color:#fff!important}.leftmenu_icon[data-v-193aed75]{margin-right:6px;line-height:20px;height:22px;width:20px;text-align:center;font-size:16px;color:#536973}.leftmenu_icon:hover .submenu-header-title[data-v-193aed75],.leftmenu_icon:hover .submenu_icon[data-v-193aed75]{padding-left:50px}",""])},1052:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(21),i=a.n(n);t.default={props:{selected:Boolean,icon:String,title:{type:String,required:!0}},data:function(){return{isActived:this.selected}},computed:{index:function(){return this.$parent.$collapseItems.indexOf(this)}},created:function(){this._isCollapseItem=!0},mounted:function(){var e=this;function t(e){e.$refs.box&&(e.isActived=e.$refs.box.querySelectorAll("a.active").length>=1)}this.$store.subscribe(function(a,n){"routeChange"==a.type&&"end"==a.payload&&setTimeout(function(){t(e)},0)}),t(this)},methods:{toggle:function(){this.$parent.$emit("closeall",this.index),this.isActived=!this.isActived},cancel:function(){this.anime.pause()},before:function(e){e.removeAttribute("style")},enter:function(e,t){var a=e.scrollHeight;e.style.height=0,e.style.opacity=0,i()({targets:e,duration:377,easing:"easeOutExpo",opacity:[0,1],height:a,complete:function(){e.removeAttribute("style"),t()}})},leave:function(e,t){i()({targets:e,duration:377,easing:"easeOutExpo",opacity:[1,0],height:0})}}}},1053:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"submenu collapse-item",class:{active:e.isActived}},[a("div",{staticClass:"submenu-header touchable",attrs:{role:"tab","aria-expanded":e.selected?"true":"fase"},on:{click:e.toggle}},[a("i",{staticClass:"leftmenu_icon\n",class:e.icon}),e._v(" "),a("span",{staticClass:"submenu-header-title"},[e._v(e._s(e.title))]),e._v(" "),e._m(0)]),e._v(" "),a("transition",{attrs:{name:"collapsed-fade",css:!1},on:{"before-appear":e.before,appear:e.enter,"appear-cancel":e.cancel,"before-enter":e.before,enter:e.enter,"enter-cancel":e.cancel,leave:e.leave,"leave-cancel":e.cancel}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isActived,expression:"isActived"}],staticClass:"submenu-content"},[a("div",{ref:"box",staticClass:"submenu-content-box"},[e._t("default")],2)])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"submenu_icon float-right"},[t("i",{staticClass:"fa fa-angle-right"})])}]}},1054:function(e,t,a){var n=a(18)(a(1057),a(1058),!1,function(e){a(1055)},"data-v-44be83d9",null);e.exports=n.exports},1055:function(e,t,a){var n=a(1056);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("2ba9e16e",n,!0,{})},1056:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,"a[data-v-44be83d9]{color:#536973;position:relative;display:block;line-height:21px;padding:10px 30px}a[data-v-44be83d9]:hover{color:#0a3c5f}a.active[data-v-44be83d9]{color:#fff;background-color:#1e6e9f}a.active i[data-v-44be83d9]{color:#fff!important}.submenu-content-box .listbrdr[data-v-44be83d9]:active{color:#000}.submenu-content a[data-v-44be83d9]{padding:11px 20px 10px 45px;position:relative}.submenu-content .leftmenu_icon[data-v-44be83d9]{font-size:14px;color:inherit}.name[data-v-44be83d9]{vertical-align:text-bottom}.collapse-item .card-content .card-content-box div a[data-v-44be83d9]{padding-left:43px}.leftmenu_icon[data-v-44be83d9]{margin-right:1px;line-height:22px;height:23px;width:20px;text-align:center;font-size:16px;color:#536973}",""])},1057:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["link","icon"]}},1058:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"listbrdr"},[t("router-link",{staticClass:"menu-item",attrs:{to:this.link,exact:""}},[t("i",{staticClass:"leftmenu_icon",class:this.icon}),this._v(" "),t("span",{staticClass:"name"},[this._t("default")],2)])],1)},staticRenderFns:[]}},1059:function(e,t,a){var n=a(18)(null,a(1062),!1,function(e){a(1060)},"data-v-8b518e46",null);e.exports=n.exports},1060:function(e,t,a){var n=a(1061);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("1c4354e0",n,!0,{})},1061:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".user_section[data-v-8b518e46]{height:188px;padding:15px 20px}.user_section .img-wrapper[data-v-8b518e46]{width:100px;border-radius:50%;padding:7px;margin:auto}.user_section img[data-v-8b518e46]{width:84px;border:2px solid #ccc}.user_section p[data-v-8b518e46]{font-size:15px}.user_section .leftuser_icons .logout_padd[data-v-8b518e46]{padding:1px!important}.user_name_max[data-v-8b518e46]{text-transform:uppercase;font-weight:700;max-width:210px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;margin:0 0 -4px;padding-top:2px;padding-bottom:5px}.leftuser_icons div[data-v-8b518e46]{cursor:pointer;padding:1px 12px;font-size:18px;background-color:transparent;margin-right:3px;border-radius:50px;margin:auto;width:100%;display:inline}.leftuser_icons i[data-v-8b518e46],.user_name_max[data-v-8b518e46]{color:#536973}",""])},1062:function(e,t,a){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"user_section"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"img-wrapper"},[t("img",{staticClass:"rounded-circle",attrs:{src:a(316),alt:"user"}})]),this._v(" "),t("p",{staticClass:"mt-2 mb-1 user_name_max text-center"},[this._v(this._s(this.$store.state.user.fullname))])]),this._v(" "),this._m(0)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"leftuser_icons col-12 compact_data"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-md-3"},[t("a",{attrs:{href:"#/admin/users/profile",title:"User Profile"}},[t("i",{staticClass:"fa fa-user-o"})])]),this._v(" "),t("div",{staticClass:"col-md-3"},[t("a",{attrs:{href:"#/lockscreen",title:"Lock screen"}},[t("i",{staticClass:"fa fa-lock",attrs:{"aria-hidden":"true"}})])]),this._v(" "),t("div",{staticClass:"col-md-3 logout_padd"},[t("a",{attrs:{href:"#/login",title:"Logout"}},[t("i",{staticClass:"fa fa-sign-out"})])])])])}]}},1063:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("aside",{staticClass:"left-aside sidebar-offcanvas"},[a("section",{staticClass:"sidebar"},[a("div",{attrs:{id:"menu",role:"navigation"}},[a("div",{staticClass:"nav_profile"},[a("profile")],1),e._v(" "),a("vmenu",[e._l(e.final_permissions,function(t){return[t.title?a("li",{staticClass:"divider mt-3 "},[a("span",[e._v(e._s(t.name))])]):e._e(),e._v(" "),t.child?a("vsub-menu",{attrs:{title:t.name,icon:t.icon}},e._l(t.child,function(t){return a("vmenu-item",{key:t.name,attrs:{link:t.link,icon:t.icon}},[e._v(e._s(t.name))])})):e._e(),e._v(" "),t.link?a("vmenu-item",{attrs:{link:t.link,icon:t.icon}},[e._v(e._s(t.name)+"\n                    ")]):e._e()]})],2)],1)])])},staticRenderFns:[]}},1064:function(e,t,a){var n=a(18)(a(1069),a(1071),!1,function(e){a(1065),a(1067)},"data-v-44051e6c",null);e.exports=n.exports},1065:function(e,t,a){var n=a(1066);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("073ce3a6",n,!0,{})},1066:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".header[data-v-44051e6c]{z-index:1030}.header nav[data-v-44051e6c]{margin-bottom:0;height:50px;background:#1a5f8a;background-size:100% 100%;-webkit-box-shadow:0 0 10px #ccc;box-shadow:0 0 10px #ccc}.header .navbar-right[data-v-44051e6c]{float:right;margin-right:15px}.header .logo[data-v-44051e6c]{display:block;float:left;height:50px;line-height:41px;padding:3px 10px;text-align:center;width:250px;background:#1a5f8a}.header .logo img[data-v-44051e6c]{width:125px}.header .navbar-right .dropdown-item[data-v-44051e6c]{padding:0;width:100%;outline:none}.header .navbar-right div.dropdown>a[data-v-44051e6c]{color:#fff}.header .navbar-right div.dropdown .dropdown-menu>button[data-v-44051e6c]{padding:10px 15px}.header .navbar-right div.dropdown.notifications-menu[data-v-44051e6c]{height:50px}.header .navbar-right div.dropdown.notifications-menu .noti-icon[data-v-44051e6c]{font-size:18px}.header .navbar-right div.dropdown>a>i[data-v-44051e6c]{font-size:23px}.header .navbar-right div.dropdown>a[data-v-44051e6c]{display:block;padding:12px}.header .navbar-right div.dropdown:hover>a[data-v-44051e6c]{background-color:#ededed;color:#000}.header .navbar-right div.dropdown>a.padding-user[data-v-44051e6c]{padding-top:8px;padding-bottom:6px}.header nav .sidebar-toggle[data-v-44051e6c]{float:left;color:#fff;font-size:19px;padding-top:10px}.user_name_max[data-v-44051e6c]{display:inline-block;max-width:180px;white-space:nowrap;overflow:hidden!important;text-overflow:ellipsis;margin:0 0 -4px}.noti_msg[data-v-44051e6c]{font-size:16px;padding:10px;border:1px solid #4f90c1;border-radius:50px;margin-top:10px}.user.user-menu>button img[data-v-44051e6c]{width:35px;height:35px}@media screen and (max-width:767px){.dropdown.open .dropdown-menu[data-v-44051e6c]{position:absolute}.navbar-right>li>a[data-v-44051e6c]{padding:10px 12px}}@media (max-width:560px){body .header .logo[data-v-44051e6c],body .header nav[data-v-44051e6c]{width:100%}body .header nav .sidebar-toggle[data-v-44051e6c]{padding-left:15px}nav[data-v-44051e6c]{height:100px!important}}.notifications_badge_top[data-v-44051e6c]{margin-top:-28px;margin-left:10px;position:absolute}.notifications_badge_top span[data-v-44051e6c]{top:1px;left:2px;border-radius:50%;font-size:9px;padding:.23em .45em}.notifications-menu .dropdown-item[data-v-44051e6c]{width:100%;display:block}.dropdown-footer[data-v-44051e6c]{padding:10px!important}",""])},1067:function(e,t,a){var n=a(1068);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(5)("5c8de259",n,!0,{})},1068:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,".wrapper{margin-top:50px}@media screen and (max-width:560px){.wrapper{margin-top:100px}}.sidebar-toggle{margin-left:10px}.bell_bg button.btn-secondary{background-color:#123e59;border:none;border-radius:0;-webkit-box-shadow:none!important;box-shadow:none!important}.bell_bg button.btn-secondary:hover{background-color:#ededed!important}.bell_bg button.btn-secondary:active{color:#fff!important}.bell_bg.show button{background-color:#fff!important}.bell_bg.user_btn .dropdown-toggle{padding:7px 9px}.event_date,.tabs_cont{background-color:#fff!important}body.left-hidden aside.right-aside{margin-left:0}body.left-hidden .header.fixed-top{padding-right:0!important}",""])},1069:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(1070),i=a.n(n);t.default={name:"vueadmin_header",methods:{toggle_menu:function(){this.$store.commit("left_menu","toggle")},fullscreen:function(){i.a.enabled&&i.a.toggle()}}}},1070:function(e,t){!function(){"use strict";var t="undefined"!=typeof window&&void 0!==window.document?window.document:{},a=void 0!==e&&e.exports,n="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,i=function(){for(var e,a=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,i=a.length,o={};n<i;n++)if((e=a[n])&&e[1]in t){for(n=0;n<e.length;n++)o[a[0][n]]=e[n];return o}return!1}(),o={change:i.fullscreenchange,error:i.fullscreenerror},r={request:function(e){var a=i.requestFullscreen;e=e||t.documentElement,/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)?e[a]():e[a](n&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){t[i.exitFullscreen]()},toggle:function(e){this.isFullscreen?this.exit():this.request(e)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,a){var n=o[e];n&&t.addEventListener(n,a,!1)},off:function(e,a){var n=o[e];n&&t.removeEventListener(n,a,!1)},raw:i};i?(Object.defineProperties(r,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),a?e.exports=r:window.screenfull=r):a?e.exports=!1:window.screenfull=!1}()},1071:function(e,t,a){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header fixed-top"},[n("nav",[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{attrs:{src:a(317),alt:"logo"}})]),e._v(" "),n("div",{staticClass:"float-left"},[n("a",{staticClass:"sidebar-toggle",attrs:{href:"javascript:void(0)"},on:{click:e.toggle_menu}},[n("i",{staticClass:"fa fa-bars"})])]),e._v(" "),n("div",{staticClass:"navbar-right"},[n("div",[e.fullscreen?n("div",{staticClass:"dropdown hidden-xs-down btn-group fullscreen"},[n("a",{attrs:{href:"javascript:void(0)"},on:{click:e.fullscreen}},[n("i",{staticClass:"fa fa-arrows-alt"})])]):e._e(),e._v(" "),n("b-dropdown",{staticClass:"user user-menu bell_bg user_btn",attrs:{right:"",link:""}},[n("span",{attrs:{slot:"text"},slot:"text"},[n("p",{staticClass:"user_name_max"},[e._v(e._s(this.$store.state.user.username))])])])],1)])],1)])},staticRenderFns:[]}},1072:function(e,t,a){var n=a(1073);"string"==typeof n&&(n=[[e.i,n,""]]);var i={transform:void 0};a(7)(n,i);n.locals&&(e.exports=n.locals)},1073:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,'html{background:none repeat scroll 0 0 #fff;overflow-x:hidden;transition:all .25s ease-out;font-size:small}button,html,input,optgroup,select,textarea{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}body{background:none repeat scroll 0 0 #fff;overflow-x:hidden;transition:all .25s ease-out;font-size:small;letter-spacing:.5px;width:100%;margin:0 auto}#app,#app>div,#app div.wrapper,body{min-height:calc(100vh - 102px)}body.modal-open,body.modal-open .header{padding-right:0!important}ul{list-style:none}label{font-weight:400;font-size:14px;letter-spacing:1px}a,a:hover{text-decoration:none!important}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{vertical-align:middle}.dropdown-menu{box-shadow:0 3px 6px rgba(0,0,0,.1);z-index:2300;margin-top:0;border:none;outline:none}.submenu-content .name{vertical-align:text-top!important}.resize_vertical{resize:vertical}h4.card-header{font-size:16px}.card{margin-bottom:25px}.bg-primary-card{border:1px solid #337ab7}.bg-primary-card>.card-header{background-color:#337ab7;color:#fff}.bg-info-card{border:1px solid #4fc1e9}.bg-info-card>.card-header{background-color:#4fc1e9;color:#fff}.bg-warning-card{border:1px solid #fea115}.bg-warning-card>.card-header{background-color:#fea115;color:#fff}.bg-danger-card{border:1px solid #fd7570}.bg-danger-card>.card-header{background-color:#fd7570;color:#fff}.bg-success-card{border:1px solid #16af81}.bg-success-card>.card-header{background-color:#16af81;color:#fff}.bg-danger-card:hover,.bg-info-card:hover,.bg-primary-card:hover,.bg-success-card:hover,.bg-warning-card:hover,.card:hover{box-shadow:1px 1px 38px -8px #8e8c8e}.btn,.btn-link{cursor:pointer}@media print{#scroll,aside.left-aside,header.header,section.content-header{display:none!important}.table-responsive{display:inline-table;width:100%}}header .navbar-right .dropdown-menu{padding:0}header .navbar-right .dropdown-footer,header .navbar-right .dropdown-footer:hover,header .navbar-right .dropdownheader .nav.nav-tabs,header .navbar-right .dropdownheader:hover .nav.nav-tabs{background:#1a5f8a;color:#fff;border:1px solid #ccc}header .navbar-right .show>.btn-secondary.dropdown-toggle{background-color:#fff;color:#000;border-color:#fff}header .navbar-right .btn-link:active,header .navbar-right .btn-link:focus,header .navbar-right .btn-link:hover{text-decoration:none}header .navbar-right .btn .btn:active{border:none}header .navbar-right .btn-group>button{vertical-align:top;color:#fff}header .navbar-right .btn-group>button:hover{background-color:#ededed;color:#000}@media (max-width:560px){.notifications-menu .dropdown-menu.dropdown-menu-right{right:-123px}}.notifications-menu .dropdown-menu{width:300px}.dropdownheader .nav-tabs .nav-link{color:#fff}.dropdown-menu .nav-tabs .nav-link:focus,.dropdown-menu .nav-tabs .nav-link:hover{border-color:transparent}.dropdown-menu .nav-tabs .nav-item.show .nav-link,.dropdown-menu .nav-tabs .nav-link.active{color:#000;background-color:#eee}.nav-tabs>li>a{color:#000}.drpodowtext{color:#333;transition:.3s}.drpodowtext:hover{margin-left:12px;transition:.3s}.dropdown_content a{width:100%;display:block;padding:10px 15px}.dropdown-item img{height:50px;width:50px}.dropdown-item.active,.dropdown-item:active{color:#111;text-decoration:none;background-color:transparent}.btn-secondary.focus,.btn-secondary:focus{box-shadow:none}.dropdown-toggle:after{display:none}.ql-container .ql-editor{min-height:20em;padding-bottom:1em;max-height:25em}.nav-tabs:focus{outline:none}.full-calendar-body .dates .dates-events .events-week .events-day{min-height:100px!important}.full-calendar-header>div.header-center{font-size:18px}.ct-series-a .ct-line,.ct-series-a .ct-point{stroke:#8dcee4!important}.ct-series-b .ct-line,.ct-series-b .ct-point{stroke:#4fc1e9!important}.ct-series-c .ct-line,.ct-series-c .ct-point{stroke:#16af81!important}.ct-series-d .ct-line,.ct-series-d .ct-point{stroke:#8dcee4!important}.ct-series-a .ct-bar{stroke:#97d9ef!important}.ct-series-b .ct-bar{stroke:#4fc1e9!important}.ct-label{font-size:10px;color:#000}.ct-series-a .ct-slice-pie{fill:#7faff7!important}.ct-series-b .ct-slice-pie{fill:#6f8dd5!important}.ct-series-c .ct-slice-pie{fill:#11bca9!important}.v-chartist-container{height:300px}.ct-series-a .ct-slice-donut{stroke:#11bca9!important;stroke:#6f8dd5!important;stroke:#7faff7!important}.ct-series-c .ct-slice-donut{stroke:#11bca9!important}.ct-series-b .ct-slice-donut{stroke:#6f8dd5!important}.drp_align .dropdown-menu{left:-100%}.form_elemntsdropdown .dropdown-item{padding:10px 15px}.breadcrumb1>.breadcrumb-item+.breadcrumb-item:before{content:"\\BB"}.breadcrumb2>.breadcrumb-item+.breadcrumb-item:before{content:"\\203A"!important}.breadcrumb3>.breadcrumb-item+.breadcrumb-item:before{content:"\\2013   "}.vdp-datepicker input,.vdp-datepicker select{padding:.75em .5em;font-size:100%;border:1px solid #dcdccc;width:100%}@media (max-width:768px){.vdp-datepicker__calendar{width:100%!important}}.pull-right{float:right}.car-header:first-child{border:none!important}.form-control{transition:initial}',""])},1074:function(e,t,a){var n=a(1075);"string"==typeof n&&(n=[[e.i,n,""]]);var i={transform:void 0};a(7)(n,i);n.locals&&(e.exports=n.locals)},1075:function(e,t,a){(e.exports=a(2)(!1)).push([e.i,"aside.left-aside{position:fixed;top:50px;left:0;max-height:100%;height:calc(100% - 50px);overflow-y:auto}@media screen and (max-width:560px){aside.left-aside{top:100px;height:calc(100% - 100px)}}aside.right-aside{display:block!important;width:auto!important;margin-left:250px}body.left-hidden aside.right-aside{margin-left:0}",""])},1076:function(e,t){e.exports={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"content-header"}},[this._v(".")]),this._v(" "),t("v-dialog"),this._v(" "),t("preloader",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.preloader,expression:"this.$store.state.preloader"}]}),this._v(" "),t("vueadmin_header"),this._v(" "),t("div",{staticClass:"wrapper row-offcanvas"},[t("left_side",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.left_open,expression:"this.$store.state.left_open"}]}),this._v(" "),t("right_side",[t("router-view")],1)],1)],1)},staticRenderFns:[]}},1144:function(e,t,a){var n=a(18)(a(1031),a(1076),!1,function(e){a(1029)},"data-v-ef90bc98",null);e.exports=n.exports},316:function(e,t){e.exports="/images/user.jpg?4654b410ebe5facf35599d04fbe33621"},317:function(e,t){e.exports="/images/logo_black.png?bdcfac9ddc18a607802102b4c6692f5a"}});