webpackJsonp([44],{1660:function(t,e,a){var s=a(1661);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(73)("0deb5e84",s,!0,{})},1661:function(t,e,a){var s=a(185);(t.exports=a(38)(!1)).push([t.i,".login-content[data-v-6e78225a]{margin-top:7%;margin-bottom:7%;-webkit-box-shadow:0 0 20px #ccc;box-shadow:0 0 20px #ccc;background-size:100% 100%;border-radius:7px}.img_backgrond[data-v-6e78225a]{background-image:url("+s(a(576))+");background-size:cover;background-repeat:no-repeat;width:100%;padding:75px 15px}label[data-v-6e78225a]{font-size:14px!important}[data-v-6e78225a]::-webkit-input-placeholder{font-size:14px}",""])},1662:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(39),o=a.n(s),i=a(547),n=a.n(i),r=a(548),u=a.n(r),l=a(549);a(74);o.a.use(u.a),o.a.use(n.a,l.a),e.default={name:"login2",data:function(){return{formstate:{},user:{email:"",password:""},show_error:!1,show_success:!1,success_message:"",error_message:"",message:"",localStorge:{},login_submit:"LOGIN"}},methods:{onSubmit:function(){var t=this;if(this.show_error=!1,this.show_success=!1,!this.formstate.$invalid){console.log(JSON.stringify(this.user)),this.login_submit="Logging In...";var e=this.$store.state.host_url;axios.post(e+"/auth",JSON.stringify(this.user),{headers:{"Content-type":"application/json"}}).then(function(e){var a=e.data;if(!0===a.status){t.login_submit="LOGIN";var s=a.data;localStorage.setItem("user_details",JSON.stringify(s)),t.$store.state.user=a.data,0==s.is_company_set_up?t.$router.push("/#/admin/company/setup"):1==s.is_company_set_up?t.$router.push("/"):0==s.is_password_reset?window.location.href="/#/index?company_user=true":1==s.is_password_reset&&t.$router.push("/#/index?company_user=true")}}).catch(function(e){!1===e.status&&(t.login_submit="LOGIN",t.show_error=!0,console.log("reset password!"),t.message=e.message),t.show_error=!0,t.error_message=e.response.data.message,t.login_submit="LOGIN"})}}},mounted:function(){localStorage.setItem("user_details",null),localStorage.setItem("company_details",null),(this.$route.params.message="token_expired")&&(this.show_error=!0,this.error_message="session expired, please re-login")},destroyed:function(){}}},1663:function(t,e,a){var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 mt-3"},[e("h2",{staticClass:"text-center"},[e("img",{attrs:{src:a(569),alt:"Logo"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row mt-2"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"text-center"},[e("img",{staticClass:"rounded-circle",attrs:{src:a(1664)}})])])])}];t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid img_backgrond"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.show_error?a("div",{staticClass:"center alert alert-danger"},[t._v("\n                    "+t._s(this.error_message)+"\n\n                ")]):t._e(),t._v(" "),t.show_success?a("div",{staticClass:"center alert alert-success"},[t._v("\n                    "+t._s(this.success_message)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12 mt-3 "},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"email"}},[t._v(" E-mail/Phone number")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{name:"email",id:"email",type:"email",required:"",autofocus:"",placeholder:"E-mail"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("label",{attrs:{for:"password"}},[t._v(" Password")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{name:"password",id:"password",type:"password",required:"",placeholder:"Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"password",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Password is required")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6"},[a("validate",{attrs:{tag:"label"}},[a("b-form-checkbox",{attrs:{id:"remember"},model:{value:t.user.remember,callback:function(e){t.$set(t.user,"remember",e)},expression:"user.remember"}},[t._v("Remember Me")]),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"remember",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"check-box"},slot:"check-box"},[t._v("Terms must be accepted")])])],1)],1),t._v(" "),a("div",{staticClass:"col-lg-6 col-md-6 text-right"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-success",attrs:{type:"submit"},domProps:{value:t.login_submit}})])]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"col-sm-12 text-center"},[a("div",{staticClass:"form-group"},[a("p",[a("router-link",{attrs:{tag:"a",to:"/forgotpassword"}},[t._v("Forgot Your Password ?")])],1),t._v(" "),a("router-link",{staticClass:"btn btn-primary btn-block ",attrs:{tag:"a",to:"/register"}},[t._v("New User? Sign Up Now\n                            ")])],1)])])])],1)])])},staticRenderFns:s}},1664:function(t,e){t.exports="/images/login_user-01.png?1329865b7a5c21ca88e44b58b5a873b3"},1779:function(t,e,a){var s=a(184)(a(1662),a(1663),!1,function(t){a(1660)},"data-v-6e78225a",null);t.exports=s.exports},547:function(t,e,a){(function(e){var a;a=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,a=/^(http\:\/\/|https\:\/\/)(.{4,})$/,s=function(e,a,s){return t.test(e)};s._allowNulls=!0;var o=function(t,e,a){return!isNaN(t)};o._allowNulls=!0;var i=function(t,e,s){return a.test(t)};i._allowNulls=!0;var n={validators:{email:s,number:o,url:i,required:function(t,e,a){return!1===e||(0===t||(!(!(a.data.attrs&&void 0!==a.data.attrs.bool||a.componentOptions&&a.componentOptions.propsData&&void 0!==a.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"vueForm",formTag:"form",messagesComponent:"fieldMessages",messagesTag:"div",showMessages:"",validateComponent:"validate",validateTag:"div",fieldComponent:"field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,e){for(var a=0;a<e.length;a++){var s=e[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}return function(e,a,s){return a&&t(e.prototype,a),s&&t(e,s),e}}(),l=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t,e){var a;return l(a={},t.dirty,e.$dirty),l(a,t.pristine,e.$pristine),l(a,t.valid,e.$valid),l(a,t.invalid,e.$invalid),l(a,t.touched,e.$touched),l(a,t.untouched,e.$untouched),l(a,t.focused,e.$focused),l(a,t.pending,e.$pending),l(a,t.submitted,e.$submitted),a}function f(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function m(t,e){var a={vModel:[],label:null,messages:null};if(!t)return a;return function t(s){for(var o=0;o<s.length;o++){var i=s[o];i.componentOptions&&i.componentOptions.tag===h(e.messagesComponent)&&(a.messages=i),"label"!==i.tag||a.label||(a.label=i),i.data&&(i.data.model?a.vModel.push(i):i.data.directives&&i.data.directives.filter(function(t){return"model"===t.name}).length&&a.vModel.push(i)),i.children?t(i.children):i.componentOptions&&i.componentOptions.children&&t(i.componentOptions.children)}}(t),a}function v(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var p=/([^-])([A-Z])/g;function h(t){return t.replace(p,"$1-$2").replace(p,"$1-$2").toLowerCase()}function g(){return Math.random().toString(36).substr(2,10)}var b="VueFormProviderConfig"+g(),_="VueFormProviderState"+g(),$="VueFormProviderParentForm"+g(),y=Object.prototype.hasOwnProperty,w=Object.prototype.toString,C=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===w.call(t)},O=function(t){if(!t||"[object Object]"!==w.call(t))return!1;var e,a=y.call(t,"constructor"),s=t.constructor&&t.constructor.prototype&&y.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!a&&!s)return!1;for(e in t);return void 0===e||y.call(t,e)},x=function t(){var e,a,s,o,i,n,r=arguments[0],u=1,l=arguments.length,d=!1;for("boolean"==typeof r&&(d=r,r=arguments[1]||{},u=2),(null==r||"object"!=typeof r&&"function"!=typeof r)&&(r={});u<l;++u)if(null!=(e=arguments[u]))for(a in e)s=r[a],r!==(o=e[a])&&(d&&o&&(O(o)||(i=C(o)))?(i?(i=!1,n=s&&C(s)?s:[]):n=s&&O(s)?s:{},r[a]=t(d,n,o)):void 0!==o&&(r[a]=o));return r},F={render:function(t){var e=this;return t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:{novalidate:""}},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:b},provide:function(){var t;return l(t={},_,this.state),l(t,$,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},a=this.state,s={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(a));delete e.$submittedState,Object.keys(e).forEach(function(a){t.$set(t.state.$submittedState,a,e[a])})},_addControl:function(s){e[s.$name]=s,t.$set(a,s.$name,s)},_removeControl:function(a){delete e[a.$name],t.$delete(t.state,a.$name),t.$delete(t.state.$error,a.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){a.$submitted=!1,a.$pending=!1,a.$submittedState={},Object.keys(e).forEach(function(t){var a=e[t];a._hasFocused=!1,a._setUntouched(),a._setPristine(),a.$submitted=!1,a.$pending=!1})}};Object.keys(s).forEach(function(e){t.$set(t.state,e,s[e])}),this.$watch("state",function(){var s=!1,o=!0,i=!1,n=!1,r=!1;Object.keys(e).forEach(function(u){var l=e[u];l.$submitted=a.$submitted,l.$dirty&&(s=!0),l.$touched&&(i=!0),l.$focused&&(n=!0),l.$pending&&(r=!0),l.$valid?t.$delete(a.$error,l.$name):(o=!1,t.$set(a.$error,l.$name,l))}),a.$dirty=s,a.$pristine=!s,a.$touched=i,a.$untouched=!i,a.$focused=n,a.$valid=o,a.$invalid=!o,a.$pending=r},{deep:!0,immediate:!0})}},computed:{className:function(){return c(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},S="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var j,k=(function(t){(function(){var e={}.hasOwnProperty,a=[].slice;t.exports=function(t,s){var o,i,n,r;for(o in i=[],r=[],s)e.call(s,o)&&(n=s[o],"this"!==o&&(i.push(o),r.push(n)));return Function.apply(null,a.call(i).concat(["return eval("+JSON.stringify(t)+")"])).apply(s.this,r)}}).call(S)}(j={exports:{}},j.exports),j.exports);function N(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return N(t[e].children)}}var E={inject:{vueFormConfig:b,vueFormState:_,vueFormParentForm:$},render:function(t){var e=this,a=[],s=this.formstate[this.fieldname];if(s&&s.$error&&this.isShown&&(Object.keys(s.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var o=e.$slots[t]||e.$scopedSlots[t](s);if(e.autoLabel){var i=N(o);i&&(i.data=i.data||{},i.data.attrs=i.data.attrs||{},i.data.attrs.for=s._id)}a.push(o)}}),!a.length&&s.$valid&&(this.$slots.default||this.$scopedSlots.default))){var o=this.$slots.default||this.$scopedSlots.default(s);if(this.autoLabel){var i=N(o);i&&(i.data=i.data||{},i.data.attrs=i.data.attrs||{},i.data.attrs.for=s._id)}a.push(o)}return t(this.tag||this.vueFormConfig.messagesTag,a)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||k(e,t)}}},P={render:function(t){var e=this,a=m(this.$slots.default,this.vueFormConfig),s=a.vModel,o={for:null};if(s.length){if(this.name=v(s[0]),a.messages&&this.$nextTick(function(){var t=a.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var i=s[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=i,s[0].data.attrs.id=i,a.label?(a.label.data=a.label.data||{},a.label.data.attrs=a.label.data.attrs||{},a.label.data.attrs.for=i):"label"===this.tag&&(o.for=i)}s.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:o},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:b,vueFormState:_,vueFormParentForm:$},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,a){return e[t.invalid+"-"+h(a)]=!0,e},c(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(a,s){for(var o,i=void 0,n=function(t,e){s&&Object.keys(s).filter(function(t){return s[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),i=[],Object.keys(a).filter(function(t){return a[t]}).forEach(function(t){i.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},r=0;o=e[r++];)n(0,o);t.fieldstate._className=i},{deep:!0,immediate:!0})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,a=[],s=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},_className:null,_id:"vf"+g(),_setValidatorVadility:function(t,a){a?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var o=this;t?s=t:t=s,this.$pending=!0;var i=!0,n=f(t.data);n;var r={promises:[],names:[]};a.push(r);var u=t.data.attrs||{},l=t.componentInstance;l&&l._vfValidationData_&&(u=x({},u,l._vfValidationData_));var d=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(a){if((""===n||void 0===n||null===n)&&"required"!==a)return o._setValidatorVadility(a,!0),void!0;var s=void 0!==u[a]?u[a]:d[a],l="function"==typeof o._validators[a];if(!l||null!==s&&void 0!==s||o._validators[a]._allowNulls){var c=l?o._validators[a](n,s,t):e.custom[a];"boolean"==typeof c?c?o._setValidatorVadility(a,!0):(i=!1,o._setValidatorVadility(a,!1)):(r.promises.push(c),r.names.push(a),e.vueFormParentForm.promises.push(c))}}),r.promises.length?e.vueFormConfig.Promise.all(r.promises).then(function(t){r===a[a.length-1]&&(a=[],t.forEach(function(t,e){var a=r.names[e];t?o._setValidatorVadility(a,!0):(i=!1,o._setValidatorVadility(a,!1))}),o._setValidity(i),o.$pending=!1)}):(this._setValidity(i),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,a){var s,o,i,n;a&&(s=e,o=a,i="",n="",Object.keys(s).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return i+=s[t]}),Object.keys(o).sort().filter(function(t){return"function"!=typeof s[t]}).forEach(function(t){return n+=o[t]}),i!==n&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},L={inject:{vueFormConfig:b},render:function(t){var e=m(this.$slots.default,this.vueFormConfig),a=e.vModel,s={for:null};if(a.length&&this.autoLabel){var o=a[0].data.attrs&&a[0].data.attrs.id||"vf"+g();a[0].data.attrs.id=o,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=o):"label"===this.tag&&(s.for=o)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:s},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},D={};function V(t,e,a){Object.keys(t).forEach(function(s){var o="type"===s?t[s].toLowerCase():s.toLowerCase();e[o]&&!a[o]&&(a[o]=e[o])})}var T={name:"vue-form-validator",bind:function(t,e,a){var s=e.value.fieldstate,o=e.value.config.validators,i=a.data.attrs||{};if(v(a)){var n,r,u,l;i.debounce&&(D[s._id]=(n=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},r=i.debounce,function(){var t=this,e=arguments,a=u&&!l;clearTimeout(l),l=setTimeout(function(){l=null,u||n.apply(t,e)},r),a&&n.apply(t,e)})),V(i,o,s._validators),a.componentOptions&&a.componentOptions.propsData&&V(a.componentOptions.propsData,o,s._validators),s._validate(a),t.addEventListener("blur",function(){s._setFocused(!1)},!1),t.addEventListener("focus",function(){s._setFocused(!0)},!1);var d=a.componentInstance;d&&(d.$on("blur",function(){s._setFocused(!1)}),d.$on("focus",function(){s._setFocused(!0)}),t.addEventListener("focusout",function(){s._setFocused(!1)},!1),t.addEventListener("focusin",function(){s._setFocused(!0)},!1),d.$on("vf:validate",function(t){d._vfValidationData_||V(t,o,s._validators),d._vfValidationData_=t,s._validate(d.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,a,s){var o=function(t,e,a){var s=!1,o=t.data.attrs||{},i=e.data.attrs||{},n={};if(f(t.data)!==f(e.data)&&(n.vModel=!0,s=!0),Object.keys(a).forEach(function(t){o[t]!==i[t]&&(n[t]=!0,s=!0)}),t.componentOptions&&t.componentOptions.propsData){var r=t.componentOptions.propsData,u=e.componentOptions.propsData;Object.keys(a).forEach(function(t){r[t]!==u[t]&&(n[t]=!0,s=!0)})}if(s)return n}(a,s,e.value.config.validators),i=e.value.fieldstate,n=a.data.attrs||{},r=a.componentInstance;r&&r._vfValidationData_&&(n=x({},n,r[r._vfValidationData_])),-1===a.elm.className.indexOf(i._className[0])&&(a.elm.className=a.elm.className+" "+i._className.join(" ")),o&&(o.vModel?n.debounce?(i.$pending=!0,D[i._id](i,a)):(i._hasFocused&&i._setDirty(),i._validate(a)):i._validate(a))}};function q(t){var e,a=x(!0,{},n,t);this.provide=function(){return l({},b,a)},this.components=(l(e={},a.formComponent,F),l(e,a.messagesComponent,E),l(e,a.validateComponent,P),l(e,a.fieldComponent,L),e),this.directives={vueFormValidator:T}}var M=function(t){function e(){return r(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,q),u(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return q.call(M),M.options=new M,M},t.exports=a()}).call(e,a(21))},548:function(t,e,a){var s;s=function(){return function(t){var e={};function a(s){if(e[s])return e[s].exports;var o=e[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}return a.m=t,a.c=e,a.p="",a(0)}([function(t,e,a){var s=a(1);t.exports={install:function(t,e){e=e||{name:"smoothscroll"},t.directive(e.name,{inserted:function(t,e){s(t,e.value.duration,e.value.callback,e.value.context)}}),Object.defineProperty(t.prototype,"$SmoothScroll",{get:function(){return s}})}}},function(t,e,a){var s,o;!function(i,n){"use strict";void 0===(o="function"==typeof(s=n)?s.call(e,a,e,t):s)||(t.exports=o)}(0,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var t=function(t,e,a,s){return a>s?e:t+(e-t)*((o=a/s)<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1);var o},e=function(e,a,s,o){a=a||500;var i=(o=o||window).scrollTop||window.pageYOffset;if("number"==typeof e)var n=parseInt(e);else n=function(t,e){return"HTML"===t.nodeName?-e:t.getBoundingClientRect().top+e}(e,i);var r=Date.now(),u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},l=function(){var d=Date.now()-r;o!==window?o.scrollTop=t(i,n,d,a):window.scroll(0,t(i,n,d,a)),d>a?"function"==typeof s&&s(e):u(l)};l()},a=function(t){t.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var a=document.getElementById(this.hash.substring(1));a&&e(a,500,function(t){location.replace("#"+t.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var t,e=document.querySelectorAll('a[href^="#"]:not([href="#"])'),s=e.length;t=e[--s];)t.addEventListener("click",a,!1)}),e}})}])},t.exports=s()},549:function(t,e,a){"use strict";e.a={validators:{checkbox:function(t,e,a){return t},sameas:function(t,e,a){return t==e}}}},569:function(t,e){t.exports="/images/logo_black.png?bdcfac9ddc18a607802102b4c6692f5a"},576:function(t,e){t.exports="/images/Login-03-01.png?a49e5729cfa038ae5bdb04a917eeed17"}});