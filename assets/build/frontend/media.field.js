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
 * Escape a value before it is interpolated into a double-quoted HTML attribute
 * via innerHTML. The preview template placeholders (%file_url%, %file_name%)
 * land inside `data-file="…"` / `data-file-name="…"`, and file.name is
 * attacker-controllable (it is restored from the server-rendered dataset, which
 * the browser decodes back to raw characters). Without this, a quote in the
 * value breaks out of the attribute and injects live event handlers. See #20390.
 *
 * @param  {*} value
 * @return {string}
 */
function escapeAttr(value) {
  return String(value !== null && value !== void 0 ? value : '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

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
  innerHTML = innerHTML.replace('%file_url%', escapeAttr(url));
  innerHTML = innerHTML.replace('%file_name%', escapeAttr(file.name));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaFJBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7O0FDaFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvcmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXBwZW5kTm9kZXMoIGNvbnRhaW5lciwgbm9kZXMgKSB7XG5cdC8qKlxuXHQgKiBXZSB1c2UgcXVlcnlTZWxlY3RvckFsbCBiZWNhdXNlIHdlIG5lZWQgYSBzdGF0aWMgc2V0IG9mIGVsZW1lbnRzLlxuXHQgKiBJZiB5b3UgYXBwbHkgdGhlIC5jaGlsZHJlbiBvciAuY2hpbGROb2RlcyBwcm9wZXJ0eSxcblx0ICogdGhleSB3aWxsIGFsd2F5cyByZXR1cm4gdGhlIGxpc3Qgb2YgY3VycmVudGx5IGF2YWlsYWJsZSBlbGVtZW50cy5cblx0ICovXG5cdGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcblx0KTtcblxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiBjaGlsZHJlbiApIHtcblx0XHRpZiAoIG5vZGVzLnNvbWUoIG5vZGUgPT4gbm9kZS5pc0VxdWFsTm9kZSggY2hpbGQgKSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNoaWxkLnJlbW92ZSgpO1xuXHR9XG5cdGZvciAoIGNvbnN0IGluZGV4IGluIG5vZGVzICkge1xuXHRcdGlmICggIW5vZGVzLmhhc093blByb3BlcnR5KCBpbmRleCApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IG5vZGUgPSBub2Rlc1sgaW5kZXggXTtcblxuXHRcdGlmICggbm9kZS5pc0Nvbm5lY3RlZCApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCggbm9kZSApO1xuXHR9XG59XG5cbi8qKlxuICogQHBhcmFtICBpbnB1dEZpbGVBcnJheVxuICogQHJldHVybiB7RmlsZUxpc3R9XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbGVMaXN0KCBpbnB1dEZpbGVBcnJheSApIHtcblx0Y29uc3QgdHJhbnNmZXIgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cblx0Zm9yICggY29uc3QgZmlsZSBvZiBpbnB1dEZpbGVBcnJheSApIHtcblx0XHR0cmFuc2Zlci5pdGVtcy5hZGQoIGZpbGUgKTtcblx0fVxuXG5cdHJldHVybiB0cmFuc2Zlci5maWxlcztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmlsZSggYmxvYiwgZmlsZU5hbWUgKSB7XG5cdHJldHVybiBuZXcgRmlsZSggWyBibG9iIF0sIGZpbGVOYW1lLCBibG9iICk7XG59XG5cbi8qKlxuICogQHBhcmFtICBub2RlIHtIVE1MRWxlbWVudH1cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSggbm9kZSApIHtcblx0aWYgKCBub2RlLmNsYXNzTGlzdC5jb250YWlucygnamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9faW5wdXQnICkgKSB7XG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlO1xuXHR9XG5cblx0cmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBhcHBlbmROb2RlcywgY3JlYXRlRmlsZUxpc3QsIGlzRmlsZSwgY3JlYXRlRmlsZSB9OyIsImltcG9ydCB7IGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHsgSW5wdXREYXRhIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gRmlsZURhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc011bHRpcGxlICAgICAgICA9IGZhbHNlO1xuXHR0aGlzLnByZXZGaWxlcyAgICAgICAgID0gbnVsbDtcblx0dGhpcy50ZW1wbGF0ZSAgICAgICAgICA9IG51bGw7XG5cdHRoaXMucHJldmlld3NDb250YWluZXIgPSBudWxsO1xuXHR0aGlzLndyYXBwZXIgICAgICAgICAgID0gbnVsbDtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0ZpbGUoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XG5cblx0XHRub2RlLmFkZEV2ZW50TGlzdGVuZXIoICdjaGFuZ2UnLCBldmVudCA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBjcmVhdGVGaWxlTGlzdChcblx0XHRcdFx0dGhpcy5pc011bHRpcGxlXG5cdFx0XHRcdD8gWyAuLi50aGlzLnByZXZGaWxlcyA/PyBbXSwgLi4uZXZlbnQudGFyZ2V0LmZpbGVzIF1cblx0XHRcdFx0OiBbIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdLFxuXHRcdFx0KTtcblx0XHR9ICk7XG5cdH07XG5cdHRoaXMuc2V0Tm9kZSAgICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKCB0aGlzLCBub2RlICk7XG5cblx0XHR0aGlzLmlzTXVsdGlwbGUgPSBub2RlLm11bHRpcGxlO1xuXG5cdFx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG5vZGUuY2xvc2VzdChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZCcsXG5cdFx0KTtcblx0XHR0aGlzLnByZXZpZXdzQ29udGFpbmVyID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGVzJyxcblx0XHQpO1xuXHRcdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSB0aGlzLndyYXBwZXIuXG5cdFx0XHRjbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICkuXG5cdFx0XHRxdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXJfX3ByZXZpZXctdGVtcGxhdGUnICk7XG5cdH07XG5cblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmNhbGxhYmxlLmxvYWRGaWxlcygpO1xuXHR9O1xuXG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlID0gKCkgPT4ge307XG5cblx0dGhpcy5yZVF1ZXJ5VmFsdWUgPSAoKSA9PiB7fTtcbn1cblxuRmlsZURhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggSW5wdXREYXRhLnByb3RvdHlwZSApO1xuXG4vKipcbiAqIEB0eXBlIHtIVE1MRWxlbWVudH1cbiAqL1xuRmlsZURhdGEucHJvdG90eXBlLndyYXBwZXIgPSBudWxsO1xuLyoqXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gKi9cbkZpbGVEYXRhLnByb3RvdHlwZS5wcmV2aWV3c0NvbnRhaW5lciA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtIVE1MVGVtcGxhdGVFbGVtZW50fVxuICovXG5GaWxlRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgPSBudWxsO1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlRGF0YTsiLCJmdW5jdGlvbiBlc2NhcGVIdG1sKCB2YWx1ZSApIHtcblx0cmV0dXJuIFN0cmluZyggdmFsdWUgPz8gJycgKVxuXHRcdC5yZXBsYWNlQWxsKCAnJicsICcmYW1wOycgKVxuXHRcdC5yZXBsYWNlQWxsKCAnPCcsICcmbHQ7JyApXG5cdFx0LnJlcGxhY2VBbGwoICc+JywgJyZndDsnIClcblx0XHQucmVwbGFjZUFsbCggJ1wiJywgJyZxdW90OycgKVxuXHRcdC5yZXBsYWNlQWxsKCBcIidcIiwgJyYjMDM5OycgKTtcbn1cblxuZnVuY3Rpb24gaXNNZWRpYUZpZWxkKCBmaWVsZE5vZGUgKSB7XG5cdGlmICggISBmaWVsZE5vZGUgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmV0dXJuICEhIGZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckltYWdlSXRlbSggdXJsLCBuYW1lID0gJycgKSB7XG5cdGNvbnN0IGxhYmVsID0gbmFtZSB8fCAnSW1hZ2UnO1xuXG5cdHJldHVybiBgXG5cdFx0PGxpIHN0eWxlPVwibGlzdC1zdHlsZTpub25lOyBtYXJnaW46MCAwIDEycHggMDtcIj5cblx0XHRcdDxkaXYgc3R5bGU9XCJkaXNwbGF5OmlubGluZS1ibG9jazsgbWF4LXdpZHRoOjE1MHB4O1wiPlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0c3JjPVwiJHsgZXNjYXBlSHRtbCggdXJsICkgfVwiXG5cdFx0XHRcdFx0YWx0PVwiJHsgZXNjYXBlSHRtbCggbGFiZWwgKSB9XCJcblx0XHRcdFx0XHRzdHlsZT1cIlxuXHRcdFx0XHRcdFx0ZGlzcGxheTpibG9jaztcblx0XHRcdFx0XHRcdHdpZHRoOjE1MHB4O1xuXHRcdFx0XHRcdFx0aGVpZ2h0OjE1MHB4O1xuXHRcdFx0XHRcdFx0b2JqZWN0LWZpdDpjb3Zlcjtcblx0XHRcdFx0XHRcdGJvcmRlcjoxcHggc29saWQgI2RjZGNkYztcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6OHB4O1xuXHRcdFx0XHRcdFx0YmFja2dyb3VuZDojZmZmO1xuXHRcdFx0XHRcdFwiXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgc3R5bGU9XCJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjZweDtcblx0XHRcdFx0XHRmb250LXNpemU6MTNweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDoxLjQ7XG5cdFx0XHRcdFx0Y29sb3I6IzQ0NDtcblx0XHRcdFx0XHR3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7XG5cdFx0XHRcdFwiPlxuXHRcdFx0XHRcdCR7IGVzY2FwZUh0bWwoIGxhYmVsICkgfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbGk+XG5cdGA7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZpbGVJdGVtKCB1cmwsIG5hbWUgPSAnJyApIHtcblx0Y29uc3QgbGFiZWwgPSBuYW1lIHx8IHVybCB8fCAnRmlsZSc7XG5cblx0aWYgKCB1cmwgKSB7XG5cdFx0cmV0dXJuIGBcblx0XHRcdDxsaSBzdHlsZT1cImxpc3Qtc3R5bGU6bm9uZTsgbWFyZ2luOjAgMCAxMHB4IDA7XCI+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0aHJlZj1cIiR7IGVzY2FwZUh0bWwoIHVybCApIH1cIlxuXHRcdFx0XHRcdHRhcmdldD1cIl9ibGFua1wiXG5cdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG5cdFx0XHRcdFx0c3R5bGU9XCJcblx0XHRcdFx0XHRcdGNvbG9yOiNkNjMzODQ7XG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xuXHRcdFx0XHRcdFx0d29yZC1icmVhazpicmVhay13b3JkO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOjE0cHg7XG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDoxLjQ7XG5cdFx0XHRcdFx0XCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdPCfk4QgJHsgZXNjYXBlSHRtbCggbGFiZWwgKSB9XG5cdFx0XHRcdDwvYT5cblx0XHRcdDwvbGk+XG5cdFx0YDtcblx0fVxuXG5cdHJldHVybiBgXG5cdFx0PGxpIHN0eWxlPVwiXG5cdFx0XHRsaXN0LXN0eWxlOm5vbmU7XG5cdFx0XHRtYXJnaW46MCAwIDEwcHggMDtcblx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6MS40O1xuXHRcdFx0d29yZC1icmVhazpicmVhay13b3JkO1xuXHRcdFx0Y29sb3I6IzQ0NDtcblx0XHRcIj5cblx0XHRcdPCfk4QgJHsgZXNjYXBlSHRtbCggbGFiZWwgKSB9XG5cdFx0PC9saT5cblx0YDtcbn1cblxuZnVuY3Rpb24gd3JhcEl0ZW1zKCBpdGVtcyApIHtcblx0aWYgKCAhIGl0ZW1zLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZXR1cm4gYFxuXHRcdDxkaXYgc3R5bGU9XCJcblx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRwYWRkaW5nOjA7XG5cdFx0XHRtYXJnaW46MDtcblx0XHRcIj5cblx0XHRcdDx1bCBzdHlsZT1cIlxuXHRcdFx0XHRtYXJnaW46MDtcblx0XHRcdFx0cGFkZGluZzowO1xuXHRcdFx0XHRsaXN0LXN0eWxlOm5vbmU7XG5cdFx0XHRcIj5cblx0XHRcdFx0JHsgaXRlbXMuam9pbiggJycgKSB9XG5cdFx0XHQ8L3VsPlxuXHRcdDwvZGl2PlxuXHRgO1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0TWVkaWFGcm9tRG9tKCBmaWVsZE5vZGUgKSB7XG5cdGNvbnN0IHdyYXBwZXIgPSBmaWVsZE5vZGUuY2xvc2VzdCggJy5maWVsZC10eXBlLW1lZGlhLWZpZWxkJyApO1xuXG5cdGlmICggISB3cmFwcGVyICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IGZpbGVOb2RlcyA9IHdyYXBwZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnXG5cdCk7XG5cblx0aWYgKCAhIGZpbGVOb2Rlcy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Y29uc3QgaXRlbXMgPSBbXTtcblxuXHRmaWxlTm9kZXMuZm9yRWFjaCggKCBmaWxlTm9kZSApID0+IHtcblx0XHRjb25zdCB1cmwgPSBTdHJpbmcoIGZpbGVOb2RlLmRhdGFzZXQ/LmZpbGUgPz8gJycgKS50cmltKCk7XG5cblx0XHRjb25zdCByZW1vdmVCdG4gPSBmaWxlTm9kZS5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZSdcblx0XHQpO1xuXG5cdFx0Y29uc3QgZmlsZU5hbWUgPSBTdHJpbmcoXG5cdFx0XHRyZW1vdmVCdG4/LmRhdGFzZXQ/LmZpbGVOYW1lID8/ICcnXG5cdFx0KS50cmltKCk7XG5cblx0XHRjb25zdCBpbWcgPSBmaWxlTm9kZS5xdWVyeVNlbGVjdG9yKCAnaW1nJyApO1xuXG5cdFx0aWYgKCBpbWcgJiYgdXJsICkge1xuXHRcdFx0aXRlbXMucHVzaCggcmVuZGVySW1hZ2VJdGVtKCB1cmwsIGZpbGVOYW1lICkgKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGZpbGVOYW1lIHx8IHVybCApIHtcblx0XHRcdGl0ZW1zLnB1c2goIHJlbmRlckZpbGVJdGVtKCB1cmwsIGZpbGVOYW1lICkgKTtcblx0XHR9XG5cdH0gKTtcblxuXHRyZXR1cm4gd3JhcEl0ZW1zKCBpdGVtcyApO1xufVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlZENvbnRhaW5lciggZmllbGROb2RlICkge1xuXHRjb25zdCB3cmFwcGVyID0gZmllbGROb2RlLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1tZWRpYS1maWVsZCcgKTtcblxuXHRpZiAoICEgd3JhcHBlciApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiAoXG5cdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGVzJyApIHx8XG5cdFx0d3JhcHBlci5xdWVyeVNlbGVjdG9yKCAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWQnICkgfHxcblx0XHR3cmFwcGVyXG5cdCk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJNZWRpYVJlZnJlc2goIGZpZWxkTm9kZSApIHtcblx0ZmllbGROb2RlLmRpc3BhdGNoRXZlbnQoXG5cdFx0bmV3IEV2ZW50KCAnaW5wdXQnLCB7IGJ1YmJsZXM6IHRydWUgfSApXG5cdCk7XG5cblx0ZmllbGROb2RlLmRpc3BhdGNoRXZlbnQoXG5cdFx0bmV3IEV2ZW50KCAnY2hhbmdlJywgeyBidWJibGVzOiB0cnVlIH0gKVxuXHQpO1xufVxuXG5mdW5jdGlvbiBiaW5kUmVtb3ZlSGFuZGxlciggZmllbGROb2RlICkge1xuXHRpZiAoICEgZmllbGROb2RlIHx8IGZpZWxkTm9kZS5fX2pmYk1lZGlhUmVtb3ZlQm91bmQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgd3JhcHBlciA9IGZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XG5cblx0aWYgKCAhIHdyYXBwZXIgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0ZmllbGROb2RlLl9famZiTWVkaWFSZW1vdmVCb3VuZCA9IHRydWU7XG5cblx0d3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoIGV2ZW50ICkgPT4ge1xuXHRcdGNvbnN0IHJlbW92ZUJ0biA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZSdcblx0XHQpO1xuXG5cdFx0aWYgKCAhIHJlbW92ZUJ0biApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0XHR0cmlnZ2VyTWVkaWFSZWZyZXNoKCBmaWVsZE5vZGUgKTtcblx0XHR9LCAwICk7XG5cdH0gKTtcbn1cblxuZnVuY3Rpb24gc2NoZWR1bGVSZWZyZXNoKCBmaWVsZE5vZGUgKSB7XG5cdGlmICggISBmaWVsZE5vZGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgb2JzZXJ2ZWROb2RlID0gZ2V0T2JzZXJ2ZWRDb250YWluZXIoIGZpZWxkTm9kZSApO1xuXG5cdGlmICggISBvYnNlcnZlZE5vZGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCBmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyICkge1xuXHRcdGZpZWxkTm9kZS5fX2pmYk1lZGlhTWFjcm9zT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdGZpZWxkTm9kZS5fX2pmYk1lZGlhTWFjcm9zT2JzZXJ2ZXIgPSBudWxsO1xuXHR9XG5cblx0Y29uc3QgaW5pdGlhbE1hcmt1cCA9IGNvbGxlY3RNZWRpYUZyb21Eb20oIGZpZWxkTm9kZSApO1xuXG5cdGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoICgpID0+IHtcblx0XHRjb25zdCBuZXh0TWFya3VwID0gY29sbGVjdE1lZGlhRnJvbURvbSggZmllbGROb2RlICk7XG5cblx0XHRpZiAoIG5leHRNYXJrdXAgPT09IGluaXRpYWxNYXJrdXAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdGZpZWxkTm9kZS5fX2pmYk1lZGlhTWFjcm9zT2JzZXJ2ZXIgPSBudWxsO1xuXG5cdFx0dHJpZ2dlck1lZGlhUmVmcmVzaCggZmllbGROb2RlICk7XG5cdH0gKTtcblxuXHRmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyID0gb2JzZXJ2ZXI7XG5cblx0b2JzZXJ2ZXIub2JzZXJ2ZSggb2JzZXJ2ZWROb2RlLCB7XG5cdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdHN1YnRyZWU6IHRydWUsXG5cdFx0YXR0cmlidXRlczogdHJ1ZSxcblx0XHRhdHRyaWJ1dGVGaWx0ZXI6IFsgJ2RhdGEtZmlsZScsICdzcmMnIF0sXG5cdH0gKTtcblxuXHRzZXRUaW1lb3V0KCAoKSA9PiB7XG5cdFx0aWYgKCBmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyICE9PSBvYnNlcnZlciApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cdFx0ZmllbGROb2RlLl9famZiTWVkaWFNYWNyb3NPYnNlcnZlciA9IG51bGw7XG5cblx0XHRjb25zdCBmYWxsYmFja01hcmt1cCA9IGNvbGxlY3RNZWRpYUZyb21Eb20oIGZpZWxkTm9kZSApO1xuXG5cdFx0aWYgKCBmYWxsYmFja01hcmt1cCAhPT0gaW5pdGlhbE1hcmt1cCApIHtcblx0XHRcdHRyaWdnZXJNZWRpYVJlZnJlc2goIGZpZWxkTm9kZSApO1xuXHRcdH1cblx0fSwgMzAwICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTWVkaWFNYWNyb3NWYWx1ZSggY3VycmVudCwgJGZpZWxkTm9kZSApIHtcblx0Y29uc3QgZmllbGROb2RlID0gJGZpZWxkTm9kZT8uWyAwIF0gfHwgJGZpZWxkTm9kZTtcblxuXHRpZiAoICEgaXNNZWRpYUZpZWxkKCBmaWVsZE5vZGUgKSApIHtcblx0XHRyZXR1cm4gY3VycmVudDtcblx0fVxuXG5cdGJpbmRSZW1vdmVIYW5kbGVyKCBmaWVsZE5vZGUgKTtcblx0c2NoZWR1bGVSZWZyZXNoKCBmaWVsZE5vZGUgKTtcblxuXHRyZXR1cm4gY29sbGVjdE1lZGlhRnJvbURvbSggZmllbGROb2RlICk7XG59IiwiaW1wb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGUsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5cbmNvbnN0IHsgQmFzZVNpZ25hbCB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogRXNjYXBlIGEgdmFsdWUgYmVmb3JlIGl0IGlzIGludGVycG9sYXRlZCBpbnRvIGEgZG91YmxlLXF1b3RlZCBIVE1MIGF0dHJpYnV0ZVxuICogdmlhIGlubmVySFRNTC4gVGhlIHByZXZpZXcgdGVtcGxhdGUgcGxhY2Vob2xkZXJzICglZmlsZV91cmwlLCAlZmlsZV9uYW1lJSlcbiAqIGxhbmQgaW5zaWRlIGBkYXRhLWZpbGU9XCLigKZcImAgLyBgZGF0YS1maWxlLW5hbWU9XCLigKZcImAsIGFuZCBmaWxlLm5hbWUgaXNcbiAqIGF0dGFja2VyLWNvbnRyb2xsYWJsZSAoaXQgaXMgcmVzdG9yZWQgZnJvbSB0aGUgc2VydmVyLXJlbmRlcmVkIGRhdGFzZXQsIHdoaWNoXG4gKiB0aGUgYnJvd3NlciBkZWNvZGVzIGJhY2sgdG8gcmF3IGNoYXJhY3RlcnMpLiBXaXRob3V0IHRoaXMsIGEgcXVvdGUgaW4gdGhlXG4gKiB2YWx1ZSBicmVha3Mgb3V0IG9mIHRoZSBhdHRyaWJ1dGUgYW5kIGluamVjdHMgbGl2ZSBldmVudCBoYW5kbGVycy4gU2VlICMyMDM5MC5cbiAqXG4gKiBAcGFyYW0gIHsqfSB2YWx1ZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVBdHRyKCB2YWx1ZSApIHtcblx0cmV0dXJuIFN0cmluZyggdmFsdWUgPz8gJycgKVxuXHRcdC5yZXBsYWNlQWxsKCAnJicsICcmYW1wOycgKVxuXHRcdC5yZXBsYWNlQWxsKCAnPCcsICcmbHQ7JyApXG5cdFx0LnJlcGxhY2VBbGwoICc+JywgJyZndDsnIClcblx0XHQucmVwbGFjZUFsbCggJ1wiJywgJyZxdW90OycgKTtcbn1cblxuLyoqXG4gKiBAcHJvcGVydHkge0ZpbGVEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XG4gKi9cbmZ1bmN0aW9uIFNpZ25hbEZpbGUoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubG9jay5jdXJyZW50ID0gdHJ1ZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiBpc0ZpbGUoIG5vZGUgKTtcblx0fTtcblxuXHR0aGlzLnJ1blNpZ25hbCA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBbIG5vZGUgXSAgICA9IHRoaXMuaW5wdXQubm9kZXM7XG5cdFx0Y29uc3QgcHJldmlld3MgICAgPSBbXTtcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuaW5wdXQudmFsdWU7XG5cdFx0Y29uc3QgZmlsZXMgICAgICAgPSB1bmlxdWVCeU5hbWUoIGN1cnJlbnQgPz8gW10gKTtcblxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XG5cdFx0XHRwcmV2aWV3cy5wdXNoKCB0aGlzLmdldFByZXZpZXcoIGZpbGUgKSApO1xuXHRcdH1cblxuXHRcdGFwcGVuZE5vZGVzKCB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLCBwcmV2aWV3cyApO1xuXG5cdFx0bm9kZS5maWxlcyAgICAgICAgICAgPSBjcmVhdGVGaWxlTGlzdCggZmlsZXMgKTtcblx0XHR0aGlzLmlucHV0LnByZXZGaWxlcyA9IGZpbGVzO1xuXG5cdFx0dGhpcy5zb3J0YWJsZSgpO1xuXHR9O1xufVxuXG5TaWduYWxGaWxlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmxvYWRGaWxlcyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3QgZmlsZXMgPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyxcblx0KTtcblxuXHRjb25zdCB1cmxzID0gW107XG5cblx0Zm9yICggY29uc3QgcHJldmlldyBvZiBmaWxlcyApIHtcblx0XHR0aGlzLmFkZFJlbW92ZUhhbmRsZXIoIHByZXZpZXcgKTtcblxuXHRcdGNvbnN0IHVybCAgICAgICAgICA9IHByZXZpZXcuZGF0YXNldC5maWxlO1xuXHRcdGNvbnN0IHJlbW92ZU5vZGUgICA9IHByZXZpZXcucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxuXHRcdCk7XG5cdFx0Y29uc3QgeyBmaWxlTmFtZSB9ID0gcmVtb3ZlTm9kZS5kYXRhc2V0O1xuXG5cdFx0dXJscy5wdXNoKCBbIHVybCwgZmlsZU5hbWUgXSApO1xuXHR9XG5cblx0aWYgKCAhdXJscy5sZW5ndGggKSB7XG5cdFx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdFByb21pc2UuYWxsU2V0dGxlZCggdXJscy5tYXAoICggWyB1cmwsIGZpbGVOYW1lIF0gKSA9PiAoXG5cdFx0bmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuXHRcdFx0ZmV0Y2goIHVybCApLnRoZW4oXG5cdFx0XHRcdHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSxcblx0XHRcdCkudGhlbihcblx0XHRcdFx0YmxvYiA9PiByZXNvbHZlKCBjcmVhdGVGaWxlKCBibG9iLCBmaWxlTmFtZSApICksXG5cdFx0XHQpLmNhdGNoKCByZWplY3QgKTtcblx0XHR9IClcblx0KSApICkudGhlbiggdmFsdWVzID0+IHtcblx0XHRjb25zdCBuZXdGaWxlcyA9IHZhbHVlcy5tYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcblxuXG5cdFx0Y29uc3QgdW5pcXVlICAgPSB1bmlxdWVCeU5hbWUoIG5ld0ZpbGVzICk7XG5cblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xuXHRcdHRoaXMuaW5wdXQuc2lsZW5jZVNldCggY3JlYXRlRmlsZUxpc3QoIHVuaXF1ZSApICk7XG5cdH0gKS5jYXRjaCggKCkgPT4ge1xuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XG5cdH0gKTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLnNvcnRhYmxlID0gZnVuY3Rpb24gKCkge1xuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS51bmJpbmQoKTtcblxuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS5zb3J0YWJsZSgge1xuXHRcdGl0ZW1zOiAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHRcdGZvcmNlUGxhY2Vob2xkZXJTaXplOiB0cnVlLFxuXHR9ICkuYmluZCggJ3NvcnR1cGRhdGUnLCAoKSA9PiB0aGlzLm9uU29ydENhbGxiYWNrKCkgKTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLm9uU29ydENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCB0cmFuc2ZlciAgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cdGNvbnN0IFsgaW5wdXQgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0Y29uc3QgcmVtb3ZlQnV0dG9ucyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcblx0KTtcblxuXHRmb3IgKCBjb25zdCByZW1vdmVCdXR0b24gb2YgcmVtb3ZlQnV0dG9ucyApIHtcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVCdXR0b24uZGF0YXNldDtcblxuXHRcdGZvciAoIGNvbnN0IGZpbGUgb2YgaW5wdXQuZmlsZXMgKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRpZiAoIGZpbGUubmFtZSAhPT0gZmlsZU5hbWUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHR0cmFuc2Zlci5pdGVtcy5hZGQoIGZpbGUgKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSB0cmFuc2Zlci5maWxlcztcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmFkZFJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoIHByZXZpZXcgKSB7XG5cdHByZXZpZXcucXVlcnlTZWxlY3Rvcihcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcblx0KS5hZGRFdmVudExpc3RlbmVyKFxuXHRcdCdjbGljaycsXG5cdFx0dGhpcy5yZW1vdmVGaWxlLmJpbmQoIHRoaXMgKSxcblx0KTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLmdldFByZXZpZXcgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XG5cdGNvbnN0IHJlbW92ZUJ1dHRvbiA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3Rvcihcblx0XHRgW2RhdGEtZmlsZS1uYW1lPVwiJHsgZmlsZS5uYW1lIH1cIl1gLFxuXHQpO1xuXG5cdGlmICggIXJlbW92ZUJ1dHRvbiApIHtcblx0XHRjb25zdCBwcmV2aWV3ID0gdGhpcy5jcmVhdGVQcmV2aWV3KCBmaWxlICk7XG5cdFx0dGhpcy5hZGRSZW1vdmVIYW5kbGVyKCBwcmV2aWV3ICk7XG5cblx0XHRyZXR1cm4gcHJldmlldztcblx0fVxuXG5cdHJldHVybiByZW1vdmVCdXR0b24uY2xvc2VzdChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHQpO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuY3JlYXRlUHJldmlldyA9IGZ1bmN0aW9uICggZmlsZSApIHtcblx0Y29uc3QgdXJsICAgICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7XG5cdGxldCB7IGlubmVySFRNTCB9ID0gdGhpcy5pbnB1dC50ZW1wbGF0ZTtcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX3VybCUnLCBlc2NhcGVBdHRyKCB1cmwgKSApO1xuXHRpbm5lckhUTUwgICAgICAgICA9IGlubmVySFRNTC5yZXBsYWNlKCAnJWZpbGVfbmFtZSUnLCBlc2NhcGVBdHRyKCBmaWxlLm5hbWUgKSApO1xuXG5cdGNvbnN0IHdyYXBwZXIgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xuXHR3cmFwcGVyLmlubmVySFRNTCA9IGlubmVySFRNTDtcblxuXHRjb25zdCBub2RlID0gd3JhcHBlci5jb250ZW50LmZpcnN0Q2hpbGQ7XG5cblx0aWYgKCAvXmltYWdlXFwvLy50ZXN0KCBmaWxlLnR5cGUgKSApIHtcblx0XHRjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbWcnICk7XG5cdFx0aW1hZ2Uuc3JjICAgPSB1cmw7XG5cdFx0aW1hZ2UuYWx0ICAgPSBmaWxlLm5hbWU7XG5cblx0XHRub2RlLnByZXBlbmQoIGltYWdlICk7XG5cdH1cblxuXHRyZXR1cm4gbm9kZTtcbn07XG5cblNpZ25hbEZpbGUucHJvdG90eXBlLnJlbW92ZUZpbGUgPSBmdW5jdGlvbiAoIHsgdGFyZ2V0IH0gKSB7XG5cdGNvbnN0IGNsYXNzTmFtZSA9ICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnO1xuXHRjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmlucHV0O1xuXG5cdGlmICggIXRhcmdldC5tYXRjaGVzKCBjbGFzc05hbWUgKSApIHtcblx0XHR0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdCggY2xhc3NOYW1lICk7XG5cdH1cblxuXHRjb25zdCB7IGZpbGVOYW1lIH0gPSB0YXJnZXQuZGF0YXNldDtcblxuXHRjb25zdCBkdCA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcblxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIHZhbHVlLmN1cnJlbnQgKSB7XG5cdFx0aWYgKCBmaWxlTmFtZSAhPT0gZmlsZS5uYW1lICkge1xuXHRcdFx0ZHQuaXRlbXMuYWRkKCBmaWxlICk7XG5cdFx0fVxuXHR9XG5cblx0dmFsdWUuY3VycmVudCA9IGR0LmZpbGVzO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gIGZpbGVOYW1lXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxuICovXG5TaWduYWxGaWxlLnByb3RvdHlwZS5nZXRGaWxlTm9kZSA9IGZ1bmN0aW9uICggZmlsZU5hbWUgKSB7XG5cdGNvbnN0IGF0dHIgPSBgZGF0YS1maWxlLW5hbWU9XCIkeyBmaWxlTmFtZSB9XCJgO1xuXG5cdGNvbnN0IHJlbW92ZUJ0biA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3Rvcihcblx0XHRgLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlWyR7IGF0dHIgfV1gLFxuXHQpO1xuXG5cdHJldHVybiByZW1vdmVCdG4uY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNpZ25hbEZpbGU7XG5cbmZ1bmN0aW9uIHVuaXF1ZUJ5TmFtZSggZmlsZXMgKSB7XG5cdGNvbnN0IHNlZW4gICA9IG5ldyBTZXQoKTtcblx0Y29uc3QgcmVzdWx0ID0gW107XG5cblx0Zm9yICggY29uc3QgZmlsZSBvZiBub3JtYWxpemVGaWxlcyggZmlsZXMgKSApIHtcblx0XHRpZiAoICFmaWxlPy5uYW1lICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWVuLmhhcyggZmlsZS5uYW1lICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0c2Vlbi5hZGQoIGZpbGUubmFtZSApO1xuXHRcdHJlc3VsdC5wdXNoKCBmaWxlICk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVGaWxlcyggZmlsZXMgKSB7XG5cdGlmICggIWZpbGVzICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXG5cdGlmICggQXJyYXkuaXNBcnJheSggZmlsZXMgKSApIHtcblx0XHRyZXR1cm4gZmlsZXM7XG5cdH1cblxuXHRpZiAoICdmdW5jdGlvbicgPT09IHR5cGVvZiBmaWxlc1sgU3ltYm9sLml0ZXJhdG9yIF0gKSB7XG5cdFx0cmV0dXJuIEFycmF5LmZyb20oIGZpbGVzICk7XG5cdH1cblxuXHRpZiAoICdvYmplY3QnID09PSB0eXBlb2YgZmlsZXMgKSB7XG5cdFx0cmV0dXJuIE9iamVjdC52YWx1ZXMoIGZpbGVzICk7XG5cdH1cblxuXHRyZXR1cm4gW107XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZpbGVEYXRhIGZyb20gJy4vaW5wdXQnO1xuaW1wb3J0IFNpZ25hbEZpbGUgZnJvbSAnLi9zaWduYWwnO1xuaW1wb3J0IHsgcmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUgfSBmcm9tICcuL3Jlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlJztcblxuXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmlucHV0cycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBGaWxlRGF0YSwgLi4uaW5wdXRzIF07XG5cblx0XHRyZXR1cm4gaW5wdXRzO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLnNpZ25hbHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxGaWxlLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7XG5cbi8qKlxuICogSGFuZGxlIE1lZGlhIEZpZWxkIG1hY3JvIHZhbHVlIHBhcnNpbmcgKG91dHNpZGUgcmVwZWF0ZXIpLlxuICpcbiAqIFRoaXMgZmlsdGVyIGlzIHRyaWdnZXJlZCB3aGVuIGEgbWFjcm8gaXMgcGFyc2VkIGluIGEgcmVndWxhciBjb250ZXh0LFxuICogaS5lLiBub3QgaW5zaWRlIGEgcmVwZWF0ZXIgZmllbGQuXG4gKi9cbmFkZEZpbHRlcihcblx0J2pldC5mYi5tYWNyby5maWVsZC52YWx1ZScsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcblx0cmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUsXG4pO1xuXG4vKipcbiAqIEhhbmRsZSBNZWRpYSBGaWVsZCBtYWNybyB2YWx1ZSBwYXJzaW5nIGluc2lkZSByZXBlYXRlci5cbiAqXG4gKiBUaGlzIGlzIGEgc2VwYXJhdGUgZmxvdyBmcm9tIHRoZSByZWd1bGFyIG1hY3JvIHBhcnNpbmcuXG4gKiBUaGlzIGZpbHRlciBpcyB0cmlnZ2VyZWQgb25seSB3aGVuIHRoZSBtYWNybyBpcyB1c2VkIGluc2lkZSBhIHJlcGVhdGVyLFxuICogd2hlcmUgZmllbGQgdmFsdWVzIGhhdmUgYSBkaWZmZXJlbnQgc3RydWN0dXJlIGFuZCBjb250ZXh0LlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzU2NTRcbiAqL1xuYWRkRmlsdGVyKFxuXHQnamV0LmZiLm1hY3JvLmluc2lkZS5yZXBlYXRlci5maWVsZC52YWx1ZScsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcblx0cmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUsXG4pO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==