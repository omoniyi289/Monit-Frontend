webpackJsonp([58],{1220:function(t,e,a){var s=a(1221);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(73)("34cf8372",s,!0,{})},1221:function(t,e,a){(t.exports=a(38)(!1)).push([t.i,".dropzone_wrapper[data-v-3463f4f4]{width:100%}[data-v-3463f4f4].quill-editor .ql-tooltip.ql-editing{z-index:99}",""])},1222:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(39),o=a.n(s),i=a(74),n=a(547),r=a.n(n),l=a(548),d=a.n(l),c=a(549);o.a.use(d.a),o.a.use(r.a,c.a),e.default={name:"edit_user",data:function(){return{formstate:{},csu_company:"",is_change_password:!1,csu_stations:[],cru_company:"",cru_stations:[],myrole:"",company_stations:[],available_companies:[],is_company_regular_user:!1,is_company_super_user:!1,is_e360_super_user:!1,preset:{company_id:0,station_id:0},model:{username:"",email:"",fullname:"",phone_number:"",password:"",repeatPassword:"",currentpassword:"",address:"hyd ",city:"Hyderabad"},old_file:""}},methods:{onSubmit:function(){var t=this;if(this.$SmoothScroll(document.getElementById("content-header")),!this.formstate.$invalid){console.log(this.model);var e="",a="",s=JSON.parse(localStorage.getItem("user_details"));void 0==this.model.is_verified?(e="/company_users/profile/",a={company_user:this.model}):(e="/users/profile/",a={user:this.model}),axios.patch(i.a.state.host_url+e+this.model.id,a,{headers:{Authorization:"Bearer "+s.token}}).then(function(e){if(i.a.commit("activateLoader","end"),console.log(e),!0===e.data.status){var a="";void 0!==t.model.password&&(a=", password changed"),t.$alert.success({duration:5e3,forceRender:"",message:"Account Updated Successfully"+a,transition:""}),localStorage.setItem("user_details",JSON.stringify(t.model))}}).catch(function(t){i.a.commit("activateLoader","end"),i.a.commit("catch_errors",t)})}},show_available_companies:function(){var t=this;i.a.commit("activateLoader","start");var e=JSON.parse(localStorage.getItem("user_details"));i.a.state.menu_items=JSON.parse(localStorage.getItem("role_details"));var a="";void 0!==e.is_verified&&2==e.is_verified?(this.myrole="e360 Super User",a="/companies/e360_super_user",axios.get(i.a.state.host_url+a,{headers:{Authorization:"Bearer "+e.token}}).then(function(a){i.a.commit("activateLoader","end"),t.available_companies=a.data.data,t.is_e360_super_user=!0,axios.get(t.$store.state.host_url+"/stations",{headers:{Authorization:"Bearer "+e.token}}).then(function(e){i.a.commit("activateLoader","end"),t.company_stations=e.data.data})}).catch(function(t){i.a.commit("activateLoader","end"),i.a.commit("catch_errors",t)})):void 0!==e.is_company_set_up&&1==e.is_company_set_up?(this.myrole="Super User",a="/companies/first_company_user/"+e.id,axios.get(i.a.state.host_url+a,{headers:{Authorization:"Bearer "+e.token}}).then(function(a){i.a.commit("activateLoader","end"),t.available_companies=a.data.data,t.csu_company=a.data.data[0],t.preset.company_id=t.csu_company.id,t.is_company_super_user=!0,axios.get(t.$store.state.host_url+"/stations/by_company/"+t.csu_company.id,{headers:{Authorization:"Bearer "+e.token}}).then(function(e){i.a.commit("activateLoader","end"),t.csu_stations=e.data.data})}).catch(function(t){i.a.commit("activateLoader","end"),i.a.commit("catch_errors",t)})):void 0!==e.company_id&&(a="/companies/company_user/"+e.company_id,axios.get(i.a.state.host_url+a,{headers:{Authorization:"Bearer "+e.token}}).then(function(a){i.a.commit("activateLoader","end"),t.cru_company=a.data.data[0],t.is_company_regular_user=!0,t.preset.company_id=e.company_id,axios.get(t.$store.state.host_url+"/stations/by_user/"+e.id,{headers:{Authorization:"Bearer "+e.token}}).then(function(a){i.a.commit("activateLoader","end"),a.data.data.forEach(function(e,a){console.log(e),t.cru_stations.push(e.station)}),axios.get(t.$store.state.host_url+"/company_users/"+e.id,{headers:{Authorization:"Bearer "+e.token}}).then(function(e){t.myrole=e.data.data.role.name})})}).catch(function(t){i.a.commit("activateLoader","end"),i.a.commit("catch_errors",t)}))}},mounted:function(){var t=JSON.parse(localStorage.getItem("user_details"));this.model=t,this.model.password=void 0,this.model.currentpassword=void 0,this.model.repeatPassword=void 0,this.show_available_companies()},destroyed:function(){}}},1223:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("b-card",{staticClass:"bg-info-card",attrs:{header:" ","header-tag":"h4"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 col-4 mb-3"},[a("b-card",{staticClass:"bg-info-card"},[a("div",{staticClass:"profile_details"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"nav-tabs-custom"},[t.is_e360_super_user?a("b-tabs",[a("b-tab",{attrs:{title:"E360 Super User"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Companies :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.available_companies.length)+" \n                                                                Registered Companies\n                                                            ")]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Stations :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.company_stations.length)+"\n                                                                 Registered Stations\n                                                            ")])])])])])],1):t._e(),t._v(" "),t.is_company_super_user?a("b-tabs",[a("b-tab",{attrs:{title:"Company"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Name :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.csu_company.name))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Address :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.csu_company.address))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("City :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.csu_company.city))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Reg. No :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.csu_company.registration_number))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Email :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.csu_company.email))])])])])])],1):t._e(),t._v(" "),t.is_company_regular_user?a("b-tabs",[a("b-tab",{attrs:{title:"Company"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Name :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.cru_company.name))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Address :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.cru_company.address))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("City :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.cru_company.city))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Reg. No :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.cru_company.registration_number))]),t._v(" "),a("div",{staticClass:"col-6 text-right mt-1"},[t._v("Email :")]),t._v(" "),a("div",{staticClass:"col-6 mt-1"},[t._v(t._s(this.cru_company.email))])])])])])],1):t._e(),t._v(" "),a("b",[t._v("Role : ")]),t._v(" "),a("button",{staticClass:"btn btn-sm btn-warning"},[t._v(t._s(this.myrole))])],1)])])])]),t._v(" "),a("button",{staticClass:"btn btn-primary btn-md",on:{click:function(e){t.is_change_password=!0}}},[t._v(" CHANGE PASSWORD")])],1),t._v(" "),a("div",{staticClass:"col-lg-8 col-8 mb-3"},[a("vue-form",{staticClass:"form-horizontal",attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"name"}},[t._v(" User Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.username,expression:"model.username"}],staticClass:"form-control",attrs:{id:"name",name:"username",type:"text",required:"",autofocus:"",placeholder:"User Name"},domProps:{value:t.model.username},on:{input:function(e){e.target.composing||t.$set(t.model,"username",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"username",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Username is a required field")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"fullname"}},[t._v(" Full Name")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.fullname,expression:"model.fullname"}],staticClass:"form-control",attrs:{id:"fullname",name:"fullname",type:"text",required:"",autofocus:"",placeholder:"Full Name"},domProps:{value:t.model.fullname},on:{input:function(e){e.target.composing||t.$set(t.model,"fullname",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"fullname",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Fullname is a required field")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email"}},[t._v(" E-mail")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",required:"",placeholder:"E-mail"},domProps:{value:t.model.email},on:{input:function(e){e.target.composing||t.$set(t.model,"email",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"mobile"}},[t._v(" Mobile")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.phone_number,expression:"model.phone_number"}],staticClass:"form-control",attrs:{id:"mobile",name:"mobile",type:"text",required:"",placeholder:"Mobile Number(10 Digits)"},domProps:{value:t.model.phone_number},on:{input:function(e){e.target.composing||t.$set(t.model,"phone_number",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"mobile",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Mobile number is a required field")])])],1)],1)])]),t._v(" "),t.is_change_password?a("div",{staticClass:"col-lg-6 col-12 mt-4"},[a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"currentpassword"}},[t._v(" Current Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.currentpassword,expression:"model.currentpassword"}],staticClass:"form-control",attrs:{id:"currentpassword",name:"currentpassword",type:"password",placeholder:"Current Password"},domProps:{value:t.model.currentpassword},on:{input:function(e){e.target.composing||t.$set(t.model,"currentpassword",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"currentpassword",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Current Password is required")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"password"}},[t._v("New Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.password,expression:"model.password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"New Password",minlength:"6",maxlength:"10"},domProps:{value:t.model.password},on:{input:function(e){e.target.composing||t.$set(t.model,"password",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"password",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:""},slot:"default"},[t._v("New Password is required")]),t._v(" "),a("div",{attrs:{slot:"minlength"},slot:"minlength"},[t._v("New Password should be atleast 6 characters long")]),t._v(" "),a("div",{attrs:{slot:"maxlength"},slot:"maxlength"},[t._v("New Password should be atmost 10 characters long")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"repeatpassword"}},[t._v(" Confirm New Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.repeatPassword,expression:"model.repeatPassword"}],staticClass:"form-control",attrs:{id:"repeatpassword",name:"repeatpassword",type:"password",placeholder:"Confirm New Password",sameas:t.model.password},domProps:{value:t.model.repeatPassword},on:{input:function(e){e.target.composing||t.$set(t.model,"repeatPassword",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"repeatpassword",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:""},slot:"default"},[t._v("Confirm New password is required")]),t._v(" "),a("div",{attrs:{slot:"sameas"},slot:"sameas"},[t._v("New Password and Confirm New password should match")])])],1)],1)])]):t._e()]),t._v(" "),a("div",{staticClass:"col-md-offset-4 col-md-8 m-t-25"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit\n                            ")])])])],1)])])],1)])},staticRenderFns:[]}},1712:function(t,e,a){var s=a(184)(a(1222),a(1223),!1,function(t){a(1220)},"data-v-3463f4f4",null);t.exports=s.exports},547:function(t,e,a){(function(e){var a;a=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,a=/^(http\:\/\/|https\:\/\/)(.{4,})$/,s=function(e,a,s){return t.test(e)};s._allowNulls=!0;var o=function(t,e,a){return!isNaN(t)};o._allowNulls=!0;var i=function(t,e,s){return a.test(t)};i._allowNulls=!0;var n={validators:{email:s,number:o,url:i,required:function(t,e,a){return!1===e||(0===t||(!(!(a.data.attrs&&void 0!==a.data.attrs.bool||a.componentOptions&&a.componentOptions.propsData&&void 0!==a.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"vueForm",formTag:"form",messagesComponent:"fieldMessages",messagesTag:"div",showMessages:"",validateComponent:"validate",validateTag:"div",fieldComponent:"field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},l=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),d=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},c=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function u(t,e){var a;return d(a={},t.dirty,e.$dirty),d(a,t.pristine,e.$pristine),d(a,t.valid,e.$valid),d(a,t.invalid,e.$invalid),d(a,t.touched,e.$touched),d(a,t.untouched,e.$untouched),d(a,t.focused,e.$focused),d(a,t.pending,e.$pending),d(a,t.submitted,e.$submitted),a}function m(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function v(t,e){var a={vModel:[],label:null,messages:null};if(!t)return a;return function t(s){for(var o=0;o<s.length;o++){var i=s[o];i.componentOptions&&i.componentOptions.tag===h(e.messagesComponent)&&(a.messages=i),"label"!==i.tag||a.label||(a.label=i),i.data&&(i.data.model?a.vModel.push(i):i.data.directives&&i.data.directives.filter(function(t){return"model"===t.name}).length&&a.vModel.push(i)),i.children?t(i.children):i.componentOptions&&i.componentOptions.children&&t(i.componentOptions.children)}}(t),a}function f(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var p=/([^-])([A-Z])/g;function h(t){return t.replace(p,"$1-$2").replace(p,"$1-$2").toLowerCase()}function _(){return Math.random().toString(36).substr(2,10)}var g="VueFormProviderConfig"+_(),b="VueFormProviderState"+_(),y="VueFormProviderParentForm"+_(),$=Object.prototype.hasOwnProperty,w=Object.prototype.toString,C=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===w.call(t)},O=function(t){if(!t||"[object Object]"!==w.call(t))return!1;var e,a=$.call(t,"constructor"),s=t.constructor&&t.constructor.prototype&&$.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!a&&!s)return!1;for(e in t);return void 0===e||$.call(t,e)},x=function t(){var e,a,s,o,i,n,r=arguments[0],l=1,d=arguments.length,c=!1;for("boolean"==typeof r&&(c=r,r=arguments[1]||{},l=2),(null==r||"object"!=typeof r&&"function"!=typeof r)&&(r={});l<d;++l)if(null!=(e=arguments[l]))for(a in e)s=r[a],r!==(o=e[a])&&(c&&o&&(O(o)||(i=C(o)))?(i?(i=!1,n=s&&C(s)?s:[]):n=s&&O(s)?s:{},r[a]=t(c,n,o)):void 0!==o&&(r[a]=o));return r},N={render:function(t){var e=this;return t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:{novalidate:""}},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:g},provide:function(){var t;return d(t={},b,this.state),d(t,y,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},a=this.state,s={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(a));delete e.$submittedState,Object.keys(e).forEach(function(a){t.$set(t.state.$submittedState,a,e[a])})},_addControl:function(s){e[s.$name]=s,t.$set(a,s.$name,s)},_removeControl:function(a){delete e[a.$name],t.$delete(t.state,a.$name),t.$delete(t.state.$error,a.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){a.$submitted=!1,a.$pending=!1,a.$submittedState={},Object.keys(e).forEach(function(t){var a=e[t];a._hasFocused=!1,a._setUntouched(),a._setPristine(),a.$submitted=!1,a.$pending=!1})}};Object.keys(s).forEach(function(e){t.$set(t.state,e,s[e])}),this.$watch("state",function(){var s=!1,o=!0,i=!1,n=!1,r=!1;Object.keys(e).forEach(function(l){var d=e[l];d.$submitted=a.$submitted,d.$dirty&&(s=!0),d.$touched&&(i=!0),d.$focused&&(n=!0),d.$pending&&(r=!0),d.$valid?t.$delete(a.$error,d.$name):(o=!1,t.$set(a.$error,d.$name,d))}),a.$dirty=s,a.$pristine=!s,a.$touched=i,a.$untouched=!i,a.$focused=n,a.$valid=o,a.$invalid=!o,a.$pending=r},{deep:!0,immediate:!0})}},computed:{className:function(){return u(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},S="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var F,P=(function(t){(function(){var e={}.hasOwnProperty,a=[].slice;t.exports=function(t,s){var o,i,n,r;for(o in i=[],r=[],s)e.call(s,o)&&(n=s[o],"this"!==o&&(i.push(o),r.push(n)));return Function.apply(null,a.call(i).concat(["return eval("+JSON.stringify(t)+")"])).apply(s.this,r)}}).call(S)}(F={exports:{}},F.exports),F.exports);function j(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return j(t[e].children)}}var E={inject:{vueFormConfig:g,vueFormState:b,vueFormParentForm:y},render:function(t){var e=this,a=[],s=this.formstate[this.fieldname];if(s&&s.$error&&this.isShown&&(Object.keys(s.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var o=e.$slots[t]||e.$scopedSlots[t](s);if(e.autoLabel){var i=j(o);i&&(i.data=i.data||{},i.data.attrs=i.data.attrs||{},i.data.attrs.for=s._id)}a.push(o)}}),!a.length&&s.$valid&&(this.$slots.default||this.$scopedSlots.default))){var o=this.$slots.default||this.$scopedSlots.default(s);if(this.autoLabel){var i=j(o);i&&(i.data=i.data||{},i.data.attrs=i.data.attrs||{},i.data.attrs.for=s._id)}a.push(o)}return t(this.tag||this.vueFormConfig.messagesTag,a)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||P(e,t)}}},L={render:function(t){var e=this,a=v(this.$slots.default,this.vueFormConfig),s=a.vModel,o={for:null};if(s.length){if(this.name=f(s[0]),a.messages&&this.$nextTick(function(){var t=a.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var i=s[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=i,s[0].data.attrs.id=i,a.label?(a.label.data=a.label.data||{},a.label.data.attrs=a.label.data.attrs||{},a.label.data.attrs.for=i):"label"===this.tag&&(o.for=i)}s.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:o},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:g,vueFormState:b,vueFormParentForm:y},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,a){return e[t.invalid+"-"+h(a)]=!0,e},u(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(a,s){for(var o,i=void 0,n=function(t,e){s&&Object.keys(s).filter(function(t){return s[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),i=[],Object.keys(a).filter(function(t){return a[t]}).forEach(function(t){i.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},r=0;o=e[r++];)n(0,o);t.fieldstate._className=i},{deep:!0,immediate:!0})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,a=[],s=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},_className:null,_id:"vf"+_(),_setValidatorVadility:function(t,a){a?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var o=this;t?s=t:t=s,this.$pending=!0;var i=!0,n=m(t.data);n;var r={promises:[],names:[]};a.push(r);var l=t.data.attrs||{},d=t.componentInstance;d&&d._vfValidationData_&&(l=x({},l,d._vfValidationData_));var c=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(a){if((""===n||void 0===n||null===n)&&"required"!==a)return o._setValidatorVadility(a,!0),void!0;var s=void 0!==l[a]?l[a]:c[a],d="function"==typeof o._validators[a];if(!d||null!==s&&void 0!==s||o._validators[a]._allowNulls){var u=d?o._validators[a](n,s,t):e.custom[a];"boolean"==typeof u?u?o._setValidatorVadility(a,!0):(i=!1,o._setValidatorVadility(a,!1)):(r.promises.push(u),r.names.push(a),e.vueFormParentForm.promises.push(u))}}),r.promises.length?e.vueFormConfig.Promise.all(r.promises).then(function(t){r===a[a.length-1]&&(a=[],t.forEach(function(t,e){var a=r.names[e];t?o._setValidatorVadility(a,!0):(i=!1,o._setValidatorVadility(a,!1))}),o._setValidity(i),o.$pending=!1)}):(this._setValidity(i),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,a){var s,o,i,n;a&&(s=e,o=a,i="",n="",Object.keys(s).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return i+=s[t]}),Object.keys(o).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return n+=o[t]}),i!==n&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},k={inject:{vueFormConfig:g},render:function(t){var e=v(this.$slots.default,this.vueFormConfig),a=e.vModel,s={for:null};if(a.length&&this.autoLabel){var o=a[0].data.attrs&&a[0].data.attrs.id||"vf"+_();a[0].data.attrs.id=o,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=o):"label"===this.tag&&(s.for=o)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:s},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},q={};function D(t,e,a){Object.keys(t).forEach(function(s){var o="type"===s?t[s].toLowerCase():s.toLowerCase();e[o]&&!a[o]&&(a[o]=e[o])})}var A={name:"vue-form-validator",bind:function(t,e,a){var s=e.value.fieldstate,o=e.value.config.validators,i=a.data.attrs||{};if(f(a)){var n,r,l,d;i.debounce&&(q[s._id]=(n=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},r=i.debounce,function(){var t=this,e=arguments,a=l&&!d;clearTimeout(d),d=setTimeout(function(){d=null,l||n.apply(t,e)},r),a&&n.apply(t,e)})),D(i,o,s._validators),a.componentOptions&&a.componentOptions.propsData&&D(a.componentOptions.propsData,o,s._validators),s._validate(a),t.addEventListener("blur",function(){s._setFocused(!1)},!1),t.addEventListener("focus",function(){s._setFocused(!0)},!1);var c=a.componentInstance;c&&(c.$on("blur",function(){s._setFocused(!1)}),c.$on("focus",function(){s._setFocused(!0)}),t.addEventListener("focusout",function(){s._setFocused(!1)},!1),t.addEventListener("focusin",function(){s._setFocused(!0)},!1),c.$on("vf:validate",function(t){c._vfValidationData_||D(t,o,s._validators),c._vfValidationData_=t,s._validate(c.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,a,s){var o=function(t,e,a){var s=!1,o=t.data.attrs||{},i=e.data.attrs||{},n={};if(m(t.data)!==m(e.data)&&(n.vModel=!0,s=!0),Object.keys(a).forEach(function(t){o[t]!==i[t]&&(n[t]=!0,s=!0)}),t.componentOptions&&t.componentOptions.propsData){var r=t.componentOptions.propsData,l=e.componentOptions.propsData;Object.keys(a).forEach(function(t){r[t]!==l[t]&&(n[t]=!0,s=!0)})}if(s)return n}(a,s,e.value.config.validators),i=e.value.fieldstate,n=a.data.attrs||{},r=a.componentInstance;r&&r._vfValidationData_&&(n=x({},n,r[r._vfValidationData_])),-1===a.elm.className.indexOf(i._className[0])&&(a.elm.className=a.elm.className+" "+i._className.join(" ")),o&&(o.vModel?n.debounce?(i.$pending=!0,q[i._id](i,a)):(i._hasFocused&&i._setDirty(),i._validate(a)):i._validate(a))}};function V(t){var e,a=x(!0,{},n,t);this.provide=function(){return d({},g,a)},this.components=(d(e={},a.formComponent,N),d(e,a.messagesComponent,E),d(e,a.validateComponent,L),d(e,a.fieldComponent,k),e),this.directives={vueFormValidator:A}}var z=function(t){function e(){return r(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,V),l(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return V.call(z),z.options=new z,z},t.exports=a()}).call(e,a(21))},548:function(t,e,a){var s;s=function(){return function(t){var e={};function a(s){if(e[s])return e[s].exports;var o=e[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}return a.m=t,a.c=e,a.p="",a(0)}([function(t,e,a){var s=a(1);t.exports={install:function(t,e){e=e||{name:"smoothscroll"},t.directive(e.name,{inserted:function(t,e){s(t,e.value.duration,e.value.callback,e.value.context)}}),Object.defineProperty(t.prototype,"$SmoothScroll",{get:function(){return s}})}}},function(t,e,a){var s,o;!function(i,n){"use strict";void 0===(o="function"==typeof(s=n)?s.call(e,a,e,t):s)||(t.exports=o)}(0,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var t=function(t,e,a,s){return a>s?e:t+(e-t)*((o=a/s)<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1);var o},e=function(e,a,s,o){a=a||500;var i=(o=o||window).scrollTop||window.pageYOffset;if("number"==typeof e)var n=parseInt(e);else n=function(t,e){return"HTML"===t.nodeName?-e:t.getBoundingClientRect().top+e}(e,i);var r=Date.now(),l=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},d=function(){var c=Date.now()-r;o!==window?o.scrollTop=t(i,n,c,a):window.scroll(0,t(i,n,c,a)),c>a?"function"==typeof s&&s(e):l(d)};d()},a=function(t){t.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var a=document.getElementById(this.hash.substring(1));a&&e(a,500,function(t){location.replace("#"+t.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var t,e=document.querySelectorAll('a[href^="#"]:not([href="#"])'),s=e.length;t=e[--s];)t.addEventListener("click",a,!1)}),e}})}])},t.exports=s()},549:function(t,e,a){"use strict";e.a={validators:{checkbox:function(t,e,a){return t},sameas:function(t,e,a){return t==e}}}}});