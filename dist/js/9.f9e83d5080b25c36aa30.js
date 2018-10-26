webpackJsonp([9],{

/***/ 1435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1436);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("d8757aa6", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24b4a97a\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue", function() {
     var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-24b4a97a\",\"scoped\":true,\"hasInlineConfig\":true}!../node_modules/sass-loader/lib/loader.js!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./layout.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.wrapper[data-v-24b4a97a]:before,\n.wrapper[data-v-24b4a97a]:after {\n  display: table;\n  content: \" \";\n}\n.wrapper[data-v-24b4a97a]:after {\n  clear: both;\n}\n.wrapper[data-v-24b4a97a] {\n  display: table;\n  overflow-x: hidden;\n  width: 100%;\n  max-width: 100%;\n  table-layout: fixed;\n}\n.right-aside[data-v-24b4a97a],\n.left-aside[data-v-24b4a97a] {\n  padding: 0;\n  display: table-cell;\n  vertical-align: top;\n}\n.right-aside[data-v-24b4a97a] {\n  background-color: #ebf2f6 !important;\n}\n@media (max-width: 992px) {\n.wrapper > .right-aside[data-v-24b4a97a] {\n    width: 100vw;\n    min-width: 100vw;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader__ = __webpack_require__(1438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side__ = __webpack_require__(1442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side__ = __webpack_require__(1447);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header__ = __webpack_require__(1470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss__ = __webpack_require__(1478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_assets_sass_custom_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_layouts_css_fixed_menu_scss__ = __webpack_require__(1480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_components_layouts_css_fixed_menu_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_components_layouts_css_fixed_menu_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_animejs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * These are the files that enable you to change layouts and other options
 */

/**
 * import preloader
 * choose from preloader and bounce
 */


/**
 * The right side content
 */


/**
 * import left-side from default or horizontal-menu or mini-menu
 * eg: import left_side from 'components/layouts/left-side/horizontal-menu/left-side'
 */



/**
 * import from header or fixed-header or no-header
 */


/**
 * Styles
 */

/**
 * Main stylesheet for the layout
 */


/**
 * Style required for a boxed layout
 */
//     import 'components/layouts/css/boxed.scss'

/**
 * Style required for a fixed-menu layout
 */


/**
 * Style required for a compact-menu layout
 */
//     import 'components/layouts/css/compact-menu.scss'

/**
 * Style required for a centered-logo layout
 */
// import 'components/layouts/css/centered-logo.scss'

/**
 * Style required for a content-menu layout
 */
// import 'components/layouts/css/content_menu.scss'


/**
 * import animejs for the menu transition effects
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'layout',
  components: {
    preloader: __WEBPACK_IMPORTED_MODULE_0_components_layouts_preloader_preloader___default.a,
    vueadmin_header: __WEBPACK_IMPORTED_MODULE_3_components_layouts_header_fixed_header___default.a,
    left_side: __WEBPACK_IMPORTED_MODULE_2_components_layouts_left_side_default_left_side___default.a,
    right_side: __WEBPACK_IMPORTED_MODULE_1_components_layouts_right_side___default.a
  },
  data: function data() {
    return {
      showtopbtn: false,
      user_details: JSON.parse(localStorage.getItem('user_details'))
      //company_details: JSON.parse(localStorage.getItem('company_details')),
    };
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].commit("check_login_details");

    if (window.innerWidth <= 992) {
      this.$store.commit('left_menu', 'close');
    }

    __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].commit("activateLoader", "start");
    var user_details = JSON.parse(localStorage.getItem('user_details'));
    __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.menu_items = JSON.parse(localStorage.getItem('role_details'));
    var company_route = '';
    ////console.log(user_details);
    if (user_details.role_id == 'master' && user_details.company_id == 'master') {
      ///e360 super user
      company_route = '/companies/e360_super_user';
    } else if (user_details.role_id == 'super' && user_details.company_id == 'super') {
      //first company super user
      company_route = '/companies/first_company_user/' + user_details.id;
    } else {
      ///for regular company users
      company_route = '/companies/company_user/' + user_details.company_id;
    }
    ////console.log(company_route);
    axios.get(__WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.host_url + company_route, {
      headers: {
        "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
      } }).then(function (response) {
      __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].commit("activateLoader", "end");

      ///one company
      if (response.data.data.length == 1) {
        __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.available_company = response.data.data[0];
        __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.show_single_company = true;
      } else {
        ///multi companies
        __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.available_companies = response.data.data;
        __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.show_multi_company = true;
      }
      axios.get(__WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.host_url + "/products", {
        headers: {
          "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
        } }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].state.products = response.data.data;
      });
    }).catch(function (error) {
      __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
      __WEBPACK_IMPORTED_MODULE_7_src_store_store_js__["a" /* default */].commit("catch_errors", error);
    });
  },

  methods: {}

});

/***/ }),

/***/ 1438:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1439)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1441)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-27bb4792"
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
Component.options.__file = "src/components/layouts/preloader/preloader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27bb4792", Component.options)
  } else {
    hotAPI.reload("data-v-27bb4792", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1439:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1440);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("a92bd558", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27bb4792\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preloader.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-27bb4792\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./preloader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1440:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.cssload-aim[data-v-27bb4792] {\n  position: fixed;\n  z-index: 1500;\n  left: 50%;\n  top: 60px;\n  border-radius: 20px;\n  background-color: transparent;\n  border-width: 15px;\n  border-style: double;\n  border-color: transparent #428bca;\n  -webkit-animation: cssload-anim-data-v-27bb4792 0.7s linear infinite;\n          animation: cssload-anim-data-v-27bb4792 0.7s linear infinite;\n}\n@media screen and (max-width: 560px) {\n.cssload-aim[data-v-27bb4792] {\n      top: 106px;\n}\n}\n@-webkit-keyframes cssload-anim-data-v-27bb4792 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes cssload-anim-data-v-27bb4792 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1441:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "cssload-aim" })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-27bb4792", module.exports)
  }
}

/***/ }),

/***/ 1442:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1443)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1445)
/* template */
var __vue_template__ = __webpack_require__(1446)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4d83a4be"
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
Component.options.__file = "src/components/layouts/right-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d83a4be", Component.options)
  } else {
    hotAPI.reload("data-v-4d83a4be", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1443:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1444);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("823b0846", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d83a4be\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./right-side.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d83a4be\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./right-side.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1444:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.right-aside[data-v-4d83a4be] {\n  padding: 0 20px 10px 20px;\n  width: 100%;\n  max-width: 100%;\n  min-height: 100vh;\n}\n.right-aside .content-header > h1[data-v-4d83a4be] {\n    margin: 2px;\n    padding-left: 13px;\n    padding-top: 12px;\n    font-size: 20px;\n    line-height: 1.5;\n}\n.right-aside .content-header[data-v-4d83a4be] {\n    margin: -2px -20px 25px -20px;\n    height: 55px;\n    background: #f9fafb;\n    -webkit-box-shadow: 3px 1px 5px #ccc;\n            box-shadow: 3px 1px 5px #ccc;\n}\n.right-aside .fade-enter-active[data-v-4d83a4be], .right-aside .fade-leave-active[data-v-4d83a4be] {\n    -webkit-transition: opacity 1s;\n    transition: opacity 1s;\n}\n.right-aside .fade-enter[data-v-4d83a4be], .right-aside .fade-leave-to[data-v-4d83a4be] {\n    opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ 1445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "right-side",
    data: function data() {
        return {
            formstate: {}
        };
    },

    methods: {},
    mounted: function mounted() {
        this.$alert.success({
            duration: 10,
            forceRender: '',
            message: '',
            transition: '',
            type: ''
        });
    }
});

/***/ }),

/***/ 1446:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "right-aside" }, [
    _c(
      "section",
      { staticClass: "content-header" },
      [
        _c("vue-alert", { staticStyle: { "margin-left": "0px" } }),
        _vm._v(" "),
        _c(
          "h1",
          [
            _vm._v(
              _vm._s(
                this.$store.state.page_title
                  ? this.$store.state.page_title
                  : this.$route.meta.title
              ) + "    \n            "
            ),
            _c("transition", { attrs: { name: "fade" } }, [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: this.$store.state.show_alert,
                      expression: "this.$store.state.show_alert"
                    }
                  ],
                  staticClass: "center col-sm-12 alert",
                  class: this.$store.state.alert_type,
                  staticStyle: { "margin-left": "100px" }
                },
                [
                  _vm._v(
                    _vm._s(this.$store.state.alert_message) + "\n            "
                  )
                ]
              )
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: this.$store.state.show_modal_alert,
                expression: "this.$store.state.show_modal_alert"
              }
            ],
            staticClass: "col-lg-4 mt-3"
          },
          [
            _c(
              "b-card",
              { staticClass: "bg-primary-card" },
              [
                _c(
                  "b-btn",
                  {
                    directives: [
                      {
                        name: "b-modal",
                        rawName: "v-b-modal.modal4",
                        modifiers: { modal4: true }
                      }
                    ],
                    attrs: { variant: "outline-secondary" }
                  },
                  [_vm._v("Launch small modal")]
                ),
                _vm._v(" "),
                _c(
                  "b-modal",
                  { attrs: { id: "modal4", title: "Small Modal", size: "sm" } },
                  [_c("h1", [_vm._v("modal")])]
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("section", { staticClass: "content" }, [_vm._t("default")], 2)
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d83a4be", module.exports)
  }
}

/***/ }),

/***/ 1447:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1448)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1450)
/* template */
var __vue_template__ = __webpack_require__(1469)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ccda5a12"
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
Component.options.__file = "src/components/layouts/left-side/default/left-side.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ccda5a12", Component.options)
  } else {
    hotAPI.reload("data-v-ccda5a12", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1448:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1449);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("2ba6387c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ccda5a12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./left-side.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ccda5a12\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./left-side.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1449:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.left-aside[data-v-ccda5a12] {\n  width: 250px;\n  background: #ffffff;\n  background-repeat: repeat-y;\n}\n.navigation[data-v-ccda5a12] {\n  padding: 0;\n}\n.divider[data-v-ccda5a12] {\n  margin-top: 10px;\n  list-style-type: none;\n  border-bottom: 1px solid #ececec;\n  padding-bottom: 6px;\n}\n.divider span[data-v-ccda5a12] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a5f8a;\n  margin: 20px 20px -15px 20px;\n}\n.sidebar[data-v-ccda5a12] {\n  display: block;\n  font-size: 14px;\n  letter-spacing: 1px;\n}\n.content[data-v-ccda5a12] {\n  display: block;\n  width: auto;\n  overflow-x: hidden;\n  padding: 0 15px;\n}\n.badge-success[data-v-ccda5a12] {\n  background-color: #22d69d;\n}\n.badge[data-v-ccda5a12] {\n  padding: 0.60em 0.7em;\n  border-radius: 0.75rem;\n}\n.nav_profile[data-v-ccda5a12] {\n  border-bottom: 1px solid #eee;\n}\n", ""]);

// exports


/***/ }),

/***/ 1450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu__ = __webpack_require__(1451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__left_profile_user_profile2_vue__ = __webpack_require__(1465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__left_profile_user_profile2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__left_profile_user_profile2_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "left-side",
    components: {
        vmenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenu"],
        vsubMenu: __WEBPACK_IMPORTED_MODULE_0__menu__["vsubMenu"],
        vmenuItem: __WEBPACK_IMPORTED_MODULE_0__menu__["vmenuItem"],
        profile: __WEBPACK_IMPORTED_MODULE_2__left_profile_user_profile2_vue___default.a
    },
    data: function data() {
        return {
            final_permissions: []
        };
    },


    mounted: function mounted() {
        var _this = this;

        var user_data = JSON.parse(localStorage.getItem('user_details'));
        //console.log(user_data.role_id);
        if (user_data.role_id == 'master') {
            this.final_permissions = this.f_menu_items("master");
        } else if (user_data.role_id == 'super') {
            this.final_permissions = this.f_menu_items("super");
        } else {
            var r_p_array = [];
            var permissions = [];
            axios.get(__WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.host_url + '/roles/permissions/' + user_data.role_id).then(function (response) {
                r_p_array = response.data.data;
                _this.final_permissions = _this.f_menu_items(r_p_array);
                //import excpetion for engineering companies not to see dashboard, this snippet is in dashboard code file too
                var user_details = JSON.parse(localStorage.getItem('user_details'));
                if (__WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].user_permission_slugs.includes("EN-PMM60") || __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].user_permission_slugs.includes("EN-MML60")) {
                    window.location.href = "/#/maintenance/manage-pump-maintenance-engineering-company";
                }
            });
        }
    },
    destroyed: function destroyed() {},
    methods: {
        f_menu_items: function f_menu_items(r_p_array) {
            var permissions = [];
            var user_details = JSON.parse(localStorage.getItem('user_details'));

            if (r_p_array == "master") {
                permissions = ["SU-MAN", "CMUs", "CMSt", "CMCo", "CMSt", "CPCR", "APCR", "APCRL2", "APCRL3", "EPCR", "CMRo", "CMRe", "APDS", "AExp", "SSCo", "MSCo", "CSSt", "MSSt", "AMPa", "AMEx", "RFSu", "AFRe", "PFRe", "RStk", "AMIs20", "FRSk20", "TStk20", "SStk20", "RStk20", "CStk20", "AMPS30", "EVCM50", "EVCMPC50", "PMM60", "MML60", "EN-PMM60", "EN-MML60"];
                __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].user_permission_slugs = permissions;
            } else {
                ///company user
                //  var r_p_array = [];
                //  r_p_array = JSON.parse(localStorage.getItem('role_details'));  
                r_p_array.role_permissions.forEach(function (item, index) {
                    ////console.log(item); 
                    if (item.permission !== null) {
                        permissions.push(item.permission.UI_slug);
                    }
                });
                __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].user_permission_slugs = permissions;
            }
            var menu_items = [];

            if (!permissions.includes('EN-PMM60') && !permissions.includes('EN-MML60')) {
                //to prevent enginerring companies (EN) from viewing dashboard, nothing there for them to see 
                menu_items.push({
                    name: 'Dashboard',
                    link: '/',
                    icon: ' fa fa-home'
                });
            } else if (user_details.role_id == 'master') {
                //even though superusers can view engineering module, they should have a dashboard link
                menu_items.push({
                    name: 'Dashboard',
                    link: '/',
                    icon: ' fa fa-home'
                });
            }

            if (permissions.includes('CMCo') || permissions.includes('CMRe') || permissions.includes('CMRo') || permissions.includes('CMUs')) {
                menu_items.push({ name: 'Admin',
                    icon: 'fa fa-server',
                    child: []
                });

                var current_index = menu_items.length - 1;
                if (permissions.includes('CMCo')) {
                    menu_items[current_index].child.push({
                        name: 'Company Profile',
                        link: '/admin/company/setup'

                    });
                }

                if (permissions.includes('CMRo')) {
                    menu_items[current_index].child.push({
                        name: 'Manage Roles',
                        link: '/admin/roles/manage'

                    });
                }
                if (permissions.includes('CMUs')) {
                    menu_items[current_index].child.push({
                        name: 'Manage Users',
                        link: '/admin/users/create'

                    });
                }

                if (permissions.includes('CMRe')) {
                    menu_items[current_index].child.push({
                        name: 'Manage Regions',
                        link: '/admin/regions/manage'

                    });
                }

                //intentionally allowed user privilege to control notifications as well
                if (permissions.includes('CMUs')) {
                    menu_items[current_index].child.push({
                        name: 'Notifications Settings',
                        link: '/admin/notifications/manage'

                    });
                }
            }

            ///configuration
            if (permissions.includes('SSCo') || permissions.includes('MSCo')) {
                menu_items.push({ name: 'Configuration',
                    icon: 'fa fa-cog',
                    child: []
                });
                var current_index = menu_items.length - 1;
                ////console.log(menu_items);   
                if (permissions.includes('CMSt')) {
                    menu_items[current_index].child.push({
                        name: 'Manage Stations',
                        link: '/configuration/station/manage',
                        icon: 'fa fa-qrcode'
                    });
                }
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

            ///pricing
            if (permissions.includes('CPCR') || permissions.includes('APCR') || permissions.includes('EPCR')) {
                menu_items.push({ name: 'Fuel Pricing',
                    icon: 'fa fa-money',
                    child: []
                });
                var current_index = menu_items.length - 1;
                ////console.log(menu_items);    
                if (permissions.includes('CPCR')) {
                    menu_items[current_index].child.push({
                        name: 'Request Price Change',
                        link: '/admin/pricing/setup'

                    });
                }
                if (permissions.includes('APCR') || permissions.includes('APCRL2') || permissions.includes('APCRL3')) {
                    menu_items[current_index].child.push({
                        name: 'Approve Price Change',
                        link: '/admin/pricing/approve'

                    });
                }
                if (permissions.includes('EPCR')) {
                    menu_items[current_index].child.push({
                        name: 'Execute Price Change',
                        link: '/admin/pricing/execute'

                    });
                }
            }

            ///SS Mgt
            if (permissions.includes('CSSt') || permissions.includes('MSSt')) {
                menu_items.push({ name: 'Sales and Stock Management',
                    icon: 'fa fa-pencil',
                    child: []
                });
                var current_index = menu_items.length - 1;
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
                ///hardcode for bovas, and super admin
                if (user_details.company_id == 25 || user_details.company_id == 'master') {
                    menu_items[current_index].child.push({
                        name: 'Bulk Stock Upload',
                        link: '/ss-management/bovas-bulk-upload',
                        icon: 'fa fa-angle-double-right'
                    });
                }
                if (user_details.company_id != 25 || user_details.company_id == 'master') {
                    menu_items[current_index].child.push({
                        name: 'Bulk Sales and Stock Upload',
                        link: '/ss-management/bulk-upload',
                        icon: 'fa fa-angle-double-right'
                    });
                }

                menu_items[current_index].child.push({
                    name: 'View Readings',
                    link: '/ss-management/view',
                    icon: 'fa fa-angle-double-right'
                });
                if (permissions.includes('MSSt')) {
                    menu_items[current_index].child.push({
                        name: 'Modify Readings',
                        link: '/ss-management/modify',
                        icon: 'fa fa-angle-double-right'
                    });
                }
            }
            ///Store Mng
            if (permissions.includes('AMIs20') || permissions.includes('FRSk20') || permissions.includes('CStk20') || permissions.includes('TStk20') || permissions.includes('RStk20') || permissions.includes('SStk20')) {
                menu_items.push({ name: 'Store Management',
                    icon: 'fa fa-pencil',
                    child: []
                });
                var current_index = menu_items.length - 1;
                if (permissions.includes("AMIs20")) {
                    menu_items[current_index].child.push({
                        name: 'Items',
                        link: '/store-management/manage-item',
                        icon: 'fa fa-angle-double-right'
                    });
                }
                if (permissions.includes("FRSk20")) {
                    menu_items[current_index].child.push({
                        name: 'Stock Fill/Refill',
                        link: '/store-management/stock-refill',
                        icon: 'fa fa-angle-double-right'
                    });
                }
                if (permissions.includes("CStk20")) {
                    menu_items[current_index].child.push({
                        name: 'Stock Count',
                        link: '/store-management/stock-count',
                        icon: 'fa fa-angle-double-right'
                    });
                }
                if (permissions.includes("TStk20")) {
                    menu_items[current_index].child.push({
                        name: 'Stock Transfer',
                        link: '/store-management/stock-transfer',
                        icon: 'fa fa-angle-double-right'
                    });
                }

                if (permissions.includes("SStk20")) {
                    menu_items[current_index].child.push({
                        name: 'Stock Sales',
                        link: '/store-management/stock-sales',
                        icon: 'fa fa-angle-double-right'
                    });
                }

                if (permissions.includes("RStk20")) {
                    menu_items[current_index].child.push({
                        name: 'Manage Stock Received',
                        link: '/store-management/receive-stock',
                        icon: 'fa fa-angle-double-right'
                    });
                }
            }

            ///Exp Mgt
            if (permissions.includes('AMEx')) {
                menu_items.push({
                    name: 'Expense Management',
                    icon: 'fa fa-vcard',
                    child: [{
                        name: 'Manage Expenses',
                        link: '/exp-management/manage',
                        icon: 'fa fa-angle-double-right'
                    }]
                });
            }

            ///Fuel Supply Mgt
            if (permissions.includes('RFSu') || permissions.includes('AFRe') || permissions.includes('RStk')) {
                menu_items.push({ name: 'Fuel Supply',
                    icon: 'fa fa-truck',
                    child: []
                });
                var current_index = menu_items.length - 1;

                if (permissions.includes('RFSu')) {
                    menu_items[current_index].child.push({
                        name: 'Request Supply',
                        link: '/fuel-supply/request',
                        icon: 'fa fa-angle-double-right'
                    });
                }

                if (permissions.includes('AFRe')) {
                    menu_items[current_index].child.push({
                        name: 'Update Request',
                        link: '/fuel-supply/manage',
                        icon: 'fa fa-angle-double-right'
                    });
                }

                if (permissions.includes('RStk')) {
                    menu_items[current_index].child.push({
                        name: 'Receive Stock',
                        link: '/fuel-supply/receive',
                        icon: 'fa fa-truck'
                    });
                }
            }

            ///Cash Mgt
            if (permissions.includes('AMPa')) {
                menu_items.push({
                    name: 'Cash Management',
                    icon: 'fa fa-money',
                    child: [{
                        name: 'Manage Payments',
                        link: '/cash-management/create',
                        icon: 'fa fa-angle-double-right'
                    }, {
                        name: 'Payment Bulk Upload',
                        link: '/cash-management/bulk-upload',
                        icon: 'fa fa-angle-double-right'
                    }]
                });
            }

            ///ROPS Mgt
            if (permissions.includes('AMPS30')) {
                menu_items.push({
                    name: 'Fuel Price Survey',
                    icon: 'fa fa-money',
                    child: [{
                        name: 'Submit Survey',
                        link: '/rops/create',
                        icon: 'fa fa-angle-double-right'
                    }, {
                        name: 'View Past Surveys',
                        link: '/rops/view',
                        icon: 'fa fa-angle-double-right'
                    }]
                });
            }

            ///EVCM Mgt
            if (permissions.includes('EVCM50')) {
                menu_items.push({
                    name: 'Velox Customer Management',
                    icon: 'fa fa-money',
                    child: [{
                        name: 'Customer Accounts',
                        link: '/evcm/customer_account',
                        icon: 'fa fa-angle-double-right'
                    }, {
                        name: 'Manage Payments',
                        link: '/evcm/manage_payment',
                        icon: 'fa fa-angle-double-right'
                    }, {
                        name: 'Manage Credit Limits',
                        link: '/evcm/manage_creditlimit',
                        icon: 'fa fa-angle-double-right'
                    }, {
                        name: 'Purchase History',
                        link: '/evcm/manage_purchase',
                        icon: 'fa fa-angle-double-right'
                    }]
                });
            }

            ///Equipment Maintenanace
            if (permissions.includes('PMM60') || permissions.includes('MML60')) {
                menu_items.push({ name: 'Facility Maintenance',
                    icon: 'fa fa-cog',
                    child: []
                });
                var current_index = menu_items.length - 1;

                if (permissions.includes('PMM60') || permissions.includes('EN-PMM60')) {
                    menu_items[current_index].child.push({
                        name: 'View Pump Readings',
                        link: '/maintenance/pump',
                        icon: 'fa fa-angle-double-right'
                    });
                }

                if (permissions.includes('MML60') || permissions.includes('EN-MML60')) {
                    menu_items[current_index].child.push({
                        name: 'Manage Pump Maintenance Log',
                        link: '/maintenance/manage-pump-maintenance',
                        icon: 'fa fa-angle-double-right'
                    });
                }
            }
            ///Equipment Maintenanace for the engineering company
            if (permissions.includes('EN-PMM60') || permissions.includes('EN-MML60')) {
                menu_items.push({ name: 'Facility Maintenance (EC)',
                    icon: 'fa fa-cog',
                    child: []
                });
                var current_index = menu_items.length - 1;

                if (permissions.includes('MML60') || permissions.includes('EN-MML60')) {
                    menu_items[current_index].child.push({
                        name: 'Manage Pump Maintenance Log',
                        link: '/maintenance/manage-pump-maintenance-engineering-company',
                        icon: 'fa fa-angle-double-right'
                    });
                }

                if (permissions.includes('PMM60') || permissions.includes('EN-PMM60')) {
                    menu_items[current_index].child.push({
                        name: 'View/Download Pump Readings',
                        link: '/maintenance/pump-engineering-company',
                        icon: 'fa fa-angle-double-right'
                    });
                }
            }

            ///SUPERADMIN Mgt
            if (permissions.includes('SU-MAN')) {
                menu_items.push({
                    name: 'E360 Super Admin',
                    icon: 'fa fa-money',
                    child: [{
                        name: 'Manage Companies',
                        link: '/superadmin/company/manage',
                        icon: 'fa fa-angle-double-right'
                    }, {
                        name: 'Manage All Users',
                        link: '/superadmin/user/manage',
                        icon: 'fa fa-angle-double-right'
                    }, {
                        name: 'Delete Readings',
                        link: '/superadmin/ss-management/delete',
                        icon: 'fa fa-angle-double-right'
                    }]
                });
            }

            ////console.log(menu_items);
            return menu_items;
        }
    }
});

/***/ }),

/***/ 1451:
/***/ (function(module, exports, __webpack_require__) {

exports.vmenu = __webpack_require__(1452);
exports.vsubMenu = __webpack_require__(1455);
exports.vmenuItem = __webpack_require__(1460);

/***/ }),

/***/ 1452:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1453)
/* template */
var __vue_template__ = __webpack_require__(1454)
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
Component.options.__file = "src/components/layouts/left-side/default/menu/vueMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6709deaa", Component.options)
  } else {
    hotAPI.reload("data-v-6709deaa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            url_params: ''
        };
    },

    computed: {
        $collapseItems: function $collapseItems() {
            return this.$children.filter(function (child) {
                return child._isCollapseItem;
            });
        }
    },
    methods: {
        openByIndex: function openByIndex(index) {
            this.$collapseItems.forEach(function (item, i) {
                if (i !== index) {
                    item.isActived = false;
                }
            });
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.$on("closeall", function (index) {
            _this.openByIndex(index);
        });
        var user_details = JSON.parse(localStorage.getItem('user_details'));
        //this.url_params = 'https://www.e360stationanalytics.com/sm_redirect?UID='+user_details.id+'&Slug='+user_details.token_h;
        this.url_params = 'https://www.e360stationanalytics.com';
    }
});

/***/ }),

/***/ 1454:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vuemenu navigation" },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("a", { attrs: { target: "_blank", href: _vm.url_params } }, [
        _vm._v(" >>>"),
        _c("b", [_vm._v("GO TO Station Analytics")])
      ])
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6709deaa", module.exports)
  }
}

/***/ }),

/***/ 1455:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1456)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1458)
/* template */
var __vue_template__ = __webpack_require__(1459)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-50ffab65"
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
Component.options.__file = "src/components/layouts/left-side/default/menu/subMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-50ffab65", Component.options)
  } else {
    hotAPI.reload("data-v-50ffab65", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1456:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1457);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("575b28d7", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50ffab65\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-50ffab65\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./subMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1457:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.collapse-item .submenu-header[data-v-50ffab65] {\n  cursor: pointer;\n  color: #536973;\n  padding: 11px 10px 11px 30px;\n}\n.collapse-item .submenu-header[data-v-50ffab65]:hover {\n    color: #0a3c5f;\n}\n.collapse-item .submenu-header .submenu-header-title[data-v-50ffab65] {\n    vertical-align: text-bottom;\n}\n.collapse-item .submenu-header .active .submenu-header-title[data-v-50ffab65] {\n    font-weight: 600;\n}\n.collapse-item .submenu-content[data-v-50ffab65] {\n  background-color: #f3f3f3;\n  overflow-y: hidden;\n  position: relative;\n}\n.collapse-item .submenu-content-box[data-v-50ffab65]:active {\n  color: #000;\n}\n.collapse-item .submenu_icon[data-v-50ffab65] {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  font-size: 16px;\n  margin-top: -2px;\n  color: #3e6174;\n}\n.collapse-item.active > .submenu-header[data-v-50ffab65] {\n  background-color: #1e6e9f;\n  color: #fff;\n  font-weight: 500;\n}\n.collapse-item.active > .submenu-header > .submenu_icon[data-v-50ffab65] {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n.collapse-item.active > .submenu-header i[data-v-50ffab65] {\n    color: #fff !important;\n}\n.leftmenu_icon[data-v-50ffab65] {\n  margin-right: 6px;\n  line-height: 20px;\n  height: 22px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #536973;\n}\n.leftmenu_icon:hover .submenu-header-title[data-v-50ffab65], .leftmenu_icon:hover .submenu_icon[data-v-50ffab65] {\n  padding-left: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_animejs__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        selected: Boolean,
        icon: String,
        title: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            isActived: this.selected
        };
    },

    computed: {
        index: function index() {
            return this.$parent.$collapseItems.indexOf(this);
        }
    },
    created: function created() {
        this._isCollapseItem = true;
    },
    mounted: function mounted() {
        var _this = this;

        function activate(self) {
            if (self.$refs.box) {
                self.isActived = self.$refs.box.querySelectorAll("a.active").length >= 1 ? true : false;
            }
        }
        //change when route changes
        this.$store.subscribe(function (mutation, state) {
            if (mutation.type == "routeChange" && mutation.payload == "end") {
                setTimeout(function () {
                    activate(_this);
                }, 0);
            }
        });
        activate(this);
    },

    methods: {
        toggle: function toggle() {
            this.$parent.$emit('closeall', this.index);
            this.isActived = !this.isActived;
        },
        cancel: function cancel() {
            this.anime.pause();
        },
        before: function before(targets) {
            targets.removeAttribute('style');
        },
        enter: function enter(targets, done) {
            var height = targets.scrollHeight;
            targets.style.height = 0;
            targets.style.opacity = 0;
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [0, 1],
                height: height,
                complete: function complete() {
                    targets.removeAttribute('style');
                    done();
                }
            });
        },
        leave: function leave(targets, complete) {
            __WEBPACK_IMPORTED_MODULE_0_animejs___default()({
                targets: targets,
                duration: 377,
                easing: 'easeOutExpo',
                opacity: [1, 0],
                height: 0
            });
        }
    }
});

/***/ }),

/***/ 1459:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "submenu collapse-item", class: { active: _vm.isActived } },
    [
      _c(
        "div",
        {
          staticClass: "submenu-header touchable",
          attrs: {
            role: "tab",
            "aria-expanded": _vm.selected ? "true" : "fase"
          },
          on: { click: _vm.toggle }
        },
        [
          _c("i", { staticClass: "leftmenu_icon\n", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "submenu-header-title" }, [
            _vm._v(_vm._s(_vm.title))
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]
      ),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: { name: "collapsed-fade", css: false },
          on: {
            "before-appear": _vm.before,
            appear: _vm.enter,
            "appear-cancel": _vm.cancel,
            "before-enter": _vm.before,
            enter: _vm.enter,
            "enter-cancel": _vm.cancel,
            leave: _vm.leave,
            "leave-cancel": _vm.cancel
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isActived,
                  expression: "isActived"
                }
              ],
              staticClass: "submenu-content"
            },
            [
              _c(
                "div",
                { ref: "box", staticClass: "submenu-content-box" },
                [_vm._t("default")],
                2
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "submenu_icon float-right" }, [
      _c("i", { staticClass: "fa fa-angle-right" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-50ffab65", module.exports)
  }
}

/***/ }),

/***/ 1460:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1461)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1463)
/* template */
var __vue_template__ = __webpack_require__(1464)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79869808"
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
Component.options.__file = "src/components/layouts/left-side/default/menu/MenuItem.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79869808", Component.options)
  } else {
    hotAPI.reload("data-v-79869808", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1461:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1462);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("f5c0ea4e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79869808\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuItem.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79869808\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./MenuItem.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1462:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\na[data-v-79869808] {\n  color: #536973;\n  position: relative;\n  display: block;\n  line-height: 21px;\n  padding: 10px 30px;\n}\na[data-v-79869808]:hover {\n    color: #0a3c5f;\n}\na.active[data-v-79869808] {\n    color: #fff;\n    background-color: #1e6e9f;\n}\na.active i[data-v-79869808] {\n      color: #fff !important;\n}\n\n/*.submenu-content-box .listbrdr::after{\n      content: \"\";\n     display: block;\n     position: absolute;\n     width: 11px;\n     left: 25px;\n     margin-top: -21px;\n     border-top: 2px solid #888585;\n     }*/\n.submenu-content-box .listbrdr[data-v-79869808]:active {\n  color: #000;\n}\n.submenu-content a[data-v-79869808] {\n  padding: 11px 20px 10px 45px;\n  position: relative;\n}\n.submenu-content .leftmenu_icon[data-v-79869808] {\n  font-size: 14px;\n  color: inherit;\n}\n.name[data-v-79869808] {\n  vertical-align: text-bottom;\n}\n.collapse-item .card-content .card-content-box div a[data-v-79869808] {\n  padding-left: 43px;\n}\n.leftmenu_icon[data-v-79869808] {\n  margin-right: 1px;\n  line-height: 22px;\n  height: 23px;\n  width: 20px;\n  text-align: center;\n  font-size: 16px;\n  color: #536973;\n}\n", ""]);

// exports


/***/ }),

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ["link", "icon"]
});

/***/ }),

/***/ 1464:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "listbrdr" },
    [
      _c(
        "router-link",
        { staticClass: "menu-item", attrs: { to: _vm.link, exact: "" } },
        [
          _c("i", { staticClass: "leftmenu_icon", class: _vm.icon }),
          _vm._v(" "),
          _c("span", { staticClass: "name" }, [_vm._t("default")], 2)
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79869808", module.exports)
  }
}

/***/ }),

/***/ 1465:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1466)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = null
/* template */
var __vue_template__ = __webpack_require__(1468)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e1ac488e"
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
Component.options.__file = "src/components/layouts/left-side/left-profile/user_profile2.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e1ac488e", Component.options)
  } else {
    hotAPI.reload("data-v-e1ac488e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1466:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1467);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("e03bb20e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ac488e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile2.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e1ac488e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./user_profile2.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1467:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/*user section*/\n.user_section[data-v-e1ac488e] {\n  height: 188px;\n  padding: 15px 20px;\n}\n.user_section .img-wrapper[data-v-e1ac488e] {\n    width: 100px;\n    border-radius: 50%;\n    padding: 7px;\n    margin: auto;\n}\n.user_section img[data-v-e1ac488e] {\n    width: 84px;\n    border: 2px solid #ccc;\n}\n.user_section p[data-v-e1ac488e] {\n    font-size: 15px;\n}\n.user_section .leftuser_icons .logout_padd[data-v-e1ac488e] {\n    padding: 1px !important;\n}\n.user_name_max[data-v-e1ac488e] {\n  text-transform: uppercase;\n  font-weight: 700;\n  max-width: 210px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n  padding-top: 2px;\n  padding-bottom: 5px;\n}\n.leftuser_icons div[data-v-e1ac488e] {\n  cursor: pointer;\n  padding: 1px 12px;\n  font-size: 18px;\n  background-color: transparent;\n  margin-right: 3px;\n  border-radius: 50px;\n  margin: auto;\n  width: 100%;\n  display: inline;\n}\n.user_name_max[data-v-e1ac488e],\n.leftuser_icons i[data-v-e1ac488e] {\n  color: #536973;\n}\n", ""]);

// exports


/***/ }),

/***/ 1468:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "user_section" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [
          _c("div", { staticClass: "img-wrapper" }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: { src: __webpack_require__(576), alt: "user" }
            })
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-2 mb-1 user_name_max text-center" }, [
            _vm._v(_vm._s(this.$store.state.user.fullname))
          ])
        ]),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "leftuser_icons col-12 compact_data" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-3" }, [
          _c(
            "a",
            {
              attrs: { href: "/#/admin/users/profile", title: "User Profile" }
            },
            [_c("i", { staticClass: "fa fa-user-o" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3" }, [
          _c("a", { attrs: { href: "/#/lockscreen", title: "Lock screen" } }, [
            _c("i", {
              staticClass: "fa fa-lock",
              attrs: { "aria-hidden": "true" }
            })
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-3 logout_padd" }, [
          _c("a", { attrs: { href: "/#/login", title: "Logout" } }, [
            _c("i", { staticClass: "fa fa-sign-out" })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e1ac488e", module.exports)
  }
}

/***/ }),

/***/ 1469:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("aside", { staticClass: "left-aside sidebar-offcanvas" }, [
    _c("section", { staticClass: "sidebar" }, [
      _c(
        "div",
        { attrs: { id: "menu", role: "navigation" } },
        [
          _c("div", { staticClass: "nav_profile" }, [_c("profile")], 1),
          _vm._v(" "),
          _c(
            "vmenu",
            [
              _vm._l(_vm.final_permissions, function(item) {
                return [
                  item.title
                    ? _c("li", { staticClass: "divider mt-3 " }, [
                        _c("span", [_vm._v(_vm._s(item.name))])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  item.child
                    ? _c(
                        "vsub-menu",
                        { attrs: { title: item.name, icon: item.icon } },
                        _vm._l(item.child, function(child) {
                          return _c(
                            "vmenu-item",
                            {
                              key: child.name,
                              attrs: { link: child.link, icon: child.icon }
                            },
                            [_vm._v(_vm._s(child.name))]
                          )
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  item.link
                    ? _c(
                        "vmenu-item",
                        { attrs: { link: item.link, icon: item.icon } },
                        [_vm._v(_vm._s(item.name) + "\n                    ")]
                      )
                    : _vm._e()
                ]
              })
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ccda5a12", module.exports)
  }
}

/***/ }),

/***/ 1470:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1471)
  __webpack_require__(1473)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1475)
/* template */
var __vue_template__ = __webpack_require__(1477)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1fc4383c"
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
Component.options.__file = "src/components/layouts/header/fixed-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1fc4383c", Component.options)
  } else {
    hotAPI.reload("data-v-1fc4383c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1471:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1472);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("007fb437", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1472:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.header[data-v-1fc4383c] {\n  z-index: 1030;\n}\n.header nav[data-v-1fc4383c] {\n    margin-bottom: 0;\n    height: 50px;\n    background: #1a5f8a;\n    background-size: 100% 100%;\n    -webkit-box-shadow: 0px 0px 10px #ccc;\n            box-shadow: 0px 0px 10px #ccc;\n}\n.header .navbar-right[data-v-1fc4383c] {\n    float: right;\n    margin-right: 15px;\n}\n.header .logo[data-v-1fc4383c] {\n    display: block;\n    float: left;\n    height: 50px;\n    line-height: 41px;\n    padding: 3px 10px;\n    text-align: center;\n    width: 250px;\n    background: #1a5f8a;\n}\n.header .logo img[data-v-1fc4383c] {\n      width: 125px;\n}\n.header .navbar-right .dropdown-item[data-v-1fc4383c] {\n    padding: 0;\n    width: 100%;\n    outline: none;\n}\n.header .navbar-right div.dropdown > a[data-v-1fc4383c] {\n    color: #fff;\n}\n.header .navbar-right div.dropdown .dropdown-menu > button[data-v-1fc4383c] {\n    padding: 10px 15px;\n}\n.header .navbar-right div.dropdown.notifications-menu[data-v-1fc4383c] {\n    height: 50px;\n}\n.header .navbar-right div.dropdown.notifications-menu .noti-icon[data-v-1fc4383c] {\n      font-size: 18px;\n}\n.header .navbar-right div.dropdown > a > i[data-v-1fc4383c] {\n    font-size: 23px;\n}\n.header .navbar-right div.dropdown > a[data-v-1fc4383c] {\n    display: block;\n    padding: 12px;\n}\n.header .navbar-right div.dropdown:hover > a[data-v-1fc4383c] {\n    background-color: #ededed;\n    color: #000;\n}\n.header .navbar-right div.dropdown > a.padding-user[data-v-1fc4383c] {\n    padding-top: 8px;\n    padding-bottom: 6px;\n}\n.header nav .sidebar-toggle[data-v-1fc4383c] {\n    float: left;\n    color: #fff;\n    font-size: 19px;\n    padding-top: 10px;\n}\n.user_name_max[data-v-1fc4383c] {\n  display: inline-block;\n  max-width: 180px;\n  white-space: nowrap;\n  overflow: hidden !important;\n  text-overflow: ellipsis;\n  margin: 0 0 -4px;\n}\n.noti_msg[data-v-1fc4383c] {\n  font-size: 16px;\n  padding: 10px;\n  border: 1px solid #4f90c1;\n  border-radius: 50px;\n  margin-top: 10px;\n}\n.user.user-menu > button img[data-v-1fc4383c] {\n  width: 35px;\n  height: 35px;\n}\n\n/**** END HEADER RIGHT SIDE DROPDOWNS ****/\n@media screen and (max-width: 767px) {\n.dropdown.open .dropdown-menu[data-v-1fc4383c] {\n    position: absolute;\n}\n.navbar-right > li > a[data-v-1fc4383c] {\n    padding: 10px 12px;\n}\n}\n\n/* Fix menu positions on xs screens to appear correctly and fully */\n@media (max-width: 560px) {\nbody .header .logo[data-v-1fc4383c],\n  body .header nav[data-v-1fc4383c] {\n    width: 100%;\n}\nbody .header nav .sidebar-toggle[data-v-1fc4383c] {\n    padding-left: 15px;\n}\nnav[data-v-1fc4383c] {\n    height: 100px !important;\n}\n}\n.notifications_badge_top[data-v-1fc4383c] {\n  margin-top: -28px;\n  margin-left: 10px;\n  position: absolute;\n}\n.notifications_badge_top span[data-v-1fc4383c] {\n    top: 1px;\n    left: 2px;\n    border-radius: 50%;\n    font-size: 9px;\n    padding: 0.23em 0.45em;\n}\n.notifications-menu .dropdown-item[data-v-1fc4383c] {\n  width: 100%;\n  display: block;\n}\n.dropdown-footer[data-v-1fc4383c] {\n  padding: 10px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1473:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1474);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("479704e2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1fc4383c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/sass-loader/lib/loader.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./fixed-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1474:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.wrapper {\n  margin-top: 50px;\n}\n@media screen and (max-width: 560px) {\n.wrapper {\n      margin-top: 100px;\n}\n}\n.sidebar-toggle {\n  margin-left: 10px;\n}\n.bell_bg button.btn-secondary {\n  background-color: #123e59;\n  border: none;\n  border-radius: 0;\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n}\n.bell_bg button.btn-secondary:hover {\n    background-color: #ededed !important;\n}\n.bell_bg button.btn-secondary:active {\n    color: #fff !important;\n}\n.bell_bg.show button {\n  background-color: #fff !important;\n}\n.bell_bg.user_btn .dropdown-toggle {\n  padding: 7px 9px;\n}\n.tabs_cont,\n.event_date {\n  background-color: #fff !important;\n}\nbody.left-hidden aside.right-aside {\n  margin-left: 0;\n}\nbody.left-hidden .header.fixed-top {\n  padding-right: 0 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 1475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull__ = __webpack_require__(1476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_screenfull__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: "vueadmin_header",

    methods: {
        toggle_menu: function toggle_menu() {
            this.$store.commit('left_menu', "toggle");
        },
        fullscreen: function fullscreen() {
            if (__WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.enabled) {
                __WEBPACK_IMPORTED_MODULE_0_screenfull___default.a.toggle();
            }
        }
    }
});

/***/ }),

/***/ 1476:
/***/ (function(module, exports) {

/*!
* screenfull
* v3.3.2 - 2017-10-27
* (c) Sindre Sorhus; MIT License
*/
(function () {
	'use strict';

	var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
	var isCommonjs = typeof module !== 'undefined' && module.exports;
	var keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;

	var fn = (function () {
		var val;

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// New WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// Old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var i = 0;
		var l = fnMap.length;
		var ret = {};

		for (; i < l; i++) {
			val = fnMap[i];
			if (val && val[1] in document) {
				for (i = 0; i < val.length; i++) {
					ret[fnMap[0][i]] = val[i];
				}
				return ret;
			}
		}

		return false;
	})();

	var eventNameMap = {
		change: fn.fullscreenchange,
		error: fn.fullscreenerror
	};

	var screenfull = {
		request: function (elem) {
			var request = fn.requestFullscreen;

			elem = elem || document.documentElement;

			// Work around Safari 5.1 bug: reports support for
			// keyboard in fullscreen even though it doesn't.
			// Browser sniffing, since the alternative with
			// setTimeout is even worse.
			if (/ Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent)) {
				elem[request]();
			} else {
				elem[request](keyboardAllowed && Element.ALLOW_KEYBOARD_INPUT);
			}
		},
		exit: function () {
			document[fn.exitFullscreen]();
		},
		toggle: function (elem) {
			if (this.isFullscreen) {
				this.exit();
			} else {
				this.request(elem);
			}
		},
		onchange: function (callback) {
			this.on('change', callback);
		},
		onerror: function (callback) {
			this.on('error', callback);
		},
		on: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.addEventListener(eventName, callback, false);
			}
		},
		off: function (event, callback) {
			var eventName = eventNameMap[event];
			if (eventName) {
				document.removeEventListener(eventName, callback, false);
			}
		},
		raw: fn
	};

	if (!fn) {
		if (isCommonjs) {
			module.exports = false;
		} else {
			window.screenfull = false;
		}

		return;
	}

	Object.defineProperties(screenfull, {
		isFullscreen: {
			get: function () {
				return Boolean(document[fn.fullscreenElement]);
			}
		},
		element: {
			enumerable: true,
			get: function () {
				return document[fn.fullscreenElement];
			}
		},
		enabled: {
			enumerable: true,
			get: function () {
				// Coerce to boolean in case of old WebKit
				return Boolean(document[fn.fullscreenEnabled]);
			}
		}
	});

	if (isCommonjs) {
		module.exports = screenfull;
	} else {
		window.screenfull = screenfull;
	}
})();


/***/ }),

/***/ 1477:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("header", { staticClass: "header fixed-top" }, [
    _c(
      "nav",
      [
        _c("router-link", { staticClass: "logo", attrs: { to: "/" } }, [
          _c("img", {
            attrs: { src: __webpack_require__(577), alt: "logo" }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "float-left" }, [
          _c(
            "a",
            {
              staticClass: "sidebar-toggle",
              attrs: { href: "javascript:void(0)" },
              on: { click: _vm.toggle_menu }
            },
            [_c("i", { staticClass: "fa fa-bars" })]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-right" }, [
          _c(
            "div",
            [
              _vm.fullscreen
                ? _c(
                    "div",
                    {
                      staticClass:
                        "dropdown hidden-xs-down btn-group fullscreen"
                    },
                    [
                      _c(
                        "a",
                        {
                          attrs: { href: "javascript:void(0)" },
                          on: { click: _vm.fullscreen }
                        },
                        [_c("i", { staticClass: "fa fa-arrows-alt" })]
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "b-dropdown",
                {
                  staticClass: "user user-menu bell_bg user_btn",
                  attrs: { right: "", link: "" }
                },
                [
                  _c("span", { attrs: { slot: "text" }, slot: "text" }, [
                    _c("p", { staticClass: "user_name_max" }, [
                      _vm._v(_vm._s(this.$store.state.user.username))
                    ])
                  ])
                ]
              )
            ],
            1
          )
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1fc4383c", module.exports)
  }
}

/***/ }),

/***/ 1478:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1479);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./custom.scss", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/sass-loader/lib/loader.js!./custom.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "/*\nCreated by: Jyostna Designs\n\n[TABLE OF CONTENTS]\n\n1.  RESET STYLES\n2.  HEADER STYLES\n    2.1 HEADER LEFT\n    2.2 HEADER RIGHT SIDE DROPDOWNS\n3. LEFT SIDEBAR\n4. MAIN WRAPPER STYLES\n5. LEFT MENU COLLAPSE STYLES\n6. CUSTOM STYLES\n7. MEDIA QUERIES\n\n*/\n/*===import bootstrap variables===*/\n/*****  1.RESET STYLES  *****/\nhtml {\n  background: none repeat scroll 0 0 #fff;\n  overflow-x: hidden;\n  transition: all .25s ease-out;\n  font-size: small; }\n\nhtml,\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"; }\n\nbody {\n  background: none repeat scroll 0 0 #fff;\n  overflow-x: hidden;\n  transition: all .25s ease-out;\n  font-size: small;\n  letter-spacing: 0.5px;\n  width: 100%;\n  margin: 0 auto; }\n\nbody,\n#app,\n#app > div,\n#app div.wrapper {\n  min-height: calc(100vh - 102px); }\n\nbody.modal-open, body.modal-open .header {\n  padding-right: 0 !important; }\n\nul {\n  list-style: none; }\n\nlabel {\n  font-weight: 400;\n  font-size: 14px;\n  letter-spacing: 1px; }\n\na:hover,\na {\n  text-decoration: none !important; }\n\n.table > thead > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > th,\n.table > tbody > tr > td,\n.table > tfoot > tr > th,\n.table > tfoot > tr > td {\n  vertical-align: middle; }\n\n/**Dropdown menus**/\n.dropdown-menu {\n  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);\n  z-index: 2300;\n  margin-top: 0;\n  border: none;\n  outline: none; }\n\n/*********6. CUSTOM STYLES *********/\n.submenu-content .name {\n  vertical-align: text-top !important; }\n\n/*text-area resize*/\n.resize_vertical {\n  resize: vertical; }\n\nh4.card-header {\n  font-size: 16px; }\n\n.card {\n  margin-bottom: 25px; }\n\n/**************card bg colors*******************/\n.bg-primary-card {\n  border: 1px solid #337ab7; }\n  .bg-primary-card > .card-header {\n    background-color: #337ab7;\n    color: #fff; }\n\n.bg-info-card {\n  border: 1px solid #4fc1e9; }\n  .bg-info-card > .card-header {\n    background-color: #4fc1e9;\n    color: #fff; }\n\n.bg-warning-card {\n  border: 1px solid #fea115; }\n  .bg-warning-card > .card-header {\n    background-color: #fea115;\n    color: #fff; }\n\n.bg-danger-card {\n  border: 1px solid #fd7570; }\n  .bg-danger-card > .card-header {\n    background-color: #fd7570;\n    color: #fff; }\n\n.bg-success-card {\n  border: 1px solid #16af81; }\n  .bg-success-card > .card-header {\n    background-color: #16af81;\n    color: #fff; }\n\n.bg-primary-card:hover,\n.bg-info-card:hover,\n.bg-danger-card:hover,\n.bg-warning-card:hover,\n.bg-success-card:hover,\n.card:hover {\n  box-shadow: 1px 1px 38px -8px #8e8c8e; }\n\n.btn-link,\n.btn {\n  cursor: pointer; }\n\n/*=======hide unwanted content in print======*/\n@media print {\n  header.header,\n  aside.left-aside,\n  section.content-header,\n  #scroll {\n    display: none !important; }\n  .table-responsive {\n    display: inline-table;\n    width: 100%; } }\n\n/*=======hide unwanted content in print======*/\n/*============header styles=======*/\nheader .navbar-right .dropdown-menu {\n  padding: 0; }\n\nheader .navbar-right .dropdownheader .nav.nav-tabs,\nheader .navbar-right .dropdown-footer,\nheader .navbar-right .dropdownheader:hover .nav.nav-tabs,\nheader .navbar-right .dropdown-footer:hover {\n  background: #1a5f8a;\n  color: #fff;\n  border: 1px solid #ccc; }\n\nheader .navbar-right .show > .btn-secondary.dropdown-toggle {\n  background-color: #fff;\n  color: #000;\n  border-color: #fff; }\n\nheader .navbar-right .btn-link:focus,\nheader .navbar-right .btn-link:hover,\nheader .navbar-right .btn-link:active {\n  text-decoration: none; }\n\nheader .navbar-right .btn .btn:active {\n  border: none; }\n\nheader .navbar-right .btn-group > button {\n  vertical-align: top;\n  color: #fff; }\n  header .navbar-right .btn-group > button:hover {\n    background-color: #ededed;\n    color: #000; }\n\n@media (max-width: 560px) {\n  .notifications-menu .dropdown-menu.dropdown-menu-right {\n    right: -123px; } }\n\n.notifications-menu .dropdown-menu {\n  width: 300px; }\n\n.dropdownheader .nav-tabs .nav-link {\n  color: #fff; }\n\n.dropdown-menu .nav-tabs .nav-link:focus,\n.dropdown-menu .nav-tabs .nav-link:hover {\n  border-color: transparent; }\n\n.dropdown-menu .nav-tabs .nav-link.active,\n.dropdown-menu .nav-tabs .nav-item.show .nav-link {\n  color: #000;\n  background-color: #eee; }\n\n.nav-tabs > li > a {\n  color: #000; }\n\n.drpodowtext {\n  color: #333;\n  transition: 300ms; }\n\n.drpodowtext:hover {\n  margin-left: 12px;\n  transition: 300ms; }\n\n.dropdown_content a {\n  width: 100%;\n  display: block;\n  padding: 10px 15px; }\n\n.dropdown-item img {\n  height: 50px;\n  width: 50px; }\n\n.dropdown-item.active,\n.dropdown-item:active {\n  color: #111;\n  text-decoration: none;\n  background-color: transparent; }\n\n.btn-secondary:focus,\n.btn-secondary.focus {\n  box-shadow: none; }\n\n.dropdown-toggle::after {\n  display: none; }\n\n/*============header styles=======*/\n/*====================form editors Start============*/\n.ql-container .ql-editor {\n  min-height: 20em;\n  padding-bottom: 1em;\n  max-height: 25em; }\n\n.nav-tabs:focus {\n  outline: none; }\n\n/*====================form editors end============*/\n/*=========calendar========*/\n.full-calendar-body .dates .dates-events .events-week .events-day {\n  min-height: 100px !important; }\n\n.full-calendar-header > div.header-center {\n  font-size: 18px; }\n\n/*=========calendar========*/\n/*======chartist=====*/\n.ct-series-a .ct-line,\n.ct-series-a .ct-point {\n  stroke: #8dcee4 !important; }\n\n.ct-series-b .ct-line,\n.ct-series-b .ct-point {\n  stroke: #4fc1e9 !important; }\n\n.ct-series-c .ct-line,\n.ct-series-c .ct-point {\n  stroke: #16AF81 !important; }\n\n.ct-series-d .ct-line,\n.ct-series-d .ct-point {\n  stroke: #8dcee4 !important; }\n\n/*======chartist bars=====*/\n.ct-series-a .ct-bar {\n  /* Colour of your bars */\n  stroke: #97d9ef !important; }\n\n.ct-series-b .ct-bar {\n  /* Colour of your bars */\n  stroke: #4fc1e9 !important; }\n\n.ct-label {\n  font-size: 10px;\n  color: #000; }\n\n/*======pie chart=====*/\n.ct-series-a .ct-slice-pie {\n  fill: #7faff7 !important; }\n\n.ct-series-b .ct-slice-pie {\n  fill: #6f8dd5 !important; }\n\n.ct-series-c .ct-slice-pie {\n  fill: #11bca9 !important; }\n\n.v-chartist-container {\n  height: 300px; }\n\n/*====== donut chart=====*/\n.ct-series-a .ct-slice-donut {\n  stroke: #11bca9 !important; }\n\n.ct-series-a .ct-slice-donut {\n  stroke: #6f8dd5 !important; }\n\n.ct-series-a .ct-slice-donut {\n  stroke: #7faff7 !important; }\n\n.ct-series-c .ct-slice-donut {\n  stroke: #11bca9 !important; }\n\n.ct-series-b .ct-slice-donut {\n  stroke: #6f8dd5 !important; }\n\n/*=======form-elements======*/\n.drp_align .dropdown-menu {\n  left: -100%; }\n\n.form_elemntsdropdown .dropdown-item {\n  padding: 10px 15px; }\n\n/*=======form-elements======*/\n/*========breadcrumbs====*/\n.breadcrumb1 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\BB\"; }\n\n.breadcrumb2 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\203A\" !important; }\n\n.breadcrumb3 > .breadcrumb-item + .breadcrumb-item::before {\n  content: \"\\2013   \"; }\n\n/*========breadcrumbs====*/\n/*==========datepickers=========*/\n.vdp-datepicker input,\n.vdp-datepicker select {\n  padding: .75em .5em;\n  font-size: 100%;\n  border: 1px solid #dcdccc;\n  width: 100%; }\n\n@media (max-width: 768px) {\n  .vdp-datepicker__calendar {\n    width: 100% !important; } }\n\n/*==========datepickers=========*/\n.pull-right {\n  float: right; }\n\n.car-header:first-child {\n  border: none !important; }\n\n.form-control {\n  transition: initial; }\n", ""]);

// exports


/***/ }),

/***/ 1480:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1481);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(27)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./fixed-menu.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./fixed-menu.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1481:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "aside.left-aside {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  max-height: 100%;\n  height: calc(100% - 50px);\n  overflow-y: auto; }\n  @media screen and (max-width: 560px) {\n    aside.left-aside {\n      top: 100px;\n      height: calc(100% - 100px); } }\n\naside.right-aside {\n  display: block !important;\n  width: auto !important;\n  margin-left: 250px; }\n\nbody.left-hidden aside.right-aside {\n  margin-left: 0; }\n", ""]);

// exports


/***/ }),

/***/ 1482:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { attrs: { id: "content-header" } }, [_vm._v(".")]),
      _vm._v(" "),
      _c("v-dialog"),
      _vm._v(" "),
      _c("preloader", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: this.$store.state.preloader,
            expression: "this.$store.state.preloader"
          }
        ]
      }),
      _vm._v(" "),
      _c("vueadmin_header"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "wrapper row-offcanvas" },
        [
          _c("left_side", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: this.$store.state.left_open,
                expression: "this.$store.state.left_open"
              }
            ]
          }),
          _vm._v(" "),
          _c("right_side", [_c("router-view")], 1)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-24b4a97a", module.exports)
  }
}

/***/ }),

/***/ 287:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1435)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1437)
/* template */
var __vue_template__ = __webpack_require__(1482)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24b4a97a"
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
Component.options.__file = "src/layout.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24b4a97a", Component.options)
  } else {
    hotAPI.reload("data-v-24b4a97a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 576:
/***/ (function(module, exports) {

module.exports = "/images/users.png?f5bad009d52391db097b3929b1bffed1";

/***/ }),

/***/ 577:
/***/ (function(module, exports) {

module.exports = "/images/logo_black.png?bdcfac9ddc18a607802102b4c6692f5a";

/***/ })

});