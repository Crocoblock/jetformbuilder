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

/***/ "./frontend/media.field/resolveMediaMacrosValue.js":
/*!*********************************************************!*\
  !*** ./frontend/media.field/resolveMediaMacrosValue.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
function collectMediaFromCurrent(current) {
  if (!current || !current.length) {
    return '';
  }
  const items = [];
  for (const file of current) {
    var _file$name, _file$type;
    if (!file) {
      continue;
    }
    const name = String((_file$name = file.name) !== null && _file$name !== void 0 ? _file$name : '').trim();
    const type = String((_file$type = file.type) !== null && _file$type !== void 0 ? _file$type : '').trim();
    if (/^image\//.test(type)) {
      const url = URL.createObjectURL(file);
      items.push(renderImageItem(url, name));
      continue;
    }
    items.push(renderFileItem('', name));
  }
  return wrapItems(items);
}
function resolveMediaMacrosValue(current, $fieldNode) {
  const fieldNode = $fieldNode?.[0];
  if (!isMediaField(fieldNode)) {
    return current;
  }
  const fromDom = collectMediaFromDom(fieldNode);
  if (fromDom) {
    return fromDom;
  }
  const fromCurrent = collectMediaFromCurrent(current);
  if (fromCurrent) {
    return fromCurrent;
  }
  return '';
}

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
addFilter('jet.fb.macro.field.value', 'jet-form-builder/media-field', (current, $fieldNode, $macroHost) => (0,_resolveMediaMacrosValue__WEBPACK_IMPORTED_MODULE_2__.resolveMediaMacrosValue)(current, $fieldNode, $macroHost));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWVkaWEuZmllbGQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzFEQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBR0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDck1BO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7OztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tZWRpYS5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvcmVzb2x2ZU1lZGlhTWFjcm9zVmFsdWUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbWVkaWEuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL21lZGlhLmZpZWxkL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXBwZW5kTm9kZXMoIGNvbnRhaW5lciwgbm9kZXMgKSB7XHJcblx0LyoqXHJcblx0ICogV2UgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgYmVjYXVzZSB3ZSBuZWVkIGEgc3RhdGljIHNldCBvZiBlbGVtZW50cy5cclxuXHQgKiBJZiB5b3UgYXBwbHkgdGhlIC5jaGlsZHJlbiBvciAuY2hpbGROb2RlcyBwcm9wZXJ0eSxcclxuXHQgKiB0aGV5IHdpbGwgYWx3YXlzIHJldHVybiB0aGUgbGlzdCBvZiBjdXJyZW50bHkgYXZhaWxhYmxlIGVsZW1lbnRzLlxyXG5cdCAqL1xyXG5cdGNvbnN0IGNoaWxkcmVuID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxyXG5cdCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuICkge1xyXG5cdFx0aWYgKCBub2Rlcy5zb21lKCBub2RlID0+IG5vZGUuaXNFcXVhbE5vZGUoIGNoaWxkICkgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjaGlsZC5yZW1vdmUoKTtcclxuXHR9XHJcblx0Zm9yICggY29uc3QgaW5kZXggaW4gbm9kZXMgKSB7XHJcblx0XHRpZiAoICFub2Rlcy5oYXNPd25Qcm9wZXJ0eSggaW5kZXggKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjb25zdCBub2RlID0gbm9kZXNbIGluZGV4IF07XHJcblxyXG5cdFx0aWYgKCBub2RlLmlzQ29ubmVjdGVkICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIG5vZGUgKTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIGlucHV0RmlsZUFycmF5XHJcbiAqIEByZXR1cm4ge0ZpbGVMaXN0fVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlRmlsZUxpc3QoIGlucHV0RmlsZUFycmF5ICkge1xyXG5cdGNvbnN0IHRyYW5zZmVyID0gbmV3IERhdGFUcmFuc2ZlcigpO1xyXG5cclxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIGlucHV0RmlsZUFycmF5ICkge1xyXG5cdFx0dHJhbnNmZXIuaXRlbXMuYWRkKCBmaWxlICk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJhbnNmZXIuZmlsZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZpbGUoIGJsb2IsIGZpbGVOYW1lICkge1xyXG5cdHJldHVybiBuZXcgRmlsZSggWyBibG9iIF0sIGZpbGVOYW1lLCBibG9iICk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gIG5vZGUge0hUTUxFbGVtZW50fVxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gaXNGaWxlKCBub2RlICkge1xyXG5cdGlmICggbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ2pldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2lucHV0JyApICkge1xyXG5cdFx0cmV0dXJuICdmaWxlJyA9PT0gbm9kZS50eXBlO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5leHBvcnQgeyBhcHBlbmROb2RlcywgY3JlYXRlRmlsZUxpc3QsIGlzRmlsZSwgY3JlYXRlRmlsZSB9OyIsImltcG9ydCB7IGNyZWF0ZUZpbGVMaXN0LCBpc0ZpbGUgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7IElucHV0RGF0YSB9ID0gd2luZG93LkpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBGaWxlRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzTXVsdGlwbGUgICAgICAgID0gZmFsc2U7XHJcblx0dGhpcy5wcmV2RmlsZXMgICAgICAgICA9IG51bGw7XHJcblx0dGhpcy50ZW1wbGF0ZSAgICAgICAgICA9IG51bGw7XHJcblx0dGhpcy5wcmV2aWV3c0NvbnRhaW5lciA9IG51bGw7XHJcblx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG51bGw7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNGaWxlKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSA9IHRoaXMubm9kZXM7XHJcblxyXG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2hhbmdlJywgZXZlbnQgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBjcmVhdGVGaWxlTGlzdChcclxuXHRcdFx0XHR0aGlzLmlzTXVsdGlwbGVcclxuXHRcdFx0XHQ/IFsgLi4udGhpcy5wcmV2RmlsZXMgPz8gW10sIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdXHJcblx0XHRcdFx0OiBbIC4uLmV2ZW50LnRhcmdldC5maWxlcyBdLFxyXG5cdFx0XHQpO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcblx0dGhpcy5zZXROb2RlICAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cclxuXHRcdHRoaXMuaXNNdWx0aXBsZSA9IG5vZGUubXVsdGlwbGU7XHJcblxyXG5cdFx0dGhpcy53cmFwcGVyICAgICAgICAgICA9IG5vZGUuY2xvc2VzdChcclxuXHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkJyxcclxuXHRcdCk7XHJcblx0XHR0aGlzLnByZXZpZXdzQ29udGFpbmVyID0gdGhpcy53cmFwcGVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZXMnLFxyXG5cdFx0KTtcclxuXHRcdHRoaXMudGVtcGxhdGUgICAgICAgICAgPSB0aGlzLndyYXBwZXIuXHJcblx0XHRcdGNsb3Nlc3QoICcuZmllbGQtdHlwZS1tZWRpYS1maWVsZCcgKS5cclxuXHRcdFx0cXVlcnlTZWxlY3RvciggJy5qZXQtZm9ybS1idWlsZGVyX19wcmV2aWV3LXRlbXBsYXRlJyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmNhbGxhYmxlLmxvYWRGaWxlcygpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlID0gKCkgPT4ge307XHJcblxyXG5cdHRoaXMucmVRdWVyeVZhbHVlID0gKCkgPT4ge307XHJcbn1cclxuXHJcbkZpbGVEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5GaWxlRGF0YS5wcm90b3R5cGUud3JhcHBlciA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7SFRNTEVsZW1lbnR9XHJcbiAqL1xyXG5GaWxlRGF0YS5wcm90b3R5cGUucHJldmlld3NDb250YWluZXIgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge0hUTUxUZW1wbGF0ZUVsZW1lbnR9XHJcbiAqL1xyXG5GaWxlRGF0YS5wcm90b3R5cGUudGVtcGxhdGUgPSBudWxsO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZURhdGE7IiwiZnVuY3Rpb24gZXNjYXBlSHRtbCggdmFsdWUgKSB7XHJcblx0cmV0dXJuIFN0cmluZyggdmFsdWUgPz8gJycgKVxyXG5cdFx0LnJlcGxhY2VBbGwoICcmJywgJyZhbXA7JyApXHJcblx0XHQucmVwbGFjZUFsbCggJzwnLCAnJmx0OycgKVxyXG5cdFx0LnJlcGxhY2VBbGwoICc+JywgJyZndDsnIClcclxuXHRcdC5yZXBsYWNlQWxsKCAnXCInLCAnJnF1b3Q7JyApXHJcblx0XHQucmVwbGFjZUFsbCggXCInXCIsICcmIzAzOTsnICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTWVkaWFGaWVsZCggZmllbGROb2RlICkge1xyXG5cdGlmICggIWZpZWxkTm9kZSApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJldHVybiAhIWZpZWxkTm9kZS5jbG9zZXN0KCAnLmZpZWxkLXR5cGUtbWVkaWEtZmllbGQnICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckltYWdlSXRlbSggdXJsLCBuYW1lID0gJycgKSB7XHJcblx0Y29uc3QgbGFiZWwgPSBuYW1lIHx8ICdJbWFnZSc7XHJcblxyXG5cdHJldHVybiBgXHJcblx0XHQ8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOm5vbmU7IG1hcmdpbjowIDAgMTJweCAwO1wiPlxyXG5cdFx0XHQ8ZGl2IHN0eWxlPVwiZGlzcGxheTppbmxpbmUtYmxvY2s7IG1heC13aWR0aDoxNTBweDtcIj5cclxuXHRcdFx0XHQ8aW1nXHJcblx0XHRcdFx0XHRzcmM9XCIkeyBlc2NhcGVIdG1sKCB1cmwgKSB9XCJcclxuXHRcdFx0XHRcdGFsdD1cIiR7IGVzY2FwZUh0bWwoIGxhYmVsICkgfVwiXHJcblx0XHRcdFx0XHRzdHlsZT1cIlxyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OmJsb2NrO1xyXG5cdFx0XHRcdFx0XHR3aWR0aDoxNTBweDtcclxuXHRcdFx0XHRcdFx0aGVpZ2h0OjE1MHB4O1xyXG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OmNvdmVyO1xyXG5cdFx0XHRcdFx0XHRib3JkZXI6MXB4IHNvbGlkICNkY2RjZGM7XHJcblx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6OHB4O1xyXG5cdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiNmZmY7XHJcblx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT1cIlxyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo2cHg7XHJcblx0XHRcdFx0XHRmb250LXNpemU6MTNweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OjEuNDtcclxuXHRcdFx0XHRcdGNvbG9yOiM0NDQ7XHJcblx0XHRcdFx0XHR3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7XHJcblx0XHRcdFx0XCI+XHJcblx0XHRcdFx0XHQkeyBlc2NhcGVIdG1sKCBsYWJlbCApIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2xpPlxyXG5cdGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckZpbGVJdGVtKCB1cmwsIG5hbWUgPSAnJyApIHtcclxuXHRjb25zdCBsYWJlbCA9IG5hbWUgfHwgdXJsIHx8ICdGaWxlJztcclxuXHJcblx0aWYgKCB1cmwgKSB7XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0XHQ8bGkgc3R5bGU9XCJsaXN0LXN0eWxlOm5vbmU7IG1hcmdpbjowIDAgMTBweCAwO1wiPlxyXG5cdFx0XHRcdDxhXHJcblx0XHRcdFx0XHRocmVmPVwiJHsgZXNjYXBlSHRtbCggdXJsICkgfVwiXHJcblx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxyXG5cdFx0XHRcdFx0cmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcblx0XHRcdFx0XHRzdHlsZT1cIlxyXG5cdFx0XHRcdFx0XHRjb2xvcjojZDYzMzg0O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO1xyXG5cdFx0XHRcdFx0XHR3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRcdFx0XHRsaW5lLWhlaWdodDoxLjQ7XHJcblx0XHRcdFx0XHRcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdPCfk4QgJHsgZXNjYXBlSHRtbCggbGFiZWwgKSB9XHJcblx0XHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0YDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBgXHJcblx0XHQ8bGkgc3R5bGU9XCJcclxuXHRcdFx0bGlzdC1zdHlsZTpub25lO1xyXG5cdFx0XHRtYXJnaW46MCAwIDEwcHggMDtcclxuXHRcdFx0Zm9udC1zaXplOjE0cHg7XHJcblx0XHRcdGxpbmUtaGVpZ2h0OjEuNDtcclxuXHRcdFx0d29yZC1icmVhazpicmVhay13b3JkO1xyXG5cdFx0XHRjb2xvcjojNDQ0O1xyXG5cdFx0XCI+XHJcblx0XHRcdPCfk4QgJHsgZXNjYXBlSHRtbCggbGFiZWwgKSB9XHJcblx0XHQ8L2xpPlxyXG5cdGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBJdGVtcyggaXRlbXMgKSB7XHJcblx0aWYgKCAhaXRlbXMubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGBcclxuXHRcdDxkaXYgc3R5bGU9XCJcclxuXHRcdFx0ZGlzcGxheTpibG9jaztcclxuXHRcdFx0cGFkZGluZzowO1xyXG5cdFx0XHRtYXJnaW46MDtcclxuXHRcdFwiPlxyXG5cdFx0XHQ8dWwgc3R5bGU9XCJcclxuXHRcdFx0XHRtYXJnaW46MDtcclxuXHRcdFx0XHRwYWRkaW5nOjA7XHJcblx0XHRcdFx0bGlzdC1zdHlsZTpub25lO1xyXG5cdFx0XHRcIj5cclxuXHRcdFx0XHQkeyBpdGVtcy5qb2luKCAnJyApIH1cclxuXHRcdFx0PC91bD5cclxuXHRcdDwvZGl2PlxyXG5cdGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3RNZWRpYUZyb21Eb20oIGZpZWxkTm9kZSApIHtcclxuXHRjb25zdCB3cmFwcGVyID0gZmllbGROb2RlLmNsb3Nlc3QoICcuZmllbGQtdHlwZS1tZWRpYS1maWVsZCcgKTtcclxuXHRpZiAoICF3cmFwcGVyICkge1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Y29uc3QgZmlsZU5vZGVzID0gd3JhcHBlci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJ1xyXG5cdCk7XHJcblxyXG5cdGlmICggIWZpbGVOb2Rlcy5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuXHRmaWxlTm9kZXMuZm9yRWFjaCggKCBmaWxlTm9kZSApID0+IHtcclxuXHRcdGNvbnN0IHVybCA9IFN0cmluZyggZmlsZU5vZGUuZGF0YXNldD8uZmlsZSA/PyAnJyApLnRyaW0oKTtcclxuXHJcblx0XHRjb25zdCByZW1vdmVCdG4gPSBmaWxlTm9kZS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJ1xyXG5cdFx0KTtcclxuXHJcblx0XHRjb25zdCBmaWxlTmFtZSA9IFN0cmluZyhcclxuXHRcdFx0cmVtb3ZlQnRuPy5kYXRhc2V0Py5maWxlTmFtZSA/PyAnJ1xyXG5cdFx0KS50cmltKCk7XHJcblxyXG5cdFx0Y29uc3QgaW1nID0gZmlsZU5vZGUucXVlcnlTZWxlY3RvciggJ2ltZycgKTtcclxuXHJcblx0XHRpZiAoIGltZyAmJiB1cmwgKSB7XHJcblx0XHRcdGl0ZW1zLnB1c2goIHJlbmRlckltYWdlSXRlbSggdXJsLCBmaWxlTmFtZSApICk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGZpbGVOYW1lIHx8IHVybCApIHtcclxuXHRcdFx0aXRlbXMucHVzaCggcmVuZGVyRmlsZUl0ZW0oIHVybCwgZmlsZU5hbWUgKSApO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0cmV0dXJuIHdyYXBJdGVtcyggaXRlbXMgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdE1lZGlhRnJvbUN1cnJlbnQoIGN1cnJlbnQgKSB7XHJcblx0aWYgKCAhY3VycmVudCB8fCAhY3VycmVudC5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRjb25zdCBpdGVtcyA9IFtdO1xyXG5cclxuXHRmb3IgKCBjb25zdCBmaWxlIG9mIGN1cnJlbnQgKSB7XHJcblx0XHRpZiAoICFmaWxlICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBuYW1lID0gU3RyaW5nKCBmaWxlLm5hbWUgPz8gJycgKS50cmltKCk7XHJcblx0XHRjb25zdCB0eXBlID0gU3RyaW5nKCBmaWxlLnR5cGUgPz8gJycgKS50cmltKCk7XHJcblxyXG5cdFx0aWYgKCAvXmltYWdlXFwvLy50ZXN0KCB0eXBlICkgKSB7XHJcblx0XHRcdGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoIGZpbGUgKTtcclxuXHRcdFx0aXRlbXMucHVzaCggcmVuZGVySW1hZ2VJdGVtKCB1cmwsIG5hbWUgKSApO1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHJcblx0XHRpdGVtcy5wdXNoKCByZW5kZXJGaWxlSXRlbSggJycsIG5hbWUgKSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHdyYXBJdGVtcyggaXRlbXMgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlICkge1xyXG5cdGNvbnN0IGZpZWxkTm9kZSA9ICRmaWVsZE5vZGU/LlsgMCBdO1xyXG5cclxuXHRpZiAoICFpc01lZGlhRmllbGQoIGZpZWxkTm9kZSApICkge1xyXG5cdFx0cmV0dXJuIGN1cnJlbnQ7XHJcblx0fVxyXG5cclxuXHRjb25zdCBmcm9tRG9tID0gY29sbGVjdE1lZGlhRnJvbURvbSggZmllbGROb2RlICk7XHJcblx0aWYgKCBmcm9tRG9tICkge1xyXG5cdFx0cmV0dXJuIGZyb21Eb207XHJcblx0fVxyXG5cclxuXHRjb25zdCBmcm9tQ3VycmVudCA9IGNvbGxlY3RNZWRpYUZyb21DdXJyZW50KCBjdXJyZW50ICk7XHJcblx0aWYgKCBmcm9tQ3VycmVudCApIHtcclxuXHRcdHJldHVybiBmcm9tQ3VycmVudDtcclxuXHR9XHJcblxyXG5cdHJldHVybiAnJztcclxufSIsImltcG9ydCB7IGFwcGVuZE5vZGVzLCBjcmVhdGVGaWxlLCBjcmVhdGVGaWxlTGlzdCwgaXNGaWxlIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xyXG5cclxuY29uc3QgeyBCYXNlU2lnbmFsIH0gPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0ZpbGVEYXRhfSBpbnB1dCBSZWxhdGVkIGlucHV0XHJcbiAqL1xyXG5mdW5jdGlvbiBTaWduYWxGaWxlKCkge1xyXG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmxvY2suY3VycmVudCA9IHRydWU7XHJcblxyXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRyZXR1cm4gaXNGaWxlKCBub2RlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5ydW5TaWduYWwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBbIG5vZGUgXSAgICA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblx0XHRjb25zdCBwcmV2aWV3cyAgICA9IFtdO1xyXG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLmlucHV0LnZhbHVlO1xyXG5cdFx0Y29uc3QgZmlsZXMgICAgICAgPSB1bmlxdWVCeU5hbWUoIGN1cnJlbnQgPz8gW10gKTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBmaWxlIG9mIGZpbGVzICkge1xyXG5cdFx0XHRwcmV2aWV3cy5wdXNoKCB0aGlzLmdldFByZXZpZXcoIGZpbGUgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGFwcGVuZE5vZGVzKCB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLCBwcmV2aWV3cyApO1xyXG5cclxuXHRcdG5vZGUuZmlsZXMgICAgICAgICAgID0gY3JlYXRlRmlsZUxpc3QoIGZpbGVzICk7XHJcblx0XHR0aGlzLmlucHV0LnByZXZGaWxlcyA9IGZpbGVzO1xyXG5cclxuXHRcdHRoaXMuc29ydGFibGUoKTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5TaWduYWxGaWxlLnByb3RvdHlwZS5sb2FkRmlsZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgZmlsZXMgPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUnLFxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IHVybHMgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgcHJldmlldyBvZiBmaWxlcyApIHtcclxuXHRcdHRoaXMuYWRkUmVtb3ZlSGFuZGxlciggcHJldmlldyApO1xyXG5cclxuXHRcdGNvbnN0IHVybCAgICAgICAgICA9IHByZXZpZXcuZGF0YXNldC5maWxlO1xyXG5cdFx0Y29uc3QgcmVtb3ZlTm9kZSAgID0gcHJldmlldy5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJyxcclxuXHRcdCk7XHJcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVOb2RlLmRhdGFzZXQ7XHJcblxyXG5cdFx0dXJscy5wdXNoKCBbIHVybCwgZmlsZU5hbWUgXSApO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhdXJscy5sZW5ndGggKSB7XHJcblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xyXG5cclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdFByb21pc2UuYWxsU2V0dGxlZCggdXJscy5tYXAoICggWyB1cmwsIGZpbGVOYW1lIF0gKSA9PiAoXHJcblx0XHRuZXcgUHJvbWlzZSggKCByZXNvbHZlLCByZWplY3QgKSA9PiB7XHJcblx0XHRcdGZldGNoKCB1cmwgKS50aGVuKFxyXG5cdFx0XHRcdHJlc3BvbnNlID0+IHJlc3BvbnNlLmJsb2IoKSxcclxuXHRcdFx0KS50aGVuKFxyXG5cdFx0XHRcdGJsb2IgPT4gcmVzb2x2ZSggY3JlYXRlRmlsZSggYmxvYiwgZmlsZU5hbWUgKSApLFxyXG5cdFx0XHQpLmNhdGNoKCByZWplY3QgKTtcclxuXHRcdH0gKVxyXG5cdCkgKSApLnRoZW4oIHZhbHVlcyA9PiB7XHJcblx0XHRjb25zdCBuZXdGaWxlcyA9IHZhbHVlcy5tYXAoICggeyB2YWx1ZSB9ICkgPT4gdmFsdWUgKTtcclxuXHJcblxyXG5cdFx0Y29uc3QgdW5pcXVlICAgPSB1bmlxdWVCeU5hbWUoIG5ld0ZpbGVzICk7XHJcblxyXG5cdFx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcclxuXHRcdHRoaXMuaW5wdXQuc2lsZW5jZVNldCggY3JlYXRlRmlsZUxpc3QoIHVuaXF1ZSApICk7XHJcblx0fSApLmNhdGNoKCAoKSA9PiB7XHJcblx0XHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xyXG5cdH0gKTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLnNvcnRhYmxlID0gZnVuY3Rpb24gKCkge1xyXG5cdGpRdWVyeSggdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lciApLnVuYmluZCgpO1xyXG5cclxuXHRqUXVlcnkoIHRoaXMuaW5wdXQucHJldmlld3NDb250YWluZXIgKS5zb3J0YWJsZSgge1xyXG5cdFx0aXRlbXM6ICcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXHJcblx0XHRmb3JjZVBsYWNlaG9sZGVyU2l6ZTogdHJ1ZSxcclxuXHR9ICkuYmluZCggJ3NvcnR1cGRhdGUnLCAoKSA9PiB0aGlzLm9uU29ydENhbGxiYWNrKCkgKTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLm9uU29ydENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHRyYW5zZmVyICA9IG5ldyBEYXRhVHJhbnNmZXIoKTtcclxuXHRjb25zdCBbIGlucHV0IF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xyXG5cclxuXHRjb25zdCByZW1vdmVCdXR0b25zID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZScsXHJcblx0KTtcclxuXHJcblx0Zm9yICggY29uc3QgcmVtb3ZlQnV0dG9uIG9mIHJlbW92ZUJ1dHRvbnMgKSB7XHJcblx0XHRjb25zdCB7IGZpbGVOYW1lIH0gPSByZW1vdmVCdXR0b24uZGF0YXNldDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBmaWxlIG9mIGlucHV0LmZpbGVzICkge1xyXG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXHJcblx0XHRcdGlmICggZmlsZS5uYW1lICE9PSBmaWxlTmFtZSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dHJhbnNmZXIuaXRlbXMuYWRkKCBmaWxlICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSB0cmFuc2Zlci5maWxlcztcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmFkZFJlbW92ZUhhbmRsZXIgPSBmdW5jdGlvbiAoIHByZXZpZXcgKSB7XHJcblx0cHJldmlldy5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlLXJlbW92ZScsXHJcblx0KS5hZGRFdmVudExpc3RlbmVyKFxyXG5cdFx0J2NsaWNrJyxcclxuXHRcdHRoaXMucmVtb3ZlRmlsZS5iaW5kKCB0aGlzICksXHJcblx0KTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmdldFByZXZpZXcgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XHJcblx0Y29uc3QgcmVtb3ZlQnV0dG9uID0gdGhpcy5pbnB1dC5wcmV2aWV3c0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0YFtkYXRhLWZpbGUtbmFtZT1cIiR7IGZpbGUubmFtZSB9XCJdYCxcclxuXHQpO1xyXG5cclxuXHRpZiAoICFyZW1vdmVCdXR0b24gKSB7XHJcblx0XHRjb25zdCBwcmV2aWV3ID0gdGhpcy5jcmVhdGVQcmV2aWV3KCBmaWxlICk7XHJcblx0XHR0aGlzLmFkZFJlbW92ZUhhbmRsZXIoIHByZXZpZXcgKTtcclxuXHJcblx0XHRyZXR1cm4gcHJldmlldztcclxuXHR9XHJcblxyXG5cdHJldHVybiByZW1vdmVCdXR0b24uY2xvc2VzdChcclxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1maWxlLXVwbG9hZF9fZmlsZScsXHJcblx0KTtcclxufTtcclxuXHJcblNpZ25hbEZpbGUucHJvdG90eXBlLmNyZWF0ZVByZXZpZXcgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XHJcblx0Y29uc3QgdXJsICAgICAgICAgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBmaWxlICk7XHJcblx0bGV0IHsgaW5uZXJIVE1MIH0gPSB0aGlzLmlucHV0LnRlbXBsYXRlO1xyXG5cdGlubmVySFRNTCAgICAgICAgID0gaW5uZXJIVE1MLnJlcGxhY2UoICclZmlsZV91cmwlJywgdXJsICk7XHJcblx0aW5uZXJIVE1MICAgICAgICAgPSBpbm5lckhUTUwucmVwbGFjZSggJyVmaWxlX25hbWUlJywgZmlsZS5uYW1lICk7XHJcblxyXG5cdGNvbnN0IHdyYXBwZXIgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggJ3RlbXBsYXRlJyApO1xyXG5cdHdyYXBwZXIuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xyXG5cclxuXHRjb25zdCBub2RlID0gd3JhcHBlci5jb250ZW50LmZpcnN0Q2hpbGQ7XHJcblxyXG5cdGlmICggL15pbWFnZVxcLy8udGVzdCggZmlsZS50eXBlICkgKSB7XHJcblx0XHRjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdpbWcnICk7XHJcblx0XHRpbWFnZS5zcmMgICA9IHVybDtcclxuXHRcdGltYWdlLmFsdCAgID0gZmlsZS5uYW1lO1xyXG5cclxuXHRcdG5vZGUucHJlcGVuZCggaW1hZ2UgKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBub2RlO1xyXG59O1xyXG5cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUucmVtb3ZlRmlsZSA9IGZ1bmN0aW9uICggeyB0YXJnZXQgfSApIHtcclxuXHRjb25zdCBjbGFzc05hbWUgPSAnLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlJztcclxuXHRjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmlucHV0O1xyXG5cclxuXHRpZiAoICF0YXJnZXQubWF0Y2hlcyggY2xhc3NOYW1lICkgKSB7XHJcblx0XHR0YXJnZXQgPSB0YXJnZXQuY2xvc2VzdCggY2xhc3NOYW1lICk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB7IGZpbGVOYW1lIH0gPSB0YXJnZXQuZGF0YXNldDtcclxuXHJcblx0Y29uc3QgZHQgPSBuZXcgRGF0YVRyYW5zZmVyKCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IGZpbGUgb2YgdmFsdWUuY3VycmVudCApIHtcclxuXHRcdGlmICggZmlsZU5hbWUgIT09IGZpbGUubmFtZSApIHtcclxuXHRcdFx0ZHQuaXRlbXMuYWRkKCBmaWxlICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2YWx1ZS5jdXJyZW50ID0gZHQuZmlsZXM7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtICBmaWxlTmFtZVxyXG4gKiBAcmV0dXJuIHtFbGVtZW50fVxyXG4gKi9cclxuU2lnbmFsRmlsZS5wcm90b3R5cGUuZ2V0RmlsZU5vZGUgPSBmdW5jdGlvbiAoIGZpbGVOYW1lICkge1xyXG5cdGNvbnN0IGF0dHIgPSBgZGF0YS1maWxlLW5hbWU9XCIkeyBmaWxlTmFtZSB9XCJgO1xyXG5cclxuXHRjb25zdCByZW1vdmVCdG4gPSB0aGlzLmlucHV0LnByZXZpZXdzQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRgLmpldC1mb3JtLWJ1aWxkZXItZmlsZS11cGxvYWRfX2ZpbGUtcmVtb3ZlWyR7IGF0dHIgfV1gLFxyXG5cdCk7XHJcblxyXG5cdHJldHVybiByZW1vdmVCdG4uY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLWZpbGUtdXBsb2FkX19maWxlJyApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxGaWxlO1xyXG5cclxuZnVuY3Rpb24gdW5pcXVlQnlOYW1lKCBmaWxlcyApIHtcclxuXHRjb25zdCBzZWVuICAgPSBuZXcgU2V0KCk7XHJcblx0Y29uc3QgcmVzdWx0ID0gW107XHJcblxyXG5cdGZvciAoIGNvbnN0IGZpbGUgb2YgZmlsZXMgKSB7XHJcblx0XHRpZiAoIHNlZW4uaGFzKCBmaWxlLm5hbWUgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRzZWVuLmFkZCggZmlsZS5uYW1lICk7XHJcblx0XHRyZXN1bHQucHVzaCggZmlsZSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlc3VsdDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IEZpbGVEYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsRmlsZSBmcm9tICcuL3NpZ25hbCc7XHJcbmltcG9ydCB7IHJlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlIH0gZnJvbSAnLi9yZXNvbHZlTWVkaWFNYWNyb3NWYWx1ZSc7XHJcblxyXG5cclxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5pbnB1dHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcclxuXHRcdGlucHV0cyA9IFsgRmlsZURhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21lZGlhLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxGaWxlLCAuLi5zaWduYWxzIF07XHJcblxyXG5cdFx0cmV0dXJuIHNpZ25hbHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLm1hY3JvLmZpZWxkLnZhbHVlJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tZWRpYS1maWVsZCcsXHJcblx0KCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ICkgPT5cclxuXHRcdHJlc29sdmVNZWRpYU1hY3Jvc1ZhbHVlKCBjdXJyZW50LCAkZmllbGROb2RlLCAkbWFjcm9Ib3N0ICksXHJcbik7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==