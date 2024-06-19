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
      file_ext = false
    } = reporting.input.attrs;
    return false !== file_ext;
  };
  this.validate = function () {
    const {
      file_ext
    } = this.reporting.input.attrs;
    return file_ext.value.current.includes(this.file.type);
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
      max_size
    } = this.reporting.input.attrs;
    return this.file.size < max_size.value.current;
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
  this.isSupported = function (node, reporting) {
    return 'file' === node?.type;
  };
  this.validate = function () {
    var _current$length;
    const {
      max_files
    } = this.reporting.input.attrs;
    let {
      current
    } = this.reporting.input.value;
    current = (_current$length = current?.length) !== null && _current$length !== void 0 ? _current$length : 0;
    return !current || current <= max_files.value.current;
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
 * @constructor
 */
function SingleFileRestriction() {
  AdvancedRestriction.call(this);
  this.isSupported = function (node, reporting) {
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
const {
  _x
} = wp.i18n;
const symbols = {
  [_x('TB', 'unit symbol', 'jet-form-builder')]: Tb_In_Bytes,
  [_x('GB', 'unit symbol', 'jet-form-builder')]: Gb_In_Bytes,
  [_x('MB', 'unit symbol', 'jet-form-builder')]: Mb_In_Bytes,
  [_x('KB', 'unit symbol', 'jet-form-builder')]: Kb_In_Bytes,
  [_x('B', 'unit symbol', 'jet-form-builder')]: 1
};
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFJQTtBQUlBO0FBRUE7QUFHQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQVFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFNQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvQmFzZUZpbGVSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvRmlsZUV4dGVuc2lvblJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9GaWxlU2l6ZVJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9NYXhGaWxlc1Jlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkLnJlc3RyaWN0aW9ucy9TaW5nbGVGaWxlUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL1NpemVGb3JtYXRGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQucmVzdHJpY3Rpb25zL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC5yZXN0cmljdGlvbnMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgQWR2YW5jZWRSZXN0cmljdGlvbixcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBCYXNlRmlsZVJlc3RyaWN0aW9uKCkge1xyXG5cdEFkdmFuY2VkUmVzdHJpY3Rpb24uY2FsbCggdGhpcyApO1xyXG59XHJcblxyXG5CYXNlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEFkdmFuY2VkUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG4vKipcclxuICogQHR5cGUge0ZpbGV9XHJcbiAqL1xyXG5CYXNlRmlsZVJlc3RyaWN0aW9uLnByb3RvdHlwZS5maWxlID0gbnVsbDtcclxuXHJcbkJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNldEZpbGUgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XHJcblx0dGhpcy5maWxlID0gZmlsZTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VGaWxlUmVzdHJpY3Rpb247IiwiaW1wb3J0IEJhc2VGaWxlUmVzdHJpY3Rpb24gZnJvbSAnLi9CYXNlRmlsZVJlc3RyaWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIEZpbGVFeHRlbnNpb25SZXN0cmljdGlvbigpIHtcclxuXHRCYXNlRmlsZVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ2ZpbGVfZXh0JyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0XHRjb25zdCB7IGZpbGVfZXh0ID0gZmFsc2UgfSA9IHJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gZmFsc2UgIT09IGZpbGVfZXh0O1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IGZpbGVfZXh0IH0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5hdHRycztcclxuXHJcblx0XHRyZXR1cm4gZmlsZV9leHQudmFsdWUuY3VycmVudC5pbmNsdWRlcyggdGhpcy5maWxlLnR5cGUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmdldFJhd01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRNZXNzYWdlQnlTbHVnKCAnZmlsZV9leHQnICk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcbkZpbGVFeHRlbnNpb25SZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdEJhc2VGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWxlRXh0ZW5zaW9uUmVzdHJpY3Rpb247IiwiaW1wb3J0IEJhc2VGaWxlUmVzdHJpY3Rpb24gZnJvbSAnLi9CYXNlRmlsZVJlc3RyaWN0aW9uJztcclxuXHJcbmZ1bmN0aW9uIEZpbGVTaXplUmVzdHJpY3Rpb24oKSB7XHJcblx0QmFzZUZpbGVSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMud2F0Y2hlZEF0dHJzLnB1c2goICdtYXhfc2l6ZScgKTtcclxuXHJcblx0dGhpcy52YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgbWF4X3NpemUgfSA9IHRoaXMucmVwb3J0aW5nLmlucHV0LmF0dHJzO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmZpbGUuc2l6ZSA8IG1heF9zaXplLnZhbHVlLmN1cnJlbnQ7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRSYXdNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TWVzc2FnZUJ5U2x1ZyggJ2ZpbGVfbWF4X3NpemUnICk7XHJcblx0fTtcclxuXHJcbn1cclxuXHJcbkZpbGVTaXplUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVTaXplUmVzdHJpY3Rpb247IiwiY29uc3Qge1xyXG5cdCAgICAgIEFkdmFuY2VkUmVzdHJpY3Rpb24sXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gTWF4RmlsZXNSZXN0cmljdGlvbigpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy53YXRjaGVkQXR0cnMucHVzaCggJ21heF9maWxlcycgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0J2ZpbGUnID09PSBub2RlPy50eXBlXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCB7IG1heF9maWxlcyB9ID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuYXR0cnM7XHJcblx0XHRsZXQgeyBjdXJyZW50IH0gICAgID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQudmFsdWU7XHJcblxyXG5cdFx0Y3VycmVudCA9IGN1cnJlbnQ/Lmxlbmd0aCA/PyAwO1xyXG5cclxuXHRcdHJldHVybiAhY3VycmVudCB8fCBjdXJyZW50IDw9IG1heF9maWxlcy52YWx1ZS5jdXJyZW50O1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldE1lc3NhZ2VCeVNsdWcoICdtYXhfZmlsZXMnICk7XHJcblx0fTtcclxufVxyXG5cclxuTWF4RmlsZXNSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF4RmlsZXNSZXN0cmljdGlvbjsiLCJpbXBvcnQgeyBnZXRGaWxlUmVzdHJpY3Rpb25zIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFsbFJlamVjdGVkLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcbmNvbnN0IHtcclxuXHQgICAgICBBZHZhbmNlZFJlc3RyaWN0aW9uLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIHJlc3RyaWN0aW9uIHVzZWQgZm9yIGltcGxlbWVudCBmaWxlLXNwZWNpZmljXHJcbiAqIHJlc3RyaWN0aW9ucyBmb3IgZWFjaCBzaW5nbGUgZmlsZVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIFNpbmdsZUZpbGVSZXN0cmljdGlvbigpIHtcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0J2ZpbGUnID09PSBub2RlPy50eXBlXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0UmF3TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9O1xyXG59XHJcblxyXG5TaW5nbGVGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRBZHZhbmNlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSApO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtCYXNlRmlsZVJlc3RyaWN0aW9uW119XHJcbiAqL1xyXG5TaW5nbGVGaWxlUmVzdHJpY3Rpb24ucHJvdG90eXBlLnNpbmdsZUZpbGVSZXN0cmljdGlvbnMgPSBbXTtcclxuXHJcblNpbmdsZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0UmVwb3J0aW5nID0gZnVuY3Rpb24gKCByZXBvcnRpbmcgKSB7XHJcblx0QWR2YW5jZWRSZXN0cmljdGlvbi5wcm90b3R5cGUuc2V0UmVwb3J0aW5nLmNhbGwoIHRoaXMsIHJlcG9ydGluZyApO1xyXG5cclxuXHR0aGlzLnNpbmdsZUZpbGVSZXN0cmljdGlvbnMgPSBnZXRGaWxlUmVzdHJpY3Rpb25zKCByZXBvcnRpbmcgKTtcclxufTtcclxuXHJcblNpbmdsZUZpbGVSZXN0cmljdGlvbi5wcm90b3R5cGUudmFsaWRhdGVQcm9taXNlID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtTaWduYWxGaWxlfVxyXG5cdCAqL1xyXG5cdGNvbnN0IGNhbGxhYmxlID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQuY2FsbGFibGU7XHJcblxyXG5cdGNvbnN0IGN1cnJlbnQgPSBBcnJheS5mcm9tKCB0aGlzLnJlcG9ydGluZy5pbnB1dC52YWx1ZT8uY3VycmVudCA/PyBbXSApO1xyXG5cclxuXHRjb25zdCBmaWVsZENhbGxiYWNrcyA9IFtdO1xyXG5cclxuXHRmb3IgKCBjb25zdCBjdXJyZW50RmlsZSBvZiBjdXJyZW50ICkge1xyXG5cdFx0aWYgKCAhKFxyXG5cdFx0XHRjdXJyZW50RmlsZSBpbnN0YW5jZW9mIEZpbGVcclxuXHRcdCkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3QgZmlsZUNhbGxiYWNrcyA9IHRoaXMuc2luZ2xlRmlsZVJlc3RyaWN0aW9ucy5tYXAoXHJcblx0XHRcdGl0ZW0gPT4gKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcblx0XHRcdFx0aXRlbS5zZXRGaWxlKCBjdXJyZW50RmlsZSApO1xyXG5cclxuXHRcdFx0XHRpdGVtLnZhbGlkYXRlUHJvbWlzZSgpLnRoZW4oIHJlc29sdmUgKS5jYXRjaChcclxuXHRcdFx0XHRcdCgpID0+IHJlamVjdCggaXRlbSApLFxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdH0sXHJcblx0XHQpO1xyXG5cclxuXHRcdGZpZWxkQ2FsbGJhY2tzLnB1c2goICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBvblZhbGlkYXRlID0gdmFsdWVzID0+IHtcclxuXHRcdFx0XHRjb25zdCByZWplY3RlZCA9IHZhbHVlcy5maWx0ZXIoXHJcblx0XHRcdFx0XHQoIHsgc3RhdHVzIH0gKSA9PiAncmVqZWN0ZWQnID09PSBzdGF0dXMsXHJcblx0XHRcdFx0KS5tYXAoICggeyByZWFzb24sIHZhbHVlIH0gKSA9PiAoXHJcblx0XHRcdFx0XHRyZWFzb24gPz8gdmFsdWVcclxuXHRcdFx0XHQpICk7XHJcblxyXG5cdFx0XHRcdGlmICggcmVqZWN0ZWQubGVuZ3RoICkge1xyXG5cdFx0XHRcdFx0cmVqZWN0KCB7XHJcblx0XHRcdFx0XHRcdGZpbGU6IGN1cnJlbnRGaWxlLFxyXG5cdFx0XHRcdFx0XHRyZWplY3RlZCxcclxuXHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0UHJvbWlzZS5hbGxTZXR0bGVkKFxyXG5cdFx0XHRcdGZpbGVDYWxsYmFja3MubWFwKCBjYWxsID0+IG5ldyBQcm9taXNlKCBjYWxsICkgKSxcclxuXHRcdFx0KS50aGVuKCBvblZhbGlkYXRlICk7XHJcblx0XHR9ICk7XHJcblx0fVxyXG5cclxuXHRpZiAoICFmaWVsZENhbGxiYWNrcz8ubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgcmVzdWx0cyA9IGF3YWl0IGFsbFJlamVjdGVkKCBmaWVsZENhbGxiYWNrcyApO1xyXG5cclxuXHRmb3IgKCBjb25zdCBmaWxlQ3VycmVudCBvZiBjdXJyZW50ICkge1xyXG5cdFx0Y29uc3QgZmlsZU5vZGUgPSBjYWxsYWJsZS5nZXRGaWxlTm9kZSggZmlsZUN1cnJlbnQubmFtZSApO1xyXG5cclxuXHRcdGNvbnN0IG1hcmtlciA9IGZpbGVOb2RlLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1pbnZhbGlkLW1hcmtlcicsXHJcblx0XHQpO1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge3sgZmlsZSwgcmVqZWN0ZWQgfX1cclxuXHRcdCAqL1xyXG5cdFx0Y29uc3QgWyBpbnZhbGlkUGFydCA9IHt9IF0gPSByZXN1bHRzLmZpbHRlcihcclxuXHRcdFx0KCB7IGZpbGUgfSApID0+IGZpbGUgPT09IGZpbGVDdXJyZW50LFxyXG5cdFx0KTtcclxuXHJcblx0XHRtYXJrZXIuc3R5bGUuZGlzcGxheSA9IGludmFsaWRQYXJ0Py5yZWplY3RlZD8ubGVuZ3RoXHJcblx0XHQgICAgICAgICAgICAgICAgICAgICAgID8gJ2Jsb2NrJ1xyXG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICA6ICdub25lJztcclxuXHJcblx0XHRtYXJrZXIudGl0bGUgPSBpbnZhbGlkUGFydD8ucmVqZWN0ZWQ/Lmxlbmd0aFxyXG5cdFx0ICAgICAgICAgICAgICAgPyBpbnZhbGlkUGFydD8ucmVqZWN0ZWRbIDAgXS5nZXRNZXNzYWdlKClcclxuXHRcdCAgICAgICAgICAgICAgIDogJyc7XHJcblxyXG5cdH1cclxuXHJcblx0cmV0dXJuIEJvb2xlYW4oIHJlc3VsdHMubGVuZ3RoIClcclxuXHQgICAgICAgPyBQcm9taXNlLnJlamVjdCggJ3ZhbGlkYXRlIGlzIHdyb25nJyApXHJcblx0ICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVGaWxlUmVzdHJpY3Rpb247IiwiY29uc3Qge1xyXG5cdCAgICAgIEZpbHRlcixcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcbmNvbnN0IHtcclxuXHQgICAgICBLYl9Jbl9CeXRlcyxcclxuXHQgICAgICBNYl9Jbl9CeXRlcyxcclxuXHQgICAgICBHYl9Jbl9CeXRlcyxcclxuXHQgICAgICBUYl9Jbl9CeXRlcyxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQ29uc3Q7XHJcbmNvbnN0IHtcclxuXHQgICAgICBnZXRMYW5ndWFnZSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5jb25zdCB7XHJcblx0ICAgICAgX3gsXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qgc3ltYm9scyA9IHtcclxuXHRbIF94KCAnVEInLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiBUYl9Jbl9CeXRlcyxcclxuXHRbIF94KCAnR0InLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiBHYl9Jbl9CeXRlcyxcclxuXHRbIF94KCAnTUInLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiBNYl9Jbl9CeXRlcyxcclxuXHRbIF94KCAnS0InLCAndW5pdCBzeW1ib2wnLCAnamV0LWZvcm0tYnVpbGRlcicgKSBdOiBLYl9Jbl9CeXRlcyxcclxuXHRbIF94KCAnQicsICd1bml0IHN5bWJvbCcsICdqZXQtZm9ybS1idWlsZGVyJyApIF06IDEsXHJcbn07XHJcblxyXG5jb25zdCBsYW5nID0gZ2V0TGFuZ3VhZ2UoKTtcclxuXHJcbmZ1bmN0aW9uIFNpemVGb3JtYXRGaWx0ZXIoKSB7XHJcblx0RmlsdGVyLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5nZXRTbHVnID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuICdzaXplRm9ybWF0JztcclxuXHR9O1xyXG5cdHRoaXMuYXBwbHkgICA9IGZ1bmN0aW9uICggdmFsdWUgKSB7XHJcblx0XHR2YWx1ZSA9ICt2YWx1ZTtcclxuXHJcblx0XHRpZiAoIE51bWJlci5pc05hTiggdmFsdWUgKSB8fCAwID09PSB2YWx1ZSApIHtcclxuXHRcdFx0cmV0dXJuICcwIEInO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIGNvbnN0IFsgbmFtZSwgc2l6ZSBdIG9mIE9iamVjdC5lbnRyaWVzKCBzeW1ib2xzICkgKSB7XHJcblx0XHRcdGlmICggdmFsdWUgPCBzaXplICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhbHVlID0gKFxyXG5cdFx0XHRcdHZhbHVlIC8gc2l6ZVxyXG5cdFx0XHQpLnRvRml4ZWQoIDIgKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1hdHRlZCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCggbGFuZyApLmZvcm1hdCggdmFsdWUgKTtcclxuXHJcblx0XHRcdHJldHVybiBmb3JtYXR0ZWQgKyAnICcgKyBuYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAnMCBCJztcclxuXHR9O1xyXG59XHJcblxyXG5TaXplRm9ybWF0RmlsdGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEZpbHRlci5wcm90b3R5cGUgKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpemVGb3JtYXRGaWx0ZXI7IiwiaW1wb3J0IEZpbGVTaXplUmVzdHJpY3Rpb24gZnJvbSAnLi9GaWxlU2l6ZVJlc3RyaWN0aW9uJztcclxuaW1wb3J0IEZpbGVFeHRlbnNpb25SZXN0cmljdGlvbiBmcm9tICcuL0ZpbGVFeHRlbnNpb25SZXN0cmljdGlvbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYXBwbHlGaWx0ZXJzLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IGdldFNpbmdsZUZpbGVSZXN0cmljdGlvbnMgPSAoKSA9PiBhcHBseUZpbHRlcnMoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZmlsZScsXHJcblx0W1xyXG5cdFx0RmlsZVNpemVSZXN0cmljdGlvbixcclxuXHRcdEZpbGVFeHRlbnNpb25SZXN0cmljdGlvbixcclxuXHRdLFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEB0eXBlIHtCYXNlRmlsZVJlc3RyaWN0aW9uW119XHJcbiAqL1xyXG5sZXQgcmVzdHJpY3Rpb25zID0gW107XHJcblxyXG4vKipcclxuICogQHBhcmFtIHJlcG9ydGluZyB7QWR2YW5jZWRSZXBvcnRpbmd9XHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRGaWxlUmVzdHJpY3Rpb25zKCByZXBvcnRpbmcgKSB7XHJcblx0aWYgKCAhcmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdHJlc3RyaWN0aW9ucyA9IGdldFNpbmdsZUZpbGVSZXN0cmljdGlvbnMoKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHJlc3BvbnNlID0gW107XHJcblxyXG5cdGZvciAoIGNvbnN0IHJlc3RyaWN0aW9uIG9mIHJlc3RyaWN0aW9ucyApIHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge0Jhc2VGaWxlUmVzdHJpY3Rpb259XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGN1cnJlbnQgPSBuZXcgcmVzdHJpY3Rpb24oKTtcclxuXHJcblx0XHRpZiAoICFjdXJyZW50LmlzU3VwcG9ydGVkKCByZXBvcnRpbmcuZ2V0Tm9kZSgpLCByZXBvcnRpbmcgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y3VycmVudC5zZXRSZXBvcnRpbmcoIHJlcG9ydGluZyApO1xyXG5cdFx0Y3VycmVudC5vblJlYWR5KCk7XHJcblxyXG5cdFx0cmVzcG9uc2UucHVzaCggY3VycmVudCApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3BvbnNlO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHtcclxuXHRnZXRTaW5nbGVGaWxlUmVzdHJpY3Rpb25zLFxyXG5cdGdldEZpbGVSZXN0cmljdGlvbnMsXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWF4RmlsZXNSZXN0cmljdGlvbiBmcm9tICcuL01heEZpbGVzUmVzdHJpY3Rpb24nO1xyXG5pbXBvcnQgU2luZ2xlRmlsZVJlc3RyaWN0aW9uIGZyb20gJy4vU2luZ2xlRmlsZVJlc3RyaWN0aW9uJztcclxuaW1wb3J0IFNpemVGb3JtYXRGaWx0ZXIgZnJvbSAnLi9TaXplRm9ybWF0RmlsdGVyJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCByZXN0cmljdGlvbnMgKSB7XHJcblx0XHRyZXN0cmljdGlvbnMgPSBbXHJcblx0XHRcdE1heEZpbGVzUmVzdHJpY3Rpb24sXHJcblx0XHRcdFNpbmdsZUZpbGVSZXN0cmljdGlvbixcclxuXHRcdFx0Li4ucmVzdHJpY3Rpb25zLFxyXG5cdFx0XTtcclxuXHJcblx0XHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5maWx0ZXJzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBmaWx0ZXJzICkge1xyXG5cdFx0ZmlsdGVycy5wdXNoKCBTaXplRm9ybWF0RmlsdGVyICk7XHJcblxyXG5cdFx0cmV0dXJuIGZpbHRlcnM7XHJcblx0fSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=