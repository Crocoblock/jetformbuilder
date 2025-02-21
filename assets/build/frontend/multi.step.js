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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbXVsdGkuc3RlcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDMUpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3JVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9Db25kaXRpb25QYWdlU3RhdGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvTXVsdGlTdGVwU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9QYWdlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDb25kaXRpb25JdGVtIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xuXG5mdW5jdGlvbiBDb25kaXRpb25QYWdlU3RhdGVJdGVtKCkge1xuXHRDb25kaXRpb25JdGVtLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBvcHRpb25zICkge1xuXHRcdHJldHVybiAhIW9wdGlvbnM/LnBhZ2Vfc3RhdGU/Lmxlbmd0aDtcblx0fTtcblx0dGhpcy5zZXRPcHRpb25zICA9IGZ1bmN0aW9uICggeyBwYWdlX3N0YXRlOiBwYWdlU3RhdGUgfSApIHtcblx0XHR0aGlzLnBhZ2VTdGF0ZSA9IHBhZ2VTdGF0ZTtcblx0fTtcblx0dGhpcy5pc1Bhc3NlZCAgICA9IGZ1bmN0aW9uICgpIHtcblx0XHRjb25zdCBjYW5Td2l0Y2ggPSB0aGlzLmxpc3Q/LmJsb2NrPy5wYWdlPy5jYW5Td2l0Y2g/LmN1cnJlbnQ7XG5cblx0XHRzd2l0Y2ggKCB0aGlzLnBhZ2VTdGF0ZSApIHtcblx0XHRcdGNhc2UgJ2FjdGl2ZSc6XG5cdFx0XHRcdHJldHVybiAhY2FuU3dpdGNoO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fTtcbn1cblxuQ29uZGl0aW9uUGFnZVN0YXRlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25QYWdlU3RhdGVJdGVtOyIsImltcG9ydCBQYWdlU3RhdGUgZnJvbSAnLi9QYWdlU3RhdGUnO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xuXG5jb25zdCB7XG5cdCAgICAgIENvbmRpdGlvbmFsQmxvY2ssXG5cdCAgICAgIFJlYWN0aXZlVmFyLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHtcblx0ICAgICAgZG9BY3Rpb24sXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIE11bHRpU3RlcFN0YXRlKCkge1xuXG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMucm9vdCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEB0eXBlIHtDb25kaXRpb25hbEJsb2NrfVxuXHQgKi9cblx0dGhpcy5ibG9jayA9IG51bGw7XG5cblx0LyoqXG5cdCAqIEN1cnJlbnQgcGFnZSBpbmRleFxuXHQgKiBAdHlwZSB7UmVhY3RpdmVWYXJ9XG5cdCAqL1xuXHR0aGlzLmluZGV4ID0gbnVsbDtcblxuXHQvKipcblx0ICogTm9kZSBlbGVtZW50cyBvZiBwYWdlc1xuXHQgKiBAdHlwZSB7QXJyYXk8UGFnZVN0YXRlPiB8ICp9XG5cdCAqL1xuXHR0aGlzLmVsZW1lbnRzID0gW107XG5cblx0dGhpcy5zZXRTY29wZSAgICA9IGZ1bmN0aW9uICggcm9vdE9yQmxvY2sgKSB7XG5cdFx0aWYgKCByb290T3JCbG9jayBpbnN0YW5jZW9mIENvbmRpdGlvbmFsQmxvY2sgKSB7XG5cdFx0XHR0aGlzLmJsb2NrID0gcm9vdE9yQmxvY2s7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0gcm9vdE9yQmxvY2s7XG5cdFx0fVxuXHR9O1xuXHR0aGlzLnNldFByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdHRoaXMuaW5kZXggPSBuZXcgUmVhY3RpdmVWYXIoIDEgKTtcblx0XHR0aGlzLmluZGV4Lm1ha2UoKTtcblx0XHR0aGlzLmluZGV4LndhdGNoKCB0aGlzLm9uQ2hhbmdlSW5kZXguYmluZCggdGhpcyApICk7XG5cblx0XHRmb3IgKCBjb25zdCBjaGlsZCBvZiB0aGlzLmdldFNjb3BlTm9kZSgpLmNoaWxkcmVuICkge1xuXHRcdFx0aWYgKCAhY2hpbGQubWF0Y2hlcyggJy5qZXQtZm9ybS1idWlsZGVyLXByb2dyZXNzLXBhZ2VzJyApICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHRoaXMucHJvZ3Jlc3MgPSBuZXcgUHJvZ3Jlc3NCYXIoIGNoaWxkLCB0aGlzICk7XG5cdFx0fVxuXHR9O1xuXHQvKipcblx0ICogQHBhcmFtIHBhZ2VzIHtFbGVtZW50W119XG5cdCAqL1xuXHR0aGlzLnNldFBhZ2VzID0gZnVuY3Rpb24gKCBwYWdlcyApIHtcblx0XHQvKipcblx0XHQgKiBNdWx0aXN0ZXAgaXMgaW5pdGlhbGl6aW5nIGZvciBhbGwgZm9ybSBvclxuXHRcdCAqIHNwZWNpZmljIGNvbmRpdGlvbmFsIGJsb2NrLlxuXHRcdCAqXG5cdFx0ICogV2UgbmVlZCB0byBzZXBhcmF0ZSBnbG9iYWwgJiBibG9jayBtdWx0aXN0ZXBcblx0XHQgKi9cblx0XHR0aGlzLmVsZW1lbnRzID0gcGFnZXMubWFwKFxuXHRcdFx0cGFnZSA9PiBuZXcgUGFnZVN0YXRlKCBwYWdlLCB0aGlzICksXG5cdFx0KTtcblxuXHRcdHRoaXMuZWxlbWVudHMuZm9yRWFjaChcblx0XHRcdHBhZ2UgPT4gcGFnZS5vYnNlcnZlKCksXG5cdFx0KTtcblx0XHQvKipcblx0XHQgKiBXZSBzaG91bGQgcnVuIHRoaXMgbWV0aG9kIHNlcGFyYXRlbHksIGJlY2F1c2UgaXQgaW5pdGlhbGl6ZXNcblx0XHQgKiBjb25kaXRpb25hbCBibG9ja3MsIHdoaWNoIGNvdWxkIHJlbW92ZSBzb21lIHBhcnQgb2Ygbm9kZXMgZnJvbSBET01cblx0XHQgKlxuXHRcdCAqIEFuZCB0aGlzIGJyZWFrcyBsb2dpYyBvZiB0aGUgb3RoZXIgbW9kdWxlc1xuXHRcdCAqIChzd2l0Y2gtcGFnZS1vbi1jaGFuZ2UgZm9yIGV4YW1wbGUpXG5cdFx0ICovXG5cdFx0dGhpcy5lbGVtZW50cy5mb3JFYWNoKFxuXHRcdFx0cGFnZSA9PiBwYWdlLm9ic2VydmVDb25kaXRpb25hbEJsb2NrcygpLFxuXHRcdCk7XG5cblx0XHRjb25zdCB7IHN1Ym1pdHRlciB9ID0gdGhpcy5nZXRSb290KCkuZ2V0U3VibWl0KCk7XG5cdFx0Ly8gaXMgYWpheFxuXHRcdGlmICggIXN1Ym1pdHRlci5oYXNPd25Qcm9wZXJ0eSggJ3N0YXR1cycgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzdWJtaXR0ZXIud2F0Y2hSZXNldCggKCkgPT4ge1xuXHRcdFx0dGhpcy5pbmRleC5jdXJyZW50ID0gMTtcblx0XHR9ICk7XG5cdH07XG5cdHRoaXMub25DaGFuZ2VJbmRleCAgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Zm9yICggY29uc3QgcGFnZSBvZiB0aGlzLmdldFBhZ2VzKCkgKSB7XG5cdFx0XHRwYWdlLmlzU2hvdy5jdXJyZW50ID0gcGFnZS5pbmRleCA9PT0gdGhpcy5pbmRleC5jdXJyZW50O1xuXHRcdH1cblxuXHRcdHdpbmRvdz8ualF1ZXJ5KCBkb2N1bWVudCApPy50cmlnZ2VyKFxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXIvc3dpdGNoLXBhZ2UnLFxuXHRcdCk7XG5cdH07XG5cdHRoaXMuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Zm9yICggY29uc3QgcGFnZSBvZiB0aGlzLmdldFBhZ2VzKCkgKSB7XG5cdFx0XHRpZiAoIHBhZ2UuaXNTaG93LmN1cnJlbnQgKSB7XG5cdFx0XHRcdHJldHVybiBwYWdlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcblx0LyoqXG5cdCAqIEByZXR1cm4ge0FycmF5PFBhZ2VTdGF0ZT59XG5cdCAqL1xuXHR0aGlzLmdldFBhZ2VzID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRzO1xuXHR9O1xuXHQvKipcblx0ICogQHJldHVybiB7SFRNTEVsZW1lbnR8SFRNTEZvcm1FbGVtZW50fVxuXHQgKi9cblx0dGhpcy5nZXRTY29wZU5vZGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYmxvY2s/Lm5vZGUgPz8gdGhpcy5yb290LnJvb3ROb2RlO1xuXHR9O1xuXHQvKipcblx0ICogQHJldHVybiB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdHRoaXMuZ2V0Um9vdCA9IGZ1bmN0aW9uICgpIHtcblx0XHRyZXR1cm4gdGhpcy5ibG9jaz8ucm9vdCA/PyB0aGlzLnJvb3Q7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBwYWdlIHtQYWdlU3RhdGV9XG5cdCAqL1xuXHR0aGlzLmlzTGFzdFBhZ2UgPSBmdW5jdGlvbiAoIHBhZ2UgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHMuYXQoIC0xICkgPT09IHBhZ2U7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuNVxuXHQgKlxuXHQgKiBAcGFyYW0gIHBhZ2Vcblx0ICogQHJldHVybiB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuaXNGaXJzdFBhZ2UgPSBmdW5jdGlvbiAoIHBhZ2UgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHNbIDAgXSA9PT0gcGFnZTtcblx0fTtcblxuXHR0aGlzLm9uUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG5cdFx0ZG9BY3Rpb24oICdqZXQuZmIubXVsdGlzdGVwLmluaXQnLCB0aGlzICk7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE11bHRpU3RlcFN0YXRlOyIsImltcG9ydCBDb25kaXRpb25QYWdlU3RhdGVJdGVtIGZyb20gJy4vQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSc7XG5cbmNvbnN0IHtcblx0ICAgICAgUmVhY3RpdmVWYXIsXG5cdCAgICAgIGNyZWF0ZUNvbmRpdGlvbmFsQmxvY2ssXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHQgICAgICB2YWxpZGF0ZUlucHV0cyxcblx0ICAgICAgZ2V0T2Zmc2V0VG9wLFxuXHQgICAgICBmb2N1c09uSW52YWxpZElucHV0LFxuXHQgICAgICBwb3B1bGF0ZUlucHV0cyxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuY29uc3QgeyBhZGRBY3Rpb24sIGRvQWN0aW9uIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG4vKipcbiAqIEBwcm9wZXJ0eSB7SW5wdXREYXRhW119ICAgIGlucHV0cyBJbm5lciBpbnB1dHNcbiAqIEBwcm9wZXJ0eSB7TXVsdGlTdGVwU3RhdGV9IHN0YXRlICBNdWx0aXN0ZXAgc3RhdGVcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gICAgICAgIG5vZGUgICBSZWxhdGVkIG5vZGUsIGVsZW1lbnRcbiAqIEBwYXJhbSAgICB7RWxlbWVudH0gICAgICAgIG5vZGUgICBSZWxhdGVkIG5vZGUsIGVsZW1lbnRcbiAqIEBwYXJhbSAgICB7TXVsdGlTdGVwU3RhdGV9IHN0YXRlICBNdWx0aXN0ZXAgc3RhdGVcbiAqL1xuZnVuY3Rpb24gUGFnZVN0YXRlKCBub2RlLCBzdGF0ZSApIHtcblx0dGhpcy5ub2RlICAgICAgPSBub2RlO1xuXHR0aGlzLmluZGV4ICAgICA9ICtub2RlLmRhdGFzZXQucGFnZTtcblx0dGhpcy5vZmZzZXQgICAgPSArbm9kZS5kYXRhc2V0LnBhZ2VPZmZzZXQ7XG5cdHRoaXMuc3RhdGUgICAgID0gc3RhdGU7XG5cdHRoaXMuaW5wdXRzICAgID0gW107XG5cdHRoaXMuY2FuU3dpdGNoID0gbmV3IFJlYWN0aXZlVmFyKCBudWxsICk7XG5cdHRoaXMuaXNTaG93ICAgID0gbmV3IFJlYWN0aXZlVmFyKCAxID09PSB0aGlzLmluZGV4ICk7XG5cblx0LyoqXG5cdCAqIEBzaW5jZSAzLjAuMVxuXHQgKi9cblx0dGhpcy5hdXRvRm9jdXMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uYXV0b19mb2N1cztcblxuXHQvKipcblx0ICogQHNpbmNlIDMuMC41XG5cdCAqIEB0eXBlIHtib29sZWFufVxuXHQgKi9cblx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gZmFsc2U7XG59XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRpZiAoICF0aGlzLmlzTGFzdCgpICkge1xuXHRcdHRoaXMub2JzZXJ2ZUlucHV0cygpO1xuXHR9XG5cblx0dGhpcy5jYW5Td2l0Y2gubWFrZSgpO1xuXHR0aGlzLmlzU2hvdy5tYWtlKCk7XG5cdHRoaXMuaXNTaG93LndhdGNoKCAoKSA9PiB7XG5cdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdHRoaXMuaXNTaG93LmN1cnJlbnQgPyB0aGlzLm9uU2hvdygpIDogdGhpcy5vbkhpZGUoKTtcblx0fSApO1xuXG5cdHRoaXMuYWRkQnV0dG9uc0xpc3RlbmVycygpO1xuXG5cdC8qKlxuXHQgKiBXZSBjaGVjayB0aGUgZmllbGRzIG9ubHkgZm9yIHRoZSBmaXJzdCBwYWdlLlxuXHQgKiBBbmQgZm9yIHRoZSBmb2xsb3dpbmcsIHdlIGRvIGl0IHdoZW4gc3dpdGNoaW5nIHBhZ2VzXG5cdCAqIChpbiB0aGUgYG9uU2hvd2AgbWV0aG9kKVxuXHQgKlxuXHQgKiBXZSBkbyB0aGlzIGJlY2F1c2Ugb24gb3RoZXIgcGFnZXMgdGhlIGZpZWxkcyBhcmUgYWx3YXlzXG5cdCAqIGNoZWNrZWQgd2l0aCBhIHN1Y2Nlc3NmdWwgcmVzdWx0IGR1ZSB0byB0aGUgY2hlY2sgb24gYGlzVmlzaWJsZWBcblx0ICpcblx0ICogQHNpbmNlIDMuMC41XG5cdCAqXG5cdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzI3ODEjaXNzdWVjb21tZW50LTE1MTc5MjgyMTNcblx0ICogQHNlZSBQYWdlU3RhdGUub25TaG93XG5cdCAqIEBzZWUgSW5wdXREYXRhLmlzVmlzaWJsZVxuXHQgKi9cblx0aWYgKCB0aGlzLmlzRmlyc3QoKSApIHtcblx0XHR0aGlzLmluaXRpYWxPYnNlcnZlU3RhdGUgPSB0cnVlO1xuXHRcdHRoaXMudXBkYXRlU3RhdGVBc3luYygpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG5cdH1cblxuXHR0aGlzLnVwZGF0ZU9mZnNldEJ5UHJvZ3Jlc3MoKTtcblxuXHRhZGRBY3Rpb24oXG5cdFx0J2pldC5mYi5vYnNlcnZlLmlucHV0Lm1hbnVhbCcsXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXIvcGFnZS1zdGF0ZScsXG5cdFx0aW5wdXQgPT4gdGhpcy5vYnNlcnZlSW5wdXQoIGlucHV0Lm5vZGVzWyAwIF0gKSxcblx0KTtcblxuXHRkb0FjdGlvbiggJ2pldC5mYi5tdWx0aXN0ZXAucGFnZS5pbml0JywgdGhpcyApO1xufTtcblxuUGFnZVN0YXRlLnByb3RvdHlwZS5vYnNlcnZlSW5wdXRzID0gZnVuY3Rpb24gKCkge1xuXHRmb3IgKCBjb25zdCBub2RlIG9mIHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKCAnW2RhdGEtamZiLXN5bmNdJyApICkge1xuXHRcdGNvbnN0IGlucHV0ID0gdGhpcy5vYnNlcnZlSW5wdXQoIG5vZGUgKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0XHRpbnB1dCAmJiBkb0FjdGlvbihcblx0XHRcdCdqZXQuZmIubXVsdGlzdGVwLnBhZ2Uub2JzZXJ2ZWQuaW5wdXQnLFxuXHRcdFx0aW5wdXQsXG5cdFx0XHR0aGlzLFxuXHRcdCk7XG5cdH1cbn07XG5cbi8qKlxuICogQHBhcmFtIG5vZGUge0VsZW1lbnR9XG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZUlucHV0ID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRpZiAoXG5cdFx0IXRoaXMuaXNOb2RlQmVsb25nVGhpcyggbm9kZSApIHx8XG5cdFx0IW5vZGUuaGFzT3duUHJvcGVydHkoICdqZmJTeW5jJyApIHx8XG5cdFx0bm9kZS5qZmJTeW5jLmhhc1BhcmVudCgpXG5cdCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBAdHlwZSB7SW5wdXREYXRhfVxuXHQgKi9cblx0Y29uc3QgaW5wdXQgPSBub2RlLmpmYlN5bmM7XG5cblx0dGhpcy5oYW5kbGVJbnB1dEVudGVyKCBpbnB1dCApO1xuXG5cdGlucHV0LmxvYWRpbmcud2F0Y2goICgpID0+IHtcblx0XHRpZiAoIGlucHV0LmxvYWRpbmcuY3VycmVudCApIHtcblx0XHRcdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSBmYWxzZTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnVwZGF0ZVN0YXRlKCk7XG5cdFx0fVxuXHR9ICk7XG5cblx0aWYgKCAhaW5wdXQucmVwb3J0aW5nLnJlc3RyaWN0aW9ucy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIGlucHV0O1xuXHR9XG5cblx0dGhpcy5pbnB1dHMucHVzaCggaW5wdXQgKTtcblx0aW5wdXQud2F0Y2hWYWxpZGl0eSggKCkgPT4gdGhpcy51cGRhdGVTdGF0ZSgpICk7XG5cblx0cmV0dXJuIGlucHV0O1xufTtcbi8qKlxuICogQnV0dG9ucyBmb3Igc3dpdGNoaW5nIGJldHdlZW4gcGFnZXMgYXJlIGhpZGRlbiBjb25kaXRpb25hbCBibG9ja3NcbiAqIHRoYXQgcGVyZm9ybSB0aGVpciBmdW5jdGlvbiAoZGlzYWJsZSlcbiAqIGlmIGFsbCByZXF1aXJlZCBmaWVsZHMgYXJlIGZpbGxlZCBpbiB0aGUgcGFnZS5cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5vYnNlcnZlQ29uZGl0aW9uYWxCbG9ja3MgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICggdGhpcy5pc0xhc3QoKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0Zm9yICggY29uc3Qgbm9kZSBvZiB0aGlzLm5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHQnW2RhdGEtamZiLWNvbmRpdGlvbmFsXScsXG5cdCkgKSB7XG5cdFx0aWYgKCAhdGhpcy5pc05vZGVCZWxvbmdUaGlzKCBub2RlICkgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0Y29uc3QgYmxvY2sgPSBjcmVhdGVDb25kaXRpb25hbEJsb2NrKFxuXHRcdFx0bm9kZSxcblx0XHRcdHRoaXMuc3RhdGUuZ2V0Um9vdCgpLFxuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBjb25kaXRpb24gb2YgYmxvY2subGlzdC5nZXRDb25kaXRpb25zKCkgKSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWRlcHRoXG5cdFx0XHRpZiAoIGNvbmRpdGlvbiBpbnN0YW5jZW9mIENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0gKSB7XG5cdFx0XHRcdGJsb2NrLnBhZ2UgPSB0aGlzO1xuXHRcdFx0XHR0aGlzLmNhblN3aXRjaC53YXRjaCggKCkgPT4gYmxvY2subGlzdC5vbkNoYW5nZVJlbGF0ZWQoKSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBAc2luY2UgMy4wLjUgV2UgY2hlY2sgdGhlIGZpZWxkcyBpZiB0aGlzIGlzIGRvbmUgZm9yIHRoZSBmaXJzdCB0aW1lXG4gKiBAc2luY2UgMy4wLjAgSW50cm9kdWNlZFxuICovXG5QYWdlU3RhdGUucHJvdG90eXBlLm9uU2hvdyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoICdqZXQtZm9ybS1idWlsZGVyLXBhZ2UtLWhpZGRlbicgKTtcblxuXHRpZiAoIHRoaXMuaW5pdGlhbE9ic2VydmVTdGF0ZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR0aGlzLmluaXRpYWxPYnNlcnZlU3RhdGUgPSB0cnVlO1xuXHR0aGlzLnVwZGF0ZVN0YXRlQXN5bmMoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xufTtcblBhZ2VTdGF0ZS5wcm90b3R5cGUub25IaWRlICAgICAgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICk7XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS51cGRhdGVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcblx0XHRpZiAoIGlucHV0LnJlcG9ydGluZy52YWxpZGl0eVN0YXRlLmN1cnJlbnQgfHxcblx0XHRcdG51bGwgPT09IGlucHV0LnJlcG9ydGluZy52YWxpZGl0eVN0YXRlLmN1cnJlbnRcblx0XHQpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gZmFsc2U7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IHRydWU7XG59O1xuXG5QYWdlU3RhdGUucHJvdG90eXBlLnVwZGF0ZVN0YXRlQXN5bmMgICAgPSBhc3luYyBmdW5jdGlvbiAoIHNpbGVuY2UgPSB0cnVlICkge1xuXHR0cnkge1xuXHRcdGF3YWl0IHZhbGlkYXRlSW5wdXRzKCB0aGlzLmdldElucHV0cygpLCBzaWxlbmNlICk7XG5cblx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gdHJ1ZTtcblx0fVxuXHRjYXRjaCAoIGVycm9yICkge1xuXHRcdHRoaXMuY2FuU3dpdGNoLmN1cnJlbnQgPSBmYWxzZTtcblx0fVxufTtcblBhZ2VTdGF0ZS5wcm90b3R5cGUuYWRkQnV0dG9uc0xpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgc3dpdGNoQnV0dG9ucyA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fbmV4dC1wYWdlLCAuamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlJyxcblx0KTtcblxuXHRmb3IgKCBjb25zdCBzd2l0Y2hCdXR0b24gb2Ygc3dpdGNoQnV0dG9ucyApIHtcblx0XHRpZiAoICF0aGlzLmlzTm9kZUJlbG9uZ1RoaXMoIHN3aXRjaEJ1dHRvbiApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGNvbnN0IGlzUHJldiA9IHN3aXRjaEJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlJyxcblx0XHQpO1xuXG5cdFx0c3dpdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG5cdFx0XHQnY2xpY2snLFxuXHRcdFx0KCkgPT4gdGhpcy5jaGFuZ2VQYWdlKCBpc1ByZXYgKSxcblx0XHQpO1xuXHR9XG59O1xuUGFnZVN0YXRlLnByb3RvdHlwZS5jaGFuZ2VQYWdlICAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24gKCBpc0JhY2sgKSB7XG5cdGlmICggaXNCYWNrICkge1xuXHRcdHRoaXMuc3RhdGUuaW5kZXguY3VycmVudCA9IHRoaXMuaW5kZXggLSAxO1xuXG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aWYgKCB0aGlzLmdldExvY2tTdGF0ZSgpLmN1cnJlbnQgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0YXdhaXQgdGhpcy51cGRhdGVTdGF0ZUFzeW5jKCBmYWxzZSApO1xuXG5cdGlmICggdGhpcy5jYW5Td2l0Y2guY3VycmVudCApIHtcblx0XHR0aGlzLnN0YXRlLmluZGV4LmN1cnJlbnQgPSB0aGlzLmluZGV4ICsgMTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblx0dGhpcy5hdXRvRm9jdXMgJiYgZm9jdXNPbkludmFsaWRJbnB1dCggdGhpcy5nZXRJbnB1dHMoKSApO1xufTtcblBhZ2VTdGF0ZS5wcm90b3R5cGUuaXNOb2RlQmVsb25nVGhpcyAgICA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0Y29uc3QgcGFyZW50UGFnZSA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXBhZ2UnICk7XG5cblx0cmV0dXJuIHBhcmVudFBhZ2UgPyBwYXJlbnRQYWdlLmlzRXF1YWxOb2RlKCB0aGlzLm5vZGUgKSA6IGZhbHNlO1xufTtcbi8qKlxuICogQHJldHVybiB7QXJyYXk8SW5wdXREYXRhPiB8ICp9XG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUuZ2V0SW5wdXRzID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcG9wdWxhdGVJbnB1dHMoIHRoaXMuaW5wdXRzICk7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge0xvYWRpbmdSZWFjdGl2ZVZhcn1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5nZXRMb2NrU3RhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdC8qKlxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cblx0ICovXG5cdGNvbnN0IHJvb3QgPSB0aGlzLnN0YXRlLmdldFJvb3QoKTtcblx0Y29uc3QgZm9ybSA9IHJvb3Q/LnBhcmVudD8ucm9vdD8uZm9ybSA/PyByb290LmZvcm07XG5cblx0cmV0dXJuIGZvcm0ubG9ja1N0YXRlO1xufTtcblxuUGFnZVN0YXRlLnByb3RvdHlwZS5pc0xhc3QgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLnN0YXRlLmlzTGFzdFBhZ2UoIHRoaXMgKTtcbn07XG5cbi8qKlxuICogQHNpbmNlIDMuMC41XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS5pc0ZpcnN0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5zdGF0ZS5pc0ZpcnN0UGFnZSggdGhpcyApO1xufTtcblxuLyoqXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YXxSZXBlYXRlckRhdGF9XG4gKi9cblBhZ2VTdGF0ZS5wcm90b3R5cGUuaGFuZGxlSW5wdXRFbnRlciA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdGlucHV0Py5lbnRlcktleT8uYWRkRmlsdGVyKCAoKSA9PiB7XG5cdFx0Y29uc3QgZm9ybSA9IGlucHV0LnJvb3QuZm9ybTtcblxuXHRcdGlmICggZm9ybSApIHtcblx0XHRcdGlmICggdHJ1ZSA9PT0gZm9ybS5jYW5UcmlnZ2VyRW50ZXJTdWJtaXQgKSB7XG5cdFx0XHRcdHRoaXMuY2hhbmdlUGFnZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuY2hhbmdlUGFnZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XG5cdFx0fVxuXG5cdFx0Ly8gcHJldmVudCBzdWJtaXRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gKTtcbn07XG5cblBhZ2VTdGF0ZS5wcm90b3R5cGUuZ2V0T2Zmc2V0VG9wID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gZ2V0T2Zmc2V0VG9wKCB0aGlzLm5vZGUgKSAtIHRoaXMub2Zmc2V0O1xufTtcblxuLyoqXG4gKiBAc2luY2UgMy4yLjNcbiAqL1xuUGFnZVN0YXRlLnByb3RvdHlwZS51cGRhdGVPZmZzZXRCeVByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuXHRpZiAoICF0aGlzLnN0YXRlPy5wcm9ncmVzcz8ubm9kZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblx0dGhpcy5vZmZzZXQgKz0gK3RoaXMuc3RhdGUucHJvZ3Jlc3Mubm9kZS5jbGllbnRIZWlnaHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlU3RhdGU7IiwiZnVuY3Rpb24gUHJvZ3Jlc3NCYXIoIG5vZGUsIHN0YXRlICkge1xuXHQvKipcblx0ICogQHBhcmFtIG5vZGUgIHtIVE1MRWxlbWVudH1cblx0ICogQHBhcmFtIHN0YXRlIHtNdWx0aVN0ZXBTdGF0ZX1cblx0ICovXG5cdHRoaXMubm9kZSA9IG5vZGU7XG5cdHRoaXMuc3RhdGUgPSBzdGF0ZTtcblxuXHR0aGlzLnN0YXRlLmluZGV4LndhdGNoKCAoKSA9PiB0aGlzLnVwZGF0ZUl0ZW1zKCkgKTtcblxuXHR0aGlzLnVwZGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5zdGF0ZS5pbmRleDtcblxuXHRcdGZvciAoIGNvbnN0IGl0ZW0gb2YgdGhpcy5ub2RlLmNoaWxkcmVuICkge1xuXHRcdFx0Y29uc3QgcGFnZUluZGV4ID0gK2l0ZW0uZGF0YXNldC5wYWdlO1xuXG5cdFx0XHRpZiAoIHBhZ2VJbmRleCA8IGN1cnJlbnQgKSB7XG5cdFx0XHRcdHRoaXMubWFrZVBhc3NlZCggaXRlbSApO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAoIGN1cnJlbnQgPT09IHBhZ2VJbmRleCApIHtcblx0XHRcdFx0dGhpcy5tYWtlQWN0aXZlKCBpdGVtICk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5tYWtlTm90UGFzc2VkKCBpdGVtICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qKlxuXHQgKiBAcGFyYW0gZWxlbWVudCB7SFRNTEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLm1ha2VBY3RpdmUgPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAncGFzc2VkLXBhZ2UnICk7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnYWN0aXZlLXBhZ2UnICk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEBwYXJhbSBlbGVtZW50IHtIVE1MRWxlbWVudH1cblx0ICovXG5cdHRoaXMubWFrZVBhc3NlZCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYXNzZWQtcGFnZScgKTtcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdhY3RpdmUtcGFnZScgKTtcblx0fTtcblxuXHR0aGlzLm1ha2VOb3RQYXNzZWQgPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCAnYWN0aXZlLXBhZ2UnLCAncGFzc2VkLXBhZ2UnICk7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyOyIsImltcG9ydCBNdWx0aVN0ZXBTdGF0ZSBmcm9tICcuL011bHRpU3RlcFN0YXRlJztcblxuZnVuY3Rpb24gY3JlYXRlTXVsdGlTdGVwKCByb290T3JCbG9jayApIHtcblx0Y29uc3QgbXVsdGlzdGVwID0gbmV3IE11bHRpU3RlcFN0YXRlKCk7XG5cdG11bHRpc3RlcC5zZXRTY29wZSggcm9vdE9yQmxvY2sgKTtcblxuXHRjb25zdCBwYWdlcyA9IFtdO1xuXG5cdGZvciAoIGNvbnN0IGNoaWxkIG9mIG11bHRpc3RlcC5nZXRTY29wZU5vZGUoKS5jaGlsZE5vZGVzICkge1xuXHRcdGlmICggIWNoaWxkPy5jbGFzc0xpc3Q/LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlJyApICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdHBhZ2VzLnB1c2goIGNoaWxkICk7XG5cdH1cblxuXHRpZiAoICFwYWdlcy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIG11bHRpc3RlcDtcblx0fVxuXG5cdG11bHRpc3RlcC5zZXRQcm9ncmVzcygpO1xuXHRtdWx0aXN0ZXAuc2V0UGFnZXMoIHBhZ2VzICk7XG5cblx0cmV0dXJuIG11bHRpc3RlcDtcbn1cblxuZXhwb3J0IHsgY3JlYXRlTXVsdGlTdGVwIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVNdWx0aVN0ZXAgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSBmcm9tICcuL0NvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0nO1xuXG5jb25zdCB7XG5cdCAgICAgIGFkZEFjdGlvbixcblx0ICAgICAgYWRkRmlsdGVyLFxuICAgICAgfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmNvbnN0IHtcblx0ICAgICAgZ2V0U2Nyb2xsUGFyZW50LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIub2JzZXJ2ZS5hZnRlcicsXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAnLFxuXHRmdW5jdGlvbiAoIG9ic2VydmFibGUgKSB7XG5cdFx0Y29uc3QgbXVsdGlzdGVwID0gY3JlYXRlTXVsdGlTdGVwKCBvYnNlcnZhYmxlICk7XG5cblx0XHRpZiAoICFtdWx0aXN0ZXAuZ2V0UGFnZXMoKT8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdG9ic2VydmFibGUubXVsdGlzdGVwID0gbXVsdGlzdGVwO1xuXHRcdG11bHRpc3RlcC5vblJlYWR5KCk7XG5cdH0sXG5cdDE1LFxuKTtcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLmluaXQnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwJyxcblx0ZnVuY3Rpb24gKCBibG9jayApIHtcblx0XHRjb25zdCBtdWx0aXN0ZXAgPSBjcmVhdGVNdWx0aVN0ZXAoIGJsb2NrICk7XG5cblx0XHRpZiAoICFtdWx0aXN0ZXAuZ2V0UGFnZXMoKT8ubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGJsb2NrLm11bHRpc3RlcCA9IG11bHRpc3RlcDtcblx0XHRtdWx0aXN0ZXAub25SZWFkeSgpO1xuXHR9LFxuKTtcblxuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLnR5cGVzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcCcsXG5cdGZ1bmN0aW9uICggaXRlbXMgKSB7XG5cdFx0aXRlbXMgPSBbIENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0sIC4uLml0ZW1zIF07XG5cblx0XHRyZXR1cm4gaXRlbXM7XG5cdH0sXG4pO1xuXG5hZGRBY3Rpb24oXG5cdCdqZXQuZmIubXVsdGlzdGVwLmluaXQnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwL2F1dG9zY3JvbGwnLFxuXHQvKipcblx0ICogQHBhcmFtIG11bHRpc3RlcCB7TXVsdGlTdGVwU3RhdGV9XG5cdCAqL1xuXHRmdW5jdGlvbiAoIG11bHRpc3RlcCApIHtcblx0XHRpZiAoICF3aW5kb3c/LkpldEZvcm1CdWlsZGVyU2V0dGluZ3M/LnNjcm9sbF9vbl9uZXh0ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRtdWx0aXN0ZXAuaW5kZXgud2F0Y2goICgpID0+IHtcblx0XHRcdC8qKlxuXHRcdFx0ICogQHR5cGUge1BhZ2VTdGF0ZXxib29sZWFufVxuXHRcdFx0ICovXG5cdFx0XHRjb25zdCBwYWdlID0gbXVsdGlzdGVwLmdldEN1cnJlbnRQYWdlKCk7XG5cblx0XHRcdGNvbnN0IHBhcmVudCA9IGdldFNjcm9sbFBhcmVudCggcGFnZS5ub2RlICk7XG5cdFx0XHRjb25zdCB0b3AgICAgPSBwYWdlLmdldE9mZnNldFRvcCgpO1xuXG5cdFx0XHRwYXJlbnQ/LnNjcm9sbFRvPy4oIHsgdG9wLCBiZWhhdmlvcjogJ3Ntb290aCcgfSApO1xuXHRcdH0gKTtcblx0fSxcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9