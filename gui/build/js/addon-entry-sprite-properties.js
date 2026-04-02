(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-sprite-properties"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/sprite-properties/userstyle.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/sprite-properties/userstyle.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class^=\"sprite-info_sprite-info_\"] {\n  height: 0;\n  padding: 0 0.75rem;\n  overflow: hidden;\n  transition-property: height, padding, transform;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-hide-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  border: none;\n}\n\n[class^=\"sprite-selector_scroll-wrapper_\"],\n/* Also take full height if `sprite-properties` is hiding the properties (specificity) */\n.sa-hide-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: 100%;\n  transition-property: height;\n  transition-duration: var(--spriteProperties-transitionDuration);\n}\n\n.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  /* The height needs to be known for the animation to work.\n     6.5rem + 5px is the exact height of sprite info when\n     this addon is enabled:\n       0.75rem (top padding)\n     + 2rem + 2px (.icon-wrappers in the first row)\n     + 0.5rem (margin between rows)\n     + 2rem + 2px (.icon-wrappers in the second row)\n     + 1.25rem (close button)\n     + 1px (bottom border) */\n  height: calc(6.5rem + 5px);\n  padding: 0.75rem;\n  padding-bottom: 0;\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-info_sprite-info_\"] {\n  /* In wide languages, add in addition to the previous:\n     + 2 * 0.625rem * 1.2 (each row's text label now uses vertical space)\n     + 2 * 0.25rem (each row has extra padding) */\n  height: calc(6.5rem + 5px + 2rem);\n}\n[class^=\"label_input-group-column_\"] {\n  /* Default line-height: normal is inconsistent across browsers, but above style needs constant line-height. */\n  line-height: 1.2;\n}\n\n/* see heights in above selectors */\n.sa-show-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: calc(100% - 6.5rem - 5px);\n}\n.sa-sprite-properties-wide-locale.sa-show-sprite-properties [class^=\"sprite-selector_scroll-wrapper_\"] {\n  height: calc(100% - 6.5rem - 5px - 2rem);\n}\n\n.sa-sprite-properties-info-btn {\n  /* !important to override displayNoneWhileDisabled's inline styles */\n  display: flex !important;\n  position: absolute;\n  justify-content: center;\n  align-items: center;\n  width: 1rem;\n  height: 1rem;\n  top: -2px;\n  left: -2px;\n  border: none;\n  border-radius: 100%;\n  background-color: var(--editorDarkMode-primary, hsla(260, 60%, 60%, 1));\n}\n[dir=\"rtl\"] .sa-sprite-properties-info-btn {\n  left: auto;\n  right: -2px;\n}\n.sa-show-sprite-properties .sa-sprite-properties-info-btn {\n  display: none !important;\n}\n\n.sa-sprite-properties-info-btn img {\n  width: calc(1rem - 6px);\n  height: calc(1rem - 6px);\n  filter: var(--editorDarkMode-primary-filter);\n}\n\n.sa-sprite-properties-close-btn {\n  width: 100%;\n  height: 1.25rem;\n  padding: 0;\n  padding-top: 0.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border: none;\n  margin-left: auto;\n  background-color: transparent;\n  user-select: none;\n}\n\n.sa-sprite-properties-close-btn img {\n  filter: var(--editorDarkMode-accent-filter);\n  transition: opacity 0.25s ease-out;\n}\n\n.sa-sprite-properties-close-btn:hover img {\n  opacity: 0.75;\n}\n\n/* Prevent double clicking from highlighting the \"Choose a sprite\" button */\n[class*=\"action-menu_main-button_\"] {\n  user-select: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg":
/*!************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIuNyIgaGVpZ2h0PSI4Ljc5IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjM2IDFhMS40MyAxLjQzIDAgMCAwLTEgLjQyTDEuNDIgNS4zNGExLjQ0IDEuNDQgMCAwIDAgMCAyYy41Ni41NiA5LjMxLjU2IDkuODcgMGExLjQ0IDEuNDQgMCAwIDAgMC0yTDcuMzcgMS40MkExLjQzIDEuNDMgMCAwIDAgNi4zNiAxeiIgZmlsbD0iIzU3NWU3NSIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg":
/*!********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAwLjU3IDAuNTciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNLjIzMi4yMzJ2LjAzNmguMDM2Vi41SC4yMTR2LjAzNWguMTQzVi41SC4zMDRWLjIzM3oiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjxjaXJjbGUgY3g9Ii4yODUiIGN5PSIuMDcxIiByPSIuMDcxIiBzdHlsZT0icGFpbnQtb3JkZXI6c3Ryb2tlIGZpbGwgbWFya2VycyIvPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./src/addons/addons/sprite-properties/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/sprite-properties/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/sprite-properties/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/sprite-properties/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_collapse_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./collapse.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/collapse.svg");
/* harmony import */ var _url_loader_info_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./info.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/sprite-properties/info.svg");
/* generated by pull.js */




var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "collapse.svg": _url_loader_collapse_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "info.svg": _url_loader_info_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
};

/***/ }),

/***/ "./src/addons/addons/sprite-properties/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/sprite-properties/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, msg, SHOW_PROPS_CLASS, HIDE_PROPS_CLASS, PROPS_INFO_BTN_CLASS, PROPS_CLOSE_BTN_CLASS, propertiesPanel, observer, setPropertiesPanelVisible, togglePropertiesPanel, autoHidePanel, isDirectionPopoverOpen, applySettings, createButton, infoButton, closeButton, injectInfoButton, injectCloseButton, updateWideLocaleMode, spriteSelector, itemsWrapper;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          updateWideLocaleMode = function _updateWideLocaleMode() {
            // Certain "wide" languages such as Japanese use a different layout for the sprite info panel
            // Easiest way to detect this is with this selector that only exists when the sprite info panel
            // is using the layout with text above the input.
            // Note that when the stage is in small mode, "wide" languages use the same info panel as other
            // languages.
            // List of languages is here:
            // https://github.com/scratchfoundation/scratch-gui/blob/e15b2dfa3a2e58e80fae8d1586c7f56aa0cc0ede/src/lib/locale-utils.js#L6-L18
            var isWideLocale = !!propertiesPanel.querySelector("[class^=label_input-group-column_]");
            document.body.classList.toggle("sa-sprite-properties-wide-locale", isWideLocale);
          };
          injectCloseButton = function _injectCloseButton() {
            if (!closeButton) {
              closeButton = createButton(PROPS_CLOSE_BTN_CLASS, "/collapse.svg", msg("close-properties-panel-tooltip"));
            }
            propertiesPanel.appendChild(closeButton);
          };
          injectInfoButton = function _injectInfoButton() {
            if (!infoButton) {
              infoButton = createButton(PROPS_INFO_BTN_CLASS, "/info.svg", msg("open-properties-panel-tooltip"));
            }
            var selectedSprite = propertiesPanel.parentNode.querySelector('[class*="sprite-selector-item_is-selected"]');
            if (infoButton.parentNode !== selectedSprite) {
              if (selectedSprite) {
                selectedSprite.appendChild(infoButton);
              } else {
                infoButton.remove();
              }
            }
          };
          createButton = function _createButton(className, iconPath, tooltip) {
            var buttonIcon = document.createElement("img");
            buttonIcon.setAttribute("src", addon.self.getResource(iconPath)) /* rewritten by pull.js */;
            buttonIcon.draggable = false;
            var button = document.createElement("button");
            button.classList.add(className);
            button.title = tooltip;
            button.addEventListener("click", function () {
              return togglePropertiesPanel();
            });
            button.appendChild(buttonIcon);
            addon.tab.displayNoneWhileDisabled(button, {
              display: "flex"
            });
            return button;
          };
          applySettings = function _applySettings() {
            var visibleByDefault = !addon.settings.get("autoCollapse") && !addon.settings.get("hideByDefault");
            setPropertiesPanelVisible(visibleByDefault);
          };
          autoHidePanel = function _autoHidePanel() {
            if (addon.settings.get("autoCollapse")) {
              setPropertiesPanelVisible(false);
            }
          };
          togglePropertiesPanel = function _togglePropertiesPane() {
            var isCurrentlyOpen = document.body.classList.contains(SHOW_PROPS_CLASS);
            setPropertiesPanelVisible(!isCurrentlyOpen);
          };
          setPropertiesPanelVisible = function _setPropertiesPanelVi(visible) {
            document.body.classList.toggle(SHOW_PROPS_CLASS, visible);
            document.body.classList.toggle(HIDE_PROPS_CLASS, !visible);
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          SHOW_PROPS_CLASS = "sa-show-sprite-properties";
          HIDE_PROPS_CLASS = "sa-hide-sprite-properties";
          PROPS_INFO_BTN_CLASS = "sa-sprite-properties-info-btn";
          PROPS_CLOSE_BTN_CLASS = "sa-sprite-properties-close-btn";
          /** @type {HTMLElement} */
          // A mutation observer is the only reliable way to detect when a different sprite has
          // been selected or when the folder that contains the focused sprite has been opened.
          observer = new MutationObserver(function () {
            injectInfoButton();
          }); // Toggle the properties panel when double clicking in the sprite grid
          document.addEventListener("click", function (e) {
            if (e.detail === 2 && e.target.closest('[class^="sprite-selector_scroll-wrapper_"]')) {
              togglePropertiesPanel();
            }
          });
          isDirectionPopoverOpen = function isDirectionPopoverOpen() {
            return document.querySelector("body > div.Popover > div > div > [class*=direction-picker_button-row_]");
          }; // Close properties panel when mouse leaves the entire sprite panel
          document.body.addEventListener("mouseleave", function (e) {
            if (e.target.matches('[class*="sprite-selector_sprite-selector_"]')) {
              if (!isDirectionPopoverOpen()) autoHidePanel();
            }
          }, {
            capture: true
          });
          addon.settings.addEventListener("change", autoHidePanel);
          addon.self.addEventListener("reenabled", applySettings);
          applySettings();
          addon.self.addEventListener("disabled", function () {
            setPropertiesPanelVisible(true);
          });

          /** @type {HTMLElement} */

          /** @type {HTMLElement} */

          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (e) {
            if (e.detail.action.type === "scratch-gui/StageSize/SET_STAGE_SIZE") {
              setTimeout(updateWideLocaleMode);
            }
          });
        case 1:
          if (false) {}
          _context.n = 2;
          return addon.tab.waitForElement('[class^="sprite-info_sprite-info_"]', {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 2:
          propertiesPanel = _context.v;
          spriteSelector = propertiesPanel.parentNode;
          itemsWrapper = spriteSelector.querySelector('[class*="sprite-selector_items-wrapper_"]');
          observer.observe(itemsWrapper, {
            childList: true,
            subtree: true
          });
          updateWideLocaleMode();
          injectInfoButton();
          injectCloseButton();
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
//# sourceMappingURL=addon-entry-sprite-properties.js.map