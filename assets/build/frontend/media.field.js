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
  return 'file' === node.type;
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
    const files = current !== null && current !== void 0 ? current : [];
    for (const file of files) {
      previews.push(this.getPreview(file));
    }
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.appendNodes)(this.input.previewsContainer, previews);
    node.files = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createFileList)([...files]);
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
    this.lock.current = false;
    this.input.silenceSet((0,_functions__WEBPACK_IMPORTED_MODULE_0__.createFileList)(newFiles));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL2lucHV0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFwcGVuZE5vZGVzKCBjb250YWluZXIsIG5vZGVzICkge1xuXHQvKipcblx0ICogV2UgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgYmVjYXVzZSB3ZSBuZWVkIGEgc3RhdGljIHNldCBvZiBlbGVtZW50cy5cblx0ICogSWYgeW91IGFwcGx5IHRoZSAuY2hpbGRyZW4gb3IgLmNoaWxkTm9kZXMgcHJvcGVydHksXG5cdCAqIHRoZXkgd2lsbCBhbHdheXMgcmV0dXJuIHRoZSBsaXN0IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgZWxlbWVudHMuXG5cdCAqL1xuXHRjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXG5cdCk7XG5cblx0Zm9yICggY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4gKSB7XG5cdFx0aWYgKCBub2Rlcy5zb21lKCBub2RlID0+IG5vZGUuaXNFcXVhbE5vZGUoIGNoaWxkICkgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjaGlsZC5yZW1vdmUoKTtcblx0fVxuXHRmb3IgKCBjb25zdCBpbmRleCBpbiBub2RlcyApIHtcblx0XHRpZiAoICFub2Rlcy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBub2RlID0gbm9kZXNbIGluZGV4IF07XG5cblx0XHRpZiAoIG5vZGUuaXNDb25uZWN0ZWQgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIG5vZGUgKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRGaWxlQXJyYXlcbiAqIEByZXR1cm4ge0ZpbGVMaXN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVGaWxlTGlzdCggaW5wdXRGaWxlQXJyYXkgKSB7XG5cdGNvbnN0IHRyYW5zZmVyID0gbmV3IERhdGFUcmFuc2ZlcigpO1xuXG5cdGZvciAoIGNvbnN0IGZpbGUgb2YgaW5wdXRGaWxlQXJyYXkgKSB7XG5cdFx0dHJhbnNmZXIuaXRlbXMuYWRkKCBmaWxlICk7XG5cdH1cblxuXHRyZXR1cm4gdHJhbnNmZXIuZmlsZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbGUoIGJsb2IsIGZpbGVOYW1lICkge1xuXHRyZXR1cm4gbmV3IEZpbGUoIFsgYmxvYiBdLCBmaWxlTmFtZSwgYmxvYiApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0ZpbGUoIG5vZGUgKSB7XG5cdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZTtcbn1cblxuZXhwb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUsIGNyZWF0ZUZpbGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7IElucHV0RGF0YSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIEZpbGVEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNNdWx0aXBsZSAgICAgICAgPSBmYWxzZTtcblx0dGhpcy5wcmV2RmlsZXMgICAgICAgICA9IG51bGw7XG5cdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSBudWxsO1xuXHR0aGlzLnByZXZpZXdzQ29udGFpbmVyID0gbnVsbDtcblx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG51bGw7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNGaWxlKCBub2RlICk7XG5cdH07XG5cblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gY3JlYXRlRmlsZUxpc3QoXG5cdFx0XHRcdHRoaXMuaXNNdWx0aXBsZVxuXHRcdFx0XHQ/IFsgLi4udGhpcy5wcmV2RmlsZXMgPz8gW10sIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdXG5cdFx0XHRcdDogWyAuLi5ldmVudC50YXJnZXQuZmlsZXMgXSxcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9O1xuXHR0aGlzLnNldE5vZGUgICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5pc011bHRpcGxlID0gbm9kZS5tdWx0aXBsZTtcblxuXHRcdHRoaXMud3JhcHBlciAgICAgICAgICAgPSBub2RlLmNsb3Nlc3QoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWQnLFxuXHRcdCk7XG5cdFx0dGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlcycsXG5cdFx0KTtcblx0XHR0aGlzLnRlbXBsYXRlICAgICAgICAgID0gdGhpcy53cmFwcGVyLlxuXHRcdFx0Y2xvc2VzdCggJy5maWVsZC10eXBlLW1lZGlhLWZpZWxkJyApLlxuXHRcdFx0cXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyX19wcmV2aWV3LXRlbXBsYXRlJyApO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jYWxsYWJsZS5sb2FkRmlsZXMoKTtcblx0fTtcblxuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSA9ICgpID0+IHt9O1xuXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XG59XG5cbkZpbGVEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gKi9cbkZpbGVEYXRhLnByb3RvdHlwZS53cmFwcGVyID0gbnVsbDtcbi8qKlxuICogQHR5cGUge0hUTUxFbGVtZW50fVxuICovXG5GaWxlRGF0YS5wcm90b3R5cGUucHJldmlld3NDb250YWluZXIgPSBudWxsO1xuLyoqXG4gKiBAdHlwZSB7SFRNTFRlbXBsYXRlRWxlbWVudH1cbiAqL1xuRmlsZURhdGEucHJvdG90eXBlLnRlbXBsYXRlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZURhdGE7IiwiaW1wb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGUsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHsgQmFzZVNpZ25hbCB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IHtGaWxlRGF0YX0gaW5wdXQgUmVsYXRlZCBpbnB1dFxuICovXG5mdW5jdGlvbiBTaWduYWxGaWxlKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmxvY2suY3VycmVudCA9IHRydWU7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNGaWxlKCBub2RlICk7XG5cdH07XG5cblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gICAgPSB0aGlzLmlucHV0Lm5vZGVzO1xuXHRcdGNvbnN0IHByZXZpZXdzICAgID0gW107XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IGZpbGVzICAgICAgID0gY3VycmVudCA/PyBbXTtcblxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XG5cdFx0XHRwcmV2aWV3cy5wdXNoKCB0aGlzLmdldFByZXZpZXcoIGZpbGUgKSApO1xuXHRcdH1cblxuXHRcdGFwcGVuZE5vZGVzKCB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLCBwcmV2aWV3cyApO1xuXG5cdFx0bm9kZS5maWxlcyAgICAgICAgICAgPSBjcmVhdGVGaWxlTGlzdCggWyAuLi5maWxlcyBdICk7XG5cdFx0dGhpcy5pbnB1dC5wcmV2RmlsZXMgPSBmaWxlcztcblxuXHRcdHRoaXMuc29ydGFibGUoKTtcblx0fTtcbn1cblxuU2lnbmFsRmlsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5TaWduYWxGaWxlLnByb3RvdHlwZS5sb2FkRmlsZXMgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGZpbGVzID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXG5cdCk7XG5cblx0Y29uc3QgdXJscyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IHByZXZpZXcgb2YgZmlsZXMgKSB7XG5cdFx0dGhpcy5hZGRSZW1vdmVIYW5kbGVyKCBwcmV2aWV3ICk7XG5cblx0XHRjb25zdCB1cmwgICAgICAgICAgPSBwcmV2aWV3LmRhdGFzZXQuZmlsZTtcblx0XHRjb25zdCByZW1vdmVOb2RlICAgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcblx0XHQpO1xuXHRcdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHJlbW92ZU5vZGUuZGF0YXNldDtcblxuXHRcdHVybHMucHVzaCggWyB1cmwsIGZpbGVOYW1lIF0gKTtcblx0fVxuXG5cdGlmICggIXVybHMubGVuZ3RoICkge1xuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRQcm9taXNlLmFsbFNldHRsZWQoIHVybHMubWFwKCAoIFsgdXJsLCBmaWxlTmFtZSBdICkgPT4gKFxuXHRcdG5ldyBQcm9taXNlKCAoIHJlc29sdmUsIHJlamVjdCApID0+IHtcblx0XHRcdGZldGNoKCB1cmwgKS50aGVuKFxuXHRcdFx0XHRyZXNwb25zZSA9PiByZXNwb25zZS5ibG9iKCksXG5cdFx0XHQpLnRoZW4oXG5cdFx0XHRcdGJsb2IgPT4gcmVzb2x2ZSggY3JlYXRlRmlsZSggYmxvYiwgZmlsZU5hbWUgKSApLFxuXHRcdFx0KS5jYXRjaCggcmVqZWN0ICk7XG5cdFx0fSApXG5cdCkgKSApLnRoZW4oIHZhbHVlcyA9PiB7XG5cdFx0Y29uc3QgbmV3RmlsZXMgPSB2YWx1ZXMubWFwKCAoIHsgdmFsdWUgfSApID0+IHZhbHVlICk7XG5cblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaW5wdXQuc2lsZW5jZVNldCggY3JlYXRlRmlsZUxpc3QoIG5ld0ZpbGVzICkgKTtcblx0fSApLmNhdGNoKCAoKSA9PiB7XG5cdFx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcblx0fSApO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuc29ydGFibGUgPSBmdW5jdGlvbiAoKSB7XG5cdGpRdWVyeSggdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lciApLnVuYmluZCgpO1xuXG5cdGpRdWVyeSggdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lciApLnNvcnRhYmxlKCB7XG5cdFx0aXRlbXM6ICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXG5cdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdH0gKS5iaW5kKCAnc29ydHVwZGF0ZScsICgpID0+IHRoaXMub25Tb3J0Q2FsbGJhY2soKSApO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUub25Tb3J0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHRyYW5zZmVyICA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcblx0Y29uc3QgWyBpbnB1dCBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxuXHQpO1xuXG5cdGZvciAoIGNvbnN0IHJlbW92ZUJ1dHRvbiBvZiByZW1vdmVCdXR0b25zICkge1xuXHRcdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHJlbW92ZUJ1dHRvbi5kYXRhc2V0O1xuXG5cdFx0Zm9yICggY29uc3QgZmlsZSBvZiBpbnB1dC5maWxlcyApIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdGlmICggZmlsZS5uYW1lICE9PSBmaWxlTmFtZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRyYW5zZmVyLml0ZW1zLmFkZCggZmlsZSApO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IHRyYW5zZmVyLmZpbGVzO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuYWRkUmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uICggcHJldmlldyApIHtcblx0cHJldmlldy5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxuXHQpLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHR0aGlzLnJlbW92ZUZpbGUuYmluZCggdGhpcyApLFxuXHQpO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuZ2V0UHJldmlldyA9IGZ1bmN0aW9uICggZmlsZSApIHtcblx0Y29uc3QgcmVtb3ZlQnV0dG9uID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuXHRcdGBbZGF0YS1maWxlLW5hbWU9XCIkeyBmaWxlLm5hbWUgfVwiXWAsXG5cdCk7XG5cblx0aWYgKCAhcmVtb3ZlQnV0dG9uICkge1xuXHRcdGNvbnN0IHByZXZpZXcgPSB0aGlzLmNyZWF0ZVByZXZpZXcoIGZpbGUgKTtcblx0XHR0aGlzLmFkZFJlbW92ZUhhbmRsZXIoIHByZXZpZXcgKTtcblxuXHRcdHJldHVybiBwcmV2aWV3O1xuXHR9XG5cblx0cmV0dXJuIHJlbW92ZUJ1dHRvbi5jbG9zZXN0KFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXG5cdCk7XG59O1xuXG5TaWduYWxGaWxlLnByb3RvdHlwZS5jcmVhdGVQcmV2aWV3ID0gZnVuY3Rpb24gKCBmaWxlICkge1xuXHRjb25zdCB1cmwgICAgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGZpbGUgKTtcblx0bGV0IHsgaW5uZXJIVE1MIH0gPSB0aGlzLmlucHV0LnRlbXBsYXRlO1xuXHRpbm5lckhUTUwgICAgICAgICA9IGlubmVySFRNTC5yZXBsYWNlKCAnJWZpbGVfdXJsJScsIHVybCApO1xuXHRpbm5lckhUTUwgICAgICAgICA9IGlubmVySFRNTC5yZXBsYWNlKCAnJWZpbGVfbmFtZSUnLCBmaWxlLm5hbWUgKTtcblxuXHRjb25zdCB3cmFwcGVyICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcblx0d3JhcHBlci5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cblx0Y29uc3Qgbm9kZSA9IHdyYXBwZXIuY29udGVudC5maXJzdENoaWxkO1xuXG5cdGlmICggL15pbWFnZVxcLy8udGVzdCggZmlsZS50eXBlICkgKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW1nJyApO1xuXHRcdGltYWdlLnNyYyAgID0gdXJsO1xuXHRcdGltYWdlLmFsdCAgID0gZmlsZS5uYW1lO1xuXG5cdFx0bm9kZS5wcmVwZW5kKCBpbWFnZSApO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59O1xuXG5TaWduYWxGaWxlLnByb3RvdHlwZS5yZW1vdmVGaWxlID0gZnVuY3Rpb24gKCB7IHRhcmdldCB9ICkge1xuXHRjb25zdCBjbGFzc05hbWUgPSAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJztcblx0Y29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5pbnB1dDtcblxuXHRpZiAoICF0YXJnZXQubWF0Y2hlcyggY2xhc3NOYW1lICkgKSB7XG5cdFx0dGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoIGNsYXNzTmFtZSApO1xuXHR9XG5cblx0Y29uc3QgeyBmaWxlTmFtZSB9ID0gdGFyZ2V0LmRhdGFzZXQ7XG5cblx0Y29uc3QgZHQgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cblx0Zm9yICggY29uc3QgZmlsZSBvZiB2YWx1ZS5jdXJyZW50ICkge1xuXHRcdGlmICggZmlsZU5hbWUgIT09IGZpbGUubmFtZSApIHtcblx0XHRcdGR0Lml0ZW1zLmFkZCggZmlsZSApO1xuXHRcdH1cblx0fVxuXG5cdHZhbHVlLmN1cnJlbnQgPSBkdC5maWxlcztcbn07XG5cbi8qKlxuICogQHBhcmFtICBmaWxlTmFtZVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuU2lnbmFsRmlsZS5wcm90b3R5cGUuZ2V0RmlsZU5vZGUgPSBmdW5jdGlvbiAoIGZpbGVOYW1lICkge1xuXHRjb25zdCBhdHRyID0gYGRhdGEtZmlsZS1uYW1lPVwiJHsgZmlsZU5hbWUgfVwiYDtcblxuXHRjb25zdCByZW1vdmVCdG4gPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0YC5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZVskeyBhdHRyIH1dYCxcblx0KTtcblxuXHRyZXR1cm4gcmVtb3ZlQnRuLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWduYWxGaWxlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZpbGVEYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbEZpbGUgZnJvbSAnLi9zaWduYWwnO1xuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBGaWxlRGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxGaWxlLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9