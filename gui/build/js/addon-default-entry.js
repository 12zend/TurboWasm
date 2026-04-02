(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-default-entry"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/color-picker/style.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-color-picker {\n  display: flex;\n}\n\n.sa-color-picker-code {\n  margin: 8px 0;\n}\n\n.sa-color-picker-paint {\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n\n.sa-color-picker > .sa-color-picker-color {\n  border: none;\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  padding: 0;\n  padding-left: 0.6rem;\n  padding-right: 0.4rem;\n  margin-left: 0.5rem;\n  outline: none;\n  box-sizing: border-box;\n  width: 3rem;\n  height: 2rem;\n}\n\n.sa-color-picker > .sa-color-picker-text {\n  box-sizing: border-box;\n  width: calc(150px - 3rem);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-color {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  margin-left: 0;\n  margin-right: 0.5rem;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-text {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbody.sa-hide-eye-dropper-background div[class*=\"stage_color-picker-background\"] {\n  /* Do not show eye dropper background if the color picker is \"fake\" */\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-comment-previews/userstyle.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-comment-preview-outer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000000;\n  pointer-events: none;\n}\n\n.sa-comment-preview-inner {\n  width: calc(200px - 16px);\n  max-height: calc(132px - 8px);\n  padding: 8px;\n  overflow: hidden;\n\n  font-size: 12px;\n  white-space: pre-wrap;\n  pointer-events: none;\n\n  color: rgb(87, 94, 117);\n  background-color: rgb(255 255 255 / 90%);\n  border-style: none;\n  border-radius: 8px;\n  filter: drop-shadow(0px 5px 5px rgb(0 0 0 / 10%));\n\n  transform: perspective(200px);\n}\n\n@supports (backdrop-filter: blur(16px)) {\n  .sa-comment-preview-inner {\n    background-color: rgb(255 255 255 / 75%);\n    backdrop-filter: blur(16px);\n  }\n}\n\n.sa-comment-preview-fade {\n  transition:\n    opacity 0.1s,\n    filter 0.1s,\n    transform 0.1s linear;\n}\n\n.sa-comment-preview-hidden {\n  opacity: 0;\n  filter: none;\n  transform: perspective(200px) translateZ(-20px);\n}\n\n.sa-comment-preview-reduce-transparency {\n  background-color: rgb(255 255 255);\n  backdrop-filter: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-searchable-dropdowns/userscript.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-dropdown-searchbar {\n  width: 100%;\n  box-sizing: border-box;\n  /* based on styles for the title input */\n  color: white;\n  background-color: hsla(0, 100%, 100%, 0.25);\n  border: 1px solid hsla(0, 0%, 0%, 0.15);\n  padding: 0.5rem;\n  outline: none;\n  transition: 0.25s ease-out;\n  font-size: 13px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.u-dropdown-searchbar:hover {\n  background-color: hsla(0, 100%, 100%, 0.5);\n}\n.u-dropdown-searchbar:focus {\n  background-color: white;\n  color: black;\n}\n.blocklyDropDownDiv .goog-menu {\n  overflow-x: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/compatibility.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Imported by other addons */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-primary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-primary);\n  --sa-block-text: var(--editorTheme3-blockText, white);\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-primary);\n  --sa-block-text-on-bright-background: var(--editorTheme3-blockText, white);\n  --sa-block-input-color: var(--editorTheme3-inputColor, white);\n  --sa-block-input-text: var(--editorTheme3-inputColor-text, #575e75);\n}\n\n.sa-block-color-motion {\n  --sa-block-background-primary: var(--editorTheme3-motion-primary, #4c97ff);\n  --sa-block-background-secondary: var(--editorTheme3-motion-secondary, #4280d7);\n  --sa-block-background-tertiary: var(--editorTheme3-motion-tertiary, #3373cc);\n  --sa-block-field-background: var(--editorTheme3-motion-field, #3373cc);\n}\n\n.sa-block-color-looks {\n  --sa-block-background-primary: var(--editorTheme3-looks-primary, #9966ff);\n  --sa-block-background-secondary: var(--editorTheme3-looks-secondary, #855cd6);\n  --sa-block-background-tertiary: var(--editorTheme3-looks-tertiary, #774dcb);\n  --sa-block-field-background: var(--editorTheme3-looks-field, #774dcb);\n}\n\n.sa-block-color-sounds {\n  --sa-block-background-primary: var(--editorTheme3-sounds-primary, #cf63cf);\n  --sa-block-background-secondary: var(--editorTheme3-sounds-secondary, #c94fc9);\n  --sa-block-background-tertiary: var(--editorTheme3-sounds-tertiary, #bd42bd);\n  --sa-block-field-background: var(--editorTheme3-sounds-field, #bd42bd);\n}\n\n.sa-block-color-events {\n  --sa-block-background-primary: var(--editorTheme3-event-primary, #ffbf00);\n  --sa-block-background-secondary: var(--editorTheme3-event-secondary, #e6ac00);\n  --sa-block-background-tertiary: var(--editorTheme3-event-tertiary, #cc9900);\n  --sa-block-field-background: var(--editorTheme3-event-field, #cc9900);\n}\n\n.sa-block-color-control {\n  --sa-block-background-primary: var(--editorTheme3-control-primary, #ffab19);\n  --sa-block-background-secondary: var(--editorTheme3-control-secondary, #ec9c13);\n  --sa-block-background-tertiary: var(--editorTheme3-control-tertiary, #cf8b17);\n  --sa-block-field-background: var(--editorTheme3-control-field, #cf8b17);\n}\n\n.sa-block-color-sensing {\n  --sa-block-background-primary: var(--editorTheme3-sensing-primary, #5cb1d6);\n  --sa-block-background-secondary: var(--editorTheme3-sensing-secondary, #47a8d1);\n  --sa-block-background-tertiary: var(--editorTheme3-sensing-tertiary, #2e8eb8);\n  --sa-block-field-background: var(--editorTheme3-sensing-field, #2e8eb8);\n}\n\n.sa-block-color-operators {\n  --sa-block-background-primary: var(--editorTheme3-operators-primary, #59c059);\n  --sa-block-background-secondary: var(--editorTheme3-operators-secondary, #46b946);\n  --sa-block-background-tertiary: var(--editorTheme3-operators-tertiary, #389438);\n  --sa-block-field-background: var(--editorTheme3-operators-field, #389438);\n}\n\n.sa-block-color-data {\n  --sa-block-background-primary: var(--editorTheme3-data-primary, #ff8c1a);\n  --sa-block-background-secondary: var(--editorTheme3-data-secondary, #ff8000);\n  --sa-block-background-tertiary: var(--editorTheme3-data-tertiary, #db6e00);\n  --sa-block-field-background: var(--editorTheme3-data-field, #db6e00);\n}\n\n.sa-block-color-data-lists,\n.sa-block-color-list {\n  --sa-block-background-primary: var(--editorTheme3-data_lists-primary, #ff661a);\n  --sa-block-background-secondary: var(--editorTheme3-data_lists-secondary, #ff5500);\n  --sa-block-background-tertiary: var(--editorTheme3-data_lists-tertiary, #e64d00);\n  --sa-block-field-background: var(--editorTheme3-data_lists-field, #e64d00);\n}\n\n.sa-block-color-more,\n.sa-block-color-null {\n  --sa-block-background-primary: var(--editorTheme3-more-primary, #ff6680);\n  --sa-block-background-secondary: var(--editorTheme3-more-secondary, #ff4d6a);\n  --sa-block-background-tertiary: var(--editorTheme3-more-tertiary, #ff3355);\n  --sa-block-field-background: var(--editorTheme3-more-field, #ff3355);\n}\n\n.sa-block-color-pen {\n  --sa-block-background-primary: var(--editorTheme3-pen-primary, #0fbd8c);\n  --sa-block-background-secondary: var(--editorTheme3-pen-secondary, #0da57a);\n  --sa-block-background-tertiary: var(--editorTheme3-pen-tertiary, #0b8e69);\n  --sa-block-field-background: var(--editorTheme3-pen-field, #0b8e69);\n}\n\n.sa-block-color-addon-custom-block {\n  --sa-block-background-primary: var(--editorTheme3-addons-primary, #29beb8);\n  --sa-block-background-secondary: var(--editorTheme3-addons-secondary, #3aa8a4);\n  --sa-block-background-tertiary: var(--editorTheme3-addons-tertiary, #3aa8a4);\n  --sa-block-field-background: var(--editorTheme3-addons-field, #3aa8a4);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/find-bar/userstyle.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, ".sa-find-bar {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  height: 100%;\n  margin-left: 1em;\n}\n.sa-find-bar[hidden] {\n  /* !important to override displayNoneWhileDisabled */\n  display: none !important;\n}\n\n.sa-find-wrapper {\n  overflow: visible;\n  position: relative;\n  height: 2rem;\n  width: 100%;\n  max-width: 16em;\n}\n\n.sa-find-dropdown-out {\n  display: block;\n  top: -6px;\n  z-index: 100;\n  width: 100%;\n  max-width: 16em;\n  position: relative;\n  padding: 4px;\n  border: none;\n  border-radius: 4px;\n  margin-top: 6px;\n}\n\n.sa-find-dropdown-out.visible {\n  position: absolute;\n  width: 16em;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  background-color: var(--ui-modal-background);\n  outline: 1px solid var(--ui-black-transparent);\n}\n\n/* We need to modify Scratch styles so that the place where the find bar is injected */\n/* has actually correct size information, which is used to make the find bar not cover up controls */\n[class*=\"gui_tab-list_\"] {\n  width: 100%;\n}\n[class*=\"gui_tab_\"] {\n  flex-grow: 0;\n}\n\n.sa-find-input {\n  width: 100%;\n  box-sizing: border-box !important;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.4em;\n}\n\n.sa-find-input:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n.sa-find-dropdown {\n  display: none;\n  position: relative;\n  padding: 0.2em 0;\n  font-size: 0.75rem;\n  line-height: 1;\n  overflow-y: auto;\n  min-height: 128px;\n  max-height: 65vh;\n  user-select: none;\n  max-width: 100%;\n  margin-top: 6px;\n  border: none;\n}\n\n.sa-find-dropdown-out.visible > .sa-find-dropdown {\n  display: block;\n}\n\n.sa-find-dropdown > li {\n  display: block;\n  padding: 0.5em 0.3em;\n  white-space: nowrap;\n  margin: 0;\n  font-weight: bold;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sa-find-dropdown > li > b {\n  background-color: #aaffaa;\n  color: black;\n}\n\n/* Drop down items */\n.sa-find-dropdown > li:hover,\n.sa-find-dropdown > li.sel {\n  color: var(--sa-block-text-on-bright-background);\n  cursor: pointer;\n}\n\n.sa-find-dropdown > li::before {\n  content: \"\\25CF   \"; /* ● */\n}\n\n.sa-find-flag {\n  color: #4cbf56;\n}\n/* .sa-find-dropdown added for specificity */\n.sa-find-dropdown > .sa-find-flag:hover,\n.sa-find-dropdown > .sa-find-flag.sel {\n  background-color: #4cbf56;\n  color: white;\n}\n\n.sa-find-dropdown .sa-block-color {\n  color: var(--sa-block-colored-text);\n}\n.sa-find-dropdown .sa-block-color:hover,\n.sa-find-dropdown .sa-block-color.sel {\n  background-color: var(--sa-block-bright-background);\n}\n\n.sa-find-carousel {\n  font-weight: normal;\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n  background-color: inherit;\n  z-index: 1;\n  padding: 0;\n}\n\n.sa-find-carousel-control {\n  padding: 0 6px;\n}\n\n.sa-find-carousel-control:hover {\n  color: #ffff80;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/folders/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-folders-contextmenu-item {\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[sa-folders-context-type=\"folder\"] .react-contextmenu > :not(.sa-ctx-menu) {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/middle-click-popup/userstyle.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, ".sa-mcp-root {\n  display: flex;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n  position: absolute;\n  min-width: 100px;\n  background-color: var(--ui-modal-background);\n  border-radius: 4px;\n  box-shadow:\n    rgba(0, 0, 0, 0.3) 0 0 3px,\n    rgba(0, 0, 0, 0.2) 0 3px 10px;\n\n  z-index: 999;\n}\n\n.sa-mcp-container {\n  display: flex;\n  flex-flow: column;\n  top: -6px;\n  z-index: 100;\n  position: absolute;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  background-color: var(--ui-modal-background);\n  outline: 1px solid var(--ui-black-transparent);\n  border: none;\n  border-radius: 4px;\n}\n\n.sa-mcp-input-wrapper {\n  position: relative;\n  margin: 4px;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  box-sizing: border-box !important;\n  height: 1.5rem;\n  min-height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n}\n\n.sa-mcp-input-wrapper:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n.sa-mcp-input-wrapper[data-error=\"true\"] {\n  border-color: red;\n}\n\n.sa-mcp-input-wrapper > input {\n  position: absolute;\n  border: 0;\n  background-color: transparent;\n  outline: none;\n  width: 100%;\n  height: 100%;\n  line-height: 100%;\n  box-sizing: border-box;\n}\n\n.sa-mcp-input-suggestion {\n  color: hsla(225, 15%, 40%, 0.65);\n}\n\n.sa-mcp-preview-container {\n  flex: auto;\n  overflow-y: scroll;\n}\n\n.sa-mcp-root /* <-- specificity */ .sa-mcp-preview-container {\n  scrollbar-width: none;\n}\n\n.sa-mcp-preview-container::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.sa-mcp-preview-blocks {\n  width: 100%;\n  min-height: 100%;\n  /* https://stackoverflow.com/a/22166728/8448397 */\n  float: left;\n}\n\n.sa-mcp-preview-scrollbar {\n  position: absolute;\n  width: 11px;\n  right: 0;\n  bottom: 0;\n}\n\n.sa-mcp-preview-block-bg {\n  width: 100%;\n  fill: transparent;\n  cursor: grab;\n}\n\n.sa-mcp-preview-block {\n  filter: brightness(95%);\n  cursor: grab;\n}\n\n.sa-mcp-preview-block-selection {\n  filter: brightness(103%);\n}\n\n.sa-mcp-preview-block-bg-selection {\n  fill: #7774;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/onion-skinning/style.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-onion-button {\n  position: relative;\n}\n.sa-onion-button:focus-within {\n  background-color: var(--editorDarkMode-primary-transparent35, hsla(260, 60%, 60%, 0.35));\n}\n.sa-onion-image[data-image=\"toggle\"] {\n  filter: var(--filter-icon-white);\n}\n.sa-onion-image[data-image=\"settings\"] {\n  filter: var(--filter-icon-black);\n}\n.sa-onion-button[data-enabled=\"true\"] .sa-onion-image {\n  filter: brightness(0) invert(1);\n}\n.sa-onion-button[data-enabled=\"true\"] {\n  color: white;\n  background-color: var(--looks-secondary);\n}\n\n.sa-onion-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-onion-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-onion-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  border: 1px solid var(--ui-black-transparent);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-modal-background);\n  color: var(--ui-text-primary);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-onion-settings[data-visible=\"true\"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.sa-onion-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n  gap: 0.25em;\n}\n\n.sa-onion-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-onion-settings-input::-webkit-outer-spin-button,\n.sa-onion-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-onion-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-onion-settings-polygon {\n  fill: var(--ui-modal-background);\n  stroke: var(--ui-black-transparent);\n}\n\n.sa-onion-settings-label {\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/pick-colors-from-stage/style.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-stage-color-picker-picking [class^=\"stage_color-picker-background_\"] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/reorder-custom-inputs/arrows.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklyTextShiftArrow {\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  margin-left: -12.5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9Im9wYWNpdHk6Ljc1O2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0iTTU2IDE2djk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4zNzYgLTIuMzc2KSBzY2FsZSguMjI0NjIpIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6LjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNDAgMzJ2NjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouMjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNMjQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNzU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNzIgMTZ2OTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik04OCAzMnY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMzc2IC0yLjM3Nikgc2NhbGUoLjIyNDYyKSIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5Oi4yNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik0xMDQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iI2JmYmZiZiIgZD0iTTM5LjYzMi0uNTc2Yy4wNy0uMDQ2LjE4Ny0uMDIzLjIxLjA3bC42MDYgMi40OTJzMS40OSAxLjA5NSAxLjkzMyAxLjg2M2MuNzQ1IDEuMjgxLjc2OCAyLjMzLjc2OCAyLjMzczEuNjU0LjQ4OCAxLjkzMyAxLjgxNmMuMjggMS4zMjctLjc0NSAzLjg0My01LjEyMyA0LjcwNS00LjM3OS44NjEtNy44OTYtLjMyNy05LjU1LTIuOTgyLTEuNjUzLTIuNjU1Ljk1Ni01LjgyMi44MTYtNS42MzZsLS40OS00LjE2OWMtLjAyMy0uMDkzLjA5NC0uMTYzLjE4Ny0uMTE2bDIuODE4IDEuODRzMS4wNDgtLjM5NiAyLjE0My0uNDQzYTcuMDEgNy4wMSAwIDAgMSAxLjc0Ny4wOTN6IiBzdHlsZT0ib3BhY2l0eTouNTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTQ3LjM2NSA2LjUyOGMtMS4wOTUuODg1LTIuNzcyLjkwOC0yLjc3Mi45MDhtMi40NjkgMS43Yy0xLjQ2Ny4xMTctMi4zNzYtLjMyNi0yLjM3Ni0uMzI2TTI4LjY2MyA2LjQ1OHMyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNWMtMS4wMDIuMzk2LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ib3BhY2l0eTouNTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9IiNiZmJmYmYiIGQ9Ik00MS45NjEgMS43NTNjLjA3LS4wNDYuMTg3LS4wMjMuMjEuMDdsLjYwNiAyLjQ5MnMxLjQ5IDEuMDk1IDEuOTMzIDEuODYzYy43NDUgMS4yODEuNzY4IDIuMzMuNzY4IDIuMzNzMS42NTQuNDg4IDEuOTMzIDEuODE2Yy4yOCAxLjMyNy0uNzQ1IDMuODQzLTUuMTIzIDQuNzA1LTQuMzc5Ljg2MS03Ljg5Ni0uMzI3LTkuNTUtMi45ODItMS42NTMtMi42NTUuOTU2LTUuODIyLjgxNi01LjYzNmwtLjQ5LTQuMTY5Yy0uMDIzLS4wOTMuMDk0LS4xNjMuMTg3LS4xMTZsMi44MTggMS44NHMxLjA0OC0uMzk2IDIuMTQzLS40NDNhNy4wMSA3LjAxIDAgMCAxIDEuNzQ3LjA5M3oiIHN0eWxlPSJvcGFjaXR5Oi43NTttaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMxNjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTQ5LjY5NCA4Ljg1N2MtMS4wOTUuODg1LTIuNzcyLjkwOC0yLjc3Mi45MDhtMi40NjkgMS43Yy0xLjQ2Ny4xMTctMi4zNzYtLjMyNi0yLjM3Ni0uMzI2TTMwLjk5MiA4Ljc4N3MyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNWMtMS4wMDIuMzk2LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ib3BhY2l0eTouNzU7bWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiLz48cGF0aCBmaWxsPSIjYmZiZmJmIiBkPSJNNDQuMjkgNC4wODJjLjA3LS4wNDcuMTg2LS4wMjQuMjEuMDdsLjYwNSAyLjQ5MnMxLjQ5IDEuMDk0IDEuOTMzIDEuODYzYy43NDUgMS4yOC43NjkgMi4zMjkuNzY5IDIuMzI5czEuNjUzLjQ4OSAxLjkzMyAxLjgxNmMuMjggMS4zMjgtLjc0NSAzLjg0My01LjEyNCA0LjcwNS00LjM3OC44NjItNy44OTUtLjMyNi05LjU0OS0yLjk4MS0xLjY1My0yLjY1NS45NTUtNS44MjMuODE1LTUuNjM2bC0uNDg5LTQuMTdjLS4wMjMtLjA5Mi4wOTMtLjE2Mi4xODctLjExNmwyLjgxOCAxLjg0czEuMDQ4LS4zOTYgMi4xNDItLjQ0MmE3LjAxIDcuMDEgMCAwIDEgMS43NDcuMDkzeiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOiNmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDEwMjY7c3Ryb2tlLXdpZHRoOi45MzE2O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNNTIuMDIyIDExLjE4NWMtMS4wOTQuODg1LTIuNzcxLjkwOC0yLjc3MS45MDhtMi40NjggMS43Yy0xLjQ2Ny4xMTctMi4zNzUtLjMyNS0yLjM3NS0uMzI1TTMzLjMyIDExLjExNXMyLjAwMy42NTIgMi44MTggMS4zNzRtLjA3LjgxNmMtMS4wMDEuMzk1LTIuNzI1LjE0LTIuNzI1LjE0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMTY7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjAiLz48ZyBzdHlsZT0ib3BhY2l0eTouMTg5ODU0Ij48cGF0aCBkPSJNMS4yNDMgOC41YS42MzcuNjM3IDAgMCAwLS40NSAxLjA4NmwuMy4zYy4yNDItLjM1Mi41NDYtLjY1OC44OTgtLjlsLS4yOTctLjNhLjYzNi42MzYgMCAwIDAtLjQ1LS4xODVaIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC4wNCAtMi42NDcpIi8+PHBhdGggZD0iTTE1LjExNCAxOS41MDZhMy41MDEgMy41MDEgMCAxIDEtNy4wMDMgMCAzLjUwMSAzLjUwMSAwIDAgMSA3LjAwMyAwem0tNy4zOTItNy4zMThhMy41IDMuNSAwIDEgMCAuNDA2IDYuOTg1IDMuNSAzLjUgMCAwIDEgMy4xNS0zLjE1IDMuNSAzLjUgMCAwIDAtMy41NTYtMy44MzV6bS0zLjc0Ni0zLjgyYTMuNTAxIDMuNTAxIDAgMSAwIC4zMzYgNi45ODQgMy41MDIgMy41MDIgMCAwIDEgMy4xNDgtMy4xNDggMy41IDMuNSAwIDAgMC0zLjQ4NC0zLjgzNnoiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjA0IC0yLjY0NykiLz48cGF0aCBkPSJNMTQuNDk3IDIxLjQ5MWMtLjI0My4zNTItLjU1LjY1Ni0uOTAyLjg5OWwzLjA4NCAzLjA4NGEuNjM4LjYzOCAwIDAgMCAuOSAwIC42MzcuNjM3IDAgMCAwIDAtLjl6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC4wNCAtMi42NDcpIi8+PC9nPjxnIHN0eWxlPSJvcGFjaXR5Oi44MDU1MyI+PGcgc3R5bGU9Im9wYWNpdHk6LjU4NTkyOCI+PHBhdGggZD0iTTEuMjQzIDguNWEuNjM3LjYzNyAwIDAgMC0uNDUgMS4wODZsLjMuM2MuMjQyLS4zNTIuNTQ2LS42NTguODk4LS45bC0uMjk3LS4zYS42MzYuNjM2IDAgMCAwLS40NS0uMTg1WiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOiMwMDEwMjY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOi4xOTY0OTI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzQ5NiAwIDAgMS4wMzQ5NiAyLjc3NSAtNS4xNykiLz48cGF0aCBkPSJNMTUuMTE0IDE5LjUwNmEzLjUwMSAzLjUwMSAwIDEgMS03LjAwMyAwIDMuNTAxIDMuNTAxIDAgMCAxIDcuMDAzIDB6bS03LjM5Mi03LjMxOGEzLjUgMy41IDAgMSAwIC40MDYgNi45ODUgMy41IDMuNSAwIDAgMSAzLjE1LTMuMTUgMy41IDMuNSAwIDAgMC0zLjU1Ni0zLjgzNXptLTMuNzQ2LTMuODJhMy41MDEgMy41MDEgMCAxIDAgLjMzNiA2Ljk4NCAzLjUwMiAzLjUwMiAwIDAgMSAzLjE0OC0zLjE0OCAzLjUgMy41IDAgMCAwLTMuNDg0LTMuODM2eiIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOm5vcm1hbDtmaWxsOm5vbmU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOm5vbnplcm87c3Ryb2tlOiMwMDEwMjY7c3Ryb2tlLXdpZHRoOi45MzI7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1kYXNob2Zmc2V0OjA7c3Ryb2tlLW9wYWNpdHk6MSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMzQ5NiAwIDAgMS4wMzQ5NiAyLjc3NSAtNS4xNykiLz48cGF0aCBkPSJNMTQuNDk3IDIxLjQ5MWMtLjI0My4zNTItLjU1LjY1Ni0uOTAyLjg5OWwzLjA4NCAzLjA4NGEuNjM4LjYzOCAwIDAgMCAuOSAwIC42MzcuNjM3IDAgMCAwIDAtLjl6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IDIuNzc1IC01LjE3KSIvPjwvZz48L2c+PHBhdGggZmlsbD0iI2Q5OWU4MiIgZD0iTTIxLjkwNyAxOS4xM2EuNjM2LjYzNiAwIDAgMS0uNDUtLjE4NUw1LjU3MiAzLjA1OGEuNjM3LjYzNyAwIDAgMSAuOS0uOWwxNS44ODUgMTUuODg2YS42MzcuNjM3IDAgMCAxLS40NSAxLjA4N3oiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDojMDAxMDI2O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDouMTk2NDkyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjYxNyAtMS4zMykiLz48cGF0aCBmaWxsPSIjZmNiMWUzIiBkPSJNMTIuMjUzIDUuMzRhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDB6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZlZmVmZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PHBhdGggZmlsbD0iI2ZmZDk4MyIgZD0iTTExLjc2OCAxMi41NjZhMy41IDMuNSAwIDEgMSAxLjYxLTYuODEzIDMuNSAzLjUgMCAwIDEtMS42MSA2LjgxM3oiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDojZmVmZWZkO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpub256ZXJvO3N0cm9rZTojMDAxMDI2O3N0cm9rZS13aWR0aDouOTMyO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowO3N0cm9rZS1vcGFjaXR5OjEiIHRyYW5zZm9ybT0ibWF0cml4KDEuMDM0OTYgMCAwIDEuMDM0OTYgLjYxNyAtMS4zMykiLz48cGF0aCBmaWxsPSIjYTZkMzg4IiBkPSJNMTkuODkyIDEyLjk3N2EzLjUwMSAzLjUwMSAwIDEgMS03LjAwMyAwIDMuNTAxIDMuNTAxIDAgMCAxIDcuMDAzIDB6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZlZmVmZDtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6IzAwMTAyNjtzdHJva2Utd2lkdGg6LjkzMjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PHBhdGggZmlsbD0iI2Q5OWU4MiIgZD0iTTIxLjkwNyAxOS4xM2EuNjM2LjYzNiAwIDAgMS0uNDUtLjE4NWwtMy44OTgtMy45YS42MzYuNjM2IDAgMSAxIC45LS45bDMuODk4IDMuOWEuNjM3LjYzNyAwIDAgMS0uNDUgMS4wODZ6IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6IzAwMTAyNjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6bm9uemVybztzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6LjE5NjQ5MjtzdHJva2UtbGluZWNhcDpidXR0O3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjAzNDk2IDAgMCAxLjAzNDk2IC42MTcgLTEuMzMpIi8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/bitmap-copy/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console;
          if (addon.tab.redux.state) {
            _context.n = 1;
            break;
          }
          return _context.a(2, console.warn("Redux is not available!"));
        case 1:
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (_ref3) {
            var detail = _ref3.detail;
            if (addon.self.disabled) return;
            var e = detail;
            if (!e.action || e.action.type !== "scratch-paint/clipboard/SET") return;
            var items = e.next.scratchPaint.clipboard.items;
            if (items.length !== 1) return;
            var firstItem = items[0];
            // TODO vector support
            if (!Array.isArray(firstItem) || firstItem[0] !== "Raster") return console.log("copied element is vector");
            var dataURL = firstItem[1].source;
            addon.tab.copyImage(dataURL).then(function () {
              return console.log("Image successfully copied");
            })["catch"](function (e) {
              return console.error("Image could not be copied: ".concat(e));
            });
          });
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/_runtime_entry.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/_runtime_entry.js ***!
  \******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-cherry-picking/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/userscript.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/userscript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-duplicate/module.js */ "./src/addons/addons/block-duplicate/module.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, update;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console;
          update = function update() {
            _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["setCherryPicking"](!addon.self.disabled, addon.settings.get("invertDrag"));
          };
          addon.self.addEventListener("disabled", update);
          addon.self.addEventListener("reenabled", update);
          addon.settings.addEventListener("change", update);
          update();
          _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/block-duplicate/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-duplicate/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-duplicate/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-duplicate/module.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/block-duplicate/module.js ***!
  \*****************************************************/
/*! exports provided: setCherryPicking, setDuplication, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCherryPicking", function() { return setCherryPicking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuplication", function() { return setDuplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var enableCherryPicking = false;
var invertCherryPicking = false;
function setCherryPicking(newEnabled, newInverted) {
  enableCherryPicking = newEnabled;
  // If cherry picking is disabled, also disable invert. Duplicating blocks can still cause
  // this setting to be used.
  invertCherryPicking = newEnabled && newInverted;
}
var enableDuplication = false;
function setDuplication(newEnabled) {
  enableDuplication = newEnabled;
}

// mostRecentEvent_ is sometimes a fake event, so we can't rely on reading its properties.
var ctrlOrMetaPressed = false;
var altPressed = false;
document.addEventListener("mousedown", function (e) {
  ctrlOrMetaPressed = e.ctrlKey || e.metaKey;
  altPressed = e.altKey;
}, {
  capture: true
});
var loaded = false;
function load(_x) {
  return _load.apply(this, arguments);
}
function _load() {
  _load = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(addon) {
    var ScratchBlocks, originalStartDraggingBlock;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          if (!loaded) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          loaded = true;
          _context.n = 2;
          return addon.tab.traps.getBlockly();
        case 2:
          ScratchBlocks = _context.v;
          // https://github.com/scratchfoundation/scratch-blocks/blob/912b8cc728bea8fd91af85078c64fcdbfe21c87a/core/gesture.js#L454
          originalStartDraggingBlock = ScratchBlocks.Gesture.prototype.startDraggingBlock_;
          ScratchBlocks.Gesture.prototype.startDraggingBlock_ = function () {
            var block = this.targetBlock_;

            // Scratch uses fake mouse events to implement right click > duplicate
            var isRightClickDuplicate = !(this.mostRecentEvent_ instanceof MouseEvent);
            var isDuplicating = enableDuplication && altPressed && !isRightClickDuplicate && !this.flyout_ && !this.shouldDuplicateOnDrag_ && this.targetBlock_.type !== "procedures_definition";
            var isCherryPickingInverted = invertCherryPicking && !isRightClickDuplicate && block.getParent();
            var canCherryPick = enableCherryPicking || isDuplicating;
            var isCherryPicking = canCherryPick && ctrlOrMetaPressed === !isCherryPickingInverted && !block.isShadow();
            if (isDuplicating || isCherryPicking) {
              if (!ScratchBlocks.Events.getGroup()) {
                // Scratch will disable grouping on its own later.
                ScratchBlocks.Events.setGroup(true);
              }
            }
            if (isDuplicating) {
              // Based on https://github.com/scratchfoundation/scratch-blocks/blob/feda366947432b9d82a4f212f43ff6d4ab6f252f/core/scratch_blocks_utils.js#L171
              // Setting this.shouldDuplicateOnDrag_ = true does NOT work because it doesn't call changeObscuredShadowIds
              this.startWorkspace_.setResizesEnabled(false);
              ScratchBlocks.Events.disable();
              var newBlock;
              try {
                var xmlBlock = ScratchBlocks.Xml.blockToDom(block);
                newBlock = ScratchBlocks.Xml.domToBlock(xmlBlock, this.startWorkspace_);
                ScratchBlocks.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
                var xy = block.getRelativeToSurfaceXY();
                newBlock.moveBy(xy.x, xy.y);
              } catch (e) {
                console.error(e);
              }
              ScratchBlocks.Events.enable();
              if (newBlock) {
                block = newBlock;
                this.targetBlock_ = newBlock;
                if (ScratchBlocks.Events.isEnabled()) {
                  ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockCreate(newBlock));
                }
              }
            }
            if (isCherryPicking) {
              if (isRightClickDuplicate || isDuplicating) {
                var nextBlock = block.getNextBlock();
                if (nextBlock) {
                  nextBlock.dispose();
                }
              }
              block.unplug(true);
            }
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return originalStartDraggingBlock.call.apply(originalStartDraggingBlock, [this].concat(args));
          };
        case 3:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _load.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/block-duplicate/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-duplicate/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/block-duplicate/module.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, update;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console;
          update = function update() {
            _module_js__WEBPACK_IMPORTED_MODULE_0__["setDuplication"](!addon.self.disabled);
          };
          addon.self.addEventListener("disabled", update);
          addon.self.addEventListener("reenabled", update);
          update();
          _module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/block-switching/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-switching/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-switching/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-switching/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-switching/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    var addon, console, msg, ScratchBlocks, vm, blockSwitches, procedureSwitches, noopSwitch, randomColor, buildSwitches, pasteBlockXML, getShadowFieldName, callIfFunction, menuCallbackFactory, uniques, parseArguments, getCustomBlocks;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          ScratchBlocks = _context.v;
          vm = addon.tab.traps.vm;
          blockSwitches = {};
          procedureSwitches = {};
          noopSwitch = {
            isNoop: true
          };
          randomColor = function randomColor() {
            var num = Math.floor(Math.random() * 256 * 256 * 256);
            return "#".concat(num.toString(16).padStart(6, "0"));
          };
          buildSwitches = function buildSwitches() {
            blockSwitches = {};
            procedureSwitches = {};
            if (addon.settings.get("motion")) {
              blockSwitches["motion_turnright"] = [noopSwitch, {
                opcode: "motion_turnleft"
              }];
              blockSwitches["motion_turnleft"] = [{
                opcode: "motion_turnright"
              }, noopSwitch];
              blockSwitches["motion_setx"] = [noopSwitch, {
                opcode: "motion_changexby",
                remapInputName: {
                  X: "DX"
                }
              }, {
                opcode: "motion_sety",
                remapInputName: {
                  X: "Y"
                }
              }, {
                opcode: "motion_changeyby",
                remapInputName: {
                  X: "DY"
                }
              }];
              blockSwitches["motion_changexby"] = [{
                opcode: "motion_setx",
                remapInputName: {
                  DX: "X"
                }
              }, noopSwitch, {
                opcode: "motion_sety",
                remapInputName: {
                  DX: "Y"
                }
              }, {
                opcode: "motion_changeyby",
                remapInputName: {
                  DX: "DY"
                }
              }];
              blockSwitches["motion_sety"] = [{
                opcode: "motion_setx",
                remapInputName: {
                  Y: "X"
                }
              }, {
                opcode: "motion_changexby",
                remapInputName: {
                  Y: "DX"
                }
              }, noopSwitch, {
                opcode: "motion_changeyby",
                remapInputName: {
                  Y: "DY"
                }
              }];
              blockSwitches["motion_changeyby"] = [{
                opcode: "motion_setx",
                remapInputName: {
                  DY: "X"
                }
              }, {
                opcode: "motion_changexby",
                remapInputName: {
                  DY: "DX"
                }
              }, {
                opcode: "motion_sety",
                remapInputName: {
                  DY: "Y"
                }
              }, noopSwitch];
              blockSwitches["motion_xposition"] = [noopSwitch, {
                opcode: "motion_yposition"
              }];
              blockSwitches["motion_yposition"] = [{
                opcode: "motion_xposition"
              }, noopSwitch];
            }
            if (addon.settings.get("looks")) {
              blockSwitches["looks_seteffectto"] = [noopSwitch, {
                opcode: "looks_changeeffectby",
                remapInputName: {
                  VALUE: "CHANGE"
                }
              }];
              blockSwitches["looks_changeeffectby"] = [{
                opcode: "looks_seteffectto",
                remapInputName: {
                  CHANGE: "VALUE"
                }
              }, noopSwitch];
              blockSwitches["looks_setsizeto"] = [noopSwitch, {
                opcode: "looks_changesizeby",
                remapInputName: {
                  SIZE: "CHANGE"
                }
              }];
              blockSwitches["looks_changesizeby"] = [{
                opcode: "looks_setsizeto",
                remapInputName: {
                  CHANGE: "SIZE"
                }
              }, noopSwitch];
              blockSwitches["looks_costumenumbername"] = [noopSwitch, {
                opcode: "looks_backdropnumbername"
              }];
              blockSwitches["looks_backdropnumbername"] = [{
                opcode: "looks_costumenumbername"
              }, noopSwitch];
              blockSwitches["looks_show"] = [noopSwitch, {
                opcode: "looks_hide"
              }];
              blockSwitches["looks_hide"] = [{
                opcode: "looks_show"
              }, noopSwitch];
              blockSwitches["looks_nextcostume"] = [noopSwitch, {
                opcode: "looks_nextbackdrop"
              }];
              blockSwitches["looks_nextbackdrop"] = [{
                opcode: "looks_nextcostume"
              }, noopSwitch];
              blockSwitches["looks_say"] = [noopSwitch, {
                opcode: "looks_sayforsecs",
                createInputs: {
                  SECS: {
                    shadowType: "math_number",
                    value: "2"
                  }
                }
              }, {
                opcode: "looks_think"
              }, {
                opcode: "looks_thinkforsecs",
                createInputs: {
                  SECS: {
                    shadowType: "math_number",
                    value: "2"
                  }
                }
              }];
              blockSwitches["looks_think"] = [{
                opcode: "looks_say"
              }, {
                opcode: "looks_sayforsecs",
                createInputs: {
                  SECS: {
                    shadowType: "math_number",
                    value: "2"
                  }
                }
              }, noopSwitch, {
                opcode: "looks_thinkforsecs",
                createInputs: {
                  SECS: {
                    shadowType: "math_number",
                    value: "2"
                  }
                }
              }];
              blockSwitches["looks_sayforsecs"] = [{
                opcode: "looks_say",
                splitInputs: ["SECS"]
              }, {
                opcode: "looks_think",
                splitInputs: ["SECS"]
              }, noopSwitch, {
                opcode: "looks_thinkforsecs"
              }];
              blockSwitches["looks_thinkforsecs"] = [{
                opcode: "looks_say",
                splitInputs: ["SECS"]
              }, {
                opcode: "looks_think",
                splitInputs: ["SECS"]
              }, {
                opcode: "looks_sayforsecs"
              }, noopSwitch];
              blockSwitches["looks_switchbackdropto"] = [noopSwitch, {
                opcode: "looks_switchbackdroptoandwait"
              }];
              blockSwitches["looks_switchbackdroptoandwait"] = [{
                opcode: "looks_switchbackdropto"
              }, noopSwitch];
              blockSwitches["looks_gotofrontback"] = [noopSwitch, {
                opcode: "looks_goforwardbackwardlayers",
                remapInputName: {
                  FRONT_BACK: "FORWARD_BACKWARD"
                },
                mapFieldValues: {
                  FRONT_BACK: {
                    front: "forward",
                    back: "backward"
                  }
                },
                createInputs: {
                  NUM: {
                    shadowType: "math_integer",
                    value: "1"
                  }
                }
              }];
              blockSwitches["looks_goforwardbackwardlayers"] = [{
                opcode: "looks_gotofrontback",
                splitInputs: ["NUM"],
                remapInputName: {
                  FORWARD_BACKWARD: "FRONT_BACK"
                },
                mapFieldValues: {
                  FORWARD_BACKWARD: {
                    forward: "front",
                    backward: "back"
                  }
                }
              }, noopSwitch];
            }
            if (addon.settings.get("sound")) {
              blockSwitches["sound_play"] = [noopSwitch, {
                opcode: "sound_playuntildone"
              }];
              blockSwitches["sound_playuntildone"] = [{
                opcode: "sound_play"
              }, noopSwitch];
              blockSwitches["sound_seteffectto"] = [noopSwitch, {
                opcode: "sound_changeeffectby"
              }];
              blockSwitches["sound_changeeffectby"] = [{
                opcode: "sound_seteffectto"
              }, noopSwitch];
              blockSwitches["sound_setvolumeto"] = [noopSwitch, {
                opcode: "sound_changevolumeby"
              }];
              blockSwitches["sound_changevolumeby"] = [{
                opcode: "sound_setvolumeto"
              }, noopSwitch];
            }
            if (addon.settings.get("event")) {
              blockSwitches["event_broadcast"] = [noopSwitch, {
                opcode: "event_broadcastandwait"
              }];
              blockSwitches["event_broadcastandwait"] = [{
                opcode: "event_broadcast"
              }, noopSwitch];
            }
            if (addon.settings.get("control")) {
              blockSwitches["control_if"] = [noopSwitch, {
                opcode: "control_if_else"
              }];
              blockSwitches["control_if_else"] = [{
                opcode: "control_if",
                splitInputs: ["SUBSTACK2"]
              }, noopSwitch];
              blockSwitches["control_repeat_until"] = [noopSwitch, {
                opcode: "control_wait_until",
                splitInputs: ["SUBSTACK"]
              }, {
                opcode: "control_forever",
                splitInputs: ["CONDITION"]
              }];
              blockSwitches["control_forever"] = [{
                opcode: "control_repeat_until"
              }, noopSwitch];
              blockSwitches["control_wait_until"] = [{
                opcode: "control_repeat_until"
              }, noopSwitch];
            }
            if (addon.settings.get("operator")) {
              blockSwitches["operator_equals"] = [{
                opcode: "operator_gt"
              }, noopSwitch, {
                opcode: "operator_lt"
              }];
              blockSwitches["operator_gt"] = [noopSwitch, {
                opcode: "operator_equals"
              }, {
                opcode: "operator_lt"
              }];
              blockSwitches["operator_lt"] = [{
                opcode: "operator_gt"
              }, {
                opcode: "operator_equals"
              }, noopSwitch];
              blockSwitches["operator_add"] = [noopSwitch, {
                opcode: "operator_subtract"
              }, {
                opcode: "operator_multiply"
              }, {
                opcode: "operator_divide"
              }, {
                opcode: "operator_mod"
              }];
              blockSwitches["operator_subtract"] = [{
                opcode: "operator_add"
              }, noopSwitch, {
                opcode: "operator_multiply"
              }, {
                opcode: "operator_divide"
              }, {
                opcode: "operator_mod"
              }];
              blockSwitches["operator_multiply"] = [{
                opcode: "operator_add"
              }, {
                opcode: "operator_subtract"
              }, noopSwitch, {
                opcode: "operator_divide"
              }, {
                opcode: "operator_mod"
              }];
              blockSwitches["operator_divide"] = [{
                opcode: "operator_add"
              }, {
                opcode: "operator_subtract"
              }, {
                opcode: "operator_multiply"
              }, noopSwitch, {
                opcode: "operator_mod"
              }];
              blockSwitches["operator_mod"] = [{
                opcode: "operator_add"
              }, {
                opcode: "operator_subtract"
              }, {
                opcode: "operator_multiply"
              }, {
                opcode: "operator_divide"
              }, noopSwitch];
              blockSwitches["operator_and"] = [noopSwitch, {
                opcode: "operator_or"
              }];
              blockSwitches["operator_or"] = [{
                opcode: "operator_and"
              }, noopSwitch];
            }
            if (addon.settings.get("sensing")) {
              blockSwitches["sensing_mousex"] = [noopSwitch, {
                opcode: "sensing_mousey"
              }];
              blockSwitches["sensing_mousey"] = [{
                opcode: "sensing_mousex"
              }, noopSwitch];
              blockSwitches["sensing_touchingcolor"] = [noopSwitch, {
                opcode: "sensing_coloristouchingcolor",
                createInputs: {
                  COLOR2: {
                    shadowType: "colour_picker",
                    value: randomColor
                  }
                }
              }];
              blockSwitches["sensing_coloristouchingcolor"] = [{
                opcode: "sensing_touchingcolor",
                splitInputs: ["COLOR2"]
              }, noopSwitch];
            }
            if (addon.settings.get("data")) {
              blockSwitches["data_setvariableto"] = [noopSwitch, {
                opcode: "data_changevariableby",
                remapShadowType: {
                  VALUE: "math_number"
                }
              }];
              blockSwitches["data_changevariableby"] = [{
                opcode: "data_setvariableto",
                remapShadowType: {
                  VALUE: "text"
                }
              }, noopSwitch];
              blockSwitches["data_showvariable"] = [noopSwitch, {
                opcode: "data_hidevariable"
              }];
              blockSwitches["data_hidevariable"] = [{
                opcode: "data_showvariable"
              }, noopSwitch];
              blockSwitches["data_showlist"] = [noopSwitch, {
                opcode: "data_hidelist"
              }];
              blockSwitches["data_hidelist"] = [{
                opcode: "data_showlist"
              }, noopSwitch];
              blockSwitches["data_replaceitemoflist"] = [noopSwitch, {
                opcode: "data_insertatlist"
              }];
              blockSwitches["data_insertatlist"] = [{
                opcode: "data_replaceitemoflist"
              }, noopSwitch];
              blockSwitches["data_deleteoflist"] = [noopSwitch, {
                opcode: "data_deletealloflist",
                splitInputs: ["INDEX"]
              }];
              blockSwitches["data_deletealloflist"] = [{
                opcode: "data_deleteoflist",
                createInputs: {
                  INDEX: {
                    shadowType: "math_integer",
                    value: "1"
                  }
                }
              }, noopSwitch];
            }
            if (addon.settings.get("extension")) {
              blockSwitches["pen_penDown"] = [noopSwitch, {
                opcode: "pen_penUp"
              }];
              blockSwitches["pen_penUp"] = [{
                opcode: "pen_penDown"
              }, noopSwitch];
              blockSwitches["pen_setPenColorParamTo"] = [noopSwitch, {
                opcode: "pen_changePenColorParamBy"
              }];
              blockSwitches["pen_changePenColorParamBy"] = [{
                opcode: "pen_setPenColorParamTo"
              }, noopSwitch];
              blockSwitches["pen_setPenHueToNumber"] = [noopSwitch, {
                opcode: "pen_changePenHueBy"
              }];
              blockSwitches["pen_changePenHueBy"] = [{
                opcode: "pen_setPenHueToNumber"
              }, noopSwitch];
              blockSwitches["pen_setPenShadeToNumber"] = [noopSwitch, {
                opcode: "pen_changePenShadeBy"
              }];
              blockSwitches["pen_changePenShadeBy"] = [{
                opcode: "pen_setPenShadeToNumber"
              }, noopSwitch];
              blockSwitches["pen_setPenSizeTo"] = [noopSwitch, {
                opcode: "pen_changePenSizeBy"
              }];
              blockSwitches["pen_changePenSizeBy"] = [{
                opcode: "pen_setPenSizeTo"
              }, noopSwitch];
              blockSwitches["music_setTempo"] = [noopSwitch, {
                opcode: "music_changeTempo"
              }];
              blockSwitches["music_changeTempo"] = [{
                opcode: "music_setTempo"
              }, noopSwitch];
            }
            if (addon.settings.get("sa")) {
              var logProc = "\u200B\u200Blog\u200B\u200B %s";
              var warnProc = "\u200B\u200Bwarn\u200B\u200B %s";
              var errorProc = "\u200B\u200Berror\u200B\u200B %s";
              var logMessage = msg("debugger_log");
              var warnMessage = msg("debugger_warn");
              var errorMessage = msg("debugger_error");
              var logSwitch = {
                mutate: {
                  proccode: logProc
                },
                msg: logMessage
              };
              var warnSwitch = {
                mutate: {
                  proccode: warnProc
                },
                msg: warnMessage
              };
              var errorSwitch = {
                mutate: {
                  proccode: errorProc
                },
                msg: errorMessage
              };
              procedureSwitches[logProc] = [{
                msg: logMessage,
                isNoop: true
              }, warnSwitch, errorSwitch];
              procedureSwitches[warnProc] = [logSwitch, {
                msg: warnMessage,
                isNoop: true
              }, errorSwitch];
              procedureSwitches[errorProc] = [logSwitch, warnSwitch, {
                msg: errorMessage,
                isNoop: true
              }];
            }

            // Switching for these is implemented by Scratch. We only define them here to optionally add a border.
            // Because we don't implement the switching ourselves, this is not controlled by the data category option.
            blockSwitches["data_variable"] = [];
            blockSwitches["data_listcontents"] = [];
          };
          buildSwitches();
          addon.settings.addEventListener("change", buildSwitches);

          /**
           * @param {*} workspace
           * @param {Element} xmlBlock
           */
          pasteBlockXML = function pasteBlockXML(workspace, xmlBlock) {
            // Similar to https://github.com/scratchfoundation/scratch-blocks/blob/7575c9a0f2c267676569c4b102b76d77f35d9fd6/core/workspace_svg.js#L1020
            // but without the collision checking.
            var block = ScratchBlocks.Xml.domToBlock(xmlBlock, workspace);
            var x = +xmlBlock.getAttribute("x");
            var y = +xmlBlock.getAttribute("y");
            // Don't need to handle RTL here
            block.moveBy(x, y);
            return block;
          };
          /**
           * @param {string} shadowType The type of shadow eg. "math_number"
           * @returns {string} The name of the shadow's inner field that contains the user-visible value
           */
          getShadowFieldName = function getShadowFieldName(shadowType) {
            // This is non-comprehensive.
            if (shadowType === "text") {
              return "TEXT";
            }
            if (shadowType === "colour_picker") {
              return "COLOUR";
            }
            return "NUM";
          };
          /**
           * @template T
           * @param {T|()=>T} value
           * @returns {T}
           */
          callIfFunction = function callIfFunction(value) {
            if (typeof value === "function") {
              return value();
            }
            return value;
          };
          menuCallbackFactory = function menuCallbackFactory(block, opcodeData) {
            return function () {
              if (opcodeData.isNoop) {
                return;
              }
              if (opcodeData.fieldValue) {
                block.setFieldValue(opcodeData.fieldValue, "VALUE");
                return;
              }
              try {
                ScratchBlocks.Events.setGroup(true);
                var workspace = block.workspace;
                var blocksToBringToForeground = [];
                // Split inputs before we clone the block.
                if (opcodeData.splitInputs) {
                  var _iterator = _createForOfIteratorHelper(opcodeData.splitInputs),
                    _step;
                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var inputName = _step.value;
                      var input = block.getInput(inputName);
                      if (!input) {
                        continue;
                      }
                      var connection = input.connection;
                      if (!connection) {
                        continue;
                      }
                      if (connection.isConnected()) {
                        var targetBlock = connection.targetBlock();
                        if (targetBlock.isShadow()) {
                          // Deleting shadows is handled later.
                        } else {
                          connection.disconnect();
                          blocksToBringToForeground.push(targetBlock);
                        }
                      }
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }

                // Make a copy of the block with the proper type set.
                // It doesn't seem to be possible to change a Block's type after it's created, so we'll just make a new block instead.
                var xml = ScratchBlocks.Xml.blockToDom(block);
                // blockToDomWithXY's handling of RTL is strange, so we encode the position ourselves.
                var position = block.getRelativeToSurfaceXY();
                xml.setAttribute("x", position.x);
                xml.setAttribute("y", position.y);
                if (opcodeData.opcode) {
                  xml.setAttribute("type", opcodeData.opcode);
                }
                var parentBlock = block.getParent();
                var parentConnection;
                var blockConnectionType;
                if (parentBlock) {
                  // If the block has a parent, find the parent -> child connection that will be reattached later.
                  var parentConnections = parentBlock.getConnections_();
                  parentConnection = parentConnections.find(function (c) {
                    return c.targetConnection && c.targetConnection.sourceBlock_ === block;
                  });
                  // There's two types of connections from child -> parent. We need to figure out which one is used.
                  var blockConnections = block.getConnections_();
                  var blockToParentConnection = blockConnections.find(function (c) {
                    return c.targetConnection && c.targetConnection.sourceBlock_ === parentBlock;
                  });
                  blockConnectionType = blockToParentConnection.type;
                }

                // Array.from creates a clone of the children list. This is important as we may remove
                // children as we iterate.
                for (var _i = 0, _Array$from = Array.from(xml.children); _i < _Array$from.length; _i++) {
                  var child = _Array$from[_i];
                  var oldName = child.getAttribute("name");

                  // Any inputs that were supposed to be split that were not should be removed.
                  // (eg. shadow inputs)
                  if (opcodeData.splitInputs && opcodeData.splitInputs.includes(oldName)) {
                    xml.removeChild(child);
                    continue;
                  }
                  var newName = opcodeData.remapInputName && opcodeData.remapInputName[oldName];
                  if (newName) {
                    child.setAttribute("name", newName);
                  }
                  var newShadowType = opcodeData.remapShadowType && opcodeData.remapShadowType[oldName];
                  if (newShadowType) {
                    var valueNode = child.firstChild;
                    var fieldNode = valueNode.firstChild;
                    valueNode.setAttribute("type", newShadowType);
                    fieldNode.setAttribute("name", getShadowFieldName(newShadowType));
                  }
                  var fieldValueMap = opcodeData.mapFieldValues && opcodeData.mapFieldValues[oldName];
                  if (fieldValueMap && child.tagName === "FIELD") {
                    var oldValue = child.innerText;
                    var newValue = fieldValueMap[oldValue];
                    if (typeof newValue === "string") {
                      child.innerText = newValue;
                    }
                  }
                }
                if (opcodeData.mutate) {
                  var mutation = xml.querySelector("mutation");
                  for (var _i2 = 0, _Object$entries = Object.entries(opcodeData.mutate); _i2 < _Object$entries.length; _i2++) {
                    var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                      key = _Object$entries$_i[0],
                      value = _Object$entries$_i[1];
                    mutation.setAttribute(key, value);
                  }
                }
                if (opcodeData.createInputs) {
                  for (var _i3 = 0, _Object$entries2 = Object.entries(opcodeData.createInputs); _i3 < _Object$entries2.length; _i3++) {
                    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                      _inputName = _Object$entries2$_i[0],
                      inputData = _Object$entries2$_i[1];
                    var valueElement = document.createElement("value");
                    valueElement.setAttribute("name", _inputName);
                    var shadowElement = document.createElement("shadow");
                    shadowElement.setAttribute("type", inputData.shadowType);
                    var shadowFieldElement = document.createElement("field");
                    shadowFieldElement.setAttribute("name", getShadowFieldName(inputData.shadowType));
                    shadowFieldElement.innerText = callIfFunction(inputData.value);
                    shadowElement.appendChild(shadowFieldElement);
                    valueElement.appendChild(shadowElement);
                    xml.appendChild(valueElement);
                  }
                }

                // Remove the old block and insert the new one.
                block.dispose();
                var newBlock = pasteBlockXML(workspace, xml);
                if (parentConnection) {
                  // Search for the same type of connection on the new block as on the old block.
                  var newBlockConnections = newBlock.getConnections_();
                  var newBlockConnection = newBlockConnections.find(function (c) {
                    return c.type === blockConnectionType;
                  });
                  newBlockConnection.connect(parentConnection);
                }
                for (var _i4 = 0, _blocksToBringToForeg = blocksToBringToForeground; _i4 < _blocksToBringToForeg.length; _i4++) {
                  var otherBlock = _blocksToBringToForeg[_i4];
                  // By re-appending the element, we move it to the end, which will make it display
                  // on top.
                  var svgRoot = otherBlock.getSvgRoot();
                  svgRoot.parentNode.appendChild(svgRoot);
                }
              } finally {
                ScratchBlocks.Events.setGroup(false);
              }
            };
          };
          uniques = function uniques(array) {
            return _toConsumableArray(new Set(array));
          };
          addon.tab.createBlockContextMenu(function (items, block) {
            if (!addon.self.disabled) {
              var type = block.type;
              var switches = blockSwitches[block.type] || [];
              var customArgsMode = addon.settings.get("customargs") ? addon.settings.get("customargsmode") : "off";
              if (customArgsMode !== "off" && ["argument_reporter_boolean", "argument_reporter_string_number"].includes(type) &&
              // if the arg is a shadow, it's in a procedures_prototype so we don't want it to be switchable
              !block.isShadow()) {
                var customBlocks = getCustomBlocks();
                if (customArgsMode === "all") {
                  switch (type) {
                    case "argument_reporter_string_number":
                      switches = Object.values(customBlocks).map(function (cb) {
                        return cb.stringArgs;
                      }).flat(1);
                      break;
                    case "argument_reporter_boolean":
                      switches = Object.values(customBlocks).map(function (cb) {
                        return cb.boolArgs;
                      }).flat(1);
                      break;
                  }
                } else if (customArgsMode === "defOnly") {
                  var root = block.getRootBlock();
                  if (root.type !== "procedures_definition") return items;
                  var customBlockObj = customBlocks[root.getChildren(true)[0].getProcCode()];
                  switch (type) {
                    case "argument_reporter_string_number":
                      switches = customBlockObj.stringArgs;
                      break;
                    case "argument_reporter_boolean":
                      switches = customBlockObj.boolArgs;
                      break;
                  }
                }
                var currentValue = block.getFieldValue("VALUE");
                switches = uniques(switches).map(function (i) {
                  return {
                    isNoop: i === currentValue,
                    fieldValue: i,
                    msg: i
                  };
                });
              }
              if (block.type === "procedures_call") {
                var proccode = block.getProcCode();
                if (procedureSwitches[proccode]) {
                  switches = procedureSwitches[proccode];
                }
              }
              if (!addon.settings.get("noop")) {
                switches = switches.filter(function (i) {
                  return !i.isNoop;
                });
              }
              switches.forEach(function (opcodeData, i) {
                var makeSpaceItemIndex = items.findIndex(function (obj) {
                  return obj._isDevtoolsFirstItem;
                });
                var insertBeforeIndex = makeSpaceItemIndex !== -1 ?
                // If "make space" button exists, add own items before it
                makeSpaceItemIndex :
                // If there's no such button, insert at end
                items.length;
                var text = opcodeData.msg ? opcodeData.msg : opcodeData.opcode ? msg(opcodeData.opcode) : msg(block.type);
                items.splice(insertBeforeIndex, 0, {
                  enabled: true,
                  text: text,
                  callback: menuCallbackFactory(block, opcodeData),
                  separator: i === 0
                });
              });
              if (block.type === "data_variable" || block.type === "data_listcontents") {
                // Add top border to first variable (if it exists)
                var delBlockIndex = items.findIndex(function (item) {
                  return item.text === ScratchBlocks.Msg.DELETE_BLOCK;
                });
                // firstVariableItem might be undefined, a variable to switch to,
                // or an item added by editor-devtools (or any addon before this one)
                var firstVariableItem = items[delBlockIndex + 1];
                if (firstVariableItem) firstVariableItem.separator = true;
              }
            }
            return items;
          }, {
            blocks: true
          });

          // https://github.com/scratchfoundation/scratch-blocks/blob/abbfe93136fef57fdfb9a077198b0bc64726f012/blocks_vertical/procedures.js#L207-L215
          // Returns a list like ["%s", "%d"]
          parseArguments = function parseArguments(code) {
            return code.split(/(?=[^\\]%[nbs])/g).map(function (i) {
              return i.trim();
            }).filter(function (i) {
              return i.charAt(0) === "%";
            }).map(function (i) {
              return i.substring(0, 2);
            });
          };
          getCustomBlocks = function getCustomBlocks() {
            var customBlocks = {};
            var target = vm.editingTarget;
            Object.values(target.blocks._blocks).filter(function (block) {
              return block.opcode === "procedures_prototype";
            }).forEach(function (block) {
              var procCode = block.mutation.proccode;
              var argumentNames = JSON.parse(block.mutation.argumentnames);
              // argumentdefaults is unreliable, so we have to parse the procedure code to determine argument types
              var parsedArguments = parseArguments(procCode);
              var stringArgs = [];
              var boolArgs = [];
              for (var i = 0; i < argumentNames.length; i++) {
                if (parsedArguments[i] === "%b") {
                  boolArgs.push(argumentNames[i]);
                } else {
                  stringArgs.push(argumentNames[i]);
                }
              }
              customBlocks[procCode] = {
                stringArgs: stringArgs,
                boolArgs: boolArgs
              };
            });
            return customBlocks;
          };
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/color-picker/_runtime_entry.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/color-picker/_runtime_entry.js ***!
  \**********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/color-picker/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/color-picker/code-editor.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/color-picker/code-editor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libraries/common/cs/normalize-color.js */ "./src/addons/libraries/common/cs/normalize-color.js");
/* harmony import */ var _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/rate-limiter.js */ "./src/addons/libraries/common/cs/rate-limiter.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }


/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, msg, rateLimiter, setColor, addColorPicker, ScratchBlocks, originalShowEditor, originalCallbackFactory;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          // 250-ms rate limit
          rateLimiter = new _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__["default"](250);
          setColor = function setColor(hex, element) {
            hex = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(hex);
            if (!addon.tab.redux.state || !addon.tab.redux.state.scratchGui) return;
            // The only way to reliably set color is to invoke eye dropper via click()
            // then faking that the eye dropper reported the value.
            var _onEyeDropperClosed = function onEyeDropperClosed(_ref3) {
              var detail = _ref3.detail;
              if (detail.action.type !== "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER") return;
              addon.tab.redux.removeEventListener("statechanged", _onEyeDropperClosed);
              setTimeout(function () {
                document.body.classList.remove("sa-hide-eye-dropper-background");
              }, 50);
            };
            var _onEyeDropperOpened = function onEyeDropperOpened(_ref4) {
              var detail = _ref4.detail;
              if (detail.action.type !== "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER") return;
              addon.tab.redux.removeEventListener("statechanged", _onEyeDropperOpened);
              addon.tab.redux.addEventListener("statechanged", _onEyeDropperClosed);
              setTimeout(function () {
                addon.tab.redux.dispatch({
                  type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
                  color: hex
                });
              }, 50);
            };
            addon.tab.redux.addEventListener("statechanged", _onEyeDropperOpened);
            document.body.classList.add("sa-hide-eye-dropper-background");
            element.click();
          };
          addColorPicker = function addColorPicker(editor) {
            var element = document.querySelector("button.scratchEyedropper");
            rateLimiter.abort(false);
            addon.tab.redux.initialize();
            var defaultColor = editor.getValue();
            var saColorPicker = Object.assign(document.createElement("div"), {
              className: "sa-color-picker sa-color-picker-code"
            });
            addon.tab.displayNoneWhileDisabled(saColorPicker, {
              display: "flex"
            });
            var saColorPickerColor = Object.assign(document.createElement("input"), {
              className: "sa-color-picker-color sa-color-picker-code-color",
              type: "color",
              value: defaultColor || "#000000"
            });
            var saColorPickerText = Object.assign(document.createElement("input"), {
              className: addon.tab.scratchClass("input_input-form", {
                others: "sa-color-picker-text sa-color-picker-code-text"
              }),
              type: "text",
              pattern: "^#?([0-9a-fA-F]{3}){1,2}$",
              placeholder: msg("hex"),
              value: defaultColor || ""
            });
            saColorPickerColor.addEventListener("input", function () {
              return rateLimiter.limit(function () {
                return setColor(saColorPickerText.value = saColorPickerColor.value, element);
              });
            });
            saColorPickerText.addEventListener("change", function () {
              var value = saColorPickerText.value;
              if (!Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["getHexRegex"])().test(value)) return;
              setColor(saColorPickerColor.value = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(value), element);
            });
            saColorPicker.appendChild(saColorPickerColor);
            saColorPicker.appendChild(saColorPickerText);
            element.parentElement.insertBefore(saColorPicker, element);
          };
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          ScratchBlocks = _context.v;
          originalShowEditor = ScratchBlocks.FieldColourSlider.prototype.showEditor_;
          ScratchBlocks.FieldColourSlider.prototype.showEditor_ = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var r = originalShowEditor.call.apply(originalShowEditor, [this].concat(args));
            addColorPicker(this);
            return r;
          };
          originalCallbackFactory = ScratchBlocks.FieldColourSlider.prototype.sliderCallbackFactory_;
          ScratchBlocks.FieldColourSlider.prototype.sliderCallbackFactory_ = function () {
            var _this = this;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            var f = originalCallbackFactory.call.apply(originalCallbackFactory, [this].concat(args));
            return function (event) {
              var r = f(event);
              var div = ScratchBlocks.DropDownDiv.getContentDiv();
              if (div) {
                var saColorPickerColor = div.querySelector(".sa-color-picker-color.sa-color-picker-code-color");
                var saColorPickerText = div.querySelector(".sa-color-picker-text.sa-color-picker-code-text");
                if (!saColorPickerColor || !saColorPickerText) return r;
                var color = _this.getValue();
                saColorPickerColor.value = color || "#000000";
                saColorPickerText.value = color || "";
              }
              return r;
            };
          };
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/addons/addons/color-picker/userscript.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/color-picker/userscript.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-editor.js */ "./src/addons/addons/color-picker/code-editor.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(api) {
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          Object(_code_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(api);
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/_runtime_entry.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/_runtime_entry.js ***!
  \*********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-comment-previews/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/userscript.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/userscript.js ***!
  \*****************************************************************/
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
    var addon, console, vm, updateStyles, afterDelay, hoveredElement, showTimeout, mouseX, mouseY, doNotShowUntilMoveMouse, previewOuter, previewInner, getBlock, getComment, getProcedureDefinitionBlock, setText, updateMousePosition, hidePreview;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console;
          vm = addon.tab.traps.vm;
          updateStyles = function updateStyles() {
            previewInner.classList.toggle("sa-comment-preview-delay", addon.settings.get("delay") !== "none");
            previewInner.classList.toggle("sa-comment-preview-reduce-transparency", addon.settings.get("reduce-transparency"));
            previewInner.classList.toggle("sa-comment-preview-fade", !addon.settings.get("reduce-animation"));
          };
          afterDelay = function afterDelay(cb) {
            if (!previewInner.classList.contains("sa-comment-preview-hidden")) {
              // If not hidden, updating immediately is preferred
              cb();
              return;
            }
            var delay = addon.settings.get("delay");
            if (delay === "long") return setTimeout(cb, 500);
            if (delay === "short") return setTimeout(cb, 300);
            cb();
          };
          hoveredElement = null;
          showTimeout = null;
          mouseX = 0;
          mouseY = 0;
          doNotShowUntilMoveMouse = false;
          previewOuter = document.createElement("div");
          previewOuter.classList.add("sa-comment-preview-outer");
          previewInner = document.createElement("div");
          previewInner.classList.add("sa-comment-preview-inner");
          previewInner.classList.add("sa-comment-preview-hidden");
          updateStyles();
          addon.settings.addEventListener("change", updateStyles);
          addon.tab.displayNoneWhileDisabled(previewOuter);
          previewOuter.appendChild(previewInner);
          document.body.appendChild(previewOuter);
          getBlock = function getBlock(id) {
            return vm.editingTarget.blocks.getBlock(id) || vm.runtime.flyoutBlocks.getBlock(id);
          };
          getComment = function getComment(block) {
            return block && block.comment && vm.editingTarget.comments[block.comment];
          };
          getProcedureDefinitionBlock = function getProcedureDefinitionBlock(procCode) {
            var procedurePrototype = Object.values(vm.editingTarget.blocks._blocks).find(function (i) {
              return i.opcode === "procedures_prototype" && i.mutation.proccode === procCode;
            });
            if (procedurePrototype) {
              // Usually `parent` will exist but sometimes it doesn't
              if (procedurePrototype.parent) {
                return getBlock(procedurePrototype.parent);
              }
              var id = procedurePrototype.id;
              return Object.values(vm.editingTarget.blocks._blocks).find(function (i) {
                return i.opcode === "procedures_definition" && i.inputs.custom_block && i.inputs.custom_block.block === id;
              });
            }
            return null;
          };
          setText = function setText(text) {
            previewInner.innerText = text;
            previewInner.classList.remove("sa-comment-preview-hidden");
            updateMousePosition();
          };
          updateMousePosition = function updateMousePosition() {
            previewOuter.style.transform = "translate(".concat(mouseX + 8, "px, ").concat(mouseY + 8, "px)");
          };
          hidePreview = function hidePreview() {
            if (hoveredElement) {
              hoveredElement = null;
              previewInner.classList.add("sa-comment-preview-hidden");
            }
          };
          document.addEventListener("mouseover", function (e) {
            if (addon.self.disabled) {
              return;
            }
            clearTimeout(showTimeout);
            if (doNotShowUntilMoveMouse) {
              return;
            }
            var el = e.target.closest(".blocklyBubbleCanvas > g, .blocklyBlockCanvas .blocklyDraggable[data-id]");
            if (el === hoveredElement) {
              // Nothing to do.
              return;
            }
            if (!el) {
              hidePreview();
              return;
            }
            var text = null;
            if (addon.settings.get("hover-view") && e.target.closest(".blocklyBubbleCanvas > g") &&
            // Hovering over the thin line that connects comments to blocks should never show a preview
            !e.target.closest("line")) {
              var collapsedText = el.querySelector("text.scratchCommentText");
              if (collapsedText.getAttribute("display") !== "none") {
                var textarea = el.querySelector("textarea");
                text = textarea.value;
              }
            } else if (e.target.closest(".blocklyBlockCanvas .blocklyDraggable[data-id]")) {
              var id = el.dataset.id;
              var block = getBlock(id);
              var comment = getComment(block);
              if (addon.settings.get("hover-view-block") && comment) {
                text = comment.text;
              } else if (block && block.opcode === "procedures_call" && addon.settings.get("hover-view-procedure")) {
                var procCode = block.mutation.proccode;
                var procedureDefinitionBlock = getProcedureDefinitionBlock(procCode);
                var procedureComment = getComment(procedureDefinitionBlock);
                if (procedureComment) {
                  text = procedureComment.text;
                }
              }
            }
            if (text !== null && text.trim() !== "") {
              showTimeout = afterDelay(function () {
                hoveredElement = el;
                setText(text);
              });
            } else {
              hidePreview();
            }
          });
          document.addEventListener("mousemove", function (e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
            doNotShowUntilMoveMouse = false;
            if (addon.settings.get("follow-mouse") && !previewInner.classList.contains("sa-comment-preview-hidden")) {
              updateMousePosition();
            }
          });
          document.addEventListener("mousedown", function () {
            hidePreview();
            doNotShowUntilMoveMouse = true;
          }, {
            capture: true
          });
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DevTools.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DevTools.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DevTools; });
/* harmony import */ var _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelpers.js */ "./src/addons/addons/editor-devtools/DomHelpers.js");
/* harmony import */ var _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoGroup.js */ "./src/addons/addons/editor-devtools/UndoGroup.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// import ShowBroadcast from "./show-broadcast.js";


var DevTools = /*#__PURE__*/function () {
  function DevTools(addon, msg, m) {
    _classCallCheck(this, DevTools);
    this.addon = addon;
    this.msg = msg;
    this.m = m;
    /**
     * @type {VirtualMachine}
     */
    this.domHelpers = new _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon);
    this.codeTab = null;
    this.costTab = null;
    this.costTabBody = null;
    this.selVarID = null;
    this.canShare = false;
    this.mouseXY = {
      x: 0,
      y: 0
    };
  }
  return _createClass(DevTools, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var root;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              this.addContextMenus();
            case 1:
              if (false) {}
              _context.n = 2;
              return this.addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
                markAsSeen: true,
                reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
                reduxCondition: function reduxCondition(state) {
                  return !state.scratchGui.mode.isPlayerOnly;
                }
              });
            case 2:
              root = _context.v;
              this.initInner(root);
              _context.n = 1;
              break;
            case 3:
              return _context.a(2);
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "addContextMenus",
    value: function () {
      var _addContextMenus = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var _this = this;
        var blockly, oldCleanUpFunc, self, originalMsg;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              _context3.n = 1;
              return this.addon.tab.traps.getBlockly();
            case 1:
              blockly = _context3.v;
              oldCleanUpFunc = blockly.WorkspaceSvg.prototype.cleanUp;
              self = this;
              blockly.WorkspaceSvg.prototype.cleanUp = function () {
                if (self.addon.settings.get("enableCleanUpPlus")) {
                  self.doCleanUp();
                } else {
                  oldCleanUpFunc.call(this);
                }
              };
              originalMsg = blockly.Msg.CLEAN_UP;
              if (this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = this.m("clean-plus");
              this.addon.settings.addEventListener("change", function () {
                if (_this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = _this.m("clean-plus");else blockly.Msg.CLEAN_UP = originalMsg;
              });
              this.addon.tab.createBlockContextMenu(function (items, block) {
                items.push({
                  enabled: blockly.clipboardXml_,
                  text: _this.m("paste"),
                  separator: true,
                  _isDevtoolsFirstItem: true,
                  callback: function callback() {
                    var ids = _this.getTopBlockIDs();
                    document.dispatchEvent(new KeyboardEvent("keydown", {
                      keyCode: 86,
                      ctrlKey: true,
                      griff: true
                    }));
                    setTimeout(function () {
                      _this.beginDragOfNewBlocksNotInIDs(ids);
                    }, 10);
                  }
                });
                return items;
              }, {
                workspace: true
              });
              this.addon.tab.createBlockContextMenu(function (items, block) {
                items.push({
                  enabled: true,
                  text: _this.m("make-space"),
                  _isDevtoolsFirstItem: true,
                  callback: function callback() {
                    _this.doCleanUp(block);
                  },
                  separator: true
                }, {
                  enabled: true,
                  text: _this.m("copy-all"),
                  callback: function callback() {
                    _this.eventCopyClick(block);
                  },
                  separator: true
                }, {
                  enabled: true,
                  text: _this.m("copy-block"),
                  callback: function callback() {
                    _this.eventCopyClick(block, 1);
                  }
                }, {
                  enabled: true,
                  text: _this.m("cut-block"),
                  callback: function callback() {
                    _this.eventCopyClick(block, 2);
                  }
                });
                // const BROADCAST_BLOCKS = ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait"];
                // if (BROADCAST_BLOCKS.includes(block.type)) {
                //   // Show Broadcast
                //   const broadcastId = this.showBroadcastSingleton.getAssociatedBroadcastId(block.id);
                //   if (broadcastId) {
                //     ["Senders", "Receivers"].forEach((showKey, i) => {
                //       items.push({
                //         enabled: true,
                //         text: this.msg(`show-${showKey}`.toLowerCase()),
                //         callback: () => {
                //           this.showBroadcastSingleton[`show${showKey}`](broadcastId);
                //         },
                //         separator: i == 0,
                //       });
                //     });
                //   }
                // }
                return items;
              }, {
                blocks: true
              });
              this.addon.tab.createBlockContextMenu(function (items, block) {
                if (block.getCategory() === "data" || block.getCategory() === "data-lists") {
                  _this.selVarID = block.getVars()[0];
                  items.push({
                    enabled: true,
                    text: _this.m("swap", {
                      "var": block.getCategory() === "data" ? _this.m("variables") : _this.m("lists")
                    }),
                    callback: function () {
                      var _callback = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
                        var wksp, v, varName;
                        return _regenerator().w(function (_context2) {
                          while (1) switch (_context2.n) {
                            case 0:
                              wksp = _this.getWorkspace();
                              v = wksp.getVariableById(_this.selVarID); // prompt() returns Promise in desktop app
                              _context2.n = 1;
                              return window.prompt(_this.msg("replace", {
                                name: v.name
                              }));
                            case 1:
                              varName = _context2.v;
                              if (varName) {
                                _this.doReplaceVariable(_this.selVarID, varName, v.type);
                              }
                            case 2:
                              return _context2.a(2);
                          }
                        }, _callee2);
                      }));
                      function callback() {
                        return _callback.apply(this, arguments);
                      }
                      return callback;
                    }(),
                    separator: true
                  });
                }
                return items;
              }, {
                blocks: true,
                flyout: true
              });
            case 2:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function addContextMenus() {
        return _addContextMenus.apply(this, arguments);
      }
      return addContextMenus;
    }()
  }, {
    key: "getWorkspace",
    value: function getWorkspace() {
      return Blockly.getMainWorkspace();
    }
  }, {
    key: "isCostumeEditor",
    value: function isCostumeEditor() {
      return this.costTab.className.indexOf("gui_is-selected") >= 0;
    }

    /**
     * A nicely ordered version of the top blocks
     * @returns {[Blockly.Block]}
     */
  }, {
    key: "getTopBlocks",
    value: function getTopBlocks() {
      var result = this.getOrderedTopBlockColumns();
      var columns = result.cols;
      /**
       * @type {[[Blockly.Block]]}
       */
      var topBlocks = [];
      var _iterator = _createForOfIteratorHelper(columns),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var col = _step.value;
          topBlocks = topBlocks.concat(col.blocks);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return topBlocks;
    }

    /**
     * A much nicer way of laying out the blocks into columns
     */
  }, {
    key: "doCleanUp",
    value: function doCleanUp(block) {
      var _this2 = this;
      var workspace = this.getWorkspace();
      var makeSpaceForBlock = block && block.getRootBlock();
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(workspace);
      var result = this.getOrderedTopBlockColumns(true);
      var columns = result.cols;
      var orphanCount = result.orphans.blocks.length;
      if (orphanCount > 0 && !block) {
        var message = this.msg("orphaned", {
          count: orphanCount
        });
        if (confirm(message)) {
          var _iterator2 = _createForOfIteratorHelper(result.orphans.blocks),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _block = _step2.value;
              _block.dispose();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else {
          columns.unshift(result.orphans);
        }
      }
      var cursorX = 48;
      var maxWidths = result.maxWidths;
      var _iterator3 = _createForOfIteratorHelper(columns),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var column = _step3.value;
          var cursorY = 64;
          var maxWidth = 0;
          var _iterator9 = _createForOfIteratorHelper(column.blocks),
            _step9;
          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var _block2 = _step9.value;
              var extraWidth = _block2 === makeSpaceForBlock ? 380 : 0;
              var extraHeight = _block2 === makeSpaceForBlock ? 480 : 72;
              var xy = _block2.getRelativeToSurfaceXY();
              if (cursorX - xy.x !== 0 || cursorY - xy.y !== 0) {
                _block2.moveBy(cursorX - xy.x, cursorY - xy.y);
              }
              var heightWidth = _block2.getHeightWidth();
              cursorY += heightWidth.height + extraHeight;
              var maxWidthWithComments = maxWidths[_block2.id] || 0;
              maxWidth = Math.max(maxWidth, Math.max(heightWidth.width + extraWidth, maxWidthWithComments));
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
          cursorX += maxWidth + 96;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      var topComments = workspace.getTopComments();
      var _iterator4 = _createForOfIteratorHelper(topComments),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var comment = _step4.value;
          if (comment.setVisible) {
            comment.setVisible(false);
            comment.needsAutoPositioning_ = true;
            comment.setVisible(true);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      setTimeout(function () {
        // Locate unused local variables...
        var workspace = _this2.getWorkspace();
        var map = workspace.getVariableMap();
        var vars = map.getVariablesOfType("");
        var unusedLocals = [];
        var _iterator5 = _createForOfIteratorHelper(vars),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var row = _step5.value;
            if (row.isLocal) {
              var usages = map.getVariableUsesById(row.getId());
              if (!usages || usages.length === 0) {
                unusedLocals.push(row);
              }
            }
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        if (unusedLocals.length > 0) {
          var unusedCount = unusedLocals.length;
          var _message = _this2.msg("unused-var", {
            count: unusedCount
          });
          for (var i = 0; i < unusedLocals.length; i++) {
            var orphan = unusedLocals[i];
            if (i > 0) {
              _message += ", ";
            }
            _message += orphan.name;
          }
          if (confirm(_message)) {
            var _iterator6 = _createForOfIteratorHelper(unusedLocals),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _orphan = _step6.value;
                workspace.deleteVariableById(_orphan.getId());
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
        }

        // Locate unused local lists...
        var lists = map.getVariablesOfType("list");
        var unusedLists = [];
        var _iterator7 = _createForOfIteratorHelper(lists),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _row = _step7.value;
            if (_row.isLocal) {
              var _usages = map.getVariableUsesById(_row.getId());
              if (!_usages || _usages.length === 0) {
                unusedLists.push(_row);
              }
            }
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        if (unusedLists.length > 0) {
          var _unusedCount = unusedLists.length;
          var _message2 = _this2.msg("unused-list", {
            count: _unusedCount
          });
          for (var _i = 0; _i < unusedLists.length; _i++) {
            var _orphan2 = unusedLists[_i];
            if (_i > 0) {
              _message2 += ", ";
            }
            _message2 += _orphan2.name;
          }
          if (confirm(_message2)) {
            var _iterator8 = _createForOfIteratorHelper(unusedLists),
              _step8;
            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _orphan3 = _step8.value;
                workspace.deleteVariableById(_orphan3.getId());
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }
        _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(workspace);
      }, 100);
    }

    /**
     * Badly Orphaned - might want to delete these!
     * @param topBlock
     * @returns {boolean}
     */
  }, {
    key: "isBlockAnOrphan",
    value: function isBlockAnOrphan(topBlock) {
      return !!topBlock.outputConnection;
    }

    /**
     * Split the top blocks into ordered columns
     * @param separateOrphans true to keep all orphans separate
     * @returns {{orphans: {blocks: [Block], x: number, count: number}, cols: [Col]}}
     */
  }, {
    key: "getOrderedTopBlockColumns",
    value: function getOrderedTopBlockColumns(separateOrphans) {
      var w = this.getWorkspace();
      var topBlocks = w.getTopBlocks();
      var maxWidths = {};
      if (separateOrphans) {
        var topComments = w.getTopComments();

        // todo: tie comments to blocks... find widths and width of block stack row...
        var _iterator0 = _createForOfIteratorHelper(topComments),
          _step0;
        try {
          for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
            var comment = _step0.value;
            // comment.autoPosition_();
            // Hiding and showing repositions the comment right next to it's block - nice!
            if (comment.setVisible) {
              comment.setVisible(false);
              comment.needsAutoPositioning_ = true;
              comment.setVisible(true);

              // let bb = comment.block_.svgPath_.getBBox();
              var right = comment.getBoundingRectangle().bottomRight.x;

              // Get top block for stack...
              var root = comment.block_.getRootBlock();
              var left = root.getBoundingRectangle().topLeft.x;
              maxWidths[root.id] = Math.max(right - left, maxWidths[root.id] || 0);
            }
          }
        } catch (err) {
          _iterator0.e(err);
        } finally {
          _iterator0.f();
        }
      }

      // Default scratch ordering is horrid... Lets try something more clever.

      /**
       * @type {Col[]}
       */
      var cols = [];
      var TOLERANCE = 256;
      var orphans = {
        x: -999999,
        count: 0,
        blocks: []
      };
      var _iterator1 = _createForOfIteratorHelper(topBlocks),
        _step1;
      try {
        for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
          var topBlock = _step1.value;
          // let r = b.getBoundingRectangle();
          var position = topBlock.getRelativeToSurfaceXY();
          /**
           * @type {Col}
           */
          var bestCol = null;
          var bestError = TOLERANCE;
          if (separateOrphans && this.isBlockAnOrphan(topBlock)) {
            orphans.blocks.push(topBlock);
            continue;
          }

          // Find best columns
          var _iterator10 = _createForOfIteratorHelper(cols),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _col = _step10.value;
              var err = Math.abs(position.x - _col.x);
              if (err < bestError) {
                bestError = err;
                bestCol = _col;
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          if (bestCol) {
            // We found a column that we fitted into
            bestCol.x = (bestCol.x * bestCol.count + position.x) / ++bestCol.count; // re-average the columns as more items get added...
            bestCol.blocks.push(topBlock);
          } else {
            // Create a new column
            cols.push(new Col(position.x, 1, [topBlock]));
          }
        }

        // if (orphans.blocks.length > 0) {
        //     cols.push(orphans);
        // }

        // Sort columns, then blocks inside the columns
      } catch (err) {
        _iterator1.e(err);
      } finally {
        _iterator1.f();
      }
      cols.sort(function (a, b) {
        return a.x - b.x;
      });
      for (var _i2 = 0, _cols = cols; _i2 < _cols.length; _i2++) {
        var col = _cols[_i2];
        col.blocks.sort(function (a, b) {
          return a.getRelativeToSurfaceXY().y - b.getRelativeToSurfaceXY().y;
        });
      }
      return {
        cols: cols,
        orphans: orphans,
        maxWidths: maxWidths
      };
    }

    /**
     * Find all the uses of a named variable.
     * @param {string} id ID of the variable to find.
     * @return {!Array.<!Blockly.Block>} Array of block usages.
     */
  }, {
    key: "getVariableUsesById",
    value: function getVariableUsesById(id) {
      var uses = [];
      var topBlocks = this.getTopBlocks(true); // todo: Confirm this was the right getTopBlocks?
      var _iterator11 = _createForOfIteratorHelper(topBlocks),
        _step11;
      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var topBlock = _step11.value;
          /** @type {!Array<!Blockly.Block>} */
          var kids = topBlock.getDescendants();
          var _iterator12 = _createForOfIteratorHelper(kids),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var block = _step12.value;
              /** @type {!Array<!Blockly.VariableModel>} */
              var blockVariables = block.getVarModels();
              if (blockVariables) {
                var _iterator13 = _createForOfIteratorHelper(blockVariables),
                  _step13;
                try {
                  for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                    var blockVar = _step13.value;
                    if (blockVar.getId() === id) {
                      uses.push(block);
                    }
                  }
                } catch (err) {
                  _iterator13.e(err);
                } finally {
                  _iterator13.f();
                }
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
      return uses;
    }

    /**
     * Quick and dirty replace all instances of one variable / list with another variable / list
     * @param varId original variable name
     * @param newVarName new variable name
     * @param type type of variable ("" = variable, anything else is a list?
     */
  }, {
    key: "doReplaceVariable",
    value: function doReplaceVariable(varId, newVarName, type) {
      var wksp = this.getWorkspace();
      var v = wksp.getVariable(newVarName, type);
      if (!v) {
        alert(this.msg("var-not-exist"));
        return;
      }
      var newVId = v.getId();
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
      var blocks = this.getVariableUsesById(varId);
      var _iterator14 = _createForOfIteratorHelper(blocks),
        _step14;
      try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
          var block = _step14.value;
          try {
            if (type === "") {
              block.getField("VARIABLE").setValue(newVId);
            } else {
              block.getField("LIST").setValue(newVId);
            }
          } catch (e) {
            // ignore
          }
        }
      } catch (err) {
        _iterator14.e(err);
      } finally {
        _iterator14.f();
      }
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
    }

    /*
      function doInjectScripts(codeString) {
        let w = getWorkspace();
        let xml = new XML(); // document.implementation.createDocument(null, "xml");
        let x = xml.xmlDoc.firstChild;
         let tree = math.parse(codeString);
        console.log(tree);
         const binaryOperatorTypes = {
          add: "operator_add",
          subtract: "operator_subtract",
          this.multiply: "operator_multiply",
          divide: "operator_divide",
        };
         const BLOCK_TYPE = {
          number: "math_number",
          text: "text",
        };
         function translateMathToXml(x, tree, shadowType) {
          let xShadowField = null;
          if (shadowType) {
            let xShadow = xml.newXml(x, "shadow", { type: shadowType });
            if (shadowType === BLOCK_TYPE.number) {
              xShadowField = xml.newXml(xShadow, "field", { name: "NUM" });
            } else if (shadowType === BLOCK_TYPE.text) {
              xShadowField = xml.newXml(xShadow, "field", { name: "TEXT" });
            }
          }
           if (!tree || !tree.type) {
            return;
          }
           if (tree.type === "OperatorNode") {
            let operatorType = binaryOperatorTypes[tree.fn];
            if (operatorType) {
              let xOp = newXml(x, "block", { type: operatorType });
              translateMathToXml(xml.newXml(xOp, "value", { name: "NUM1" }), tree.args[0], BLOCK_TYPE.number);
              translateMathToXml(xml.newXml(xOp, "value", { name: "NUM2" }), tree.args[1], BLOCK_TYPE.number);
              return;
            }
             return;
          }
           if (tree.type === "ConstantNode") {
            // number or text in quotes
            if (xShadowField) {
              xml.setAttr(xShadowField, { text: tree.value });
            }
            return;
          }
           if (tree.type === "SymbolNode") {
            // variable
            let xVar = xml.newXml(x, "block", { type: "data_variable" });
            xml.newXml(xVar, "field", { name: "VARIABLE", text: tree.name });
            return;
          }
           if (tree.type === "FunctionNode") {
            // Method Call
            if (tree.fn.name === "join") {
              let xOp = newXml(x, "block", { type: "operator_join" });
              translateMathToXml(xml.newXml(xOp, "value", { name: "STRING1" }), tree.args[0], BLOCK_TYPE.text);
              translateMathToXml(xml.newXml(xOp, "value", { name: "STRING2" }), tree.args[1], BLOCK_TYPE.text);
              return;
            }
          }
        }
         translateMathToXml(x, tree);
        console.log(x);
         let ids = Blockly.Xml.domToWorkspace(x, w);
        console.log(ids);
      }
       */
    /*
      function clickInject(e) {
        let codeString = window.prompt("Griffpatch: Enter an expression (i.e. a+2*3)");
        if (codeString) {
          doInjectScripts(codeString);
        }
        e.preventDefault();
        return false;
      }
      */

    /**
     * Returns a Set of the top blocks in this workspace / sprite
     * @returns {Set<any>} Set of top blocks
     */
  }, {
    key: "getTopBlockIDs",
    value: function getTopBlockIDs() {
      var wksp = this.getWorkspace();
      var topBlocks = wksp.getTopBlocks();
      var ids = new Set();
      var _iterator15 = _createForOfIteratorHelper(topBlocks),
        _step15;
      try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
          var block = _step15.value;
          ids.add(block.id);
        }
      } catch (err) {
        _iterator15.e(err);
      } finally {
        _iterator15.f();
      }
      return ids;
    }

    /**
     * Initiates a drag event for all block stacks except those in the set of ids.
     * But why? - Because we know all the ids of the existing stacks before we paste / duplicate - so we can find the
     * new stack by excluding all the known ones.
     * @param ids Set of previously known ids
     */
  }, {
    key: "beginDragOfNewBlocksNotInIDs",
    value: function beginDragOfNewBlocksNotInIDs(ids) {
      if (!this.addon.settings.get("enablePasteBlocksAtMouse")) {
        return;
      }
      var wksp = this.getWorkspace();
      var topBlocks = wksp.getTopBlocks();
      var _iterator16 = _createForOfIteratorHelper(topBlocks),
        _step16;
      try {
        for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
          var block = _step16.value;
          if (!ids.has(block.id)) {
            // console.log("I found a new block!!! - " + block.id);
            // todo: move the block to the mouse pointer?
            var mouseXYClone = {
              x: this.mouseXY.x,
              y: this.mouseXY.y
            };
            block.setIntersects(true); // fixes offscreen block pasting in TurboWarp
            this.domHelpers.triggerDragAndDrop(block.svgPath_, null, mouseXYClone);
          }
        }
      } catch (err) {
        _iterator16.e(err);
      } finally {
        _iterator16.f();
      }
    }
  }, {
    key: "updateMousePosition",
    value: function updateMousePosition(e) {
      this.mouseXY.x = e.clientX;
      this.mouseXY.y = e.clientY;
    }
  }, {
    key: "eventMouseMove",
    value: function eventMouseMove(e) {
      this.updateMousePosition(e);
    }
  }, {
    key: "eventKeyDown",
    value: function eventKeyDown(e) {
      var _this3 = this;
      var switchCostume = function switchCostume(up) {
        // todo: select previous costume
        var selected = _this3.costTabBody.querySelector("div[class*='sprite-selector-item_is-selected']");
        var node = up ? selected.parentNode.previousSibling : selected.parentNode.nextSibling;
        if (node) {
          var wrapper = node.closest("div[class*=gui_flex-wrapper]");
          node.querySelector("div[class^='sprite-selector-item_sprite-name']").click();
          node.scrollIntoView({
            behavior: "auto",
            block: "center",
            inline: "start"
          });
          wrapper.scrollTop = 0;
        }
      };
      if (document.URL.indexOf("editor") <= 0) {
        return;
      }
      var ctrlKey = e.ctrlKey || e.metaKey;
      if (e.key === "ArrowLeft" && ctrlKey) {
        // Ctrl + Left Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }
        if (this.isCostumeEditor()) {
          switchCostume(true);
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }
      if (e.key === "ArrowRight" && ctrlKey) {
        // Ctrl + Right Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }
        if (this.isCostumeEditor()) {
          switchCostume(false);
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }
      if (e.keyCode === 86 && ctrlKey && !e.griff) {
        // Ctrl + V
        // Set a timeout so we can take control of the paste after the event
        var ids = this.getTopBlockIDs();
        setTimeout(function () {
          _this3.beginDragOfNewBlocksNotInIDs(ids);
        }, 10);
      }

      // if (e.keyCode === 220 && (!document.activeElement || document.activeElement.tagName === 'INPUT')) {
      //
      // }
    }
  }, {
    key: "eventCopyClick",
    value: function eventCopyClick(block, blockOnly) {
      var wksp = this.getWorkspace();
      if (block) {
        block.select();
        var next = blockOnly ? block.getNextBlock() : null;
        if (next) {
          next.unplug(false); // setParent(null);
        }

        // separate child temporarily
        document.dispatchEvent(new KeyboardEvent("keydown", {
          keyCode: 67,
          ctrlKey: true
        }));
        if (next || blockOnly === 2) {
          setTimeout(function () {
            if (next) {
              wksp.undo(); // undo the unplug above...
            }
            if (blockOnly === 2) {
              _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
              block.dispose(true);
              _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
            }
          }, 0);
        }
      }
    }
  }, {
    key: "eventMouseDown",
    value: function eventMouseDown(e) {
      this.updateMousePosition(e);
    }
  }, {
    key: "eventMouseUp",
    value: function eventMouseUp(e) {
      this.updateMousePosition(e);
    }
  }, {
    key: "initInner",
    value: function initInner(root) {
      var _this4 = this;
      var guiTabs = root.childNodes;
      if (this.codeTab && guiTabs[0] !== this.codeTab) {
        // We have been CHANGED!!! - Happens when going to project page, and then back inside again!!!
        this.domHelpers.unbindAllEvents();
      }
      this.codeTab = guiTabs[0];
      this.costTab = guiTabs[1];
      this.costTabBody = document.querySelector("div[aria-labelledby=" + this.costTab.id + "]");
      this.domHelpers.bindOnce(document, "keydown", function () {
        return _this4.eventKeyDown.apply(_this4, arguments);
      }, true);
      this.domHelpers.bindOnce(document, "mousemove", function () {
        return _this4.eventMouseMove.apply(_this4, arguments);
      }, true);
      this.domHelpers.bindOnce(document, "mousedown", function () {
        return _this4.eventMouseDown.apply(_this4, arguments);
      }, true); // true to capture all mouse downs 'before' the dom events handle them
      this.domHelpers.bindOnce(document, "mouseup", function () {
        return _this4.eventMouseUp.apply(_this4, arguments);
      }, true);
    }
  }]);
}();

var Col = /*#__PURE__*/_createClass(
/**
 * @param x {Number} x position (for ordering)
 * @param count {Number}
 * @param blocks {[Block]}
 */
function Col(x, count, blocks) {
  _classCallCheck(this, Col);
  /**
   * x position (for ordering)
   * @type {Number}
   */
  this.x = x;
  /**
   * @type {Number}
   */
  this.count = count;
  /**
   * @type {[Blockly.Block]}
   */
  this.blocks = blocks;
});

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DomHelpers.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DomHelpers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomHelpers; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DomHelpers = /*#__PURE__*/function () {
  function DomHelpers(addon) {
    _classCallCheck(this, DomHelpers);
    this.addon = addon;
    this.vm = addon.tab.traps.vm;
    /**
     * @type {eventDetails[]}
     */
    this.events = [];
  }

  /**
   * Simulate a drag and drop programmatically through javascript
   * @param selectorDrag
   * @param selectorDrop
   * @param mouseXY
   * @param [shiftKey=false]
   * @returns {boolean}
   */
  return _createClass(DomHelpers, [{
    key: "triggerDragAndDrop",
    value: function triggerDragAndDrop(selectorDrag, selectorDrop, mouseXY, shiftKey) {
      // function for triggering mouse events
      shiftKey = shiftKey || false;
      var fireMouseEvent = function fireMouseEvent(type, elem, centerX, centerY) {
        var evt = document.createEvent("MouseEvents");
        evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, shiftKey, false, false, false, 0, elem);
        elem.dispatchEvent(evt);
      };

      // fetch target elements
      var elemDrag = selectorDrag; // document.querySelector(selectorDrag);
      var elemDrop = selectorDrop; // document.querySelector(selectorDrop);
      if (!elemDrag /* || !elemDrop*/) {
        return false;
      }

      // calculate positions
      var pos = elemDrag.getBoundingClientRect();
      var center1X = Math.floor((pos.left + pos.right) / 2);
      var center1Y = Math.floor((pos.top + pos.bottom) / 2);

      // mouse over dragged element and mousedown
      fireMouseEvent("mouseover", elemDrag, center1X, center1Y);
      fireMouseEvent("mousedown", elemDrag, center1X, center1Y);

      // start dragging process over to drop target
      fireMouseEvent("dragstart", elemDrag, center1X, center1Y);
      fireMouseEvent("drag", elemDrag, center1X, center1Y);
      fireMouseEvent("mousemove", elemDrag, center1X, center1Y);
      if (!elemDrop) {
        if (mouseXY) {
          // console.log(mouseXY);
          var _center2X = mouseXY.x;
          var _center2Y = mouseXY.y;
          fireMouseEvent("drag", elemDrag, _center2X, _center2Y);
          fireMouseEvent("mousemove", elemDrag, _center2X, _center2Y);
        }
        return false;
      }
      pos = elemDrop.getBoundingClientRect();
      var center2X = Math.floor((pos.left + pos.right) / 2);
      var center2Y = Math.floor((pos.top + pos.bottom) / 2);
      fireMouseEvent("drag", elemDrag, center2X, center2Y);
      fireMouseEvent("mousemove", elemDrop, center2X, center2Y);

      // trigger dragging process on top of drop target
      fireMouseEvent("mouseenter", elemDrop, center2X, center2Y);
      fireMouseEvent("dragenter", elemDrop, center2X, center2Y);
      fireMouseEvent("mouseover", elemDrop, center2X, center2Y);
      fireMouseEvent("dragover", elemDrop, center2X, center2Y);

      // release dragged element on top of drop target
      fireMouseEvent("drop", elemDrop, center2X, center2Y);
      fireMouseEvent("dragend", elemDrag, center2X, center2Y);
      fireMouseEvent("mouseup", elemDrag, center2X, center2Y);
      return true;
    }
  }, {
    key: "bindOnce",
    value: function bindOnce(dom, event, func, capture) {
      capture = !!capture;
      dom.removeEventListener(event, func, capture);
      dom.addEventListener(event, func, capture);
      this.events.push(new eventDetails(dom, event, func, capture));
    }
  }, {
    key: "unbindAllEvents",
    value: function unbindAllEvents() {
      var _iterator = _createForOfIteratorHelper(this.events),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var event = _step.value;
          event.dom.removeEventListener(event.event, event.func, event.capture);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.events = [];
    }
  }]);
}();
/**
 * A record of an event
 */

var eventDetails = /*#__PURE__*/_createClass(function eventDetails(dom, event, func, capture) {
  _classCallCheck(this, eventDetails);
  this.dom = dom;
  this.event = event;
  this.func = func;
  this.capture = capture;
});

/***/ }),

/***/ "./src/addons/addons/editor-devtools/UndoGroup.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/UndoGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoGroup; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * This class is dedicated to maintaining the Undo stack of Blockly
 * It allows us to initiate an undo group such that all subsequent operations are recorded as a single
 * undoable transaction.
 */
var UndoGroup = /*#__PURE__*/function () {
  function UndoGroup() {
    _classCallCheck(this, UndoGroup);
  }
  return _createClass(UndoGroup, null, [{
    key: "startUndoGroup",
    value:
    /**
     * Start an Undo group - begin recording
     * @param workspace the workspace
     */
    function startUndoGroup(workspace) {
      var undoStack = workspace.undoStack_;
      if (undoStack.length) {
        undoStack[undoStack.length - 1]._devtoolsLastUndo = true;
      }
    }

    /**
     * End an Undo group - stops recording
     * @param workspace the workspace
     */
  }, {
    key: "endUndoGroup",
    value: function endUndoGroup(workspace) {
      var undoStack = workspace.undoStack_;
      // Events (responsible for undoStack updates) are delayed with a setTimeout(f, 0)
      // https://github.com/scratchfoundation/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
      setTimeout(function () {
        var group = generateUID();
        for (var i = undoStack.length - 1; i >= 0 && !undoStack[i]._devtoolsLastUndo; i--) {
          undoStack[i].group = group;
        }
      }, 0);
    }
  }]);
}();
/**
 * https://github.com/scratchfoundation/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
 * @returns {string}
 * @private
 */

function generateUID() {
  var CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+,-./:;=?@[]^_`{|}~";
  var result = "";
  for (var i = 0; i < 20; i++) {
    result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }
  return result;
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-devtools/userscript.js");
/* harmony import */ var _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icon--close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg");
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "icon--close.svg": _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-devtools/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevTools.js */ "./src/addons/addons/editor-devtools/DevTools.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, msg, m, devTools;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console, msg = _ref.msg, m = _ref.safeMsg;
          devTools = new _DevTools_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon, msg, m);
          devTools.init();
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js":
/*!*************************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js ***!
  \*************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-searchable-dropdowns/userscript.js");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userscript.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userscript.css": _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/userscript.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/userscript.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
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
    var addon, console, msg, Blockly, vm, SCRATCH_ITEMS_TO_HIDE, canUseAsGlobalVariableName, canUseAsLocalVariableName, ADDON_ITEMS, blocklyDropDownContent, blocklyDropdownMenu, searchBar, items, searchedItems, currentDropdownOptions, resultOfLastGetOptions, oldDropDownDivShow, oldDropDownDivClearContent, oldFieldDropdownGetOptions, oldFieldVariableOnItemSelected, selectItem, performSearch, updateSearch, handleKeyDownEvent, getMenuItemMessage;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          getMenuItemMessage = function _getMenuItemMessage(message) {
            var _searchBar;
            // Format used internally by Scratch:
            // [human readable name, internal name]
            return [msg(message, {
              name: ((_searchBar = searchBar) === null || _searchBar === void 0 ? void 0 : _searchBar.value.trim()) || ""
            }), message];
          };
          handleKeyDownEvent = function _handleKeyDownEvent(event) {
            if (event.key === "Enter") {
              // Reimplement enter to select item to account for hidden items and default to the top item.
              event.stopPropagation();
              event.preventDefault();
              var selectedItem = document.querySelector(".goog-menuitem-highlight");
              if (selectedItem && !selectedItem.hidden) {
                selectItem(selectedItem, true);
                return;
              }
              var selectedBlock = Blockly.selected;
              if (searchBar.value === "" && selectedBlock) {
                if (selectedBlock.type === "event_broadcast" || selectedBlock.type === "event_broadcastandwait" || selectedBlock.type === "event_whenbroadcastreceived") {
                  // The top item of these dropdowns is always "New message"
                  // When pressing enter on an empty search bar, we close the dropdown instead of making a new broadcast.
                  Blockly.DropDownDiv.hide();
                  return;
                }
              }
              var _iterator4 = _createForOfIteratorHelper(searchedItems),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var item = _step4.value.item;
                  if (!item.element.hidden) {
                    selectItem(item.element, true);
                    break;
                  }
                }
                // If there is no top value, do nothing and leave the dropdown open
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            } else if (event.key === "Escape") {
              Blockly.DropDownDiv.hide();
            } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              // Reimplement keyboard navigation to account for hidden items.
              event.preventDefault();
              event.stopPropagation();
              var _items = searchedItems.filter(function (i) {
                return i.score >= 0;
              }).map(function (i) {
                return i.item;
              });
              if (_items.length === 0) {
                return;
              }
              var selectedIndex = -1;
              for (var i = 0; i < _items.length; i++) {
                if (_items[i].element.classList.contains("goog-menuitem-highlight")) {
                  selectedIndex = i;
                  break;
                }
              }
              var lastIndex = _items.length - 1;
              var newIndex = 0;
              if (event.key === "ArrowDown") {
                if (selectedIndex === -1 || selectedIndex === lastIndex) {
                  newIndex = 0;
                } else {
                  newIndex = selectedIndex + 1;
                }
              } else {
                if (selectedIndex === -1 || selectedIndex === 0) {
                  newIndex = lastIndex;
                } else {
                  newIndex = selectedIndex - 1;
                }
              }
              selectItem(_items[newIndex].element, false);
            }
          };
          updateSearch = function _updateSearch() {
            var previousSearchedItems = searchedItems;
            searchedItems = performSearch();
            var needToUpdateDOM = previousSearchedItems.length !== searchedItems.length;
            if (!needToUpdateDOM) {
              for (var i = 0; i < searchedItems.length; i++) {
                if (searchedItems[i].item !== previousSearchedItems[i].item) {
                  needToUpdateDOM = true;
                  break;
                }
              }
            }
            if (needToUpdateDOM && previousSearchedItems.length > 0) {
              var _iterator = _createForOfIteratorHelper(previousSearchedItems),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value.item;
                  item.element.remove();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
              var _iterator2 = _createForOfIteratorHelper(searchedItems),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _item = _step2.value.item;
                  blocklyDropdownMenu.appendChild(_item.element);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            var _iterator3 = _createForOfIteratorHelper(searchedItems),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _step3$value = _step3.value,
                  _item2 = _step3$value.item,
                  score = _step3$value.score;
                _item2.element.hidden = score < 0;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          };
          performSearch = function _performSearch() {
            var rawQuery = searchBar.value.trim();
            var query = rawQuery.trim().toLowerCase();
            var rank = function rank(item, index) {
              // Negative number will hide
              // Higher numbers will appear first
              var option = currentDropdownOptions[index];
              var optionId = option[1];
              if (SCRATCH_ITEMS_TO_HIDE.includes(optionId)) {
                return query ? -1 : 0;
              } else if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
                if (!query) {
                  return -1;
                }
                var addonInfo = ADDON_ITEMS[optionId];
                if (addonInfo.enabled(rawQuery)) {
                  item.element.lastChild.lastChild.textContent = getMenuItemMessage(optionId)[0];
                  return 0;
                }
                return -1;
              }
              var itemText = item.text.toLowerCase();
              if (query === itemText) {
                return 2;
              }
              if (itemText.startsWith(query)) {
                return 1;
              }
              if (itemText.includes(query)) {
                return 0;
              }
              return -1;
            };
            return items.map(function (item, index) {
              return {
                item: item,
                score: rank(item, index)
              };
            }).sort(function (_ref3, _ref4) {
              var scoreA = _ref3.score;
              var scoreB = _ref4.score;
              return Math.max(0, scoreB) - Math.max(0, scoreA);
            });
          };
          selectItem = function _selectItem(item, click) {
            // You can't just use click() or focus() because Blockly uses mousedown and mouseup handlers, not click handlers.
            item.dispatchEvent(new MouseEvent("mousedown", {
              relatedTarget: item,
              bubbles: true
            }));
            if (click) item.dispatchEvent(new MouseEvent("mouseup", {
              relatedTarget: item,
              bubbles: true
            }));

            // Scroll the item into view if it is offscreen.
            var itemTop = item.offsetTop;
            var itemEnd = itemTop + item.offsetHeight;
            var scrollTop = blocklyDropDownContent.scrollTop;
            var scrollHeight = blocklyDropDownContent.offsetHeight;
            var scrollEnd = scrollTop + scrollHeight;
            if (scrollTop > itemTop) {
              blocklyDropDownContent.scrollTop = itemTop;
            } else if (itemEnd > scrollEnd) {
              blocklyDropDownContent.scrollTop = itemEnd - scrollHeight;
            }
          };
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          Blockly = _context.v;
          vm = addon.tab.traps.vm;
          SCRATCH_ITEMS_TO_HIDE = ["RENAME_VARIABLE_ID", "DELETE_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID",
          // From rename-broadcasts addon
          "RENAME_BROADCAST_MESSAGE_ID"];
          canUseAsGlobalVariableName = function canUseAsGlobalVariableName(name, type) {
            return !vm.runtime.getAllVarNamesOfType(type).includes(name);
          };
          canUseAsLocalVariableName = function canUseAsLocalVariableName(name, type) {
            return !vm.editingTarget.lookupVariableByNameAndType(name, type);
          };
          ADDON_ITEMS = {
            createGlobalVariable: {
              enabled: function enabled(name) {
                return canUseAsGlobalVariableName(name, "");
              },
              createVariable: function createVariable(workspace, name) {
                return workspace.createVariable(name);
              }
            },
            createLocalVariable: {
              enabled: function enabled(name) {
                return canUseAsLocalVariableName(name, "");
              },
              createVariable: function createVariable(workspace, name) {
                return workspace.createVariable(name, "", null, true);
              }
            },
            createGlobalList: {
              enabled: function enabled(name) {
                return canUseAsGlobalVariableName(name, "list");
              },
              createVariable: function createVariable(workspace, name) {
                return workspace.createVariable(name, "list");
              }
            },
            createLocalList: {
              enabled: function enabled(name) {
                return canUseAsLocalVariableName(name, "list");
              },
              createVariable: function createVariable(workspace, name) {
                return workspace.createVariable(name, "list", null, true);
              }
            },
            createBroadcast: {
              enabled: function enabled(name) {
                return canUseAsGlobalVariableName(name, "broadcast_msg");
              },
              createVariable: function createVariable(workspace, name) {
                return workspace.createVariable(name, "broadcast_msg");
              }
            }
          };
          blocklyDropDownContent = null;
          blocklyDropdownMenu = null;
          searchBar = null; // Contains DOM and addon state
          items = [];
          searchedItems = []; // Tracks internal Scratch state
          currentDropdownOptions = [];
          resultOfLastGetOptions = [];
          oldDropDownDivShow = Blockly.DropDownDiv.show;
          Blockly.DropDownDiv.show = function () {
            blocklyDropdownMenu = document.querySelector(".blocklyDropdownMenu");
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (!blocklyDropdownMenu) {
              return oldDropDownDivShow.call.apply(oldDropDownDivShow, [this].concat(args));
            }
            blocklyDropdownMenu.focus = function () {}; // no-op focus() so it can't steal it from the search bar

            searchBar = document.createElement("input");
            addon.tab.displayNoneWhileDisabled(searchBar, {
              display: "flex"
            });
            searchBar.type = "text";
            searchBar.addEventListener("input", updateSearch);
            searchBar.addEventListener("keydown", handleKeyDownEvent);
            searchBar.classList.add("u-dropdown-searchbar");
            blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
            items = Array.from(blocklyDropdownMenu.children).filter(function (child) {
              return child.tagName !== "INPUT";
            }).map(function (element) {
              return {
                element: element,
                text: element.textContent
              };
            });
            currentDropdownOptions = resultOfLastGetOptions;
            updateSearch();

            // Call the original show method after adding everything so that it can perform the correct size calculations
            var ret = oldDropDownDivShow.call.apply(oldDropDownDivShow, [this].concat(args));

            // Lock the size of the dropdown
            blocklyDropDownContent = Blockly.DropDownDiv.getContentDiv();
            blocklyDropDownContent.style.width = getComputedStyle(blocklyDropDownContent).width;
            blocklyDropDownContent.style.height = getComputedStyle(blocklyDropDownContent).height;

            // This is really strange, but if you don't reinsert the search bar into the DOM then focus() doesn't work
            blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
            searchBar.focus();
            return ret;
          };
          oldDropDownDivClearContent = Blockly.DropDownDiv.clearContent;
          Blockly.DropDownDiv.clearContent = function () {
            oldDropDownDivClearContent.call(this);
            items = [];
            searchedItems = [];
            Blockly.DropDownDiv.content_.style.height = "";
          };
          oldFieldDropdownGetOptions = Blockly.FieldDropdown.prototype.getOptions;
          Blockly.FieldDropdown.prototype.getOptions = function () {
            var options = oldFieldDropdownGetOptions.call(this);
            var block = this.sourceBlock_;
            var isStage = vm.editingTarget && vm.editingTarget.isStage;
            if (block) {
              if (block.category_ === "data") {
                options.push(getMenuItemMessage("createGlobalVariable"));
                if (!isStage) {
                  options.push(getMenuItemMessage("createLocalVariable"));
                }
              } else if (block.category_ === "data-lists") {
                options.push(getMenuItemMessage("createGlobalList"));
                if (!isStage) {
                  options.push(getMenuItemMessage("createLocalList"));
                }
              } else if (block.type === "event_broadcast_menu" || block.type === "event_whenbroadcastreceived") {
                options.push(getMenuItemMessage("createBroadcast"));
              }
            }
            // Options aren't normally stored anywhere, so we'll store them ourselves.
            resultOfLastGetOptions = options;
            return options;
          };
          oldFieldVariableOnItemSelected = Blockly.FieldVariable.prototype.onItemSelected;
          Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
            var sourceBlock = this.sourceBlock_;
            if (sourceBlock && sourceBlock.workspace && searchBar.value.length !== 0) {
              var workspace = sourceBlock.workspace;
              var optionId = menuItem.getValue();
              if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
                var addonItem = ADDON_ITEMS[optionId];
                Blockly.Events.setGroup(true);
                var variable = addonItem.createVariable(workspace, searchBar.value.trim());
                if (this.sourceBlock_) this.setValue(variable.getId());
                Blockly.Events.setGroup(false);
                return;
              }
            }
            return oldFieldVariableOnItemSelected.call(this, menu, menuItem);
          };
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/find-bar/_runtime_entry.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/find-bar/_runtime_entry.js ***!
  \******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/find-bar/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/find-bar/blockly/BlockItem.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/find-bar/blockly/BlockItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockItem; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BlockItem = /*#__PURE__*/function () {
  function BlockItem(cls, procCode, labelID, y) {
    _classCallCheck(this, BlockItem);
    this.cls = cls;
    this.procCode = procCode;
    this.labelID = labelID;
    this.y = y;
    this.lower = procCode.toLowerCase();
    /**
     * An Array of block ids
     * @type {Array.<string>}
     */
    this.clones = null;
    this.eventName = null;
  }

  /**
   * True if the blockID matches a black represented by this BlockItem
   * @param id
   * @returns {boolean}
   */
  return _createClass(BlockItem, [{
    key: "matchesID",
    value: function matchesID(id) {
      if (this.labelID === id) {
        return true;
      }
      if (this.clones) {
        var _iterator = _createForOfIteratorHelper(this.clones),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var cloneID = _step.value;
            if (cloneID === id) {
              return true;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return false;
    }
  }]);
}();


/***/ }),

/***/ "./src/addons/addons/find-bar/userscript.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/find-bar/userscript.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockly/BlockItem.js */ "./src/addons/addons/find-bar/blockly/BlockItem.js");
/* harmony import */ var _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockly/BlockInstance.js */ "./src/addons/addons/find-bar/blockly/BlockInstance.js");
/* harmony import */ var _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockly/Utils.js */ "./src/addons/addons/find-bar/blockly/Utils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }



/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, msg, console, Blockly, FindBar, Dropdown, Carousel, findBar, _doBlockClick_, root;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, msg = _ref.msg, console = _ref.console;
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          Blockly = _context.v;
          FindBar = /*#__PURE__*/function () {
            function FindBar() {
              var _this = this;
              _classCallCheck(this, FindBar);
              this.utils = new _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__["default"](addon);
              this.prevValue = "";
              this.findBarOuter = null;
              this.findWrapper = null;
              this.findInput = null;
              this.dropdownOut = null;
              this.dropdown = new Dropdown(this.utils);
              document.addEventListener("keydown", function (e) {
                return _this.eventKeyDown(e);
              }, true);
            }
            return _createClass(FindBar, [{
              key: "workspace",
              get: function get() {
                return Blockly.getMainWorkspace();
              }
            }, {
              key: "createDom",
              value: function createDom(root) {
                this.findBarOuter = document.createElement("div");
                this.findBarOuter.className = "sa-find-bar";
                addon.tab.displayNoneWhileDisabled(this.findBarOuter, {
                  display: "flex"
                });
                root.appendChild(this.findBarOuter);
                this.findWrapper = this.findBarOuter.appendChild(document.createElement("span"));
                this.findWrapper.className = "sa-find-wrapper";
                this.dropdownOut = this.findWrapper.appendChild(document.createElement("label"));
                this.dropdownOut.className = "sa-find-dropdown-out";
                this.findInput = this.dropdownOut.appendChild(document.createElement("input"));
                this.findInput.className = addon.tab.scratchClass("input_input-form", {
                  others: "sa-find-input"
                });
                // for <label>
                this.findInput.id = "sa-find-input";
                this.findInput.type = "search";
                this.findInput.placeholder = msg("find-placeholder");
                this.findInput.autocomplete = "off";
                this.dropdownOut.appendChild(this.dropdown.createDom());
                this.bindEvents();
                this.tabChanged();
              }
            }, {
              key: "bindEvents",
              value: function bindEvents() {
                var _this2 = this;
                this.findInput.addEventListener("focus", function () {
                  return _this2.inputChange();
                });
                this.findInput.addEventListener("keydown", function (e) {
                  return _this2.inputKeyDown(e);
                });
                this.findInput.addEventListener("keyup", function () {
                  return _this2.inputChange();
                });
                this.findInput.addEventListener("focusout", function () {
                  return _this2.hideDropDown();
                });
              }
            }, {
              key: "tabChanged",
              value: function tabChanged() {
                if (!this.findBarOuter) {
                  return;
                }
                var tab = addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
                var visible = tab === 0 || tab === 1 || tab === 2;
                this.findBarOuter.hidden = !visible;
              }
            }, {
              key: "inputChange",
              value: function inputChange() {
                this.showDropDown();

                // Filter the list...
                var val = (this.findInput.value || "").toLowerCase();
                if (val === this.prevValue) {
                  // No change so don't re-filter
                  return;
                }
                this.prevValue = val;
                this.dropdown.blocks = null;

                // Hide items in list that do not contain filter text
                var listLI = this.dropdown.items;
                var _iterator = _createForOfIteratorHelper(listLI),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var li = _step.value;
                    var procCode = li.data.procCode;
                    var i = li.data.lower.indexOf(val);
                    if (i >= 0) {
                      li.style.display = "block";
                      while (li.firstChild) {
                        li.removeChild(li.firstChild);
                      }
                      if (i > 0) {
                        li.appendChild(document.createTextNode(procCode.substring(0, i)));
                      }
                      var bText = document.createElement("b");
                      bText.appendChild(document.createTextNode(procCode.substr(i, val.length)));
                      li.appendChild(bText);
                      if (i + val.length < procCode.length) {
                        li.appendChild(document.createTextNode(procCode.substr(i + val.length)));
                      }
                    } else {
                      li.style.display = "none";
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
            }, {
              key: "inputKeyDown",
              value: function inputKeyDown(e) {
                this.dropdown.inputKeyDown(e);

                // Enter
                if (e.key === "Enter") {
                  this.findInput.blur();
                  return;
                }

                // Escape
                if (e.key === "Escape") {
                  if (this.findInput.value.length > 0) {
                    this.findInput.value = ""; // Clear search first, then close on second press
                    this.inputChange();
                  } else {
                    this.findInput.blur();
                  }
                  e.preventDefault();
                  return;
                }
              }
            }, {
              key: "eventKeyDown",
              value: function eventKeyDown(e) {
                if (addon.self.disabled || !this.findBarOuter) return;
                var ctrlKey = e.ctrlKey || e.metaKey;
                if (e.key.toLowerCase() === "f" && ctrlKey && !e.shiftKey) {
                  // Ctrl + F (Override default Ctrl+F find)
                  this.findInput.focus();
                  this.findInput.select();
                  e.cancelBubble = true;
                  e.preventDefault();
                  return true;
                }
                if (e.key === "ArrowLeft" && ctrlKey) {
                  // Ctrl + Left Arrow Key
                  if (document.activeElement.tagName === "INPUT") {
                    return;
                  }
                  if (this.selectedTab === 0) {
                    this.utils.navigationHistory.goBack();
                    e.cancelBubble = true;
                    e.preventDefault();
                    return true;
                  }
                }
                if (e.key === "ArrowRight" && ctrlKey) {
                  // Ctrl + Right Arrow Key
                  if (document.activeElement.tagName === "INPUT") {
                    return;
                  }
                  if (this.selectedTab === 0) {
                    this.utils.navigationHistory.goForward();
                    e.cancelBubble = true;
                    e.preventDefault();
                    return true;
                  }
                }
              }
            }, {
              key: "showDropDown",
              value: function showDropDown(focusID, instanceBlock) {
                if (!focusID && this.dropdownOut.classList.contains("visible")) {
                  return;
                }

                // special '' vs null... - null forces a reevaluation
                this.prevValue = focusID ? "" : null; // Clear the previous value of the input search

                this.dropdownOut.classList.add("visible");
                var scratchBlocks = this.selectedTab === 0 ? this.getScratchBlocks() : this.selectedTab === 1 ? this.getScratchCostumes() : this.selectedTab === 2 ? this.getScratchSounds() : [];
                this.dropdown.empty();
                var _iterator2 = _createForOfIteratorHelper(scratchBlocks),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var proc = _step2.value;
                    var item = this.dropdown.addItem(proc);
                    if (focusID) {
                      if (proc.matchesID(focusID)) {
                        this.dropdown.onItemClick(item, instanceBlock);
                      } else {
                        item.style.display = "none";
                      }
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
                this.utils.offsetX = this.dropdownOut.getBoundingClientRect().width + 32;
                this.utils.offsetY = 32;
              }
            }, {
              key: "hideDropDown",
              value: function hideDropDown() {
                this.dropdownOut.classList.remove("visible");
              }
            }, {
              key: "selectedTab",
              get: function get() {
                return addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
              }
            }, {
              key: "getScratchBlocks",
              value: function getScratchBlocks() {
                var myBlocks = [];
                var myBlocksByProcCode = {};
                var topBlocks = this.workspace.getTopBlocks();

                /**
                 * @param cls
                 * @param txt
                 * @param root
                 * @returns BlockItem
                 */
                function addBlock(cls, txt, root) {
                  var id = root.id ? root.id : root.getId ? root.getId() : null;
                  var clone = myBlocksByProcCode[txt];
                  if (clone) {
                    if (!clone.clones) {
                      clone.clones = [];
                    }
                    clone.clones.push(id);
                    return clone;
                  }
                  var items = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](cls, txt, id, 0);
                  items.y = root.getRelativeToSurfaceXY ? root.getRelativeToSurfaceXY().y : null;
                  myBlocks.push(items);
                  myBlocksByProcCode[txt] = items;
                  return items;
                }
                function getDescFromField(root) {
                  var fields = root.inputList[0];
                  var desc;
                  var _iterator3 = _createForOfIteratorHelper(fields.fieldRow),
                    _step3;
                  try {
                    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                      var fieldRow = _step3.value;
                      desc = desc ? desc + " " : "";
                      if (fieldRow instanceof Blockly.FieldImage && fieldRow.src_.endsWith("green-flag.svg")) {
                        desc += msg("/_general/blocks/green-flag");
                      } else {
                        desc += fieldRow.getText();
                      }
                    }
                  } catch (err) {
                    _iterator3.e(err);
                  } finally {
                    _iterator3.f();
                  }
                  return desc;
                }
                var _iterator4 = _createForOfIteratorHelper(topBlocks),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var root = _step4.value;
                    if (root.type === "procedures_definition") {
                      var label = root.getChildren()[0];
                      var procCode = label.getProcCode();
                      if (!procCode) {
                        continue;
                      }
                      var indexOfLabel = root.inputList.findIndex(function (i) {
                        return i.fieldRow.length > 0;
                      });
                      if (indexOfLabel === -1) {
                        continue;
                      }
                      var translatedDefine = root.inputList[indexOfLabel].fieldRow[0].getText();
                      var message = indexOfLabel === 0 ? "".concat(translatedDefine, " ").concat(procCode) : "".concat(procCode, " ").concat(translatedDefine);
                      addBlock("define", message, root);
                      continue;
                    }
                    if (root.type === "event_whenflagclicked") {
                      addBlock("flag", getDescFromField(root), root); // "When Flag Clicked"
                      continue;
                    }
                    if (root.type === "event_whenbroadcastreceived") {
                      var fieldRow = root.inputList[0].fieldRow;
                      var eventName = fieldRow.find(function (input) {
                        return input.name === "BROADCAST_OPTION";
                      }).getText();
                      addBlock("receive", msg("event", {
                        name: eventName
                      }), root).eventName = eventName;
                      continue;
                    }
                    if (root.type.substr(0, 10) === "event_when") {
                      addBlock("event", getDescFromField(root), root); // "When Flag Clicked"
                      continue;
                    }
                    if (root.type === "control_start_as_clone") {
                      addBlock("event", getDescFromField(root), root); // "when I start as a clone"
                      continue;
                    }
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                var map = this.workspace.getVariableMap();
                var vars = map.getVariablesOfType("");
                var _iterator5 = _createForOfIteratorHelper(vars),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var row = _step5.value;
                    addBlock(row.isLocal ? "var" : "VAR", row.isLocal ? msg("var-local", {
                      name: row.name
                    }) : msg("var-global", {
                      name: row.name
                    }), row);
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
                var lists = map.getVariablesOfType("list");
                var _iterator6 = _createForOfIteratorHelper(lists),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _row = _step6.value;
                    addBlock(_row.isLocal ? "list" : "LIST", _row.isLocal ? msg("list-local", {
                      name: _row.name
                    }) : msg("list-global", {
                      name: _row.name
                    }), _row);
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                var events = this.getCallsToEvents();
                var _iterator7 = _createForOfIteratorHelper(events),
                  _step7;
                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var event = _step7.value;
                    addBlock("receive", msg("event", {
                      name: event.eventName
                    }), event.block).eventName = event.eventName;
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }
                var clsOrder = {
                  flag: 0,
                  receive: 1,
                  event: 2,
                  define: 3,
                  "var": 4,
                  VAR: 5,
                  list: 6,
                  LIST: 7
                };
                myBlocks.sort(function (a, b) {
                  var t = clsOrder[a.cls] - clsOrder[b.cls];
                  if (t !== 0) {
                    return t;
                  }
                  if (a.lower < b.lower) {
                    return -1;
                  }
                  if (a.lower > b.lower) {
                    return 1;
                  }
                  return a.y - b.y;
                });
                return myBlocks;
              }
            }, {
              key: "getScratchCostumes",
              value: function getScratchCostumes() {
                var costumes = this.utils.getEditingTarget().getCostumes();
                var items = [];
                var i = 0;
                var _iterator8 = _createForOfIteratorHelper(costumes),
                  _step8;
                try {
                  for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var costume = _step8.value;
                    var item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("costume", costume.name, costume.assetId, i);
                    items.push(item);
                    i++;
                  }
                } catch (err) {
                  _iterator8.e(err);
                } finally {
                  _iterator8.f();
                }
                return items;
              }
            }, {
              key: "getScratchSounds",
              value: function getScratchSounds() {
                var sounds = this.utils.getEditingTarget().getSounds();
                var items = [];
                var i = 0;
                var _iterator9 = _createForOfIteratorHelper(sounds),
                  _step9;
                try {
                  for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                    var sound = _step9.value;
                    var item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("sound", sound.name, sound.assetId, i);
                    items.push(item);
                    i++;
                  }
                } catch (err) {
                  _iterator9.e(err);
                } finally {
                  _iterator9.f();
                }
                return items;
              }
            }, {
              key: "getCallsToEvents",
              value: function getCallsToEvents() {
                var uses = [];
                var alreadyFound = new Set();
                var _iterator0 = _createForOfIteratorHelper(this.workspace.getAllBlocks()),
                  _step0;
                try {
                  for (_iterator0.s(); !(_step0 = _iterator0.n()).done;) {
                    var block = _step0.value;
                    if (block.type !== "event_broadcast" && block.type !== "event_broadcastandwait") {
                      continue;
                    }
                    var broadcastInput = block.getChildren()[0];
                    if (!broadcastInput) {
                      continue;
                    }
                    var eventName = "";
                    if (broadcastInput.type === "event_broadcast_menu") {
                      eventName = broadcastInput.inputList[0].fieldRow[0].getText();
                    } else {
                      eventName = msg("complex-broadcast");
                    }
                    if (!alreadyFound.has(eventName)) {
                      alreadyFound.add(eventName);
                      uses.push({
                        eventName: eventName,
                        block: block
                      });
                    }
                  }
                } catch (err) {
                  _iterator0.e(err);
                } finally {
                  _iterator0.f();
                }
                return uses;
              }
            }]);
          }();
          Dropdown = /*#__PURE__*/function () {
            function Dropdown(utils) {
              _classCallCheck(this, Dropdown);
              this.utils = utils;
              this.el = null;
              this.items = [];
              this.selected = null;
              this.carousel = new Carousel(this.utils);
            }
            return _createClass(Dropdown, [{
              key: "workspace",
              get: function get() {
                return Blockly.getMainWorkspace();
              }
            }, {
              key: "createDom",
              value: function createDom() {
                this.el = document.createElement("ul");
                this.el.className = "sa-find-dropdown";
                return this.el;
              }
            }, {
              key: "inputKeyDown",
              value: function inputKeyDown(e) {
                // Up Arrow
                if (e.key === "ArrowUp") {
                  this.navigateFilter(-1);
                  e.preventDefault();
                  return;
                }

                // Down Arrow
                if (e.key === "ArrowDown") {
                  this.navigateFilter(1);
                  e.preventDefault();
                  return;
                }

                // Enter
                if (e.key === "Enter") {
                  // Any selected on enter? if not select now
                  if (this.selected) {
                    this.navigateFilter(1);
                  }
                  e.preventDefault();
                  return;
                }
                this.carousel.inputKeyDown(e);
              }
            }, {
              key: "navigateFilter",
              value: function navigateFilter(dir) {
                var nxt;
                if (this.selected && this.selected.style.display !== "none") {
                  nxt = dir === -1 ? this.selected.previousSibling : this.selected.nextSibling;
                } else {
                  nxt = this.items[0];
                  dir = 1;
                }
                while (nxt && nxt.style.display === "none") {
                  nxt = dir === -1 ? nxt.previousSibling : nxt.nextSibling;
                }
                if (nxt) {
                  nxt.scrollIntoView({
                    block: "nearest"
                  });
                  this.onItemClick(nxt);
                }
              }
            }, {
              key: "addItem",
              value: function addItem(proc) {
                var _this3 = this;
                var item = document.createElement("li");
                item.innerText = proc.procCode;
                item.data = proc;
                var colorIds = {
                  receive: "events",
                  event: "events",
                  define: "more",
                  "var": "data",
                  VAR: "data",
                  list: "data-lists",
                  LIST: "data-lists",
                  costume: "looks",
                  sound: "sounds"
                };
                if (proc.cls === "flag") {
                  item.className = "sa-find-flag";
                } else {
                  var colorId = colorIds[proc.cls];
                  item.className = "sa-block-color sa-block-color-".concat(colorId);
                }
                item.addEventListener("mousedown", function (e) {
                  _this3.onItemClick(item);
                  e.preventDefault();
                  e.cancelBubble = true;
                  return false;
                });
                this.items.push(item);
                this.el.appendChild(item);
                return item;
              }
            }, {
              key: "onItemClick",
              value: function onItemClick(item, instanceBlock) {
                if (this.selected && this.selected !== item) {
                  this.selected.classList.remove("sel");
                  this.selected = null;
                }
                if (this.selected !== item) {
                  item.classList.add("sel");
                  this.selected = item;
                }
                var cls = item.data.cls;
                if (cls === "costume" || cls === "sound") {
                  // Viewing costumes/sounds - jump to selected costume/sound
                  var assetPanel = document.querySelector("[class^=asset-panel_wrapper]");
                  if (assetPanel) {
                    var reactInstance = assetPanel[addon.tab.traps.getInternalKey(assetPanel)];
                    var reactProps = reactInstance.child.stateNode.props;
                    reactProps.onItemClick(item.data.y);
                    var selectorList = assetPanel.firstChild.firstChild;
                    selectorList.children[item.data.y].scrollIntoView({
                      behavior: "auto",
                      block: "center",
                      inline: "start"
                    });
                    // The wrapper seems to scroll when we use the function above.
                    var wrapper = assetPanel.closest("div[class*=gui_flex-wrapper]");
                    wrapper.scrollTop = 0;
                  }
                } else if (cls === "var" || cls === "VAR" || cls === "list" || cls === "LIST") {
                  // Search now for all instances
                  var blocks = this.getVariableUsesById(item.data.labelID);
                  this.carousel.build(item, blocks, instanceBlock);
                } else if (cls === "define") {
                  var _blocks = this.getCallsToProcedureById(item.data.labelID);
                  this.carousel.build(item, _blocks, instanceBlock);
                } else if (cls === "receive") {
                  /*
                    let blocks = [this.workspace.getBlockById(li.data.labelID)];
                    if (li.data.clones) {
                        for (const cloneID of li.data.clones) {
                            blocks.push(this.workspace.getBlockById(cloneID))
                        }
                    }
                    blocks = blocks.concat(getCallsToEventsByName(li.data.eventName));
                  */
                  // Now, fetch the events from the scratch runtime instead of blockly
                  var _blocks2 = this.getCallsToEventsByName(item.data.eventName);
                  if (!instanceBlock) {
                    // Can we start by selecting the first block on 'this' sprite
                    var currentTargetID = this.utils.getEditingTarget().id;
                    var _iterator1 = _createForOfIteratorHelper(_blocks2),
                      _step1;
                    try {
                      for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
                        var block = _step1.value;
                        if (block.targetId === currentTargetID) {
                          instanceBlock = block;
                          break;
                        }
                      }
                    } catch (err) {
                      _iterator1.e(err);
                    } finally {
                      _iterator1.f();
                    }
                  }
                  this.carousel.build(item, _blocks2, instanceBlock);
                } else if (item.data.clones) {
                  var _blocks3 = [this.workspace.getBlockById(item.data.labelID)];
                  var _iterator10 = _createForOfIteratorHelper(item.data.clones),
                    _step10;
                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var cloneID = _step10.value;
                      _blocks3.push(this.workspace.getBlockById(cloneID));
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }
                  this.carousel.build(item, _blocks3, instanceBlock);
                } else {
                  this.utils.scrollBlockIntoView(item.data.labelID);
                  this.carousel.remove();
                }
              }
            }, {
              key: "getVariableUsesById",
              value: function getVariableUsesById(id) {
                var uses = [];
                var topBlocks = this.workspace.getTopBlocks();
                var _iterator11 = _createForOfIteratorHelper(topBlocks),
                  _step11;
                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var topBlock = _step11.value;
                    /** @type {!Array<!Blockly.Block>} */
                    var kids = topBlock.getDescendants();
                    var _iterator12 = _createForOfIteratorHelper(kids),
                      _step12;
                    try {
                      for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                        var block = _step12.value;
                        /** @type {!Array<!Blockly.VariableModel>} */
                        var blockVariables = block.getVarModels();
                        if (blockVariables) {
                          var _iterator13 = _createForOfIteratorHelper(blockVariables),
                            _step13;
                          try {
                            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                              var blockVar = _step13.value;
                              if (blockVar.getId() === id) {
                                uses.push(block);
                              }
                            }
                          } catch (err) {
                            _iterator13.e(err);
                          } finally {
                            _iterator13.f();
                          }
                        }
                      }
                    } catch (err) {
                      _iterator12.e(err);
                    } finally {
                      _iterator12.f();
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
                return uses;
              }
            }, {
              key: "getCallsToProcedureById",
              value: function getCallsToProcedureById(id) {
                var procBlock = this.workspace.getBlockById(id);
                var label = procBlock.getChildren()[0];
                var procCode = label.getProcCode();
                var uses = [procBlock]; // Definition First, then calls to it
                var topBlocks = this.workspace.getTopBlocks();
                var _iterator14 = _createForOfIteratorHelper(topBlocks),
                  _step14;
                try {
                  for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                    var topBlock = _step14.value;
                    /** @type {!Array<!Blockly.Block>} */
                    var kids = topBlock.getDescendants();
                    var _iterator15 = _createForOfIteratorHelper(kids),
                      _step15;
                    try {
                      for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                        var block = _step15.value;
                        if (block.type === "procedures_call") {
                          if (block.getProcCode() === procCode) {
                            uses.push(block);
                          }
                        }
                      }
                    } catch (err) {
                      _iterator15.e(err);
                    } finally {
                      _iterator15.f();
                    }
                  }
                } catch (err) {
                  _iterator14.e(err);
                } finally {
                  _iterator14.f();
                }
                return uses;
              }
            }, {
              key: "getCallsToEventsByName",
              value: function getCallsToEventsByName(name) {
                var uses = []; // Definition First, then calls to it

                var runtime = addon.tab.traps.vm.runtime;
                var targets = runtime.targets; // The sprites / stage
                var _iterator16 = _createForOfIteratorHelper(targets),
                  _step16;
                try {
                  for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                    var target = _step16.value;
                    if (!target.isOriginal) {
                      continue; // Skip clones
                    }
                    var blocks = target.blocks;
                    if (!blocks._blocks) {
                      continue;
                    }
                    for (var _i = 0, _Object$keys = Object.keys(blocks._blocks); _i < _Object$keys.length; _i++) {
                      var id = _Object$keys[_i];
                      var block = blocks._blocks[id];
                      if (block.opcode === "event_whenbroadcastreceived" && block.fields.BROADCAST_OPTION.value === name) {
                        uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
                      } else if (block.opcode === "event_broadcast" || block.opcode === "event_broadcastandwait") {
                        var broadcastInputBlockId = block.inputs.BROADCAST_INPUT.block;
                        var broadcastInputBlock = blocks._blocks[broadcastInputBlockId];
                        if (broadcastInputBlock) {
                          var eventName = void 0;
                          if (broadcastInputBlock.opcode === "event_broadcast_menu") {
                            eventName = broadcastInputBlock.fields.BROADCAST_OPTION.value;
                          } else {
                            eventName = msg("complex-broadcast");
                          }
                          if (eventName === name) {
                            uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
                          }
                        }
                      }
                    }
                  }
                } catch (err) {
                  _iterator16.e(err);
                } finally {
                  _iterator16.f();
                }
                return uses;
              }
            }, {
              key: "empty",
              value: function empty() {
                var _iterator17 = _createForOfIteratorHelper(this.items),
                  _step17;
                try {
                  for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                    var item = _step17.value;
                    if (this.el.contains(item)) {
                      this.el.removeChild(item);
                    }
                  }
                } catch (err) {
                  _iterator17.e(err);
                } finally {
                  _iterator17.f();
                }
                this.items = [];
                this.selected = null;
              }
            }]);
          }();
          Carousel = /*#__PURE__*/function () {
            function Carousel(utils) {
              _classCallCheck(this, Carousel);
              this.utils = utils;
              this.el = null;
              this.count = null;
              this.blocks = [];
              this.idx = 0;
            }
            return _createClass(Carousel, [{
              key: "build",
              value: function build(item, blocks, instanceBlock) {
                if (this.el && this.el.parentNode === item) {
                  // Same control... click again to go to next
                  this.navRight();
                } else {
                  this.remove();
                  this.blocks = blocks;
                  item.appendChild(this.createDom());
                  this.idx = 0;
                  if (instanceBlock) {
                    for (var _i2 = 0, _Object$keys2 = Object.keys(this.blocks); _i2 < _Object$keys2.length; _i2++) {
                      var idx = _Object$keys2[_i2];
                      var block = this.blocks[idx];
                      if (block.id === instanceBlock.id) {
                        this.idx = Number(idx);
                        break;
                      }
                    }
                  }
                  if (this.idx < this.blocks.length) {
                    this.utils.scrollBlockIntoView(this.blocks[this.idx]);
                  }
                }
              }
            }, {
              key: "createDom",
              value: function createDom() {
                var _this4 = this;
                this.el = document.createElement("span");
                this.el.className = "sa-find-carousel";
                var leftControl = this.el.appendChild(document.createElement("span"));
                leftControl.className = "sa-find-carousel-control";
                leftControl.textContent = "◀";
                leftControl.addEventListener("mousedown", function (e) {
                  return _this4.navLeft(e);
                });
                this.count = this.el.appendChild(document.createElement("span"));
                this.count.innerText = this.blocks.length > 0 ? this.idx + 1 + " / " + this.blocks.length : "0";
                var rightControl = this.el.appendChild(document.createElement("span"));
                rightControl.className = "sa-find-carousel-control";
                rightControl.textContent = "▶";
                rightControl.addEventListener("mousedown", function (e) {
                  return _this4.navRight(e);
                });
                return this.el;
              }
            }, {
              key: "inputKeyDown",
              value: function inputKeyDown(e) {
                // Left Arrow
                if (e.key === "ArrowLeft") {
                  if (this.el && this.blocks) {
                    this.navLeft(e);
                  }
                }

                // Right Arrow
                if (e.key === "ArrowRight") {
                  if (this.el && this.blocks) {
                    this.navRight(e);
                  }
                }
              }
            }, {
              key: "navLeft",
              value: function navLeft(e) {
                return this.navSideways(e, -1);
              }
            }, {
              key: "navRight",
              value: function navRight(e) {
                return this.navSideways(e, 1);
              }
            }, {
              key: "navSideways",
              value: function navSideways(e, dir) {
                if (this.blocks.length > 0) {
                  this.idx = (this.idx + dir + this.blocks.length) % this.blocks.length; // + length to fix negative modulo js issue.
                  this.count.innerText = this.idx + 1 + " / " + this.blocks.length;
                  this.utils.scrollBlockIntoView(this.blocks[this.idx]);
                }
                if (e) {
                  e.cancelBubble = true;
                  e.preventDefault();
                }
              }
            }, {
              key: "remove",
              value: function remove() {
                if (this.el) {
                  this.el.remove();
                  this.blocks = [];
                  this.idx = 0;
                }
              }
            }]);
          }();
          findBar = new FindBar();
          _doBlockClick_ = Blockly.Gesture.prototype.doBlockClick_;
          Blockly.Gesture.prototype.doBlockClick_ = function () {
            if (!addon.self.disabled && (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey)) {
              // Wheel button...
              // Intercept clicks to allow jump to...?
              var block = this.startBlock_;
              for (; block; block = block.getSurroundParent()) {
                if (block.type === "procedures_definition" || !this.jumpToDef && block.type === "procedures_call") {
                  var id = block.id ? block.id : block.getId ? block.getId() : null;
                  findBar.findInput.focus();
                  findBar.showDropDown(id);
                  return;
                }
                if (block.type === "data_variable" || block.type === "data_changevariableby" || block.type === "data_setvariableto") {
                  var _id = block.getVars()[0];
                  findBar.findInput.focus();
                  findBar.showDropDown(_id, block);
                  findBar.selVarID = _id;
                  return;
                }
                if (block.type === "event_whenbroadcastreceived" || block.type === "event_broadcastandwait" || block.type === "event_broadcast") {
                  // todo: actually index the broadcasts...!
                  var _id2 = block.id;
                  findBar.findInput.focus();
                  findBar.showDropDown(_id2, block);
                  findBar.selVarID = _id2;
                  return;
                }
              }
            }
            _doBlockClick_.call(this);
          };
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (e) {
            if (e.detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
              findBar.tabChanged();
            }
          });
        case 2:
          if (false) {}
          _context.n = 3;
          return addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
            markAsSeen: true,
            reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 3:
          root = _context.v;
          findBar.createDom(root);
          _context.n = 2;
          break;
        case 4:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/folders/_runtime_entry.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/folders/_runtime_entry.js ***!
  \*****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/folders/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./folder.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg");
/* generated by pull.js */



var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "folder.svg": _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/folders/userscript.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/folders/userscript.js ***!
  \*************************************************/
/*! exports provided: addDefaultAssetFolderIfMissing, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDefaultAssetFolderIfMissing", function() { return addDefaultAssetFolderIfMissing; });
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var DIVIDER = "//";

/**
 * getFolderFromName("B") === null
 * getFolderFromName("A//b") === "A"
 */
var getFolderFromName = function getFolderFromName(name) {
  var idx = name.indexOf(DIVIDER);
  if (idx === -1 || idx === 0) {
    return null;
  }
  return name.substr(0, idx);
};

/**
 * getNameWithoutFolder("B") === "B"
 * getNameWithoutFolder("A//b") === "b"
 */
var getNameWithoutFolder = function getNameWithoutFolder(name) {
  var idx = name.indexOf(DIVIDER);
  if (idx === -1 || idx === 0) {
    return name;
  }
  return name.substr(idx + DIVIDER.length);
};

/**
 * setFolderOfName("B", "y") === "y//B"
 * setFolderOfName("c//B", "y") === "y//B"
 * setFolderOfName("B", null) === "B"
 * setFolderOfName("c//B", null) === "B"
 */
var setFolderOfName = function setFolderOfName(name, folder) {
  var basename = getNameWithoutFolder(name);
  if (folder) {
    return "".concat(folder).concat(DIVIDER).concat(basename);
  }
  return basename;
};
var isValidFolderName = function isValidFolderName(name) {
  return !name.includes(DIVIDER) && !name.endsWith("/");
};
var RESERVED_NAMES = ["_mouse_", "_stage_", "_edge_", "_myself_", "_random_"];
var ensureNotReserved = function ensureNotReserved(name) {
  if (name === "") return "2";
  if (RESERVED_NAMES.includes(name)) return "".concat(name, "2");
  return name;
};
var currentSpriteFolder = null;
var currentAssetFolder = null;

/**
 * Used for compatibility with other addons that trap the add costume or add sound functions.
 * By default new assets are added to the folder that the user currently has open. This gets
 * encoded in the name of the asset, but that information may not be added until late in the
 * process. If you want to guarantee that your addon is aware of the asset name after
 * accounting for folders, then pass it into this function. The asset will be modified in-place.
 * It is safe to call this multiple times with the same asset.
 * @param {{name: string}} asset a sound or costume asset
 */
var addDefaultAssetFolderIfMissing = function addDefaultAssetFolderIfMissing(asset) {
  if (asset && currentAssetFolder !== null && typeof getFolderFromName(asset.name) !== "string") {
    asset.name = setFolderOfName(asset.name, currentAssetFolder);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref) {
    var addon, console, msg, REACT_INTERNAL_PREFIX, TYPE_SPRITES, TYPE_ASSETS, vm, reactInternalKey, currentSpriteItems, currentAssetItems, getSortableHOCFromElement, getBackpackFromElement, clamp, getItemData, openFolderAsset, imageIconSource, soundIconHref, folderColorStylesheet, folderColors, getFolderColorClass, fixOrderOfItemsInFolders, fixTargetOrder, fixCostumeOrder, fixSoundOrder, verifySortableHOC, verifySpriteSelectorItem, verifyVM, verifyBackpack, Cache, patchSortableHOC, getAllFolders, isFolderOpen, setFolderOpen, patchSpriteSelectorItem, patchVM, patchBackpack, _clickListener, spriteSelectorItemElement, sortableHOCInstance, spriteSelectorItemInstance, selectorListItem, _sortableHOCInstance;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          // The basic premise of how this addon works is relative simple.
          // scratch-gui renders the sprite selectors and asset selectors in a hierarchy like this:
          // <SelectorHOC>
          //   <SpriteSelectorItem />
          //   <SpriteSelectorItem />
          //   <SpriteSelectorItem />
          //   <SpriteSelectorItem />
          //   ...
          // </SelectorHOC>
          // It's obviously more complicated than that, but there are two important parts:
          // SelectorHOC - We override this to change which items are displayed
          // SpriteSelectorItem - We override this to change how items are displayed.
          //    Folders are just items rendered differently
          // These two components communicate through the `name` property of the items.
          // We touch some things on the VM to make dragging items work properly.
          REACT_INTERNAL_PREFIX = "__reactInternalInstance$";
          TYPE_SPRITES = 1;
          TYPE_ASSETS = 2; // We run too early, will be set later
          getSortableHOCFromElement = function getSortableHOCFromElement(el) {
            var nearestSpriteSelector = el.closest("[class*='sprite-selector_sprite-selector']");
            if (nearestSpriteSelector) {
              return nearestSpriteSelector[reactInternalKey].child.sibling.child.stateNode;
            }
            var nearestAssetPanelWrapper = el.closest('[class*="asset-panel_wrapper"]');
            if (nearestAssetPanelWrapper) {
              return nearestAssetPanelWrapper[reactInternalKey].child.child.stateNode;
            }
            throw new Error("cannot find SortableHOC");
          };
          getBackpackFromElement = function getBackpackFromElement(el) {
            var gui = el.closest('[class*="gui_editor-wrapper"]');
            if (!gui) throw new Error("cannot find Backpack");
            return gui[reactInternalKey].child.sibling.child.child.stateNode;
          };
          clamp = function clamp(n, min, max) {
            return Math.min(Math.max(n, min), max);
          };
          /**
           * @typedef {Object} ItemData
           * @property {string} realName
           * @property {number} realIndex
           * @property {string} inFolder
           * @property {string} folder
           * @property {boolean} folderOpen
           */
          /**
           * @returns {ItemData|null}
           */
          getItemData = function getItemData(item) {
            if (item && item.name && _typeof(item.name) === "object") {
              return item.name;
            }
            return null;
          };
          openFolderAsset = {
            assetId: "&__sa_folders_folder",
            encodeDataURI: function encodeDataURI() {
              // Doesn't actually need to be a data: URI
              return addon.self.getResource("/folder.svg") /* rewritten by pull.js */;
            }
          }; // https://github.com/scratchfoundation/scratch-gui/blob/develop/src/components/asset-panel/icon--sound.svg
          imageIconSource = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Sound\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M12.4785058,12.6666667 C12.3144947,12.6666667 12.1458852,12.6272044 11.9926038,12.5440517 C11.537358,12.2960031 11.3856094,11.7562156 11.6553847,11.3376335 C12.1688774,10.5371131 12.1688774,9.54491867 11.6553847,8.74580756 C11.3856094,8.32581618 11.537358,7.78602861 11.9926038,7.53798001 C12.452448,7.29275014 13.0379829,7.43086811 13.3046926,7.84804076 C14.1737981,9.20103311 14.1737981,10.8809986 13.3046926,12.233991 C13.1268862,12.5130457 12.806528,12.6666667 12.4785058,12.6666667 Z M15.3806784,13.8333333 C15.2408902,13.8333333 15.0958763,13.796281 14.9665396,13.7182064 C14.5785295,13.485306 14.4491928,12.9784829 14.6791247,12.5854634 C15.5949331,11.0160321 15.5949331,9.065491 14.6791247,7.49738299 C14.4491928,7.10436352 14.5785295,6.59621712 14.9665396,6.36331669 C15.3558562,6.13438616 15.8549129,6.26274605 16.0848448,6.65444223 C17.3050517,8.74260632 17.3050517,11.3389168 16.0848448,13.4270809 C15.9319924,13.6890939 15.6602547,13.8333333 15.3806784,13.8333333 Z M10.3043478,5.62501557 L10.3043478,13.873675 C10.3043478,14.850934 9.10969849,15.3625101 8.36478311,14.7038052 L6.7566013,13.2797607 C6.18712394,12.7762834 5.44499329,12.4968737 4.67362297,12.4968737 L4.3923652,12.4968737 C3.62377961,12.4968737 3,11.8935108 3,11.1470686 L3,8.36646989 C3,7.62137743 3.62377961,7.01666471 4.3923652,7.01666471 L4.65830695,7.01666471 C5.42967727,7.01666471 6.17180792,6.73725504 6.74128529,6.23377771 L8.36478311,4.79623519 C9.10969849,4.13753026 10.3043478,4.64910643 10.3043478,5.62501557 Z\" id=\"Combined-Shape\" fill=\"#575E75\"></path>\n    </g>\n</svg>";
          soundIconHref = "data:image/svg+xml;base64,".concat(btoa(imageIconSource));
          folderColorStylesheet = null;
          folderColors = Object.create(null);
          getFolderColorClass = function getFolderColorClass(folderName) {
            var mulberry32 = function mulberry32(a) {
              // https://stackoverflow.com/a/47593316
              return function () {
                var t = a += 0x6d2b79f5;
                t = Math.imul(t ^ t >>> 15, t | 1);
                t ^= t + Math.imul(t ^ t >>> 7, t | 61);
                return ((t ^ t >>> 14) >>> 0) / 4294967296;
              };
            };
            var hashCode = function hashCode(str) {
              // Based on Java's String.hashCode
              // https://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/lang/String.java#l1452
              var hash = 0;
              for (var i = 0; i < str.length; i++) {
                hash = 31 * hash + str.charCodeAt(i);
                hash = hash | 0;
              }
              return hash;
            };
            var random = function random(str) {
              var seed = hashCode(str);
              var rng = mulberry32(seed);
              // Run RNG a few times to get more random numbers, otherwise similar seeds tend to give somewhat similar results
              rng();
              rng();
              rng();
              rng();
              return rng();
            };
            if (!folderColors[folderName]) {
              if (!folderColorStylesheet) {
                folderColorStylesheet = document.createElement("style");
                document.head.appendChild(folderColorStylesheet);
              }
              var hue = random(folderName) * 360;
              var color = "hsla(".concat(hue, "deg, 100%, 85%, 0.5)");
              var id = Object.keys(folderColors).length;
              var className = "sa-folders-color-".concat(id);
              folderColors[folderName] = className;
              folderColorStylesheet.textContent += ".".concat(className, "{background-color:").concat(color, " !important;}");
              folderColorStylesheet.textContent += ".".concat(className, "[class*=\"sprite-selector_raised\"]:not([class*=\"sa-folders-folder\"]){background-color:hsla(").concat(hue, "deg, 100%, 77%, 1) !important;}");
            }
            return folderColors[folderName];
          };
          fixOrderOfItemsInFolders = function fixOrderOfItemsInFolders(items) {
            var folders = Object.create(null);
            var result = [];
            var _iterator = _createForOfIteratorHelper(items),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var item = _step.value;
                var name = item.getName ? item.getName() : item.name;
                var folder = getFolderFromName(name);
                if (typeof folder === "string") {
                  if (!folders[folder]) {
                    folders[folder] = [];
                    result.push(folders[folder]);
                  }
                  folders[folder].push(item);
                } else {
                  result.push(item);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
            var flatResult = result.flat();
            for (var i = 0; i < items.length; i++) {
              if (result[i] !== items[i]) {
                return {
                  items: flatResult,
                  changed: true
                };
              }
            }
            return {
              items: flatResult,
              changed: false
            };
          };
          fixTargetOrder = function fixTargetOrder() {
            var _fixOrderOfItemsInFol = fixOrderOfItemsInFolders(vm.runtime.targets),
              items = _fixOrderOfItemsInFol.items,
              changed = _fixOrderOfItemsInFol.changed;
            if (changed) {
              vm.runtime.targets = items;
              vm.emitTargetsUpdate();
            }
          };
          fixCostumeOrder = function fixCostumeOrder() {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
            var _fixOrderOfItemsInFol2 = fixOrderOfItemsInFolders(target.sprite.costumes),
              items = _fixOrderOfItemsInFol2.items,
              changed = _fixOrderOfItemsInFol2.changed;
            if (changed) {
              target.sprite.costumes = items;
              vm.emitTargetsUpdate();
            }
          };
          fixSoundOrder = function fixSoundOrder() {
            var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
            var _fixOrderOfItemsInFol3 = fixOrderOfItemsInFolders(target.sprite.sounds),
              items = _fixOrderOfItemsInFol3.items,
              changed = _fixOrderOfItemsInFol3.changed;
            if (changed) {
              target.sprite.sounds = items;
              vm.emitTargetsUpdate();
            }
          };
          verifySortableHOC = function verifySortableHOC(sortableHOCInstance) {
            var SortableHOC = sortableHOCInstance.constructor;
            if (Array.isArray(sortableHOCInstance.props.items) && (typeof sortableHOCInstance.props.selectedId === "string" || typeof sortableHOCInstance.props.selectedItemIndex === "number") && typeof sortableHOCInstance.containerBox !== "undefined" && typeof SortableHOC.prototype.componentDidMount === "undefined" && typeof SortableHOC.prototype.componentDidUpdate === "undefined" && typeof SortableHOC.prototype.handleAddSortable === "function" && typeof SortableHOC.prototype.handleRemoveSortable === "function" && typeof SortableHOC.prototype.setRef === "function") return;
            throw new Error("Can not comprehend SortableHOC");
          };
          verifySpriteSelectorItem = function verifySpriteSelectorItem(spriteSelectorItemInstance) {
            var SpriteSelectorItem = spriteSelectorItemInstance.constructor;
            if (_typeof(spriteSelectorItemInstance.props.asset) === "object" && typeof spriteSelectorItemInstance.props.name === "string" && typeof spriteSelectorItemInstance.props.dragType === "string" && typeof SpriteSelectorItem.prototype.handleClick === "function" && typeof SpriteSelectorItem.prototype.setRef === "function" && typeof SpriteSelectorItem.prototype.handleDrag === "function" && typeof SpriteSelectorItem.prototype.handleDragEnd === "function" && typeof SpriteSelectorItem.prototype.handleDelete === "function" && typeof SpriteSelectorItem.prototype.handleDuplicate === "function" && typeof SpriteSelectorItem.prototype.handleExport === "function") return;
            throw new Error("Can not comprehend SpriteSelectorItem");
          };
          verifyVM = function verifyVM(vm) {
            var target = vm.runtime.targets[0];
            if (typeof vm.installTargets === "function" && typeof vm.reorderTarget === "function" && typeof target.reorderCostume === "function" && typeof target.reorderSound === "function" && typeof target.addCostume === "function" && typeof target.addSound === "function") return;
            throw new Error("Can not comprehend VM");
          };
          verifyBackpack = function verifyBackpack(backpackInstance) {
            var Backpack = backpackInstance.constructor;
            if (typeof Backpack.prototype.handleDrop === "function" && typeof Backpack.prototype.componentDidUpdate === "undefined") {
              return;
            }
            throw new Error("Can not comprehend Backpack");
          };
          Cache = /*#__PURE__*/function () {
            function Cache() {
              _classCallCheck(this, Cache);
              this.cache = new Map();
              this.usedThisTick = new Set();
            }
            return _createClass(Cache, [{
              key: "has",
              value: function has(id) {
                return this.cache.has(id);
              }
            }, {
              key: "get",
              value: function get(id) {
                this.usedThisTick.add(id);
                return this.cache.get(id);
              }
            }, {
              key: "set",
              value: function set(id, value) {
                this.usedThisTick.add(id);
                this.cache.set(id, value);
              }
            }, {
              key: "startTick",
              value: function startTick() {
                this.usedThisTick.clear();
              }
            }, {
              key: "endTick",
              value: function endTick() {
                for (var _i = 0, _Array$from = Array.from(this.cache.keys()); _i < _Array$from.length; _i++) {
                  var id = _Array$from[_i];
                  if (!this.usedThisTick.has(id)) {
                    this.cache["delete"](id);
                  }
                }
              }
            }, {
              key: "clear",
              value: function clear() {
                this.usedThisTick.clear();
                this.cache.clear();
              }
            }]);
          }();
          patchSortableHOC = function patchSortableHOC(SortableHOC, type) {
            // SortableHOC should be: https://github.com/scratchfoundation/scratch-gui/blob/29d9851778febe4e69fa5111bf7559160611e366/src/lib/sortable-hoc.jsx#L8

            var itemCache = new Cache();
            var folderItemCache = new Cache();
            var folderAssetCache = new Cache();
            var PREVIEW_SIZE = 80;
            var PREVIEW_POSITIONS = [
            // x, y
            [0, 0], [PREVIEW_SIZE / 2, 0], [0, PREVIEW_SIZE / 2], [PREVIEW_SIZE / 2, PREVIEW_SIZE / 2]];
            var createFolderPreview = function createFolderPreview(items) {
              // Directly generate a string instead of using DOM API for performance as we deal with very large inlined images
              // Because the result is only used as an img src, XSS shouldn't be a concern
              var result = "data:image/svg+xml;,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(PREVIEW_SIZE, "\" height=\"").concat(PREVIEW_SIZE, "\">");
              for (var i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
                var item = items[i];
                var width = PREVIEW_SIZE / 2;
                var height = PREVIEW_SIZE / 2;
                var _PREVIEW_POSITIONS$i = _slicedToArray(PREVIEW_POSITIONS[i], 2),
                  x = _PREVIEW_POSITIONS$i[0],
                  y = _PREVIEW_POSITIONS$i[1];
                var src = void 0;
                if (item.asset) {
                  // TW: We can be 100% certain that escaping here is unnecessary
                  src = item.asset.encodeDataURI();
                } else if (item.costume && item.costume.asset) {
                  src = item.costume.asset.encodeDataURI();
                } else if (item.url) {
                  src = soundIconHref;
                }
                if (src) {
                  result += "<image width=\"".concat(width, "\" height=\"").concat(height, "\" x=\"").concat(x, "\" y=\"").concat(y, "\" href=\"").concat(src, "\"/>");
                }
              }
              result += "</svg>";
              return result;
            };
            var getUniqueIdOfFolderItems = function getUniqueIdOfFolderItems(items) {
              var id = "sa_folder&&";
              for (var i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
                var item = items[i];
                if (item.asset) {
                  id += item.asset.assetId;
                } else if (item.costume && item.costume.asset) {
                  id += item.costume.asset.assetId;
                } else if (item.url) {
                  id += item.url;
                }
                id += "&&";
              }
              return id;
            };
            var processItems = function processItems(openFolders, props) {
              var processItem = function processItem(item) {
                var itemId = item.name;
                var newItem;
                var itemData;
                if (itemCache.has(itemId)) {
                  newItem = itemCache.get(itemId);
                  itemData = newItem.name;
                } else {
                  itemData = {
                    toString: function toString() {
                      return "_".concat(item.name);
                    }
                  };
                  newItem = {};
                  itemCache.set(itemId, newItem);
                }
                var itemFolderName = getFolderFromName(item.name);
                Object.assign(newItem, item);
                itemData.realName = item.name;
                itemData.realIndex = i;
                itemData.inFolder = itemFolderName;
                newItem.name = itemData;
                return {
                  newItem: newItem,
                  itemData: itemData
                };
              };
              itemCache.startTick();
              folderItemCache.startTick();
              folderAssetCache.startTick();
              var folderOccurrences = new Map();
              var items = [];
              var result = {
                items: items
              };
              var i = 0;
              var _loop = function _loop() {
                var item = props.items[i];
                var folderName = getFolderFromName(item.name);
                if (folderName === null) {
                  items.push(processItem(item).newItem);
                  if (type === TYPE_ASSETS) {
                    var isSelected = props.selectedItemIndex === i;
                    if (isSelected) {
                      result.selectedItemIndex = items.length - 1;
                    }
                  }
                } else {
                  var isOpen = openFolders.indexOf(folderName) !== -1;
                  var folderItems = [];
                  while (i < props.items.length) {
                    var childItem = props.items[i];
                    var processedItem = processItem(childItem);
                    if (getFolderFromName(childItem.name) !== folderName) {
                      break;
                    }
                    folderItems.push(processedItem.newItem);
                    if (type === TYPE_ASSETS) {
                      var _isSelected = props.selectedItemIndex === i;
                      if (_isSelected) {
                        if (isOpen) {
                          result.selectedItemIndex = items.length + folderItems.length;
                        } else {
                          result.selectedItemIndex = -1;
                        }
                      }
                    }
                    i++;
                  }
                  i--;
                  var occurrence = folderOccurrences.get(folderName) || 0;
                  folderOccurrences.set(folderName, occurrence + 1);
                  var baseUniqueId = getUniqueIdOfFolderItems(folderItems);
                  var itemUniqueId = "".concat(isOpen, "&").concat(occurrence, "&").concat(folderName, "&").concat(baseUniqueId, "&");
                  var reactKey = "&__".concat(occurrence, "_").concat(folderName);
                  var assetUniqueId = baseUniqueId;
                  var folderItem;
                  var folderData;
                  if (folderItemCache.has(itemUniqueId)) {
                    folderItem = folderItemCache.get(itemUniqueId);
                    folderData = folderItem.name;
                  } else {
                    folderItem = {
                      // Can be used as a react key
                      id: {
                        toString: function toString() {
                          return reactKey;
                        }
                      }
                    };
                    folderData = {
                      // Can be used as a react key
                      toString: function toString() {
                        return reactKey;
                      }
                    };
                    folderItemCache.set(itemUniqueId, folderItem);
                  }
                  folderData.folder = folderName;
                  folderData.folderOpen = isOpen;
                  folderItem.items = folderItems;
                  folderItem.name = folderData;
                  var folderAsset;
                  if (isOpen) {
                    folderAsset = openFolderAsset;
                  } else {
                    if (folderAssetCache.has(assetUniqueId)) {
                      folderAsset = folderAssetCache.get(assetUniqueId);
                    } else {
                      folderAsset = {
                        assetId: assetUniqueId,
                        encodeDataURI: function encodeDataURI() {
                          return createFolderPreview(folderItems);
                        }
                      };
                      folderAssetCache.set(assetUniqueId, folderAsset);
                    }
                  }
                  if (type === TYPE_SPRITES) {
                    if (!folderItem.costume) folderItem.costume = {};
                    folderItem.costume.asset = folderAsset;
                    // For sprite items, `id` is used as the drag payload and toString is used as a React key
                    if (!folderItem.id) folderItem.id = {};
                    folderItem.id.sa_folder_items = folderItems;
                    folderItem.id.toString = function () {
                      return reactKey;
                    };
                  } else {
                    folderItem.asset = folderAsset;
                    if (!folderItem.dragPayload) folderItem.dragPayload = {};
                    folderItem.dragPayload.sa_folder_items = folderItems;
                  }
                  items.push(folderItem);
                  if (isOpen) {
                    var _iterator2 = _createForOfIteratorHelper(folderItems),
                      _step2;
                    try {
                      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var _item = _step2.value;
                        items.push(_item);
                      }
                    } catch (err) {
                      _iterator2.e(err);
                    } finally {
                      _iterator2.f();
                    }
                  }
                }
                i++;
              };
              while (i < props.items.length) {
                _loop();
              }
              itemCache.endTick();
              folderItemCache.endTick();
              folderAssetCache.endTick();
              return result;
            };
            var getSelectedItem = function getSelectedItem(sortable) {
              if (type === TYPE_SPRITES) {
                var selectedItem = sortable.props.items.find(function (i) {
                  return i.id === sortable.props.selectedId;
                });
                return selectedItem;
              } else if (type === TYPE_ASSETS) {
                var _selectedItem = sortable.props.items[sortable.props.selectedItemIndex];
                return _selectedItem;
              }
              return null;
            };
            SortableHOC.prototype.saInitialSetup = function () {
              itemCache.clear();
              folderItemCache.clear();
              folderAssetCache.clear();
              var folders = [];
              var selectedItem = getSelectedItem(this);
              if (selectedItem && !selectedItem.isStage) {
                var folder = getFolderFromName(selectedItem.name);
                folders.push(folder);
                if (type === TYPE_SPRITES) {
                  currentSpriteFolder = folder;
                } else if (type === TYPE_ASSETS) {
                  currentAssetFolder = folder;
                }
              }
              this.setState({
                folders: folders
              });
            };
            SortableHOC.prototype.componentDidMount = function () {
              // Do part of componentDidUpdate on mount as well
              var selectedItem = getSelectedItem(this);
              if (selectedItem) {
                var folder = getFolderFromName(selectedItem.name);
                if (type === TYPE_SPRITES) {
                  currentSpriteFolder = folder;
                } else if (type === TYPE_ASSETS) {
                  currentAssetFolder = folder;
                }
              }
              this.saInitialSetup();
            };
            SortableHOC.prototype.componentDidUpdate = function (prevProps, prevState) {
              var selectedItem = getSelectedItem(this);
              if (selectedItem) {
                var folder = getFolderFromName(selectedItem.name);
                var currentFolder = this.state.folders.includes(folder) ? folder : null;
                if (type === TYPE_SPRITES) {
                  currentSpriteFolder = currentFolder;
                } else if (type === TYPE_ASSETS) {
                  currentAssetFolder = currentFolder;
                }
                var selectedItemChanged;
                if (this.props.selectedId) {
                  selectedItemChanged = this.props.selectedId !== prevProps.selectedId;
                } else {
                  selectedItemChanged = this.props.items[this.props.selectedItemIndex] && prevProps.items[prevProps.selectedItemIndex] && this.props.items[this.props.selectedItemIndex].name !== prevProps.items[prevProps.selectedItemIndex].name;
                }
                if (selectedItemChanged) {
                  if (!selectedItem.isStage) {
                    if (typeof folder === "string" && !this.state.folders.includes(folder)) {
                      this.setState(function (prevState) {
                        return {
                          folders: [].concat(_toConsumableArray(prevState.folders), [folder])
                        };
                      });
                    }
                  }
                }
              }
            };
            var originalSortableHOCRender = SortableHOC.prototype.render;
            SortableHOC.prototype.render = function () {
              var originalProps = this.props;
              this.props = _objectSpread(_objectSpread({}, this.props), processItems(this.state && this.state.folders || [], this.props));
              if (type === TYPE_SPRITES) {
                currentSpriteItems = this.props.items;
              } else if (type === TYPE_ASSETS) {
                currentAssetItems = this.props.items;
              }
              var result = originalSortableHOCRender.call(this);
              this.props = originalProps;
              return result;
            };
          };
          getAllFolders = function getAllFolders(component) {
            var result = new Set();
            var items;
            if (component.props.dragType === "SPRITE") {
              items = currentSpriteItems;
            } else {
              items = currentAssetItems;
            }
            var _iterator3 = _createForOfIteratorHelper(items),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var item = _step3.value;
                var data = getItemData(item);
                if (typeof data.folder === "string") {
                  result.add(data.folder);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            return Array.from(result);
          };
          isFolderOpen = function isFolderOpen(component, folder) {
            var sortableHOCInstance = getSortableHOCFromElement(component.ref);
            var folders = sortableHOCInstance.state && sortableHOCInstance.state.folders || [];
            return folders.includes(folder);
          };
          setFolderOpen = function setFolderOpen(component, folder, open) {
            var sortableHOCInstance = getSortableHOCFromElement(component.ref);
            sortableHOCInstance.setState(function (prevState) {
              var folders = prevState && prevState.folders || [];
              folders = folders.filter(function (i) {
                return i !== folder;
              });
              if (open) {
                return {
                  folders: [].concat(_toConsumableArray(folders), [folder])
                };
              }
              return {
                folders: folders
              };
            });
          };
          _context3.n = 1;
          return addon.tab.scratchClassReady();
        case 1:
          addon.tab.createEditorContextMenu(function (ctxType, ctx) {
            if (ctxType !== "sprite" && ctxType !== "costume" && ctxType !== "sound") return;
            var component = ctx.target[addon.tab.traps.getInternalKey(ctx.target)]["return"]["return"]["return"].stateNode;
            var data = getItemData(component.props);
            if (!data) return;
            if (typeof data.folder === "string") {
              ctx.target.setAttribute("sa-folders-context-type", "folder");
              var renameItems = function renameItems(newName) {
                var isOpen = isFolderOpen(component, data.folder);
                setFolderOpen(component, data.folder, false);
                if (isOpen && typeof newName === "string") {
                  setFolderOpen(component, newName, true);
                }
                if (component.props.dragType === "SPRITE") {
                  var _iterator4 = _createForOfIteratorHelper(vm.runtime.targets),
                    _step4;
                  try {
                    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                      var target = _step4.value;
                      if (target.isOriginal) {
                        if (getFolderFromName(target.getName()) === data.folder) {
                          vm.renameSprite(target.id, ensureNotReserved(setFolderOfName(target.getName(), newName)));
                        }
                      }
                    }
                  } catch (err) {
                    _iterator4.e(err);
                  } finally {
                    _iterator4.f();
                  }
                  vm.emitWorkspaceUpdate();
                  fixTargetOrder();
                } else if (component.props.dragType === "COSTUME") {
                  for (var i = 0; i < vm.editingTarget.sprite.costumes.length; i++) {
                    var costume = vm.editingTarget.sprite.costumes[i];
                    if (getFolderFromName(costume.name) === data.folder) {
                      vm.renameCostume(i, setFolderOfName(costume.name, newName));
                    }
                  }
                  fixCostumeOrder();
                } else if (component.props.dragType === "SOUND") {
                  for (var _i2 = 0; _i2 < vm.editingTarget.sprite.sounds.length; _i2++) {
                    var sound = vm.editingTarget.sprite.sounds[_i2];
                    if (getFolderFromName(sound.name) === data.folder) {
                      vm.renameSound(_i2, setFolderOfName(sound.name, newName));
                    }
                  }
                  fixSoundOrder();
                }
              };
              var renameFolder = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
                  var newName;
                  return _regenerator().w(function (_context) {
                    while (1) switch (_context.n) {
                      case 0:
                        _context.n = 1;
                        return addon.tab.prompt(msg("rename-folder-prompt-title"), msg("rename-folder-prompt"), data.folder, {
                          useEditorClasses: true
                        });
                      case 1:
                        newName = _context.v;
                        if (!(newName === null)) {
                          _context.n = 2;
                          break;
                        }
                        return _context.a(2);
                      case 2:
                        if (isValidFolderName(newName)) {
                          _context.n = 3;
                          break;
                        }
                        alert(msg("name-not-allowed"));
                        return _context.a(2);
                      case 3:
                        // Empty name will remove the folder
                        if (!newName) {
                          newName = null;
                        }
                        renameItems(newName);
                      case 4:
                        return _context.a(2);
                    }
                  }, _callee);
                }));
                return function renameFolder() {
                  return _ref3.apply(this, arguments);
                };
              }();
              var removeFolder = function removeFolder() {
                renameItems(null);
              };
              return [{
                className: "sa-folders-rename-folder",
                label: msg("rename-folder"),
                callback: renameFolder,
                position: "assetContextMenuAfterDelete",
                order: 10
              }, {
                className: "sa-folders-remove-folder",
                label: msg("remove-folder"),
                callback: removeFolder,
                position: "assetContextMenuAfterDelete",
                order: 11
              }];
            } else {
              ctx.target.setAttribute("sa-folders-context-type", "asset");
              var setFolder = function setFolder(folder) {
                if (component.props.dragType === "SPRITE") {
                  var target = vm.runtime.getTargetById(component.props.id);
                  vm.renameSprite(component.props.id, ensureNotReserved(setFolderOfName(target.getName(), folder)));
                  fixTargetOrder();
                  vm.emitWorkspaceUpdate();
                } else if (component.props.dragType === "COSTUME") {
                  var _data = getItemData(component.props);
                  var index = _data.realIndex;
                  var asset = vm.editingTarget.sprite.costumes[index];
                  vm.renameCostume(vm.editingTarget.sprite.costumes.indexOf(asset), setFolderOfName(asset.name, folder));
                  fixCostumeOrder();
                } else if (component.props.dragType === "SOUND") {
                  var _data2 = getItemData(component.props);
                  var _index = _data2.realIndex;
                  var _asset = vm.editingTarget.sprite.sounds[_index];
                  vm.renameSound(vm.editingTarget.sprite.sounds.indexOf(_asset), setFolderOfName(_asset.name, folder));
                  fixSoundOrder();
                }
              };
              var createFolder = /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
                  var name;
                  return _regenerator().w(function (_context2) {
                    while (1) switch (_context2.n) {
                      case 0:
                        _context2.n = 1;
                        return addon.tab.prompt(msg("name-prompt-title"), msg("name-prompt"), getNameWithoutFolder(data.realName), {
                          useEditorClasses: true
                        });
                      case 1:
                        name = _context2.v;
                        if (!(name === null)) {
                          _context2.n = 2;
                          break;
                        }
                        return _context2.a(2);
                      case 2:
                        if (isValidFolderName(name)) {
                          _context2.n = 3;
                          break;
                        }
                        alert(msg("name-not-allowed"));
                        return _context2.a(2);
                      case 3:
                        setFolder(name);
                      case 4:
                        return _context2.a(2);
                    }
                  }, _callee2);
                }));
                return function createFolder() {
                  return _ref4.apply(this, arguments);
                };
              }();
              var base = [{
                border: true,
                className: "sa-folders-create-folder",
                label: msg("create-folder"),
                callback: createFolder,
                position: "assetContextMenuAfterDelete",
                order: 13
              }];
              var currentFolder = data.inFolder;
              if (typeof currentFolder === "string") {
                base.push({
                  className: "sa-folders-remove-from-folder",
                  label: msg("remove-from-folder"),
                  callback: function callback() {
                    return setFolder(null);
                  },
                  position: "assetContextMenuAfterDelete",
                  order: 14
                });
              }
              return base.concat(getAllFolders(component).filter(function (folder) {
                return folder !== currentFolder;
              }).map(function (folder, i) {
                return {
                  className: "sa-folders-add-to-folder",
                  label: msg("add-to-folder", {
                    folder: folder
                  }),
                  callback: function callback() {
                    return setFolder(folder);
                  },
                  position: "assetContextMenuAfterDelete",
                  order: 20 + i
                };
              }));
            }
          });
          patchSpriteSelectorItem = function patchSpriteSelectorItem(SpriteSelectorItem) {
            var _loop2 = function _loop2() {
              var method = _arr[_i3];
              var original = SpriteSelectorItem.prototype[method];
              SpriteSelectorItem.prototype[method] = function () {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                if (typeof this.props.id === "number") {
                  var itemData = getItemData(this.props);
                  if (itemData) {
                    var originalProps = this.props;
                    this.props = _objectSpread(_objectSpread({}, originalProps), {}, {
                      id: itemData.realIndex
                    });
                    var ret = original.call.apply(original, [this].concat(args));
                    this.props = originalProps;
                    return ret;
                  }
                }
                return original.call.apply(original, [this].concat(args));
              };
            };
            for (var _i3 = 0, _arr = ["handleDelete", "handleDuplicate", "handleExport"]; _i3 < _arr.length; _i3++) {
              _loop2();
            }
            var originalHandleDragEnd = SpriteSelectorItem.prototype.handleDragEnd;
            SpriteSelectorItem.prototype.handleDragEnd = function () {
              var itemData = getItemData(this.props);
              if (itemData) {
                if (typeof itemData.realIndex === "number" && this.props.dragging) {
                  // If the item is being dragged onto another group (eg. costume list -> sprite list)
                  // then we fake a drag event to make the `index` be the real index
                  var originalIndex = this.props.index;
                  var realIndex = itemData.realIndex;
                  if (originalIndex !== realIndex) {
                    var currentOffset = addon.tab.redux.state.scratchGui.assetDrag.currentOffset;
                    var sortableHOCInstance = getSortableHOCFromElement(this.ref);
                    if (currentOffset && sortableHOCInstance && sortableHOCInstance.getMouseOverIndex() === null) {
                      this.props.index = realIndex;
                      this.handleDrag(currentOffset);
                      this.props.index = originalIndex;
                    }
                  }
                }
              }
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return originalHandleDragEnd.call.apply(originalHandleDragEnd, [this].concat(args));
            };
            var originalHandleClick = SpriteSelectorItem.prototype.handleClick;
            SpriteSelectorItem.prototype.handleClick = function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              var e = args[0];
              if (e && !this.noClick) {
                var itemData = getItemData(this.props);
                if (itemData) {
                  if (typeof itemData.folder === "string") {
                    e.preventDefault();
                    setFolderOpen(this, itemData.folder, !isFolderOpen(this, itemData.folder));
                    return;
                  }
                  if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
                    e.preventDefault();
                    if (this.props.onClick) {
                      this.props.onClick(itemData.realIndex);
                    }
                    return;
                  }
                }
              }
              return originalHandleClick.call.apply(originalHandleClick, [this].concat(args));
            };
            var originalRender = SpriteSelectorItem.prototype.render;
            SpriteSelectorItem.prototype.render = function () {
              var itemData = getItemData(this.props);
              if (itemData) {
                var originalProps = this.props;
                this.props = _objectSpread({}, this.props);
                if (typeof itemData.realName === "string") {
                  this.props.name = getNameWithoutFolder(itemData.realName);
                }
                if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
                  // Convert 0-indexed to 1-indexed
                  this.props.number = itemData.realIndex + 1;
                }
                if (typeof itemData.folder === "string") {
                  this.props.name = itemData.folder;
                  if (itemData.folderOpen) {
                    this.props.details = msg("open-folder");
                  } else {
                    this.props.details = msg("closed-folder");
                  }
                  this.props.selected = false;
                  this.props.number = null;
                  this.props.className += " ".concat(getFolderColorClass(itemData.folder), " sa-folders-folder");
                }
                if (typeof itemData.inFolder === "string") {
                  this.props.className += " ".concat(getFolderColorClass(itemData.inFolder));
                }
                var result = originalRender.call(this);
                this.props = originalProps;
                return result;
              }
              return originalRender.call(this);
            };
          };
          patchVM = function patchVM() {
            var RenderedTarget = vm.runtime.targets[0].constructor;
            var originalInstallTargets = vm.installTargets;
            vm.installTargets = function () {
              for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                args[_key4] = arguments[_key4];
              }
              if (currentSpriteFolder !== null) {
                var targets = args[0];
                var wholeProject = args[2];
                if (Array.isArray(targets) && !wholeProject) {
                  var _iterator5 = _createForOfIteratorHelper(targets),
                    _step5;
                  try {
                    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                      var target = _step5.value;
                      if (target.sprite) {
                        target.sprite.name = setFolderOfName(target.sprite.name, currentSpriteFolder);
                      }
                    }
                  } catch (err) {
                    _iterator5.e(err);
                  } finally {
                    _iterator5.f();
                  }
                }
              }
              return originalInstallTargets.call.apply(originalInstallTargets, [this].concat(args)).then(function (r) {
                fixTargetOrder();
                return r;
              });
            };
            var originalDuplicateSprite = vm.duplicateSprite;
            vm.duplicateSprite = function () {
              for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
                args[_key5] = arguments[_key5];
              }
              return originalDuplicateSprite.call.apply(originalDuplicateSprite, [this].concat(args)).then(function (r) {
                fixTargetOrder();
                return r;
              });
            };
            var originalAddCostume = RenderedTarget.prototype.addCostume;
            RenderedTarget.prototype.addCostume = function () {
              for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
                args[_key6] = arguments[_key6];
              }
              addDefaultAssetFolderIfMissing(args[0]);
              var r = originalAddCostume.call.apply(originalAddCostume, [this].concat(args));
              fixCostumeOrder(this);
              return r;
            };
            var originalAddSound = RenderedTarget.prototype.addSound;
            RenderedTarget.prototype.addSound = function () {
              for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
              }
              addDefaultAssetFolderIfMissing(args[0]);
              var r = originalAddSound.call.apply(originalAddSound, [this].concat(args));
              fixSoundOrder(this);
              return r;
            };
            var abstractReorder = function abstractReorder(_ref5, itemIndex, newIndex) {
              var _assets;
              var guiItems = _ref5.guiItems,
                getAll = _ref5.getAll,
                set = _ref5.set,
                rename = _ref5.rename,
                getVMItemFromGUIItem = _ref5.getVMItemFromGUIItem,
                zeroIndexed = _ref5.zeroIndexed,
                onFolderChanged = _ref5.onFolderChanged;
              // First index depends on zeroIndexed
              itemIndex = clamp(itemIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
              newIndex = clamp(newIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
              if (itemIndex === newIndex) {
                return false;
              }
              var assets = getAll();
              var originalAssets = getAll();
              var targetItem = guiItems[itemIndex - (zeroIndexed ? 0 : 1)];
              var itemAtNewIndex = guiItems[newIndex - (zeroIndexed ? 0 : 1)];
              var targetItemData = getItemData(targetItem);
              var itemAtNewIndexData = getItemData(itemAtNewIndex);
              if (!targetItemData || !itemAtNewIndexData) {
                console.warn("should never happen");
                return false;
              }
              var reorderingItems = typeof targetItemData.folder === "string" ? targetItem.items : [targetItem];
              var reorderingAssets = reorderingItems.map(function (i) {
                return getVMItemFromGUIItem(i, assets);
              }).filter(function (i) {
                return i;
              });
              if (typeof itemAtNewIndexData.realIndex === "number") {
                var newTarget = getVMItemFromGUIItem(itemAtNewIndex, assets);
                if (!newTarget || reorderingAssets.includes(newTarget)) {
                  // Dragging folder into itself or target doesn't exist. Ignore.
                  return false;
                }
              }
              var newFolder = null;
              assets = assets.filter(function (i) {
                return !reorderingAssets.includes(i);
              });
              var realNewIndex;
              if (newIndex === (zeroIndexed ? 0 : 1)) {
                realNewIndex = zeroIndexed ? 0 : 1;
              } else if (newIndex === guiItems.length - (zeroIndexed ? 1 : 0)) {
                realNewIndex = assets.length;
              } else if (typeof itemAtNewIndexData.realIndex === "number") {
                newFolder = typeof itemAtNewIndexData.inFolder === "string" ? itemAtNewIndexData.inFolder : null;
                var newAsset = getVMItemFromGUIItem(itemAtNewIndex, assets);
                if (!newAsset) {
                  console.warn("should never happen");
                  return false;
                }
                realNewIndex = assets.indexOf(newAsset);
                if (newIndex > itemIndex) {
                  realNewIndex++;
                }
              } else if (typeof itemAtNewIndexData.folder === "string") {
                var item;
                var offset = 0;
                if (newIndex < itemIndex) {
                  // A B [C D E] F G
                  //    ^----------*
                  // A B C [D] E F G
                  //      ^--------*
                  item = itemAtNewIndex.items[0];
                } else if (itemAtNewIndexData.folderOpen) {
                  // A B [C D E] F G
                  //   *---^
                  item = itemAtNewIndex.items[0];
                  newFolder = itemAtNewIndexData.folder;
                } else {
                  // A B [C] D E F G
                  //   *----^
                  item = itemAtNewIndex.items[itemAtNewIndex.items.length - 1];
                  offset = 1;
                }
                var _newAsset = getVMItemFromGUIItem(item, assets);
                if (_newAsset) {
                  realNewIndex = assets.indexOf(_newAsset) + offset;
                } else {
                  // Edge case: Dragging the first item of a list on top of the folder item
                  // A B [C D E] F G
                  //    ^---*
                  _newAsset = getVMItemFromGUIItem(item, originalAssets);
                  if (!_newAsset) {
                    console.warn("should never happen");
                    return false;
                  }
                  realNewIndex = originalAssets.indexOf(_newAsset) + offset;
                }
              } else {
                console.warn("should never happen");
                return false;
              }
              if (typeof targetItemData.folder === "string" && newFolder !== null) {
                // Cannot drag a folder into another folder
                return;
              }
              if (realNewIndex < (zeroIndexed ? 0 : 1) || realNewIndex > assets.length) {
                console.warn("should never happen");
                return false;
              }
              (_assets = assets).splice.apply(_assets, [realNewIndex, 0].concat(_toConsumableArray(reorderingAssets)));
              set(assets);

              // If the folder has changed, update item names to match.
              if (typeof targetItemData.folder !== "string" && targetItemData.inFolder !== newFolder) {
                var _iterator6 = _createForOfIteratorHelper(reorderingAssets),
                  _step6;
                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var asset = _step6.value;
                    var name = asset.getName ? asset.getName() : asset.name;
                    rename(asset, setFolderOfName(name, newFolder));
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }
                if (onFolderChanged) {
                  onFolderChanged();
                }
              }
              return true;
            };
            vm.constructor.prototype.reorderTarget = function (targetIndex, newIndex) {
              var _this = this;
              return abstractReorder({
                getAll: function getAll() {
                  return _this.runtime.targets;
                },
                set: function set(targets) {
                  _this.runtime.targets = targets;
                  _this.emitTargetsUpdate();
                },
                rename: function rename(item, name) {
                  _this.renameSprite(item.id, ensureNotReserved(name));
                },
                getVMItemFromGUIItem: function getVMItemFromGUIItem(item, targets) {
                  return targets.find(function (i) {
                    return i.id === item.id;
                  });
                },
                onFolderChanged: function onFolderChanged() {
                  _this.emitWorkspaceUpdate();
                },
                guiItems: currentSpriteItems,
                zeroIndexed: false
              }, targetIndex, newIndex);
            };
            RenderedTarget.prototype.reorderCostume = function (costumeIndex, newIndex) {
              var _this2 = this;
              return abstractReorder({
                getAll: function getAll() {
                  return _this2.sprite.costumes;
                },
                set: function set(assets) {
                  _this2.sprite.costumes = assets;
                },
                rename: function rename(item, name) {
                  _this2.renameCostume(_this2.sprite.costumes.indexOf(item), name);
                },
                getVMItemFromGUIItem: function getVMItemFromGUIItem(item, costumes) {
                  var itemData = getItemData(item);
                  return costumes.find(function (c) {
                    return c.name === itemData.realName;
                  });
                },
                guiItems: currentAssetItems,
                zeroIndexed: true
              }, costumeIndex, newIndex);
            };
            RenderedTarget.prototype.reorderSound = function (soundIndex, newIndex) {
              var _this3 = this;
              return abstractReorder({
                getAll: function getAll() {
                  return _this3.sprite.sounds;
                },
                set: function set(assets) {
                  _this3.sprite.sounds = assets;
                },
                rename: function rename(item, name) {
                  _this3.renameSound(_this3.sprite.sounds.indexOf(item), name);
                },
                getVMItemFromGUIItem: function getVMItemFromGUIItem(item, sounds) {
                  var itemData = getItemData(item);
                  return sounds.find(function (c) {
                    return c.name === itemData.realName;
                  });
                },
                guiItems: currentAssetItems,
                zeroIndexed: true
              }, soundIndex, newIndex);
            };

            // Temporal bug fix for #5762
            var originalShareSoundToTarget = vm.shareSoundToTarget;
            vm.shareSoundToTarget = function () {
              for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                args[_key8] = arguments[_key8];
              }
              var target = this.runtime.getTargetById(args[1]);
              if (!target) {
                // Avoid reading property from null
                return Promise.reject(new Error("Dropping sound into folder is not supported"));
                // This would also work no matter what we returned, probably
                // Original method returns a promise, so here too
              }
              return originalShareSoundToTarget.call.apply(originalShareSoundToTarget, [this].concat(args));
            };
          };
          patchBackpack = function patchBackpack(backpackInstance) {
            var Backpack = backpackInstance.constructor;
            Backpack.prototype.sa_loadNextItem = function () {
              if (!this.sa_queuedItems) return;
              var item = this.sa_queuedItems.pop();
              if (item) {
                var payload;
                var type;
                if (item.dragPayload) {
                  if (item.url) {
                    type = "SOUND";
                  } else {
                    type = "COSTUME";
                  }
                  payload = item.dragPayload;
                } else if (item.id) {
                  type = "SPRITE";
                  payload = item.id;
                }
                if (type && payload) {
                  originalHandleDrop.call(this, {
                    dragType: type,
                    payload: payload
                  });
                }
              }
            };
            Backpack.prototype.componentDidUpdate = function (prevProps, prevState) {
              if (!this.state.loading && prevState.loading && !this.state.error) {
                this.sa_loadNextItem();
              }
            };
            var originalHandleDrop = Backpack.prototype.handleDrop;
            Backpack.prototype.handleDrop = function () {
              var _this4 = this;
              for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
                args[_key9] = arguments[_key9];
              }
              // When a folder is dropped into the backpack, upload all the items in the folder.
              var dragInfo = args[0];
              var folderItems = dragInfo && dragInfo.payload && dragInfo.payload.sa_folder_items;
              if (Array.isArray(folderItems)) {
                addon.tab.confirm("", msg("confirm-backpack-folder"), {
                  useEditorClasses: true
                }).then(function (result) {
                  if (!result) return;
                  _this4.sa_queuedItems = folderItems;
                  _this4.sa_loadNextItem();
                });
                return;
              }
              return originalHandleDrop.call.apply(originalHandleDrop, [this].concat(args));
            };
            backpackInstance.handleDrop = Backpack.prototype.handleDrop.bind(backpackInstance);
          }; // Backpack
          _clickListener = function clickListener(e) {
            if (!e.target.closest('[class*="backpack_backpack-header_"]')) {
              return;
            }
            setTimeout(function () {
              var backpackContainer = document.querySelector("[class^='backpack_backpack-list_']");
              if (!backpackContainer) {
                return;
              }
              document.removeEventListener("click", _clickListener);
              var backpackInstance = getBackpackFromElement(backpackContainer);
              verifyBackpack(backpackInstance);
              patchBackpack(backpackInstance);
            });
          };
          document.addEventListener("click", _clickListener, true);
          _context3.n = 2;
          return addon.tab.waitForElement("[class^='sprite-selector_sprite-wrapper']", {
            reduxCondition: function reduxCondition(state) {
              return !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 2:
          spriteSelectorItemElement = _context3.v;
          vm = addon.tab.traps.vm;
          reactInternalKey = Object.keys(spriteSelectorItemElement).find(function (i) {
            return i.startsWith(REACT_INTERNAL_PREFIX);
          });
          sortableHOCInstance = getSortableHOCFromElement(spriteSelectorItemElement);
          spriteSelectorItemInstance = spriteSelectorItemElement[reactInternalKey].child.child.child.stateNode;
          verifySortableHOC(sortableHOCInstance);
          verifySpriteSelectorItem(spriteSelectorItemInstance);
          verifyVM(vm);
          patchSortableHOC(sortableHOCInstance.constructor, TYPE_SPRITES);
          patchSpriteSelectorItem(spriteSelectorItemInstance.constructor);
          sortableHOCInstance.saInitialSetup();
          patchVM();
          _context3.n = 3;
          return addon.tab.waitForElement("[class*='selector_list-item']", {
            reduxCondition: function reduxCondition(state) {
              return state.scratchGui.editorTab.activeTabIndex !== 0 && !state.scratchGui.mode.isPlayerOnly;
            }
          });
        case 3:
          selectorListItem = _context3.v;
          _sortableHOCInstance = getSortableHOCFromElement(selectorListItem);
          verifySortableHOC(_sortableHOCInstance);
          patchSortableHOC(_sortableHOCInstance.constructor, TYPE_ASSETS);
          _sortableHOCInstance.saInitialSetup();
        case 4:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/BlockRenderer.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/BlockRenderer.js ***!
  \***************************************************************/
/*! exports provided: getBlockHeight, BlockComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockHeight", function() { return getBlockHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderBlock; });
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/middle-click-popup/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
/**
 * @file Contains the code for rendering the blocks in the middle click dropdown.
 * Main function is {@link renderBlock} which takes in a block and returns a renderer SVG element.
 * @author Tacodiva
 */



var SVG_NS = "http://www.w3.org/2000/svg";
var BlockShapes = {
  // eg (my variable)
  Round: {
    padding: 12,
    minWidth: 20,
    backgroundPath: function backgroundPath(width) {
      return "m -12 -20 m 20 0 h ".concat(width - 16, " a 20 20 0 0 1 0 40 H 8 a 20 20 0 0 1 0 -40 z");
    },
    /**
     * 'Snuggling' is my wholesome term for when a block can sit extra close to a block
     * of the same shape as it. Take a look at the blocks ( ( "" + "" ) - "" ) and
     * ( < "" = "" > - "" ), observe how there's a lot more blank space in the outer
     * block in the second example, this is because in the first example the '+' block
     * can snuggle with the '-' block.
     */
    snugglePadding: 0,
    get snuggleWith() {
      // Don't feel bad BlockShapes.Round, I only snuggle with myself too :_(
      return [BlockShapes.Round];
    }
  },
  // eg <() = ()>
  Boolean: {
    padding: 20,
    minWidth: 20,
    backgroundPath: function backgroundPath(width) {
      return "m -20 -20 m 20 0 h ".concat(width, " l 20 20 l -20 20 H 0 l -20 -20 l 20 -20 z");
    },
    snugglePadding: 0,
    get snuggleWith() {
      return [BlockShapes.Boolean];
    }
  },
  // Square dropdowns like variables
  SquareInput: {
    padding: 8,
    minWidth: 20,
    backgroundPath: function backgroundPath(width) {
      return "m -2 -16 h ".concat(width + 4, " a 4 4 0 0 1 4 4 V 12 a 4 4 0 0 1 -4 4 H -2 a 4 4 0 0 1 -4 -4 V -12 a 4 4 0 0 1 4 -4");
    }
  },
  // eg show
  Stack: {
    padding: 8,
    minWidth: 60,
    backgroundPath: function backgroundPath(width) {
      return "m -8 -20 A 4 4 0 0 1 -4 -24 H 4 c 2 0 3 1 4 2 l 4 4 c 1 1 2 2 4 2 h 12 c 2 0 3 -1 4 -2 l 4 -4 C 37 -23 38 -24 40 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 40 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H -4 a 4 4 0 0 1 -4 -4 z");
    }
  },
  // eg when I start as a clone
  Hat: {
    padding: 8,
    minWidth: 60,
    backgroundPath: function backgroundPath(width) {
      return "m -8 -20 A 4 4 0 0 1 -4 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 40 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H -4 a 4 4 0 0 1 -4 -4 z");
    }
  },
  // eg delete this clone
  End: {
    padding: 8,
    minWidth: 60,
    backgroundPath: function backgroundPath(width) {
      return "m -8 -20 A 4 4 0 0 1 -4 -24 H 4 c 2 0 3 1 4 2 l 4 4 c 1 1 2 2 4 2 h 12 c 2 0 3 -1 4 -2 l 4 -4 C 37 -23 38 -24 40 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H -4 a 4 4 0 0 1 -4 -4 z");
    }
  },
  // The white oval for text or number inputs
  TextInput: {
    padding: 12,
    minWidth: 16,
    backgroundPath: function backgroundPath(width) {
      return "m -12 -16 m 16 0 h ".concat(width - 8, " a 16 16 0 0 1 0 32 H 4 a 16 16 0 0 1 0 -32 z");
    },
    snugglePadding: 4,
    get snuggleWith() {
      return [BlockShapes.Round];
    }
  },
  BooleanInput: {
    padding: 16,
    minWidth: 16,
    backgroundPath: function backgroundPath(width) {
      return "m 0 -16 h ".concat(width, " l 16 16 l -16 16 h -16 l -16 -16 l 16 -16 z");
    },
    snugglePadding: 6,
    get snuggleWith() {
      return [BlockShapes.Boolean];
    }
  },
  HorizontalBlock: {
    padding: 16,
    minWidth: 45,
    backgroundPath: function backgroundPath(width) {
      return "M -4 -20 a 4 4 0 0 1 4 -4 H ".concat(width + 8, " a 4 4 0 0 1 4 4 v 2 c 0 2 -1 3 -2 4 l -4 4 c -1 1 -2 2 -2 4 v 12 c 0 2 1 3 2 4 l 4 4 c 1 1 2 2 2 4 v 2 a 4 4 0 0 1 -4 4 H 0 a 4 4 0 0 1 -4 -4 v -2 c 0 -2 -1 -3 -2 -4 l -4 -4 c -1 -1 -2 -2 -2 -4 v -12 c 0 -2 1 -3 2 -4 l 4 -4 c 1 -1 2 -2 2 -4 z");
    }
  },
  HorizontalBlockEnd: {
    padding: 16,
    minWidth: 45,
    backgroundPath: function backgroundPath(width) {
      return "M -4 -20 a 4 4 0 0 1 4 -4 H ".concat(width + 8, " a 4 4 0 0 1 4 4 V 20 a 4 4 0 0 1 -4 4 H 0 a 4 4 0 0 1 -4 -4 v -2 c 0 -2 -1 -3 -2 -4 l -4 -4 c -1 -1 -2 -2 -2 -4 v -12 c 0 -2 1 -3 2 -4 l 4 -4 c 1 -1 2 -2 2 -4 z");
    }
  }
};

/**
 * Gets the block shape info from {@link BlockShapes} given a {@link BlockShape}.
 * @param {BlockShape} shape
 */
function getShapeInfo(shape, isVertical) {
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round) return BlockShapes.Round;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean) return BlockShapes.Boolean;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack) return isVertical ? BlockShapes.Stack : BlockShapes.HorizontalBlock;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat) return BlockShapes.Hat;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End) return isVertical ? BlockShapes.End : BlockShapes.HorizontalBlockEnd;
  throw new Error(shape);
}

/**
 * @param {BlockInstance} block
 * @returns {number}
 */
function getBlockHeight(block) {
  switch (block.typeInfo.shape) {
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack:
      return 62;
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round:
      return 48;
  }
  return 0;
}
var BLOCK_ELEMENT_SPACING = 8;

/**
 * A part of a block. Think of these like the different parts in the 'make a block' menu.
 */
var BlockComponent = /*#__PURE__*/_createClass(function BlockComponent(element, padding, width, snuggleWith, snugglePadding) {
  _classCallCheck(this, BlockComponent);
  this.dom = element;
  this.padding = padding;
  this.width = width;
  this.snuggleWith = snuggleWith;
  this.snugglePadding = snugglePadding;
});

/**
 * Creates a BlockComponent with some text. Like the 'label' element in the make a block menu.
 * @param {string} text The contents of the component.
 * @param {SVGElement} container The element to add the text to.
 * @returns {BlockComponent} The BlockComponent.
 */
function createTextComponent(text, fillVar, container) {
  var textElement = container.appendChild(document.createElementNS(SVG_NS, "text"));
  textElement.setAttribute("class", "blocklyText");
  textElement.style.fill = "var(".concat(fillVar, ")");
  textElement.setAttribute("dominant-baseline", "middle");
  textElement.setAttribute("dy", 1);
  textElement.appendChild(document.createTextNode(text));
  return new BlockComponent(textElement, 0, Object(_module_js__WEBPACK_IMPORTED_MODULE_1__["getTextWidth"])(textElement));
}

/**
 * Creates a DOM element to hold all the contents of a block.
 * A block could be the top level block, or it could be a block like (() + ()) that's inside
 * another block.
 * @returns {SVGElement} The SVGElement which will contain all the block's components.
 */
function createBlockContainer() {
  var container = document.createElementNS(SVG_NS, "g");
  var background = document.createElementNS(SVG_NS, "path");
  background.setAttribute("class", "blocklyPath");
  container.appendChild(background);
  return container;
}

/**
 * Creates a block component from a container containing all its components.
 * @param {SVGElement} container The block container, created by {@link createBlockContainer}.
 * @param {object} shape An object containing information of the shape of the block to be created. From the {@link BlockShapes} object.
 * @param {string|null} categoryClass The category of the block, used for filling the background.
 * @param {string} fill
 * @param {string} stroke
 * @param {number} width The width of the background of the block.
 */
function createBlockComponent(container, shape, categoryClass, fill, stroke, width) {
  if (width < shape.minWidth) width = shape.minWidth;
  container.classList.add("sa-block-color");
  if (categoryClass) {
    container.classList.add(categoryClass);
  }
  var background = container.children[0];
  var style = "";
  if (fill) style += "fill: var(".concat(fill, ");");
  if (stroke) style += "stroke: var(".concat(stroke, ");");
  background.setAttribute("style", style);
  background.setAttribute("d", shape.backgroundPath(width));
  return new BlockComponent(container, shape.padding, width + shape.padding * 2, shape.snuggleWith, shape.snugglePadding);
}
function createBackedTextedComponent(text, container, shape, categoryClass, fill, stroke, textVar) {
  var blockContainer = createBlockContainer();
  container.appendChild(blockContainer);
  var textElement = createTextComponent(text, textVar, blockContainer);
  if (textElement.width < shape.minWidth) {
    textElement.dom.setAttribute("x", (shape.minWidth - textElement.width) / 2);
  }
  var blockElement = createBlockComponent(blockContainer, shape, categoryClass, fill, stroke, textElement.width);
  return blockElement;
}

/**
 * Renders a block, with the center of it's leftmost side located at 0, 0.
 * @param {BlockInstance} block
 * @param {SVGElement} container
 * @returns {BlockComponent} The rendered block
 */
function renderBlock(block, container) {
  var blockComponent = _renderBlock(block, container, block.typeInfo.category, true);
  blockComponent.dom.classList.add("sa-block-color");
  blockComponent.dom.setAttribute("transform", "translate(".concat(blockComponent.padding, ", 0)"));
  return blockComponent;
}

/**
 * Renders a block, with the center of it's leftmost side located at 0, 0.
 * @param {BlockInstance} block
 * @param {SVGAElement} container
 * @param {string} parentCategory The category of this blocks parent. If no parent, than this blocks category.
 * @returns {BlockComponent} The rendered component.
 */
function _renderBlock(block, container, parentCategory, isVertical) {
  var blockContainer = container.appendChild(createBlockContainer());
  var shape = getShapeInfo(block.typeInfo.shape, isVertical);
  var category = block.typeInfo.category;
  var COLOR_CLASSES = ["motion", "looks", "sounds", "events", "control", "sensing", "operators", "data", "data-lists", "list", "more", "pen", "addon-custom-block"];
  var categoryClass = COLOR_CLASSES.includes(category.name) ? "sa-block-color-" + category.name : null;
  var xOffset = 0;
  var inputIdx = 0;
  for (var partIdx = 0; partIdx < block.typeInfo.parts.length; partIdx++) {
    var blockPart = block.typeInfo.parts[partIdx];
    var component = void 0;
    if (typeof blockPart === "string") {
      component = createTextComponent(blockPart, "--sa-block-text", blockContainer);
    } else {
      var blockInput = block.inputs[inputIdx++];
      if (blockInput instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInstance"]) {
        component = _renderBlock(blockInput, blockContainer, block.typeInfo.category, false);
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputEnum"]) {
        if (blockPart.isRound) {
          component = createBackedTextedComponent(blockInput.string, blockContainer, BlockShapes.TextInput, categoryClass, "--sa-block-background-secondary, ".concat(category.colorSecondary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-text");
        } else {
          component = createBackedTextedComponent(blockInput.string, blockContainer, BlockShapes.SquareInput, categoryClass, "--sa-block-background-primary, ".concat(category.colorPrimary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-text");
        }
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputBoolean"]) {
        component = createBackedTextedComponent("", blockContainer, BlockShapes.BooleanInput, categoryClass, "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-text");
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputBlock"]) {
        component = createBackedTextedComponent("", blockContainer, BlockShapes.HorizontalBlock, categoryClass, "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-text");
      } else {
        var _ref, _blockInput$toString;
        component = createBackedTextedComponent((_ref = (_blockInput$toString = blockInput === null || blockInput === void 0 ? void 0 : blockInput.toString()) !== null && _blockInput$toString !== void 0 ? _blockInput$toString : blockPart.defaultValue) !== null && _ref !== void 0 ? _ref : "", blockContainer, BlockShapes.TextInput, categoryClass, "--sa-block-input-color, ".concat(category.colorColor), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-input-text");
        component.dom.classList.add("blocklyNonEditableText");
      }
    }
    var xTranslation = xOffset + component.padding;
    if (partIdx === 0 || partIdx === block.typeInfo.parts.length - 1) {
      if (component.snuggleWith && component.snuggleWith.indexOf(shape) !== -1) {
        var positionDelta = component.snugglePadding - component.padding;
        component.width += positionDelta;
        if (partIdx === 0) {
          xTranslation += positionDelta;
        }
      }
    }
    component.dom.setAttribute("transform", "translate(".concat(xTranslation, ", 0)"));
    xOffset += BLOCK_ELEMENT_SPACING + component.width;
  }
  return createBlockComponent(blockContainer, shape, categoryClass, "--sa-block-background-primary, ".concat(category.colorPrimary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), xOffset - BLOCK_ELEMENT_SPACING);
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/BlockTypeInfo.js ***!
  \***************************************************************/
/*! exports provided: BlockInputType, BlockInput, BlockInputRound, BlockInputString, BlockInputNumber, BlockInputBoolean, BlockInputColour, BlockInputEnum, BlockInputBlock, BlockInstance, BlockShape, BlockTypeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputType", function() { return BlockInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInput", function() { return BlockInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputRound", function() { return BlockInputRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputString", function() { return BlockInputString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputNumber", function() { return BlockInputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputBoolean", function() { return BlockInputBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputColour", function() { return BlockInputColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputEnum", function() { return BlockInputEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputBlock", function() { return BlockInputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInstance", function() { return BlockInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockShape", function() { return BlockShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTypeInfo", function() { return BlockTypeInfo; });
var _BlockShape;
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Contains the code for enumerating the different types of blocks in a workspace,
 * and provides a more friendly way to create instances blocks with some inputs.
 */

/**
 * A numeric value to represent the type of an {@link BlockInput}
 * @readonly
 * @enum {number}
 */
var BlockInputType = {
  STRING: 0,
  NUMBER: 1,
  BOOLEAN: 2,
  COLOUR: 3,
  ENUM: 4,
  BLOCK: 5
};

/**
 * @abstract
 */
var BlockInput = /*#__PURE__*/function () {
  /**
   * @param {BlockInputType} type
   * @param {number} inputIdx
   * @param {number} fieldIdx
   */
  function BlockInput(type, inputIdx, fieldIdx) {
    _classCallCheck(this, BlockInput);
    if (this.constructor === BlockInput) throw new Error("Abstract classes can't be instantiated.");
    /** @type {BlockInputType} */
    this.type = type;
    /** @type {number} The index of this input in the workspace version of the block's input array.  */
    this.inputIdx = inputIdx;
    /**
     * The index of this input in the workspace version of the block's field array.
     * The special case of -1 means that in the workspace version, this input is inside a sub-block,
     * that has been abstracted away.
     *  @type {number}
     */
    this.fieldIdx = fieldIdx;
    /** @type {*} The default value to set this input to, or null to not set it to anything. */
    this.defaultValue = null;
  }

  /**
   * Sets the field this input refers to on a block to a value.
   * @param {BlockInstance} block
   * @param {*} value
   * @abstract
   */
  return _createClass(BlockInput, [{
    key: "setValue",
    value: function setValue(block, value) {
      throw new Error("Sub-class must override abstract method.");
    }

    /**
     * Gets the input this block input refers to on block.
     * @param {BlockInstance} block
     * @returns {*}
     * @protected
     */
  }, {
    key: "getInput",
    value: function getInput(block) {
      return block.inputList[this.inputIdx];
    }

    /**
     * Gets the field this block input refers to on block.
     * @param {BlockInstance} block
     * @returns {*}
     * @protected
     */
  }, {
    key: "getField",
    value: function getField(block) {
      if (this.fieldIdx === -1) {
        return this.getInput(block).connection.targetBlock().inputList[0].fieldRow[0];
      } else {
        return this.getInput(block).fieldRow[this.fieldIdx];
      }
    }
  }]);
}();

/**
 * The base class for any round input.
 * @abstract
 */
var BlockInputRound = /*#__PURE__*/function (_BlockInput) {
  function BlockInputRound(type, inputIdx, fieldIdx, defaultValue) {
    var _this;
    _classCallCheck(this, BlockInputRound);
    _this = _callSuper(this, BlockInputRound, [type, inputIdx, fieldIdx]);
    if (_this.constructor === BlockInputRound) throw new Error("Abstract classes can't be instantiated.");
    _this.defaultValue = defaultValue;
    return _this;
  }
  _inherits(BlockInputRound, _BlockInput);
  return _createClass(BlockInputRound, [{
    key: "setValue",
    value: function setValue(block, value) {
      if (value instanceof BlockInstance) {
        var subblock = value.createWorkspaceForm();
        if (!subblock.outputConnection) throw new Error('Cannot put block "' + subblock.typeInfo.id + '" into a round type input.');
        subblock.outputConnection.connect(this.getInput(block).connection);
      } else {
        this.getField(block).setValue(this._toFieldValue(value));
      }
    }

    /**
     * Converts a value passed in to setValue to a value we can set the block's field to.
     * @param {*} value
     * @protected
     */
  }, {
    key: "_toFieldValue",
    value: function _toFieldValue(value) {
      throw new Error("Sub-class must override abstract method.");
    }
  }]);
}(BlockInput);
var BlockInputString = /*#__PURE__*/function (_BlockInputRound) {
  function BlockInputString(inputIdx, fieldIdx, defaultValue) {
    _classCallCheck(this, BlockInputString);
    return _callSuper(this, BlockInputString, [BlockInputType.STRING, inputIdx, fieldIdx, defaultValue]);
  }
  _inherits(BlockInputString, _BlockInputRound);
  return _createClass(BlockInputString, [{
    key: "_toFieldValue",
    value: function _toFieldValue(value) {
      var type = _typeof(value);
      if (type === "number") return value;
      if (type === "string") return value;
      throw new Error("Cannot set round type input to value of type " + type);
    }
  }]);
}(BlockInputRound);
var BlockInputNumber = /*#__PURE__*/function (_BlockInputRound2) {
  function BlockInputNumber(inputIdx, fieldIdx, defaultValue) {
    _classCallCheck(this, BlockInputNumber);
    return _callSuper(this, BlockInputNumber, [BlockInputType.NUMBER, inputIdx, fieldIdx, defaultValue]);
  }
  _inherits(BlockInputNumber, _BlockInputRound2);
  return _createClass(BlockInputNumber, [{
    key: "_toFieldValue",
    value: function _toFieldValue(value) {
      var type = _typeof(value);
      if (type === "number") return value;
      if (type === "string") {
        if (value.length === 0) return value;
        var number = parseFloat(value);
        if (isNaN(number)) throw new Error('Cannot set numeric type input to string "' + value + '".');
        return value;
      }
      throw new Error("Cannot set round type input to value of type " + type);
    }
  }]);
}(BlockInputRound);
var BlockInputBoolean = /*#__PURE__*/function (_BlockInput2) {
  function BlockInputBoolean(inputIdx, fieldIdx) {
    _classCallCheck(this, BlockInputBoolean);
    return _callSuper(this, BlockInputBoolean, [BlockInputType.BOOLEAN, inputIdx, fieldIdx]);
  }
  _inherits(BlockInputBoolean, _BlockInput2);
  return _createClass(BlockInputBoolean, [{
    key: "setValue",
    value: function setValue(block, value) {
      if (value instanceof BlockInstance) {
        var subblock = value.createWorkspaceForm();
        if (!subblock.outputConnection || value.typeInfo.shape !== BlockShape.Boolean) throw new Error('Cannot put block "' + value.typeInfo.id + '" into a boolean type input.');
        subblock.outputConnection.connect(this.getInput(block).connection);
      } else {
        throw new Error("Boolean type inputs can only contain blocks.");
      }
    }
  }]);
}(BlockInput);
var BlockInputColour = /*#__PURE__*/function (_BlockInput3) {
  function BlockInputColour(inputIdx, fieldIdx) {
    _classCallCheck(this, BlockInputColour);
    return _callSuper(this, BlockInputColour, [BlockInputType.COLOUR, inputIdx, fieldIdx]);
  }
  _inherits(BlockInputColour, _BlockInput3);
  return _createClass(BlockInputColour, [{
    key: "setValue",
    value: function setValue(block, value) {
      if (typeof value !== "string") throw new Error("Cannot set color type input to value of type " + (typeof type === "undefined" ? "undefined" : _typeof(type)));
      if (!value.match(/^#[0-9a-fA-F]{6}$/)) throw new Error('Invalid color "' + value + '".');
      this.getField(block).setValue(value);
    }
  }]);
}(BlockInput);

/**
 * @typedef BlockInputEnumOption
 * @property {string} value The internal name of this input option
 * @property {string} string The localized name of this input option.
 */

/**
 * A block input that can be one of a list of values.
 * Usually represented by a dropdown menu in Scratch.
 */
var BlockInputEnum = /*#__PURE__*/function (_BlockInput4) {
  /**
   * @param {Array} options
   * @param {number} inputIdx
   * @param {number} fieldIdx
   */
  function BlockInputEnum(options, inputIdx, fieldIdx, isRound) {
    var _this2;
    _classCallCheck(this, BlockInputEnum);
    _this2 = _callSuper(this, BlockInputEnum, [BlockInputType.ENUM, inputIdx, fieldIdx]);
    /** @type {BlockInputEnumOption[]} */
    _this2.values = [];
    for (var i = 0; i < options.length; i++) {
      if (typeof options[i][1] === "string" && BlockInputEnum.INVALID_VALUES.indexOf(options[i][1]) === -1) {
        _this2.values.push({
          value: options[i][1],
          string: options[i][0].replace(/\u00a0/g, " ")
        });
      }
    }
    _this2.isRound = isRound;
    _this2.defaultValue = _this2.values[0];
    return _this2;
  }

  /**
   * @param {BlockInputEnumOption} value
   */
  _inherits(BlockInputEnum, _BlockInput4);
  return _createClass(BlockInputEnum, [{
    key: "setValue",
    value: function setValue(block, value) {
      if (this.isRound && value instanceof BlockInstance) {
        value.createWorkspaceForm().outputConnection.connect(this.getInput(block).connection);
      } else {
        if (this.values.indexOf(value) === -1) throw new Error("Invalid enum value. Expected item from the values list.");
        this.getField(block).setValue(value.value);
      }
    }
  }]);
}(BlockInput);

/**
 * A block input that is a stack of blocks.
 * The 'if' block has a single block input, the 'if else' block has two block inputs.
 */
_defineProperty(BlockInputEnum, "INVALID_VALUES", ["DELETE_VARIABLE_ID", "RENAME_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID", "NEW_BROADCAST_MESSAGE_ID",
// editor-searchable-dropdowns compatibility
"createGlobalVariable", "createLocalVariable", "createGlobalList", "createLocalList", "createBroadcast",
// rename-broadcasts compatibility
"RENAME_BROADCAST_MESSAGE_ID"]);
var BlockInputBlock = /*#__PURE__*/function (_BlockInput5) {
  function BlockInputBlock(inputIdx, fieldIdx) {
    _classCallCheck(this, BlockInputBlock);
    return _callSuper(this, BlockInputBlock, [BlockInputType.BLOCK, inputIdx, fieldIdx]);
  }
  _inherits(BlockInputBlock, _BlockInput5);
  return _createClass(BlockInputBlock, [{
    key: "setValue",
    value: function setValue(block, value) {
      if (value instanceof BlockInstance) {
        var subblock = value.createWorkspaceForm();
        if (!subblock.previousConnection || !value.typeInfo.shape.canStackUp) throw new Error('Cannot put block "' + value.typeInfo.id + '" into a block type input.');
        subblock.previousConnection.connect(this.getInput(block).connection);
      } else {
        throw new Error("Block type inputs can only contain blocks.");
      }
    }
  }]);
}(BlockInput);

/**
 * Because everyone was thinking "You know what Scratch really needs, ANOTHER way to represent blocks!"
 *
 * Another way to represent a Scratch block.
 */
var BlockInstance = /*#__PURE__*/function () {
  function BlockInstance(typeInfo) {
    _classCallCheck(this, BlockInstance);
    /** @type {BlockTypeInfo} */
    this.typeInfo = typeInfo;
    /** @type {Array} */
    for (var _len = arguments.length, inputs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      inputs[_key - 1] = arguments[_key];
    }
    this.inputs = inputs;
    for (var i = 0; i < this.typeInfo.inputs.length; i++) {
      if (this.inputs[i] == null) this.inputs[i] = this.typeInfo.inputs[i].defaultValue;
    }
  }

  /**
   * Creates a real Scratch block from this imaginary representation.
   * @returns {*} A 'workspace form' block.
   */
  return _createClass(BlockInstance, [{
    key: "createWorkspaceForm",
    value: function createWorkspaceForm() {
      if (this.typeInfo.id === "control_stop") {
        this.typeInfo.domForm.querySelector("mutation").setAttribute("hasnext", "" + (this.inputs[0].value === "other scripts in sprite"));
      }
      var block = this.typeInfo.Blockly.Xml.domToBlock(this.typeInfo.domForm, this.typeInfo.workspace);
      for (var i = 0; i < this.typeInfo.inputs.length; i++) {
        var inputValue = this.inputs[i];
        if (inputValue != null) this.typeInfo.inputs[i].setValue(block, inputValue);
      }
      return block;
    }
  }]);
}();

/**
 * An enum for the different shapes of blocks.
 * Contains information on what each type of block can do.
 */
var BlockShape = /*#__PURE__*/function () {
  function BlockShape(canStackUp, canStackDown, canBeRound) {
    _classCallCheck(this, BlockShape);
    /** @type {boolean} Can blocks be stacked above this block? */
    this.canStackUp = canStackUp;
    /** @type {boolean} Can blocks be stacked below this block? */
    this.canStackDown = canStackDown;
    /** @type {boolean} Does this block fit into a round hole? */
    this.canBeRound = canBeRound;
  }
  return _createClass(BlockShape, null, [{
    key: "getBlockShape",
    value: function getBlockShape(workspaceBlock) {
      if (workspaceBlock.edgeShape_ === 2) {
        return BlockShape.Round;
      } else if (workspaceBlock.edgeShape_ === 1) {
        return BlockShape.Boolean;
      } else if (workspaceBlock.startHat_) {
        return BlockShape.Hat;
      } else if (!workspaceBlock.nextConnection) {
        return BlockShape.End;
      } else {
        return BlockShape.Stack;
      }
    }
  }]);
}();

/**
 * @typedef BlockCategory
 * @property {string} name
 * @property {string} colorPrimary
 * @property {string} colorSecondary
 * @property {string} colorTertiary
 */

/**
 * A type of Scratch block, like 'move () steps'. Every instance of the 'move () steps'
 * block shares this type info.
 */
_BlockShape = BlockShape;
_defineProperty(BlockShape, "Round", new _BlockShape(false, false, true));
_defineProperty(BlockShape, "Boolean", new _BlockShape(false, false, true));
_defineProperty(BlockShape, "Hat", new _BlockShape(false, true, false));
_defineProperty(BlockShape, "End", new _BlockShape(true, false, false));
_defineProperty(BlockShape, "Stack", new _BlockShape(true, true, false));
var BlockTypeInfo = /*#__PURE__*/function () {
  function BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs, shape) {
    _classCallCheck(this, BlockTypeInfo);
    /** @type {string} */
    this.id = workspaceForm.id;
    this.workspaceForm = workspaceForm;
    this.domForm = domForm;
    /** @type {BlockShape} */
    this.shape = shape !== null && shape !== void 0 ? shape : BlockShape.getBlockShape(this.workspaceForm);
    /** @type {BlockCategory} */
    this.category = BlockTypeInfo.getBlockCategory(this.workspaceForm, vm);
    this.workspace = workspace;
    this.Blockly = Blockly;

    /**
     * A list of all the 'parts' of this block. Each part is either an instance
     * of BlockInput or a string for some text which is a part of a block.
     *
     * For example, for the 'say' block, the first element of the array would be
     * the string 'say', and the second element would be a BlockInput of type
     * BlockInputString.
     * @type {(BlockInput | string)[]}
     */
    this.parts = parts;
    /**
     * A list of all this block's inputs. The same as this.parts, but with the
     * strings omitted.
     * @type {BlockInput[]}
     */
    this.inputs = inputs;
  }

  /**
   * Creates a block of this type with the given inputs
   * @param  {...any} inputs
   * @returns {BlockInstance}
   */
  return _createClass(BlockTypeInfo, [{
    key: "createBlock",
    value: function createBlock() {
      for (var _len2 = arguments.length, inputs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        inputs[_key2] = arguments[_key2];
      }
      return _construct(BlockInstance, [this].concat(inputs));
    }
  }], [{
    key: "getBlockCategory",
    value:
    /**
     * @param {*} block Block in workspace form
     * @param {*} vm
     * @returns {BlockCategory} The block's category
     */
    function getBlockCategory(block, vm) {
      var name;
      if (block.type === "procedures_call") {
        if (vm.getAddonBlock(block.getProcCode())) name = "addon-custom-block";else name = "more";
      } else if (block.usesDefaultExtensionColors) name = "pen";else if (block.type === "sensing_of") name = "sensing";else if (block.type === "event_whenbackdropswitchesto") name = "events";else name = block.category_;
      return {
        name: name,
        colorPrimary: block.colour_,
        colorSecondary: block.colourSecondary_,
        colorTertiary: block.colourTertiary_
      };
    }

    /**
     * Enumerates all the different types of blocks, given a workspace.
     * @param {Blockly} Blockly
     * @param {*} vm
     * @param {*} workspace
     * @param {(string) => string} locale The translations used for converting icons into text
     * @returns {BlockTypeInfo[]}
     */
  }, {
    key: "getBlocks",
    value: function getBlocks(Blockly, vm, workspace, locale) {
      var _workspace$getToolbox;
      var flyoutWorkspace = (_workspace$getToolbox = workspace.getToolbox()) === null || _workspace$getToolbox === void 0 ? void 0 : _workspace$getToolbox.flyout_.getWorkspace();
      if (!flyoutWorkspace) return [];
      var blocks = [];
      var flyoutDom = Blockly.Xml.workspaceToDom(flyoutWorkspace);
      var flyoutDomBlockMap = {};
      var _iterator = _createForOfIteratorHelper(flyoutDom.children),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var blockDom = _step.value;
          if (blockDom.tagName === "BLOCK") {
            var id = blockDom.getAttribute("id");
            flyoutDomBlockMap[id] = blockDom;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var _iterator2 = _createForOfIteratorHelper(flyoutWorkspace.getTopBlocks()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var workspaceBlock = _step2.value;
          blocks.push.apply(blocks, _toConsumableArray(BlockTypeInfo._createBlocks(workspace, vm, Blockly, locale, workspaceBlock, flyoutDomBlockMap[workspaceBlock.id])));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return blocks;
    }
  }, {
    key: "_createBlocks",
    value: function _createBlocks(workspace, vm, Blockly, locale, workspaceForm, domForm) {
      var parts = [];
      var inputs = [];
      var addInput = function addInput(input) {
        parts.push(input);
        inputs.push(input);
      };
      var addFieldInputs = function addFieldInputs(field, inputIdx, fieldIdx) {
        if (field.className_ === "blocklyText blocklyDropdownText") {
          var options = field.getOptions();
          addInput(new BlockInputEnum(options, inputIdx, fieldIdx, fieldIdx === -1));
        } else if (field instanceof Blockly.FieldImage) {
          switch (field.src_.split("/").pop()) {
            case "green-flag.svg":
              parts.push(locale("/_general/blocks/green-flag"));
              break;
            case "rotate-right.svg":
              parts.push(locale("/_general/blocks/clockwise"));
              break;
            case "rotate-left.svg":
              parts.push(locale("/_general/blocks/anticlockwise"));
              break;
          }
        } else {
          if (!field.argType_) {
            if (field.getText().trim().length !== 0) parts.push(field.getText());
          } else if (field.argType_[0] === "colour") {
            addInput(new BlockInputColour(inputIdx, fieldIdx));
          } else if (field.argType_[1] === "number") {
            addInput(new BlockInputNumber(inputIdx, fieldIdx, field.text_));
          } else {
            addInput(new BlockInputString(inputIdx, fieldIdx, field.text_));
          }
        }
      };
      for (var inputIdx = 0; inputIdx < ((_workspaceForm$inputL = workspaceForm.inputList) === null || _workspaceForm$inputL === void 0 ? void 0 : _workspaceForm$inputL.length); inputIdx++) {
        var _workspaceForm$inputL;
        var input = workspaceForm.inputList[inputIdx];
        for (var fieldIdx = 0; fieldIdx < input.fieldRow.length; fieldIdx++) {
          addFieldInputs(input.fieldRow[fieldIdx], inputIdx, fieldIdx);
        }
        if (input.connection) {
          var innerBlock = input.connection.targetBlock();
          if (innerBlock) {
            if (innerBlock.inputList.length !== 1 || innerBlock.inputList[0].fieldRow.length !== 1) throw new Error("This should never happen.");
            var innerField = innerBlock.inputList[0].fieldRow[0];
            addFieldInputs(innerField, inputIdx, -1);
          } else {
            if (input.outlinePath) {
              addInput(new BlockInputBoolean(inputIdx, -1));
            } else {
              addInput(new BlockInputBlock(inputIdx, -1));
            }
          }
        }
      }
      if (workspaceForm.id === "of") {
        var blocks = [];
        var baseVarInputIdx, baseTargetInputIdx;
        // In most languages, the 'of' block inputs are: [variable] of [sprite], and in others
        // it's the opposite (sprite then variable). We can tell that the variable comes first
        // if the first input is round.
        if (inputs[0].isRound) {
          baseVarInputIdx = 1;
          baseTargetInputIdx = 0;
        } else {
          baseVarInputIdx = 0;
          baseTargetInputIdx = 1;
        }
        var baseVarInput = inputs[baseVarInputIdx];
        var baseTargetInput = inputs[baseTargetInputIdx];
        var baseVarPartIdx = parts.indexOf(baseVarInput);
        var baseTargetPartIdx = parts.indexOf(baseTargetInput);

        // Adapted from https://github.com/scratchfoundation/scratch-gui/blob/cc6e6324064493cf1788f3c7c0ff31e4057964ee/src/lib/blocks.js#L230
        var stageOptions = [[Blockly.Msg.SENSING_OF_BACKDROPNUMBER, "backdrop #"], [Blockly.Msg.SENSING_OF_BACKDROPNAME, "backdrop name"], [Blockly.Msg.SENSING_OF_VOLUME, "volume"]];
        var spriteOptions = [[Blockly.Msg.SENSING_OF_XPOSITION, "x position"], [Blockly.Msg.SENSING_OF_YPOSITION, "y position"], [Blockly.Msg.SENSING_OF_DIRECTION, "direction"], [Blockly.Msg.SENSING_OF_COSTUMENUMBER, "costume #"], [Blockly.Msg.SENSING_OF_COSTUMENAME, "costume name"], [Blockly.Msg.SENSING_OF_SIZE, "size"], [Blockly.Msg.SENSING_OF_VOLUME, "volume"]];
        var _iterator3 = _createForOfIteratorHelper(baseTargetInput.values),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var targetInput = _step3.value;
            var options = void 0;
            var isStage = targetInput.value === "_stage_";
            if (isStage) {
              var stageVariableOptions = vm.runtime.getTargetForStage().getAllVariableNamesInScopeByType("");
              options = stageVariableOptions.map(function (variable) {
                return [variable, variable];
              }).concat(stageOptions);
            } else {
              var sprite = vm.runtime.getSpriteTargetByName(targetInput.value);
              var spriteVariableOptions = sprite.getAllVariableNamesInScopeByType("", true);
              options = spriteVariableOptions.map(function (variable) {
                return [variable, variable];
              }).concat(spriteOptions);
            }
            var ofInputs = [];
            ofInputs[baseVarInputIdx] = new BlockInputEnum(options, baseVarInput.inputIdx, baseVarInput.fieldIdx, false);
            ofInputs[baseTargetInputIdx] = new BlockInputEnum([[targetInput.string, targetInput.value]], baseTargetInput.inputIdx, baseTargetInput.fieldIdx, isStage);
            var ofParts = [].concat(parts);
            ofParts[baseVarPartIdx] = ofInputs[baseVarInputIdx];
            ofParts[baseTargetPartIdx] = ofInputs[baseTargetInputIdx];
            blocks.push(new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, ofParts, ofInputs));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        return blocks;
      } else if (workspaceForm.id === "control_stop") {
        // This block is special because when "other scripts in sprite" is selected the block
        //  needs to be BlockShape.End.
        var oldInput = inputs[0];
        var otherScriptsOptionIdx = oldInput.values.findIndex(function (option) {
          return option.string === "other scripts in sprite";
        });
        var otherScriptsOption = oldInput.values.splice(otherScriptsOptionIdx, 1)[0];
        var newInput = new BlockInputEnum([[otherScriptsOption.string, otherScriptsOption.value]], oldInput.inputIdx, oldInput.fieldIdx, oldInput.isRound);
        var newBlockParts = [].concat(parts);
        newBlockParts[parts.indexOf(oldInput)] = newInput;
        return [new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs, BlockShape.End), new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, newBlockParts, [newInput], BlockShape.Stack)];
      } else {
        return [new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs)];
      }
    }
  }]);
}();

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/WorkspaceQuerier.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/WorkspaceQuerier.js ***!
  \******************************************************************/
/*! exports provided: QueryResult, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryResult", function() { return QueryResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkspaceQuerier; });
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
var _TokenTypeBlank, _TokenTypeColor;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Contains all the logic for the parsing of queries by the {@link WorkspaceQuerier}.
 * I'm really sorry if somebody other than me ever has to debug this.
 * Wish you luck <3
 *
 * Once you *think* you understand the function of the major classes, read the docs on
 * {@link WorkspaceQuerier._createTokenGroups} for some more specifics on the algorithm works,
 * and to achieve maximum enlightenment.
 *
 * @author Tacodiva
 */



/**
 *
 * A token is a part of a query that is interpreted in a specific way.
 *
 * In the query 'say 1 = Hello World', the base tokens are 'say', '1', '=, and 'Hello World'.
 * Each token contains where in the query it is located and what {@link TokenType} it is.
 *
 * Sometimes the same section of a query has multiple tokens because there are different
 * interpretations of what type of token it is. For example, imagine you had a variable named
 * 'x'. The query 'set x to 10', is ambiguous because you could be referring to the motion block
 * `set x to ()` or the data block `set [x] to ()`. This ambiguity results in two different
 * tokens being creating for 'x', one is 'set x to' referring to the motion block, and the other
 * is just 'x', referring to the variable.
 *
 * Calling this a 'token' is somewhat misleading, often language interpreters will have a 'parse tree'
 * with tokens and an 'abstract syntax tree' with higher level elements, but I have chosen to make these
 * two trees one in the same. Because of this, every token represents a logical part of a block.
 * Going back to the 'say 1 = Hello World' example, there are two 'parent' tokens, both are of type
 * {@link TokenTypeBlock}. The first is for the equals block, which contains three subtokens; '1',
 * '=' and 'Hello World'. The second is the say block, whos first child is 'say' and second child is
 * the token for the equals block (which itself has three children). For a query result to be valid,
 * it must have a token which encapsulates the entire query, in this case the say block token starts
 * at the first letter and ends at the last letter, so it's a valid interpretation. The token which
 * encapsulates the whole query is referred to as the root token.
 */
var Token = /*#__PURE__*/function () {
  /**
   * @param {number} start
   * @param {number} end
   * @param {TokenType} type
   * @param {*} value
   * @param {number} precedence
   * @param {boolean} isTruncated
   * @param {boolean} isLegal
   */
  function Token(start, end, type, value) {
    var _ref = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {},
      _ref$precedence = _ref.precedence,
      precedence = _ref$precedence === void 0 ? -1 : _ref$precedence,
      _ref$isProper = _ref.isProper,
      isProper = _ref$isProper === void 0 ? true : _ref$isProper,
      _ref$isTruncated = _ref.isTruncated,
      isTruncated = _ref$isTruncated === void 0 ? false : _ref$isTruncated,
      _ref$isLegal = _ref.isLegal,
      isLegal = _ref$isLegal === void 0 ? true : _ref$isLegal,
      _ref$isDefiningFeatur = _ref.isDefiningFeature,
      isDefiningFeature = _ref$isDefiningFeatur === void 0 ? false : _ref$isDefiningFeatur;
    _classCallCheck(this, Token);
    /** @type {number} The index of the first letter of this token in the query */
    this.start = start;
    /** @type {number} The index of the last letter of this token in the query */
    this.end = end;
    /** @type {TokenType} The type of this token. */
    this.type = type;
    /** @type {*} Additional information about this token, controlled and interpreted by the token type. */
    this.value = value;
    /**
     * The precedence of this token, used to implement order of operations. Tokens with a higher
     * precedence should be evaluated *after* those with a lower precedence. Brackets have a
     * precedence of 0 so they are always evaluated first. A precedence of -1 means that precedence
     * is not specified and the parser makes no guarantees about the order of operations.
     * @type {number}
     */
    this.precedence = precedence;
    /**
     * True if this token is fully written out. For example, in the query "m v = 10" where "m v"
     * expands to "my variable", the token "m v" is not proper, as it is not fully written.
     * Note that unlike trauncation, parent tokens do not inherit this property (so in the above
     * example, the '=' block token would still be proper).
     */
    this.isProper = isProper;
    /**
     * Sometimes, tokens are truncated. Imagine the query 'say Hello for 10 se', here the last
     * token should be 'seconds', but it's truncated. For this token, the isTruncated value is set
     * to true. Additionally, the token for the whole block (which contains the tokens 'say', 'Hello',
     * 'for', '10' and 'se') also has it's isTruncated value set to true, because it contains a
     * truncated token.
     * @type {boolean}
     */
    this.isTruncated = isTruncated;
    /**
     * Used to generate autocomplete text, even if that autocomplete text doesn't make a valid query
     * by itself. For example in the query 'if my varia', we want to autocomplete to 'my variable',
     * but the query 'if my variable' is still not valid, because my variable is not a boolean. In
     * this case, the 'my variable' token would still be emitted as the second child of the 'if' token,
     * but it would be marked as illegal.
     */
    this.isLegal = isLegal;
    /**
     * If we see this token, should we know what block it's connected to?
     *
     * For example, in the query 'say Hi', 'say' is a defining feature because
     * we can narrow down what block it's from based only the fact that it's present.
     * 'Hi', however, is not a defining feature as it could be a part of lots of
     * different blocks.
     *
     * This is used to help eliminate some dodgey interpretations of queries, if a block
     * has no subtokens marked a defining feature it's disguarded.
     * @type {boolean}
     */
    this.isDefiningFeature = isDefiningFeature;
  }

  /**
   * @see {TokenType.createBlockValue}
   * @param {QueryInfo} query
   * @returns
   */
  return _createClass(Token, [{
    key: "createBlockValue",
    value: function createBlockValue(query) {
      return this.type.createBlockValue(this, query);
    }
  }]);
}();
/**
 * The parent of any class that can enumerate tokens given a query and a location within that
 * query to search.
 *
 * As the same position in a query can have multiple interpretations (see {@link Token}), every
 * token provider's {@link parseTokens} method can return multiple tokens for the same index.
 *
 * Like tokens, there is a token provider tree. See {@link WorkspaceQuerier._createTokenGroups}
 * for more info on this tree.
 *
 * @abstract
 */
var TokenProvider = /*#__PURE__*/function () {
  function TokenProvider(shouldCache) {
    _classCallCheck(this, TokenProvider);
    if (this.constructor === TokenProvider) throw new Error("Abstract classes can't be instantiated.");
    /**
     * Can the results of this token provider be stored? True
     * if {@link parseTokens} will always return the same thing for the same inputs or if
     * this token provider already caches it's result, so caching it again is redundant.
     * @type {boolean}
     */
    this.shouldCache = shouldCache;
  }

  /**
   * Return the tokens found by this token provider in `query` at character `idx`.
   * @param {QueryInfo} query The query to search
   * @param {number} idx The index to start the search at
   * @param {number} depth The number of blocks this token is inside of.
   *  For the query 1 + 1, the `+` block token would have a depth of 0 and the `1` tokens would have a depth of 1.
   * @yields {Token} All the tokens found
   * @abstract
   */
  // eslint-disable-next-line require-yield
  return _createClass(TokenProvider, [{
    key: "parseTokens",
    value:
    /*#__PURE__*/
    _regenerator().m(function parseTokens(query, idx, depth) {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            throw new Error("Sub-class must override abstract method.");
          case 1:
            return _context.a(2);
        }
      }, parseTokens);
    })
  }]);
}();
/**
 * A token provider which wraps around another token provider, always returning a blank token in
 * addition to whatever the inner token provider returns.
 *
 * Used for tokens that can possibility be omitted, like numbers. For example, the '+' block always
 * needs three inputs, but the user could query '1 +'. In this case its subtokens are '1', '+' and
 * a {@link TokenTypeBlank}, provided by this provider.
 */
var TokenProviderOptional = /*#__PURE__*/function (_TokenProvider) {
  /**
   * @param {TokenProvider} inner
   */
  function TokenProviderOptional(inner) {
    var _this;
    _classCallCheck(this, TokenProviderOptional);
    _this = _callSuper(this, TokenProviderOptional, [inner.shouldCache]);
    /** @type {TokenProvider} The inner token provider to return along with the blank token. */
    _this.inner = inner;
    return _this;
  }
  _inherits(TokenProviderOptional, _TokenProvider);
  return _createClass(TokenProviderOptional, [{
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            _context2.n = 1;
            return TokenTypeBlank.INSTANCE.createToken(idx);
          case 1:
            return _context2.d(_regeneratorValues(this.inner.parseTokens(query, idx, depth)), 2);
          case 2:
            return _context2.a(2);
        }
      }, parseTokens, this);
    })
  }]);
}(TokenProvider);
/**
 * Caches the output of an inner token provider.
 * Used for tokens that are a part of multiple token provider groups.
 */
var TokenProviderSingleCache = /*#__PURE__*/function (_TokenProvider2) {
  /**
   * @param {TokenProvider} inner
   */
  function TokenProviderSingleCache(inner) {
    var _this2;
    _classCallCheck(this, TokenProviderSingleCache);
    _this2 = _callSuper(this, TokenProviderSingleCache, [false]);
    /** @type {TokenProvider} */
    _this2.inner = inner;
    if (_this2.inner.shouldCache) {
      /** @type {Token[]?} */
      _this2.cache = [];
      /** @type {number?} */
      _this2.cacheQueryID = null;
    }
    return _this2;
  }
  _inherits(TokenProviderSingleCache, _TokenProvider2);
  return _createClass(TokenProviderSingleCache, [{
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      var cacheEntry, _iterator, _step, token, _t;
      return _regenerator().w(function (_context3) {
        while (1) switch (_context3.n) {
          case 0:
            if (this.inner.shouldCache) {
              _context3.n = 2;
              break;
            }
            return _context3.d(_regeneratorValues(this.inner.parseTokens(query, idx, depth)), 1);
          case 1:
            return _context3.a(2);
          case 2:
            if (this.cacheQueryID !== query.id) {
              this.cache = [];
              this.cacheQueryID = query.id;
            }
            cacheEntry = this.cache[idx];
            if (!cacheEntry) {
              _context3.n = 4;
              break;
            }
            return _context3.d(_regeneratorValues(cacheEntry), 3);
          case 3:
            return _context3.a(2);
          case 4:
            this.cache[idx] = cacheEntry = [];
            _iterator = _createForOfIteratorHelper(this.inner.parseTokens(query, idx, depth));
            _context3.p = 5;
            _iterator.s();
          case 6:
            if ((_step = _iterator.n()).done) {
              _context3.n = 8;
              break;
            }
            token = _step.value;
            cacheEntry.push(token);
            _context3.n = 7;
            return token;
          case 7:
            _context3.n = 6;
            break;
          case 8:
            _context3.n = 10;
            break;
          case 9:
            _context3.p = 9;
            _t = _context3.v;
            _iterator.e(_t);
          case 10:
            _context3.p = 10;
            _iterator.f();
            return _context3.f(10);
          case 11:
            return _context3.a(2);
        }
      }, parseTokens, this, [[5, 9, 10, 11]]);
    })
  }]);
}(TokenProvider);
/**
 * Collects multiple inner token providers into one token provider group.
 * Additionally, caches the results of all the cacheable inner token providers.
 */
var TokenProviderGroup = /*#__PURE__*/function (_TokenProvider3) {
  function TokenProviderGroup() {
    var _this3;
    _classCallCheck(this, TokenProviderGroup);
    // No need to cache this as it already caches it's own output.
    _this3 = _callSuper(this, TokenProviderGroup, [false]);
    /** @type {TokenProvider[]} The providers that make up this group */
    _this3.providers = [];
    /** @type {TokenProvider[]} Providers that are a part of the group, but tokens they produce are illegal */
    _this3.illegalProviders = [];
    /** @type {Object<number, CacheEntry>?} The cache */
    _this3.cache = null;
    /** @type {number?} The query ID of the query whos results are currently cached */
    _this3.cacheQueryID = null;
    /** @type {boolean} Are any of our inner tokens cacheable? */
    _this3.hasCacheable = false;
    return _this3;
  }

  /**
   * @typedef CacheEntry
   * @property {Token[][]} tokenCaches
   * @property {TokenProvider[][]} providerCaches
   */

  /**
   * Adds token providers to this token provider group.
   * @param {TokenProvider[]} providers
   * @param {boolean} legal Are the results of this provider legal in the current context?
   */
  _inherits(TokenProviderGroup, _TokenProvider3);
  return _createClass(TokenProviderGroup, [{
    key: "pushProviders",
    value: function pushProviders(providers) {
      var _this$providers, _this$illegalProvider;
      var legal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this.hasCacheable) {
        var _iterator2 = _createForOfIteratorHelper(providers),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var provider = _step2.value;
            if (provider.shouldCache) {
              this.hasCacheable = true;
              break;
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      if (legal) (_this$providers = this.providers).push.apply(_this$providers, _toConsumableArray(providers));else (_this$illegalProvider = this.illegalProviders).push.apply(_this$illegalProvider, _toConsumableArray(providers));
    }
  }, {
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      var _iterator3, _step3, provider, cacheEntry, _tokenCaches, _providerCaches, i, _tokenCache, _providerCache, _iterator4, _step4, _provider, tokenCache, providerCache, tokenCaches, providerCaches, _iterator5, _step5, _provider2, _iterator7, _step7, token, _iterator6, _step6, _provider3, _iterator8, _step8, _token, _t2, _t3, _t4, _t5, _t6, _t7;
      return _regenerator().w(function (_context4) {
        while (1) switch (_context4.n) {
          case 0:
            if (this.hasCacheable) {
              _context4.n = 8;
              break;
            }
            _iterator3 = _createForOfIteratorHelper(this.providers);
            _context4.p = 1;
            _iterator3.s();
          case 2:
            if ((_step3 = _iterator3.n()).done) {
              _context4.n = 4;
              break;
            }
            provider = _step3.value;
            return _context4.d(_regeneratorValues(provider.parseTokens(query, idx, depth)), 3);
          case 3:
            _context4.n = 2;
            break;
          case 4:
            _context4.n = 6;
            break;
          case 5:
            _context4.p = 5;
            _t2 = _context4.v;
            _iterator3.e(_t2);
          case 6:
            _context4.p = 6;
            _iterator3.f();
            return _context4.f(6);
          case 7:
            return _context4.a(2);
          case 8:
            if (!(this.cacheQueryID !== query.id)) {
              _context4.n = 9;
              break;
            }
            this.cache = [];
            this.cacheQueryID = query.id;
            _context4.n = 20;
            break;
          case 9:
            // Otherwise, search for a cache entry for idx
            cacheEntry = this.cache[idx];
            if (!cacheEntry) {
              _context4.n = 20;
              break;
            }
            // If we find one, yield all the cached results
            _tokenCaches = cacheEntry.tokenCaches;
            _providerCaches = cacheEntry.providerCaches;
            i = 0;
          case 10:
            if (!(i < _tokenCaches.length)) {
              _context4.n = 19;
              break;
            }
            _tokenCache = _tokenCaches[i];
            _providerCache = _providerCaches[i];
            _iterator4 = _createForOfIteratorHelper(_providerCache);
            _context4.p = 11;
            _iterator4.s();
          case 12:
            if ((_step4 = _iterator4.n()).done) {
              _context4.n = 14;
              break;
            }
            _provider = _step4.value;
            return _context4.d(_regeneratorValues(_provider.parseTokens(query, idx, depth)), 13);
          case 13:
            _context4.n = 12;
            break;
          case 14:
            _context4.n = 16;
            break;
          case 15:
            _context4.p = 15;
            _t3 = _context4.v;
            _iterator4.e(_t3);
          case 16:
            _context4.p = 16;
            _iterator4.f();
            return _context4.f(16);
          case 17:
            return _context4.d(_regeneratorValues(_tokenCache), 18);
          case 18:
            i++;
            _context4.n = 10;
            break;
          case 19:
            return _context4.a(2);
          case 20:
            // No applicable cache entry was found :(
            // Call all our child token providers and create a new cache entry
            tokenCache = [];
            providerCache = [];
            tokenCaches = [tokenCache];
            providerCaches = [providerCache];
            this.cache[idx] = {
              tokenCaches: tokenCaches,
              providerCaches: providerCaches
            };
            _iterator5 = _createForOfIteratorHelper(this.providers);
            _context4.p = 21;
            _iterator5.s();
          case 22:
            if ((_step5 = _iterator5.n()).done) {
              _context4.n = 32;
              break;
            }
            _provider2 = _step5.value;
            if (!_provider2.shouldCache) {
              _context4.n = 30;
              break;
            }
            _iterator7 = _createForOfIteratorHelper(_provider2.parseTokens(query, idx, depth));
            _context4.p = 23;
            _iterator7.s();
          case 24:
            if ((_step7 = _iterator7.n()).done) {
              _context4.n = 26;
              break;
            }
            token = _step7.value;
            tokenCache.push(token);
            _context4.n = 25;
            return token;
          case 25:
            _context4.n = 24;
            break;
          case 26:
            _context4.n = 28;
            break;
          case 27:
            _context4.p = 27;
            _t4 = _context4.v;
            _iterator7.e(_t4);
          case 28:
            _context4.p = 28;
            _iterator7.f();
            return _context4.f(28);
          case 29:
            _context4.n = 31;
            break;
          case 30:
            if (tokenCache.length !== 0) {
              tokenCache = [];
              providerCache = [];
              tokenCaches.push(tokenCache);
              providerCaches.push(providerCache);
            }
            providerCache.push(_provider2);
            return _context4.d(_regeneratorValues(_provider2.parseTokens(query, idx, depth)), 31);
          case 31:
            _context4.n = 22;
            break;
          case 32:
            _context4.n = 34;
            break;
          case 33:
            _context4.p = 33;
            _t5 = _context4.v;
            _iterator5.e(_t5);
          case 34:
            _context4.p = 34;
            _iterator5.f();
            return _context4.f(34);
          case 35:
            _iterator6 = _createForOfIteratorHelper(this.illegalProviders);
            _context4.p = 36;
            _iterator6.s();
          case 37:
            if ((_step6 = _iterator6.n()).done) {
              _context4.n = 45;
              break;
            }
            _provider3 = _step6.value;
            _iterator8 = _createForOfIteratorHelper(_provider3.parseTokens(query, idx, depth));
            _context4.p = 38;
            _iterator8.s();
          case 39:
            if ((_step8 = _iterator8.n()).done) {
              _context4.n = 41;
              break;
            }
            _token = _step8.value;
            _token = _objectSpread(_objectSpread({}, _token), {}, {
              isLegal: false
            });
            tokenCache.push(_token);
            _context4.n = 40;
            return _token;
          case 40:
            _context4.n = 39;
            break;
          case 41:
            _context4.n = 43;
            break;
          case 42:
            _context4.p = 42;
            _t6 = _context4.v;
            _iterator8.e(_t6);
          case 43:
            _context4.p = 43;
            _iterator8.f();
            return _context4.f(43);
          case 44:
            _context4.n = 37;
            break;
          case 45:
            _context4.n = 47;
            break;
          case 46:
            _context4.p = 46;
            _t7 = _context4.v;
            _iterator6.e(_t7);
          case 47:
            _context4.p = 47;
            _iterator6.f();
            return _context4.f(47);
          case 48:
            return _context4.a(2);
        }
      }, parseTokens, this, [[38, 42, 43, 44], [36, 46, 47, 48], [23, 27, 28, 29], [21, 33, 34, 35], [11, 15, 16, 17], [1, 5, 6, 7]]);
    })
  }]);
}(TokenProvider);
/**
 * A class representing the type of a token (see {@link Token.type})
 *
 * All token types extend from {@link TokenProvider} and they provide all the tokens
 * of their type they can find.
 *
 * @abstract
 */
var TokenType = /*#__PURE__*/function (_TokenProvider4) {
  function TokenType() {
    var _this4;
    var dontCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    _classCallCheck(this, TokenType);
    _this4 = _callSuper(this, TokenType, [!dontCache]);
    if (_this4.constructor === TokenType) throw new Error("Abstract classes can't be instantiated.");

    /** @type {boolean} Is this token type always represented by the same string of characters? */
    _this4.isConstant = false;
    return _this4;
  }

  /**
   * Turns `token` into a value which can be passed into the {@link BlockInstance} constructor.
   * For example, in string literal tokens, this gets the string value of the token which can then
   * be used to create a block.
   * @param {Token} token
   * @param {QueryInfo} query
   * @returns {*}
   */
  _inherits(TokenType, _TokenProvider4);
  return _createClass(TokenType, [{
    key: "createBlockValue",
    value: function createBlockValue(token, query) {
      return token.value;
    }

    /**
     * Creates the string form of this token in the same format that was used in the query.
     * If the token was only partially typed in the query, creating the text will complete the token.
     * @param {Token} token
     * @param {QueryInfo} query
     * @param {boolean} endOnly Should we only append to the end of the query. If this is false, we
     * can create text in the middle of the query that wasn't there. This is used to autocomplete
     * {@link StringEnum.GriffTokenType} tokens in the middle of a query.
     * @returns {string}
     */
  }, {
    key: "createText",
    value: function createText(token, query, endOnly) {
      throw new Error("Sub-class must override abstract method.");
    }

    /**
     * @param {Token} token
     * @param {QueryInfo} query
     * @returns {Token[]}
     */
  }, {
    key: "getSubtokens",
    value: function getSubtokens(token, query) {
      return undefined;
    }
  }]);
}(TokenProvider);
/**
 * The type for tokens that represent an omitted field.
 * Used by {@link TokenProviderOptional}
 */
var TokenTypeBlank = /*#__PURE__*/function (_TokenType) {
  function TokenTypeBlank() {
    var _this5;
    _classCallCheck(this, TokenTypeBlank);
    _this5 = _callSuper(this, TokenTypeBlank);
    _this5.isConstant = true;
    return _this5;
  }
  _inherits(TokenTypeBlank, _TokenType);
  return _createClass(TokenTypeBlank, [{
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      return _regenerator().w(function (_context5) {
        while (1) switch (_context5.n) {
          case 0:
            _context5.n = 1;
            return this.createToken(idx);
          case 1:
            return _context5.a(2);
        }
      }, parseTokens, this);
    })
    /**
     * Create a new blank token
     * @param {number} idx The position of the blank token
     * @returns {Token}
     */
  }, {
    key: "createToken",
    value: function createToken(idx) {
      return new Token(idx, idx, this, null);
    }
  }, {
    key: "createText",
    value: function createText(token, query) {
      return "";
    }
  }]);
}(TokenType);
/**
 * Represents a token whos value must be one of a predetermined set of strings.
 * For example, a token for a dropdown menu (like the one in `set [my variable] to x`) is a
 * string enum, because the value must be one of a set of strings.
 *
 * String enums are also used for values that can only be one specific value (like the 'set' from
 * `set [my variable] to x`). These cases are just string enums with one possible value.
 */
_TokenTypeBlank = TokenTypeBlank;
_defineProperty(TokenTypeBlank, "INSTANCE", new _TokenTypeBlank());
var TokenTypeStringEnum = /*#__PURE__*/function (_TokenType2) {
  /**
   * @typedef StringEnumValue
   * @property {string} value The string that needs to be in the query
   * @property {string} lower Cached value.toLowerCase()
   * @property {string[]} parts lower, split up by ignoreable characters.
   */

  /**
   * @param {(import("./BlockTypeInfo").BlockInputEnumOption[]} values
   */
  function TokenTypeStringEnum(values) {
    var _this6;
    _classCallCheck(this, TokenTypeStringEnum);
    _this6 = _callSuper(this, TokenTypeStringEnum);
    _this6.isConstant = values.length === 1;

    /** @type {StringEnumValue[]} */
    _this6.values = [];
    var _iterator9 = _createForOfIteratorHelper(values),
      _step9;
    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var value = _step9.value;
        var lower = value.string.toLowerCase();
        var parts = [];
        {
          var lastPart = 0;
          for (var i = 0; i <= lower.length; i++) {
            var _char = lower[i];
            if (QueryInfo.IGNORABLE_CHARS.indexOf(_char) !== -1 || !_char) {
              parts.push(lower.substring(lastPart, i));
              i = QueryInfo.skipIgnorable(lower, i);
              lastPart = i;
            }
          }
        }
        _this6.values.push({
          lower: lower,
          parts: parts,
          value: value
        });
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }
    return _this6;
  }
  _inherits(TokenTypeStringEnum, _TokenType2);
  return _createClass(TokenTypeStringEnum, [{
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      var valueIdx, valueInfo, yieldedToken, remainingChar, substr, isDefiningFeature, end;
      return _regenerator().w(function (_context6) {
        while (1) switch (_context6.n) {
          case 0:
            valueIdx = 0;
          case 1:
            if (!(valueIdx < this.values.length)) {
              _context6.n = 7;
              break;
            }
            valueInfo = this.values[valueIdx];
            yieldedToken = false;
            remainingChar = query.length - idx;
            substr = query.lowercase.substring(idx); // If all we have is a string which could be a number, it doesn't count as a defining feature.
            // This is to get rid of "10" constantly suggesting "10 ^ of ()"
            isDefiningFeature = !TokenTypeNumberLiteral.isValidNumber(substr);
            if (!(remainingChar < valueInfo.lower.length)) {
              _context6.n = 4;
              break;
            }
            if (!valueInfo.lower.startsWith(substr)) {
              _context6.n = 3;
              break;
            }
            end = remainingChar < 0 ? 0 : query.length;
            _context6.n = 2;
            return new Token(idx, end, this, valueInfo, {
              isTruncated: true,
              isDefiningFeature: isDefiningFeature
            });
          case 2:
            yieldedToken = true;
          case 3:
            _context6.n = 6;
            break;
          case 4:
            if (!query.lowercase.startsWith(valueInfo.lower, idx)) {
              _context6.n = 6;
              break;
            }
            _context6.n = 5;
            return new Token(idx, idx + valueInfo.lower.length, this, valueInfo, {
              isDefiningFeature: isDefiningFeature
            });
          case 5:
            yieldedToken = true;
          case 6:
            valueIdx++;
            _context6.n = 1;
            break;
          case 7:
            return _context6.a(2);
        }
      }, parseTokens, this);
    })
  }, {
    key: "createBlockValue",
    value: function createBlockValue(token, query) {
      return token.value.value;
    }
  }, {
    key: "createText",
    value: function createText(token, query, endOnly) {
      if (!token) return this.values[0].lower;
      return token.value.lower;
    }
  }]);
}(TokenType);
/**
 * The token type for a literal string, like 'Hello World' in the query `say Hello World`
 */
var TokenTypeStringLiteral = /*#__PURE__*/function (_TokenType3) {
  function TokenTypeStringLiteral() {
    _classCallCheck(this, TokenTypeStringLiteral);
    return _callSuper(this, TokenTypeStringLiteral, arguments);
  }
  _inherits(TokenTypeStringLiteral, _TokenType3);
  return _createClass(TokenTypeStringLiteral, [{
    key: "parseTokens",
    value:
    /*#__PURE__*/
    /**
     * Each time we encounter a 'terminator' we have to return the string we've read so far as a
     * possible interpretation. If we didn't, when looking for a string at index 4 of 'say Hello
     * World for 10 seconds' we would just return 'Hello World for 10 seconds', leading to the
     * only result being `say "Hello World for 10 seconds"`. This also means in addition to
     * 'Hello World' we also return 'Hello', 'Hello World for', 'Hello World for 10' and '
     * Hello World for 10 seconds', but that's just the price we pay for trying to enumerate every
     * interpretation.
     */
    _regenerator().m(function parseTokens(query, idx, depth) {
      var quoteEnd, quote, value, valueStart, i, wasTerminator, wasIgnorable, _i, isTerminator, isIgnorable, _value;
      return _regenerator().w(function (_context7) {
        while (1) switch (_context7.n) {
          case 0:
            // First, look for strings in quotes
            quoteEnd = -1;
            if (!(query.str[idx] === '"' || query.str[idx] === "'")) {
              _context7.n = 5;
              break;
            }
            quote = query.str[idx];
            value = "";
            valueStart = idx + 1;
            i = idx + 1;
          case 1:
            if (!(i <= query.length)) {
              _context7.n = 5;
              break;
            }
            if (!(query.str[i] === "\\")) {
              _context7.n = 2;
              break;
            }
            value += query.str.substring(valueStart, i);
            valueStart = ++i;
            _context7.n = 4;
            break;
          case 2:
            if (!(query.str[i] === quote)) {
              _context7.n = 4;
              break;
            }
            _context7.n = 3;
            return new Token(idx, i + 1, this, value + query.str.substring(valueStart, i));
          case 3:
            quoteEnd = i + 1;
            return _context7.a(3, 5);
          case 4:
            i++;
            _context7.n = 1;
            break;
          case 5:
            // Then all the other strings
            wasTerminator = false;
            wasIgnorable = false;
            _i = idx;
          case 6:
            if (!(_i <= query.length)) {
              _context7.n = 9;
              break;
            }
            isTerminator = TokenTypeStringLiteral.isTerminator(query.str[_i]);
            isIgnorable = QueryInfo.IGNORABLE_CHARS.includes(query.str[_i]);
            if (!((wasTerminator !== isTerminator || _i == query.length) && !wasIgnorable && _i !== idx && _i !== quoteEnd)) {
              _context7.n = 7;
              break;
            }
            _value = query.str.substring(idx, _i);
            _context7.n = 7;
            return new Token(idx, _i, this, _value);
          case 7:
            wasTerminator = isTerminator;
            wasIgnorable = isIgnorable;
          case 8:
            _i++;
            _context7.n = 6;
            break;
          case 9:
            return _context7.a(2);
        }
      }, parseTokens, this);
    })
  }, {
    key: "createText",
    value: function createText(token, query, endOnly) {
      return query.str.substring(token.start, token.end);
    }
  }], [{
    key: "isTerminator",
    value: function isTerminator(_char2) {
      return this.TERMINATORS.includes(_char2);
    }
  }]);
}(TokenType);
/**
 * The token type for a literal number, like 69 in the query 'Hello + 69'
 * This token type also supports numbers in formats scratch doesn't let you type,
 * but accepts like '0xFF', 'Infinity' or '1e3'.
 */
_defineProperty(TokenTypeStringLiteral, "TERMINATORS", [undefined, " ", "+", "-", "*", "/", "=", "<", ">", ")"]);
var TokenTypeNumberLiteral = /*#__PURE__*/function (_TokenType4) {
  function TokenTypeNumberLiteral() {
    _classCallCheck(this, TokenTypeNumberLiteral);
    return _callSuper(this, TokenTypeNumberLiteral, arguments);
  }
  _inherits(TokenTypeNumberLiteral, _TokenType4);
  return _createClass(TokenTypeNumberLiteral, [{
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      var i, value;
      return _regenerator().w(function (_context8) {
        while (1) switch (_context8.n) {
          case 0:
            i = idx;
          case 1:
            if (!(i <= query.length)) {
              _context8.n = 4;
              break;
            }
            if (!(TokenTypeStringLiteral.isTerminator(query.str[i]) && i !== idx)) {
              _context8.n = 3;
              break;
            }
            value = query.str.substring(idx, i);
            if (!TokenTypeNumberLiteral.isValidNumber(value)) {
              _context8.n = 3;
              break;
            }
            _context8.n = 2;
            return new Token(idx, i, this, value);
          case 2:
            return _context8.a(3, 4);
          case 3:
            i++;
            _context8.n = 1;
            break;
          case 4:
            return _context8.a(2);
        }
      }, parseTokens, this);
    })
  }, {
    key: "createText",
    value: function createText(token, query, endOnly) {
      return query.str.substring(token.start, token.end);
    }
  }], [{
    key: "isValidNumber",
    value: function isValidNumber(str) {
      return !isNaN(+str) || !isNaN(parseFloat(+str));
    }
  }]);
}(TokenType);
/**
 * A token type for literal colors, like '#ffffff' for white.
 */
var TokenTypeColor = /*#__PURE__*/function (_TokenType5) {
  function TokenTypeColor() {
    _classCallCheck(this, TokenTypeColor);
    return _callSuper(this, TokenTypeColor, arguments);
  }
  _inherits(TokenTypeColor, _TokenType5);
  return _createClass(TokenTypeColor, [{
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      var i;
      return _regenerator().w(function (_context9) {
        while (1) switch (_context9.n) {
          case 0:
            if (query.str.startsWith("#", idx)) {
              _context9.n = 1;
              break;
            }
            return _context9.a(2);
          case 1:
            i = 0;
          case 2:
            if (!(i < 6)) {
              _context9.n = 4;
              break;
            }
            if (!(TokenTypeColor.HEX_CHARS.indexOf(query.lowercase[idx + i + 1]) === -1)) {
              _context9.n = 3;
              break;
            }
            return _context9.a(2);
          case 3:
            i++;
            _context9.n = 2;
            break;
          case 4:
            _context9.n = 5;
            return new Token(idx, idx + 7, this, query.str.substring(idx, idx + 7));
          case 5:
            return _context9.a(2);
        }
      }, parseTokens, this);
    })
  }, {
    key: "createText",
    value: function createText(token, query, endOnly) {
      return query.query.substring(token.start, token.end);
    }
  }]);
}(TokenType);
/**
 * A token type for tokens that are in brackets, like (1 + 1) in '(1 + 1) * 2'.
 */
_TokenTypeColor = TokenTypeColor;
_defineProperty(TokenTypeColor, "INSTANCE", new TokenProviderOptional(new _TokenTypeColor()));
_defineProperty(TokenTypeColor, "HEX_CHARS", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
var TokenTypeBrackets = /*#__PURE__*/function (_TokenType6) {
  /**
   * @param {TokenProvider} tokenProvider
   */
  function TokenTypeBrackets(tokenProvider) {
    var _this7;
    _classCallCheck(this, TokenTypeBrackets);
    _this7 = _callSuper(this, TokenTypeBrackets);
    /** @type {TokenProvider} The tokens to look for between the brackets */
    _this7.tokenProvider = tokenProvider;
    return _this7;
  }
  _inherits(TokenTypeBrackets, _TokenType6);
  return _createClass(TokenTypeBrackets, [{
    key: "parseTokens",
    value: /*#__PURE__*/_regenerator().m(function parseTokens(query, idx, depth) {
      var start, _iterator0, _step0, token, tokenEnd, isTruncated, newToken, _t8;
      return _regenerator().w(function (_context0) {
        while (1) switch (_context0.n) {
          case 0:
            start = idx;
            if (!(query.str[idx++] !== "(")) {
              _context0.n = 1;
              break;
            }
            return _context0.a(2);
          case 1:
            idx = query.skipIgnorable(idx);
            _iterator0 = _createForOfIteratorHelper(this.tokenProvider.parseTokens(query, idx, depth));
            _context0.p = 2;
            _iterator0.s();
          case 3:
            if ((_step0 = _iterator0.n()).done) {
              _context0.n = 9;
              break;
            }
            token = _step0.value;
            if (!(token.type instanceof TokenTypeBlank)) {
              _context0.n = 4;
              break;
            }
            return _context0.a(3, 8);
          case 4:
            // Do not allow empty brackets like '()'
            tokenEnd = query.skipIgnorable(token.end);
            isTruncated = token.isTruncated;
            if (isTruncated) {
              _context0.n = 7;
              break;
            }
            if (!(tokenEnd === query.length)) {
              _context0.n = 5;
              break;
            }
            isTruncated = true;
            _context0.n = 7;
            break;
          case 5:
            if (!(query.str[tokenEnd] === ")")) {
              _context0.n = 6;
              break;
            }
            ++tokenEnd;
            _context0.n = 7;
            break;
          case 6:
            return _context0.a(3, 8);
          case 7:
            // Note that for bracket tokens, precedence = 0
            newToken = new Token(start, tokenEnd, this, token.value, {
              precedence: 0,
              isTruncated: isTruncated,
              isLegal: token.isLegal
            });
            newToken.innerToken = token;
            _context0.n = 8;
            return newToken;
          case 8:
            _context0.n = 3;
            break;
          case 9:
            _context0.n = 11;
            break;
          case 10:
            _context0.p = 10;
            _t8 = _context0.v;
            _iterator0.e(_t8);
          case 11:
            _context0.p = 11;
            _iterator0.f();
            return _context0.f(11);
          case 12:
            return _context0.a(2);
        }
      }, parseTokens, this, [[2, 10, 11, 12]]);
    })
  }, {
    key: "createBlockValue",
    value: function createBlockValue(token, query) {
      return token.innerToken.createBlockValue(token.innerToken, query);
    }
  }, {
    key: "createText",
    value: function createText(token, query, endOnly) {
      var text = "(";
      text += query.str.substring(token.start + 1, token.innerToken.start);
      text += token.innerToken.type.createText(token.innerToken, query, endOnly);
      if (token.innerToken.end !== token.end) text += query.str.substring(token.innerToken.end, token.end - 1);
      text += ")";
      return text;
    }
  }, {
    key: "getSubtokens",
    value: function getSubtokens(token, query) {
      return [token.innerToken];
    }
  }]);
}(TokenType);
/**
 * The token type for a block, like 'say Hello' or '1 + 1'.
 */
var TokenTypeBlock = /*#__PURE__*/function (_TokenType7) {
  /**
   * @param {WorkspaceQuerier} querier
   * @param {BlockTypeInfo} block
   * @private
   */
  function TokenTypeBlock(querier, block) {
    var _this8;
    _classCallCheck(this, TokenTypeBlock);
    _this8 = _callSuper(this, TokenTypeBlock);
    _this8.block = block;
    _this8.hasSubTokens = true;
    /**
     * The list of token types that make up this block.
     *
     * For example, for the non-griff version of the 'say' block this array would contains two
     * providers, the first is a {@link StringEnum.FullTokenType} containing only the value 'say'
     * and the second is equal to querier.tokenGroupString.
     *
     * @type {TokenProvider[]}
     */
    _this8.fullTokenProviders = [];
    var _iterator1 = _createForOfIteratorHelper(block.parts),
      _step1;
    try {
      for (_iterator1.s(); !(_step1 = _iterator1.n()).done;) {
        var blockPart = _step1.value;
        var fullTokenProvider = void 0;
        if (typeof blockPart === "string") {
          fullTokenProvider = new TokenTypeStringEnum([{
            value: null,
            string: blockPart
          }]);
        } else {
          switch (blockPart.type) {
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].ENUM:
              fullTokenProvider = new TokenTypeStringEnum(blockPart.values);
              if (blockPart.isRound) {
                var enumGroup = new TokenProviderGroup();
                enumGroup.pushProviders([fullTokenProvider, querier.tokenGroupRoundBlocks]);
                fullTokenProvider = enumGroup;
              }
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].STRING:
              fullTokenProvider = querier.tokenGroupString;
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].NUMBER:
              fullTokenProvider = querier.tokenGroupNumber;
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].COLOUR:
              fullTokenProvider = TokenTypeColor.INSTANCE;
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].BOOLEAN:
              fullTokenProvider = querier.tokenGroupBoolean;
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].BLOCK:
              fullTokenProvider = querier.tokenGroupStack;
              break;
          }
        }
        _this8.fullTokenProviders.push(fullTokenProvider);
      }

      /**
       * @type {{strings: string[], inputs: [], length: number}[]}
       */
    } catch (err) {
      _iterator1.e(err);
    } finally {
      _iterator1.f();
    }
    _this8.stringForms = [];
    var _enumerateStringForms = function enumerateStringForms() {
      var partIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var strings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var inputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      for (; partIdx < block.parts.length; partIdx++) {
        var blockPart = block.parts[partIdx];
        if (typeof blockPart === "string") {
          length += blockPart.length;
          strings.push.apply(strings, _toConsumableArray(blockPart.toLowerCase().split(" ")));
        } else if (blockPart.type === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].ENUM) {
          var _iterator10 = _createForOfIteratorHelper(blockPart.values),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var enumValue = _step10.value;
              if (_this8.stringForms.length >= WorkspaceQuerier.MAX_RESULTS) return;
              _enumerateStringForms(partIdx + 1, [].concat(_toConsumableArray(strings), _toConsumableArray(enumValue.string.toLowerCase().split(" "))), [].concat(_toConsumableArray(inputs), [enumValue]), length + enumValue.string.length);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          return;
        } else {
          inputs.push(null);
        }
      }
      _this8.stringForms.push({
        strings: strings,
        inputs: inputs,
        length: length
      });
    };
    _enumerateStringForms();
    if (_this8.stringForms.length >= WorkspaceQuerier.MAX_STRING_FORMS) {
      console.warn("Warning: Block '" + _this8.block.id + "' has too many string forms. Search results may not be very good.");
      _this8.stringForms.length = 0;
    }
    return _this8;
  }

  /**
   * @param {QueryInfo} query
   * @param {number} idx
   * @param {number} depth
   * @returns
   */
  _inherits(TokenTypeBlock, _TokenType7);
  return _createClass(TokenTypeBlock, [{
    key: "parseTokens",
    value:
    /*#__PURE__*/
    _regenerator().m(function parseTokens(query, idx, depth) {
      var yieldedTokens, _iterator11, _step11, subtokens, token, _iterator12, _step12, stringForm, lastPartIdx, i, hasDefiningFeature, wordEnd, word, match, formPartIdx, stringFormPart, _t9, _t0;
      return _regenerator().w(function (_context1) {
        while (1) switch (_context1.n) {
          case 0:
            if (!(depth !== 0 && !query.canCreateMoreNestedBlocks())) {
              _context1.n = 1;
              break;
            }
            return _context1.a(2);
          case 1:
            yieldedTokens = false;
            _iterator11 = _createForOfIteratorHelper(this._parseSubtokens(query, idx, this.fullTokenProviders));
            _context1.p = 2;
            _iterator11.s();
          case 3:
            if ((_step11 = _iterator11.n()).done) {
              _context1.n = 6;
              break;
            }
            subtokens = _step11.value;
            token = this._createToken(query, idx, this.fullTokenProviders, subtokens);
            if (!token) {
              _context1.n = 5;
              break;
            }
            _context1.n = 4;
            return token;
          case 4:
            yieldedTokens = true;
          case 5:
            _context1.n = 3;
            break;
          case 6:
            _context1.n = 8;
            break;
          case 7:
            _context1.p = 7;
            _t9 = _context1.v;
            _iterator11.e(_t9);
          case 8:
            _context1.p = 8;
            _iterator11.f();
            return _context1.f(8);
          case 9:
            if (!yieldedTokens) {
              _context1.n = 10;
              break;
            }
            return _context1.a(2);
          case 10:
            _iterator12 = _createForOfIteratorHelper(this.stringForms);
            _context1.p = 11;
            _iterator12.s();
          case 12:
            if ((_step12 = _iterator12.n()).done) {
              _context1.n = 23;
              break;
            }
            stringForm = _step12.value;
            lastPartIdx = -1;
            i = idx;
            hasDefiningFeature = false;
          case 13:
            if (false) {}
            i = query.skipIgnorable(i);
            wordEnd = query.skipUnignorable(i);
            if (!(wordEnd === i)) {
              _context1.n = 15;
              break;
            }
            if (!hasDefiningFeature) {
              _context1.n = 14;
              break;
            }
            _context1.n = 14;
            return new Token(idx, wordEnd, this, {
              stringForm: stringForm,
              lastPartIdx: -1
            }, {
              isProper: false
            });
          case 14:
            return _context1.a(3, 22);
          case 15:
            word = query.lowercase.substring(i, wordEnd);
            match = -1;
            formPartIdx = lastPartIdx + 1;
          case 16:
            if (!(formPartIdx < stringForm.strings.length)) {
              _context1.n = 18;
              break;
            }
            stringFormPart = stringForm.strings[formPartIdx];
            if (!stringFormPart.startsWith(word)) {
              _context1.n = 17;
              break;
            }
            match = formPartIdx;
            return _context1.a(3, 18);
          case 17:
            formPartIdx++;
            _context1.n = 16;
            break;
          case 18:
            if (!(match === -1)) {
              _context1.n = 19;
              break;
            }
            return _context1.a(3, 22);
          case 19:
            lastPartIdx = match;
            hasDefiningFeature || (hasDefiningFeature = !TokenTypeNumberLiteral.isValidNumber(word));
            if (!(query.skipIgnorable(wordEnd) < query.length)) {
              _context1.n = 20;
              break;
            }
            if (!hasDefiningFeature) {
              _context1.n = 20;
              break;
            }
            _context1.n = 20;
            return new Token(idx, wordEnd, this, {
              stringForm: stringForm,
              lastPartIdx: lastPartIdx,
              i: i
            }, {
              isProper: false
            });
          case 20:
            i = wordEnd;
          case 21:
            _context1.n = 13;
            break;
          case 22:
            _context1.n = 12;
            break;
          case 23:
            _context1.n = 25;
            break;
          case 24:
            _context1.p = 24;
            _t0 = _context1.v;
            _iterator12.e(_t0);
          case 25:
            _context1.p = 25;
            _iterator12.f();
            return _context1.f(25);
          case 26:
            return _context1.a(2);
        }
      }, parseTokens, this, [[11, 24, 25, 26], [2, 7, 8, 9]]);
    })
    /**
     * @private
     * @param {QueryInfo} query
     * @param {number} idx
     * @param {TokenProvider[]} subtokenProviders
     * @param {Token[]} subtokens
     * @returns {Token?}
     */
  }, {
    key: "_createToken",
    value: function _createToken(query, idx, subtokenProviders, subtokens) {
      subtokens.reverse();
      var isLegal = true;
      var isTruncated = subtokens.length < subtokenProviders.length;
      var hasDefiningFeature = false;
      var _iterator13 = _createForOfIteratorHelper(subtokens),
        _step13;
      try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
          var subtoken = _step13.value;
          isTruncated |= subtoken.isTruncated; // If any of our kids are truncated, so are we
          isLegal && (isLegal = subtoken.isLegal); // If any of our kids are illegal, so are we
          if (subtoken.isDefiningFeature && subtoken.start < query.length) hasDefiningFeature = true;
        }

        /** See {@link Token.isDefiningFeature} */
      } catch (err) {
        _iterator13.e(err);
      } finally {
        _iterator13.f();
      }
      if (!hasDefiningFeature) return null;
      var end = query.skipIgnorable(subtokens[subtokens.length - 1].end);
      return new Token(idx, end, this, {
        subtokens: subtokens
      }, {
        precedence: this.block.precedence,
        isTruncated: isTruncated,
        isLegal: isLegal
      });
    }

    /**
     * Parse all the tokens from this.tokenProviders[tokenProviderIdx] then
     * recursively call this for the next token. Returns a list of tokens for
     * each combination of possible interpretations of the subtokens.
     *
     * Note that the tokens in the returned token arrays are in reverse to the
     * order of their providers in this.tokenProviders, just to confuse you :P
     *
     * @private
     * @param {QueryInfo} query
     * @param {number} idx
     * @param {TokenProvider[]} subtokenProviders
     * @param {number} depth
     * @param {number} tokenProviderIdx
     * @param {boolean} parseNextToken
     * @yields {Token[]}
     */
  }, {
    key: "_parseSubtokens",
    value: function _parseSubtokens(query, idx, subtokenProviders, depth) {
      var _this9 = this;
      var tokenProviderIdx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
      var parseNextToken = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
      return /*#__PURE__*/_regenerator().m(function _callee() {
        var tokenProvider, _iterator14, _step14, token, inputIndex, _iterator15, _step15, subTokenArr, _t1, _t10;
        return _regenerator().w(function (_context10) {
          while (1) switch (_context10.n) {
            case 0:
              idx = query.skipIgnorable(idx);
              tokenProvider = subtokenProviders[tokenProviderIdx];
              _iterator14 = _createForOfIteratorHelper(tokenProvider.parseTokens(query, idx, depth + 1));
              _context10.p = 1;
              _iterator14.s();
            case 2:
              if ((_step14 = _iterator14.n()).done) {
                _context10.n = 16;
                break;
              }
              token = _step14.value;
              ++query.tokenCount;
              if (query.canCreateMoreTokens()) {
                _context10.n = 3;
                break;
              }
              return _context10.a(3, 16);
            case 3:
              if (!(depth !== 0 && !query.canCreateMoreNestedBlocks())) {
                _context10.n = 4;
                break;
              }
              return _context10.a(3, 16);
            case 4:
              if (!(_this9.block.precedence !== -1)) {
                _context10.n = 6;
                break;
              }
              if (!(
              // If we care about the precedence of this block
              // Discard this token if its precedence is higher than ours, meaning it should be calculated
              //  before us not afterward.
              token.precedence > _this9.block.precedence && (
              // See https://github.com/ScratchAddons/ScratchAddons/issues/5981
              tokenProviderIdx === 0 || !(token.type instanceof TokenTypeBlock) || token.type.block.id !== "operator_not"))) {
                _context10.n = 5;
                break;
              }
              return _context10.a(3, 15);
            case 5:
              if (!(token.precedence === _this9.block.precedence)) {
                _context10.n = 6;
                break;
              }
              inputIndex = _this9.block.parts[tokenProviderIdx].inputIdx;
              if (!(inputIndex !== 0)) {
                _context10.n = 6;
                break;
              }
              return _context10.a(3, 15);
            case 6:
              if (!(!parseNextToken || !token.isLegal || tokenProviderIdx === subtokenProviders.length - 1)) {
                _context10.n = 8;
                break;
              }
              _context10.n = 7;
              return [token];
            case 7:
              _context10.n = 15;
              break;
            case 8:
              _iterator15 = _createForOfIteratorHelper(_this9._parseSubtokens(query, token.end, subtokenProviders, depth, tokenProviderIdx + 1, !token.isTruncated));
              _context10.p = 9;
              _iterator15.s();
            case 10:
              if ((_step15 = _iterator15.n()).done) {
                _context10.n = 12;
                break;
              }
              subTokenArr = _step15.value;
              subTokenArr.push(token);
              _context10.n = 11;
              return subTokenArr;
            case 11:
              _context10.n = 10;
              break;
            case 12:
              _context10.n = 14;
              break;
            case 13:
              _context10.p = 13;
              _t1 = _context10.v;
              _iterator15.e(_t1);
            case 14:
              _context10.p = 14;
              _iterator15.f();
              return _context10.f(14);
            case 15:
              _context10.n = 2;
              break;
            case 16:
              _context10.n = 18;
              break;
            case 17:
              _context10.p = 17;
              _t10 = _context10.v;
              _iterator14.e(_t10);
            case 18:
              _context10.p = 18;
              _iterator14.f();
              return _context10.f(18);
            case 19:
              return _context10.a(2);
          }
        }, _callee, null, [[9, 13, 14, 15], [1, 17, 18, 19]]);
      })();
    }
  }, {
    key: "createBlockValue",
    value: function createBlockValue(token, query) {
      var _this$block;
      if (!token.isLegal) throw new Error("Cannot create a block from an illegal token.");
      var blockInputs;
      if (token.value.stringForm) {
        blockInputs = token.value.stringForm.inputs;
      } else {
        var subtokens = token.value.subtokens;
        blockInputs = [];
        for (var i = 0; i < subtokens.length; i++) {
          var blockPart = this.block.parts[i];
          if (typeof blockPart !== "string") blockInputs.push(subtokens[i].createBlockValue(query));
        }
        while (blockInputs.length < this.block.inputs.length) blockInputs.push(null);
      }
      return (_this$block = this.block).createBlock.apply(_this$block, _toConsumableArray(blockInputs));
    }
  }, {
    key: "createText",
    value: function createText(token, query, endOnly) {
      if (token.value.stringForm) {
        if (endOnly) {
          if (token.value.lastPartIdx === -1 || token.end <= query.length) {
            return query.str.substring(token.start, token.end);
          } else {
            return query.str.substring(token.start, token.end) + token.value.stringForm.strings[token.value.lastPartIdx].substring(token.end - token.value.i) + " " + token.value.stringForm.strings.slice(token.value.lastPartIdx + 1).join(" ");
          }
        }
        return token.value.stringForm.strings.join(" ");
      }
      if (!token.isTruncated && endOnly) return query.str.substring(token.start, token.end);
      var subtokens = token.value.subtokens;
      var text = "";
      if (token.start !== subtokens[0].start) {
        text += query.str.substring(token.start, subtokens[0].start);
      }
      var i;
      for (i = 0; i < subtokens.length; i++) {
        var _subtoken$type$create;
        var subtoken = subtokens[i];
        if (!token.isLegal && subtoken.start >= query.length) break;
        var subtokenText = (_subtoken$type$create = subtoken.type.createText(subtoken, query, endOnly)) !== null && _subtoken$type$create !== void 0 ? _subtoken$type$create : "";
        text += subtokenText;
        if (i !== subtokens.length - 1) {
          var next = subtokens[i + 1];
          var nextStart = next.start;
          if (nextStart !== subtoken.end) {
            text += query.str.substring(subtoken.end, nextStart);
          } else {
            if ((!endOnly || nextStart >= query.length) && subtokenText.length !== 0 && QueryInfo.IGNORABLE_CHARS.indexOf(subtokenText.at(-1)) === -1) text += " ";
          }
        }
      }
      return text;
    }
  }, {
    key: "getSubtokens",
    value: function getSubtokens(token, query) {
      return token.value.subtokens;
    }
  }]);
}(TokenType);
/**
 * A single interpretation of a query.
 */
var QueryResult = /*#__PURE__*/function () {
  function QueryResult(query, token) {
    _classCallCheck(this, QueryResult);
    /**
     * The query that this is a result of.
     * @type {QueryInfo}
     */
    this.query = query;
    /**
     * The root token of this result.
     *
     * The root token is a token which encapsules the entire query.
     * @type {Token}
     */
    this.token = token;
  }
  return _createClass(QueryResult, [{
    key: "isTruncated",
    get: function get() {
      return this.token.isTruncated;
    }

    /**
     * @param {boolean} endOnly
     * @returns {string}
     */
  }, {
    key: "toText",
    value: function toText(endOnly) {
      var _this$token$type$crea;
      return (_this$token$type$crea = this.token.type.createText(this.token, this.query, endOnly)) !== null && _this$token$type$crea !== void 0 ? _this$token$type$crea : "";
    }

    /**
     * @returns {BlockInstance}
     */
  }, {
    key: "getBlock",
    value: function getBlock() {
      if (!this.block) this.block = this.token.createBlockValue(this.query);
      return this.block;
    }

    /**
     * @returns {{stringLength: number, tokenLength: number}}
     */
  }, {
    key: "getLengths",
    value: function getLengths() {
      if (this.lengths) return this.lengths;
      var stringLength = 0;
      var tokenLength = 0;

      /** @type {(block: BlockInstance) => void} */
      var _getBlockLengths = function getBlockLengths(block) {
        var inputIdx = 0;
        var _iterator16 = _createForOfIteratorHelper(block.typeInfo.parts),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var part = _step16.value;
            ++tokenLength;
            if (typeof part === "string") {
              stringLength += part.length;
            } else {
              var input = block.inputs[inputIdx++];
              if (input instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInstance"]) {
                _getBlockLengths(input);
              } else if (part instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputEnum"]) {
                stringLength += input.string.length;
              } else if (part instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputString"] && input !== part.defaultValue) {
                // Make string inputs 100x their real length so they appear at the bottom
                stringLength += ("" + input).length * 100;
              } else if (input != null) {
                stringLength += ("" + input).length;
              }
            }
          }

          // Account for the spaces between inputs
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        stringLength += block.typeInfo.parts.length - 1;
      };
      _getBlockLengths(this.getBlock());
      return this.lengths = {
        stringLength: stringLength,
        tokenLength: tokenLength
      };
    }
  }]);
}();

/**
 * Information on the current query being executed, with some utility
 * functions for helping out token providers.
 */
var QueryInfo = /*#__PURE__*/function () {
  function QueryInfo(querier, query, id) {
    _classCallCheck(this, QueryInfo);
    /** @type {WorkspaceQuerier} */
    this.querier = querier;
    /** @type {string} The query */
    this.str = query.replace(/\u00a0/g, " ");
    /** @type {string} A lowercase version of the query. Used for case insensitive comparisons. */
    this.lowercase = this.str.toLowerCase();
    /** @type {number} A unique identifier for this query */
    this.id = id;
    /** @type {number} The number of tokens we've found so far */
    this.tokenCount = 0;
    /** @type {number} The number of query results we've found so far */
    this.resultCount = 0;
  }

  /**
   * @param {string} str
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next non-ignorable character in str, after idx.
   */
  return _createClass(QueryInfo, [{
    key: "skipIgnorable",
    value:
    /**
     * @param {number} idx The index to start at.
     * @returns {number} The index of the next non-ignorable character in the query, after idx.
     */
    function skipIgnorable(idx) {
      return QueryInfo.skipIgnorable(this.lowercase, idx);
    }

    /**
     * @param {string} str
     * @param {number} idx The index to start at.
     * @returns {number} The index of the next ignorable character in str, after idx.
     */
  }, {
    key: "skipUnignorable",
    value:
    /**
     * @param {number} idx The index to start at.
     * @returns {number} The index of the next ignorable character in the query, after idx.
     */
    function skipUnignorable(idx) {
      return QueryInfo.skipUnignorable(this.lowercase, idx);
    }

    /** @type {number} The length in characters of the query. */
  }, {
    key: "length",
    get: function get() {
      return this.str.length;
    }
  }, {
    key: "canCreateMoreTokens",
    value: function canCreateMoreTokens() {
      return this.tokenCount < WorkspaceQuerier.MAX_TOKENS;
    }
  }, {
    key: "canCreateMoreNestedBlocks",
    value: function canCreateMoreNestedBlocks() {
      return this.canCreateMoreTokens() && this.resultCount < WorkspaceQuerier.MAX_RESULTS;
    }
  }], [{
    key: "skipIgnorable",
    value: function skipIgnorable(str, idx) {
      while (QueryInfo.IGNORABLE_CHARS.indexOf(str[idx]) !== -1) ++idx;
      return idx;
    }
  }, {
    key: "skipUnignorable",
    value: function skipUnignorable(str, idx) {
      while (QueryInfo.IGNORABLE_CHARS.indexOf(str[idx]) === -1 && idx < str.length) ++idx;
      return idx;
    }
  }]);
}();
/**
 * Workspace queriers keep track of all the data needed to query a given workspace (referred to as
 * the 'workspace index') and provides the methods to execute queries on the indexed workspace.
 */
/** Characters that can be safely skipped over. */
_defineProperty(QueryInfo, "IGNORABLE_CHARS", [" "]);
var WorkspaceQuerier = /*#__PURE__*/function () {
  function WorkspaceQuerier() {
    _classCallCheck(this, WorkspaceQuerier);
  }
  return _createClass(WorkspaceQuerier, [{
    key: "indexWorkspace",
    value:
    /**
     * Indexes a workspace in preparation for querying it.
     * @param {BlockTypeInfo[]} blocks The list of blocks in the workspace.
     */
    function indexWorkspace(blocks) {
      this._queryCounter = 0;
      this._createTokenGroups();
      this._populateTokenGroups(blocks);
      this.workspaceIndexed = true;
    }

    /**
     * Queries the indexed workspace for blocks matching the query string.
     * @param {string} queryStr The query.
     * @returns {{results: QueryResult[], illegalResult: QueryResult | null, limited: boolean}} A list of the results of the query, sorted by their relevance.
     */
  }, {
    key: "queryWorkspace",
    value: function queryWorkspace(queryStr) {
      if (!this.workspaceIndexed) throw new Error("A workspace must be indexed before it can be queried!");
      if (queryStr.trim().length === 0) return {
        results: [],
        illegalResult: null,
        limited: false
      };
      var query = new QueryInfo(this, queryStr, this._queryCounter++);
      var results = [];
      var foundTokenCount = 0;
      var limited = false;
      var bestIllegalResult = null;
      var bestIllegalResultText = "";
      var _iterator17 = _createForOfIteratorHelper(this.tokenGroupBlocks.parseTokens(query, 0, 0)),
        _step17;
      try {
        for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
          var option = _step17.value;
          if (option.end >= queryStr.length) {
            if (option.isLegal) {
              results.push(new QueryResult(query, option));
            } else {
              var text = option.type.createText(option, query, true);
              if (!bestIllegalResult || text.length < text) {
                bestIllegalResult = new QueryResult(query, option);
                bestIllegalResultText = text;
              }
            }
          }
          ++query.resultCount;
          if (!limited && query.resultCount >= WorkspaceQuerier.MAX_RESULTS) {
            console.warn("Warning: Workspace query exceeded maximum result count.");
            limited = true;
          }
          if (!query.canCreateMoreTokens()) {
            console.warn("Warning: Workspace query exceeded maximum token count.");
            limited = true;
            break;
          }
        }

        // Used to eliminate blocks whos strings can be parsed as something else.
        //  This step removes silly suggestions like `if <(1 + 1) = "2 then"> then`
      } catch (err) {
        _iterator17.e(err);
      } finally {
        _iterator17.f();
      }
      var canBeString = Array(queryStr.length).fill(true);
      function searchToken(token) {
        var subtokens = token.type.getSubtokens(token, query);
        if (subtokens) {
          var _iterator18 = _createForOfIteratorHelper(subtokens),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var subtoken = _step18.value;
              searchToken(subtoken);
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        } else if (!(token.type instanceof TokenTypeStringLiteral) && token.isProper && !token.isTruncated) for (var i = token.start; i < token.end; i++) {
          canBeString[i] = false;
        }
      }
      for (var _i2 = 0, _results = results; _i2 < _results.length; _i2++) {
        var result = _results[_i2];
        searchToken(result.token);
      }
      function checkValidity(token) {
        var subtokens = token.type.getSubtokens(token, query);
        if (subtokens) {
          var _iterator19 = _createForOfIteratorHelper(subtokens),
            _step19;
          try {
            for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
              var subtoken = _step19.value;
              if (!checkValidity(subtoken)) return false;
            }
          } catch (err) {
            _iterator19.e(err);
          } finally {
            _iterator19.f();
          }
        } else if (token.type instanceof TokenTypeStringLiteral && !TokenTypeNumberLiteral.isValidNumber(token.value)) {
          for (var i = token.start; i < token.end; i++) if (!canBeString[i]) return false;
        }
        return true;
      }
      var validResults = [];
      for (var _i3 = 0, _results2 = results; _i3 < _results2.length; _i3++) {
        var _result = _results2[_i3];
        if (checkValidity(_result.token)) validResults.push(_result);
      }
      validResults = validResults.sort(function (a, b) {
        var aLengths = a.getLengths();
        var bLengths = b.getLengths();
        if (aLengths.stringLength != bLengths.stringLength) return aLengths.stringLength - bLengths.stringLength;
        return aLengths.tokenLength - bLengths.tokenLength;
      });
      return {
        results: validResults,
        illegalResult: validResults.length === 0 ? bestIllegalResult : null,
        limited: limited
      };
    }

    /**
     * Creates the token group hierarchy used by this querier.
     *
     * Each of these token groups represents a list of all the tokens that could be encountered
     * when we're looking for a specific type of input. For example, tokenGroupString contains all
     * the tokens that could be encountered when we're looking for a string input (like after the
     * word 'say' for the `say ()` block). tokenGroupBlocks is an interesting one, it contains all
     * the tokens that could be the root token of a query result. In practice, this just means all
     * the stackable blocks (like 'say') and all the reporter blocks (like '+').
     *
     * But wait, there's a problem. Blocks like `() + ()` have two inputs, both of which are numbers.
     * The issue arises when you realize the block '+' itself also returns a number. So when we
     * try to call parseTokens on the '+' block, it will try to look for it's first parameter thus
     * calling parseTokens on tokenGroupNumber, which will call parseTokens on the '+' block again
     * (because + can return a number) which will call tokenGroupNumber again... and we're in an
     * infinite loop. We can't just exclude blocks from being their own first parameter because then
     * queries like '1 + 2 + 3' wouldn't work. The solution is something you might have only thought
     * of as a performance boost; caching. When tokenGroupNumber gets queried for the second time,
     * it's mid way though building its cache from the first query. If this happens, it just returns
     * all the tokens it had already found, but no more. So in the example above, when the + block calls
     * tokenGroupNumber for the second time it finds only the number literal '1'. It then finds the
     * second number literal '2' and yields the block '1 + 2' which gets added to tokenGroupNumber's
     * cache. '1 + 2' then gets disguarded by the queryWorkspace function because it doesn't cover the
     * whole query. But the '+' block's query to tokenGroupNumber never finished, so it will continue
     * and, because the first one we found is now a part of the cache, tokenGroupNumber will yield
     * '1 + 2' as a result. The + block will continue parsing, find the second '+' and the number '3'
     * and yield '(1 + 2) + 3'. No infinite loops!
     *
     * A consequence of this system is something I implicitly implied in the above paragraph "when the
     * + block calls tokenGroupNumber for the second time it finds only the number literal '1'" This
     * is only true if 'TokenTypeNumberLiteral' is searched before the '+' block. This is why the order
     * the token providers are in is critically important. I'll leave it as an exercise to the reader to
     * work out why, but the same parsing order problems crops up when implementing order of operations.
     * If a suggestion that should show up isn't showing up, it's probably because the token providers
     * in one of the groups is in the wrong order. Ordering the providers within the base groups is dealt
     * with by {@link _populateTokenGroups} and the inter-group ordering is dealt with below, by the
     * order they are passed into pushProviders.
     *
     * @private
     */
  }, {
    key: "_createTokenGroups",
    value: function _createTokenGroups() {
      this.tokenTypeStringLiteral = new TokenProviderSingleCache(new TokenTypeStringLiteral());
      this.tokenTypeNumberLiteral = new TokenProviderSingleCache(new TokenTypeNumberLiteral());
      this.tokenGroupRoundBlocks = new TokenProviderGroup(); // Round blocks like (() + ()) or (my variable)
      this.tokenGroupBooleanBlocks = new TokenProviderGroup(); // Boolean blocks like <not ()>
      this.tokenGroupStackBlocks = new TokenProviderGroup(); // Stackable blocks like `move (10) steps`
      this.tokenGroupHatBlocks = new TokenProviderGroup(); // Hat block like `when green flag clicked`

      // Anything that fits into a boolean hole. (Boolean blocks + Brackets)
      this.tokenGroupBoolean = new TokenProviderOptional(new TokenProviderGroup());
      this.tokenGroupBoolean.inner.pushProviders([this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupBoolean)]);
      this.tokenGroupBoolean.inner.pushProviders([this.tokenGroupRoundBlocks], false);

      // Anything that fits into a number hole. (Round blocks + Boolean blocks + Number Literals + Brackets)
      this.tokenGroupNumber = new TokenProviderOptional(new TokenProviderGroup());
      this.tokenGroupNumber.inner.pushProviders([this.tokenTypeNumberLiteral, this.tokenGroupRoundBlocks, this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupNumber)]);

      // Anything that fits into a string hole (Round blocks + Boolean blocks + String Literals + Brackets)
      this.tokenGroupString = new TokenProviderOptional(new TokenProviderGroup());
      this.tokenGroupString.inner.pushProviders([this.tokenTypeStringLiteral, this.tokenGroupRoundBlocks, this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupString)]);

      // Anything that fits into a c shaped hole (Stackable blocks)
      this.tokenGroupStack = new TokenProviderOptional(this.tokenGroupStackBlocks);

      // Anything you can spawn using the menu (All blocks)
      this.tokenGroupBlocks = new TokenProviderGroup();
      this.tokenGroupBlocks.pushProviders([this.tokenGroupStackBlocks, this.tokenGroupBooleanBlocks, this.tokenGroupRoundBlocks, this.tokenGroupHatBlocks]);
    }

    /**
     * Populates the token groups created by {@link _createTokenGroups} with the blocks
     * found in the workspace.
     * @param {BlockTypeInfo[]} blocks The list of blocks in the workspace.
     * @private
     */
  }, {
    key: "_populateTokenGroups",
    value: function _populateTokenGroups(blocks) {
      // Apply order of operations
      var _iterator20 = _createForOfIteratorHelper(blocks),
        _step20;
      try {
        for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
          var _block = _step20.value;
          _block.precedence = WorkspaceQuerier.ORDER_OF_OPERATIONS.indexOf(_block.id);
        }
      } catch (err) {
        _iterator20.e(err);
      } finally {
        _iterator20.f();
      }
      for (var i = blocks.length - 1; i >= 0; i--) {
        var block = blocks[i];
        if (block.precedence !== -1) {
          var target = blocks.length - (WorkspaceQuerier.ORDER_OF_OPERATIONS.length - (block.precedence - 1));
          if (i !== target) {
            var oldBlock = blocks[target];
            blocks[target] = block;
            blocks[i] = oldBlock;
          }
        }
      }
      var _iterator21 = _createForOfIteratorHelper(blocks),
        _step21;
      try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
          var _block2 = _step21.value;
          var blockTokenType = new TokenTypeBlock(this, _block2);
          switch (_block2.shape) {
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round:
              this.tokenGroupRoundBlocks.pushProviders([blockTokenType]);
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean:
              this.tokenGroupBooleanBlocks.pushProviders([blockTokenType]);
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack:
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End:
              this.tokenGroupStackBlocks.pushProviders([blockTokenType]);
              break;
            case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat:
              this.tokenGroupHatBlocks.pushProviders([blockTokenType]);
              break;
          }
        }
      } catch (err) {
        _iterator21.e(err);
      } finally {
        _iterator21.f();
      }
    }

    /**
     * Clears the memory used by the workspace index.
     */
  }, {
    key: "clearWorkspaceIndex",
    value: function clearWorkspaceIndex() {
      this.workspaceIndexed = false;
      this._destroyTokenGroups();
    }

    /**
     * @private
     */
  }, {
    key: "_destroyTokenGroups",
    value: function _destroyTokenGroups() {
      this.tokenTypeStringLiteral = null;
      this.tokenTypeNumberLiteral = null;
      this.tokenGroupBooleanBlocks = null;
      this.tokenGroupRoundBlocks = null;
      this.tokenGroupStackBlocks = null;
      this.tokenGroupHatBlocks = null;
      this.tokenGroupBoolean = null;
      this.tokenGroupNumber = null;
      this.tokenGroupString = null;
      this.tokenGroupStack = null;
      this.tokenGroupBlocks = null;
    }
  }]);
}();
_defineProperty(WorkspaceQuerier, "ORDER_OF_OPERATIONS", [null,
// brackets
"operator_join", "operator_round", "operator_mathop", "operator_mod", "operator_divide", "operator_multiply", "operator_subtract", "operator_add", "operator_equals", "operator_lt", "operator_gt", "operator_or", "operator_and", "operator_not"]);
/**
 * The maximum number of results to find before we give up searching sub-blocks.
 */
_defineProperty(WorkspaceQuerier, "MAX_RESULTS", 2000);
/**
 * The maximum number of tokens to find before giving up.
 */
_defineProperty(WorkspaceQuerier, "MAX_TOKENS", 100000);
/**
 * The maximum number of string forms a block can have before we give up.
 */
_defineProperty(WorkspaceQuerier, "MAX_STRING_FORMS", 500);


/***/ }),

/***/ "./src/addons/addons/middle-click-popup/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/middle-click-popup/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/module.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/module.js ***!
  \********************************************************/
/*! exports provided: getTextWidth, clearTextWidthCache, onClearTextWidthCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextWidth", function() { return getTextWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTextWidthCache", function() { return clearTextWidthCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClearTextWidthCache", function() { return onClearTextWidthCache; });
/* harmony import */ var _event_target_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../event-target.js */ "./src/addons/event-target.js");
 /* inserted by pull.js */

var textWidthCache = new Map();
var textWidthCacheSize = 1000;
var eventTarget = new _event_target_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
var eventClearTextCache = "clearTextCache";

/**
 * Gets the width of an svg text element, with caching.
 * @param {SVGTextElement} textElement
 */
function getTextWidth(textElement) {
  var string = textElement.innerHTML;
  if (string.length === 0) return 0;
  var width = textWidthCache.get(string);
  if (width) return width;
  width = textElement.getBoundingClientRect().width;
  textWidthCache.set(string, width);
  if (textWidthCache.size > textWidthCacheSize) {
    textWidthCache["delete"](textWidthCache.keys().next());
  }
  return width;
}

/**
 * Clears the text width cache of the middle click popup.
 */
function clearTextWidthCache() {
  textWidthCache.clear();
  eventTarget.dispatchEvent(new CustomEvent(eventClearTextCache));
}

/**
 * @param {() => void} func
 */
function onClearTextWidthCache(func) {
  eventTarget.addEventListener(eventClearTextCache, func);
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkspaceQuerier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceQuerier.js */ "./src/addons/addons/middle-click-popup/WorkspaceQuerier.js");
/* harmony import */ var _BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockRenderer.js */ "./src/addons/addons/middle-click-popup/BlockRenderer.js");
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/middle-click-popup/module.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
//@ts-check





/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, msg, console, Blockly, vm, PREVIEW_LIMIT, popupRoot, popupContainer, popupInputContainer, popupInputSuggestion, popupInput, popupPreviewContainer, popupPreviewScrollbarSVG, popupPreviewScrollbarBackground, popupPreviewScrollbarHandle, popupPreviewBlocks, querier, mousePosition, queryPreviews, queryIllegalResult, selectedPreviewIdx, blockTypes, limited, allowMenuClose, popupPosition, popupOrigin, previewWidth, previewHeight, previewScale, previewMinHeight, previewMaxHeight, openPopup, closePopup, updateInput, updateSelection, updateCursor, updateScrollbar, selectBlock, acceptAutocomplete, _doWorkspaceClick_, _isDeleteArea;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          acceptAutocomplete = function _acceptAutocomplete() {
            var factory;
            if (queryPreviews[selectedPreviewIdx]) factory = queryPreviews[selectedPreviewIdx].autocompleteFactory;else factory = function factory() {
              return popupInputSuggestion.value;
            };
            if (popupInputSuggestion.value.length === 0 || !factory) return;
            popupInput.value = factory(false);
            // Move cursor to the end of the newly inserted text
            popupInput.selectionStart = popupInput.value.length + 1;
            updateInput();
          };
          selectBlock = function _selectBlock() {
            var selectedPreview = queryPreviews[selectedPreviewIdx];
            if (!selectedPreview) return;
            var workspace = Blockly.getMainWorkspace();
            // This is mostly copied from https://github.com/scratchfoundation/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/scratch_blocks_utils.js#L171
            // Some bits were removed or changed to fit our needs.
            workspace.setResizesEnabled(false);
            var newBlock;
            Blockly.Events.disable();
            try {
              newBlock = selectedPreview.block.createWorkspaceForm();
              Blockly.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
              var svgRootNew = newBlock.getSvgRoot();
              if (!svgRootNew) {
                throw new Error("newBlock is not rendered.");
              }
              var blockBounds = newBlock.svgPath_.getBoundingClientRect();
              var newBlockX = Math.floor((mousePosition.x - (blockBounds.left + blockBounds.right) / 2) / workspace.scale);
              var newBlockY = Math.floor((mousePosition.y - (blockBounds.top + blockBounds.bottom) / 2) / workspace.scale);
              newBlock.moveBy(newBlockX, newBlockY);
            } finally {
              Blockly.Events.enable();
            }
            if (Blockly.Events.isEnabled()) {
              Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
            }
            var fakeEvent = {
              clientX: mousePosition.x,
              clientY: mousePosition.y,
              type: "mousedown",
              stopPropagation: function stopPropagation() {},
              preventDefault: function preventDefault() {},
              target: selectedPreview.svgBlock
            };
            if (workspace.getGesture(fakeEvent)) {
              workspace.startDragWithFakeEvent(fakeEvent, newBlock);
            }
          };
          updateScrollbar = function _updateScrollbar() {
            var scrollTop = popupPreviewContainer.scrollTop;
            var scrollY = popupPreviewContainer.scrollHeight;
            if (scrollY <= previewHeight) {
              popupPreviewScrollbarSVG.style.display = "none";
              return;
            }
            var scrollbarHeight = previewHeight / scrollY * previewHeight;
            var scrollbarY = scrollTop / scrollY * previewHeight;
            popupPreviewScrollbarSVG.style.display = "";
            popupPreviewScrollbarHandle.setAttribute("height", "" + scrollbarHeight);
            popupPreviewScrollbarHandle.setAttribute("y", "" + scrollbarY);
          };
          updateCursor = function _updateCursor() {
            var _popupInput$selection;
            var cursorPos = (_popupInput$selection = popupInput.selectionStart) !== null && _popupInput$selection !== void 0 ? _popupInput$selection : 0;
            var cursorPosRel = popupInput.value.length === 0 ? 0 : cursorPos / popupInput.value.length;
            var y = 0;
            for (var previewIdx = 0; previewIdx < queryPreviews.length; previewIdx++) {
              var preview = queryPreviews[previewIdx];
              var blockX = 5;
              if (blockX + preview.renderedBlock.width > previewWidth / previewScale) blockX += (previewWidth / previewScale - blockX - preview.renderedBlock.width) * previewScale * cursorPosRel;
              var blockY = (y + 30) * previewScale;
              preview.svgBlock.setAttribute("transform", "translate(".concat(blockX, ", ").concat(blockY, ") scale(").concat(previewScale, ")"));
              y += Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["getBlockHeight"])(preview.block);
            }
            popupInputSuggestion.scrollLeft = popupInput.scrollLeft;
          };
          updateSelection = function _updateSelection(newIdx) {
            if (selectedPreviewIdx === newIdx) return;
            var oldSelection = queryPreviews[selectedPreviewIdx];
            if (oldSelection) {
              oldSelection.svgBackground.classList.remove("sa-mcp-preview-block-bg-selection");
              oldSelection.svgBlock.classList.remove("sa-mcp-preview-block-selection");
            }
            if (queryPreviews.length === 0 && queryIllegalResult) {
              popupInputSuggestion.value = popupInput.value + queryIllegalResult.toText(true).substring(popupInput.value.length);
              return;
            }
            var newSelection = queryPreviews[newIdx];
            if (newSelection && newSelection.autocompleteFactory) {
              newSelection.svgBackground.classList.add("sa-mcp-preview-block-bg-selection");
              newSelection.svgBlock.classList.add("sa-mcp-preview-block-selection");
              newSelection.svgBackground.scrollIntoView({
                block: "nearest",
                behavior: Math.abs(newIdx - selectedPreviewIdx) > 1 ? "smooth" : "auto"
              });
              popupInputSuggestion.value = popupInput.value + newSelection.autocompleteFactory(true).substring(popupInput.value.length);
            } else {
              popupInputSuggestion.value = "";
            }
            selectedPreviewIdx = newIdx;
          };
          updateInput = function _updateInput() {
            /**
             * @typedef MenuItem
             * @property {BlockInstance} block
             * @property {(endOnly: boolean) => string} [autocompleteFactory]
             */
            /** @type {MenuItem[]} */
            var blockList = [];
            if (popupInput.value.trim().length === 0) {
              queryIllegalResult = null;
              if (blockTypes) {
                var _iterator = _createForOfIteratorHelper(blockTypes),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var blockType = _step.value;
                    blockList.push({
                      block: blockType.createBlock()
                    });
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              }
              limited = false;
            } else {
              // Get the list of blocks to display using the input content
              var queryResultObj = querier.queryWorkspace(popupInput.value);
              var queryResults = queryResultObj.results;
              queryIllegalResult = queryResultObj.illegalResult;
              limited = queryResultObj.limited;
              if (queryResults.length > PREVIEW_LIMIT) queryResults.length = PREVIEW_LIMIT;
              var _iterator2 = _createForOfIteratorHelper(queryResults),
                _step2;
              try {
                var _loop = function _loop() {
                  var queryResult = _step2.value;
                  blockList.push({
                    block: queryResult.getBlock(),
                    autocompleteFactory: function autocompleteFactory(endOnly) {
                      return queryResult.toText(endOnly);
                    }
                  });
                };
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            // @ts-ignore Delete the old previews
            while (popupPreviewBlocks.firstChild) popupPreviewBlocks.removeChild(popupPreviewBlocks.lastChild);

            // Create the new previews
            queryPreviews.length = 0;
            var y = 0;
            var _loop2 = function _loop2(resultIdx) {
              var _result$autocompleteF;
              var result = blockList[resultIdx];
              var mouseMoveListener = function mouseMoveListener() {
                updateSelection(resultIdx);
              };
              var mouseDownListener = function mouseDownListener(e) {
                e.stopPropagation();
                e.preventDefault();
                updateSelection(resultIdx);
                allowMenuClose = !e.shiftKey;
                selectBlock();
                allowMenuClose = true;
                if (e.shiftKey) popupInput.focus();
              };
              var svgBackground = popupPreviewBlocks.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
              var height = Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["getBlockHeight"])(result.block);
              svgBackground.setAttribute("transform", "translate(0, ".concat((y + height / 10) * previewScale, ")"));
              svgBackground.setAttribute("height", height * previewScale + "px");
              svgBackground.classList.add("sa-mcp-preview-block-bg");
              svgBackground.addEventListener("mousemove", mouseMoveListener);
              svgBackground.addEventListener("mousedown", mouseDownListener);
              var svgBlock = popupPreviewBlocks.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g"));
              svgBlock.addEventListener("mousemove", mouseMoveListener);
              svgBlock.addEventListener("mousedown", mouseDownListener);
              svgBlock.classList.add("sa-mcp-preview-block");
              var renderedBlock = Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result.block, svgBlock);
              queryPreviews.push({
                block: result.block,
                autocompleteFactory: (_result$autocompleteF = result.autocompleteFactory) !== null && _result$autocompleteF !== void 0 ? _result$autocompleteF : null,
                renderedBlock: renderedBlock,
                svgBlock: svgBlock,
                svgBackground: svgBackground
              });
              y += height;
            };
            for (var resultIdx = 0; resultIdx < blockList.length; resultIdx++) {
              _loop2(resultIdx);
            }
            var height = (y + 8) * previewScale;
            if (height < previewMinHeight) previewHeight = previewMinHeight;else if (height > previewMaxHeight) previewHeight = previewMaxHeight;else previewHeight = height;
            popupPreviewBlocks.setAttribute("height", "".concat(height, "px"));
            popupPreviewContainer.style.height = previewHeight + "px";
            popupPreviewScrollbarSVG.style.height = previewHeight + "px";
            popupPreviewScrollbarBackground.setAttribute("height", "" + previewHeight);
            popupInputContainer.dataset["error"] = "" + limited;
            popupPosition = {
              x: popupOrigin.x + 16,
              y: popupOrigin.y - 8
            };
            var popupHeight = popupContainer.getBoundingClientRect().height;
            var popupBottom = popupPosition.y + popupHeight;
            if (popupBottom > window.innerHeight) {
              popupPosition.y -= popupBottom - window.innerHeight;
            }
            popupRoot.style.top = popupPosition.y + "px";
            popupRoot.style.left = popupPosition.x + "px";
            selectedPreviewIdx = -1;
            updateSelection(0);
            updateCursor();
            updateScrollbar();
          };
          closePopup = function _closePopup() {
            if (allowMenuClose) {
              popupOrigin = null;
              popupPosition = null;
              popupRoot.style.display = "none";
              blockTypes = null;
              querier.clearWorkspaceIndex();
            }
          };
          openPopup = function _openPopup() {
            if (addon.self.disabled) return;

            // Don't show the menu if we're not in the code editor
            if (addon.tab.editorMode !== "editor") return;
            if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex !== 0) return;
            blockTypes = _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_2__["BlockTypeInfo"].getBlocks(Blockly, vm, Blockly.getMainWorkspace(), msg);
            querier.indexWorkspace(_toConsumableArray(blockTypes));
            blockTypes.sort(function (a, b) {
              var prio = function prio(block) {
                return ["operators", "data"].indexOf(block.category.name) - block.id.startsWith("data_");
              };
              return prio(b) - prio(a);
            });
            previewScale = window.innerWidth * 0.00005 + addon.settings.get("popup_scale") / 100;
            previewWidth = window.innerWidth * addon.settings.get("popup_width") / 100;
            previewMaxHeight = window.innerHeight * addon.settings.get("popup_max_height") / 100;
            popupContainer.style.width = previewWidth + "px";
            popupOrigin = {
              x: mousePosition.x,
              y: mousePosition.y
            };
            popupRoot.style.display = "";
            popupInput.value = "";
            popupInput.focus();
            updateInput();
          };
          addon = _ref.addon, msg = _ref.msg, console = _ref.console;
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          Blockly = _context.v;
          vm = addon.tab.traps.vm;
          PREVIEW_LIMIT = 50;
          popupRoot = document.body.appendChild(document.createElement("div"));
          popupRoot.classList.add("sa-mcp-root");
          popupRoot.dir = addon.tab.direction;
          popupRoot.style.display = "none";
          popupContainer = popupRoot.appendChild(document.createElement("div"));
          popupContainer.classList.add("sa-mcp-container");
          popupInputContainer = popupContainer.appendChild(document.createElement("div"));
          popupInputContainer.classList.add(addon.tab.scratchClass("input_input-form"));
          popupInputContainer.classList.add("sa-mcp-input-wrapper");
          popupInputSuggestion = popupInputContainer.appendChild(document.createElement("input"));
          popupInputSuggestion.classList.add("sa-mcp-input-suggestion");
          popupInput = popupInputContainer.appendChild(document.createElement("input"));
          popupInput.classList.add("sa-mcp-input");
          popupInput.setAttribute("autocomplete", "off");
          popupPreviewContainer = popupContainer.appendChild(document.createElement("div"));
          popupPreviewContainer.classList.add("sa-mcp-preview-container");
          popupPreviewScrollbarSVG = popupContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
          popupPreviewScrollbarSVG.classList.add("sa-mcp-preview-scrollbar", "blocklyScrollbarVertical", "blocklyMainWorkspaceScrollbar");
          popupPreviewScrollbarSVG.style.display = "none";
          popupPreviewScrollbarBackground = popupPreviewScrollbarSVG.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
          popupPreviewScrollbarBackground.setAttribute("width", "11");
          popupPreviewScrollbarBackground.classList.add("blocklyScrollbarBackground");
          popupPreviewScrollbarHandle = popupPreviewScrollbarSVG.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
          popupPreviewScrollbarHandle.setAttribute("rx", "3");
          popupPreviewScrollbarHandle.setAttribute("ry", "3");
          popupPreviewScrollbarHandle.setAttribute("width", "6");
          popupPreviewScrollbarHandle.setAttribute("x", "2.5");
          popupPreviewScrollbarHandle.classList.add("blocklyScrollbarHandle");
          popupPreviewBlocks = popupPreviewContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
          popupPreviewBlocks.classList.add("sa-mcp-preview-blocks");
          querier = new _WorkspaceQuerier_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
          mousePosition = {
            x: 0,
            y: 0
          };
          document.addEventListener("mousemove", function (e) {
            mousePosition = {
              x: e.clientX,
              y: e.clientY
            };
          });
          document.addEventListener("mousedown", function (e) {
            mousePosition = {
              x: e.clientX,
              y: e.clientY
            };
          }, {
            capture: true
          });
          Object(_module_js__WEBPACK_IMPORTED_MODULE_3__["onClearTextWidthCache"])(closePopup);

          /**
           * @typedef ResultPreview
           * @property {BlockInstance} block
           * @property {((endOnly: boolean) => string)?} autocompleteFactory
           * @property {BlockComponent} renderedBlock
           * @property {SVGGElement} svgBlock
           * @property {SVGRectElement} svgBackground
           */
          /** @type {ResultPreview[]} */
          queryPreviews = [];
          /** @type {QueryResult | null} */
          queryIllegalResult = null;
          selectedPreviewIdx = 0;
          /** @type {BlockTypeInfo[]?} */
          blockTypes = null;
          limited = false;
          allowMenuClose = true;
          popupPosition = null;
          popupOrigin = null;
          previewWidth = 0;
          previewHeight = 0;
          previewScale = 0;
          previewMinHeight = 0;
          previewMaxHeight = 0;
          popupInput.addEventListener("input", updateInput);
          // @ts-ignore
          document.addEventListener("selectionchange", updateCursor);
          popupPreviewContainer.addEventListener("scroll", updateScrollbar);
          popupInput.addEventListener("keydown", function (e) {
            switch (e.key) {
              case "Escape":
                // If there's something in the input, clear it
                if (popupInput.value.length > 0) {
                  popupInput.value = "";
                  updateInput();
                } else {
                  // If not, close the menu
                  closePopup();
                }
                e.stopPropagation();
                e.preventDefault();
                break;
              case "Tab":
                acceptAutocomplete();
                e.stopPropagation();
                e.preventDefault();
                break;
              case "Enter":
                selectBlock();
                closePopup();
                e.stopPropagation();
                e.preventDefault();
                break;
              case "ArrowDown":
                if (selectedPreviewIdx + 1 >= queryPreviews.length) updateSelection(0);else updateSelection(selectedPreviewIdx + 1);
                e.stopPropagation();
                e.preventDefault();
                break;
              case "ArrowUp":
                if (selectedPreviewIdx - 1 < 0) updateSelection(queryPreviews.length - 1);else updateSelection(selectedPreviewIdx - 1);
                e.stopPropagation();
                e.preventDefault();
                break;
            }
          });
          popupInput.addEventListener("focusout", closePopup);

          // Open on ctrl + space
          document.addEventListener("keydown", function (e) {
            if (e.key === " " && (e.ctrlKey || e.metaKey)) {
              openPopup();
              e.preventDefault();
              e.stopPropagation();
            }
          });

          // Open on mouse wheel button
          _doWorkspaceClick_ = Blockly.Gesture.prototype.doWorkspaceClick_;
          Blockly.Gesture.prototype.doWorkspaceClick_ = function () {
            if (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey) openPopup();
            mousePosition = {
              x: this.mostRecentEvent_.clientX,
              y: this.mostRecentEvent_.clientY
            };
            _doWorkspaceClick_.call(this);
          };

          // The popup should delete blocks dragged ontop of it
          _isDeleteArea = Blockly.WorkspaceSvg.prototype.isDeleteArea;
          Blockly.WorkspaceSvg.prototype.isDeleteArea = function (e) {
            if (popupPosition) {
              if (e.clientX > popupPosition.x && e.clientX < popupPosition.x + previewWidth && e.clientY > popupPosition.y && e.clientY < popupPosition.y + previewHeight) {
                return Blockly.DELETE_AREA_TOOLBOX;
              }
            }
            return _isDeleteArea.call(this, e);
          };
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/move-to-top-bottom/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, console, msg, types;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          types = ["sound", "costume"];
          addon.tab.createEditorContextMenu(function (ctx) {
            var target = addon.tab.traps.vm.editingTarget;
            if (ctx.type === "sound") {
              target.reorderSound(ctx.index, 0);
            } else {
              target.reorderCostume(ctx.index, 0);
            }
            queueMicrotask(function () {
              addon.tab.traps.vm.emitTargetsUpdate();
              addon.tab.traps.vm.runtime.emitProjectChanged();
              ctx.target.click();
            });
          }, {
            types: types,
            position: "assetContextMenuAfterExport",
            order: 1,
            label: msg("top"),
            condition: function condition(ctx) {
              return ctx.index !== 0;
            }
          });
          addon.tab.createEditorContextMenu(function (ctx) {
            var target = addon.tab.traps.vm.editingTarget;
            if (ctx.type === "sound") {
              target.reorderSound(ctx.index, Infinity);
            } else {
              target.reorderCostume(ctx.index, Infinity);
            }
            queueMicrotask(function () {
              addon.tab.traps.vm.emitTargetsUpdate();
              addon.tab.traps.vm.runtime.emitProjectChanged();
              ctx.target.click();
            });
          }, {
            types: types,
            position: "assetContextMenuAfterExport",
            order: 2,
            label: msg("bottom"),
            condition: function condition(ctx) {
              return ctx.index !== ctx.target.parentNode.parentNode.childElementCount - 1;
            }
          });
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());

/***/ }),

/***/ "./src/addons/addons/onion-skinning/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/onion-skinning/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/onion-skinning/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./decrement.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg");
/* harmony import */ var _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./increment.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg");
/* harmony import */ var _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./settings.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg");
/* harmony import */ var _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./toggle.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg");
/* generated by pull.js */






var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "decrement.svg": _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "increment.svg": _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "settings.svg": _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "toggle.svg": _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/onion-skinning/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/onion-skinning/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @turbowarp/scratch-svg-renderer */ "./node_modules/@turbowarp/scratch-svg-renderer/src/index.js");
/* harmony import */ var _turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorValues(e) { if (null != e) { var t = e["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0; if (t) return t.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) return { next: function next() { return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e }; } }; } throw new TypeError(_typeof(e) + " is not iterable"); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_ref) {
    var addon, console, msg, paper, paintEditorCanvasContainer, paperCanvas, storedOnionLayers, parseHexColor, settings, getPaperCenter, injectPaper, injectPaperCanvas, createOnionLayer, globalUpdateId, cancelOngoingUpdatesAndGetNewId, removeOnionLayers, relayerOnionLayers, _recursePaperItem, getTint, toHexColor, getPaperColorTint, tintRaster, waitForAllRastersToLoad, rasterizeVector, makeVectorOnion, makeRasterOnion, getSelectedCostumeIndex, updateOnionLayers, setEnabled, settingsChanged, createGroup, createButton, createButtonImage, toggleControlsGroup, toggleButton, settingButton, settingPageWrapper, settingsPage, setSettingsOpen, areSettingsOpen, layerInputs, _loop, _i2, _arr, modeContainer, modeLabel, modeGroup, modeMergeButton, modeTintButton, layeringContainer, layeringLabel, layeringGroup, layeringFrontButton, layeringBehindButton, SVG_NS, settingsTip, settingsTipShape, oldEnabled, controlsLoop, _t2;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          addon = _ref.addon, console = _ref.console, msg = _ref.msg;
          _context4.n = 1;
          return addon.tab.traps.getPaper();
        case 1:
          paper = _context4.v;
          _context4.n = 2;
          return addon.tab.waitForElement("[class^='paint-editor_canvas-container']");
        case 2:
          paintEditorCanvasContainer = _context4.v;
          _context4.p = 3;
          if ("colorIndex" in addon.tab.redux.state.scratchPaint.fillMode) {
            _context4.n = 4;
            break;
          }
          console.error("Detected new paint editor; this will be supported in future versions.");
          return _context4.a(2);
        case 4:
          _context4.n = 6;
          break;
        case 5:
          _context4.p = 5;
          _t2 = _context4.v;
        case 6:
          paperCanvas = paintEditorCanvasContainer[addon.tab.traps.getInternalKey(paintEditorCanvasContainer)].child.child.child.stateNode;
          storedOnionLayers = [];
          parseHexColor = function parseHexColor(color) {
            var hexString = color.substr(1);
            var hexNumber = parseInt(hexString, 16);
            return [hexNumber >> 16 & 0xff,
            // R
            hexNumber >> 8 & 0xff,
            // G
            hexNumber & 0xff // B
            ];
          };
          settings = {
            enabled: addon.settings.get("default") && !addon.self.disabled,
            previous: +addon.settings.get("previous"),
            next: +addon.settings.get("next"),
            opacity: +addon.settings.get("opacity"),
            opacityStep: +addon.settings.get("opacityStep"),
            layering: addon.settings.get("layering"),
            mode: addon.settings.get("mode"),
            beforeTint: parseHexColor(addon.settings.get("beforeTint")),
            afterTint: parseHexColor(addon.settings.get("afterTint"))
          };
          getPaperCenter = function getPaperCenter() {
            var backgroundGuideLayer = paper.project.layers.find(function (i) {
              return i.data.isBackgroundGuideLayer;
            });
            return backgroundGuideLayer.children[0].position;
          };
          injectPaper = function injectPaper() {
            // When background guide layer is added, show onion layers.
            // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L145
            var originalAddLayer = paper.Project.prototype.addLayer;
            paper.Project.prototype.addLayer = function (layer) {
              var result = originalAddLayer.call(this, layer);
              if (layer.data.isBackgroundGuideLayer) {
                var onion;
                while (onion = storedOnionLayers.shift()) {
                  originalAddLayer.call(this, onion);
                }
                relayerOnionLayers();
              }
              return result;
            };

            // Scratch uses importJSON to undo or redo
            // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/undo.js#L37
            // The code prior to this will remove our onion layers, so we have to manually add them back.
            var originalImportJSON = paper.Project.prototype.importJSON;
            paper.Project.prototype.importJSON = function (json) {
              var result = originalImportJSON.call(this, json);
              if (settings.enabled) {
                updateOnionLayers();
              }
              return result;
            };

            // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L114
            // When background guide layer is removed, hide onion layers.
            var originalRemoveLayer = paper.Layer.prototype.remove;
            paper.Layer.prototype.remove = function () {
              if (this.data.isBackgroundGuideLayer) {
                var _iterator = _createForOfIteratorHelper(paper.project.layers),
                  _step;
                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _layer = _step.value;
                    if (_layer.data.sa_isOnionLayer) {
                      storedOnionLayers.push(_layer);
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
                for (var _i = 0, _storedOnionLayers = storedOnionLayers; _i < _storedOnionLayers.length; _i++) {
                  var layer = _storedOnionLayers[_i];
                  layer.remove();
                }
              }
              return originalRemoveLayer.call(this);
            };
          };
          injectPaperCanvas = function injectPaperCanvas() {
            var expectingImport = false;
            var PaperCanvas = paperCanvas.constructor;

            // importImage is called to start loading an image.
            // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L124
            var originalImportImage = PaperCanvas.prototype.importImage;
            PaperCanvas.prototype.importImage = function () {
              expectingImport = true;
              removeOnionLayers();
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return originalImportImage.call.apply(originalImportImage, [this].concat(args));
            };

            // recalibrateSize is called when the canvas finishes loading an image.
            // all paths of importImage will result in a call to this method.
            // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L310-L327
            // We use this to know when to add layers.
            var originalRecalibrateSize = PaperCanvas.prototype.recalibrateSize;
            PaperCanvas.prototype.recalibrateSize = function (callback) {
              return originalRecalibrateSize.call(this, function () {
                if (callback) callback();
                if (expectingImport) {
                  expectingImport = false;
                  if (settings.enabled) {
                    updateOnionLayers();
                  }
                }
              });
            };

            // Prototype overrides will work for all future instances, but Scratch manually binds some methods to `this`
            // so we have to manually copy them for the current instance (but not future instances)
            paperCanvas.recalibrateSize = PaperCanvas.prototype.recalibrateSize.bind(paperCanvas);
            paperCanvas.importImage = PaperCanvas.prototype.importImage.bind(paperCanvas);
          };
          createOnionLayer = function createOnionLayer() {
            var layer = new paper.Layer();
            layer.locked = true;
            layer.guide = true;
            layer.data.sa_isOnionLayer = true;
            return layer;
          }; // Each onion layer update is given an ID
          // Because updating layers is async, we need this to cancel all but the most recent update
          globalUpdateId = 0;
          cancelOngoingUpdatesAndGetNewId = function cancelOngoingUpdatesAndGetNewId() {
            return ++globalUpdateId;
          };
          removeOnionLayers = function removeOnionLayers() {
            cancelOngoingUpdatesAndGetNewId();
            var project = paper.project;
            if (!project) {
              return;
            }
            storedOnionLayers.length = 0;
            var layers = project.layers;
            // Iterate downward because we remove items mid-iteration
            for (var i = layers.length - 1; i >= 0; i--) {
              var layer = layers[i];
              if (layer.data.sa_isOnionLayer) {
                layer.remove();
              }
            }
          };
          relayerOnionLayers = function relayerOnionLayers() {
            var project = paper.project;
            if (!project) {
              return;
            }
            var onionLayer = project.layers.find(function (i) {
              return i.data.sa_isOnionLayer;
            });
            if (!onionLayer) {
              return;
            }
            if (settings.layering === "front") {
              project.addLayer(onionLayer);
            } else {
              var rasterLayer = project.layers.find(function (i) {
                return i.data.isRasterLayer;
              });
              if (rasterLayer.index === 0) {
                project.insertLayer(0, onionLayer);
              } else {
                project.insertLayer(1, onionLayer);
              }
            }
          };
          _recursePaperItem = function recursePaperItem(item, callback) {
            if (item.children) {
              var _iterator2 = _createForOfIteratorHelper(item.children),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var child = _step2.value;
                  _recursePaperItem(child, callback);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
            callback(item);
          };
          getTint = function getTint(red, green, blue, isBefore) {
            var referenceColor = isBefore ? settings.beforeTint : settings.afterTint;
            var colorAverage = (red + green + blue) / 3 / 255;
            var WEIGHT = 1.5;
            var weighted = colorAverage / WEIGHT + (1 - 1 / WEIGHT);
            return [referenceColor[0] * weighted, referenceColor[1] * weighted, referenceColor[2] * weighted];
          };
          toHexColor = function toHexColor(_ref3) {
            var _ref4 = _slicedToArray(_ref3, 3),
              red = _ref4[0],
              green = _ref4[1],
              blue = _ref4[2];
            var r = Math.round(red).toString(16).padStart(2, "0");
            var g = Math.round(green).toString(16).padStart(2, "0");
            var b = Math.round(blue).toString(16).padStart(2, "0");
            return "#".concat(r).concat(g).concat(b);
          };
          getPaperColorTint = function getPaperColorTint(color, isBefore) {
            return toHexColor(getTint(color.red * 255, color.green * 255, color.blue * 255, isBefore));
          };
          tintRaster = function tintRaster(raster, isBefore) {
            var _raster$canvas = raster.canvas,
              width = _raster$canvas.width,
              height = _raster$canvas.height;
            var context = raster.context;
            // TODO: check to see if this is a performance issue
            var imageData = context.getImageData(0, 0, width, height);
            var data = imageData.data;
            for (var i = 0; i < data.length; i += 4 /* RGBA */) {
              var red = data[i + 0];
              var green = data[i + 1];
              var blue = data[i + 2];
              var alpha = data[i + 3];
              if (alpha === 0) {
                continue;
              }
              var newTint = getTint(red, green, blue, isBefore);
              data[i + 0] = newTint[0];
              data[i + 1] = newTint[1];
              data[i + 2] = newTint[2];
            }
            context.putImageData(imageData, 0, 0);
          };
          waitForAllRastersToLoad = function waitForAllRastersToLoad(root) {
            var promises = [];
            _recursePaperItem(root, function (item) {
              if (item instanceof paper.Raster) {
                promises.push(new Promise(function (resolve, reject) {
                  item.on("load", function () {
                    return resolve();
                  });
                  item.on("error", function () {
                    return reject(new Error("Raster inside SVG failed to load"));
                  });
                }));
              }
            });
            return Promise.all(promises);
          };
          rasterizeVector = function rasterizeVector(root) {
            var bounds = root.strokeBounds;
            var width = bounds.width,
              height = bounds.height;

            // Some browsers experience extremely poor performance when this value exceeds 3840.
            var MAX_SIZE = 3000;
            var maxScale = Math.min(MAX_SIZE / width, MAX_SIZE / height);
            var raster = new paper.Raster(new paper.Size(width, height));
            raster.remove();
            raster.smoothing = true;
            raster.guide = true;
            raster.locked = true;
            var renderedAtScale = 0;
            var originalDraw = raster.draw;
            raster.draw = function () {
              var displayedSize = this.getView().getZoom() * window.devicePixelRatio;
              var newScale = Math.max(1, Math.min(maxScale, Math.pow(2, Math.ceil(Math.log2(displayedSize)))));
              if (newScale > renderedAtScale) {
                renderedAtScale = newScale;
                var canvas = this.canvas;
                var ctx = this.context;

                // Based on https://github.com/scratchfoundation/paper.js/blob/16d5ff0267e3a0ef647c25e58182a27300afad20/src/item/Item.js#L1761
                var scaledWidth = width * newScale;
                var scaledHeight = height * newScale;
                canvas.width = scaledWidth;
                canvas.height = scaledHeight;
                this._size = new paper.Size(scaledWidth, scaledHeight);
                var topLeft = bounds.getTopLeft();
                var bottomRight = bounds.getBottomRight();
                var size = new paper.Size(bottomRight.subtract(topLeft));
                var matrix = new paper.Matrix().scale(newScale).translate(topLeft.negate());
                ctx.save();
                matrix.applyToContext(ctx);
                root.draw(ctx, new paper.Base({
                  matrices: [matrix]
                }));
                ctx.restore();
                this.matrix.reset();
                this.transform(new paper.Matrix().translate(topLeft.add(size.divide(2))).scale(1 / newScale));
              }
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return originalDraw.call.apply(originalDraw, [this].concat(args));
            };
            return raster;
          };
          makeVectorOnion = function makeVectorOnion(opacity, costume, asset, isBefore) {
            return new Promise(function (resolve, reject) {
              asset = _turbowarp_scratch_svg_renderer__WEBPACK_IMPORTED_MODULE_0__["sanitizeSvg"].sanitizeSvgText(asset);
              var rotationCenterX = costume.rotationCenterX,
                rotationCenterY = costume.rotationCenterY;
              // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L196-L218
              asset = asset.split(/<\s*svg:/).join("<");
              asset = asset.split(/<\/\s*svg:/).join("</");
              var svgAttrs = asset.match(/<svg [^>]*>/);
              if (svgAttrs && svgAttrs[0].indexOf("xmlns=") === -1) {
                asset = asset.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
              }
              var parser = new DOMParser();
              var svgDom = parser.parseFromString(asset, "text/xml");
              var viewBox = svgDom.documentElement.attributes.viewBox ? svgDom.documentElement.attributes.viewBox.value.match(/\S+/g) : null;
              if (viewBox) {
                for (var i = 0; i < viewBox.length; i++) {
                  viewBox[i] = parseFloat(viewBox[i]);
                }
              }
              var handleLoad = function handleLoad(root) {
                root.opacity = opacity;

                // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L274-L275
                _recursePaperItem(root, function (i) {
                  if (i.className === "PathItem") {
                    i.clockwise = true;
                  }
                  if (i.className !== "PointText" && !i.children) {
                    if (i.strokeWidth) {
                      i.strokeWidth = i.strokeWidth * 2;
                    }
                  }
                  i.locked = true;
                  i.guide = true;
                });
                root.scale(2, new paper.Point(0, 0));
                if (settings.mode === "tint") {
                  var gradients = new Set();
                  _recursePaperItem(root, function (i) {
                    if (i.strokeColor) {
                      i.strokeColor = getPaperColorTint(i.strokeColor, isBefore);
                    }
                    if (i.fillColor) {
                      var gradient = i.fillColor.gradient;
                      if (gradient) {
                        if (gradients.has(gradient)) return;
                        gradients.add(gradient);
                        var _iterator3 = _createForOfIteratorHelper(gradient.stops),
                          _step3;
                        try {
                          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                            var stop = _step3.value;
                            stop.color = getPaperColorTint(stop.color, isBefore);
                          }
                        } catch (err) {
                          _iterator3.e(err);
                        } finally {
                          _iterator3.f();
                        }
                      } else {
                        i.fillColor = getPaperColorTint(i.fillColor, isBefore);
                      }
                    }
                    if (i.canvas) {
                      tintRaster(i, isBefore);
                    }
                  });
                }
                var paperCenter = getPaperCenter();
                // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L277-L287
                if (typeof rotationCenterX !== "undefined" && typeof rotationCenterY !== "undefined") {
                  var rotationPoint = new paper.Point(rotationCenterX, rotationCenterY);
                  if (viewBox && viewBox.length >= 2 && !isNaN(viewBox[0]) && !isNaN(viewBox[1])) {
                    rotationPoint = rotationPoint.subtract(viewBox[0], viewBox[1]);
                  }
                  root.translate(paperCenter.subtract(rotationPoint.multiply(2)));
                } else {
                  root.translate(paperCenter.subtract(root.bounds.width, root.bounds.height));
                }
                return rasterizeVector(root);
              };
              paper.project.importSVG(asset, {
                expandShapes: true,
                insert: false,
                onLoad: function onLoad(root) {
                  if (!root) {
                    reject(new Error("could not load onion skin"));
                    return;
                  }
                  resolve(waitForAllRastersToLoad(root).then(function () {
                    return handleLoad(root);
                  }));
                }
              });
            });
          };
          makeRasterOnion = function makeRasterOnion(opacity, costume, asset, isBefore) {
            return new Promise(function (resolve, reject) {
              var rotationCenterX = costume.rotationCenterX,
                rotationCenterY = costume.rotationCenterY;
              var image = new Image();
              image.onload = function () {
                var paperCenter = getPaperCenter();
                var width = Math.min(paperCenter.x * 2, image.width);
                var height = Math.min(paperCenter.y * 2, image.height);

                // https://github.com/scratchfoundation/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L151-L156
                if (typeof rotationCenterX === "undefined") {
                  rotationCenterX = width / 2;
                }
                if (typeof rotationCenterY === "undefined") {
                  rotationCenterY = height / 2;
                }
                var raster = new paper.Raster(image);
                raster.opacity = opacity;
                raster.guide = true;
                raster.locked = true;
                var x = width / 2 + (paperCenter.x - rotationCenterX);
                var y = height / 2 + (paperCenter.y - rotationCenterY);
                raster.position = new paper.Point(x, y);
                raster.remove();
                if (settings.mode === "tint") {
                  tintRaster(raster, isBefore);
                }
                resolve(raster);
              };
              image.onerror = function () {
                reject(new Error("could not load image"));
              };
              image.src = asset;
            });
          };
          getSelectedCostumeIndex = function getSelectedCostumeIndex() {
            var item = document.querySelector("[class*='selector_list-item'][class*='sprite-selector-item_is-selected']");
            if (!item) return -1;
            var numberEl = item.querySelector("[class*='sprite-selector-item_number']");
            if (!numberEl) return -1;
            return +numberEl.textContent - 1;
          };
          updateOnionLayers = /*#__PURE__*/function () {
            var _ref5 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
              var project, selectedCostumeIndex, localUpdateId, vm, originalActiveLayer, costumes, startIndex, endIndex, layersToCreate, i, isBefore, distance, opacity, onions, layer, _iterator4, _step4, item, _t;
              return _regenerator().w(function (_context) {
                while (1) switch (_context.n) {
                  case 0:
                    project = paper.project;
                    if (project) {
                      _context.n = 1;
                      break;
                    }
                    return _context.a(2);
                  case 1:
                    selectedCostumeIndex = getSelectedCostumeIndex();
                    if (!(selectedCostumeIndex === -1)) {
                      _context.n = 2;
                      break;
                    }
                    return _context.a(2);
                  case 2:
                    removeOnionLayers();
                    localUpdateId = cancelOngoingUpdatesAndGetNewId();
                    vm = addon.tab.traps.vm;
                    if (vm) {
                      _context.n = 3;
                      break;
                    }
                    return _context.a(2);
                  case 3:
                    originalActiveLayer = project.activeLayer;
                    costumes = vm.editingTarget.sprite.costumes;
                    startIndex = Math.max(0, selectedCostumeIndex - settings.previous);
                    endIndex = Math.min(costumes.length - 1, selectedCostumeIndex + settings.next);
                    _context.p = 4;
                    layersToCreate = [];
                    i = startIndex;
                  case 5:
                    if (!(i <= endIndex)) {
                      _context.n = 9;
                      break;
                    }
                    if (!(i === selectedCostumeIndex)) {
                      _context.n = 6;
                      break;
                    }
                    return _context.a(3, 8);
                  case 6:
                    isBefore = i < selectedCostumeIndex;
                    distance = Math.abs(i - selectedCostumeIndex) - 1;
                    opacity = (settings.opacity - settings.opacityStep * distance) / 100;
                    if (!(opacity <= 0)) {
                      _context.n = 7;
                      break;
                    }
                    return _context.a(3, 8);
                  case 7:
                    layersToCreate.push({
                      index: i,
                      isBefore: isBefore,
                      opacity: opacity
                    });
                  case 8:
                    i++;
                    _context.n = 5;
                    break;
                  case 9:
                    _context.n = 10;
                    return Promise.all(layersToCreate.map(function (_ref6) {
                      var index = _ref6.index,
                        isBefore = _ref6.isBefore,
                        opacity = _ref6.opacity;
                      var onionCostume = costumes[index];
                      var onionAsset = vm.getCostume(index);
                      if (onionCostume.dataFormat === "svg") {
                        return makeVectorOnion(opacity, onionCostume, onionAsset, isBefore);
                      } else if (onionCostume.dataFormat === "png" || onionCostume.dataFormat === "jpg") {
                        return makeRasterOnion(opacity, onionCostume, onionAsset, isBefore);
                      } else {
                        throw new Error("Unknown data format: ".concat(onionCostume.dataFormat));
                      }
                    }));
                  case 10:
                    onions = _context.v;
                    // Make sure we haven't been cancelled
                    if (globalUpdateId === localUpdateId) {
                      layer = createOnionLayer();
                      _iterator4 = _createForOfIteratorHelper(onions);
                      try {
                        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                          item = _step4.value;
                          layer.addChild(item);
                        }
                      } catch (err) {
                        _iterator4.e(err);
                      } finally {
                        _iterator4.f();
                      }
                      relayerOnionLayers();
                    }
                    _context.n = 12;
                    break;
                  case 11:
                    _context.p = 11;
                    _t = _context.v;
                    console.error(_t);
                  case 12:
                    // We must make sure to always reset the active layer to avoid corruption.
                    originalActiveLayer.activate();
                  case 13:
                    return _context.a(2);
                }
              }, _callee, null, [[4, 11]]);
            }));
            return function updateOnionLayers() {
              return _ref5.apply(this, arguments);
            };
          }();
          setEnabled = function setEnabled(_enabled) {
            if (settings.enabled === _enabled) {
              return;
            }
            settings.enabled = _enabled;
            if (settings.enabled) {
              if (settings.next === 0 && settings.previous === 0) {
                settings.previous = 1;
                layerInputs.previous.value = settings.previous;
              }
              if (settings.opacity === 0) {
                settings.opacity = 25;
                layerInputs.opacity.value = settings.opacity;
              }
              updateOnionLayers();
            } else {
              removeOnionLayers();
            }
            toggleButton.dataset.enabled = settings.enabled;
          }; //
          // Controls below editor
          //
          settingsChanged = function settingsChanged(onlyRelayerNeeded) {
            if (settings.previous === 0 && settings.next === 0 || settings.opacity === 0) {
              setEnabled(false);
              return;
            }
            if (settings.enabled) {
              if (onlyRelayerNeeded) {
                relayerOnionLayers();
              } else {
                updateOnionLayers();
              }
            } else if (settings.previous > 0 || settings.next > 0) {
              setEnabled(true);
            }
          };
          createGroup = function createGroup() {
            var el = document.createElement("div");
            el.className = "sa-onion-group";
            return el;
          };
          createButton = function createButton() {
            var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              useButtonTag = _ref7.useButtonTag;
            var el = document.createElement(useButtonTag ? "button" : "span");
            el.className = "sa-onion-button";
            el.setAttribute("role", "button");
            return el;
          };
          createButtonImage = function createButtonImage(name) {
            var el = document.createElement("img");
            el.className = "sa-onion-image";
            el.draggable = false;
            el.dataset.image = name;
            el.loading = "lazy";
            el.src = addon.self.getResource("/" + name + ".svg") /* rewritten by pull.js */;
            return el;
          };
          toggleControlsGroup = createGroup();
          addon.tab.displayNoneWhileDisabled(toggleControlsGroup, {
            display: "flex"
          });
          toggleButton = createButton();
          toggleButton.dataset.enabled = settings.enabled;
          toggleButton.addEventListener("click", function () {
            return setEnabled(!settings.enabled);
          });
          toggleButton.title = msg("toggle");
          toggleButton.appendChild(createButtonImage("toggle"));
          settingButton = createButton();
          settingButton.addEventListener("click", function () {
            return setSettingsOpen(!areSettingsOpen());
          });
          settingButton.title = msg("settings");
          settingButton.appendChild(createButtonImage("settings"));
          document.body.addEventListener("click", function (e) {
            if (areSettingsOpen() && !e.target.matches(".sa-onion-group *")) setSettingsOpen(false);
          });

          //
          // Settings page
          //
          settingPageWrapper = document.createElement("div");
          settingPageWrapper.className = "sa-onion-settings-wrapper";
          toggleControlsGroup.append(settingPageWrapper, toggleButton, settingButton);
          settingsPage = document.createElement("div");
          settingsPage.className = "sa-onion-settings";
          setSettingsOpen = function setSettingsOpen(open) {
            settingButton.dataset.enabled = open;
            settingsPage.dataset.visible = open;
          };
          areSettingsOpen = function areSettingsOpen() {
            return settingsPage.dataset.visible === "true";
          };
          layerInputs = {};
          _loop = /*#__PURE__*/_regenerator().m(function _loop() {
            var type, container, label, group, currentButton, filler, currentInput, decrementButton, incrementButton;
            return _regenerator().w(function (_context2) {
              while (1) switch (_context2.n) {
                case 0:
                  type = _arr[_i2];
                  container = document.createElement("label");
                  container.className = "sa-onion-settings-line";
                  label = document.createElement("div");
                  label.className = "sa-onion-settings-label";
                  label.textContent = msg(type);
                  container.appendChild(label);
                  group = createGroup();
                  currentButton = createButton();
                  filler = document.createElement("div");
                  filler.style.width = "20px";
                  currentButton.appendChild(filler);
                  currentInput = document.createElement("input");
                  layerInputs[type] = currentInput;
                  currentInput.className = "sa-onion-settings-input";
                  currentInput.type = "number";
                  currentInput.step = "1";
                  currentInput.min = "0";
                  currentInput.max = "100";
                  currentInput.value = settings[type];
                  currentInput.addEventListener("input", function (e) {
                    if (currentInput.value.length === 0) {
                      settings[type] = 0;
                      settingsChanged();
                      return;
                    }
                    var value = +currentInput.value;
                    if (value > +currentInput.max) {
                      value = +currentInput.max;
                    } else if (value < 0) {
                      value = 0;
                    }
                    currentInput.value = value;
                    settings[type] = value;
                    settingsChanged();
                  });
                  currentInput.addEventListener("blur", function () {
                    if (!currentInput.value) {
                      currentInput.value = "0";
                    }
                  });
                  currentButton.appendChild(currentInput);
                  decrementButton = createButton();
                  decrementButton.appendChild(createButtonImage("decrement"));
                  decrementButton.addEventListener("click", function () {
                    if (settings[type] > 0) {
                      settings[type]--;
                      currentInput.value = settings[type];
                      settingsChanged();
                    }
                  });
                  incrementButton = createButton();
                  incrementButton.appendChild(createButtonImage("increment"));
                  incrementButton.addEventListener("click", function () {
                    if (settings[type] < +currentInput.max) {
                      settings[type]++;
                      currentInput.value = settings[type];
                      settingsChanged();
                    }
                  });
                  group.appendChild(decrementButton);
                  group.appendChild(currentButton);
                  group.appendChild(incrementButton);
                  container.appendChild(group);
                  settingsPage.appendChild(container);
                case 1:
                  return _context2.a(2);
              }
            }, _loop);
          });
          _i2 = 0, _arr = ["previous", "next", "opacity", "opacityStep"];
        case 7:
          if (!(_i2 < _arr.length)) {
            _context4.n = 9;
            break;
          }
          return _context4.d(_regeneratorValues(_loop()), 8);
        case 8:
          _i2++;
          _context4.n = 7;
          break;
        case 9:
          modeContainer = document.createElement("div");
          modeContainer.className = "sa-onion-settings-line";
          modeLabel = document.createElement("div");
          modeLabel.className = "sa-onion-settings-label";
          modeLabel.textContent = msg("mode");
          modeGroup = createGroup();
          modeContainer.appendChild(modeLabel);
          modeMergeButton = createButton({
            useButtonTag: true
          });
          modeMergeButton.appendChild(document.createTextNode(msg("merge")));
          modeGroup.appendChild(modeMergeButton);
          modeMergeButton.addEventListener("click", function (e) {
            settings.mode = "merge";
            modeTintButton.dataset.enabled = false;
            modeMergeButton.dataset.enabled = true;
            settingsChanged();
          });
          modeMergeButton.dataset.enabled = settings.mode === "merge";
          modeTintButton = createButton({
            useButtonTag: true
          });
          modeTintButton.appendChild(document.createTextNode(msg("tint")));
          modeGroup.appendChild(modeTintButton);
          modeTintButton.addEventListener("click", function (e) {
            settings.mode = "tint";
            modeTintButton.dataset.enabled = true;
            modeMergeButton.dataset.enabled = false;
            settingsChanged();
          });
          modeTintButton.dataset.enabled = settings.mode === "tint";
          modeContainer.appendChild(modeGroup);
          settingsPage.appendChild(modeContainer);
          layeringContainer = document.createElement("div");
          layeringContainer.className = "sa-onion-settings-line";
          layeringLabel = document.createElement("div");
          layeringLabel.className = "sa-onion-settings-label";
          layeringLabel.textContent = msg("layering");
          layeringGroup = createGroup();
          layeringContainer.appendChild(layeringLabel);
          layeringFrontButton = createButton({
            useButtonTag: true
          });
          layeringFrontButton.appendChild(document.createTextNode(msg("front")));
          layeringGroup.appendChild(layeringFrontButton);
          layeringFrontButton.addEventListener("click", function (e) {
            settings.layering = "front";
            layeringBehindButton.dataset.enabled = false;
            layeringFrontButton.dataset.enabled = true;
            settingsChanged(true);
          });
          layeringFrontButton.dataset.enabled = settings.layering === "front";
          layeringBehindButton = createButton({
            useButtonTag: true
          });
          layeringBehindButton.appendChild(document.createTextNode(msg("behind")));
          layeringGroup.appendChild(layeringBehindButton);
          layeringBehindButton.addEventListener("click", function (e) {
            settings.layering = "behind";
            layeringBehindButton.dataset.enabled = true;
            layeringFrontButton.dataset.enabled = false;
            settingsChanged(true);
          });
          layeringBehindButton.dataset.enabled = settings.layering === "behind";
          layeringContainer.appendChild(layeringGroup);
          settingsPage.appendChild(layeringContainer);
          SVG_NS = "http://www.w3.org/2000/svg";
          settingsTip = document.createElementNS(SVG_NS, "svg");
          settingsTip.setAttribute("class", "sa-onion-settings-tip");
          settingsTip.setAttribute("width", "14");
          settingsTip.setAttribute("height", "7");
          settingsTipShape = document.createElementNS(SVG_NS, "polygon");
          settingsTipShape.setAttribute("class", "sa-onion-settings-polygon");
          settingsTipShape.setAttribute("points", "0,0 7,7, 14,0");
          settingsTip.appendChild(settingsTipShape);
          settingsPage.appendChild(settingsTip);
          oldEnabled = null;
          addon.self.addEventListener("disabled", function () {
            setSettingsOpen(false);
            oldEnabled = settings.enabled;
            setEnabled(false);
          });
          addon.self.addEventListener("reenabled", function () {
            setEnabled(oldEnabled);
          });
          controlsLoop = /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
              var hasRunOnce, canvasControls, zoomControlsContainer, groupClass, buttonClass, imageClass, _iterator5, _step5, el, _iterator6, _step6, _el, _iterator7, _step7, _el2;
              return _regenerator().w(function (_context3) {
                while (1) switch (_context3.n) {
                  case 0:
                    hasRunOnce = false;
                  case 1:
                    if (false) {}
                    _context3.n = 2;
                    return addon.tab.waitForElement("[class^='paint-editor_canvas-controls']", {
                      markAsSeen: true,
                      reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
                      reduxCondition: function reduxCondition(state) {
                        return state.scratchGui.editorTab.activeTabIndex === 1 && !state.scratchGui.mode.isPlayerOnly;
                      }
                    });
                  case 2:
                    canvasControls = _context3.v;
                    zoomControlsContainer = canvasControls.querySelector("[class^='paint-editor_zoom-controls']");
                    addon.tab.appendToSharedSpace({
                      space: "paintEditorZoomControls",
                      element: toggleControlsGroup,
                      order: 1
                    });
                    settingPageWrapper.appendChild(settingsPage);
                    if (!hasRunOnce) {
                      hasRunOnce = true;
                      groupClass = zoomControlsContainer.firstChild.className;
                      buttonClass = zoomControlsContainer.firstChild.firstChild.className;
                      imageClass = zoomControlsContainer.firstChild.firstChild.firstChild.className;
                      _iterator5 = _createForOfIteratorHelper(document.querySelectorAll(".sa-onion-group"));
                      try {
                        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                          el = _step5.value;
                          el.className += " " + groupClass;
                        }
                      } catch (err) {
                        _iterator5.e(err);
                      } finally {
                        _iterator5.f();
                      }
                      _iterator6 = _createForOfIteratorHelper(document.querySelectorAll(".sa-onion-button"));
                      try {
                        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                          _el = _step6.value;
                          _el.className += " " + buttonClass;
                        }
                      } catch (err) {
                        _iterator6.e(err);
                      } finally {
                        _iterator6.f();
                      }
                      _iterator7 = _createForOfIteratorHelper(document.querySelectorAll(".sa-onion-image"));
                      try {
                        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                          _el2 = _step7.value;
                          _el2.className += " " + imageClass;
                        }
                      } catch (err) {
                        _iterator7.e(err);
                      } finally {
                        _iterator7.f();
                      }
                    }
                    if (settings.enabled) {
                      updateOnionLayers();
                    }
                    _context3.n = 1;
                    break;
                  case 3:
                    return _context3.a(2);
                }
              }, _callee2);
            }));
            return function controlsLoop() {
              return _ref8.apply(this, arguments);
            };
          }();
          injectPaper();
          injectPaperCanvas();
          controlsLoop();
        case 10:
          return _context4.a(2);
      }
    }, _callee3, null, [[3, 5]]);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/paint-skew/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/paint-skew/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-skew/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-skew/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/paint-skew/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../paint-snap/compatibility.js */ "./src/addons/addons/paint-snap/compatibility.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, paper, addSkew;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon;
          _context.n = 1;
          return addon.tab.traps.getPaper();
        case 1:
          paper = _context.v;
          addSkew = function addSkew() {
            var _paper$tool$boundingB, _paper$tool$boundingB2;
            if (!paper.tool || !paper.tool.boundingBoxTool) return;
            // ScaleTool
            var ST = (_paper$tool$boundingB = paper.tool.boundingBoxTool._modeMap) === null || _paper$tool$boundingB === void 0 ? void 0 : (_paper$tool$boundingB2 = _paper$tool$boundingB.SCALE) === null || _paper$tool$boundingB2 === void 0 ? void 0 : _paper$tool$boundingB2.constructor;
            if (!ST || ST.hasSkew) {
              return;
            }
            ST.hasSkew = true;
            var ogMouseDown = ST.prototype.onMouseDown;
            ST.prototype.onMouseDown = function (hitResult, boundsPath, selectedItems) {
              if (this.active) return;
              this.index = hitResult.item.data.index;
              ogMouseDown.call(this, hitResult, boundsPath, selectedItems);
              this.skewCenter = false;
              this.lastSkx = 0;
              this.lastSky = 0;
              this.skewBounds = this.itemGroup.bounds.clone();
            };
            _paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__["addons"].paintSkew = function (event, original) {
              var _this = this;
              if (!this.active) return;
              if (addon.self.disabled) return original();
              var bounds = this.skewBounds;
              var doShear = function doShear(skx, sky) {
                if (skx === 0 && sky === 0) return;
                var offcenterPosition;
                if (!_this.skewCenter) {
                  switch (_this._getRectCornerNameByIndex(_this.index)) {
                    case "topCenter":
                    case "leftCenter":
                      offcenterPosition = _this.itemGroup.position.add(new paper.Point(bounds.width / 2, bounds.height / 2));
                      break;
                    case "bottomCenter":
                    case "rightCenter":
                      offcenterPosition = _this.itemGroup.position.subtract(new paper.Point(bounds.width / 2, bounds.height / 2));
                      break;
                  }
                }
                var position = _this.skewCenter ? _this.itemGroup.position : offcenterPosition;
                var shearMult = _this.skewCenter ? 2 : 1;
                // swap width and height because apparently
                // shearing is based on the dimension perpendicular
                // to the one that is being skewed
                var shearX = skx / bounds.height * shearMult;
                var shearY = sky / bounds.width * shearMult;
                _this.itemGroup.shear(shearX, shearY, position);
                if (_this.selectionAnchor) {
                  _this.selectionAnchor.shear(-shearX, -shearY);
                }
              };

              // Revert skew
              doShear(-this.lastSkx, -this.lastSky);
              this.skewCenter = event.modifiers.alt;
              var skx = 0;
              var sky = 0;
              this.lastSkx = 0;
              this.lastSky = 0;
              if ((event.modifiers.control || event.modifiers.command) && !this.isCorner) {
                // Skew
                // Reset position
                this.centered = false;
                this.itemGroup.scale(1 / this.lastSx, 1 / this.lastSy, this.pivot);
                if (this.selectionAnchor) {
                  this.selectionAnchor.scale(this.lastSx, this.lastSy);
                }
                this.lastSx = 1;
                this.lastSy = 1;
                var delta = event.point.subtract(this.pivot);
                switch (this._getRectCornerNameByIndex(this.index)) {
                  case "topCenter":
                    delta.x *= -1;
                    delta.y = 0;
                    break;
                  case "bottomCenter":
                    delta.y = 0;
                    break;
                  case "leftCenter":
                    delta.y *= -1;
                    delta.x = 0;
                    break;
                  case "rightCenter":
                    delta.x = 0;
                    break;
                  default:
                    delta.x = 0;
                    delta.y = 0;
                }
                skx = delta.x;
                sky = delta.y;
                doShear(skx, sky);
              } else {
                // Scale
                original();
              }
              this.lastSkx = skx;
              this.lastSky = sky;
            };
            Object(_paint_snap_compatibility_js__WEBPACK_IMPORTED_MODULE_0__["initialize"])(paper, ST);
          };
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (e) {
            var action = e.detail.action;
            if (action.type === "scratch-paint/modes/CHANGE_MODE" && (action.mode === "BIT_SELECT" || action.mode === "SELECT")) {
              addSkew();
            }
          });
          addSkew();
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

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

/***/ "./src/addons/addons/pick-colors-from-stage/_runtime_entry.js":
/*!********************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/_runtime_entry.js ***!
  \********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/pick-colors-from-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/userscript.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/userscript.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});
function _ref2() {
  _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_ref) {
    var addon, msg, console, brand, setIsPicking, isMostRecentClickUserInitiated;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, msg = _ref.msg, console = _ref.console;
          brand = Symbol();
          setIsPicking = function setIsPicking(picking) {
            return document.body.classList.toggle("sa-stage-color-picker-picking", picking);
          }; // We only want to handle color picker events from the user clicking on the button, not from
          // addons or other scripts pressing it with click().
          isMostRecentClickUserInitiated = false;
          document.addEventListener("click", function (e) {
            isMostRecentClickUserInitiated = e.isTrusted;
          }, {
            capture: true
          });
          addon.tab.redux.initialize();
          addon.tab.redux.addEventListener("statechanged", function (e) {
            var action = e.detail.action;

            // Do not process events emitted by ourselves.
            if (action[brand]) {
              return;
            }
            if (!addon.self.disabled && isMostRecentClickUserInitiated && action.type === "scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER") {
              setIsPicking(true);

              // When scratch-paint's color picker is activated, also activate scratch-gui's color picker.
              addon.tab.redux.dispatch({
                type: "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER",
                callback: function callback(color) {
                  // callback is called from reducer; do not dispatch events in reducer
                  queueMicrotask(function () {
                    // By the time we get here, scratch-paint will have already deactivated its eye dropper.
                    // If we were to just call the callback, the color would indeed update, but the sliders
                    // in the color selector would not update.
                    // https://github.com/scratchfoundation/scratch-paint/blob/970b72c3e75d0ad44ab54e403a44786ca5f45512/src/containers/color-picker.jsx#L64
                    // To work around this, we will re-enable the color picker before running the callback.
                    addon.tab.redux.dispatch(_objectSpread(_objectSpread({}, action), {}, _defineProperty({}, brand, true)));
                    action.callback(color);
                    if (action.previousMode) {
                      action.previousMode.activate();
                    }
                    addon.tab.redux.dispatch(_defineProperty({
                      type: "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER"
                    }, brand, true));
                    setIsPicking(false);
                  });
                }
              });
            }

            // Don't check for addon being disabled here in case we were dynamically disabled while color
            // picking. This code won't do anything anyways when the previous code doesn't run.
            if (action.type === "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER") {
              setIsPicking(false);

              // When someone selects a color in the scratch-paint picker, cancel the scratch-gui picker
              if (addon.tab.redux.state.scratchGui.colorPicker.active) {
                addon.tab.redux.dispatch(_defineProperty({
                  type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER"
                }, brand, true));
              }
            }
          });
        case 1:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/rename-broadcasts/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/rename-broadcasts/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/rename-broadcasts/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
    var addon, msg, console, vm, Blockly, RENAME_BROADCAST_MESSAGE_ID, BROADCAST_MESSAGE_TYPE, _dropdownCreate, _onItemSelected, resetVMCaches, addUndoRedoHook, renameBroadcastInVM, renameBroadcast, mergeBroadcast, promptRenameBroadcast, updateExistingMenuGenerators;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          addon = _ref.addon, msg = _ref.msg, console = _ref.console;
          vm = addon.tab.traps.vm;
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          Blockly = _context.v;
          // editor-searchable-dropdowns relies on this value
          RENAME_BROADCAST_MESSAGE_ID = "RENAME_BROADCAST_MESSAGE_ID";
          BROADCAST_MESSAGE_TYPE = Blockly.BROADCAST_MESSAGE_VARIABLE_TYPE;
          _dropdownCreate = Blockly.FieldVariable.dropdownCreate;
          Blockly.FieldVariable.dropdownCreate = function () {
            var options = _dropdownCreate.call(this);
            if (!addon.self.disabled && this.defaultType_ === BROADCAST_MESSAGE_TYPE &&
            // Disable when workspace has no actual broadcast to rename
            this.sourceBlock_.workspace.getVariableTypes().includes("broadcast_msg")) {
              options.push([msg("RENAME_BROADCAST"), RENAME_BROADCAST_MESSAGE_ID]);
            }
            return options;
          };
          _onItemSelected = Blockly.FieldVariable.prototype.onItemSelected;
          Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
            var workspace = this.sourceBlock_.workspace;
            if (this.sourceBlock_ && workspace) {
              if (menuItem.getValue() === RENAME_BROADCAST_MESSAGE_ID) {
                promptRenameBroadcast(workspace, this.variable_);
                return;
              }
            }
            return _onItemSelected.call(this, menu, menuItem);
          };
          resetVMCaches = function resetVMCaches() {
            var blockContainers = new Set(vm.runtime.targets.map(function (i) {
              return i.blocks;
            }));
            var _iterator = _createForOfIteratorHelper(blockContainers),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var blocks = _step.value;
                blocks.resetCache();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          };
          addUndoRedoHook = function addUndoRedoHook(callback) {
            var eventQueue = Blockly.Events.FIRE_QUEUE_;
            // After a rename is emitted, some unrelated garbage events also get emitted
            // So we should trap the first event
            var undoItem = eventQueue[0];
            var originalRun = undoItem.run;
            undoItem.run = function (isRedo) {
              originalRun.call(this, isRedo);
              callback(isRedo);
            };
          };
          renameBroadcastInVM = function renameBroadcastInVM(id, newName) {
            // Editor's rename won't completely rename the variable.
            var vmVariable = vm.runtime.getTargetForStage().variables[id];
            vmVariable.name = newName;
            vmVariable.value = newName;

            // Update all references to the broadcast. Broadcasts won't work if these
            // don't match.
            var blockContainers = new Set(vm.runtime.targets.map(function (i) {
              return i.blocks;
            }));
            var _iterator2 = _createForOfIteratorHelper(blockContainers),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var blockContainer = _step2.value;
                for (var _i = 0, _Object$values = Object.values(blockContainer._blocks); _i < _Object$values.length; _i++) {
                  var block = _Object$values[_i];
                  var broadcastOption = block.fields && block.fields.BROADCAST_OPTION;
                  if (broadcastOption && broadcastOption.id === id) {
                    broadcastOption.value = newName;
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            resetVMCaches();
          };
          renameBroadcast = function renameBroadcast(workspace, id, oldName, newName) {
            // Rename in editor. Undo/redo will work automatically.
            workspace.renameVariableById(id, newName);

            // Rename in VM. Need to manually implement undo/redo.
            renameBroadcastInVM(id, newName);
            addUndoRedoHook(function (isRedo) {
              if (isRedo) {
                renameBroadcastInVM(id, newName);
              } else {
                renameBroadcastInVM(id, oldName);
              }
            });
          };
          mergeBroadcast = function mergeBroadcast(workspace, oldId, oldName, newName) {
            var newVmVariable = vm.runtime.getTargetForStage().lookupBroadcastByInputValue(newName);
            var newId = newVmVariable.id;

            // Merge in editor. Undo/redo will work automatically for this.
            // Use group so that everything here is undone/redone at the same time.
            Blockly.Events.setGroup(true);
            var _iterator3 = _createForOfIteratorHelper(workspace.getAllBlocks()),
              _step3;
            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var block = _step3.value;
                var _iterator5 = _createForOfIteratorHelper(block.inputList),
                  _step5;
                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var input = _step5.value;
                    var _iterator6 = _createForOfIteratorHelper(input.fieldRow),
                      _step6;
                    try {
                      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                        var field = _step6.value;
                        if (field.name === "BROADCAST_OPTION" && field.getValue() === oldId) {
                          field.setValue(newId);
                        }
                      }
                    } catch (err) {
                      _iterator6.e(err);
                    } finally {
                      _iterator6.f();
                    }
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              }
              // Remove the broadcast from the editor so it doesn't appear in dropdowns.
              // Undo/redo will work automatically for this.
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
            workspace.deleteVariableById(oldId);
            Blockly.Events.setGroup(false);

            // Merge in VM to update sprites that aren't open. Need to manually implement undo/redo.
            // To figure out how to undo this operation, we first figure out which blocks we're
            // going to touch and keep hold of that list.
            var vmBlocksToUpdate = [];
            var blockContainers = new Set(vm.runtime.targets.map(function (i) {
              return i.blocks;
            }));
            var _iterator4 = _createForOfIteratorHelper(blockContainers),
              _step4;
            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var blockContainer = _step4.value;
                for (var _i3 = 0, _Object$values2 = Object.values(blockContainer._blocks); _i3 < _Object$values2.length; _i3++) {
                  var _block = _Object$values2[_i3];
                  var broadcastOption = _block.fields && _block.fields.BROADCAST_OPTION;
                  if (broadcastOption && broadcastOption.id === oldId) {
                    vmBlocksToUpdate.push(_block);
                  }
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
            var applyVmEdits = function applyVmEdits(isRedo) {
              var idToReplaceWith = isRedo ? newId : oldId;
              var nameToReplaceWith = isRedo ? newName : oldName;
              for (var _i2 = 0, _vmBlocksToUpdate = vmBlocksToUpdate; _i2 < _vmBlocksToUpdate.length; _i2++) {
                var block = _vmBlocksToUpdate[_i2];
                var broadcastOption = block.fields.BROADCAST_OPTION;
                broadcastOption.id = idToReplaceWith;
                broadcastOption.value = nameToReplaceWith;
              }
              resetVMCaches();
            };
            applyVmEdits(true);

            // Earlier editor updates are guaranteed to generate at least 1 event that we can hook as the
            // broadcast block must exist in the editor for the user to rename it.
            addUndoRedoHook(function (isRedo) {
              applyVmEdits(isRedo);
            });
          };
          promptRenameBroadcast = function promptRenameBroadcast(workspace, variable) {
            var modalTitle = msg("RENAME_BROADCAST_MODAL_TITLE");
            var oldName = variable.name;
            var id = variable.getId();
            var promptText = msg("RENAME_BROADCAST_TITLE", {
              name: oldName
            });
            var promptDefaultText = oldName;
            Blockly.prompt(promptText, promptDefaultText, function (newName) {
              newName = Blockly.Variables.trimName_(newName);
              var nameIsEmpty = !newName;
              if (nameIsEmpty) {
                return;
              }
              var variableAlreadyExists = !!workspace.getVariable(newName, BROADCAST_MESSAGE_TYPE);
              if (variableAlreadyExists) {
                mergeBroadcast(workspace, id, oldName, newName);
              } else {
                renameBroadcast(workspace, id, oldName, newName);
              }
            }, modalTitle, BROADCAST_MESSAGE_TYPE);
          };
          updateExistingMenuGenerators = function updateExistingMenuGenerators() {
            var workspace = Blockly.getMainWorkspace();
            var flyout = workspace && workspace.getFlyout();
            if (workspace && flyout) {
              var allBlocks = [].concat(_toConsumableArray(workspace.getAllBlocks()), _toConsumableArray(flyout.getWorkspace().getAllBlocks()));
              var _iterator7 = _createForOfIteratorHelper(allBlocks),
                _step7;
              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var block = _step7.value;
                  var _iterator8 = _createForOfIteratorHelper(block.inputList),
                    _step8;
                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var input = _step8.value;
                      var _iterator9 = _createForOfIteratorHelper(input.fieldRow),
                        _step9;
                      try {
                        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                          var field = _step9.value;
                          if (field instanceof Blockly.FieldVariable) {
                            field.menuGenerator_ = Blockly.FieldVariable.dropdownCreate;
                          }
                        }
                      } catch (err) {
                        _iterator9.e(err);
                      } finally {
                        _iterator9.f();
                      }
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          };
          updateExistingMenuGenerators();
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/reorder-custom-inputs/userscript.js");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./arrows.css */ "./node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "arrows.css": _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/modified-funcs.js ***!
  \*******************************************************************/
/*! exports provided: modifiedCreateAllInputs, modifiedUpdateDeclarationProcCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedCreateAllInputs", function() { return modifiedCreateAllInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedUpdateDeclarationProcCode", function() { return modifiedUpdateDeclarationProcCode; });
// https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L205
function modifiedCreateAllInputs(connectionMap) {
  // Split the proc into components, by %n, %b, %s and %l (ignoring escaped).
  var procComponents = this.procCode_.split(/(?=[^\\]%[nbsl])/);
  procComponents = procComponents.map(function (c) {
    return c.trim(); // Strip whitespace.
  });

  // Create arguments and labels as appropriate.
  var argumentCount = 0;
  for (var i = 0, component; component = procComponents[i]; i++) {
    var labelText;
    // Don't treat %l as an argument
    if (component.substring(0, 1) == "%" && component.substring(1, 2) !== "l") {
      var argumentType = component.substring(1, 2);
      if (!(argumentType == "n" || argumentType == "b" || argumentType == "s")) {
        throw new Error("Found an custom procedure with an invalid type: " + argumentType);
      }
      labelText = component.substring(2).trim();
      var id = this.argumentIds_[argumentCount];
      var input = this.appendValueInput(id);
      if (argumentType == "b") {
        input.setCheck("Boolean");
      }
      this.populateArgument_(argumentType, argumentCount, connectionMap, id, input);
      argumentCount++;
    } else {
      labelText = component == "%l" ? " " : component.replace("%l", "").trim();
    }
    this.addProcedureLabel_(labelText.replace(/\\%/, "%"));
  }

  // remove all traces of %l at the earliest possible time
  this.procCode_ = this.procCode_.replace(/%l /g, "");
}

//https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L565
function modifiedUpdateDeclarationProcCode() {
  var prefixLabels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  this.procCode_ = "";
  this.displayNames_ = [];
  this.argumentIds_ = [];
  for (var i = 0; i < this.inputList.length; i++) {
    if (i != 0) {
      this.procCode_ += " ";
    }
    var input = this.inputList[i];
    if (input.type == 5) {
      // replaced Blocky.DUMMY_VALUE with 5
      this.procCode_ += (prefixLabels ? "%l " : "") + input.fieldRow[0].getValue(); // modified to prepend %l delimiter, which prevents label merging
    } else if (input.type == 1) {
      // replaced Blocky.INPUT_VALUE with 1
      // Inspect the argument editor.
      var target = input.connection.targetBlock();
      this.displayNames_.push(target.getFieldValue("TEXT"));
      this.argumentIds_.push(input.name);
      if (target.type == "argument_editor_boolean") {
        this.procCode_ += "%b";
      } else {
        this.procCode_ += "%s";
      }
    } else {
      throw new Error("Unexpected input type on a procedure mutator root: " + input.type);
    }
  }
}

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modified-funcs.js */ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { if (r) i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n;else { var o = function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); }; o("next", 0), o("throw", 1), o("return", 2); } }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
    var addon, console, createArrow, modifiedRemoveFieldCallback, addInputAfter, getFieldInputNameAndIndex, shiftInput, focusOnInput, shiftFieldCallback, polluteProcedureDeclaration, depolluteProcedureDeclaration, getExistingProceduresDeclarationBlock, enableAddon, disableAddon, Blockly, originalCreateAllInputs, originalUpdateDeclarationProcCode, originalRemoveFieldCallback, originalShowEditor, originalAddFns, selectedField;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          disableAddon = function _disableAddon() {
            // depollute the procedures_declaration prototype
            depolluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

            // if custom procedures modal is already open we also directly depollute the existing procedures_declaration block
            if (addon.tab.redux.state.scratchGui.customProcedures.active) {
              depolluteProcedureDeclaration(getExistingProceduresDeclarationBlock());
            }
            Blockly.FieldTextInputRemovable.prototype.showEditor_ = originalShowEditor;
            Blockly.WidgetDiv.DIV.querySelectorAll(".blocklyTextShiftArrow").forEach(function (e) {
              return e.remove();
            });
          };
          enableAddon = function _enableAddon() {
            // pollute the procedures_declaration prototype with a modified version that prevents merging, and allows inserting after
            polluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

            // if custom procedures modal is already open we also directly pollute the existing procedures_declaration block
            if (addon.tab.redux.state.scratchGui.customProcedures.active) {
              polluteProcedureDeclaration(getExistingProceduresDeclarationBlock(), false);
            }
            Blockly.FieldTextInputRemovable.prototype.showEditor_ = function () {
              var _this = this;
              originalShowEditor.call(this);
              createArrow("left", function () {
                return shiftFieldCallback(_this.sourceBlock_, _this, "left");
              });
              createArrow("right", function () {
                return shiftFieldCallback(_this.sourceBlock_, _this, "right");
              });
              selectedField = this;
            };
          };
          getExistingProceduresDeclarationBlock = function _getExistingProcedure() {
            // Blockly.getMainWorkspace is required for this to work.
            // for future reference "upgrading" to addon.tab.traps.getWorkspace() will cause bugs.
            return Blockly.getMainWorkspace().getAllBlocks().find(function (block) {
              return block.type === "procedures_declaration";
            });
          };
          depolluteProcedureDeclaration = function _depolluteProcedureDe(procedureDeclaration) {
            procedureDeclaration.createAllInputs_ = originalCreateAllInputs;
            procedureDeclaration.onChangeFn = originalUpdateDeclarationProcCode;
            procedureDeclaration.removeFieldCallback = originalRemoveFieldCallback;
            for (var _i2 = 0, _Object$entries = Object.entries(originalAddFns); _i2 < _Object$entries.length; _i2++) {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                inputFnName = _Object$entries$_i[0],
                originalFn = _Object$entries$_i[1];
              procedureDeclaration[inputFnName] = originalFn;
            }
          };
          polluteProcedureDeclaration = function _polluteProcedureDecl(procedureDeclaration) {
            var save_original = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            procedureDeclaration.createAllInputs_ = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedCreateAllInputs"];
            procedureDeclaration.onChangeFn = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedUpdateDeclarationProcCode"];
            procedureDeclaration.removeFieldCallback = modifiedRemoveFieldCallback;
            for (var _i = 0, _arr = ["addLabelExternal", "addBooleanExternal", "addStringNumberExternal"]; _i < _arr.length; _i++) {
              var inputFn = _arr[_i];
              if (save_original) {
                originalAddFns[inputFn] = procedureDeclaration[inputFn];
              }
              procedureDeclaration[inputFn] = addInputAfter(procedureDeclaration[inputFn], inputFn);
            }
          };
          shiftFieldCallback = function _shiftFieldCallback(sourceBlock, field, direction) {
            var proc = sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock;

            // if inputList length is 1 there's nowhere to shift the input so we can simply return
            if (proc.inputList.length <= 1) return;
            var _getFieldInputNameAnd = getFieldInputNameAndIndex(field, proc.inputList),
              name = _getFieldInputNameAnd.name,
              index = _getFieldInputNameAnd.index;
            var newPosition = direction === "left" ? index - 1 : index + 1;
            shiftInput(proc, name, newPosition);
          };
          focusOnInput = function _focusOnInput(input) {
            if (!input) return;
            if (input.type === Blockly.DUMMY_INPUT) {
              input.fieldRow[0].showEditor_();
            } else if (input.type === Blockly.INPUT_VALUE) {
              var target = input.connection.targetBlock();
              target.getField("TEXT").showEditor_();
            }
          };
          shiftInput = function _shiftInput(procedureBlock, inputNameToShift, newPosition) {
            var initialInputListLength = procedureBlock.inputList.length;

            // return if inputNameToShift and newPosition are not valid
            if (!(inputNameToShift && newPosition >= 0 && newPosition <= initialInputListLength)) {
              return false;
            }
            var originalPosition = procedureBlock.inputList.findIndex(function (input) {
              return input.name === inputNameToShift;
            });
            var itemToMove = procedureBlock.inputList.splice(originalPosition, 1)[0];
            procedureBlock.inputList.splice(newPosition, 0, itemToMove);
            Blockly.Events.disable();
            try {
              procedureBlock.onChangeFn(true);
              procedureBlock.updateDisplay_();
            } finally {
              Blockly.Events.enable();
            }
            focusOnInput(procedureBlock.inputList[newPosition]);
          };
          getFieldInputNameAndIndex = function _getFieldInputNameAnd2(field, inputList) {
            var _iterator = _createForOfIteratorHelper(inputList.entries()),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _input$connection$tar;
                var _step$value = _slicedToArray(_step.value, 2),
                  i = _step$value[0],
                  input = _step$value[1];
                var isTargetField = input.connection ? ((_input$connection$tar = input.connection.targetBlock()) === null || _input$connection$tar === void 0 ? void 0 : _input$connection$tar.getField(field.name)) === field : input.fieldRow.includes(field);
                if (isTargetField) {
                  return {
                    name: input.name,
                    index: i
                  };
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          };
          addInputAfter = function _addInputAfter(addInputFn, fnName) {
            return function () {
              var _selectedField;
              var sourceBlock = (_selectedField = selectedField) === null || _selectedField === void 0 ? void 0 : _selectedField.sourceBlock_;
              var proc = sourceBlock ? sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock : this;

              // if a label is added, scratch's code will directly append the label text to the procCode
              // We account for this with a hacky method of adding the delimiter at the end of the last label input
              if (fnName === "addLabelExternal") {
                var lastInput = proc.inputList[proc.inputList.length - 1];
                if (lastInput.type === Blockly.DUMMY_INPUT) {
                  lastInput.fieldRow[0].setValue(lastInput.fieldRow[0].getValue() + " %l");
                }
              }
              proc.onChangeFn(true);
              if (sourceBlock === null || sourceBlock === undefined || !addon.settings.get("InsertInputsAfter")) return addInputFn.call.apply(addInputFn, [this].concat(Array.prototype.slice.call(arguments)));
              var newPosition = getFieldInputNameAndIndex(selectedField, proc.inputList).index + 1;
              addInputFn.call.apply(addInputFn, [proc].concat(Array.prototype.slice.call(arguments)));
              var lastInputName = proc.inputList[proc.inputList.length - 1].name;
              shiftInput(proc, lastInputName, newPosition);
            };
          };
          modifiedRemoveFieldCallback = function _modifiedRemoveFieldC(field) {
            // Do not delete if there is only one input
            if (this.inputList.length === 1) {
              return;
            }
            var inputNameToRemove = null;
            for (var n = 0; n < this.inputList.length; n++) {
              var input = this.inputList[n];
              if (input.connection) {
                var target = input.connection.targetBlock();
                if (target.getField(field.name) == field) {
                  inputNameToRemove = input.name;
                }
              } else {
                for (var j = 0; j < input.fieldRow.length; j++) {
                  if (input.fieldRow[j] == field) {
                    inputNameToRemove = input.name;
                  }
                }
              }
            }
            if (inputNameToRemove) {
              Blockly.WidgetDiv.hide(true);
              this.removeInput(inputNameToRemove);
              this.onChangeFn(true); // this is the only part we changed. We added this boolean input, which lets us switch on the merging.
              this.updateDisplay_();
            }
          };
          createArrow = function _createArrow(direction, callback) {
            var path = direction === "left" ? "M 17 13 L 9 21 L 17 30" : "M 9 13 L 17 21 L 9 30";
            Blockly.WidgetDiv.DIV.insertAdjacentHTML("beforeend", "\n            <svg width=\"20px\" height=\"40px\" \n                 style=\"left: ".concat(direction === "left" ? "calc(50% - 20px)" : "calc(50% + 20px)", "\" \n                 class=\"blocklyTextShiftArrow\">\n                <path d=\"").concat(path, "\" fill=\"none\" stroke=\"#FF661A\" stroke-width=\"2\"></path>\n            </svg>"));
            Blockly.WidgetDiv.DIV.lastChild.addEventListener("click", callback);
          };
          addon = _ref.addon, console = _ref.console; //https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L674
          _context.n = 1;
          return addon.tab.traps.getBlockly();
        case 1:
          Blockly = _context.v;
          originalCreateAllInputs = Blockly.Blocks["procedures_declaration"].createAllInputs_;
          originalUpdateDeclarationProcCode = Blockly.Blocks["procedures_declaration"].onChangeFn;
          originalRemoveFieldCallback = Blockly.Blocks["procedures_declaration"].removeFieldCallback;
          originalShowEditor = Blockly.FieldTextInputRemovable.prototype.showEditor_;
          originalAddFns = {};
          selectedField = null;
          addon.self.addEventListener("disabled", disableAddon);
          addon.self.addEventListener("reenabled", enableAddon);
          enableAddon();
        case 2:
          return _context.a(2);
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ }),

/***/ "./src/addons/libraries/common/cs/normalize-color.js":
/*!***********************************************************!*\
  !*** ./src/addons/libraries/common/cs/normalize-color.js ***!
  \***********************************************************/
/*! exports provided: getHexRegex, normalizeHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHexRegex", function() { return getHexRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var getHexRegex = function getHexRegex() {
  return /^#?[0-9a-fA-F]{3,8}$/;
};
var normalizeHex = function normalizeHex(input) {
  var hex = String(input);
  if (!getHexRegex().test(hex)) return "#000000";
  if (!hex.startsWith("#")) hex = "#".concat(hex);
  if (hex.length === 4) {
    var _hex = hex,
      _hex2 = _slicedToArray(_hex, 4),
      _ = _hex2[0],
      r = _hex2[1],
      g = _hex2[2],
      b = _hex2[3];
    hex = "#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
  }
  return hex.toLowerCase();
};

/***/ }),

/***/ "./src/addons/libraries/common/cs/rate-limiter.js":
/*!********************************************************!*\
  !*** ./src/addons/libraries/common/cs/rate-limiter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RateLimiter; });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var RateLimiter = /*#__PURE__*/function () {
  function RateLimiter(wait) {
    _classCallCheck(this, RateLimiter);
    this.timeout = null;
    this.callback = null;
    this.wait = wait;
  }
  return _createClass(RateLimiter, [{
    key: "abort",
    value: function abort() {
      var call = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (this.timeout) {
        clearTimeout(this.timeout);
        if (call) this.callback();
        this.timeout = this.callback = null;
      }
    }
  }, {
    key: "limit",
    value: function limit(callback) {
      var _this = this;
      this.abort(false);
      this.callback = callback;
      this.timeout = setTimeout(function () {
        _this.timeout = _this.callback = null;
        callback();
      }, this.wait);
    }
  }]);
}();


/***/ })

}]);
//# sourceMappingURL=addon-default-entry.js.map