(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-flyout"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/hide-flyout/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"gui_tabs_\"] {\n  /* overridden by other addons */\n  --sa-category-width: 60px;\n  --sa-flyout-width: 250px;\n}\n\n/* The default left-side border does not work properly when a block is being dragged, */\n/* which lets a 1 pixel column of the flyout be visible. */\n/* To fix this we use two elements that are only visible when a block is being dragged. */\n/* The first element is opaque to cover up the contents with the background color. */\n/* The other element is the transparent border color. */\n.sa-flyout-border-1,\n.sa-flyout-border-2 {\n  position: absolute;\n  /* Above flyout but below add extension button */\n  z-index: 40;\n  top: 0;\n  bottom: 8px;\n  left: -1px;\n}\n[dir=\"rtl\"] .sa-flyout-border-1,\n[dir=\"rtl\"] .sa-flyout-border-2 {\n  left: auto;\n  right: -1px;\n}\n.sa-flyout-border-1 {\n  border-left: 1px solid var(--editorDarkMode-page, hsla(215, 100%, 95%, 1));\n}\n.sa-flyout-border-2 {\n  border-left: 1px solid var(--editorDarkMode-border, rgba(0, 0, 0, 0.15));\n}\n\n.blocklyFlyout,\n.blocklyFlyoutScrollbar {\n  transition-property: margin;\n}\n\n[dir=\"ltr\"] .blocklyFlyout.sa-flyoutClose,\n[dir=\"ltr\"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(0px - var(--sa-flyout-width) - 10px);\n}\n\n[dir=\"rtl\"] .blocklyFlyout.sa-flyoutClose,\n[dir=\"rtl\"] .blocklyFlyoutScrollbar.sa-flyoutClose {\n  margin-left: calc(var(--sa-flyout-width) + 10px);\n}\n\n.sa-flyout-placeHolder {\n  display: var(--hideFlyout-placeholderDisplay) !important;\n  position: absolute;\n  height: 100%;\n  width: calc(var(--sa-flyout-width) + 1px);\n  top: 0;\n}\n\n[dir=\"ltr\"] .sa-flyout-placeHolder {\n  left: calc(var(--sa-category-width) + 1px);\n}\n\n[dir=\"rtl\"] .sa-flyout-placeHolder {\n  right: calc(var(--sa-category-width) + 1px);\n}\n\n.sa-lock-object {\n  display: var(--hideFlyout-lockDisplay) !important;\n  transform: translate(calc(var(--sa-flyout-width) - 15px - 32px), 3px);\n  width: 32px;\n  height: 32px;\n}\n[dir=\"rtl\"] .sa-lock-object {\n  transform: translate(15px, 3px);\n}\n\n.sa-lock-button {\n  display: flex;\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--editorDarkMode-accent, white);\n  border: 1px solid var(--editorDarkMode-border, rgba(0, 0, 0, 0.15));\n  border-radius: 4px;\n}\n\n.sa-lock-object.locked .sa-lock-button {\n  background-color: var(--editorDarkMode-primary, #855cd6);\n  border-color: var(--editorDarkMode-primary-variant, #714eb6);\n}\n\n.sa-lock-button img {\n  width: 20px;\n  user-select: none;\n  filter: var(--editorDarkMode-accent-filter, none);\n}\n\n.sa-lock-object.locked img {\n  filter: var(--editorDarkMode-primary-filter, none);\n}\n\n.sa-hide-flyout-not-fullscreen .sa-body-editor [class*=\"gui_stage-and-target-wrapper\"] {\n  position: relative;\n  /* We need to be above these to hide the flyout while dragging blocks: */\n  /* .blocklyFlyout (z-index: 20) */\n  /* .blocklyFlyoutScrollbar (z-index: 30) */\n  /* and above these so that dragged sprites aren't obscured: */\n  /* .blocklyToolboxDiv (z-index: 40) */\n  /* .gui_extension-button-container_b4rCs (z-index: 42) */\n  z-index: 43;\n  padding-inline: 0.5rem;\n  background-color: var(--editorDarkMode-page, hsl(215, 100%, 95%));\n}\n\n[class*=\"gui_stage-and-target-wrapper_\"] {\n  padding: 0;\n}\n\n/* https://github.com/ScratchAddons/ScratchAddons/issues/4896 */\n.Popover {\n  /* Above stage wrapper and target pane */\n  /* See editor-stage-left */\n  z-index: 51;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMHYtM2ExIDEgMCAwIDAtMS0xem01LTRWN0E1IDUgMCAwIDAgNyA3djJhMyAzIDAgMCAwLTMgM3Y3YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtN2EzIDMgMCAwIDAtMy0zek05IDdhMyAzIDAgMCAxIDYgMHYySDl6bTkgMTJhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LTdhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExLjQ5IDEuNDkgMCAwIDAtMSAyLjYxVjE3YTEgMSAwIDAgMCAyIDB2LTEuMzlBMS40OSAxLjQ5IDAgMCAwIDEyIDEzem01LTRIOVY3YTMgMyAwIDAgMSA1LjEyLTIuMTMgMy4wOCAzLjA4IDAgMCAxIC43OCAxLjM4IDEgMSAwIDEgMCAxLjk0LS41IDUuMDkgNS4wOSAwIDAgMC0xLjMxLTIuMjlBNSA1IDAgMCAwIDcgN3YyYTMgMyAwIDAgMC0zIDN2N2EzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTdhMyAzIDAgMCAwLTMtM3ptMSAxMGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXYtN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjNTc1ZTc1Ii8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/hide-flyout/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/hide-flyout/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-flyout/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./lock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg");
/* harmony import */ var _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./unlock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg");
/* generated by pull.js */




var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "lock.svg": _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "unlock.svg": _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/hide-flyout/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/hide-flyout/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, msg, placeHolderDiv, lockObject, lockButton, lockIcon, flyOut, scrollBar, toggle, flyoutLock, closeOnMouseUp, scrollAnimation, SVG_NS, Blockly, getSpeedValue, getToggleSetting, setTransition, removeTransition, updateLockDisplay, autoLock, onmouseenter, onmouseleave, updateIsFullScreen, didOneTimeSetup, doOneTimeSetup, blocksWrapper, injectionDiv, borderElement1, borderElement2, toolbox, addExtensionButton, _i3, _arr3, element;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          doOneTimeSetup = function _doOneTimeSetup() {
            if (didOneTimeSetup) {
              return;
            }
            didOneTimeSetup = true;
            addon.tab.redux.initialize();
            addon.tab.redux.addEventListener("statechanged", function (e) {
              switch (e.detail.action.type) {
                // Event casted when you switch between tabs
                case "scratch-gui/navigation/ACTIVATE_TAB":
                  {
                    // always 0, 1, 2
                    var toggleSetting = getToggleSetting();
                    if (e.detail.action.activeTabIndex === 0 && !addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) {
                      onmouseleave(null, 0);
                      toggle = false;
                    }
                    break;
                  }
                case "scratch-gui/mode/SET_FULL_SCREEN":
                  updateIsFullScreen();
                  break;
              }
            });
            document.body.addEventListener("mouseup", function () {
              if (closeOnMouseUp) {
                onmouseleave();
                closeOnMouseUp = false;
              }
            });
            if (addon.self.enabledLate && getToggleSetting() === "category" && !addon.settings.get("lockLoad")) {
              Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
            }
            addon.self.addEventListener("disabled", function () {
              Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(true);
            });
            addon.self.addEventListener("reenabled", function () {
              if (getToggleSetting() === "category" && !addon.settings.get("lockLoad")) {
                Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
                onmouseleave(null, 0);
                toggle = false;
              }
            });
            addon.settings.addEventListener("change", function () {
              if (addon.self.disabled) return;
              if (getToggleSetting() === "category") {
                // switching to category click mode
                // close the flyout unless it's locked
                if (flyoutLock) {
                  toggle = true;
                  flyoutLock = false;
                  updateLockDisplay();
                } else {
                  Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(false);
                  onmouseleave(null, 0);
                  toggle = false;
                }
              } else {
                // switching from category click to a different mode
                if (addon.settings.get("lockLoad")) {
                  flyoutLock = true;
                  updateLockDisplay();
                } else {
                  onmouseleave();
                }
                Blockly.getMainWorkspace().getToolbox().selectedItem_.setSelected(true);
              }
            });

            // category click mode
            var oldSetSelectedItem = Blockly.Toolbox.prototype.setSelectedItem;
            Blockly.Toolbox.prototype.setSelectedItem = function (item) {
              var shouldScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
              var previousSelection = this.selectedItem_;
              oldSetSelectedItem.call(this, item, shouldScroll);
              if (addon.self.disabled || getToggleSetting() !== "category") return;
              if (!shouldScroll && !toggle) {
                // ignore initial selection when updating the toolbox
                item.setSelected(false);
              } else if (item === previousSelection) {
                toggle = !toggle;
                if (toggle) onmouseenter();else {
                  onmouseleave();
                  item.setSelected(false);
                }
              } else if (!toggle) {
                scrollAnimation = false;
                toggle = true;
                onmouseenter();
              }
            };
            var oldSelectCategoryById = Blockly.Toolbox.prototype.selectCategoryById;
            Blockly.Toolbox.prototype.selectCategoryById = function () {
              // called after populating the toolbox
              // ignore if the palette is closed
              if (!addon.self.disabled && getToggleSetting() === "category" && !toggle) return;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return oldSelectCategoryById.call.apply(oldSelectCategoryById, [this].concat(args));
            };
            var oldStepScrollAnimation = Blockly.Flyout.prototype.stepScrollAnimation;
            Blockly.Flyout.prototype.stepScrollAnimation = function () {
              // scrolling should not be animated when opening the flyout in category click mode
              if (!scrollAnimation) {
                this.scrollbar_.set(this.scrollTarget);
                this.scrollTarget = null;
                scrollAnimation = true;
                return;
              }
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return oldStepScrollAnimation.apply(this, args);
            };
          };
          onmouseleave = function _onmouseleave(e) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getSpeedValue();
            if (flyoutLock) return;
            if (e && e.buttons) {
              // dragging a block or scrollbar
              closeOnMouseUp = true;
              return;
            }
            setTransition(speed);
            flyOut.classList.add("sa-flyoutClose");
            scrollBar.classList.add("sa-flyoutClose");
            setTimeout(function () {
              var _addon$tab$traps$getW2;
              (_addon$tab$traps$getW2 = addon.tab.traps.getWorkspace()) === null || _addon$tab$traps$getW2 === void 0 ? void 0 : _addon$tab$traps$getW2.recordCachedAreas();
              removeTransition();
            }, speed * 1000);
          };
          onmouseenter = function _onmouseenter(e) {
            var speed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // If a mouse event was passed, only open flyout if the workspace isn't being dragged
            if (!e || e.buttons === 0 || document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete")) {
              speed = _typeof(speed) === "object" ? getSpeedValue() : speed;
              setTransition(speed);
              flyOut.classList.remove("sa-flyoutClose");
              scrollBar.classList.remove("sa-flyoutClose");
              setTimeout(function () {
                var _addon$tab$traps$getW;
                (_addon$tab$traps$getW = addon.tab.traps.getWorkspace()) === null || _addon$tab$traps$getW === void 0 ? void 0 : _addon$tab$traps$getW.recordCachedAreas();
                removeTransition();
              }, speed * 1000);
            }
            closeOnMouseUp = false; // only close if the mouseup event happens outside the flyout
          };
          autoLock = function _autoLock() {
            var option = addon.settings.get("lockLoad");
            if (option) {
              if (getToggleSetting() === "category") {
                toggle = true;
              } else {
                flyoutLock = option;
                updateLockDisplay();
              }
              flyOut.classList.remove("sa-flyoutClose");
              scrollBar.classList.remove("sa-flyoutClose");
            }
          };
          updateLockDisplay = function _updateLockDisplay() {
            lockObject.classList.toggle("locked", flyoutLock);
            lockButton.title = flyoutLock ? msg("unlock") : msg("lock");
            lockIcon.src = addon.self.getResource("/".concat(flyoutLock ? "" : "un", "lock.svg")) /* rewritten by pull.js */;
          };
          removeTransition = function _removeTransition() {
            for (var _i2 = 0, _arr2 = [flyOut, scrollBar]; _i2 < _arr2.length; _i2++) {
              var element = _arr2[_i2];
              element.style.removeProperty("transition-duration");
            }
          };
          setTransition = function _setTransition(speed) {
            for (var _i = 0, _arr = [flyOut, scrollBar]; _i < _arr.length; _i++) {
              var element = _arr[_i];
              element.style.transitionDuration = "".concat(speed, "s");
            }
          };
          getToggleSetting = function _getToggleSetting() {
            return addon.settings.get("toggle");
          };
          getSpeedValue = function _getSpeedValue() {
            var data = {
              none: "0",
              "short": "0.2",
              "default": "0.3",
              "long": "0.5"
            };
            return data[addon.settings.get("speed")];
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          placeHolderDiv = null;
          lockObject = null;
          lockButton = null;
          lockIcon = null;
          flyOut = null;
          scrollBar = null;
          toggle = false;
          flyoutLock = false;
          closeOnMouseUp = false;
          scrollAnimation = true;
          SVG_NS = "http://www.w3.org/2000/svg";
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          Blockly = _context.v;
          updateIsFullScreen = function updateIsFullScreen() {
            var isFullScreen = addon.tab.redux.state.scratchGui.mode.isFullScreen;
            document.documentElement.classList.toggle("sa-hide-flyout-not-fullscreen", !isFullScreen);
          };
          updateIsFullScreen();
          didOneTimeSetup = false;
        case 2:
          if (false) {}
          _context.n = 3;
          return addon.tab.waitForElement(".blocklyFlyout", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/theme/SET_THEME", "fontsLoaded/SET_FONTS_LOADED"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 3:
          flyOut = _context.v;
          scrollBar = document.querySelector(".blocklyFlyoutScrollbar");
          blocksWrapper = document.querySelector('[class*="gui_blocks-wrapper_"]');
          injectionDiv = document.querySelector(".injectionDiv"); // Code editor left border
          borderElement1 = document.createElement("div");
          borderElement1.className = "sa-flyout-border-1";
          addon.tab.displayNoneWhileDisabled(borderElement1);
          injectionDiv.appendChild(borderElement1);
          borderElement2 = document.createElement("div");
          borderElement2.className = "sa-flyout-border-2";
          addon.tab.displayNoneWhileDisabled(borderElement2);
          injectionDiv.appendChild(borderElement2);

          // Placeholder Div
          if (placeHolderDiv) placeHolderDiv.remove();
          placeHolderDiv = document.createElement("div");
          blocksWrapper.appendChild(placeHolderDiv);
          placeHolderDiv.className = "sa-flyout-placeHolder";
          placeHolderDiv.style.display = "none"; // overridden by userstyle if the addon is enabled

          // Lock image
          if (lockObject) lockObject.remove();
          lockObject = document.createElementNS(SVG_NS, "foreignObject");
          lockObject.setAttribute("class", "sa-lock-object");
          lockObject.style.display = "none"; // overridden by userstyle if the addon is enabled
          lockButton = document.createElement("button");
          lockButton.className = "sa-lock-button";
          lockIcon = document.createElement("img");
          lockIcon.alt = "";
          updateLockDisplay();
          lockButton.onclick = function () {
            flyoutLock = !flyoutLock;
            updateLockDisplay();
          };
          lockButton.appendChild(lockIcon);
          lockObject.appendChild(lockButton);
          flyOut.appendChild(lockObject);
          onmouseleave(null, 0);
          toggle = false;
          toolbox = document.querySelector(".blocklyToolboxDiv");
          addExtensionButton = document.querySelector("[class^=gui_extension-button-container_]");
          for (_i3 = 0, _arr3 = [toolbox, addExtensionButton, flyOut, scrollBar]; _i3 < _arr3.length; _i3++) {
            element = _arr3[_i3];
            element.onmouseenter = function (e) {
              var toggleSetting = getToggleSetting();
              if (!addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) onmouseenter(e);
            };
            element.onmouseleave = function (e) {
              var toggleSetting = getToggleSetting();
              if (!addon.self.disabled && (toggleSetting === "hover" || toggleSetting === "cathover")) onmouseleave(e);
            };
          }
          placeHolderDiv.onmouseenter = function (e) {
            if (!addon.self.disabled && getToggleSetting() === "hover") onmouseenter(e);
          };
          placeHolderDiv.onmouseleave = function (e) {
            if (!addon.self.disabled && getToggleSetting() === "hover") onmouseleave(e);
          };
          doOneTimeSetup();
          autoLock();
          Blockly.svgResize(Blockly.getMainWorkspace());
          _context.n = 2;
          break;
        case 4:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-hide-flyout.js.map