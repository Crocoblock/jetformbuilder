/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/media.field/functions.js"
/*!*******************************************!*\
  !*** ./frontend/media.field/functions.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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


/***/ },

/***/ "./frontend/media.field/input.js"
/*!***************************************!*\
  !*** ./frontend/media.field/input.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ "./frontend/media.field/resolveMediaMacrosValue.js"
/*!*********************************************************!*\
  !*** ./frontend/media.field/resolveMediaMacrosValue.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resolveMediaMacrosValue: () => (/* binding */ resolveMediaMacrosValue)
/* harmony export */ });
function escapeHtml(value) {
  return String(value !== null && value !== void 0 ? value : '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');
}
function isMediaField(fieldNode) {
  if (!fieldNode) {
    return false;
  }
  return !!fieldNode.closest('.field-type-media-field');
}
function renderImageItem(url, name = '') {
  const label = name || 'Image';
  return `
		<li style="list-style:none; margin:0 0 12px 0;">
			<div style="display:inline-block; max-width:150px;">
				<img
					src="${escapeHtml(url)}"
					alt="${escapeHtml(label)}"
					style="
						display:block;
						width:150px;
						height:150px;
						object-fit:cover;
						border:1px solid #dcdcdc;
						border-radius:8px;
						background:#fff;
					"
				/>
				<div style="
					margin-top:6px;
					font-size:13px;
					line-height:1.4;
					color:#444;
					word-break:break-word;
				">
					${escapeHtml(label)}
				</div>
			</div>
		</li>
	`;
}
function renderFileItem(url, name = '') {
  const label = name || url || 'File';
  if (url) {
    return `
			<li style="list-style:none; margin:0 0 10px 0;">
				<a
					href="${escapeHtml(url)}"
					target="_blank"
					rel="noopener noreferrer"
					style="
						color:#d63384;
						text-decoration:underline;
						word-break:break-word;
						font-size:14px;
						line-height:1.4;
					"
				>
					📄 ${escapeHtml(label)}
				</a>
			</li>
		`;
  }
  return `
		<li style="
			list-style:none;
			margin:0 0 10px 0;
			font-size:14px;
			line-height:1.4;
			word-break:break-word;
			color:#444;
		">
			📄 ${escapeHtml(label)}
		</li>
	`;
}
function wrapItems(items) {
  if (!items.length) {
    return '';
  }
  return `
		<div style="
			display:block;
			padding:0;
			margin:0;
		">
			<ul style="
				margin:0;
				padding:0;
				list-style:none;
			">
				${items.join('')}
			</ul>
		</div>
	`;
}
function collectMediaFromDom(fieldNode) {
  const wrapper = fieldNode.closest('.field-type-media-field');
  if (!wrapper) {
    return '';
  }
  const fileNodes = wrapper.querySelectorAll('.jet-form-builder-file-upload__file');
  if (!fileNodes.length) {
    return '';
  }
  const items = [];
  fileNodes.forEach(fileNode => {
    var _fileNode$dataset$fil, _removeBtn$dataset$fi;
    const url = String((_fileNode$dataset$fil = fileNode.dataset?.file) !== null && _fileNode$dataset$fil !== void 0 ? _fileNode$dataset$fil : '').trim();
    const removeBtn = fileNode.querySelector('.jet-form-builder-file-upload__file-remove');
    const fileName = String((_removeBtn$dataset$fi = removeBtn?.dataset?.fileName) !== null && _removeBtn$dataset$fi !== void 0 ? _removeBtn$dataset$fi : '').trim();
    const img = fileNode.querySelector('img');
    if (img && url) {
      items.push(renderImageItem(url, fileName));
      return;
    }
    if (fileName || url) {
      items.push(renderFileItem(url, fileName));
    }
  });
  return wrapItems(items);
}
function getObservedContainer(fieldNode) {
  const wrapper = fieldNode.closest('.field-type-media-field');
  if (!wrapper) {
    return null;
  }
  return wrapper.querySelector('.jet-form-builder-file-upload__files') || wrapper.querySelector('.jet-form-builder-file-upload') || wrapper;
}
function triggerMediaRefresh(fieldNode) {
  fieldNode.dispatchEvent(new Event('input', {
    bubbles: true
  }));
  fieldNode.dispatchEvent(new Event('change', {
    bubbles: true
  }));
}
function bindRemoveHandler(fieldNode) {
  if (!fieldNode || fieldNode.__jfbMediaRemoveBound) {
    return;
  }
  const wrapper = fieldNode.closest('.field-type-media-field');
  if (!wrapper) {
    return;
  }
  fieldNode.__jfbMediaRemoveBound = true;
  wrapper.addEventListener('click', event => {
    const removeBtn = event.target.closest('.jet-form-builder-file-upload__file-remove');
    if (!removeBtn) {
      return;
    }
    setTimeout(() => {
      triggerMediaRefresh(fieldNode);
    }, 0);
  });
}
function scheduleRefresh(fieldNode) {
  if (!fieldNode) {
    return;
  }
  const observedNode = getObservedContainer(fieldNode);
  if (!observedNode) {
    return;
  }
  if (fieldNode.__jfbMediaMacrosObserver) {
    fieldNode.__jfbMediaMacrosObserver.disconnect();
    fieldNode.__jfbMediaMacrosObserver = null;
  }
  const initialMarkup = collectMediaFromDom(fieldNode);
  const observer = new MutationObserver(() => {
    const nextMarkup = collectMediaFromDom(fieldNode);
    if (nextMarkup === initialMarkup) {
      return;
    }
    observer.disconnect();
    fieldNode.__jfbMediaMacrosObserver = null;
    triggerMediaRefresh(fieldNode);
  });
  fieldNode.__jfbMediaMacrosObserver = observer;
  observer.observe(observedNode, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['data-file', 'src']
  });
  setTimeout(() => {
    if (fieldNode.__jfbMediaMacrosObserver !== observer) {
      return;
    }
    observer.disconnect();
    fieldNode.__jfbMediaMacrosObserver = null;
    const fallbackMarkup = collectMediaFromDom(fieldNode);
    if (fallbackMarkup !== initialMarkup) {
      triggerMediaRefresh(fieldNode);
    }
  }, 300);
}
function resolveMediaMacrosValue(current, $fieldNode) {
  const fieldNode = $fieldNode?.[0] || $fieldNode;
  if (!isMediaField(fieldNode)) {
    return current;
  }
  bindRemoveHandler(fieldNode);
  scheduleRefresh(fieldNode);
  return collectMediaFromDom(fieldNode);
}

/***/ },

/***/ "./frontend/media.field/signal.js"
/*!****************************************!*\
  !*** ./frontend/media.field/signal.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
  for (const file of normalizeFiles(files)) {
    if (!file?.name) {
      continue;
    }
    if (seen.has(file.name)) {
      continue;
    }
    seen.add(file.name);
    result.push(file);
  }
  return result;
}
function normalizeFiles(files) {
  if (!files) {
    return [];
  }
  if (Array.isArray(files)) {
    return files;
  }
  if ('function' === typeof files[Symbol.iterator]) {
    return Array.from(files);
  }
  if ('object' === typeof files) {
    return Object.values(files);
  }
  return [];
}

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/* harmony import */ var _resolveMediaMacrosValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolveMediaMacrosValue */ "./frontend/media.field/resolveMediaMacrosValue.js");



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

/**
 * Handle Media Field macro value parsing (outside repeater).
 *
 * This filter is triggered when a macro is parsed in a regular context,
 * i.e. not inside a repeater field.
 */
addFilter('jet.fb.macro.field.value', 'jet-form-builder/media-field', _resolveMediaMacrosValue__WEBPACK_IMPORTED_MODULE_2__.resolveMediaMacrosValue);

/**
 * Handle Media Field macro value parsing inside repeater.
 *
 * This is a separate flow from the regular macro parsing.
 * This filter is triggered only when the macro is used inside a repeater,
 * where field values have a different structure and context.
 *
 * @see https://github.com/Crocoblock/issues-tracker/issues/5654
 */
addFilter('jet.fb.macro.inside.repeater.field.value', 'jet-form-builder/media-field', _resolveMediaMacrosValue__WEBPACK_IMPORTED_MODULE_2__.resolveMediaMacrosValue);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaFJBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQzdPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL2lucHV0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL3Jlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFwcGVuZE5vZGVzKCBjb250YWluZXIsIG5vZGVzICkge1xyXG5cdC8qKlxyXG5cdCAqIFdlIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGJlY2F1c2Ugd2UgbmVlZCBhIHN0YXRpYyBzZXQgb2YgZWxlbWVudHMuXHJcblx0ICogSWYgeW91IGFwcGx5IHRoZSAuY2hpbGRyZW4gb3IgLmNoaWxkTm9kZXMgcHJvcGVydHksXHJcblx0ICogdGhleSB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIGxpc3Qgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBlbGVtZW50cy5cclxuXHQgKi9cclxuXHRjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcclxuXHQpO1xyXG5cclxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiBjaGlsZHJlbiApIHtcclxuXHRcdGlmICggbm9kZXMuc29tZSggbm9kZSA9PiBub2RlLmlzRXF1YWxOb2RlKCBjaGlsZCApICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGQucmVtb3ZlKCk7XHJcblx0fVxyXG5cdGZvciAoIGNvbnN0IGluZGV4IGluIG5vZGVzICkge1xyXG5cdFx0aWYgKCAhbm9kZXMuaGFzT3duUHJvcGVydHkoIGluZGV4ICkgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cdFx0Y29uc3Qgbm9kZSA9IG5vZGVzWyBpbmRleCBdO1xyXG5cclxuXHRcdGlmICggbm9kZS5pc0Nvbm5lY3RlZCApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblxyXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBub2RlICk7XHJcblx0fVxyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBpbnB1dEZpbGVBcnJheVxyXG4gKiBAcmV0dXJuIHtGaWxlTGlzdH1cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGVMaXN0KCBpbnB1dEZpbGVBcnJheSApIHtcclxuXHRjb25zdCB0cmFuc2ZlciA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuXHJcblx0Zm9yICggY29uc3QgZmlsZSBvZiBpbnB1dEZpbGVBcnJheSApIHtcclxuXHRcdHRyYW5zZmVyLml0ZW1zLmFkZCggZmlsZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHRyYW5zZmVyLmZpbGVzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGaWxlKCBibG9iLCBmaWxlTmFtZSApIHtcclxuXHRyZXR1cm4gbmV3IEZpbGUoIFsgYmxvYiBdLCBmaWxlTmFtZSwgYmxvYiApO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIGlzRmlsZSggbm9kZSApIHtcclxuXHRpZiAoIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdqZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19pbnB1dCcgKSApIHtcclxuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZXhwb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUsIGNyZWF0ZUZpbGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgeyBJbnB1dERhdGEgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gRmlsZURhdGEoKSB7XHJcblx0SW5wdXREYXRhLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc011bHRpcGxlICAgICAgICA9IGZhbHNlO1xyXG5cdHRoaXMucHJldkZpbGVzICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSBudWxsO1xyXG5cdHRoaXMucHJldmlld3NDb250YWluZXIgPSBudWxsO1xyXG5cdHRoaXMud3JhcHBlciAgICAgICAgICAgPSBudWxsO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzRmlsZSggbm9kZSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xyXG5cclxuXHRcdG5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIGV2ZW50ID0+IHtcclxuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gY3JlYXRlRmlsZUxpc3QoXHJcblx0XHRcdFx0dGhpcy5pc011bHRpcGxlXHJcblx0XHRcdFx0PyBbIC4uLnRoaXMucHJldkZpbGVzID8/IFtdLCAuLi5ldmVudC50YXJnZXQuZmlsZXMgXVxyXG5cdFx0XHRcdDogWyAuLi5ldmVudC50YXJnZXQuZmlsZXMgXSxcclxuXHRcdFx0KTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcclxuXHJcblx0XHR0aGlzLmlzTXVsdGlwbGUgPSBub2RlLm11bHRpcGxlO1xyXG5cclxuXHRcdHRoaXMud3JhcHBlciAgICAgICAgICAgPSBub2RlLmNsb3Nlc3QoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZCcsXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGVzJyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLnRlbXBsYXRlICAgICAgICAgID0gdGhpcy53cmFwcGVyLlxyXG5cdFx0XHRjbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICkuXHJcblx0XHRcdHF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlcl9fcHJldmlldy10ZW1wbGF0ZScgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnNldFZhbHVlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5jYWxsYWJsZS5sb2FkRmlsZXMoKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSA9ICgpID0+IHt9O1xyXG5cclxuXHR0aGlzLnJlUXVlcnlWYWx1ZSA9ICgpID0+IHt9O1xyXG59XHJcblxyXG5GaWxlRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG4vKipcclxuICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuRmlsZURhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge0hUTUxFbGVtZW50fVxyXG4gKi9cclxuRmlsZURhdGEucHJvdG90eXBlLnByZXZpZXdzQ29udGFpbmVyID0gbnVsbDtcclxuLyoqXHJcbiAqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fVxyXG4gKi9cclxuRmlsZURhdGEucHJvdG90eXBlLnRlbXBsYXRlID0gbnVsbDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGVEYXRhOyIsImZ1bmN0aW9uIGVzY2FwZUh0bWwoIHZhbHVlICkge1xyXG5cdHJldHVybiBTdHJpbmcoIHZhbHVlID8/ICcnIClcclxuXHRcdC5yZXBsYWNlQWxsKCAnJicsICcmYW1wOycgKVxyXG5cdFx0LnJlcGxhY2VBbGwoICc8JywgJyZsdDsnIClcclxuXHRcdC5yZXBsYWNlQWxsKCAnPicsICcmZ3Q7JyApXHJcblx0XHQucmVwbGFjZUFsbCggJ1wiJywgJyZxdW90OycgKVxyXG5cdFx0LnJlcGxhY2VBbGwoIFwiJ1wiLCAnJiMwMzk7JyApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc01lZGlhRmllbGQoIGZpZWxkTm9kZSApIHtcclxuXHRpZiAoICEgZmllbGROb2RlICkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuICEhIGZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckltYWdlSXRlbSggdXJsLCBuYW1lID0gJycgKSB7XHJcblx0Y29uc3QgbGFiZWwgPSBuYW1lIHx8ICdJbWFnZSc7XHJcblxyXG5cdHJldHVybiBgXHJcblx0XHQ8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOm5vbmU7IG1hcmdpbjowIDAgMTJweCAwO1wiPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IG1heC13aWR0aDoxNTBweDtcIj5cclxuXHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRzcmM9XCIkeyBlc2NhcGVIdG1sKCB1cmwgKSB9XCJcclxuXHRcdFx0XHRcdGFsdD1cIiR7IGVzY2FwZUh0bWwoIGxhYmVsICkgfVwiXHJcblx0XHRcdFx0XHRzdHlsZT1cIlxyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDoxNTBweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjE1MHB4O1xyXG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OmNvdmVyO1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICNkY2RjZGM7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6OHB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT1cIlxyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo2cHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MTNweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OjEuNDtcclxuXHRcdFx0XHRcdGNvbG9yOiM0NDQ7XHJcblx0XHRcdFx0XHR3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7XHJcblx0XHRcdFx0XCI+XHJcblx0XHRcdFx0XHQkeyBlc2NhcGVIdG1sKCBsYWJlbCApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZpbGVJdGVtKCB1cmwsIG5hbWUgPSAnJyApIHtcclxuXHRjb25zdCBsYWJlbCA9IG5hbWUgfHwgdXJsIHx8ICdGaWxlJztcclxuXHJcblx0aWYgKCB1cmwgKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHQ8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOm5vbmU7IG1hcmdpbjowIDAgMTBweCAwO1wiPlxyXG5cdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRocmVmPVwiJHsgZXNjYXBlSHRtbCggdXJsICkgfVwiXHJcblx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRzdHlsZT1cIlxyXG5cdFx0XHRcdFx0XHRjb2xvcjojZDYzMzg0O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG5cdFx0XHRcdFx0XHR3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDoxLjQ7XHJcblx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdPCfk4QgJHsgZXNjYXBlSHRtbCggbGFiZWwgKSB9XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0YDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBgXHJcblx0XHQ8bGkgc3R5bGU9XCJcclxuXHRcdFx0bGlzdC1zdHlsZTpub25lO1xyXG5cdFx0XHRtYXJnaW46MCAwIDEwcHggMDtcclxuXHRcdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OjEuNDtcclxuXHRcdFx0d29yZC1icmVhazpicmVhay13b3JkO1xyXG5cdFx0XHRjb2xvcjojNDQ0O1xyXG5cdFx0XCI+XHJcblx0XHRcdPCfk4QgJHsgZXNjYXBlSHRtbCggbGFiZWwgKSB9XHJcblx0XHQ8L2xpPlxyXG5cdGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBJdGVtcyggaXRlbXMgKSB7XHJcblx0aWYgKCAhIGl0ZW1zLmxlbmd0aCApIHtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdHJldHVybiBgXHJcblx0XHQ8ZGl2IHN0eWxlPVwiXHJcblx0XHRcdGRpc3BsYXk6YmxvY2s7XHJcblx0XHRcdHBhZGRpbmc6MDtcclxuXHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcIj5cclxuXHRcdFx0PHVsIHN0eWxlPVwiXHJcblx0XHRcdFx0bWFyZ2luOjA7XHJcblx0XHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRcdGxpc3Qtc3R5bGU6bm9uZTtcclxuXHRcdFx0XCI+XHJcblx0XHRcdFx0JHsgaXRlbXMuam9pbiggJycgKSB9XHJcblx0XHRcdDwvdWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0TWVkaWFGcm9tRG9tKCBmaWVsZE5vZGUgKSB7XHJcblx0Y29uc3Qgd3JhcHBlciA9IGZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XHJcblxyXG5cdGlmICggISB3cmFwcGVyICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZmlsZU5vZGVzID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJ1xyXG5cdCk7XHJcblxyXG5cdGlmICggISBmaWxlTm9kZXMubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaXRlbXMgPSBbXTtcclxuXHJcblx0ZmlsZU5vZGVzLmZvckVhY2goICggZmlsZU5vZGUgKSA9PiB7XHJcblx0XHRjb25zdCB1cmwgPSBTdHJpbmcoIGZpbGVOb2RlLmRhdGFzZXQ/LmZpbGUgPz8gJycgKS50cmltKCk7XHJcblxyXG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gZmlsZU5vZGUucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZSdcclxuXHRcdCk7XHJcblxyXG5cdFx0Y29uc3QgZmlsZU5hbWUgPSBTdHJpbmcoXHJcblx0XHRcdHJlbW92ZUJ0bj8uZGF0YXNldD8uZmlsZU5hbWUgPz8gJydcclxuXHRcdCkudHJpbSgpO1xyXG5cclxuXHRcdGNvbnN0IGltZyA9IGZpbGVOb2RlLnF1ZXJ5U2VsZWN0b3IoICdpbWcnICk7XHJcblxyXG5cdFx0aWYgKCBpbWcgJiYgdXJsICkge1xyXG5cdFx0XHRpdGVtcy5wdXNoKCByZW5kZXJJbWFnZUl0ZW0oIHVybCwgZmlsZU5hbWUgKSApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBmaWxlTmFtZSB8fCB1cmwgKSB7XHJcblx0XHRcdGl0ZW1zLnB1c2goIHJlbmRlckZpbGVJdGVtKCB1cmwsIGZpbGVOYW1lICkgKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdHJldHVybiB3cmFwSXRlbXMoIGl0ZW1zICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9ic2VydmVkQ29udGFpbmVyKCBmaWVsZE5vZGUgKSB7XHJcblx0Y29uc3Qgd3JhcHBlciA9IGZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XHJcblxyXG5cdGlmICggISB3cmFwcGVyICkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGVzJyApIHx8XHJcblx0XHR3cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZCcgKSB8fFxyXG5cdFx0d3JhcHBlclxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyaWdnZXJNZWRpYVJlZnJlc2goIGZpZWxkTm9kZSApIHtcclxuXHRmaWVsZE5vZGUuZGlzcGF0Y2hFdmVudChcclxuXHRcdG5ldyBFdmVudCggJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0gKVxyXG5cdCk7XHJcblxyXG5cdGZpZWxkTm9kZS5kaXNwYXRjaEV2ZW50KFxyXG5cdFx0bmV3IEV2ZW50KCAnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0gKVxyXG5cdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJpbmRSZW1vdmVIYW5kbGVyKCBmaWVsZE5vZGUgKSB7XHJcblx0aWYgKCAhIGZpZWxkTm9kZSB8fCBmaWVsZE5vZGUuX19qZmJNZWRpYVJlbW92ZUJvdW5kICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qgd3JhcHBlciA9IGZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XHJcblxyXG5cdGlmICggISB3cmFwcGVyICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0ZmllbGROb2RlLl9famZiTWVkaWFSZW1vdmVCb3VuZCA9IHRydWU7XHJcblxyXG5cdHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBldmVudCApID0+IHtcclxuXHRcdGNvbnN0IHJlbW92ZUJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJ1xyXG5cdFx0KTtcclxuXHJcblx0XHRpZiAoICEgcmVtb3ZlQnRuICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xyXG5cdFx0XHR0cmlnZ2VyTWVkaWFSZWZyZXNoKCBmaWVsZE5vZGUgKTtcclxuXHRcdH0sIDAgKTtcclxuXHR9ICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNjaGVkdWxlUmVmcmVzaCggZmllbGROb2RlICkge1xyXG5cdGlmICggISBmaWVsZE5vZGUgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBvYnNlcnZlZE5vZGUgPSBnZXRPYnNlcnZlZENvbnRhaW5lciggZmllbGROb2RlICk7XHJcblxyXG5cdGlmICggISBvYnNlcnZlZE5vZGUgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIGZpZWxkTm9kZS5fX2pmYk1lZGlhTWFjcm9zT2JzZXJ2ZXIgKSB7XHJcblx0XHRmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuXHRcdGZpZWxkTm9kZS5fX2pmYk1lZGlhTWFjcm9zT2JzZXJ2ZXIgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgaW5pdGlhbE1hcmt1cCA9IGNvbGxlY3RNZWRpYUZyb21Eb20oIGZpZWxkTm9kZSApO1xyXG5cclxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCAoKSA9PiB7XHJcblx0XHRjb25zdCBuZXh0TWFya3VwID0gY29sbGVjdE1lZGlhRnJvbURvbSggZmllbGROb2RlICk7XHJcblxyXG5cdFx0aWYgKCBuZXh0TWFya3VwID09PSBpbml0aWFsTWFya3VwICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG5cdFx0ZmllbGROb2RlLl9famZiTWVkaWFNYWNyb3NPYnNlcnZlciA9IG51bGw7XHJcblxyXG5cdFx0dHJpZ2dlck1lZGlhUmVmcmVzaCggZmllbGROb2RlICk7XHJcblx0fSApO1xyXG5cclxuXHRmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyID0gb2JzZXJ2ZXI7XHJcblxyXG5cdG9ic2VydmVyLm9ic2VydmUoIG9ic2VydmVkTm9kZSwge1xyXG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxyXG5cdFx0c3VidHJlZTogdHJ1ZSxcclxuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXHJcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsgJ2RhdGEtZmlsZScsICdzcmMnIF0sXHJcblx0fSApO1xyXG5cclxuXHRzZXRUaW1lb3V0KCAoKSA9PiB7XHJcblx0XHRpZiAoIGZpZWxkTm9kZS5fX2pmYk1lZGlhTWFjcm9zT2JzZXJ2ZXIgIT09IG9ic2VydmVyICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG5cdFx0ZmllbGROb2RlLl9famZiTWVkaWFNYWNyb3NPYnNlcnZlciA9IG51bGw7XHJcblxyXG5cdFx0Y29uc3QgZmFsbGJhY2tNYXJrdXAgPSBjb2xsZWN0TWVkaWFGcm9tRG9tKCBmaWVsZE5vZGUgKTtcclxuXHJcblx0XHRpZiAoIGZhbGxiYWNrTWFya3VwICE9PSBpbml0aWFsTWFya3VwICkge1xyXG5cdFx0XHR0cmlnZ2VyTWVkaWFSZWZyZXNoKCBmaWVsZE5vZGUgKTtcclxuXHRcdH1cclxuXHR9LCAzMDAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlICkge1xyXG5cdGNvbnN0IGZpZWxkTm9kZSA9ICRmaWVsZE5vZGU/LlsgMCBdIHx8ICRmaWVsZE5vZGU7XHJcblxyXG5cdGlmICggISBpc01lZGlhRmllbGQoIGZpZWxkTm9kZSApICkge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG5cclxuXHRiaW5kUmVtb3ZlSGFuZGxlciggZmllbGROb2RlICk7XHJcblx0c2NoZWR1bGVSZWZyZXNoKCBmaWVsZE5vZGUgKTtcclxuXHJcblx0cmV0dXJuIGNvbGxlY3RNZWRpYUZyb21Eb20oIGZpZWxkTm9kZSApO1xyXG59IiwiaW1wb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGUsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7IEJhc2VTaWduYWwgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuLyoqXHJcbiAqIEBwcm9wZXJ0eSB7RmlsZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbEZpbGUoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5sb2NrLmN1cnJlbnQgPSB0cnVlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzRmlsZSggbm9kZSApO1xuXHR9O1xyXG5cclxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdICAgID0gdGhpcy5pbnB1dC5ub2RlcztcclxuXHRcdGNvbnN0IHByZXZpZXdzICAgID0gW107XHJcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgZmlsZXMgICAgICAgPSB1bmlxdWVCeU5hbWUoIGN1cnJlbnQgPz8gW10gKTtcblxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XG5cdFx0XHRwcmV2aWV3cy5wdXNoKCB0aGlzLmdldFByZXZpZXcoIGZpbGUgKSApO1xuXHRcdH1cblxyXG5cdFx0YXBwZW5kTm9kZXMoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIsIHByZXZpZXdzICk7XHJcblxyXG5cdFx0bm9kZS5maWxlcyAgICAgICAgICAgPSBjcmVhdGVGaWxlTGlzdCggZmlsZXMgKTtcclxuXHRcdHRoaXMuaW5wdXQucHJldkZpbGVzID0gZmlsZXM7XHJcblxyXG5cdFx0dGhpcy5zb3J0YWJsZSgpO1xyXG5cdH07XHJcbn1cclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmxvYWRGaWxlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb25zdCBmaWxlcyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXHJcblx0KTtcclxuXHJcblx0Y29uc3QgdXJscyA9IFtdO1xyXG5cclxuXHRmb3IgKCBjb25zdCBwcmV2aWV3IG9mIGZpbGVzICkge1xyXG5cdFx0dGhpcy5hZGRSZW1vdmVIYW5kbGVyKCBwcmV2aWV3ICk7XHJcblxyXG5cdFx0Y29uc3QgdXJsICAgICAgICAgID0gcHJldmlldy5kYXRhc2V0LmZpbGU7XHJcblx0XHRjb25zdCByZW1vdmVOb2RlICAgPSBwcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxyXG5cdFx0KTtcclxuXHRcdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHJlbW92ZU5vZGUuZGF0YXNldDtcclxuXHJcblx0XHR1cmxzLnB1c2goIFsgdXJsLCBmaWxlTmFtZSBdICk7XHJcblx0fVxyXG5cclxuXHRpZiAoICF1cmxzLmxlbmd0aCApIHtcclxuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXG5cdFByb21pc2UuYWxsU2V0dGxlZCggdXJscy5tYXAoICggWyB1cmwsIGZpbGVOYW1lIF0gKSA9PiAoXG5cdFx0bmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0ZmV0Y2goIHVybCApLnRoZW4oXG5cdFx0XHRcdHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSxcblx0XHRcdCkudGhlbihcblx0XHRcdFx0YmxvYiA9PiByZXNvbHZlKCBjcmVhdGVGaWxlKCBibG9iLCBmaWxlTmFtZSApICksXG5cdFx0XHQpLmNhdGNoKCByZWplY3QgKTtcblx0XHR9IClcblx0KSApICkudGhlbiggdmFsdWVzID0+IHtcblx0XHRjb25zdCBuZXdGaWxlcyA9IHZhbHVlcy5tYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcblxuXG5cdFx0Y29uc3QgdW5pcXVlICAgPSB1bmlxdWVCeU5hbWUoIG5ld0ZpbGVzICk7XG5cblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaW5wdXQuc2lsZW5jZVNldCggY3JlYXRlRmlsZUxpc3QoIHVuaXF1ZSApICk7XG5cdH0gKS5jYXRjaCggKCkgPT4ge1xuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XG5cdH0gKTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLnNvcnRhYmxlID0gZnVuY3Rpb24gKCkge1xuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS51bmJpbmQoKTtcblxuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS5zb3J0YWJsZSgge1xyXG5cdFx0aXRlbXM6ICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXHJcblx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuXHR9ICkuYmluZCggJ3NvcnR1cGRhdGUnLCAoKSA9PiB0aGlzLm9uU29ydENhbGxiYWNrKCkgKTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLm9uU29ydENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHRyYW5zZmVyICA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuXHRjb25zdCBbIGlucHV0IF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZScsXHJcblx0KTtcclxuXHJcblx0Zm9yICggY29uc3QgcmVtb3ZlQnV0dG9uIG9mIHJlbW92ZUJ1dHRvbnMgKSB7XHJcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVCdXR0b24uZGF0YXNldDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBmaWxlIG9mIGlucHV0LmZpbGVzICkge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXHJcblx0XHRcdGlmICggZmlsZS5uYW1lICE9PSBmaWxlTmFtZSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dHJhbnNmZXIuaXRlbXMuYWRkKCBmaWxlICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSB0cmFuc2Zlci5maWxlcztcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmFkZFJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoIHByZXZpZXcgKSB7XHJcblx0cHJldmlldy5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZScsXHJcblx0KS5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2NsaWNrJyxcclxuXHRcdHRoaXMucmVtb3ZlRmlsZS5iaW5kKCB0aGlzICksXHJcblx0KTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmdldFByZXZpZXcgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XHJcblx0Y29uc3QgcmVtb3ZlQnV0dG9uID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0YFtkYXRhLWZpbGUtbmFtZT1cIiR7IGZpbGUubmFtZSB9XCJdYCxcclxuXHQpO1xyXG5cclxuXHRpZiAoICFyZW1vdmVCdXR0b24gKSB7XHJcblx0XHRjb25zdCBwcmV2aWV3ID0gdGhpcy5jcmVhdGVQcmV2aWV3KCBmaWxlICk7XHJcblx0XHR0aGlzLmFkZFJlbW92ZUhhbmRsZXIoIHByZXZpZXcgKTtcclxuXHJcblx0XHRyZXR1cm4gcHJldmlldztcclxuXHR9XHJcblxyXG5cdHJldHVybiByZW1vdmVCdXR0b24uY2xvc2VzdChcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXHJcblx0KTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmNyZWF0ZVByZXZpZXcgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XHJcblx0Y29uc3QgdXJsICAgICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7XHJcblx0bGV0IHsgaW5uZXJIVE1MIH0gPSB0aGlzLmlucHV0LnRlbXBsYXRlO1xyXG5cdGlubmVySFRNTCAgICAgICAgID0gaW5uZXJIVE1MLnJlcGxhY2UoICclZmlsZV91cmwlJywgdXJsICk7XHJcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX25hbWUlJywgZmlsZS5uYW1lICk7XHJcblxyXG5cdGNvbnN0IHdyYXBwZXIgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xyXG5cdHdyYXBwZXIuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG5cclxuXHRjb25zdCBub2RlID0gd3JhcHBlci5jb250ZW50LmZpcnN0Q2hpbGQ7XHJcblxyXG5cdGlmICggL15pbWFnZVxcLy8udGVzdCggZmlsZS50eXBlICkgKSB7XHJcblx0XHRjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbWcnICk7XHJcblx0XHRpbWFnZS5zcmMgICA9IHVybDtcclxuXHRcdGltYWdlLmFsdCAgID0gZmlsZS5uYW1lO1xyXG5cclxuXHRcdG5vZGUucHJlcGVuZCggaW1hZ2UgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2RlO1xyXG59O1xyXG5cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUucmVtb3ZlRmlsZSA9IGZ1bmN0aW9uICggeyB0YXJnZXQgfSApIHtcclxuXHRjb25zdCBjbGFzc05hbWUgPSAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJztcclxuXHRjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmlucHV0O1xyXG5cclxuXHRpZiAoICF0YXJnZXQubWF0Y2hlcyggY2xhc3NOYW1lICkgKSB7XHJcblx0XHR0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdCggY2xhc3NOYW1lICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB7IGZpbGVOYW1lIH0gPSB0YXJnZXQuZGF0YXNldDtcblxuXHRjb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcblxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIHZhbHVlLmN1cnJlbnQgKSB7XG5cdFx0aWYgKCBmaWxlTmFtZSAhPT0gZmlsZS5uYW1lICkge1xuXHRcdFx0ZHQuaXRlbXMuYWRkKCBmaWxlICk7XG5cdFx0fVxuXHR9XHJcblxyXG5cdHZhbHVlLmN1cnJlbnQgPSBkdC5maWxlcztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIGZpbGVOYW1lXHJcbiAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAqL1xyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5nZXRGaWxlTm9kZSA9IGZ1bmN0aW9uICggZmlsZU5hbWUgKSB7XHJcblx0Y29uc3QgYXR0ciA9IGBkYXRhLWZpbGUtbmFtZT1cIiR7IGZpbGVOYW1lIH1cImA7XHJcblxyXG5cdGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuXHRcdGAuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmVbJHsgYXR0ciB9XWAsXHJcblx0KTtcclxuXHJcblx0cmV0dXJuIHJlbW92ZUJ0bi5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbEZpbGU7XHJcblxyXG5mdW5jdGlvbiB1bmlxdWVCeU5hbWUoIGZpbGVzICkge1xyXG5cdGNvbnN0IHNlZW4gICA9IG5ldyBTZXQoKTtcclxuXHRjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgZmlsZSBvZiBub3JtYWxpemVGaWxlcyggZmlsZXMgKSApIHtcclxuXHRcdGlmICggIWZpbGU/Lm5hbWUgKSB7XHJcblx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggc2Vlbi5oYXMoIGZpbGUubmFtZSApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHNlZW4uYWRkKCBmaWxlLm5hbWUgKTtcclxuXHRcdHJlc3VsdC5wdXNoKCBmaWxlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBub3JtYWxpemVGaWxlcyggZmlsZXMgKSB7XHJcblx0aWYgKCAhZmlsZXMgKSB7XHJcblx0XHRyZXR1cm4gW107XHJcblx0fVxyXG5cclxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIGZpbGVzICkgKSB7XHJcblx0XHRyZXR1cm4gZmlsZXM7XHJcblx0fVxyXG5cclxuXHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBmaWxlc1sgU3ltYm9sLml0ZXJhdG9yIF0gKSB7XHJcblx0XHRyZXR1cm4gQXJyYXkuZnJvbSggZmlsZXMgKTtcclxuXHR9XHJcblxyXG5cdGlmICggJ29iamVjdCcgPT09IHR5cGVvZiBmaWxlcyApIHtcclxuXHRcdHJldHVybiBPYmplY3QudmFsdWVzKCBmaWxlcyApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIFtdO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRmlsZURhdGEgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTaWduYWxGaWxlIGZyb20gJy4vc2lnbmFsJztcclxuaW1wb3J0IHsgcmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUgfSBmcm9tICcuL3Jlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlJztcclxuXHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBGaWxlRGF0YSwgLi4uaW5wdXRzIF07XHJcblxyXG5cdFx0cmV0dXJuIGlucHV0cztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuc2lnbmFscycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcclxuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbEZpbGUsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZSBNZWRpYSBGaWVsZCBtYWNybyB2YWx1ZSBwYXJzaW5nIChvdXRzaWRlIHJlcGVhdGVyKS5cclxuICpcclxuICogVGhpcyBmaWx0ZXIgaXMgdHJpZ2dlcmVkIHdoZW4gYSBtYWNybyBpcyBwYXJzZWQgaW4gYSByZWd1bGFyIGNvbnRleHQsXHJcbiAqIGkuZS4gbm90IGluc2lkZSBhIHJlcGVhdGVyIGZpZWxkLlxyXG4gKi9cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIubWFjcm8uZmllbGQudmFsdWUnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcclxuXHRyZXNvbHZlTWVkaWFNYWNyb3NWYWx1ZSxcclxuKTtcclxuXHJcbi8qKlxyXG4gKiBIYW5kbGUgTWVkaWEgRmllbGQgbWFjcm8gdmFsdWUgcGFyc2luZyBpbnNpZGUgcmVwZWF0ZXIuXHJcbiAqXHJcbiAqIFRoaXMgaXMgYSBzZXBhcmF0ZSBmbG93IGZyb20gdGhlIHJlZ3VsYXIgbWFjcm8gcGFyc2luZy5cclxuICogVGhpcyBmaWx0ZXIgaXMgdHJpZ2dlcmVkIG9ubHkgd2hlbiB0aGUgbWFjcm8gaXMgdXNlZCBpbnNpZGUgYSByZXBlYXRlcixcclxuICogd2hlcmUgZmllbGQgdmFsdWVzIGhhdmUgYSBkaWZmZXJlbnQgc3RydWN0dXJlIGFuZCBjb250ZXh0LlxyXG4gKlxyXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy81NjU0XHJcbiAqL1xyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5tYWNyby5pbnNpZGUucmVwZWF0ZXIuZmllbGQudmFsdWUnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcclxuXHRyZXNvbHZlTWVkaWFNYWNyb3NWYWx1ZSxcclxuKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=