webpackJsonp([73],{

/***/ 1872:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1873);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("cf4ba08e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b18651ca\",\"scoped\":true,\"hasInlineConfig\":true}!./pricing.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b18651ca\",\"scoped\":true,\"hasInlineConfig\":true}!./pricing.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1873:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.plan-desc[data-v-b18651ca] {\n    color : #777;\n}\n.basic[data-v-b18651ca], .standard[data-v-b18651ca], .premium[data-v-b18651ca] {\n    border         : 1px solid #E5E5E5;\n    border-radius  : 3px;\n    margin-top     : 20px;\n    margin-bottom  : 10px;\n    padding-bottom : 25px;\n}\n.standard[data-v-b18651ca] {\n    -webkit-box-shadow : 0 6px 30px #CCC;\n            box-shadow : 0 6px 30px #CCC;\n}\n.modal-1[data-v-b18651ca]{\n    background-color: #fff;\n}\n.modal-2[data-v-b18651ca]{\n    background-color: #fff;\n}\n.modal-1 .pack-heading[data-v-b18651ca] {\n    background-color : #E5E5E5;\n    margin-bottom    : 10px;\n    padding          : 9px 0;\n    height           : 76px;\n}\n.modal-1 .pack-title[data-v-b18651ca] {\n    font-size : 22px;\n}\n.modal-1 .pack-price[data-v-b18651ca] {\n    position      : absolute;\n    width         : 55px;\n    height        : 55px;\n    left          : 0;\n    right         : 0;\n    margin-top    : -3px;\n    margin-left   : auto;\n    margin-right  : auto;\n    border-radius : 50px;\n    font-size     : 18px;\n    padding-top   : 15px;\n}\n.modal-1 .pack-details[data-v-b18651ca] {\n    padding : 45px 15px 10px;\n}\n.modal-1 .pack-details li[data-v-b18651ca] {\n    margin-bottom : 15px;\n    line-height   : 40px;\n    color         : #777;\n    font-size     : 13px;\n}\n.modal-1 .btn-getit[data-v-b18651ca] {\n    border-radius         : 20px;\n    padding               : 5px 17px;\n}\n.modal-1 .trending-tag[data-v-b18651ca] {\n    height   : 68px;\n    overflow : hidden;\n    position : absolute;\n    right    : 12px;\n    top      : 17px;\n    width    : 85px;\n}\n.tag-design[data-v-b18651ca] {\n    font              : bold 12px Open Sans;\n    padding           : 3px 0;\n    position          : relative;\n    text-align        : center;\n    top               : 15px;\n    -webkit-transform         : rotate(40deg);\n            transform         : rotate(40deg);\n    width             : 110px;\n    -webkit-box-shadow        : 9px 0 10px #777;\n            box-shadow        : 9px 0 10px #777;\n}\n/*tarrif modal 2*/\n.modal-2[data-v-b18651ca] {\n    margin-top    : 25px;\n    margin-bottom : 20px;\n    padding       : 20px;\n}\n.shared.modal-2[data-v-b18651ca] {\n    border : 1px solid #6699CC;\n}\n.shared .text-dark[data-v-b18651ca]:hover{\n    color: #fff !important;\n}\n.vps.modal-2[data-v-b18651ca] {\n    border : 1px solid #FF6666;\n}\n.dedicated.modal-2[data-v-b18651ca] {\n    border : 1px solid #66CCFF;\n}\n.modal-2 .pack-price[data-v-b18651ca] {\n    position      : absolute;\n    width         : 65px;\n    height        : 65px;\n    top           : 7px;\n    right         : 0;\n    border-radius : 50px;\n    font-size     : 18px;\n    padding-top   : 11px;\n    border        : 9px solid #FFF;\n}\n.bg-danger[data-v-b18651ca], .bg-info[data-v-b18651ca] {\n    color : #FFF;\n}\n.modal-2 .pack-title[data-v-b18651ca] {\n    margin-top : 0;\n    font-size  : 22px;\n}\n.modal-2 .pack-desc[data-v-b18651ca] {\n    font-size : 14px;\n    color     : #666;\n}\n.modal-2 .pack-body[data-v-b18651ca] {\n    margin-right : -20px;\n    position     : relative;\n    overflow     : hidden;\n}\n.modal-2 .pack-details[data-v-b18651ca] {\n    margin-bottom : 20px;\n}\n.modal-2 .pack-details li[data-v-b18651ca] {\n    line-height : 40px;\n    color       : #777;\n    font-size   : 13px;\n}\n.modal-2 .pack-details li i[data-v-b18651ca] {\n    margin-right : 5px;\n}\n.modal-2 .tarrif_icon[data-v-b18651ca] {\n    position  : absolute;\n    right     : -44px;\n    font-size : 130px;\n    bottom    : -22px;\n    color     : #EEE;\n}\n@media screen and (max-width : 767px) {\n.trending-tag[data-v-b18651ca] {\n        right : 15px;\n        top   : 0;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 1874:
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
    name: "Pricing",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1875:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-12 col-sm-12 text-center" }, [
          _c("h3", { staticClass: "plan-desc" }, [
            _c("strong", [_vm._v("Meet our Web Hosting Tariff - 1 ")])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-10 offset-lg-1 col-sm-12" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4 text-center" }, [
              _c("div", { staticClass: "basic modal-1" }, [
                _c("div", { staticClass: "pack-heading" }, [
                  _c("h4", { staticClass: "pack-title text-primary" }, [
                    _c("strong", [_vm._v("Basic")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pack-price bg-primary" }, [
                    _c("strong", { staticClass: "text-white" }, [_vm._v("12$")])
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "pack-details list-unstyled" }, [
                  _c("li", [_vm._v("6 GB Storage")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("350 GB Bandwidth")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("No Domain")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("2 User")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("3 Databases")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("24x7 Email Support")])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary center-block btn-getit" },
                  [_vm._v("Get it now")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4 text-center" }, [
              _c("div", { staticClass: "standard modal-1" }, [
                _c("div", { staticClass: "trending-tag" }, [
                  _c(
                    "div",
                    { staticClass: "tag-design bg-primary text-white" },
                    [_vm._v("Best Deal")]
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pack-heading" }, [
                  _c("h4", { staticClass: "pack-title text-primary" }, [
                    _c("strong", [_vm._v("Standard")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pack-price bg-primary" }, [
                    _c("strong", { staticClass: "text-white" }, [_vm._v("17$")])
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "pack-details list-unstyled" }, [
                  _c("li", [_vm._v("14 GB Storage")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("500 GB Bandwidth")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("2 Domains")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("5 User")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("7 Databases")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("24x7 Email Support")])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary center-block btn-getit" },
                  [_vm._v("Get it now")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4 text-center" }, [
              _c("div", { staticClass: "premium modal-1" }, [
                _c("div", { staticClass: "pack-heading" }, [
                  _c("h4", { staticClass: "pack-title text-primary" }, [
                    _c("strong", [_vm._v("Premium")])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "pack-price bg-primary" }, [
                    _c("strong", { staticClass: "text-white" }, [_vm._v("25$")])
                  ])
                ]),
                _vm._v(" "),
                _c("ul", { staticClass: "pack-details list-unstyled" }, [
                  _c("li", [_vm._v("6 GB Storage")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("620 GB Bandwidth")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("6 Domains")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("12 User")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("15 Databases")]),
                  _vm._v(" "),
                  _c("li", [_vm._v("24x7 Email Support")])
                ]),
                _vm._v(" "),
                _c(
                  "button",
                  { staticClass: "btn btn-primary center-block btn-getit" },
                  [_vm._v("Get it now")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-lg-12 col-sm-12 text-center mb-3 mt-5" },
          [
            _c("h3", { staticClass: "plan-desc" }, [
              _c("strong", [_vm._v("Meet our Web Hosting Tariff - 2 ")])
            ])
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-12 col-sm-12" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "shared modal-2" }, [
                _c("div", { staticClass: "pack-heading" }, [
                  _c(
                    "div",
                    { staticClass: "pack-price bg-primary text-center" },
                    [
                      _c("strong", { staticClass: "text-white" }, [
                        _vm._v("17$")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("h4", { staticClass: "pack-title" }, [
                    _c("strong", { staticClass: "text-muted" }, [
                      _vm._v("Shared")
                    ]),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-primary" }, [
                      _vm._v("Hosting")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pack-desc" }, [
                    _vm._v(
                      "We provide every necessary tool to get a website running as quickly as possible."
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pack-body" }, [
                  _c("ul", { staticClass: "pack-details list-unstyled" }, [
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-rss text-primary",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" 350GB Band Width")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-arrow-circle-down text-primary",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" Free Domain\n                                ")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-database text-primary",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" 50 Data Base")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tarrif_icon" }, [
                    _c("i", {
                      staticClass: "fa fa-window-restore",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    { staticClass: "btn btn-primary btn-md text-dark" },
                    [_vm._v("Know More")]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "vps modal-2" }, [
                _c("div", { staticClass: "pack-heading" }, [
                  _c(
                    "div",
                    { staticClass: "pack-price bg-danger text-center" },
                    [_c("strong", [_vm._v("17$")])]
                  ),
                  _vm._v(" "),
                  _c("h4", { staticClass: "pack-title" }, [
                    _c("strong", { staticClass: "text-muted" }, [
                      _vm._v("VPS")
                    ]),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-danger" }, [
                      _vm._v("Hosting")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pack-desc" }, [
                    _vm._v(
                      "We provide every necessary tool to get a website running as quickly as possible."
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pack-body" }, [
                  _c("ul", { staticClass: "pack-details list-unstyled" }, [
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-rss text-danger",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" 800GB Band Width")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-arrow-circle-down text-danger",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" Free Domain\n                                ")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-database text-danger",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" 200 Data Base")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tarrif_icon" }, [
                    _c("i", {
                      staticClass: "fa fa-clipboard",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-danger btn-md" }, [
                    _vm._v("Know More")
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-4" }, [
              _c("div", { staticClass: "dedicated modal-2" }, [
                _c("div", { staticClass: "pack-heading" }, [
                  _c("div", { staticClass: "pack-price bg-info text-center" }, [
                    _c("strong", [_vm._v("25$")])
                  ]),
                  _vm._v(" "),
                  _c("h4", { staticClass: "pack-title" }, [
                    _c("strong", { staticClass: "text-muted" }, [
                      _vm._v("Dedicated")
                    ]),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-info" }, [
                      _vm._v("Hosting")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "pack-desc" }, [
                    _vm._v(
                      "We provide every necessary tool to get a website running as quickly as possible."
                    )
                  ]),
                  _vm._v(" "),
                  _c("hr")
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pack-body" }, [
                  _c("ul", { staticClass: "pack-details list-unstyled" }, [
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-rss text-info",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" 1350GB Band Width")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-arrow-circle-down text-info",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" Free Domain")
                    ]),
                    _vm._v(" "),
                    _c("li", [
                      _c("i", {
                        staticClass: "fa fa-database text-info",
                        attrs: { "aria-hidden": "true" }
                      }),
                      _vm._v(" 350 Data Base")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "tarrif_icon" }, [
                    _c("i", {
                      staticClass: "fa fa-database",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]),
                  _vm._v(" "),
                  _c("button", { staticClass: "btn btn-info btn-md" }, [
                    _vm._v("Know More")
                  ])
                ])
              ])
            ])
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
    require("vue-hot-reload-api")      .rerender("data-v-b18651ca", module.exports)
  }
}

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1872)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1874)
/* template */
var __vue_template__ = __webpack_require__(1875)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b18651ca"
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
Component.options.__file = "src/components/pages/pricing.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b18651ca", Component.options)
  } else {
    hotAPI.reload("data-v-b18651ca", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});