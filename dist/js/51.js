webpackJsonp([51],{

/***/ 1663:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1664);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(92)("01456c62", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-51dac6e6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radios_checkboxes.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-51dac6e6\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./radios_checkboxes.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1664:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "\n.wrapper .primarycheck .custom-control-input:checked ~  .custom-control-label::before,\n.wrapper .primaryradio .custom-control-input:checked ~  .custom-control-label::before{\n    background-color: #428bca !important;\n}\n.wrapper .infocheck .custom-control-input:checked ~  .custom-control-label::before,\n.wrapper .inforadio .custom-control-input:checked ~  .custom-control-label::before{\n    background-color: #4fc1e9 !important;\n}\n.wrapper .warningcheck .custom-control-input:checked ~  .custom-control-label::before,\n.wrapper .warningradio .custom-control-input:checked ~  .custom-control-label::before{\n    background-color: #ffb65f !important;\n}\n.wrapper .dangercheck .custom-control-input:checked ~  .custom-control-label::before,\n.wrapper .dangerradio .custom-control-input:checked ~  .custom-control-label::before{\n    background-color: #fb8678 !important;\n}\n.wrapper .successcheck .custom-control-input:checked ~  .custom-control-label::before,\n.wrapper .successradio .custom-control-input:checked ~  .custom-control-label::before{\n    background-color: #22d69d !important;\n}\n.wrapper .defaultcheck .custom-control-input:checked ~  .custom-control-label::before,\n.wrapper .defaultradio .custom-control-input:checked ~  .custom-control-label::before {\n    background-color: #CCC !important;\n}\ninput {\n    cursor: pointer;\n}\n.cur {\n    cursor: not-allowed;\n}\n", ""]);

// exports


/***/ }),

/***/ 1665:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

__webpack_require__(1666);
__webpack_require__(1668);
/* harmony default export */ __webpack_exports__["default"] = ({
    name: "radios_checkboxes",
    data: function data() {
        return {
            options: [{ text: 'First Checkbox', value: 'first' }, { text: 'Second Checkbox', value: 'second' }, { text: 'Third Checkbox', value: 'third' }],
            checked: true,
            indeterminate: true,
            radiooptions: [{ text: 'First radio', value: 'first' }, { text: 'Second radio', value: 'second' }, { text: 'Third radio', value: 'third' }]
        };
    },

    methods: {
        changeState: function changeState() {
            var el = document.getElementById("indeterminateCheckbox");
            if (el.readOnly) el.checked = el.readOnly = false;else if (!el.checked) el.readOnly = el.indeterminate = true;
        }
    }
});

/***/ }),

/***/ 1666:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1667);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(94)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./checkbox.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./checkbox.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1667:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "/*\n * checkbox.css\n * v1.1.3\n * \n * Tiny set of CSS3 animations for your input checkboxes.\n * https://github.com/720kb/checkbox.css\n * \n * MIT license\n * Thu Sep 15 2016\n */\n@-webkit-keyframes hey{50%{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-filter:blur(20px);filter:blur(20px)}90%{-webkit-filter:blur(40px);filter:blur(40px)}100%{-webkit-transform:none;transform:none;-webkit-filter:none;filter:none}}@keyframes hey{50%{-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-filter:blur(20px);filter:blur(20px)}90%{-webkit-filter:blur(40px);filter:blur(40px)}100%{-webkit-transform:none;transform:none;-webkit-filter:none;filter:none}}.checkbox-hey:checked{-webkit-animation:hey .8s linear;animation:hey .8s linear}@-webkit-keyframes omg{59%{-webkit-transform:translateY(-4px);transform:translateY(-4px)}60%{-webkit-transform:translateX(-8px) translateY(12px);transform:translateX(-8px) translateY(12px)}70%{-webkit-transform:translateY(-8px);transform:translateY(-8px)}80%{-webkit-transform:translateX(8px);transform:translateX(8px)}90%{-webkit-transform:scale(.4);transform:scale(.4)}100%{-webkit-transform:none;transform:none}}@keyframes omg{59%{-webkit-transform:translateY(-4px);transform:translateY(-4px)}60%{-webkit-transform:translateX(-8px) translateY(12px);transform:translateX(-8px) translateY(12px)}70%{-webkit-transform:translateY(-8px);transform:translateY(-8px)}80%{-webkit-transform:translateX(8px);transform:translateX(8px)}90%{-webkit-transform:scale(.4);transform:scale(.4)}100%{-webkit-transform:none;transform:none}}.checkbox-omg:checked{-webkit-animation:omg .5s linear;animation:omg .5s linear}.checkbox-splash:active{-webkit-transform:scale(2);transform:scale(2);-webkit-transition:all .15s linear;transition:all .15s linear}.checkbox-roll:checked{-webkit-transform:rotateX(360deg);transform:rotateX(360deg);-webkit-transition:all .15s linear;transition:all .15s linear}.checkbox-rotate:checked{-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-transition:all .2s linear;transition:all .2s linear}.checkbox-down{-webkit-transition:all .15s linear;transition:all .15s linear}.checkbox-up,.checkbox-yo{-webkit-transition:all .15s linear}.checkbox-down:checked{-webkit-transform:translateY(10px);transform:translateY(10px)}.checkbox-up{transition:all .15s linear}.checkbox-up:checked{-webkit-transform:translateY(-10px);transform:translateY(-10px)}.checkbox-yo{transition:all .15s linear}.checkbox-yo:checked{-webkit-transform:rotate(-45deg) translateZ(0);transform:rotate(-45deg) translateZ(0)}@-webkit-keyframes inout{30%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(.3);transform:scale(.3)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}@keyframes inout{30%{-webkit-transform:scale(1.3);transform:scale(1.3)}70%{-webkit-transform:scale(.3);transform:scale(.3)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}.checkbox-inout:checked{-webkit-animation:inout .5s linear;animation:inout .5s linear}.checkbox-away{-webkit-transition:all .15s linear;transition:all .15s linear}.checkbox-away:checked{-webkit-transform:translateX(-10px);transform:translateX(-10px)}@-webkit-keyframes jump{50%{-webkit-transform:scale(.6) translateY(-10px);transform:scale(.6) translateY(-10px)}70%{-webkit-transform:scale(.8) translateY(-5px);transform:scale(.8) translateY(-5px)}90%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}100%{-webkit-transform:none;transform:none}}@keyframes jump{50%{-webkit-transform:scale(.6) translateY(-10px);transform:scale(.6) translateY(-10px)}70%{-webkit-transform:scale(.8) translateY(-5px);transform:scale(.8) translateY(-5px)}90%{-webkit-transform:scale(1) translateY(0);transform:scale(1) translateY(0)}100%{-webkit-transform:none;transform:none}}.checkbox-jump:checked{-webkit-animation:jump .35s linear;animation:jump .35s linear}@-webkit-keyframes tv{50%{-webkit-transform:scale(.6) rotateY(100deg) skew(45deg);transform:scale(.6) rotateY(100deg) skew(45deg)}70%{-webkit-transform:scale(.8) rotateY(200deg) skew(70deg);transform:scale(.8) rotateY(200deg) skew(70deg)}90%{-webkit-transform:scale(1) rotateY(500deg) skew(20deg);transform:scale(1) rotateY(500deg) skew(20deg)}100%{-webkit-transform:none;transform:none}}@keyframes tv{50%{-webkit-transform:scale(.6) rotateY(100deg) skew(45deg);transform:scale(.6) rotateY(100deg) skew(45deg)}70%{-webkit-transform:scale(.8) rotateY(200deg) skew(70deg);transform:scale(.8) rotateY(200deg) skew(70deg)}90%{-webkit-transform:scale(1) rotateY(500deg) skew(20deg);transform:scale(1) rotateY(500deg) skew(20deg)}100%{-webkit-transform:none;transform:none}}.checkbox-tv:checked{-webkit-animation:tv .3s linear;animation:tv .3s linear}", ""]);

// exports


/***/ }),

/***/ 1668:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1669);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(94)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./radiobox.min.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./radiobox.min.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(49)(false);
// imports


// module
exports.push([module.i, "/*\n * radiobox.css\n * v1.0.1\n * \n * Tiny set of CSS3 animations for your radio inputs.\n * https://github.com/720kb/\n * \n * MIT license\n * Thu Sep 15 2016\n */\n@-webkit-keyframes focus{0%{opacity:.4;-webkit-transform:scale(3);transform:scale(3)}10%{-webkit-transform:scale(2.5);transform:scale(2.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}@keyframes focus{0%{opacity:.4;-webkit-transform:scale(3);transform:scale(3)}10%{-webkit-transform:scale(2.5);transform:scale(2.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}.radiobox-focus:checked{-webkit-animation:focus .25s ease-out;animation:focus .25s ease-out}@-webkit-keyframes tremolo{0%{-webkit-transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg)}50%{-webkit-transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0);transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0)}90%{-webkit-transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg)}100%{-webkit-transform:none;transform:none}}@keyframes tremolo{0%{-webkit-transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(.5px) translateX(-.5px) scale(1) skewY(1deg) skewX(-1deg)}50%{-webkit-transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0);transform:translateX(0) translateY(0) scale(1.1) skewY(0) skewX(0)}90%{-webkit-transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg);transform:translateY(-.5px) translateX(.5px) scale(1) skewY(1deg) skewX(-1deg)}100%{-webkit-transform:none;transform:none}}.radiobox-tremolo:checked{-webkit-animation:tremolo 65ms linear;animation:tremolo 65ms linear;-webkit-animation-iteration-count:7;animation-iteration-count:7}@-webkit-keyframes boing{0%{-webkit-transform:translateY(3px) scaleY(.8);transform:translateY(3px) scaleY(.8)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}90%{opacity:.5;-webkit-transform:translateY(2px) scaleY(1) scaleX(1.5);transform:translateY(2px) scaleY(1) scaleX(1.5)}100%{-webkit-transform:none;transform:none}}@keyframes boing{0%{-webkit-transform:translateY(3px) scaleY(.8);transform:translateY(3px) scaleY(.8)}50%{-webkit-transform:translateY(-5px);transform:translateY(-5px)}90%{opacity:.5;-webkit-transform:translateY(2px) scaleY(1) scaleX(1.5);transform:translateY(2px) scaleY(1) scaleX(1.5)}100%{-webkit-transform:none;transform:none}}.radiobox-boing:checked{-webkit-animation:boing .2s ease-in-out;animation:boing .2s ease-in-out;-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes scatman{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}20%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}40%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}60%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:none;transform:none}}@keyframes scatman{0%{-webkit-transform:translateX(-20px);transform:translateX(-20px)}20%{-webkit-transform:translateX(-2px);transform:translateX(-2px)}40%{-webkit-transform:translateX(-1px);transform:translateX(-1px)}60%{-webkit-transform:translateX(0);transform:translateX(0)}100%{-webkit-transform:none;transform:none}}.radiobox-scatman:checked{-webkit-animation:scatman .3s ease-in-out;animation:scatman .3s ease-in-out;-webkit-animation-iteration-count:2;animation-iteration-count:2}@-webkit-keyframes ufo{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}60%{-webkit-transform:scaleY(1) scaleX(1.43) rotate(270deg);transform:scaleY(1) scaleX(1.43) rotate(270deg)}100%{-webkit-transform:none;transform:none}}@keyframes ufo{0%{-webkit-transform:scaleY(.8);transform:scaleY(.8)}60%{-webkit-transform:scaleY(1) scaleX(1.43) rotate(270deg);transform:scaleY(1) scaleX(1.43) rotate(270deg)}100%{-webkit-transform:none;transform:none}}.radiobox-ufo:checked{-webkit-animation:ufo .2s linear;animation:ufo .2s linear;-webkit-animation-iteration-count:4;animation-iteration-count:4}@-webkit-keyframes flash{0%,60%{-webkit-transform:scale(0);transform:scale(0)}30%{-webkit-transform:scale(.5);transform:scale(.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}@keyframes flash{0%,60%{-webkit-transform:scale(0);transform:scale(0)}30%{-webkit-transform:scale(.5);transform:scale(.5)}90%{-webkit-transform:scale(1);transform:scale(1)}100%{-webkit-transform:none;transform:none}}.radiobox-flash:checked{-webkit-animation:flash .2s cubic-bezier(.03,.61,.17,.97);animation:flash .2s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes return{0%{-webkit-transform:scale(.3) translateX(7px);transform:scale(.3) translateX(7px)}50%{-webkit-transform:scale(.8) rotate(270deg) translateY(-10px);transform:scale(.8) rotate(270deg) translateY(-10px)}90%{-webkit-transform:skewX(15deg) rotate(270deg);transform:skewX(15deg) rotate(270deg)}}@keyframes return{0%{-webkit-transform:scale(.3) translateX(7px);transform:scale(.3) translateX(7px)}50%{-webkit-transform:scale(.8) rotate(270deg) translateY(-10px);transform:scale(.8) rotate(270deg) translateY(-10px)}90%{-webkit-transform:skewX(15deg) rotate(270deg);transform:skewX(15deg) rotate(270deg)}}.radiobox-return:checked{-webkit-animation:return .25s cubic-bezier(.03,.61,.17,.97);animation:return .25s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes boom{0%{opacity:.2;-webkit-transform:scale(2);transform:scale(2)}90%{opacity:.01;-webkit-transform:scale(6);transform:scale(6)}100%{-webkit-transform:none;transform:none}}@keyframes boom{0%{opacity:.2;-webkit-transform:scale(2);transform:scale(2)}90%{opacity:.01;-webkit-transform:scale(6);transform:scale(6)}100%{-webkit-transform:none;transform:none}}.radiobox-boom:checked{-webkit-animation:boom .2s ease-in;animation:boom .2s ease-in;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes vertigo{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px);transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px)}60%{-webkit-transform:scale(1.2) skewY(5deg) rotate(0);transform:scale(1.2) skewY(5deg) rotate(0)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}@keyframes vertigo{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px);transform:scale(.5) skewX(45deg) translateY(3px) translateX(-3px)}60%{-webkit-transform:scale(1.2) skewY(5deg) rotate(0);transform:scale(1.2) skewY(5deg) rotate(0)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}.radiobox-vertigo:checked{-webkit-animation:vertigo .2s ease-in;animation:vertigo .2s ease-in;-webkit-animation-iteration-count:5;animation-iteration-count:5}@-webkit-keyframes pump{0%,100%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-20deg);transform:rotate(15deg) skewX(10deg) skewY(-20deg)}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-40deg);transform:rotate(15deg) skewX(10deg) skewY(-40deg)}}@keyframes pump{0%,100%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-20deg);transform:rotate(15deg) skewX(10deg) skewY(-20deg)}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(15deg) skewX(10deg) skewY(-40deg);transform:rotate(15deg) skewX(10deg) skewY(-40deg)}}@-webkit-keyframes pumpit{0%{-webkit-transform:none;transform:none}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(40deg);transform:rotate(-15deg) skewX(-10deg) skewY(40deg)}100%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(20deg);transform:rotate(-15deg) skewX(-10deg) skewY(20deg)}}@keyframes pumpit{0%{-webkit-transform:none;transform:none}50%{-webkit-transform:scale(.8);transform:scale(.8)}80%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(40deg);transform:rotate(-15deg) skewX(-10deg) skewY(40deg)}100%{-webkit-transform:rotate(-15deg) skewX(-10deg) skewY(20deg);transform:rotate(-15deg) skewX(-10deg) skewY(20deg)}}.radiobox-pump:checked{-webkit-animation:pump .4s cubic-bezier(.03,.61,.17,.97),pumpit .4s .4s linear;animation:pump .4s cubic-bezier(.03,.61,.17,.97),pumpit .4s .4s linear;-webkit-animation-iteration-count:1;animation-iteration-count:1}@-webkit-keyframes hooray{0%{opacity:.1;-webkit-transform:scale(5);transform:scale(5)}60%{-webkit-transform:none;transform:none}}@keyframes hooray{0%{opacity:.1;-webkit-transform:scale(5);transform:scale(5)}60%{-webkit-transform:none;transform:none}}.radiobox-hooray:checked{-webkit-animation:hooray .2s ease-in;animation:hooray .2s ease-in;-webkit-animation-iteration-count:3;animation-iteration-count:3}@-webkit-keyframes wheel{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.9) skewX(9deg);transform:scale(.9) skewX(9deg)}60%{-webkit-transform:scale(1.1) skewY(9deg) rotate(270deg);transform:scale(1.1) skewY(9deg) rotate(270deg)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}@keyframes wheel{0%{-webkit-transform:scale(1) rotate(50deg);transform:scale(1) rotate(50deg)}30%{-webkit-transform:scale(.9) skewX(9deg);transform:scale(.9) skewX(9deg)}60%{-webkit-transform:scale(1.1) skewY(9deg) rotate(270deg);transform:scale(1.1) skewY(9deg) rotate(270deg)}90%{-webkit-transform:skew(-9deg,-9deg);transform:skew(-9deg,-9deg)}100%{-webkit-transform:none;transform:none}}.radiobox-wheel:checked{-webkit-animation:wheel .1s cubic-bezier(.03,.61,.17,.97);animation:wheel .1s cubic-bezier(.03,.61,.17,.97);-webkit-animation-iteration-count:5;animation-iteration-count:5}.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}", ""]);

// exports


/***/ }),

/***/ 1670:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row check" }, [
    _c(
      "div",
      { staticClass: "col-lg-12" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-warning-card",
            attrs: { header: "Toggle Buttons", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-6" },
                [
                  _c("h5", [_vm._v("Colors")]),
                  _vm._v(" "),
                  _c("toggle-button", {
                    attrs: {
                      value: false,
                      sync: true,
                      labels: true,
                      color: { checked: "#09BD8F", unchecked: "#dc6460" }
                    }
                  }),
                  _vm._v(" "),
                  _c("h5", { staticClass: "mt-3\n" }, [_vm._v("Lables")]),
                  _vm._v(" "),
                  _c("toggle-button", {
                    attrs: {
                      value: true,
                      labels: { checked: "Checked", unchecked: "UnChecked" },
                      width: 100,
                      color: { checked: "#09BD8F", unchecked: "#dc6460" }
                    }
                  }),
                  _vm._v(" "),
                  _c("h5", { staticClass: "mt-3" }, [_vm._v("Width")]),
                  _vm._v(" "),
                  _c("toggle-button", {
                    attrs: {
                      value: true,
                      labels: true,
                      width: 50,
                      color: { checked: "#09BD8F", unchecked: "#dc6460" }
                    }
                  }),
                  _vm._v(" "),
                  _c("toggle-button", {
                    attrs: {
                      value: true,
                      labels: true,
                      width: 60,
                      color: { checked: "#09BD8F", unchecked: "#dc6460" }
                    }
                  }),
                  _vm._v(" "),
                  _c("toggle-button", {
                    attrs: {
                      value: true,
                      labels: true,
                      width: 100,
                      color: { checked: "#09BD8F", unchecked: "#dc6460" }
                    }
                  }),
                  _vm._v(" "),
                  _c("toggle-button", {
                    attrs: {
                      value: true,
                      labels: true,
                      width: 120,
                      color: { checked: "#09BD8F", unchecked: "#dc6460" }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 " },
                [
                  _c("h5", { staticClass: "mb-3 mt-3" }, [_vm._v("Basic")]),
                  _vm._v(" "),
                  _c("toggle-button", {
                    staticClass: "mb-5 togglesiwtch",
                    attrs: {
                      value: false,
                      sync: true,
                      labels: true,
                      color: { checked: "#6f9dd6", unchecked: "#6f9dd6" }
                    }
                  }),
                  _vm._v(" "),
                  _c("h5", { staticClass: "mb-3" }, [_vm._v("Disabled")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cur" },
                    [
                      _c("toggle-button", {
                        staticClass: "cur",
                        attrs: {
                          value: false,
                          sync: true,
                          labels: true,
                          disabled: true
                        }
                      }),
                      _vm._v(" "),
                      _c("toggle-button", {
                        staticClass: "cur",
                        attrs: {
                          value: true,
                          sync: true,
                          labels: true,
                          disabled: true
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-info-card",
            attrs: { header: "Checkboxes with animations", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-hey",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Hey")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-away",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Away")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-inout",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Inout\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-rotate",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Rotate\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-yo",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Yo")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-roll",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Roll")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-up",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Up")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-down",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Down\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-tv",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Tv")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-jump",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Jump")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-omg",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Omg")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "checkbox-splash",
                      attrs: { type: "checkbox" }
                    }),
                    _vm._v(" Splash")
                  ])
                ])
              ])
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-danger-card",
            attrs: { header: "Radios with animations", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", [
                  _c("label", { attrs: { tabindex: "0" } }, [
                    _c("input", {
                      staticClass: "radiobox-tremolo",
                      attrs: { type: "radio", name: "x", value: "1" }
                    }),
                    _vm._v(" Tremolo\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-boing",
                      attrs: { type: "radio", name: "x", value: "2" }
                    }),
                    _vm._v(" Boing\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-boom",
                      attrs: { type: "radio", name: "x", value: "3" }
                    }),
                    _vm._v(" Boom\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-flash",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Flash\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-wheel",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Wheel\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-return",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Return\n                            ")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-6" }, [
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-scatman",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Scatman\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: " " }, [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-vertigo",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Vertigo\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-pump",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Pump")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-focus",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Focus\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-hooray",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Hooray\n                            ")
                  ])
                ]),
                _vm._v(" "),
                _c("div", [
                  _c("label", [
                    _c("input", {
                      staticClass: "radiobox-ufo",
                      attrs: { type: "radio", name: "x" }
                    }),
                    _vm._v(" Ufo\n                            ")
                  ])
                ])
              ])
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6" },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-success-card",
            attrs: { header: "Check boxes", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 mb-2" }, [
                _c("h5", [_vm._v("Color checkboxes")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c("b-form-checkbox", { staticClass: "primarycheck" }, [
                    _vm._v("Primary")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c("b-form-checkbox", { staticClass: "infocheck" }, [
                    _vm._v("Info")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c("b-form-checkbox", { staticClass: "warningcheck" }, [
                    _vm._v("Warning")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c("b-form-checkbox", { staticClass: "dangercheck" }, [
                    _vm._v("Danger")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c("b-form-checkbox", { staticClass: "successcheck" }, [
                    _vm._v("Success")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c("b-form-checkbox", { staticClass: "defaultcheck" }, [
                    _vm._v("Default")
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row " }, [
              _c("div", { staticClass: "col-12 mt-3" }, [
                _c("h5", [_vm._v("Inline checkboxes")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-12" },
                [
                  _c("b-form-checkbox-group", {
                    attrs: { options: _vm.options, name: "radioInline" }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("h5", [_vm._v("Intermediate checkboxes")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6 mt-2" },
                [
                  _c(
                    "b-form-checkbox",
                    {
                      attrs: { indeterminate: _vm.indeterminate },
                      on: {
                        "update:indeterminate": function($event) {
                          _vm.indeterminate = $event
                        }
                      },
                      model: {
                        value: _vm.checked,
                        callback: function($$v) {
                          _vm.checked = $$v
                        },
                        expression: "checked"
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Intermediate\n                        "
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-3" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("h5", [_vm._v(" Disabled  ")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6 mt-2" },
                [
                  _c("b-form-checkbox", { attrs: { disabled: true } }, [
                    _vm._v("Can't check\n                        ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6 mt-2" },
                [
                  _c("b-form-checkbox", { attrs: { disabled: true } }, [
                    _vm._v("This too\n                        ")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6 mt-2" },
                [
                  _c("b-form-checkbox", { attrs: { disabled: true } }, [
                    _vm._v("And this\n                        ")
                  ])
                ],
                1
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-lg-6 " },
      [
        _c(
          "b-card",
          {
            staticClass: "bg-info-card",
            attrs: { header: "Radios", "header-tag": "h4" }
          },
          [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12 mb-2" }, [
                _c("h5", [_vm._v("Color Radios")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-4 col-md-6" }, [
                _c(
                  "div",
                  { staticClass: "custom-controls-stacked" },
                  [
                    _c(
                      "b-form-radio",
                      {
                        staticClass: "primaryradio",
                        attrs: { checked: "false" }
                      },
                      [_vm._v("Primary\n                            ")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c(
                    "b-form-radio",
                    { staticClass: "inforadio", attrs: { checked: "false" } },
                    [_vm._v("Info\n                        ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c(
                    "b-form-radio",
                    {
                      staticClass: "warningradio",
                      attrs: { checked: "false" }
                    },
                    [_vm._v("Warning\n                        ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c(
                    "b-form-radio",
                    { staticClass: "dangerradio", attrs: { checked: "false" } },
                    [_vm._v("Danger\n                        ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6" },
                [
                  _c(
                    "b-form-radio",
                    {
                      staticClass: "successradio",
                      attrs: { checked: "false" }
                    },
                    [_vm._v("Success\n                        ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-4 col-md-6 mb-3" },
                [
                  _c(
                    "b-form-radio",
                    {
                      staticClass: "defaultradio",
                      attrs: { checked: "false" }
                    },
                    [_vm._v("Default\n                        ")]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("h5", [_vm._v("Inline radios")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-12 mt-2" }, [
                _c(
                  "div",
                  { staticClass: "custom-controls-stacked" },
                  [
                    _c("b-form-radio-group", {
                      attrs: { options: _vm.radiooptions }
                    })
                  ],
                  1
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mt-4" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("h5", [_vm._v(" Disabled state")])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 mt-3" },
                [
                  _c(
                    "b-form-radio",
                    { attrs: { disabled: true, checked: "false" } },
                    [_vm._v("Its Disbaled")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-lg-6 mt-3" },
                [
                  _c(
                    "b-form-radio",
                    { attrs: { disabled: true, checked: "false" } },
                    [_vm._v("Can't check")]
                  )
                ],
                1
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
    require("vue-hot-reload-api")      .rerender("data-v-51dac6e6", module.exports)
  }
}

/***/ }),

/***/ 744:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1663)
}
var normalizeComponent = __webpack_require__(244)
/* script */
var __vue_script__ = __webpack_require__(1665)
/* template */
var __vue_template__ = __webpack_require__(1670)
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
Component.options.__file = "src/components/pages/radios_checkboxes.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-51dac6e6", Component.options)
  } else {
    hotAPI.reload("data-v-51dac6e6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});