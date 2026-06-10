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

// ADDED:
// WYSIWYG inside initial repeater rows can miss editor-related styles
// that are present in repeater template and loaded correctly after Add New.
// We copy only missing stylesheet links from the repeater template to <head>.
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
    editor()?.remove?.();

    // ADDED:
    // Before initializing WYSIWYG, ensure editor styles from repeater template
    // are available for initially rendered repeater rows.
    appendMissingRepeaterTemplateStyles(node);
    window.wp.editor.initialize(this.textArea.id, editorConfig);
    this.editor = editor();
    this.getEditor = editor;
    document.addEventListener('jet-form-builder/conditional-block/block-toggle-hidden-dom', event => {
      if (event.detail.block.contains(node)) {
        const block = event.detail.block;
        if (block.contains(node)) {
          if (!block.__initialized) {
            editor()?.remove?.();

            // ADDED:
            // Same styles check before conditional block re-initialization.
            appendMissingRepeaterTemplateStyles(node);
            window.wp.editor.initialize(this.textArea.id, editorConfig);
            this.editor = editor();
            this.getEditor = editor;
            block.__initialized = true;
          } else if (event.detail.result) {
            editor()?.remove?.();

            // ADDED:
            // Same styles check before conditional block re-initialization.
            appendMissingRepeaterTemplateStyles(node);
            window.wp.editor.initialize(this.textArea.id, editorConfig);
            this.editor = editor();
            this.getEditor = editor;
          }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXd5Zy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUM3S0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi13eXNpd3lnLy4vZnJvbnRlbmQvYmxvY2tzL3d5c2l3eWcvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvLi9mcm9udGVuZC9ibG9ja3Mvd3lzaXd5Zy9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi13eXNpd3lnL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItd3lzaXd5Zy8uL2Zyb250ZW5kL2Jsb2Nrcy93eXNpd3lnL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuXHRJbnB1dERhdGEsXG59ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHRnZXRQYXJzZWROYW1lLFxufSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG4vLyBBRERFRDpcbi8vIFdZU0lXWUcgaW5zaWRlIGluaXRpYWwgcmVwZWF0ZXIgcm93cyBjYW4gbWlzcyBlZGl0b3ItcmVsYXRlZCBzdHlsZXNcbi8vIHRoYXQgYXJlIHByZXNlbnQgaW4gcmVwZWF0ZXIgdGVtcGxhdGUgYW5kIGxvYWRlZCBjb3JyZWN0bHkgYWZ0ZXIgQWRkIE5ldy5cbi8vIFdlIGNvcHkgb25seSBtaXNzaW5nIHN0eWxlc2hlZXQgbGlua3MgZnJvbSB0aGUgcmVwZWF0ZXIgdGVtcGxhdGUgdG8gPGhlYWQ+LlxuZnVuY3Rpb24gYXBwZW5kTWlzc2luZ1JlcGVhdGVyVGVtcGxhdGVTdHlsZXMobm9kZSkge1xuXHRjb25zdCByZXBlYXRlciA9IG5vZGUuY2xvc2VzdCgnLmpldC1mb3JtLWJ1aWxkZXItcmVwZWF0ZXInKTtcblxuXHRpZiAoIXJlcGVhdGVyKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgdGVtcGxhdGUgPSByZXBlYXRlci5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlci1yZXBlYXRlcl9faW5pdGlhbCcsXG5cdCk7XG5cblx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHNvdXJjZSA9IHRlbXBsYXRlLmNvbnRlbnQgPz8gdGVtcGxhdGU7XG5cblx0Zm9yIChjb25zdCBsaW5rIG9mIHNvdXJjZS5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKSkge1xuXHRcdGlmIChsaW5rLmlkICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGxpbmsuaWQpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmID0gbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcblxuXHRcdGlmIChcblx0XHRcdGhyZWYgJiZcblx0XHRcdFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cInN0eWxlc2hlZXRcIl0nKV0uc29tZShcblx0XHRcdFx0Y3VycmVudCA9PiBjdXJyZW50LmdldEF0dHJpYnV0ZSgnaHJlZicpID09PSBocmVmLFxuXHRcdFx0KVxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rLmNsb25lTm9kZSh0cnVlKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gV3lzaXd5Z0RhdGEoKSB7XG5cdElucHV0RGF0YS5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAobm9kZSkge1xuXHRcdHJldHVybiBub2RlLmNsYXNzTGlzdC5jb250YWlucygnd3lzaXd5Zy1maWVsZCcpO1xuXHR9O1xuXHR0aGlzLnNldE5vZGUgPSBmdW5jdGlvbiAobm9kZSkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUuc2V0Tm9kZS5jYWxsKHRoaXMsIG5vZGUpO1xuXG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAnd3lzaXd5Zyc7XG5cblx0XHR0aGlzLmdldFN1Ym1pdCgpLnN1Ym1pdHRlci5wcm9taXNlKHJlc29sdmUgPT4ge1xuXHRcdFx0d2luZG93LnRpbnlNQ0UudHJpZ2dlclNhdmUoKTtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9KTtcblxuXHRcdHRoaXMudGV4dEFyZWEgPSBub2RlLnF1ZXJ5U2VsZWN0b3IoJy53cC1lZGl0b3ItYXJlYScpO1xuXHRcdGNvbnN0IGVkaXRvckNvbmZpZyA9IEpTT04ucGFyc2Uobm9kZS5kYXRhc2V0LmVkaXRvcik7XG5cblxuXHRcdHRoaXMucmF3TmFtZSA9IGVkaXRvckNvbmZpZy50ZXh0YXJlYV9uYW1lO1xuXHRcdHRoaXMubmFtZSA9IGdldFBhcnNlZE5hbWUodGhpcy5yYXdOYW1lKTtcblxuXHRcdGNvbnN0IGVkaXRvciA9ICgpID0+IHdpbmRvdy50aW55bWNlLmdldCh0aGlzLnRleHRBcmVhLmlkKTtcblx0XHRlZGl0b3IoKT8ucmVtb3ZlPy4oKTtcblxuXHRcdC8vIEFEREVEOlxuXHRcdC8vIEJlZm9yZSBpbml0aWFsaXppbmcgV1lTSVdZRywgZW5zdXJlIGVkaXRvciBzdHlsZXMgZnJvbSByZXBlYXRlciB0ZW1wbGF0ZVxuXHRcdC8vIGFyZSBhdmFpbGFibGUgZm9yIGluaXRpYWxseSByZW5kZXJlZCByZXBlYXRlciByb3dzLlxuXHRcdGFwcGVuZE1pc3NpbmdSZXBlYXRlclRlbXBsYXRlU3R5bGVzKG5vZGUpO1xuXG5cdFx0d2luZG93LndwLmVkaXRvci5pbml0aWFsaXplKHRoaXMudGV4dEFyZWEuaWQsIGVkaXRvckNvbmZpZyk7XG5cdFx0dGhpcy5lZGl0b3IgPSBlZGl0b3IoKTtcblx0XHR0aGlzLmdldEVkaXRvciA9IGVkaXRvcjtcblxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2pldC1mb3JtLWJ1aWxkZXIvY29uZGl0aW9uYWwtYmxvY2svYmxvY2stdG9nZ2xlLWhpZGRlbi1kb20nLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmIChldmVudC5kZXRhaWwuYmxvY2suY29udGFpbnMobm9kZSkpIHtcblx0XHRcdFx0Y29uc3QgYmxvY2sgPSBldmVudC5kZXRhaWwuYmxvY2s7XG5cdFx0XHRcdGlmIChibG9jay5jb250YWlucyhub2RlKSkge1xuXHRcdFx0XHRcdGlmICghYmxvY2suX19pbml0aWFsaXplZCkge1xuXHRcdFx0XHRcdFx0ZWRpdG9yKCk/LnJlbW92ZT8uKCk7XG5cblx0XHRcdFx0XHRcdC8vIEFEREVEOlxuXHRcdFx0XHRcdFx0Ly8gU2FtZSBzdHlsZXMgY2hlY2sgYmVmb3JlIGNvbmRpdGlvbmFsIGJsb2NrIHJlLWluaXRpYWxpemF0aW9uLlxuXHRcdFx0XHRcdFx0YXBwZW5kTWlzc2luZ1JlcGVhdGVyVGVtcGxhdGVTdHlsZXMobm9kZSk7XG5cblx0XHRcdFx0XHRcdHdpbmRvdy53cC5lZGl0b3IuaW5pdGlhbGl6ZSh0aGlzLnRleHRBcmVhLmlkLCBlZGl0b3JDb25maWcpO1xuXHRcdFx0XHRcdFx0dGhpcy5lZGl0b3IgPSBlZGl0b3IoKTtcblx0XHRcdFx0XHRcdHRoaXMuZ2V0RWRpdG9yID0gZWRpdG9yO1xuXHRcdFx0XHRcdFx0YmxvY2suX19pbml0aWFsaXplZCA9IHRydWU7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChldmVudC5kZXRhaWwucmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRlZGl0b3IoKT8ucmVtb3ZlPy4oKTtcblxuXHRcdFx0XHRcdFx0Ly8gQURERUQ6XG5cdFx0XHRcdFx0XHQvLyBTYW1lIHN0eWxlcyBjaGVjayBiZWZvcmUgY29uZGl0aW9uYWwgYmxvY2sgcmUtaW5pdGlhbGl6YXRpb24uXG5cdFx0XHRcdFx0XHRhcHBlbmRNaXNzaW5nUmVwZWF0ZXJUZW1wbGF0ZVN0eWxlcyhub2RlKTtcblxuXHRcdFx0XHRcdFx0d2luZG93LndwLmVkaXRvci5pbml0aWFsaXplKHRoaXMudGV4dEFyZWEuaWQsIGVkaXRvckNvbmZpZyk7XG5cdFx0XHRcdFx0XHR0aGlzLmVkaXRvciA9IGVkaXRvcigpO1xuXHRcdFx0XHRcdFx0dGhpcy5nZXRFZGl0b3IgPSBlZGl0b3I7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fTtcblxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VJbnZhbGlkID0gKCkgPT4geyB9O1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VWYWxpZCA9ICgpID0+IHsgfTtcblxuXHRcdGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcblx0XHRcdHRoaXMudmFsdWUuY3VycmVudCA9IHRoaXMuZWRpdG9yLmdldENvbnRlbnQoKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5nZXRFZGl0b3IoKT8ub24/LignaW5wdXQnLCB1cGRhdGUpPy5vbj8uKCdjaGFuZ2UnLCB1cGRhdGUpO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5nZXRFZGl0b3IoKT8ub24/LignaW5pdCcsICgpID0+IHtcblx0XHRcdHRoaXMudHJhbnNmZXJTdHlsZXNUb0lmcmFtZSgpO1xuXHRcdFx0dGhpcy5jYWxsYWJsZS5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcblx0XHRcdHRoaXMuc2lsZW5jZVNldCh0aGlzLmVkaXRvci5nZXRDb250ZW50KCkpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHRoaXMuaW5pdE5vdGlmeVZhbHVlID0gKCkgPT4geyB9O1xuXG5cdHRoaXMuZm9jdXNSYXcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5nZXRFZGl0b3IoKT8uZ2V0Qm9keSgpPy5mb2N1cyhcblx0XHRcdHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9LFxuXHRcdCk7XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblxuXHR0aGlzLnRyYW5zZmVyU3R5bGVzVG9JZnJhbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3Qgbm9kZSA9IHRoaXMuZ2V0V3JhcHBlck5vZGUoKTtcblx0XHRjb25zdCBpZnJhbWVCb2R5ID0gdGhpcy5lZGl0b3IuaWZyYW1lRWxlbWVudC5jb250ZW50RG9jdW1lbnQuYm9keTtcblxuXHRcdGNvbnN0IGNzc0RlY2xhcmF0aW9ucyA9IG5vZGUuc3R5bGUuY3NzVGV4dC5zcGxpdCgnOycpLlxuXHRcdFx0ZmlsdGVyKEJvb2xlYW4pO1xuXG5cdFx0Zm9yIChjb25zdCBjc3NEZWNsYXJhdGlvbiBvZiBjc3NEZWNsYXJhdGlvbnMpIHtcblx0XHRcdGNvbnN0IFt2YXJOYW1lLCB2YWx1ZV0gPSBjc3NEZWNsYXJhdGlvbi5zcGxpdCgnOicpO1xuXG5cdFx0XHRzd2l0Y2ggKHZhck5hbWUudHJpbSgpKSB7XG5cdFx0XHRcdGNhc2UgJy0tamZiLXd5c2l3eWctY29udGFpbmVyLWJnJzpcblx0XHRcdFx0XHRpZnJhbWVCb2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICctLWpmYi13eXNpd3lnLWNvbnRhaW5lci10ZXh0Jzpcblx0XHRcdFx0XHRpZnJhbWVCb2R5LnN0eWxlLmNvbG9yID0gdmFsdWU7XG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbld5c2l3eWdEYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSW5wdXREYXRhLnByb3RvdHlwZSk7XG5cbmV4cG9ydCBkZWZhdWx0IFd5c2l3eWdEYXRhOyIsImNvbnN0IHtcblx0ICAgICAgQmFzZVNpZ25hbCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7V3lzaXd5Z0RhdGF9IGlucHV0XG4gKi9cbmZ1bmN0aW9uIFNpZ25hbFd5c2l3eWcoKSB7XG5cdEJhc2VTaWduYWwuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMubG9jay5jdXJyZW50ID0gdHJ1ZTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dERhdGEgKSB7XG5cdFx0cmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3lzaXd5Zy1maWVsZCcgKTtcblx0fTtcblx0dGhpcy5ydW5TaWduYWwgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9PT0gdGhpcy5pbnB1dC5lZGl0b3IuZ2V0Q29udGVudCgpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLmlucHV0LmVkaXRvci5zZXRDb250ZW50KCB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPz8gJycgKTtcblx0fTtcbn1cblxuU2lnbmFsV3lzaXd5Zy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxXeXNpd3lnOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV3lzaXd5Z0RhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsV3lzaXd5ZyBmcm9tICcuL3NpZ25hbCc7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvd3lzaXd5Zy1maWVsZCcsXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xuXHRcdGlucHV0cyA9IFsgV3lzaXd5Z0RhdGEsIC4uLmlucHV0cyBdO1xuXHRcdHJldHVybiBpbnB1dHM7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuc2lnbmFscycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL3d5c2l3eWctZmllbGQnLFxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsV3lzaXd5ZywgLi4uc2lnbmFscyBdO1xuXG5cdFx0cmV0dXJuIHNpZ25hbHM7XG5cdH1cbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9