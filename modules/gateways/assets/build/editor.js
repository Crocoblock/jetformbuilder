/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./editor/components/gateways-editor.js":
/*!**********************************************!*\
  !*** ./editor/components/gateways-editor.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  gatewayAttr,
  renderGateway,
  renderGatewayWithPlaceholder
} = JetFBActions;
const {
  __
} = wp.i18n;
const {
  TextareaControl,
  BaseControl
} = wp.components;
const {
  withSelect,
  withDispatch
} = wp.data;
const {
  compose
} = wp.compose;
const {
  withSelectGateways,
  withDispatchGateways
} = JetFBHooks;
const gatewaysData = gatewayAttr();
const label = gatewayAttr('labels');
function GatewaysEditor({
  gatewayGeneral,
  setGatewayInner,
  loadingGateway,
  gatewayRequest,
  CURRENT_SCENARIO,
  currentScenario
}) {
  /**
   * Used for set notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param newValue
   */
  const setValueInObject = (when, type, newValue) => {
    setGatewayInner({
      key: when,
      value: {
        [type]: newValue
      }
    });
  };
  /**
   * Used for get notifications and gateway type settings
   *
   * @param when
   * @param type
   * @param isEmptyResult
   * @returns {boolean|*}
   */
  const getNotifications = (when, type, isEmptyResult = false) => {
    if (gatewayGeneral[when] && gatewayGeneral[when][type]) {
      return gatewayGeneral[when][type];
    }
    return isEmptyResult;
  };
  const setResultMessage = (key, value) => {
    setValueInObject('messages', key, value);
  };
  const getResultMessage = key => {
    return getNotifications('messages', key, gatewaysData.messages[key]);
  };
  const GatewayFooter = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderGatewayWithPlaceholder(gatewayGeneral.gateway, {
    gatewayGeneral,
    CURRENT_SCENARIO,
    currentScenario
  }, 'macrosList', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    key: "payment_result_macros_base_control"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, __('Available macros list: ', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), __('%gateway_amount% - payment amount returned from gateway template;', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), __('%gateway_status% - payment status returned from payment gateway;', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), __('%field_name% - replace "field_name" with any field name from the form;', 'jet-form-builder'), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    key: "payment_result_message_success",
    label: label('message_success'),
    value: getResultMessage('success'),
    onChange: newValue => setResultMessage('success', newValue)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextareaControl, {
    key: "payment_result_message_failed",
    label: label('message_failed'),
    value: getResultMessage('failed'),
    onChange: newValue => setResultMessage('failed', newValue)
  }));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, renderGateway(gatewayGeneral.gateway, {
    setValueInObject,
    getNotifications
  }), (-1 === gatewayRequest.id || loadingGateway.success || !gatewayRequest.id.includes(gatewayGeneral.gateway)) && GatewayFooter);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect((...props) => ({
  ...withSelectGateways(...props)
})), withDispatch(withDispatchGateways))(GatewaysEditor));

/***/ }),

/***/ "./editor/paypal/main.js":
/*!*******************************!*\
  !*** ./editor/paypal/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  compose
} = wp.compose;
const {
  withSelect,
  withDispatch
} = wp.data;
const {
  __
} = wp.i18n;
const {
  TextControl,
  SelectControl,
  withNotices
} = wp.components;
const {
  useEffect
} = wp.element;
const {
  renderGateway
} = JetFBActions;
const {
  withSelectGateways,
  withDispatchGateways
} = JetFBHooks;
const {
  ToggleControl
} = JetFBComponents;
function PaypalMain({
  setGatewayRequest,
  gatewaySpecific,
  setGatewaySpecific,
  gatewayScenario,
  setGatewayScenario,
  getSpecificOrGlobal,
  additionalSourceGateway,
  specificGatewayLabel,
  noticeOperations,
  noticeUI
}) {
  const {
    id: scenario = 'PAY_NOW'
  } = gatewayScenario;
  useEffect(() => {
    setGatewayRequest({
      id: scenario
    });
  }, [scenario]);
  useEffect(() => {
    setGatewayRequest({
      id: scenario
    });
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, noticeUI, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    checked: gatewaySpecific.use_global,
    onChange: use_global => setGatewaySpecific({
      use_global
    })
  }, __('Use', 'jet-form-builder') + ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: JetFormEditorData.global_settings_url + '#payments-gateways__paypal'
  }, __('Global Settings', 'jet-form-builder'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: specificGatewayLabel('client_id'),
    key: "paypal_client_id_setting",
    value: getSpecificOrGlobal('client_id'),
    onChange: client_id => setGatewaySpecific({
      client_id
    }),
    disabled: gatewaySpecific.use_global
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: specificGatewayLabel('secret'),
    key: "paypal_secret_setting",
    value: getSpecificOrGlobal('secret'),
    onChange: secret => setGatewaySpecific({
      secret
    }),
    disabled: gatewaySpecific.use_global
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    labelPosition: "side",
    label: specificGatewayLabel('gateway_type'),
    value: scenario,
    onChange: id => {
      setGatewayScenario({
        id
      });
    },
    options: additionalSourceGateway.scenarios
  }), renderGateway('paypal', {
    noticeOperations
  }, scenario));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect(withSelectGateways), withDispatch(withDispatchGateways), withNotices)(PaypalMain));

/***/ }),

/***/ "./editor/paypal/pay-now-scenario.js":
/*!*******************************************!*\
  !*** ./editor/paypal/pay-now-scenario.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const {
  compose
} = wp.compose;
const {
  withSelect,
  withDispatch
} = wp.data;
const {
  TextControl,
  SelectControl,
  BaseControl,
  RadioControl
} = wp.components;
const {
  withSelectFormFields,
  withSelectGateways,
  withDispatchGateways,
  withSelectActionsByType
} = JetFBHooks;
const {
  GatewayFetchButton
} = JetFBComponents;
function PayNowScenario({
  gatewayGeneral,
  gatewaySpecific,
  setGateway,
  setGatewaySpecific,
  formFields,
  getSpecificOrGlobal,
  loadingGateway,
  scenarioSource,
  noticeOperations,
  scenarioLabel,
  globalGatewayLabel
}) {
  const displayNotice = status => response => {
    noticeOperations.removeNotice(gatewayGeneral.gateway);
    noticeOperations.createNotice({
      status,
      content: response.message,
      id: gatewayGeneral.gateway
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BaseControl, {
    label: scenarioLabel('fetch_button_label')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jet-user-fields-map__list"
  }, !loadingGateway.success && !loadingGateway.loading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: 'description-controls'
  }, scenarioLabel('fetch_button_help')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(GatewayFetchButton, {
    initialLabel: scenarioLabel('fetch_button'),
    label: scenarioLabel('fetch_button_retry'),
    apiArgs: {
      ...scenarioSource.fetch,
      data: {
        client_id: getSpecificOrGlobal('client_id'),
        secret: getSpecificOrGlobal('secret')
      }
    },
    onFail: displayNotice('error')
  }))), loadingGateway.success && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: scenarioLabel('currency'),
    key: "paypal_currency_code_setting",
    value: gatewaySpecific.currency,
    onChange: currency => setGatewaySpecific({
      currency
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
    label: globalGatewayLabel('price_field'),
    key: 'form_fields_price_field',
    value: gatewayGeneral.price_field,
    labelPosition: "side",
    onChange: price_field => {
      setGateway({
        price_field
      });
    },
    options: formFields
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withSelect((...props) => ({
  ...withSelectFormFields([], '--')(...props),
  ...withSelectGateways(...props)
})), withDispatch((...props) => ({
  ...withDispatchGateways(...props)
})))(PayNowScenario));

/***/ }),

/***/ "./editor/plugin/index.js":
/*!********************************!*\
  !*** ./editor/plugin/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./editor/plugin/render.js");

const {
  __
} = wp.i18n;
const base = {
  name: 'jf-gateways-panel',
  title: __('Gateways Settings', 'jet-form-builder')
};
const settings = {
  render: _render__WEBPACK_IMPORTED_MODULE_0__["default"],
  icon: 'money-alt'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  base,
  settings
});

/***/ }),

/***/ "./editor/plugin/render.js":
/*!*********************************!*\
  !*** ./editor/plugin/render.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_gateways_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/gateways-editor */ "./editor/components/gateways-editor.js");


const {
  Button,
  ToggleControl
} = wp.components;
const {
  withDispatch,
  withSelect
} = wp.data;
const {
  useState,
  useEffect
} = wp.element;
const {
  __
} = wp.i18n;
const {
  compose
} = wp.compose;
const {
  ActionModal
} = JetFBComponents;
const {
  withDispatchGateways,
  withSelectGateways,
  useMetaState
} = JetFBHooks;
const gatewaysData = window.JetFormEditorData.gateways;
const MODE_SINGLE = 'single';
const MODE_MANUAL = 'manual';
const getGatewayLabel = type => {
  return gatewaysData.list.find(el => el.value === type)?.label || type;
};
function PluginGateways(props) {
  var _meta$gateway;
  const {
    setGateway,
    setGatewayScenario,
    clearGateway,
    clearScenario,
    gatewayGeneral,
    gatewayScenario
  } = props;
  const [meta, setMeta] = useMetaState('_jf_gateways');
  const [isEdit, setEdit] = useState(false);

  // UI-selected value (can be "manual" without touching meta.gateway)
  const [selectedGateway, setSelectedGateway] = useState((_meta$gateway = meta?.gateway) !== null && _meta$gateway !== void 0 ? _meta$gateway : 'none');

  // which gateway is currently being edited in modal
  const [editGateway, setEditGateway] = useState(null);
  const isManualMode = meta?.mode === MODE_MANUAL;

  // keep UI selected in sync with saved meta
  useEffect(() => {
    var _meta$gateway2;
    if (isManualMode) {
      setSelectedGateway(MODE_MANUAL);
      return;
    }
    setSelectedGateway((_meta$gateway2 = meta?.gateway) !== null && _meta$gateway2 !== void 0 ? _meta$gateway2 : 'none');
  }, [meta?.gateway, meta?.mode]);

  // bind editor store when modal is open
  useEffect(() => {
    if (!isEdit) {
      clearGateway();
      clearScenario();
      return;
    }
    const gw = editGateway || meta?.gateway;
    if (!gw || gw === 'none') {
      return;
    }

    // When manual mode is active, modal opens for "editGateway" only
    if (isManualMode && !editGateway) {
      return;
    }
    setGateway({
      ...meta,
      gateway: gw
    });
    setGatewayScenario(meta?.[gw]?.scenario);
  }, [isEdit, editGateway]);
  const closeModal = (newMeta = false) => {
    if (false !== newMeta) {
      setMeta(newMeta);
    }
    setEdit(false);
    setEditGateway(null);
  };
  const options = [{
    label: 'None',
    value: 'none'
  }, ...gatewaysData.list, {
    label: 'Manual',
    value: MODE_MANUAL
  }];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "jfb-gateways"
  }, options.map(opt => {
    const isSelected = selectedGateway === opt.value;

    // In manual mode: show Edit under EACH gateway
    // Otherwise: show Edit only under the selected gateway
    const canEdit = opt.value !== 'none' && opt.value !== MODE_MANUAL && (isManualMode || isSelected);
    const canToggle = isManualMode && opt.value !== 'none' && opt.value !== MODE_MANUAL;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: opt.value,
      className: "jfb-gateways__item"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "jfb-gateways__option"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      name: "jfb_gateway",
      value: opt.value,
      checked: isSelected,
      onChange: () => {
        setSelectedGateway(opt.value);

        // Manual mode selected
        if (opt.value === MODE_MANUAL) {
          setMeta({
            ...meta,
            mode: MODE_MANUAL
          });
          return;
        }

        // Single mode selected
        setMeta({
          ...meta,
          mode: MODE_SINGLE,
          gateway: opt.value
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, opt.label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), canEdit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => {
        setEditGateway(opt.value);
        setEdit(true);
      },
      icon: 'admin-tools',
      style: {
        margin: '8px 0'
      },
      isSecondary: true
    }, __('Edit', 'jet-form-builder')), canToggle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Show on frontend', 'jet-form-builder'),
      checked: !!meta?.[opt.value]?.show_on_front,
      onChange: value => {
        setMeta({
          ...meta,
          [opt.value]: {
            ...(meta?.[opt.value] || {}),
            show_on_front: value
          }
        });
      },
      style: {
        margin: '8px 0'
      }
    }));
  })), isEdit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActionModal, {
    classNames: ['width-60'],
    onRequestClose: () => closeModal(),
    onCancelClick: () => closeModal(),
    onUpdateClick: () => closeModal({
      ...gatewayGeneral,
      [gatewayGeneral.gateway]: {
        ...(gatewayGeneral[gatewayGeneral.gateway] || {}),
        scenario: gatewayScenario
      }
    }),
    title: `Edit ${getGatewayLabel(editGateway || meta?.gateway)} Settings`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_gateways_editor__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (compose(withDispatch(withDispatchGateways), withSelect(withSelectGateways))(PluginGateways));

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/*!************************!*\
  !*** ./editor/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _paypal_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paypal/main */ "./editor/paypal/main.js");
/* harmony import */ var _paypal_pay_now_scenario__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paypal/pay-now-scenario */ "./editor/paypal/pay-now-scenario.js");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugin */ "./editor/plugin/index.js");



const {
  registerGateway
} = JetFBActions;
const {
  addFilter
} = wp.hooks;
const {
  __
} = wp.i18n;
const gatewayID = 'paypal';
registerGateway(gatewayID, _paypal_main__WEBPACK_IMPORTED_MODULE_0__["default"]);
registerGateway(gatewayID, _paypal_pay_now_scenario__WEBPACK_IMPORTED_MODULE_1__["default"], 'PAY_NOW');
addFilter('jet.fb.register.plugin.jf-validation-panel.after', 'jet-form-builder/gateways', function (plugins) {
  plugins.push(_plugin__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return plugins;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBRUE7QUFBQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUVBOzs7Ozs7Ozs7O0FDN01BOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFLQTtBQU1BO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL2NvbXBvbmVudHMvZ2F0ZXdheXMtZWRpdG9yLmpzIiwid2VicGFjazovL2pmYi1nYXRld2F5cy8uL2VkaXRvci9wYXlwYWwvbWFpbi5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvcGF5cGFsL3BheS1ub3ctc2NlbmFyaW8uanMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL3BsdWdpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvcGx1Z2luL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1nYXRld2F5cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdGdhdGV3YXlBdHRyLFxyXG5cdHJlbmRlckdhdGV3YXksXHJcblx0cmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcixcclxufSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0LFxyXG5cdHdpdGhEaXNwYXRjaCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxufSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCBnYXRld2F5c0RhdGEgPSBnYXRld2F5QXR0cigpO1xyXG5jb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuZnVuY3Rpb24gR2F0ZXdheXNFZGl0b3IoIHtcclxuXHRnYXRld2F5R2VuZXJhbCxcclxuXHRzZXRHYXRld2F5SW5uZXIsXHJcblx0bG9hZGluZ0dhdGV3YXksXHJcblx0Z2F0ZXdheVJlcXVlc3QsXHJcblx0Q1VSUkVOVF9TQ0VOQVJJTyxcclxuXHRjdXJyZW50U2NlbmFyaW8sXHJcbn0gKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIHNldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gbmV3VmFsdWVcclxuXHQgKi9cclxuXHRjb25zdCBzZXRWYWx1ZUluT2JqZWN0ID0gKCB3aGVuLCB0eXBlLCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHNldEdhdGV3YXlJbm5lcigge1xyXG5cdFx0XHRrZXk6IHdoZW4sXHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0WyB0eXBlIF06IG5ld1ZhbHVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSApO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogVXNlZCBmb3IgZ2V0IG5vdGlmaWNhdGlvbnMgYW5kIGdhdGV3YXkgdHlwZSBzZXR0aW5nc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHdoZW5cclxuXHQgKiBAcGFyYW0gdHlwZVxyXG5cdCAqIEBwYXJhbSBpc0VtcHR5UmVzdWx0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuXHQgKi9cclxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zID0gKCB3aGVuLCB0eXBlLCBpc0VtcHR5UmVzdWx0ID0gZmFsc2UgKSA9PiB7XHJcblx0XHRpZiAoIGdhdGV3YXlHZW5lcmFsWyB3aGVuIF0gJiYgZ2F0ZXdheUdlbmVyYWxbIHdoZW4gXVsgdHlwZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gZ2F0ZXdheUdlbmVyYWxbIHdoZW4gXVsgdHlwZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRW1wdHlSZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0UmVzdWx0TWVzc2FnZSA9ICgga2V5LCB2YWx1ZSApID0+IHtcclxuXHRcdHNldFZhbHVlSW5PYmplY3QoICdtZXNzYWdlcycsIGtleSwgdmFsdWUgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGdldFJlc3VsdE1lc3NhZ2UgPSAoIGtleSApID0+IHtcclxuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbWVzc2FnZXMnLCBrZXksIGdhdGV3YXlzRGF0YS5tZXNzYWdlc1sga2V5IF0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBHYXRld2F5Rm9vdGVyID0gPD5cclxuXHRcdHsgcmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcihcclxuXHRcdFx0Z2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSxcclxuXHRcdFx0eyBnYXRld2F5R2VuZXJhbCwgQ1VSUkVOVF9TQ0VOQVJJTywgY3VycmVudFNjZW5hcmlvIH0sXHJcblx0XHRcdCdtYWNyb3NMaXN0JyxcclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWFjcm9zX2Jhc2VfY29udHJvbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8aDQ+XHJcblx0XHRcdFx0XHR7IF9fKCAnQXZhaWxhYmxlIG1hY3JvcyBsaXN0OiAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICclZ2F0ZXdheV9hbW91bnQlIC0gcGF5bWVudCBhbW91bnQgcmV0dXJuZWQgZnJvbSBnYXRld2F5IHRlbXBsYXRlOycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdFx0eyBfXyggJyVnYXRld2F5X3N0YXR1cyUgLSBwYXltZW50IHN0YXR1cyByZXR1cm5lZCBmcm9tIHBheW1lbnQgZ2F0ZXdheTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICclZmllbGRfbmFtZSUgLSByZXBsYWNlIFwiZmllbGRfbmFtZVwiIHdpdGggYW55IGZpZWxkIG5hbWUgZnJvbSB0aGUgZm9ybTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPiApIH1cclxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9zdWNjZXNzXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2Vfc3VjY2VzcycgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdzdWNjZXNzJywgbmV3VmFsdWUgKSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tZXNzYWdlX2ZhaWxlZFwiXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtZXNzYWdlX2ZhaWxlZCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCBnYXRld2F5R2VuZXJhbC5nYXRld2F5LCB7IHNldFZhbHVlSW5PYmplY3QsIGdldE5vdGlmaWNhdGlvbnMgfSApIH1cclxuXHRcdHsgKFxyXG5cdFx0XHQgIC0gMSA9PT0gZ2F0ZXdheVJlcXVlc3QuaWRcclxuXHRcdFx0ICB8fCBsb2FkaW5nR2F0ZXdheS5zdWNjZXNzXHJcblx0XHRcdCAgfHwgISBnYXRld2F5UmVxdWVzdC5pZC5pbmNsdWRlcyggZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSApXHJcblx0XHQgICkgJiYgR2F0ZXdheUZvb3RlciB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhTZWxlY3RHYXRld2F5cyggLi4ucHJvcHMgKSxcclxuXHRcdH1cclxuXHQpICksXHJcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hHYXRld2F5cyApLFxyXG4pKCBHYXRld2F5c0VkaXRvciApOyIsImNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB3aXRoU2VsZWN0LFxyXG5cdCAgICAgIHdpdGhEaXNwYXRjaCxcclxuICAgICAgfSA9IHdwLmRhdGE7XHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgVGV4dENvbnRyb2wsXHJcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcclxuXHQgICAgICB3aXRoTm90aWNlcyxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlRWZmZWN0LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICByZW5kZXJHYXRld2F5LFxyXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHQgICAgICB3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxuICAgICAgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFBheXBhbE1haW4oIHtcclxuXHRzZXRHYXRld2F5UmVxdWVzdCxcclxuXHRnYXRld2F5U3BlY2lmaWMsXHJcblx0c2V0R2F0ZXdheVNwZWNpZmljLFxyXG5cdGdhdGV3YXlTY2VuYXJpbyxcclxuXHRzZXRHYXRld2F5U2NlbmFyaW8sXHJcblx0Z2V0U3BlY2lmaWNPckdsb2JhbCxcclxuXHRhZGRpdGlvbmFsU291cmNlR2F0ZXdheSxcclxuXHRzcGVjaWZpY0dhdGV3YXlMYWJlbCxcclxuXHRub3RpY2VPcGVyYXRpb25zLFxyXG5cdG5vdGljZVVJLFxyXG59ICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBpZDogc2NlbmFyaW8gPSAnUEFZX05PVycsXHJcblx0ICAgICAgfSA9IGdhdGV3YXlTY2VuYXJpbztcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRHYXRld2F5UmVxdWVzdCggeyBpZDogc2NlbmFyaW8gfSApO1xyXG5cdH0sIFsgc2NlbmFyaW8gXSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdHNldEdhdGV3YXlSZXF1ZXN0KCB7IGlkOiBzY2VuYXJpbyB9ICk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHR7IG5vdGljZVVJIH1cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGNoZWNrZWQ9eyBnYXRld2F5U3BlY2lmaWMudXNlX2dsb2JhbCB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgdXNlX2dsb2JhbCA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgdXNlX2dsb2JhbCB9ICkgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IF9fKCAnVXNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxyXG5cdFx0XHQ8YSBocmVmPXsgSmV0Rm9ybUVkaXRvckRhdGEuZ2xvYmFsX3NldHRpbmdzX3VybCArXHJcblx0XHRcdCcjcGF5bWVudHMtZ2F0ZXdheXNfX3BheXBhbCcgfT5cclxuXHRcdFx0XHR7IF9fKCAnR2xvYmFsIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L1RvZ2dsZUNvbnRyb2w+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ2NsaWVudF9pZCcgKSB9XHJcblx0XHRcdGtleT1cInBheXBhbF9jbGllbnRfaWRfc2V0dGluZ1wiXHJcblx0XHRcdHZhbHVlPXsgZ2V0U3BlY2lmaWNPckdsb2JhbCggJ2NsaWVudF9pZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgY2xpZW50X2lkID0+IHNldEdhdGV3YXlTcGVjaWZpYyggeyBjbGllbnRfaWQgfSApIH1cclxuXHRcdFx0ZGlzYWJsZWQ9eyBnYXRld2F5U3BlY2lmaWMudXNlX2dsb2JhbCB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgc3BlY2lmaWNHYXRld2F5TGFiZWwoICdzZWNyZXQnICkgfVxyXG5cdFx0XHRrZXk9XCJwYXlwYWxfc2VjcmV0X3NldHRpbmdcIlxyXG5cdFx0XHR2YWx1ZT17IGdldFNwZWNpZmljT3JHbG9iYWwoICdzZWNyZXQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNlY3JldCA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgc2VjcmV0IH0gKSB9XHJcblx0XHRcdGRpc2FibGVkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0Lz5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ2dhdGV3YXlfdHlwZScgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2NlbmFyaW8gfVxyXG5cdFx0XHRvbkNoYW5nZT17IGlkID0+IHtcclxuXHRcdFx0XHRzZXRHYXRld2F5U2NlbmFyaW8oIHsgaWQgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5LnNjZW5hcmlvcyB9XHJcblx0XHQvPlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCAncGF5cGFsJywgeyBub3RpY2VPcGVyYXRpb25zIH0sIHNjZW5hcmlvICkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuXHR3aXRoU2VsZWN0KCB3aXRoU2VsZWN0R2F0ZXdheXMgKSxcclxuXHR3aXRoRGlzcGF0Y2goIHdpdGhEaXNwYXRjaEdhdGV3YXlzICksXHJcblx0d2l0aE5vdGljZXMsXHJcbikoIFBheXBhbE1haW4gKTtcclxuXHJcblxyXG4iLCJjb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFNlbGVjdCxcclxuXHR3aXRoRGlzcGF0Y2gsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0UmFkaW9Db250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0Rm9ybUZpZWxkcyxcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0d2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcblx0d2l0aFNlbGVjdEFjdGlvbnNCeVR5cGUsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgeyBHYXRld2F5RmV0Y2hCdXR0b24gfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFBheU5vd1NjZW5hcmlvKCB7XHJcblx0Z2F0ZXdheUdlbmVyYWwsXHJcblx0Z2F0ZXdheVNwZWNpZmljLFxyXG5cdHNldEdhdGV3YXksXHJcblx0c2V0R2F0ZXdheVNwZWNpZmljLFxyXG5cdGZvcm1GaWVsZHMsXHJcblx0Z2V0U3BlY2lmaWNPckdsb2JhbCxcclxuXHRsb2FkaW5nR2F0ZXdheSxcclxuXHRzY2VuYXJpb1NvdXJjZSxcclxuXHRub3RpY2VPcGVyYXRpb25zLFxyXG5cdHNjZW5hcmlvTGFiZWwsXHJcblx0Z2xvYmFsR2F0ZXdheUxhYmVsLFxyXG59ICkge1xyXG5cclxuXHRjb25zdCBkaXNwbGF5Tm90aWNlID0gc3RhdHVzID0+IHJlc3BvbnNlID0+IHtcclxuXHRcdG5vdGljZU9wZXJhdGlvbnMucmVtb3ZlTm90aWNlKCBnYXRld2F5R2VuZXJhbC5nYXRld2F5ICk7XHJcblx0XHRub3RpY2VPcGVyYXRpb25zLmNyZWF0ZU5vdGljZSgge1xyXG5cdFx0XHRzdGF0dXMsXHJcblx0XHRcdGNvbnRlbnQ6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcblx0XHRcdGlkOiBnYXRld2F5R2VuZXJhbC5nYXRld2F5LFxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgc2NlbmFyaW9MYWJlbCggJ2ZldGNoX2J1dHRvbl9sYWJlbCcgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdFwiPlxyXG5cdFx0XHRcdHsgKCAhIGxvYWRpbmdHYXRld2F5LnN1Y2Nlc3MgJiYgISBsb2FkaW5nR2F0ZXdheS5sb2FkaW5nICkgJiYgPHNwYW5cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgc2NlbmFyaW9MYWJlbCggJ2ZldGNoX2J1dHRvbl9oZWxwJyApIH1cclxuXHRcdFx0XHQ8L3NwYW4+IH1cclxuXHRcdFx0XHQ8R2F0ZXdheUZldGNoQnV0dG9uXHJcblx0XHRcdFx0XHRpbml0aWFsTGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgc2NlbmFyaW9MYWJlbCggJ2ZldGNoX2J1dHRvbl9yZXRyeScgKSB9XHJcblx0XHRcdFx0XHRhcGlBcmdzPXsge1xyXG5cdFx0XHRcdFx0XHQuLi5zY2VuYXJpb1NvdXJjZS5mZXRjaCxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGNsaWVudF9pZDogZ2V0U3BlY2lmaWNPckdsb2JhbCggJ2NsaWVudF9pZCcgKSxcclxuXHRcdFx0XHRcdFx0XHRzZWNyZXQ6IGdldFNwZWNpZmljT3JHbG9iYWwoICdzZWNyZXQnICksXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9uRmFpbD17IGRpc3BsYXlOb3RpY2UoICdlcnJvcicgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0eyBsb2FkaW5nR2F0ZXdheS5zdWNjZXNzICYmIDw+XHJcblx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgc2NlbmFyaW9MYWJlbCggJ2N1cnJlbmN5JyApIH1cclxuXHRcdFx0XHRrZXk9J3BheXBhbF9jdXJyZW5jeV9jb2RlX3NldHRpbmcnXHJcblx0XHRcdFx0dmFsdWU9eyBnYXRld2F5U3BlY2lmaWMuY3VycmVuY3kgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgY3VycmVuY3kgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IGN1cnJlbmN5IH0gKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBnbG9iYWxHYXRld2F5TGFiZWwoICdwcmljZV9maWVsZCcgKSB9XHJcblx0XHRcdFx0a2V5PXsgJ2Zvcm1fZmllbGRzX3ByaWNlX2ZpZWxkJyB9XHJcblx0XHRcdFx0dmFsdWU9eyBnYXRld2F5R2VuZXJhbC5wcmljZV9maWVsZCB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nc2lkZSdcclxuXHRcdFx0XHRvbkNoYW5nZT17IHByaWNlX2ZpZWxkID0+IHtcclxuXHRcdFx0XHRcdHNldEdhdGV3YXkoIHsgcHJpY2VfZmllbGQgfSApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvPiB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhTZWxlY3RGb3JtRmllbGRzKCBbXSwgJy0tJyApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0R2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG5cdHdpdGhEaXNwYXRjaCggKCAuLi5wcm9wcyApID0+IChcclxuXHRcdHtcclxuXHRcdFx0Li4ud2l0aERpc3BhdGNoR2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG4pKCBQYXlOb3dTY2VuYXJpbyApOyIsImltcG9ydCBQbHVnaW5HYXRld2F5cyBmcm9tICcuL3JlbmRlcic7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgYmFzZSA9IHtcclxuXHRuYW1lOiAnamYtZ2F0ZXdheXMtcGFuZWwnLFxyXG5cdHRpdGxlOiBfXyggJ0dhdGV3YXlzIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHRyZW5kZXI6IFBsdWdpbkdhdGV3YXlzLFxyXG5cdGljb246ICdtb25leS1hbHQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGJhc2UsXHJcblx0c2V0dGluZ3MsXHJcbn07IiwiaW1wb3J0IEdhdGV3YXlzRWRpdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvZ2F0ZXdheXMtZWRpdG9yJztcclxuXHJcbmNvbnN0IHsgQnV0dG9uLCBUb2dnbGVDb250cm9sIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyB3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3QgfSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuY29uc3QgeyBBY3Rpb25Nb2RhbCB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhEaXNwYXRjaEdhdGV3YXlzLFxyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR1c2VNZXRhU3RhdGUsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgZ2F0ZXdheXNEYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuY29uc3QgTU9ERV9TSU5HTEUgPSAnc2luZ2xlJztcclxuY29uc3QgTU9ERV9NQU5VQUwgPSAnbWFudWFsJztcclxuXHJcbmNvbnN0IGdldEdhdGV3YXlMYWJlbCA9ICggdHlwZSApID0+IHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Z2F0ZXdheXNEYXRhLmxpc3QuZmluZCggZWwgPT4gZWwudmFsdWUgPT09IHR5cGUgKT8ubGFiZWwgfHwgdHlwZVxyXG5cdCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQbHVnaW5HYXRld2F5cyggcHJvcHMgKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHNldEdhdGV3YXksXHJcblx0XHRzZXRHYXRld2F5U2NlbmFyaW8sXHJcblx0XHRjbGVhckdhdGV3YXksXHJcblx0XHRjbGVhclNjZW5hcmlvLFxyXG5cdFx0Z2F0ZXdheUdlbmVyYWwsXHJcblx0XHRnYXRld2F5U2NlbmFyaW8sXHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBbIG1ldGEsIHNldE1ldGEgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9nYXRld2F5cycgKTtcclxuXHJcblx0Y29uc3QgWyBpc0VkaXQsIHNldEVkaXQgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHQvLyBVSS1zZWxlY3RlZCB2YWx1ZSAoY2FuIGJlIFwibWFudWFsXCIgd2l0aG91dCB0b3VjaGluZyBtZXRhLmdhdGV3YXkpXHJcblx0Y29uc3QgWyBzZWxlY3RlZEdhdGV3YXksIHNldFNlbGVjdGVkR2F0ZXdheSBdID0gdXNlU3RhdGUoIG1ldGE/LmdhdGV3YXkgPz8gJ25vbmUnICk7XHJcblxyXG5cdC8vIHdoaWNoIGdhdGV3YXkgaXMgY3VycmVudGx5IGJlaW5nIGVkaXRlZCBpbiBtb2RhbFxyXG5cdGNvbnN0IFsgZWRpdEdhdGV3YXksIHNldEVkaXRHYXRld2F5IF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuXHRjb25zdCBpc01hbnVhbE1vZGUgPSBtZXRhPy5tb2RlID09PSBNT0RFX01BTlVBTDtcclxuXHJcblx0Ly8ga2VlcCBVSSBzZWxlY3RlZCBpbiBzeW5jIHdpdGggc2F2ZWQgbWV0YVxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCBpc01hbnVhbE1vZGUgKSB7XHJcblx0XHRcdHNldFNlbGVjdGVkR2F0ZXdheSggTU9ERV9NQU5VQUwgKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0U2VsZWN0ZWRHYXRld2F5KCBtZXRhPy5nYXRld2F5ID8/ICdub25lJyApO1xyXG5cdH0sIFsgbWV0YT8uZ2F0ZXdheSwgbWV0YT8ubW9kZSBdICk7XHJcblxyXG5cdC8vIGJpbmQgZWRpdG9yIHN0b3JlIHdoZW4gbW9kYWwgaXMgb3BlblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCAhaXNFZGl0ICkge1xyXG5cdFx0XHRjbGVhckdhdGV3YXkoKTtcclxuXHRcdFx0Y2xlYXJTY2VuYXJpbygpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZ3cgPSBlZGl0R2F0ZXdheSB8fCBtZXRhPy5nYXRld2F5O1xyXG5cclxuXHRcdGlmICggIWd3IHx8IGd3ID09PSAnbm9uZScgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBXaGVuIG1hbnVhbCBtb2RlIGlzIGFjdGl2ZSwgbW9kYWwgb3BlbnMgZm9yIFwiZWRpdEdhdGV3YXlcIiBvbmx5XHJcblx0XHRpZiAoIGlzTWFudWFsTW9kZSAmJiAhZWRpdEdhdGV3YXkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRHYXRld2F5KCB7IC4uLm1ldGEsIGdhdGV3YXk6IGd3IH0gKTtcclxuXHRcdHNldEdhdGV3YXlTY2VuYXJpbyggbWV0YT8uWyBndyBdPy5zY2VuYXJpbyApO1xyXG5cdH0sIFsgaXNFZGl0LCBlZGl0R2F0ZXdheSBdICk7XHJcblxyXG5cdGNvbnN0IGNsb3NlTW9kYWwgPSAoIG5ld01ldGEgPSBmYWxzZSApID0+IHtcclxuXHRcdGlmICggZmFsc2UgIT09IG5ld01ldGEgKSB7XHJcblx0XHRcdHNldE1ldGEoIG5ld01ldGEgKTtcclxuXHRcdH1cclxuXHRcdHNldEVkaXQoIGZhbHNlICk7XHJcblx0XHRzZXRFZGl0R2F0ZXdheSggbnVsbCApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wdGlvbnMgPSBbXHJcblx0XHR7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcclxuXHRcdC4uLmdhdGV3YXlzRGF0YS5saXN0LFxyXG5cdFx0eyBsYWJlbDogJ01hbnVhbCcsIHZhbHVlOiBNT0RFX01BTlVBTCB9LFxyXG5cdF07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c1wiPlxyXG5cdFx0XHRcdHsgb3B0aW9ucy5tYXAoICggb3B0ICkgPT4ge1xyXG5cdFx0XHRcdFx0Y29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkR2F0ZXdheSA9PT0gb3B0LnZhbHVlO1xyXG5cclxuXHRcdFx0XHRcdC8vIEluIG1hbnVhbCBtb2RlOiBzaG93IEVkaXQgdW5kZXIgRUFDSCBnYXRld2F5XHJcblx0XHRcdFx0XHQvLyBPdGhlcndpc2U6IHNob3cgRWRpdCBvbmx5IHVuZGVyIHRoZSBzZWxlY3RlZCBnYXRld2F5XHJcblx0XHRcdFx0XHRjb25zdCBjYW5FZGl0ID1cclxuXHRcdFx0XHRcdFx0b3B0LnZhbHVlICE9PSAnbm9uZSdcclxuXHRcdFx0XHRcdFx0JiYgb3B0LnZhbHVlICE9PSBNT0RFX01BTlVBTFxyXG5cdFx0XHRcdFx0XHQmJiAoIGlzTWFudWFsTW9kZSB8fCBpc1NlbGVjdGVkICk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY2FuVG9nZ2xlID1cclxuXHRcdFx0XHRcdFx0aXNNYW51YWxNb2RlXHJcblx0XHRcdFx0XHRcdCYmIG9wdC52YWx1ZSAhPT0gJ25vbmUnXHJcblx0XHRcdFx0XHRcdCYmIG9wdC52YWx1ZSAhPT0gTU9ERV9NQU5VQUw7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9eyBvcHQudmFsdWUgfSBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX2l0ZW1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiamZiLWdhdGV3YXlzX19vcHRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiamZiX2dhdGV3YXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG9wdC52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBpc1NlbGVjdGVkIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRHYXRld2F5KCBvcHQudmFsdWUgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gTWFudWFsIG1vZGUgc2VsZWN0ZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG9wdC52YWx1ZSA9PT0gTU9ERV9NQU5VQUwgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRNZXRhKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGU6IE1PREVfTUFOVUFMLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU2luZ2xlIG1vZGUgc2VsZWN0ZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRNZXRhKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZTogTU9ERV9TSU5HTEUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXRld2F5OiBvcHQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57IG9wdC5sYWJlbCB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+PGJyLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0eyBjYW5FZGl0ICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0R2F0ZXdheSggb3B0LnZhbHVlICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdCggdHJ1ZSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aWNvbj17ICdhZG1pbi10b29scycgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17IHsgbWFyZ2luOiAnOHB4IDAnIH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnRWRpdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdCkgfVxyXG5cclxuXHRcdFx0XHRcdFx0XHR7IGNhblRvZ2dsZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyBvbiBmcm9udGVuZCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhbWV0YT8uWyBvcHQudmFsdWUgXT8uc2hvd19vbl9mcm9udCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRNZXRhKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0WyBvcHQudmFsdWUgXToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi4oIG1ldGE/Llsgb3B0LnZhbHVlIF0gfHwge30gKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd19vbl9mcm9udDogdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXsgeyBtYXJnaW46ICc4cHggMCcgfSB9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSApIH1cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHR7IGlzRWRpdCAmJiAoXHJcblx0XHRcdFx0PEFjdGlvbk1vZGFsXHJcblx0XHRcdFx0XHRjbGFzc05hbWVzPXsgWyAnd2lkdGgtNjAnIF0gfVxyXG5cdFx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eyAoKSA9PiBjbG9zZU1vZGFsKCkgfVxyXG5cdFx0XHRcdFx0b25DYW5jZWxDbGljaz17ICgpID0+IGNsb3NlTW9kYWwoKSB9XHJcblx0XHRcdFx0XHRvblVwZGF0ZUNsaWNrPXsgKCkgPT4gY2xvc2VNb2RhbCgge1xyXG5cdFx0XHRcdFx0XHQuLi5nYXRld2F5R2VuZXJhbCxcclxuXHRcdFx0XHRcdFx0WyBnYXRld2F5R2VuZXJhbC5nYXRld2F5IF06IHtcclxuXHRcdFx0XHRcdFx0XHQuLi4oIGdhdGV3YXlHZW5lcmFsWyBnYXRld2F5R2VuZXJhbC5nYXRld2F5IF0gfHwge30gKSxcclxuXHRcdFx0XHRcdFx0XHRzY2VuYXJpbzogZ2F0ZXdheVNjZW5hcmlvLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSApIH1cclxuXHRcdFx0XHRcdHRpdGxlPXsgYEVkaXQgJHsgZ2V0R2F0ZXdheUxhYmVsKCBlZGl0R2F0ZXdheSB8fCBtZXRhPy5nYXRld2F5ICkgfSBTZXR0aW5nc2AgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxHYXRld2F5c0VkaXRvci8+XHJcblx0XHRcdFx0PC9BY3Rpb25Nb2RhbD5cclxuXHRcdFx0KSB9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhEaXNwYXRjaCggd2l0aERpc3BhdGNoR2F0ZXdheXMgKSxcclxuXHR3aXRoU2VsZWN0KCB3aXRoU2VsZWN0R2F0ZXdheXMgKSxcclxuKSggUGx1Z2luR2F0ZXdheXMgKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJSZWFjdFwiXTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFBheXBhbE1haW4gZnJvbSAnLi9wYXlwYWwvbWFpbic7XHJcbmltcG9ydCBQYXlOb3dTY2VuYXJpbyBmcm9tICcuL3BheXBhbC9wYXktbm93LXNjZW5hcmlvJztcclxuaW1wb3J0IGdhdGV3YXlQbHVnaW4gZnJvbSAnLi9wbHVnaW4nO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHJlZ2lzdGVyR2F0ZXdheSxcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBhZGRGaWx0ZXIsXHJcbiAgICAgIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBnYXRld2F5SUQgPSAncGF5cGFsJztcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0UGF5cGFsTWFpbixcclxuKTtcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0UGF5Tm93U2NlbmFyaW8sXHJcblx0J1BBWV9OT1cnLFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVnaXN0ZXIucGx1Z2luLmpmLXZhbGlkYXRpb24tcGFuZWwuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2dhdGV3YXlzJyxcclxuXHRmdW5jdGlvbiAoIHBsdWdpbnMgKSB7XHJcblx0XHRwbHVnaW5zLnB1c2goIGdhdGV3YXlQbHVnaW4gKTtcclxuXHJcblx0XHRyZXR1cm4gcGx1Z2lucztcclxuXHR9LFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==