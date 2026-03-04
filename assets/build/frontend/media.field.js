/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/media.field/functions.js":
/*!*******************************************!*\
  !*** ./frontend/media.field/functions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendNodes: () => (/* binding */ appendNodes),
/* harmony export */   createFile: () => (/* binding */ createFile),
/* harmony export */   createFileList: () => (/* binding */ createFileList),
/* harmony export */   isFile: () => (/* binding */ isFile)
/* harmony export */ });
function appendNodes(container, nodes) {
  /**
   * We use querySelectorAll because we need a static set of elements.
   * If you apply the .children or .childNodes property,
   * they will always return the list of currently available elements.
   */
  const children = container.querySelectorAll('.jet-form-builder-file-upload__file');
  for (const child of children) {
    if (nodes.some(node => node.isEqualNode(child))) {
      continue;
    }
    child.remove();
  }
  for (const index in nodes) {
    if (!nodes.hasOwnProperty(index)) {
      continue;
    }
    const node = nodes[index];
    if (node.isConnected) {
      continue;
    }
    container.appendChild(node);
  }
}

/**
 * @param  inputFileArray
 * @return {FileList}
 */
function createFileList(inputFileArray) {
  const transfer = new DataTransfer();
  for (const file of inputFileArray) {
    transfer.items.add(file);
  }
  return transfer.files;
}
function createFile(blob, fileName) {
  return new File([blob], fileName, blob);
}

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
function isFile(node) {
  if (node.classList.contains('jet-form-builder-file-upload__input')) {
    return 'file' === node.type;
  }
  return false;
}


/***/ }),

/***/ "./frontend/media.field/input.js":
/*!***************************************!*\
  !*** ./frontend/media.field/input.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/media.field/functions.js");

const {
  InputData
} = window.JetFormBuilderAbstract;
function FileData() {
  InputData.call(this);
  this.isMultiple = false;
  this.prevFiles = null;
  this.template = null;
  this.previewsContainer = null;
  this.wrapper = null;
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isFile)(node);
  };
  this.addListeners = function () {
    const [node] = this.nodes;
    node.addEventListener('change', event => {
      var _this$prevFiles;
      this.value.current = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createFileList)(this.isMultiple ? [...((_this$prevFiles = this.prevFiles) !== null && _this$prevFiles !== void 0 ? _this$prevFiles : []), ...event.target.files] : [...event.target.files]);
    });
  };
  this.setNode = function (node) {
    InputData.prototype.setNode.call(this, node);
    this.isMultiple = node.multiple;
    this.wrapper = node.closest('.jet-form-builder-file-upload');
    this.previewsContainer = this.wrapper.querySelector('.jet-form-builder-file-upload__files');
    this.template = this.wrapper.closest('.field-type-media-field').querySelector('.jet-form-builder__preview-template');
  };
  this.setValue = function () {
    this.callable.loadFiles();
  };
  this.initNotifyValue = () => {};
  this.reQueryValue = () => {};
}
FileData.prototype = Object.create(InputData.prototype);

/**
 * @type {HTMLElement}
 */
FileData.prototype.wrapper = null;
/**
 * @type {HTMLElement}
 */
FileData.prototype.previewsContainer = null;
/**
 * @type {HTMLTemplateElement}
 */
FileData.prototype.template = null;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileData);

/***/ }),

/***/ "./frontend/media.field/signal.js":
/*!****************************************!*\
  !*** ./frontend/media.field/signal.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/media.field/functions.js");

const {
  BaseSignal
} = window.JetFormBuilderAbstract;

/**
 * @property {FileData} input Related input
 */
function SignalFile() {
  BaseSignal.call(this);
  this.lock.current = true;
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isFile)(node);
  };
  this.runSignal = function () {
    const [node] = this.input.nodes;
    const previews = [];
    const {
      current
    } = this.input.value;
    const files = uniqueByName(current !== null && current !== void 0 ? current : []);
    for (const file of files) {
      previews.push(this.getPreview(file));
    }
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendNodes)(this.input.previewsContainer, previews);
    node.files = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createFileList)(files);
    this.input.prevFiles = files;
    this.sortable();
  };
}
SignalFile.prototype = Object.create(BaseSignal.prototype);
SignalFile.prototype.loadFiles = function () {
  const files = this.input.previewsContainer.querySelectorAll('.jet-form-builder-file-upload__file');
  const urls = [];
  for (const preview of files) {
    this.addRemoveHandler(preview);
    const url = preview.dataset.file;
    const removeNode = preview.querySelector('.jet-form-builder-file-upload__file-remove');
    const {
      fileName
    } = removeNode.dataset;
    urls.push([url, fileName]);
  }
  if (!urls.length) {
    this.lock.current = false;
    return;
  }
  Promise.allSettled(urls.map(([url, fileName]) => new Promise((resolve, reject) => {
    fetch(url).then(response => response.blob()).then(blob => resolve((0,_functions__WEBPACK_IMPORTED_MODULE_0__.createFile)(blob, fileName))).catch(reject);
  }))).then(values => {
    const newFiles = values.map(({
      value
    }) => value);
    const unique = uniqueByName(newFiles);
    this.lock.current = false;
    this.input.silenceSet((0,_functions__WEBPACK_IMPORTED_MODULE_0__.createFileList)(unique));
  }).catch(() => {
    this.lock.current = false;
  });
};
SignalFile.prototype.sortable = function () {
  jQuery(this.input.previewsContainer).unbind();
  jQuery(this.input.previewsContainer).sortable({
    items: '.jet-form-builder-file-upload__file',
    forcePlaceholderSize: true
  }).bind('sortupdate', () => this.onSortCallback());
};
SignalFile.prototype.onSortCallback = function () {
  const transfer = new DataTransfer();
  const [input] = this.input.nodes;
  const removeButtons = this.input.previewsContainer.querySelectorAll('.jet-form-builder-file-upload__file-remove');
  for (const removeButton of removeButtons) {
    const {
      fileName
    } = removeButton.dataset;
    for (const file of input.files) {
      // eslint-disable-next-line max-depth
      if (file.name !== fileName) {
        continue;
      }
      transfer.items.add(file);
    }
  }
  this.input.value.current = transfer.files;
};
SignalFile.prototype.addRemoveHandler = function (preview) {
  preview.querySelector('.jet-form-builder-file-upload__file-remove').addEventListener('click', this.removeFile.bind(this));
};
SignalFile.prototype.getPreview = function (file) {
  const removeButton = this.input.previewsContainer.querySelector(`[data-file-name="${file.name}"]`);
  if (!removeButton) {
    const preview = this.createPreview(file);
    this.addRemoveHandler(preview);
    return preview;
  }
  return removeButton.closest('.jet-form-builder-file-upload__file');
};
SignalFile.prototype.createPreview = function (file) {
  const url = URL.createObjectURL(file);
  let {
    innerHTML
  } = this.input.template;
  innerHTML = innerHTML.replace('%file_url%', url);
  innerHTML = innerHTML.replace('%file_name%', file.name);
  const wrapper = document.createElement('template');
  wrapper.innerHTML = innerHTML;
  const node = wrapper.content.firstChild;
  if (/^image\//.test(file.type)) {
    const image = document.createElement('img');
    image.src = url;
    image.alt = file.name;
    node.prepend(image);
  }
  return node;
};
SignalFile.prototype.removeFile = function ({
  target
}) {
  const className = '.jet-form-builder-file-upload__file-remove';
  const {
    value
  } = this.input;
  if (!target.matches(className)) {
    target = target.closest(className);
  }
  const {
    fileName
  } = target.dataset;
  const dt = new DataTransfer();
  for (const file of value.current) {
    if (fileName !== file.name) {
      dt.items.add(file);
    }
  }
  value.current = dt.files;
};

/**
 * @param  fileName
 * @return {Element}
 */
SignalFile.prototype.getFileNode = function (fileName) {
  const attr = `data-file-name="${fileName}"`;
  const removeBtn = this.input.previewsContainer.querySelector(`.jet-form-builder-file-upload__file-remove[${attr}]`);
  return removeBtn.closest('.jet-form-builder-file-upload__file');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalFile);
function uniqueByName(files) {
  const seen = new Set();
  const result = [];
  for (const file of files) {
    if (seen.has(file.name)) {
      continue;
    }
    seen.add(file.name);
    result.push(file);
  }
  return result;
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
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./frontend/media.field/main.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/media.field/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/media.field/signal.js");


const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/media-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/media-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXBwZW5kTm9kZXMoIGNvbnRhaW5lciwgbm9kZXMgKSB7XHJcblx0LyoqXHJcblx0ICogV2UgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgYmVjYXVzZSB3ZSBuZWVkIGEgc3RhdGljIHNldCBvZiBlbGVtZW50cy5cclxuXHQgKiBJZiB5b3UgYXBwbHkgdGhlIC5jaGlsZHJlbiBvciAuY2hpbGROb2RlcyBwcm9wZXJ0eSxcclxuXHQgKiB0aGV5IHdpbGwgYWx3YXlzIHJldHVybiB0aGUgbGlzdCBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGVsZW1lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxyXG5cdCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuICkge1xyXG5cdFx0aWYgKCBub2Rlcy5zb21lKCBub2RlID0+IG5vZGUuaXNFcXVhbE5vZGUoIGNoaWxkICkgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjaGlsZC5yZW1vdmUoKTtcclxuXHR9XHJcblx0Zm9yICggY29uc3QgaW5kZXggaW4gbm9kZXMgKSB7XHJcblx0XHRpZiAoICFub2Rlcy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjb25zdCBub2RlID0gbm9kZXNbIGluZGV4IF07XHJcblxyXG5cdFx0aWYgKCBub2RlLmlzQ29ubmVjdGVkICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIG5vZGUgKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIGlucHV0RmlsZUFycmF5XHJcbiAqIEByZXR1cm4ge0ZpbGVMaXN0fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRmlsZUxpc3QoIGlucHV0RmlsZUFycmF5ICkge1xyXG5cdGNvbnN0IHRyYW5zZmVyID0gbmV3IERhdGFUcmFuc2ZlcigpO1xyXG5cclxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIGlucHV0RmlsZUFycmF5ICkge1xyXG5cdFx0dHJhbnNmZXIuaXRlbXMuYWRkKCBmaWxlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJhbnNmZXIuZmlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGUoIGJsb2IsIGZpbGVOYW1lICkge1xyXG5cdHJldHVybiBuZXcgRmlsZSggWyBibG9iIF0sIGZpbGVOYW1lLCBibG9iICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGaWxlKCBub2RlICkge1xyXG5cdGlmICggbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2lucHV0JyApICkge1xyXG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgeyBhcHBlbmROb2RlcywgY3JlYXRlRmlsZUxpc3QsIGlzRmlsZSwgY3JlYXRlRmlsZSB9OyIsImltcG9ydCB7IGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7IElucHV0RGF0YSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBGaWxlRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzTXVsdGlwbGUgICAgICAgID0gZmFsc2U7XHJcblx0dGhpcy5wcmV2RmlsZXMgICAgICAgICA9IG51bGw7XHJcblx0dGhpcy50ZW1wbGF0ZSAgICAgICAgICA9IG51bGw7XHJcblx0dGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IG51bGw7XHJcblx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG51bGw7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNGaWxlKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBjcmVhdGVGaWxlTGlzdChcclxuXHRcdFx0XHR0aGlzLmlzTXVsdGlwbGVcclxuXHRcdFx0XHQ/IFsgLi4udGhpcy5wcmV2RmlsZXMgPz8gW10sIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdXHJcblx0XHRcdFx0OiBbIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdLFxyXG5cdFx0XHQpO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cclxuXHRcdHRoaXMuaXNNdWx0aXBsZSA9IG5vZGUubXVsdGlwbGU7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG5vZGUuY2xvc2VzdChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkJyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLnByZXZpZXdzQ29udGFpbmVyID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZXMnLFxyXG5cdFx0KTtcclxuXHRcdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSB0aGlzLndyYXBwZXIuXHJcblx0XHRcdGNsb3Nlc3QoICcuZmllbGQtdHlwZS1tZWRpYS1maWVsZCcgKS5cclxuXHRcdFx0cXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyX19wcmV2aWV3LXRlbXBsYXRlJyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmNhbGxhYmxlLmxvYWRGaWxlcygpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlID0gKCkgPT4ge307XHJcblxyXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XHJcbn1cclxuXHJcbkZpbGVEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5GaWxlRGF0YS5wcm90b3R5cGUud3JhcHBlciA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5GaWxlRGF0YS5wcm90b3R5cGUucHJldmlld3NDb250YWluZXIgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9XHJcbiAqL1xyXG5GaWxlRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZURhdGE7IiwiaW1wb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGUsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7IEJhc2VTaWduYWwgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7RmlsZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbEZpbGUoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMubG9jay5jdXJyZW50ID0gdHJ1ZTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcclxuXHRcdHJldHVybiBpc0ZpbGUoIG5vZGUgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdICAgID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHRcdGNvbnN0IHByZXZpZXdzICAgID0gW107XHJcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuaW5wdXQudmFsdWU7XHJcblx0XHRjb25zdCBmaWxlcyAgICAgICA9IHVuaXF1ZUJ5TmFtZSggY3VycmVudCA/PyBbXSApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XHJcblx0XHRcdHByZXZpZXdzLnB1c2goIHRoaXMuZ2V0UHJldmlldyggZmlsZSApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0YXBwZW5kTm9kZXMoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIsIHByZXZpZXdzICk7XHJcblxyXG5cdFx0bm9kZS5maWxlcyAgICAgICAgICAgPSBjcmVhdGVGaWxlTGlzdCggZmlsZXMgKTtcclxuXHRcdHRoaXMuaW5wdXQucHJldkZpbGVzID0gZmlsZXM7XHJcblxyXG5cdFx0dGhpcy5zb3J0YWJsZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmxvYWRGaWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBmaWxlcyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXHJcblx0KTtcclxuXHJcblx0Y29uc3QgdXJscyA9IFtdO1xyXG5cclxuXHRmb3IgKCBjb25zdCBwcmV2aWV3IG9mIGZpbGVzICkge1xyXG5cdFx0dGhpcy5hZGRSZW1vdmVIYW5kbGVyKCBwcmV2aWV3ICk7XHJcblxyXG5cdFx0Y29uc3QgdXJsICAgICAgICAgID0gcHJldmlldy5kYXRhc2V0LmZpbGU7XHJcblx0XHRjb25zdCByZW1vdmVOb2RlICAgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHJlbW92ZU5vZGUuZGF0YXNldDtcclxuXHJcblx0XHR1cmxzLnB1c2goIFsgdXJsLCBmaWxlTmFtZSBdICk7XHJcblx0fVxyXG5cclxuXHRpZiAoICF1cmxzLmxlbmd0aCApIHtcclxuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0UHJvbWlzZS5hbGxTZXR0bGVkKCB1cmxzLm1hcCggKCBbIHVybCwgZmlsZU5hbWUgXSApID0+IChcclxuXHRcdG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcclxuXHRcdFx0ZmV0Y2goIHVybCApLnRoZW4oXHJcblx0XHRcdFx0cmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpLFxyXG5cdFx0XHQpLnRoZW4oXHJcblx0XHRcdFx0YmxvYiA9PiByZXNvbHZlKCBjcmVhdGVGaWxlKCBibG9iLCBmaWxlTmFtZSApICksXHJcblx0XHRcdCkuY2F0Y2goIHJlamVjdCApO1xyXG5cdFx0fSApXHJcblx0KSApICkudGhlbiggdmFsdWVzID0+IHtcclxuXHRcdGNvbnN0IG5ld0ZpbGVzID0gdmFsdWVzLm1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApO1xyXG5cclxuXHJcblx0XHRjb25zdCB1bmlxdWUgICA9IHVuaXF1ZUJ5TmFtZSggbmV3RmlsZXMgKTtcclxuXHJcblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pbnB1dC5zaWxlbmNlU2V0KCBjcmVhdGVGaWxlTGlzdCggdW5pcXVlICkgKTtcclxuXHR9ICkuY2F0Y2goICgpID0+IHtcclxuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XHJcblx0fSApO1xyXG59O1xyXG5cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUuc29ydGFibGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0alF1ZXJ5KCB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyICkudW5iaW5kKCk7XHJcblxyXG5cdGpRdWVyeSggdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lciApLnNvcnRhYmxlKCB7XHJcblx0XHRpdGVtczogJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcclxuXHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxyXG5cdH0gKS5iaW5kKCAnc29ydHVwZGF0ZScsICgpID0+IHRoaXMub25Tb3J0Q2FsbGJhY2soKSApO1xyXG59O1xyXG5cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUub25Tb3J0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgdHJhbnNmZXIgID0gbmV3IERhdGFUcmFuc2ZlcigpO1xyXG5cdGNvbnN0IFsgaW5wdXQgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdGNvbnN0IHJlbW92ZUJ1dHRvbnMgPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcclxuXHQpO1xyXG5cclxuXHRmb3IgKCBjb25zdCByZW1vdmVCdXR0b24gb2YgcmVtb3ZlQnV0dG9ucyApIHtcclxuXHRcdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHJlbW92ZUJ1dHRvbi5kYXRhc2V0O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgaW5wdXQuZmlsZXMgKSB7XHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcclxuXHRcdFx0aWYgKCBmaWxlLm5hbWUgIT09IGZpbGVOYW1lICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0cmFuc2Zlci5pdGVtcy5hZGQoIGZpbGUgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IHRyYW5zZmVyLmZpbGVzO1xyXG59O1xyXG5cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUuYWRkUmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uICggcHJldmlldyApIHtcclxuXHRwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcclxuXHQpLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHQnY2xpY2snLFxyXG5cdFx0dGhpcy5yZW1vdmVGaWxlLmJpbmQoIHRoaXMgKSxcclxuXHQpO1xyXG59O1xyXG5cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUuZ2V0UHJldmlldyA9IGZ1bmN0aW9uICggZmlsZSApIHtcclxuXHRjb25zdCByZW1vdmVCdXR0b24gPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRgW2RhdGEtZmlsZS1uYW1lPVwiJHsgZmlsZS5uYW1lIH1cIl1gLFxyXG5cdCk7XHJcblxyXG5cdGlmICggIXJlbW92ZUJ1dHRvbiApIHtcclxuXHRcdGNvbnN0IHByZXZpZXcgPSB0aGlzLmNyZWF0ZVByZXZpZXcoIGZpbGUgKTtcclxuXHRcdHRoaXMuYWRkUmVtb3ZlSGFuZGxlciggcHJldmlldyApO1xyXG5cclxuXHRcdHJldHVybiBwcmV2aWV3O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlbW92ZUJ1dHRvbi5jbG9zZXN0KFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcclxuXHQpO1xyXG59O1xyXG5cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUuY3JlYXRlUHJldmlldyA9IGZ1bmN0aW9uICggZmlsZSApIHtcclxuXHRjb25zdCB1cmwgICAgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGZpbGUgKTtcclxuXHRsZXQgeyBpbm5lckhUTUwgfSA9IHRoaXMuaW5wdXQudGVtcGxhdGU7XHJcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX3VybCUnLCB1cmwgKTtcclxuXHRpbm5lckhUTUwgICAgICAgICA9IGlubmVySFRNTC5yZXBsYWNlKCAnJWZpbGVfbmFtZSUnLCBmaWxlLm5hbWUgKTtcclxuXHJcblx0Y29uc3Qgd3JhcHBlciAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XHJcblx0d3JhcHBlci5pbm5lckhUTUwgPSBpbm5lckhUTUw7XHJcblxyXG5cdGNvbnN0IG5vZGUgPSB3cmFwcGVyLmNvbnRlbnQuZmlyc3RDaGlsZDtcclxuXHJcblx0aWYgKCAvXmltYWdlXFwvLy50ZXN0KCBmaWxlLnR5cGUgKSApIHtcclxuXHRcdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2ltZycgKTtcclxuXHRcdGltYWdlLnNyYyAgID0gdXJsO1xyXG5cdFx0aW1hZ2UuYWx0ICAgPSBmaWxlLm5hbWU7XHJcblxyXG5cdFx0bm9kZS5wcmVwZW5kKCBpbWFnZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIG5vZGU7XHJcbn07XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5yZW1vdmVGaWxlID0gZnVuY3Rpb24gKCB7IHRhcmdldCB9ICkge1xyXG5cdGNvbnN0IGNsYXNzTmFtZSA9ICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnO1xyXG5cdGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuaW5wdXQ7XHJcblxyXG5cdGlmICggIXRhcmdldC5tYXRjaGVzKCBjbGFzc05hbWUgKSApIHtcclxuXHRcdHRhcmdldCA9IHRhcmdldC5jbG9zZXN0KCBjbGFzc05hbWUgKTtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHRhcmdldC5kYXRhc2V0O1xyXG5cclxuXHRjb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuXHJcblx0Zm9yICggY29uc3QgZmlsZSBvZiB2YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0aWYgKCBmaWxlTmFtZSAhPT0gZmlsZS5uYW1lICkge1xyXG5cdFx0XHRkdC5pdGVtcy5hZGQoIGZpbGUgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZhbHVlLmN1cnJlbnQgPSBkdC5maWxlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIGZpbGVOYW1lXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAqL1xyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5nZXRGaWxlTm9kZSA9IGZ1bmN0aW9uICggZmlsZU5hbWUgKSB7XHJcblx0Y29uc3QgYXR0ciA9IGBkYXRhLWZpbGUtbmFtZT1cIiR7IGZpbGVOYW1lIH1cImA7XHJcblxyXG5cdGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuXHRcdGAuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmVbJHsgYXR0ciB9XWAsXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHJlbW92ZUJ0bi5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbEZpbGU7XHJcblxyXG5mdW5jdGlvbiB1bmlxdWVCeU5hbWUoIGZpbGVzICkge1xyXG5cdGNvbnN0IHNlZW4gICA9IG5ldyBTZXQoKTtcclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgZmlsZSBvZiBmaWxlcyApIHtcclxuXHRcdGlmICggc2Vlbi5oYXMoIGZpbGUubmFtZSApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHNlZW4uYWRkKCBmaWxlLm5hbWUgKTtcclxuXHRcdHJlc3VsdC5wdXNoKCBmaWxlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRmlsZURhdGEgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTaWduYWxGaWxlIGZyb20gJy4vc2lnbmFsJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIEZpbGVEYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsRmlsZSwgLi4uc2lnbmFscyBdO1xyXG5cclxuXHRcdHJldHVybiBzaWduYWxzO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9