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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUlBO0FBRUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbElBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUNoREE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFNQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvQmFzZUZpbGVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvRmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9GaWxlU2l6ZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9NYXhGaWxlc1Jlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9TaW5nbGVGaWxlUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL1NpemVGb3JtYXRGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XG5cdCAgICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gQmFzZUZpbGVSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG59XG5cbkJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBAdHlwZSB7RmlsZX1cbiAqL1xuQmFzZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUuZmlsZSA9IG51bGw7XG5cbkJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEZpbGUgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XG5cdHRoaXMuZmlsZSA9IGZpbGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlRmlsZVJlc3RyaWN0aW9uOyIsImltcG9ydCBCYXNlRmlsZVJlc3RyaWN0aW9uIGZyb20gJy4vQmFzZUZpbGVSZXN0cmljdGlvbic7XG5cbmZ1bmN0aW9uIEZpbGVFeHRlbnNpb25SZXN0cmljdGlvbigpIHtcblx0QmFzZUZpbGVSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ2ZpbGVfZXh0JyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcblx0XHRjb25zdCB7IGZpbGVfZXh0OiBmaWxlRXh0ID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcblxuXHRcdHJldHVybiBmYWxzZSAhPT0gZmlsZUV4dDtcblx0fTtcblxuXHR0aGlzLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgZmlsZV9leHQ6IGZpbGVFeHQgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xuXG5cdFx0cmV0dXJuIGZpbGVFeHQudmFsdWUuY3VycmVudC5pbmNsdWRlcyggdGhpcy5maWxlLnR5cGUgKTtcblx0fTtcblxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2ZpbGVfZXh0JyApO1xuXHR9O1xuXG59XG5cbkZpbGVFeHRlbnNpb25SZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHRCYXNlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb247IiwiaW1wb3J0IEJhc2VGaWxlUmVzdHJpY3Rpb24gZnJvbSAnLi9CYXNlRmlsZVJlc3RyaWN0aW9uJztcblxuZnVuY3Rpb24gRmlsZVNpemVSZXN0cmljdGlvbigpIHtcblx0QmFzZUZpbGVSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heF9zaXplJyApO1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBtYXhfc2l6ZTogbWF4U2l6ZSB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XG5cblx0XHRyZXR1cm4gdGhpcy5maWxlLnNpemUgPCBtYXhTaXplLnZhbHVlLmN1cnJlbnQ7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdmaWxlX21heF9zaXplJyApO1xuXHR9O1xuXG59XG5cbkZpbGVTaXplUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZVNpemVSZXN0cmljdGlvbjsiLCJjb25zdCB7XG5cdCAgICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gTWF4RmlsZXNSZXN0cmljdGlvbigpIHtcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heF9maWxlcycgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQnZmlsZScgPT09IG5vZGU/LnR5cGVcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBtYXhfZmlsZXM6IG1heEZpbGVzIH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcblx0XHRsZXQgeyBjdXJyZW50IH0gICAgID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWU7XG5cblx0XHRjdXJyZW50ID0gY3VycmVudD8ubGVuZ3RoID8/IDA7XG5cblx0XHRyZXR1cm4gIWN1cnJlbnQgfHwgY3VycmVudCA8PSBtYXhGaWxlcy52YWx1ZS5jdXJyZW50O1xuXHR9O1xuXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnbWF4X2ZpbGVzJyApO1xuXHR9O1xufVxuXG5NYXhGaWxlc1Jlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IE1heEZpbGVzUmVzdHJpY3Rpb247IiwiaW1wb3J0IHsgZ2V0RmlsZVJlc3RyaWN0aW9ucyB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBhbGxSZWplY3RlZCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcbmNvbnN0IHtcblx0ICAgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIFRoaXMgcmVzdHJpY3Rpb24gdXNlZCBmb3IgaW1wbGVtZW50IGZpbGUtc3BlY2lmaWNcbiAqIHJlc3RyaWN0aW9ucyBmb3IgZWFjaCBzaW5nbGUgZmlsZVxuICpcbiAqIEBjbGFzc1xuICovXG5mdW5jdGlvbiBTaW5nbGVGaWxlUmVzdHJpY3Rpb24oKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdCdmaWxlJyA9PT0gbm9kZT8udHlwZVxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiAnJztcblx0fTtcbn1cblxuU2luZ2xlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XG5cbi8qKlxuICogQHR5cGUge0Jhc2VGaWxlUmVzdHJpY3Rpb25bXX1cbiAqL1xuU2luZ2xlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5zaW5nbGVGaWxlUmVzdHJpY3Rpb25zID0gW107XG5cblNpbmdsZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0UmVwb3J0aW5nID0gZnVuY3Rpb24gKCByZXBvcnRpbmcgKSB7XG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldFJlcG9ydGluZy5jYWxsKCB0aGlzLCByZXBvcnRpbmcgKTtcblxuXHR0aGlzLnNpbmdsZUZpbGVSZXN0cmljdGlvbnMgPSBnZXRGaWxlUmVzdHJpY3Rpb25zKCByZXBvcnRpbmcgKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5TaW5nbGVGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlUHJvbWlzZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtTaWduYWxGaWxlfVxuXHQgKi9cblx0Y29uc3QgY2FsbGFibGUgPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5jYWxsYWJsZTtcblxuXHRjb25zdCBjdXJyZW50ID0gQXJyYXkuZnJvbSggdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWU/LmN1cnJlbnQgPz8gW10gKTtcblxuXHRjb25zdCBmaWVsZENhbGxiYWNrcyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGN1cnJlbnRGaWxlIG9mIGN1cnJlbnQgKSB7XG5cdFx0aWYgKCAhKFxuXHRcdFx0Y3VycmVudEZpbGUgaW5zdGFuY2VvZiBGaWxlXG5cdFx0KSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBmaWxlQ2FsbGJhY2tzID0gdGhpcy5zaW5nbGVGaWxlUmVzdHJpY3Rpb25zLm1hcChcblx0XHRcdGl0ZW0gPT4gKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRcdGl0ZW0uc2V0RmlsZSggY3VycmVudEZpbGUgKTtcblxuXHRcdFx0XHRpdGVtLnZhbGlkYXRlUHJvbWlzZSgpLnRoZW4oIHJlc29sdmUgKS5jYXRjaChcblx0XHRcdFx0XHQoKSA9PiByZWplY3QoIGl0ZW0gKSxcblx0XHRcdFx0KTtcblx0XHRcdH0sXG5cdFx0KTtcblxuXHRcdGZpZWxkQ2FsbGJhY2tzLnB1c2goICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0Y29uc3Qgb25WYWxpZGF0ZSA9IHZhbHVlcyA9PiB7XG5cdFx0XHRcdGNvbnN0IHJlamVjdGVkID0gdmFsdWVzLmZpbHRlcihcblx0XHRcdFx0XHQoIHsgc3RhdHVzIH0gKSA9PiAncmVqZWN0ZWQnID09PSBzdGF0dXMsXG5cdFx0XHRcdCkubWFwKCAoIHsgcmVhc29uLCB2YWx1ZSB9ICkgPT4gKFxuXHRcdFx0XHRcdHJlYXNvbiA/PyB2YWx1ZVxuXHRcdFx0XHQpICk7XG5cblx0XHRcdFx0aWYgKCByZWplY3RlZC5sZW5ndGggKSB7XG5cdFx0XHRcdFx0cmVqZWN0KCB7XG5cdFx0XHRcdFx0XHRmaWxlOiBjdXJyZW50RmlsZSxcblx0XHRcdFx0XHRcdHJlamVjdGVkLFxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdFByb21pc2UuYWxsU2V0dGxlZChcblx0XHRcdFx0ZmlsZUNhbGxiYWNrcy5tYXAoIGNhbGwgPT4gbmV3IFByb21pc2UoIGNhbGwgKSApLFxuXHRcdFx0KS50aGVuKCBvblZhbGlkYXRlICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCAhZmllbGRDYWxsYmFja3M/Lmxlbmd0aCApIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHRjb25zdCByZXN1bHRzID0gYXdhaXQgYWxsUmVqZWN0ZWQoIGZpZWxkQ2FsbGJhY2tzICk7XG5cblx0Zm9yICggY29uc3QgZmlsZUN1cnJlbnQgb2YgY3VycmVudCApIHtcblx0XHRjb25zdCBmaWxlTm9kZSA9IGNhbGxhYmxlLmdldEZpbGVOb2RlKCBmaWxlQ3VycmVudC5uYW1lICk7XG5cblx0XHRjb25zdCBtYXJrZXIgPSBmaWxlTm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLWludmFsaWQtbWFya2VyJyxcblx0XHQpO1xuXG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge3sgZmlsZSwgcmVqZWN0ZWQgfX1cblx0XHQgKi9cblx0XHRjb25zdCBbIGludmFsaWRQYXJ0ID0ge30gXSA9IHJlc3VsdHMuZmlsdGVyKFxuXHRcdFx0KCB7IGZpbGUgfSApID0+IGZpbGUgPT09IGZpbGVDdXJyZW50LFxuXHRcdCk7XG5cblx0XHRtYXJrZXIuc3R5bGUuZGlzcGxheSA9IGludmFsaWRQYXJ0Py5yZWplY3RlZD8ubGVuZ3RoXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA/ICdibG9jaydcblx0XHQgICAgICAgICAgICAgICAgICAgICAgIDogJ25vbmUnO1xuXG5cdFx0bWFya2VyLnRpdGxlID0gaW52YWxpZFBhcnQ/LnJlamVjdGVkPy5sZW5ndGhcblx0XHQgICAgICAgICAgICAgICA/IGludmFsaWRQYXJ0Py5yZWplY3RlZFsgMCBdLmdldE1lc3NhZ2UoKVxuXHRcdCAgICAgICAgICAgICAgIDogJyc7XG5cblx0fVxuXG5cdHJldHVybiBCb29sZWFuKCByZXN1bHRzLmxlbmd0aCApXG5cdCAgICAgICA/IFByb21pc2UucmVqZWN0KCAndmFsaWRhdGUgaXMgd3JvbmcnIClcblx0ICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVGaWxlUmVzdHJpY3Rpb247IiwiaW1wb3J0IHsgX3ggfSBmcm9tICdAd29yZHByZXNzL2kxOG4nO1xuXG5jb25zdCB7XG5cdCAgICAgIEZpbHRlcixcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuY29uc3Qge1xuXHQgICAgICBLYl9Jbl9CeXRlcyxcblx0ICAgICAgTWJfSW5fQnl0ZXMsXG5cdCAgICAgIEdiX0luX0J5dGVzLFxuXHQgICAgICBUYl9Jbl9CeXRlcyxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckNvbnN0O1xuY29uc3Qge1xuXHQgICAgICBnZXRMYW5ndWFnZSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5jb25zdCBzeW1ib2xzID0ge1xuXHRbIF94KCAnVEInLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiBUYl9Jbl9CeXRlcyxcblx0WyBfeCggJ0dCJywgJ3VuaXQgc3ltYm9sJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgXTogR2JfSW5fQnl0ZXMsXG5cdFsgX3goICdNQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IE1iX0luX0J5dGVzLFxuXHRbIF94KCAnS0InLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiBLYl9Jbl9CeXRlcyxcblx0WyBfeCggJ0InLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiAxLFxufTtcbi8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbmNvbnN0IGxhbmcgPSBnZXRMYW5ndWFnZSgpO1xuXG5mdW5jdGlvbiBTaXplRm9ybWF0RmlsdGVyKCkge1xuXHRGaWx0ZXIuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuZ2V0U2x1ZyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gJ3NpemVGb3JtYXQnO1xuXHR9O1xuXHR0aGlzLmFwcGx5ICAgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRcdHZhbHVlID0gK3ZhbHVlO1xuXG5cdFx0aWYgKCBOdW1iZXIuaXNOYU4oIHZhbHVlICkgfHwgMCA9PT0gdmFsdWUgKSB7XG5cdFx0XHRyZXR1cm4gJzAgQic7XG5cdFx0fVxuXG5cdFx0Zm9yICggY29uc3QgWyBuYW1lLCBzaXplIF0gb2YgT2JqZWN0LmVudHJpZXMoIHN5bWJvbHMgKSApIHtcblx0XHRcdGlmICggdmFsdWUgPCBzaXplICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHZhbHVlID0gKFxuXHRcdFx0XHR2YWx1ZSAvIHNpemVcblx0XHRcdCkudG9GaXhlZCggMiApO1xuXG5cdFx0XHRjb25zdCBmb3JtYXR0ZWQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQoIGxhbmcgKS5mb3JtYXQoIHZhbHVlICk7XG5cblx0XHRcdHJldHVybiBmb3JtYXR0ZWQgKyAnICcgKyBuYW1lO1xuXHRcdH1cblxuXHRcdHJldHVybiAnMCBCJztcblx0fTtcbn1cblxuU2l6ZUZvcm1hdEZpbHRlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBGaWx0ZXIucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpemVGb3JtYXRGaWx0ZXI7IiwiaW1wb3J0IEZpbGVTaXplUmVzdHJpY3Rpb24gZnJvbSAnLi9GaWxlU2l6ZVJlc3RyaWN0aW9uJztcbmltcG9ydCBGaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb24gZnJvbSAnLi9GaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb24nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFwcGx5RmlsdGVycyxcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCBnZXRTaW5nbGVGaWxlUmVzdHJpY3Rpb25zID0gKCkgPT4gYXBwbHlGaWx0ZXJzKFxuXHQnamV0LmZiLnJlc3RyaWN0aW9ucy5maWxlJyxcblx0W1xuXHRcdEZpbGVTaXplUmVzdHJpY3Rpb24sXG5cdFx0RmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uLFxuXHRdLFxuKTtcblxuLyoqXG4gKiBAdHlwZSB7QmFzZUZpbGVSZXN0cmljdGlvbltdfVxuICovXG5sZXQgcmVzdHJpY3Rpb25zID0gW107XG5cbi8qKlxuICogQHBhcmFtIHJlcG9ydGluZyB7QWR2YW5jZWRSZXBvcnRpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpbGVSZXN0cmljdGlvbnMoIHJlcG9ydGluZyApIHtcblx0aWYgKCAhcmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcblx0XHRyZXN0cmljdGlvbnMgPSBnZXRTaW5nbGVGaWxlUmVzdHJpY3Rpb25zKCk7XG5cdH1cblxuXHRjb25zdCByZXNwb25zZSA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHJlc3RyaWN0aW9ucyApIHtcblx0XHQvKipcblx0XHQgKiBAdHlwZSB7QmFzZUZpbGVSZXN0cmljdGlvbn1cblx0XHQgKi9cblx0XHRjb25zdCBjdXJyZW50ID0gbmV3IHJlc3RyaWN0aW9uKCk7XG5cblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCByZXBvcnRpbmcuZ2V0Tm9kZSgpLCByZXBvcnRpbmcgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGN1cnJlbnQuc2V0UmVwb3J0aW5nKCByZXBvcnRpbmcgKTtcblx0XHRjdXJyZW50Lm9uUmVhZHkoKTtcblxuXHRcdHJlc3BvbnNlLnB1c2goIGN1cnJlbnQgKTtcblx0fVxuXG5cdHJldHVybiByZXNwb25zZTtcblxufVxuXG5leHBvcnQge1xuXHRnZXRTaW5nbGVGaWxlUmVzdHJpY3Rpb25zLFxuXHRnZXRGaWxlUmVzdHJpY3Rpb25zLFxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiaTE4blwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1heEZpbGVzUmVzdHJpY3Rpb24gZnJvbSAnLi9NYXhGaWxlc1Jlc3RyaWN0aW9uJztcbmltcG9ydCBTaW5nbGVGaWxlUmVzdHJpY3Rpb24gZnJvbSAnLi9TaW5nbGVGaWxlUmVzdHJpY3Rpb24nO1xuaW1wb3J0IFNpemVGb3JtYXRGaWx0ZXIgZnJvbSAnLi9TaXplRm9ybWF0RmlsdGVyJztcblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXG5cdGZ1bmN0aW9uICggcmVzdHJpY3Rpb25zICkge1xuXHRcdHJlc3RyaWN0aW9ucyA9IFtcblx0XHRcdE1heEZpbGVzUmVzdHJpY3Rpb24sXG5cdFx0XHRTaW5nbGVGaWxlUmVzdHJpY3Rpb24sXG5cdFx0XHQuLi5yZXN0cmljdGlvbnMsXG5cdFx0XTtcblxuXHRcdHJldHVybiByZXN0cmljdGlvbnM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuZmlsdGVycycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBmaWx0ZXJzICkge1xuXHRcdGZpbHRlcnMucHVzaCggU2l6ZUZvcm1hdEZpbHRlciApO1xuXG5cdFx0cmV0dXJuIGZpbHRlcnM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==