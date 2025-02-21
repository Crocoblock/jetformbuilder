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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhcHBlbmROb2RlcyggY29udGFpbmVyLCBub2RlcyApIHtcblx0LyoqXG5cdCAqIFdlIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGJlY2F1c2Ugd2UgbmVlZCBhIHN0YXRpYyBzZXQgb2YgZWxlbWVudHMuXG5cdCAqIElmIHlvdSBhcHBseSB0aGUgLmNoaWxkcmVuIG9yIC5jaGlsZE5vZGVzIHByb3BlcnR5LFxuXHQgKiB0aGV5IHdpbGwgYWx3YXlzIHJldHVybiB0aGUgbGlzdCBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGVsZW1lbnRzLlxuXHQgKi9cblx0Y29uc3QgY2hpbGRyZW4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHQpO1xuXG5cdGZvciAoIGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuICkge1xuXHRcdGlmICggbm9kZXMuc29tZSggbm9kZSA9PiBub2RlLmlzRXF1YWxOb2RlKCBjaGlsZCApICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y2hpbGQucmVtb3ZlKCk7XG5cdH1cblx0Zm9yICggY29uc3QgaW5kZXggaW4gbm9kZXMgKSB7XG5cdFx0aWYgKCAhbm9kZXMuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVzWyBpbmRleCBdO1xuXG5cdFx0aWYgKCBub2RlLmlzQ29ubmVjdGVkICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBub2RlICk7XG5cdH1cbn1cblxuLyoqXG4gKiBAcGFyYW0gIGlucHV0RmlsZUFycmF5XG4gKiBAcmV0dXJuIHtGaWxlTGlzdH1cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmlsZUxpc3QoIGlucHV0RmlsZUFycmF5ICkge1xuXHRjb25zdCB0cmFuc2ZlciA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcblxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIGlucHV0RmlsZUFycmF5ICkge1xuXHRcdHRyYW5zZmVyLml0ZW1zLmFkZCggZmlsZSApO1xuXHR9XG5cblx0cmV0dXJuIHRyYW5zZmVyLmZpbGVzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGaWxlKCBibG9iLCBmaWxlTmFtZSApIHtcblx0cmV0dXJuIG5ldyBGaWxlKCBbIGJsb2IgXSwgZmlsZU5hbWUsIGJsb2IgKTtcbn1cblxuLyoqXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNGaWxlKCBub2RlICkge1xuXHRyZXR1cm4gJ2ZpbGUnID09PSBub2RlLnR5cGU7XG59XG5cbmV4cG9ydCB7IGFwcGVuZE5vZGVzLCBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlLCBjcmVhdGVGaWxlIH07IiwiaW1wb3J0IHsgY3JlYXRlRmlsZUxpc3QsIGlzRmlsZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3QgeyBJbnB1dERhdGEgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBGaWxlRGF0YSgpIHtcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzTXVsdGlwbGUgICAgICAgID0gZmFsc2U7XG5cdHRoaXMucHJldkZpbGVzICAgICAgICAgPSBudWxsO1xuXHR0aGlzLnRlbXBsYXRlICAgICAgICAgID0gbnVsbDtcblx0dGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IG51bGw7XG5cdHRoaXMud3JhcHBlciAgICAgICAgICAgPSBudWxsO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzRmlsZSggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGV2ZW50ID0+IHtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IGNyZWF0ZUZpbGVMaXN0KFxuXHRcdFx0XHR0aGlzLmlzTXVsdGlwbGVcblx0XHRcdFx0PyBbIC4uLnRoaXMucHJldkZpbGVzID8/IFtdLCAuLi5ldmVudC50YXJnZXQuZmlsZXMgXVxuXHRcdFx0XHQ6IFsgLi4uZXZlbnQudGFyZ2V0LmZpbGVzIF0sXG5cdFx0XHQpO1xuXHRcdH0gKTtcblx0fTtcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblxuXHRcdHRoaXMuaXNNdWx0aXBsZSA9IG5vZGUubXVsdGlwbGU7XG5cblx0XHR0aGlzLndyYXBwZXIgICAgICAgICAgID0gbm9kZS5jbG9zZXN0KFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkJyxcblx0XHQpO1xuXHRcdHRoaXMucHJldmlld3NDb250YWluZXIgPSB0aGlzLndyYXBwZXIucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZXMnLFxuXHRcdCk7XG5cdFx0dGhpcy50ZW1wbGF0ZSAgICAgICAgICA9IHRoaXMud3JhcHBlci5cblx0XHRcdGNsb3Nlc3QoICcuZmllbGQtdHlwZS1tZWRpYS1maWVsZCcgKS5cblx0XHRcdHF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlcl9fcHJldmlldy10ZW1wbGF0ZScgKTtcblx0fTtcblxuXHR0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuY2FsbGFibGUubG9hZEZpbGVzKCk7XG5cdH07XG5cblx0dGhpcy5pbml0Tm90aWZ5VmFsdWUgPSAoKSA9PiB7fTtcblxuXHR0aGlzLnJlUXVlcnlWYWx1ZSA9ICgpID0+IHt9O1xufVxuXG5GaWxlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XG5cbi8qKlxuICogQHR5cGUge0hUTUxFbGVtZW50fVxuICovXG5GaWxlRGF0YS5wcm90b3R5cGUud3JhcHBlciA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAqL1xuRmlsZURhdGEucHJvdG90eXBlLnByZXZpZXdzQ29udGFpbmVyID0gbnVsbDtcbi8qKlxuICogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9XG4gKi9cbkZpbGVEYXRhLnByb3RvdHlwZS50ZW1wbGF0ZSA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVEYXRhOyIsImltcG9ydCB7IGFwcGVuZE5vZGVzLCBjcmVhdGVGaWxlLCBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7IEJhc2VTaWduYWwgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7RmlsZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqL1xuZnVuY3Rpb24gU2lnbmFsRmlsZSgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5sb2NrLmN1cnJlbnQgPSB0cnVlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzRmlsZSggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdICAgID0gdGhpcy5pbnB1dC5ub2Rlcztcblx0XHRjb25zdCBwcmV2aWV3cyAgICA9IFtdO1xuXHRcdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcblx0XHRjb25zdCBmaWxlcyAgICAgICA9IGN1cnJlbnQgPz8gW107XG5cblx0XHRmb3IgKCBjb25zdCBmaWxlIG9mIGZpbGVzICkge1xuXHRcdFx0cHJldmlld3MucHVzaCggdGhpcy5nZXRQcmV2aWV3KCBmaWxlICkgKTtcblx0XHR9XG5cblx0XHRhcHBlbmROb2RlcyggdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lciwgcHJldmlld3MgKTtcblxuXHRcdG5vZGUuZmlsZXMgICAgICAgICAgID0gY3JlYXRlRmlsZUxpc3QoIFsgLi4uZmlsZXMgXSApO1xuXHRcdHRoaXMuaW5wdXQucHJldkZpbGVzID0gZmlsZXM7XG5cblx0XHR0aGlzLnNvcnRhYmxlKCk7XG5cdH07XG59XG5cblNpZ25hbEZpbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUubG9hZEZpbGVzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBmaWxlcyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHQpO1xuXG5cdGNvbnN0IHVybHMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBwcmV2aWV3IG9mIGZpbGVzICkge1xuXHRcdHRoaXMuYWRkUmVtb3ZlSGFuZGxlciggcHJldmlldyApO1xuXG5cdFx0Y29uc3QgdXJsICAgICAgICAgID0gcHJldmlldy5kYXRhc2V0LmZpbGU7XG5cdFx0Y29uc3QgcmVtb3ZlTm9kZSAgID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZScsXG5cdFx0KTtcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVOb2RlLmRhdGFzZXQ7XG5cblx0XHR1cmxzLnB1c2goIFsgdXJsLCBmaWxlTmFtZSBdICk7XG5cdH1cblxuXHRpZiAoICF1cmxzLmxlbmd0aCApIHtcblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0UHJvbWlzZS5hbGxTZXR0bGVkKCB1cmxzLm1hcCggKCBbIHVybCwgZmlsZU5hbWUgXSApID0+IChcblx0XHRuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRmZXRjaCggdXJsICkudGhlbihcblx0XHRcdFx0cmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpLFxuXHRcdFx0KS50aGVuKFxuXHRcdFx0XHRibG9iID0+IHJlc29sdmUoIGNyZWF0ZUZpbGUoIGJsb2IsIGZpbGVOYW1lICkgKSxcblx0XHRcdCkuY2F0Y2goIHJlamVjdCApO1xuXHRcdH0gKVxuXHQpICkgKS50aGVuKCB2YWx1ZXMgPT4ge1xuXHRcdGNvbnN0IG5ld0ZpbGVzID0gdmFsdWVzLm1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApO1xuXG5cdFx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcblx0XHR0aGlzLmlucHV0LnNpbGVuY2VTZXQoIGNyZWF0ZUZpbGVMaXN0KCBuZXdGaWxlcyApICk7XG5cdH0gKS5jYXRjaCggKCkgPT4ge1xuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XG5cdH0gKTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLnNvcnRhYmxlID0gZnVuY3Rpb24gKCkge1xuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS51bmJpbmQoKTtcblxuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS5zb3J0YWJsZSgge1xuXHRcdGl0ZW1zOiAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHR9ICkuYmluZCggJ3NvcnR1cGRhdGUnLCAoKSA9PiB0aGlzLm9uU29ydENhbGxiYWNrKCkgKTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLm9uU29ydENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB0cmFuc2ZlciAgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cdGNvbnN0IFsgaW5wdXQgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0Y29uc3QgcmVtb3ZlQnV0dG9ucyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcblx0KTtcblxuXHRmb3IgKCBjb25zdCByZW1vdmVCdXR0b24gb2YgcmVtb3ZlQnV0dG9ucyApIHtcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVCdXR0b24uZGF0YXNldDtcblxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgaW5wdXQuZmlsZXMgKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRpZiAoIGZpbGUubmFtZSAhPT0gZmlsZU5hbWUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0cmFuc2Zlci5pdGVtcy5hZGQoIGZpbGUgKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSB0cmFuc2Zlci5maWxlcztcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmFkZFJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoIHByZXZpZXcgKSB7XG5cdHByZXZpZXcucXVlcnlTZWxlY3Rvcihcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcblx0KS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdjbGljaycsXG5cdFx0dGhpcy5yZW1vdmVGaWxlLmJpbmQoIHRoaXMgKSxcblx0KTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmdldFByZXZpZXcgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XG5cdGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtZmlsZS1uYW1lPVwiJHsgZmlsZS5uYW1lIH1cIl1gLFxuXHQpO1xuXG5cdGlmICggIXJlbW92ZUJ1dHRvbiApIHtcblx0XHRjb25zdCBwcmV2aWV3ID0gdGhpcy5jcmVhdGVQcmV2aWV3KCBmaWxlICk7XG5cdFx0dGhpcy5hZGRSZW1vdmVIYW5kbGVyKCBwcmV2aWV3ICk7XG5cblx0XHRyZXR1cm4gcHJldmlldztcblx0fVxuXG5cdHJldHVybiByZW1vdmVCdXR0b24uY2xvc2VzdChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHQpO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuY3JlYXRlUHJldmlldyA9IGZ1bmN0aW9uICggZmlsZSApIHtcblx0Y29uc3QgdXJsICAgICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7XG5cdGxldCB7IGlubmVySFRNTCB9ID0gdGhpcy5pbnB1dC50ZW1wbGF0ZTtcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX3VybCUnLCB1cmwgKTtcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX25hbWUlJywgZmlsZS5uYW1lICk7XG5cblx0Y29uc3Qgd3JhcHBlciAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHdyYXBwZXIuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG5cdGNvbnN0IG5vZGUgPSB3cmFwcGVyLmNvbnRlbnQuZmlyc3RDaGlsZDtcblxuXHRpZiAoIC9eaW1hZ2VcXC8vLnRlc3QoIGZpbGUudHlwZSApICkge1xuXHRcdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2ltZycgKTtcblx0XHRpbWFnZS5zcmMgICA9IHVybDtcblx0XHRpbWFnZS5hbHQgICA9IGZpbGUubmFtZTtcblxuXHRcdG5vZGUucHJlcGVuZCggaW1hZ2UgKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUucmVtb3ZlRmlsZSA9IGZ1bmN0aW9uICggeyB0YXJnZXQgfSApIHtcblx0Y29uc3QgY2xhc3NOYW1lID0gJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZSc7XG5cdGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuaW5wdXQ7XG5cblx0aWYgKCAhdGFyZ2V0Lm1hdGNoZXMoIGNsYXNzTmFtZSApICkge1xuXHRcdHRhcmdldCA9IHRhcmdldC5jbG9zZXN0KCBjbGFzc05hbWUgKTtcblx0fVxuXG5cdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHRhcmdldC5kYXRhc2V0O1xuXG5cdGNvbnN0IGR0ID0gbmV3IERhdGFUcmFuc2ZlcigpO1xuXG5cdGZvciAoIGNvbnN0IGZpbGUgb2YgdmFsdWUuY3VycmVudCApIHtcblx0XHRpZiAoIGZpbGVOYW1lICE9PSBmaWxlLm5hbWUgKSB7XG5cdFx0XHRkdC5pdGVtcy5hZGQoIGZpbGUgKTtcblx0XHR9XG5cdH1cblxuXHR2YWx1ZS5jdXJyZW50ID0gZHQuZmlsZXM7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAgZmlsZU5hbWVcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cblNpZ25hbEZpbGUucHJvdG90eXBlLmdldEZpbGVOb2RlID0gZnVuY3Rpb24gKCBmaWxlTmFtZSApIHtcblx0Y29uc3QgYXR0ciA9IGBkYXRhLWZpbGUtbmFtZT1cIiR7IGZpbGVOYW1lIH1cImA7XG5cblx0Y29uc3QgcmVtb3ZlQnRuID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuXHRcdGAuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmVbJHsgYXR0ciB9XWAsXG5cdCk7XG5cblx0cmV0dXJuIHJlbW92ZUJ0bi5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnbmFsRmlsZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGaWxlRGF0YSBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTaWduYWxGaWxlIGZyb20gJy4vc2lnbmFsJztcblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgRmlsZURhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsRmlsZSwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==