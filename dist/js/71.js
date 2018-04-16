webpackJsonp([71],{

/***/ 1662:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1663);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("005c8398", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c2cb1a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form_elements.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2c2cb1a7\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./form_elements.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n#color[data-v-2c2cb1a7] {\n    height: 35px;\n}\n[data-v-2c2cb1a7] .form-control:disabled{\n        cursor: not-allowed;\n}\n.disabled[data-v-2c2cb1a7]{\n        cursor:not-allowed;\n}\n.form-control[data-v-2c2cb1a7]:active, .input-group .form-control[data-v-2c2cb1a7]:hover{\n    z-index: 1;\n}\n", ""]);

// exports


/***/ }),

/***/ 1664:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: "formelements",
    mounted: function mounted() {},
    destroyed: function destroyed() {}
});

/***/ }),

/***/ 1665:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-lg-12" },
        [
          _c(
            "b-card",
            {
              staticClass: "mb-2 bg-default-card",
              attrs: { header: "Form Elements", "header-tag": "h4" }
            },
            [
              _c("div", [
                _c(
                  "form",
                  { staticClass: "form-horizontal", attrs: { method: "" } },
                  [
                    _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "text" }
                            },
                            [
                              _vm._v(
                                "Text:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "text",
                                placeholder: "Some value"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "input_Email" }
                            },
                            [_vm._v("Email:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "email",
                                id: "input_Email",
                                placeholder: "Email"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "input_Password" }
                            },
                            [_vm._v("Password:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "password",
                                id: "input_Password",
                                placeholder: "Password"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "disabled" }
                            },
                            [
                              _vm._v(
                                "Disabled:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "disabled",
                                placeholder: "Disabled input",
                                disabled: ""
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            { staticClass: "control-label col-md-4" },
                            [
                              _vm._v(
                                "Readonly:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                id: "text2",
                                placeholder: "Read only",
                                readonly: ""
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-3 control-label",
                              attrs: { for: "example-select" }
                            },
                            [_vm._v("Select:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c(
                              "select",
                              {
                                staticClass: "form-control",
                                attrs: {
                                  id: "example-select",
                                  name: "example-select",
                                  size: "1"
                                }
                              },
                              [
                                _c("option", { attrs: { value: "0" } }, [
                                  _vm._v(
                                    "\n                                                Please select\n                                            "
                                  )
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "1" } }, [
                                  _vm._v("Bootstrap")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "2" } }, [
                                  _vm._v("CSS")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "3" } }, [
                                  _vm._v("JavaScript")
                                ]),
                                _vm._v(" "),
                                _c("option", { attrs: { value: "4" } }, [
                                  _vm._v("HTML")
                                ])
                              ]
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "text_area" }
                            },
                            [_vm._v("Text area:")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("textarea", {
                              staticClass: "form-control resize_vertical",
                              attrs: {
                                rows: "4",
                                id: "text_area",
                                placeholder: "Postal Address"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-5",
                              attrs: { for: "maxlength" }
                            },
                            [
                              _vm._v(
                                "Maxlength:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                maxlength: "5",
                                id: "maxlength",
                                placeholder: "Maxlength is five"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "color" }
                            },
                            [
                              _vm._v(
                                "Color:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "color",
                                name: "color",
                                id: "color",
                                value: "#428bca"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "range" }
                            },
                            [
                              _vm._v(
                                "Range:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "range",
                                name: "range",
                                id: "range",
                                value: "50"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "url" }
                            },
                            [
                              _vm._v(
                                "Url:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "url",
                                name: "url",
                                value: "http://www.example.com/",
                                id: "url"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "search" }
                            },
                            [
                              _vm._v(
                                "Search:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "search",
                                id: "search",
                                placeholder: "Search value"
                              }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "number" }
                            },
                            [
                              _vm._v(
                                "Number:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-9" }, [
                            _c("input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "number",
                                id: "number",
                                placeholder: "Enter value"
                              }
                            })
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col-md-6" }, [
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "date" }
                            },
                            [
                              _vm._v(
                                "Date:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "date",
                                  id: "date",
                                  value: "yyyy-mm-dd",
                                  "aria-selected": "true"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "time" }
                            },
                            [
                              _vm._v(
                                "Time:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "time",
                                  id: "time",
                                  value: "14:38:00"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "datetime" }
                            },
                            [
                              _vm._v(
                                "Datetime:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "datetime-local",
                                  id: "datetime",
                                  value: "yyyy-mm-dd T14:38:00"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "control-label col-md-4",
                              attrs: { for: "week" }
                            },
                            [
                              _vm._v(
                                "Week:\n                                    "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c("input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "week",
                                  id: "week",
                                  value: "2017-W28"
                                }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            {
                              staticClass: "col-md-4 control-label",
                              attrs: { for: "example-multiple-select2" }
                            },
                            [_vm._v("Multiple:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c(
                                "select",
                                {
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "example-multiple-select2",
                                    name: "example-multiple-select",
                                    size: "5",
                                    multiple: ""
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "1" } }, [
                                    _vm._v("Option #1")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "2" } }, [
                                    _vm._v("Option #2")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "3" } }, [
                                    _vm._v("Option #3")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "4" } }, [
                                    _vm._v("Option #4")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "5" } }, [
                                    _vm._v("Option #5")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "6" } }, [
                                    _vm._v("Option #6")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "7" } }, [
                                    _vm._v("Option #7")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "8" } }, [
                                    _vm._v("Option #8")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "9" } }, [
                                    _vm._v("Option #9")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "10" } }, [
                                    _vm._v("Option #10")
                                  ])
                                ]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c("div", { staticClass: "col-md-4" }, [
                            _c("label", { staticClass: "control-label" }, [
                              _vm._v("Dropdowns")
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8" },
                            [
                              _c(
                                "b-input-group",
                                [
                                  _c("b-form-input"),
                                  _vm._v(" "),
                                  _c(
                                    "template",
                                    { slot: "prepend" },
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            text: "Action",
                                            variant: "secondary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _vm._v("Action")
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _vm._v("Action B")
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _vm._v("Something else here...")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "b-input-group",
                                { staticClass: "mt-3" },
                                [
                                  _c("b-form-input"),
                                  _vm._v(" "),
                                  _c(
                                    "template",
                                    { slot: "append" },
                                    [
                                      _c(
                                        "b-dropdown",
                                        {
                                          attrs: {
                                            text: "Action",
                                            variant: "secondary"
                                          }
                                        },
                                        [
                                          _c("b-dropdown-item", [
                                            _vm._v("Action")
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _vm._v("Action B")
                                          ]),
                                          _vm._v(" "),
                                          _c("b-dropdown-divider"),
                                          _vm._v(" "),
                                          _c("b-dropdown-item", [
                                            _vm._v("Something else here...")
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                2
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            { staticClass: "control-label col-md-4" },
                            [_vm._v("Radios:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "col-md-8 col-md-offset-2" },
                            [
                              _c(
                                "div",
                                { staticClass: "radio" },
                                [
                                  _c(
                                    "b-form-radio",
                                    { attrs: { checked: "false" } },
                                    [
                                      _vm._v(
                                        "\n                                                Normal\n                                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "radio" },
                                [
                                  _c("b-form-radio", [
                                    _vm._v(
                                      "\n                                                Checked\n                                            "
                                    )
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "radio" },
                                [
                                  _c(
                                    "b-form-radio",
                                    {
                                      attrs: {
                                        disabled: true,
                                        checked: "false"
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                                Disabled\n                                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group p-10" }, [
                          _c(
                            "label",
                            { staticClass: "control-label col-md-4" },
                            [_vm._v("Checkbox:")]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: " col-md-8 col-md-offset-2" },
                            [
                              _c(
                                "div",
                                { staticClass: "checkbox" },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { checked: "false" } },
                                    [
                                      _vm._v(
                                        "\n                                                Normal\n                                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "checkbox" },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { checked: "true" } },
                                    [
                                      _vm._v(
                                        "\n                                                Checked\n                                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "checkbox" },
                                [
                                  _c(
                                    "b-form-checkbox",
                                    { attrs: { disabled: true } },
                                    [
                                      _vm._v(
                                        "\n                                                Disabled\n                                            "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "form-group p-10 form-actions" },
                          [
                            _c(
                              "div",
                              { staticClass: "col-md-offset-4 col-md-8" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: { type: "button" }
                                  },
                                  [
                                    _vm._v(
                                      "Submit\n                                        "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn btn-effect-ripple btn-secondary  reset_btn1",
                                    attrs: { type: "reset" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                            Reset\n                                        "
                                    )
                                  ]
                                )
                              ]
                            )
                          ]
                        )
                      ])
                    ])
                  ]
                )
              ])
            ]
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
    require("vue-hot-reload-api")      .rerender("data-v-2c2cb1a7", module.exports)
  }
}

/***/ }),

/***/ 743:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1662)
}
var normalizeComponent = __webpack_require__(244)
/* script */
var __vue_script__ = __webpack_require__(1664)
/* template */
var __vue_template__ = __webpack_require__(1665)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2c2cb1a7"
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
Component.options.__file = "src/components/pages/form_elements.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2c2cb1a7", Component.options)
  } else {
    hotAPI.reload("data-v-2c2cb1a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});