webpackJsonp([39],{1088:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});e(6);s.default={data:function(){return{message:"",button_msg:""}},methods:{do_verify:function(){var t=this,s=this.$store.state.host_url;axios.get(s+"/users/vefify/"+this.$route.params.token).then(function(s){var e=s.data;!0===e.status?(t.message="Thanks for taking your time to verify your email, you have access to station manager now",t.button_msg="Click to Login"):!1===e.status&&(t.message=e.message)}).catch(function(s){var e=s.response;!1===e.status&&(t.message=e.data.message)})}},mounted:function(){this.do_verify()}}},1089:function(t,s){t.exports={render:function(){var t=this.$createElement,s=this._self._c||t;return s("section",{staticClass:"error-wrapper"},[s("p",[this._v(this._s(this.message))]),this._v(" "),s("a",{staticClass:"back-btn",attrs:{href:"/login"}},[this._v(this._s(this.button_msg))])])},staticRenderFns:[]}},1153:function(t,s,e){var a=e(18)(e(1088),e(1089),!1,null,null,null);t.exports=a.exports}});