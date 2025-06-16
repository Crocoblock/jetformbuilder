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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbXVsdGkuc3RlcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL0NvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0uanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9NdWx0aVN0ZXBTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL1BhZ2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL1Byb2dyZXNzQmFyLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvZnVuY3Rpb25zLmpzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IENvbmRpdGlvbkl0ZW0gfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0oKSB7XG5cdENvbmRpdGlvbkl0ZW0uY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG9wdGlvbnMgKSB7XG5cdFx0cmV0dXJuICEhb3B0aW9ucz8ucGFnZV9zdGF0ZT8ubGVuZ3RoO1xuXHR9O1xuXHR0aGlzLnNldE9wdGlvbnMgID0gZnVuY3Rpb24gKCB7IHBhZ2Vfc3RhdGU6IHBhZ2VTdGF0ZSB9ICkge1xuXHRcdHRoaXMucGFnZVN0YXRlID0gcGFnZVN0YXRlO1xuXHR9O1xuXHR0aGlzLmlzUGFzc2VkICAgID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGNhblN3aXRjaCA9IHRoaXMubGlzdD8uYmxvY2s/LnBhZ2U/LmNhblN3aXRjaD8uY3VycmVudDtcblxuXHRcdHN3aXRjaCAoIHRoaXMucGFnZVN0YXRlICkge1xuXHRcdFx0Y2FzZSAnYWN0aXZlJzpcblx0XHRcdFx0cmV0dXJuICFjYW5Td2l0Y2g7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9O1xufVxuXG5Db25kaXRpb25QYWdlU3RhdGVJdGVtLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIENvbmRpdGlvbkl0ZW0ucHJvdG90eXBlICk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW07IiwiaW1wb3J0IFBhZ2VTdGF0ZSBmcm9tICcuL1BhZ2VTdGF0ZSc7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi9Qcm9ncmVzc0Jhcic7XG5cbmNvbnN0IHtcblx0ICAgICAgQ29uZGl0aW9uYWxCbG9jayxcblx0ICAgICAgUmVhY3RpdmVWYXIsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHQgICAgICBkb0FjdGlvbixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gTXVsdGlTdGVwU3RhdGUoKSB7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0dGhpcy5yb290ID0gbnVsbDtcblxuXHQvKipcblx0ICogQHR5cGUge0NvbmRpdGlvbmFsQmxvY2t9XG5cdCAqL1xuXHR0aGlzLmJsb2NrID0gbnVsbDtcblxuXHQvKipcblx0ICogQ3VycmVudCBwYWdlIGluZGV4XG5cdCAqIEB0eXBlIHtSZWFjdGl2ZVZhcn1cblx0ICovXG5cdHRoaXMuaW5kZXggPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBOb2RlIGVsZW1lbnRzIG9mIHBhZ2VzXG5cdCAqIEB0eXBlIHtBcnJheTxQYWdlU3RhdGU+IHwgKn1cblx0ICovXG5cdHRoaXMuZWxlbWVudHMgPSBbXTtcblxuXHR0aGlzLnNldFNjb3BlICAgID0gZnVuY3Rpb24gKCByb290T3JCbG9jayApIHtcblx0XHRpZiAoIHJvb3RPckJsb2NrIGluc3RhbmNlb2YgQ29uZGl0aW9uYWxCbG9jayApIHtcblx0XHRcdHRoaXMuYmxvY2sgPSByb290T3JCbG9jaztcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJvb3QgPSByb290T3JCbG9jaztcblx0XHR9XG5cdH07XG5cdHRoaXMuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0dGhpcy5pbmRleCA9IG5ldyBSZWFjdGl2ZVZhciggMSApO1xuXHRcdHRoaXMuaW5kZXgubWFrZSgpO1xuXHRcdHRoaXMuaW5kZXgud2F0Y2goIHRoaXMub25DaGFuZ2VJbmRleC5iaW5kKCB0aGlzICkgKTtcblxuXHRcdGZvciAoIGNvbnN0IGNoaWxkIG9mIHRoaXMuZ2V0U2NvcGVOb2RlKCkuY2hpbGRyZW4gKSB7XG5cdFx0XHRpZiAoICFjaGlsZC5tYXRjaGVzKCAnLmpldC1mb3JtLWJ1aWxkZXItcHJvZ3Jlc3MtcGFnZXMnICkgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0JhciggY2hpbGQsIHRoaXMgKTtcblx0XHR9XG5cdH07XG5cdC8qKlxuXHQgKiBAcGFyYW0gcGFnZXMge0VsZW1lbnRbXX1cblx0ICovXG5cdHRoaXMuc2V0UGFnZXMgPSBmdW5jdGlvbiAoIHBhZ2VzICkge1xuXHRcdC8qKlxuXHRcdCAqIE11bHRpc3RlcCBpcyBpbml0aWFsaXppbmcgZm9yIGFsbCBmb3JtIG9yXG5cdFx0ICogc3BlY2lmaWMgY29uZGl0aW9uYWwgYmxvY2suXG5cdFx0ICpcblx0XHQgKiBXZSBuZWVkIHRvIHNlcGFyYXRlIGdsb2JhbCAmIGJsb2NrIG11bHRpc3RlcFxuXHRcdCAqL1xuXHRcdHRoaXMuZWxlbWVudHMgPSBwYWdlcy5tYXAoXG5cdFx0XHRwYWdlID0+IG5ldyBQYWdlU3RhdGUoIHBhZ2UsIHRoaXMgKSxcblx0XHQpO1xuXG5cdFx0dGhpcy5lbGVtZW50cy5mb3JFYWNoKFxuXHRcdFx0cGFnZSA9PiBwYWdlLm9ic2VydmUoKSxcblx0XHQpO1xuXHRcdC8qKlxuXHRcdCAqIFdlIHNob3VsZCBydW4gdGhpcyBtZXRob2Qgc2VwYXJhdGVseSwgYmVjYXVzZSBpdCBpbml0aWFsaXplc1xuXHRcdCAqIGNvbmRpdGlvbmFsIGJsb2Nrcywgd2hpY2ggY291bGQgcmVtb3ZlIHNvbWUgcGFydCBvZiBub2RlcyBmcm9tIERPTVxuXHRcdCAqXG5cdFx0ICogQW5kIHRoaXMgYnJlYWtzIGxvZ2ljIG9mIHRoZSBvdGhlciBtb2R1bGVzXG5cdFx0ICogKHN3aXRjaC1wYWdlLW9uLWNoYW5nZSBmb3IgZXhhbXBsZSlcblx0XHQgKi9cblx0XHR0aGlzLmVsZW1lbnRzLmZvckVhY2goXG5cdFx0XHRwYWdlID0+IHBhZ2Uub2JzZXJ2ZUNvbmRpdGlvbmFsQmxvY2tzKCksXG5cdFx0KTtcblxuXHRcdGNvbnN0IHsgc3VibWl0dGVyIH0gPSB0aGlzLmdldFJvb3QoKS5nZXRTdWJtaXQoKTtcblx0XHQvLyBpcyBhamF4XG5cdFx0aWYgKCAhc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN1Ym1pdHRlci53YXRjaFJlc2V0KCAoKSA9PiB7XG5cdFx0XHR0aGlzLmluZGV4LmN1cnJlbnQgPSAxO1xuXHRcdH0gKTtcblx0fTtcblx0dGhpcy5vbkNoYW5nZUluZGV4ICA9IGZ1bmN0aW9uICgpIHtcblx0XHRmb3IgKCBjb25zdCBwYWdlIG9mIHRoaXMuZ2V0UGFnZXMoKSApIHtcblx0XHRcdHBhZ2UuaXNTaG93LmN1cnJlbnQgPSBwYWdlLmluZGV4ID09PSB0aGlzLmluZGV4LmN1cnJlbnQ7XG5cdFx0fVxuXG5cdFx0d2luZG93Py5qUXVlcnkoIGRvY3VtZW50ICk/LnRyaWdnZXIoXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlci9zd2l0Y2gtcGFnZScsXG5cdFx0KTtcblx0fTtcblx0dGhpcy5nZXRDdXJyZW50UGFnZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRmb3IgKCBjb25zdCBwYWdlIG9mIHRoaXMuZ2V0UGFnZXMoKSApIHtcblx0XHRcdGlmICggcGFnZS5pc1Nob3cuY3VycmVudCApIHtcblx0XHRcdFx0cmV0dXJuIHBhZ2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xuXHQvKipcblx0ICogQHJldHVybiB7QXJyYXk8UGFnZVN0YXRlPn1cblx0ICovXG5cdHRoaXMuZ2V0UGFnZXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHM7XG5cdH07XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtIVE1MRWxlbWVudHxIVE1MRm9ybUVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLmdldFNjb3BlTm9kZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5ibG9jaz8ubm9kZSA/PyB0aGlzLnJvb3Qucm9vdE5vZGU7XG5cdH07XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0dGhpcy5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmJsb2NrPy5yb290ID8/IHRoaXMucm9vdDtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIHBhZ2Uge1BhZ2VTdGF0ZX1cblx0ICovXG5cdHRoaXMuaXNMYXN0UGFnZSA9IGZ1bmN0aW9uICggcGFnZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50cy5hdCggLTEgKSA9PT0gcGFnZTtcblx0fTtcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC41XG5cdCAqXG5cdCAqIEBwYXJhbSAgcGFnZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0dGhpcy5pc0ZpcnN0UGFnZSA9IGZ1bmN0aW9uICggcGFnZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50c1sgMCBdID09PSBwYWdlO1xuXHR9O1xuXG5cdHRoaXMub25SZWFkeSA9IGZ1bmN0aW9uICgpIHtcblx0XHRkb0FjdGlvbiggJ2pldC5mYi5tdWx0aXN0ZXAuaW5pdCcsIHRoaXMgKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXVsdGlTdGVwU3RhdGU7IiwiaW1wb3J0IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25QYWdlU3RhdGVJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBSZWFjdGl2ZVZhcixcblx0ICAgICAgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIHZhbGlkYXRlSW5wdXRzLFxuXHQgICAgICBnZXRPZmZzZXRUb3AsXG5cdCAgICAgIGZvY3VzT25JbnZhbGlkSW5wdXQsXG5cdCAgICAgIHBvcHVsYXRlSW5wdXRzLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5jb25zdCB7IGFkZEFjdGlvbiwgZG9BY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8qKlxuICogQHByb3BlcnR5IHtJbnB1dERhdGFbXX0gICAgaW5wdXRzIElubmVyIGlucHV0c1xuICogQHByb3BlcnR5IHtNdWx0aVN0ZXBTdGF0ZX0gc3RhdGUgIE11bHRpc3RlcCBzdGF0ZVxuICogQHByb3BlcnR5IHtFbGVtZW50fSAgICAgICAgbm9kZSAgIFJlbGF0ZWQgbm9kZSwgZWxlbWVudFxuICogQHBhcmFtICAgIHtFbGVtZW50fSAgICAgICAgbm9kZSAgIFJlbGF0ZWQgbm9kZSwgZWxlbWVudFxuICogQHBhcmFtICAgIHtNdWx0aVN0ZXBTdGF0ZX0gc3RhdGUgIE11bHRpc3RlcCBzdGF0ZVxuICovXG5mdW5jdGlvbiBQYWdlU3RhdGUoIG5vZGUsIHN0YXRlICkge1xuXHR0aGlzLm5vZGUgICAgICA9IG5vZGU7XG5cdHRoaXMuaW5kZXggICAgID0gK25vZGUuZGF0YXNldC5wYWdlO1xuXHR0aGlzLm9mZnNldCAgICA9ICtub2RlLmRhdGFzZXQucGFnZU9mZnNldDtcblx0dGhpcy5zdGF0ZSAgICAgPSBzdGF0ZTtcblx0dGhpcy5pbnB1dHMgICAgPSBbXTtcblx0dGhpcy5jYW5Td2l0Y2ggPSBuZXcgUmVhY3RpdmVWYXIoIG51bGwgKTtcblx0dGhpcy5pc1Nob3cgICAgPSBuZXcgUmVhY3RpdmVWYXIoIDEgPT09IHRoaXMuaW5kZXggKTtcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC4xXG5cdCAqL1xuXHR0aGlzLmF1dG9Gb2N1cyA9IHdpbmRvdy5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5hdXRvX2ZvY3VzO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjVcblx0ICogQHR5cGUge2Jvb2xlYW59XG5cdCAqL1xuXHR0aGlzLmluaXRpYWxPYnNlcnZlU3RhdGUgPSBmYWxzZTtcbn1cblxuUGFnZVN0YXRlLnByb3RvdHlwZS5vYnNlcnZlID0gZnVuY3Rpb24gKCkge1xuXG5cdGlmICggIXRoaXMuaXNMYXN0KCkgKSB7XG5cdFx0dGhpcy5vYnNlcnZlSW5wdXRzKCk7XG5cdH1cblxuXHR0aGlzLmNhblN3aXRjaC5tYWtlKCk7XG5cdHRoaXMuaXNTaG93Lm1ha2UoKTtcblx0dGhpcy5pc1Nob3cud2F0Y2goICgpID0+IHtcblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0dGhpcy5pc1Nob3cuY3VycmVudCA/IHRoaXMub25TaG93KCkgOiB0aGlzLm9uSGlkZSgpO1xuXHR9ICk7XG5cblx0dGhpcy5hZGRCdXR0b25zTGlzdGVuZXJzKCk7XG5cblx0LyoqXG5cdCAqIFdlIGNoZWNrIHRoZSBmaWVsZHMgb25seSBmb3IgdGhlIGZpcnN0IHBhZ2UuXG5cdCAqIEFuZCBmb3IgdGhlIGZvbGxvd2luZywgd2UgZG8gaXQgd2hlbiBzd2l0Y2hpbmcgcGFnZXNcblx0ICogKGluIHRoZSBgb25TaG93YCBtZXRob2QpXG5cdCAqXG5cdCAqIFdlIGRvIHRoaXMgYmVjYXVzZSBvbiBvdGhlciBwYWdlcyB0aGUgZmllbGRzIGFyZSBhbHdheXNcblx0ICogY2hlY2tlZCB3aXRoIGEgc3VjY2Vzc2Z1bCByZXN1bHQgZHVlIHRvIHRoZSBjaGVjayBvbiBgaXNWaXNpYmxlYFxuXHQgKlxuXHQgKiBAc2luY2UgMy4wLjVcblx0ICpcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjc4MSNpc3N1ZWNvbW1lbnQtMTUxNzkyODIxM1xuXHQgKiBAc2VlIFBhZ2VTdGF0ZS5vblNob3dcblx0ICogQHNlZSBJbnB1dERhdGEuaXNWaXNpYmxlXG5cdCAqL1xuXHRpZiAoIHRoaXMuaXNGaXJzdCgpICkge1xuXHRcdHRoaXMuaW5pdGlhbE9ic2VydmVTdGF0ZSA9IHRydWU7XG5cdFx0dGhpcy51cGRhdGVTdGF0ZUFzeW5jKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcblx0fVxuXG5cdHRoaXMudXBkYXRlT2Zmc2V0QnlQcm9ncmVzcygpO1xuXG5cdGFkZEFjdGlvbihcblx0XHQnamV0LmZiLm9ic2VydmUuaW5wdXQubWFudWFsJyxcblx0XHQnamV0LWZvcm0tYnVpbGRlci9wYWdlLXN0YXRlJyxcblx0XHRpbnB1dCA9PiB0aGlzLm9ic2VydmVJbnB1dCggaW5wdXQubm9kZXNbIDAgXSApLFxuXHQpO1xuXG5cdGRvQWN0aW9uKCAnamV0LmZiLm11bHRpc3RlcC5wYWdlLmluaXQnLCB0aGlzICk7XG59O1xuXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmVJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItc3luY10nICkgKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSB0aGlzLm9ic2VydmVJbnB1dCggbm9kZSApO1xuXG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdGlucHV0ICYmIGRvQWN0aW9uKFxuXHRcdFx0J2pldC5mYi5tdWx0aXN0ZXAucGFnZS5vYnNlcnZlZC5pbnB1dCcsXG5cdFx0XHRpbnB1dCxcblx0XHRcdHRoaXMsXG5cdFx0KTtcblx0fVxufTtcblxuLyoqXG4gKiBAcGFyYW0gbm9kZSB7RWxlbWVudH1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5vYnNlcnZlSW5wdXQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdGlmIChcblx0XHQhdGhpcy5pc05vZGVCZWxvbmdUaGlzKCBub2RlICkgfHxcblx0XHQhbm9kZS5oYXNPd25Qcm9wZXJ0eSggJ2pmYlN5bmMnICkgfHxcblx0XHRub2RlLmpmYlN5bmMuaGFzUGFyZW50KClcblx0KSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtJbnB1dERhdGF9XG5cdCAqL1xuXHRjb25zdCBpbnB1dCA9IG5vZGUuamZiU3luYztcblxuXHR0aGlzLmhhbmRsZUlucHV0RW50ZXIoIGlucHV0ICk7XG5cblx0aW5wdXQubG9hZGluZy53YXRjaCggKCkgPT4ge1xuXHRcdGlmICggaW5wdXQubG9hZGluZy5jdXJyZW50ICkge1xuXHRcdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IGZhbHNlO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoKTtcblx0XHR9XG5cdH0gKTtcblxuXHRpZiAoICFpbnB1dC5yZXBvcnRpbmcucmVzdHJpY3Rpb25zLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gaW5wdXQ7XG5cdH1cblxuXHR0aGlzLmlucHV0cy5wdXNoKCBpbnB1dCApO1xuXHRpbnB1dC53YXRjaFZhbGlkaXR5KCAoKSA9PiB0aGlzLnVwZGF0ZVN0YXRlKCkgKTtcblxuXHRyZXR1cm4gaW5wdXQ7XG59O1xuLyoqXG4gKiBCdXR0b25zIGZvciBzd2l0Y2hpbmcgYmV0d2VlbiBwYWdlcyBhcmUgaGlkZGVuIGNvbmRpdGlvbmFsIGJsb2Nrc1xuICogdGhhdCBwZXJmb3JtIHRoZWlyIGZ1bmN0aW9uIChkaXNhYmxlKVxuICogaWYgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgZmlsbGVkIGluIHRoZSBwYWdlLlxuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmVDb25kaXRpb25hbEJsb2NrcyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCB0aGlzLmlzTGFzdCgpICkge1xuXHRcdHJldHVybjtcblx0fVxuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCdbZGF0YS1qZmItY29uZGl0aW9uYWxdJyxcblx0KSApIHtcblx0XHRpZiAoICF0aGlzLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBibG9jayA9IGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2soXG5cdFx0XHRub2RlLFxuXHRcdFx0dGhpcy5zdGF0ZS5nZXRSb290KCksXG5cdFx0KTtcblxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiBibG9jay5saXN0LmdldENvbmRpdGlvbnMoKSApIHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtZGVwdGhcblx0XHRcdGlmICggY29uZGl0aW9uIGluc3RhbmNlb2YgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSApIHtcblx0XHRcdFx0YmxvY2sucGFnZSA9IHRoaXM7XG5cdFx0XHRcdHRoaXMuY2FuU3dpdGNoLndhdGNoKCAoKSA9PiBibG9jay5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vKipcbiAqIEBzaW5jZSAzLjAuNSBXZSBjaGVjayB0aGUgZmllbGRzIGlmIHRoaXMgaXMgZG9uZSBmb3IgdGhlIGZpcnN0IHRpbWVcbiAqIEBzaW5jZSAzLjAuMCBJbnRyb2R1Y2VkXG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLm5vZGUuY2xhc3NMaXN0LnJlbW92ZSggJ2pldC1mb3JtLWJ1aWxkZXItcGFnZS0taGlkZGVuJyApO1xuXG5cdGlmICggdGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuaW5pdGlhbE9ic2VydmVTdGF0ZSA9IHRydWU7XG5cdHRoaXMudXBkYXRlU3RhdGVBc3luYygpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS5vbkhpZGUgICAgICA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5ub2RlLmNsYXNzTGlzdC5hZGQoICdqZXQtZm9ybS1idWlsZGVyLXBhZ2UtLWhpZGRlbicgKTtcbn07XG5QYWdlU3RhdGUucHJvdG90eXBlLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXHRmb3IgKCBjb25zdCBpbnB1dCBvZiB0aGlzLmdldElucHV0cygpICkge1xuXHRcdGlmICggaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudCB8fFxuXHRcdFx0bnVsbCA9PT0gaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudFxuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSBmYWxzZTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gdHJ1ZTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3RhdGVBc3luYyAgICA9IGFzeW5jIGZ1bmN0aW9uICggc2lsZW5jZSA9IHRydWUgKSB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgdmFsaWRhdGVJbnB1dHMoIHRoaXMuZ2V0SW5wdXRzKCksIHNpbGVuY2UgKTtcblxuXHRcdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSB0cnVlO1xuXHR9XG5cdGNhdGNoICggZXJyb3IgKSB7XG5cdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IGZhbHNlO1xuXHR9XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS5hZGRCdXR0b25zTGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBzd2l0Y2hCdXR0b25zID0gdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19uZXh0LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UnLFxuXHQpO1xuXG5cdGZvciAoIGNvbnN0IHN3aXRjaEJ1dHRvbiBvZiBzd2l0Y2hCdXR0b25zICkge1xuXHRcdGlmICggIXRoaXMuaXNOb2RlQmVsb25nVGhpcyggc3dpdGNoQnV0dG9uICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgaXNQcmV2ID0gc3dpdGNoQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UnLFxuXHRcdCk7XG5cblx0XHRzd2l0Y2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcblx0XHRcdCdjbGljaycsXG5cdFx0XHQoKSA9PiB0aGlzLmNoYW5nZVBhZ2UoIGlzUHJldiApLFxuXHRcdCk7XG5cdH1cbn07XG5QYWdlU3RhdGUucHJvdG90eXBlLmNoYW5nZVBhZ2UgICAgICAgICAgPSBhc3luYyBmdW5jdGlvbiAoIGlzQmFjayApIHtcblx0aWYgKCBpc0JhY2sgKSB7XG5cdFx0dGhpcy5zdGF0ZS5pbmRleC5jdXJyZW50ID0gdGhpcy5pbmRleCAtIDE7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHRpZiAoIHRoaXMuZ2V0TG9ja1N0YXRlKCkuY3VycmVudCApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRhd2FpdCB0aGlzLnVwZGF0ZVN0YXRlQXN5bmMoIGZhbHNlICk7XG5cblx0aWYgKCB0aGlzLmNhblN3aXRjaC5jdXJyZW50ICkge1xuXHRcdHRoaXMuc3RhdGUuaW5kZXguY3VycmVudCA9IHRoaXMuaW5kZXggKyAxO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHR0aGlzLmF1dG9Gb2N1cyAmJiBmb2N1c09uSW52YWxpZElucHV0KCB0aGlzLmdldElucHV0cygpICk7XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS5pc05vZGVCZWxvbmdUaGlzICAgID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRjb25zdCBwYXJlbnRQYWdlID0gbm9kZS5jbG9zZXN0KCAnLmpldC1mb3JtLWJ1aWxkZXItcGFnZScgKTtcblxuXHRyZXR1cm4gcGFyZW50UGFnZSA/IHBhcmVudFBhZ2UuaXNFcXVhbE5vZGUoIHRoaXMubm9kZSApIDogZmFsc2U7XG59O1xuLyoqXG4gKiBAcmV0dXJuIHtBcnJheTxJbnB1dERhdGE+IHwgKn1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5nZXRJbnB1dHMgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBwb3B1bGF0ZUlucHV0cyggdGhpcy5pbnB1dHMgKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7TG9hZGluZ1JlYWN0aXZlVmFyfVxuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLmdldExvY2tTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0LyoqXG5cdCAqIEB0eXBlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0Y29uc3Qgcm9vdCA9IHRoaXMuc3RhdGUuZ2V0Um9vdCgpO1xuXHRjb25zdCBmb3JtID0gcm9vdD8ucGFyZW50Py5yb290Py5mb3JtID8/IHJvb3QuZm9ybTtcblxuXHRyZXR1cm4gZm9ybS5sb2NrU3RhdGU7XG59O1xuXG5QYWdlU3RhdGUucHJvdG90eXBlLmlzTGFzdCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMuc3RhdGUuaXNMYXN0UGFnZSggdGhpcyApO1xufTtcblxuLyoqXG4gKiBAc2luY2UgMy4wLjVcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLmlzRmlyc3QgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnN0YXRlLmlzRmlyc3RQYWdlKCB0aGlzICk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfFJlcGVhdGVyRGF0YX1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5oYW5kbGVJbnB1dEVudGVyID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcblx0aW5wdXQ/LmVudGVyS2V5Py5hZGRGaWx0ZXIoICgpID0+IHtcblx0XHRjb25zdCBmb3JtID0gaW5wdXQucm9vdC5mb3JtO1xuXG5cdFx0aWYgKCBmb3JtICkge1xuXHRcdFx0aWYgKCB0cnVlID09PSBmb3JtLmNhblRyaWdnZXJFbnRlclN1Ym1pdCApIHtcblx0XHRcdFx0dGhpcy5jaGFuZ2VQYWdlKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jaGFuZ2VQYWdlKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcblx0XHR9XG5cblx0XHQvLyBwcmV2ZW50IHN1Ym1pdFxuXHRcdHJldHVybiBmYWxzZTtcblx0fSApO1xufTtcblxuUGFnZVN0YXRlLnByb3RvdHlwZS5nZXRPZmZzZXRUb3AgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBnZXRPZmZzZXRUb3AoIHRoaXMubm9kZSApIC0gdGhpcy5vZmZzZXQ7XG59O1xuXG4vKipcbiAqIEBzaW5jZSAzLjIuM1xuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLnVwZGF0ZU9mZnNldEJ5UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggIXRoaXMuc3RhdGU/LnByb2dyZXNzPy5ub2RlICkge1xuXHRcdHJldHVybjtcblx0fVxuXHR0aGlzLm9mZnNldCArPSArdGhpcy5zdGF0ZS5wcm9ncmVzcy5ub2RlLmNsaWVudEhlaWdodDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdGF0ZTsiLCJmdW5jdGlvbiBQcm9ncmVzc0Jhciggbm9kZSwgc3RhdGUgKSB7XG5cdC8qKlxuXHQgKiBAcGFyYW0gbm9kZSAge0hUTUxFbGVtZW50fVxuXHQgKiBAcGFyYW0gc3RhdGUge011bHRpU3RlcFN0YXRlfVxuXHQgKi9cblx0dGhpcy5ub2RlID0gbm9kZTtcblx0dGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG5cdHRoaXMuc3RhdGUuaW5kZXgud2F0Y2goICgpID0+IHRoaXMudXBkYXRlSXRlbXMoKSApO1xuXG5cdHRoaXMudXBkYXRlSXRlbXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlLmluZGV4O1xuXG5cdFx0Zm9yICggY29uc3QgaXRlbSBvZiB0aGlzLm5vZGUuY2hpbGRyZW4gKSB7XG5cdFx0XHRjb25zdCBwYWdlSW5kZXggPSAraXRlbS5kYXRhc2V0LnBhZ2U7XG5cblx0XHRcdGlmICggcGFnZUluZGV4IDwgY3VycmVudCApIHtcblx0XHRcdFx0dGhpcy5tYWtlUGFzc2VkKCBpdGVtICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmICggY3VycmVudCA9PT0gcGFnZUluZGV4ICkge1xuXHRcdFx0XHR0aGlzLm1ha2VBY3RpdmUoIGl0ZW0gKTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0aGlzLm1ha2VOb3RQYXNzZWQoIGl0ZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGVtZW50IHtIVE1MRWxlbWVudH1cblx0ICovXG5cdHRoaXMubWFrZUFjdGl2ZSA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdwYXNzZWQtcGFnZScgKTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdhY3RpdmUtcGFnZScgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZW1lbnQge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5tYWtlUGFzc2VkID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ3Bhc3NlZC1wYWdlJyApO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZS1wYWdlJyApO1xuXHR9O1xuXG5cdHRoaXMubWFrZU5vdFBhc3NlZCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUtcGFnZScsICdwYXNzZWQtcGFnZScgKTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7IiwiaW1wb3J0IE11bHRpU3RlcFN0YXRlIGZyb20gJy4vTXVsdGlTdGVwU3RhdGUnO1xuXG5mdW5jdGlvbiBjcmVhdGVNdWx0aVN0ZXAoIHJvb3RPckJsb2NrICkge1xuXHRjb25zdCBtdWx0aXN0ZXAgPSBuZXcgTXVsdGlTdGVwU3RhdGUoKTtcblx0bXVsdGlzdGVwLnNldFNjb3BlKCByb290T3JCbG9jayApO1xuXG5cdGNvbnN0IHBhZ2VzID0gW107XG5cblx0Zm9yICggY29uc3QgY2hpbGQgb2YgbXVsdGlzdGVwLmdldFNjb3BlTm9kZSgpLmNoaWxkTm9kZXMgKSB7XG5cdFx0aWYgKCAhY2hpbGQ/LmNsYXNzTGlzdD8uY29udGFpbnMoICdqZXQtZm9ybS1idWlsZGVyLXBhZ2UnICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0cGFnZXMucHVzaCggY2hpbGQgKTtcblx0fVxuXG5cdGlmICggIXBhZ2VzLmxlbmd0aCApIHtcblx0XHRyZXR1cm4gbXVsdGlzdGVwO1xuXHR9XG5cblx0bXVsdGlzdGVwLnNldFByb2dyZXNzKCk7XG5cdG11bHRpc3RlcC5zZXRQYWdlcyggcGFnZXMgKTtcblxuXHRyZXR1cm4gbXVsdGlzdGVwO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNdWx0aVN0ZXAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU11bHRpU3RlcCB9IGZyb20gJy4vZnVuY3Rpb25zJztcbmltcG9ydCBDb25kaXRpb25QYWdlU3RhdGVJdGVtIGZyb20gJy4vQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkQWN0aW9uLFxuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuY29uc3Qge1xuXHQgICAgICBnZXRTY3JvbGxQYXJlbnQsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5vYnNlcnZlLmFmdGVyJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcCcsXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcblx0XHRjb25zdCBtdWx0aXN0ZXAgPSBjcmVhdGVNdWx0aVN0ZXAoIG9ic2VydmFibGUgKTtcblxuXHRcdGlmICggIW11bHRpc3RlcC5nZXRQYWdlcygpPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0b2JzZXJ2YWJsZS5tdWx0aXN0ZXAgPSBtdWx0aXN0ZXA7XG5cdFx0bXVsdGlzdGVwLm9uUmVhZHkoKTtcblx0fSxcblx0MTUsXG4pO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwuaW5pdCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAnLFxuXHRmdW5jdGlvbiAoIGJsb2NrICkge1xuXHRcdGNvbnN0IG11bHRpc3RlcCA9IGNyZWF0ZU11bHRpU3RlcCggYmxvY2sgKTtcblxuXHRcdGlmICggIW11bHRpc3RlcC5nZXRQYWdlcygpPy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0YmxvY2subXVsdGlzdGVwID0gbXVsdGlzdGVwO1xuXHRcdG11bHRpc3RlcC5vblJlYWR5KCk7XG5cdH0sXG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuY29uZGl0aW9uYWwudHlwZXMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwJyxcblx0ZnVuY3Rpb24gKCBpdGVtcyApIHtcblx0XHRpdGVtcyA9IFsgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSwgLi4uaXRlbXMgXTtcblxuXHRcdHJldHVybiBpdGVtcztcblx0fSxcbik7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5tdWx0aXN0ZXAuaW5pdCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAvYXV0b3Njcm9sbCcsXG5cdC8qKlxuXHQgKiBAcGFyYW0gbXVsdGlzdGVwIHtNdWx0aVN0ZXBTdGF0ZX1cblx0ICovXG5cdGZ1bmN0aW9uICggbXVsdGlzdGVwICkge1xuXHRcdGlmICggIXdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uc2Nyb2xsX29uX25leHQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdG11bHRpc3RlcC5pbmRleC53YXRjaCggKCkgPT4ge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBAdHlwZSB7UGFnZVN0YXRlfGJvb2xlYW59XG5cdFx0XHQgKi9cblx0XHRcdGNvbnN0IHBhZ2UgPSBtdWx0aXN0ZXAuZ2V0Q3VycmVudFBhZ2UoKTtcblxuXHRcdFx0Y29uc3QgcGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KCBwYWdlLm5vZGUgKTtcblx0XHRcdGNvbnN0IHRvcCAgICA9IHBhZ2UuZ2V0T2Zmc2V0VG9wKCk7XG5cblx0XHRcdHBhcmVudD8uc2Nyb2xsVG8/LiggeyB0b3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9ICk7XG5cdFx0fSApO1xuXHR9LFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=