(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-vol-slider"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/hover.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/vol-slider/hover.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-vol-slider {\n  position: relative;\n  /* Size when the slider is hidden - same as icon */\n  width: 20px;\n  box-sizing: content-box;\n}\n\n.sa-vol-slider-inner {\n  position: absolute;\n  top: 0;\n  height: 100%;\n}\n\n[dir=\"ltr\"] .sa-vol-slider-inner {\n  left: 0.25rem;\n}\n\n[dir=\"rtl\"] .sa-vol-slider-inner {\n  right: 0.25rem;\n}\n\n.sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\n  opacity: 0;\n  width: 0;\n}\n\n[dir=\"ltr\"] .sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\n  margin-left: -3px;\n}\n\n[dir=\"rtl\"] .sa-vol-slider-inner:not(:hover) > .sa-vol-slider-input {\n  margin-right: -3px;\n}\n\n.sa-vol-slider-inner:hover {\n  z-index: 1;\n}\n\n.pos-container-container,\n.clone-container-container,\n[class*=\"turbo-mode_turbo-container\"] {\n  transition: opacity 0.25s ease;\n}\n\n.sa-vol-slider:hover ~ .pos-container-container,\n.sa-vol-slider:hover ~ .clone-container-container,\n.sa-vol-slider:hover ~ [class*=\"turbo-mode_turbo-container\"] {\n  opacity: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/userstyle.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/vol-slider/userstyle.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-vol-slider {\n  /* Same lateral padding as .clone-container-container */\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.sa-vol-slider-inner {\n  display: flex;\n  align-items: center;\n}\n\n.sa-vol-slider-icon {\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n}\n.sa-vol-slider-icon[data-icon=\"mute\"] {\n  background-image: url(" + escape(__webpack_require__(/*! ./mute.svg */ "./src/addons/addons/vol-slider/mute.svg")) + ");\n}\n.sa-vol-slider-icon[data-icon=\"quiet\"] {\n  background-image: url(" + escape(__webpack_require__(/*! ./quiet.svg */ "./src/addons/addons/vol-slider/quiet.svg")) + ");\n}\n.sa-vol-slider-icon[data-icon=\"loud\"] {\n  background-image: url(" + escape(__webpack_require__(/*! ./loud.svg */ "./src/addons/addons/vol-slider/loud.svg")) + ");\n}\n.sa-vol-slider-icon:hover,\n.sa-vol-slider-input:hover {\n  cursor: pointer;\n}\n\n.sa-small-stage .sa-vol-slider-input,\n.sa-small-stage .sa-vol-slider-icon:not([data-icon=\"mute\"]) {\n  display: none !important;\n}\n.sa-small-stage .sa-vol-slider {\n  width: 0;\n}\n\n.sa-vol-slider-input {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 50px;\n  height: 6px;\n  border-radius: 3px;\n  background-color: #de91de;\n  transition: all 0.25s ease;\n}\n\n[dir=\"ltr\"] .sa-vol-slider-input {\n  margin-left: 3px;\n}\n\n[dir=\"rtl\"] .sa-vol-slider-input {\n  margin-right: 3px;\n}\n\n.sa-vol-slider-input::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #c234c2;\n}\n\n.sa-vol-slider-input::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border: none;\n  border-radius: 50%;\n  background-color: #c234c2;\n}\n\n.sa-mute-project-icon {\n  display: none !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bG91bmRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb3VuZGVyIj4KICAgICAgICAgICAgPGcgaWQ9ImxvdWRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MDQxLDIuMTIyMSBMNi43MDQxLDEwLjUzNjEgQzYuNzA0MSwxMC44ODUxIDYuNDIyMSwxMS4xNjcxIDYuMDc0MSwxMS4xNjcxIEw0Ljg5NzEsMTEuMTY3MSBDNC42MjUxLDExLjE2NzEgNC4zODMxLDEwLjk5MjEgNC4yOTgxLDEwLjczMjEgQzMuODE4MSw5LjI2ODEgMi40NTIxLDguMjc4MSAwLjkxMTEsOC4yNzgxIEwwLjYzMTEsOC4yNzgxIEMwLjI4NDEsOC4yNzgxIDAuMDAwMSw3Ljk5NDEgMC4wMDAxLDcuNjQ3MSBMMC4wMDAxLDUuMDExMSBDMC4wMDAxLDQuNjY0MSAwLjI4NDEsNC4zODAxIDAuNjMxMSw0LjM4MDEgTDAuOTExMSw0LjM4MDEgQzIuNDUyMSw0LjM4MDEgMy44MTgxLDMuMzkwMSA0LjI5ODEsMS45MjYxIEM0LjM4MzEsMS42NjYxIDQuNjI1MSwxLjQ5MTEgNC44OTcxLDEuNDkxMSBMNi4wNzQxLDEuNDkxMSBDNi40MjIxLDEuNDkxMSA2LjcwNDEsMS43NzMxIDYuNzA0MSwyLjEyMjEiIGlkPSJGaWxsLTEiIGZpbGw9IiNDRjYzQ0YiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjExNzIsNS4yMTI5IEM5LjcyOTIsNS44MjU5IDkuNzI5Miw2LjgzMTkgOS4xMTcyLDcuNDQ0OSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4zNDg2LDIuOTgxNSBDMTMuMTk2Niw0LjgyOTUgMTMuMTk2Niw3LjgyOTUgMTEuMzQ4Niw5LjY3NjUiIGlkPSJTdHJva2UtNSIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNTgsMC43NTAxIEMxNi42NjMsMy44MzIxIDE2LjY2Myw4LjgyNjEgMTMuNTgsMTEuOTA4MSIgaWQ9IlN0cm9rZS03IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU291bmQvRWZmZWN0cy9NdXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbi0tc29mdGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InNvZnRlciI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTQwMTEyNDYsMS4zODczNjI1IEw3LjU0MDExMjQ2LDEwLjg1MzExMjUgQzcuNTQwMTEyNDYsMTEuMjQ1NzM3NSA3LjIyMjk0NjU5LDExLjU2Mjk4NzUgNi44MzE1NTA0MSwxMS41NjI5ODc1IEw1LjUwNzc3NjU1LDExLjU2Mjk4NzUgQzUuMjAxODU3NywxMS41NjI5ODc1IDQuOTI5Njc5OSwxMS4zNjYxMTI1IDQuODM0MDgwMjYsMTEuMDczNjEyNSBDNC4yOTQyMjM0Niw5LjQyNjYxMjUgMi43NTc4ODA5OCw4LjMxMjg2MjUgMS4wMjQ3MTU3Miw4LjMxMjg2MjUgTDAuNzA5Nzk5MjUxLDguMzEyODYyNSBDMC4zMTk1Mjc3NzMsOC4zMTI4NjI1IDAuMDAwMTEyNSw3Ljk5MzM2MjUgMC4wMDAxMTI1LDcuNjAyOTg3NSBMMC4wMDAxMTI1LDQuNjM3NDg3NSBDMC4wMDAxMTI1LDQuMjQ3MTEyNSAwLjMxOTUyNzc3MywzLjkyNzYxMjUgMC43MDk3OTkyNTEsMy45Mjc2MTI1IEwxLjAyNDcxNTcyLDMuOTI3NjEyNSBDMi43NTc4ODA5OCwzLjkyNzYxMjUgNC4yOTQyMjM0NiwyLjgxMzg2MjUgNC44MzQwODAyNiwxLjE2Njg2MjUgQzQuOTI5Njc5OSwwLjg3NDM2MjUgNS4yMDE4NTc3LDAuNjc3NDg3NSA1LjUwNzc3NjU1LDAuNjc3NDg3NSBMNi44MzE1NTA0MSwwLjY3NzQ4NzUgQzcuMjIyOTQ2NTksMC42Nzc0ODc1IDcuNTQwMTEyNDYsMC45OTQ3Mzc1IDcuNTQwMTEyNDYsMS4zODczNjI1IiBpZD0iRmlsbC0xIiBmaWxsPSIjQ0Y2M0NGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4yNSw0Ljg2NDUxMjUgQzkuOTM4NSw1LjU1NDEzNzUgOS45Mzg1LDYuNjg1ODg3NSA5LjI1LDcuMzc1NTEyNSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/vol-slider/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/vol-slider/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/vol-slider/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! css-loader!./hover.css */ "./node_modules/css-loader/index.js!./src/addons/addons/vol-slider/hover.css");
/* harmony import */ var _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _url_loader_loud_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./loud.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/loud.svg");
/* harmony import */ var _url_loader_mute_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./mute.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/mute.svg");
/* harmony import */ var _url_loader_quiet_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./quiet.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/vol-slider/quiet.svg");
/* generated by pull.js */






var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "hover.css": _css_loader_hover_css__WEBPACK_IMPORTED_MODULE_2___default.a,
  "loud.svg": _url_loader_loud_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "mute.svg": _url_loader_mute_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "quiet.svg": _url_loader_quiet_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/vol-slider/loud.svg":
/*!***********************************************!*\
  !*** ./src/addons/addons/vol-slider/loud.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bG91bmRlcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJsb3VuZGVyIj4KICAgICAgICAgICAgPGcgaWQ9ImxvdWRlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi4wMDAwMDAsIDQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi43MDQxLDIuMTIyMSBMNi43MDQxLDEwLjUzNjEgQzYuNzA0MSwxMC44ODUxIDYuNDIyMSwxMS4xNjcxIDYuMDc0MSwxMS4xNjcxIEw0Ljg5NzEsMTEuMTY3MSBDNC42MjUxLDExLjE2NzEgNC4zODMxLDEwLjk5MjEgNC4yOTgxLDEwLjczMjEgQzMuODE4MSw5LjI2ODEgMi40NTIxLDguMjc4MSAwLjkxMTEsOC4yNzgxIEwwLjYzMTEsOC4yNzgxIEMwLjI4NDEsOC4yNzgxIDAuMDAwMSw3Ljk5NDEgMC4wMDAxLDcuNjQ3MSBMMC4wMDAxLDUuMDExMSBDMC4wMDAxLDQuNjY0MSAwLjI4NDEsNC4zODAxIDAuNjMxMSw0LjM4MDEgTDAuOTExMSw0LjM4MDEgQzIuNDUyMSw0LjM4MDEgMy44MTgxLDMuMzkwMSA0LjI5ODEsMS45MjYxIEM0LjM4MzEsMS42NjYxIDQuNjI1MSwxLjQ5MTEgNC44OTcxLDEuNDkxMSBMNi4wNzQxLDEuNDkxMSBDNi40MjIxLDEuNDkxMSA2LjcwNDEsMS43NzMxIDYuNzA0MSwyLjEyMjEiIGlkPSJGaWxsLTEiIGZpbGw9IiNDRjYzQ0YiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik05LjExNzIsNS4yMTI5IEM5LjcyOTIsNS44MjU5IDkuNzI5Miw2LjgzMTkgOS4xMTcyLDcuNDQ0OSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS4zNDg2LDIuOTgxNSBDMTMuMTk2Niw0LjgyOTUgMTMuMTk2Niw3LjgyOTUgMTEuMzQ4Niw5LjY3NjUiIGlkPSJTdHJva2UtNSIgc3Ryb2tlPSIjQ0Y2M0NGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTMuNTgsMC43NTAxIEMxNi42NjMsMy44MzIxIDE2LjY2Myw4LjgyNjEgMTMuNTgsMTEuOTA4MSIgaWQ9IlN0cm9rZS03IiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"

/***/ }),

/***/ "./src/addons/addons/vol-slider/mute.svg":
/*!***********************************************!*\
  !*** ./src/addons/addons/vol-slider/mute.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Tb3VuZC9FZmZlY3RzL011dGU8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iU291bmQvRWZmZWN0cy9NdXRlIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjQ0Y2M0NGIiBkPSJNMTMuNDU0MTc0OSw1LjA0ODE1MjQzIEwxNS42MjgxMTY4LDIuODc0MjEwNTQgQzE1LjkyMTAxLDIuNTgxMzE3MzIgMTYuMzk1ODgzNywyLjU4MTMxNzMyIDE2LjY4ODc3NywyLjg3NDIxMDU0IEMxNi45ODE2NzAyLDMuMTY3MTAzNzYgMTYuOTgxNjcwMiwzLjY0MTk3NzQ5IDE2LjY4ODc3NywzLjkzNDg3MDcxIEw0LjUzMDMzMDA5LDE2LjA5MzMxNzYgQzQuMjM3NDM2ODcsMTYuMzg2MjEwOCAzLjc2MjU2MzEzLDE2LjM4NjIxMDggMy40Njk2Njk5MSwxNi4wOTMzMTc2IEMzLjE3Njc3NjcsMTUuODAwNDI0NCAzLjE3Njc3NjcsMTUuMzI1NTUwNiAzLjQ2OTY2OTkxLDE1LjAzMjY1NzQgTDYuMzEyMTQ5MzIsMTIuMTkwMTc4IEM2LjEyNDExOTEsMTIuMDYyMTM3OSA2LDExLjg0NjMzMzEgNiwxMS42MDI5ODc1IEw2LDguNjM3NDg3NSBDNiw4LjI0NzExMjUgNi4zMTk0MTUyNyw3LjkyNzYxMjUgNi43MDk2ODY3NSw3LjkyNzYxMjUgTDcuMDI0NjAzMjIsNy45Mjc2MTI1IEM4Ljc1Nzc2ODQ4LDcuOTI3NjEyNSAxMC4yOTQxMTEsNi44MTM4NjI1IDEwLjgzMzk2NzgsNS4xNjY4NjI1IEMxMC45Mjk1Njc0LDQuODc0MzYyNSAxMS4yMDE3NDUyLDQuNjc3NDg3NSAxMS41MDc2NjQxLDQuNjc3NDg3NSBMMTIuODMxNDM3OSw0LjY3NzQ4NzUgQzEzLjEwMDI4NDQsNC42Nzc0ODc1IDEzLjMzNDEwNzUsNC44MjcxNzIwOCAxMy40NTQxNzQ5LDUuMDQ4MTUyNDMgWiBNMTMuNTQsOS4wODM2NDc3MSBMMTMuNTQsMTQuODUzMTEyNSBDMTMuNTQsMTUuMjQ1NzM3NSAxMy4yMjI4MzQxLDE1LjU2Mjk4NzUgMTIuODMxNDM3OSwxNS41NjI5ODc1IEwxMS41MDc2NjQxLDE1LjU2Mjk4NzUgQzExLjIwMTc0NTIsMTUuNTYyOTg3NSAxMC45Mjk1Njc0LDE1LjM2NjExMjUgMTAuODMzOTY3OCwxNS4wNzM2MTI1IEMxMC41NzczNzg1LDE0LjI5MDgwNzcgMTAuMDk1NjgxMywxMy42Mjg0NjUgOS40NzQ3MzUzMSwxMy4xNDg5MTI0IEwxMy41NCw5LjA4MzY0NzcxIFoiIGlkPSJwYXRoLTEiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/addons/addons/vol-slider/quiet.svg":
/*!************************************************!*\
  !*** ./src/addons/addons/vol-slider/quiet.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aWNvbi0tc29mdGVyPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9InNvZnRlciI+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMDAwMDAwLCA0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTcuNTQwMTEyNDYsMS4zODczNjI1IEw3LjU0MDExMjQ2LDEwLjg1MzExMjUgQzcuNTQwMTEyNDYsMTEuMjQ1NzM3NSA3LjIyMjk0NjU5LDExLjU2Mjk4NzUgNi44MzE1NTA0MSwxMS41NjI5ODc1IEw1LjUwNzc3NjU1LDExLjU2Mjk4NzUgQzUuMjAxODU3NywxMS41NjI5ODc1IDQuOTI5Njc5OSwxMS4zNjYxMTI1IDQuODM0MDgwMjYsMTEuMDczNjEyNSBDNC4yOTQyMjM0Niw5LjQyNjYxMjUgMi43NTc4ODA5OCw4LjMxMjg2MjUgMS4wMjQ3MTU3Miw4LjMxMjg2MjUgTDAuNzA5Nzk5MjUxLDguMzEyODYyNSBDMC4zMTk1Mjc3NzMsOC4zMTI4NjI1IDAuMDAwMTEyNSw3Ljk5MzM2MjUgMC4wMDAxMTI1LDcuNjAyOTg3NSBMMC4wMDAxMTI1LDQuNjM3NDg3NSBDMC4wMDAxMTI1LDQuMjQ3MTEyNSAwLjMxOTUyNzc3MywzLjkyNzYxMjUgMC43MDk3OTkyNTEsMy45Mjc2MTI1IEwxLjAyNDcxNTcyLDMuOTI3NjEyNSBDMi43NTc4ODA5OCwzLjkyNzYxMjUgNC4yOTQyMjM0NiwyLjgxMzg2MjUgNC44MzQwODAyNiwxLjE2Njg2MjUgQzQuOTI5Njc5OSwwLjg3NDM2MjUgNS4yMDE4NTc3LDAuNjc3NDg3NSA1LjUwNzc3NjU1LDAuNjc3NDg3NSBMNi44MzE1NTA0MSwwLjY3NzQ4NzUgQzcuMjIyOTQ2NTksMC42Nzc0ODc1IDcuNTQwMTEyNDYsMC45OTQ3Mzc1IDcuNTQwMTEyNDYsMS4zODczNjI1IiBpZD0iRmlsbC0xIiBmaWxsPSIjQ0Y2M0NGIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4yNSw0Ljg2NDUxMjUgQzkuOTM4NSw1LjU1NDEzNzUgOS45Mzg1LDYuNjg1ODg3NSA5LjI1LDcuMzc1NTEyNSIgaWQ9IlN0cm9rZS0zIiBzdHJva2U9IiNDRjYzQ0YiIHN0cm9rZS13aWR0aD0iMS43NSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/addons/addons/vol-slider/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/vol-slider/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/vol-slider/module.js");
/* harmony import */ var _libraries_common_cs_small_stage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/small-stage.js */ "./src/addons/libraries/common/cs/small-stage.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, vm, icon, updateIcon, slider, container, innerContainer;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console;
          vm = addon.tab.traps.vm;
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setup"])(vm);
          icon = document.createElement("div");
          icon.className = "sa-vol-slider-icon";
          icon.addEventListener("click", function () {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setMuted"])(!Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["isMuted"])());
          });
          updateIcon = function updateIcon() {
            var newVolume = Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])();
            if (newVolume === 0) {
              icon.dataset.icon = "mute";
            } else if (newVolume < 0.5) {
              icon.dataset.icon = "quiet";
            } else {
              icon.dataset.icon = "loud";
            }
          };
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["onVolumeChanged"])(updateIcon);
          slider = document.createElement("input");
          slider.className = "sa-vol-slider-input";
          slider.type = "range";
          slider.min = 0;
          slider.max = 1;
          slider.step = 0.02;
          slider.addEventListener("input", function (e) {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(+e.target.value);
          });
          slider.addEventListener("change", function (e) {
            // Only commit unmute volume after the user finishes moving the slider
            if (!Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["isMuted"])()) {
              Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setUnmutedVolume"])(Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])());
            }
          });
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["onVolumeChanged"])(function () {
            var newVolume = Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["getVolume"])();
            if (newVolume !== +slider.value) {
              slider.value = newVolume;
            }
          });
          Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(addon.settings.get("defVol") / 100);
          container = document.createElement("div");
          container.className = "sa-vol-slider";
          // Nested elements are needed for hover animation - see hover.css
          innerContainer = document.createElement("div");
          innerContainer.className = "sa-vol-slider-inner";
          innerContainer.appendChild(icon);
          innerContainer.appendChild(slider);
          container.appendChild(innerContainer);
          addon.tab.displayNoneWhileDisabled(container, {
            display: "flex"
          });
          Object(_libraries_common_cs_small_stage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
          addon.self.addEventListener("disabled", function () {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(1);
          });
          addon.self.addEventListener("reenabled", function () {
            Object(_module_js__WEBPACK_IMPORTED_MODULE_0__["setVolume"])(addon.settings.get("defVol") / 100);
          });
        case 1:
          if (false) {}
          _context.n = 2;
          return addon.tab.waitForElement("[class^='green-flag_green-flag']", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
          });
        case 2:
          addon.tab.displayNoneWhileDisabled(container, {
            display: "flex"
          });
          addon.tab.appendToSharedSpace({
            space: "afterStopButton",
            element: container,
            order: 0
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

/***/ }),

/***/ "./src/addons/libraries/common/cs/small-stage.js":
/*!*******************************************************!*\
  !*** ./src/addons/libraries/common/cs/small-stage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addSmallStageClass; });
function addSmallStageClass() {
  // TW: no-op; sa-small-stage class is handled by scratch-gui
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-vol-slider.js.map