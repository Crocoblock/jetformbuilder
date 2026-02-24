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
  ToggleControl,
  Notice,
  __experimentalItemGroup: ItemGroup,
  __experimentalItem: Item
} = wp.components;
const {
  withDispatch,
  withSelect,
  useSelect,
  dispatch
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
  createBlock
} = wp.blocks;
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
const MULTI_GATEWAY_BLOCK = 'jet-forms/multi-gateway';
const getGatewayLabel = type => {
  return gatewaysData.list.find(el => el.value === type)?.label || type;
};
const hasBlockRecursive = (blocks, name) => {
  for (const block of blocks) {
    if (block.name === name) {
      return true;
    }
    if (block.innerBlocks?.length && hasBlockRecursive(block.innerBlocks, name)) {
      return true;
    }
  }
  return false;
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
  const hasMultiGatewayBlock = useSelect(select => {
    const editor = select('core/block-editor');
    if (!editor?.getBlocks) {
      return false;
    }
    return hasBlockRecursive(editor.getBlocks(), MULTI_GATEWAY_BLOCK);
  }, []);
  const insertMultiGatewayBlock = () => {
    dispatch('core/block-editor').insertBlocks(createBlock(MULTI_GATEWAY_BLOCK));
  };
  useEffect(() => {
    var _meta$gateway2;
    if (isManualMode) {
      setSelectedGateway(MODE_MANUAL);
      return;
    }
    setSelectedGateway((_meta$gateway2 = meta?.gateway) !== null && _meta$gateway2 !== void 0 ? _meta$gateway2 : 'none');
  }, [meta?.gateway, meta?.mode]);
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
  const styles = {
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    },
    item: {
      display: 'flex',
      minHeight: '50px',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    toggle: {
      paddingTop: '10px',
      flexDirection: 'column'
    },
    notice: {
      marginTop: '10px'
    },
    notice__btn: {
      marginLeft: '0'
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ItemGroup, {
    className: "jfb-gateways",
    isBordered: true,
    isSeparated: true
  }, options.map(opt => {
    const isSelected = selectedGateway === opt.value;
    const canEdit = opt.value !== 'none' && opt.value !== MODE_MANUAL && (isManualMode || isSelected);
    const canToggle = isManualMode && opt.value !== 'none' && opt.value !== MODE_MANUAL;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Item, {
      key: opt.value,
      className: "jfb-gateways__item",
      style: styles.item
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jfb-gateways__row",
      style: styles.row
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
      className: "jfb-gateways__option"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "radio",
      name: "jfb_gateway",
      value: opt.value,
      checked: isSelected,
      onChange: () => {
        setSelectedGateway(opt.value);
        if (opt.value === MODE_MANUAL) {
          setMeta({
            ...meta,
            mode: MODE_MANUAL
          });
          return;
        }
        setMeta({
          ...meta,
          mode: MODE_SINGLE,
          gateway: opt.value
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "jfb-gateways__label"
    }, opt.label)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jfb-gateways__actions"
    }, canEdit ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => {
        setEditGateway(opt.value);
        setEdit(true);
      },
      icon: "admin-tools",
      isSecondary: true,
      size: "small"
    }, __('Edit', 'jet-form-builder')) :
    // spacer to prevent jumps
    (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "jfb-gateways__edit-spacer",
      "aria-hidden": "true"
    }))), canToggle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jfb-gateways__toggle",
      style: styles.toggle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
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
      }
    })), opt.value === MODE_MANUAL && isManualMode && !hasMultiGatewayBlock && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "jfb-gateways__notice",
      style: styles.notice
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Notice, {
      status: "warning",
      isDismissible: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, __('To display gateways on the frontend in Manual mode, add the Multi Gateway block to the form.', 'jet-form-builder')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isSecondary: true,
      onClick: insertMultiGatewayBlock,
      size: "small",
      style: styles.notice__btn
    }, __('Add block', 'jet-form-builder')))));
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
  addFilter,
  applyFilters
} = wp.hooks;
const gatewayID = 'paypal';
function getValidationData() {
  return window?.JetFormEditorData?.gateways?.validation || {};
}
function getRequiredMap() {
  return getValidationData()?.required_map || {};
}
function getGlobalValid() {
  return getValidationData()?.global_valid || {};
}
JetFBActions.isGatewayValid = function isGatewayValid(gatewayId, gatewaysMeta) {
  if (typeof gatewaysMeta === 'string') {
    try {
      gatewaysMeta = JSON.parse(gatewaysMeta || '{}');
    } catch (e) {
      gatewaysMeta = {};
    }
  }
  const requiredMap = getRequiredMap();
  const required = requiredMap?.[gatewayId];
  if (!Array.isArray(required) || !required.length) {
    return false;
  }
  const specific = gatewaysMeta?.[gatewayId] || {};
  const useGlobal = !!specific.use_global;
  if (useGlobal) {
    const globalValid = getGlobalValid();
    return !!globalValid?.[gatewayId];
  }
  return required.every(key => {
    const value = specific?.[key];
    return typeof value === 'string' ? value.trim() !== '' : !!value;
  });
};
registerGateway(gatewayID, _paypal_main__WEBPACK_IMPORTED_MODULE_0__["default"]);
registerGateway(gatewayID, _paypal_pay_now_scenario__WEBPACK_IMPORTED_MODULE_1__["default"], 'PAY_NOW');
addFilter('jet.fb.register.plugin.jf-validation-panel.after', 'jet-form-builder/gateways', function (plugins) {
  plugins.push(_plugin__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return plugins;
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBS0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFFQTs7Ozs7Ozs7OztBQ2xTQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQU1BO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL2NvbXBvbmVudHMvZ2F0ZXdheXMtZWRpdG9yLmpzIiwid2VicGFjazovL2pmYi1nYXRld2F5cy8uL2VkaXRvci9wYXlwYWwvbWFpbi5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvcGF5cGFsL3BheS1ub3ctc2NlbmFyaW8uanMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL3BsdWdpbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvcGx1Z2luL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvZXh0ZXJuYWwgd2luZG93IFwiUmVhY3RcIiIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1nYXRld2F5cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdGdhdGV3YXlBdHRyLFxyXG5cdHJlbmRlckdhdGV3YXksXHJcblx0cmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcixcclxufSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dGFyZWFDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0LFxyXG5cdHdpdGhEaXNwYXRjaCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxufSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCBnYXRld2F5c0RhdGEgPSBnYXRld2F5QXR0cigpO1xyXG5jb25zdCBsYWJlbCA9IGdhdGV3YXlBdHRyKCAnbGFiZWxzJyApO1xyXG5cclxuZnVuY3Rpb24gR2F0ZXdheXNFZGl0b3IoIHtcclxuXHRnYXRld2F5R2VuZXJhbCxcclxuXHRzZXRHYXRld2F5SW5uZXIsXHJcblx0bG9hZGluZ0dhdGV3YXksXHJcblx0Z2F0ZXdheVJlcXVlc3QsXHJcblx0Q1VSUkVOVF9TQ0VOQVJJTyxcclxuXHRjdXJyZW50U2NlbmFyaW8sXHJcbn0gKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIHNldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gbmV3VmFsdWVcclxuXHQgKi9cclxuXHRjb25zdCBzZXRWYWx1ZUluT2JqZWN0ID0gKCB3aGVuLCB0eXBlLCBuZXdWYWx1ZSApID0+IHtcclxuXHRcdHNldEdhdGV3YXlJbm5lcigge1xyXG5cdFx0XHRrZXk6IHdoZW4sXHJcblx0XHRcdHZhbHVlOiB7XHJcblx0XHRcdFx0WyB0eXBlIF06IG5ld1ZhbHVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSApO1xyXG5cdH07XHJcblx0LyoqXHJcblx0ICogVXNlZCBmb3IgZ2V0IG5vdGlmaWNhdGlvbnMgYW5kIGdhdGV3YXkgdHlwZSBzZXR0aW5nc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHdoZW5cclxuXHQgKiBAcGFyYW0gdHlwZVxyXG5cdCAqIEBwYXJhbSBpc0VtcHR5UmVzdWx0XHJcblx0ICogQHJldHVybnMge2Jvb2xlYW58Kn1cclxuXHQgKi9cclxuXHRjb25zdCBnZXROb3RpZmljYXRpb25zID0gKCB3aGVuLCB0eXBlLCBpc0VtcHR5UmVzdWx0ID0gZmFsc2UgKSA9PiB7XHJcblx0XHRpZiAoIGdhdGV3YXlHZW5lcmFsWyB3aGVuIF0gJiYgZ2F0ZXdheUdlbmVyYWxbIHdoZW4gXVsgdHlwZSBdICkge1xyXG5cdFx0XHRyZXR1cm4gZ2F0ZXdheUdlbmVyYWxbIHdoZW4gXVsgdHlwZSBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGlzRW1wdHlSZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0UmVzdWx0TWVzc2FnZSA9ICgga2V5LCB2YWx1ZSApID0+IHtcclxuXHRcdHNldFZhbHVlSW5PYmplY3QoICdtZXNzYWdlcycsIGtleSwgdmFsdWUgKTtcclxuXHR9O1xyXG5cdGNvbnN0IGdldFJlc3VsdE1lc3NhZ2UgPSAoIGtleSApID0+IHtcclxuXHRcdHJldHVybiBnZXROb3RpZmljYXRpb25zKCAnbWVzc2FnZXMnLCBrZXksIGdhdGV3YXlzRGF0YS5tZXNzYWdlc1sga2V5IF0gKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBHYXRld2F5Rm9vdGVyID0gPD5cclxuXHRcdHsgcmVuZGVyR2F0ZXdheVdpdGhQbGFjZWhvbGRlcihcclxuXHRcdFx0Z2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSxcclxuXHRcdFx0eyBnYXRld2F5R2VuZXJhbCwgQ1VSUkVOVF9TQ0VOQVJJTywgY3VycmVudFNjZW5hcmlvIH0sXHJcblx0XHRcdCdtYWNyb3NMaXN0JyxcclxuXHRcdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWFjcm9zX2Jhc2VfY29udHJvbFwiXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8aDQ+XHJcblx0XHRcdFx0XHR7IF9fKCAnQXZhaWxhYmxlIG1hY3JvcyBsaXN0OiAnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICclZ2F0ZXdheV9hbW91bnQlIC0gcGF5bWVudCBhbW91bnQgcmV0dXJuZWQgZnJvbSBnYXRld2F5IHRlbXBsYXRlOycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdFx0eyBfXyggJyVnYXRld2F5X3N0YXR1cyUgLSBwYXltZW50IHN0YXR1cyByZXR1cm5lZCBmcm9tIHBheW1lbnQgZ2F0ZXdheTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICclZmllbGRfbmFtZSUgLSByZXBsYWNlIFwiZmllbGRfbmFtZVwiIHdpdGggYW55IGZpZWxkIG5hbWUgZnJvbSB0aGUgZm9ybTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHQ8L2g0PlxyXG5cdFx0XHQ8L0Jhc2VDb250cm9sPiApIH1cclxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9zdWNjZXNzXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2Vfc3VjY2VzcycgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdzdWNjZXNzJywgbmV3VmFsdWUgKSB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tZXNzYWdlX2ZhaWxlZFwiXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtZXNzYWdlX2ZhaWxlZCcgKSB9XHJcblx0XHRcdHZhbHVlPXsgZ2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0UmVzdWx0TWVzc2FnZSggJ2ZhaWxlZCcsIG5ld1ZhbHVlICkgfVxyXG5cdFx0Lz5cclxuXHQ8Lz47XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCBnYXRld2F5R2VuZXJhbC5nYXRld2F5LCB7IHNldFZhbHVlSW5PYmplY3QsIGdldE5vdGlmaWNhdGlvbnMgfSApIH1cclxuXHRcdHsgKFxyXG5cdFx0XHQgIC0gMSA9PT0gZ2F0ZXdheVJlcXVlc3QuaWRcclxuXHRcdFx0ICB8fCBsb2FkaW5nR2F0ZXdheS5zdWNjZXNzXHJcblx0XHRcdCAgfHwgISBnYXRld2F5UmVxdWVzdC5pZC5pbmNsdWRlcyggZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSApXHJcblx0XHQgICkgJiYgR2F0ZXdheUZvb3RlciB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhTZWxlY3RHYXRld2F5cyggLi4ucHJvcHMgKSxcclxuXHRcdH1cclxuXHQpICksXHJcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hHYXRld2F5cyApLFxyXG4pKCBHYXRld2F5c0VkaXRvciApOyIsImNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB3aXRoU2VsZWN0LFxyXG5cdCAgICAgIHdpdGhEaXNwYXRjaCxcclxuICAgICAgfSA9IHdwLmRhdGE7XHJcbmNvbnN0IHtcclxuXHQgICAgICBfXyxcclxuICAgICAgfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgVGV4dENvbnRyb2wsXHJcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcclxuXHQgICAgICB3aXRoTm90aWNlcyxcclxuICAgICAgfSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgdXNlRWZmZWN0LFxyXG4gICAgICB9ID0gd3AuZWxlbWVudDtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICByZW5kZXJHYXRld2F5LFxyXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHQgICAgICB3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxuICAgICAgfSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgVG9nZ2xlQ29udHJvbCxcclxuICAgICAgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFBheXBhbE1haW4oIHtcclxuXHRzZXRHYXRld2F5UmVxdWVzdCxcclxuXHRnYXRld2F5U3BlY2lmaWMsXHJcblx0c2V0R2F0ZXdheVNwZWNpZmljLFxyXG5cdGdhdGV3YXlTY2VuYXJpbyxcclxuXHRzZXRHYXRld2F5U2NlbmFyaW8sXHJcblx0Z2V0U3BlY2lmaWNPckdsb2JhbCxcclxuXHRhZGRpdGlvbmFsU291cmNlR2F0ZXdheSxcclxuXHRzcGVjaWZpY0dhdGV3YXlMYWJlbCxcclxuXHRub3RpY2VPcGVyYXRpb25zLFxyXG5cdG5vdGljZVVJLFxyXG59ICkge1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHQgICAgICBpZDogc2NlbmFyaW8gPSAnUEFZX05PVycsXHJcblx0ICAgICAgfSA9IGdhdGV3YXlTY2VuYXJpbztcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRHYXRld2F5UmVxdWVzdCggeyBpZDogc2NlbmFyaW8gfSApO1xyXG5cdH0sIFsgc2NlbmFyaW8gXSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdHNldEdhdGV3YXlSZXF1ZXN0KCB7IGlkOiBzY2VuYXJpbyB9ICk7XHJcblx0fSwgW10gKTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHR7IG5vdGljZVVJIH1cclxuXHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdGNoZWNrZWQ9eyBnYXRld2F5U3BlY2lmaWMudXNlX2dsb2JhbCB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgdXNlX2dsb2JhbCA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgdXNlX2dsb2JhbCB9ICkgfVxyXG5cdFx0PlxyXG5cdFx0XHR7IF9fKCAnVXNlJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgKyAnICcgfVxyXG5cdFx0XHQ8YSBocmVmPXsgSmV0Rm9ybUVkaXRvckRhdGEuZ2xvYmFsX3NldHRpbmdzX3VybCArXHJcblx0XHRcdCcjcGF5bWVudHMtZ2F0ZXdheXNfX3BheXBhbCcgfT5cclxuXHRcdFx0XHR7IF9fKCAnR2xvYmFsIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHQ8L2E+XHJcblx0XHQ8L1RvZ2dsZUNvbnRyb2w+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ2NsaWVudF9pZCcgKSB9XHJcblx0XHRcdGtleT1cInBheXBhbF9jbGllbnRfaWRfc2V0dGluZ1wiXHJcblx0XHRcdHZhbHVlPXsgZ2V0U3BlY2lmaWNPckdsb2JhbCggJ2NsaWVudF9pZCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgY2xpZW50X2lkID0+IHNldEdhdGV3YXlTcGVjaWZpYyggeyBjbGllbnRfaWQgfSApIH1cclxuXHRcdFx0ZGlzYWJsZWQ9eyBnYXRld2F5U3BlY2lmaWMudXNlX2dsb2JhbCB9XHJcblx0XHQvPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgc3BlY2lmaWNHYXRld2F5TGFiZWwoICdzZWNyZXQnICkgfVxyXG5cdFx0XHRrZXk9XCJwYXlwYWxfc2VjcmV0X3NldHRpbmdcIlxyXG5cdFx0XHR2YWx1ZT17IGdldFNwZWNpZmljT3JHbG9iYWwoICdzZWNyZXQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHNlY3JldCA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgc2VjcmV0IH0gKSB9XHJcblx0XHRcdGRpc2FibGVkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0Lz5cclxuXHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ2dhdGV3YXlfdHlwZScgKSB9XHJcblx0XHRcdHZhbHVlPXsgc2NlbmFyaW8gfVxyXG5cdFx0XHRvbkNoYW5nZT17IGlkID0+IHtcclxuXHRcdFx0XHRzZXRHYXRld2F5U2NlbmFyaW8oIHsgaWQgfSApO1xyXG5cdFx0XHR9IH1cclxuXHRcdFx0b3B0aW9ucz17IGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5LnNjZW5hcmlvcyB9XHJcblx0XHQvPlxyXG5cdFx0eyByZW5kZXJHYXRld2F5KCAncGF5cGFsJywgeyBub3RpY2VPcGVyYXRpb25zIH0sIHNjZW5hcmlvICkgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuXHR3aXRoU2VsZWN0KCB3aXRoU2VsZWN0R2F0ZXdheXMgKSxcclxuXHR3aXRoRGlzcGF0Y2goIHdpdGhEaXNwYXRjaEdhdGV3YXlzICksXHJcblx0d2l0aE5vdGljZXMsXHJcbikoIFBheXBhbE1haW4gKTtcclxuXHJcblxyXG4iLCJjb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFNlbGVjdCxcclxuXHR3aXRoRGlzcGF0Y2gsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRDb250cm9sLFxyXG5cdFNlbGVjdENvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcblx0UmFkaW9Db250cm9sLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0Rm9ybUZpZWxkcyxcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0d2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcblx0d2l0aFNlbGVjdEFjdGlvbnNCeVR5cGUsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgeyBHYXRld2F5RmV0Y2hCdXR0b24gfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmZ1bmN0aW9uIFBheU5vd1NjZW5hcmlvKCB7XHJcblx0Z2F0ZXdheUdlbmVyYWwsXHJcblx0Z2F0ZXdheVNwZWNpZmljLFxyXG5cdHNldEdhdGV3YXksXHJcblx0c2V0R2F0ZXdheVNwZWNpZmljLFxyXG5cdGZvcm1GaWVsZHMsXHJcblx0Z2V0U3BlY2lmaWNPckdsb2JhbCxcclxuXHRsb2FkaW5nR2F0ZXdheSxcclxuXHRzY2VuYXJpb1NvdXJjZSxcclxuXHRub3RpY2VPcGVyYXRpb25zLFxyXG5cdHNjZW5hcmlvTGFiZWwsXHJcblx0Z2xvYmFsR2F0ZXdheUxhYmVsLFxyXG59ICkge1xyXG5cclxuXHRjb25zdCBkaXNwbGF5Tm90aWNlID0gc3RhdHVzID0+IHJlc3BvbnNlID0+IHtcclxuXHRcdG5vdGljZU9wZXJhdGlvbnMucmVtb3ZlTm90aWNlKCBnYXRld2F5R2VuZXJhbC5nYXRld2F5ICk7XHJcblx0XHRub3RpY2VPcGVyYXRpb25zLmNyZWF0ZU5vdGljZSgge1xyXG5cdFx0XHRzdGF0dXMsXHJcblx0XHRcdGNvbnRlbnQ6IHJlc3BvbnNlLm1lc3NhZ2UsXHJcblx0XHRcdGlkOiBnYXRld2F5R2VuZXJhbC5nYXRld2F5LFxyXG5cdFx0fSApO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0PEJhc2VDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgc2NlbmFyaW9MYWJlbCggJ2ZldGNoX2J1dHRvbl9sYWJlbCcgKSB9XHJcblx0XHQ+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdFwiPlxyXG5cdFx0XHRcdHsgKCAhIGxvYWRpbmdHYXRld2F5LnN1Y2Nlc3MgJiYgISBsb2FkaW5nR2F0ZXdheS5sb2FkaW5nICkgJiYgPHNwYW5cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdkZXNjcmlwdGlvbi1jb250cm9scycgfVxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdHsgc2NlbmFyaW9MYWJlbCggJ2ZldGNoX2J1dHRvbl9oZWxwJyApIH1cclxuXHRcdFx0XHQ8L3NwYW4+IH1cclxuXHRcdFx0XHQ8R2F0ZXdheUZldGNoQnV0dG9uXHJcblx0XHRcdFx0XHRpbml0aWFsTGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uJyApIH1cclxuXHRcdFx0XHRcdGxhYmVsPXsgc2NlbmFyaW9MYWJlbCggJ2ZldGNoX2J1dHRvbl9yZXRyeScgKSB9XHJcblx0XHRcdFx0XHRhcGlBcmdzPXsge1xyXG5cdFx0XHRcdFx0XHQuLi5zY2VuYXJpb1NvdXJjZS5mZXRjaCxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdGNsaWVudF9pZDogZ2V0U3BlY2lmaWNPckdsb2JhbCggJ2NsaWVudF9pZCcgKSxcclxuXHRcdFx0XHRcdFx0XHRzZWNyZXQ6IGdldFNwZWNpZmljT3JHbG9iYWwoICdzZWNyZXQnICksXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdG9uRmFpbD17IGRpc3BsYXlOb3RpY2UoICdlcnJvcicgKSB9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L0Jhc2VDb250cm9sPlxyXG5cdFx0eyBsb2FkaW5nR2F0ZXdheS5zdWNjZXNzICYmIDw+XHJcblx0XHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgc2NlbmFyaW9MYWJlbCggJ2N1cnJlbmN5JyApIH1cclxuXHRcdFx0XHRrZXk9J3BheXBhbF9jdXJyZW5jeV9jb2RlX3NldHRpbmcnXHJcblx0XHRcdFx0dmFsdWU9eyBnYXRld2F5U3BlY2lmaWMuY3VycmVuY3kgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgY3VycmVuY3kgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IGN1cnJlbmN5IH0gKSB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBnbG9iYWxHYXRld2F5TGFiZWwoICdwcmljZV9maWVsZCcgKSB9XHJcblx0XHRcdFx0a2V5PXsgJ2Zvcm1fZmllbGRzX3ByaWNlX2ZpZWxkJyB9XHJcblx0XHRcdFx0dmFsdWU9eyBnYXRld2F5R2VuZXJhbC5wcmljZV9maWVsZCB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nc2lkZSdcclxuXHRcdFx0XHRvbkNoYW5nZT17IHByaWNlX2ZpZWxkID0+IHtcclxuXHRcdFx0XHRcdHNldEdhdGV3YXkoIHsgcHJpY2VfZmllbGQgfSApO1xyXG5cdFx0XHRcdH0gfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0Lz5cclxuXHRcdDwvPiB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhTZWxlY3RGb3JtRmllbGRzKCBbXSwgJy0tJyApKCAuLi5wcm9wcyApLFxyXG5cdFx0XHQuLi53aXRoU2VsZWN0R2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG5cdHdpdGhEaXNwYXRjaCggKCAuLi5wcm9wcyApID0+IChcclxuXHRcdHtcclxuXHRcdFx0Li4ud2l0aERpc3BhdGNoR2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG4pKCBQYXlOb3dTY2VuYXJpbyApOyIsImltcG9ydCBQbHVnaW5HYXRld2F5cyBmcm9tICcuL3JlbmRlcic7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3QgYmFzZSA9IHtcclxuXHRuYW1lOiAnamYtZ2F0ZXdheXMtcGFuZWwnLFxyXG5cdHRpdGxlOiBfXyggJ0dhdGV3YXlzIFNldHRpbmdzJywgJ2pldC1mb3JtLWJ1aWxkZXInICksXHJcbn07XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuXHRyZW5kZXI6IFBsdWdpbkdhdGV3YXlzLFxyXG5cdGljb246ICdtb25leS1hbHQnLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGJhc2UsXHJcblx0c2V0dGluZ3MsXHJcbn07IiwiaW1wb3J0IEdhdGV3YXlzRWRpdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvZ2F0ZXdheXMtZWRpdG9yJztcclxuXHJcbmNvbnN0IHtcclxuXHRCdXR0b24sXHJcblx0VG9nZ2xlQ29udHJvbCxcclxuXHROb3RpY2UsXHJcblx0X19leHBlcmltZW50YWxJdGVtR3JvdXA6IEl0ZW1Hcm91cCxcclxuXHRfX2V4cGVyaW1lbnRhbEl0ZW06IEl0ZW0sXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyB3aXRoRGlzcGF0Y2gsIHdpdGhTZWxlY3QsIHVzZVNlbGVjdCwgZGlzcGF0Y2ggfSA9IHdwLmRhdGE7XHJcbmNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gd3AuZWxlbWVudDtcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5jb25zdCB7IGNyZWF0ZUJsb2NrIH0gPSB3cC5ibG9ja3M7XHJcblxyXG5jb25zdCB7IEFjdGlvbk1vZGFsIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcblx0d2l0aFNlbGVjdEdhdGV3YXlzLFxyXG5cdHVzZU1ldGFTdGF0ZSxcclxufSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCBnYXRld2F5c0RhdGEgPSB3aW5kb3cuSmV0Rm9ybUVkaXRvckRhdGEuZ2F0ZXdheXM7XHJcblxyXG5jb25zdCBNT0RFX1NJTkdMRSA9ICdzaW5nbGUnO1xyXG5jb25zdCBNT0RFX01BTlVBTCA9ICdtYW51YWwnO1xyXG5cclxuY29uc3QgTVVMVElfR0FURVdBWV9CTE9DSyA9ICdqZXQtZm9ybXMvbXVsdGktZ2F0ZXdheSc7XHJcblxyXG5jb25zdCBnZXRHYXRld2F5TGFiZWwgPSAoIHR5cGUgKSA9PiB7XHJcblx0cmV0dXJuIGdhdGV3YXlzRGF0YS5saXN0LmZpbmQoIGVsID0+IGVsLnZhbHVlID09PSB0eXBlICk/LmxhYmVsIHx8IHR5cGU7XHJcbn07XHJcblxyXG5jb25zdCBoYXNCbG9ja1JlY3Vyc2l2ZSA9ICggYmxvY2tzLCBuYW1lICkgPT4ge1xyXG5cdGZvciAoIGNvbnN0IGJsb2NrIG9mIGJsb2NrcyApIHtcclxuXHRcdGlmICggYmxvY2submFtZSA9PT0gbmFtZSApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRpZiAoIGJsb2NrLmlubmVyQmxvY2tzPy5sZW5ndGggJiYgaGFzQmxvY2tSZWN1cnNpdmUoIGJsb2NrLmlubmVyQmxvY2tzLCBuYW1lICkgKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBQbHVnaW5HYXRld2F5cyggcHJvcHMgKSB7XHJcblx0Y29uc3Qge1xyXG5cdFx0c2V0R2F0ZXdheSxcclxuXHRcdHNldEdhdGV3YXlTY2VuYXJpbyxcclxuXHRcdGNsZWFyR2F0ZXdheSxcclxuXHRcdGNsZWFyU2NlbmFyaW8sXHJcblx0XHRnYXRld2F5R2VuZXJhbCxcclxuXHRcdGdhdGV3YXlTY2VuYXJpbyxcclxuXHR9ID0gcHJvcHM7XHJcblxyXG5cdGNvbnN0IFsgbWV0YSwgc2V0TWV0YSBdID0gdXNlTWV0YVN0YXRlKCAnX2pmX2dhdGV3YXlzJyApO1xyXG5cdGNvbnN0IFsgaXNFZGl0LCBzZXRFZGl0IF0gPSB1c2VTdGF0ZSggZmFsc2UgKTtcclxuXHJcblx0Ly8gVUktc2VsZWN0ZWQgdmFsdWUgKGNhbiBiZSBcIm1hbnVhbFwiIHdpdGhvdXQgdG91Y2hpbmcgbWV0YS5nYXRld2F5KVxyXG5cdGNvbnN0IFsgc2VsZWN0ZWRHYXRld2F5LCBzZXRTZWxlY3RlZEdhdGV3YXkgXSA9IHVzZVN0YXRlKCBtZXRhPy5nYXRld2F5ID8/ICdub25lJyApO1xyXG5cclxuXHQvLyB3aGljaCBnYXRld2F5IGlzIGN1cnJlbnRseSBiZWluZyBlZGl0ZWQgaW4gbW9kYWxcclxuXHRjb25zdCBbIGVkaXRHYXRld2F5LCBzZXRFZGl0R2F0ZXdheSBdID0gdXNlU3RhdGUoIG51bGwgKTtcclxuXHJcblx0Y29uc3QgaXNNYW51YWxNb2RlID0gbWV0YT8ubW9kZSA9PT0gTU9ERV9NQU5VQUw7XHJcblxyXG5cdGNvbnN0IGhhc011bHRpR2F0ZXdheUJsb2NrID0gdXNlU2VsZWN0KFxyXG5cdFx0KCBzZWxlY3QgKSA9PiB7XHJcblx0XHRcdGNvbnN0IGVkaXRvciA9IHNlbGVjdCggJ2NvcmUvYmxvY2stZWRpdG9yJyApO1xyXG5cdFx0XHRpZiAoICFlZGl0b3I/LmdldEJsb2NrcyApIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGhhc0Jsb2NrUmVjdXJzaXZlKCBlZGl0b3IuZ2V0QmxvY2tzKCksIE1VTFRJX0dBVEVXQVlfQkxPQ0sgKTtcclxuXHRcdH0sXHJcblx0XHRbXVxyXG5cdCk7XHJcblxyXG5cdGNvbnN0IGluc2VydE11bHRpR2F0ZXdheUJsb2NrID0gKCkgPT4ge1xyXG5cdFx0ZGlzcGF0Y2goICdjb3JlL2Jsb2NrLWVkaXRvcicgKS5pbnNlcnRCbG9ja3MoXHJcblx0XHRcdGNyZWF0ZUJsb2NrKCBNVUxUSV9HQVRFV0FZX0JMT0NLIClcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoIGlzTWFudWFsTW9kZSApIHtcclxuXHRcdFx0c2V0U2VsZWN0ZWRHYXRld2F5KCBNT0RFX01BTlVBTCApO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRzZXRTZWxlY3RlZEdhdGV3YXkoIG1ldGE/LmdhdGV3YXkgPz8gJ25vbmUnICk7XHJcblx0fSwgWyBtZXRhPy5nYXRld2F5LCBtZXRhPy5tb2RlIF0gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRpZiAoICFpc0VkaXQgKSB7XHJcblx0XHRcdGNsZWFyR2F0ZXdheSgpO1xyXG5cdFx0XHRjbGVhclNjZW5hcmlvKCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBndyA9IGVkaXRHYXRld2F5IHx8IG1ldGE/LmdhdGV3YXk7XHJcblxyXG5cdFx0aWYgKCAhZ3cgfHwgZ3cgPT09ICdub25lJyApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggaXNNYW51YWxNb2RlICYmICFlZGl0R2F0ZXdheSApIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldEdhdGV3YXkoIHsgLi4ubWV0YSwgZ2F0ZXdheTogZ3cgfSApO1xyXG5cdFx0c2V0R2F0ZXdheVNjZW5hcmlvKCBtZXRhPy5bIGd3IF0/LnNjZW5hcmlvICk7XHJcblx0fSwgWyBpc0VkaXQsIGVkaXRHYXRld2F5IF0gKTtcclxuXHJcblx0Y29uc3QgY2xvc2VNb2RhbCA9ICggbmV3TWV0YSA9IGZhbHNlICkgPT4ge1xyXG5cdFx0aWYgKCBmYWxzZSAhPT0gbmV3TWV0YSApIHtcclxuXHRcdFx0c2V0TWV0YSggbmV3TWV0YSApO1xyXG5cdFx0fVxyXG5cdFx0c2V0RWRpdCggZmFsc2UgKTtcclxuXHRcdHNldEVkaXRHYXRld2F5KCBudWxsICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb3B0aW9ucyA9IFtcclxuXHRcdHsgbGFiZWw6ICdOb25lJywgdmFsdWU6ICdub25lJyB9LFxyXG5cdFx0Li4uZ2F0ZXdheXNEYXRhLmxpc3QsXHJcblx0XHR7IGxhYmVsOiAnTWFudWFsJywgdmFsdWU6IE1PREVfTUFOVUFMIH0sXHJcblx0XTtcclxuXHJcblx0Y29uc3Qgc3R5bGVzID0ge1xyXG5cdFx0cm93OiB7XHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0YWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcblx0XHRcdHdpZHRoOiAnMTAwJScsXHJcblx0XHR9LFxyXG5cdFx0aXRlbToge1xyXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdG1pbkhlaWdodDogJzUwcHgnLFxyXG5cdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG5cdFx0fSxcclxuXHRcdHRvZ2dsZToge1xyXG5cdFx0XHRwYWRkaW5nVG9wOiAnMTBweCcsXHJcblx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG5cdFx0fSxcclxuXHRcdG5vdGljZToge1xyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdH0sXHJcblx0XHRub3RpY2VfX2J0bjoge1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiAnMCcsXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxJdGVtR3JvdXAgY2xhc3NOYW1lPVwiamZiLWdhdGV3YXlzXCIgaXNCb3JkZXJlZCBpc1NlcGFyYXRlZD5cclxuXHRcdFx0XHR7IG9wdGlvbnMubWFwKCAoIG9wdCApID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEdhdGV3YXkgPT09IG9wdC52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBjYW5FZGl0ID1cclxuXHRcdFx0XHRcdFx0b3B0LnZhbHVlICE9PSAnbm9uZSdcclxuXHRcdFx0XHRcdFx0JiYgb3B0LnZhbHVlICE9PSBNT0RFX01BTlVBTFxyXG5cdFx0XHRcdFx0XHQmJiAoIGlzTWFudWFsTW9kZSB8fCBpc1NlbGVjdGVkICk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY2FuVG9nZ2xlID1cclxuXHRcdFx0XHRcdFx0aXNNYW51YWxNb2RlXHJcblx0XHRcdFx0XHRcdCYmIG9wdC52YWx1ZSAhPT0gJ25vbmUnXHJcblx0XHRcdFx0XHRcdCYmIG9wdC52YWx1ZSAhPT0gTU9ERV9NQU5VQUw7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEl0ZW1cclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBvcHQudmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19faXRlbVwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9eyBzdHlsZXMuaXRlbSB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fcm93XCIgc3R5bGU9eyBzdHlsZXMucm93IH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiamZiLWdhdGV3YXlzX19vcHRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiamZiX2dhdGV3YXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgb3B0LnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNTZWxlY3RlZCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZEdhdGV3YXkoIG9wdC52YWx1ZSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggb3B0LnZhbHVlID09PSBNT0RFX01BTlVBTCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TWV0YSggeyAuLi5tZXRhLCBtb2RlOiBNT0RFX01BTlVBTCB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRNZXRhKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGU6IE1PREVfU0lOR0xFLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXRld2F5OiBvcHQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fbGFiZWxcIj57IG9wdC5sYWJlbCB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fYWN0aW9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGNhbkVkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdEdhdGV3YXkoIG9wdC52YWx1ZSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KCB0cnVlICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJhZG1pbi10b29sc1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnRWRpdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzcGFjZXIgdG8gcHJldmVudCBqdW1wc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fZWRpdC1zcGFjZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7IGNhblRvZ2dsZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fdG9nZ2xlXCIgc3R5bGU9eyBzdHlsZXMudG9nZ2xlIH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgb24gZnJvbnRlbmQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhbWV0YT8uWyBvcHQudmFsdWUgXT8uc2hvd19vbl9mcm9udCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TWV0YSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbIG9wdC52YWx1ZSBdOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uKCBtZXRhPy5bIG9wdC52YWx1ZSBdIHx8IHt9ICksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd19vbl9mcm9udDogdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpIH1cclxuXHJcblx0XHRcdFx0XHRcdFx0eyBvcHQudmFsdWUgPT09IE1PREVfTUFOVUFMICYmIGlzTWFudWFsTW9kZSAmJiAhaGFzTXVsdGlHYXRld2F5QmxvY2sgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX25vdGljZVwiIHN0eWxlPXsgc3R5bGVzLm5vdGljZSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Tm90aWNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzPVwid2FybmluZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17IGZhbHNlIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1RvIGRpc3BsYXkgZ2F0ZXdheXMgb24gdGhlIGZyb250ZW5kIGluIE1hbnVhbCBtb2RlLCBhZGQgdGhlIE11bHRpIEdhdGV3YXkgYmxvY2sgdG8gdGhlIGZvcm0uJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBpbnNlcnRNdWx0aUdhdGV3YXlCbG9jayB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9eyBzdHlsZXMubm90aWNlX19idG4gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgX18oICdBZGQgYmxvY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05vdGljZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0XHQ8L0l0ZW0+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdDwvSXRlbUdyb3VwPlxyXG5cclxuXHRcdFx0eyBpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gY2xvc2VNb2RhbCgpIH1cclxuXHRcdFx0XHRcdG9uQ2FuY2VsQ2xpY2s9eyAoKSA9PiBjbG9zZU1vZGFsKCkgfVxyXG5cdFx0XHRcdFx0b25VcGRhdGVDbGljaz17ICgpID0+IGNsb3NlTW9kYWwoIHtcclxuXHRcdFx0XHRcdFx0Li4uZ2F0ZXdheUdlbmVyYWwsXHJcblx0XHRcdFx0XHRcdFsgZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSBdOiB7XHJcblx0XHRcdFx0XHRcdFx0Li4uKCBnYXRld2F5R2VuZXJhbFsgZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSBdIHx8IHt9ICksXHJcblx0XHRcdFx0XHRcdFx0c2NlbmFyaW86IGdhdGV3YXlTY2VuYXJpbyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0XHR0aXRsZT17IGBFZGl0ICR7IGdldEdhdGV3YXlMYWJlbCggZWRpdEdhdGV3YXkgfHwgbWV0YT8uZ2F0ZXdheSApIH0gU2V0dGluZ3NgIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8R2F0ZXdheXNFZGl0b3IvPlxyXG5cdFx0XHRcdDwvQWN0aW9uTW9kYWw+XHJcblx0XHRcdCkgfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuXHR3aXRoRGlzcGF0Y2goIHdpdGhEaXNwYXRjaEdhdGV3YXlzICksXHJcblx0d2l0aFNlbGVjdCggd2l0aFNlbGVjdEdhdGV3YXlzICksXHJcbikoIFBsdWdpbkdhdGV3YXlzICk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQYXlwYWxNYWluIGZyb20gJy4vcGF5cGFsL21haW4nO1xyXG5pbXBvcnQgUGF5Tm93U2NlbmFyaW8gZnJvbSAnLi9wYXlwYWwvcGF5LW5vdy1zY2VuYXJpbyc7XHJcbmltcG9ydCBnYXRld2F5UGx1Z2luIGZyb20gJy4vcGx1Z2luJztcclxuXHJcbmNvbnN0IHsgcmVnaXN0ZXJHYXRld2F5IH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciwgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IGdhdGV3YXlJRCA9ICdwYXlwYWwnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkRhdGEoKSB7XHJcblx0cmV0dXJuIHdpbmRvdz8uSmV0Rm9ybUVkaXRvckRhdGE/LmdhdGV3YXlzPy52YWxpZGF0aW9uIHx8IHt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXF1aXJlZE1hcCgpIHtcclxuXHRyZXR1cm4gZ2V0VmFsaWRhdGlvbkRhdGEoKT8ucmVxdWlyZWRfbWFwIHx8IHt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbG9iYWxWYWxpZCgpIHtcclxuXHRyZXR1cm4gZ2V0VmFsaWRhdGlvbkRhdGEoKT8uZ2xvYmFsX3ZhbGlkIHx8IHt9O1xyXG59XHJcblxyXG5KZXRGQkFjdGlvbnMuaXNHYXRld2F5VmFsaWQgPSBmdW5jdGlvbiBpc0dhdGV3YXlWYWxpZCggZ2F0ZXdheUlkLCBnYXRld2F5c01ldGEgKSB7XHJcblx0aWYgKCB0eXBlb2YgZ2F0ZXdheXNNZXRhID09PSAnc3RyaW5nJyApIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGdhdGV3YXlzTWV0YSA9IEpTT04ucGFyc2UoIGdhdGV3YXlzTWV0YSB8fCAne30nICk7XHJcblx0XHR9IGNhdGNoICggZSApIHtcclxuXHRcdFx0Z2F0ZXdheXNNZXRhID0ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXF1aXJlZE1hcCA9IGdldFJlcXVpcmVkTWFwKCk7XHJcblx0Y29uc3QgcmVxdWlyZWQgPSByZXF1aXJlZE1hcD8uWyBnYXRld2F5SWQgXTtcclxuXHJcblx0aWYgKCAhIEFycmF5LmlzQXJyYXkoIHJlcXVpcmVkICkgfHwgISByZXF1aXJlZC5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBzcGVjaWZpYyAgPSBnYXRld2F5c01ldGE/LlsgZ2F0ZXdheUlkIF0gfHwge307XHJcblx0Y29uc3QgdXNlR2xvYmFsID0gISFzcGVjaWZpYy51c2VfZ2xvYmFsO1xyXG5cclxuXHRpZiAoIHVzZUdsb2JhbCApIHtcclxuXHRcdGNvbnN0IGdsb2JhbFZhbGlkID0gZ2V0R2xvYmFsVmFsaWQoKTtcclxuXHRcdHJldHVybiAhIWdsb2JhbFZhbGlkPy5bIGdhdGV3YXlJZCBdO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlcXVpcmVkLmV2ZXJ5KCAoIGtleSApID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gc3BlY2lmaWM/Llsga2V5IF07XHJcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnRyaW0oKSAhPT0gJycgOiAhIXZhbHVlO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0UGF5cGFsTWFpbixcclxuKTtcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0UGF5Tm93U2NlbmFyaW8sXHJcblx0J1BBWV9OT1cnLFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVnaXN0ZXIucGx1Z2luLmpmLXZhbGlkYXRpb24tcGFuZWwuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2dhdGV3YXlzJyxcclxuXHRmdW5jdGlvbiAoIHBsdWdpbnMgKSB7XHJcblx0XHRwbHVnaW5zLnB1c2goIGdhdGV3YXlQbHVnaW4gKTtcclxuXHJcblx0XHRyZXR1cm4gcGx1Z2lucztcclxuXHR9LFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=