webpackJsonp([59],{106:function(t,e,a){(function(e){var a;a=function(){"use strict";var t=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,a=/^(http\:\/\/|https\:\/\/)(.{4,})$/,n=function(e,a,n){return t.test(e)};n._allowNulls=!0;var i=function(t,e,a){return!isNaN(t)};i._allowNulls=!0;var o=function(t,e,n){return a.test(t)};o._allowNulls=!0;var s={validators:{email:n,number:i,url:o,required:function(t,e,a){return!1===e||(0===t||(!(!(a.data.attrs&&void 0!==a.data.attrs.bool||a.componentOptions&&a.componentOptions.propsData&&void 0!==a.componentOptions.propsData.bool)||!1!==t)||(Array.isArray(t)?!!t.length:!!t)))},minlength:function(t,e){return t.length>=e},maxlength:function(t,e){return e>=t.length},pattern:function(t,e){return new RegExp("^"+e+"$").test(t)},min:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+t>=+e:t>=e},max:function(t,e,a){return"number"==(a.data.attrs.type||"").toLowerCase()?+e>=+t:e>=t}},formComponent:"vueForm",formTag:"form",messagesComponent:"fieldMessages",messagesTag:"div",showMessages:"",validateComponent:"validate",validateTag:"div",fieldComponent:"field",fieldTag:"div",formClasses:{dirty:"vf-form-dirty",pristine:"vf-form-pristine",valid:"vf-form-valid",invalid:"vf-form-invalid",touched:"vf-form-touched",untouched:"vf-form-untouched",focused:"vf-form-focused",submitted:"vf-form-submitted",pending:"vf-form-pending"},validateClasses:{dirty:"vf-field-dirty",pristine:"vf-field-pristine",valid:"vf-field-valid",invalid:"vf-field-invalid",touched:"vf-field-touched",untouched:"vf-field-untouched",focused:"vf-field-focused",submitted:"vf-field-submitted",pending:"vf-field-pending"},inputClasses:{dirty:"vf-dirty",pristine:"vf-pristine",valid:"vf-valid",invalid:"vf-invalid",touched:"vf-touched",untouched:"vf-untouched",focused:"vf-focused",submitted:"vf-submitted",pending:"vf-pending"},Promise:"function"==typeof Promise?Promise:null},r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},u=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),l=function(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t},d=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e};function c(t,e){var a;return l(a={},t.dirty,e.$dirty),l(a,t.pristine,e.$pristine),l(a,t.valid,e.$valid),l(a,t.invalid,e.$invalid),l(a,t.touched,e.$touched),l(a,t.untouched,e.$untouched),l(a,t.focused,e.$focused),l(a,t.pending,e.$pending),l(a,t.submitted,e.$submitted),a}function f(t){return t.model?t.model.value:t.directives.filter(function(t){return"model"===t.name})[0].value}function m(t,e){var a={vModel:[],label:null,messages:null};if(!t)return a;return function t(n){for(var i=0;i<n.length;i++){var o=n[i];o.componentOptions&&o.componentOptions.tag===h(e.messagesComponent)&&(a.messages=o),"label"!==o.tag||a.label||(a.label=o),o.data&&(o.data.model?a.vModel.push(o):o.data.directives&&o.data.directives.filter(function(t){return"model"===t.name}).length&&a.vModel.push(o)),o.children?t(o.children):o.componentOptions&&o.componentOptions.children&&t(o.componentOptions.children)}}(t),a}function v(t){return t.data&&t.data.attrs&&t.data.attrs.name?t.data.attrs.name:t.componentOptions&&t.componentOptions.propsData&&t.componentOptions.propsData.name?t.componentOptions.propsData.name:void 0}var p=/([^-])([A-Z])/g;function h(t){return t.replace(p,"$1-$2").replace(p,"$1-$2").toLowerCase()}function g(){return Math.random().toString(36).substr(2,10)}var b="VueFormProviderConfig"+g(),_="VueFormProviderState"+g(),$="VueFormProviderParentForm"+g(),y=Object.prototype.hasOwnProperty,w=Object.prototype.toString,C=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===w.call(t)},O=function(t){if(!t||"[object Object]"!==w.call(t))return!1;var e,a=y.call(t,"constructor"),n=t.constructor&&t.constructor.prototype&&y.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!a&&!n)return!1;for(e in t);return void 0===e||y.call(t,e)},F=function t(){var e,a,n,i,o,s,r=arguments[0],u=1,l=arguments.length,d=!1;for("boolean"==typeof r&&(d=r,r=arguments[1]||{},u=2),(null==r||"object"!=typeof r&&"function"!=typeof r)&&(r={});u<l;++u)if(null!=(e=arguments[u]))for(a in e)n=r[a],r!==(i=e[a])&&(d&&i&&(O(i)||(o=C(i)))?(o?(o=!1,s=n&&C(n)?n:[]):s=n&&O(n)?n:{},r[a]=t(d,s,i)):void 0!==i&&(r[a]=i));return r},x={render:function(t){var e=this;return t(this.tag||this.vueFormConfig.formTag,{on:{submit:function(t){e.state.$pending?(t.preventDefault(),e.vueFormConfig.Promise.all(e.promises).then(function(){e.state._submit(),e.$emit("submit",t),e.promises=[]})):(e.state._submit(),e.$emit("submit",t))},reset:function(t){e.state._reset(),e.$emit("reset",t)}},class:this.className,attrs:{novalidate:""}},[this.$slots.default])},props:{state:{type:Object,required:!0},tag:String,showMessages:String},inject:{vueFormConfig:b},provide:function(){var t;return l(t={},_,this.state),l(t,$,this),t},data:function(){return{promises:[]}},created:function(){var t=this;if(this.state){var e={},a=this.state,n={$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$submitted:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$error:{},$submittedState:{},_id:"",_submit:function(){t.state.$submitted=!0,t.state._cloneState()},_cloneState:function(){var e=JSON.parse(JSON.stringify(a));delete e.$submittedState,Object.keys(e).forEach(function(a){t.$set(t.state.$submittedState,a,e[a])})},_addControl:function(n){e[n.$name]=n,t.$set(a,n.$name,n)},_removeControl:function(a){delete e[a.$name],t.$delete(t.state,a.$name),t.$delete(t.state.$error,a.$name)},_validate:function(){Object.keys(e).forEach(function(t){e[t]._validate()})},_reset:function(){a.$submitted=!1,a.$pending=!1,a.$submittedState={},Object.keys(e).forEach(function(t){var a=e[t];a._hasFocused=!1,a._setUntouched(),a._setPristine(),a.$submitted=!1,a.$pending=!1})}};Object.keys(n).forEach(function(e){t.$set(t.state,e,n[e])}),this.$watch("state",function(){var n=!1,i=!0,o=!1,s=!1,r=!1;Object.keys(e).forEach(function(u){var l=e[u];l.$submitted=a.$submitted,l.$dirty&&(n=!0),l.$touched&&(o=!0),l.$focused&&(s=!0),l.$pending&&(r=!0),l.$valid?t.$delete(a.$error,l.$name):(i=!1,t.$set(a.$error,l.$name,l))}),a.$dirty=n,a.$pristine=!n,a.$touched=o,a.$untouched=!o,a.$focused=s,a.$valid=i,a.$invalid=!i,a.$pending=r},{deep:!0,immediate:!0})}},computed:{className:function(){return c(this.vueFormConfig.formClasses,this.state)}},methods:{reset:function(){this.state._reset()},validate:function(){this.state._validate()}}},S="undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var j,k=(function(t){(function(){var e={}.hasOwnProperty,a=[].slice;t.exports=function(t,n){var i,o,s,r;for(i in o=[],r=[],n)e.call(n,i)&&(s=n[i],"this"!==i&&(o.push(i),r.push(s)));return Function.apply(null,a.call(o).concat(["return eval("+JSON.stringify(t)+")"])).apply(n.this,r)}}).call(S)}(j={exports:{}},j.exports),j.exports);function E(t){if(t)for(var e=0;e<t.length;e++){if("label"===t[e].tag)return t[e];if(t[e].children)return E(t[e].children)}}var N={inject:{vueFormConfig:b,vueFormState:_,vueFormParentForm:$},render:function(t){var e=this,a=[],n=this.formstate[this.fieldname];if(n&&n.$error&&this.isShown&&(Object.keys(n.$error).forEach(function(t){if(e.$slots[t]||e.$scopedSlots[t]){var i=e.$slots[t]||e.$scopedSlots[t](n);if(e.autoLabel){var o=E(i);o&&(o.data=o.data||{},o.data.attrs=o.data.attrs||{},o.data.attrs.for=n._id)}a.push(i)}}),!a.length&&n.$valid&&(this.$slots.default||this.$scopedSlots.default))){var i=this.$slots.default||this.$scopedSlots.default(n);if(this.autoLabel){var o=E(i);o&&(o.data=o.data||{},o.data.attrs=o.data.attrs||{},o.data.attrs.for=n._id)}a.push(i)}return t(this.tag||this.vueFormConfig.messagesTag,a)},props:{state:Object,name:String,show:{type:String,default:""},tag:{type:String},autoLabel:Boolean},data:function(){return{formstate:null,fieldname:""}},created:function(){this.fieldname=this.name,this.formstate=this.state||this.vueFormState},computed:{isShown:function(){var t=this.formstate[this.fieldname],e=this.show||this.vueFormParentForm.showMessages||this.vueFormConfig.showMessages;return!e||!t||k(e,t)}}},P={render:function(t){var e=this,a=m(this.$slots.default,this.vueFormConfig),n=a.vModel,i={for:null};if(n.length){if(this.name=v(n[0]),a.messages&&this.$nextTick(function(){var t=a.messages.componentInstance;t&&(t.fieldname=t.fieldname||e.name)}),this.autoLabel){var o=n[0].data.attrs.id||this.fieldstate._id;this.fieldstate._id=o,n[0].data.attrs.id=o,a.label?(a.label.data=a.label.data||{},a.label.data.attrs=a.label.data.attrs||{},a.label.data.attrs.for=o):"label"===this.tag&&(i.for=o)}n.forEach(function(t){t.data.directives||(t.data.directives=[]),t.data.directives.push({name:"vue-form-validator",value:{fieldstate:e.fieldstate,config:e.vueFormConfig}}),t.data.attrs["vue-form-validator"]="",t.data.attrs.debounce=e.debounce})}return t(this.tag||this.vueFormConfig.validateTag,{class:this.className,attrs:i},this.$slots.default)},props:{state:Object,custom:null,autoLabel:Boolean,tag:{type:String},debounce:Number},inject:{vueFormConfig:b,vueFormState:_,vueFormParentForm:$},data:function(){return{name:"",formstate:null,fieldstate:{}}},methods:{getClasses:function(t){var e=this.fieldstate;return Object.keys(e.$error).reduce(function(e,a){return e[t.invalid+"-"+h(a)]=!0,e},c(t,e))}},computed:{className:function(){return this.getClasses(this.vueFormConfig.validateClasses)},inputClassName:function(){return this.getClasses(this.vueFormConfig.inputClasses)}},mounted:function(){var t=this;this.fieldstate.$name=this.name,this.formstate._addControl(this.fieldstate);var e=this.$el.querySelectorAll("[vue-form-validator]");this.$watch("inputClassName",function(a,n){for(var i,o=void 0,s=function(t,e){n&&Object.keys(n).filter(function(t){return n[t]}).forEach(function(t){return function(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}(e,t)}),o=[],Object.keys(a).filter(function(t){return a[t]}).forEach(function(t){o.push(t),function(t,e){t.classList?t.classList.add(e):t.className+=" "+e}(e,t)})},r=0;i=e[r++];)s(0,i);t.fieldstate._className=o},{deep:!0,immediate:!0})},created:function(){var t=this;this.formstate=this.state||this.vueFormState;var e=this,a=[],n=void 0;this.fieldstate={$name:"",$dirty:!1,$pristine:!0,$valid:!0,$invalid:!1,$touched:!1,$untouched:!0,$focused:!1,$pending:!1,$submitted:!1,$error:{},_className:null,_id:"vf"+g(),_setValidatorVadility:function(t,a){a?e.$delete(this.$error,t):e.$set(this.$error,t,!0)},_setValidity:function(t){this.$valid=t,this.$invalid=!t},_setDirty:function(){this.$dirty=!0,this.$pristine=!1},_setPristine:function(){this.$dirty=!1,this.$pristine=!0},_setTouched:function(){this.$touched=!0,this.$untouched=!1},_setUntouched:function(){this.$touched=!1,this.$untouched=!0},_setFocused:function(t){this.$focused="boolean"==typeof t&&t,this.$focused?this._setHasFocused():this._setTouched()},_setHasFocused:function(){this._hasFocused=!0},_hasFocused:!1,_validators:{},_validate:function(t){var i=this;t?n=t:t=n,this.$pending=!0;var o=!0,s=f(t.data);s;var r={promises:[],names:[]};a.push(r);var u=t.data.attrs||{},l=t.componentInstance;l&&l._vfValidationData_&&(u=F({},u,l._vfValidationData_));var d=t.componentOptions&&t.componentOptions.propsData?t.componentOptions.propsData:{};Object.keys(this._validators).forEach(function(a){if((""===s||void 0===s||null===s)&&"required"!==a)return i._setValidatorVadility(a,!0),void!0;var n=void 0!==u[a]?u[a]:d[a],l="function"==typeof i._validators[a];if(!l||null!==n&&void 0!==n||i._validators[a]._allowNulls){var c=l?i._validators[a](s,n,t):e.custom[a];"boolean"==typeof c?c?i._setValidatorVadility(a,!0):(o=!1,i._setValidatorVadility(a,!1)):(r.promises.push(c),r.names.push(a),e.vueFormParentForm.promises.push(c))}}),r.promises.length?e.vueFormConfig.Promise.all(r.promises).then(function(t){r===a[a.length-1]&&(a=[],t.forEach(function(t,e){var a=r.names[e];t?i._setValidatorVadility(a,!0):(o=!1,i._setValidatorVadility(a,!1))}),i._setValidity(o),i.$pending=!1)}):(this._setValidity(o),this.$pending=!1)}},this.custom&&Object.keys(this.custom).forEach(function(e){"function"==typeof t.custom[e]?(t.custom[e]._allowNulls=!0,t.fieldstate._validators[e]=t.custom[e]):t.fieldstate._validators[e]=t.custom[e]}),this.$watch("custom",function(e,a){var n,i,o,s;a&&(n=e,i=a,o="",s="",Object.keys(n).sort().filter(function(t){return"function"!=typeof n[t]}).forEach(function(t){return o+=n[t]}),Object.keys(i).sort().filter(function(t){return"function"!=typeof n[t]}).forEach(function(t){return s+=i[t]}),o!==s&&t.fieldstate._validate())},{deep:!0})},destroyed:function(){this.formstate._removeControl(this.fieldstate)}},D={inject:{vueFormConfig:b},render:function(t){var e=m(this.$slots.default,this.vueFormConfig),a=e.vModel,n={for:null};if(a.length&&this.autoLabel){var i=a[0].data.attrs&&a[0].data.attrs.id||"vf"+g();a[0].data.attrs.id=i,e.label?(e.label.data=e.label.data||{},e.label.data.attrs=e.label.data.attrs={},e.label.data.attrs.for=i):"label"===this.tag&&(n.for=i)}return t(this.tag||this.vueFormConfig.fieldTag,{attrs:n},this.$slots.default)},props:{tag:{type:String},autoLabel:{type:Boolean,default:!0}}},L={};function V(t,e,a){Object.keys(t).forEach(function(n){var i="type"===n?t[n].toLowerCase():n.toLowerCase();e[i]&&!a[i]&&(a[i]=e[i])})}var M={name:"vue-form-validator",bind:function(t,e,a){var n=e.value.fieldstate,i=e.value.config.validators,o=a.data.attrs||{};if(v(a)){var s,r,u,l;o.debounce&&(L[n._id]=(s=function(t,e){t._hasFocused&&t._setDirty(),t._validate(e)},r=o.debounce,function(){var t=this,e=arguments,a=u&&!l;clearTimeout(l),l=setTimeout(function(){l=null,u||s.apply(t,e)},r),a&&s.apply(t,e)})),V(o,i,n._validators),a.componentOptions&&a.componentOptions.propsData&&V(a.componentOptions.propsData,i,n._validators),n._validate(a),t.addEventListener("blur",function(){n._setFocused(!1)},!1),t.addEventListener("focus",function(){n._setFocused(!0)},!1);var d=a.componentInstance;d&&(d.$on("blur",function(){n._setFocused(!1)}),d.$on("focus",function(){n._setFocused(!0)}),t.addEventListener("focusout",function(){n._setFocused(!1)},!1),t.addEventListener("focusin",function(){n._setFocused(!0)},!1),d.$on("vf:validate",function(t){d._vfValidationData_||V(t,i,n._validators),d._vfValidationData_=t,n._validate(d.$vnode)}))}else console.warn("vue-form: name attribute missing")},update:function(t,e,a,n){var i=function(t,e,a){var n=!1,i=t.data.attrs||{},o=e.data.attrs||{},s={};if(f(t.data)!==f(e.data)&&(s.vModel=!0,n=!0),Object.keys(a).forEach(function(t){i[t]!==o[t]&&(s[t]=!0,n=!0)}),t.componentOptions&&t.componentOptions.propsData){var r=t.componentOptions.propsData,u=e.componentOptions.propsData;Object.keys(a).forEach(function(t){r[t]!==u[t]&&(s[t]=!0,n=!0)})}if(n)return s}(a,n,e.value.config.validators),o=e.value.fieldstate,s=a.data.attrs||{},r=a.componentInstance;r&&r._vfValidationData_&&(s=F({},s,r[r._vfValidationData_])),-1===a.elm.className.indexOf(o._className[0])&&(a.elm.className=a.elm.className+" "+o._className.join(" ")),i&&(i.vModel?s.debounce?(o.$pending=!0,L[o._id](o,a)):(o._hasFocused&&o._setDirty(),o._validate(a)):o._validate(a))}};function T(t){var e,a=F(!0,{},s,t);this.provide=function(){return l({},b,a)},this.components=(l(e={},a.formComponent,x),l(e,a.messagesComponent,N),l(e,a.validateComponent,P),l(e,a.fieldComponent,D),e),this.directives={vueFormValidator:M}}var A=function(t){function e(){return r(this,e),d(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,T),u(e,null,[{key:"install",value:function(t,e){t.mixin(new this(e))}},{key:"installed",get:function(){return!!this.install.done},set:function(t){this.install.done=t}}]),e}();return T.call(A),A.options=new A,A},t.exports=a()}).call(e,a(1))},107:function(t,e,a){var n;n=function(){return function(t){var e={};function a(n){if(e[n])return e[n].exports;var i=e[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}return a.m=t,a.c=e,a.p="",a(0)}([function(t,e,a){var n=a(1);t.exports={install:function(t,e){e=e||{name:"smoothscroll"},t.directive(e.name,{inserted:function(t,e){n(t,e.value.duration,e.value.callback,e.value.context)}}),Object.defineProperty(t.prototype,"$SmoothScroll",{get:function(){return n}})}}},function(t,e,a){var n,i;!function(o,s){"use strict";void 0===(i="function"==typeof(n=s)?n.call(e,a,e,t):n)||(t.exports=i)}(0,function(){"use strict";if("object"==typeof window&&void 0!==document.querySelectorAll&&void 0!==window.pageYOffset&&void 0!==history.pushState){var t=function(t,e,a,n){return a>n?e:t+(e-t)*((i=a/n)<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1);var i},e=function(e,a,n,i){a=a||500;var o=(i=i||window).scrollTop||window.pageYOffset;if("number"==typeof e)var s=parseInt(e);else s=function(t,e){return"HTML"===t.nodeName?-e:t.getBoundingClientRect().top+e}(e,o);var r=Date.now(),u=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},l=function(){var d=Date.now()-r;i!==window?i.scrollTop=t(o,s,d,a):window.scroll(0,t(o,s,d,a)),d>a?"function"==typeof n&&n(e):u(l)};l()},a=function(t){t.preventDefault(),location.hash!==this.hash&&window.history.pushState(null,null,this.hash);var a=document.getElementById(this.hash.substring(1));a&&e(a,500,function(t){location.replace("#"+t.id)})};return document.addEventListener("DOMContentLoaded",function(){for(var t,e=document.querySelectorAll('a[href^="#"]:not([href="#"])'),n=e.length;t=e[--n];)t.addEventListener("click",a,!1)}),e}})}])},t.exports=n()},108:function(t,e,a){"use strict";e.a={validators:{checkbox:function(t,e,a){return t},sameas:function(t,e,a){return t==e}}}},1689:function(t,e,a){var n=a(1690);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(5)("2ba8cb92",n,!0,{})},1690:function(t,e,a){var n=a(19);(t.exports=a(2)(!1)).push([t.i,".login-content[data-v-dd7991b4]{margin-top:7%;margin-bottom:7%;padding-bottom:20px;-webkit-box-shadow:0 0 20px #ccc;box-shadow:0 0 20px #ccc;background-size:100% 100%;border-radius:7px}.user-message[data-v-dd7991b4]{padding:15px 0;font-size:14px;color:#777}.img_backgrond[data-v-dd7991b4]{background-image:url("+n(a(575))+");background-size:cover;height:100vh;width:100%}label[data-v-dd7991b4]{font-size:14px!important}[data-v-dd7991b4]::-webkit-input-placeholder{font-size:14px}",""])},1691:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(3),i=a.n(n),o=a(106),s=a.n(o),r=a(107),u=a.n(r),l=a(108);i.a.use(u.a),i.a.use(s.a,l.a),e.default={name:"forgetpassword",data:function(){return{formstate:{},model:{email:""},show_error:!1,show_success:!1,success_message:"",error_message:"",message:"",localStorge:{},login_submit:"Send Confirmation Mail"}},methods:{onSubmit:function(){var t=this;if(!this.formstate.$invalid){console.log(JSON.stringify(this.user)),this.login_submit="Please Wait...";var e=this.$store.state.host_url;axios.post(e+"/auth/forgotpass/verifyemail",{email:this.model.email},{headers:{"Content-type":"application/json"}}).then(function(e){t.login_submit="Send Confirmation Mail",t.success_message="Confirmation successful, an email has been sent to you with further instructions",t.show_success=!0,t.show_error=!1}).catch(function(e){t.show_error=!0,t.show_success=!1,t.error_message=e.response.data.message,t.login_submit="Send Confirmation Mail"})}}},mounted:function(){},destroyed:function(){}}},1692:function(t,e,a){var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 mt-4"},[e("h2",{staticClass:"text-center"},[e("img",{attrs:{src:a(275),alt:"Logo"}})])]),this._v(" "),e("div",{staticClass:"col-sm-12 mt-4"},[e("h3",{staticClass:"page-name text-center"},[this._v("Forgot Password")])])])}];t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid img_backgrond"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-4 offset-lg-4 col-sm-6 offset-sm-3 col-xs-10 offset-xs-1 login-content mt-5"},[t._m(0),t._v(" "),a("vue-form",{attrs:{state:t.formstate},on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[t.show_error?a("div",{staticClass:"center alert alert-danger"},[t._v("\n                    "+t._s(this.error_message)+"\n\n                ")]):t._e(),t._v(" "),t.show_success?a("div",{staticClass:"center alert alert-success"},[t._v("\n                    "+t._s(this.success_message)+"\n                ")]):t._e(),t._v(" "),a("div",{staticClass:"col-lg-12"},[a("p",{staticClass:"user-message "},[t._v(" Please enter the email you are registered with. An email message will be sent to the email address with further instructions.")]),t._v(" "),a("div",{staticClass:"form-group"},[a("validate",{attrs:{tag:"div"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.model.email,expression:"model.email"}],staticClass:"form-control",attrs:{name:"email",type:"email",required:"",placeholder:"E-mail"},domProps:{value:t.model.email},on:{input:function(e){e.target.composing||t.$set(t.model,"email",e.target.value)}}}),t._v(" "),a("field-messages",{staticClass:"text-danger",attrs:{name:"email",show:"$invalid && $submitted"}},[a("div",{attrs:{slot:"required"},slot:"required"},[t._v("Email is a required field")]),t._v(" "),a("div",{attrs:{slot:"email"},slot:"email"},[t._v("Email is not valid")])])],1)],1)]),t._v(" "),a("div",{staticClass:"col-12 mt-4"},[a("div",{staticClass:"form-group"},[a("input",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},domProps:{value:t.login_submit}})])]),t._v(" "),a("div",{staticClass:"col-sm-12 text-center"},[a("div",{staticClass:"form-group"},[a("router-link",{staticClass:"btn btn-primary btn-block",attrs:{tag:"a",to:"/login"}},[t._v("Sign In\n                            ")])],1)])])],1)])])},staticRenderFns:n}},1795:function(t,e,a){var n=a(18)(a(1691),a(1692),!1,function(t){a(1689)},"data-v-dd7991b4",null);t.exports=n.exports},275:function(t,e){t.exports="/images/logo_black.png?bdcfac9ddc18a607802102b4c6692f5a"},575:function(t,e){t.exports="/images/Login-03-01.png?a49e5729cfa038ae5bdb04a917eeed17"}});