webpackJsonp([52],{

/***/ 1589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_src_store_store_js__ = __webpack_require__(25);
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            message: '',
            button_msg: ''
        };
    },

    methods: {
        do_verify: function do_verify() {
            var _this = this;

            var host_url = this.$store.state.host_url;
            axios.get(host_url + '/users/verify/' + this.$route.params.token).then(function (response) {
                var verify_res = response.data;
                if (verify_res.status === true) {
                    _this.message = "Thanks for taking your time to verify your email," + " you have access to station manager now";
                    _this.button_msg = 'Click to Login';
                } else if (verify_res.status === false) {
                    _this.message = verify_res.message;
                }
            }).catch(function (error) {
                var verify_err = error.response;
                if (verify_err.status === false) {
                    _this.message = verify_err.data.message;
                }
            });
        }
    },
    mounted: function mounted() {
        this.do_verify();
    }
});

/***/ }),

/***/ 1590:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("section", { staticClass: "error-wrapper" }, [
    _c("p", [_vm._v(_vm._s(_vm.message))]),
    _vm._v(" "),
    _c("a", { staticClass: "back-btn", attrs: { href: "/login" } }, [
      _vm._v(_vm._s(_vm.button_msg))
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4313b637", module.exports)
  }
}

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1589)
/* template */
var __vue_template__ = __webpack_require__(1590)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/pages/auth/verifyEmail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4313b637", Component.options)
  } else {
    hotAPI.reload("data-v-4313b637", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});