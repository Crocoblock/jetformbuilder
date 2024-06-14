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
    page_state
  }) {
    this.pageState = page_state;
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
   * @type {array<PageState>|*}
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
   * @returns {array<PageState>}
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
   * @returns {Observable}
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
   * @param page
   * @returns {boolean}
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
  createConditionalBlock,
  InputData
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
 * @property {InputData[]} inputs
 * @property {MultiStepState} state
 * @property {Element} node
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
  this.autoFocus && focusOnInvalidInput(this.getInputs());
};
PageState.prototype.isNodeBelongThis = function (node) {
  const parentPage = node.closest('.jet-form-builder-page');
  return parentPage ? parentPage.isEqualNode(this.node) : false;
};
/**
 * @returns {array<InputData>|*}
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
 * @returns {boolean}
 */
PageState.prototype.isFirst = function () {
  return this.state.isFirstPage(this);
};

/**
 * @param input {InputData|RepeaterData}
 */
PageState.prototype.handleInputEnter = function (input) {
  input?.enterKey?.addFilter(canSubmit => {
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
   * @param node {HTMLElement}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbXVsdGkuc3RlcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDekpBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFNQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUN4VEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9Db25kaXRpb25QYWdlU3RhdGVJdGVtLmpzIiwid2VicGFjazovL2pmYi8uL2Zyb250ZW5kL211bHRpLnN0ZXAvTXVsdGlTdGVwU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9QYWdlU3RhdGUuanMiLCJ3ZWJwYWNrOi8vamZiLy4vZnJvbnRlbmQvbXVsdGkuc3RlcC9Qcm9ncmVzc0Jhci5qcyIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmIvLi9mcm9udGVuZC9tdWx0aS5zdGVwL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBDb25kaXRpb25JdGVtIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSgpIHtcclxuXHRDb25kaXRpb25JdGVtLmNhbGwoIHRoaXMgKTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggb3B0aW9ucyApIHtcclxuXHRcdHJldHVybiAhIW9wdGlvbnM/LnBhZ2Vfc3RhdGU/Lmxlbmd0aDtcclxuXHR9O1xyXG5cdHRoaXMuc2V0T3B0aW9ucyAgPSBmdW5jdGlvbiAoIHsgcGFnZV9zdGF0ZSB9ICkge1xyXG5cdFx0dGhpcy5wYWdlU3RhdGUgPSBwYWdlX3N0YXRlO1xyXG5cdH07XHJcblx0dGhpcy5pc1Bhc3NlZCAgICA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IGNhblN3aXRjaCA9IHRoaXMubGlzdD8uYmxvY2s/LnBhZ2U/LmNhblN3aXRjaD8uY3VycmVudDtcclxuXHJcblx0XHRzd2l0Y2ggKCB0aGlzLnBhZ2VTdGF0ZSApIHtcclxuXHRcdFx0Y2FzZSAnYWN0aXZlJzpcclxuXHRcdFx0XHRyZXR1cm4gIWNhblN3aXRjaDtcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuQ29uZGl0aW9uUGFnZVN0YXRlSXRlbS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBDb25kaXRpb25JdGVtLnByb3RvdHlwZSApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uUGFnZVN0YXRlSXRlbTsiLCJpbXBvcnQgUGFnZVN0YXRlIGZyb20gJy4vUGFnZVN0YXRlJztcclxuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4vUHJvZ3Jlc3NCYXInO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIENvbmRpdGlvbmFsQmxvY2ssXHJcblx0ICAgICAgUmVhY3RpdmVWYXIsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGRvQWN0aW9uLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmZ1bmN0aW9uIE11bHRpU3RlcFN0YXRlKCkge1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7T2JzZXJ2YWJsZX1cclxuXHQgKi9cclxuXHR0aGlzLnJvb3QgPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBAdHlwZSB7Q29uZGl0aW9uYWxCbG9ja31cclxuXHQgKi9cclxuXHR0aGlzLmJsb2NrID0gbnVsbDtcclxuXHJcblx0LyoqXHJcblx0ICogQ3VycmVudCBwYWdlIGluZGV4XHJcblx0ICogQHR5cGUge1JlYWN0aXZlVmFyfVxyXG5cdCAqL1xyXG5cdHRoaXMuaW5kZXggPSBudWxsO1xyXG5cclxuXHQvKipcclxuXHQgKiBOb2RlIGVsZW1lbnRzIG9mIHBhZ2VzXHJcblx0ICogQHR5cGUge2FycmF5PFBhZ2VTdGF0ZT58Kn1cclxuXHQgKi9cclxuXHR0aGlzLmVsZW1lbnRzID0gW107XHJcblxyXG5cdHRoaXMuc2V0U2NvcGUgICAgPSBmdW5jdGlvbiAoIHJvb3RPckJsb2NrICkge1xyXG5cdFx0aWYgKCByb290T3JCbG9jayBpbnN0YW5jZW9mIENvbmRpdGlvbmFsQmxvY2sgKSB7XHJcblx0XHRcdHRoaXMuYmxvY2sgPSByb290T3JCbG9jaztcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJvb3QgPSByb290T3JCbG9jaztcclxuXHRcdH1cclxuXHR9O1xyXG5cdHRoaXMuc2V0UHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmluZGV4ID0gbmV3IFJlYWN0aXZlVmFyKCAxICk7XHJcblx0XHR0aGlzLmluZGV4Lm1ha2UoKTtcclxuXHRcdHRoaXMuaW5kZXgud2F0Y2goIHRoaXMub25DaGFuZ2VJbmRleC5iaW5kKCB0aGlzICkgKTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBjaGlsZCBvZiB0aGlzLmdldFNjb3BlTm9kZSgpLmNoaWxkcmVuICkge1xyXG5cdFx0XHRpZiAoICFjaGlsZC5tYXRjaGVzKCAnLmpldC1mb3JtLWJ1aWxkZXItcHJvZ3Jlc3MtcGFnZXMnICkgKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wcm9ncmVzcyA9IG5ldyBQcm9ncmVzc0JhciggY2hpbGQsIHRoaXMgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBwYWdlcyB7RWxlbWVudFtdfVxyXG5cdCAqL1xyXG5cdHRoaXMuc2V0UGFnZXMgPSBmdW5jdGlvbiAoIHBhZ2VzICkge1xyXG5cdFx0LyoqXHJcblx0XHQgKiBNdWx0aXN0ZXAgaXMgaW5pdGlhbGl6aW5nIGZvciBhbGwgZm9ybSBvclxyXG5cdFx0ICogc3BlY2lmaWMgY29uZGl0aW9uYWwgYmxvY2suXHJcblx0XHQgKlxyXG5cdFx0ICogV2UgbmVlZCB0byBzZXBhcmF0ZSBnbG9iYWwgJiBibG9jayBtdWx0aXN0ZXBcclxuXHRcdCAqL1xyXG5cdFx0dGhpcy5lbGVtZW50cyA9IHBhZ2VzLm1hcChcclxuXHRcdFx0cGFnZSA9PiBuZXcgUGFnZVN0YXRlKCBwYWdlLCB0aGlzICksXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuZWxlbWVudHMuZm9yRWFjaChcclxuXHRcdFx0cGFnZSA9PiBwYWdlLm9ic2VydmUoKSxcclxuXHRcdCk7XHJcblx0XHQvKipcclxuXHRcdCAqIFdlIHNob3VsZCBydW4gdGhpcyBtZXRob2Qgc2VwYXJhdGVseSwgYmVjYXVzZSBpdCBpbml0aWFsaXplc1xyXG5cdFx0ICogY29uZGl0aW9uYWwgYmxvY2tzLCB3aGljaCBjb3VsZCByZW1vdmUgc29tZSBwYXJ0IG9mIG5vZGVzIGZyb20gRE9NXHJcblx0XHQgKlxyXG5cdFx0ICogQW5kIHRoaXMgYnJlYWtzIGxvZ2ljIG9mIHRoZSBvdGhlciBtb2R1bGVzXHJcblx0XHQgKiAoc3dpdGNoLXBhZ2Utb24tY2hhbmdlIGZvciBleGFtcGxlKVxyXG5cdFx0ICovXHJcblx0XHR0aGlzLmVsZW1lbnRzLmZvckVhY2goXHJcblx0XHRcdHBhZ2UgPT4gcGFnZS5vYnNlcnZlQ29uZGl0aW9uYWxCbG9ja3MoKSxcclxuXHRcdCk7XHJcblxyXG5cdFx0Y29uc3QgeyBzdWJtaXR0ZXIgfSA9IHRoaXMuZ2V0Um9vdCgpLmdldFN1Ym1pdCgpO1xyXG5cdFx0Ly8gaXMgYWpheFxyXG5cdFx0aWYgKCAhc3VibWl0dGVyLmhhc093blByb3BlcnR5KCAnc3RhdHVzJyApICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c3VibWl0dGVyLndhdGNoUmVzZXQoICgpID0+IHtcclxuXHRcdFx0dGhpcy5pbmRleC5jdXJyZW50ID0gMTtcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdHRoaXMub25DaGFuZ2VJbmRleCAgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKCBjb25zdCBwYWdlIG9mIHRoaXMuZ2V0UGFnZXMoKSApIHtcclxuXHRcdFx0cGFnZS5pc1Nob3cuY3VycmVudCA9IHBhZ2UuaW5kZXggPT09IHRoaXMuaW5kZXguY3VycmVudDtcclxuXHRcdH1cclxuXHJcblx0XHR3aW5kb3c/LmpRdWVyeSggZG9jdW1lbnQgKT8udHJpZ2dlcihcclxuXHRcdFx0J2pldC1mb3JtLWJ1aWxkZXIvc3dpdGNoLXBhZ2UnLFxyXG5cdFx0KTtcclxuXHR9O1xyXG5cdHRoaXMuZ2V0Q3VycmVudFBhZ2UgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRmb3IgKCBjb25zdCBwYWdlIG9mIHRoaXMuZ2V0UGFnZXMoKSApIHtcclxuXHRcdFx0aWYgKCBwYWdlLmlzU2hvdy5jdXJyZW50ICkge1xyXG5cdFx0XHRcdHJldHVybiBwYWdlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge2FycmF5PFBhZ2VTdGF0ZT59XHJcblx0ICovXHJcblx0dGhpcy5nZXRQYWdlcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiB0aGlzLmVsZW1lbnRzO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHJldHVybiB7SFRNTEVsZW1lbnR8SFRNTEZvcm1FbGVtZW50fVxyXG5cdCAqL1xyXG5cdHRoaXMuZ2V0U2NvcGVOb2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmxvY2s/Lm5vZGUgPz8gdGhpcy5yb290LnJvb3ROb2RlO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogQHJldHVybnMge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0dGhpcy5nZXRSb290ID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYmxvY2s/LnJvb3QgPz8gdGhpcy5yb290O1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBwYWdlIHtQYWdlU3RhdGV9XHJcblx0ICovXHJcblx0dGhpcy5pc0xhc3RQYWdlID0gZnVuY3Rpb24gKCBwYWdlICkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudHMuYXQoIC0xICkgPT09IHBhZ2U7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQHNpbmNlIDMuMC41XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gcGFnZVxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdHRoaXMuaXNGaXJzdFBhZ2UgPSBmdW5jdGlvbiAoIHBhZ2UgKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50c1sgMCBdID09PSBwYWdlO1xyXG5cdH07XHJcblxyXG5cdHRoaXMub25SZWFkeSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGRvQWN0aW9uKCAnamV0LmZiLm11bHRpc3RlcC5pbml0JywgdGhpcyApO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11bHRpU3RlcFN0YXRlOyIsImltcG9ydCBDb25kaXRpb25QYWdlU3RhdGVJdGVtIGZyb20gJy4vQ29uZGl0aW9uUGFnZVN0YXRlSXRlbSc7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgUmVhY3RpdmVWYXIsXHJcblx0ICAgICAgY3JlYXRlQ29uZGl0aW9uYWxCbG9jayxcclxuXHQgICAgICBJbnB1dERhdGEsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHZhbGlkYXRlSW5wdXRzLFxyXG5cdCAgICAgIGdldE9mZnNldFRvcCxcclxuXHQgICAgICBmb2N1c09uSW52YWxpZElucHV0LFxyXG5cdCAgICAgIHBvcHVsYXRlSW5wdXRzLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnM7XHJcblxyXG5jb25zdCB7IGFkZEFjdGlvbiwgZG9BY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XHJcblxyXG4vKipcclxuICogQHByb3BlcnR5IHtJbnB1dERhdGFbXX0gaW5wdXRzXHJcbiAqIEBwcm9wZXJ0eSB7TXVsdGlTdGVwU3RhdGV9IHN0YXRlXHJcbiAqIEBwcm9wZXJ0eSB7RWxlbWVudH0gbm9kZVxyXG4gKi9cclxuZnVuY3Rpb24gUGFnZVN0YXRlKCBub2RlLCBzdGF0ZSApIHtcclxuXHR0aGlzLm5vZGUgICAgICA9IG5vZGU7XHJcblx0dGhpcy5pbmRleCAgICAgPSArbm9kZS5kYXRhc2V0LnBhZ2U7XHJcblx0dGhpcy5vZmZzZXQgICAgPSArbm9kZS5kYXRhc2V0LnBhZ2VPZmZzZXQ7XHJcblx0dGhpcy5zdGF0ZSAgICAgPSBzdGF0ZTtcclxuXHR0aGlzLmlucHV0cyAgICA9IFtdO1xyXG5cdHRoaXMuY2FuU3dpdGNoID0gbmV3IFJlYWN0aXZlVmFyKCBudWxsICk7XHJcblx0dGhpcy5pc1Nob3cgICAgPSBuZXcgUmVhY3RpdmVWYXIoIDEgPT09IHRoaXMuaW5kZXggKTtcclxuXHJcblx0LyoqXHJcblx0ICogQHNpbmNlIDMuMC4xXHJcblx0ICovXHJcblx0dGhpcy5hdXRvRm9jdXMgPSB3aW5kb3cuSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uYXV0b19mb2N1cztcclxuXHJcblx0LyoqXHJcblx0ICogQHNpbmNlIDMuMC41XHJcblx0ICogQHR5cGUge2Jvb2xlYW59XHJcblx0ICovXHJcblx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gZmFsc2U7XHJcbn1cclxuXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUub2JzZXJ2ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0aWYgKCAhdGhpcy5pc0xhc3QoKSApIHtcclxuXHRcdHRoaXMub2JzZXJ2ZUlucHV0cygpO1xyXG5cdH1cclxuXHJcblx0dGhpcy5jYW5Td2l0Y2gubWFrZSgpO1xyXG5cdHRoaXMuaXNTaG93Lm1ha2UoKTtcclxuXHR0aGlzLmlzU2hvdy53YXRjaCggKCkgPT4ge1xyXG5cdFx0dGhpcy5pc1Nob3cuY3VycmVudCA/IHRoaXMub25TaG93KCkgOiB0aGlzLm9uSGlkZSgpO1xyXG5cdH0gKTtcclxuXHJcblx0dGhpcy5hZGRCdXR0b25zTGlzdGVuZXJzKCk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFdlIGNoZWNrIHRoZSBmaWVsZHMgb25seSBmb3IgdGhlIGZpcnN0IHBhZ2UuXHJcblx0ICogQW5kIGZvciB0aGUgZm9sbG93aW5nLCB3ZSBkbyBpdCB3aGVuIHN3aXRjaGluZyBwYWdlc1xyXG5cdCAqIChpbiB0aGUgYG9uU2hvd2AgbWV0aG9kKVxyXG5cdCAqXHJcblx0ICogV2UgZG8gdGhpcyBiZWNhdXNlIG9uIG90aGVyIHBhZ2VzIHRoZSBmaWVsZHMgYXJlIGFsd2F5c1xyXG5cdCAqIGNoZWNrZWQgd2l0aCBhIHN1Y2Nlc3NmdWwgcmVzdWx0IGR1ZSB0byB0aGUgY2hlY2sgb24gYGlzVmlzaWJsZWBcclxuXHQgKlxyXG5cdCAqIEBzaW5jZSAzLjAuNVxyXG5cdCAqXHJcblx0ICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMjc4MSNpc3N1ZWNvbW1lbnQtMTUxNzkyODIxM1xyXG5cdCAqIEBzZWUgUGFnZVN0YXRlLm9uU2hvd1xyXG5cdCAqIEBzZWUgSW5wdXREYXRhLmlzVmlzaWJsZVxyXG5cdCAqL1xyXG5cdGlmICggdGhpcy5pc0ZpcnN0KCkgKSB7XHJcblx0XHR0aGlzLmluaXRpYWxPYnNlcnZlU3RhdGUgPSB0cnVlO1xyXG5cdFx0dGhpcy51cGRhdGVTdGF0ZUFzeW5jKCkudGhlbiggKCkgPT4ge30gKS5jYXRjaCggKCkgPT4ge30gKTtcclxuXHR9XHJcblxyXG5cdHRoaXMudXBkYXRlT2Zmc2V0QnlQcm9ncmVzcygpO1xyXG5cclxuXHRhZGRBY3Rpb24oXHJcblx0XHQnamV0LmZiLm9ic2VydmUuaW5wdXQubWFudWFsJyxcclxuXHRcdCdqZXQtZm9ybS1idWlsZGVyL3BhZ2Utc3RhdGUnLFxyXG5cdFx0aW5wdXQgPT4gdGhpcy5vYnNlcnZlSW5wdXQoIGlucHV0Lm5vZGVzWyAwIF0gKSxcclxuXHQpO1xyXG5cclxuXHRkb0FjdGlvbiggJ2pldC5mYi5tdWx0aXN0ZXAucGFnZS5pbml0JywgdGhpcyApO1xyXG59O1xyXG5cclxuUGFnZVN0YXRlLnByb3RvdHlwZS5vYnNlcnZlSW5wdXRzID0gZnVuY3Rpb24gKCkge1xyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoICdbZGF0YS1qZmItc3luY10nICkgKSB7XHJcblx0XHRjb25zdCBpbnB1dCA9IHRoaXMub2JzZXJ2ZUlucHV0KCBub2RlICk7XHJcblxyXG5cdFx0aW5wdXQgJiYgZG9BY3Rpb24oXHJcblx0XHRcdCdqZXQuZmIubXVsdGlzdGVwLnBhZ2Uub2JzZXJ2ZWQuaW5wdXQnLFxyXG5cdFx0XHRpbnB1dCxcclxuXHRcdFx0dGhpcyxcclxuXHRcdCk7XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBub2RlIHtFbGVtZW50fVxyXG4gKi9cclxuUGFnZVN0YXRlLnByb3RvdHlwZS5vYnNlcnZlSW5wdXQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0aWYgKFxyXG5cdFx0IXRoaXMuaXNOb2RlQmVsb25nVGhpcyggbm9kZSApIHx8XHJcblx0XHQhbm9kZS5oYXNPd25Qcm9wZXJ0eSggJ2pmYlN5bmMnICkgfHxcclxuXHRcdG5vZGUuamZiU3luYy5oYXNQYXJlbnQoKVxyXG5cdCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQHR5cGUge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRjb25zdCBpbnB1dCA9IG5vZGUuamZiU3luYztcclxuXHJcblx0dGhpcy5oYW5kbGVJbnB1dEVudGVyKCBpbnB1dCApO1xyXG5cclxuXHRpbnB1dC5sb2FkaW5nLndhdGNoKCAoKSA9PiB7XHJcblx0XHRpZiAoIGlucHV0LmxvYWRpbmcuY3VycmVudCApIHtcclxuXHRcdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdGUoKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdGlmICggIWlucHV0LnJlcG9ydGluZy5yZXN0cmljdGlvbnMubGVuZ3RoICkge1xyXG5cdFx0cmV0dXJuIGlucHV0O1xyXG5cdH1cclxuXHJcblx0dGhpcy5pbnB1dHMucHVzaCggaW5wdXQgKTtcclxuXHRpbnB1dC53YXRjaFZhbGlkaXR5KCAoKSA9PiB0aGlzLnVwZGF0ZVN0YXRlKCkgKTtcclxuXHJcblx0cmV0dXJuIGlucHV0O1xyXG59O1xyXG4vKipcclxuICogQnV0dG9ucyBmb3Igc3dpdGNoaW5nIGJldHdlZW4gcGFnZXMgYXJlIGhpZGRlbiBjb25kaXRpb25hbCBibG9ja3NcclxuICogdGhhdCBwZXJmb3JtIHRoZWlyIGZ1bmN0aW9uIChkaXNhYmxlKVxyXG4gKiBpZiBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZSBmaWxsZWQgaW4gdGhlIHBhZ2UuXHJcbiAqL1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLm9ic2VydmVDb25kaXRpb25hbEJsb2NrcyA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAoIHRoaXMuaXNMYXN0KCkgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgdGhpcy5ub2RlLnF1ZXJ5U2VsZWN0b3JBbGwoXHJcblx0XHQnW2RhdGEtamZiLWNvbmRpdGlvbmFsXScsXHJcblx0KSApIHtcclxuXHRcdGlmICggIXRoaXMuaXNOb2RlQmVsb25nVGhpcyggbm9kZSApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGJsb2NrID0gY3JlYXRlQ29uZGl0aW9uYWxCbG9jayhcclxuXHRcdFx0bm9kZSxcclxuXHRcdFx0dGhpcy5zdGF0ZS5nZXRSb290KCksXHJcblx0XHQpO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGNvbmRpdGlvbiBvZiBibG9jay5saXN0LmdldENvbmRpdGlvbnMoKSApIHtcclxuXHRcdFx0aWYgKCBjb25kaXRpb24gaW5zdGFuY2VvZiBDb25kaXRpb25QYWdlU3RhdGVJdGVtICkge1xyXG5cdFx0XHRcdGJsb2NrLnBhZ2UgPSB0aGlzO1xyXG5cdFx0XHRcdHRoaXMuY2FuU3dpdGNoLndhdGNoKCAoKSA9PiBibG9jay5saXN0Lm9uQ2hhbmdlUmVsYXRlZCgpICk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBzaW5jZSAzLjAuNSBXZSBjaGVjayB0aGUgZmllbGRzIGlmIHRoaXMgaXMgZG9uZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICogQHNpbmNlIDMuMC4wIEludHJvZHVjZWRcclxuICovXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUub25TaG93ID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMubm9kZS5jbGFzc0xpc3QucmVtb3ZlKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICk7XHJcblxyXG5cdGlmICggdGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5pbml0aWFsT2JzZXJ2ZVN0YXRlID0gdHJ1ZTtcclxuXHR0aGlzLnVwZGF0ZVN0YXRlQXN5bmMoKS50aGVuKCAoKSA9PiB7fSApLmNhdGNoKCAoKSA9PiB7fSApO1xyXG59O1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLm9uSGlkZSAgICAgID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMubm9kZS5jbGFzc0xpc3QuYWRkKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlLS1oaWRkZW4nICk7XHJcbn07XHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Zm9yICggY29uc3QgaW5wdXQgb2YgdGhpcy5nZXRJbnB1dHMoKSApIHtcclxuXHRcdGlmICggaW5wdXQucmVwb3J0aW5nLnZhbGlkaXR5U3RhdGUuY3VycmVudCB8fFxyXG5cdFx0XHRudWxsID09PSBpbnB1dC5yZXBvcnRpbmcudmFsaWRpdHlTdGF0ZS5jdXJyZW50XHJcblx0XHQpIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gZmFsc2U7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gdHJ1ZTtcclxufTtcclxuXHJcblBhZ2VTdGF0ZS5wcm90b3R5cGUudXBkYXRlU3RhdGVBc3luYyAgICA9IGFzeW5jIGZ1bmN0aW9uICggc2lsZW5jZSA9IHRydWUgKSB7XHJcblx0dHJ5IHtcclxuXHRcdGF3YWl0IHZhbGlkYXRlSW5wdXRzKCB0aGlzLmdldElucHV0cygpLCBzaWxlbmNlICk7XHJcblxyXG5cdFx0dGhpcy5jYW5Td2l0Y2guY3VycmVudCA9IHRydWU7XHJcblx0fVxyXG5cdGNhdGNoICggZXJyb3IgKSB7XHJcblx0XHR0aGlzLmNhblN3aXRjaC5jdXJyZW50ID0gZmFsc2U7XHJcblx0fVxyXG59O1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLmFkZEJ1dHRvbnNMaXN0ZW5lcnMgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3Qgc3dpdGNoQnV0dG9ucyA9IHRoaXMubm9kZS5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19uZXh0LXBhZ2UsIC5qZXQtZm9ybS1idWlsZGVyX19wcmV2LXBhZ2UnLFxyXG5cdCk7XHJcblxyXG5cdGZvciAoIGNvbnN0IHN3aXRjaEJ1dHRvbiBvZiBzd2l0Y2hCdXR0b25zICkge1xyXG5cdFx0aWYgKCAhdGhpcy5pc05vZGVCZWxvbmdUaGlzKCBzd2l0Y2hCdXR0b24gKSApIHtcclxuXHRcdFx0Y29udGludWU7XHJcblx0XHR9XHJcblx0XHRjb25zdCBpc1ByZXYgPSBzd2l0Y2hCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG5cdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fcHJldi1wYWdlJyxcclxuXHRcdCk7XHJcblxyXG5cdFx0c3dpdGNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXHJcblx0XHRcdCdjbGljaycsXHJcblx0XHRcdCgpID0+IHRoaXMuY2hhbmdlUGFnZSggaXNQcmV2ICksXHJcblx0XHQpO1xyXG5cdH1cclxufTtcclxuUGFnZVN0YXRlLnByb3RvdHlwZS5jaGFuZ2VQYWdlICAgICAgICAgID0gYXN5bmMgZnVuY3Rpb24gKCBpc0JhY2sgKSB7XHJcblx0aWYgKCBpc0JhY2sgKSB7XHJcblx0XHR0aGlzLnN0YXRlLmluZGV4LmN1cnJlbnQgPSB0aGlzLmluZGV4IC0gMTtcclxuXHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoIHRoaXMuZ2V0TG9ja1N0YXRlKCkuY3VycmVudCApIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGF3YWl0IHRoaXMudXBkYXRlU3RhdGVBc3luYyggZmFsc2UgKTtcclxuXHJcblx0aWYgKCB0aGlzLmNhblN3aXRjaC5jdXJyZW50ICkge1xyXG5cdFx0dGhpcy5zdGF0ZS5pbmRleC5jdXJyZW50ID0gdGhpcy5pbmRleCArIDE7XHJcblxyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0dGhpcy5hdXRvRm9jdXMgJiYgZm9jdXNPbkludmFsaWRJbnB1dCggdGhpcy5nZXRJbnB1dHMoKSApO1xyXG59O1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLmlzTm9kZUJlbG9uZ1RoaXMgICAgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0Y29uc3QgcGFyZW50UGFnZSA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXBhZ2UnICk7XHJcblxyXG5cdHJldHVybiBwYXJlbnRQYWdlID8gcGFyZW50UGFnZS5pc0VxdWFsTm9kZSggdGhpcy5ub2RlICkgOiBmYWxzZTtcclxufTtcclxuLyoqXHJcbiAqIEByZXR1cm5zIHthcnJheTxJbnB1dERhdGE+fCp9XHJcbiAqL1xyXG5QYWdlU3RhdGUucHJvdG90eXBlLmdldElucHV0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gcG9wdWxhdGVJbnB1dHMoIHRoaXMuaW5wdXRzICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHJldHVybiB7TG9hZGluZ1JlYWN0aXZlVmFyfVxyXG4gKi9cclxuUGFnZVN0YXRlLnByb3RvdHlwZS5nZXRMb2NrU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0LyoqXHJcblx0ICogQHR5cGUge09ic2VydmFibGV9XHJcblx0ICovXHJcblx0Y29uc3Qgcm9vdCA9IHRoaXMuc3RhdGUuZ2V0Um9vdCgpO1xyXG5cdGNvbnN0IGZvcm0gPSByb290Py5wYXJlbnQ/LnJvb3Q/LmZvcm0gPz8gcm9vdC5mb3JtO1xyXG5cclxuXHRyZXR1cm4gZm9ybS5sb2NrU3RhdGU7XHJcbn07XHJcblxyXG5QYWdlU3RhdGUucHJvdG90eXBlLmlzTGFzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5zdGF0ZS5pc0xhc3RQYWdlKCB0aGlzICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHNpbmNlIDMuMC41XHJcbiAqXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuUGFnZVN0YXRlLnByb3RvdHlwZS5pc0ZpcnN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLnN0YXRlLmlzRmlyc3RQYWdlKCB0aGlzICk7XHJcbn07XHJcblxyXG4vKipcclxuICogQHBhcmFtIGlucHV0IHtJbnB1dERhdGF8UmVwZWF0ZXJEYXRhfVxyXG4gKi9cclxuUGFnZVN0YXRlLnByb3RvdHlwZS5oYW5kbGVJbnB1dEVudGVyID0gZnVuY3Rpb24gKCBpbnB1dCApIHtcclxuXHRpbnB1dD8uZW50ZXJLZXk/LmFkZEZpbHRlciggY2FuU3VibWl0ID0+IHtcclxuXHRcdHRoaXMuY2hhbmdlUGFnZSgpLnRoZW4oICgpID0+IHt9ICkuY2F0Y2goICgpID0+IHt9ICk7XHJcblxyXG5cdFx0Ly8gcHJldmVudCBzdWJtaXRcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5QYWdlU3RhdGUucHJvdG90eXBlLmdldE9mZnNldFRvcCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gZ2V0T2Zmc2V0VG9wKCB0aGlzLm5vZGUgKSAtIHRoaXMub2Zmc2V0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBzaW5jZSAzLjIuM1xyXG4gKi9cclxuUGFnZVN0YXRlLnByb3RvdHlwZS51cGRhdGVPZmZzZXRCeVByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xyXG5cdGlmICggIXRoaXMuc3RhdGU/LnByb2dyZXNzPy5ub2RlICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHR0aGlzLm9mZnNldCArPSArdGhpcy5zdGF0ZS5wcm9ncmVzcy5ub2RlLmNsaWVudEhlaWdodDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VTdGF0ZTsiLCJmdW5jdGlvbiBQcm9ncmVzc0Jhciggbm9kZSwgc3RhdGUgKSB7XHJcblx0LyoqXHJcblx0ICogQHBhcmFtIG5vZGUge0hUTUxFbGVtZW50fVxyXG5cdCAqIEBwYXJhbSBzdGF0ZSB7TXVsdGlTdGVwU3RhdGV9XHJcblx0ICovXHJcblx0dGhpcy5ub2RlID0gbm9kZTtcclxuXHR0aGlzLnN0YXRlID0gc3RhdGU7XHJcblxyXG5cdHRoaXMuc3RhdGUuaW5kZXgud2F0Y2goICgpID0+IHRoaXMudXBkYXRlSXRlbXMoKSApO1xyXG5cclxuXHR0aGlzLnVwZGF0ZUl0ZW1zID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gPSB0aGlzLnN0YXRlLmluZGV4O1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IGl0ZW0gb2YgdGhpcy5ub2RlLmNoaWxkcmVuICkge1xyXG5cdFx0XHRjb25zdCBwYWdlSW5kZXggPSAraXRlbS5kYXRhc2V0LnBhZ2U7XHJcblxyXG5cdFx0XHRpZiAoIHBhZ2VJbmRleCA8IGN1cnJlbnQgKSB7XHJcblx0XHRcdFx0dGhpcy5tYWtlUGFzc2VkKCBpdGVtICk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSBpZiAoIGN1cnJlbnQgPT09IHBhZ2VJbmRleCApIHtcclxuXHRcdFx0XHR0aGlzLm1ha2VBY3RpdmUoIGl0ZW0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0aGlzLm1ha2VOb3RQYXNzZWQoIGl0ZW0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBlbGVtZW50IHtIVE1MRWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLm1ha2VBY3RpdmUgPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoICdwYXNzZWQtcGFnZScgKTtcclxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2FjdGl2ZS1wYWdlJyApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEBwYXJhbSBlbGVtZW50IHtIVE1MRWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLm1ha2VQYXNzZWQgPSBmdW5jdGlvbiAoIGVsZW1lbnQgKSB7XHJcblx0XHRlbGVtZW50LmNsYXNzTGlzdC5hZGQoICdwYXNzZWQtcGFnZScgKTtcclxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZS1wYWdlJyApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMubWFrZU5vdFBhc3NlZCA9IGZ1bmN0aW9uICggZWxlbWVudCApIHtcclxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSggJ2FjdGl2ZS1wYWdlJywgJ3Bhc3NlZC1wYWdlJyApO1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyOyIsImltcG9ydCBNdWx0aVN0ZXBTdGF0ZSBmcm9tICcuL011bHRpU3RlcFN0YXRlJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU11bHRpU3RlcCggcm9vdE9yQmxvY2sgKSB7XHJcblx0Y29uc3QgbXVsdGlzdGVwID0gbmV3IE11bHRpU3RlcFN0YXRlKCk7XHJcblx0bXVsdGlzdGVwLnNldFNjb3BlKCByb290T3JCbG9jayApO1xyXG5cclxuXHRjb25zdCBwYWdlcyA9IFtdO1xyXG5cclxuXHRmb3IgKCBjb25zdCBjaGlsZCBvZiBtdWx0aXN0ZXAuZ2V0U2NvcGVOb2RlKCkuY2hpbGROb2RlcyApIHtcclxuXHRcdGlmICggIWNoaWxkPy5jbGFzc0xpc3Q/LmNvbnRhaW5zKCAnamV0LWZvcm0tYnVpbGRlci1wYWdlJyApICkge1xyXG5cdFx0XHRjb250aW51ZTtcclxuXHRcdH1cclxuXHRcdHBhZ2VzLnB1c2goIGNoaWxkICk7XHJcblx0fVxyXG5cclxuXHRpZiAoICFwYWdlcy5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gbXVsdGlzdGVwO1xyXG5cdH1cclxuXHJcblx0bXVsdGlzdGVwLnNldFByb2dyZXNzKCk7XHJcblx0bXVsdGlzdGVwLnNldFBhZ2VzKCBwYWdlcyApO1xyXG5cclxuXHRyZXR1cm4gbXVsdGlzdGVwO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNdWx0aVN0ZXAgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZU11bHRpU3RlcCB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuaW1wb3J0IENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0gZnJvbSAnLi9Db25kaXRpb25QYWdlU3RhdGVJdGVtJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRBY3Rpb24sXHJcblx0ICAgICAgYWRkRmlsdGVyLFxyXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBnZXRTY3JvbGxQYXJlbnQsXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLm9ic2VydmUuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAnLFxyXG5cdGZ1bmN0aW9uICggb2JzZXJ2YWJsZSApIHtcclxuXHRcdGNvbnN0IG11bHRpc3RlcCA9IGNyZWF0ZU11bHRpU3RlcCggb2JzZXJ2YWJsZSApO1xyXG5cclxuXHRcdGlmICggIW11bHRpc3RlcC5nZXRQYWdlcygpPy5sZW5ndGggKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRvYnNlcnZhYmxlLm11bHRpc3RlcCA9IG11bHRpc3RlcDtcclxuXHRcdG11bHRpc3RlcC5vblJlYWR5KCk7XHJcblx0fSxcclxuXHQxNSxcclxuKTtcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLmluaXQnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL211bHRpLXN0ZXAnLFxyXG5cdGZ1bmN0aW9uICggYmxvY2sgKSB7XHJcblx0XHRjb25zdCBtdWx0aXN0ZXAgPSBjcmVhdGVNdWx0aVN0ZXAoIGJsb2NrICk7XHJcblxyXG5cdFx0aWYgKCAhbXVsdGlzdGVwLmdldFBhZ2VzKCk/Lmxlbmd0aCApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGJsb2NrLm11bHRpc3RlcCA9IG11bHRpc3RlcDtcclxuXHRcdG11bHRpc3RlcC5vblJlYWR5KCk7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLmNvbmRpdGlvbmFsLnR5cGVzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tdWx0aS1zdGVwJyxcclxuXHRmdW5jdGlvbiAoIGl0ZW1zICkge1xyXG5cdFx0aXRlbXMgPSBbIENvbmRpdGlvblBhZ2VTdGF0ZUl0ZW0sIC4uLml0ZW1zIF07XHJcblxyXG5cdFx0cmV0dXJuIGl0ZW1zO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2pldC5mYi5tdWx0aXN0ZXAuaW5pdCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbXVsdGktc3RlcC9hdXRvc2Nyb2xsJyxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gbXVsdGlzdGVwIHtNdWx0aVN0ZXBTdGF0ZX1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiAoIG11bHRpc3RlcCApIHtcclxuXHRcdGlmICggIXdpbmRvdz8uSmV0Rm9ybUJ1aWxkZXJTZXR0aW5ncz8uc2Nyb2xsX29uX25leHQgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdG11bHRpc3RlcC5pbmRleC53YXRjaCggKCkgPT4ge1xyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogQHR5cGUge1BhZ2VTdGF0ZXxib29sZWFufVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0Y29uc3QgcGFnZSA9IG11bHRpc3RlcC5nZXRDdXJyZW50UGFnZSgpO1xyXG5cclxuXHRcdFx0Y29uc3QgcGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KCBwYWdlLm5vZGUgKTtcclxuXHRcdFx0Y29uc3QgdG9wICAgID0gcGFnZS5nZXRPZmZzZXRUb3AoKTtcclxuXHJcblx0XHRcdHBhcmVudD8uc2Nyb2xsVG8/LiggeyB0b3AsIGJlaGF2aW9yOiAnc21vb3RoJyB9ICk7XHJcblx0XHR9ICk7XHJcblx0fSxcclxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=