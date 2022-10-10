/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/deprecated/main.js":
/*!*************************************!*\
  !*** ./frontend/deprecated/main.js ***!
  \*************************************/
/***/ (() => {

eval("window.JetFormBuilderMain = {\n  filters: function () {\n    var callbacks = {};\n    return {\n      addFilter: function addFilter(name, callback) {\n        console.warn(\"This method is deprecated since \\n\\t\\t\\t\\t\\t\\tJetFormBuilder 3.0.0. Use wp.hooks.addFilter instead.\");\n\n        if (!callbacks.hasOwnProperty(name)) {\n          callbacks[name] = [];\n        }\n\n        callbacks[name].push(callback);\n      },\n      applyFilters: function applyFilters(name, value, args) {\n        if (!callbacks.hasOwnProperty(name)) {\n          return value;\n        }\n\n        if (args === undefined) {\n          args = [];\n        }\n\n        var container = callbacks[name];\n        var cbLen = container.length;\n\n        for (var i = 0; i < cbLen; i++) {\n          if (typeof container[i] === 'function') {\n            value = container[i](value, args);\n          }\n        }\n\n        return value;\n      }\n    };\n  }()\n};\n\n//# sourceURL=webpack:///./frontend/deprecated/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/deprecated/main.js"]();
/******/ 	
/******/ })()
;