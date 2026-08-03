/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/multi.step/ConditionPageStateItem.js"
/*!*******************************************************!*\
  !*** ./frontend/multi.step/ConditionPageStateItem.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  ConditionItem
} = JetFormBuilderAbstract;
function ConditionPageStateItem() {
  ConditionItem.call(this);
  this.isSupported = function (options) {
    return !!options?.page_state?.length;
  };
  this.setOptions = function ({
    page_state: pageState
  }) {
    this.pageState = pageState;
  };
  this.isPassed = function () {
    const canSwitch = this.list?.block?.page?.canSwitch?.current;
    switch (this.pageState) {
      case 'active':
        return !canSwitch;
      default:
        return false;
    }
  };
}
ConditionPageStateItem.prototype = Object.create(ConditionItem.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConditionPageStateItem);

/***/ },

/***/ "./frontend/multi.step/MultiStepState.js"
/*!***********************************************!*\
  !*** ./frontend/multi.step/MultiStepState.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PageState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageState */ "./frontend/multi.step/PageState.js");
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar */ "./frontend/multi.step/ProgressBar.js");


const {
  ConditionalBlock,
  ReactiveVar
} = JetFormBuilderAbstract;
const {
  doAction
} = JetPlugins.hooks;

// eslint-disable-next-line max-lines-per-function
function MultiStepState() {
  /**
   * @type {Observable}
   */
  this.root = null;

  /**
   * @type {ConditionalBlock}
   */
  this.block = null;

  /**
   * Current page index
   * @type {ReactiveVar}
   */
  this.index = null;

  /**
   * Node elements of pages
   * @type {Array<PageState> | *}
   */
  this.elements = [];
  this.setScope = function (rootOrBlock) {
    if (rootOrBlock instanceof ConditionalBlock) {
      this.block = rootOrBlock;
    } else {
      this.root = rootOrBlock;
    }
  };
  this.setProgress = function () {
    this.index = new ReactiveVar(1);
    this.index.make();
    this.index.watch(this.onChangeIndex.bind(this));
    for (const child of this.getScopeNode().children) {
      if (!child.matches('.jet-form-builder-progress-pages')) {
        continue;
      }
      this.progress = new _ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"](child, this);
    }
  };
  /**
   * @param pages {Element[]}
   */
  this.setPages = function (pages) {
    /**
     * Multistep is initializing for all form or
     * specific conditional block.
     *
     * We need to separate global & block multistep
     */
    this.elements = pages.map(page => new _PageState__WEBPACK_IMPORTED_MODULE_0__["default"](page, this));
    this.elements.forEach(page => page.observe());
    /**
     * We should run this method separately, because it initializes
     * conditional blocks, which could remove some part of nodes from DOM
     *
     * And this breaks logic of the other modules
     * (switch-page-on-change for example)
     */
    this.elements.forEach(page => page.observeConditionalBlocks());
    const {
      submitter
    } = this.getRoot().getSubmit();
    // is ajax
    if (!submitter.hasOwnProperty('status')) {
      return;
    }
    submitter.watchReset(() => {
      this.index.current = 1;
    });
  };
  this.onChangeIndex = function () {
    for (const page of this.getPages()) {
      page.isShow.current = page.index === this.index.current;
    }
    window?.jQuery(document)?.trigger('jet-form-builder/switch-page');
  };
  this.getCurrentPage = function () {
    for (const page of this.getPages()) {
      if (page.isShow.current) {
        return page;
      }
    }
    return false;
  };
  /**
   * @return {Array<PageState>}
   */
  this.getPages = function () {
    return this.elements;
  };
  /**
   * @return {HTMLElement|HTMLFormElement}
   */
  this.getScopeNode = function () {
    var _this$block$node;
    return (_this$block$node = this.block?.node) !== null && _this$block$node !== void 0 ? _this$block$node : this.root.rootNode;
  };
  /**
   * @return {Observable}
   */
  this.getRoot = function () {
    var _this$block$root;
    return (_this$block$root = this.block?.root) !== null && _this$block$root !== void 0 ? _this$block$root : this.root;
  };

  /**
   * @param page {PageState}
   */
  this.isLastPage = function (page) {
    return this.elements.at(-1) === page;
  };

  /**
   * @since 3.0.5
   *
   * @param  page
   * @return {boolean}
   */
  this.isFirstPage = function (page) {
    return this.elements[0] === page;
  };
  this.onReady = function () {
    doAction('jet.fb.multistep.init', this);
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiStepState);

/***/ },

/***/ "./frontend/multi.step/PageState.js"
/*!******************************************!*\
  !*** ./frontend/multi.step/PageState.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ConditionPageStateItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionPageStateItem */ "./frontend/multi.step/ConditionPageStateItem.js");

const {
  ReactiveVar,
  createConditionalBlock
} = JetFormBuilderAbstract;
const {
  validateInputs,
  getOffsetTop,
  focusOnInvalidInput,
  populateInputs
} = JetFormBuilderFunctions;
const {
  addAction,
  doAction
} = JetPlugins.hooks;

/**
 * @property {InputData[]}    inputs Inner inputs
 * @property {MultiStepState} state  Multistep state
 * @property {Element}        node   Related node, element
 * @param    {Element}        node   Related node, element
 * @param    {MultiStepState} state  Multistep state
 */
function PageState(node, state) {
  this.node = node;
  this.index = +node.dataset.page;
  this.offset = +node.dataset.pageOffset;
  this.state = state;
  this.inputs = [];
  this.inputBindings = new Map();
  this.canSwitch = new ReactiveVar(null);
  this.isShow = new ReactiveVar(1 === this.index);

  /**
   * @since 3.0.1
   */
  this.autoFocus = window.JetFormBuilderSettings?.auto_focus;

  /**
   * @since 3.0.5
   * @type {boolean}
   */
  this.initialObserveState = false;
}
PageState.prototype.observe = function () {
  if (!this.isLast()) {
    this.observeInputs();
  }
  this.canSwitch.make();
  this.isShow.make();
  this.isShow.watch(() => {
    // eslint-disable-next-line no-unused-expressions
    this.isShow.current ? this.onShow() : this.onHide();
  });
  this.addButtonsListeners();

  /**
   * We check the fields only for the first page.
   * And for the following, we do it when switching pages
   * (in the `onShow` method)
   *
   * We do this because on other pages the fields are always
   * checked with a successful result due to the check on `isVisible`
   *
   * @since 3.0.5
   *
   * @see https://github.com/Crocoblock/issues-tracker/issues/2781#issuecomment-1517928213
   * @see PageState.onShow
   * @see InputData.isVisible
   */
  if (this.isFirst()) {
    this.initialObserveState = true;
    this.updateStateAsync().then(() => {}).catch(() => {});
  }
  this.updateOffsetByProgress();
  addAction('jet.fb.observe.input.manual', 'jet-form-builder/page-state', input => this.observeInput(input.nodes[0]));
  doAction('jet.fb.multistep.page.init', this);
};
PageState.prototype.observeInputs = function () {
  for (const node of this.node.querySelectorAll('[data-jfb-sync]')) {
    const input = this.observeInput(node);

    // eslint-disable-next-line no-unused-expressions
    input && doAction('jet.fb.multistep.page.observed.input', input, this);
  }
};

/**
 * @param node {Element}
 */
PageState.prototype.observeInput = function (node) {
  if (!this.isNodeBelongThis(node) || !node.hasOwnProperty('jfbSync') || node.jfbSync.hasParent()) {
    return false;
  }

  /**
   * @type {InputData}
   */
  const input = node.jfbSync;
  return this.registerInput(input);
};
/**
 * Buttons for switching between pages are hidden conditional blocks
 * that perform their function (disable)
 * if all required fields are filled in the page.
 */
PageState.prototype.observeConditionalBlocks = function () {
  if (this.isLast()) {
    return;
  }
  for (const node of this.node.querySelectorAll('[data-jfb-conditional]')) {
    if (!this.isNodeBelongThis(node)) {
      continue;
    }
    const block = createConditionalBlock(node, this.state.getRoot());
    for (const condition of block.list.getConditions()) {
      // eslint-disable-next-line max-depth
      if (condition instanceof _ConditionPageStateItem__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        block.page = this;
        this.canSwitch.watch(() => block.list.onChangeRelated());
        block.list.onChangeRelated();
        break;
      }
    }
  }
};

/**
 * @since 3.0.5 We check the fields if this is done for the first time
 * @since 3.0.0 Introduced
 */
PageState.prototype.onShow = function () {
  this.node.classList.remove('jet-form-builder-page--hidden');
  if (this.initialObserveState) {
    return;
  }
  this.initialObserveState = true;
  this.updateStateAsync().then(() => {}).catch(() => {});
};
PageState.prototype.onHide = function () {
  this.node.classList.add('jet-form-builder-page--hidden');
};
PageState.prototype.updateState = function () {
  for (const input of this.getInputs()) {
    if (input.reporting.validityState.current || null === input.reporting.validityState.current) {
      continue;
    }
    this.canSwitch.current = false;
    return;
  }
  this.canSwitch.current = true;
};
PageState.prototype.updateStateAsync = async function (silence = true) {
  try {
    await validateInputs(this.getInputs(), silence);
    this.canSwitch.current = true;
  } catch (error) {
    this.canSwitch.current = false;
  }
};
PageState.prototype.addButtonsListeners = function () {
  const switchButtons = this.node.querySelectorAll('.jet-form-builder__next-page, .jet-form-builder__prev-page');
  for (const switchButton of switchButtons) {
    if (!this.isNodeBelongThis(switchButton)) {
      continue;
    }
    const isPrev = switchButton.classList.contains('jet-form-builder__prev-page');
    switchButton.addEventListener('click', () => this.changePage(isPrev));
  }
};
PageState.prototype.changePage = async function (isBack) {
  if (isBack) {
    this.state.index.current = this.index - 1;
    return;
  }
  if (this.isLast()) {
    return;
  }
  if (this.getLockState().current) {
    return;
  }
  await this.updateStateAsync(false);
  if (this.canSwitch.current) {
    this.state.index.current = this.index + 1;
    return;
  }

  // eslint-disable-next-line no-unused-expressions
  this.autoFocus && focusOnInvalidInput(this.getInputs());
};
PageState.prototype.isNodeBelongThis = function (node) {
  const parentPage = node.closest('.jet-form-builder-page');
  return parentPage ? parentPage.isEqualNode(this.node) : false;
};
/**
 * @return {Array<InputData> | *}
 */
PageState.prototype.getInputs = function () {
  return populateInputs(this.inputs);
};

/**
 * @return {LoadingReactiveVar}
 */
PageState.prototype.getLockState = function () {
  var _root$parent$root$for;
  /**
   * @type {Observable}
   */
  const root = this.state.getRoot();
  const form = (_root$parent$root$for = root?.parent?.root?.form) !== null && _root$parent$root$for !== void 0 ? _root$parent$root$for : root.form;
  return form.lockState;
};
PageState.prototype.isLast = function () {
  return this.state.isLastPage(this);
};

/**
 * @since 3.0.5
 *
 * @return {boolean}
 */
PageState.prototype.isFirst = function () {
  return this.state.isFirstPage(this);
};

/**
 * @param input {InputData|RepeaterData}
 */
PageState.prototype.handleInputEnter = function (input) {
  input?.enterKey?.addFilter(() => {
    const form = input.root.form;
    if (form) {
      if (true === form.canTriggerEnterSubmit) {
        this.changePage().then(() => {}).catch(() => {});
      }
    } else {
      this.changePage().then(() => {}).catch(() => {});
    }

    // prevent submit
    return false;
  });
};
PageState.prototype.registerInput = function (input, {
  includeInValidation = true
} = {}) {
  if (!input || this.inputBindings.has(input)) {
    return input;
  }
  this.handleInputEnter(input);
  const clearLoadingWatch = input.loading.watch(() => {
    if (input.loading.current) {
      this.canSwitch.current = false;
    } else {
      this.updateState();
    }
  });
  const binding = {
    clearLoadingWatch,
    clearValidityWatch: null
  };
  if (input.reporting.restrictions.length) {
    this.inputs.push(input);
    binding.clearValidityWatch = input.watchValidity(() => this.updateState());
    if (!includeInValidation) {
      this.inputs = this.inputs.filter(current => current !== input);
    }
  }
  this.inputBindings.set(input, binding);
  return input;
};
PageState.prototype.unregisterInput = function (input) {
  if (!this.inputBindings.has(input)) {
    return;
  }
  const binding = this.inputBindings.get(input);
  binding?.clearLoadingWatch?.();
  binding?.clearValidityWatch?.();
  this.inputBindings.delete(input);
  this.inputs = this.inputs.filter(current => current !== input);
};
PageState.prototype.getTrackedInputs = function () {
  return Array.from(this.inputBindings.keys());
};
PageState.prototype.getOffsetTop = function () {
  return getOffsetTop(this.node) - this.offset;
};

/**
 * @since 3.2.3
 */
PageState.prototype.updateOffsetByProgress = function () {
  if (!this.state?.progress?.node) {
    return;
  }
  this.offset += +this.state.progress.node.clientHeight;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageState);

/***/ },

/***/ "./frontend/multi.step/ProgressBar.js"
/*!********************************************!*\
  !*** ./frontend/multi.step/ProgressBar.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ProgressBar(node, state) {
  /**
   * @param node  {HTMLElement}
   * @param state {MultiStepState}
   */
  this.node = node;
  this.state = state;
  this.state.index.watch(() => this.updateItems());
  this.updateItems = function () {
    const {
      current
    } = this.state.index;
    for (const item of this.node.children) {
      const pageIndex = +item.dataset.page;
      if (pageIndex < current) {
        this.makePassed(item);
      } else if (current === pageIndex) {
        this.makeActive(item);
      } else {
        this.makeNotPassed(item);
      }
    }
  };

  /**
   * @param element {HTMLElement}
   */
  this.makeActive = function (element) {
    element.classList.remove('passed-page');
    element.classList.add('active-page');
  };

  /**
   * @param element {HTMLElement}
   */
  this.makePassed = function (element) {
    element.classList.add('passed-page');
    element.classList.remove('active-page');
  };
  this.makeNotPassed = function (element) {
    element.classList.remove('active-page', 'passed-page');
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProgressBar);

/***/ },

/***/ "./frontend/multi.step/functions.js"
/*!******************************************!*\
  !*** ./frontend/multi.step/functions.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createMultiStep: () => (/* binding */ createMultiStep)
/* harmony export */ });
/* harmony import */ var _MultiStepState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiStepState */ "./frontend/multi.step/MultiStepState.js");

function createMultiStep(rootOrBlock) {
  const multistep = new _MultiStepState__WEBPACK_IMPORTED_MODULE_0__["default"]();
  multistep.setScope(rootOrBlock);
  const pages = [];
  for (const child of multistep.getScopeNode().childNodes) {
    if (!child?.classList?.contains('jet-form-builder-page')) {
      continue;
    }
    pages.push(child);
  }
  if (!pages.length) {
    return multistep;
  }
  multistep.setProgress();
  multistep.setPages(pages);
  return multistep;
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
/*!*************************************!*\
  !*** ./frontend/multi.step/main.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/multi.step/functions.js");
/* harmony import */ var _ConditionPageStateItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConditionPageStateItem */ "./frontend/multi.step/ConditionPageStateItem.js");


const {
  addAction,
  addFilter
} = JetPlugins.hooks;
const {
  getScrollParent
} = JetFormBuilderFunctions;
addAction('jet.fb.observe.after', 'jet-form-builder/multi-step', function (observable) {
  const multistep = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createMultiStep)(observable);
  if (!multistep.getPages()?.length) {
    return;
  }
  observable.multistep = multistep;
  multistep.onReady();
}, 15);
addAction('jet.fb.conditional.init', 'jet-form-builder/multi-step', function (block) {
  const multistep = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.createMultiStep)(block);
  if (!multistep.getPages()?.length) {
    return;
  }
  block.multistep = multistep;
  multistep.onReady();
});
addFilter('jet.fb.conditional.types', 'jet-form-builder/multi-step', function (items) {
  items = [_ConditionPageStateItem__WEBPACK_IMPORTED_MODULE_1__["default"], ...items];
  return items;
});
addAction('jet.fb.multistep.init', 'jet-form-builder/multi-step/autoscroll',
/**
 * @param multistep {MultiStepState}
 */
function (multistep) {
  if (!window?.JetFormBuilderSettings?.scroll_on_next) {
    return;
  }
  multistep.index.watch(() => {
    /**
     * @type {PageState|boolean}
     */
    const page = multistep.getCurrentPage();
    const parent = getScrollParent(page.node);
    const top = page.getOffsetTop();
    parent?.scrollTo?.({
      top,
      behavior: 'smooth'
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbXVsdGkuc3RlcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ25YQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL0NvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9NdWx0aVN0ZXBTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL1BhZ2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENvbmRpdGlvbkl0ZW0gfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0oKSB7XG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0cmV0dXJuICEhb3B0aW9ucz8ucGFnZV9zdGF0ZT8ubGVuZ3RoO1xuXHR9O1xuXHR0aGlzLnNldE9wdGlvbnMgID0gZnVuY3Rpb24gKCB7IHBhZ2Vfc3RhdGU6IHBhZ2VTdGF0ZSB9ICkge1xuXHRcdHRoaXMucGFnZVN0YXRlID0gcGFnZVN0YXRlO1xuXHR9O1xuXHR0aGlzLmlzUGFzc2VkICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGNhblN3aXRjaCA9IHRoaXMubGlzdD8uYmxvY2s/LnBhZ2U/LmNhblN3aXRjaD8uY3VycmVudDtcblxuXHRcdHN3aXRjaCAoIHRoaXMucGFnZVN0YXRlICkge1xuXHRcdFx0Y2FzZSAnYWN0aXZlJzpcblx0XHRcdFx0cmV0dXJuICFjYW5Td2l0Y2g7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG5Db25kaXRpb25QYWdlU3RhdGVJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW07IiwiaW1wb3J0IFBhZ2VTdGF0ZSBmcm9tICcuL1BhZ2VTdGF0ZSc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhcic7XG5cbmNvbnN0IHtcblx0ICAgICAgQ29uZGl0aW9uYWxCbG9jayxcblx0ICAgICAgUmVhY3RpdmVWYXIsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHQgICAgICBkb0FjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gTXVsdGlTdGVwU3RhdGUoKSB7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0dGhpcy5yb290ID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0NvbmRpdGlvbmFsQmxvY2t9XG5cdCAqL1xuXHR0aGlzLmJsb2NrID0gbnVsbDtcblxuXHQvKipcblx0ICogQ3VycmVudCBwYWdlIGluZGV4XG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHRoaXMuaW5kZXggPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBOb2RlIGVsZW1lbnRzIG9mIHBhZ2VzXG5cdCAqIEB0eXBlIHtBcnJheTxQYWdlU3RhdGU+IHwgKn1cblx0ICovXG5cdHRoaXMuZWxlbWVudHMgPSBbXTtcblxuXHR0aGlzLnNldFNjb3BlICAgID0gZnVuY3Rpb24gKCByb290T3JCbG9jayApIHtcblx0XHRpZiAoIHJvb3RPckJsb2NrIGluc3RhbmNlb2YgQ29uZGl0aW9uYWxCbG9jayApIHtcblx0XHRcdHRoaXMuYmxvY2sgPSByb290T3JCbG9jaztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJvb3QgPSByb290T3JCbG9jaztcblx0XHR9XG5cdH07XG5cdHRoaXMuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5pbmRleCA9IG5ldyBSZWFjdGl2ZVZhciggMSApO1xuXHRcdHRoaXMuaW5kZXgubWFrZSgpO1xuXHRcdHRoaXMuaW5kZXgud2F0Y2goIHRoaXMub25DaGFuZ2VJbmRleC5iaW5kKCB0aGlzICkgKTtcblxuXHRcdGZvciAoIGNvbnN0IGNoaWxkIG9mIHRoaXMuZ2V0U2NvcGVOb2RlKCkuY2hpbGRyZW4gKSB7XG5cdFx0XHRpZiAoICFjaGlsZC5tYXRjaGVzKCAnLmpldC1mb3JtLWJ1aWxkZXItcHJvZ3Jlc3MtcGFnZXMnICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0JhciggY2hpbGQsIHRoaXMgKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0gcGFnZXMge0VsZW1lbnRbXX1cblx0ICovXG5cdHRoaXMuc2V0UGFnZXMgPSBmdW5jdGlvbiAoIHBhZ2VzICkge1xuXHRcdC8qKlxuXHRcdCAqIE11bHRpc3RlcCBpcyBpbml0aWFsaXppbmcgZm9yIGFsbCBmb3JtIG9yXG5cdFx0ICogc3BlY2lmaWMgY29uZGl0aW9uYWwgYmxvY2suXG5cdFx0ICpcblx0XHQgKiBXZSBuZWVkIHRvIHNlcGFyYXRlIGdsb2JhbCAmIGJsb2NrIG11bHRpc3RlcFxuXHRcdCAqL1xuXHRcdHRoaXMuZWxlbWVudHMgPSBwYWdlcy5tYXAoXG5cdFx0XHRwYWdlID0+IG5ldyBQYWdlU3RhdGUoIHBhZ2UsIHRoaXMgKSxcblx0XHQpO1xuXG5cdFx0dGhpcy5lbGVtZW50cy5mb3JFYWNoKFxuXHRcdFx0cGFnZSA9PiBwYWdlLm9ic2VydmUoKSxcblx0XHQpO1xuXHRcdC8qKlxuXHRcdCAqIFdlIHNob3VsZCBydW4gdGhpcyBtZXRob2Qgc2VwYXJhdGVseSwgYmVjYXVzZSBpdCBpbml0aWFsaXplc1xuXHRcdCAqIGNvbmRpdGlvbmFsIGJsb2Nrcywgd2hpY2ggY291bGQgcmVtb3ZlIHNvbWUgcGFydCBvZiBub2RlcyBmcm9tIERPTVxuXHRcdCAqXG5cdFx0ICogQW5kIHRoaXMgYnJlYWtzIGxvZ2ljIG9mIHRoZSBvdGhlciBtb2R1bGVzXG5cdFx0ICogKHN3aXRjaC1wYWdlLW9uLWNoYW5nZSBmb3IgZXhhbXBsZSlcblx0XHQgKi9cblx0XHR0aGlzLmVsZW1lbnRzLmZvckVhY2goXG5cdFx0XHRwYWdlID0+IHBhZ2Uub2JzZXJ2ZUNvbmRpdGlvbmFsQmxvY2tzKCksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHsgc3VibWl0dGVyIH0gPSB0aGlzLmdldFJvb3QoKS5nZXRTdWJtaXQoKTtcblx0XHQvLyBpcyBhamF4XG5cdFx0aWYgKCAhc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN1Ym1pdHRlci53YXRjaFJlc2V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLmluZGV4LmN1cnJlbnQgPSAxO1xuXHRcdH0gKTtcblx0fTtcblx0dGhpcy5vbkNoYW5nZUluZGV4ICA9IGZ1bmN0aW9uICgpIHtcblx0XHRmb3IgKCBjb25zdCBwYWdlIG9mIHRoaXMuZ2V0UGFnZXMoKSApIHtcblx0XHRcdHBhZ2UuaXNTaG93LmN1cnJlbnQgPSBwYWdlLmluZGV4ID09PSB0aGlzLmluZGV4LmN1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0d2luZG93Py5qUXVlcnkoIGRvY3VtZW50ICk/LnRyaWdnZXIoXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlci9zd2l0Y2gtcGFnZScsXG5cdFx0KTtcblx0fTtcblx0dGhpcy5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRmb3IgKCBjb25zdCBwYWdlIG9mIHRoaXMuZ2V0UGFnZXMoKSApIHtcblx0XHRcdGlmICggcGFnZS5pc1Nob3cuY3VycmVudCApIHtcblx0XHRcdFx0cmV0dXJuIHBhZ2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvKipcblx0ICogQHJldHVybiB7QXJyYXk8UGFnZVN0YXRlPn1cblx0ICovXG5cdHRoaXMuZ2V0UGFnZXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHM7XG5cdH07XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxIVE1MRm9ybUVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLmdldFNjb3BlTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5ibG9jaz8ubm9kZSA/PyB0aGlzLnJvb3Qucm9vdE5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0dGhpcy5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmJsb2NrPy5yb290ID8/IHRoaXMucm9vdDtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHBhZ2Uge1BhZ2VTdGF0ZX1cblx0ICovXG5cdHRoaXMuaXNMYXN0UGFnZSA9IGZ1bmN0aW9uICggcGFnZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50cy5hdCggLTEgKSA9PT0gcGFnZTtcblx0fTtcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC41XG5cdCAqXG5cdCAqIEBwYXJhbSAgcGFnZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0dGhpcy5pc0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICggcGFnZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50c1sgMCBdID09PSBwYWdlO1xuXHR9O1xuXG5cdHRoaXMub25SZWFkeSA9IGZ1bmN0aW9uICgpIHtcblx0XHRkb0FjdGlvbiggJ2pldC5mYi5tdWx0aXN0ZXAuaW5pdCcsIHRoaXMgKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTdGVwU3RhdGU7IiwiaW1wb3J0IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25QYWdlU3RhdGVJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBSZWFjdGl2ZVZhcixcblx0ICAgICAgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIHZhbGlkYXRlSW5wdXRzLFxuXHQgICAgICBnZXRPZmZzZXRUb3AsXG5cdCAgICAgIGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdCAgICAgIHBvcHVsYXRlSW5wdXRzLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5jb25zdCB7IGFkZEFjdGlvbiwgZG9BY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHByb3BlcnR5IHtJbnB1dERhdGFbXX0gICAgaW5wdXRzIElubmVyIGlucHV0c1xuICogQHByb3BlcnR5IHtNdWx0aVN0ZXBTdGF0ZX0gc3RhdGUgIE11bHRpc3RlcCBzdGF0ZVxuICogQHByb3BlcnR5IHtFbGVtZW50fSAgICAgICAgbm9kZSAgIFJlbGF0ZWQgbm9kZSwgZWxlbWVudFxuICogQHBhcmFtICAgIHtFbGVtZW50fSAgICAgICAgbm9kZSAgIFJlbGF0ZWQgbm9kZSwgZWxlbWVudFxuICogQHBhcmFtICAgIHtNdWx0aVN0ZXBTdGF0ZX0gc3RhdGUgIE11bHRpc3RlcCBzdGF0ZVxuICovXG5mdW5jdGlvbiBQYWdlU3RhdGUoIG5vZGUsIHN0YXRlICkge1xuXHR0aGlzLm5vZGUgICAgICA9IG5vZGU7XG5cdHRoaXMuaW5kZXggICAgID0gK25vZGUuZGF0YXNldC5wYWdlO1xuXHR0aGlzLm9mZnNldCAgICA9ICtub2RlLmRhdGFzZXQucGFnZU9mZnNldDtcblx0dGhpcy5zdGF0ZSAgICAgPSBzdGF0ZTtcblx0dGhpcy5pbnB1dHMgICAgPSBbXTtcblx0dGhpcy5pbnB1dEJpbmRpbmdzID0gbmV3IE1hcCgpO1xuXHR0aGlzLmNhblN3aXRjaCA9IG5ldyBSZWFjdGl2ZVZhciggbnVsbCApO1xuXHR0aGlzLmlzU2hvdyAgICA9IG5ldyBSZWFjdGl2ZVZhciggMSA9PT0gdGhpcy5pbmRleCApO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdHRoaXMuYXV0b0ZvY3VzID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmF1dG9fZm9jdXM7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuNVxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaW5pdGlhbE9ic2VydmVTdGF0ZSA9IGZhbHNlO1xufVxuXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cblx0aWYgKCAhdGhpcy5pc0xhc3QoKSApIHtcblx0XHR0aGlzLm9ic2VydmVJbnB1dHMoKTtcblx0fVxuXG5cdHRoaXMuY2FuU3dpdGNoLm1ha2UoKTtcblx0dGhpcy5pc1Nob3cubWFrZSgpO1xuXHR0aGlzLmlzU2hvdy53YXRjaCggKCkgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHR0aGlzLmlzU2hvdy5jdXJyZW50ID8gdGhpcy5vblNob3coKSA6IHRoaXMub25IaWRlKCk7XG5cdH0gKTtcblxuXHR0aGlzLmFkZEJ1dHRvbnNMaXN0ZW5lcnMoKTtcblxuXHQvKipcblx0ICogV2UgY2hlY2sgdGhlIGZpZWxkcyBvbmx5IGZvciB0aGUgZmlyc3QgcGFnZS5cblx0ICogQW5kIGZvciB0aGUgZm9sbG93aW5nLCB3ZSBkbyBpdCB3aGVuIHN3aXRjaGluZyBwYWdlc1xuXHQgKiAoaW4gdGhlIGBvblNob3dgIG1ldGhvZClcblx0ICpcblx0ICogV2UgZG8gdGhpcyBiZWNhdXNlIG9uIG90aGVyIHBhZ2VzIHRoZSBmaWVsZHMgYXJlIGFsd2F5c1xuXHQgKiBjaGVja2VkIHdpdGggYSBzdWNjZXNzZnVsIHJlc3VsdCBkdWUgdG8gdGhlIGNoZWNrIG9uIGBpc1Zpc2libGVgXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjAuNVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNzgxI2lzc3VlY29tbWVudC0xNTE3OTI4MjEzXG5cdCAqIEBzZWUgUGFnZVN0YXRlLm9uU2hvd1xuXHQgKiBAc2VlIElucHV0RGF0YS5pc1Zpc2libGVcblx0ICovXG5cdGlmICggdGhpcy5pc0ZpcnN0KCkgKSB7XG5cdFx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gdHJ1ZTtcblx0XHR0aGlzLnVwZGF0ZVN0YXRlQXN5bmMoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xuXHR9XG5cblx0dGhpcy51cGRhdGVPZmZzZXRCeVByb2dyZXNzKCk7XG5cblx0YWRkQWN0aW9uKFxuXHRcdCdqZXQuZmIub2JzZXJ2ZS5pbnB1dC5tYW51YWwnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL3BhZ2Utc3RhdGUnLFxuXHRcdGlucHV0ID0+IHRoaXMub2JzZXJ2ZUlucHV0KCBpbnB1dC5ub2Rlc1sgMCBdICksXG5cdCk7XG5cblx0ZG9BY3Rpb24oICdqZXQuZmIubXVsdGlzdGVwLnBhZ2UuaW5pdCcsIHRoaXMgKTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZUlucHV0cyA9IGZ1bmN0aW9uICgpIHtcblx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWpmYi1zeW5jXScgKSApIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMub2JzZXJ2ZUlucHV0KCBub2RlICk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0aW5wdXQgJiYgZG9BY3Rpb24oXG5cdFx0XHQnamV0LmZiLm11bHRpc3RlcC5wYWdlLm9ic2VydmVkLmlucHV0Jyxcblx0XHRcdGlucHV0LFxuXHRcdFx0dGhpcyxcblx0XHQpO1xuXHR9XG59O1xuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmVJbnB1dCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0aWYgKFxuXHRcdCF0aGlzLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSB8fFxuXHRcdCFub2RlLmhhc093blByb3BlcnR5KCAnamZiU3luYycgKSB8fFxuXHRcdG5vZGUuamZiU3luYy5oYXNQYXJlbnQoKVxuXHQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGNvbnN0IGlucHV0ID0gbm9kZS5qZmJTeW5jO1xuXG5cdHJldHVybiB0aGlzLnJlZ2lzdGVySW5wdXQoIGlucHV0ICk7XG59O1xuLyoqXG4gKiBCdXR0b25zIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBwYWdlcyBhcmUgaGlkZGVuIGNvbmRpdGlvbmFsIGJsb2Nrc1xuICogdGhhdCBwZXJmb3JtIHRoZWlyIGZ1bmN0aW9uIChkaXNhYmxlKVxuICogaWYgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgZmlsbGVkIGluIHRoZSBwYWdlLlxuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmVDb25kaXRpb25hbEJsb2NrcyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLmlzTGFzdCgpICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCdbZGF0YS1qZmItY29uZGl0aW9uYWxdJyxcblx0KSApIHtcblx0XHRpZiAoICF0aGlzLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBibG9jayA9IGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2soXG5cdFx0XHRub2RlLFxuXHRcdFx0dGhpcy5zdGF0ZS5nZXRSb290KCksXG5cdFx0KTtcblxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiBibG9jay5saXN0LmdldENvbmRpdGlvbnMoKSApIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdGlmICggY29uZGl0aW9uIGluc3RhbmNlb2YgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSApIHtcblx0XHRcdFx0YmxvY2sucGFnZSA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuY2FuU3dpdGNoLndhdGNoKCAoKSA9PiBibG9jay5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XG5cdFx0XHRcdGJsb2NrLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIEBzaW5jZSAzLjAuNSBXZSBjaGVjayB0aGUgZmllbGRzIGlmIHRoaXMgaXMgZG9uZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAqIEBzaW5jZSAzLjAuMCBJbnRyb2R1Y2VkXG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2pldC1mb3JtLWJ1aWxkZXItcGFnZS0taGlkZGVuJyApO1xuXG5cdGlmICggdGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuaW5pdGlhbE9ic2VydmVTdGF0ZSA9IHRydWU7XG5cdHRoaXMudXBkYXRlU3RhdGVBc3luYygpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS5vbkhpZGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoICdqZXQtZm9ybS1idWlsZGVyLXBhZ2UtLWhpZGRlbicgKTtcbn07XG5QYWdlU3RhdGUucHJvdG90eXBlLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdGlmICggaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudCB8fFxuXHRcdFx0bnVsbCA9PT0gaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudFxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gdHJ1ZTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3RhdGVBc3luYyAgICA9IGFzeW5jIGZ1bmN0aW9uICggc2lsZW5jZSA9IHRydWUgKSB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgdmFsaWRhdGVJbnB1dHMoIHRoaXMuZ2V0SW5wdXRzKCksIHNpbGVuY2UgKTtcblxuXHRcdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSB0cnVlO1xuXHR9XG5cdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IGZhbHNlO1xuXHR9XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS5hZGRCdXR0b25zTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBzd2l0Y2hCdXR0b25zID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19uZXh0LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UnLFxuXHQpO1xuXG5cdGZvciAoIGNvbnN0IHN3aXRjaEJ1dHRvbiBvZiBzd2l0Y2hCdXR0b25zICkge1xuXHRcdGlmICggIXRoaXMuaXNOb2RlQmVsb25nVGhpcyggc3dpdGNoQnV0dG9uICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgaXNQcmV2ID0gc3dpdGNoQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UnLFxuXHRcdCk7XG5cblx0XHRzd2l0Y2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbGljaycsXG5cdFx0XHQoKSA9PiB0aGlzLmNoYW5nZVBhZ2UoIGlzUHJldiApLFxuXHRcdCk7XG5cdH1cbn07XG5QYWdlU3RhdGUucHJvdG90eXBlLmNoYW5nZVBhZ2UgICAgICAgICAgPSBhc3luYyBmdW5jdGlvbiAoIGlzQmFjayApIHtcblx0aWYgKCBpc0JhY2sgKSB7XG5cdFx0dGhpcy5zdGF0ZS5pbmRleC5jdXJyZW50ID0gdGhpcy5pbmRleCAtIDE7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIHRoaXMuaXNMYXN0KCkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCB0aGlzLmdldExvY2tTdGF0ZSgpLmN1cnJlbnQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgdGhpcy51cGRhdGVTdGF0ZUFzeW5jKCBmYWxzZSApO1xuXG5cdGlmICggdGhpcy5jYW5Td2l0Y2guY3VycmVudCApIHtcblx0XHR0aGlzLnN0YXRlLmluZGV4LmN1cnJlbnQgPSB0aGlzLmluZGV4ICsgMTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0dGhpcy5hdXRvRm9jdXMgJiYgZm9jdXNPbkludmFsaWRJbnB1dCggdGhpcy5nZXRJbnB1dHMoKSApO1xufTtcblBhZ2VTdGF0ZS5wcm90b3R5cGUuaXNOb2RlQmVsb25nVGhpcyAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0Y29uc3QgcGFyZW50UGFnZSA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXBhZ2UnICk7XG5cblx0cmV0dXJuIHBhcmVudFBhZ2UgPyBwYXJlbnRQYWdlLmlzRXF1YWxOb2RlKCB0aGlzLm5vZGUgKSA6IGZhbHNlO1xufTtcbi8qKlxuICogQHJldHVybiB7QXJyYXk8SW5wdXREYXRhPiB8ICp9XG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUuZ2V0SW5wdXRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcG9wdWxhdGVJbnB1dHMoIHRoaXMuaW5wdXRzICk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge0xvYWRpbmdSZWFjdGl2ZVZhcn1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5nZXRMb2NrU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdGNvbnN0IHJvb3QgPSB0aGlzLnN0YXRlLmdldFJvb3QoKTtcblx0Y29uc3QgZm9ybSA9IHJvb3Q/LnBhcmVudD8ucm9vdD8uZm9ybSA/PyByb290LmZvcm07XG5cblx0cmV0dXJuIGZvcm0ubG9ja1N0YXRlO1xufTtcblxuUGFnZVN0YXRlLnByb3RvdHlwZS5pc0xhc3QgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnN0YXRlLmlzTGFzdFBhZ2UoIHRoaXMgKTtcbn07XG5cbi8qKlxuICogQHNpbmNlIDMuMC41XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5pc0ZpcnN0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5zdGF0ZS5pc0ZpcnN0UGFnZSggdGhpcyApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YXxSZXBlYXRlckRhdGF9XG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUuaGFuZGxlSW5wdXRFbnRlciA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdGlucHV0Py5lbnRlcktleT8uYWRkRmlsdGVyKCAoKSA9PiB7XG5cdFx0Y29uc3QgZm9ybSA9IGlucHV0LnJvb3QuZm9ybTtcblxuXHRcdGlmICggZm9ybSApIHtcblx0XHRcdGlmICggdHJ1ZSA9PT0gZm9ybS5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgKSB7XG5cdFx0XHRcdHRoaXMuY2hhbmdlUGFnZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2hhbmdlUGFnZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gcHJldmVudCBzdWJtaXRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gKTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUucmVnaXN0ZXJJbnB1dCA9IGZ1bmN0aW9uIChcblx0aW5wdXQsXG5cdHsgaW5jbHVkZUluVmFsaWRhdGlvbiA9IHRydWUgfSA9IHt9LFxuKSB7XG5cdGlmICggIWlucHV0IHx8IHRoaXMuaW5wdXRCaW5kaW5ncy5oYXMoIGlucHV0ICkgKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cblx0dGhpcy5oYW5kbGVJbnB1dEVudGVyKCBpbnB1dCApO1xuXG5cdGNvbnN0IGNsZWFyTG9hZGluZ1dhdGNoID0gaW5wdXQubG9hZGluZy53YXRjaCggKCkgPT4ge1xuXHRcdGlmICggaW5wdXQubG9hZGluZy5jdXJyZW50ICkge1xuXHRcdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IGZhbHNlO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoKTtcblx0XHR9XG5cdH0gKTtcblxuXHRjb25zdCBiaW5kaW5nID0ge1xuXHRcdGNsZWFyTG9hZGluZ1dhdGNoLFxuXHRcdGNsZWFyVmFsaWRpdHlXYXRjaDogbnVsbCxcblx0fTtcblxuXHRpZiAoIGlucHV0LnJlcG9ydGluZy5yZXN0cmljdGlvbnMubGVuZ3RoICkge1xuXHRcdHRoaXMuaW5wdXRzLnB1c2goIGlucHV0ICk7XG5cdFx0YmluZGluZy5jbGVhclZhbGlkaXR5V2F0Y2ggPSBpbnB1dC53YXRjaFZhbGlkaXR5KFxuXHRcdFx0KCkgPT4gdGhpcy51cGRhdGVTdGF0ZSgpLFxuXHRcdCk7XG5cblx0XHRpZiAoICFpbmNsdWRlSW5WYWxpZGF0aW9uICkge1xuXHRcdFx0dGhpcy5pbnB1dHMgPSB0aGlzLmlucHV0cy5maWx0ZXIoIGN1cnJlbnQgPT4gY3VycmVudCAhPT0gaW5wdXQgKTtcblx0XHR9XG5cdH1cblxuXHR0aGlzLmlucHV0QmluZGluZ3Muc2V0KCBpbnB1dCwgYmluZGluZyApO1xuXG5cdHJldHVybiBpbnB1dDtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUudW5yZWdpc3RlcklucHV0ID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0aWYgKCAhdGhpcy5pbnB1dEJpbmRpbmdzLmhhcyggaW5wdXQgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBiaW5kaW5nID0gdGhpcy5pbnB1dEJpbmRpbmdzLmdldCggaW5wdXQgKTtcblxuXHRiaW5kaW5nPy5jbGVhckxvYWRpbmdXYXRjaD8uKCk7XG5cdGJpbmRpbmc/LmNsZWFyVmFsaWRpdHlXYXRjaD8uKCk7XG5cblx0dGhpcy5pbnB1dEJpbmRpbmdzLmRlbGV0ZSggaW5wdXQgKTtcblx0dGhpcy5pbnB1dHMgPSB0aGlzLmlucHV0cy5maWx0ZXIoIGN1cnJlbnQgPT4gY3VycmVudCAhPT0gaW5wdXQgKTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUuZ2V0VHJhY2tlZElucHV0cyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIEFycmF5LmZyb20oIHRoaXMuaW5wdXRCaW5kaW5ncy5rZXlzKCkgKTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUuZ2V0T2Zmc2V0VG9wID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZ2V0T2Zmc2V0VG9wKCB0aGlzLm5vZGUgKSAtIHRoaXMub2Zmc2V0O1xufTtcblxuLyoqXG4gKiBAc2luY2UgMy4yLjNcbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS51cGRhdGVPZmZzZXRCeVByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLnN0YXRlPy5wcm9ncmVzcz8ubm9kZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5vZmZzZXQgKz0gK3RoaXMuc3RhdGUucHJvZ3Jlc3Mubm9kZS5jbGllbnRIZWlnaHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlU3RhdGU7XG4iLCJmdW5jdGlvbiBQcm9ncmVzc0Jhciggbm9kZSwgc3RhdGUgKSB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAge0hUTUxFbGVtZW50fVxuXHQgKiBAcGFyYW0gc3RhdGUge011bHRpU3RlcFN0YXRlfVxuXHQgKi9cblx0dGhpcy5ub2RlID0gbm9kZTtcblx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG5cdHRoaXMuc3RhdGUuaW5kZXgud2F0Y2goICgpID0+IHRoaXMudXBkYXRlSXRlbXMoKSApO1xuXG5cdHRoaXMudXBkYXRlSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlLmluZGV4O1xuXG5cdFx0Zm9yICggY29uc3QgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4gKSB7XG5cdFx0XHRjb25zdCBwYWdlSW5kZXggPSAraXRlbS5kYXRhc2V0LnBhZ2U7XG5cblx0XHRcdGlmICggcGFnZUluZGV4IDwgY3VycmVudCApIHtcblx0XHRcdFx0dGhpcy5tYWtlUGFzc2VkKCBpdGVtICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggY3VycmVudCA9PT0gcGFnZUluZGV4ICkge1xuXHRcdFx0XHR0aGlzLm1ha2VBY3RpdmUoIGl0ZW0gKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1ha2VOb3RQYXNzZWQoIGl0ZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGVtZW50IHtIVE1MRWxlbWVudH1cblx0ICovXG5cdHRoaXMubWFrZUFjdGl2ZSA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdwYXNzZWQtcGFnZScgKTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUtcGFnZScgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZW1lbnQge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5tYWtlUGFzc2VkID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Bhc3NlZC1wYWdlJyApO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZS1wYWdlJyApO1xuXHR9O1xuXG5cdHRoaXMubWFrZU5vdFBhc3NlZCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUtcGFnZScsICdwYXNzZWQtcGFnZScgKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7IiwiaW1wb3J0IE11bHRpU3RlcFN0YXRlIGZyb20gJy4vTXVsdGlTdGVwU3RhdGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVNdWx0aVN0ZXAoIHJvb3RPckJsb2NrICkge1xuXHRjb25zdCBtdWx0aXN0ZXAgPSBuZXcgTXVsdGlTdGVwU3RhdGUoKTtcblx0bXVsdGlzdGVwLnNldFNjb3BlKCByb290T3JCbG9jayApO1xuXG5cdGNvbnN0IHBhZ2VzID0gW107XG5cblx0Zm9yICggY29uc3QgY2hpbGQgb2YgbXVsdGlzdGVwLmdldFNjb3BlTm9kZSgpLmNoaWxkTm9kZXMgKSB7XG5cdFx0aWYgKCAhY2hpbGQ/LmNsYXNzTGlzdD8uY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyLXBhZ2UnICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cGFnZXMucHVzaCggY2hpbGQgKTtcblx0fVxuXG5cdGlmICggIXBhZ2VzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gbXVsdGlzdGVwO1xuXHR9XG5cblx0bXVsdGlzdGVwLnNldFByb2dyZXNzKCk7XG5cdG11bHRpc3RlcC5zZXRQYWdlcyggcGFnZXMgKTtcblxuXHRyZXR1cm4gbXVsdGlzdGVwO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNdWx0aVN0ZXAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTXVsdGlTdGVwIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25QYWdlU3RhdGVJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRBY3Rpb24sXG5cdCAgICAgIGFkZEZpbHRlcixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIGdldFNjcm9sbFBhcmVudCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwJyxcblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHRcdGNvbnN0IG11bHRpc3RlcCA9IGNyZWF0ZU11bHRpU3RlcCggb2JzZXJ2YWJsZSApO1xuXG5cdFx0aWYgKCAhbXVsdGlzdGVwLmdldFBhZ2VzKCk/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvYnNlcnZhYmxlLm11bHRpc3RlcCA9IG11bHRpc3RlcDtcblx0XHRtdWx0aXN0ZXAub25SZWFkeSgpO1xuXHR9LFxuXHQxNSxcbik7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5jb25kaXRpb25hbC5pbml0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcCcsXG5cdGZ1bmN0aW9uICggYmxvY2sgKSB7XG5cdFx0Y29uc3QgbXVsdGlzdGVwID0gY3JlYXRlTXVsdGlTdGVwKCBibG9jayApO1xuXG5cdFx0aWYgKCAhbXVsdGlzdGVwLmdldFBhZ2VzKCk/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRibG9jay5tdWx0aXN0ZXAgPSBtdWx0aXN0ZXA7XG5cdFx0bXVsdGlzdGVwLm9uUmVhZHkoKTtcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5jb25kaXRpb25hbC50eXBlcycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAnLFxuXHRmdW5jdGlvbiAoIGl0ZW1zICkge1xuXHRcdGl0ZW1zID0gWyBDb25kaXRpb25QYWdlU3RhdGVJdGVtLCAuLi5pdGVtcyBdO1xuXG5cdFx0cmV0dXJuIGl0ZW1zO1xuXHR9LFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm11bHRpc3RlcC5pbml0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcC9hdXRvc2Nyb2xsJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBtdWx0aXN0ZXAge011bHRpU3RlcFN0YXRlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBtdWx0aXN0ZXAgKSB7XG5cdFx0aWYgKCAhd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5zY3JvbGxfb25fbmV4dCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bXVsdGlzdGVwLmluZGV4LndhdGNoKCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlIHtQYWdlU3RhdGV8Ym9vbGVhbn1cblx0XHRcdCAqL1xuXHRcdFx0Y29uc3QgcGFnZSA9IG11bHRpc3RlcC5nZXRDdXJyZW50UGFnZSgpO1xuXG5cdFx0XHRjb25zdCBwYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoIHBhZ2Uubm9kZSApO1xuXHRcdFx0Y29uc3QgdG9wICAgID0gcGFnZS5nZXRPZmZzZXRUb3AoKTtcblxuXHRcdFx0cGFyZW50Py5zY3JvbGxUbz8uKCB7IHRvcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0gKTtcblx0XHR9ICk7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==