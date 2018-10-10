webpackJsonp([26],{

/***/ 1045:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1046);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("63fd0176", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46fe1467\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46fe1467\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1046:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", ""]);

// exports


/***/ }),

/***/ 1047:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1048);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("384ec006", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46fe1467\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./manage.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-46fe1467\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./manage.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1048:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.form-control{\n  -webkit-transition: initial;\n  transition: initial;\n}\n", ""]);

// exports


/***/ }),

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_plugins_DataTable_DataTable_vue__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_plugins_DataTable_DataTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_components_plugins_DataTable_DataTable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_plugins_Company_Station_View_CSView_vue__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_components_plugins_Company_Station_View_CSView_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_components_plugins_Company_Station_View_CSView_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_form__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_smoothscroll__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_smoothscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_smoothscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_src_validations_validations_js__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_multiselect__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_multiselect__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_vue_smoothscroll___default.a);


__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vue_form___default.a, __WEBPACK_IMPORTED_MODULE_6_src_validations_validations_js__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.component(__WEBPACK_IMPORTED_MODULE_7_vue_multiselect___default.a);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "formfeatures",
  components: {
    datatable: __WEBPACK_IMPORTED_MODULE_2_components_plugins_DataTable_DataTable_vue___default.a, csview: __WEBPACK_IMPORTED_MODULE_3_components_plugins_Company_Station_View_CSView_vue___default.a,
    Multiselect: __WEBPACK_IMPORTED_MODULE_7_vue_multiselect___default.a
  },
  data: function data() {
    return { columndata: [{
        label: '',
        field: '',
        numeric: false,
        html: false,
        sortable: false
      }, {
        label: 'Notificaton Name',
        field: 'name',
        numeric: true,
        html: true
      }],
      ajaxLoading: true,
      loading: true,
      url: this.$store.state.host_url + '/notification_settings',
      formstate: {},
      formstate2: {},
      show_setup_form: false,
      tableData: [],
      show_selector: true,
      available_companies: [],
      available_company: [],
      products: "",
      show_multi_company: false,
      show_single_company: false,
      available_roles: "",
      station_pumps: "",
      has_WORe: false,
      has_SLTR: false,
      button_text: "ADD A NEW USER",
      fill_form: false,
      company_stations: "",
      company_stations_null: "",
      company_notifications_null: "",
      company_notifications: [],
      preset: {
        company_id: "",
        station_id: ""
      },
      phone_number: "",
      selected_stations: [],
      email: "",
      username: "",
      fullname: "",
      role_id: 0,

      company_notification: {
        company_id: "",
        submit_mode: 'SAVE CHANGES'
      },
      weekly_stations_operations_report: [],
      station_league_table_report: [],
      weekdays: [{ 'name': 'Monday' }, { 'name': 'Tuesday' }, { 'name': 'Wednesday' }, { 'name': 'Thursday' }, { 'name': 'Friday' }, { 'name': 'Saturday' }, { 'name': 'Sunday' }],
      daytimes: [{ 'name': '12:00 AM' }, { 'name': '01:00 AM' }, { 'name': '02:00 AM' }, { 'name': '03:00 AM' }, { 'name': '04:00 AM' }, { 'name': '05:00 AM' }, { 'name': '06:00 AM' }, { 'name': '07:00 AM' }, { 'name': '08:00 AM' }, { 'name': '09:00 AM' }, { 'name': '10:00 AM' }, { 'name': '11:00 AM' }, { 'name': '12:00 PM' }, { 'name': '01:00 PM' }, { 'name': '02:00 PM' }, { 'name': '03:00 PM' }, { 'name': '04:00 PM' }, { 'name': '05:00 PM' }, { 'name': '06:00 PM' }, { 'name': '07:00 PM' }, { 'name': '08:00 PM' }, { 'name': '09:00 PM' }, { 'name': '10:00 PM' }, { 'name': '11:00 PM' }]

    };
  },

  methods: {
    load_company_notifications: function load_company_notifications(company_id) {
      var _this = this;

      __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "start");
      var user_details = JSON.parse(localStorage.getItem('user_details'));
      var params = 'company_id=' + this.preset.company_id;
      this.tableData = [];
      axios.get(this.$store.state.host_url + "/company_notifications?" + params, {
        headers: {
          "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
        } }).then(function (response) {
        __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
        _this.show_setup_form = true;
        _this.weekly_stations_operations_report = [];
        _this.station_league_table_report = [];
        _this.has_SLTR = false;
        _this.has_WORe = false;

        response.data.data.forEach(function (item) {
          _this.tableData.push(item.notification);
          if (item['notification_UI_Slug'] == 'WORe') {
            _this.has_WORe = true;
            _this.weekly_stations_operations_report.notification_weekday = item['notification_weekday'];
          }
          if (item['notification_UI_Slug'] == 'SLTR') {
            _this.has_SLTR = true;
            _this.station_league_table_report.notification_daytime = item['notification_daytime'];
          }
        });
      }).catch(function (error) {
        __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
        __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("catch_errors", error);
      });
    },
    show_available_companies: function show_available_companies() {
      this.products = __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.products;
      if (__WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.show_single_company) {
        this.available_company = __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.available_company;
        this.show_single_company = __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.show_single_company;
      } else if (__WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.show_multi_company == true) {
        this.available_companies = __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.available_companies;
        this.show_multi_company = __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.show_multi_company;
      }
    },
    onSubmit: function onSubmit() {
      var _this2 = this;

      this.$SmoothScroll(document.getElementById("content-header"));
      if (this.formstate.$invalid) {
        return;
      } else {
        __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "start");
        __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("showPermAlertBox", { 'alert_type': 'alert-warning',
          'alert_message': '...Processing Request...', 'show_alert': true });
        //for users whose phone number isnt avaialable yet          
        var user_details = JSON.parse(localStorage.getItem('user_details'));
        var notification_settings = Array();
        notification_settings.push({ 'company_id': this.preset.company_id, 'notification_name': 'Weekly Station Operations Report', 'notification_UI_slug': 'WORe', 'notification_weekday': this.weekly_stations_operations_report.notification_weekday });

        notification_settings.push({ 'company_id': this.preset.company_id, 'notification_name': 'Station League Table Report', 'notification_UI_slug': 'SLTR', 'notification_daytime': this.station_league_table_report.notification_daytime });

        var settings_detail = {
          notification_settings: notification_settings
        };
        if (this.company_notification.submit_mode == 'SAVE CHANGES') {
          axios.post(this.url, settings_detail, {
            headers: {
              "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
            }
          }).then(function (response) {
            __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
            var api_response = response.data;
            if (api_response.status === true) {
              __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("showAlertBox", { 'alert_type': 'alert-success',
                'alert_message': 'Changes Saved Successfully', 'show_alert': true });
              _this2.formstate.$submitted = false;
              _this2.company_notification = { submit_mode: "SAVE CHANGES" };
            }
          }).catch(function (error) {
            __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
            __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("catch_errors", error);
          });
        }
      }
    },
    form_reset: function form_reset() {
      this.company_notification = {
        company_id: "",
        station_id: "",
        phone_number: "",
        selected_stations: [],
        email: "",
        username: "",
        fullname: "",
        role_id: 0,
        privilege: "",
        submit_mode: 'SAVE CHANGES'
      };
    }
  },
  mounted: function mounted() {
    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("check_login_details");
    this.show_available_companies();
  },
  destroyed: function destroyed() {}
});

/***/ }),

/***/ 1050:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-info-card",
            attrs: { header: "", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-md-12" },
                [
                  _c(
                    "vue-form",
                    {
                      attrs: { state: _vm.formstate },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "row" }, [
                        _c("div", { staticClass: "col-lg-6" }, [
                          _c("div", { staticClass: "col-lg-12" }, [
                            _vm.show_multi_company
                              ? _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "validate",
                                      { attrs: { tag: "div" } },
                                      [
                                        _vm._v(
                                          "\n                    Select Company\n                    "
                                        ),
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.preset.company_id,
                                                expression: "preset.company_id"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "company",
                                              size: "1"
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  var $$selectedVal = Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function(o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function(o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                  _vm.$set(
                                                    _vm.preset,
                                                    "company_id",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                },
                                                function($event) {
                                                  _vm.load_company_notifications(
                                                    _vm.preset.company_id
                                                  )
                                                }
                                              ]
                                            }
                                          },
                                          _vm._l(
                                            _vm.available_companies,
                                            function(option, index) {
                                              return _c(
                                                "option",
                                                {
                                                  domProps: { value: option.id }
                                                },
                                                [
                                                  _vm._v(
                                                    _vm._s(option.name) +
                                                      "\n                        "
                                                  )
                                                ]
                                              )
                                            }
                                          )
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "field-messages",
                                          {
                                            staticClass: "text-danger",
                                            attrs: {
                                              name: "company",
                                              show: "$invalid && $submitted"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                attrs: { slot: "requred" },
                                                slot: "requred"
                                              },
                                              [_vm._v("Company is required")]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.show_single_company
                              ? _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "validate",
                                      { attrs: { tag: "div" } },
                                      [
                                        _vm._v(
                                          "\n                    Select Company\n                    "
                                        ),
                                        _c(
                                          "select",
                                          {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.preset.company_id,
                                                expression: "preset.company_id"
                                              }
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              name: "company",
                                              size: "1"
                                            },
                                            on: {
                                              change: [
                                                function($event) {
                                                  var $$selectedVal = Array.prototype.filter
                                                    .call(
                                                      $event.target.options,
                                                      function(o) {
                                                        return o.selected
                                                      }
                                                    )
                                                    .map(function(o) {
                                                      var val =
                                                        "_value" in o
                                                          ? o._value
                                                          : o.value
                                                      return val
                                                    })
                                                  _vm.$set(
                                                    _vm.preset,
                                                    "company_id",
                                                    $event.target.multiple
                                                      ? $$selectedVal
                                                      : $$selectedVal[0]
                                                  )
                                                },
                                                function($event) {
                                                  _vm.load_company_notifications(
                                                    _vm.preset.company_id
                                                  )
                                                }
                                              ]
                                            }
                                          },
                                          [
                                            _c(
                                              "option",
                                              {
                                                domProps: {
                                                  value:
                                                    _vm.available_company.id
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.available_company.name
                                                  ) + "\n                      "
                                                )
                                              ]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "field-messages",
                                          {
                                            staticClass: "text-danger",
                                            attrs: {
                                              name: "company",
                                              show: "$invalid && $submitted"
                                            }
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                attrs: { slot: "requred" },
                                                slot: "requred"
                                              },
                                              [_vm._v("Company is required")]
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-6" }),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-lg-12" }, [_c("hr")]),
                        _vm._v(" "),
                        _vm.show_setup_form
                          ? _c("div", { staticClass: "col-lg-6" }, [
                              _c("div", { staticClass: "col-sm-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group" },
                                  [
                                    _c(
                                      "b-card",
                                      {
                                        staticClass: "bg-info-card ",
                                        attrs: {
                                          header:
                                            "Notifications Settings (Beta)",
                                          "header-tag": "h4"
                                        }
                                      },
                                      [
                                        _vm.has_WORe
                                          ? _c(
                                              "div",
                                              { staticClass: "col-sm-12 row" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col-sm-6 " },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              for: "number"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              " Weekly Station Operations Report "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "col-sm-6" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                Colation Day of the week\n                                "
                                                        ),
                                                        _c(
                                                          "select",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm
                                                                    .weekly_stations_operations_report
                                                                    .notification_weekday,
                                                                expression:
                                                                  "weekly_stations_operations_report.notification_weekday"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id: "weekday",
                                                              name: "weekday",
                                                              size: "1",
                                                              required: ""
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                var $$selectedVal = Array.prototype.filter
                                                                  .call(
                                                                    $event
                                                                      .target
                                                                      .options,
                                                                    function(
                                                                      o
                                                                    ) {
                                                                      return o.selected
                                                                    }
                                                                  )
                                                                  .map(function(
                                                                    o
                                                                  ) {
                                                                    var val =
                                                                      "_value" in
                                                                      o
                                                                        ? o._value
                                                                        : o.value
                                                                    return val
                                                                  })
                                                                _vm.$set(
                                                                  _vm.weekly_stations_operations_report,
                                                                  "notification_weekday",
                                                                  $event.target
                                                                    .multiple
                                                                    ? $$selectedVal
                                                                    : $$selectedVal[0]
                                                                )
                                                              }
                                                            }
                                                          },
                                                          _vm._l(
                                                            _vm.weekdays,
                                                            function(option) {
                                                              return _c(
                                                                "option",
                                                                {
                                                                  domProps: {
                                                                    value:
                                                                      option.name,
                                                                    selected:
                                                                      option.name ==
                                                                      _vm
                                                                        .weekly_stations_operations_report
                                                                        .notification_weekday
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      option.name
                                                                    ) +
                                                                      "\n                                      "
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                false
                                                  ? _c(
                                                      "div",
                                                      {
                                                        staticClass: "col-sm-3 "
                                                      },
                                                      [
                                                        _c(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "form-group"
                                                          },
                                                          [
                                                            _vm._v(
                                                              "\n                                Colation Day Time\n                                "
                                                            ),
                                                            _c(
                                                              "select",
                                                              {
                                                                directives: [
                                                                  {
                                                                    name:
                                                                      "model",
                                                                    rawName:
                                                                      "v-model",
                                                                    value:
                                                                      _vm
                                                                        .weekly_stations_operations_report
                                                                        .notification_daytime,
                                                                    expression:
                                                                      "weekly_stations_operations_report.notification_daytime"
                                                                  }
                                                                ],
                                                                staticClass:
                                                                  "form-control",
                                                                attrs: {
                                                                  id: "daytime",
                                                                  name:
                                                                    "daytime",
                                                                  size: "1",
                                                                  required: ""
                                                                },
                                                                on: {
                                                                  change: function(
                                                                    $event
                                                                  ) {
                                                                    var $$selectedVal = Array.prototype.filter
                                                                      .call(
                                                                        $event
                                                                          .target
                                                                          .options,
                                                                        function(
                                                                          o
                                                                        ) {
                                                                          return o.selected
                                                                        }
                                                                      )
                                                                      .map(
                                                                        function(
                                                                          o
                                                                        ) {
                                                                          var val =
                                                                            "_value" in
                                                                            o
                                                                              ? o._value
                                                                              : o.value
                                                                          return val
                                                                        }
                                                                      )
                                                                    _vm.$set(
                                                                      _vm.weekly_stations_operations_report,
                                                                      "notification_daytime",
                                                                      $event
                                                                        .target
                                                                        .multiple
                                                                        ? $$selectedVal
                                                                        : $$selectedVal[0]
                                                                    )
                                                                  }
                                                                }
                                                              },
                                                              _vm._l(
                                                                _vm.daytimes,
                                                                function(
                                                                  option
                                                                ) {
                                                                  return _c(
                                                                    "option",
                                                                    {
                                                                      domProps: {
                                                                        value:
                                                                          option.name
                                                                      }
                                                                    },
                                                                    [
                                                                      _vm._v(
                                                                        _vm._s(
                                                                          option.name
                                                                        ) +
                                                                          "\n                                      "
                                                                      )
                                                                    ]
                                                                  )
                                                                }
                                                              )
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  : _vm._e()
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _vm.has_SLTR
                                          ? _c(
                                              "div",
                                              { staticClass: "col-sm-12 row" },
                                              [
                                                _c(
                                                  "div",
                                                  { staticClass: "col-sm-6 " },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        _c(
                                                          "label",
                                                          {
                                                            attrs: {
                                                              for: "number"
                                                            }
                                                          },
                                                          [
                                                            _vm._v(
                                                              "Station League Table Report "
                                                            )
                                                          ]
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "div",
                                                  { staticClass: "col-sm-6" },
                                                  [
                                                    _c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "form-group"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                Colation Day Time\n                                "
                                                        ),
                                                        _c(
                                                          "select",
                                                          {
                                                            directives: [
                                                              {
                                                                name: "model",
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm
                                                                    .station_league_table_report
                                                                    .notification_daytime,
                                                                expression:
                                                                  "station_league_table_report.notification_daytime"
                                                              }
                                                            ],
                                                            staticClass:
                                                              "form-control",
                                                            attrs: {
                                                              id: "daytime",
                                                              name: "daytime",
                                                              size: "1",
                                                              required: ""
                                                            },
                                                            on: {
                                                              change: function(
                                                                $event
                                                              ) {
                                                                var $$selectedVal = Array.prototype.filter
                                                                  .call(
                                                                    $event
                                                                      .target
                                                                      .options,
                                                                    function(
                                                                      o
                                                                    ) {
                                                                      return o.selected
                                                                    }
                                                                  )
                                                                  .map(function(
                                                                    o
                                                                  ) {
                                                                    var val =
                                                                      "_value" in
                                                                      o
                                                                        ? o._value
                                                                        : o.value
                                                                    return val
                                                                  })
                                                                _vm.$set(
                                                                  _vm.station_league_table_report,
                                                                  "notification_daytime",
                                                                  $event.target
                                                                    .multiple
                                                                    ? $$selectedVal
                                                                    : $$selectedVal[0]
                                                                )
                                                              }
                                                            }
                                                          },
                                                          _vm._l(
                                                            _vm.daytimes,
                                                            function(option) {
                                                              return _c(
                                                                "option",
                                                                {
                                                                  domProps: {
                                                                    value:
                                                                      option.name
                                                                  }
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      option.name
                                                                    ) +
                                                                      "\n                                      "
                                                                  )
                                                                ]
                                                              )
                                                            }
                                                          )
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                )
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-sm-12" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group form-inline" },
                                  [
                                    _c("input", {
                                      staticClass: "btn btn-success",
                                      attrs: { type: "submit" },
                                      domProps: {
                                        value:
                                          _vm.company_notification.submit_mode
                                      }
                                    })
                                  ]
                                )
                              ])
                            ])
                          : _vm._e()
                      ])
                    ]
                  )
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
                      value: _vm.show_setup_form,
                      expression: "show_setup_form"
                    }
                  ],
                  staticClass: "col-sm-12"
                },
                [
                  _c(
                    "div",
                    { staticClass: "table-responsive" },
                    [
                      _c("datatable", {
                        attrs: {
                          title: "Company Notifications based on Subscription",
                          rows: _vm.tableData,
                          columns: _vm.columndata
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "actions",
                            fn: function(props) {
                              return [
                                _c("div", [
                                  _c("i", {
                                    staticClass: "fa fa-pencil text-info mr-3",
                                    on: {
                                      click: function($event) {
                                        _vm.onAction(
                                          "edit",
                                          props.rowData,
                                          props.rowIndex
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("i", {
                                    staticClass: "fa fa-trash text-danger",
                                    on: {
                                      click: function($event) {
                                        _vm.onAction(
                                          "delete",
                                          props.rowData,
                                          props.rowIndex
                                        )
                                      }
                                    }
                                  })
                                ])
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ]
              )
            ])
          ]
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
    require("vue-hot-reload-api")      .rerender("data-v-46fe1467", module.exports)
  }
}

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1045)
  __webpack_require__(1047)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(1049)
/* template */
var __vue_template__ = __webpack_require__(1050)
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
Component.options.__file = "src/components/pages/notifications/manage.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46fe1467", Component.options)
  } else {
    hotAPI.reload("data-v-46fe1467", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.2.0 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Fuse", [], factory);
	else if(typeof exports === 'object')
		exports["Fuse"] = factory();
	else
		root["Fuse"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var bitapRegexSearch = __webpack_require__(5);
var bitapSearch = __webpack_require__(7);
var patternAlphabet = __webpack_require__(4);

var Bitap = function () {
  function Bitap(pattern, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$isCaseSensitive = _ref.isCaseSensitive,
        isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

    _classCallCheck(this, Bitap);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: isCaseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength
    };

    this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();

    if (this.pattern.length <= maxPatternLength) {
      this.patternAlphabet = patternAlphabet(this.pattern);
    }
  }

  _createClass(Bitap, [{
    key: 'search',
    value: function search(text) {
      if (!this.options.isCaseSensitive) {
        text = text.toLowerCase();
      }

      // Exact match
      if (this.pattern === text) {
        return {
          isMatch: true,
          score: 0,
          matchedIndices: [[0, text.length - 1]]
        };
      }

      // When pattern length is greater than the machine word length, just do a a regex comparison
      var _options = this.options,
          maxPatternLength = _options.maxPatternLength,
          tokenSeparator = _options.tokenSeparator;

      if (this.pattern.length > maxPatternLength) {
        return bitapRegexSearch(text, this.pattern, tokenSeparator);
      }

      // Otherwise, use Bitap algorithm
      var _options2 = this.options,
          location = _options2.location,
          distance = _options2.distance,
          threshold = _options2.threshold,
          findAllMatches = _options2.findAllMatches,
          minMatchCharLength = _options2.minMatchCharLength;

      return bitapSearch(text, this.pattern, this.patternAlphabet, {
        location: location,
        distance: distance,
        threshold: threshold,
        findAllMatches: findAllMatches,
        minMatchCharLength: minMatchCharLength
      });
    }
  }]);

  return Bitap;
}();

// let x = new Bitap("od mn war", {})
// let result = x.search("Old Man's War")
// console.log(result)

module.exports = Bitap;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(0);

var deepValue = function deepValue(obj, path, list) {
  if (!path) {
    // If there's no path left, we've gotten to the object we care about.
    list.push(obj);
  } else {
    var dotIndex = path.indexOf('.');
    var firstSegment = path;
    var remaining = null;

    if (dotIndex !== -1) {
      firstSegment = path.slice(0, dotIndex);
      remaining = path.slice(dotIndex + 1);
    }

    var value = obj[firstSegment];

    if (value !== null && value !== undefined) {
      if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
        list.push(value.toString());
      } else if (isArray(value)) {
        // Search each item in the array.
        for (var i = 0, len = value.length; i < len; i += 1) {
          deepValue(value[i], remaining, list);
        }
      } else if (remaining) {
        // An object. Recurse further.
        deepValue(value, remaining, list);
      }
    }
  }

  return list;
};

module.exports = function (obj, path) {
  return deepValue(obj, path, []);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
  var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  var matchedIndices = [];
  var start = -1;
  var end = -1;
  var i = 0;

  for (var len = matchmask.length; i < len; i += 1) {
    var match = matchmask[i];
    if (match && start === -1) {
      start = i;
    } else if (!match && start !== -1) {
      end = i - 1;
      if (end - start + 1 >= minMatchCharLength) {
        matchedIndices.push([start, end]);
      }
      start = -1;
    }
  }

  // (i-1 - start) + 1 => i - start
  if (matchmask[i - 1] && i - start >= minMatchCharLength) {
    matchedIndices.push([start, i - 1]);
  }

  return matchedIndices;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern) {
  var mask = {};
  var len = pattern.length;

  for (var i = 0; i < len; i += 1) {
    mask[pattern.charAt(i)] = 0;
  }

  for (var _i = 0; _i < len; _i += 1) {
    mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
  }

  return mask;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

module.exports = function (text, pattern) {
  var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;

  var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
  var matches = text.match(regex);
  var isMatch = !!matches;
  var matchedIndices = [];

  if (isMatch) {
    for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
      var match = matches[i];
      matchedIndices.push([text.indexOf(match), match.length - 1]);
    }
  }

  return {
    // TODO: revisit this score
    score: isMatch ? 0.5 : 1,
    isMatch: isMatch,
    matchedIndices: matchedIndices
  };
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (pattern, _ref) {
  var _ref$errors = _ref.errors,
      errors = _ref$errors === undefined ? 0 : _ref$errors,
      _ref$currentLocation = _ref.currentLocation,
      currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation,
      _ref$expectedLocation = _ref.expectedLocation,
      expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance;

  var accuracy = errors / pattern.length;
  var proximity = Math.abs(expectedLocation - currentLocation);

  if (!distance) {
    // Dodge divide by zero error.
    return proximity ? 1.0 : accuracy;
  }

  return accuracy + proximity / distance;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bitapScore = __webpack_require__(6);
var matchedIndices = __webpack_require__(3);

module.exports = function (text, pattern, patternAlphabet, _ref) {
  var _ref$location = _ref.location,
      location = _ref$location === undefined ? 0 : _ref$location,
      _ref$distance = _ref.distance,
      distance = _ref$distance === undefined ? 100 : _ref$distance,
      _ref$threshold = _ref.threshold,
      threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
      _ref$findAllMatches = _ref.findAllMatches,
      findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
      _ref$minMatchCharLeng = _ref.minMatchCharLength,
      minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;

  var expectedLocation = location;
  // Set starting location at beginning text and initialize the alphabet.
  var textLen = text.length;
  // Highest score beyond which we give up.
  var currentThreshold = threshold;
  // Is there a nearby exact match? (speedup)
  var bestLocation = text.indexOf(pattern, expectedLocation);

  var patternLen = pattern.length;

  // a mask of the matches
  var matchMask = [];
  for (var i = 0; i < textLen; i += 1) {
    matchMask[i] = 0;
  }

  if (bestLocation !== -1) {
    var score = bitapScore(pattern, {
      errors: 0,
      currentLocation: bestLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });
    currentThreshold = Math.min(score, currentThreshold);

    // What about in the other direction? (speed up)
    bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);

    if (bestLocation !== -1) {
      var _score = bitapScore(pattern, {
        errors: 0,
        currentLocation: bestLocation,
        expectedLocation: expectedLocation,
        distance: distance
      });
      currentThreshold = Math.min(_score, currentThreshold);
    }
  }

  // Reset the best location
  bestLocation = -1;

  var lastBitArr = [];
  var finalScore = 1;
  var binMax = patternLen + textLen;

  var mask = 1 << patternLen - 1;

  for (var _i = 0; _i < patternLen; _i += 1) {
    // Scan for the best match; each iteration allows for one more error.
    // Run a binary search to determine how far from the match location we can stray
    // at this error level.
    var binMin = 0;
    var binMid = binMax;

    while (binMin < binMid) {
      var _score3 = bitapScore(pattern, {
        errors: _i,
        currentLocation: expectedLocation + binMid,
        expectedLocation: expectedLocation,
        distance: distance
      });

      if (_score3 <= currentThreshold) {
        binMin = binMid;
      } else {
        binMax = binMid;
      }

      binMid = Math.floor((binMax - binMin) / 2 + binMin);
    }

    // Use the result from this iteration as the maximum for the next.
    binMax = binMid;

    var start = Math.max(1, expectedLocation - binMid + 1);
    var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;

    // Initialize the bit array
    var bitArr = Array(finish + 2);

    bitArr[finish + 1] = (1 << _i) - 1;

    for (var j = finish; j >= start; j -= 1) {
      var currentLocation = j - 1;
      var charMatch = patternAlphabet[text.charAt(currentLocation)];

      if (charMatch) {
        matchMask[currentLocation] = 1;
      }

      // First pass: exact match
      bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;

      // Subsequent passes: fuzzy match
      if (_i !== 0) {
        bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
      }

      if (bitArr[j] & mask) {
        finalScore = bitapScore(pattern, {
          errors: _i,
          currentLocation: currentLocation,
          expectedLocation: expectedLocation,
          distance: distance
        });

        // This match will almost certainly be better than any existing match.
        // But check anyway.
        if (finalScore <= currentThreshold) {
          // Indeed it is
          currentThreshold = finalScore;
          bestLocation = currentLocation;

          // Already passed `loc`, downhill from here on in.
          if (bestLocation <= expectedLocation) {
            break;
          }

          // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
          start = Math.max(1, 2 * expectedLocation - bestLocation);
        }
      }
    }

    // No hope for a (better) match at greater error levels.
    var _score2 = bitapScore(pattern, {
      errors: _i + 1,
      currentLocation: expectedLocation,
      expectedLocation: expectedLocation,
      distance: distance
    });

    if (_score2 > currentThreshold) {
      break;
    }

    lastBitArr = bitArr;
  }

  // Count exact matches (those with a score of 0) to be "almost" exact
  return {
    isMatch: bestLocation >= 0,
    score: finalScore === 0 ? 0.001 : finalScore,
    matchedIndices: matchedIndices(matchMask, minMatchCharLength)
  };
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bitap = __webpack_require__(1);
var deepValue = __webpack_require__(2);
var isArray = __webpack_require__(0);

var Fuse = function () {
  function Fuse(list, _ref) {
    var _ref$location = _ref.location,
        location = _ref$location === undefined ? 0 : _ref$location,
        _ref$distance = _ref.distance,
        distance = _ref$distance === undefined ? 100 : _ref$distance,
        _ref$threshold = _ref.threshold,
        threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold,
        _ref$maxPatternLength = _ref.maxPatternLength,
        maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength,
        _ref$caseSensitive = _ref.caseSensitive,
        caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
        _ref$tokenSeparator = _ref.tokenSeparator,
        tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator,
        _ref$findAllMatches = _ref.findAllMatches,
        findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches,
        _ref$minMatchCharLeng = _ref.minMatchCharLength,
        minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng,
        _ref$id = _ref.id,
        id = _ref$id === undefined ? null : _ref$id,
        _ref$keys = _ref.keys,
        keys = _ref$keys === undefined ? [] : _ref$keys,
        _ref$shouldSort = _ref.shouldSort,
        shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort,
        _ref$getFn = _ref.getFn,
        getFn = _ref$getFn === undefined ? deepValue : _ref$getFn,
        _ref$sortFn = _ref.sortFn,
        sortFn = _ref$sortFn === undefined ? function (a, b) {
      return a.score - b.score;
    } : _ref$sortFn,
        _ref$tokenize = _ref.tokenize,
        tokenize = _ref$tokenize === undefined ? false : _ref$tokenize,
        _ref$matchAllTokens = _ref.matchAllTokens,
        matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens,
        _ref$includeMatches = _ref.includeMatches,
        includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches,
        _ref$includeScore = _ref.includeScore,
        includeScore = _ref$includeScore === undefined ? false : _ref$includeScore,
        _ref$verbose = _ref.verbose,
        verbose = _ref$verbose === undefined ? false : _ref$verbose;

    _classCallCheck(this, Fuse);

    this.options = {
      location: location,
      distance: distance,
      threshold: threshold,
      maxPatternLength: maxPatternLength,
      isCaseSensitive: caseSensitive,
      tokenSeparator: tokenSeparator,
      findAllMatches: findAllMatches,
      minMatchCharLength: minMatchCharLength,
      id: id,
      keys: keys,
      includeMatches: includeMatches,
      includeScore: includeScore,
      shouldSort: shouldSort,
      getFn: getFn,
      sortFn: sortFn,
      verbose: verbose,
      tokenize: tokenize,
      matchAllTokens: matchAllTokens
    };

    this.setCollection(list);
  }

  _createClass(Fuse, [{
    key: 'setCollection',
    value: function setCollection(list) {
      this.list = list;
      return list;
    }
  }, {
    key: 'search',
    value: function search(pattern) {
      this._log('---------\nSearch pattern: "' + pattern + '"');

      var _prepareSearchers2 = this._prepareSearchers(pattern),
          tokenSearchers = _prepareSearchers2.tokenSearchers,
          fullSearcher = _prepareSearchers2.fullSearcher;

      var _search2 = this._search(tokenSearchers, fullSearcher),
          weights = _search2.weights,
          results = _search2.results;

      this._computeScore(weights, results);

      if (this.options.shouldSort) {
        this._sort(results);
      }

      return this._format(results);
    }
  }, {
    key: '_prepareSearchers',
    value: function _prepareSearchers() {
      var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var tokenSearchers = [];

      if (this.options.tokenize) {
        // Tokenize on the separator
        var tokens = pattern.split(this.options.tokenSeparator);
        for (var i = 0, len = tokens.length; i < len; i += 1) {
          tokenSearchers.push(new Bitap(tokens[i], this.options));
        }
      }

      var fullSearcher = new Bitap(pattern, this.options);

      return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
    }
  }, {
    key: '_search',
    value: function _search() {
      var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var fullSearcher = arguments[1];

      var list = this.list;
      var resultMap = {};
      var results = [];

      // Check the first item in the list, if it's a string, then we assume
      // that every item in the list is also a string, and thus it's a flattened array.
      if (typeof list[0] === 'string') {
        // Iterate over every item
        for (var i = 0, len = list.length; i < len; i += 1) {
          this._analyze({
            key: '',
            value: list[i],
            record: i,
            index: i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }

        return { weights: null, results: results };
      }

      // Otherwise, the first item is an Object (hopefully), and thus the searching
      // is done on the values of the keys of each item.
      var weights = {};
      for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
        var item = list[_i];
        // Iterate over every key
        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
          var key = this.options.keys[j];
          if (typeof key !== 'string') {
            weights[key.name] = {
              weight: 1 - key.weight || 1
            };
            if (key.weight <= 0 || key.weight > 1) {
              throw new Error('Key weight has to be > 0 and <= 1');
            }
            key = key.name;
          } else {
            weights[key] = {
              weight: 1
            };
          }

          this._analyze({
            key: key,
            value: this.options.getFn(item, key),
            record: item,
            index: _i
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }

      return { weights: weights, results: results };
    }
  }, {
    key: '_analyze',
    value: function _analyze(_ref2, _ref3) {
      var key = _ref2.key,
          _ref2$arrayIndex = _ref2.arrayIndex,
          arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex,
          value = _ref2.value,
          record = _ref2.record,
          index = _ref2.index;
      var _ref3$tokenSearchers = _ref3.tokenSearchers,
          tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers,
          _ref3$fullSearcher = _ref3.fullSearcher,
          fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher,
          _ref3$resultMap = _ref3.resultMap,
          resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap,
          _ref3$results = _ref3.results,
          results = _ref3$results === undefined ? [] : _ref3$results;

      // Check if the texvaluet can be searched
      if (value === undefined || value === null) {
        return;
      }

      var exists = false;
      var averageScore = -1;
      var numTextMatches = 0;

      if (typeof value === 'string') {
        this._log('\nKey: ' + (key === '' ? '-' : key));

        var mainSearchResult = fullSearcher.search(value);
        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);

        if (this.options.tokenize) {
          var words = value.split(this.options.tokenSeparator);
          var scores = [];

          for (var i = 0; i < tokenSearchers.length; i += 1) {
            var tokenSearcher = tokenSearchers[i];

            this._log('\nPattern: "' + tokenSearcher.pattern + '"');

            // let tokenScores = []
            var hasMatchInText = false;

            for (var j = 0; j < words.length; j += 1) {
              var word = words[j];
              var tokenSearchResult = tokenSearcher.search(word);
              var obj = {};
              if (tokenSearchResult.isMatch) {
                obj[word] = tokenSearchResult.score;
                exists = true;
                hasMatchInText = true;
                scores.push(tokenSearchResult.score);
              } else {
                obj[word] = 1;
                if (!this.options.matchAllTokens) {
                  scores.push(1);
                }
              }
              this._log('Token: "' + word + '", score: ' + obj[word]);
              // tokenScores.push(obj)
            }

            if (hasMatchInText) {
              numTextMatches += 1;
            }
          }

          averageScore = scores[0];
          var scoresLen = scores.length;
          for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
            averageScore += scores[_i2];
          }
          averageScore = averageScore / scoresLen;

          this._log('Token score average:', averageScore);
        }

        var finalScore = mainSearchResult.score;
        if (averageScore > -1) {
          finalScore = (finalScore + averageScore) / 2;
        }

        this._log('Score average:', finalScore);

        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;

        this._log('\nCheck Matches: ' + checkTextMatches);

        // If a match is found, add the item to <rawResults>, including its score
        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
          // Check if the item already exists in our results
          var existingResult = resultMap[index];
          if (existingResult) {
            // Use the lowest score
            // existingResult.score, bitapResult.score
            existingResult.output.push({
              key: key,
              arrayIndex: arrayIndex,
              value: value,
              score: finalScore,
              matchedIndices: mainSearchResult.matchedIndices
            });
          } else {
            // Add it to the raw result list
            resultMap[index] = {
              item: record,
              output: [{
                key: key,
                arrayIndex: arrayIndex,
                value: value,
                score: finalScore,
                matchedIndices: mainSearchResult.matchedIndices
              }]
            };

            results.push(resultMap[index]);
          }
        }
      } else if (isArray(value)) {
        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
          this._analyze({
            key: key,
            arrayIndex: _i3,
            value: value[_i3],
            record: record,
            index: index
          }, {
            resultMap: resultMap,
            results: results,
            tokenSearchers: tokenSearchers,
            fullSearcher: fullSearcher
          });
        }
      }
    }
  }, {
    key: '_computeScore',
    value: function _computeScore(weights, results) {
      this._log('\n\nComputing score:\n');

      for (var i = 0, len = results.length; i < len; i += 1) {
        var output = results[i].output;
        var scoreLen = output.length;

        var totalScore = 0;
        var bestScore = 1;

        for (var j = 0; j < scoreLen; j += 1) {
          var weight = weights ? weights[output[j].key].weight : 1;
          var score = weight === 1 ? output[j].score : output[j].score || 0.001;
          var nScore = score * weight;

          if (weight !== 1) {
            bestScore = Math.min(bestScore, nScore);
          } else {
            output[j].nScore = nScore;
            totalScore += nScore;
          }
        }

        results[i].score = bestScore === 1 ? totalScore / scoreLen : bestScore;

        this._log(results[i]);
      }
    }
  }, {
    key: '_sort',
    value: function _sort(results) {
      this._log('\n\nSorting....');
      results.sort(this.options.sortFn);
    }
  }, {
    key: '_format',
    value: function _format(results) {
      var finalOutput = [];

      this._log('\n\nOutput:\n\n', JSON.stringify(results));

      var transformers = [];

      if (this.options.includeMatches) {
        transformers.push(function (result, data) {
          var output = result.output;
          data.matches = [];

          for (var i = 0, len = output.length; i < len; i += 1) {
            var item = output[i];

            if (item.matchedIndices.length === 0) {
              continue;
            }

            var obj = {
              indices: item.matchedIndices,
              value: item.value
            };
            if (item.key) {
              obj.key = item.key;
            }
            if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
              obj.arrayIndex = item.arrayIndex;
            }
            data.matches.push(obj);
          }
        });
      }

      if (this.options.includeScore) {
        transformers.push(function (result, data) {
          data.score = result.score;
        });
      }

      for (var i = 0, len = results.length; i < len; i += 1) {
        var result = results[i];

        if (this.options.id) {
          result.item = this.options.getFn(result.item, this.options.id)[0];
        }

        if (!transformers.length) {
          finalOutput.push(result.item);
          continue;
        }

        var data = {
          item: result.item
        };

        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
          transformers[j](result, data);
        }

        finalOutput.push(data);
      }

      return finalOutput;
    }
  }, {
    key: '_log',
    value: function _log() {
      if (this.options.verbose) {
        var _console;

        (_console = console).log.apply(_console, arguments);
      }
    }
  }]);

  return Fuse;
}();

module.exports = Fuse;

/***/ })
/******/ ]);
});
//# sourceMappingURL=fuse.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.VueForm = factory());
}(this, (function () { 'use strict';

var emailRegExp = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i; // from angular
var urlRegExp = /^(http\:\/\/|https\:\/\/)(.{4,})$/;

var email = function email(value, attrValue, vnode) {
  return emailRegExp.test(value);
};
email._allowNulls = true;

var number = function number(value, attrValue, vnode) {
  return !isNaN(value);
};
number._allowNulls = true;

var url = function url(value, attrValue, vnode) {
  return urlRegExp.test(value);
};
url._allowNulls = true;

var validators = {
  email: email,
  number: number,
  url: url,
  required: function required(value, attrValue, vnode) {
    if (attrValue === false) {
      return true;
    }

    if (value === 0) {
      return true;
    }

    if (vnode.data.attrs && typeof vnode.data.attrs.bool !== 'undefined' || vnode.componentOptions && vnode.componentOptions.propsData && typeof vnode.componentOptions.propsData.bool !== 'undefined') {
      // bool attribute is present, allow false pass validation
      if (value === false) {
        return true;
      }
    }

    if (Array.isArray(value)) {
      return !!value.length;
    }
    return !!value;
  },
  minlength: function minlength(value, length) {
    return value.length >= length;
  },
  maxlength: function maxlength(value, length) {
    return length >= value.length;
  },
  pattern: function pattern(value, _pattern) {
    var patternRegExp = new RegExp('^' + _pattern + '$');
    return patternRegExp.test(value);
  },
  min: function min(value, _min, vnode) {
    if ((vnode.data.attrs.type || '').toLowerCase() == 'number') {
      return +value >= +_min;
    }
    return value >= _min;
  },
  max: function max(value, _max, vnode) {
    if ((vnode.data.attrs.type || '').toLowerCase() == 'number') {
      return +_max >= +value;
    }
    return _max >= value;
  }
};

var config = {
  validators: validators,
  formComponent: 'vueForm',
  formTag: 'form',
  messagesComponent: 'fieldMessages',
  messagesTag: 'div',
  showMessages: '',
  validateComponent: 'validate',
  validateTag: 'div',
  fieldComponent: 'field',
  fieldTag: 'div',
  formClasses: {
    dirty: 'vf-form-dirty',
    pristine: 'vf-form-pristine',
    valid: 'vf-form-valid',
    invalid: 'vf-form-invalid',
    touched: 'vf-form-touched',
    untouched: 'vf-form-untouched',
    focused: 'vf-form-focused',
    submitted: 'vf-form-submitted',
    pending: 'vf-form-pending'
  },
  validateClasses: {
    dirty: 'vf-field-dirty',
    pristine: 'vf-field-pristine',
    valid: 'vf-field-valid',
    invalid: 'vf-field-invalid',
    touched: 'vf-field-touched',
    untouched: 'vf-field-untouched',
    focused: 'vf-field-focused',
    submitted: 'vf-field-submitted',
    pending: 'vf-field-pending'
  },
  inputClasses: {
    dirty: 'vf-dirty',
    pristine: 'vf-pristine',
    valid: 'vf-valid',
    invalid: 'vf-invalid',
    touched: 'vf-touched',
    untouched: 'vf-untouched',
    focused: 'vf-focused',
    submitted: 'vf-submitted',
    pending: 'vf-pending'
  },
  Promise: typeof Promise === 'function' ? Promise : null
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function getClasses(classConfig, state) {
  var _ref;

  return _ref = {}, defineProperty(_ref, classConfig.dirty, state.$dirty), defineProperty(_ref, classConfig.pristine, state.$pristine), defineProperty(_ref, classConfig.valid, state.$valid), defineProperty(_ref, classConfig.invalid, state.$invalid), defineProperty(_ref, classConfig.touched, state.$touched), defineProperty(_ref, classConfig.untouched, state.$untouched), defineProperty(_ref, classConfig.focused, state.$focused), defineProperty(_ref, classConfig.pending, state.$pending), defineProperty(_ref, classConfig.submitted, state.$submitted), _ref;
}

function addClass(el, className) {
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className += ' ' + className;
  }
}

function removeClass(el, className) {
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}

function vModelValue(data) {
  if (data.model) {
    return data.model.value;
  }
  return data.directives.filter(function (v) {
    return v.name === 'model';
  })[0].value;
}

function getVModelAndLabel(nodes, config) {
  var foundVnodes = {
    vModel: [],
    label: null,
    messages: null
  };

  if (!nodes) {
    return foundVnodes;
  }

  function traverse(nodes) {
    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      if (node.componentOptions) {
        if (node.componentOptions.tag === hyphenate(config.messagesComponent)) {
          foundVnodes.messages = node;
        }
      }

      if (node.tag === 'label' && !foundVnodes.label) {
        foundVnodes.label = node;
      }

      if (node.data) {
        if (node.data.model) {
          // model check has to come first. If a component has
          // a directive and v-model, the directive will be in .directives
          // and v-modelstored in .model
          foundVnodes.vModel.push(node);
        } else if (node.data.directives) {
          var match = node.data.directives.filter(function (v) {
            return v.name === 'model';
          });
          if (match.length) {
            foundVnodes.vModel.push(node);
          }
        }
      }
      if (node.children) {
        traverse(node.children);
      } else if (node.componentOptions && node.componentOptions.children) {
        traverse(node.componentOptions.children);
      }
    }
  }

  traverse(nodes);

  return foundVnodes;
}

function getName(vnode) {
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.name) {
    return vnode.data.attrs.name;
  } else if (vnode.componentOptions && vnode.componentOptions.propsData && vnode.componentOptions.propsData.name) {
    return vnode.componentOptions.propsData.name;
  }
}

var hyphenateRE = /([^-])([A-Z])/g;
function hyphenate(str) {
  return str.replace(hyphenateRE, '$1-$2').replace(hyphenateRE, '$1-$2').toLowerCase();
}

function randomId() {
  return Math.random().toString(36).substr(2, 10);
}

// https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;
    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function isShallowObjectDifferent(a, b) {
  var aValue = '';
  var bValue = '';
  Object.keys(a).sort().filter(function (v) {
    return typeof a[v] !== 'function';
  }).forEach(function (v) {
    return aValue += a[v];
  });
  Object.keys(b).sort().filter(function (v) {
    return typeof a[v] !== 'function';
  }).forEach(function (v) {
    return bValue += b[v];
  });
  return aValue !== bValue;
}

var vueFormConfig = 'VueFormProviderConfig' + randomId();
var vueFormState = 'VueFormProviderState' + randomId();
var vueFormParentForm = 'VueFormProviderParentForm' + randomId();

var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

var extend = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};

var vueForm = {
  render: function render(h) {
    var _this = this;

    return h(this.tag || this.vueFormConfig.formTag, {
      on: {
        submit: function submit(event) {
          if (_this.state.$pending) {
            event.preventDefault();
            _this.vueFormConfig.Promise.all(_this.promises).then(function () {
              _this.state._submit();
              _this.$emit('submit', event);
              _this.promises = [];
            });
          } else {
            _this.state._submit();
            _this.$emit('submit', event);
          }
        },
        reset: function reset(event) {
          _this.state._reset();
          _this.$emit('reset', event);
        }
      },
      class: this.className,
      attrs: {
        'novalidate': ''
      }
    }, [this.$slots.default]);
  },

  props: {
    state: {
      type: Object,
      required: true
    },
    tag: String,
    showMessages: String
  },
  inject: { vueFormConfig: vueFormConfig },
  provide: function provide() {
    var _ref;

    return _ref = {}, defineProperty(_ref, vueFormState, this.state), defineProperty(_ref, vueFormParentForm, this), _ref;
  },

  data: function data() {
    return {
      promises: []
    };
  },
  created: function created() {
    var _this2 = this;

    if (!this.state) {
      return;
    }
    var controls = {};
    var state = this.state;
    var formstate = {
      $dirty: false,
      $pristine: true,
      $valid: true,
      $invalid: false,
      $submitted: false,
      $touched: false,
      $untouched: true,
      $focused: false,
      $pending: false,
      $error: {},
      $submittedState: {},
      _id: '',
      _submit: function _submit() {
        _this2.state.$submitted = true;
        _this2.state._cloneState();
      },
      _cloneState: function _cloneState() {
        var cloned = JSON.parse(JSON.stringify(state));
        delete cloned.$submittedState;
        Object.keys(cloned).forEach(function (key) {
          _this2.$set(_this2.state.$submittedState, key, cloned[key]);
        });
      },
      _addControl: function _addControl(ctrl) {
        controls[ctrl.$name] = ctrl;
        _this2.$set(state, ctrl.$name, ctrl);
      },
      _removeControl: function _removeControl(ctrl) {
        delete controls[ctrl.$name];
        _this2.$delete(_this2.state, ctrl.$name);
        _this2.$delete(_this2.state.$error, ctrl.$name);
      },
      _validate: function _validate() {
        Object.keys(controls).forEach(function (key) {
          controls[key]._validate();
        });
      },
      _reset: function _reset() {
        state.$submitted = false;
        state.$pending = false;
        state.$submittedState = {};
        Object.keys(controls).forEach(function (key) {
          var control = controls[key];
          control._hasFocused = false;
          control._setUntouched();
          control._setPristine();
          control.$submitted = false;
          control.$pending = false;
        });
      }
    };

    Object.keys(formstate).forEach(function (key) {
      _this2.$set(_this2.state, key, formstate[key]);
    });

    this.$watch('state', function () {
      var isDirty = false;
      var isValid = true;
      var isTouched = false;
      var isFocused = false;
      var isPending = false;
      Object.keys(controls).forEach(function (key) {
        var control = controls[key];

        control.$submitted = state.$submitted;

        if (control.$dirty) {
          isDirty = true;
        }
        if (control.$touched) {
          isTouched = true;
        }
        if (control.$focused) {
          isFocused = true;
        }
        if (control.$pending) {
          isPending = true;
        }
        if (!control.$valid) {
          isValid = false;
          // add control to errors
          _this2.$set(state.$error, control.$name, control);
        } else {
          _this2.$delete(state.$error, control.$name);
        }
      });

      state.$dirty = isDirty;
      state.$pristine = !isDirty;
      state.$touched = isTouched;
      state.$untouched = !isTouched;
      state.$focused = isFocused;
      state.$valid = isValid;
      state.$invalid = !isValid;
      state.$pending = isPending;
    }, {
      deep: true,
      immediate: true
    });

    /* watch pristine? if set to true, set all children to pristine
    Object.keys(controls).forEach((ctrl) => {
      controls[ctrl].setPristine();
    });*/
  },

  computed: {
    className: function className() {
      var classes = getClasses(this.vueFormConfig.formClasses, this.state);
      return classes;
    }
  },
  methods: {
    reset: function reset() {
      this.state._reset();
    },
    validate: function validate() {
      this.state._validate();
    }
  }
};

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var scope_eval = createCommonjsModule(function (module) {
// Generated by CoffeeScript 1.10.0
(function() {
  var hasProp = {}.hasOwnProperty,
    slice = [].slice;

  module.exports = function(source, scope) {
    var key, keys, value, values;
    keys = [];
    values = [];
    for (key in scope) {
      if (!hasProp.call(scope, key)) continue;
      value = scope[key];
      if (key === 'this') {
        continue;
      }
      keys.push(key);
      values.push(value);
    }
    return Function.apply(null, slice.call(keys).concat(["return eval(" + (JSON.stringify(source)) + ")"])).apply(scope["this"], values);
  };

}).call(commonjsGlobal);
});

function findLabel(nodes) {
  if (!nodes) {
    return;
  }
  for (var i = 0; i < nodes.length; i++) {
    var vnode = nodes[i];
    if (vnode.tag === 'label') {
      return nodes[i];
    } else if (nodes[i].children) {
      return findLabel(nodes[i].children);
    }
  }
}

var messages = {
  inject: { vueFormConfig: vueFormConfig, vueFormState: vueFormState, vueFormParentForm: vueFormParentForm },
  render: function render(h) {
    var _this = this;

    var children = [];
    var field = this.formstate[this.fieldname];
    if (field && field.$error && this.isShown) {
      Object.keys(field.$error).forEach(function (key) {
        if (_this.$slots[key] || _this.$scopedSlots[key]) {
          var out = _this.$slots[key] || _this.$scopedSlots[key](field);
          if (_this.autoLabel) {
            var label = findLabel(out);
            if (label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);
        }
      });
      if (!children.length && field.$valid) {
        if (this.$slots.default || this.$scopedSlots.default) {
          var out = this.$slots.default || this.$scopedSlots.default(field);
          if (this.autoLabel) {
            var label = findLabel(out);
            if (label) {
              label.data = label.data || {};
              label.data.attrs = label.data.attrs || {};
              label.data.attrs.for = field._id;
            }
          }
          children.push(out);
        }
      }
    }
    return h(this.tag || this.vueFormConfig.messagesTag, children);
  },

  props: {
    state: Object,
    name: String,
    show: {
      type: String,
      default: ''
    },
    tag: {
      type: String
    },
    autoLabel: Boolean
  },
  data: function data() {
    return {
      formstate: null,
      fieldname: ''
    };
  },
  created: function created() {
    this.fieldname = this.name;
    this.formstate = this.state || this.vueFormState;
  },

  computed: {
    isShown: function isShown() {
      var field = this.formstate[this.fieldname];
      var show = this.show || this.vueFormParentForm.showMessages || this.vueFormConfig.showMessages;

      if (!show || !field) {
        return true;
      }

      return scope_eval(show, field);
    }
  }
};

var validate = {
  render: function render(h) {
    var _this = this;

    var foundVnodes = getVModelAndLabel(this.$slots.default, this.vueFormConfig);
    var vModelnodes = foundVnodes.vModel;
    var attrs = {
      for: null
    };
    if (vModelnodes.length) {
      this.name = getName(vModelnodes[0]);

      if (foundVnodes.messages) {
        this.$nextTick(function () {
          var messagesVm = foundVnodes.messages.componentInstance;
          if (messagesVm) {
            messagesVm.fieldname = messagesVm.fieldname || _this.name;
          }
        });
      }

      if (this.autoLabel) {
        var id = vModelnodes[0].data.attrs.id || this.fieldstate._id;
        this.fieldstate._id = id;
        vModelnodes[0].data.attrs.id = id;
        if (foundVnodes.label) {
          foundVnodes.label.data = foundVnodes.label.data || {};
          foundVnodes.label.data.attrs = foundVnodes.label.data.attrs || {};
          foundVnodes.label.data.attrs.for = id;
        } else if (this.tag === 'label') {
          attrs.for = id;
        }
      }
      vModelnodes.forEach(function (vnode) {
        if (!vnode.data.directives) {
          vnode.data.directives = [];
        }
        vnode.data.directives.push({ name: 'vue-form-validator', value: { fieldstate: _this.fieldstate, config: _this.vueFormConfig } });
        vnode.data.attrs['vue-form-validator'] = '';
        vnode.data.attrs['debounce'] = _this.debounce;
      });
    } else {
      //console.warn('Element with v-model not found');
    }
    return h(this.tag || this.vueFormConfig.validateTag, { 'class': this.className, attrs: attrs }, this.$slots.default);
  },

  props: {
    state: Object,
    custom: null,
    autoLabel: Boolean,
    tag: {
      type: String
    },
    debounce: Number
  },
  inject: { vueFormConfig: vueFormConfig, vueFormState: vueFormState, vueFormParentForm: vueFormParentForm },
  data: function data() {
    return {
      name: '',
      formstate: null,
      fieldstate: {}
    };
  },

  methods: {
    getClasses: function getClasses$$1(classConfig) {
      var s = this.fieldstate;
      return Object.keys(s.$error).reduce(function (classes, error) {
        classes[classConfig.invalid + '-' + hyphenate(error)] = true;
        return classes;
      }, getClasses(classConfig, s));
    }
  },
  computed: {
    className: function className() {
      return this.getClasses(this.vueFormConfig.validateClasses);
    },
    inputClassName: function inputClassName() {
      return this.getClasses(this.vueFormConfig.inputClasses);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.fieldstate.$name = this.name;
    this.formstate._addControl(this.fieldstate);

    var vModelEls = this.$el.querySelectorAll('[vue-form-validator]');

    // add classes to the input element
    this.$watch('inputClassName', function (value, oldValue) {
      var out = void 0;

      var _loop = function _loop(i, el) {
        if (oldValue) {
          Object.keys(oldValue).filter(function (k) {
            return oldValue[k];
          }).forEach(function (k) {
            return removeClass(el, k);
          });
        }
        out = [];
        Object.keys(value).filter(function (k) {
          return value[k];
        }).forEach(function (k) {
          out.push(k);
          addClass(el, k);
        });
      };

      for (var i = 0, el; el = vModelEls[i++];) {
        _loop(i, el);
      }
      _this2.fieldstate._className = out;
    }, {
      deep: true,
      immediate: true
    });
  },
  created: function created() {
    var _this4 = this;

    this.formstate = this.state || this.vueFormState;
    var vm = this;
    var pendingValidators = [];
    var _val = void 0;
    var prevVnode = void 0;
    this.fieldstate = {
      $name: '',
      $dirty: false,
      $pristine: true,
      $valid: true,
      $invalid: false,
      $touched: false,
      $untouched: true,
      $focused: false,
      $pending: false,
      $submitted: false,
      $error: {},
      _className: null,
      _id: 'vf' + randomId(),
      _setValidatorVadility: function _setValidatorVadility(validator, isValid) {
        if (isValid) {
          vm.$delete(this.$error, validator);
        } else {
          vm.$set(this.$error, validator, true);
        }
      },
      _setValidity: function _setValidity(isValid) {
        this.$valid = isValid;
        this.$invalid = !isValid;
      },
      _setDirty: function _setDirty() {
        this.$dirty = true;
        this.$pristine = false;
      },
      _setPristine: function _setPristine() {
        this.$dirty = false;
        this.$pristine = true;
      },
      _setTouched: function _setTouched() {
        this.$touched = true;
        this.$untouched = false;
      },
      _setUntouched: function _setUntouched() {
        this.$touched = false;
        this.$untouched = true;
      },
      _setFocused: function _setFocused(value) {
        this.$focused = typeof value === 'boolean' ? value : false;
        if (this.$focused) {
          this._setHasFocused();
        } else {
          this._setTouched();
        }
      },
      _setHasFocused: function _setHasFocused() {
        this._hasFocused = true;
      },

      _hasFocused: false,
      _validators: {},
      _validate: function _validate(vnode) {
        var _this3 = this;

        if (!vnode) {
          vnode = prevVnode;
        } else {
          prevVnode = vnode;
        }
        this.$pending = true;
        var isValid = true;
        var emptyAndRequired = false;
        var value = vModelValue(vnode.data);
        _val = value;

        var pending = {
          promises: [],
          names: []
        };

        pendingValidators.push(pending);

        var attrs = vnode.data.attrs || {};
        var childvm = vnode.componentInstance;
        if (childvm && childvm._vfValidationData_) {
          attrs = extend({}, attrs, childvm._vfValidationData_);
        }

        var propsData = vnode.componentOptions && vnode.componentOptions.propsData ? vnode.componentOptions.propsData : {};

        Object.keys(this._validators).forEach(function (validator) {
          // when value is empty and current validator is not the required validator, the field is valid
          if ((value === '' || value === undefined || value === null) && validator !== 'required') {
            _this3._setValidatorVadility(validator, true);
            emptyAndRequired = true;
            // return early, required validator will
            // fall through if it is present
            return;
          }

          var attrValue = typeof attrs[validator] !== 'undefined' ? attrs[validator] : propsData[validator];
          var isFunction = typeof _this3._validators[validator] === 'function';

          // match vue behaviour, ignore if attribute is null or undefined. But for type=email|url|number and custom validators, the value will be null, so allow with _allowNulls
          if (isFunction && (attrValue === null || typeof attrValue === 'undefined') && !_this3._validators[validator]._allowNulls) {
            return;
          }

          var result = isFunction ? _this3._validators[validator](value, attrValue, vnode) : vm.custom[validator];

          if (typeof result === 'boolean') {
            if (result) {
              _this3._setValidatorVadility(validator, true);
            } else {
              isValid = false;
              _this3._setValidatorVadility(validator, false);
            }
          } else {
            pending.promises.push(result);
            pending.names.push(validator);
            vm.vueFormParentForm.promises.push(result);
          }
        });

        if (pending.promises.length) {
          vm.vueFormConfig.Promise.all(pending.promises).then(function (results) {

            // only concerned with the last promise results, in case
            // async responses return out of order
            if (pending !== pendingValidators[pendingValidators.length - 1]) {
              //console.log('ignoring old promise', pending.promises);
              return;
            }

            pendingValidators = [];

            results.forEach(function (result, i) {
              var name = pending.names[i];
              if (result) {
                _this3._setValidatorVadility(name, true);
              } else {
                isValid = false;
                _this3._setValidatorVadility(name, false);
              }
            });
            _this3._setValidity(isValid);
            _this3.$pending = false;
          });
        } else {
          this._setValidity(isValid);
          this.$pending = false;
        }
      }
    };

    // add custom validators
    if (this.custom) {
      Object.keys(this.custom).forEach(function (prop) {
        if (typeof _this4.custom[prop] === 'function') {
          _this4.custom[prop]._allowNulls = true;
          _this4.fieldstate._validators[prop] = _this4.custom[prop];
        } else {
          _this4.fieldstate._validators[prop] = _this4.custom[prop];
        }
      });
    }

    this.$watch('custom', function (v, oldV) {
      if (!oldV) {
        return;
      }
      if (isShallowObjectDifferent(v, oldV)) {
        _this4.fieldstate._validate();
      }
    }, {
      deep: true
    });
  },
  destroyed: function destroyed() {
    this.formstate._removeControl(this.fieldstate);
  }
};

var field = {
  inject: { vueFormConfig: vueFormConfig },
  render: function render(h) {
    var foundVnodes = getVModelAndLabel(this.$slots.default, this.vueFormConfig);
    var vModelnodes = foundVnodes.vModel;
    var attrs = {
      for: null
    };
    if (vModelnodes.length) {
      if (this.autoLabel) {
        var id = vModelnodes[0].data.attrs && vModelnodes[0].data.attrs.id || 'vf' + randomId();
        vModelnodes[0].data.attrs.id = id;
        if (foundVnodes.label) {
          foundVnodes.label.data = foundVnodes.label.data || {};
          foundVnodes.label.data.attrs = foundVnodes.label.data.attrs = {};
          foundVnodes.label.data.attrs.for = id;
        } else if (this.tag === 'label') {
          attrs.for = id;
        }
      }
    }
    return h(this.tag || this.vueFormConfig.fieldTag, { attrs: attrs }, this.$slots.default);
  },

  props: {
    tag: {
      type: String
    },
    autoLabel: {
      type: Boolean,
      default: true
    }
  }
};

var debouncedValidators = {};

function addValidators(attrs, validators, fieldValidators) {
  Object.keys(attrs).forEach(function (attr) {
    var prop = attr === 'type' ? attrs[attr].toLowerCase() : attr.toLowerCase();

    if (validators[prop] && !fieldValidators[prop]) {
      fieldValidators[prop] = validators[prop];
    }
  });
}

function compareChanges(vnode, oldvnode, validators) {

  var hasChanged = false;
  var attrs = vnode.data.attrs || {};
  var oldAttrs = oldvnode.data.attrs || {};
  var out = {};

  if (vModelValue(vnode.data) !== vModelValue(oldvnode.data)) {
    out.vModel = true;
    hasChanged = true;
  }

  Object.keys(validators).forEach(function (validator) {
    if (attrs[validator] !== oldAttrs[validator]) {
      out[validator] = true;
      hasChanged = true;
    }
  });

  // if is a component
  if (vnode.componentOptions && vnode.componentOptions.propsData) {
    var _attrs = vnode.componentOptions.propsData;
    var _oldAttrs = oldvnode.componentOptions.propsData;
    Object.keys(validators).forEach(function (validator) {
      if (_attrs[validator] !== _oldAttrs[validator]) {
        out[validator] = true;
        hasChanged = true;
      }
    });
  }

  if (hasChanged) {
    return out;
  }
}

var vueFormValidator = {
  name: 'vue-form-validator',
  bind: function bind(el, binding, vnode) {
    var fieldstate = binding.value.fieldstate;
    var validators = binding.value.config.validators;

    var attrs = vnode.data.attrs || {};
    var inputName = getName(vnode);

    if (!inputName) {
      console.warn('vue-form: name attribute missing');
      return;
    }

    if (attrs.debounce) {
      debouncedValidators[fieldstate._id] = debounce(function (fieldstate, vnode) {
        if (fieldstate._hasFocused) {
          fieldstate._setDirty();
        }
        fieldstate._validate(vnode);
      }, attrs.debounce);
    }

    // add validators
    addValidators(attrs, validators, fieldstate._validators);

    // if is a component, a validator attribute could be a prop this component uses
    if (vnode.componentOptions && vnode.componentOptions.propsData) {
      addValidators(vnode.componentOptions.propsData, validators, fieldstate._validators);
    }

    fieldstate._validate(vnode);

    // native listeners
    el.addEventListener('blur', function () {
      fieldstate._setFocused(false);
    }, false);
    el.addEventListener('focus', function () {
      fieldstate._setFocused(true);
    }, false);

    // component listeners
    var vm = vnode.componentInstance;
    if (vm) {
      vm.$on('blur', function () {
        fieldstate._setFocused(false);
      });
      vm.$on('focus', function () {
        fieldstate._setFocused(true);
      });
      el.addEventListener('focusout', function () {
        fieldstate._setFocused(false);
      }, false);
      el.addEventListener('focusin', function () {
        fieldstate._setFocused(true);
      }, false);

      vm.$on('vf:validate', function (data) {
        if (!vm._vfValidationData_) {
          addValidators(data, validators, fieldstate._validators);
        }
        vm._vfValidationData_ = data;
        fieldstate._validate(vm.$vnode);
      });
    }
  },
  update: function update(el, binding, vnode, oldVNode) {
    var validators = binding.value.config.validators;

    var changes = compareChanges(vnode, oldVNode, validators);
    var fieldstate = binding.value.fieldstate;


    var attrs = vnode.data.attrs || {};
    var vm = vnode.componentInstance;
    if (vm && vm._vfValidationData_) {
      attrs = extend({}, attrs, vm[vm._vfValidationData_]);
    }

    if (vnode.elm.className.indexOf(fieldstate._className[0]) === -1) {
      vnode.elm.className = vnode.elm.className + ' ' + fieldstate._className.join(' ');
    }

    if (!changes) {
      return;
    }

    if (changes.vModel) {
      // re-validate all
      if (attrs.debounce) {
        fieldstate.$pending = true;
        debouncedValidators[fieldstate._id](fieldstate, vnode);
      } else {
        if (fieldstate._hasFocused) {
          fieldstate._setDirty();
        }
        fieldstate._validate(vnode);
      }
    } else {
      // attributes have changed
      // to do: loop through them and re-validate changed ones
      //for(let prop in changes) {
      //  fieldstate._validate(vnode, validator);
      //}
      // for now
      fieldstate._validate(vnode);
    }
  }
};

function VueFormBase(options) {
  var _components;

  var c = extend(true, {}, config, options);
  this.provide = function () {
    return defineProperty({}, vueFormConfig, c);
  };
  this.components = (_components = {}, defineProperty(_components, c.formComponent, vueForm), defineProperty(_components, c.messagesComponent, messages), defineProperty(_components, c.validateComponent, validate), defineProperty(_components, c.fieldComponent, field), _components);
  this.directives = { vueFormValidator: vueFormValidator };
}

var VueForm = function (_VueFormBase) {
  inherits(VueForm, _VueFormBase);

  function VueForm() {
    classCallCheck(this, VueForm);
    return possibleConstructorReturn(this, (VueForm.__proto__ || Object.getPrototypeOf(VueForm)).apply(this, arguments));
  }

  createClass(VueForm, null, [{
    key: 'install',
    value: function install(Vue, options) {
      Vue.mixin(new this(options));
    }
  }, {
    key: 'installed',
    get: function get$$1() {
      return !!this.install.done;
    },
    set: function set$$1(val) {
      this.install.done = val;
    }
  }]);
  return VueForm;
}(VueFormBase);

VueFormBase.call(VueForm);
// temp fix for vue 2.3.0
VueForm.options = new VueForm();

return VueForm;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)))

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueSmoothScroll"] = factory();
	else
		root["VueSmoothScroll"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var SmoothScroll = __webpack_require__(1);
	module.exports = {
	    install: function (Vue, options) {
	        options = options || { name: 'smoothscroll' };
	        Vue.directive(options.name, {
	            inserted: function (el, binding) {
	                SmoothScroll(el, binding.value["duration"], binding.value["callback"], binding.value["context"]);
	            }
	        });
	        Object.defineProperty(Vue.prototype, '$SmoothScroll', {
	            get: function () {
	                return SmoothScroll;
	            }
	        });
	    }
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, smoothScroll) {
	  'use strict';

	  // Support RequireJS and CommonJS/NodeJS module formats.
	  // Attach smoothScroll to the `window` when executed as a <script>.

	  // RequireJS
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (smoothScroll), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	  // CommonJS
	  } else if (typeof exports === 'object' && typeof module === 'object') {
	    module.exports = smoothScroll();

	  } else {
	    root.smoothScroll = smoothScroll();
	  }

	})(this, function(){
	'use strict';

	// Do not initialize smoothScroll when running server side, handle it in client:
	if (typeof window !== 'object') return;

	// We do not want this script to be applied in browsers that do not support those
	// That means no smoothscroll on IE9 and below.
	if(document.querySelectorAll === void 0 || window.pageYOffset === void 0 || history.pushState === void 0) { return; }

	// Get the top position of an element in the document
	var getTop = function(element, start) {
	    // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
	    if(element.nodeName === 'HTML') return -start
	    return element.getBoundingClientRect().top + start
	}
	// ease in out function thanks to:
	// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
	var easeInOutCubic = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

	// calculate the scroll position we should be in
	// given the start and end point of the scroll
	// the time elapsed from the beginning of the scroll
	// and the total duration of the scroll (default 500ms)
	var position = function(start, end, elapsed, duration) {
	    if (elapsed > duration) return end;
	    return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
	    // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
	}

	// we use requestAnimationFrame to be called by the browser before every repaint
	// if the first argument is an element then scroll to the top of this element
	// if the first argument is numeric then scroll to this location
	// if the callback exist, it is called when the scrolling is finished
	// if context is set then scroll that element, else scroll window
	var smoothScroll = function(el, duration, callback, context){
	    duration = duration || 500;
	    context = context || window;
	    var start = context.scrollTop || window.pageYOffset;

	    if (typeof el === 'number') {
	      var end = parseInt(el);
	    } else {
	      var end = getTop(el, start);
	    }

	    var clock = Date.now();
	    var requestAnimationFrame = window.requestAnimationFrame ||
	        window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
	        function(fn){window.setTimeout(fn, 15);};

	    var step = function(){
	        var elapsed = Date.now() - clock;
	        if (context !== window) {
	          context.scrollTop = position(start, end, elapsed, duration);
	        }
	        else {
	          window.scroll(0, position(start, end, elapsed, duration));
	        }

	        if (elapsed > duration) {
	            if (typeof callback === 'function') {
	                callback(el);
	            }
	        } else {
	            requestAnimationFrame(step);
	        }
	    }
	    step();
	}

	var linkHandler = function(ev) {
	    ev.preventDefault();

	    if (location.hash !== this.hash) window.history.pushState(null, null, this.hash)
	    // using the history api to solve issue #1 - back doesn't work
	    // most browser don't update :target when the history api is used:
	    // THIS IS A BUG FROM THE BROWSERS.
	    // change the scrolling duration in this call
	    var node = document.getElementById(this.hash.substring(1))
	    if(!node) return; // Do not scroll to non-existing node

	    smoothScroll(node, 500, function(el) {
	        location.replace('#' + el.id)
	        // this will cause the :target to be activated.
	    });
	}

	// We look for all the internal links in the documents and attach the smoothscroll function
	document.addEventListener("DOMContentLoaded", function () {
	    var internal = document.querySelectorAll('a[href^="#"]:not([href="#"])'), a;
	    for(var i=internal.length; a=internal[--i];){
	        a.addEventListener("click", linkHandler, false);
	    }
	});

	// return smoothscroll API
	return smoothScroll;

	});


/***/ }
/******/ ])
});
;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var options = {
    validators: {
        checkbox: function checkbox(value, attrValue, vnode) {
            // return true to set input as $valid, false to set as $invalid
            return value;
        },
        sameas: function sameas(value, attrValue, vnode) {
            return value == attrValue;
        }
    }
};

/* harmony default export */ __webpack_exports__["a"] = (options);

/***/ }),

/***/ 305:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(306)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(308)
/* template */
var __vue_template__ = __webpack_require__(309)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79cf782a"
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
Component.options.__file = "src/components/plugins/DataTable/DataTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79cf782a", Component.options)
  } else {
    hotAPI.reload("data-v-79cf782a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(307);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("439ccb24", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79cf782a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79cf782a\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 307:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-79cf782a] {\n    margin-top: 12px;\n}\n.sortable[data-v-79cf782a] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuse_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        title: {
            default: ""
        },
        columns: {
            required: true
        },
        rows: {
            required: true
        },
        perPage: {
            default: 10
        },
        sortable: {
            default: true
        },
        paginate: {
            default: true
        },
        exportable: {
            default: true
        },
        pagelen: {
            type: Array,
            default: function _default() {
                return [5, 10, 20, 50];
            }
        }
    },

    data: function data() {
        return {
            currentPage: 1,
            currentPerPage: this.perPage,
            sortColumn: -1,
            sortType: 'desc',
            searchInput: ''
        };
    },
    mounted: function mounted() {
        this.sort(0);
    },

    methods: {
        nextPage: function nextPage() {
            if (this.processedRows.length > this.currentPerPage * this.currentPage && this.currentPerPage != -1) ++this.currentPage;
        },
        previousPage: function previousPage() {
            if (this.currentPage > 1) --this.currentPage;
        },
        sort: function sort(index) {
            if (!this.sortable) {
                return;
            }
            if (this.sortColumn === index) {
                this.sortType = this.sortType === 'asc' ? 'desc' : 'asc';
            } else {
                this.sortType = 'desc';
                this.sortColumn = index;
            }
        },
        erase: function erase(row, index) {
            //this.$emit("rowClick", row, index);
            //console.log("erase");
        },
        edit: function edit(row, index) {
            //  this.$emit("rowClick", row, index);
            //console.log("edit");
        },
        exportExcel: function exportExcel() {
            var mimeType = 'data:application/vnd.ms-excel';
            var html = this.renderTable().replace(/ /g, '%20');

            var d = new Date();

            var dummy = document.createElement('a');
            dummy.href = mimeType + ', ' + html;
            dummy.download = this.title.toLowerCase().replace(/ /g, '-') + '-' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '-' + d.getHours() + '-' + d.getMinutes() + '-' + d.getSeconds() + '.xls';
            dummy.click();
        },
        renderTable: function renderTable() {
            var table = '<table><thead>';

            table += '<tr>';
            for (var i = 0; i < this.columns.length; i++) {
                var column = this.columns[i];
                table += '<th>';
                table += column.label;
                table += '</th>';
            }
            table += '</tr>';

            table += '</thead><tbody>';

            for (var i = 0; i < this.rows.length; i++) {
                var row = this.rows[i];
                table += '<tr>';
                for (var j = 0; j < this.columns.length; j++) {
                    var _column = this.columns[j];
                    table += '<td>';
                    table += this.collect(row, _column.field);
                    table += '</td>';
                }
                table += '</tr>';
            }

            table += '</tbody></table>';

            return table;
        },
        dig: function dig(obj, selector) {
            var result = obj;
            var splitter = selector.split('.');
            for (var i = 0; i < splitter.length; i++) {
                if (typeof result === 'undefined') return undefined;else result = result[splitter[i]];
            }return result;
        },
        extractName: function extractName(string) {
            return string.split(':')[0].trim();
        },
        extractArgs: function extractArgs(string) {
            return string.split(':')[1];
        },
        collect: function collect(obj, field) {
            if (typeof field === 'function') return field(obj);else if (typeof field === 'string') return this.dig(obj, field);else return undefined;
        }
    },

    computed: {
        processedRows: function processedRows() {
            var _this = this;

            var computedRows = this.rows;

            if (this.sortable !== false) {
                computedRows = computedRows.sort(function (x, y) {
                    if (!_this.columns[_this.sortColumn]) {
                        return 0;
                    }

                    var cook = function cook(x) {
                        x = _this.collect(x, _this.columns[_this.sortColumn].field);
                        if (typeof x === 'string') {
                            x = x.toLowerCase();
                            if (_this.columns[_this.sortColumn].numeric) x = x.indexOf('.') >= 0 ? parseFloat(x) : parseInt(x);
                        }
                        return x;
                    };

                    x = cook(x);
                    y = cook(y);

                    return (x < y ? -1 : x > y ? 1 : 0) * (_this.sortType === 'desc' ? -1 : 1);
                });
            }

            if (this.searchInput) {
                computedRows = new __WEBPACK_IMPORTED_MODULE_0_fuse_js___default.a(computedRows, {
                    keys: this.columns.map(function (c) {
                        return c.field;
                    })
                }).search(this.searchInput);
            }
            return computedRows;
        },
        paginated: function paginated() {
            var paginatedRows = this.processedRows;
            if (this.paginate && this.currentPerPage != -1) {
                paginatedRows = paginatedRows.slice((this.currentPage - 1) * this.currentPerPage, this.currentPage * this.currentPerPage);
            }
            return paginatedRows;
        }
    },
    watch: {
        currentPerPage: function currentPerPage() {
            this.currentPage = 1;
            this.paginated;
        },
        searchInput: function searchInput() {
            this.currentPage = 1;
            this.paginated;
        }
    }
});

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card p-3" }, [
    _c("div", { staticClass: "table-header" }, [
      _c("h4", { staticClass: "table-title text-center mt-3" }, [
        _vm._v(_vm._s(_vm.title))
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "text-left" }, [
      _c("div", { attrs: { id: "search-input-container" } }, [
        _c("label", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.searchInput,
                expression: "searchInput"
              }
            ],
            staticClass: "form-control mb-2",
            attrs: {
              type: "search",
              id: "search-input",
              placeholder: "Search data"
            },
            domProps: { value: _vm.searchInput },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.searchInput = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "actions float-right pr-4 mb-3" }, [
          this.exportable
            ? _c(
                "a",
                {
                  staticClass: "btn btn-info text-white",
                  attrs: {
                    href: "javascript:undefined",
                    title: "export excel"
                  },
                  on: { click: _vm.exportExcel }
                },
                [_c("i", { staticClass: "fa fa-download" })]
              )
            : _vm._e()
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "table-responsive" }, [
      _c(
        "table",
        { ref: "table", staticClass: "table", attrs: { id: "example" } },
        [
          _c("thead", [
            _c(
              "tr",
              [
                _vm._l(_vm.columns, function(column, index) {
                  return _c(
                    "th",
                    {
                      key: index,
                      class:
                        (_vm.sortable ? "sortable" : "") +
                        (_vm.sortColumn === index
                          ? _vm.sortType === "desc"
                            ? " sorting-desc"
                            : " sorting-asc"
                          : ""),
                      style: { width: column.width ? column.width : "auto" },
                      on: {
                        click: function($event) {
                          _vm.sort(index)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(column.label) +
                          "\n                        "
                      ),
                      _c("i", {
                        staticClass: "fa float-right",
                        class:
                          _vm.sortColumn === index
                            ? _vm.sortType === "desc"
                              ? " fa fa-angle-down"
                              : " fa fa-angle-up"
                            : ""
                      })
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._t("thead-tr")
              ],
              2
            )
          ]),
          _vm._v(" "),
          _c(
            "tbody",
            _vm._l(_vm.paginated, function(row, pindex) {
              return _c(
                "tr",
                { key: pindex },
                [
                  _vm._l(_vm.columns, function(column, index) {
                    return [
                      !column.html && column.label != "Actions"
                        ? _c(
                            "td",
                            {
                              key: index,
                              class: column.numeric ? "numeric" : ""
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.collect(row, column.field)) +
                                  "\n                        "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      column.html && column.label != "Actions"
                        ? _c("td", {
                            key: index,
                            class: column.numeric ? "numeric" : "",
                            domProps: {
                              innerHTML: _vm._s(_vm.collect(row, column.field))
                            }
                          })
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.extractName(column.field) === "__slot"
                        ? _c(
                            "td",
                            { key: index },
                            [
                              _vm._t(_vm.extractArgs(column.field), null, {
                                rowData: row,
                                rowIndex: pindex,
                                row: row
                              })
                            ],
                            2
                          )
                        : _vm._e()
                    ]
                  }),
                  _vm._v(" "),
                  _vm._t("tbody-tr", null, { row: row })
                ],
                2
              )
            })
          )
        ]
      )
    ]),
    _vm._v(" "),
    _vm.paginate
      ? _c("div", { staticClass: "table-footer" }, [
          _c("div", { staticClass: "datatable-length float-left pl-3" }, [
            _c("span", [_vm._v("Rows per page:")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.currentPerPage,
                    expression: "currentPerPage"
                  }
                ],
                staticClass: "custom-select",
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.currentPerPage = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  }
                }
              },
              [
                _vm._l(_vm.pagelen, function(len) {
                  return _c("option", { key: len, domProps: { value: len } }, [
                    _vm._v(_vm._s(len))
                  ])
                }),
                _vm._v(" "),
                _c("option", { attrs: { value: "-1" } }, [_vm._v("All")])
              ],
              2
            ),
            _vm._v(" "),
            _c("div", { staticClass: "datatable-info  pb-2 mt-3" }, [
              _c("span", [_vm._v("Showing ")]),
              _vm._v(
                " " +
                  _vm._s(
                    (_vm.currentPage - 1) * _vm.currentPerPage
                      ? (_vm.currentPage - 1) * _vm.currentPerPage
                      : 1
                  ) +
                  " -" +
                  _vm._s(
                    _vm.currentPerPage == -1
                      ? _vm.processedRows.length
                      : Math.min(
                          _vm.processedRows.length,
                          _vm.currentPerPage * _vm.currentPage
                        )
                  ) +
                  " of " +
                  _vm._s(_vm.processedRows.length) +
                  "\n                "
              ),
              _c("span", [_vm._v("records")])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "float-right" }, [
            _c("ul", { staticClass: "pagination" }, [
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "btn link",
                    attrs: { href: "javascript:undefined", tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.previousPage($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-angle-left" })]
                )
              ]),
              _vm._v(" "),
              _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "btn link",
                    attrs: { href: "javascript:undefined", tabindex: "0" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.nextPage($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-angle-right" })]
                )
              ])
            ])
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79cf782a", module.exports)
  }
}

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(311)
}
var normalizeComponent = __webpack_require__(78)
/* script */
var __vue_script__ = __webpack_require__(313)
/* template */
var __vue_template__ = __webpack_require__(314)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d9980472"
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
Component.options.__file = "src/components/plugins/Company-Station-View/CSView.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d9980472", Component.options)
  } else {
    hotAPI.reload("data-v-d9980472", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("30322b70", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d9980472\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CSView.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d9980472\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CSView.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "\n.pagination[data-v-d9980472] {\n    margin-top: 12px;\n}\n.sortable[data-v-d9980472] {\n    cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fuse_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fuse_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__ = __webpack_require__(25);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        title: {
            default: ""
        },
        companies: {
            required: true
        },
        stations: {
            required: true
        },
        perPage: {
            default: 10
        },
        sortable: {
            default: true
        },
        paginate: {
            default: true
        },
        exportable: {
            default: true
        },
        pagelen: {
            type: Array,
            default: function _default() {
                return [5, 10, 20, 50];
            }
        }
    },

    data: function data() {
        return {
            currentPage: 1,
            currentPerPage: this.perPage,
            sortColumn: -1,
            sortType: 'desc',
            searchInput: '',
            company_stations: [],

            available_companies: [],

            products: "",
            csu_company: "",
            csu_stations: [],
            cru_company: "",
            cru_stations: [],
            is_company_regular_user: false,
            is_company_super_user: false,
            is_e360_super_user: false,

            preset: {
                company_id: 0,
                station_id: 0
            }

        };
    },
    mounted: function mounted() {
        this.show_available_companies();
    },

    methods: {
        show_company_stations: function show_company_stations(company_name) {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "start");
            var user_details = JSON.parse(localStorage.getItem('user_details'));
            //let company_name= this.preset.company_name;
            axios.get(this.$store.state.host_url + "/stations/by_company/" + company_name, {
                headers: {
                    "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
                } }).then(function (response) {
                __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                _this.company_stations = response.data.data;
            }).catch(function (error) {
                __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("catch_errors", error);
            });
        },
        show_available_companies: function show_available_companies() {
            var _this2 = this;

            __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "start");
            var user_details = JSON.parse(localStorage.getItem('user_details'));
            __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.menu_items = JSON.parse(localStorage.getItem('role_details'));
            var company_route = '';
            ////console.log(user_details);
            if (user_details.role_id == 'master' && user_details.company_id == 'master') {
                ///e360 super user
                company_route = '/companies/e360_super_user';
                axios.get(__WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.host_url + company_route, {
                    headers: {
                        "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
                    } }).then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                    _this2.available_companies = response.data.data;;
                    _this2.is_e360_super_user = true;
                }).catch(function (error) {
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("catch_errors", error);
                });
            } else if (user_details.role_id == 'super' && user_details.company_id == 'super') {
                //first company super user
                company_route = '/companies/first_company_user/' + user_details.id;
                axios.get(__WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.host_url + company_route, {
                    headers: {
                        "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
                    } }).then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                    _this2.available_companies = response.data.data;;
                    ///one company  
                    _this2.csu_company = response.data.data[0];
                    _this2.preset.company_id = _this2.csu_company.id;
                    _this2.is_company_super_user = true;
                    axios.get(_this2.$store.state.host_url + "/stations/by_company/" + _this2.csu_company.id, {
                        headers: {
                            "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
                        } }).then(function (response) {
                        __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                        _this2.csu_stations = response.data.data;
                    });
                }).catch(function (error) {
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("catch_errors", error);
                });
            } else {
                ///for regular company users
                company_route = '/companies/company_user/' + user_details.company_id;
                axios.get(__WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].state.host_url + company_route, {
                    headers: {
                        "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
                    } }).then(function (response) {
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                    ///one company
                    _this2.cru_company = response.data.data[0];
                    _this2.is_company_regular_user = true;
                    _this2.preset.company_id = user_details.company_id;
                    axios.get(_this2.$store.state.host_url + "/stations/by_user/" + user_details.id, {
                        headers: {
                            "Authorization": "Bearer " + user_details.token, "Cache-Control": "no-cache"
                        } }).then(function (response) {
                        __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                        var stations = response.data.data;
                        stations.forEach(function (item, index) {
                            //console.log(item);
                            _this2.cru_stations.push(item.station);
                        });
                    });
                }).catch(function (error) {
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("activateLoader", "end");
                    __WEBPACK_IMPORTED_MODULE_1_src_store_store_js__["a" /* default */].commit("catch_errors", error);
                });
            }
        }
    },
    watch: {}
});

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card p-3" }, [
    _vm.is_e360_super_user
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._v("\n                Select Company\n                "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.preset.company_id,
                      expression: "preset.company_id"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { name: "company", size: "1" },
                  on: {
                    change: [
                      function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.preset,
                          "company_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      },
                      function($event) {
                        _vm.show_company_stations(_vm.preset.company_id)
                      }
                    ]
                  }
                },
                _vm._l(_vm.available_companies, function(option, index) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.name) + "\n                    ")
                  ])
                })
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._v("\n                Select   Station\n                "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.preset.station_id,
                      expression: "preset.station_id"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "station",
                    name: "station",
                    size: "1",
                    required: ""
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.preset,
                        "station_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.company_stations, function(option) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.name) + "\n                    ")
                  ])
                })
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group float-left" },
              [
                _c("br"),
                _vm._v(" "),
                _vm._t("actions", null, {
                  rowData: _vm.preset.station_id,
                  rowIndex: _vm.preset.company_id
                })
              ],
              2
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.is_company_super_user
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._v("\n                 Company  "),
              _c("br"),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-warning btn-md" }, [
                _vm._v(_vm._s(_vm.csu_company.name))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._v("\n                Select   Station\n                "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.preset.station_id,
                      expression: "preset.station_id"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "station",
                    name: "station",
                    size: "1",
                    required: ""
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.preset,
                        "station_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.csu_stations, function(option) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.name) + "\n                    ")
                  ])
                })
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group float-left" },
              [
                _c("br"),
                _vm._v(" "),
                _vm._t("actions", null, {
                  rowData: _vm.preset.station_id,
                  rowIndex: _vm.preset.company_id
                })
              ],
              2
            )
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.is_company_regular_user
      ? _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-2" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._v("\n                 Company  "),
              _c("br"),
              _vm._v(" "),
              _c("button", { staticClass: "btn btn-warning btn-md" }, [
                _vm._v(_vm._s(_vm.cru_company.name))
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-4" }, [
            _c("div", { staticClass: "form-group" }, [
              _vm._v("\n                Assigned Station(s)\n                "),
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.preset.station_id,
                      expression: "preset.station_id"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    id: "station",
                    name: "station",
                    size: "1",
                    required: ""
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.preset,
                        "station_id",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                _vm._l(_vm.cru_stations, function(option) {
                  return _c("option", { domProps: { value: option.id } }, [
                    _vm._v(_vm._s(option.name) + "\n                    ")
                  ])
                })
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-3" }, [
            _c(
              "div",
              { staticClass: "form-group float-left" },
              [
                _c("br"),
                _vm._v(" "),
                _vm._t("actions", null, {
                  rowData: _vm.preset.station_id,
                  rowIndex: _vm.preset.company_id
                })
              ],
              2
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d9980472", module.exports)
  }
}

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultiselect=t():e.VueMultiselect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function o(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}function l(e,t,i,n){return e.filter(function(e){return o(n(e,i),t)})}function r(e){return e.filter(function(e){return!e.$isLabel})}function a(e,t){return function(i){return i.reduce(function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i},[])}}function u(e,t,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],e,t,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=i(2),p=function(e){return e&&e.__esModule?e:{default:e}}(h),d=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}};t.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return s(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):l(i,t,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map(function(t){return t[e.trackBy]}):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(t){return e.customLabel(t,e.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(e,t){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(e){this.internalValue=this.getInternalValue(e)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(e){return null===e||void 0===e?[]:this.multiple?(0,p.default)(e):(0,p.default)([e])},filterAndFlat:function(e,t,i){return d(u(t,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return d(a(this.groupValues,this.groupLabel),r)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isNotSelected:function(e){return!this.isSelected(e)},getOptionLabel:function(e){if(s(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return s(t)?"":t},select:function(e,t){if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isLabel||e.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.multiple?this.internalValue.push(e):this.internalValue=[e],this.$emit("select",(0,p.default)(e),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===e?"undefined":c(e))?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(e),this.id),this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return e.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,i){"use strict";function n(e){if(Array.isArray(e))return e.map(n);if(e&&"object"===(void 0===e?"undefined":s(e))){for(var t={},i=Object.keys(e),o=0,l=i.length;o<l;o++){var r=i[o];t[r]=n(e[r])}return t}return e}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,i){"use strict";function n(e){i(6)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);t.default=u.exports},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deepClone=t.pointerMixin=t.multiselectMixin=t.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);t.default=o.default,t.Multiselect=o.default,t.multiselectMixin=r.default,t.pointerMixin=u.default,t.deepClone=h.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);t.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and "+e+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(e,t){},function(e,t){e.exports=function(e,t,i,n,s,o){var l,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)||!e._k(t.keyCode,"tab",9,t.key)?(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValue,function(t){return[e._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),e.removeElement(t)},mousedown:function(i){i.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]})],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})]:e._e(),e._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.isOpen?e.search:e.currentOptionLabel},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;t.preventDefault(),e.pointerBackward()},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key))return null;t.stopPropagation(),e.removeLastElement()}]}}):e._e(),e._v(" "),e.searchable?e._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:e._s(e.currentOptionLabel)},on:{mousedown:function(t){t.preventDefault(),e.toggle(t)}}})],2),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():i("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(i){i.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:e.optionHighlight(n,t)},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])}):e._e(),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o}])});

/***/ })

});