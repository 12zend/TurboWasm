(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-fullscreen"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideOverflow.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/hideOverflow.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-fullscreen.sa-body-editor {\n  overflow: hidden !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideToolbar.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/hideToolbar.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] {\n  display: none;\n  top: 0rem !important;\n}\n\n[class*=\"stage-header_stage-header-wrapper-overlay\"] {\n  display: block;\n  transform: translateY(-101%);\n  transition: transform 0.3s;\n}\n\n.phantom-header {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  height: 8px;\n  display: block;\n  z-index: 5000;\n}\n\n.stage-header-hover {\n  transform: translateY(0%);\n  transition: transform 0.3s 0.25s;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/removeBorder.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/removeBorder.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_full-screen\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"] {\n  border: 0 !important;\n  border-radius: 0 !important;\n}\n\n[class*=\"stage_stage-overlays_\"][class*=\"stage_full-screen_\"] {\n  top: 0;\n  left: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/resizeWindow.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-header_stage-menu-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  width: min(calc((100vh - 44px) * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  height: min(calc(100vh - 44px), calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] {\n  padding: 0rem !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"monitor-list_monitor-list\"] {\n  overflow: visible;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_question-wrapper\"] {\n  width: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-header_stage-menu-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  width: min(calc(100vh * var(--sa-fullscreen-width) / var(--sa-fullscreen-height)), 100vw) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage-wrapper_stage-canvas-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_stage\"],\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_green-flag-overlay-wrapper\"],\n[class*=\"stage-wrapper_full-screen\"] canvas {\n  height: min(100vh, calc(100vw * var(--sa-fullscreen-height) / var(--sa-fullscreen-width))) !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] {\n  padding: 0rem !important;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"monitor-list_monitor-list\"] {\n  overflow: visible;\n}\n\n[class*=\"stage-wrapper_full-screen\"] [class*=\"stage_question-wrapper\"] {\n  width: auto !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/fullscreen/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/fullscreen/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/fullscreen/userscript.js");
/* harmony import */ var _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./hideOverflow.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideOverflow.css");
/* harmony import */ var _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./removeBorder.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/removeBorder.css");
/* harmony import */ var _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-loader!./resizeWindow.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow.css");
/* harmony import */ var _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-loader!./resizeWindow_noToolbar.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/resizeWindow_noToolbar.css");
/* harmony import */ var _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-loader!./hideToolbar.css */ "./node_modules/css-loader/index.js!./src/addons/addons/fullscreen/hideToolbar.css");
/* harmony import */ var _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5__);
/* generated by pull.js */






var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "hideOverflow.css": _css_loader_hideOverflow_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "removeBorder.css": _css_loader_removeBorder_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "resizeWindow.css": _css_loader_resizeWindow_css__WEBPACK_IMPORTED_MODULE_3___default.a,
  "resizeWindow_noToolbar.css": _css_loader_resizeWindow_noToolbar_css__WEBPACK_IMPORTED_MODULE_4___default.a,
  "hideToolbar.css": _css_loader_hideToolbar_css__WEBPACK_IMPORTED_MODULE_5___default.a
};

/***/ }),

/***/ "./src/addons/addons/fullscreen/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/fullscreen/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Used for the automatic browser full screen setting
 * and for hiding the scrollbar in full screen.
 */
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(_ref) {
    var addon, console, vm, updateStageSize, isEnteringFullscreen, updateBrowserFullscreen, updateScratchFullscreen, updatePhantomHeader, _updatePhantomHeader, setPageScrollbar, _setPageScrollbar, monitorScaler, resizeObserver, stage, initScaler, _initScaler;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _initScaler = function _initScaler3() {
            _initScaler = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    _context3.n = 1;
                    return addon.tab.waitForElement("[class*=monitor-list_monitor-list-scaler]");
                  case 1:
                    monitorScaler = _context3.v;
                    _context3.n = 2;
                    return addon.tab.waitForElement('[class*="stage-wrapper_full-screen"] [class*="stage_stage"] canvas');
                  case 2:
                    stage = _context3.v;
                    resizeObserver = new ResizeObserver(function () {
                      var stageSize = stage.getBoundingClientRect();
                      // When switching between project page and editor, the canvas
                      // is removed from the DOM and inserted again in a different place.
                      // This causes the size to be reported as 0x0.
                      if (!stageSize.width || !stageSize.height) return;
                      // Width and height attributes of the canvas need to match the actual size.
                      var renderer = addon.tab.traps.vm.runtime.renderer;
                      if (renderer) renderer.resize(stageSize.width, stageSize.height);
                      // Scratch uses the `transform` CSS property on a stage overlay element
                      // to control the scaling of variable monitors.
                      var scale = stageSize.width / vm.runtime.stageWidth;
                      monitorScaler.style.transform = "scale(".concat(scale, ", ").concat(scale, ")");
                    });
                    resizeObserver.observe(stage);
                  case 3:
                    return _context3.a(2);
                }
              }, _callee3);
            }));
            return _initScaler.apply(this, arguments);
          };
          initScaler = function _initScaler2() {
            return _initScaler.apply(this, arguments);
          };
          _setPageScrollbar = function _setPageScrollbar3() {
            _setPageScrollbar = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var body;
              return _regenerator().w(function (_context2) {
                while (1) switch (_context2.n) {
                  case 0:
                    _context2.n = 1;
                    return addon.tab.waitForElement(".sa-body-editor");
                  case 1:
                    body = _context2.v;
                    if (addon.tab.redux.state.scratchGui.mode.isFullScreen) {
                      body.classList.add("sa-fullscreen");
                    } else {
                      body.classList.remove("sa-fullscreen");
                    }
                  case 2:
                    return _context2.a(2);
                }
              }, _callee2);
            }));
            return _setPageScrollbar.apply(this, arguments);
          };
          setPageScrollbar = function _setPageScrollbar2() {
            return _setPageScrollbar.apply(this, arguments);
          };
          _updatePhantomHeader = function _updatePhantomHeader3() {
            _updatePhantomHeader = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              var canvas, header, phantom, _header, _phantom;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    if (!(!addon.self.disabled && addon.tab.redux.state.scratchGui.mode.isFullScreen && addon.settings.get("toolbar") === "hover")) {
                      _context.n = 3;
                      break;
                    }
                    _context.n = 1;
                    return addon.tab.waitForElement('[class*="stage_full-screen"] canvas');
                  case 1:
                    canvas = _context.v;
                    _context.n = 2;
                    return addon.tab.waitForElement('[class^="stage-header_stage-header-wrapper"]');
                  case 2:
                    header = _context.v;
                    phantom = header.parentElement.appendChild(document.createElement("div"));
                    phantom.classList.add("phantom-header");

                    // Make the header a child of the phantom, so that mouseleave will trigger when the
                    // mouse leaves the header OR the phantom header.
                    phantom.appendChild(header);
                    phantom.addEventListener("mouseenter", function () {
                      header.classList.add("stage-header-hover");
                    });
                    phantom.addEventListener("mouseleave", function () {
                      header.classList.remove("stage-header-hover");
                    });

                    // Listen for when the mouse moves above the page (helps to show header when not in browser full screen mode)
                    document.body.addEventListener("mouseleave", function (e) {
                      if (e.clientY < 8) {
                        header.classList.add("stage-header-hover");
                      }
                    });
                    // and for when the mouse re-enters the page
                    document.body.addEventListener("mouseenter", function () {
                      header.classList.remove("stage-header-hover");
                    });

                    // Pass click events on the phantom header onto the project player, essentially making it click-through
                    ["mousedown", "mousemove", "mouseup", "touchstart", "touchmove", "touchend", "wheel"].forEach(function (eventName) {
                      phantom.addEventListener(eventName, function (e) {
                        if (e.target.classList.contains("phantom-header")) {
                          canvas.dispatchEvent(new e.constructor(e.type, e));
                        }
                      });
                    });
                    _context.n = 5;
                    break;
                  case 3:
                    _context.n = 4;
                    return addon.tab.waitForElement('[class*="stage-header_stage-header-wrapper"]');
                  case 4:
                    _header = _context.v;
                    if (_header.parentElement.classList.contains("phantom-header")) {
                      _phantom = _header.parentElement;
                      _phantom.parentElement.appendChild(_header);
                      _phantom.remove();
                    }
                  case 5:
                    return _context.a(2);
                }
              }, _callee);
            }));
            return _updatePhantomHeader.apply(this, arguments);
          };
          updatePhantomHeader = function _updatePhantomHeader2() {
            return _updatePhantomHeader.apply(this, arguments);
          };
          updateScratchFullscreen = function _updateScratchFullscr() {
            if (addon.settings.get("browserFullscreen") && !addon.self.disabled) {
              // If browser fullscreen is disabled, then Scratch fullscreen should also
              // be disabled.
              if (document.fullscreenElement === null && addon.tab.redux.state.scratchGui.mode.isFullScreen) {
                addon.tab.redux.dispatch({
                  type: "scratch-gui/mode/SET_FULL_SCREEN",
                  isFullScreen: false
                });
              }
            }
          };
          updateBrowserFullscreen = function _updateBrowserFullscr() {
            if (addon.settings.get("browserFullscreen") && !addon.self.disabled) {
              // If Scratch fullscreen is enabled, then browser fullscreen should also
              // be enabled, and vice versa for disabling.
              if (addon.tab.redux.state.scratchGui.mode.isFullScreen && document.fullscreenElement === null) {
                isEnteringFullscreen = true;
                document.documentElement.requestFullscreen().then(function () {
                  isEnteringFullscreen = false;
                })["catch"](function (err) {
                  console.error(err);
                  isEnteringFullscreen = false;
                });
              } else if (!addon.tab.redux.state.scratchGui.mode.isFullScreen && document.fullscreenElement !== null) {
                document.exitFullscreen();
              }
            }
          };
          addon = _ref.addon, console = _ref.console;
          vm = addon.tab.traps.vm;
          updateStageSize = function updateStageSize() {
            document.documentElement.style.setProperty('--sa-fullscreen-width', vm.runtime.stageWidth);
            document.documentElement.style.setProperty('--sa-fullscreen-height', vm.runtime.stageHeight);
          };
          updateStageSize();
          vm.on('STAGE_SIZE_CHANGED', updateStageSize);

          // In Electron, after running requestFullscreen() a resize event can be fired before
          // document.fullscreenElement is updated. We want to ignore that event.
          isEnteringFullscreen = false; // "Browser fullscreen" is defined as the mode that hides the browser UI.
          // "Scratch fullscreen" is defined as the mode normally toggled by the
          // rightmost button above the stage.
          // The "phantom header" is a small strip at the top of the page that
          // brings the header into view when hovered.
          updatePhantomHeader();

          // Properly resize the canvas and scale variable monitors on stage resize.

          initScaler();

          // Running this on page load handles the case of the project initially
          // loading in Scratch fullscreen mode.
          setPageScrollbar();
          updateBrowserFullscreen();

          // Changing to or from Scratch fullscreen is signified by a state change
          // (URL change doesn't work when editing project without project page)
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (e) {
            if (e.detail.action.type === "scratch-gui/mode/SET_FULL_SCREEN") {
              initScaler();
              updateBrowserFullscreen();
              setPageScrollbar();
              updatePhantomHeader();
            }
          });
          // Changing to or from browser fullscreen is signified by a window resize.
          window.addEventListener("resize", function () {
            if (!isEnteringFullscreen) {
              updateScratchFullscreen();
            }
          });
          // Handles the case of F11 full screen AND document full screen being enabled
          // at the same time.
          document.addEventListener("fullscreenchange", function () {
            if (document.fullscreenElement === null && addon.tab.redux.state.scratchGui.mode.isFullScreen) {
              addon.tab.redux.dispatch({
                type: "scratch-gui/mode/SET_FULL_SCREEN",
                isFullScreen: false
              });
            }
          });

          // These handle the case of the user already being in Scratch fullscreen
          // (without being in browser fullscreen) when the addon or sync option are
          // dynamically enabled.
          addon.settings.addEventListener("change", function () {
            updateBrowserFullscreen();
            updatePhantomHeader();
          });
          addon.self.addEventListener("disabled", function () {
            resizeObserver.disconnect();
            updatePhantomHeader();
          });
          addon.self.addEventListener("reenabled", function () {
            resizeObserver.observe(stage);
            updateBrowserFullscreen();
            updatePhantomHeader();
          });
        case 1:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-fullscreen.js.map