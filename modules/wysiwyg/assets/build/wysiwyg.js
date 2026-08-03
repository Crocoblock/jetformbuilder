/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/wysiwyg/input.js"
/*!******************************************!*\
  !*** ./frontend/blocks/wysiwyg/input.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  InputData
} = JetFormBuilderAbstract;
const {
  getParsedName
} = JetFormBuilderFunctions;
function appendMissingRepeaterTemplateStyles(node) {
  var _template$content;
  const repeater = node.closest('.jet-form-builder-repeater');
  if (!repeater) {
    return;
  }
  const template = repeater.querySelector('.jet-form-builder-repeater__initial');
  if (!template) {
    return;
  }
  const source = (_template$content = template.content) !== null && _template$content !== void 0 ? _template$content : template;
  for (const link of source.querySelectorAll('link[rel="stylesheet"]')) {
    if (link.id && document.getElementById(link.id)) {
      continue;
    }
    const href = link.getAttribute('href');
    if (href && [...document.querySelectorAll('link[rel="stylesheet"]')].some(current => current.getAttribute('href') === href)) {
      continue;
    }
    document.head.appendChild(link.cloneNode(true));
  }
}

// During repeater reindexing, the old row may still contain a textarea
// with the same ID as the newly created row.
//
// TinyMCE and wp.editor work globally by element ID, so the old textarea
// must release that ID before the new editor is initialized.
function releaseStaleEditorId(textArea) {
  const editorId = textArea.id;
  const existingEditor = window.tinymce.get(editorId);
  const existingEditorElement = existingEditor?.getElement?.();
  if (existingEditor && existingEditorElement !== textArea) {
    existingEditor.remove();
  }
  const duplicateElement = document.getElementById(editorId);
  if (duplicateElement && duplicateElement !== textArea) {
    duplicateElement.id = [editorId, 'stale', Date.now(), Math.random().toString(36).slice(2)].join('_');
  }
}
function WysiwygData() {
  InputData.call(this);
  this.isSupported = function (node) {
    return node.classList.contains('wysiwyg-field');
  };
  this.setNode = function (node) {
    InputData.prototype.setNode.call(this, node);
    this.inputType = 'wysiwyg';
    this.getSubmit().submitter.promise(resolve => {
      window.tinyMCE.triggerSave();
      resolve();
    });
    this.textArea = node.querySelector('.wp-editor-area');
    const editorConfig = JSON.parse(node.dataset.editor);
    this.rawName = editorConfig.textarea_name;
    this.name = getParsedName(this.rawName);
    const editor = () => window.tinymce.get(this.textArea.id);

    // Remove a stale TinyMCE instance and release the duplicated textarea ID
    // before initializing the editor on the current textarea.
    releaseStaleEditorId(this.textArea);
    appendMissingRepeaterTemplateStyles(node);
    window.wp.editor.initialize(this.textArea.id, editorConfig);
    this.editor = editor();
    this.getEditor = editor;
    document.addEventListener('jet-form-builder/conditional-block/block-toggle-hidden-dom', event => {
      if (!event.detail.block.contains(node)) {
        return;
      }
      const block = event.detail.block;
      if (!block.contains(node)) {
        return;
      }
      if (!block.__initialized) {
        // Use the same stale-editor protection before
        // conditional block initialization.
        releaseStaleEditorId(this.textArea);
        appendMissingRepeaterTemplateStyles(node);
        window.wp.editor.initialize(this.textArea.id, editorConfig);
        this.editor = editor();
        this.getEditor = editor;
        block.__initialized = true;
        return;
      }
      if (event.detail.result) {
        // Use the same stale-editor protection before
        // conditional block reinitialization.
        releaseStaleEditorId(this.textArea);
        appendMissingRepeaterTemplateStyles(node);
        window.wp.editor.initialize(this.textArea.id, editorConfig);
        this.editor = editor();
        this.getEditor = editor;
      }
    });
  };
  this.addListeners = function () {
    // disable aria attributes
    this.reporting.makeInvalid = () => {};
    this.reporting.makeValid = () => {};
    const update = () => {
      this.value.current = this.editor.getContent();
    };
    this.getEditor()?.on?.('input', update)?.on?.('change', update);
  };
  this.setValue = function () {
    this.getEditor()?.on?.('init', () => {
      this.transferStylesToIframe();
      this.callable.lock.current = false;
      this.silenceSet(this.editor.getContent());
    });
  };
  this.initNotifyValue = () => {};
  this.focusRaw = function () {
    this.getEditor()?.getBody()?.focus({
      preventScroll: true
    });
  };
  this.hasAutoScroll = function () {
    return false;
  };
  this.transferStylesToIframe = function () {
    const node = this.getWrapperNode();
    const iframeBody = this.editor.iframeElement.contentDocument.body;
    const cssDeclarations = node.style.cssText.split(';').filter(Boolean);
    for (const cssDeclaration of cssDeclarations) {
      const [varName, value] = cssDeclaration.split(':');
      switch (varName.trim()) {
        case '--jfb-wysiwyg-container-bg':
          iframeBody.style.backgroundColor = value;
          break;
        case '--jfb-wysiwyg-container-text':
          iframeBody.style.color = value;
          break;
      }
    }
  };
}
WysiwygData.prototype = Object.create(InputData.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WysiwygData);

/***/ },

/***/ "./frontend/blocks/wysiwyg/signal.js"
/*!*******************************************!*\
  !*** ./frontend/blocks/wysiwyg/signal.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  BaseSignal
} = JetFormBuilderAbstract;

/**
 * @property {WysiwygData} input
 */
function SignalWysiwyg() {
  BaseSignal.call(this);
  this.lock.current = true;
  this.isSupported = function (node, inputData) {
    return node.classList.contains('wysiwyg-field');
  };
  this.runSignal = function () {
    var _this$input$value$cur;
    if (this.input.value.current === this.input.editor.getContent()) {
      return;
    }
    this.input.editor.setContent((_this$input$value$cur = this.input.value.current) !== null && _this$input$value$cur !== void 0 ? _this$input$value$cur : '');
  };
}
SignalWysiwyg.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalWysiwyg);

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
/*!*****************************************!*\
  !*** ./frontend/blocks/wysiwyg/main.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/blocks/wysiwyg/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/blocks/wysiwyg/signal.js");


const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/wysiwyg-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/wysiwyg-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXd5Zy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUVBO0FBRUE7QUFJQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUNuT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi13eXNpd3lnLy4vZnJvbnRlbmQvYmxvY2tzL3d5c2l3eWcvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvLi9mcm9udGVuZC9ibG9ja3Mvd3lzaXd5Zy9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi13eXNpd3lnL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItd3lzaXd5Zy8uL2Zyb250ZW5kL2Jsb2Nrcy93eXNpd3lnL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuXHRJbnB1dERhdGEsXG59ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHRnZXRQYXJzZWROYW1lLFxufSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBhcHBlbmRNaXNzaW5nUmVwZWF0ZXJUZW1wbGF0ZVN0eWxlcyhub2RlKSB7XG5cdGNvbnN0IHJlcGVhdGVyID0gbm9kZS5jbG9zZXN0KCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcicpO1xuXG5cdGlmICghcmVwZWF0ZXIpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCB0ZW1wbGF0ZSA9IHJlcGVhdGVyLnF1ZXJ5U2VsZWN0b3IoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyLXJlcGVhdGVyX19pbml0aWFsJyxcblx0KTtcblxuXHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3Qgc291cmNlID0gdGVtcGxhdGUuY29udGVudCA/PyB0ZW1wbGF0ZTtcblxuXHRmb3IgKGNvbnN0IGxpbmsgb2Ygc291cmNlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpKSB7XG5cdFx0aWYgKGxpbmsuaWQgJiYgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQobGluay5pZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGNvbnN0IGhyZWYgPSBsaW5rLmdldEF0dHJpYnV0ZSgnaHJlZicpO1xuXG5cdFx0aWYgKFxuXHRcdFx0aHJlZiAmJlxuXHRcdFx0Wy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwic3R5bGVzaGVldFwiXScpXS5zb21lKFxuXHRcdFx0XHRjdXJyZW50ID0+IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdocmVmJykgPT09IGhyZWYsXG5cdFx0XHQpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmsuY2xvbmVOb2RlKHRydWUpKTtcblx0fVxufVxuXG4vLyBEdXJpbmcgcmVwZWF0ZXIgcmVpbmRleGluZywgdGhlIG9sZCByb3cgbWF5IHN0aWxsIGNvbnRhaW4gYSB0ZXh0YXJlYVxuLy8gd2l0aCB0aGUgc2FtZSBJRCBhcyB0aGUgbmV3bHkgY3JlYXRlZCByb3cuXG4vL1xuLy8gVGlueU1DRSBhbmQgd3AuZWRpdG9yIHdvcmsgZ2xvYmFsbHkgYnkgZWxlbWVudCBJRCwgc28gdGhlIG9sZCB0ZXh0YXJlYVxuLy8gbXVzdCByZWxlYXNlIHRoYXQgSUQgYmVmb3JlIHRoZSBuZXcgZWRpdG9yIGlzIGluaXRpYWxpemVkLlxuZnVuY3Rpb24gcmVsZWFzZVN0YWxlRWRpdG9ySWQodGV4dEFyZWEpIHtcblx0Y29uc3QgZWRpdG9ySWQgPSB0ZXh0QXJlYS5pZDtcblx0Y29uc3QgZXhpc3RpbmdFZGl0b3IgPSB3aW5kb3cudGlueW1jZS5nZXQoZWRpdG9ySWQpO1xuXHRjb25zdCBleGlzdGluZ0VkaXRvckVsZW1lbnQgPSBleGlzdGluZ0VkaXRvcj8uZ2V0RWxlbWVudD8uKCk7XG5cblx0aWYgKFxuXHRcdGV4aXN0aW5nRWRpdG9yICYmXG5cdFx0ZXhpc3RpbmdFZGl0b3JFbGVtZW50ICE9PSB0ZXh0QXJlYVxuXHQpIHtcblx0XHRleGlzdGluZ0VkaXRvci5yZW1vdmUoKTtcblx0fVxuXG5cdGNvbnN0IGR1cGxpY2F0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlZGl0b3JJZCk7XG5cblx0aWYgKFxuXHRcdGR1cGxpY2F0ZUVsZW1lbnQgJiZcblx0XHRkdXBsaWNhdGVFbGVtZW50ICE9PSB0ZXh0QXJlYVxuXHQpIHtcblx0XHRkdXBsaWNhdGVFbGVtZW50LmlkID0gW1xuXHRcdFx0ZWRpdG9ySWQsXG5cdFx0XHQnc3RhbGUnLFxuXHRcdFx0RGF0ZS5ub3coKSxcblx0XHRcdE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIpLFxuXHRcdF0uam9pbignXycpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIFd5c2l3eWdEYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCh0aGlzKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKG5vZGUpIHtcblx0XHRyZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoJ3d5c2l3eWctZmllbGQnKTtcblx0fTtcblxuXHR0aGlzLnNldE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKHRoaXMsIG5vZGUpO1xuXG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAnd3lzaXd5Zyc7XG5cblx0XHR0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5wcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0d2luZG93LnRpbnlNQ0UudHJpZ2dlclNhdmUoKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudGV4dEFyZWEgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy53cC1lZGl0b3ItYXJlYScpO1xuXHRcdGNvbnN0IGVkaXRvckNvbmZpZyA9IEpTT04ucGFyc2Uobm9kZS5kYXRhc2V0LmVkaXRvcik7XG5cblx0XHR0aGlzLnJhd05hbWUgPSBlZGl0b3JDb25maWcudGV4dGFyZWFfbmFtZTtcblx0XHR0aGlzLm5hbWUgPSBnZXRQYXJzZWROYW1lKHRoaXMucmF3TmFtZSk7XG5cblx0XHRjb25zdCBlZGl0b3IgPSAoKSA9PiB3aW5kb3cudGlueW1jZS5nZXQodGhpcy50ZXh0QXJlYS5pZCk7XG5cblx0XHQvLyBSZW1vdmUgYSBzdGFsZSBUaW55TUNFIGluc3RhbmNlIGFuZCByZWxlYXNlIHRoZSBkdXBsaWNhdGVkIHRleHRhcmVhIElEXG5cdFx0Ly8gYmVmb3JlIGluaXRpYWxpemluZyB0aGUgZWRpdG9yIG9uIHRoZSBjdXJyZW50IHRleHRhcmVhLlxuXHRcdHJlbGVhc2VTdGFsZUVkaXRvcklkKHRoaXMudGV4dEFyZWEpO1xuXG5cdFx0YXBwZW5kTWlzc2luZ1JlcGVhdGVyVGVtcGxhdGVTdHlsZXMobm9kZSk7XG5cblx0XHR3aW5kb3cud3AuZWRpdG9yLmluaXRpYWxpemUoXG5cdFx0XHR0aGlzLnRleHRBcmVhLmlkLFxuXHRcdFx0ZWRpdG9yQ29uZmlnLFxuXHRcdCk7XG5cblx0XHR0aGlzLmVkaXRvciA9IGVkaXRvcigpO1xuXHRcdHRoaXMuZ2V0RWRpdG9yID0gZWRpdG9yO1xuXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL2NvbmRpdGlvbmFsLWJsb2NrL2Jsb2NrLXRvZ2dsZS1oaWRkZW4tZG9tJyxcblx0XHRcdGV2ZW50ID0+IHtcblx0XHRcdFx0aWYgKCFldmVudC5kZXRhaWwuYmxvY2suY29udGFpbnMobm9kZSkpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb25zdCBibG9jayA9IGV2ZW50LmRldGFpbC5ibG9jaztcblxuXHRcdFx0XHRpZiAoIWJsb2NrLmNvbnRhaW5zKG5vZGUpKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCFibG9jay5fX2luaXRpYWxpemVkKSB7XG5cdFx0XHRcdFx0Ly8gVXNlIHRoZSBzYW1lIHN0YWxlLWVkaXRvciBwcm90ZWN0aW9uIGJlZm9yZVxuXHRcdFx0XHRcdC8vIGNvbmRpdGlvbmFsIGJsb2NrIGluaXRpYWxpemF0aW9uLlxuXHRcdFx0XHRcdHJlbGVhc2VTdGFsZUVkaXRvcklkKHRoaXMudGV4dEFyZWEpO1xuXG5cdFx0XHRcdFx0YXBwZW5kTWlzc2luZ1JlcGVhdGVyVGVtcGxhdGVTdHlsZXMobm9kZSk7XG5cblx0XHRcdFx0XHR3aW5kb3cud3AuZWRpdG9yLmluaXRpYWxpemUoXG5cdFx0XHRcdFx0XHR0aGlzLnRleHRBcmVhLmlkLFxuXHRcdFx0XHRcdFx0ZWRpdG9yQ29uZmlnLFxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHR0aGlzLmVkaXRvciA9IGVkaXRvcigpO1xuXHRcdFx0XHRcdHRoaXMuZ2V0RWRpdG9yID0gZWRpdG9yO1xuXHRcdFx0XHRcdGJsb2NrLl9faW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGV2ZW50LmRldGFpbC5yZXN1bHQpIHtcblx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgc3RhbGUtZWRpdG9yIHByb3RlY3Rpb24gYmVmb3JlXG5cdFx0XHRcdFx0Ly8gY29uZGl0aW9uYWwgYmxvY2sgcmVpbml0aWFsaXphdGlvbi5cblx0XHRcdFx0XHRyZWxlYXNlU3RhbGVFZGl0b3JJZCh0aGlzLnRleHRBcmVhKTtcblxuXHRcdFx0XHRcdGFwcGVuZE1pc3NpbmdSZXBlYXRlclRlbXBsYXRlU3R5bGVzKG5vZGUpO1xuXG5cdFx0XHRcdFx0d2luZG93LndwLmVkaXRvci5pbml0aWFsaXplKFxuXHRcdFx0XHRcdFx0dGhpcy50ZXh0QXJlYS5pZCxcblx0XHRcdFx0XHRcdGVkaXRvckNvbmZpZyxcblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0dGhpcy5lZGl0b3IgPSBlZGl0b3IoKTtcblx0XHRcdFx0XHR0aGlzLmdldEVkaXRvciA9IGVkaXRvcjtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMuYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRcdC8vIGRpc2FibGUgYXJpYSBhdHRyaWJ1dGVzXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZUludmFsaWQgPSAoKSA9PiB7IH07XG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkID0gKCkgPT4geyB9O1xuXG5cdFx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xuXHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gdGhpcy5lZGl0b3IuZ2V0Q29udGVudCgpO1xuXHRcdH07XG5cblx0XHR0aGlzLmdldEVkaXRvcigpXG5cdFx0XHQ/Lm9uPy4oJ2lucHV0JywgdXBkYXRlKVxuXHRcdFx0Py5vbj8uKCdjaGFuZ2UnLCB1cGRhdGUpO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5nZXRFZGl0b3IoKT8ub24/LignaW5pdCcsICgpID0+IHtcblx0XHRcdHRoaXMudHJhbnNmZXJTdHlsZXNUb0lmcmFtZSgpO1xuXHRcdFx0dGhpcy5jYWxsYWJsZS5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcblx0XHRcdHRoaXMuc2lsZW5jZVNldCh0aGlzLmVkaXRvci5nZXRDb250ZW50KCkpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlID0gKCkgPT4geyB9O1xuXG5cdHRoaXMuZm9jdXNSYXcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5nZXRFZGl0b3IoKT8uZ2V0Qm9keSgpPy5mb2N1cyhcblx0XHRcdHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9LFxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR0aGlzLnRyYW5zZmVyU3R5bGVzVG9JZnJhbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcblx0XHRjb25zdCBpZnJhbWVCb2R5ID0gdGhpcy5lZGl0b3IuaWZyYW1lRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYm9keTtcblxuXHRcdGNvbnN0IGNzc0RlY2xhcmF0aW9ucyA9IG5vZGUuc3R5bGUuY3NzVGV4dFxuXHRcdFx0LnNwbGl0KCc7Jylcblx0XHRcdC5maWx0ZXIoQm9vbGVhbik7XG5cblx0XHRmb3IgKGNvbnN0IGNzc0RlY2xhcmF0aW9uIG9mIGNzc0RlY2xhcmF0aW9ucykge1xuXHRcdFx0Y29uc3QgW3Zhck5hbWUsIHZhbHVlXSA9IGNzc0RlY2xhcmF0aW9uLnNwbGl0KCc6Jyk7XG5cblx0XHRcdHN3aXRjaCAodmFyTmFtZS50cmltKCkpIHtcblx0XHRcdFx0Y2FzZSAnLS1qZmItd3lzaXd5Zy1jb250YWluZXItYmcnOlxuXHRcdFx0XHRcdGlmcmFtZUJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdmFsdWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSAnLS1qZmItd3lzaXd5Zy1jb250YWluZXItdGV4dCc6XG5cdFx0XHRcdFx0aWZyYW1lQm9keS5zdHlsZS5jb2xvciA9IHZhbHVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuV3lzaXd5Z0RhdGEucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJbnB1dERhdGEucHJvdG90eXBlKTtcblxuZXhwb3J0IGRlZmF1bHQgV3lzaXd5Z0RhdGE7IiwiY29uc3Qge1xuXHQgICAgICBCYXNlU2lnbmFsLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IHtXeXNpd3lnRGF0YX0gaW5wdXRcbiAqL1xuZnVuY3Rpb24gU2lnbmFsV3lzaXd5ZygpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5sb2NrLmN1cnJlbnQgPSB0cnVlO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIGlucHV0RGF0YSApIHtcblx0XHRyZXR1cm4gbm9kZS5jbGFzc0xpc3QuY29udGFpbnMoICd3eXNpd3lnLWZpZWxkJyApO1xuXHR9O1xuXHR0aGlzLnJ1blNpZ25hbCAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGlmICggdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID09PSB0aGlzLmlucHV0LmVkaXRvci5nZXRDb250ZW50KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuaW5wdXQuZWRpdG9yLnNldENvbnRlbnQoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA/PyAnJyApO1xuXHR9O1xufVxuXG5TaWduYWxXeXNpd3lnLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbFd5c2l3eWc7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBXeXNpd3lnRGF0YSBmcm9tICcuL2lucHV0JztcbmltcG9ydCBTaWduYWxXeXNpd3lnIGZyb20gJy4vc2lnbmFsJztcblxuY29uc3QgeyBhZGRGaWx0ZXIgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci93eXNpd3lnLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBXeXNpd3lnRGF0YSwgLi4uaW5wdXRzIF07XG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvd3lzaXd5Zy1maWVsZCcsXG5cdGZ1bmN0aW9uICggc2lnbmFscyApIHtcblx0XHRzaWduYWxzID0gWyBTaWduYWxXeXNpd3lnLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fVxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
