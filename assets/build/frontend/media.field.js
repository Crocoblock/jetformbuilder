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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FDck5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXBwZW5kTm9kZXMoIGNvbnRhaW5lciwgbm9kZXMgKSB7XG5cdC8qKlxuXHQgKiBXZSB1c2UgcXVlcnlTZWxlY3RvckFsbCBiZWNhdXNlIHdlIG5lZWQgYSBzdGF0aWMgc2V0IG9mIGVsZW1lbnRzLlxuXHQgKiBJZiB5b3UgYXBwbHkgdGhlIC5jaGlsZHJlbiBvciAuY2hpbGROb2RlcyBwcm9wZXJ0eSxcblx0ICogdGhleSB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIGxpc3Qgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBlbGVtZW50cy5cblx0ICovXG5cdGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcblx0KTtcblxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiBjaGlsZHJlbiApIHtcblx0XHRpZiAoIG5vZGVzLnNvbWUoIG5vZGUgPT4gbm9kZS5pc0VxdWFsTm9kZSggY2hpbGQgKSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNoaWxkLnJlbW92ZSgpO1xuXHR9XG5cdGZvciAoIGNvbnN0IGluZGV4IGluIG5vZGVzICkge1xuXHRcdGlmICggIW5vZGVzLmhhc093blByb3BlcnR5KCBpbmRleCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IG5vZGUgPSBub2Rlc1sgaW5kZXggXTtcblxuXHRcdGlmICggbm9kZS5pc0Nvbm5lY3RlZCApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggbm9kZSApO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dEZpbGVBcnJheVxuICogQHJldHVybiB7RmlsZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbGVMaXN0KCBpbnB1dEZpbGVBcnJheSApIHtcblx0Y29uc3QgdHJhbnNmZXIgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cblx0Zm9yICggY29uc3QgZmlsZSBvZiBpbnB1dEZpbGVBcnJheSApIHtcblx0XHR0cmFuc2Zlci5pdGVtcy5hZGQoIGZpbGUgKTtcblx0fVxuXG5cdHJldHVybiB0cmFuc2Zlci5maWxlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmlsZSggYmxvYiwgZmlsZU5hbWUgKSB7XG5cdHJldHVybiBuZXcgRmlsZSggWyBibG9iIF0sIGZpbGVOYW1lLCBibG9iICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSggbm9kZSApIHtcblx0aWYgKCBub2RlLmNsYXNzTGlzdC5jb250YWlucygnamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9faW5wdXQnICkgKSB7XG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBhcHBlbmROb2RlcywgY3JlYXRlRmlsZUxpc3QsIGlzRmlsZSwgY3JlYXRlRmlsZSB9OyIsImltcG9ydCB7IGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHsgSW5wdXREYXRhIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gRmlsZURhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc011bHRpcGxlICAgICAgICA9IGZhbHNlO1xuXHR0aGlzLnByZXZGaWxlcyAgICAgICAgID0gbnVsbDtcblx0dGhpcy50ZW1wbGF0ZSAgICAgICAgICA9IG51bGw7XG5cdHRoaXMucHJldmlld3NDb250YWluZXIgPSBudWxsO1xuXHR0aGlzLndyYXBwZXIgICAgICAgICAgID0gbnVsbDtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0ZpbGUoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBjcmVhdGVGaWxlTGlzdChcblx0XHRcdFx0dGhpcy5pc011bHRpcGxlXG5cdFx0XHRcdD8gWyAuLi50aGlzLnByZXZGaWxlcyA/PyBbXSwgLi4uZXZlbnQudGFyZ2V0LmZpbGVzIF1cblx0XHRcdFx0OiBbIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdLFxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cblx0XHR0aGlzLmlzTXVsdGlwbGUgPSBub2RlLm11bHRpcGxlO1xuXG5cdFx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG5vZGUuY2xvc2VzdChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZCcsXG5cdFx0KTtcblx0XHR0aGlzLnByZXZpZXdzQ29udGFpbmVyID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGVzJyxcblx0XHQpO1xuXHRcdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSB0aGlzLndyYXBwZXIuXG5cdFx0XHRjbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICkuXG5cdFx0XHRxdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXJfX3ByZXZpZXctdGVtcGxhdGUnICk7XG5cdH07XG5cblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNhbGxhYmxlLmxvYWRGaWxlcygpO1xuXHR9O1xuXG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlID0gKCkgPT4ge307XG5cblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcbn1cblxuRmlsZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAqL1xuRmlsZURhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xuLyoqXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gKi9cbkZpbGVEYXRhLnByb3RvdHlwZS5wcmV2aWV3c0NvbnRhaW5lciA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fVxuICovXG5GaWxlRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRGF0YTsiLCJpbXBvcnQgeyBhcHBlbmROb2RlcywgY3JlYXRlRmlsZSwgY3JlYXRlRmlsZUxpc3QsIGlzRmlsZSB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3QgeyBCYXNlU2lnbmFsIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuLyoqXG4gKiBAcHJvcGVydHkge0ZpbGVEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKi9cbmZ1bmN0aW9uIFNpZ25hbEZpbGUoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubG9jay5jdXJyZW50ID0gdHJ1ZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0ZpbGUoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSAgICA9IHRoaXMuaW5wdXQubm9kZXM7XG5cdFx0Y29uc3QgcHJldmlld3MgICAgPSBbXTtcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgZmlsZXMgICAgICAgPSB1bmlxdWVCeU5hbWUoIGN1cnJlbnQgPz8gW10gKTtcblxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XG5cdFx0XHRwcmV2aWV3cy5wdXNoKCB0aGlzLmdldFByZXZpZXcoIGZpbGUgKSApO1xuXHRcdH1cblxuXHRcdGFwcGVuZE5vZGVzKCB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLCBwcmV2aWV3cyApO1xuXG5cdFx0bm9kZS5maWxlcyAgICAgICAgICAgPSBjcmVhdGVGaWxlTGlzdCggZmlsZXMgKTtcblx0XHR0aGlzLmlucHV0LnByZXZGaWxlcyA9IGZpbGVzO1xuXG5cdFx0dGhpcy5zb3J0YWJsZSgpO1xuXHR9O1xufVxuXG5TaWduYWxGaWxlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmxvYWRGaWxlcyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgZmlsZXMgPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcblx0KTtcblxuXHRjb25zdCB1cmxzID0gW107XG5cblx0Zm9yICggY29uc3QgcHJldmlldyBvZiBmaWxlcyApIHtcblx0XHR0aGlzLmFkZFJlbW92ZUhhbmRsZXIoIHByZXZpZXcgKTtcblxuXHRcdGNvbnN0IHVybCAgICAgICAgICA9IHByZXZpZXcuZGF0YXNldC5maWxlO1xuXHRcdGNvbnN0IHJlbW92ZU5vZGUgICA9IHByZXZpZXcucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxuXHRcdCk7XG5cdFx0Y29uc3QgeyBmaWxlTmFtZSB9ID0gcmVtb3ZlTm9kZS5kYXRhc2V0O1xuXG5cdFx0dXJscy5wdXNoKCBbIHVybCwgZmlsZU5hbWUgXSApO1xuXHR9XG5cblx0aWYgKCAhdXJscy5sZW5ndGggKSB7XG5cdFx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdFByb21pc2UuYWxsU2V0dGxlZCggdXJscy5tYXAoICggWyB1cmwsIGZpbGVOYW1lIF0gKSA9PiAoXG5cdFx0bmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0ZmV0Y2goIHVybCApLnRoZW4oXG5cdFx0XHRcdHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSxcblx0XHRcdCkudGhlbihcblx0XHRcdFx0YmxvYiA9PiByZXNvbHZlKCBjcmVhdGVGaWxlKCBibG9iLCBmaWxlTmFtZSApICksXG5cdFx0XHQpLmNhdGNoKCByZWplY3QgKTtcblx0XHR9IClcblx0KSApICkudGhlbiggdmFsdWVzID0+IHtcblx0XHRjb25zdCBuZXdGaWxlcyA9IHZhbHVlcy5tYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcblxuXG5cdFx0Y29uc3QgdW5pcXVlICAgPSB1bmlxdWVCeU5hbWUoIG5ld0ZpbGVzICk7XG5cblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaW5wdXQuc2lsZW5jZVNldCggY3JlYXRlRmlsZUxpc3QoIHVuaXF1ZSApICk7XG5cdH0gKS5jYXRjaCggKCkgPT4ge1xuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XG5cdH0gKTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLnNvcnRhYmxlID0gZnVuY3Rpb24gKCkge1xuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS51bmJpbmQoKTtcblxuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS5zb3J0YWJsZSgge1xuXHRcdGl0ZW1zOiAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHR9ICkuYmluZCggJ3NvcnR1cGRhdGUnLCAoKSA9PiB0aGlzLm9uU29ydENhbGxiYWNrKCkgKTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLm9uU29ydENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB0cmFuc2ZlciAgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cdGNvbnN0IFsgaW5wdXQgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0Y29uc3QgcmVtb3ZlQnV0dG9ucyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcblx0KTtcblxuXHRmb3IgKCBjb25zdCByZW1vdmVCdXR0b24gb2YgcmVtb3ZlQnV0dG9ucyApIHtcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVCdXR0b24uZGF0YXNldDtcblxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgaW5wdXQuZmlsZXMgKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRpZiAoIGZpbGUubmFtZSAhPT0gZmlsZU5hbWUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0cmFuc2Zlci5pdGVtcy5hZGQoIGZpbGUgKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSB0cmFuc2Zlci5maWxlcztcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmFkZFJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoIHByZXZpZXcgKSB7XG5cdHByZXZpZXcucXVlcnlTZWxlY3Rvcihcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcblx0KS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdjbGljaycsXG5cdFx0dGhpcy5yZW1vdmVGaWxlLmJpbmQoIHRoaXMgKSxcblx0KTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmdldFByZXZpZXcgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XG5cdGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtZmlsZS1uYW1lPVwiJHsgZmlsZS5uYW1lIH1cIl1gLFxuXHQpO1xuXG5cdGlmICggIXJlbW92ZUJ1dHRvbiApIHtcblx0XHRjb25zdCBwcmV2aWV3ID0gdGhpcy5jcmVhdGVQcmV2aWV3KCBmaWxlICk7XG5cdFx0dGhpcy5hZGRSZW1vdmVIYW5kbGVyKCBwcmV2aWV3ICk7XG5cblx0XHRyZXR1cm4gcHJldmlldztcblx0fVxuXG5cdHJldHVybiByZW1vdmVCdXR0b24uY2xvc2VzdChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHQpO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuY3JlYXRlUHJldmlldyA9IGZ1bmN0aW9uICggZmlsZSApIHtcblx0Y29uc3QgdXJsICAgICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7XG5cdGxldCB7IGlubmVySFRNTCB9ID0gdGhpcy5pbnB1dC50ZW1wbGF0ZTtcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX3VybCUnLCB1cmwgKTtcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX25hbWUlJywgZmlsZS5uYW1lICk7XG5cblx0Y29uc3Qgd3JhcHBlciAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAndGVtcGxhdGUnICk7XG5cdHdyYXBwZXIuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuXG5cdGNvbnN0IG5vZGUgPSB3cmFwcGVyLmNvbnRlbnQuZmlyc3RDaGlsZDtcblxuXHRpZiAoIC9eaW1hZ2VcXC8vLnRlc3QoIGZpbGUudHlwZSApICkge1xuXHRcdGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ2ltZycgKTtcblx0XHRpbWFnZS5zcmMgICA9IHVybDtcblx0XHRpbWFnZS5hbHQgICA9IGZpbGUubmFtZTtcblxuXHRcdG5vZGUucHJlcGVuZCggaW1hZ2UgKTtcblx0fVxuXG5cdHJldHVybiBub2RlO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUucmVtb3ZlRmlsZSA9IGZ1bmN0aW9uICggeyB0YXJnZXQgfSApIHtcblx0Y29uc3QgY2xhc3NOYW1lID0gJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZSc7XG5cdGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuaW5wdXQ7XG5cblx0aWYgKCAhdGFyZ2V0Lm1hdGNoZXMoIGNsYXNzTmFtZSApICkge1xuXHRcdHRhcmdldCA9IHRhcmdldC5jbG9zZXN0KCBjbGFzc05hbWUgKTtcblx0fVxuXG5cdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHRhcmdldC5kYXRhc2V0O1xuXG5cdGNvbnN0IGR0ID0gbmV3IERhdGFUcmFuc2ZlcigpO1xuXG5cdGZvciAoIGNvbnN0IGZpbGUgb2YgdmFsdWUuY3VycmVudCApIHtcblx0XHRpZiAoIGZpbGVOYW1lICE9PSBmaWxlLm5hbWUgKSB7XG5cdFx0XHRkdC5pdGVtcy5hZGQoIGZpbGUgKTtcblx0XHR9XG5cdH1cblxuXHR2YWx1ZS5jdXJyZW50ID0gZHQuZmlsZXM7XG59O1xuXG4vKipcbiAqIEBwYXJhbSAgZmlsZU5hbWVcbiAqIEByZXR1cm4ge0VsZW1lbnR9XG4gKi9cblNpZ25hbEZpbGUucHJvdG90eXBlLmdldEZpbGVOb2RlID0gZnVuY3Rpb24gKCBmaWxlTmFtZSApIHtcblx0Y29uc3QgYXR0ciA9IGBkYXRhLWZpbGUtbmFtZT1cIiR7IGZpbGVOYW1lIH1cImA7XG5cblx0Y29uc3QgcmVtb3ZlQnRuID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuXHRcdGAuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmVbJHsgYXR0ciB9XWAsXG5cdCk7XG5cblx0cmV0dXJuIHJlbW92ZUJ0bi5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2lnbmFsRmlsZTtcblxuZnVuY3Rpb24gdW5pcXVlQnlOYW1lKCBmaWxlcyApIHtcblx0Y29uc3Qgc2VlbiAgID0gbmV3IFNldCgpO1xuXHRjb25zdCByZXN1bHQgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIGZpbGVzICkge1xuXHRcdGlmICggc2Vlbi5oYXMoIGZpbGUubmFtZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHNlZW4uYWRkKCBmaWxlLm5hbWUgKTtcblx0XHRyZXN1bHQucHVzaCggZmlsZSApO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBGaWxlRGF0YSBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTaWduYWxGaWxlIGZyb20gJy4vc2lnbmFsJztcblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgRmlsZURhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsRmlsZSwgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==