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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUlBO0FBRUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUNoREE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9CYXNlRmlsZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9GaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL0ZpbGVTaXplUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL01heEZpbGVzUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL1NpbmdsZUZpbGVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvU2l6ZUZvcm1hdEZpbHRlci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHQgICAgICBBZHZhbmNlZFJlc3RyaWN0aW9uLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmZ1bmN0aW9uIEJhc2VGaWxlUmVzdHJpY3Rpb24oKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcbn1cclxuXHJcbkJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7RmlsZX1cclxuICovXHJcbkJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLmZpbGUgPSBudWxsO1xyXG5cclxuQmFzZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0RmlsZSA9IGZ1bmN0aW9uICggZmlsZSApIHtcclxuXHR0aGlzLmZpbGUgPSBmaWxlO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZUZpbGVSZXN0cmljdGlvbjsiLCJpbXBvcnQgQmFzZUZpbGVSZXN0cmljdGlvbiBmcm9tICcuL0Jhc2VGaWxlUmVzdHJpY3Rpb24nO1xyXG5cclxuZnVuY3Rpb24gRmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uKCkge1xyXG5cdEJhc2VGaWxlUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnZmlsZV9leHQnICk7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRcdGNvbnN0IHsgZmlsZV9leHQ6IGZpbGVFeHQgPSBmYWxzZSB9ID0gcmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiBmYWxzZSAhPT0gZmlsZUV4dDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyBmaWxlX2V4dDogZmlsZUV4dCB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblxyXG5cdFx0cmV0dXJuIGZpbGVFeHQudmFsdWUuY3VycmVudC5pbmNsdWRlcyggdGhpcy5maWxlLnR5cGUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZmlsZV9leHQnICk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcbkZpbGVFeHRlbnNpb25SZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdEJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb247IiwiaW1wb3J0IEJhc2VGaWxlUmVzdHJpY3Rpb24gZnJvbSAnLi9CYXNlRmlsZVJlc3RyaWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIEZpbGVTaXplUmVzdHJpY3Rpb24oKSB7XHJcblx0QmFzZUZpbGVSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXhfc2l6ZScgKTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgbWF4X3NpemU6IG1heFNpemUgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmZpbGUuc2l6ZSA8IG1heFNpemUudmFsdWUuY3VycmVudDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZmlsZV9tYXhfc2l6ZScgKTtcclxuXHR9O1xyXG5cclxufVxyXG5cclxuRmlsZVNpemVSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZVNpemVSZXN0cmljdGlvbjsiLCJjb25zdCB7XHJcblx0ICAgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBNYXhGaWxlc1Jlc3RyaWN0aW9uKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLndhdGNoZWRBdHRycy5wdXNoKCAnbWF4X2ZpbGVzJyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0J2ZpbGUnID09PSBub2RlPy50eXBlXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IG1heF9maWxlczogbWF4RmlsZXMgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cdFx0bGV0IHsgY3VycmVudCB9ICAgICA9IHRoaXMucmVwb3J0aW5nLmlucHV0LnZhbHVlO1xyXG5cclxuXHRcdGN1cnJlbnQgPSBjdXJyZW50Py5sZW5ndGggPz8gMDtcclxuXHJcblx0XHRyZXR1cm4gIWN1cnJlbnQgfHwgY3VycmVudCA8PSBtYXhGaWxlcy52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdtYXhfZmlsZXMnICk7XHJcblx0fTtcclxufVxyXG5cclxuTWF4RmlsZXNSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZXNSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBnZXRGaWxlUmVzdHJpY3Rpb25zIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFsbFJlamVjdGVkLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcbmNvbnN0IHtcclxuXHQgICAgICBBZHZhbmNlZFJlc3RyaWN0aW9uLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHJlc3RyaWN0aW9uIHVzZWQgZm9yIGltcGxlbWVudCBmaWxlLXNwZWNpZmljXHJcbiAqIHJlc3RyaWN0aW9ucyBmb3IgZWFjaCBzaW5nbGUgZmlsZVxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICovXHJcbmZ1bmN0aW9uIFNpbmdsZUZpbGVSZXN0cmljdGlvbigpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdCdmaWxlJyA9PT0gbm9kZT8udHlwZVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fTtcclxufVxyXG5cclxuU2luZ2xlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7QmFzZUZpbGVSZXN0cmljdGlvbltdfVxyXG4gKi9cclxuU2luZ2xlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zaW5nbGVGaWxlUmVzdHJpY3Rpb25zID0gW107XHJcblxyXG5TaW5nbGVGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldFJlcG9ydGluZyA9IGZ1bmN0aW9uICggcmVwb3J0aW5nICkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldFJlcG9ydGluZy5jYWxsKCB0aGlzLCByZXBvcnRpbmcgKTtcclxuXHJcblx0dGhpcy5zaW5nbGVGaWxlUmVzdHJpY3Rpb25zID0gZ2V0RmlsZVJlc3RyaWN0aW9ucyggcmVwb3J0aW5nICk7XHJcbn07XHJcblxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxyXG5TaW5nbGVGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlUHJvbWlzZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7U2lnbmFsRmlsZX1cclxuXHQgKi9cclxuXHRjb25zdCBjYWxsYWJsZSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmNhbGxhYmxlO1xyXG5cclxuXHRjb25zdCBjdXJyZW50ID0gQXJyYXkuZnJvbSggdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWU/LmN1cnJlbnQgPz8gW10gKTtcclxuXHJcblx0Y29uc3QgZmllbGRDYWxsYmFja3MgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgY3VycmVudEZpbGUgb2YgY3VycmVudCApIHtcclxuXHRcdGlmICggIShcclxuXHRcdFx0Y3VycmVudEZpbGUgaW5zdGFuY2VvZiBGaWxlXHJcblx0XHQpICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGZpbGVDYWxsYmFja3MgPSB0aGlzLnNpbmdsZUZpbGVSZXN0cmljdGlvbnMubWFwKFxyXG5cdFx0XHRpdGVtID0+ICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0XHRcdGl0ZW0uc2V0RmlsZSggY3VycmVudEZpbGUgKTtcclxuXHJcblx0XHRcdFx0aXRlbS52YWxpZGF0ZVByb21pc2UoKS50aGVuKCByZXNvbHZlICkuY2F0Y2goXHJcblx0XHRcdFx0XHQoKSA9PiByZWplY3QoIGl0ZW0gKSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0KTtcclxuXHJcblx0XHRmaWVsZENhbGxiYWNrcy5wdXNoKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuXHRcdFx0Y29uc3Qgb25WYWxpZGF0ZSA9IHZhbHVlcyA9PiB7XHJcblx0XHRcdFx0Y29uc3QgcmVqZWN0ZWQgPSB2YWx1ZXMuZmlsdGVyKFxyXG5cdFx0XHRcdFx0KCB7IHN0YXR1cyB9ICkgPT4gJ3JlamVjdGVkJyA9PT0gc3RhdHVzLFxyXG5cdFx0XHRcdCkubWFwKCAoIHsgcmVhc29uLCB2YWx1ZSB9ICkgPT4gKFxyXG5cdFx0XHRcdFx0cmVhc29uID8/IHZhbHVlXHJcblx0XHRcdFx0KSApO1xyXG5cclxuXHRcdFx0XHRpZiAoIHJlamVjdGVkLmxlbmd0aCApIHtcclxuXHRcdFx0XHRcdHJlamVjdCgge1xyXG5cdFx0XHRcdFx0XHRmaWxlOiBjdXJyZW50RmlsZSxcclxuXHRcdFx0XHRcdFx0cmVqZWN0ZWQsXHJcblx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdFByb21pc2UuYWxsU2V0dGxlZChcclxuXHRcdFx0XHRmaWxlQ2FsbGJhY2tzLm1hcCggY2FsbCA9PiBuZXcgUHJvbWlzZSggY2FsbCApICksXHJcblx0XHRcdCkudGhlbiggb25WYWxpZGF0ZSApO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhZmllbGRDYWxsYmFja3M/Lmxlbmd0aCApIHtcclxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBhbGxSZWplY3RlZCggZmllbGRDYWxsYmFja3MgKTtcclxuXHJcblx0Zm9yICggY29uc3QgZmlsZUN1cnJlbnQgb2YgY3VycmVudCApIHtcclxuXHRcdGNvbnN0IGZpbGVOb2RlID0gY2FsbGFibGUuZ2V0RmlsZU5vZGUoIGZpbGVDdXJyZW50Lm5hbWUgKTtcclxuXHJcblx0XHRjb25zdCBtYXJrZXIgPSBmaWxlTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtaW52YWxpZC1tYXJrZXInLFxyXG5cdFx0KTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEB0eXBlIHt7IGZpbGUsIHJlamVjdGVkIH19XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IFsgaW52YWxpZFBhcnQgPSB7fSBdID0gcmVzdWx0cy5maWx0ZXIoXHJcblx0XHRcdCggeyBmaWxlIH0gKSA9PiBmaWxlID09PSBmaWxlQ3VycmVudCxcclxuXHRcdCk7XHJcblxyXG5cdFx0bWFya2VyLnN0eWxlLmRpc3BsYXkgPSBpbnZhbGlkUGFydD8ucmVqZWN0ZWQ/Lmxlbmd0aFxyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/ICdibG9jaydcclxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgOiAnbm9uZSc7XHJcblxyXG5cdFx0bWFya2VyLnRpdGxlID0gaW52YWxpZFBhcnQ/LnJlamVjdGVkPy5sZW5ndGhcclxuXHRcdCAgICAgICAgICAgICAgID8gaW52YWxpZFBhcnQ/LnJlamVjdGVkWyAwIF0uZ2V0TWVzc2FnZSgpXHJcblx0XHQgICAgICAgICAgICAgICA6ICcnO1xyXG5cclxuXHR9XHJcblxyXG5cdHJldHVybiBCb29sZWFuKCByZXN1bHRzLmxlbmd0aCApXHJcblx0ICAgICAgID8gUHJvbWlzZS5yZWplY3QoICd2YWxpZGF0ZSBpcyB3cm9uZycgKVxyXG5cdCAgICAgICA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlRmlsZVJlc3RyaWN0aW9uOyIsImltcG9ydCB7IF94IH0gZnJvbSAnQHdvcmRwcmVzcy9pMThuJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBGaWx0ZXIsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5jb25zdCB7XHJcblx0ICAgICAgS2JfSW5fQnl0ZXMsXHJcblx0ICAgICAgTWJfSW5fQnl0ZXMsXHJcblx0ICAgICAgR2JfSW5fQnl0ZXMsXHJcblx0ICAgICAgVGJfSW5fQnl0ZXMsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckNvbnN0O1xyXG5jb25zdCB7XHJcblx0ICAgICAgZ2V0TGFuZ3VhZ2UsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xyXG5jb25zdCBzeW1ib2xzID0ge1xyXG5cdFsgX3goICdUQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IFRiX0luX0J5dGVzLFxyXG5cdFsgX3goICdHQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IEdiX0luX0J5dGVzLFxyXG5cdFsgX3goICdNQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IE1iX0luX0J5dGVzLFxyXG5cdFsgX3goICdLQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IEtiX0luX0J5dGVzLFxyXG5cdFsgX3goICdCJywgJ3VuaXQgc3ltYm9sJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgXTogMSxcclxufTtcclxuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cclxuXHJcbmNvbnN0IGxhbmcgPSBnZXRMYW5ndWFnZSgpO1xyXG5cclxuZnVuY3Rpb24gU2l6ZUZvcm1hdEZpbHRlcigpIHtcclxuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmdldFNsdWcgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gJ3NpemVGb3JtYXQnO1xyXG5cdH07XHJcblx0dGhpcy5hcHBseSAgID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcclxuXHRcdHZhbHVlID0gK3ZhbHVlO1xyXG5cclxuXHRcdGlmICggTnVtYmVyLmlzTmFOKCB2YWx1ZSApIHx8IDAgPT09IHZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm4gJzAgQic7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggY29uc3QgWyBuYW1lLCBzaXplIF0gb2YgT2JqZWN0LmVudHJpZXMoIHN5bWJvbHMgKSApIHtcclxuXHRcdFx0aWYgKCB2YWx1ZSA8IHNpemUgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFsdWUgPSAoXHJcblx0XHRcdFx0dmFsdWUgLyBzaXplXHJcblx0XHRcdCkudG9GaXhlZCggMiApO1xyXG5cclxuXHRcdFx0Y29uc3QgZm9ybWF0dGVkID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KCBsYW5nICkuZm9ybWF0KCB2YWx1ZSApO1xyXG5cclxuXHRcdFx0cmV0dXJuIGZvcm1hdHRlZCArICcgJyArIG5hbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICcwIEInO1xyXG5cdH07XHJcbn1cclxuXHJcblNpemVGb3JtYXRGaWx0ZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRmlsdGVyLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2l6ZUZvcm1hdEZpbHRlcjsiLCJpbXBvcnQgRmlsZVNpemVSZXN0cmljdGlvbiBmcm9tICcuL0ZpbGVTaXplUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgRmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uIGZyb20gJy4vRmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhcHBseUZpbHRlcnMsXHJcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuY29uc3QgZ2V0U2luZ2xlRmlsZVJlc3RyaWN0aW9ucyA9ICgpID0+IGFwcGx5RmlsdGVycyhcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5maWxlJyxcclxuXHRbXHJcblx0XHRGaWxlU2l6ZVJlc3RyaWN0aW9uLFxyXG5cdFx0RmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uLFxyXG5cdF0sXHJcbik7XHJcblxyXG4vKipcclxuICogQHR5cGUge0Jhc2VGaWxlUmVzdHJpY3Rpb25bXX1cclxuICovXHJcbmxldCByZXN0cmljdGlvbnMgPSBbXTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gcmVwb3J0aW5nIHtBZHZhbmNlZFJlcG9ydGluZ31cclxuICovXHJcbmZ1bmN0aW9uIGdldEZpbGVSZXN0cmljdGlvbnMoIHJlcG9ydGluZyApIHtcclxuXHRpZiAoICFyZXN0cmljdGlvbnMubGVuZ3RoICkge1xyXG5cdFx0cmVzdHJpY3Rpb25zID0gZ2V0U2luZ2xlRmlsZVJlc3RyaWN0aW9ucygpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzcG9uc2UgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgcmVzdHJpY3Rpb24gb2YgcmVzdHJpY3Rpb25zICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBAdHlwZSB7QmFzZUZpbGVSZXN0cmljdGlvbn1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgY3VycmVudCA9IG5ldyByZXN0cmljdGlvbigpO1xyXG5cclxuXHRcdGlmICggIWN1cnJlbnQuaXNTdXBwb3J0ZWQoIHJlcG9ydGluZy5nZXROb2RlKCksIHJlcG9ydGluZyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjdXJyZW50LnNldFJlcG9ydGluZyggcmVwb3J0aW5nICk7XHJcblx0XHRjdXJyZW50Lm9uUmVhZHkoKTtcclxuXHJcblx0XHRyZXNwb25zZS5wdXNoKCBjdXJyZW50ICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzcG9uc2U7XHJcblxyXG59XHJcblxyXG5leHBvcnQge1xyXG5cdGdldFNpbmdsZUZpbGVSZXN0cmljdGlvbnMsXHJcblx0Z2V0RmlsZVJlc3RyaWN0aW9ucyxcclxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1heEZpbGVzUmVzdHJpY3Rpb24gZnJvbSAnLi9NYXhGaWxlc1Jlc3RyaWN0aW9uJztcclxuaW1wb3J0IFNpbmdsZUZpbGVSZXN0cmljdGlvbiBmcm9tICcuL1NpbmdsZUZpbGVSZXN0cmljdGlvbic7XHJcbmltcG9ydCBTaXplRm9ybWF0RmlsdGVyIGZyb20gJy4vU2l6ZUZvcm1hdEZpbHRlcic7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggcmVzdHJpY3Rpb25zICkge1xyXG5cdFx0cmVzdHJpY3Rpb25zID0gW1xyXG5cdFx0XHRNYXhGaWxlc1Jlc3RyaWN0aW9uLFxyXG5cdFx0XHRTaW5nbGVGaWxlUmVzdHJpY3Rpb24sXHJcblx0XHRcdC4uLnJlc3RyaWN0aW9ucyxcclxuXHRcdF07XHJcblxyXG5cdFx0cmV0dXJuIHJlc3RyaWN0aW9ucztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuZmlsdGVycycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggZmlsdGVycyApIHtcclxuXHRcdGZpbHRlcnMucHVzaCggU2l6ZUZvcm1hdEZpbHRlciApO1xyXG5cclxuXHRcdHJldHVybiBmaWx0ZXJzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9