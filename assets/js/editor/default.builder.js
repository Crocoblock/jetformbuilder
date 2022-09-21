/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/form-block.js":
/*!******************************!*\
  !*** ./editor/form-block.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @blocks/form-block/block.json */ \"../blocks-src/form-block/block.json\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\n\nvar _ref = wp.blockEditor ? wp.blockEditor : wp.editor,\n    InspectorControls = _ref.InspectorControls,\n    useBlockProps = _ref.useBlockProps;\n\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl,\n    TextControl = _wp$components.TextControl,\n    ToggleControl = _wp$components.ToggleControl;\nvar _wp = wp,\n    ServerSideRender = _wp.serverSideRender;\n\nvar uniqKey = function uniqKey(suffix) {\n  return \"\".concat(_blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name, \"/\").concat(suffix);\n};\n\nfunction FormEdit(_ref2) {\n  var attributes = _ref2.attributes,\n      setAttributes = _ref2.setAttributes,\n      isSelected = _ref2.isSelected;\n  var localize = window.JetFormData;\n  var blockProps = useBlockProps();\n  return [isSelected && wp.element.createElement(InspectorControls, {\n    key: uniqKey('InspectorControls')\n  }, wp.element.createElement(PanelBody, {\n    title: __('Form Settings'),\n    key: uniqKey('PanelBody')\n  }, wp.element.createElement(SelectControl, {\n    key: \"form_id\",\n    label: __('Choose Form'),\n    labelposition: \"top\",\n    value: attributes.form_id,\n    onChange: function onChange(newValue) {\n      setAttributes({\n        form_id: Number(newValue)\n      });\n    },\n    options: localize.forms_list\n  }), Boolean(attributes.form_id) && wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {\n    label: __('Fields Layout', 'jet-form-builder'),\n    value: attributes.fields_layout,\n    options: localize.fields_layout,\n    onChange: function onChange(fields_layout) {\n      return setAttributes({\n        fields_layout: fields_layout\n      });\n    }\n  }), wp.element.createElement(TextControl, {\n    label: __('Required Mark', 'jet-form-builder'),\n    value: attributes.required_mark,\n    onChange: function onChange(required_mark) {\n      return setAttributes({\n        required_mark: required_mark\n      });\n    }\n  }), wp.element.createElement(SelectControl, {\n    label: __('Fields label HTML tag', 'jet-form-builder'),\n    value: attributes.fields_label_tag,\n    options: localize.fields_label_tag,\n    onChange: function onChange(fields_label_tag) {\n      return setAttributes({\n        fields_label_tag: fields_label_tag\n      });\n    }\n  }), wp.element.createElement(SelectControl, {\n    label: __('Submit Type', 'jet-form-builder'),\n    value: attributes.submit_type,\n    options: localize.submit_type,\n    onChange: function onChange(submit_type) {\n      return setAttributes({\n        submit_type: submit_type\n      });\n    }\n  }), wp.element.createElement(ToggleControl, {\n    key: 'enable_progress',\n    label: __('Enable form pages progress', 'jet-form-builder'),\n    checked: attributes.enable_progress,\n    onChange: function onChange(newVal) {\n      setAttributes({\n        enable_progress: Boolean(newVal)\n      });\n    }\n  })))), wp.element.createElement(\"div\", _extends({\n    key: uniqKey('viewBlock')\n  }, blockProps), wp.element.createElement(ServerSideRender, {\n    block: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name,\n    attributes: attributes,\n    httpMethod: 'POST'\n  }))];\n}\n\nregisterBlockType(_blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.name, _objectSpread(_objectSpread({}, _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__), {}, {\n  title: __('JetForm'),\n  icon: wp.element.createElement(\"span\", {\n    dangerouslySetInnerHTML: {\n      __html: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.icon\n    }\n  }),\n  attributes: _blocks_form_block_block_json__WEBPACK_IMPORTED_MODULE_0__.attributes,\n  edit: FormEdit\n}));\n\n//# sourceURL=webpack:///./editor/form-block.js?");

/***/ }),

/***/ "../blocks-src/form-block/block.json":
/*!*******************************************!*\
  !*** ../blocks-src/form-block/block.json ***!
  \*******************************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"$schema\":\"https://schemas.wp.org/trunk/block.json\",\"apiVersion\":2,\"name\":\"jet-forms/form-block\",\"title\":\"JetForm\",\"keywords\":[\"jetform\",\"form\",\"builder\",\"crocoblock\"],\"textdomain\":\"jet-form-builder\",\"supports\":{\"html\":false,\"className\":true},\"editorScript\":\"jet-form-builder/form\",\"editorStyle\":\"jet-form-builder-others\",\"category\":\"layout\",\"icon\":\"<svg width=\\\\\"64\\\\\" height=\\\\\"64\\\\\" viewBox=\\\\\"0 0 64 64\\\\\" fill=\\\\\"none\\\\\" xmlns=\\\\\"http://www.w3.org/2000/svg\\\\\"><rect width=\\\\\"42\\\\\" height=\\\\\"2\\\\\" rx=\\\\\"1\\\\\" fill=\\\\\"#162B40\\\\\"/><path d=\\\\\"M0 5C0 4.44772 0.447715 4 1 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H1C0.447715 6 0 5.55228 0 5Z\\\\\" fill=\\\\\"#162B40\\\\\"/><rect x=\\\\\"1\\\\\" y=\\\\\"2\\\\\" width=\\\\\"62\\\\\" height=\\\\\"61\\\\\" rx=\\\\\"3\\\\\" fill=\\\\\"white\\\\\" stroke=\\\\\"#162B40\\\\\" stroke-width=\\\\\"2\\\\\"/><rect x=\\\\\"7\\\\\" y=\\\\\"19\\\\\" width=\\\\\"50\\\\\" height=\\\\\"11\\\\\" rx=\\\\\"2\\\\\" fill=\\\\\"#6F8CFF\\\\\" stroke=\\\\\"#162B40\\\\\" stroke-width=\\\\\"2\\\\\"/><rect x=\\\\\"7\\\\\" y=\\\\\"35\\\\\" width=\\\\\"50\\\\\" height=\\\\\"11\\\\\" rx=\\\\\"2\\\\\" fill=\\\\\"#4AF3BA\\\\\" stroke=\\\\\"#162B40\\\\\" stroke-width=\\\\\"2\\\\\"/><rect x=\\\\\"39\\\\\" y=\\\\\"51\\\\\" width=\\\\\"18\\\\\" height=\\\\\"7\\\\\" rx=\\\\\"2\\\\\" fill=\\\\\"white\\\\\" stroke=\\\\\"#162B40\\\\\" stroke-width=\\\\\"2\\\\\"/></svg>\",\"attributes\":{\"form_id\":{\"type\":\"number\",\"default\":0},\"submit_type\":{\"type\":\"string\",\"default\":\"\"},\"required_mark\":{\"type\":\"string\",\"default\":\"\"},\"fields_layout\":{\"type\":\"string\",\"default\":\"\"},\"enable_progress\":{\"type\":\"boolean\",\"default\":false},\"fields_label_tag\":{\"type\":\"string\",\"default\":\"\"}}}');\n\n//# sourceURL=webpack:///../blocks-src/form-block/block.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./editor/form-block.js");
/******/ 	
/******/ })()
;