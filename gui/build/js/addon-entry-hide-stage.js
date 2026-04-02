(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-stage"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/hide-stage/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/hide-stage/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-hide-stage-button [class*=\"stage-header_stage-button-icon_\"] {\n  /* Preserve aspect ratio */\n  height: auto;\n}\n\n.sa-stage-hidden [class*=\"blocks_blocks_\"] .injectionDiv,\n.sa-stage-hidden [class*=\"asset-panel_wrapper_\"],\n.sa-stage-hidden [class*=\"backpack_backpack-header_\"] {\n  border-radius: 0;\n}\n\n/* [class*=\"gui_flex-wrapper_\"] is for specificity over hide-flyout */\n.sa-stage-hidden [class*=\"gui_flex-wrapper_\"] [class*=\"gui_stage-and-target-wrapper_\"],\n.sa-stage-hidden [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"]),\n.sa-stage-hidden [class*=\"gui_target-wrapper_\"] {\n  padding: 0;\n}\n\n.sa-stage-hidden\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\n  [class*=\"controls_controls-container_\"],\n.sa-stage-hidden [class*=\"gui_target-wrapper_\"] {\n  display: none;\n}\n.sa-stage-hidden\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\n  [class*=\"stage-wrapper_stage-canvas-wrapper_\"] {\n  /* can't use display: none because that causes the canvas's clientWidth/Height to become 0 which causes crashes */\n  visibility: hidden;\n  position: absolute;\n  z-index: -9999;\n  /* move the stage to avoid a horizontal scroll bar */\n  right: 0;\n  /* and move it up so that the mouse can't hover over the stage while its hidden */\n  bottom: 100%;\n}\n[dir=\"rtl\"]\n  .sa-stage-hidden\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\n  [class*=\"stage-wrapper_stage-canvas-wrapper_\"] {\n  right: initial;\n  left: 0;\n}\n\n.sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  position: absolute;\n  top: 0;\n  right: 0.5rem;\n  height: 2.75rem;\n  align-items: center;\n}\n\n[dir=\"rtl\"] .sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  right: auto;\n  left: 0.5rem;\n}\n\n.sa-stage-hidden-outer .scratchEyedropper {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjODU1Y2Q2IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQgNGExIDEgMCAwIDAtMSAxdjEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY1LjVoLTRWNFoiLz48cGF0aCBkPSJNMTMgNGgzYTEgMSAwIDAgMSAxIDF2LjVoLTR6IiBmaWxsPSIjODU1Y2Q2Ii8+PC9nPjwvc3ZnPgo=");

/***/ }),

/***/ "./src/addons/addons/hide-stage/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/hide-stage/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/hide-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icon.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg");
/* generated by pull.js */



var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icon.svg": _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/hide-stage/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/hide-stage/userscript.js ***!
  \****************************************************/
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
    var addon, console, msg, stageHidden, bodyWrapper, smallStageButton, largeStageButton, fullStageButton, hideStage, unhideStage, hideStageButton, hideStageIcon, stageControls, stageButtons;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          unhideStage = function _unhideStage(e) {
            stageHidden = false;
            if (!bodyWrapper) return;
            document.body.classList.remove("sa-stage-hidden-outer");
            bodyWrapper.classList.remove("sa-stage-hidden");
            hideStageButton.setAttribute("aria-pressed", false);
            if (e) {
              var clickedButton = e.target.closest("button");
              if (clickedButton) clickedButton.setAttribute("aria-pressed", true);
            } else if (addon.tab.redux.state) {
              var selectedStageSize = addon.tab.redux.state.scratchGui.stageSize.stageSize;
              if (smallStageButton) smallStageButton.setAttribute("aria-pressed", selectedStageSize === "small");
              if (largeStageButton) largeStageButton.setAttribute("aria-pressed", selectedStageSize === "large");
              if (fullStageButton) fullStageButton.setAttribute("aria-pressed", selectedStageSize === "full");
            }
            window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
          };
          hideStage = function _hideStage() {
            stageHidden = true;
            if (!bodyWrapper) return;
            document.body.classList.add("sa-stage-hidden-outer");
            // Inner class is applied to body wrapper so that it won't affect the project page.
            bodyWrapper.classList.add("sa-stage-hidden");
            hideStageButton.setAttribute("aria-pressed", true);
            if (smallStageButton) smallStageButton.setAttribute("aria-pressed", false);
            if (largeStageButton) largeStageButton.setAttribute("aria-pressed", false);
            if (fullStageButton) fullStageButton.setAttribute("aria-pressed", false);
            window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          stageHidden = false;
          hideStageButton = Object.assign(document.createElement("button"), {
            type: "button",
            className: addon.tab.scratchClass("toggle-buttons_button", {
              others: "sa-hide-stage-button"
            }),
            title: msg("hide-stage")
          });
          hideStageButton.setAttribute("aria-label", msg("hide-stage"));
          hideStageButton.setAttribute("aria-pressed", false);
          hideStageIcon = Object.assign(addon.tab.recolorable(), {
            className: addon.tab.scratchClass("stage-header_stage-button-icon"),
            src: addon.self.getResource("/icon.svg") /* rewritten by pull.js */,
            draggable: false
          });
          hideStageIcon.setAttribute("aria-hidden", true);
          hideStageButton.appendChild(hideStageIcon);
          hideStageButton.addEventListener("click", hideStage);
          addon.self.addEventListener("disabled", function () {
            unhideStage();
            hideStageButton.remove();
          });
          addon.self.addEventListener("reenabled", function () {
            var stageControls = document.querySelector("[class*='stage-header_stage-size-toggle-group_'] > [class*='toggle-buttons_row_']");
            if (stageControls) stageControls.insertBefore(hideStageButton, smallStageButton);
          });
        case 1:
          if (false) {}
          _context.n = 2;
          return addon.tab.waitForElement("[class*='stage-header_stage-size-toggle-group_'] > [class*='toggle-buttons_row_']", {
            markAsSeen: true,
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 2:
          stageControls = _context.v;
          bodyWrapper = document.querySelector("[class*='gui_body-wrapper_']");
          stageButtons = Array.from(stageControls.querySelectorAll("button"));
          smallStageButton = stageButtons[0];
          largeStageButton = stageButtons.length === 3 ? stageButtons[1] : null;
          fullStageButton = stageButtons[stageButtons.length - 1];
          if (!addon.self.disabled) stageControls.insertBefore(hideStageButton, smallStageButton);
          if (stageHidden) hideStage();else unhideStage();
          if (smallStageButton) smallStageButton.addEventListener("click", unhideStage);
          if (largeStageButton) largeStageButton.addEventListener("click", unhideStage);
          if (fullStageButton) fullStageButton.addEventListener("click", unhideStage);
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
//# sourceMappingURL=addon-entry-hide-stage.js.map