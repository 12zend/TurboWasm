(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-paint-snap"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/paint-snap/userstyle.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/paint-snap/userstyle.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-paint-snap-button {\n  position: relative;\n}\n.sa-paint-snap-button:focus-within {\n  background-color: var(--editorDarkMode-primary-transparent35, hsla(260, 60%, 60%, 0.35));\n}\n.sa-paint-snap-button[data-enabled=\"true\"] .sa-paint-snap-image {\n  filter: brightness(0) invert(1);\n}\n.sa-paint-snap-button[data-enabled=\"true\"] {\n  background-color: var(--looks-secondary);\n}\n\n.sa-paint-snap-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-paint-snap-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-paint-snap-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid var(--ui-black-transparent);\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-modal-background);\n  color: var(--ui-text-primary);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-paint-snap-settings[data-visible=\"true\"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n  z-index: 200;\n}\n\n.sa-paint-snap-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n}\n\n.sa-paint-snap-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-paint-snap-settings-input::-webkit-outer-spin-button,\n.sa-paint-snap-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-paint-snap-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-paint-snap-settings-polygon {\n  fill: var(--ui-modal-background);\n  stroke: var(--ui-black-transparent);\n}\n\n.sa-paint-snap-settings-separator {\n  flex-grow: 1;\n  border-bottom: 1px solid currentColor;\n  margin: 4px;\n  opacity: 0.25;\n}\n\n.sa-paint-snap-settings-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n  align-items: flex-end;\n  width: 100%;\n}\n\n.sa-paint-snap-settings-section-title {\n  font-size: 1.2em;\n  font-weight: 500;\n  align-self: flex-start;\n  margin-left: 4px;\n}\n\n.sa-paint-snap-settings-label {\n  white-space: nowrap;\n}\n\n.sa-paint-snap-image[data-shrink=\"true\"] {\n  height: 1em;\n  width: 1em;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/decrement.svg":
/*!************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/decrement.svg ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/increment.svg":
/*!************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/increment.svg ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/off.svg":
/*!******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/off.svg ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU3NWU3NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNSIgZD0ibTExLjI1IDQuNzUtNi41IDYuNW0wLTYuNSA2LjUgNi41Ii8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/on.svg":
/*!*****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/on.svg ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTYgMTYiPjxwYXRoIGZpbGw9IiM1NzVlNzUiIGQ9Ik0xMi43MzYgMy45N2EuNzMzLjczMyAwIDAgMSAxLjA0NyAwYy4yODYuMjg5LjI5Ljc1Ni4wMSAxLjA1TDcuODggMTIuMDFhLjczMy43MzMgMCAwIDEtMS4wNjUuMDJMMy4yMTcgOC4zODRhLjc1Ny43NTcgMCAwIDEgMC0xLjA2LjczMy43MzMgMCAwIDEgMS4wNDcgMGwzLjA1MiAzLjA5MyA1LjQtNi40MjVhLjI0Ny4yNDcgMCAwIDEgLjAyLS4wMjJaIi8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/settings.svg":
/*!***********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/settings.svg ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PGNpcmNsZSBjeD0iMTIuNTUiIGN5PSIxMi41NSIgcj0iOS4wNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iNyIvPjxjaXJjbGUgY3g9IjYxLjk0MyIgY3k9IjYxLjQzNiIgcj0iNy41IiBmaWxsPSIjNTc1ZTc1Ii8+PHBhdGggZmlsbD0iIzU3NWU3NSIgZD0ibTUzLjExOSAyNy43NDMtOC4yNjcgOC4yNjZMMzEuNjkgMjIuODQ3bC04LjU3IDguNTczIDEzLjE2IDEzLjE2LTguMjY2IDguMjY2aDI1LjEwNXoiIGNvbG9yPSIjNTc1ZTc1Ii8+PHBhdGggZmlsbD0iIzU3NWU3NSIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNDYuMjI3IDEwMGMuNTMtMy4yMDUgMS4yMTktNi4zNzQgMi4xMTItOS40N2wtNC44MDQtMS4zODZjLS45NTQgMy4zMS0xLjY4MyA2LjY2OS0yLjI0IDEwLjA0em0zLjYwMy0xNC4wNjhhNjMuOTM1IDYzLjkzNSAwIDAgMSAzLjkzLTguNzc1bC00LjM5My0yLjM4NmE2OC45MTcgNjguOTE3IDAgMCAwLTQuMjQgOS40NnptNi4zODItMTIuOWMxLjc1My0yLjY5NCAzLjY5LTUuMjQ5IDUuODQtNy41NzhsLTMuNjczLTMuMzkyYy0yLjM3MiAyLjU2OS00LjQ3NCA1LjM1LTYuMzU3IDguMjQxem05LjIzNC0xMC45NDFhNTcuOTUgNTcuOTUgMCAwIDEgNy42MDktNS44MTNsLTIuNzAzLTQuMjA4YTYyLjk0NCA2Mi45NDQgMCAwIDAtOC4yNjYgNi4zMTd6bTExLjc1Mi04LjI2MmE3MS4yNjUgNzEuMjY1IDAgMCAxIDguNzg2LTRsLTEuNzY2LTQuNjc3YTc2LjI0MiA3Ni4yNDIgMCAwIDAtOS40MDEgNC4yODF6bTEzLjM3Mi01LjU3MkE4Ny45MjYgODcuOTI2IDAgMCAxIDEwMCA0NS45MUw5OS4wNTcgNDFhOTIuOTM4IDkyLjkzOCAwIDAgMC05Ljk2NyAyLjQ4eiIgY29sb3I9IiM1NzVlNzUiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/snap.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/snap.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iIzU3NWU3NSIgc3Ryb2tlPSIjNTc1ZTc1IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMzIiIGQ9Ik0xOTEuOTggNDYzLjU4di00OE05MC4xNiA0MjEuNGwzMy45NC0zMy45NG0tNzYuMTItNjcuODhoNDgiLz48cGF0aCBmaWxsPSIjNTc1ZTc1IiBkPSJNNDIyLjIgODkuODJhMTQ0IDE0NCAwIDAgMC0yMDMuNzEtLjA3bC02Ny44OCA2Ny44OCA2Ny44OCA2Ny44OSA2Ny44OC02Ny44OWE0OCA0OCAwIDAgMSA2OC40Ni41OWMxOC4zIDE4LjkyIDE3LjQ4IDQ5LjI0LTEuMTQgNjcuODZsLTY3LjMyIDY3LjMyIDY3Ljg4IDY3Ljg4IDY2LjkxLTY2LjkxYzU2LjM3LTU2LjM3IDU3LjM3LTE0OC4xNSAxLjA0LTIwNC41NVpNODIuNzE5IDIyNS41MTdsNDUuMjU0LTQ1LjI1NCA2Ny44ODMgNjcuODgyTDE1MC42IDI5My40ek0yMTguNDkgMzYxLjI3bDQ1LjI1NC00NS4yNTQgNjcuODgyIDY3Ljg4Mi00NS4yNTUgNDUuMjU1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/paint-snap/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/paint-snap/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-snap/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/paint-snap/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_icons_decrement_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./icons/decrement.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/decrement.svg");
/* harmony import */ var _url_loader_icons_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./icons/increment.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/increment.svg");
/* harmony import */ var _url_loader_icons_off_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./icons/off.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/off.svg");
/* harmony import */ var _url_loader_icons_on_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./icons/on.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/on.svg");
/* harmony import */ var _url_loader_icons_settings_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-loader!./icons/settings.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/settings.svg");
/* harmony import */ var _url_loader_icons_snap_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-loader!./icons/snap.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/paint-snap/icons/snap.svg");
/* generated by pull.js */








var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "icons/decrement.svg": _url_loader_icons_decrement_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "icons/increment.svg": _url_loader_icons_increment_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "icons/off.svg": _url_loader_icons_off_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "icons/on.svg": _url_loader_icons_on_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
  "icons/settings.svg": _url_loader_icons_settings_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
  "icons/snap.svg": _url_loader_icons_snap_svg__WEBPACK_IMPORTED_MODULE_7__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-snap/compatibility.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/paint-snap/compatibility.js ***!
  \*******************************************************/
/*! exports provided: addons, initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addons", function() { return addons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialize", function() { return initialize; });
var overridden = false;
var addons = {
  paintSkew: null,
  paintSnap: null
};
function initialize(paper, ScaleTool) {
  if (overridden) return;
  overridden = true;
  var ogMouseDrag = ScaleTool.prototype.onMouseDrag;
  ScaleTool.prototype.onMouseDrag = function (event) {
    var _this = this;
    if (!this.active) return;
    var callSnap = function callSnap() {
      if (addons.paintSnap) addons.paintSnap.call(_this, event);else ogMouseDrag.call(_this, event);
    };
    if (addons.paintSkew) {
      addons.paintSkew.call(this, event, callSnap);
    } else {
      callSnap();
    }
  };
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/genScalePoints.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/paint-snap/genScalePoints.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createScalePoints; });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function createScalePoints(paper, lib, objects, sx, sy) {
  var _lib$view = lib.view,
    CENTER = _lib$view.CENTER,
    ART_BOARD_BOUNDS = _lib$view.ART_BOARD_BOUNDS;
  var toPoints = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageAxes ? _objectSpread(_objectSpread({}, sx ? {
    bounds_cx: {
      type: "xcoord",
      value: CENTER.x
    }
  } : {}), sy ? {
    bounds_cy: {
      type: "ycoord",
      value: CENTER.y
    }
  } : {}) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageEdges ? _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, sx ? {
    bounds_l: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.left,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    },
    bounds_r: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.right,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    }
  } : {}), sy ? {
    bounds_t: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.top,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    },
    bounds_b: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.bottom,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    }
  } : {}), sx ? {
    bounds_w: {
      type: "width",
      value: CENTER.y,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    }
  } : {}), sy ? {
    bounds_h: {
      type: "height",
      value: CENTER.x,
      clamp: {
        min: ART_BOARD_BOUNDS.bottom,
        max: ART_BOARD_BOUNDS.top
      }
    }
  } : {}) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectEdges ? Object.fromEntries(objects.filter(function (item) {
    return !(item.selected || item.data.isHelperItem || item.locked || item.guide);
  }).map(function (item) {
    return [sx && ["item_".concat(item.id, "_r"), {
      type: "xcoord",
      value: item.bounds.right
    }], sx && ["item_".concat(item.id, "_l"), {
      type: "xcoord",
      value: item.bounds.left
    }], sy && ["item_".concat(item.id, "_t"), {
      type: "ycoord",
      value: item.bounds.top
    }], sy && ["item_".concat(item.id, "_b"), {
      type: "ycoord",
      value: item.bounds.bottom
    }], sx && ["item_".concat(item.id, "_w"), {
      type: "width",
      value: item.bounds.bottom,
      clamp: {
        min: item.bounds.left,
        max: item.bounds.right
      }
    }], sy && ["item_".concat(item.id, "_h"), {
      type: "height",
      value: item.bounds.left,
      clamp: {
        min: item.bounds.bottom,
        max: item.bounds.top
      }
    }]].filter(Boolean);
  }).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectMidlines ? Object.fromEntries(objects.filter(function (item) {
    return !(item.selected || item.data.isHelperItem || item.locked || item.guide);
  }).map(function (item) {
    return [sx && ["item_".concat(item.id, "_cx"), {
      type: "xcoord",
      value: item.bounds.center.x
    }], sy && ["item_".concat(item.id, "_cy"), {
      type: "ycoord",
      value: item.bounds.center.y
    }]].filter(Boolean);
  }).flat(1)) : {});
  return toPoints;
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/genSnapPoints.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/paint-snap/genSnapPoints.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSnapPoints; });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function createSnapPoints(paper, selectionBounds, lib, objects) {
  var _lib$view = lib.view,
    CENTER = _lib$view.CENTER,
    ART_BOARD_BOUNDS = _lib$view.ART_BOARD_BOUNDS;
  var fromPoints = _objectSpread(_objectSpread(_objectSpread({}, _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"].boxCenter ? {
    center: selectionBounds.center
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"].boxCorners ? {
    topLeft: selectionBounds.topLeft,
    topRight: selectionBounds.topRight,
    bottomLeft: selectionBounds.bottomLeft,
    bottomRight: selectionBounds.bottomRight
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"].boxEdgeMids ? {
    left: new paper.Point(selectionBounds.left, selectionBounds.center.y),
    right: new paper.Point(selectionBounds.right, selectionBounds.center.y),
    top: new paper.Point(selectionBounds.center.x, selectionBounds.top),
    bottom: new paper.Point(selectionBounds.center.x, selectionBounds.bottom)
  } : {});
  var toPoints = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageCenter ? {
    bounds_c: {
      type: "point",
      value: CENTER
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageAxes ? {
    bounds_cx: {
      type: "xcoord",
      value: CENTER.x
    },
    bounds_cy: {
      type: "ycoord",
      value: CENTER.y
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageEdges ? {
    bounds_l: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.left,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    },
    bounds_r: {
      type: "xcoord",
      value: ART_BOARD_BOUNDS.right,
      clamp: {
        min: ART_BOARD_BOUNDS.top,
        max: ART_BOARD_BOUNDS.bottom
      }
    },
    bounds_t: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.top,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    },
    bounds_b: {
      type: "ycoord",
      value: ART_BOARD_BOUNDS.bottom,
      clamp: {
        min: ART_BOARD_BOUNDS.left,
        max: ART_BOARD_BOUNDS.right
      }
    },
    bounds_lc: {
      type: "point",
      value: new paper.Point(ART_BOARD_BOUNDS.left, CENTER.y)
    },
    bounds_rc: {
      type: "point",
      value: new paper.Point(ART_BOARD_BOUNDS.right, CENTER.y)
    },
    bounds_tc: {
      type: "point",
      value: new paper.Point(CENTER.x, ART_BOARD_BOUNDS.top)
    },
    bounds_bc: {
      type: "point",
      value: new paper.Point(CENTER.x, ART_BOARD_BOUNDS.bottom)
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].pageCorners ? {
    bounds_tl: {
      type: "point",
      value: ART_BOARD_BOUNDS.topLeft
    },
    bounds_tr: {
      type: "point",
      value: ART_BOARD_BOUNDS.topRight
    },
    bounds_bl: {
      type: "point",
      value: ART_BOARD_BOUNDS.bottomLeft
    },
    bounds_br: {
      type: "point",
      value: ART_BOARD_BOUNDS.bottomRight
    }
  } : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectEdges ? Object.fromEntries(objects.filter(function (item) {
    return !(item.selected || item.data.isHelperItem || item.locked || item.guide);
  }).map(function (item) {
    return [["item_".concat(item.id, "_r"), {
      type: "itemSideVert",
      value: item.bounds.right,
      clamp: {
        min: item.bounds.top,
        max: item.bounds.bottom
      }
    }], ["item_".concat(item.id, "_l"), {
      type: "itemSideVert",
      value: item.bounds.left,
      clamp: {
        min: item.bounds.top,
        max: item.bounds.bottom
      }
    }], ["item_".concat(item.id, "_t"), {
      type: "itemSideHoriz",
      value: item.bounds.top,
      clamp: {
        min: item.bounds.left,
        max: item.bounds.right
      }
    }], ["item_".concat(item.id, "_b"), {
      type: "itemSideHoriz",
      value: item.bounds.bottom,
      clamp: {
        min: item.bounds.left,
        max: item.bounds.right
      }
    }]];
  }).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectCenters ? Object.fromEntries(objects.filter(function (item) {
    return !(item.selected || item.data.isHelperItem || item.locked || item.guide);
  }).map(function (item) {
    return [["item_".concat(item.id, "_c"), {
      type: "point",
      value: item.bounds.center
    }]];
  }).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectMidlines ? Object.fromEntries(objects.filter(function (item) {
    return !(item.selected || item.data.isHelperItem || item.locked || item.guide);
  }).map(function (item) {
    return [["item_".concat(item.id, "_cx"), {
      type: "xcoord",
      value: item.bounds.center.x
    }], ["item_".concat(item.id, "_cy"), {
      type: "ycoord",
      value: item.bounds.center.y
    }]];
  }).flat(1)) : {}), _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"].objectCorners ? Object.fromEntries(objects.filter(function (item) {
    return !(item.selected || item.data.isHelperItem || item.locked || item.guide);
  }).map(function (item) {
    return [["item_".concat(item.id, "_tl"), {
      type: "point",
      value: item.bounds.topLeft
    }], ["item_".concat(item.id, "_tr"), {
      type: "point",
      value: item.bounds.topRight
    }], ["item_".concat(item.id, "_bl"), {
      type: "point",
      value: item.bounds.bottomLeft
    }], ["item_".concat(item.id, "_br"), {
      type: "point",
      value: item.bounds.bottomRight
    }]];
  }).flat(1)) : {});
  return {
    from: fromPoints,
    to: toPoints
  };
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/helpers.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/paint-snap/helpers.js ***!
  \*************************************************/
/*! exports provided: loadModules, Modes, VectorModes, BitmapModes, GradientToolsModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadModules", function() { return loadModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Modes", function() { return Modes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorModes", function() { return VectorModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitmapModes", function() { return BitmapModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientToolsModes", function() { return GradientToolsModes; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function loadModules(paper, vm) {
  // https://github.com/scratchfoundation/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/math.js

  var checkPointsClose = function checkPointsClose(startPos, eventPoint, threshold) {
    var xOff = Math.abs(startPos.x - eventPoint.x);
    var yOff = Math.abs(startPos.y - eventPoint.y);
    if (xOff < threshold && yOff < threshold) {
      return true;
    }
    return false;
  };

  // Thanks Mikko Mononen! https://github.com/memononen/stylii
  var snapDeltaToAngle = function snapDeltaToAngle(delta, snapAngle) {
    var angle = Math.atan2(delta.y, delta.x);
    angle = Math.round(angle / snapAngle) * snapAngle;
    var dirx = Math.cos(angle);
    var diry = Math.sin(angle);
    var d = dirx * delta.x + diry * delta.y;
    return new paper.Point(dirx * d, diry * d);
  };

  // https://github.com/scratchfoundation/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/layer.js
  var CROSSHAIR_FULL_OPACITY = 0.75;
  var _getLayer = function _getLayer(layerString) {
    var _iterator = _createForOfIteratorHelper(paper.project.layers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var layer = _step.value;
        if (layer.data && layer.data[layerString]) {
          return layer;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
  var getDragCrosshairLayer = function getDragCrosshairLayer() {
    return _getLayer("isDragCrosshairLayer");
  };
  var getGuideLayer = function getGuideLayer() {
    return _getLayer("isGuideLayer");
  };

  // https://github.com/scratchfoundation/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/view.js

  // Vectors are imported and exported at SVG_ART_BOARD size.
  // Once they are imported however, both SVGs and bitmaps are on
  // canvases of ART_BOARD size.
  var SVG_ART_BOARD_WIDTH;
  var SVG_ART_BOARD_HEIGHT;
  var ART_BOARD_WIDTH;
  var ART_BOARD_HEIGHT;
  var CENTER;
  var ART_BOARD_BOUNDS;
  var MAX_WORKSPACE_BOUNDS;
  var updateStageSize = function updateStageSize() {
    SVG_ART_BOARD_WIDTH = vm.runtime.stageWidth;
    SVG_ART_BOARD_HEIGHT = vm.runtime.stageHeight;
    ART_BOARD_WIDTH = SVG_ART_BOARD_WIDTH * 2;
    ART_BOARD_HEIGHT = SVG_ART_BOARD_HEIGHT * 2;
    CENTER = new paper.Point(ART_BOARD_WIDTH / 2, ART_BOARD_HEIGHT / 2);
    ART_BOARD_BOUNDS = new paper.Rectangle(0, 0, ART_BOARD_WIDTH, ART_BOARD_HEIGHT);
    MAX_WORKSPACE_BOUNDS = new paper.Rectangle(-ART_BOARD_WIDTH / 4, -ART_BOARD_HEIGHT / 4, ART_BOARD_WIDTH * 1.5, ART_BOARD_HEIGHT * 1.5);
  };
  vm.on("STAGE_SIZE_CHANGED", updateStageSize);
  updateStageSize();

  /**
   * Mouse actions are clamped to action bounds
   * @param {boolean} isBitmap True if the editor is in bitmap mode, false if it is in vector mode
   * @returns {paper.Rectangle} the bounds within which mouse events should work in the paint editor
   */
  var getActionBounds = function getActionBounds(isBitmap) {
    if (isBitmap) {
      return ART_BOARD_BOUNDS;
    }
    return paper.view.bounds.unite(ART_BOARD_BOUNDS);
  };
  var setDefaultGuideStyle = function setDefaultGuideStyle(item) {
    item.strokeWidth = 1 / paper.view.zoom;
    item.opacity = 1;
    item.blendMode = "normal";
    item.guide = true;
  };
  var GUIDE_BLUE = "#009dec";
  var hoverBounds = function hoverBounds(item, expandBy) {
    var bounds = item.internalBounds;
    if (expandBy) {
      bounds = bounds.expand(expandBy);
    }
    var rect = new paper.Path.Rectangle(bounds);
    rect.matrix = item.matrix;
    setDefaultGuideStyle(rect);
    rect.parent = getGuideLayer();
    rect.strokeColor = GUIDE_BLUE;
    rect.fillColor = null;
    rect.data.isHelperItem = true;
    rect.data.origItem = item;
    rect.bringToFront();
    return rect;
  };
  return {
    math: {
      checkPointsClose: checkPointsClose,
      snapDeltaToAngle: snapDeltaToAngle
    },
    layer: {
      CROSSHAIR_FULL_OPACITY: CROSSHAIR_FULL_OPACITY,
      getDragCrosshairLayer: getDragCrosshairLayer,
      getLayer: _getLayer
    },
    view: {
      get CENTER() {
        return CENTER;
      },
      get ART_BOARD_BOUNDS() {
        return ART_BOARD_BOUNDS;
      },
      get MAX_WORKSPACE_BOUNDS() {
        return MAX_WORKSPACE_BOUNDS;
      },
      getActionBounds: getActionBounds
    },
    guide: {
      hoverBounds: hoverBounds
    }
  };
}
var keyMirror = function keyMirror(obj) {
  return Object.fromEntries(Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      k = _ref2[0];
    return [k, k];
  }));
};

// https://github.com/scratchfoundation/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/lib/modes.js

var vectorModesObj = {
  BRUSH: null,
  ERASER: null,
  LINE: null,
  FILL: null,
  SELECT: null,
  RESHAPE: null,
  OVAL: null,
  RECT: null,
  ROUNDED_RECT: null,
  TEXT: null
};
var bitmapModesObj = {
  BIT_BRUSH: null,
  BIT_LINE: null,
  BIT_OVAL: null,
  BIT_RECT: null,
  BIT_TEXT: null,
  BIT_FILL: null,
  BIT_ERASER: null,
  BIT_SELECT: null
};
var VectorModes = keyMirror(vectorModesObj);
var BitmapModes = keyMirror(bitmapModesObj);
var Modes = keyMirror(_objectSpread(_objectSpread({}, vectorModesObj), bitmapModesObj));
var GradientToolsModes = keyMirror({
  FILL: null,
  SELECT: null,
  RESHAPE: null,
  OVAL: null,
  RECT: null,
  LINE: null,
  BIT_OVAL: null,
  BIT_RECT: null,
  BIT_SELECT: null,
  BIT_FILL: null
});


/***/ }),

/***/ "./src/addons/addons/paint-snap/state.js":
/*!***********************************************!*\
  !*** ./src/addons/addons/paint-snap/state.js ***!
  \***********************************************/
/*! exports provided: snapOn, snapTo, snapFrom, threshold, guideColor, loadSettings, setSnapTo, setSnapFrom, setThreshold, enable, disable, toggle, setGuideColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapOn", function() { return snapOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapTo", function() { return snapTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "snapFrom", function() { return snapFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "threshold", function() { return threshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guideColor", function() { return guideColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSettings", function() { return loadSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSnapTo", function() { return setSnapTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSnapFrom", function() { return setSnapFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setThreshold", function() { return setThreshold; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enable", function() { return enable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disable", function() { return disable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggle", function() { return toggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGuideColor", function() { return setGuideColor; });
var snapOn = true;

//const ls = localStorage;

var snapTo = {
  pageEdges: true,
  pageCenter: true,
  pageAxes: true,
  pageCorners: false,
  objectEdges: true,
  objectCenters: true,
  objectMidlines: true,
  objectCorners: false
};
var snapFrom = {
  boxCenter: true,
  boxCorners: false,
  boxEdgeMids: false
};
var threshold = 10;
var guideColor;

/**
 *
 * @param {import("../../addon-api/content-script/typedef").UserscriptAddon} addon
 */
function loadSettings(_ref) {
  var settings = _ref.settings;
  for (var point in snapTo) {
    if (Object.prototype.hasOwnProperty.call(snapTo, point)) setSnapTo(point, settings.get(point));
  }
  for (var _point in snapFrom) {
    if (Object.prototype.hasOwnProperty.call(snapFrom, _point)) setSnapFrom(_point, settings.get(_point));
  }
  setThreshold(settings.get("threshold"));
  toggle(settings.get("enable-default"));
}

// Will update for addon storage api, but not yet.
/*if (ls.getItem("sa-paint-snap-snapTo")) {
  const stored = JSON.parse(ls.getItem("sa-paint-snap-snapTo"));
  Object.assign(snapTo, stored);
}

if (ls.getItem("sa-paint-snap-snapFrom")) {
  const stored = JSON.parse(ls.getItem("sa-paint-snap-snapFrom"));
  Object.assign(snapFrom, stored);
}

if (ls.getItem("sa-paint-snap-threshold")) {
  const stored = JSON.parse(ls.getItem("sa-paint-snap-threshold"));
  threshold = stored;
}*/

function setSnapTo(point, to) {
  snapTo[point] = !!to;
  //ls.setItem("sa-paint-snap-snapTo", JSON.stringify(snapTo));
}
function setSnapFrom(point, to) {
  snapFrom[point] = !!to;
  //ls.setItem("sa-paint-snap-snapFrom", JSON.stringify(snapFrom));
}
function setThreshold(thresh) {
  threshold = thresh;
  //ls.setItem("sa-paint-snap-threshold", JSON.stringify(threshold));
}
function enable() {
  snapOn = true;
}
function disable() {
  snapOn = false;
}
function toggle(enabled) {
  if (enabled) enable();else disable();
}
function setGuideColor(hex) {
  guideColor = hex;
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/ui.js":
/*!********************************************!*\
  !*** ./src/addons/addons/paint-snap/ui.js ***!
  \********************************************/
/*! exports provided: initUI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initUI", function() { return initUI; });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }


/** @type {import("../../addon-api/content-script/typedef").UserscriptUtilities} */
function initUI(_ref) {
  var addon = _ref.addon,
    msg = _ref.msg;
  var createGroup = function createGroup() {
    var el = document.createElement("div");
    el.className = "sa-paint-snap-group";
    return el;
  };
  var createSeparator = function createSeparator() {
    var el = document.createElement("div");
    el.className = "sa-paint-snap-settings-separator";
    return el;
  };
  var createButton = function createButton() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      useButtonTag = _ref2.useButtonTag;
    var el = document.createElement(useButtonTag ? "button" : "span");
    el.className = "sa-paint-snap-button";
    el.setAttribute("role", "button");
    return el;
  };
  var createButtonImage = function createButtonImage(name) {
    var el = document.createElement("img");
    el.className = "sa-paint-snap-image";
    el.draggable = false;
    el.src = addon.self.getResource("/icons/" + name + ".svg") /* rewritten by pull.js */;
    return el;
  };
  var controlsGroup = createGroup();
  addon.tab.displayNoneWhileDisabled(controlsGroup, {
    display: "flex"
  });
  var settingPageWrapper = document.createElement("div");
  settingPageWrapper.className = "sa-paint-snap-settings-wrapper";
  controlsGroup.appendChild(settingPageWrapper);
  var settingsPage = document.createElement("div");
  settingsPage.className = "sa-paint-snap-settings";
  settingPageWrapper.appendChild(settingsPage);

  //todo msg
  var SVG_NS = "http://www.w3.org/2000/svg";
  var settingsTip = document.createElementNS(SVG_NS, "svg");
  settingsTip.setAttribute("class", "sa-paint-snap-settings-tip");
  settingsTip.setAttribute("width", "14");
  settingsTip.setAttribute("height", "7");
  var settingsTipShape = document.createElementNS(SVG_NS, "polygon");
  settingsTipShape.setAttribute("class", "sa-paint-snap-settings-polygon");
  settingsTipShape.setAttribute("points", "0,0 7,7, 14,0");
  settingsTip.appendChild(settingsTipShape);
  settingsPage.appendChild(settingsTip);
  var toggleButton = createButton();
  toggleButton.addEventListener("click", function () {
    if (!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"]) {
      if (!Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"]).some(function (e) {
        return e;
      })) {
        Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapTo"])("pageCenter", true);
      }
      if (!Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"]).some(function (e) {
        return e;
      })) {
        Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapFrom"])("boxCenter", true);
      }
    }
    Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["toggle"])(!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"]);
    toggleButton.dataset.enabled = _state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"];
  });
  toggleButton.title = msg("toggle");
  toggleButton.appendChild(createButtonImage("snap"));
  toggleButton.dataset.enabled = _state_js__WEBPACK_IMPORTED_MODULE_0__["snapOn"];
  controlsGroup.appendChild(toggleButton);
  var settingButton = createButton();
  settingButton.addEventListener("click", function () {
    return setSettingsOpen(!areSettingsOpen());
  });
  settingButton.title = msg("settings");
  settingButton.appendChild(createButtonImage("settings"));
  controlsGroup.appendChild(settingButton);
  document.body.addEventListener("click", function (e) {
    if (areSettingsOpen() && !e.target.matches(".sa-paint-snap-group *")) setSettingsOpen(false);
  });
  var settingsOpenUpdaters = [];
  var setSettingsOpen = function setSettingsOpen(open) {
    settingButton.dataset.enabled = open;
    settingsPage.dataset.visible = open;
    if (open) settingsOpenUpdaters.forEach(function (f) {
      try {
        f === null || f === void 0 ? void 0 : f();
      } catch (_unused) {}
    });else if (Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"]).every(function (e) {
      return !e;
    }) || Object.values(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"]).every(function (e) {
      return !e;
    })) {
      Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["toggle"])(false);
      toggleButton.dataset.enabled = false;
    }
  };
  var areSettingsOpen = function areSettingsOpen() {
    return settingsPage.dataset.visible === "true";
  };
  var createToggle = function createToggle(button1Text, button2Text, defaultValue) {
    var onChange = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};
    var values = [button1Text, button2Text];
    var group = createGroup();
    var button1 = createButton({
      useButtonTag: true
    });
    var button2 = createButton({
      useButtonTag: true
    });
    var icon1 = createButtonImage(button1Text);
    var icon2 = createButtonImage(button2Text);
    icon1.dataset.shrink = icon2.dataset.shrink = true;
    button1.appendChild(icon1);
    button2.appendChild(icon2);
    button1.setAttribute("aria-label", button1.title = msg(button1Text));
    button2.setAttribute("aria-label", button2.title = msg(button2Text));
    var setSelectedButton = function setSelectedButton(button, e) {
      var suppress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      button1.dataset.enabled = !!button;
      button2.dataset.enabled = !button;
      if (!suppress) onChange(values[button]);
    };
    setSelectedButton(1 - values.indexOf(defaultValue), null, true);
    button1.addEventListener("click", setSelectedButton.bind(button1, 1));
    button2.addEventListener("click", setSelectedButton.bind(button2, 0));
    group.append(button1, button2);
    return group;
  };
  var createNumberInput = function createNumberInput(defaultValue) {
    var onChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -Infinity;
    var max = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Infinity;
    var step = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
    var group = createGroup();
    var filler = document.createElement("div");
    filler.style.width = "20px";
    var valueButton = createButton();
    valueButton.appendChild(filler);
    var valueInput = document.createElement("input");
    valueInput.className = "sa-paint-snap-settings-input";
    valueInput.type = "number";
    valueInput.step = step;
    valueInput.min = min;
    valueInput.max = max;
    valueInput.value = defaultValue;
    valueInput.addEventListener("change", function () {
      if (valueInput.value > max) valueInput.value = max;
      if (valueInput.value < min) valueInput.value = min;
      onChange(valueInput.value);
    });
    valueInput.addEventListener("blur", function () {
      if (!valueInput.value) valueInput.value = "0";
    });
    valueButton.appendChild(valueInput);
    var decrementButton = createButton();
    decrementButton.appendChild(createButtonImage("decrement"));
    decrementButton.addEventListener("click", function () {
      if (valueInput.value > min) {
        valueInput.value = Number(valueInput.value) - 1;
        onChange(Number(valueInput.value) + 1);
      }
    });
    var incrementButton = createButton();
    incrementButton.appendChild(createButtonImage("increment"));
    incrementButton.addEventListener("click", function () {
      if (valueInput.value < max) {
        valueInput.value = Number(valueInput.value) + 1;
        onChange(Number(valueInput.value) + 1);
      }
    });
    group.append(decrementButton, valueButton, incrementButton);
    return group;
  };
  var createSettingWithLabel = function createSettingWithLabel(settingId, settingElem) {
    var container = document.createElement("label");
    container.className = "sa-paint-snap-settings-line";
    var labelElem = document.createElement("div");
    labelElem.className = "sa-paint-snap-settings-label";
    labelElem.textContent = msg(settingId);
    container.append(labelElem, settingElem);
    settingsOpenUpdaters.push(function () {
      var onBtn = settingElem.querySelector("[aria-label=\"".concat(msg("on"), "\"]"));
      var offBtn = settingElem.querySelector("[aria-label=\"".concat(msg("off"), "\"]"));
      if (settingId in _state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"]) {
        onBtn.dataset.enabled = !!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"][settingId];
        offBtn.dataset.enabled = !_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"][settingId];
      }
      if (settingId in _state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"]) {
        onBtn.dataset.enabled = !!_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"][settingId];
        offBtn.dataset.enabled = !_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"][settingId];
      }
    });
    return container;
  };
  var createSection = function createSection(title) {
    var sectionContainer = document.createElement("div");
    sectionContainer.className = "sa-paint-snap-settings-section";
    var titleElem = document.createElement("span");
    titleElem.appendChild(document.createTextNode(title));
    titleElem.className = "sa-paint-snap-settings-section-title";
    sectionContainer.appendChild(titleElem);
    for (var _len = arguments.length, settingElems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      settingElems[_key - 1] = arguments[_key];
    }
    sectionContainer.append.apply(sectionContainer, settingElems);
    return sectionContainer;
  };
  var threshSetting = createSettingWithLabel("threshold", createNumberInput(_state_js__WEBPACK_IMPORTED_MODULE_0__["threshold"], function (value) {
    Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setThreshold"])(value);
  }, 4, 50, 1));
  var toOnOff = function toOnOff(bool) {
    return bool ? "on" : "off";
  };
  var toBool = function toBool(onOff) {
    return !!["on", "off"].indexOf(onOff);
  };
  var toggleParams = function toggleParams(defaultValue) {
    var onChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
    return ["off", "on", toOnOff(defaultValue), function (value) {
      return onChange(toBool(value));
    }];
  };
  var createSnapToSetting = function createSnapToSetting(forPoint) {
    return createSettingWithLabel(forPoint, createToggle.apply(void 0, _toConsumableArray(toggleParams(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapTo"][forPoint], function (enabled) {
      Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["toggle"])(true);
      toggleButton.dataset.enabled = true;
      Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapTo"])(forPoint, enabled);
    }))));
  };
  var snapToSection = createSection(msg("snapTo"), createSnapToSetting("pageCenter"), createSnapToSetting("pageAxes"), createSnapToSetting("pageEdges"), createSnapToSetting("pageCorners"), createSnapToSetting("objectCenters"), createSnapToSetting("objectMidlines"), createSnapToSetting("objectEdges"), createSnapToSetting("objectCorners"));
  var createSnapFromSetting = function createSnapFromSetting(forPoint) {
    return createSettingWithLabel(forPoint, createToggle.apply(void 0, _toConsumableArray(toggleParams(_state_js__WEBPACK_IMPORTED_MODULE_0__["snapFrom"][forPoint], function (enabled) {
      Object(_state_js__WEBPACK_IMPORTED_MODULE_0__["setSnapFrom"])(forPoint, enabled);
    }))));
  };
  var snapFromSection = createSection(msg("snapFrom"), createSnapFromSetting("boxCenter"), createSnapFromSetting("boxCorners"), createSnapFromSetting("boxEdgeMids"));
  settingsPage.append(threshSetting, createSeparator(), snapToSection, createSeparator(), snapFromSection);
  var controlsLoop = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var hasRunOnce, canvasControls, zoomControlsContainer, groupClass, buttonClass, imageClass, _iterator, _step, el, _iterator2, _step2, _el, _iterator3, _step3, _el2;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            hasRunOnce = false;
          case 1:
            if (false) {}
            _context.n = 2;
            return addon.tab.waitForElement("[class^='paint-editor_canvas-controls']", {
              markAsSeen: true,
              reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
              reduxCondition: function reduxCondition(state) {
                return state.scratchGui.editorTab.activeTabIndex === 1 && !state.scratchGui.mode.isPlayerOnly;
              }
            });
          case 2:
            canvasControls = _context.v;
            zoomControlsContainer = canvasControls.querySelector("[class^='paint-editor_zoom-controls']");
            addon.tab.appendToSharedSpace({
              space: "paintEditorZoomControls",
              element: controlsGroup,
              order: 2
            });
            if (!hasRunOnce) {
              hasRunOnce = true;
              groupClass = zoomControlsContainer.firstChild.className;
              buttonClass = zoomControlsContainer.firstChild.firstChild.className;
              imageClass = zoomControlsContainer.firstChild.firstChild.firstChild.className;
              _iterator = _createForOfIteratorHelper(document.querySelectorAll(".sa-paint-snap-group"));
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  el = _step.value;
                  el.className += " " + groupClass;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              _iterator2 = _createForOfIteratorHelper(document.querySelectorAll(".sa-paint-snap-button"));
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _el = _step2.value;
                  _el.className += " " + buttonClass;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
              _iterator3 = _createForOfIteratorHelper(document.querySelectorAll(".sa-paint-snap-image"));
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  _el2 = _step3.value;
                  _el2.className += " " + imageClass;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
            _context.n = 1;
            break;
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function controlsLoop() {
      return _ref3.apply(this, arguments);
    };
  }();
  controlsLoop();
}

/***/ }),

/***/ "./src/addons/addons/paint-snap/updateScaleTool.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/paint-snap/updateScaleTool.js ***!
  \*********************************************************/
/*! exports provided: updateScaleTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateScaleTool", function() { return updateScaleTool; });
/* harmony import */ var _genScalePoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genScalePoints.js */ "./src/addons/addons/paint-snap/genScalePoints.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/addons/addons/paint-snap/helpers.js");
/* harmony import */ var _compatibility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compatibility.js */ "./src/addons/addons/paint-snap/compatibility.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var getScaleTool = function getScaleTool(tool) {
  return tool.boundingBoxTool._modeMap.SCALE;
};
var updateScaleTool = function updateScaleTool(paper, tool, vm) {
  var lib = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["loadModules"])(paper, vm);
  var getActionBounds = lib.view.getActionBounds,
    getLayer = lib.layer.getLayer;
  var scaleTool = getScaleTool(tool);

  // https://github.com/scratchfoundation/scratch-paint/blob/develop/src/helper/selection-tools/scale-tool.js
  var MIN_SCALE_FACTOR = 0.0001;
  var selectionSizeGuide = {
    endLeft: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    endRight: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    line: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    group: new paper.Group({
      children: [],
      visible: false
    })
  };
  var matchingSizeGuide = {
    endLeft: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    endRight: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    line: new paper.Path.Line({
      from: [0, 0],
      to: [0, 0],
      strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
      strokeWidth: 1 / paper.view.zoom,
      visible: true,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      selected: false
    }),
    group: new paper.Group({
      children: [],
      visible: false
    })
  };
  selectionSizeGuide.endLeft.remove();
  matchingSizeGuide.endLeft.remove();
  selectionSizeGuide.endRight.remove();
  matchingSizeGuide.endRight.remove();
  selectionSizeGuide.line.remove();
  matchingSizeGuide.line.remove();
  selectionSizeGuide.group.remove();
  matchingSizeGuide.group.remove();
  selectionSizeGuide.group.addChildren([selectionSizeGuide.endLeft, selectionSizeGuide.line, selectionSizeGuide.endRight]);
  matchingSizeGuide.group.addChildren([matchingSizeGuide.endLeft, matchingSizeGuide.line, matchingSizeGuide.endRight]);
  var axisLineX = new paper.Path.Line({
    from: [0, 0],
    to: [0, 0],
    strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
    strokeWidth: 1 / paper.view.zoom,
    visible: false,
    data: {
      isHelperItem: true,
      noSelect: true,
      noHover: true,
      saPaintSnapGuide: true,
      axis: "x"
    },
    selected: false
  });
  var axisLineY = new paper.Path.Line({
    from: [0, 0],
    to: [0, 0],
    strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]),
    strokeWidth: 1 / paper.view.zoom,
    visible: false,
    data: {
      isHelperItem: true,
      noSelect: true,
      noHover: true,
      saPaintSnapGuide: true,
      axis: "y"
    },
    selected: false
  });
  axisLineX.remove();
  axisLineY.remove();
  var fixGuideSizes = function fixGuideSizes() {
    axisLineX.strokeWidth = 1 / paper.view.zoom;
    axisLineY.strokeWidth = 1 / paper.view.zoom;
    axisLineX.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    axisLineY.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    selectionSizeGuide.endLeft.strokeWidth = 1 / paper.view.zoom;
    matchingSizeGuide.endLeft.strokeWidth = 1 / paper.view.zoom;
    selectionSizeGuide.endRight.strokeWidth = 1 / paper.view.zoom;
    matchingSizeGuide.endRight.strokeWidth = 1 / paper.view.zoom;
    selectionSizeGuide.line.strokeWidth = 1 / paper.view.zoom;
    matchingSizeGuide.line.strokeWidth = 1 / paper.view.zoom;
    selectionSizeGuide.endLeft.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    matchingSizeGuide.endLeft.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    selectionSizeGuide.endRight.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    matchingSizeGuide.endRight.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    selectionSizeGuide.line.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    matchingSizeGuide.line.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_3__["guideColor"]);
    axisLineX.bringToFront();
    axisLineY.bringToFront();
    getLayer("isGuideLayer").addChildren([axisLineY, axisLineX, selectionSizeGuide.group, matchingSizeGuide.group]);
  };
  var priority = ["width", "height", "itemSideVert", "itemSideHoriz", "xcoord", "ycoord", "generated", undefined];
  var removeGuides = function removeGuides() {
    selectionSizeGuide.group.remove();
    selectionSizeGuide.group.visible = false;
    matchingSizeGuide.group.remove();
    matchingSizeGuide.group.visible = false;
    axisLineX.remove();
    axisLineX.visible = false;
    axisLineY.remove();
    axisLineY.visible = false;
  };
  _compatibility_js__WEBPACK_IMPORTED_MODULE_2__["addons"].paintSnap = function (event) {
    var _this = this;
    if (!this.active) return;
    var point = event.point;
    var bounds = getActionBounds(this.isBitmap);
    point.x = Math.max(bounds.left, Math.min(point.x, bounds.right));
    point.y = Math.max(bounds.top, Math.min(point.y, bounds.bottom));
    if (!this.lastPoint) this.lastPoint = event.lastPoint;
    var delta = point.subtract(this.lastPoint);
    this.lastPoint = point;
    if (event.modifiers.alt) {
      this.centered = true;
      this.itemGroup.position = this.origCenter;
      this.pivot = this.origCenter;
    } else {
      if (this.centered) {
        // Reset position if we were just in alt
        this.centered = false;
        this.itemGroup.scale(1 / this.lastSx, 1 / this.lastSy, this.pivot);
        if (this.selectionAnchor) {
          this.selectionAnchor.scale(this.lastSx, this.lastSy);
        }
        this.lastSx = 1;
        this.lastSy = 1;
      }
      this.pivot = this.origPivot;
    }
    this.corner = this.corner.add(delta);
    var size = this.corner.subtract(this.pivot);
    if (event.modifiers.alt) {
      size = size.multiply(2);
    }
    var sx = 1.0;
    var sy = 1.0;
    if (Math.abs(this.origSize.x) > 0.0000001) {
      sx = size.x / this.origSize.x;
    }
    if (Math.abs(this.origSize.y) > 0.0000001) {
      sy = size.y / this.origSize.y;
    }
    var sortByPrioOrDist = function sortByPrioOrDist(a, b) {
      var prioDiff = priority.indexOf(a.type) - priority.indexOf(b.type);
      if (prioDiff) return prioDiff;
      return a.distance - b.distance;
    };
    var paintLayer = getLayer("isPaintingLayer");
    var doesSx = _state_js__WEBPACK_IMPORTED_MODULE_3__["snapOn"] && (this.isCorner && !event.modifiers.shift || Math.abs(this.origSize.x) > 0.0000001);
    var doesSy = _state_js__WEBPACK_IMPORTED_MODULE_3__["snapOn"] && (this.isCorner && !event.modifiers.shift || Math.abs(this.origSize.y) > 0.0000001);
    var scaledThreshold = _state_js__WEBPACK_IMPORTED_MODULE_3__["threshold"] / paper.view.zoom;
    var canSnap = function canSnap(coord) {
      return coord.distance < scaledThreshold;
    };
    var format = function format(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        coordName = _ref2[0],
        coord = _ref2[1];
      return {
        type: coord.type,
        distance: function () {
          switch (coord.type) {
            case "width":
              {
                return Math.abs(Math.abs(size.x) - Math.abs(coord.clamp.max - coord.clamp.min));
              }
            case "height":
              {
                return Math.abs(Math.abs(size.y) - Math.abs(coord.clamp.max - coord.clamp.min));
              }
            case "xcoord":
            case "itemSideVert":
              {
                return Math.abs(_this.corner.x - coord.value);
              }
            case "ycoord":
            case "itemSideHoriz":
              {
                return Math.abs(_this.corner.y - coord.value);
              }
            default:
              break;
          }
        }(),
        name: coordName,
        coord: coord
      };
    };
    var snapXCoords = Object(_genScalePoints_js__WEBPACK_IMPORTED_MODULE_0__["default"])(paper, lib, paintLayer.children, doesSx, false);
    var canSnapXCoords = Object.entries(snapXCoords).map(format).filter(canSnap).sort(sortByPrioOrDist);
    var snapYCoords = Object(_genScalePoints_js__WEBPACK_IMPORTED_MODULE_0__["default"])(paper, lib, paintLayer.children, false, doesSy);
    var canSnapYCoords = Object.entries(snapYCoords).map(format).filter(canSnap).sort(sortByPrioOrDist);
    var closestSnapX = canSnapXCoords[0];
    var closestSnapY = canSnapYCoords[0];
    var signx = sx > 0 ? 1 : -1;
    var signy = sy > 0 ? 1 : -1;
    // TODO: show correct guides
    if (closestSnapX) {
      switch (closestSnapX.type) {
        case "width":
          {
            var newSize = new paper.Point(Math.abs(closestSnapX.coord.clamp.max - closestSnapX.coord.clamp.min), this.corner.y);
            sx = newSize.x / this.origSize.x;
            break;
          }
        case "xcoord":
        case "itemSideVert":
          {
            var _newSize = new paper.Point(closestSnapX.coord.value, this.corner.y).subtract(this.pivot);
            sx = _newSize.x / this.origSize.x;
            if (event.modifiers.alt) sx *= 2;
            break;
          }
        default:
          break;
      }
    }
    if (closestSnapY) {
      switch (closestSnapY.type) {
        case "height":
          {
            var _newSize2 = new paper.Point(this.corner.x, Math.abs(closestSnapY.coord.clamp.max - closestSnapY.coord.clamp.min));
            sy = _newSize2.y / this.origSize.y;
            break;
          }
        case "ycoord":
        case "itemSideHoriz":
          {
            var _newSize3 = new paper.Point(this.corner.x, closestSnapY.coord.value).subtract(this.pivot);
            sy = _newSize3.y / this.origSize.y;
            if (event.modifiers.alt) sy *= 2;
            break;
          }
        default:
          break;
      }
    }
    var oldSX = sx;
    var oldSY = sy;
    if (this.isCorner && !event.modifiers.shift) {
      sx = sy = Math.max(Math.abs(sx), Math.abs(sy));
      sx *= signx;
      sy *= signy;
    }
    sx = signx * Math.max(Math.abs(sx), MIN_SCALE_FACTOR);
    sy = signy * Math.max(Math.abs(sy), MIN_SCALE_FACTOR);
    this.itemGroup.scale(sx / this.lastSx, sy / this.lastSy, this.pivot);
    if (this.selectionAnchor) {
      this.selectionAnchor.scale(this.lastSx / sx, this.lastSy / sy);
    }
    removeGuides();
    if (Math.abs(oldSX) === Math.abs(sx) && closestSnapX || Math.abs(oldSY) === Math.abs(sy) && closestSnapY) fixGuideSizes();
    if (Math.abs(oldSX) === Math.abs(sx) && closestSnapX) {
      switch (closestSnapX.type) {
        case "width":
          {
            var matchy = closestSnapX.coord.value;
            var selectiony = this.itemGroup.bounds.bottom;
            matchingSizeGuide.endLeft.firstSegment.point = new paper.Point(closestSnapX.coord.clamp.min, matchy);
            matchingSizeGuide.endLeft.lastSegment.point = new paper.Point(closestSnapX.coord.clamp.min, matchy + 5 / paper.view.zoom);
            matchingSizeGuide.endRight.firstSegment.point = new paper.Point(closestSnapX.coord.clamp.max, matchy);
            matchingSizeGuide.endRight.lastSegment.point = new paper.Point(closestSnapX.coord.clamp.max, matchy + 5 / paper.view.zoom);
            matchingSizeGuide.line.firstSegment.point = new paper.Point(closestSnapX.coord.clamp.min, matchy + 3 / paper.view.zoom);
            matchingSizeGuide.line.lastSegment.point = new paper.Point(closestSnapX.coord.clamp.max, matchy + 3 / paper.view.zoom);
            matchingSizeGuide.group.visible = true;
            matchingSizeGuide.group.bringToFront();
            selectionSizeGuide.endLeft.firstSegment.point = new paper.Point(this.itemGroup.bounds.left, selectiony + 2 / paper.view.zoom);
            selectionSizeGuide.endLeft.lastSegment.point = new paper.Point(this.itemGroup.bounds.left, selectiony + 7 / paper.view.zoom);
            selectionSizeGuide.endRight.firstSegment.point = new paper.Point(this.itemGroup.bounds.right, selectiony + 2 / paper.view.zoom);
            selectionSizeGuide.endRight.lastSegment.point = new paper.Point(this.itemGroup.bounds.right, selectiony + 7 / paper.view.zoom);
            selectionSizeGuide.line.firstSegment.point = new paper.Point(this.itemGroup.bounds.left, selectiony + 4.5 / paper.view.zoom);
            selectionSizeGuide.line.lastSegment.point = new paper.Point(this.itemGroup.bounds.right, selectiony + 4.5 / paper.view.zoom);
            selectionSizeGuide.group.visible = true;
            selectionSizeGuide.group.bringToFront();
            break;
          }
        case "xcoord":
        case "itemSideVert":
          {
            axisLineX.firstSegment.point = new paper.Point(closestSnapX.coord.value, bounds.top);
            axisLineX.lastSegment.point = new paper.Point(closestSnapX.coord.value, bounds.bottom);
            axisLineX.visible = true;
            axisLineX.bringToFront();
            break;
          }
        default:
          break;
      }
    }
    if (Math.abs(oldSY) === Math.abs(sy) && closestSnapY) {
      switch (closestSnapY.type) {
        case "height":
          {
            var matchx = closestSnapY.coord.value;
            var selectionx = this.itemGroup.bounds.left;
            matchingSizeGuide.endLeft.firstSegment.point = new paper.Point(matchx, closestSnapY.coord.clamp.min);
            matchingSizeGuide.endLeft.lastSegment.point = new paper.Point(matchx - 5 / paper.view.zoom, closestSnapY.coord.clamp.min);
            matchingSizeGuide.endRight.firstSegment.point = new paper.Point(matchx, closestSnapY.coord.clamp.max);
            matchingSizeGuide.endRight.lastSegment.point = new paper.Point(matchx - 5 / paper.view.zoom, closestSnapY.coord.clamp.max);
            matchingSizeGuide.line.firstSegment.point = new paper.Point(matchx - 3 / paper.view.zoom, closestSnapY.coord.clamp.min);
            matchingSizeGuide.line.lastSegment.point = new paper.Point(matchx - 3 / paper.view.zoom, closestSnapY.coord.clamp.max);
            matchingSizeGuide.group.visible = true;
            matchingSizeGuide.group.bringToFront();
            selectionSizeGuide.endLeft.firstSegment.point = new paper.Point(selectionx - 2 / paper.view.zoom, this.itemGroup.bounds.top);
            selectionSizeGuide.endLeft.lastSegment.point = new paper.Point(selectionx - 7 / paper.view.zoom, this.itemGroup.bounds.top);
            selectionSizeGuide.endRight.firstSegment.point = new paper.Point(selectionx - 2 / paper.view.zoom, this.itemGroup.bounds.bottom);
            selectionSizeGuide.endRight.lastSegment.point = new paper.Point(selectionx - 7 / paper.view.zoom, this.itemGroup.bounds.bottom);
            selectionSizeGuide.line.firstSegment.point = new paper.Point(selectionx - 4.5 / paper.view.zoom, this.itemGroup.bounds.top);
            selectionSizeGuide.line.lastSegment.point = new paper.Point(selectionx - 4.5 / paper.view.zoom, this.itemGroup.bounds.bottom);
            selectionSizeGuide.group.visible = true;
            selectionSizeGuide.group.bringToFront();
            break;
          }
        case "ycoord":
        case "itemSideHoriz":
          {
            axisLineY.firstSegment.point = new paper.Point(bounds.left, closestSnapY.coord.value);
            axisLineY.lastSegment.point = new paper.Point(bounds.right, closestSnapY.coord.value);
            axisLineY.visible = true;
            axisLineY.bringToFront();
            break;
          }
        default:
          break;
      }
    }
    this.lastSx = sx;
    this.lastSy = sy;
  };
  Object(_compatibility_js__WEBPACK_IMPORTED_MODULE_2__["initialize"])(paper, scaleTool.constructor);
  var oldMouseUp = scaleTool.constructor.prototype.onMouseUp;
  scaleTool.constructor.prototype.onMouseUp = function () {
    removeGuides();
    oldMouseUp.call(this);
  };
};

/***/ }),

/***/ "./src/addons/addons/paint-snap/updateSelectTool.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/paint-snap/updateSelectTool.js ***!
  \**********************************************************/
/*! exports provided: updateSelectTool, isSelectTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSelectTool", function() { return updateSelectTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSelectTool", function() { return isSelectTool; });
/* harmony import */ var _genSnapPoints_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genSnapPoints.js */ "./src/addons/addons/paint-snap/genSnapPoints.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/addons/addons/paint-snap/helpers.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }



var getMoveTool = function getMoveTool(tool) {
  return tool.boundingBoxTool._modeMap.MOVE;
};
var updateSelectTool = function updateSelectTool(paper, tool, vm) {
  var lib = Object(_helpers_js__WEBPACK_IMPORTED_MODULE_1__["loadModules"])(paper, vm);
  var _lib$math = lib.math,
    checkPointsClose = _lib$math.checkPointsClose,
    snapDeltaToAngle = _lib$math.snapDeltaToAngle,
    _lib$view = lib.view,
    getActionBounds = _lib$view.getActionBounds,
    CENTER = _lib$view.CENTER,
    _lib$layer = lib.layer,
    getDragCrosshairLayer = _lib$layer.getDragCrosshairLayer,
    CROSSHAIR_FULL_OPACITY = _lib$layer.CROSSHAIR_FULL_OPACITY,
    getLayer = _lib$layer.getLayer,
    hoverBounds = lib.guide.hoverBounds;
  var moveTool = getMoveTool(tool);

  // https://github.com/scratchfoundation/scratch-paint/blob/2a9fb2356d961200dc849b5b0a090d33f473c0b5/src/helper/selection-tools/move-tool.js

  var FADE_DISTANCE = 10;
  var guideLine = new paper.Path.Line({
    from: [0, 0],
    to: [0, 0],
    strokeColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]),
    strokeWidth: 1 / paper.view.zoom,
    visible: false,
    data: {
      isHelperItem: true,
      noSelect: true,
      noHover: true,
      saPaintSnapGuide: true
    },
    selected: false
  });
  var guidePointParts = {
    shadow: null,
    circle: null
  };
  var guidePoint = new paper.Group({
    children: [],
    visible: false
  });

  // Paper adds them by default, and we don't want them in the canvas yet.
  guideLine.remove();
  guidePoint.remove();
  var itemIndicator;
  var fixGuideSizes = function fixGuideSizes() {
    guidePointParts.shadow = new paper.Path.Circle({
      center: new paper.Point(0, 0),
      radius: 5.5 / paper.view.zoom,
      fillColor: "black",
      opacity: 0.12,
      data: {
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      visible: true,
      guide: true
    });
    guidePointParts.circle = new paper.Path.Circle({
      center: new paper.Point(0, 0),
      radius: 4 / paper.view.zoom,
      fillColor: new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]),
      data: {
        isScaleHandle: false,
        isHelperItem: true,
        noSelect: true,
        noHover: true,
        saPaintSnapGuide: true
      },
      visible: true,
      guide: true
    });
    guidePoint.removeChildren();
    guidePoint.addChildren([guidePointParts.shadow, guidePointParts.circle]);
    guideLine.strokeWidth = 1 / paper.view.zoom;
    guideLine.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]);
    guideLine.bringToFront();
    guidePoint.bringToFront();
    getLayer("isGuideLayer").addChildren([guideLine, guidePoint]);
  };
  var removeGuides;
  function onMouseDrag(event) {
    var _getLayer$children$fi, _getLayer$children$fi2;
    var point = event.point;
    var actionBounds = getActionBounds(this.mode in _helpers_js__WEBPACK_IMPORTED_MODULE_1__["BitmapModes"]);
    point.x = Math.max(actionBounds.left, Math.min(point.x, actionBounds.right));
    point.y = Math.max(actionBounds.top, Math.min(point.y, actionBounds.bottom));
    var dragVector = point.subtract(event.downPoint);
    var scaledThreshold = _state_js__WEBPACK_IMPORTED_MODULE_2__["threshold"] / paper.view.zoom;
    var snapVector;
    if (this.selectedItems.length === 0) {
      return;
    }
    var selectionBounds = this.selectionCenter._owner;
    var newCenter = this.selectionCenter.add(dragVector);
    var getDist = function getDist(p1, p2) {
      return p1.getDistance(p2);
    };
    var selectionAnchor = (_getLayer$children$fi = (_getLayer$children$fi2 = getLayer("isGuideLayer").children.find(function (c) {
      return c.data.isSelectionBound;
    })) === null || _getLayer$children$fi2 === void 0 ? void 0 : _getLayer$children$fi2.selectionAnchor) !== null && _getLayer$children$fi !== void 0 ? _getLayer$children$fi : {};
    var resetAnchorColor = function resetAnchorColor() {
      selectionAnchor.strokeColor = new paper.Color(0.30196078431372547, 0.592156862745098, 1);
      selectionAnchor.fillColor = null;
    };
    removeGuides = function removeGuides() {
      var _itemIndicator;
      guideLine.remove();
      guidePoint.remove();
      guidePoint.visible = false;
      guideLine.visible = false;
      (_itemIndicator = itemIndicator) === null || _itemIndicator === void 0 ? void 0 : _itemIndicator.remove();
      if (itemIndicator) itemIndicator.visible = false;
      resetAnchorColor();
    };
    removeGuides();
    if (!event.modifiers.shift && this.mode !== _helpers_js__WEBPACK_IMPORTED_MODULE_1__["Modes"].RESHAPE) {
      var paintLayer = getLayer("isPaintingLayer");
      var snapPoints = Object(_genSnapPoints_js__WEBPACK_IMPORTED_MODULE_0__["default"])(paper, selectionBounds, lib, paintLayer.children);
      var fromPoints = snapPoints.from;
      var toPoints = snapPoints.to;
      var configDefFn = function configDefFn(pointDef) {
        if (!pointDef.clamp) pointDef.clamp = {
          min: -Infinity,
          max: Infinity
        };
        if (pointDef.type === "point") return function () {
          return pointDef.value;
        };
        if (pointDef.type === "xcoord" || pointDef.type === "itemSideVert") return function (point) {
          return new paper.Point(pointDef.value, Math.min(Math.max(point.y, pointDef.clamp.min), pointDef.clamp.max));
        };
        if (pointDef.type === "ycoord" || pointDef.type === "itemSideHoriz") return function (point) {
          return new paper.Point(Math.min(Math.max(point.x, pointDef.clamp.min), pointDef.clamp.max), pointDef.value);
        };
        if (pointDef.type === "generator") return pointDef.value;
      };
      var generateSnapPointsFor = function generateSnapPointsFor(point) {
        return Object.fromEntries(Object.entries(toPoints).map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];
          return [k, {
            type: v.type,
            point: configDefFn(v)(point)
          }];
        }));
      };
      var generatedSnapPoints = Object.entries(fromPoints).map(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
          pointPos = _ref4[0],
          point = _ref4[1];
        return {
          pointPos: pointPos,
          origPoint: point,
          point: point.add(dragVector),
          snapPoints: generateSnapPointsFor(point.add(dragVector))
        };
      });
      var priority = ["point", "itemSideVert", "itemSideHoriz", "xcoord", "ycoord", "generated", undefined];
      var sortByPrioOrDist = function sortByPrioOrDist(a, b) {
        var prioDiff = priority.indexOf(a.snapPointType) - priority.indexOf(b.snapPointType);
        if (prioDiff) return prioDiff;
        return a.distance - b.distance;
      };
      var closestSnapForEachPoint = generatedSnapPoints.map(function (_ref5) {
        var _snapPoints$closestSn, _snapPoints$closestSn2;
        var point = _ref5.point,
          origPoint = _ref5.origPoint,
          snapPoints = _ref5.snapPoints;
        var snappablePoints = Object.entries(snapPoints).filter(function (_ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
            pos = _ref7[0],
            snapPoint = _ref7[1];
          return checkPointsClose(point, snapPoint.point, scaledThreshold);
        }).map(function (_ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
            pos = _ref9[0],
            snapPoint = _ref9[1];
          return {
            pos: pos,
            distance: getDist(snapPoint.point, point),
            snapPointType: snapPoint.type
          };
        });
        var closestSnapPoint = snappablePoints.sort(sortByPrioOrDist)[0] || {
          pos: "",
          distance: Infinity
        };
        return {
          point: origPoint,
          snapPoint: (_snapPoints$closestSn = snapPoints[closestSnapPoint.pos]) === null || _snapPoints$closestSn === void 0 ? void 0 : _snapPoints$closestSn.point,
          snapPointType: (_snapPoints$closestSn2 = snapPoints[closestSnapPoint.pos]) === null || _snapPoints$closestSn2 === void 0 ? void 0 : _snapPoints$closestSn2.type,
          distance: closestSnapPoint.distance,
          pos: closestSnapPoint.pos
        };
      }).sort(sortByPrioOrDist);
      var closestSnapPoint = closestSnapForEachPoint.sort(sortByPrioOrDist)[0];
      removeGuides();
      if (closestSnapPoint !== null && closestSnapPoint !== void 0 && closestSnapPoint.snapPoint) {
        var _closestSnapPoint$pos;
        fixGuideSizes();
        snapVector = closestSnapPoint.snapPoint.subtract(closestSnapPoint.point);
        var itemID = (_closestSnapPoint$pos = closestSnapPoint.pos.match(/item_(\d+)_/)) === null || _closestSnapPoint$pos === void 0 ? void 0 : _closestSnapPoint$pos[1];
        if (itemID) {
          var item = paper.project.getItem({
            id: parseInt(itemID, 10)
          });
          if (item) {
            itemIndicator = hoverBounds(item);
          }
        }
        if (closestSnapPoint.point.equals(this.selectionCenter) && closestSnapPoint.snapPointType === "point") {
          selectionAnchor.fillColor = selectionAnchor.strokeColor = new paper.Color(_state_js__WEBPACK_IMPORTED_MODULE_2__["guideColor"]);
        } else {
          resetAnchorColor();
          switch (closestSnapPoint.snapPointType) {
            case "point":
              {
                guidePoint.visible = true;
                guidePoint.position = closestSnapPoint.snapPoint;
                guidePoint.bringToFront();
                break;
              }
            case "xcoord":
            case "itemSideVert":
              {
                guideLine.firstSegment.point = new paper.Point(closestSnapPoint.snapPoint.x, actionBounds.top);
                guideLine.lastSegment.point = new paper.Point(closestSnapPoint.snapPoint.x, actionBounds.bottom);
                guideLine.visible = true;
                guideLine.bringToFront();
                break;
              }
            case "ycoord":
            case "itemSideHoriz":
              {
                guideLine.firstSegment.point = new paper.Point(actionBounds.left, closestSnapPoint.snapPoint.y);
                guideLine.lastSegment.point = new paper.Point(actionBounds.right, closestSnapPoint.snapPoint.y);
                guideLine.visible = true;
                guideLine.bringToFront();
                break;
              }
          }
        }
      }
    }
    var bounds;
    var _iterator = _createForOfIteratorHelper(this.selectedItems),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _item = _step.value;
        // add the position of the item before the drag started
        // for later use in the snap calculation
        if (!_item.data.origPos) {
          _item.data.origPos = _item.position;
        }
        if (snapVector) {
          _item.position = _item.data.origPos.add(snapVector);
        } else if (event.modifiers.shift) {
          _item.position = _item.data.origPos.add(snapDeltaToAngle(dragVector, Math.PI / 4));
        } else {
          _item.position = _item.data.origPos.add(dragVector);
        }
        if (bounds) {
          bounds = bounds.unite(_item.bounds);
        } else {
          bounds = _item.bounds;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (this.firstDrag) {
      // Show the center crosshair above the selected item while dragging.
      getDragCrosshairLayer().visible = true;
      this.firstDrag = false;
    }

    // The rotation center crosshair should be opaque over the entire selection bounding box, and fade out to
    // totally transparent outside the selection bounding box.
    var opacityMultiplier = 1;
    if (CENTER.y < bounds.top && CENTER.x < bounds.left || CENTER.y > bounds.bottom && CENTER.x < bounds.left || CENTER.y < bounds.top && CENTER.x > bounds.right || CENTER.y > bounds.bottom && CENTER.x > bounds.right) {
      // rotation center is to one of the 4 corners of the selection bounding box
      var distX = Math.max(CENTER.x - bounds.right, bounds.left - CENTER.x);
      var distY = Math.max(CENTER.y - bounds.bottom, bounds.top - CENTER.y);
      var dist = Math.sqrt(distX * distX + distY * distY);
      opacityMultiplier = Math.max(0, 1 - dist / (FADE_DISTANCE / paper.view.zoom));
    } else if (CENTER.y < bounds.top || CENTER.y > bounds.bottom) {
      // rotation center is above or below the selection bounding box
      opacityMultiplier = Math.max(0, 1 - (Math.abs(CENTER.y - newCenter.y) - bounds.height / 2) / (FADE_DISTANCE / paper.view.zoom));
    } else if (CENTER.x < bounds.left || CENTER.x > bounds.right) {
      // rotation center is left or right of the selection bounding box
      opacityMultiplier = Math.max(0, 1 - (Math.abs(CENTER.x - newCenter.x) - bounds.width / 2) / (FADE_DISTANCE / paper.view.zoom));
    } // else the rotation center is within selection bounds, always show drag crosshair at full opacity
    getDragCrosshairLayer().opacity = CROSSHAIR_FULL_OPACITY * opacityMultiplier;
  }
  var oldMouseDrag = moveTool.constructor.prototype.onMouseDrag;
  moveTool.constructor.prototype.onMouseDrag = onMouseDrag;
  var oldMouseDown = moveTool.constructor.prototype.onMouseDown;
  moveTool.constructor.prototype.onMouseDown = function () {
    if (_state_js__WEBPACK_IMPORTED_MODULE_2__["snapOn"]) moveTool.constructor.prototype.onMouseDrag = onMouseDrag;else moveTool.constructor.prototype.onMouseDrag = oldMouseDrag;
    for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
      a[_key] = arguments[_key];
    }
    oldMouseDown.apply(this, a);
  };
  var oldMouseUp = moveTool.constructor.prototype.onMouseUp;
  moveTool.constructor.prototype.onMouseUp = function () {
    var _removeGuides;
    (_removeGuides = removeGuides) === null || _removeGuides === void 0 ? void 0 : _removeGuides();
    for (var _len2 = arguments.length, a = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      a[_key2] = arguments[_key2];
    }
    oldMouseUp.apply(this, a);
  };
};
var isSelectTool = function isSelectTool(tool) {
  return "selectionBoxTool" in tool && "boundingBoxTool" in tool;
};

/***/ }),

/***/ "./src/addons/addons/paint-snap/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/paint-snap/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _updateSelectTool_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateSelectTool.js */ "./src/addons/addons/paint-snap/updateSelectTool.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./src/addons/addons/paint-snap/state.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui.js */ "./src/addons/addons/paint-snap/ui.js");
/* harmony import */ var _updateScaleTool_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateScaleTool.js */ "./src/addons/addons/paint-snap/updateScaleTool.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





/** @type {(api: import("../../addon-api/content-script/typedef").UserscriptUtilities) => Promise<void>} */
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref.apply(this, arguments);
});
function _ref() {
  _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(api) {
    var addon, paper, _paper$tools, tool;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = api.addon;
          addon.self.addEventListener("disabled", _state_js__WEBPACK_IMPORTED_MODULE_1__["disable"]);
          addon.self.addEventListener("reenabled", _state_js__WEBPACK_IMPORTED_MODULE_1__["enable"]);
          Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["loadSettings"])(addon);
          _context.n = 1;
          return addon.tab.traps.getPaper();
        case 1:
          paper = _context.v;
          _paper$tools = _slicedToArray(paper.tools, 1), tool = _paper$tools[0];
          Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["toggle"])(addon.settings.get("enable-default"));
          Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["setGuideColor"])(addon.settings.get("guide-color"));
          addon.settings.addEventListener("change", function () {
            return Object(_state_js__WEBPACK_IMPORTED_MODULE_1__["setGuideColor"])(addon.settings.get("guide-color"));
          });
          if (Object(_updateSelectTool_js__WEBPACK_IMPORTED_MODULE_0__["isSelectTool"])(tool)) {
            Object(_updateSelectTool_js__WEBPACK_IMPORTED_MODULE_0__["updateSelectTool"])(paper, tool, addon.tab.traps.vm);
            Object(_updateScaleTool_js__WEBPACK_IMPORTED_MODULE_3__["updateScaleTool"])(paper, tool, addon.tab.traps.vm);
          }
          Object(_ui_js__WEBPACK_IMPORTED_MODULE_2__["initUI"])(api);
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-paint-snap.js.map