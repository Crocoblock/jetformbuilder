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
    await this.waitForUnlockState();
  }
  await this.updateStateAsync(false);
  if (this.canSwitch.current) {
    this.state.index.current = this.index + 1;
    return;
  }

  // eslint-disable-next-line no-unused-expressions
  this.autoFocus && focusOnInvalidInput(this.getInputs());
};
PageState.prototype.waitForUnlockState = function () {
  return new Promise(resolve => {
    const checkLockState = () => {
      if (!this.getLockState().current) {
        resolve();
      } else {
        setTimeout(checkLockState, 100);
      }
    };
    checkLockState();
  });
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
    this.changePage().then(() => {}).catch(() => {});

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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbXVsdGkuc3RlcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN6VUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvQ29uZGl0aW9uUGFnZVN0YXRlSXRlbS5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL011bHRpU3RlcFN0YXRlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvUGFnZVN0YXRlLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvUHJvZ3Jlc3NCYXIuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgQ29uZGl0aW9uSXRlbSB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuZnVuY3Rpb24gQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSgpIHtcblx0Q29uZGl0aW9uSXRlbS5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcblx0XHRyZXR1cm4gISFvcHRpb25zPy5wYWdlX3N0YXRlPy5sZW5ndGg7XG5cdH07XG5cdHRoaXMuc2V0T3B0aW9ucyAgPSBmdW5jdGlvbiAoIHsgcGFnZV9zdGF0ZTogcGFnZVN0YXRlIH0gKSB7XG5cdFx0dGhpcy5wYWdlU3RhdGUgPSBwYWdlU3RhdGU7XG5cdH07XG5cdHRoaXMuaXNQYXNzZWQgICAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgY2FuU3dpdGNoID0gdGhpcy5saXN0Py5ibG9jaz8ucGFnZT8uY2FuU3dpdGNoPy5jdXJyZW50O1xuXG5cdFx0c3dpdGNoICggdGhpcy5wYWdlU3RhdGUgKSB7XG5cdFx0XHRjYXNlICdhY3RpdmUnOlxuXHRcdFx0XHRyZXR1cm4gIWNhblN3aXRjaDtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG59XG5cbkNvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ29uZGl0aW9uSXRlbS5wcm90b3R5cGUgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbTsiLCJpbXBvcnQgUGFnZVN0YXRlIGZyb20gJy4vUGFnZVN0YXRlJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuL1Byb2dyZXNzQmFyJztcblxuY29uc3Qge1xuXHQgICAgICBDb25kaXRpb25hbEJsb2NrLFxuXHQgICAgICBSZWFjdGl2ZVZhcixcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5jb25zdCB7XG5cdCAgICAgIGRvQWN0aW9uLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBNdWx0aVN0ZXBTdGF0ZSgpIHtcblxuXHQvKipcblx0ICogQHR5cGUge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLnJvb3QgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7Q29uZGl0aW9uYWxCbG9ja31cblx0ICovXG5cdHRoaXMuYmxvY2sgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBDdXJyZW50IHBhZ2UgaW5kZXhcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxuXHQgKi9cblx0dGhpcy5pbmRleCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIE5vZGUgZWxlbWVudHMgb2YgcGFnZXNcblx0ICogQHR5cGUge0FycmF5PFBhZ2VTdGF0ZT4gfCAqfVxuXHQgKi9cblx0dGhpcy5lbGVtZW50cyA9IFtdO1xuXG5cdHRoaXMuc2V0U2NvcGUgICAgPSBmdW5jdGlvbiAoIHJvb3RPckJsb2NrICkge1xuXHRcdGlmICggcm9vdE9yQmxvY2sgaW5zdGFuY2VvZiBDb25kaXRpb25hbEJsb2NrICkge1xuXHRcdFx0dGhpcy5ibG9jayA9IHJvb3RPckJsb2NrO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucm9vdCA9IHJvb3RPckJsb2NrO1xuXHRcdH1cblx0fTtcblx0dGhpcy5zZXRQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLmluZGV4ID0gbmV3IFJlYWN0aXZlVmFyKCAxICk7XG5cdFx0dGhpcy5pbmRleC5tYWtlKCk7XG5cdFx0dGhpcy5pbmRleC53YXRjaCggdGhpcy5vbkNoYW5nZUluZGV4LmJpbmQoIHRoaXMgKSApO1xuXG5cdFx0Zm9yICggY29uc3QgY2hpbGQgb2YgdGhpcy5nZXRTY29wZU5vZGUoKS5jaGlsZHJlbiApIHtcblx0XHRcdGlmICggIWNoaWxkLm1hdGNoZXMoICcuamV0LWZvcm0tYnVpbGRlci1wcm9ncmVzcy1wYWdlcycgKSApIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnByb2dyZXNzID0gbmV3IFByb2dyZXNzQmFyKCBjaGlsZCwgdGhpcyApO1xuXHRcdH1cblx0fTtcblx0LyoqXG5cdCAqIEBwYXJhbSBwYWdlcyB7RWxlbWVudFtdfVxuXHQgKi9cblx0dGhpcy5zZXRQYWdlcyA9IGZ1bmN0aW9uICggcGFnZXMgKSB7XG5cdFx0LyoqXG5cdFx0ICogTXVsdGlzdGVwIGlzIGluaXRpYWxpemluZyBmb3IgYWxsIGZvcm0gb3Jcblx0XHQgKiBzcGVjaWZpYyBjb25kaXRpb25hbCBibG9jay5cblx0XHQgKlxuXHRcdCAqIFdlIG5lZWQgdG8gc2VwYXJhdGUgZ2xvYmFsICYgYmxvY2sgbXVsdGlzdGVwXG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50cyA9IHBhZ2VzLm1hcChcblx0XHRcdHBhZ2UgPT4gbmV3IFBhZ2VTdGF0ZSggcGFnZSwgdGhpcyApLFxuXHRcdCk7XG5cblx0XHR0aGlzLmVsZW1lbnRzLmZvckVhY2goXG5cdFx0XHRwYWdlID0+IHBhZ2Uub2JzZXJ2ZSgpLFxuXHRcdCk7XG5cdFx0LyoqXG5cdFx0ICogV2Ugc2hvdWxkIHJ1biB0aGlzIG1ldGhvZCBzZXBhcmF0ZWx5LCBiZWNhdXNlIGl0IGluaXRpYWxpemVzXG5cdFx0ICogY29uZGl0aW9uYWwgYmxvY2tzLCB3aGljaCBjb3VsZCByZW1vdmUgc29tZSBwYXJ0IG9mIG5vZGVzIGZyb20gRE9NXG5cdFx0ICpcblx0XHQgKiBBbmQgdGhpcyBicmVha3MgbG9naWMgb2YgdGhlIG90aGVyIG1vZHVsZXNcblx0XHQgKiAoc3dpdGNoLXBhZ2Utb24tY2hhbmdlIGZvciBleGFtcGxlKVxuXHRcdCAqL1xuXHRcdHRoaXMuZWxlbWVudHMuZm9yRWFjaChcblx0XHRcdHBhZ2UgPT4gcGFnZS5vYnNlcnZlQ29uZGl0aW9uYWxCbG9ja3MoKSxcblx0XHQpO1xuXG5cdFx0Y29uc3QgeyBzdWJtaXR0ZXIgfSA9IHRoaXMuZ2V0Um9vdCgpLmdldFN1Ym1pdCgpO1xuXHRcdC8vIGlzIGFqYXhcblx0XHRpZiAoICFzdWJtaXR0ZXIuaGFzT3duUHJvcGVydHkoICdzdGF0dXMnICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0c3VibWl0dGVyLndhdGNoUmVzZXQoICgpID0+IHtcblx0XHRcdHRoaXMuaW5kZXguY3VycmVudCA9IDE7XG5cdFx0fSApO1xuXHR9O1xuXHR0aGlzLm9uQ2hhbmdlSW5kZXggID0gZnVuY3Rpb24gKCkge1xuXHRcdGZvciAoIGNvbnN0IHBhZ2Ugb2YgdGhpcy5nZXRQYWdlcygpICkge1xuXHRcdFx0cGFnZS5pc1Nob3cuY3VycmVudCA9IHBhZ2UuaW5kZXggPT09IHRoaXMuaW5kZXguY3VycmVudDtcblx0XHR9XG5cblx0XHR3aW5kb3c/LmpRdWVyeSggZG9jdW1lbnQgKT8udHJpZ2dlcihcblx0XHRcdCdqZXQtZm9ybS1idWlsZGVyL3N3aXRjaC1wYWdlJyxcblx0XHQpO1xuXHR9O1xuXHR0aGlzLmdldEN1cnJlbnRQYWdlID0gZnVuY3Rpb24gKCkge1xuXHRcdGZvciAoIGNvbnN0IHBhZ2Ugb2YgdGhpcy5nZXRQYWdlcygpICkge1xuXHRcdFx0aWYgKCBwYWdlLmlzU2hvdy5jdXJyZW50ICkge1xuXHRcdFx0XHRyZXR1cm4gcGFnZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG5cdC8qKlxuXHQgKiBAcmV0dXJuIHtBcnJheTxQYWdlU3RhdGU+fVxuXHQgKi9cblx0dGhpcy5nZXRQYWdlcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50cztcblx0fTtcblx0LyoqXG5cdCAqIEByZXR1cm4ge0hUTUxFbGVtZW50fEhUTUxGb3JtRWxlbWVudH1cblx0ICovXG5cdHRoaXMuZ2V0U2NvcGVOb2RlID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmJsb2NrPy5ub2RlID8/IHRoaXMucm9vdC5yb290Tm9kZTtcblx0fTtcblx0LyoqXG5cdCAqIEByZXR1cm4ge09ic2VydmFibGV9XG5cdCAqL1xuXHR0aGlzLmdldFJvb3QgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYmxvY2s/LnJvb3QgPz8gdGhpcy5yb290O1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gcGFnZSB7UGFnZVN0YXRlfVxuXHQgKi9cblx0dGhpcy5pc0xhc3RQYWdlID0gZnVuY3Rpb24gKCBwYWdlICkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRzLmF0KCAtMSApID09PSBwYWdlO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjVcblx0ICpcblx0ICogQHBhcmFtICBwYWdlXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHR0aGlzLmlzRmlyc3RQYWdlID0gZnVuY3Rpb24gKCBwYWdlICkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRzWyAwIF0gPT09IHBhZ2U7XG5cdH07XG5cblx0dGhpcy5vblJlYWR5ID0gZnVuY3Rpb24gKCkge1xuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm11bHRpc3RlcC5pbml0JywgdGhpcyApO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNdWx0aVN0ZXBTdGF0ZTsiLCJpbXBvcnQgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSBmcm9tICcuL0NvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0nO1xuXG5jb25zdCB7XG5cdCAgICAgIFJlYWN0aXZlVmFyLFxuXHQgICAgICBjcmVhdGVDb25kaXRpb25hbEJsb2NrLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHtcblx0ICAgICAgdmFsaWRhdGVJbnB1dHMsXG5cdCAgICAgIGdldE9mZnNldFRvcCxcblx0ICAgICAgZm9jdXNPbkludmFsaWRJbnB1dCxcblx0ICAgICAgcG9wdWxhdGVJbnB1dHMsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XG5cbmNvbnN0IHsgYWRkQWN0aW9uLCBkb0FjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLyoqXG4gKiBAcHJvcGVydHkge0lucHV0RGF0YVtdfSAgICBpbnB1dHMgSW5uZXIgaW5wdXRzXG4gKiBAcHJvcGVydHkge011bHRpU3RlcFN0YXRlfSBzdGF0ZSAgTXVsdGlzdGVwIHN0YXRlXG4gKiBAcHJvcGVydHkge0VsZW1lbnR9ICAgICAgICBub2RlICAgUmVsYXRlZCBub2RlLCBlbGVtZW50XG4gKiBAcGFyYW0gICAge0VsZW1lbnR9ICAgICAgICBub2RlICAgUmVsYXRlZCBub2RlLCBlbGVtZW50XG4gKiBAcGFyYW0gICAge011bHRpU3RlcFN0YXRlfSBzdGF0ZSAgTXVsdGlzdGVwIHN0YXRlXG4gKi9cbmZ1bmN0aW9uIFBhZ2VTdGF0ZSggbm9kZSwgc3RhdGUgKSB7XG5cdHRoaXMubm9kZSAgICAgID0gbm9kZTtcblx0dGhpcy5pbmRleCAgICAgPSArbm9kZS5kYXRhc2V0LnBhZ2U7XG5cdHRoaXMub2Zmc2V0ICAgID0gK25vZGUuZGF0YXNldC5wYWdlT2Zmc2V0O1xuXHR0aGlzLnN0YXRlICAgICA9IHN0YXRlO1xuXHR0aGlzLmlucHV0cyAgICA9IFtdO1xuXHR0aGlzLmNhblN3aXRjaCA9IG5ldyBSZWFjdGl2ZVZhciggbnVsbCApO1xuXHR0aGlzLmlzU2hvdyAgICA9IG5ldyBSZWFjdGl2ZVZhciggMSA9PT0gdGhpcy5pbmRleCApO1xuXG5cdC8qKlxuXHQgKiBAc2luY2UgMy4wLjFcblx0ICovXG5cdHRoaXMuYXV0b0ZvY3VzID0gd2luZG93LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LmF1dG9fZm9jdXM7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuNVxuXHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaW5pdGlhbE9ic2VydmVTdGF0ZSA9IGZhbHNlO1xufVxuXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmUgPSBmdW5jdGlvbiAoKSB7XG5cblx0aWYgKCAhdGhpcy5pc0xhc3QoKSApIHtcblx0XHR0aGlzLm9ic2VydmVJbnB1dHMoKTtcblx0fVxuXG5cdHRoaXMuY2FuU3dpdGNoLm1ha2UoKTtcblx0dGhpcy5pc1Nob3cubWFrZSgpO1xuXHR0aGlzLmlzU2hvdy53YXRjaCggKCkgPT4ge1xuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHR0aGlzLmlzU2hvdy5jdXJyZW50ID8gdGhpcy5vblNob3coKSA6IHRoaXMub25IaWRlKCk7XG5cdH0gKTtcblxuXHR0aGlzLmFkZEJ1dHRvbnNMaXN0ZW5lcnMoKTtcblxuXHQvKipcblx0ICogV2UgY2hlY2sgdGhlIGZpZWxkcyBvbmx5IGZvciB0aGUgZmlyc3QgcGFnZS5cblx0ICogQW5kIGZvciB0aGUgZm9sbG93aW5nLCB3ZSBkbyBpdCB3aGVuIHN3aXRjaGluZyBwYWdlc1xuXHQgKiAoaW4gdGhlIGBvblNob3dgIG1ldGhvZClcblx0ICpcblx0ICogV2UgZG8gdGhpcyBiZWNhdXNlIG9uIG90aGVyIHBhZ2VzIHRoZSBmaWVsZHMgYXJlIGFsd2F5c1xuXHQgKiBjaGVja2VkIHdpdGggYSBzdWNjZXNzZnVsIHJlc3VsdCBkdWUgdG8gdGhlIGNoZWNrIG9uIGBpc1Zpc2libGVgXG5cdCAqXG5cdCAqIEBzaW5jZSAzLjAuNVxuXHQgKlxuXHQgKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8yNzgxI2lzc3VlY29tbWVudC0xNTE3OTI4MjEzXG5cdCAqIEBzZWUgUGFnZVN0YXRlLm9uU2hvd1xuXHQgKiBAc2VlIElucHV0RGF0YS5pc1Zpc2libGVcblx0ICovXG5cdGlmICggdGhpcy5pc0ZpcnN0KCkgKSB7XG5cdFx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gdHJ1ZTtcblx0XHR0aGlzLnVwZGF0ZVN0YXRlQXN5bmMoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xuXHR9XG5cblx0dGhpcy51cGRhdGVPZmZzZXRCeVByb2dyZXNzKCk7XG5cblx0YWRkQWN0aW9uKFxuXHRcdCdqZXQuZmIub2JzZXJ2ZS5pbnB1dC5tYW51YWwnLFxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL3BhZ2Utc3RhdGUnLFxuXHRcdGlucHV0ID0+IHRoaXMub2JzZXJ2ZUlucHV0KCBpbnB1dC5ub2Rlc1sgMCBdICksXG5cdCk7XG5cblx0ZG9BY3Rpb24oICdqZXQuZmIubXVsdGlzdGVwLnBhZ2UuaW5pdCcsIHRoaXMgKTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZUlucHV0cyA9IGZ1bmN0aW9uICgpIHtcblx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbCggJ1tkYXRhLWpmYi1zeW5jXScgKSApIHtcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMub2JzZXJ2ZUlucHV0KCBub2RlICk7XG5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cdFx0aW5wdXQgJiYgZG9BY3Rpb24oXG5cdFx0XHQnamV0LmZiLm11bHRpc3RlcC5wYWdlLm9ic2VydmVkLmlucHV0Jyxcblx0XHRcdGlucHV0LFxuXHRcdFx0dGhpcyxcblx0XHQpO1xuXHR9XG59O1xuXG4vKipcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmVJbnB1dCA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0aWYgKFxuXHRcdCF0aGlzLmlzTm9kZUJlbG9uZ1RoaXMoIG5vZGUgKSB8fFxuXHRcdCFub2RlLmhhc093blByb3BlcnR5KCAnamZiU3luYycgKSB8fFxuXHRcdG5vZGUuamZiU3luYy5oYXNQYXJlbnQoKVxuXHQpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICogQHR5cGUge0lucHV0RGF0YX1cblx0ICovXG5cdGNvbnN0IGlucHV0ID0gbm9kZS5qZmJTeW5jO1xuXG5cdHRoaXMuaGFuZGxlSW5wdXRFbnRlciggaW5wdXQgKTtcblxuXHRpbnB1dC5sb2FkaW5nLndhdGNoKCAoKSA9PiB7XG5cdFx0aWYgKCBpbnB1dC5sb2FkaW5nLmN1cnJlbnQgKSB7XG5cdFx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gZmFsc2U7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy51cGRhdGVTdGF0ZSgpO1xuXHRcdH1cblx0fSApO1xuXG5cdGlmICggIWlucHV0LnJlcG9ydGluZy5yZXN0cmljdGlvbnMubGVuZ3RoICkge1xuXHRcdHJldHVybiBpbnB1dDtcblx0fVxuXG5cdHRoaXMuaW5wdXRzLnB1c2goIGlucHV0ICk7XG5cdGlucHV0LndhdGNoVmFsaWRpdHkoICgpID0+IHRoaXMudXBkYXRlU3RhdGUoKSApO1xuXG5cdHJldHVybiBpbnB1dDtcbn07XG4vKipcbiAqIEJ1dHRvbnMgZm9yIHN3aXRjaGluZyBiZXR3ZWVuIHBhZ2VzIGFyZSBoaWRkZW4gY29uZGl0aW9uYWwgYmxvY2tzXG4gKiB0aGF0IHBlcmZvcm0gdGhlaXIgZnVuY3Rpb24gKGRpc2FibGUpXG4gKiBpZiBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZSBmaWxsZWQgaW4gdGhlIHBhZ2UuXG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZUNvbmRpdGlvbmFsQmxvY2tzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoIHRoaXMuaXNMYXN0KCkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0J1tkYXRhLWpmYi1jb25kaXRpb25hbF0nLFxuXHQpICkge1xuXHRcdGlmICggIXRoaXMuaXNOb2RlQmVsb25nVGhpcyggbm9kZSApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGJsb2NrID0gY3JlYXRlQ29uZGl0aW9uYWxCbG9jayhcblx0XHRcdG5vZGUsXG5cdFx0XHR0aGlzLnN0YXRlLmdldFJvb3QoKSxcblx0XHQpO1xuXG5cdFx0Zm9yICggY29uc3QgY29uZGl0aW9uIG9mIGJsb2NrLmxpc3QuZ2V0Q29uZGl0aW9ucygpICkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1kZXB0aFxuXHRcdFx0aWYgKCBjb25kaXRpb24gaW5zdGFuY2VvZiBDb25kaXRpb25QYWdlU3RhdGVJdGVtICkge1xuXHRcdFx0XHRibG9jay5wYWdlID0gdGhpcztcblx0XHRcdFx0dGhpcy5jYW5Td2l0Y2gud2F0Y2goICgpID0+IGJsb2NrLmxpc3Qub25DaGFuZ2VSZWxhdGVkKCkgKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogQHNpbmNlIDMuMC41IFdlIGNoZWNrIHRoZSBmaWVsZHMgaWYgdGhpcyBpcyBkb25lIGZvciB0aGUgZmlyc3QgdGltZVxuICogQHNpbmNlIDMuMC4wIEludHJvZHVjZWRcbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5vblNob3cgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICk7XG5cblx0aWYgKCB0aGlzLmluaXRpYWxPYnNlcnZlU3RhdGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gdHJ1ZTtcblx0dGhpcy51cGRhdGVTdGF0ZUFzeW5jKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcbn07XG5QYWdlU3RhdGUucHJvdG90eXBlLm9uSGlkZSAgICAgID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCggJ2pldC1mb3JtLWJ1aWxkZXItcGFnZS0taGlkZGVuJyApO1xufTtcblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdGZvciAoIGNvbnN0IGlucHV0IG9mIHRoaXMuZ2V0SW5wdXRzKCkgKSB7XG5cdFx0aWYgKCBpbnB1dC5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS5jdXJyZW50IHx8XG5cdFx0XHRudWxsID09PSBpbnB1dC5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS5jdXJyZW50XG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IGZhbHNlO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSB0cnVlO1xufTtcblxuUGFnZVN0YXRlLnByb3RvdHlwZS51cGRhdGVTdGF0ZUFzeW5jICAgID0gYXN5bmMgZnVuY3Rpb24gKCBzaWxlbmNlID0gdHJ1ZSApIHtcblx0dHJ5IHtcblx0XHRhd2FpdCB2YWxpZGF0ZUlucHV0cyggdGhpcy5nZXRJbnB1dHMoKSwgc2lsZW5jZSApO1xuXG5cdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IHRydWU7XG5cdH1cblx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gZmFsc2U7XG5cdH1cbn07XG5QYWdlU3RhdGUucHJvdG90eXBlLmFkZEJ1dHRvbnNMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHN3aXRjaEJ1dHRvbnMgPSB0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX25leHQtcGFnZSwgLmpldC1mb3JtLWJ1aWxkZXJfX3ByZXYtcGFnZScsXG5cdCk7XG5cblx0Zm9yICggY29uc3Qgc3dpdGNoQnV0dG9uIG9mIHN3aXRjaEJ1dHRvbnMgKSB7XG5cdFx0aWYgKCAhdGhpcy5pc05vZGVCZWxvbmdUaGlzKCBzd2l0Y2hCdXR0b24gKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRjb25zdCBpc1ByZXYgPSBzd2l0Y2hCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXJfX3ByZXYtcGFnZScsXG5cdFx0KTtcblxuXHRcdHN3aXRjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuXHRcdFx0J2NsaWNrJyxcblx0XHRcdCgpID0+IHRoaXMuY2hhbmdlUGFnZSggaXNQcmV2ICksXG5cdFx0KTtcblx0fVxufTtcblBhZ2VTdGF0ZS5wcm90b3R5cGUuY2hhbmdlUGFnZSAgICAgICAgICA9IGFzeW5jIGZ1bmN0aW9uICggaXNCYWNrICkge1xuXHRpZiAoIGlzQmFjayApIHtcblx0XHR0aGlzLnN0YXRlLmluZGV4LmN1cnJlbnQgPSB0aGlzLmluZGV4IC0gMTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICggdGhpcy5nZXRMb2NrU3RhdGUoKS5jdXJyZW50ICkge1xuXHRcdGF3YWl0IHRoaXMud2FpdEZvclVubG9ja1N0YXRlKCk7XG5cdH1cblxuXHRhd2FpdCB0aGlzLnVwZGF0ZVN0YXRlQXN5bmMoIGZhbHNlICk7XG5cblx0aWYgKCB0aGlzLmNhblN3aXRjaC5jdXJyZW50ICkge1xuXHRcdHRoaXMuc3RhdGUuaW5kZXguY3VycmVudCA9IHRoaXMuaW5kZXggKyAxO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHR0aGlzLmF1dG9Gb2N1cyAmJiBmb2N1c09uSW52YWxpZElucHV0KCB0aGlzLmdldElucHV0cygpICk7XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS53YWl0Rm9yVW5sb2NrU3RhdGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcblx0XHRjb25zdCBjaGVja0xvY2tTdGF0ZSA9ICgpID0+IHtcblx0XHRcdGlmICggIXRoaXMuZ2V0TG9ja1N0YXRlKCkuY3VycmVudCApIHtcblx0XHRcdFx0cmVzb2x2ZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0VGltZW91dCggY2hlY2tMb2NrU3RhdGUsIDEwMCApO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y2hlY2tMb2NrU3RhdGUoKTtcblx0fSApO1xufTtcblBhZ2VTdGF0ZS5wcm90b3R5cGUuaXNOb2RlQmVsb25nVGhpcyAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0Y29uc3QgcGFyZW50UGFnZSA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXBhZ2UnICk7XG5cblx0cmV0dXJuIHBhcmVudFBhZ2UgPyBwYXJlbnRQYWdlLmlzRXF1YWxOb2RlKCB0aGlzLm5vZGUgKSA6IGZhbHNlO1xufTtcbi8qKlxuICogQHJldHVybiB7QXJyYXk8SW5wdXREYXRhPiB8ICp9XG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUuZ2V0SW5wdXRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcG9wdWxhdGVJbnB1dHMoIHRoaXMuaW5wdXRzICk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge0xvYWRpbmdSZWFjdGl2ZVZhcn1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5nZXRMb2NrU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdGNvbnN0IHJvb3QgPSB0aGlzLnN0YXRlLmdldFJvb3QoKTtcblx0Y29uc3QgZm9ybSA9IHJvb3Q/LnBhcmVudD8ucm9vdD8uZm9ybSA/PyByb290LmZvcm07XG5cblx0cmV0dXJuIGZvcm0ubG9ja1N0YXRlO1xufTtcblxuUGFnZVN0YXRlLnByb3RvdHlwZS5pc0xhc3QgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnN0YXRlLmlzTGFzdFBhZ2UoIHRoaXMgKTtcbn07XG5cbi8qKlxuICogQHNpbmNlIDMuMC41XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5pc0ZpcnN0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5zdGF0ZS5pc0ZpcnN0UGFnZSggdGhpcyApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YXxSZXBlYXRlckRhdGF9XG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUuaGFuZGxlSW5wdXRFbnRlciA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdGlucHV0Py5lbnRlcktleT8uYWRkRmlsdGVyKCAoKSA9PiB7XG5cdFx0dGhpcy5jaGFuZ2VQYWdlKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcblxuXHRcdC8vIHByZXZlbnQgc3VibWl0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9ICk7XG59O1xuXG5QYWdlU3RhdGUucHJvdG90eXBlLmdldE9mZnNldFRvcCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIGdldE9mZnNldFRvcCggdGhpcy5ub2RlICkgLSB0aGlzLm9mZnNldDtcbn07XG5cbi8qKlxuICogQHNpbmNlIDMuMi4zXG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlT2Zmc2V0QnlQcm9ncmVzcyA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5zdGF0ZT8ucHJvZ3Jlc3M/Lm5vZGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRoaXMub2Zmc2V0ICs9ICt0aGlzLnN0YXRlLnByb2dyZXNzLm5vZGUuY2xpZW50SGVpZ2h0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZVN0YXRlOyIsImZ1bmN0aW9uIFByb2dyZXNzQmFyKCBub2RlLCBzdGF0ZSApIHtcblx0LyoqXG5cdCAqIEBwYXJhbSBub2RlICB7SFRNTEVsZW1lbnR9XG5cdCAqIEBwYXJhbSBzdGF0ZSB7TXVsdGlTdGVwU3RhdGV9XG5cdCAqL1xuXHR0aGlzLm5vZGUgPSBub2RlO1xuXHR0aGlzLnN0YXRlID0gc3RhdGU7XG5cblx0dGhpcy5zdGF0ZS5pbmRleC53YXRjaCggKCkgPT4gdGhpcy51cGRhdGVJdGVtcygpICk7XG5cblx0dGhpcy51cGRhdGVJdGVtcyA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuc3RhdGUuaW5kZXg7XG5cblx0XHRmb3IgKCBjb25zdCBpdGVtIG9mIHRoaXMubm9kZS5jaGlsZHJlbiApIHtcblx0XHRcdGNvbnN0IHBhZ2VJbmRleCA9ICtpdGVtLmRhdGFzZXQucGFnZTtcblxuXHRcdFx0aWYgKCBwYWdlSW5kZXggPCBjdXJyZW50ICkge1xuXHRcdFx0XHR0aGlzLm1ha2VQYXNzZWQoIGl0ZW0gKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKCBjdXJyZW50ID09PSBwYWdlSW5kZXggKSB7XG5cdFx0XHRcdHRoaXMubWFrZUFjdGl2ZSggaXRlbSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMubWFrZU5vdFBhc3NlZCggaXRlbSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIGVsZW1lbnQge0hUTUxFbGVtZW50fVxuXHQgKi9cblx0dGhpcy5tYWtlQWN0aXZlID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ3Bhc3NlZC1wYWdlJyApO1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2FjdGl2ZS1wYWdlJyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZWxlbWVudCB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLm1ha2VQYXNzZWQgPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAncGFzc2VkLXBhZ2UnICk7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlLXBhZ2UnICk7XG5cdH07XG5cblx0dGhpcy5tYWtlTm90UGFzc2VkID0gZnVuY3Rpb24gKCBlbGVtZW50ICkge1xuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZS1wYWdlJywgJ3Bhc3NlZC1wYWdlJyApO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjsiLCJpbXBvcnQgTXVsdGlTdGVwU3RhdGUgZnJvbSAnLi9NdWx0aVN0ZXBTdGF0ZSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZU11bHRpU3RlcCggcm9vdE9yQmxvY2sgKSB7XG5cdGNvbnN0IG11bHRpc3RlcCA9IG5ldyBNdWx0aVN0ZXBTdGF0ZSgpO1xuXHRtdWx0aXN0ZXAuc2V0U2NvcGUoIHJvb3RPckJsb2NrICk7XG5cblx0Y29uc3QgcGFnZXMgPSBbXTtcblxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiBtdWx0aXN0ZXAuZ2V0U2NvcGVOb2RlKCkuY2hpbGROb2RlcyApIHtcblx0XHRpZiAoICFjaGlsZD8uY2xhc3NMaXN0Py5jb250YWlucyggJ2pldC1mb3JtLWJ1aWxkZXItcGFnZScgKSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHRwYWdlcy5wdXNoKCBjaGlsZCApO1xuXHR9XG5cblx0aWYgKCAhcGFnZXMubGVuZ3RoICkge1xuXHRcdHJldHVybiBtdWx0aXN0ZXA7XG5cdH1cblxuXHRtdWx0aXN0ZXAuc2V0UHJvZ3Jlc3MoKTtcblx0bXVsdGlzdGVwLnNldFBhZ2VzKCBwYWdlcyApO1xuXG5cdHJldHVybiBtdWx0aXN0ZXA7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZU11bHRpU3RlcCB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlTXVsdGlTdGVwIH0gZnJvbSAnLi9mdW5jdGlvbnMnO1xuaW1wb3J0IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25QYWdlU3RhdGVJdGVtJztcblxuY29uc3Qge1xuXHQgICAgICBhZGRBY3Rpb24sXG5cdCAgICAgIGFkZEZpbHRlcixcbiAgICAgIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5jb25zdCB7XG5cdCAgICAgIGdldFNjcm9sbFBhcmVudCxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwJyxcblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHRcdGNvbnN0IG11bHRpc3RlcCA9IGNyZWF0ZU11bHRpU3RlcCggb2JzZXJ2YWJsZSApO1xuXG5cdFx0aWYgKCAhbXVsdGlzdGVwLmdldFBhZ2VzKCk/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRvYnNlcnZhYmxlLm11bHRpc3RlcCA9IG11bHRpc3RlcDtcblx0XHRtdWx0aXN0ZXAub25SZWFkeSgpO1xuXHR9LFxuXHQxNSxcbik7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5jb25kaXRpb25hbC5pbml0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcCcsXG5cdGZ1bmN0aW9uICggYmxvY2sgKSB7XG5cdFx0Y29uc3QgbXVsdGlzdGVwID0gY3JlYXRlTXVsdGlTdGVwKCBibG9jayApO1xuXG5cdFx0aWYgKCAhbXVsdGlzdGVwLmdldFBhZ2VzKCk/Lmxlbmd0aCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRibG9jay5tdWx0aXN0ZXAgPSBtdWx0aXN0ZXA7XG5cdFx0bXVsdGlzdGVwLm9uUmVhZHkoKTtcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5jb25kaXRpb25hbC50eXBlcycsXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAnLFxuXHRmdW5jdGlvbiAoIGl0ZW1zICkge1xuXHRcdGl0ZW1zID0gWyBDb25kaXRpb25QYWdlU3RhdGVJdGVtLCAuLi5pdGVtcyBdO1xuXG5cdFx0cmV0dXJuIGl0ZW1zO1xuXHR9LFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm11bHRpc3RlcC5pbml0Jyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcC9hdXRvc2Nyb2xsJyxcblx0LyoqXG5cdCAqIEBwYXJhbSBtdWx0aXN0ZXAge011bHRpU3RlcFN0YXRlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBtdWx0aXN0ZXAgKSB7XG5cdFx0aWYgKCAhd2luZG93Py5KZXRGb3JtQnVpbGRlclNldHRpbmdzPy5zY3JvbGxfb25fbmV4dCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0bXVsdGlzdGVwLmluZGV4LndhdGNoKCAoKSA9PiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIEB0eXBlIHtQYWdlU3RhdGV8Ym9vbGVhbn1cblx0XHRcdCAqL1xuXHRcdFx0Y29uc3QgcGFnZSA9IG11bHRpc3RlcC5nZXRDdXJyZW50UGFnZSgpO1xuXG5cdFx0XHRjb25zdCBwYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoIHBhZ2Uubm9kZSApO1xuXHRcdFx0Y29uc3QgdG9wICAgID0gcGFnZS5nZXRPZmZzZXRUb3AoKTtcblxuXHRcdFx0cGFyZW50Py5zY3JvbGxUbz8uKCB7IHRvcCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0gKTtcblx0XHR9ICk7XG5cdH0sXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==