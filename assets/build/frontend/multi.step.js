/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/multi.step/ConditionPageStateItem.js":
/*!*******************************************************!*\
  !*** ./frontend/multi.step/ConditionPageStateItem.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/multi.step/MultiStepState.js":
/*!***********************************************!*\
  !*** ./frontend/multi.step/MultiStepState.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/multi.step/PageState.js":
/*!******************************************!*\
  !*** ./frontend/multi.step/PageState.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  this.handleInputEnter(input);
  input.loading.watch(() => {
    if (input.loading.current) {
      this.canSwitch.current = false;
    } else {
      this.updateState();
    }
  });
  if (!input.reporting.restrictions.length) {
    return input;
  }
  this.inputs.push(input);
  input.watchValidity(() => this.updateState());
  return input;
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

/***/ }),

/***/ "./frontend/multi.step/ProgressBar.js":
/*!********************************************!*\
  !*** ./frontend/multi.step/ProgressBar.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./frontend/multi.step/functions.js":
/*!******************************************!*\
  !*** ./frontend/multi.step/functions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbXVsdGkuc3RlcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL0NvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9NdWx0aVN0ZXBTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL1BhZ2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENvbmRpdGlvbkl0ZW0gfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBDb25kaXRpb25QYWdlU3RhdGVJdGVtKCkge1xyXG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xyXG5cdFx0cmV0dXJuICEhb3B0aW9ucz8ucGFnZV9zdGF0ZT8ubGVuZ3RoO1xyXG5cdH07XHJcblx0dGhpcy5zZXRPcHRpb25zICA9IGZ1bmN0aW9uICggeyBwYWdlX3N0YXRlOiBwYWdlU3RhdGUgfSApIHtcclxuXHRcdHRoaXMucGFnZVN0YXRlID0gcGFnZVN0YXRlO1xyXG5cdH07XHJcblx0dGhpcy5pc1Bhc3NlZCAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGNhblN3aXRjaCA9IHRoaXMubGlzdD8uYmxvY2s/LnBhZ2U/LmNhblN3aXRjaD8uY3VycmVudDtcclxuXHJcblx0XHRzd2l0Y2ggKCB0aGlzLnBhZ2VTdGF0ZSApIHtcclxuXHRcdFx0Y2FzZSAnYWN0aXZlJzpcclxuXHRcdFx0XHRyZXR1cm4gIWNhblN3aXRjaDtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuQ29uZGl0aW9uUGFnZVN0YXRlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbTsiLCJpbXBvcnQgUGFnZVN0YXRlIGZyb20gJy4vUGFnZVN0YXRlJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIENvbmRpdGlvbmFsQmxvY2ssXHJcblx0ICAgICAgUmVhY3RpdmVWYXIsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGRvQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXHJcbmZ1bmN0aW9uIE11bHRpU3RlcFN0YXRlKCkge1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cclxuXHQgKi9cclxuXHR0aGlzLnJvb3QgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7Q29uZGl0aW9uYWxCbG9ja31cclxuXHQgKi9cclxuXHR0aGlzLmJsb2NrID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ3VycmVudCBwYWdlIGluZGV4XHJcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG5cdCAqL1xyXG5cdHRoaXMuaW5kZXggPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBOb2RlIGVsZW1lbnRzIG9mIHBhZ2VzXHJcblx0ICogQHR5cGUge0FycmF5PFBhZ2VTdGF0ZT4gfCAqfVxyXG5cdCAqL1xyXG5cdHRoaXMuZWxlbWVudHMgPSBbXTtcclxuXHJcblx0dGhpcy5zZXRTY29wZSAgICA9IGZ1bmN0aW9uICggcm9vdE9yQmxvY2sgKSB7XHJcblx0XHRpZiAoIHJvb3RPckJsb2NrIGluc3RhbmNlb2YgQ29uZGl0aW9uYWxCbG9jayApIHtcclxuXHRcdFx0dGhpcy5ibG9jayA9IHJvb3RPckJsb2NrO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMucm9vdCA9IHJvb3RPckJsb2NrO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0dGhpcy5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuaW5kZXggPSBuZXcgUmVhY3RpdmVWYXIoIDEgKTtcclxuXHRcdHRoaXMuaW5kZXgubWFrZSgpO1xyXG5cdFx0dGhpcy5pbmRleC53YXRjaCggdGhpcy5vbkNoYW5nZUluZGV4LmJpbmQoIHRoaXMgKSApO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGNoaWxkIG9mIHRoaXMuZ2V0U2NvcGVOb2RlKCkuY2hpbGRyZW4gKSB7XHJcblx0XHRcdGlmICggIWNoaWxkLm1hdGNoZXMoICcuamV0LWZvcm0tYnVpbGRlci1wcm9ncmVzcy1wYWdlcycgKSApIHtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnByb2dyZXNzID0gbmV3IFByb2dyZXNzQmFyKCBjaGlsZCwgdGhpcyApO1xyXG5cdFx0fVxyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIHBhZ2VzIHtFbGVtZW50W119XHJcblx0ICovXHJcblx0dGhpcy5zZXRQYWdlcyA9IGZ1bmN0aW9uICggcGFnZXMgKSB7XHJcblx0XHQvKipcclxuXHRcdCAqIE11bHRpc3RlcCBpcyBpbml0aWFsaXppbmcgZm9yIGFsbCBmb3JtIG9yXHJcblx0XHQgKiBzcGVjaWZpYyBjb25kaXRpb25hbCBibG9jay5cclxuXHRcdCAqXHJcblx0XHQgKiBXZSBuZWVkIHRvIHNlcGFyYXRlIGdsb2JhbCAmIGJsb2NrIG11bHRpc3RlcFxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmVsZW1lbnRzID0gcGFnZXMubWFwKFxyXG5cdFx0XHRwYWdlID0+IG5ldyBQYWdlU3RhdGUoIHBhZ2UsIHRoaXMgKSxcclxuXHRcdCk7XHJcblxyXG5cdFx0dGhpcy5lbGVtZW50cy5mb3JFYWNoKFxyXG5cdFx0XHRwYWdlID0+IHBhZ2Uub2JzZXJ2ZSgpLFxyXG5cdFx0KTtcclxuXHRcdC8qKlxyXG5cdFx0ICogV2Ugc2hvdWxkIHJ1biB0aGlzIG1ldGhvZCBzZXBhcmF0ZWx5LCBiZWNhdXNlIGl0IGluaXRpYWxpemVzXHJcblx0XHQgKiBjb25kaXRpb25hbCBibG9ja3MsIHdoaWNoIGNvdWxkIHJlbW92ZSBzb21lIHBhcnQgb2Ygbm9kZXMgZnJvbSBET01cclxuXHRcdCAqXHJcblx0XHQgKiBBbmQgdGhpcyBicmVha3MgbG9naWMgb2YgdGhlIG90aGVyIG1vZHVsZXNcclxuXHRcdCAqIChzd2l0Y2gtcGFnZS1vbi1jaGFuZ2UgZm9yIGV4YW1wbGUpXHJcblx0XHQgKi9cclxuXHRcdHRoaXMuZWxlbWVudHMuZm9yRWFjaChcclxuXHRcdFx0cGFnZSA9PiBwYWdlLm9ic2VydmVDb25kaXRpb25hbEJsb2NrcygpLFxyXG5cdFx0KTtcclxuXHJcblx0XHRjb25zdCB7IHN1Ym1pdHRlciB9ID0gdGhpcy5nZXRSb290KCkuZ2V0U3VibWl0KCk7XHJcblx0XHQvLyBpcyBhamF4XHJcblx0XHRpZiAoICFzdWJtaXR0ZXIuaGFzT3duUHJvcGVydHkoICdzdGF0dXMnICkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzdWJtaXR0ZXIud2F0Y2hSZXNldCggKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmluZGV4LmN1cnJlbnQgPSAxO1xyXG5cdFx0fSApO1xyXG5cdH07XHJcblx0dGhpcy5vbkNoYW5nZUluZGV4ICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAoIGNvbnN0IHBhZ2Ugb2YgdGhpcy5nZXRQYWdlcygpICkge1xyXG5cdFx0XHRwYWdlLmlzU2hvdy5jdXJyZW50ID0gcGFnZS5pbmRleCA9PT0gdGhpcy5pbmRleC5jdXJyZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdHdpbmRvdz8ualF1ZXJ5KCBkb2N1bWVudCApPy50cmlnZ2VyKFxyXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlci9zd2l0Y2gtcGFnZScsXHJcblx0XHQpO1xyXG5cdH07XHJcblx0dGhpcy5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvciAoIGNvbnN0IHBhZ2Ugb2YgdGhpcy5nZXRQYWdlcygpICkge1xyXG5cdFx0XHRpZiAoIHBhZ2UuaXNTaG93LmN1cnJlbnQgKSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhZ2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxuXHQvKipcclxuXHQgKiBAcmV0dXJuIHtBcnJheTxQYWdlU3RhdGU+fVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0UGFnZXMgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50cztcclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge0hUTUxFbGVtZW50fEhUTUxGb3JtRWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLmdldFNjb3BlTm9kZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmJsb2NrPy5ub2RlID8/IHRoaXMucm9vdC5yb290Tm9kZTtcclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIEByZXR1cm4ge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0dGhpcy5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmxvY2s/LnJvb3QgPz8gdGhpcy5yb290O1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBwYWdlIHtQYWdlU3RhdGV9XHJcblx0ICovXHJcblx0dGhpcy5pc0xhc3RQYWdlID0gZnVuY3Rpb24gKCBwYWdlICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHMuYXQoIC0xICkgPT09IHBhZ2U7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHNpbmNlIDMuMC41XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHBhZ2VcclxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHRoaXMuaXNGaXJzdFBhZ2UgPSBmdW5jdGlvbiAoIHBhZ2UgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50c1sgMCBdID09PSBwYWdlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub25SZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm11bHRpc3RlcC5pbml0JywgdGhpcyApO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpU3RlcFN0YXRlOyIsImltcG9ydCBDb25kaXRpb25QYWdlU3RhdGVJdGVtIGZyb20gJy4vQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUmVhY3RpdmVWYXIsXHJcblx0ICAgICAgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdmFsaWRhdGVJbnB1dHMsXHJcblx0ICAgICAgZ2V0T2Zmc2V0VG9wLFxyXG5cdCAgICAgIGZvY3VzT25JbnZhbGlkSW5wdXQsXHJcblx0ICAgICAgcG9wdWxhdGVJbnB1dHMsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmNvbnN0IHsgYWRkQWN0aW9uLCBkb0FjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge0lucHV0RGF0YVtdfSAgICBpbnB1dHMgSW5uZXIgaW5wdXRzXHJcbiAqIEBwcm9wZXJ0eSB7TXVsdGlTdGVwU3RhdGV9IHN0YXRlICBNdWx0aXN0ZXAgc3RhdGVcclxuICogQHByb3BlcnR5IHtFbGVtZW50fSAgICAgICAgbm9kZSAgIFJlbGF0ZWQgbm9kZSwgZWxlbWVudFxyXG4gKiBAcGFyYW0gICAge0VsZW1lbnR9ICAgICAgICBub2RlICAgUmVsYXRlZCBub2RlLCBlbGVtZW50XHJcbiAqIEBwYXJhbSAgICB7TXVsdGlTdGVwU3RhdGV9IHN0YXRlICBNdWx0aXN0ZXAgc3RhdGVcclxuICovXHJcbmZ1bmN0aW9uIFBhZ2VTdGF0ZSggbm9kZSwgc3RhdGUgKSB7XHJcblx0dGhpcy5ub2RlICAgICAgPSBub2RlO1xyXG5cdHRoaXMuaW5kZXggICAgID0gK25vZGUuZGF0YXNldC5wYWdlO1xyXG5cdHRoaXMub2Zmc2V0ICAgID0gK25vZGUuZGF0YXNldC5wYWdlT2Zmc2V0O1xyXG5cdHRoaXMuc3RhdGUgICAgID0gc3RhdGU7XHJcblx0dGhpcy5pbnB1dHMgICAgPSBbXTtcclxuXHR0aGlzLmNhblN3aXRjaCA9IG5ldyBSZWFjdGl2ZVZhciggbnVsbCApO1xyXG5cdHRoaXMuaXNTaG93ICAgID0gbmV3IFJlYWN0aXZlVmFyKCAxID09PSB0aGlzLmluZGV4ICk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuMVxyXG5cdCAqL1xyXG5cdHRoaXMuYXV0b0ZvY3VzID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmF1dG9fZm9jdXM7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBzaW5jZSAzLjAuNVxyXG5cdCAqIEB0eXBlIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHRoaXMuaW5pdGlhbE9ic2VydmVTdGF0ZSA9IGZhbHNlO1xyXG59XHJcblxyXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdGlmICggIXRoaXMuaXNMYXN0KCkgKSB7XHJcblx0XHR0aGlzLm9ic2VydmVJbnB1dHMoKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuY2FuU3dpdGNoLm1ha2UoKTtcclxuXHR0aGlzLmlzU2hvdy5tYWtlKCk7XHJcblx0dGhpcy5pc1Nob3cud2F0Y2goICgpID0+IHtcclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuXHRcdHRoaXMuaXNTaG93LmN1cnJlbnQgPyB0aGlzLm9uU2hvdygpIDogdGhpcy5vbkhpZGUoKTtcclxuXHR9ICk7XHJcblxyXG5cdHRoaXMuYWRkQnV0dG9uc0xpc3RlbmVycygpO1xyXG5cclxuXHQvKipcclxuXHQgKiBXZSBjaGVjayB0aGUgZmllbGRzIG9ubHkgZm9yIHRoZSBmaXJzdCBwYWdlLlxyXG5cdCAqIEFuZCBmb3IgdGhlIGZvbGxvd2luZywgd2UgZG8gaXQgd2hlbiBzd2l0Y2hpbmcgcGFnZXNcclxuXHQgKiAoaW4gdGhlIGBvblNob3dgIG1ldGhvZClcclxuXHQgKlxyXG5cdCAqIFdlIGRvIHRoaXMgYmVjYXVzZSBvbiBvdGhlciBwYWdlcyB0aGUgZmllbGRzIGFyZSBhbHdheXNcclxuXHQgKiBjaGVja2VkIHdpdGggYSBzdWNjZXNzZnVsIHJlc3VsdCBkdWUgdG8gdGhlIGNoZWNrIG9uIGBpc1Zpc2libGVgXHJcblx0ICpcclxuXHQgKiBAc2luY2UgMy4wLjVcclxuXHQgKlxyXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzI3ODEjaXNzdWVjb21tZW50LTE1MTc5MjgyMTNcclxuXHQgKiBAc2VlIFBhZ2VTdGF0ZS5vblNob3dcclxuXHQgKiBAc2VlIElucHV0RGF0YS5pc1Zpc2libGVcclxuXHQgKi9cclxuXHRpZiAoIHRoaXMuaXNGaXJzdCgpICkge1xyXG5cdFx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gdHJ1ZTtcclxuXHRcdHRoaXMudXBkYXRlU3RhdGVBc3luYygpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XHJcblx0fVxyXG5cclxuXHR0aGlzLnVwZGF0ZU9mZnNldEJ5UHJvZ3Jlc3MoKTtcclxuXHJcblx0YWRkQWN0aW9uKFxyXG5cdFx0J2pldC5mYi5vYnNlcnZlLmlucHV0Lm1hbnVhbCcsXHJcblx0XHQnamV0LWZvcm0tYnVpbGRlci9wYWdlLXN0YXRlJyxcclxuXHRcdGlucHV0ID0+IHRoaXMub2JzZXJ2ZUlucHV0KCBpbnB1dC5ub2Rlc1sgMCBdICksXHJcblx0KTtcclxuXHJcblx0ZG9BY3Rpb24oICdqZXQuZmIubXVsdGlzdGVwLnBhZ2UuaW5pdCcsIHRoaXMgKTtcclxufTtcclxuXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZUlucHV0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLXN5bmNdJyApICkge1xyXG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLm9ic2VydmVJbnB1dCggbm9kZSApO1xyXG5cclxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcclxuXHRcdGlucHV0ICYmIGRvQWN0aW9uKFxyXG5cdFx0XHQnamV0LmZiLm11bHRpc3RlcC5wYWdlLm9ic2VydmVkLmlucHV0JyxcclxuXHRcdFx0aW5wdXQsXHJcblx0XHRcdHRoaXMsXHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cclxuICovXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZUlucHV0ID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdGlmIChcclxuXHRcdCF0aGlzLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSB8fFxyXG5cdFx0IW5vZGUuaGFzT3duUHJvcGVydHkoICdqZmJTeW5jJyApIHx8XHJcblx0XHRub2RlLmpmYlN5bmMuaGFzUGFyZW50KClcclxuXHQpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XHJcblx0ICovXHJcblx0Y29uc3QgaW5wdXQgPSBub2RlLmpmYlN5bmM7XHJcblxyXG5cdHRoaXMuaGFuZGxlSW5wdXRFbnRlciggaW5wdXQgKTtcclxuXHJcblx0aW5wdXQubG9hZGluZy53YXRjaCggKCkgPT4ge1xyXG5cdFx0aWYgKCBpbnB1dC5sb2FkaW5nLmN1cnJlbnQgKSB7XHJcblx0XHRcdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKCk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHRpZiAoICFpbnB1dC5yZXBvcnRpbmcucmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcclxuXHRcdHJldHVybiBpbnB1dDtcclxuXHR9XHJcblxyXG5cdHRoaXMuaW5wdXRzLnB1c2goIGlucHV0ICk7XHJcblx0aW5wdXQud2F0Y2hWYWxpZGl0eSggKCkgPT4gdGhpcy51cGRhdGVTdGF0ZSgpICk7XHJcblxyXG5cdHJldHVybiBpbnB1dDtcclxufTtcclxuLyoqXHJcbiAqIEJ1dHRvbnMgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIHBhZ2VzIGFyZSBoaWRkZW4gY29uZGl0aW9uYWwgYmxvY2tzXHJcbiAqIHRoYXQgcGVyZm9ybSB0aGVpciBmdW5jdGlvbiAoZGlzYWJsZSlcclxuICogaWYgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgZmlsbGVkIGluIHRoZSBwYWdlLlxyXG4gKi9cclxuUGFnZVN0YXRlLnByb3RvdHlwZS5vYnNlcnZlQ29uZGl0aW9uYWxCbG9ja3MgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKCB0aGlzLmlzTGFzdCgpICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0J1tkYXRhLWpmYi1jb25kaXRpb25hbF0nLFxyXG5cdCkgKSB7XHJcblx0XHRpZiAoICF0aGlzLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjb25zdCBibG9jayA9IGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2soXHJcblx0XHRcdG5vZGUsXHJcblx0XHRcdHRoaXMuc3RhdGUuZ2V0Um9vdCgpLFxyXG5cdFx0KTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgYmxvY2subGlzdC5nZXRDb25kaXRpb25zKCkgKSB7XHJcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcclxuXHRcdFx0aWYgKCBjb25kaXRpb24gaW5zdGFuY2VvZiBDb25kaXRpb25QYWdlU3RhdGVJdGVtICkge1xyXG5cdFx0XHRcdGJsb2NrLnBhZ2UgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMuY2FuU3dpdGNoLndhdGNoKCAoKSA9PiBibG9jay5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBzaW5jZSAzLjAuNSBXZSBjaGVjayB0aGUgZmllbGRzIGlmIHRoaXMgaXMgZG9uZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICogQHNpbmNlIDMuMC4wIEludHJvZHVjZWRcclxuICovXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICk7XHJcblxyXG5cdGlmICggdGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gdHJ1ZTtcclxuXHR0aGlzLnVwZGF0ZVN0YXRlQXN5bmMoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xyXG59O1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLm9uSGlkZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICk7XHJcbn07XHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcclxuXHRcdGlmICggaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudCB8fFxyXG5cdFx0XHRudWxsID09PSBpbnB1dC5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS5jdXJyZW50XHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gZmFsc2U7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gdHJ1ZTtcclxufTtcclxuXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3RhdGVBc3luYyAgICA9IGFzeW5jIGZ1bmN0aW9uICggc2lsZW5jZSA9IHRydWUgKSB7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHZhbGlkYXRlSW5wdXRzKCB0aGlzLmdldElucHV0cygpLCBzaWxlbmNlICk7XHJcblxyXG5cdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IHRydWU7XHJcblx0fVxyXG5cdGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gZmFsc2U7XHJcblx0fVxyXG59O1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLmFkZEJ1dHRvbnNMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3Qgc3dpdGNoQnV0dG9ucyA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19uZXh0LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UnLFxyXG5cdCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IHN3aXRjaEJ1dHRvbiBvZiBzd2l0Y2hCdXR0b25zICkge1xyXG5cdFx0aWYgKCAhdGhpcy5pc05vZGVCZWxvbmdUaGlzKCBzd2l0Y2hCdXR0b24gKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjb25zdCBpc1ByZXYgPSBzd2l0Y2hCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlJyxcclxuXHRcdCk7XHJcblxyXG5cdFx0c3dpdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCgpID0+IHRoaXMuY2hhbmdlUGFnZSggaXNQcmV2ICksXHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuUGFnZVN0YXRlLnByb3RvdHlwZS5jaGFuZ2VQYWdlICAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24gKCBpc0JhY2sgKSB7XHJcblx0aWYgKCBpc0JhY2sgKSB7XHJcblx0XHR0aGlzLnN0YXRlLmluZGV4LmN1cnJlbnQgPSB0aGlzLmluZGV4IC0gMTtcclxuXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIHRoaXMuZ2V0TG9ja1N0YXRlKCkuY3VycmVudCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGF3YWl0IHRoaXMudXBkYXRlU3RhdGVBc3luYyggZmFsc2UgKTtcclxuXHJcblx0aWYgKCB0aGlzLmNhblN3aXRjaC5jdXJyZW50ICkge1xyXG5cdFx0dGhpcy5zdGF0ZS5pbmRleC5jdXJyZW50ID0gdGhpcy5pbmRleCArIDE7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG5cdHRoaXMuYXV0b0ZvY3VzICYmIGZvY3VzT25JbnZhbGlkSW5wdXQoIHRoaXMuZ2V0SW5wdXRzKCkgKTtcclxufTtcclxuUGFnZVN0YXRlLnByb3RvdHlwZS5pc05vZGVCZWxvbmdUaGlzICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdGNvbnN0IHBhcmVudFBhZ2UgPSBub2RlLmNsb3Nlc3QoICcuamV0LWZvcm0tYnVpbGRlci1wYWdlJyApO1xyXG5cclxuXHRyZXR1cm4gcGFyZW50UGFnZSA/IHBhcmVudFBhZ2UuaXNFcXVhbE5vZGUoIHRoaXMubm9kZSApIDogZmFsc2U7XHJcbn07XHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtBcnJheTxJbnB1dERhdGE+IHwgKn1cclxuICovXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUuZ2V0SW5wdXRzID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiBwb3B1bGF0ZUlucHV0cyggdGhpcy5pbnB1dHMgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJuIHtMb2FkaW5nUmVhY3RpdmVWYXJ9XHJcbiAqL1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLmdldExvY2tTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cclxuXHQgKi9cclxuXHRjb25zdCByb290ID0gdGhpcy5zdGF0ZS5nZXRSb290KCk7XHJcblx0Y29uc3QgZm9ybSA9IHJvb3Q/LnBhcmVudD8ucm9vdD8uZm9ybSA/PyByb290LmZvcm07XHJcblxyXG5cdHJldHVybiBmb3JtLmxvY2tTdGF0ZTtcclxufTtcclxuXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUuaXNMYXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLnN0YXRlLmlzTGFzdFBhZ2UoIHRoaXMgKTtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAc2luY2UgMy4wLjVcclxuICpcclxuICogQHJldHVybiB7Ym9vbGVhbn1cclxuICovXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUuaXNGaXJzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5zdGF0ZS5pc0ZpcnN0UGFnZSggdGhpcyApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfFJlcGVhdGVyRGF0YX1cclxuICovXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUuaGFuZGxlSW5wdXRFbnRlciA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0aW5wdXQ/LmVudGVyS2V5Py5hZGRGaWx0ZXIoICgpID0+IHtcclxuXHRcdGNvbnN0IGZvcm0gPSBpbnB1dC5yb290LmZvcm07XHJcblxyXG5cdFx0aWYgKCBmb3JtICkge1xyXG5cdFx0XHRpZiAoIHRydWUgPT09IGZvcm0uY2FuVHJpZ2dlckVudGVyU3VibWl0ICkge1xyXG5cdFx0XHRcdHRoaXMuY2hhbmdlUGFnZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2hhbmdlUGFnZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcHJldmVudCBzdWJtaXRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5QYWdlU3RhdGUucHJvdG90eXBlLmdldE9mZnNldFRvcCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gZ2V0T2Zmc2V0VG9wKCB0aGlzLm5vZGUgKSAtIHRoaXMub2Zmc2V0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBzaW5jZSAzLjIuM1xyXG4gKi9cclxuUGFnZVN0YXRlLnByb3RvdHlwZS51cGRhdGVPZmZzZXRCeVByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cdGlmICggIXRoaXMuc3RhdGU/LnByb2dyZXNzPy5ub2RlICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR0aGlzLm9mZnNldCArPSArdGhpcy5zdGF0ZS5wcm9ncmVzcy5ub2RlLmNsaWVudEhlaWdodDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdGF0ZTsiLCJmdW5jdGlvbiBQcm9ncmVzc0Jhciggbm9kZSwgc3RhdGUgKSB7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG5vZGUgIHtIVE1MRWxlbWVudH1cclxuXHQgKiBAcGFyYW0gc3RhdGUge011bHRpU3RlcFN0YXRlfVxyXG5cdCAqL1xyXG5cdHRoaXMubm9kZSA9IG5vZGU7XHJcblx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG5cclxuXHR0aGlzLnN0YXRlLmluZGV4LndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUl0ZW1zKCkgKTtcclxuXHJcblx0dGhpcy51cGRhdGVJdGVtcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZS5pbmRleDtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIHRoaXMubm9kZS5jaGlsZHJlbiApIHtcclxuXHRcdFx0Y29uc3QgcGFnZUluZGV4ID0gK2l0ZW0uZGF0YXNldC5wYWdlO1xyXG5cclxuXHRcdFx0aWYgKCBwYWdlSW5kZXggPCBjdXJyZW50ICkge1xyXG5cdFx0XHRcdHRoaXMubWFrZVBhc3NlZCggaXRlbSApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYgKCBjdXJyZW50ID09PSBwYWdlSW5kZXggKSB7XHJcblx0XHRcdFx0dGhpcy5tYWtlQWN0aXZlKCBpdGVtICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5tYWtlTm90UGFzc2VkKCBpdGVtICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gZWxlbWVudCB7SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5tYWtlQWN0aXZlID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xyXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAncGFzc2VkLXBhZ2UnICk7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUtcGFnZScgKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gZWxlbWVudCB7SFRNTEVsZW1lbnR9XHJcblx0ICovXHJcblx0dGhpcy5tYWtlUGFzc2VkID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xyXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFzc2VkLXBhZ2UnICk7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUtcGFnZScgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLm1ha2VOb3RQYXNzZWQgPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUtcGFnZScsICdwYXNzZWQtcGFnZScgKTtcclxuXHR9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjsiLCJpbXBvcnQgTXVsdGlTdGVwU3RhdGUgZnJvbSAnLi9NdWx0aVN0ZXBTdGF0ZSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNdWx0aVN0ZXAoIHJvb3RPckJsb2NrICkge1xyXG5cdGNvbnN0IG11bHRpc3RlcCA9IG5ldyBNdWx0aVN0ZXBTdGF0ZSgpO1xyXG5cdG11bHRpc3RlcC5zZXRTY29wZSggcm9vdE9yQmxvY2sgKTtcclxuXHJcblx0Y29uc3QgcGFnZXMgPSBbXTtcclxuXHJcblx0Zm9yICggY29uc3QgY2hpbGQgb2YgbXVsdGlzdGVwLmdldFNjb3BlTm9kZSgpLmNoaWxkTm9kZXMgKSB7XHJcblx0XHRpZiAoICFjaGlsZD8uY2xhc3NMaXN0Py5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXItcGFnZScgKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRwYWdlcy5wdXNoKCBjaGlsZCApO1xyXG5cdH1cclxuXHJcblx0aWYgKCAhcGFnZXMubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIG11bHRpc3RlcDtcclxuXHR9XHJcblxyXG5cdG11bHRpc3RlcC5zZXRQcm9ncmVzcygpO1xyXG5cdG11bHRpc3RlcC5zZXRQYWdlcyggcGFnZXMgKTtcclxuXHJcblx0cmV0dXJuIG11bHRpc3RlcDtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTXVsdGlTdGVwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVNdWx0aVN0ZXAgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCBDb25kaXRpb25QYWdlU3RhdGVJdGVtIGZyb20gJy4vQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgYWRkQWN0aW9uLFxyXG5cdCAgICAgIGFkZEZpbHRlcixcclxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgZ2V0U2Nyb2xsUGFyZW50LFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwJyxcclxuXHRmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XHJcblx0XHRjb25zdCBtdWx0aXN0ZXAgPSBjcmVhdGVNdWx0aVN0ZXAoIG9ic2VydmFibGUgKTtcclxuXHJcblx0XHRpZiAoICFtdWx0aXN0ZXAuZ2V0UGFnZXMoKT8ubGVuZ3RoICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0b2JzZXJ2YWJsZS5tdWx0aXN0ZXAgPSBtdWx0aXN0ZXA7XHJcblx0XHRtdWx0aXN0ZXAub25SZWFkeSgpO1xyXG5cdH0sXHJcblx0MTUsXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC5pbml0JyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwJyxcclxuXHRmdW5jdGlvbiAoIGJsb2NrICkge1xyXG5cdFx0Y29uc3QgbXVsdGlzdGVwID0gY3JlYXRlTXVsdGlTdGVwKCBibG9jayApO1xyXG5cclxuXHRcdGlmICggIW11bHRpc3RlcC5nZXRQYWdlcygpPy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRibG9jay5tdWx0aXN0ZXAgPSBtdWx0aXN0ZXA7XHJcblx0XHRtdWx0aXN0ZXAub25SZWFkeSgpO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5jb25kaXRpb25hbC50eXBlcycsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcCcsXHJcblx0ZnVuY3Rpb24gKCBpdGVtcyApIHtcclxuXHRcdGl0ZW1zID0gWyBDb25kaXRpb25QYWdlU3RhdGVJdGVtLCAuLi5pdGVtcyBdO1xyXG5cclxuXHRcdHJldHVybiBpdGVtcztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkQWN0aW9uKFxyXG5cdCdqZXQuZmIubXVsdGlzdGVwLmluaXQnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAvYXV0b3Njcm9sbCcsXHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG11bHRpc3RlcCB7TXVsdGlTdGVwU3RhdGV9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gKCBtdWx0aXN0ZXAgKSB7XHJcblx0XHRpZiAoICF3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LnNjcm9sbF9vbl9uZXh0ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRtdWx0aXN0ZXAuaW5kZXgud2F0Y2goICgpID0+IHtcclxuXHRcdFx0LyoqXHJcblx0XHRcdCAqIEB0eXBlIHtQYWdlU3RhdGV8Ym9vbGVhbn1cclxuXHRcdFx0ICovXHJcblx0XHRcdGNvbnN0IHBhZ2UgPSBtdWx0aXN0ZXAuZ2V0Q3VycmVudFBhZ2UoKTtcclxuXHJcblx0XHRcdGNvbnN0IHBhcmVudCA9IGdldFNjcm9sbFBhcmVudCggcGFnZS5ub2RlICk7XHJcblx0XHRcdGNvbnN0IHRvcCAgICA9IHBhZ2UuZ2V0T2Zmc2V0VG9wKCk7XHJcblxyXG5cdFx0XHRwYXJlbnQ/LnNjcm9sbFRvPy4oIHsgdG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSApO1xyXG5cdFx0fSApO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9