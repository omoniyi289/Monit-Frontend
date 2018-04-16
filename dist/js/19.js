webpackJsonp([19],{

/***/ 1807:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1808);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("3e9bc382", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-476ab0a0\",\"scoped\":true,\"hasInlineConfig\":true}!./user_profile.css", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-476ab0a0\",\"scoped\":true,\"hasInlineConfig\":true}!./user_profile.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1808:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.profile[data-v-476ab0a0] {\n    padding-bottom: 15px;\n}\n.user-rating[data-v-476ab0a0] {\n    font-size: 16px;\n    border-right: 2px solid #ccc;\n}\n.panel-heading.data[data-v-476ab0a0] {\n    padding: 0 15px;\n}\n\n\n/*custom tabs*/\n.nav-tabs > li > a[data-v-476ab0a0] {\n    color: #888;\n    padding: 10px 20px;\n}\n.nav-tabs > li.active > a[data-v-476ab0a0]:after {\n    content: '';\n    position: absolute;\n    bottom: -1px;\n    display: block;\n    width: 70%;\n    left: 15%;\n    border-bottom: 4px solid #3399FF;\n}\n.nav-tabs > li.active > a[data-v-476ab0a0],\n.nav-tabs > li.active > a[data-v-476ab0a0]:hover,\n.nav-tabs > li.active > a[data-v-476ab0a0]:focus {\n    color: #3399FF;\n    background-color: transparent;\n    border: 0;\n    border-bottom-color: transparent;\n}\n.profile_details .tab-content[data-v-476ab0a0] {\n    padding: 20px 10px 0;\n}\n.profile_details #tab-details label[data-v-476ab0a0] {\n    font-weight: bold;\n    color: #8f8f8f;\n    border-bottom: 2px dotted #ccc;\n}\n.profile_details #tab-details p.info[data-v-476ab0a0] {\n    font-size: 16px;\n}\n.dl-horizontal dt[data-v-476ab0a0] {\n    width: 40%;\n    float: left;\n    clear: left;\n    text-align: right;\n    margin-bottom: 15px;\n    color: #777;\n}\n.dl-horizontal dd[data-v-476ab0a0] {\n    margin-left: 43%;\n}\n\n\n/*project details*/\n.nav_border > li > a[data-v-476ab0a0] {\n    padding: 10px 2px;\n    line-height: 20px;\n}\n.nav_border > li[data-v-476ab0a0]:not(:last-child) {\n    border-bottom: 1px solid #eee;\n}\n.nav.nav-stacked > li > a[data-v-476ab0a0]:hover,\n.nav.nav-stacked > li > a[data-v-476ab0a0]:focus {\n    background-color: #f9f9f9;\n}\n\n\n/*connections*/\n.connection[data-v-476ab0a0] {\n    -webkit-box-shadow: 0 0 5px #ccc;\n            box-shadow: 0 0 5px #ccc;\n    border: 1px solid #efefef;\n    margin: 25px 0 0;\n    position: relative;\n}\n.connect-head[data-v-476ab0a0] {\n    width: 100%;\n    padding: 12px 0;\n    position: relative;\n}\n.connect-head img[data-v-476ab0a0] {\n    width: 80px;\n}\n.connect-head p[data-v-476ab0a0] {\n    margin-bottom: 0;\n}\n.connect-data[data-v-476ab0a0] {\n    width: 50%;\n    float: left;\n    color: #FFF;\n    padding: 14px 0;\n    position: relative;\n}\n.connect-data .count[data-v-476ab0a0] {\n    font-size: 18px;\n}\n.connect-bg1[data-v-476ab0a0] {\n    background-color: #394263;\n}\n.connect-bg2[data-v-476ab0a0] {\n    background-color: #3B3F40;\n}\n.connect-bg3[data-v-476ab0a0] {\n    background-color: #4A2E2B;\n}\n.connect-bg4[data-v-476ab0a0] {\n    background-color: #583A63;\n}\n\n\n/*connections end*/\n\n\n/*blogs*/\n.blog-border[data-v-476ab0a0] {\n    -webkit-box-shadow: 0 0 5px #ccc;\n            box-shadow: 0 0 5px #ccc;\n    cursor: pointer;\n    margin: 20px 0;\n}\n#blog p[data-v-476ab0a0] {\n    margin: 0;\n}\n.blog-image[data-v-476ab0a0] {\n    width: 70px;\n}\n.blog-heading[data-v-476ab0a0] {\n    position: relative;\n}\n.blog-heading .post-by[data-v-476ab0a0] {\n    display: block;\n    padding-top: 2rem;\n}\n#blog .sharedpost-image[data-v-476ab0a0] {\n    width: 100%;\n    height: 220px;\n}\n#blog .attached-image[data-v-476ab0a0] {\n    width: 100%;\n    height: 170px;\n}\n#blog .posted-image[data-v-476ab0a0] {\n    width: 100%;\n    height: 277px;\n}\n.blog-desc[data-v-476ab0a0] {\n    position: absolute;\n    bottom: 0;\n    padding: 10px 13px;\n    background-color: rgba(0, 0, 0, .3);\n    width: 100%;\n    color: #FFF;\n}\n\n\n/*end of blogs*/\n.badge[data-v-476ab0a0] {\n    display: inline-block;\n    min-width: 10px;\n    padding: 3px 7px;\n    padding-top: 3px;\n    padding-right: 7px;\n    padding-bottom: 3px;\n    padding-left: 7px;\n    font-size: 12px;\n    color: #fff;\n    vertical-align: middle;\n    border-radius: 10px;\n}\n.project-deatails a[data-v-476ab0a0] {\n    width: 100%;\n}\n.profile-thumb[data-v-476ab0a0] {\n    height: 150px;\n    width: 150px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue__ = __webpack_require__(827);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "user_profile",
    components: {
        vScroll: __WEBPACK_IMPORTED_MODULE_0_components_plugins_scroll_vScroll_vue___default.a
    },
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1810:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-xl-4 col-lg-5" },
      [
        _c("b-card", { staticClass: "bg-info-card" }, [
          _c("div", { staticClass: "profile text-center " }, [
            _c("img", {
              staticClass: "rounded-circle img-fluid profile-thumb mb-3",
              attrs: { src: this.$store.state.user.picture, alt: "User Image" }
            }),
            _vm._v(" "),
            _c("h4", { staticClass: "text-gray" }, [
              _vm._v(_vm._s(this.$store.state.user.name))
            ]),
            _vm._v(" "),
            _c("p", [_vm._v(_vm._s(this.$store.state.user.job))]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-7 text-warning user-rating" }, [
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" "),
                _c("i", {
                  staticClass: "fa fa-star-half-full",
                  attrs: { "aria-hidden": "true" }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-5" }, [
                _c("i", {
                  staticClass: "fa fa-heart text-danger",
                  attrs: { "aria-hidden": "true" }
                }),
                _vm._v(" 2,080\n                    ")
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "profile_details" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c(
                  "div",
                  { staticClass: "nav-tabs-custom" },
                  [
                    _c(
                      "b-tabs",
                      [
                        _c("b-tab", { attrs: { title: "Status" } }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12 mt-3" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Followers :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("1,079")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Online Status :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("Offline")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Last seen :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("2 Days ago")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Last Updated :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("A Month ago")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-6 text-right mt-1" },
                                  [_vm._v("Connections :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-6 mt-1" }, [
                                  _vm._v("2,679")
                                ])
                              ])
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _c("b-tab", { attrs: { title: "About", active: "" } }, [
                          _c("div", { staticClass: "row" }, [
                            _c("div", { staticClass: "col-12" }, [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-2" },
                                  [_vm._v("Email :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 mt-2" }, [
                                  _vm._v("user@example.com")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-2" },
                                  [_vm._v("Contact :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 nt-2" }, [
                                  _vm._v("(394)-968-3152")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-2" },
                                  [_vm._v("D.O.B :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 mt-2" }, [
                                  _vm._v("6-4-1987")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col-4 text-right mt-1" },
                                  [_vm._v("Address :")]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-8 mt-1" }, [
                                  _vm._v(
                                    "Westwood, 12th Street,7023 Mckinley Ave, US."
                                  )
                                ])
                              ])
                            ])
                          ])
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "b-card",
          {
            staticClass: "bg-success-card",
            attrs: { header: "Project Details :", "header-tag": "h4" }
          },
          [
            _c(
              "b-list-group",
              { staticClass: "project-deatails" },
              [
                _c("b-list-group-item", [
                  _c(
                    "a",
                    { staticClass: "text-primary", attrs: { href: "#" } },
                    [
                      _vm._v(" Total Projects "),
                      _c(
                        "span",
                        { staticClass: "badge badge-primary float-right" },
                        [_vm._v("28")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("b-list-group-item", [
                  _c("a", { staticClass: "text-info", attrs: { href: "#" } }, [
                    _vm._v(" Tasks "),
                    _c(
                      "span",
                      { staticClass: " badge badge-info float-right" },
                      [_vm._v("7")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("b-list-group-item", [
                  _c(
                    "a",
                    { staticClass: "text-success", attrs: { href: "#" } },
                    [
                      _vm._v(" Submitted Projects "),
                      _c(
                        "span",
                        { staticClass: " badge badge-success float-right" },
                        [_vm._v("9")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("b-list-group-item", [
                  _c(
                    "a",
                    { staticClass: "text-warning", attrs: { href: "#" } },
                    [
                      _vm._v(" Submitted Projects "),
                      _c(
                        "span",
                        { staticClass: "badge badge-warning float-right" },
                        [_vm._v("9")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("b-list-group-item", [
                  _c(
                    "a",
                    { staticClass: "text-danger", attrs: { href: "#" } },
                    [
                      _vm._v("In Progress "),
                      _c(
                        "span",
                        { staticClass: " badge badge-danger float-right" },
                        [_vm._v(" 11")]
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("b-list-group-item", [
                  _c(
                    "a",
                    { staticClass: "text-success", attrs: { href: "#" } },
                    [
                      _vm._v(" Upcoming "),
                      _c(
                        "span",
                        { staticClass: "badge badge-success float-right" },
                        [_vm._v("8")]
                      )
                    ]
                  )
                ])
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
    _c(
      "div",
      { staticClass: "col-xl-8 col-lg-7" },
      [
        _c(
          "b-card",
          { staticClass: "bg-primary-card data" },
          [
            _c(
              "b-tabs",
              [
                _c(
                  "b-tab",
                  { attrs: { title: "Connections" } },
                  [
                    _c("v-scroll", { attrs: { height: "740px" } }, [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(817),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Ella Washington")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg2" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("14")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg2" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("60")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(816),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Quincy Hirthe")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg1" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("7")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg1" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("89")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(818),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Heath Buckridge")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg4" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("6")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg4" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("75")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(828),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Jonatan")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg3" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("8")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg3" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("93")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(852),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v(" Wilderman")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg4" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("12")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg4" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("80")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(816),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Jessyca McGlynn")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg3" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("7")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg3" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("89")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(817),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Dasia Bernhard")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg2" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("5")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg2" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("86")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(818),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Edwina West")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg3" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("16")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg3" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("94")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                          _c(
                            "div",
                            { staticClass: "connection text-center row" },
                            [
                              _c("div", { staticClass: "connect-head" }, [
                                _c("img", {
                                  staticClass: "rounded-circle",
                                  attrs: {
                                    src: __webpack_require__(828),
                                    alt: "User Image"
                                  }
                                }),
                                _vm._v(" "),
                                _c("h5", { staticClass: "text-gray mt-1" }, [
                                  _vm._v("Ernestina Sporer")
                                ]),
                                _vm._v(" "),
                                _c("p", [_vm._v("Project Architect")])
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg2" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("9")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Posts")
                                  ])
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "connect-data connect-bg2" },
                                [
                                  _c("strong", [
                                    _c("span", { staticClass: "count" }, [
                                      _vm._v("69")
                                    ]),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(" Followers")
                                  ])
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("b-tab", { attrs: { title: "Blog" } }, [
                  _c("div", { staticClass: "row", attrs: { id: "blog" } }, [
                    _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                      _c("div", { staticClass: "blog-border" }, [
                        _c("div", { staticClass: "blog-heading" }, [
                          _c("p", [
                            _c("img", {
                              staticClass:
                                "blog-image rounded-circle p-2 float-left img-fluid",
                              attrs: {
                                src: __webpack_require__(852),
                                alt: "author image"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "post-by p-2" }, [
                              _c("strong", [_vm._v("Jennie")]),
                              _vm._v(" shared a post from "),
                              _c("strong", [_vm._v("Nature's")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "sharedpost-image img-fluid",
                            attrs: {
                              src: __webpack_require__(941),
                              alt: "blog image2"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "blog-body p-2" }, [
                          _c("p", [
                            _vm._v(
                              "Lorem Ipsum is simply dummy, vidis litro abertis."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "blog-border" }, [
                        _c("div", { staticClass: "blog-heading" }, [
                          _c("div", [
                            _c("span", { staticClass: "blog-desc" }, [
                              _vm._v(
                                "Lorem Ipsum is simply dummy, vidis litro abertis."
                              )
                            ]),
                            _vm._v(" "),
                            _c("img", {
                              staticClass: "sharedpost-image img-fluid",
                              attrs: {
                                src: __webpack_require__(1811),
                                alt: "blog image2"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "connect-data connect-bg1 text-center"
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-comment",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(
                                " 65\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "connect-data connect-bg1 text-center"
                            },
                            [
                              _c("i", {
                                staticClass: "fa fa-heart",
                                attrs: { "aria-hidden": "true" }
                              }),
                              _vm._v(
                                " 680\n                                    "
                              )
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                      _c("div", { staticClass: "blog-border p-2" }, [
                        _c("div", { staticClass: "blog-heading " }, [
                          _c("img", {
                            staticClass: "sharedpost-image img-fluid",
                            attrs: {
                              src: __webpack_require__(947),
                              alt: "blog image2"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "blog-body p-2" }, [
                          _c("p", [
                            _vm._v(
                              "Lorem Ipsum is simply dummy, vidis litro abertis."
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "blog-heading" }, [
                        _c("span", { staticClass: "blog-desc" }, [
                          _c("u", [
                            _c("a", { attrs: { href: "#" } }, [
                              _vm._v("https://examples. blogspot.in")
                            ])
                          ]),
                          _c("br"),
                          _vm._v(
                            " Lorem Ipsum is simply dummy, vidis litro abertis."
                          )
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          staticClass: "posted-image img-fluid",
                          attrs: {
                            src: __webpack_require__(1812),
                            alt: "blog image2"
                          }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col-xl-4 col-lg-6" }, [
                      _c("div", { staticClass: "blog-border" }, [
                        _c("div", { staticClass: "blog-heading" }, [
                          _c("p", [
                            _c("span", { staticClass: "post-by p-2" }, [
                              _c("strong", [_vm._v("Jennie")]),
                              _vm._v(" shared a post.")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "attached-image img-fluid",
                            attrs: {
                              src: __webpack_require__(948),
                              alt: "blog image2"
                            }
                          })
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "blog-border" }, [
                        _c("div", { staticClass: "blog-heading" }, [
                          _c("p", [
                            _c("img", {
                              staticClass:
                                "blog-image rounded-circle p-2 float-left",
                              attrs: {
                                src: __webpack_require__(818),
                                alt: "author image"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "post-by" }, [
                              _vm._v("Post by "),
                              _c("strong", [_vm._v("John")])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("img", {
                            staticClass: "sharedpost-image img-fluid",
                            attrs: {
                              src: __webpack_require__(915),
                              alt: "blog image2"
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "blog-body p-2" }, [
                          _c("p", [
                            _vm._v(
                              "Lorem Ipsum is simply dummy, vidis litro abertis. simply dummy, vidis litro abertis"
                            )
                          ])
                        ])
                      ])
                    ])
                  ])
                ])
              ],
              1
            )
          ],
          1
        )
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
    require("vue-hot-reload-api")      .rerender("data-v-476ab0a0", module.exports)
  }
}

/***/ }),

/***/ 1811:
/***/ (function(module, exports) {

module.exports = /images//blog4.jpg?2c510dfbf8640ac8a0b3d468a841e712";

/***/ }),

/***/ 1812:
/***/ (function(module, exports) {

module.exports = /images//blog5.jpg?4540bbc47aca53104d50d1e66b2dd0b6";

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1807)
}
var normalizeComponent = __webpack_require__(244)
/* script */
var __vue_script__ = __webpack_require__(1809)
/* template */
var __vue_template__ = __webpack_require__(1810)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-476ab0a0"
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
Component.options.__file = "src/components/pages/user_profile.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-476ab0a0", Component.options)
  } else {
    hotAPI.reload("data-v-476ab0a0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = /images//avatar3.jpg?7e593f7330076b4b89e96f89b9396c0a";

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = /images//avatar2.jpg?58b639ca117b8de410af39b9f6d86bf4";

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = /images//avatar4.jpg?25bf7926d4f4c50c95e027395f7019f6";

/***/ }),

/***/ 827:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(835)
}
var normalizeComponent = __webpack_require__(244)
/* script */
var __vue_script__ = __webpack_require__(837)
/* template */
var __vue_template__ = __webpack_require__(838)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "src/components/plugins/scroll/vScroll.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b9393c00", Component.options)
  } else {
    hotAPI.reload("data-v-b9393c00", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 828:
/***/ (function(module, exports) {

module.exports = /images//avatar5.jpg?83fc5fdfbe37fb37db7a2fe84cca6d6d";

/***/ }),

/***/ 835:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(836);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("b6065a50", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9393c00\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b9393c00\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vScroll.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.ss-wrapper {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    float: left;\n}\n.ss-content {\n    height: 100%;\n    width: 100%;\n    padding: 0 18px 0 0;\n    position: relative;\n    right: -18px;\n    overflow: auto;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n.ss-scroll {\n    position: relative;\n    background: rgba(0, 0, 0, 0.1);\n    width: 9px;\n    border-radius: 4px;\n    top: 0;\n    z-index: 2;\n    cursor: pointer;\n    opacity: 0;\n    -webkit-transition: opacity 0.25s linear;\n    transition: opacity 0.25s linear;\n}\n.ss-hidden {\n    display: none;\n}\n.ss-container:hover .ss-scroll,\n.ss-scroll.ss-grabbed,\n.ss-scroll.visible {\n    opacity: 1;\n}\n.ss-grabbed {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ 837:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        height: null,
        minHeight: null,
        maxHeight: null,
        color: null,
        barWidth: null,
        alwaysvisible: Boolean
    },
    mounted: function mounted() {
        this.dragDealer();
        this.moveBar();
    },
    data: function data() {
        return {
            scrollRatio: 0,
            grabbed: false
        };
    },

    methods: {
        // Mouse drag handler
        dragDealer: function dragDealer() {
            var _this = this;

            var t = this;
            var lastPageY;
            this.$refs.bar.addEventListener('mousedown', function (e) {
                lastPageY = e.pageY;
                _this.grabbed = true;
                document.body.classList.add('ss-grabbed');
                document.addEventListener('mousemove', drag);
                document.addEventListener('mouseup', stop);
                return false;

                function drag(e) {
                    var delta = e.pageY - lastPageY;
                    lastPageY = e.pageY;
                    t.$refs.content.scrollTop += delta / t.scrollRatio;
                }

                function stop() {
                    t.grabbed = false;
                    document.body.classList.remove('ss-grabbed');
                    document.removeEventListener('mousemove', drag);
                    document.removeEventListener('mouseup', stop);
                }
            });
        },
        moveBar: function moveBar() {
            var content = this.$refs.content;
            var bar = this.$refs.bar;
            var totalHeight = content.scrollHeight,
                ownHeight = content.clientHeight;
            this.scrollRatio = ownHeight / totalHeight;
            // Hide scrollbar if no scrolling is possible
            if (this.scrollRatio >= 1) {
                bar.classList.add('ss-hidden');
            } else {
                bar.classList.remove('ss-hidden');
                bar.style.cssText = 'height:' + this.scrollRatio * 100 + '%; top:' + content.scrollTop / totalHeight * 100 + '%;right:-' + (this.$refs.vscroll.clientWidth - bar.clientWidth) + 'px;background-color:' + this.color + ';width:' + this.barWidth;
            }
        },
        scrolltotop: function scrolltotop() {
            this.$refs.content.scrollTop = 0;
        },
        scrolltobottom: function scrolltobottom() {
            this.$refs.content.scrollTop = this.$refs.content.scrollHeight;
        }
    }
});

/***/ }),

/***/ 838:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "vscroll",
      staticClass: "ss-container",
      style: {
        height: _vm.height,
        "min-height": _vm.minHeight,
        "max-height": _vm.maxHeight
      }
    },
    [
      _c("div", { ref: "wrapper", staticClass: "ss-wrapper" }, [
        _c(
          "div",
          {
            ref: "content",
            staticClass: "ss-content",
            on: { scroll: _vm.moveBar, mouseenter: _vm.moveBar }
          },
          [_vm._t("default")],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", {
        ref: "bar",
        staticClass: "ss-scroll",
        class: { "ss-grabbed": _vm.grabbed, visible: _vm.alwaysvisible }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b9393c00", module.exports)
  }
}

/***/ }),

/***/ 852:
/***/ (function(module, exports) {

module.exports = /images//avatar6.jpg?ad632ec07148871732e34440c087874d";

/***/ }),

/***/ 915:
/***/ (function(module, exports) {

module.exports = /images//profile-coverbg.jpeg?32cba36ca56606997493078974292799";

/***/ }),

/***/ 941:
/***/ (function(module, exports) {

module.exports = /images//blog1.jpeg?b7bb88cd525e2e8a4cc949abbfd718f6";

/***/ }),

/***/ 947:
/***/ (function(module, exports) {

module.exports = /images//blog2.png?312c85faffcb6b93d81e568492f9c11a";

/***/ }),

/***/ 948:
/***/ (function(module, exports) {

module.exports = /images//blog3.jpeg?f970012f039a57db28f520f8850e593d";

/***/ })

});