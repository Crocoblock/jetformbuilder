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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQ25NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL2lucHV0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFwcGVuZE5vZGVzKCBjb250YWluZXIsIG5vZGVzICkge1xyXG5cdC8qKlxyXG5cdCAqIFdlIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGJlY2F1c2Ugd2UgbmVlZCBhIHN0YXRpYyBzZXQgb2YgZWxlbWVudHMuXHJcblx0ICogSWYgeW91IGFwcGx5IHRoZSAuY2hpbGRyZW4gb3IgLmNoaWxkTm9kZXMgcHJvcGVydHksXHJcblx0ICogdGhleSB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIGxpc3Qgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBlbGVtZW50cy5cclxuXHQgKi9cclxuXHRjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcclxuXHQpO1xyXG5cclxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiBjaGlsZHJlbiApIHtcclxuXHRcdGlmICggbm9kZXMuc29tZSggbm9kZSA9PiBub2RlLmlzRXF1YWxOb2RlKCBjaGlsZCApICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGQucmVtb3ZlKCk7XHJcblx0fVxyXG5cdGZvciAoIGNvbnN0IGluZGV4IGluIG5vZGVzICkge1xyXG5cdFx0aWYgKCAhbm9kZXMuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVzWyBpbmRleCBdO1xyXG5cclxuXHRcdGlmICggbm9kZS5pc0Nvbm5lY3RlZCApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBub2RlICk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBpbnB1dEZpbGVBcnJheVxyXG4gKiBAcmV0dXJuIHtGaWxlTGlzdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGVMaXN0KCBpbnB1dEZpbGVBcnJheSApIHtcclxuXHRjb25zdCB0cmFuc2ZlciA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuXHJcblx0Zm9yICggY29uc3QgZmlsZSBvZiBpbnB1dEZpbGVBcnJheSApIHtcclxuXHRcdHRyYW5zZmVyLml0ZW1zLmFkZCggZmlsZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRyYW5zZmVyLmZpbGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGaWxlKCBibG9iLCBmaWxlTmFtZSApIHtcclxuXHRyZXR1cm4gbmV3IEZpbGUoIFsgYmxvYiBdLCBmaWxlTmFtZSwgYmxvYiApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRmlsZSggbm9kZSApIHtcclxuXHRpZiAoIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdqZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19pbnB1dCcgKSApIHtcclxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUsIGNyZWF0ZUZpbGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgeyBJbnB1dERhdGEgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gRmlsZURhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc011bHRpcGxlICAgICAgICA9IGZhbHNlO1xyXG5cdHRoaXMucHJldkZpbGVzICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMucHJldmlld3NDb250YWluZXIgPSBudWxsO1xyXG5cdHRoaXMud3JhcHBlciAgICAgICAgICAgPSBudWxsO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzRmlsZSggbm9kZSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gY3JlYXRlRmlsZUxpc3QoXHJcblx0XHRcdFx0dGhpcy5pc011bHRpcGxlXHJcblx0XHRcdFx0PyBbIC4uLnRoaXMucHJldkZpbGVzID8/IFtdLCAuLi5ldmVudC50YXJnZXQuZmlsZXMgXVxyXG5cdFx0XHRcdDogWyAuLi5ldmVudC50YXJnZXQuZmlsZXMgXSxcclxuXHRcdFx0KTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHJcblx0XHR0aGlzLmlzTXVsdGlwbGUgPSBub2RlLm11bHRpcGxlO1xyXG5cclxuXHRcdHRoaXMud3JhcHBlciAgICAgICAgICAgPSBub2RlLmNsb3Nlc3QoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZCcsXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGVzJyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLnRlbXBsYXRlICAgICAgICAgID0gdGhpcy53cmFwcGVyLlxyXG5cdFx0XHRjbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICkuXHJcblx0XHRcdHF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlcl9fcHJldmlldy10ZW1wbGF0ZScgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5jYWxsYWJsZS5sb2FkRmlsZXMoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSA9ICgpID0+IHt9O1xyXG5cclxuXHR0aGlzLnJlUXVlcnlWYWx1ZSA9ICgpID0+IHt9O1xyXG59XHJcblxyXG5GaWxlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG4vKipcclxuICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuRmlsZURhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuRmlsZURhdGEucHJvdG90eXBlLnByZXZpZXdzQ29udGFpbmVyID0gbnVsbDtcclxuLyoqXHJcbiAqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fVxyXG4gKi9cclxuRmlsZURhdGEucHJvdG90eXBlLnRlbXBsYXRlID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVEYXRhOyIsImltcG9ydCB7IGFwcGVuZE5vZGVzLCBjcmVhdGVGaWxlLCBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgeyBCYXNlU2lnbmFsIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0ZpbGVEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XHJcbiAqL1xyXG5mdW5jdGlvbiBTaWduYWxGaWxlKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmxvY2suY3VycmVudCA9IHRydWU7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNGaWxlKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSAgICA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblx0XHRjb25zdCBwcmV2aWV3cyAgICA9IFtdO1xyXG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmlucHV0LnZhbHVlO1xyXG5cdFx0Y29uc3QgZmlsZXMgICAgICAgPSBjdXJyZW50ID8/IFtdO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XHJcblx0XHRcdHByZXZpZXdzLnB1c2goIHRoaXMuZ2V0UHJldmlldyggZmlsZSApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0YXBwZW5kTm9kZXMoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIsIHByZXZpZXdzICk7XHJcblxyXG5cdFx0bm9kZS5maWxlcyAgICAgICAgICAgPSBjcmVhdGVGaWxlTGlzdCggWyAuLi5maWxlcyBdICk7XHJcblx0XHR0aGlzLmlucHV0LnByZXZGaWxlcyA9IGZpbGVzO1xyXG5cclxuXHRcdHRoaXMuc29ydGFibGUoKTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5sb2FkRmlsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgZmlsZXMgPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHVybHMgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgcHJldmlldyBvZiBmaWxlcyApIHtcclxuXHRcdHRoaXMuYWRkUmVtb3ZlSGFuZGxlciggcHJldmlldyApO1xyXG5cclxuXHRcdGNvbnN0IHVybCAgICAgICAgICA9IHByZXZpZXcuZGF0YXNldC5maWxlO1xyXG5cdFx0Y29uc3QgcmVtb3ZlTm9kZSAgID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcclxuXHRcdCk7XHJcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVOb2RlLmRhdGFzZXQ7XHJcblxyXG5cdFx0dXJscy5wdXNoKCBbIHVybCwgZmlsZU5hbWUgXSApO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhdXJscy5sZW5ndGggKSB7XHJcblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdFByb21pc2UuYWxsU2V0dGxlZCggdXJscy5tYXAoICggWyB1cmwsIGZpbGVOYW1lIF0gKSA9PiAoXHJcblx0XHRuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcblx0XHRcdGZldGNoKCB1cmwgKS50aGVuKFxyXG5cdFx0XHRcdHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSxcclxuXHRcdFx0KS50aGVuKFxyXG5cdFx0XHRcdGJsb2IgPT4gcmVzb2x2ZSggY3JlYXRlRmlsZSggYmxvYiwgZmlsZU5hbWUgKSApLFxyXG5cdFx0XHQpLmNhdGNoKCByZWplY3QgKTtcclxuXHRcdH0gKVxyXG5cdCkgKSApLnRoZW4oIHZhbHVlcyA9PiB7XHJcblx0XHRjb25zdCBuZXdGaWxlcyA9IHZhbHVlcy5tYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcclxuXHJcblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5pbnB1dC5zaWxlbmNlU2V0KCBjcmVhdGVGaWxlTGlzdCggbmV3RmlsZXMgKSApO1xyXG5cdH0gKS5jYXRjaCggKCkgPT4ge1xyXG5cdFx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5zb3J0YWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS51bmJpbmQoKTtcclxuXHJcblx0alF1ZXJ5KCB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyICkuc29ydGFibGUoIHtcclxuXHRcdGl0ZW1zOiAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxyXG5cdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXHJcblx0fSApLmJpbmQoICdzb3J0dXBkYXRlJywgKCkgPT4gdGhpcy5vblNvcnRDYWxsYmFjaygpICk7XHJcbn07XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5vblNvcnRDYWxsYmFjayA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCB0cmFuc2ZlciAgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XHJcblx0Y29uc3QgWyBpbnB1dCBdID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHJcblx0Y29uc3QgcmVtb3ZlQnV0dG9ucyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxyXG5cdCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IHJlbW92ZUJ1dHRvbiBvZiByZW1vdmVCdXR0b25zICkge1xyXG5cdFx0Y29uc3QgeyBmaWxlTmFtZSB9ID0gcmVtb3ZlQnV0dG9uLmRhdGFzZXQ7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgZmlsZSBvZiBpbnB1dC5maWxlcyApIHtcclxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxyXG5cdFx0XHRpZiAoIGZpbGUubmFtZSAhPT0gZmlsZU5hbWUgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRyYW5zZmVyLml0ZW1zLmFkZCggZmlsZSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gdHJhbnNmZXIuZmlsZXM7XHJcbn07XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5hZGRSZW1vdmVIYW5kbGVyID0gZnVuY3Rpb24gKCBwcmV2aWV3ICkge1xyXG5cdHByZXZpZXcucXVlcnlTZWxlY3RvcihcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxyXG5cdCkuYWRkRXZlbnRMaXN0ZW5lcihcclxuXHRcdCdjbGljaycsXHJcblx0XHR0aGlzLnJlbW92ZUZpbGUuYmluZCggdGhpcyApLFxyXG5cdCk7XHJcbn07XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5nZXRQcmV2aWV3ID0gZnVuY3Rpb24gKCBmaWxlICkge1xyXG5cdGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuXHRcdGBbZGF0YS1maWxlLW5hbWU9XCIkeyBmaWxlLm5hbWUgfVwiXWAsXHJcblx0KTtcclxuXHJcblx0aWYgKCAhcmVtb3ZlQnV0dG9uICkge1xyXG5cdFx0Y29uc3QgcHJldmlldyA9IHRoaXMuY3JlYXRlUHJldmlldyggZmlsZSApO1xyXG5cdFx0dGhpcy5hZGRSZW1vdmVIYW5kbGVyKCBwcmV2aWV3ICk7XHJcblxyXG5cdFx0cmV0dXJuIHByZXZpZXc7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVtb3ZlQnV0dG9uLmNsb3Nlc3QoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxyXG5cdCk7XHJcbn07XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5jcmVhdGVQcmV2aWV3ID0gZnVuY3Rpb24gKCBmaWxlICkge1xyXG5cdGNvbnN0IHVybCAgICAgICAgID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggZmlsZSApO1xyXG5cdGxldCB7IGlubmVySFRNTCB9ID0gdGhpcy5pbnB1dC50ZW1wbGF0ZTtcclxuXHRpbm5lckhUTUwgICAgICAgICA9IGlubmVySFRNTC5yZXBsYWNlKCAnJWZpbGVfdXJsJScsIHVybCApO1xyXG5cdGlubmVySFRNTCAgICAgICAgID0gaW5uZXJIVE1MLnJlcGxhY2UoICclZmlsZV9uYW1lJScsIGZpbGUubmFtZSApO1xyXG5cclxuXHRjb25zdCB3cmFwcGVyICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcclxuXHR3cmFwcGVyLmlubmVySFRNTCA9IGlubmVySFRNTDtcclxuXHJcblx0Y29uc3Qgbm9kZSA9IHdyYXBwZXIuY29udGVudC5maXJzdENoaWxkO1xyXG5cclxuXHRpZiAoIC9eaW1hZ2VcXC8vLnRlc3QoIGZpbGUudHlwZSApICkge1xyXG5cdFx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW1nJyApO1xyXG5cdFx0aW1hZ2Uuc3JjICAgPSB1cmw7XHJcblx0XHRpbWFnZS5hbHQgICA9IGZpbGUubmFtZTtcclxuXHJcblx0XHRub2RlLnByZXBlbmQoIGltYWdlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gbm9kZTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLnJlbW92ZUZpbGUgPSBmdW5jdGlvbiAoIHsgdGFyZ2V0IH0gKSB7XHJcblx0Y29uc3QgY2xhc3NOYW1lID0gJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZSc7XHJcblx0Y29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5pbnB1dDtcclxuXHJcblx0aWYgKCAhdGFyZ2V0Lm1hdGNoZXMoIGNsYXNzTmFtZSApICkge1xyXG5cdFx0dGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoIGNsYXNzTmFtZSApO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgeyBmaWxlTmFtZSB9ID0gdGFyZ2V0LmRhdGFzZXQ7XHJcblxyXG5cdGNvbnN0IGR0ID0gbmV3IERhdGFUcmFuc2ZlcigpO1xyXG5cclxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIHZhbHVlLmN1cnJlbnQgKSB7XHJcblx0XHRpZiAoIGZpbGVOYW1lICE9PSBmaWxlLm5hbWUgKSB7XHJcblx0XHRcdGR0Lml0ZW1zLmFkZCggZmlsZSApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmFsdWUuY3VycmVudCA9IGR0LmZpbGVzO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSAgZmlsZU5hbWVcclxuICogQHJldHVybiB7RWxlbWVudH1cclxuICovXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmdldEZpbGVOb2RlID0gZnVuY3Rpb24gKCBmaWxlTmFtZSApIHtcclxuXHRjb25zdCBhdHRyID0gYGRhdGEtZmlsZS1uYW1lPVwiJHsgZmlsZU5hbWUgfVwiYDtcclxuXHJcblx0Y29uc3QgcmVtb3ZlQnRuID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0YC5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZVskeyBhdHRyIH1dYCxcclxuXHQpO1xyXG5cclxuXHRyZXR1cm4gcmVtb3ZlQnRuLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsRmlsZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGaWxlRGF0YSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IFNpZ25hbEZpbGUgZnJvbSAnLi9zaWduYWwnO1xyXG5cclxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgRmlsZURhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxGaWxlLCAuLi5zaWduYWxzIF07XHJcblxyXG5cdFx0cmV0dXJuIHNpZ25hbHM7XHJcblx0fSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=