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
  for (const file of files) {
    if (seen.has(file.name)) {
      continue;
    }
    seen.add(file.name);
    result.push(file);
  }
  return result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaFJBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL2lucHV0LmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL3Jlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGFwcGVuZE5vZGVzKCBjb250YWluZXIsIG5vZGVzICkge1xuXHQvKipcblx0ICogV2UgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgYmVjYXVzZSB3ZSBuZWVkIGEgc3RhdGljIHNldCBvZiBlbGVtZW50cy5cblx0ICogSWYgeW91IGFwcGx5IHRoZSAuY2hpbGRyZW4gb3IgLmNoaWxkTm9kZXMgcHJvcGVydHksXG5cdCAqIHRoZXkgd2lsbCBhbHdheXMgcmV0dXJuIHRoZSBsaXN0IG9mIGN1cnJlbnRseSBhdmFpbGFibGUgZWxlbWVudHMuXG5cdCAqL1xuXHRjb25zdCBjaGlsZHJlbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXG5cdCk7XG5cblx0Zm9yICggY29uc3QgY2hpbGQgb2YgY2hpbGRyZW4gKSB7XG5cdFx0aWYgKCBub2Rlcy5zb21lKCBub2RlID0+IG5vZGUuaXNFcXVhbE5vZGUoIGNoaWxkICkgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjaGlsZC5yZW1vdmUoKTtcblx0fVxuXHRmb3IgKCBjb25zdCBpbmRleCBpbiBub2RlcyApIHtcblx0XHRpZiAoICFub2Rlcy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBub2RlID0gbm9kZXNbIGluZGV4IF07XG5cblx0XHRpZiAoIG5vZGUuaXNDb25uZWN0ZWQgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIG5vZGUgKTtcblx0fVxufVxuXG4vKipcbiAqIEBwYXJhbSAgaW5wdXRGaWxlQXJyYXlcbiAqIEByZXR1cm4ge0ZpbGVMaXN0fVxuICovXG5mdW5jdGlvbiBjcmVhdGVGaWxlTGlzdCggaW5wdXRGaWxlQXJyYXkgKSB7XG5cdGNvbnN0IHRyYW5zZmVyID0gbmV3IERhdGFUcmFuc2ZlcigpO1xuXG5cdGZvciAoIGNvbnN0IGZpbGUgb2YgaW5wdXRGaWxlQXJyYXkgKSB7XG5cdFx0dHJhbnNmZXIuaXRlbXMuYWRkKCBmaWxlICk7XG5cdH1cblxuXHRyZXR1cm4gdHJhbnNmZXIuZmlsZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpbGUoIGJsb2IsIGZpbGVOYW1lICkge1xuXHRyZXR1cm4gbmV3IEZpbGUoIFsgYmxvYiBdLCBmaWxlTmFtZSwgYmxvYiApO1xufVxuXG4vKipcbiAqIEBwYXJhbSAgbm9kZSB7SFRNTEVsZW1lbnR9XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0ZpbGUoIG5vZGUgKSB7XG5cdGlmICggbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2lucHV0JyApICkge1xuXHRcdHJldHVybiAnZmlsZScgPT09IG5vZGUudHlwZTtcblx0fVxuXG5cdHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IHsgYXBwZW5kTm9kZXMsIGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUsIGNyZWF0ZUZpbGUgfTsiLCJpbXBvcnQgeyBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7IElucHV0RGF0YSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIEZpbGVEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNNdWx0aXBsZSAgICAgICAgPSBmYWxzZTtcblx0dGhpcy5wcmV2RmlsZXMgICAgICAgICA9IG51bGw7XG5cdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSBudWxsO1xuXHR0aGlzLnByZXZpZXdzQ29udGFpbmVyID0gbnVsbDtcblx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG51bGw7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRyZXR1cm4gaXNGaWxlKCBub2RlICk7XG5cdH07XG5cblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gY3JlYXRlRmlsZUxpc3QoXG5cdFx0XHRcdHRoaXMuaXNNdWx0aXBsZVxuXHRcdFx0XHQ/IFsgLi4udGhpcy5wcmV2RmlsZXMgPz8gW10sIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdXG5cdFx0XHRcdDogWyAuLi5ldmVudC50YXJnZXQuZmlsZXMgXSxcblx0XHRcdCk7XG5cdFx0fSApO1xuXHR9O1xuXHR0aGlzLnNldE5vZGUgICAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5pc011bHRpcGxlID0gbm9kZS5tdWx0aXBsZTtcblxuXHRcdHRoaXMud3JhcHBlciAgICAgICAgICAgPSBub2RlLmNsb3Nlc3QoXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWQnLFxuXHRcdCk7XG5cdFx0dGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IHRoaXMud3JhcHBlci5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlcycsXG5cdFx0KTtcblx0XHR0aGlzLnRlbXBsYXRlICAgICAgICAgID0gdGhpcy53cmFwcGVyLlxuXHRcdFx0Y2xvc2VzdCggJy5maWVsZC10eXBlLW1lZGlhLWZpZWxkJyApLlxuXHRcdFx0cXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyX19wcmV2aWV3LXRlbXBsYXRlJyApO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5jYWxsYWJsZS5sb2FkRmlsZXMoKTtcblx0fTtcblxuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSA9ICgpID0+IHt9O1xuXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XG59XG5cbkZpbGVEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuLyoqXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gKi9cbkZpbGVEYXRhLnByb3RvdHlwZS53cmFwcGVyID0gbnVsbDtcbi8qKlxuICogQHR5cGUge0hUTUxFbGVtZW50fVxuICovXG5GaWxlRGF0YS5wcm90b3R5cGUucHJldmlld3NDb250YWluZXIgPSBudWxsO1xuLyoqXG4gKiBAdHlwZSB7SFRNTFRlbXBsYXRlRWxlbWVudH1cbiAqL1xuRmlsZURhdGEucHJvdG90eXBlLnRlbXBsYXRlID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZURhdGE7IiwiZnVuY3Rpb24gZXNjYXBlSHRtbCggdmFsdWUgKSB7XG5cdHJldHVybiBTdHJpbmcoIHZhbHVlID8/ICcnIClcblx0XHQucmVwbGFjZUFsbCggJyYnLCAnJmFtcDsnIClcblx0XHQucmVwbGFjZUFsbCggJzwnLCAnJmx0OycgKVxuXHRcdC5yZXBsYWNlQWxsKCAnPicsICcmZ3Q7JyApXG5cdFx0LnJlcGxhY2VBbGwoICdcIicsICcmcXVvdDsnIClcblx0XHQucmVwbGFjZUFsbCggXCInXCIsICcmIzAzOTsnICk7XG59XG5cbmZ1bmN0aW9uIGlzTWVkaWFGaWVsZCggZmllbGROb2RlICkge1xuXHRpZiAoICEgZmllbGROb2RlICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiAhISBmaWVsZE5vZGUuY2xvc2VzdCggJy5maWVsZC10eXBlLW1lZGlhLWZpZWxkJyApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJJbWFnZUl0ZW0oIHVybCwgbmFtZSA9ICcnICkge1xuXHRjb25zdCBsYWJlbCA9IG5hbWUgfHwgJ0ltYWdlJztcblxuXHRyZXR1cm4gYFxuXHRcdDxsaSBzdHlsZT1cImxpc3Qtc3R5bGU6bm9uZTsgbWFyZ2luOjAgMCAxMnB4IDA7XCI+XG5cdFx0XHQ8ZGl2IHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IG1heC13aWR0aDoxNTBweDtcIj5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdHNyYz1cIiR7IGVzY2FwZUh0bWwoIHVybCApIH1cIlxuXHRcdFx0XHRcdGFsdD1cIiR7IGVzY2FwZUh0bWwoIGxhYmVsICkgfVwiXG5cdFx0XHRcdFx0c3R5bGU9XCJcblx0XHRcdFx0XHRcdGRpc3BsYXk6YmxvY2s7XG5cdFx0XHRcdFx0XHR3aWR0aDoxNTBweDtcblx0XHRcdFx0XHRcdGhlaWdodDoxNTBweDtcblx0XHRcdFx0XHRcdG9iamVjdC1maXQ6Y292ZXI7XG5cdFx0XHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICNkY2RjZGM7XG5cdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOjhweDtcblx0XHRcdFx0XHRcdGJhY2tncm91bmQ6I2ZmZjtcblx0XHRcdFx0XHRcIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPVwiXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo2cHg7XG5cdFx0XHRcdFx0Zm9udC1zaXplOjEzcHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6MS40O1xuXHRcdFx0XHRcdGNvbG9yOiM0NDQ7XG5cdFx0XHRcdFx0d29yZC1icmVhazpicmVhay13b3JkO1xuXHRcdFx0XHRcIj5cblx0XHRcdFx0XHQkeyBlc2NhcGVIdG1sKCBsYWJlbCApIH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2xpPlxuXHRgO1xufVxuXG5mdW5jdGlvbiByZW5kZXJGaWxlSXRlbSggdXJsLCBuYW1lID0gJycgKSB7XG5cdGNvbnN0IGxhYmVsID0gbmFtZSB8fCB1cmwgfHwgJ0ZpbGUnO1xuXG5cdGlmICggdXJsICkge1xuXHRcdHJldHVybiBgXG5cdFx0XHQ8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOm5vbmU7IG1hcmdpbjowIDAgMTBweCAwO1wiPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9XCIkeyBlc2NhcGVIdG1sKCB1cmwgKSB9XCJcblx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuXHRcdFx0XHRcdHN0eWxlPVwiXG5cdFx0XHRcdFx0XHRjb2xvcjojZDYzMzg0O1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTtcblx0XHRcdFx0XHRcdHdvcmQtYnJlYWs6YnJlYWstd29yZDtcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6MS40O1xuXHRcdFx0XHRcdFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHTwn5OEICR7IGVzY2FwZUh0bWwoIGxhYmVsICkgfVxuXHRcdFx0XHQ8L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdGA7XG5cdH1cblxuXHRyZXR1cm4gYFxuXHRcdDxsaSBzdHlsZT1cIlxuXHRcdFx0bGlzdC1zdHlsZTpub25lO1xuXHRcdFx0bWFyZ2luOjAgMCAxMHB4IDA7XG5cdFx0XHRmb250LXNpemU6MTRweDtcblx0XHRcdGxpbmUtaGVpZ2h0OjEuNDtcblx0XHRcdHdvcmQtYnJlYWs6YnJlYWstd29yZDtcblx0XHRcdGNvbG9yOiM0NDQ7XG5cdFx0XCI+XG5cdFx0XHTwn5OEICR7IGVzY2FwZUh0bWwoIGxhYmVsICkgfVxuXHRcdDwvbGk+XG5cdGA7XG59XG5cbmZ1bmN0aW9uIHdyYXBJdGVtcyggaXRlbXMgKSB7XG5cdGlmICggISBpdGVtcy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmV0dXJuIGBcblx0XHQ8ZGl2IHN0eWxlPVwiXG5cdFx0XHRkaXNwbGF5OmJsb2NrO1xuXHRcdFx0cGFkZGluZzowO1xuXHRcdFx0bWFyZ2luOjA7XG5cdFx0XCI+XG5cdFx0XHQ8dWwgc3R5bGU9XCJcblx0XHRcdFx0bWFyZ2luOjA7XG5cdFx0XHRcdHBhZGRpbmc6MDtcblx0XHRcdFx0bGlzdC1zdHlsZTpub25lO1xuXHRcdFx0XCI+XG5cdFx0XHRcdCR7IGl0ZW1zLmpvaW4oICcnICkgfVxuXHRcdFx0PC91bD5cblx0XHQ8L2Rpdj5cblx0YDtcbn1cblxuZnVuY3Rpb24gY29sbGVjdE1lZGlhRnJvbURvbSggZmllbGROb2RlICkge1xuXHRjb25zdCB3cmFwcGVyID0gZmllbGROb2RlLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1tZWRpYS1maWVsZCcgKTtcblxuXHRpZiAoICEgd3JhcHBlciApIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCBmaWxlTm9kZXMgPSB3cmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJ1xuXHQpO1xuXG5cdGlmICggISBmaWxlTm9kZXMubGVuZ3RoICkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGNvbnN0IGl0ZW1zID0gW107XG5cblx0ZmlsZU5vZGVzLmZvckVhY2goICggZmlsZU5vZGUgKSA9PiB7XG5cdFx0Y29uc3QgdXJsID0gU3RyaW5nKCBmaWxlTm9kZS5kYXRhc2V0Py5maWxlID8/ICcnICkudHJpbSgpO1xuXG5cdFx0Y29uc3QgcmVtb3ZlQnRuID0gZmlsZU5vZGUucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnXG5cdFx0KTtcblxuXHRcdGNvbnN0IGZpbGVOYW1lID0gU3RyaW5nKFxuXHRcdFx0cmVtb3ZlQnRuPy5kYXRhc2V0Py5maWxlTmFtZSA/PyAnJ1xuXHRcdCkudHJpbSgpO1xuXG5cdFx0Y29uc3QgaW1nID0gZmlsZU5vZGUucXVlcnlTZWxlY3RvciggJ2ltZycgKTtcblxuXHRcdGlmICggaW1nICYmIHVybCApIHtcblx0XHRcdGl0ZW1zLnB1c2goIHJlbmRlckltYWdlSXRlbSggdXJsLCBmaWxlTmFtZSApICk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBmaWxlTmFtZSB8fCB1cmwgKSB7XG5cdFx0XHRpdGVtcy5wdXNoKCByZW5kZXJGaWxlSXRlbSggdXJsLCBmaWxlTmFtZSApICk7XG5cdFx0fVxuXHR9ICk7XG5cblx0cmV0dXJuIHdyYXBJdGVtcyggaXRlbXMgKTtcbn1cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZWRDb250YWluZXIoIGZpZWxkTm9kZSApIHtcblx0Y29uc3Qgd3JhcHBlciA9IGZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XG5cblx0aWYgKCAhIHdyYXBwZXIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdHdyYXBwZXIucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlcycgKSB8fFxuXHRcdHdyYXBwZXIucXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkJyApIHx8XG5cdFx0d3JhcHBlclxuXHQpO1xufVxuXG5mdW5jdGlvbiB0cmlnZ2VyTWVkaWFSZWZyZXNoKCBmaWVsZE5vZGUgKSB7XG5cdGZpZWxkTm9kZS5kaXNwYXRjaEV2ZW50KFxuXHRcdG5ldyBFdmVudCggJ2lucHV0JywgeyBidWJibGVzOiB0cnVlIH0gKVxuXHQpO1xuXG5cdGZpZWxkTm9kZS5kaXNwYXRjaEV2ZW50KFxuXHRcdG5ldyBFdmVudCggJ2NoYW5nZScsIHsgYnViYmxlczogdHJ1ZSB9IClcblx0KTtcbn1cblxuZnVuY3Rpb24gYmluZFJlbW92ZUhhbmRsZXIoIGZpZWxkTm9kZSApIHtcblx0aWYgKCAhIGZpZWxkTm9kZSB8fCBmaWVsZE5vZGUuX19qZmJNZWRpYVJlbW92ZUJvdW5kICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHdyYXBwZXIgPSBmaWVsZE5vZGUuY2xvc2VzdCggJy5maWVsZC10eXBlLW1lZGlhLWZpZWxkJyApO1xuXG5cdGlmICggISB3cmFwcGVyICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGZpZWxkTm9kZS5fX2pmYk1lZGlhUmVtb3ZlQm91bmQgPSB0cnVlO1xuXG5cdHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBldmVudCApID0+IHtcblx0XHRjb25zdCByZW1vdmVCdG4gPSBldmVudC50YXJnZXQuY2xvc2VzdChcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnXG5cdFx0KTtcblxuXHRcdGlmICggISByZW1vdmVCdG4gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdFx0dHJpZ2dlck1lZGlhUmVmcmVzaCggZmllbGROb2RlICk7XG5cdFx0fSwgMCApO1xuXHR9ICk7XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlUmVmcmVzaCggZmllbGROb2RlICkge1xuXHRpZiAoICEgZmllbGROb2RlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IG9ic2VydmVkTm9kZSA9IGdldE9ic2VydmVkQ29udGFpbmVyKCBmaWVsZE5vZGUgKTtcblxuXHRpZiAoICEgb2JzZXJ2ZWROb2RlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggZmllbGROb2RlLl9famZiTWVkaWFNYWNyb3NPYnNlcnZlciApIHtcblx0XHRmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyID0gbnVsbDtcblx0fVxuXG5cdGNvbnN0IGluaXRpYWxNYXJrdXAgPSBjb2xsZWN0TWVkaWFGcm9tRG9tKCBmaWVsZE5vZGUgKTtcblxuXHRjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCAoKSA9PiB7XG5cdFx0Y29uc3QgbmV4dE1hcmt1cCA9IGNvbGxlY3RNZWRpYUZyb21Eb20oIGZpZWxkTm9kZSApO1xuXG5cdFx0aWYgKCBuZXh0TWFya3VwID09PSBpbml0aWFsTWFya3VwICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHRmaWVsZE5vZGUuX19qZmJNZWRpYU1hY3Jvc09ic2VydmVyID0gbnVsbDtcblxuXHRcdHRyaWdnZXJNZWRpYVJlZnJlc2goIGZpZWxkTm9kZSApO1xuXHR9ICk7XG5cblx0ZmllbGROb2RlLl9famZiTWVkaWFNYWNyb3NPYnNlcnZlciA9IG9ic2VydmVyO1xuXG5cdG9ic2VydmVyLm9ic2VydmUoIG9ic2VydmVkTm9kZSwge1xuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZXM6IHRydWUsXG5cdFx0YXR0cmlidXRlRmlsdGVyOiBbICdkYXRhLWZpbGUnLCAnc3JjJyBdLFxuXHR9ICk7XG5cblx0c2V0VGltZW91dCggKCkgPT4ge1xuXHRcdGlmICggZmllbGROb2RlLl9famZiTWVkaWFNYWNyb3NPYnNlcnZlciAhPT0gb2JzZXJ2ZXIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0b2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuXHRcdGZpZWxkTm9kZS5fX2pmYk1lZGlhTWFjcm9zT2JzZXJ2ZXIgPSBudWxsO1xuXG5cdFx0Y29uc3QgZmFsbGJhY2tNYXJrdXAgPSBjb2xsZWN0TWVkaWFGcm9tRG9tKCBmaWVsZE5vZGUgKTtcblxuXHRcdGlmICggZmFsbGJhY2tNYXJrdXAgIT09IGluaXRpYWxNYXJrdXAgKSB7XG5cdFx0XHR0cmlnZ2VyTWVkaWFSZWZyZXNoKCBmaWVsZE5vZGUgKTtcblx0XHR9XG5cdH0sIDMwMCApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUoIGN1cnJlbnQsICRmaWVsZE5vZGUgKSB7XG5cdGNvbnN0IGZpZWxkTm9kZSA9ICRmaWVsZE5vZGU/LlsgMCBdIHx8ICRmaWVsZE5vZGU7XG5cblx0aWYgKCAhIGlzTWVkaWFGaWVsZCggZmllbGROb2RlICkgKSB7XG5cdFx0cmV0dXJuIGN1cnJlbnQ7XG5cdH1cblxuXHRiaW5kUmVtb3ZlSGFuZGxlciggZmllbGROb2RlICk7XG5cdHNjaGVkdWxlUmVmcmVzaCggZmllbGROb2RlICk7XG5cblx0cmV0dXJuIGNvbGxlY3RNZWRpYUZyb21Eb20oIGZpZWxkTm9kZSApO1xufSIsImltcG9ydCB7IGFwcGVuZE5vZGVzLCBjcmVhdGVGaWxlLCBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuXG5jb25zdCB7IEJhc2VTaWduYWwgfSA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7RmlsZURhdGF9IGlucHV0IFJlbGF0ZWQgaW5wdXRcbiAqL1xuZnVuY3Rpb24gU2lnbmFsRmlsZSgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5sb2NrLmN1cnJlbnQgPSB0cnVlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzRmlsZSggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdICAgID0gdGhpcy5pbnB1dC5ub2Rlcztcblx0XHRjb25zdCBwcmV2aWV3cyAgICA9IFtdO1xuXHRcdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcblx0XHRjb25zdCBmaWxlcyAgICAgICA9IHVuaXF1ZUJ5TmFtZSggY3VycmVudCA/PyBbXSApO1xuXG5cdFx0Zm9yICggY29uc3QgZmlsZSBvZiBmaWxlcyApIHtcblx0XHRcdHByZXZpZXdzLnB1c2goIHRoaXMuZ2V0UHJldmlldyggZmlsZSApICk7XG5cdFx0fVxuXG5cdFx0YXBwZW5kTm9kZXMoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIsIHByZXZpZXdzICk7XG5cblx0XHRub2RlLmZpbGVzICAgICAgICAgICA9IGNyZWF0ZUZpbGVMaXN0KCBmaWxlcyApO1xuXHRcdHRoaXMuaW5wdXQucHJldkZpbGVzID0gZmlsZXM7XG5cblx0XHR0aGlzLnNvcnRhYmxlKCk7XG5cdH07XG59XG5cblNpZ25hbEZpbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUubG9hZEZpbGVzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBmaWxlcyA9IHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxuXHQpO1xuXG5cdGNvbnN0IHVybHMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBwcmV2aWV3IG9mIGZpbGVzICkge1xuXHRcdHRoaXMuYWRkUmVtb3ZlSGFuZGxlciggcHJldmlldyApO1xuXG5cdFx0Y29uc3QgdXJsICAgICAgICAgID0gcHJldmlldy5kYXRhc2V0LmZpbGU7XG5cdFx0Y29uc3QgcmVtb3ZlTm9kZSAgID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZScsXG5cdFx0KTtcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVOb2RlLmRhdGFzZXQ7XG5cblx0XHR1cmxzLnB1c2goIFsgdXJsLCBmaWxlTmFtZSBdICk7XG5cdH1cblxuXHRpZiAoICF1cmxzLmxlbmd0aCApIHtcblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0UHJvbWlzZS5hbGxTZXR0bGVkKCB1cmxzLm1hcCggKCBbIHVybCwgZmlsZU5hbWUgXSApID0+IChcblx0XHRuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XG5cdFx0XHRmZXRjaCggdXJsICkudGhlbihcblx0XHRcdFx0cmVzcG9uc2UgPT4gcmVzcG9uc2UuYmxvYigpLFxuXHRcdFx0KS50aGVuKFxuXHRcdFx0XHRibG9iID0+IHJlc29sdmUoIGNyZWF0ZUZpbGUoIGJsb2IsIGZpbGVOYW1lICkgKSxcblx0XHRcdCkuY2F0Y2goIHJlamVjdCApO1xuXHRcdH0gKVxuXHQpICkgKS50aGVuKCB2YWx1ZXMgPT4ge1xuXHRcdGNvbnN0IG5ld0ZpbGVzID0gdmFsdWVzLm1hcCggKCB7IHZhbHVlIH0gKSA9PiB2YWx1ZSApO1xuXG5cblx0XHRjb25zdCB1bmlxdWUgICA9IHVuaXF1ZUJ5TmFtZSggbmV3RmlsZXMgKTtcblxuXHRcdHRoaXMubG9jay5jdXJyZW50ID0gZmFsc2U7XG5cdFx0dGhpcy5pbnB1dC5zaWxlbmNlU2V0KCBjcmVhdGVGaWxlTGlzdCggdW5pcXVlICkgKTtcblx0fSApLmNhdGNoKCAoKSA9PiB7XG5cdFx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcblx0fSApO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuc29ydGFibGUgPSBmdW5jdGlvbiAoKSB7XG5cdGpRdWVyeSggdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lciApLnVuYmluZCgpO1xuXG5cdGpRdWVyeSggdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lciApLnNvcnRhYmxlKCB7XG5cdFx0aXRlbXM6ICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXG5cdFx0Zm9yY2VQbGFjZWhvbGRlclNpemU6IHRydWUsXG5cdH0gKS5iaW5kKCAnc29ydHVwZGF0ZScsICgpID0+IHRoaXMub25Tb3J0Q2FsbGJhY2soKSApO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUub25Tb3J0Q2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHRyYW5zZmVyICA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcblx0Y29uc3QgWyBpbnB1dCBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxuXHQpO1xuXG5cdGZvciAoIGNvbnN0IHJlbW92ZUJ1dHRvbiBvZiByZW1vdmVCdXR0b25zICkge1xuXHRcdGNvbnN0IHsgZmlsZU5hbWUgfSA9IHJlbW92ZUJ1dHRvbi5kYXRhc2V0O1xuXG5cdFx0Zm9yICggY29uc3QgZmlsZSBvZiBpbnB1dC5maWxlcyApIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdGlmICggZmlsZS5uYW1lICE9PSBmaWxlTmFtZSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdHRyYW5zZmVyLml0ZW1zLmFkZCggZmlsZSApO1xuXHRcdH1cblx0fVxuXG5cdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IHRyYW5zZmVyLmZpbGVzO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuYWRkUmVtb3ZlSGFuZGxlciA9IGZ1bmN0aW9uICggcHJldmlldyApIHtcblx0cHJldmlldy5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZS1yZW1vdmUnLFxuXHQpLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0J2NsaWNrJyxcblx0XHR0aGlzLnJlbW92ZUZpbGUuYmluZCggdGhpcyApLFxuXHQpO1xufTtcblxuU2lnbmFsRmlsZS5wcm90b3R5cGUuZ2V0UHJldmlldyA9IGZ1bmN0aW9uICggZmlsZSApIHtcblx0Y29uc3QgcmVtb3ZlQnV0dG9uID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuXHRcdGBbZGF0YS1maWxlLW5hbWU9XCIkeyBmaWxlLm5hbWUgfVwiXWAsXG5cdCk7XG5cblx0aWYgKCAhcmVtb3ZlQnV0dG9uICkge1xuXHRcdGNvbnN0IHByZXZpZXcgPSB0aGlzLmNyZWF0ZVByZXZpZXcoIGZpbGUgKTtcblx0XHR0aGlzLmFkZFJlbW92ZUhhbmRsZXIoIHByZXZpZXcgKTtcblxuXHRcdHJldHVybiBwcmV2aWV3O1xuXHR9XG5cblx0cmV0dXJuIHJlbW92ZUJ1dHRvbi5jbG9zZXN0KFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXG5cdCk7XG59O1xuXG5TaWduYWxGaWxlLnByb3RvdHlwZS5jcmVhdGVQcmV2aWV3ID0gZnVuY3Rpb24gKCBmaWxlICkge1xuXHRjb25zdCB1cmwgICAgICAgICA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGZpbGUgKTtcblx0bGV0IHsgaW5uZXJIVE1MIH0gPSB0aGlzLmlucHV0LnRlbXBsYXRlO1xuXHRpbm5lckhUTUwgICAgICAgICA9IGlubmVySFRNTC5yZXBsYWNlKCAnJWZpbGVfdXJsJScsIHVybCApO1xuXHRpbm5lckhUTUwgICAgICAgICA9IGlubmVySFRNTC5yZXBsYWNlKCAnJWZpbGVfbmFtZSUnLCBmaWxlLm5hbWUgKTtcblxuXHRjb25zdCB3cmFwcGVyICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICd0ZW1wbGF0ZScgKTtcblx0d3JhcHBlci5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG5cblx0Y29uc3Qgbm9kZSA9IHdyYXBwZXIuY29udGVudC5maXJzdENoaWxkO1xuXG5cdGlmICggL15pbWFnZVxcLy8udGVzdCggZmlsZS50eXBlICkgKSB7XG5cdFx0Y29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnaW1nJyApO1xuXHRcdGltYWdlLnNyYyAgID0gdXJsO1xuXHRcdGltYWdlLmFsdCAgID0gZmlsZS5uYW1lO1xuXG5cdFx0bm9kZS5wcmVwZW5kKCBpbWFnZSApO1xuXHR9XG5cblx0cmV0dXJuIG5vZGU7XG59O1xuXG5TaWduYWxGaWxlLnByb3RvdHlwZS5yZW1vdmVGaWxlID0gZnVuY3Rpb24gKCB7IHRhcmdldCB9ICkge1xuXHRjb25zdCBjbGFzc05hbWUgPSAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJztcblx0Y29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5pbnB1dDtcblxuXHRpZiAoICF0YXJnZXQubWF0Y2hlcyggY2xhc3NOYW1lICkgKSB7XG5cdFx0dGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoIGNsYXNzTmFtZSApO1xuXHR9XG5cblx0Y29uc3QgeyBmaWxlTmFtZSB9ID0gdGFyZ2V0LmRhdGFzZXQ7XG5cblx0Y29uc3QgZHQgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XG5cblx0Zm9yICggY29uc3QgZmlsZSBvZiB2YWx1ZS5jdXJyZW50ICkge1xuXHRcdGlmICggZmlsZU5hbWUgIT09IGZpbGUubmFtZSApIHtcblx0XHRcdGR0Lml0ZW1zLmFkZCggZmlsZSApO1xuXHRcdH1cblx0fVxuXG5cdHZhbHVlLmN1cnJlbnQgPSBkdC5maWxlcztcbn07XG5cbi8qKlxuICogQHBhcmFtICBmaWxlTmFtZVxuICogQHJldHVybiB7RWxlbWVudH1cbiAqL1xuU2lnbmFsRmlsZS5wcm90b3R5cGUuZ2V0RmlsZU5vZGUgPSBmdW5jdGlvbiAoIGZpbGVOYW1lICkge1xuXHRjb25zdCBhdHRyID0gYGRhdGEtZmlsZS1uYW1lPVwiJHsgZmlsZU5hbWUgfVwiYDtcblxuXHRjb25zdCByZW1vdmVCdG4gPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0YC5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZVskeyBhdHRyIH1dYCxcblx0KTtcblxuXHRyZXR1cm4gcmVtb3ZlQnRuLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTaWduYWxGaWxlO1xuXG5mdW5jdGlvbiB1bmlxdWVCeU5hbWUoIGZpbGVzICkge1xuXHRjb25zdCBzZWVuICAgPSBuZXcgU2V0KCk7XG5cdGNvbnN0IHJlc3VsdCA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XG5cdFx0aWYgKCBzZWVuLmhhcyggZmlsZS5uYW1lICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0c2Vlbi5hZGQoIGZpbGUubmFtZSApO1xuXHRcdHJlc3VsdC5wdXNoKCBmaWxlICk7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRmlsZURhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsRmlsZSBmcm9tICcuL3NpZ25hbCc7XG5pbXBvcnQgeyByZXNvbHZlTWVkaWFNYWNyb3NWYWx1ZSB9IGZyb20gJy4vcmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUnO1xuXG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIEZpbGVEYXRhLCAuLi5pbnB1dHMgXTtcblxuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbEZpbGUsIC4uLnNpZ25hbHMgXTtcblxuXHRcdHJldHVybiBzaWduYWxzO1xuXHR9LFxuKTtcblxuLyoqXG4gKiBIYW5kbGUgTWVkaWEgRmllbGQgbWFjcm8gdmFsdWUgcGFyc2luZyAob3V0c2lkZSByZXBlYXRlcikuXG4gKlxuICogVGhpcyBmaWx0ZXIgaXMgdHJpZ2dlcmVkIHdoZW4gYSBtYWNybyBpcyBwYXJzZWQgaW4gYSByZWd1bGFyIGNvbnRleHQsXG4gKiBpLmUuIG5vdCBpbnNpZGUgYSByZXBlYXRlciBmaWVsZC5cbiAqL1xuYWRkRmlsdGVyKFxuXHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxuXHRyZXNvbHZlTWVkaWFNYWNyb3NWYWx1ZSxcbik7XG5cbi8qKlxuICogSGFuZGxlIE1lZGlhIEZpZWxkIG1hY3JvIHZhbHVlIHBhcnNpbmcgaW5zaWRlIHJlcGVhdGVyLlxuICpcbiAqIFRoaXMgaXMgYSBzZXBhcmF0ZSBmbG93IGZyb20gdGhlIHJlZ3VsYXIgbWFjcm8gcGFyc2luZy5cbiAqIFRoaXMgZmlsdGVyIGlzIHRyaWdnZXJlZCBvbmx5IHdoZW4gdGhlIG1hY3JvIGlzIHVzZWQgaW5zaWRlIGEgcmVwZWF0ZXIsXG4gKiB3aGVyZSBmaWVsZCB2YWx1ZXMgaGF2ZSBhIGRpZmZlcmVudCBzdHJ1Y3R1cmUgYW5kIGNvbnRleHQuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvNTY1NFxuICovXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIubWFjcm8uaW5zaWRlLnJlcGVhdGVyLmZpZWxkLnZhbHVlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWVkaWEtZmllbGQnLFxuXHRyZXNvbHZlTWVkaWFNYWNyb3NWYWx1ZSxcbik7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9