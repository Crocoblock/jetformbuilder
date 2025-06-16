/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/media.field.restrictions/BaseFileRestriction.js":
/*!******************************************************************!*\
  !*** ./frontend/media.field.restrictions/BaseFileRestriction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  AdvancedRestriction
} = JetFormBuilderAbstract;
function BaseFileRestriction() {
  AdvancedRestriction.call(this);
}
BaseFileRestriction.prototype = Object.create(AdvancedRestriction.prototype);

/**
 * @type {File}
 */
BaseFileRestriction.prototype.file = null;
BaseFileRestriction.prototype.setFile = function (file) {
  this.file = file;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseFileRestriction);

/***/ }),

/***/ "./frontend/media.field.restrictions/FileExtensionRestriction.js":
/*!***********************************************************************!*\
  !*** ./frontend/media.field.restrictions/FileExtensionRestriction.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseFileRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFileRestriction */ "./frontend/media.field.restrictions/BaseFileRestriction.js");

function FileExtensionRestriction() {
  _BaseFileRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('file_ext');
  this.isSupported = function (node, reporting) {
    const {
      file_ext: fileExt = false
    } = reporting.input.attrs;
    return false !== fileExt;
  };
  this.validate = function () {
    const {
      file_ext: fileExt
    } = this.reporting.input.attrs;
    return fileExt.value.current.includes(this.file.type);
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('file_ext');
  };
}
FileExtensionRestriction.prototype = Object.create(_BaseFileRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileExtensionRestriction);

/***/ }),

/***/ "./frontend/media.field.restrictions/FileSizeRestriction.js":
/*!******************************************************************!*\
  !*** ./frontend/media.field.restrictions/FileSizeRestriction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BaseFileRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BaseFileRestriction */ "./frontend/media.field.restrictions/BaseFileRestriction.js");

function FileSizeRestriction() {
  _BaseFileRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].call(this);
  this.watchedAttrs.push('max_size');
  this.validate = function () {
    const {
      max_size: maxSize
    } = this.reporting.input.attrs;
    return this.file.size < maxSize.value.current;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('file_max_size');
  };
}
FileSizeRestriction.prototype = Object.create(_BaseFileRestriction__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileSizeRestriction);

/***/ }),

/***/ "./frontend/media.field.restrictions/MaxFilesRestriction.js":
/*!******************************************************************!*\
  !*** ./frontend/media.field.restrictions/MaxFilesRestriction.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  AdvancedRestriction
} = JetFormBuilderAbstract;
function MaxFilesRestriction() {
  AdvancedRestriction.call(this);
  this.watchedAttrs.push('max_files');
  this.isSupported = function (node) {
    return 'file' === node?.type;
  };
  this.validate = function () {
    var _current$length;
    const {
      max_files: maxFiles
    } = this.reporting.input.attrs;
    let {
      current
    } = this.reporting.input.value;
    current = (_current$length = current?.length) !== null && _current$length !== void 0 ? _current$length : 0;
    return !current || current <= maxFiles.value.current;
  };
  this.getRawMessage = function () {
    return this.getMessageBySlug('max_files');
  };
}
MaxFilesRestriction.prototype = Object.create(AdvancedRestriction.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MaxFilesRestriction);

/***/ }),

/***/ "./frontend/media.field.restrictions/SingleFileRestriction.js":
/*!********************************************************************!*\
  !*** ./frontend/media.field.restrictions/SingleFileRestriction.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/media.field.restrictions/functions.js");

const {
  allRejected
} = JetFormBuilderFunctions;
const {
  AdvancedRestriction
} = JetFormBuilderAbstract;

/**
 * This restriction used for implement file-specific
 * restrictions for each single file
 *
 * @class
 */
function SingleFileRestriction() {
  AdvancedRestriction.call(this);
  this.isSupported = function (node) {
    return 'file' === node?.type;
  };
  this.getRawMessage = function () {
    return '';
  };
}
SingleFileRestriction.prototype = Object.create(AdvancedRestriction.prototype);

/**
 * @type {BaseFileRestriction[]}
 */
SingleFileRestriction.prototype.singleFileRestrictions = [];
SingleFileRestriction.prototype.setReporting = function (reporting) {
  AdvancedRestriction.prototype.setReporting.call(this, reporting);
  this.singleFileRestrictions = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getFileRestrictions)(reporting);
};

// eslint-disable-next-line max-lines-per-function
SingleFileRestriction.prototype.validatePromise = async function () {
  var _this$reporting$input;
  /**
   * @type {SignalFile}
   */
  const callable = this.reporting.input.callable;
  const current = Array.from((_this$reporting$input = this.reporting.input.value?.current) !== null && _this$reporting$input !== void 0 ? _this$reporting$input : []);
  const fieldCallbacks = [];
  for (const currentFile of current) {
    if (!(currentFile instanceof File)) {
      continue;
    }
    const fileCallbacks = this.singleFileRestrictions.map(item => (resolve, reject) => {
      item.setFile(currentFile);
      item.validatePromise().then(resolve).catch(() => reject(item));
    });
    fieldCallbacks.push((resolve, reject) => {
      const onValidate = values => {
        const rejected = values.filter(({
          status
        }) => 'rejected' === status).map(({
          reason,
          value
        }) => reason !== null && reason !== void 0 ? reason : value);
        if (rejected.length) {
          reject({
            file: currentFile,
            rejected
          });
        } else {
          resolve();
        }
      };
      Promise.allSettled(fileCallbacks.map(call => new Promise(call))).then(onValidate);
    });
  }
  if (!fieldCallbacks?.length) {
    return Promise.resolve();
  }
  const results = await allRejected(fieldCallbacks);
  for (const fileCurrent of current) {
    const fileNode = callable.getFileNode(fileCurrent.name);
    const marker = fileNode.querySelector('.jet-form-builder-file-upload__file-invalid-marker');

    /**
     * @type {{ file, rejected }}
     */
    const [invalidPart = {}] = results.filter(({
      file
    }) => file === fileCurrent);
    marker.style.display = invalidPart?.rejected?.length ? 'block' : 'none';
    marker.title = invalidPart?.rejected?.length ? invalidPart?.rejected[0].getMessage() : '';
  }
  return Boolean(results.length) ? Promise.reject('validate is wrong') : Promise.resolve();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleFileRestriction);

/***/ }),

/***/ "./frontend/media.field.restrictions/SizeFormatFilter.js":
/*!***************************************************************!*\
  !*** ./frontend/media.field.restrictions/SizeFormatFilter.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const {
  Filter
} = JetFormBuilderAbstract;
const {
  Kb_In_Bytes,
  Mb_In_Bytes,
  Gb_In_Bytes,
  Tb_In_Bytes
} = JetFormBuilderConst;
const {
  getLanguage
} = JetFormBuilderFunctions;

/* eslint-disable camelcase */
const symbols = {
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('TB', 'unit symbol', 'jet-form-builder')]: Tb_In_Bytes,
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('GB', 'unit symbol', 'jet-form-builder')]: Gb_In_Bytes,
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('MB', 'unit symbol', 'jet-form-builder')]: Mb_In_Bytes,
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('KB', 'unit symbol', 'jet-form-builder')]: Kb_In_Bytes,
  [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._x)('B', 'unit symbol', 'jet-form-builder')]: 1
};
/* eslint-enable camelcase */

const lang = getLanguage();
function SizeFormatFilter() {
  Filter.call(this);
  this.getSlug = function () {
    return 'sizeFormat';
  };
  this.apply = function (value) {
    value = +value;
    if (Number.isNaN(value) || 0 === value) {
      return '0 B';
    }
    for (const [name, size] of Object.entries(symbols)) {
      if (value < size) {
        continue;
      }
      value = (value / size).toFixed(2);
      const formatted = new Intl.NumberFormat(lang).format(value);
      return formatted + ' ' + name;
    }
    return '0 B';
  };
}
SizeFormatFilter.prototype = Object.create(Filter.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SizeFormatFilter);

/***/ }),

/***/ "./frontend/media.field.restrictions/functions.js":
/*!********************************************************!*\
  !*** ./frontend/media.field.restrictions/functions.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFileRestrictions: () => (/* binding */ getFileRestrictions),
/* harmony export */   getSingleFileRestrictions: () => (/* binding */ getSingleFileRestrictions)
/* harmony export */ });
/* harmony import */ var _FileSizeRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSizeRestriction */ "./frontend/media.field.restrictions/FileSizeRestriction.js");
/* harmony import */ var _FileExtensionRestriction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileExtensionRestriction */ "./frontend/media.field.restrictions/FileExtensionRestriction.js");


const {
  applyFilters
} = JetPlugins.hooks;
const getSingleFileRestrictions = () => applyFilters('jet.fb.restrictions.file', [_FileSizeRestriction__WEBPACK_IMPORTED_MODULE_0__["default"], _FileExtensionRestriction__WEBPACK_IMPORTED_MODULE_1__["default"]]);

/**
 * @type {BaseFileRestriction[]}
 */
let restrictions = [];

/**
 * @param reporting {AdvancedReporting}
 */
function getFileRestrictions(reporting) {
  if (!restrictions.length) {
    restrictions = getSingleFileRestrictions();
  }
  const response = [];
  for (const restriction of restrictions) {
    /**
     * @type {BaseFileRestriction}
     */
    const current = new restriction();
    if (!current.isSupported(reporting.getNode(), reporting)) {
      continue;
    }
    current.setReporting(reporting);
    current.onReady();
    response.push(current);
  }
  return response;
}


/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************************!*\
  !*** ./frontend/media.field.restrictions/main.js ***!
  \***************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MaxFilesRestriction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MaxFilesRestriction */ "./frontend/media.field.restrictions/MaxFilesRestriction.js");
/* harmony import */ var _SingleFileRestriction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleFileRestriction */ "./frontend/media.field.restrictions/SingleFileRestriction.js");
/* harmony import */ var _SizeFormatFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SizeFormatFilter */ "./frontend/media.field.restrictions/SizeFormatFilter.js");



const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.restrictions', 'jet-form-builder/media-field', function (restrictions) {
  restrictions = [_MaxFilesRestriction__WEBPACK_IMPORTED_MODULE_0__["default"], _SingleFileRestriction__WEBPACK_IMPORTED_MODULE_1__["default"], ...restrictions];
  return restrictions;
});
addFilter('jet.fb.filters', 'jet-form-builder/media-field', function (filters) {
  filters.push(_SizeFormatFilter__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return filters;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUlBO0FBRUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUNoREE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9CYXNlRmlsZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9GaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL0ZpbGVTaXplUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL01heEZpbGVzUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL1NpbmdsZUZpbGVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvU2l6ZUZvcm1hdEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcblx0ICAgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBCYXNlRmlsZVJlc3RyaWN0aW9uKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcbn1cblxuQmFzZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIEB0eXBlIHtGaWxlfVxuICovXG5CYXNlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5maWxlID0gbnVsbDtcblxuQmFzZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0RmlsZSA9IGZ1bmN0aW9uICggZmlsZSApIHtcblx0dGhpcy5maWxlID0gZmlsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VGaWxlUmVzdHJpY3Rpb247IiwiaW1wb3J0IEJhc2VGaWxlUmVzdHJpY3Rpb24gZnJvbSAnLi9CYXNlRmlsZVJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gRmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uKCkge1xuXHRCYXNlRmlsZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnZmlsZV9leHQnICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRcdGNvbnN0IHsgZmlsZV9leHQ6IGZpbGVFeHQgPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuIGZhbHNlICE9PSBmaWxlRXh0O1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBmaWxlX2V4dDogZmlsZUV4dCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gZmlsZUV4dC52YWx1ZS5jdXJyZW50LmluY2x1ZGVzKCB0aGlzLmZpbGUudHlwZSApO1xuXHR9O1xuXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZmlsZV9leHQnICk7XG5cdH07XG5cbn1cblxuRmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdEJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVFeHRlbnNpb25SZXN0cmljdGlvbjsiLCJpbXBvcnQgQmFzZUZpbGVSZXN0cmljdGlvbiBmcm9tICcuL0Jhc2VGaWxlUmVzdHJpY3Rpb24nO1xuXG5mdW5jdGlvbiBGaWxlU2l6ZVJlc3RyaWN0aW9uKCkge1xuXHRCYXNlRmlsZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4X3NpemUnICk7XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IG1heF9zaXplOiBtYXhTaXplIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiB0aGlzLmZpbGUuc2l6ZSA8IG1heFNpemUudmFsdWUuY3VycmVudDtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2ZpbGVfbWF4X3NpemUnICk7XG5cdH07XG5cbn1cblxuRmlsZVNpemVSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlU2l6ZVJlc3RyaWN0aW9uOyIsImNvbnN0IHtcblx0ICAgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBNYXhGaWxlc1Jlc3RyaWN0aW9uKCkge1xuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4X2ZpbGVzJyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCdmaWxlJyA9PT0gbm9kZT8udHlwZVxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IG1heF9maWxlczogbWF4RmlsZXMgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXHRcdGxldCB7IGN1cnJlbnQgfSAgICAgPSB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZTtcblxuXHRcdGN1cnJlbnQgPSBjdXJyZW50Py5sZW5ndGggPz8gMDtcblxuXHRcdHJldHVybiAhY3VycmVudCB8fCBjdXJyZW50IDw9IG1heEZpbGVzLnZhbHVlLmN1cnJlbnQ7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdtYXhfZmlsZXMnICk7XG5cdH07XG59XG5cbk1heEZpbGVzUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZXNSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBnZXRGaWxlUmVzdHJpY3Rpb25zIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7XG5cdCAgICAgIGFsbFJlamVjdGVkLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuY29uc3Qge1xuXHQgICAgICBBZHZhbmNlZFJlc3RyaWN0aW9uLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogVGhpcyByZXN0cmljdGlvbiB1c2VkIGZvciBpbXBsZW1lbnQgZmlsZS1zcGVjaWZpY1xuICogcmVzdHJpY3Rpb25zIGZvciBlYWNoIHNpbmdsZSBmaWxlXG4gKlxuICogQGNsYXNzXG4gKi9cbmZ1bmN0aW9uIFNpbmdsZUZpbGVSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0J2ZpbGUnID09PSBub2RlPy50eXBlXG5cdFx0KTtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9O1xufVxuXG5TaW5nbGVGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBAdHlwZSB7QmFzZUZpbGVSZXN0cmljdGlvbltdfVxuICovXG5TaW5nbGVGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNpbmdsZUZpbGVSZXN0cmljdGlvbnMgPSBbXTtcblxuU2luZ2xlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zZXRSZXBvcnRpbmcgPSBmdW5jdGlvbiAoIHJlcG9ydGluZyApIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0UmVwb3J0aW5nLmNhbGwoIHRoaXMsIHJlcG9ydGluZyApO1xuXG5cdHRoaXMuc2luZ2xlRmlsZVJlc3RyaWN0aW9ucyA9IGdldEZpbGVSZXN0cmljdGlvbnMoIHJlcG9ydGluZyApO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cblNpbmdsZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUudmFsaWRhdGVQcm9taXNlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHQvKipcblx0ICogQHR5cGUge1NpZ25hbEZpbGV9XG5cdCAqL1xuXHRjb25zdCBjYWxsYWJsZSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmNhbGxhYmxlO1xuXG5cdGNvbnN0IGN1cnJlbnQgPSBBcnJheS5mcm9tKCB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZT8uY3VycmVudCA/PyBbXSApO1xuXG5cdGNvbnN0IGZpZWxkQ2FsbGJhY2tzID0gW107XG5cblx0Zm9yICggY29uc3QgY3VycmVudEZpbGUgb2YgY3VycmVudCApIHtcblx0XHRpZiAoICEoXG5cdFx0XHRjdXJyZW50RmlsZSBpbnN0YW5jZW9mIEZpbGVcblx0XHQpICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGZpbGVDYWxsYmFja3MgPSB0aGlzLnNpbmdsZUZpbGVSZXN0cmljdGlvbnMubWFwKFxuXHRcdFx0aXRlbSA9PiAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdFx0aXRlbS5zZXRGaWxlKCBjdXJyZW50RmlsZSApO1xuXG5cdFx0XHRcdGl0ZW0udmFsaWRhdGVQcm9taXNlKCkudGhlbiggcmVzb2x2ZSApLmNhdGNoKFxuXHRcdFx0XHRcdCgpID0+IHJlamVjdCggaXRlbSApLFxuXHRcdFx0XHQpO1xuXHRcdFx0fSxcblx0XHQpO1xuXG5cdFx0ZmllbGRDYWxsYmFja3MucHVzaCggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRjb25zdCBvblZhbGlkYXRlID0gdmFsdWVzID0+IHtcblx0XHRcdFx0Y29uc3QgcmVqZWN0ZWQgPSB2YWx1ZXMuZmlsdGVyKFxuXHRcdFx0XHRcdCggeyBzdGF0dXMgfSApID0+ICdyZWplY3RlZCcgPT09IHN0YXR1cyxcblx0XHRcdFx0KS5tYXAoICggeyByZWFzb24sIHZhbHVlIH0gKSA9PiAoXG5cdFx0XHRcdFx0cmVhc29uID8/IHZhbHVlXG5cdFx0XHRcdCkgKTtcblxuXHRcdFx0XHRpZiAoIHJlamVjdGVkLmxlbmd0aCApIHtcblx0XHRcdFx0XHRyZWplY3QoIHtcblx0XHRcdFx0XHRcdGZpbGU6IGN1cnJlbnRGaWxlLFxuXHRcdFx0XHRcdFx0cmVqZWN0ZWQsXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0UHJvbWlzZS5hbGxTZXR0bGVkKFxuXHRcdFx0XHRmaWxlQ2FsbGJhY2tzLm1hcCggY2FsbCA9PiBuZXcgUHJvbWlzZSggY2FsbCApICksXG5cdFx0XHQpLnRoZW4oIG9uVmFsaWRhdGUgKTtcblx0XHR9ICk7XG5cdH1cblxuXHRpZiAoICFmaWVsZENhbGxiYWNrcz8ubGVuZ3RoICkge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhbGxSZWplY3RlZCggZmllbGRDYWxsYmFja3MgKTtcblxuXHRmb3IgKCBjb25zdCBmaWxlQ3VycmVudCBvZiBjdXJyZW50ICkge1xuXHRcdGNvbnN0IGZpbGVOb2RlID0gY2FsbGFibGUuZ2V0RmlsZU5vZGUoIGZpbGVDdXJyZW50Lm5hbWUgKTtcblxuXHRcdGNvbnN0IG1hcmtlciA9IGZpbGVOb2RlLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtaW52YWxpZC1tYXJrZXInLFxuXHRcdCk7XG5cblx0XHQvKipcblx0XHQgKiBAdHlwZSB7eyBmaWxlLCByZWplY3RlZCB9fVxuXHRcdCAqL1xuXHRcdGNvbnN0IFsgaW52YWxpZFBhcnQgPSB7fSBdID0gcmVzdWx0cy5maWx0ZXIoXG5cdFx0XHQoIHsgZmlsZSB9ICkgPT4gZmlsZSA9PT0gZmlsZUN1cnJlbnQsXG5cdFx0KTtcblxuXHRcdG1hcmtlci5zdHlsZS5kaXNwbGF5ID0gaW52YWxpZFBhcnQ/LnJlamVjdGVkPy5sZW5ndGhcblx0XHQgICAgICAgICAgICAgICAgICAgICAgID8gJ2Jsb2NrJ1xuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgOiAnbm9uZSc7XG5cblx0XHRtYXJrZXIudGl0bGUgPSBpbnZhbGlkUGFydD8ucmVqZWN0ZWQ/Lmxlbmd0aFxuXHRcdCAgICAgICAgICAgICAgID8gaW52YWxpZFBhcnQ/LnJlamVjdGVkWyAwIF0uZ2V0TWVzc2FnZSgpXG5cdFx0ICAgICAgICAgICAgICAgOiAnJztcblxuXHR9XG5cblx0cmV0dXJuIEJvb2xlYW4oIHJlc3VsdHMubGVuZ3RoIClcblx0ICAgICAgID8gUHJvbWlzZS5yZWplY3QoICd2YWxpZGF0ZSBpcyB3cm9uZycgKVxuXHQgICAgICAgOiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUZpbGVSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBfeCB9IGZyb20gJ0B3b3JkcHJlc3MvaTE4bic7XG5cbmNvbnN0IHtcblx0ICAgICAgRmlsdGVyLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5jb25zdCB7XG5cdCAgICAgIEtiX0luX0J5dGVzLFxuXHQgICAgICBNYl9Jbl9CeXRlcyxcblx0ICAgICAgR2JfSW5fQnl0ZXMsXG5cdCAgICAgIFRiX0luX0J5dGVzLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQ29uc3Q7XG5jb25zdCB7XG5cdCAgICAgIGdldExhbmd1YWdlLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmNvbnN0IHN5bWJvbHMgPSB7XG5cdFsgX3goICdUQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IFRiX0luX0J5dGVzLFxuXHRbIF94KCAnR0InLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiBHYl9Jbl9CeXRlcyxcblx0WyBfeCggJ01CJywgJ3VuaXQgc3ltYm9sJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgXTogTWJfSW5fQnl0ZXMsXG5cdFsgX3goICdLQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IEtiX0luX0J5dGVzLFxuXHRbIF94KCAnQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IDEsXG59O1xuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxuY29uc3QgbGFuZyA9IGdldExhbmd1YWdlKCk7XG5cbmZ1bmN0aW9uIFNpemVGb3JtYXRGaWx0ZXIoKSB7XG5cdEZpbHRlci5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnc2l6ZUZvcm1hdCc7XG5cdH07XG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XG5cdFx0dmFsdWUgPSArdmFsdWU7XG5cblx0XHRpZiAoIE51bWJlci5pc05hTiggdmFsdWUgKSB8fCAwID09PSB2YWx1ZSApIHtcblx0XHRcdHJldHVybiAnMCBCJztcblx0XHR9XG5cblx0XHRmb3IgKCBjb25zdCBbIG5hbWUsIHNpemUgXSBvZiBPYmplY3QuZW50cmllcyggc3ltYm9scyApICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA8IHNpemUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dmFsdWUgPSAoXG5cdFx0XHRcdHZhbHVlIC8gc2l6ZVxuXHRcdFx0KS50b0ZpeGVkKCAyICk7XG5cblx0XHRcdGNvbnN0IGZvcm1hdHRlZCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCggbGFuZyApLmZvcm1hdCggdmFsdWUgKTtcblxuXHRcdFx0cmV0dXJuIGZvcm1hdHRlZCArICcgJyArIG5hbWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICcwIEInO1xuXHR9O1xufVxuXG5TaXplRm9ybWF0RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgU2l6ZUZvcm1hdEZpbHRlcjsiLCJpbXBvcnQgRmlsZVNpemVSZXN0cmljdGlvbiBmcm9tICcuL0ZpbGVTaXplUmVzdHJpY3Rpb24nO1xuaW1wb3J0IEZpbGVFeHRlbnNpb25SZXN0cmljdGlvbiBmcm9tICcuL0ZpbGVFeHRlbnNpb25SZXN0cmljdGlvbic7XG5cbmNvbnN0IHtcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IGdldFNpbmdsZUZpbGVSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zLmZpbGUnLFxuXHRbXG5cdFx0RmlsZVNpemVSZXN0cmljdGlvbixcblx0XHRGaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb24sXG5cdF0sXG4pO1xuXG4vKipcbiAqIEB0eXBlIHtCYXNlRmlsZVJlc3RyaWN0aW9uW119XG4gKi9cbmxldCByZXN0cmljdGlvbnMgPSBbXTtcblxuLyoqXG4gKiBAcGFyYW0gcmVwb3J0aW5nIHtBZHZhbmNlZFJlcG9ydGluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmlsZVJlc3RyaWN0aW9ucyggcmVwb3J0aW5nICkge1xuXHRpZiAoICFyZXN0cmljdGlvbnMubGVuZ3RoICkge1xuXHRcdHJlc3RyaWN0aW9ucyA9IGdldFNpbmdsZUZpbGVSZXN0cmljdGlvbnMoKTtcblx0fVxuXG5cdGNvbnN0IHJlc3BvbnNlID0gW107XG5cblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgcmVzdHJpY3Rpb25zICkge1xuXHRcdC8qKlxuXHRcdCAqIEB0eXBlIHtCYXNlRmlsZVJlc3RyaWN0aW9ufVxuXHRcdCAqL1xuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVzdHJpY3Rpb24oKTtcblxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIHJlcG9ydGluZy5nZXROb2RlKCksIHJlcG9ydGluZyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y3VycmVudC5zZXRSZXBvcnRpbmcoIHJlcG9ydGluZyApO1xuXHRcdGN1cnJlbnQub25SZWFkeSgpO1xuXG5cdFx0cmVzcG9uc2UucHVzaCggY3VycmVudCApO1xuXHR9XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xuXG59XG5cbmV4cG9ydCB7XG5cdGdldFNpbmdsZUZpbGVSZXN0cmljdGlvbnMsXG5cdGdldEZpbGVSZXN0cmljdGlvbnMsXG59OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJpMThuXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWF4RmlsZXNSZXN0cmljdGlvbiBmcm9tICcuL01heEZpbGVzUmVzdHJpY3Rpb24nO1xuaW1wb3J0IFNpbmdsZUZpbGVSZXN0cmljdGlvbiBmcm9tICcuL1NpbmdsZUZpbGVSZXN0cmljdGlvbic7XG5pbXBvcnQgU2l6ZUZvcm1hdEZpbHRlciBmcm9tICcuL1NpemVGb3JtYXRGaWx0ZXInO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCByZXN0cmljdGlvbnMgKSB7XG5cdFx0cmVzdHJpY3Rpb25zID0gW1xuXHRcdFx0TWF4RmlsZXNSZXN0cmljdGlvbixcblx0XHRcdFNpbmdsZUZpbGVSZXN0cmljdGlvbixcblx0XHRcdC4uLnJlc3RyaWN0aW9ucyxcblx0XHRdO1xuXG5cdFx0cmV0dXJuIHJlc3RyaWN0aW9ucztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5maWx0ZXJzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGZpbHRlcnMgKSB7XG5cdFx0ZmlsdGVycy5wdXNoKCBTaXplRm9ybWF0RmlsdGVyICk7XG5cblx0XHRyZXR1cm4gZmlsdGVycztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9