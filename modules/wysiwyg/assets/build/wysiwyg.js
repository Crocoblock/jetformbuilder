/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/blocks/wysiwyg/input.js":
/*!******************************************!*\
  !*** ./frontend/blocks/wysiwyg/input.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    window.wp.editor.initialize(this.textArea.id, editorConfig);
    this.editor = editor();
    this.getEditor = editor;
    let initFlag = false;
    document.addEventListener('jet-form-builder/conditional-block/block-toggle', event => {
      if (event.detail.block.contains(node) && event.detail.result || !initFlag) {
        initFlag = true;
        editor()?.remove?.();
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

/***/ }),

/***/ "./frontend/blocks/wysiwyg/signal.js":
/*!*******************************************!*\
  !*** ./frontend/blocks/wysiwyg/signal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3lzaXd5Zy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQzFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvLi9mcm9udGVuZC9ibG9ja3Mvd3lzaXd5Zy9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItd3lzaXd5Zy8uL2Zyb250ZW5kL2Jsb2Nrcy93eXNpd3lnL3NpZ25hbC5qcyIsIndlYnBhY2s6Ly9qZmItd3lzaXd5Zy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItd3lzaXd5Zy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLXd5c2l3eWcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItd3lzaXd5Zy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi13eXNpd3lnLy4vZnJvbnRlbmQvYmxvY2tzL3d5c2l3eWcvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0ICAgICAgSW5wdXREYXRhLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBnZXRQYXJzZWROYW1lLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5mdW5jdGlvbiBXeXNpd3lnRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3lzaXd5Zy1maWVsZCcgKTtcclxuXHR9O1xyXG5cdHRoaXMuc2V0Tm9kZSAgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cclxuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ3d5c2l3eWcnO1xyXG5cclxuXHRcdHRoaXMuZ2V0U3VibWl0KCkuc3VibWl0dGVyLnByb21pc2UoIHJlc29sdmUgPT4ge1xyXG5cdFx0XHR3aW5kb3cudGlueU1DRS50cmlnZ2VyU2F2ZSgpO1xyXG5cdFx0XHRyZXNvbHZlKCk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0dGhpcy50ZXh0QXJlYSAgICAgID0gbm9kZS5xdWVyeVNlbGVjdG9yKCAnLndwLWVkaXRvci1hcmVhJyApO1xyXG5cdFx0Y29uc3QgZWRpdG9yQ29uZmlnID0gSlNPTi5wYXJzZSggbm9kZS5kYXRhc2V0LmVkaXRvciApO1xyXG5cclxuXHJcblx0XHR0aGlzLnJhd05hbWUgPSBlZGl0b3JDb25maWcudGV4dGFyZWFfbmFtZTtcclxuXHRcdHRoaXMubmFtZSAgICA9IGdldFBhcnNlZE5hbWUoIHRoaXMucmF3TmFtZSApO1xyXG5cclxuXHRcdGNvbnN0IGVkaXRvciA9ICgpID0+IHdpbmRvdy50aW55bWNlLmdldCggdGhpcy50ZXh0QXJlYS5pZCApO1xyXG5cdFx0ZWRpdG9yKCk/LnJlbW92ZT8uKCk7XHJcblx0XHR3aW5kb3cud3AuZWRpdG9yLmluaXRpYWxpemUoIHRoaXMudGV4dEFyZWEuaWQsIGVkaXRvckNvbmZpZyApO1xyXG5cdFx0dGhpcy5lZGl0b3IgICAgPSBlZGl0b3IoKTtcclxuXHRcdHRoaXMuZ2V0RWRpdG9yID0gZWRpdG9yO1xyXG5cclxuXHRcdGxldCBpbml0RmxhZyA9IGZhbHNlO1xyXG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignamV0LWZvcm0tYnVpbGRlci9jb25kaXRpb25hbC1ibG9jay9ibG9jay10b2dnbGUnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50LmRldGFpbC5ibG9jay5jb250YWlucyhub2RlKSAmJiBldmVudC5kZXRhaWwucmVzdWx0IHx8ICFpbml0RmxhZyApIHtcclxuXHRcdFx0XHRpbml0RmxhZyA9IHRydWU7XHJcblx0XHRcdFx0ZWRpdG9yKCk/LnJlbW92ZT8uKCk7XHJcblx0XHRcdFx0d2luZG93LndwLmVkaXRvci5pbml0aWFsaXplKHRoaXMudGV4dEFyZWEuaWQsIGVkaXRvckNvbmZpZyk7XHJcblx0XHRcdFx0dGhpcy5lZGl0b3IgPSBlZGl0b3IoKTtcclxuXHRcdFx0XHR0aGlzLmdldEVkaXRvciA9IGVkaXRvcjtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5hZGRMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZUludmFsaWQgPSAoKSA9PiB7fTtcclxuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VWYWxpZCAgID0gKCkgPT4ge307XHJcblxyXG5cdFx0Y29uc3QgdXBkYXRlID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLmVkaXRvci5nZXRDb250ZW50KCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuZ2V0RWRpdG9yKCk/Lm9uPy4oICdpbnB1dCcsIHVwZGF0ZSApPy5vbj8uKCAnY2hhbmdlJywgdXBkYXRlICk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2V0RWRpdG9yKCk/Lm9uPy4oICdpbml0JywgKCkgPT4ge1xyXG5cdFx0XHR0aGlzLnRyYW5zZmVyU3R5bGVzVG9JZnJhbWUoKTtcclxuXHRcdFx0dGhpcy5jYWxsYWJsZS5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5zaWxlbmNlU2V0KCB0aGlzLmVkaXRvci5nZXRDb250ZW50KCkgKTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmluaXROb3RpZnlWYWx1ZSA9ICgpID0+IHt9O1xyXG5cclxuXHR0aGlzLmZvY3VzUmF3ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZXRFZGl0b3IoKT8uZ2V0Qm9keSgpPy5mb2N1cyhcclxuXHRcdFx0eyBwcmV2ZW50U2Nyb2xsOiB0cnVlIH0sXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHRoaXMuaGFzQXV0b1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnRyYW5zZmVyU3R5bGVzVG9JZnJhbWUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRjb25zdCBub2RlICAgICAgID0gdGhpcy5nZXRXcmFwcGVyTm9kZSgpO1xyXG5cdFx0Y29uc3QgaWZyYW1lQm9keSA9IHRoaXMuZWRpdG9yLmlmcmFtZUVsZW1lbnQuY29udGVudERvY3VtZW50LmJvZHk7XHJcblxyXG5cdFx0Y29uc3QgY3NzRGVjbGFyYXRpb25zID0gbm9kZS5zdHlsZS5jc3NUZXh0LnNwbGl0KCAnOycgKS5cclxuXHRcdFx0ZmlsdGVyKCBCb29sZWFuICk7XHJcblxyXG5cdFx0Zm9yICggY29uc3QgY3NzRGVjbGFyYXRpb24gb2YgY3NzRGVjbGFyYXRpb25zICkge1xyXG5cdFx0XHRjb25zdCBbIHZhck5hbWUsIHZhbHVlIF0gPSBjc3NEZWNsYXJhdGlvbi5zcGxpdCggJzonICk7XHJcblxyXG5cdFx0XHRzd2l0Y2ggKCB2YXJOYW1lLnRyaW0oKSApIHtcclxuXHRcdFx0XHRjYXNlICctLWpmYi13eXNpd3lnLWNvbnRhaW5lci1iZyc6XHJcblx0XHRcdFx0XHRpZnJhbWVCb2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHZhbHVlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnLS1qZmItd3lzaXd5Zy1jb250YWluZXItdGV4dCc6XHJcblx0XHRcdFx0XHRpZnJhbWVCb2R5LnN0eWxlLmNvbG9yID0gdmFsdWU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG59XHJcblxyXG5XeXNpd3lnRGF0YS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBJbnB1dERhdGEucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXeXNpd3lnRGF0YTsiLCJjb25zdCB7XHJcblx0ICAgICAgQmFzZVNpZ25hbCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtXeXNpd3lnRGF0YX0gaW5wdXRcclxuICovXHJcbmZ1bmN0aW9uIFNpZ25hbFd5c2l3eWcoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMubG9jay5jdXJyZW50ID0gdHJ1ZTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXREYXRhICkge1xyXG5cdFx0cmV0dXJuIG5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKCAnd3lzaXd5Zy1maWVsZCcgKTtcclxuXHR9O1xyXG5cdHRoaXMucnVuU2lnbmFsICAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9PT0gdGhpcy5pbnB1dC5lZGl0b3IuZ2V0Q29udGVudCgpICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLmlucHV0LmVkaXRvci5zZXRDb250ZW50KCB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPz8gJycgKTtcclxuXHR9O1xyXG59XHJcblxyXG5TaWduYWxXeXNpd3lnLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIEJhc2VTaWduYWwucHJvdG90eXBlICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxXeXNpd3lnOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFd5c2l3eWdEYXRhIGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgU2lnbmFsV3lzaXd5ZyBmcm9tICcuL3NpZ25hbCc7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmlucHV0cycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvd3lzaXd5Zy1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XHJcblx0XHRpbnB1dHMgPSBbIFd5c2l3eWdEYXRhLCAuLi5pbnB1dHMgXTtcclxuXHJcblx0XHRyZXR1cm4gaW5wdXRzO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5zaWduYWxzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci93eXNpd3lnLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHNpZ25hbHMgKSB7XHJcblx0XHRzaWduYWxzID0gWyBTaWduYWxXeXNpd3lnLCAuLi5zaWduYWxzIF07XHJcblxyXG5cdFx0cmV0dXJuIHNpZ25hbHM7XHJcblx0fVxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==