(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-variable-manager"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/variable-manager/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Change z-indexes to allow more than 3 tabs */\n[class*=\"gui_tab_\"][class*=\"gui_is-selected_\"] {\n  z-index: 10 !important;\n}\n[class*=\"gui_tab_\"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*=\"gui_tab_\"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*=\"gui_tab_\"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*=\"gui_tab_\"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url(" + escape(__webpack_require__(/*! ./search.svg */ "./src/addons/addons/variable-manager/search.svg")) + ");\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n\n[dir=\"rtl\"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager-too-big {\n  display: none;\n  cursor: pointer;\n  font: inherit;\n  font-style: italic;\n  color: inherit;\n  background: none;\n  border: none;\n  margin: 0;\n  padding: 8px;\n  opacity: 0.8;\n  width: 100%;\n  text-align: left;\n}\n.sa-var-manager-too-big:hover {\n  text-decoration: underline;\n}\n[data-too-big=\"true\"] .sa-var-manager-too-big {\n  display: block;\n}\n[data-too-big=\"true\"] .sa-var-manager-value-input {\n  display: none;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid var(--ui-black-transparent);\n  text-align: left;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzg1NWNkNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/variable-manager/_runtime_entry.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/variable-manager/_runtime_entry.js ***!
  \**************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/variable-manager/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/variable-manager/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icon.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/icon.svg");
/* harmony import */ var _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./search.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/variable-manager/search.svg");
/* generated by pull.js */




var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icon.svg": _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "search.svg": _url_loader_search_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/variable-manager/search.svg":
/*!*******************************************************!*\
  !*** ./src/addons/addons/variable-manager/search.svg ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="

/***/ }),

/***/ "./src/addons/addons/variable-manager/userscript.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/variable-manager/userscript.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, msg, vm, localVariables, globalVariables, preventUpdate, manager, searchBox, localVars, localHeading, localList, globalVars, globalHeading, globalList, varTab, varTabIcon, varTabText, updateHeadingVisibility, rowToVariableMap, observer, WrappedVariable, fullReload, quickReload, cleanup, setVisible, oldStep;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          setVisible = function _setVisible(visible) {
            if (visible) {
              varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
              var contentArea = document.querySelector("[class^=gui_tabs]");
              contentArea.insertAdjacentElement("beforeend", manager);
              fullReload();
            } else {
              varTab.classList.remove(addon.tab.scratchClass("react-tabs_react-tabs__tab--selected"), addon.tab.scratchClass("gui_is-selected"));
              manager.remove();
              cleanup();
            }
          };
          cleanup = function _cleanup() {
            localVariables = [];
            globalVariables = [];
          };
          quickReload = function _quickReload() {
            var _addon$tab$redux$stat4, _addon$tab$redux$stat5, _addon$tab$redux$stat6;
            if (((_addon$tab$redux$stat4 = addon.tab.redux.state) === null || _addon$tab$redux$stat4 === void 0 ? void 0 : (_addon$tab$redux$stat5 = _addon$tab$redux$stat4.scratchGui) === null || _addon$tab$redux$stat5 === void 0 ? void 0 : (_addon$tab$redux$stat6 = _addon$tab$redux$stat5.editorTab) === null || _addon$tab$redux$stat6 === void 0 ? void 0 : _addon$tab$redux$stat6.activeTabIndex) !== 3 || preventUpdate) return;
            var _iterator6 = _createForOfIteratorHelper(localVariables),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var variable = _step6.value;
                variable.updateValue();
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
            var _iterator7 = _createForOfIteratorHelper(globalVariables),
              _step7;
            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _variable3 = _step7.value;
                _variable3.updateValue();
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }
          };
          fullReload = function _fullReload() {
            var _addon$tab$redux$stat, _addon$tab$redux$stat2, _addon$tab$redux$stat3;
            if (((_addon$tab$redux$stat = addon.tab.redux.state) === null || _addon$tab$redux$stat === void 0 ? void 0 : (_addon$tab$redux$stat2 = _addon$tab$redux$stat.scratchGui) === null || _addon$tab$redux$stat2 === void 0 ? void 0 : (_addon$tab$redux$stat3 = _addon$tab$redux$stat2.editorTab) === null || _addon$tab$redux$stat3 === void 0 ? void 0 : _addon$tab$redux$stat3.activeTabIndex) !== 3 || preventUpdate) return;
            var editingTarget = vm.runtime.getEditingTarget();
            var stage = vm.runtime.getTargetForStage();
            localVariables = editingTarget.isStage ? [] : Object.values(editingTarget.variables).filter(function (i) {
              return i.type === "" || i.type === "list";
            }).map(function (i) {
              return new WrappedVariable(i, editingTarget);
            });
            globalVariables = Object.values(stage.variables).filter(function (i) {
              return i.type === "" || i.type === "list";
            }).map(function (i) {
              return new WrappedVariable(i, stage);
            });
            updateHeadingVisibility();
            while (localList.firstChild) {
              localList.removeChild(localList.firstChild);
            }
            while (globalList.firstChild) {
              globalList.removeChild(globalList.firstChild);
            }
            var _iterator4 = _createForOfIteratorHelper(localVariables),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var variable = _step4.value;
                localList.appendChild(variable.row);
                variable.resizeInputIfList();
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var _iterator5 = _createForOfIteratorHelper(globalVariables),
              _step5;
            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _variable2 = _step5.value;
                globalList.appendChild(_variable2.row);
                _variable2.resizeInputIfList();
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          };
          updateHeadingVisibility = function _updateHeadingVisibil() {
            // used to hide the headings if there are no variables
            var filteredLocals = localVariables.filter(function (v) {
              return v.row.style.display !== "none";
            });
            var filteredGlobals = globalVariables.filter(function (v) {
              return v.row.style.display !== "none";
            });
            localHeading.style.display = filteredLocals.length === 0 ? "none" : "";
            globalHeading.style.display = filteredGlobals.length === 0 ? "none" : "";
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          vm = addon.tab.traps.vm;
          localVariables = [];
          globalVariables = [];
          preventUpdate = false;
          manager = document.createElement("div");
          manager.classList.add(addon.tab.scratchClass("asset-panel_wrapper"), "sa-var-manager");
          searchBox = document.createElement("input");
          searchBox.placeholder = msg("search");
          searchBox.className = addon.tab.scratchClass("input_input-form", {
            others: "sa-var-manager-searchbox"
          });
          searchBox.addEventListener("input", function (e) {
            var _iterator = _createForOfIteratorHelper(localVariables),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var variable = _step.value;
                variable.handleSearch(searchBox.value);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var _iterator2 = _createForOfIteratorHelper(globalVariables),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _variable = _step2.value;
                _variable.handleSearch(searchBox.value);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            updateHeadingVisibility();
          });
          manager.appendChild(searchBox);
          localVars = document.createElement("div");
          localHeading = document.createElement("span");
          localList = document.createElement("table");
          localHeading.className = "sa-var-manager-heading";
          localHeading.innerText = msg("for-this-sprite");
          localVars.appendChild(localHeading);
          localVars.appendChild(localList);
          globalVars = document.createElement("div");
          globalHeading = document.createElement("span");
          globalList = document.createElement("table");
          globalHeading.className = "sa-var-manager-heading";
          globalHeading.innerText = msg("for-all-sprites");
          globalVars.appendChild(globalHeading);
          globalVars.appendChild(globalList);
          manager.appendChild(localVars);
          manager.appendChild(globalVars);
          varTab = document.createElement("li");
          addon.tab.displayNoneWhileDisabled(varTab, {
            display: "flex"
          });
          varTab.classList.add(addon.tab.scratchClass("react-tabs_react-tabs__tab"), addon.tab.scratchClass("gui_tab"));
          // Cannot use number due to conflict after leaving and re-entering editor
          varTab.id = "react-tabs-sa-variable-manager";
          varTabIcon = addon.tab.recolorable();
          varTabIcon.draggable = false;
          varTabIcon.src = addon.self.getResource("/icon.svg") /* rewritten by pull.js */;
          varTabText = document.createElement("span");
          varTabText.innerText = msg("variables");
          varTab.appendChild(varTabIcon);
          varTab.appendChild(varTabText);
          rowToVariableMap = new WeakMap();
          observer = new IntersectionObserver(function (changes) {
            var _iterator3 = _createForOfIteratorHelper(changes),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var change = _step3.value;
                var variable = rowToVariableMap.get(change.target);
                variable.setVisible(change.isIntersecting);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }, {
            rootMargin: "100px"
          });
          WrappedVariable = /*#__PURE__*/function () {
            function WrappedVariable(scratchVariable, target) {
              _classCallCheck(this, WrappedVariable);
              this.scratchVariable = scratchVariable;
              this.target = target;
              this.visible = false;
              this.ignoreTooBig = false;
              this.buildDOM();
            }
            return _createClass(WrappedVariable, [{
              key: "updateValue",
              value: function updateValue(force) {
                if (!this.visible && !force) return;
                var newValue;
                var maxSafeLength;
                if (this.scratchVariable.type === "list") {
                  newValue = this.scratchVariable.value.join("\n");
                  maxSafeLength = 5000000;
                } else {
                  newValue = this.scratchVariable.value;
                  maxSafeLength = 1000000;
                }
                if (!this.ignoreTooBig && newValue.length > maxSafeLength) {
                  this.input.value = "";
                  this.row.dataset.tooBig = true;
                  return;
                }
                this.row.dataset.tooBig = false;
                if (newValue !== this.input.value) {
                  this.input.disabled = false;
                  this.input.value = newValue;
                }
              }
            }, {
              key: "handleSearch",
              value: function handleSearch(search) {
                // this doesn't check if this.visible is true or whatever. maybe that would improve performance while typing into the search box but it's probably fine™
                if (this.scratchVariable.name.toLowerCase().includes(search.toLowerCase()) || !search) {
                  // fuzzy searches are lame we are too cool for fuzzy searches (& i doubt they're even the right thing to use here, this should work fine enough)
                  this.row.style.display = ""; // make the row normal
                  this.updateValue(true); // force it to update because its hidden and it wouldn't be able to otherwise
                } else {
                  this.row.style.display = "none"; // set the entire row as hidden
                }
              }
            }, {
              key: "resizeInputIfList",
              value: function resizeInputIfList() {
                if (this.scratchVariable.type === "list") {
                  this.input.style.height = "auto";
                  var height = Math.min(1000, this.input.scrollHeight);
                  if (height > 0) {
                    this.input.style.height = height + "px";
                  }
                }
              }
            }, {
              key: "setVisible",
              value: function setVisible(visible) {
                if (this.visible === visible) return;
                this.visible = visible;
                if (visible) {
                  this.updateValue();
                }
              }
            }, {
              key: "buildDOM",
              value: function buildDOM() {
                var _this = this;
                var id = "sa-variable-manager-".concat(this.scratchVariable.id);
                var row = document.createElement("tr");
                this.row = row;
                var labelCell = document.createElement("td");
                labelCell.className = "sa-var-manager-name";
                var label = document.createElement("input");
                label.value = this.scratchVariable.name;
                label.htmlFor = id;
                var onLabelOut = function onLabelOut(e) {
                  e.preventDefault();
                  var workspace = Blockly.getMainWorkspace();
                  var newName = label.value;
                  if (newName === _this.scratchVariable.name) {
                    // If the name is unchanged before we make sure the cloud prefix exists, there's nothing to do.
                    return;
                  }
                  var CLOUD_SYMBOL = "☁";
                  var CLOUD_PREFIX = CLOUD_SYMBOL + " ";
                  if (_this.scratchVariable.isCloud) {
                    if (newName.startsWith(CLOUD_SYMBOL)) {
                      if (!newName.startsWith(CLOUD_PREFIX)) {
                        // There isn't a space between the cloud symbol and the name, so add one.
                        newName = newName.substring(0, 1) + " " + newName.substring(1);
                      }
                    } else {
                      newName = CLOUD_PREFIX + newName;
                    }
                  }
                  var nameAlreadyUsed = false;
                  if (_this.target.isStage) {
                    // Global variables must not conflict with any global variables or local variables in any sprite.
                    var existingNames = vm.runtime.getAllVarNamesOfType(_this.scratchVariable.type);
                    nameAlreadyUsed = existingNames.includes(newName);
                  } else {
                    // Local variables must not conflict with any global variables or local variables in this sprite.
                    nameAlreadyUsed = !!workspace.getVariable(newName, _this.scratchVariable.type);
                  }
                  var isEmpty = !newName.trim();
                  if (isEmpty || nameAlreadyUsed) {
                    label.value = _this.scratchVariable.name;
                  } else {
                    workspace.renameVariableById(_this.scratchVariable.id, newName);
                    // Only update the input's value when we need to to avoid resetting undo history.
                    if (label.value !== newName) {
                      label.value = newName;
                    }
                  }
                };
                label.addEventListener("keydown", function (e) {
                  if (e.key === "Enter") e.target.blur();
                });
                label.addEventListener("focusout", onLabelOut);
                label.addEventListener("focus", function (e) {
                  preventUpdate = true;
                  manager.classList.add("freeze");
                });
                label.addEventListener("blur", function (e) {
                  preventUpdate = false;
                  manager.classList.remove("freeze");
                });
                labelCell.appendChild(label);
                rowToVariableMap.set(row, this);
                observer.observe(row);
                var valueCell = document.createElement("td");
                valueCell.className = "sa-var-manager-value";
                var tooBigElement = document.createElement("button");
                this.tooBigElement = tooBigElement;
                tooBigElement.textContent = msg("too-big");
                tooBigElement.className = "sa-var-manager-too-big";
                tooBigElement.addEventListener("click", function () {
                  _this.ignoreTooBig = true;
                  _this.updateValue(true);
                });
                var input;
                if (this.scratchVariable.type === "list") {
                  input = document.createElement("textarea");
                } else {
                  input = document.createElement("input");
                }
                input.className = "sa-var-manager-value-input";
                input.id = id;
                this.input = input;
                this.updateValue(true);
                if (this.scratchVariable.type === "list") {
                  this.input.addEventListener("input", function () {
                    return _this.resizeInputIfList();
                  }, false);
                }
                var onInputOut = function onInputOut(e) {
                  e.preventDefault();
                  if (_this.scratchVariable.type === "list") {
                    vm.setVariableValue(_this.target.id, _this.scratchVariable.id, input.value.split("\n"));
                  } else {
                    vm.setVariableValue(_this.target.id, _this.scratchVariable.id, input.value);
                  }
                  input.blur();
                };
                input.addEventListener("keydown", function (e) {
                  if (e.target.nodeName === "INPUT" && e.key === "Enter") e.target.blur();
                });
                input.addEventListener("focusout", onInputOut);
                input.addEventListener("focus", function (e) {
                  preventUpdate = true;
                  manager.classList.add("freeze");
                });
                input.addEventListener("blur", function (e) {
                  preventUpdate = false;
                  manager.classList.remove("freeze");
                });
                valueCell.appendChild(input);
                valueCell.appendChild(tooBigElement);
                row.appendChild(labelCell);
                row.appendChild(valueCell);
                this.handleSearch(searchBox.value);
              }
            }]);
          }();
          varTab.addEventListener("click", function (e) {
            addon.tab.redux.dispatch({
              type: "scratch-gui/navigation/ACTIVATE_TAB",
              activeTabIndex: 3
            });
          });
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (_ref3) {
            var detail = _ref3.detail;
            if (detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
              var varManagerWasSelected = document.body.contains(manager);
              var switchedToVarManager = detail.action.activeTabIndex === 3;
              if (varManagerWasSelected && !switchedToVarManager) {
                // Fixes #5773
                queueMicrotask(function () {
                  return window.dispatchEvent(new Event("resize"));
                });
              }
              setVisible(switchedToVarManager);
            } else if (detail.action.type === "scratch-gui/mode/SET_PLAYER") {
              if (!detail.action.isPlayerOnly && addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
                // DOM doesn't actually exist yet
                queueMicrotask(function () {
                  return setVisible(true);
                });
              }
            }
          });
          vm.runtime.on("PROJECT_LOADED", function () {
            try {
              fullReload();
            } catch (e) {
              console.error(e);
            }
          });
          vm.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE", function () {
            try {
              fullReload();
            } catch (e) {
              console.error(e);
            }
          });
          oldStep = vm.runtime._step;
          vm.runtime._step = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var ret = oldStep.call.apply(oldStep, [this].concat(args));
            try {
              quickReload();
            } catch (e) {
              console.error(e);
            }
            return ret;
          };
          addon.self.addEventListener("disabled", function () {
            if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 3) {
              addon.tab.redux.dispatch({
                type: "scratch-gui/navigation/ACTIVATE_TAB",
                activeTabIndex: 2
              });
            }
          });
        case 1:
          if (false) {}
          _context.n = 2;
          return addon.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 2:
          addon.tab.appendToSharedSpace({
            space: "afterSoundTab",
            element: varTab,
            order: 3
          });
          _context.n = 1;
          break;
        case 3:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-variable-manager.js.map