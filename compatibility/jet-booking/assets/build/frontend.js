/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/CheckOutInput.js":
/*!***********************************!*\
  !*** ./frontend/CheckOutInput.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./frontend/constants.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ "./frontend/functions.js");


const {
  InputData
} = JetFormBuilderAbstract;
const {
  isEmpty
} = JetFormBuilderFunctions;
function CheckOutInput() {
  InputData.call(this);

  /**
   * Sanitize value to the convenient format
   */
  this.sanitize(function formatDate(dates) {
    if (isEmpty(dates) || !Array.isArray(dates) && 'string' !== typeof dates) {
      return [];
    }
    if (Array.isArray(dates)) {
      return dates;
    }
    dates = dates.split(' - ');
    if (!dates.length) {
      return [];
    }

    // convert to default format
    return dates.map(currentDate => moment(currentDate, (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCheckoutFieldFormat)()).format(_constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT));
  });
  this.isSupported = function (node) {
    return 'checkin-checkout' === node.dataset.field;
  };
  this.addListeners = function () {
    // disable aria attributes
    this.reporting.makeInvalid = () => {};
    this.reporting.makeValid = () => {};
    const [node] = this.nodes;

    /**
     * This handler could run earlier,
     * than InputData.prototype.makeReactive could finish work
     *
     * In this case we should keep our sanitizers
     */
    jQuery(node).on('change.JetFormBuilderMain', () => {
      this.value.current = this.value.isMaked ? node.value : this.value.applySanitizers(node.value);
    });
    const inputs = node.parentElement.querySelectorAll('.jet-abaf-field__input');
    for (const input of inputs) {
      input.addEventListener('blur', () => this.reportOnBlur());
    }
  };
  this.setValue = function () {
    this.value.current = this.value.applySanitizers(this.nodes[0].value);
  };

  /**
   * @link https://github.com/Crocoblock/issues-tracker/issues/1562
   *
   * @returns {boolean}
   */
  this.checkIsRequired = function () {
    const [node] = this.nodes;
    if (node.required) {
      return true;
    }
    return !!node.parentElement.querySelector('.jet-abaf-field__input[required]');
  };
  this.setNode = function (node) {
    InputData.prototype.setNode.call(this, node);
    this.inputType = 'checkin-checkout';
    if ('single' === (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCheckoutFieldLayout)()) {
      return;
    }
    const fieldsWrapper = node.closest('.jet-abaf-separate-fields');
    this.nodes.push(...fieldsWrapper.querySelectorAll('.jet-abaf-field__input[type="text"]'), fieldsWrapper);
  };
}
CheckOutInput.prototype = Object.create(InputData.prototype);
CheckOutInput.prototype.parseValueForCalculated = function () {
  if (!this.getValue()?.length) {
    return 0;
  }

  // because the global JetBooking object was added recently
  if (window?.JetBooking?.calcBookedDates) {
    /**
     * We need to transform dates from 'YYYY-MM-DD' format to
     * users format, which they have chosen
     * in Check-in/check-out dates field settings, for correct usage of
     * `JetBooking.calcBookedDates` method
     *
     * @type {string[]}
     */
    const dates = this.getValue().map(singleDate => moment(singleDate, _constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT).format((0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCheckoutFieldFormat)()));
    return JetBooking.calcBookedDates(dates.join(' - '));
  }
  if ((0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCheckoutDataSetting)('one_day_bookings')) {
    return 1;
  }

  /**
   * Just pass moment function, because we store dates in
   * ISO 8601 string format
   *
   * @type {*[]}
   */
  const dates = this.value.current.map(date => moment(date));
  let value = dates[1].diff(dates[0], 'days');
  value = Number(value);
  if (!(0,_functions__WEBPACK_IMPORTED_MODULE_1__.getCheckoutDataSetting)('per_nights')) {
    value++;
  }
  return value;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckOutInput);

/***/ }),

/***/ "./frontend/CheckOutSignal.js":
/*!************************************!*\
  !*** ./frontend/CheckOutSignal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CheckOutInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckOutInput */ "./frontend/CheckOutInput.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./frontend/constants.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./frontend/functions.js");



const {
  BaseSignal
} = JetFormBuilderAbstract;
function CheckOutSignal() {
  BaseSignal.call(this);
  this.isSupported = function (node, input) {
    return input instanceof _CheckOutInput__WEBPACK_IMPORTED_MODULE_0__["default"];
  };
  this.runSignal = function (prevValue) {
    'single' === (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getCheckoutFieldLayout)() ? this.runSignalForSingle() : this.runSignalForSeparate(prevValue);
  };
  this.runSignalForSingle = function () {
    const [dateInput] = this.input.nodes;
    const {
      current
    } = this.input.value;
    if (!current.length) {
      dateInput.value = '';
      return;
    }
    dateInput.value = current.map(date => moment(date, _constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT).format((0,_functions__WEBPACK_IMPORTED_MODULE_2__.getCheckoutFieldFormat)())).join(' - ');
  };
  this.runSignalForSeparate = function (prevValue) {
    const [, startDate, endDate] = this.input.nodes;
    const {
      current
    } = this.input.value;
    if (current?.toString?.() === prevValue?.toString?.()) {
      return;
    }
    if (!current.length) {
      startDate.value = '';
      endDate.value = '';
      this.updateCalendar();
      return;
    }
    startDate.value = moment(current[0], _constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT).format((0,_functions__WEBPACK_IMPORTED_MODULE_2__.getCheckoutFieldFormat)());
    endDate.value = moment(current[1] ?? current[0],
    // for one-day bookings
    _constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT).format((0,_functions__WEBPACK_IMPORTED_MODULE_2__.getCheckoutFieldFormat)());
    this.updateCalendar();
  };

  // only for separate layout
  this.updateCalendar = function () {
    const {
      current
    } = this.input.value;
    const [,,, wrapper] = this.input.nodes;
    if (!current.length) {
      jQuery(wrapper).data('dateRangePicker').clear();
      return;
    }
    const fieldFormat = (0,_functions__WEBPACK_IMPORTED_MODULE_2__.getCheckoutFieldFormat)();

    // console.log( current );
    jQuery(wrapper).data('dateRangePicker').setDateRange(moment(current[0]).format(fieldFormat),
    // for one-day bookings
    moment(current[1] ?? current[0]).format(fieldFormat), true);
  };
}
CheckOutSignal.prototype = Object.create(BaseSignal.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckOutSignal);

/***/ }),

/***/ "./frontend/constants.js":
/*!*******************************!*\
  !*** ./frontend/constants.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FORMAT: () => (/* binding */ FORMAT)
/* harmony export */ });
const FORMAT = 'YYYY-MM-DD';


/***/ }),

/***/ "./frontend/functions.js":
/*!*******************************!*\
  !*** ./frontend/functions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCheckoutDataSetting: () => (/* binding */ getCheckoutDataSetting),
/* harmony export */   getCheckoutFieldFormat: () => (/* binding */ getCheckoutFieldFormat),
/* harmony export */   getCheckoutFieldLayout: () => (/* binding */ getCheckoutFieldLayout)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./frontend/constants.js");

function getCheckoutFieldFormat() {
  return window?.JetABAFInput?.field_format ?? _constants__WEBPACK_IMPORTED_MODULE_0__.FORMAT;
}
function getCheckoutFieldLayout() {
  return window?.JetABAFInput?.layout ?? 'single';
}

/**
 * @param name {String}
 * @returns {*}
 */
function getCheckoutDataSetting(name) {
  return window?.JetABAFData?.[name];
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
/*!*********************************!*\
  !*** ./frontend/jet-booking.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CheckOutInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CheckOutInput */ "./frontend/CheckOutInput.js");
/* harmony import */ var _CheckOutSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckOutSignal */ "./frontend/CheckOutSignal.js");


const {
  addAction,
  addFilter
} = JetPlugins.hooks;
addAction('jet.fb.observe.before', 'jet-form-builder/booking-compatibility',
/**
 * @param observable {Observable}
 */
function (observable) {
  const {
    rootNode
  } = observable;
  for (const checkOutWrapper of rootNode.querySelectorAll('.field-type-check-in-out')) {
    const input = checkOutWrapper.querySelector('input[data-field="checkin-checkout"]');
    if (!input) {
      continue;
    }
    input.dataset.jfbSync = 1;
  }
});
addFilter('jet.fb.inputs', 'jet-form-builder/booking-compatibility', function (inputs) {
  inputs = [_CheckOutInput__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/booking-compatibility', function (signals) {
  signals = [_CheckOutSignal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});

/**
 * @see   https://github.com/Crocoblock/issues-tracker/issues/13730
 * @since 3.4.5.1
 */
addFilter('jet.fb.formula.node.exists', 'jet-form-builder/booking-compatibility', function (nodeExists, fieldName, formula) {
  const matches = fieldName.match(/ADVANCED_PRICE::([\w\-]+)/);
  if (matches && matches?.length) {
    nodeExists = formula.root.rootNode[matches[1]];
  }
  return nodeExists;
});
addFilter('jet.fb.onCalculate.part', 'jet-form-builder/booking-compatibility',
/**
 * @param macroPart
 * @param formula {CalculatedFormula}
 * @return {*}
 */
function (macroPart, formula) {
  if ('string' !== typeof macroPart) {
    return macroPart;
  }
  const matches = macroPart.match(/ADVANCED_PRICE::([\w\-]+)/);
  if (!matches?.length || !formula?.input) {
    return macroPart;
  }
  const [, fieldName] = matches;
  const checkoutField = formula.input.root.getInput(fieldName);
  if (!checkoutField) {
    return 0;
  }
  formula.cachedFields = formula.cachedFields || [];
  if (!formula.cachedFields.includes(checkoutField.name)) {
    formula.cachedFields.push(checkoutField.name);
    checkoutField.watch(() => formula.setResult());
  }
  return macroPart;
});
addFilter('jet.fb.calculated.callback', 'jet-form-builder/booking-field-parser',
/**
 * @param value {mixed|Boolean}
 * @param input {InputData|CheckOutInput}
 * @param calculatedInput {CalculatedData}
 */
function (value, input, calculatedInput) {
  if (false !== value || 'checkin-checkout' !== input.inputType) {
    return value;
  }
  return input.parseValueForCalculated();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBS0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FDM0ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBR0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWJvb2tpbmcvLi9mcm9udGVuZC9DaGVja091dElucHV0LmpzIiwid2VicGFjazovL2pmYi1ib29raW5nLy4vZnJvbnRlbmQvQ2hlY2tPdXRTaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLWJvb2tpbmcvLi9mcm9udGVuZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vamZiLWJvb2tpbmcvLi9mcm9udGVuZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLWJvb2tpbmcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWJvb2tpbmcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1ib29raW5nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWJvb2tpbmcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItYm9va2luZy8uL2Zyb250ZW5kL2pldC1ib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZPUk1BVCB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7XG5cdGdldENoZWNrb3V0RGF0YVNldHRpbmcsXG5cdGdldENoZWNrb3V0RmllbGRGb3JtYXQsXG5cdGdldENoZWNrb3V0RmllbGRMYXlvdXQsXG59IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBJbnB1dERhdGEsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBDaGVja091dElucHV0KCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdC8qKlxuXHQgKiBTYW5pdGl6ZSB2YWx1ZSB0byB0aGUgY29udmVuaWVudCBmb3JtYXRcblx0ICovXG5cdHRoaXMuc2FuaXRpemUoIGZ1bmN0aW9uIGZvcm1hdERhdGUoIGRhdGVzICkge1xuXHRcdGlmICggaXNFbXB0eSggZGF0ZXMgKSB8fCAoXG5cdFx0XHQhQXJyYXkuaXNBcnJheSggZGF0ZXMgKSAmJiAnc3RyaW5nJyAhPT0gdHlwZW9mIGRhdGVzXG5cdFx0KSApIHtcblx0XHRcdHJldHVybiBbXTtcblx0XHR9XG5cdFx0aWYgKCBBcnJheS5pc0FycmF5KCBkYXRlcyApICkge1xuXHRcdFx0cmV0dXJuIGRhdGVzO1xuXHRcdH1cblx0XHRkYXRlcyA9IGRhdGVzLnNwbGl0KCAnIC0gJyApO1xuXG5cdFx0aWYgKCAhZGF0ZXMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIFtdO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdG8gZGVmYXVsdCBmb3JtYXRcblx0XHRyZXR1cm4gZGF0ZXMubWFwKFxuXHRcdFx0Y3VycmVudERhdGUgPT4gbW9tZW50KFxuXHRcdFx0XHRjdXJyZW50RGF0ZSxcblx0XHRcdFx0Z2V0Q2hlY2tvdXRGaWVsZEZvcm1hdCgpLFxuXHRcdFx0KS5mb3JtYXQoIEZPUk1BVCApLFxuXHRcdCk7XG5cdH0gKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHRcdHJldHVybiAnY2hlY2tpbi1jaGVja291dCcgPT09IG5vZGUuZGF0YXNldC5maWVsZDtcblx0fTtcblxuXHR0aGlzLmFkZExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0XHQvLyBkaXNhYmxlIGFyaWEgYXR0cmlidXRlc1xuXHRcdHRoaXMucmVwb3J0aW5nLm1ha2VJbnZhbGlkID0gKCkgPT4ge307XG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcblxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdC8qKlxuXHRcdCAqIFRoaXMgaGFuZGxlciBjb3VsZCBydW4gZWFybGllcixcblx0XHQgKiB0aGFuIElucHV0RGF0YS5wcm90b3R5cGUubWFrZVJlYWN0aXZlIGNvdWxkIGZpbmlzaCB3b3JrXG5cdFx0ICpcblx0XHQgKiBJbiB0aGlzIGNhc2Ugd2Ugc2hvdWxkIGtlZXAgb3VyIHNhbml0aXplcnNcblx0XHQgKi9cblx0XHRqUXVlcnkoIG5vZGUgKS5vbiggJ2NoYW5nZS5KZXRGb3JtQnVpbGRlck1haW4nLCAoKSA9PiB7XG5cdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmlzTWFrZWRcblx0XHRcdCAgICAgICAgICAgICAgICAgICAgID8gbm9kZS52YWx1ZVxuXHRcdFx0ICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyggbm9kZS52YWx1ZSApO1xuXHRcdH0gKTtcblxuXHRcdGNvbnN0IGlucHV0cyA9IG5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0Jy5qZXQtYWJhZi1maWVsZF9faW5wdXQnLFxuXHRcdCk7XG5cblx0XHRmb3IgKCBjb25zdCBpbnB1dCBvZiBpbnB1dHMgKSB7XG5cdFx0XHRpbnB1dC5hZGRFdmVudExpc3RlbmVyKCAnYmx1cicsICgpID0+IHRoaXMucmVwb3J0T25CbHVyKCkgKTtcblx0XHR9XG5cdH07XG5cblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB0aGlzLnZhbHVlLmFwcGx5U2FuaXRpemVycyhcblx0XHRcdHRoaXMubm9kZXNbIDAgXS52YWx1ZSxcblx0XHQpO1xuXHR9O1xuXG5cdC8qKlxuXHQgKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vQ3JvY29ibG9jay9pc3N1ZXMtdHJhY2tlci9pc3N1ZXMvMTU2MlxuXHQgKlxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cblx0ICovXG5cdHRoaXMuY2hlY2tJc1JlcXVpcmVkID0gZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcblxuXHRcdGlmICggbm9kZS5yZXF1aXJlZCApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdHJldHVybiAhIW5vZGUucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtYWJhZi1maWVsZF9faW5wdXRbcmVxdWlyZWRdJyxcblx0XHQpO1xuXHR9O1xuXG5cdHRoaXMuc2V0Tm9kZSA9IGZ1bmN0aW9uICggbm9kZSApIHtcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xuXG5cdFx0dGhpcy5pbnB1dFR5cGUgPSAnY2hlY2tpbi1jaGVja291dCc7XG5cblx0XHRpZiAoICdzaW5nbGUnID09PSBnZXRDaGVja291dEZpZWxkTGF5b3V0KCkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRzV3JhcHBlciA9IG5vZGUuY2xvc2VzdCggJy5qZXQtYWJhZi1zZXBhcmF0ZS1maWVsZHMnICk7XG5cblx0XHR0aGlzLm5vZGVzLnB1c2goXG5cdFx0XHQuLi5maWVsZHNXcmFwcGVyLnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcdCcuamV0LWFiYWYtZmllbGRfX2lucHV0W3R5cGU9XCJ0ZXh0XCJdJyApLFxuXHRcdFx0ZmllbGRzV3JhcHBlcixcblx0XHQpO1xuXHR9O1xufVxuXG5DaGVja091dElucHV0LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuQ2hlY2tPdXRJbnB1dC5wcm90b3R5cGUucGFyc2VWYWx1ZUZvckNhbGN1bGF0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cblx0aWYgKCAhdGhpcy5nZXRWYWx1ZSgpPy5sZW5ndGggKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHQvLyBiZWNhdXNlIHRoZSBnbG9iYWwgSmV0Qm9va2luZyBvYmplY3Qgd2FzIGFkZGVkIHJlY2VudGx5XG5cdGlmICggd2luZG93Py5KZXRCb29raW5nPy5jYWxjQm9va2VkRGF0ZXMgKSB7XG5cdFx0LyoqXG5cdFx0ICogV2UgbmVlZCB0byB0cmFuc2Zvcm0gZGF0ZXMgZnJvbSAnWVlZWS1NTS1ERCcgZm9ybWF0IHRvXG5cdFx0ICogdXNlcnMgZm9ybWF0LCB3aGljaCB0aGV5IGhhdmUgY2hvc2VuXG5cdFx0ICogaW4gQ2hlY2staW4vY2hlY2stb3V0IGRhdGVzIGZpZWxkIHNldHRpbmdzLCBmb3IgY29ycmVjdCB1c2FnZSBvZlxuXHRcdCAqIGBKZXRCb29raW5nLmNhbGNCb29rZWREYXRlc2AgbWV0aG9kXG5cdFx0ICpcblx0XHQgKiBAdHlwZSB7c3RyaW5nW119XG5cdFx0ICovXG5cdFx0Y29uc3QgZGF0ZXMgPSB0aGlzLmdldFZhbHVlKCkubWFwKCBzaW5nbGVEYXRlID0+IChcblx0XHRcdG1vbWVudCggc2luZ2xlRGF0ZSwgRk9STUFUICkuZm9ybWF0KCBnZXRDaGVja291dEZpZWxkRm9ybWF0KCkgKVxuXHRcdCkgKTtcblxuXHRcdHJldHVybiBKZXRCb29raW5nLmNhbGNCb29rZWREYXRlcyggZGF0ZXMuam9pbiggJyAtICcgKSApO1xuXHR9XG5cblx0aWYgKCBnZXRDaGVja291dERhdGFTZXR0aW5nKCAnb25lX2RheV9ib29raW5ncycgKSApIHtcblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdC8qKlxuXHQgKiBKdXN0IHBhc3MgbW9tZW50IGZ1bmN0aW9uLCBiZWNhdXNlIHdlIHN0b3JlIGRhdGVzIGluXG5cdCAqIElTTyA4NjAxIHN0cmluZyBmb3JtYXRcblx0ICpcblx0ICogQHR5cGUgeypbXX1cblx0ICovXG5cdGNvbnN0IGRhdGVzID0gdGhpcy52YWx1ZS5jdXJyZW50Lm1hcCggZGF0ZSA9PiBtb21lbnQoIGRhdGUgKSApO1xuXG5cdGxldCB2YWx1ZSA9IGRhdGVzWyAxIF0uZGlmZiggZGF0ZXNbIDAgXSwgJ2RheXMnICk7XG5cdHZhbHVlICAgICA9IE51bWJlciggdmFsdWUgKTtcblxuXHRpZiAoICFnZXRDaGVja291dERhdGFTZXR0aW5nKCAncGVyX25pZ2h0cycgKSApIHtcblx0XHR2YWx1ZSsrO1xuXHR9XG5cblx0cmV0dXJuIHZhbHVlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tPdXRJbnB1dDsiLCJpbXBvcnQgQ2hlY2tPdXRJbnB1dCBmcm9tICcuL0NoZWNrT3V0SW5wdXQnO1xuaW1wb3J0IHsgRk9STUFUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2V0Q2hlY2tvdXRGaWVsZEZvcm1hdCwgZ2V0Q2hlY2tvdXRGaWVsZExheW91dCB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3Qge1xuXHQgICAgICBCYXNlU2lnbmFsLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIENoZWNrT3V0U2lnbmFsKCkge1xuXHRCYXNlU2lnbmFsLmNhbGwoIHRoaXMgKTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaW5wdXQgaW5zdGFuY2VvZiBDaGVja091dElucHV0O1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCBwcmV2VmFsdWUgKSB7XG5cdFx0J3NpbmdsZScgPT09IGdldENoZWNrb3V0RmllbGRMYXlvdXQoKVxuXHRcdD8gdGhpcy5ydW5TaWduYWxGb3JTaW5nbGUoKVxuXHRcdDogdGhpcy5ydW5TaWduYWxGb3JTZXBhcmF0ZSggcHJldlZhbHVlICk7XG5cdH07XG5cblx0dGhpcy5ydW5TaWduYWxGb3JTaW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBkYXRlSW5wdXQgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gICA9IHRoaXMuaW5wdXQudmFsdWU7XG5cblx0XHRpZiAoICFjdXJyZW50Lmxlbmd0aCApIHtcblx0XHRcdGRhdGVJbnB1dC52YWx1ZSA9ICcnO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZGF0ZUlucHV0LnZhbHVlID0gY3VycmVudC5tYXAoXG5cdFx0XHRkYXRlID0+IG1vbWVudCggZGF0ZSwgRk9STUFUICkuZm9ybWF0KCBnZXRDaGVja291dEZpZWxkRm9ybWF0KCkgKSxcblx0XHQpLmpvaW4oICcgLSAnICk7XG5cdH07XG5cblx0dGhpcy5ydW5TaWduYWxGb3JTZXBhcmF0ZSA9IGZ1bmN0aW9uICggcHJldlZhbHVlICkge1xuXHRcdGNvbnN0IFsgLCBzdGFydERhdGUsIGVuZERhdGUgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gICAgICAgICAgICAgID0gdGhpcy5pbnB1dC52YWx1ZTtcblxuXHRcdGlmICggY3VycmVudD8udG9TdHJpbmc/LigpID09PSBwcmV2VmFsdWU/LnRvU3RyaW5nPy4oKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoICFjdXJyZW50Lmxlbmd0aCApIHtcblx0XHRcdHN0YXJ0RGF0ZS52YWx1ZSA9ICcnO1xuXHRcdFx0ZW5kRGF0ZS52YWx1ZSAgID0gJyc7XG5cblx0XHRcdHRoaXMudXBkYXRlQ2FsZW5kYXIoKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHN0YXJ0RGF0ZS52YWx1ZSA9IG1vbWVudCggY3VycmVudFsgMCBdLCBGT1JNQVQgKS5mb3JtYXQoXG5cdFx0XHRnZXRDaGVja291dEZpZWxkRm9ybWF0KCksXG5cdFx0KTtcblx0XHRlbmREYXRlLnZhbHVlICAgPSBtb21lbnQoXG5cdFx0XHRjdXJyZW50WyAxIF0gPz8gY3VycmVudFsgMCBdLCAvLyBmb3Igb25lLWRheSBib29raW5nc1xuXHRcdFx0Rk9STUFULFxuXHRcdCkuZm9ybWF0KFxuXHRcdFx0Z2V0Q2hlY2tvdXRGaWVsZEZvcm1hdCgpLFxuXHRcdCk7XG5cblx0XHR0aGlzLnVwZGF0ZUNhbGVuZGFyKCk7XG5cdH07XG5cblx0Ly8gb25seSBmb3Igc2VwYXJhdGUgbGF5b3V0XG5cdHRoaXMudXBkYXRlQ2FsZW5kYXIgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50IH0gICAgICAgPSB0aGlzLmlucHV0LnZhbHVlO1xuXHRcdGNvbnN0IFsgLCAsICwgd3JhcHBlciBdID0gdGhpcy5pbnB1dC5ub2RlcztcblxuXHRcdGlmICggIWN1cnJlbnQubGVuZ3RoICkge1xuXHRcdFx0alF1ZXJ5KCB3cmFwcGVyICkuZGF0YSggJ2RhdGVSYW5nZVBpY2tlcicgKS5jbGVhcigpO1xuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgZmllbGRGb3JtYXQgPSBnZXRDaGVja291dEZpZWxkRm9ybWF0KCk7XG5cblx0XHQvLyBjb25zb2xlLmxvZyggY3VycmVudCApO1xuXHRcdGpRdWVyeSggd3JhcHBlciApLmRhdGEoICdkYXRlUmFuZ2VQaWNrZXInICkuc2V0RGF0ZVJhbmdlKFxuXHRcdFx0bW9tZW50KCBjdXJyZW50WyAwIF0gKS5mb3JtYXQoIGZpZWxkRm9ybWF0ICksXG5cdFx0XHQvLyBmb3Igb25lLWRheSBib29raW5nc1xuXHRcdFx0bW9tZW50KCBjdXJyZW50WyAxIF0gPz8gY3VycmVudFsgMCBdICkuZm9ybWF0KCBmaWVsZEZvcm1hdCApLFxuXHRcdFx0dHJ1ZSxcblx0XHQpO1xuXHR9O1xufVxuXG5DaGVja091dFNpZ25hbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuXG5leHBvcnQgZGVmYXVsdCBDaGVja091dFNpZ25hbDsiLCJjb25zdCBGT1JNQVQgPSAnWVlZWS1NTS1ERCc7XG5cbmV4cG9ydCB7XG5cdEZPUk1BVCxcbn07IiwiaW1wb3J0IHsgRk9STUFUIH0gZnJvbSAnLi9jb25zdGFudHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tvdXRGaWVsZEZvcm1hdCgpIHtcblx0cmV0dXJuIHdpbmRvdz8uSmV0QUJBRklucHV0Py5maWVsZF9mb3JtYXQgPz8gRk9STUFUO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tvdXRGaWVsZExheW91dCgpIHtcblx0cmV0dXJuIHdpbmRvdz8uSmV0QUJBRklucHV0Py5sYXlvdXQgPz8gJ3NpbmdsZSc7XG59XG5cbi8qKlxuICogQHBhcmFtIG5hbWUge1N0cmluZ31cbiAqIEByZXR1cm5zIHsqfVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hlY2tvdXREYXRhU2V0dGluZyggbmFtZSApIHtcblx0cmV0dXJuIHdpbmRvdz8uSmV0QUJBRkRhdGE/LlsgbmFtZSBdO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBDaGVja091dElucHV0IGZyb20gJy4vQ2hlY2tPdXRJbnB1dCc7XG5pbXBvcnQgQ2hlY2tPdXRTaWduYWwgZnJvbSAnLi9DaGVja091dFNpZ25hbCc7XG5cbmNvbnN0IHtcblx0ICAgICAgYWRkQWN0aW9uLFxuXHQgICAgICBhZGRGaWx0ZXIsXG4gICAgICB9ID0gSmV0UGx1Z2lucy5ob29rcztcblxuYWRkQWN0aW9uKFxuXHQnamV0LmZiLm9ic2VydmUuYmVmb3JlJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvYm9va2luZy1jb21wYXRpYmlsaXR5Jyxcblx0LyoqXG5cdCAqIEBwYXJhbSBvYnNlcnZhYmxlIHtPYnNlcnZhYmxlfVxuXHQgKi9cblx0ZnVuY3Rpb24gKCBvYnNlcnZhYmxlICkge1xuXHRcdGNvbnN0IHsgcm9vdE5vZGUgfSA9IG9ic2VydmFibGU7XG5cblx0XHRmb3IgKCBjb25zdCBjaGVja091dFdyYXBwZXIgb2Ygcm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCcuZmllbGQtdHlwZS1jaGVjay1pbi1vdXQnLFxuXHRcdCkgKSB7XG5cdFx0XHRjb25zdCBpbnB1dCA9IGNoZWNrT3V0V3JhcHBlci5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0XHQnaW5wdXRbZGF0YS1maWVsZD1cImNoZWNraW4tY2hlY2tvdXRcIl0nLFxuXHRcdFx0KTtcblxuXHRcdFx0aWYgKCAhaW5wdXQgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRpbnB1dC5kYXRhc2V0LmpmYlN5bmMgPSAxO1xuXHRcdH1cblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5pbnB1dHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9ib29raW5nLWNvbXBhdGliaWxpdHknLFxuXHRmdW5jdGlvbiAoIGlucHV0cyApIHtcblx0XHRpbnB1dHMgPSBbIENoZWNrT3V0SW5wdXQsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvYm9va2luZy1jb21wYXRpYmlsaXR5Jyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIENoZWNrT3V0U2lnbmFsLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7XG5cbi8qKlxuICogQHNlZSAgIGh0dHBzOi8vZ2l0aHViLmNvbS9Dcm9jb2Jsb2NrL2lzc3Vlcy10cmFja2VyL2lzc3Vlcy8xMzczMFxuICogQHNpbmNlIDMuNC41LjFcbiAqL1xuYWRkRmlsdGVyKFxuXHQnamV0LmZiLmZvcm11bGEubm9kZS5leGlzdHMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9ib29raW5nLWNvbXBhdGliaWxpdHknLFxuXHRmdW5jdGlvbiAoIG5vZGVFeGlzdHMsIGZpZWxkTmFtZSwgZm9ybXVsYSApIHtcblxuXHRcdGNvbnN0IG1hdGNoZXMgPSBmaWVsZE5hbWUubWF0Y2goIC9BRFZBTkNFRF9QUklDRTo6KFtcXHdcXC1dKykvICk7XG5cblx0XHRpZiAoIG1hdGNoZXMgJiYgbWF0Y2hlcz8ubGVuZ3RoICkge1xuXHRcdFx0bm9kZUV4aXN0cyA9IGZvcm11bGEucm9vdC5yb290Tm9kZVsgbWF0Y2hlc1sxXSBdO1xuXHRcdH1cblxuXHRcdHJldHVybiBub2RlRXhpc3RzO1xuXHR9XG4pO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIub25DYWxjdWxhdGUucGFydCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL2Jvb2tpbmctY29tcGF0aWJpbGl0eScsXG5cdC8qKlxuXHQgKiBAcGFyYW0gbWFjcm9QYXJ0XG5cdCAqIEBwYXJhbSBmb3JtdWxhIHtDYWxjdWxhdGVkRm9ybXVsYX1cblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGZ1bmN0aW9uICggbWFjcm9QYXJ0LCBmb3JtdWxhICkge1xuXG5cdFx0aWYgKCAnc3RyaW5nJyAhPT0gdHlwZW9mIG1hY3JvUGFydCApIHtcblx0XHRcdHJldHVybiBtYWNyb1BhcnQ7XG5cdFx0fVxuXG5cdFx0Y29uc3QgbWF0Y2hlcyA9IG1hY3JvUGFydC5tYXRjaCggL0FEVkFOQ0VEX1BSSUNFOjooW1xcd1xcLV0rKS8gKTtcblxuXHRcdGlmICggIW1hdGNoZXM/Lmxlbmd0aCB8fCAhZm9ybXVsYT8uaW5wdXQgKSB7XG5cdFx0XHRyZXR1cm4gbWFjcm9QYXJ0O1xuXHRcdH1cblx0XHRjb25zdCBbICwgZmllbGROYW1lIF0gPSBtYXRjaGVzO1xuXG5cdFx0Y29uc3QgY2hlY2tvdXRGaWVsZCA9IGZvcm11bGEuaW5wdXQucm9vdC5nZXRJbnB1dCggZmllbGROYW1lICk7XG5cblx0XHRpZiAoICFjaGVja291dEZpZWxkICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0Zm9ybXVsYS5jYWNoZWRGaWVsZHMgPSBmb3JtdWxhLmNhY2hlZEZpZWxkcyB8fCBbXTtcblxuXHRcdGlmICggIWZvcm11bGEuY2FjaGVkRmllbGRzLmluY2x1ZGVzKCBjaGVja291dEZpZWxkLm5hbWUgKSApIHtcblx0XHRcdGZvcm11bGEuY2FjaGVkRmllbGRzLnB1c2goIGNoZWNrb3V0RmllbGQubmFtZSApO1xuXG5cdFx0XHRjaGVja291dEZpZWxkLndhdGNoKCAoKSA9PiBmb3JtdWxhLnNldFJlc3VsdCgpICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hY3JvUGFydDtcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5jYWxjdWxhdGVkLmNhbGxiYWNrJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvYm9va2luZy1maWVsZC1wYXJzZXInLFxuXHQvKipcblx0ICogQHBhcmFtIHZhbHVlIHttaXhlZHxCb29sZWFufVxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YXxDaGVja091dElucHV0fVxuXHQgKiBAcGFyYW0gY2FsY3VsYXRlZElucHV0IHtDYWxjdWxhdGVkRGF0YX1cblx0ICovXG5cdGZ1bmN0aW9uICggdmFsdWUsIGlucHV0LCBjYWxjdWxhdGVkSW5wdXQgKSB7XG5cdFx0aWYgKCBmYWxzZSAhPT0gdmFsdWUgfHwgJ2NoZWNraW4tY2hlY2tvdXQnICE9PSBpbnB1dC5pbnB1dFR5cGUgKSB7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGlucHV0LnBhcnNlVmFsdWVGb3JDYWxjdWxhdGVkKCk7XG5cdH0sXG4pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9