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
      paddingLeft: '20px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFLQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBVUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUVBOzs7Ozs7Ozs7O0FDblNBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBTUE7QUFJQTtBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvY29tcG9uZW50cy9nYXRld2F5cy1lZGl0b3IuanMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL3BheXBhbC9tYWluLmpzIiwid2VicGFjazovL2pmYi1nYXRld2F5cy8uL2VkaXRvci9wYXlwYWwvcGF5LW5vdy1zY2VuYXJpby5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvcGx1Z2luL2luZGV4LmpzIiwid2VicGFjazovL2pmYi1nYXRld2F5cy8uL2VkaXRvci9wbHVnaW4vcmVuZGVyLmpzIiwid2VicGFjazovL2pmYi1nYXRld2F5cy9leHRlcm5hbCB3aW5kb3cgXCJSZWFjdFwiIiwid2VicGFjazovL2pmYi1nYXRld2F5cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7XHJcblx0Z2F0ZXdheUF0dHIsXHJcblx0cmVuZGVyR2F0ZXdheSxcclxuXHRyZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyLFxyXG59ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0YXJlYUNvbnRyb2wsXHJcblx0QmFzZUNvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3QsXHJcblx0d2l0aERpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFNlbGVjdEdhdGV3YXlzLFxyXG5cdHdpdGhEaXNwYXRjaEdhdGV3YXlzLFxyXG59ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IGdhdGV3YXlzRGF0YSA9IGdhdGV3YXlBdHRyKCk7XHJcbmNvbnN0IGxhYmVsID0gZ2F0ZXdheUF0dHIoICdsYWJlbHMnICk7XHJcblxyXG5mdW5jdGlvbiBHYXRld2F5c0VkaXRvcigge1xyXG5cdGdhdGV3YXlHZW5lcmFsLFxyXG5cdHNldEdhdGV3YXlJbm5lcixcclxuXHRsb2FkaW5nR2F0ZXdheSxcclxuXHRnYXRld2F5UmVxdWVzdCxcclxuXHRDVVJSRU5UX1NDRU5BUklPLFxyXG5cdGN1cnJlbnRTY2VuYXJpbyxcclxufSApIHtcclxuXHJcblx0LyoqXHJcblx0ICogVXNlZCBmb3Igc2V0IG5vdGlmaWNhdGlvbnMgYW5kIGdhdGV3YXkgdHlwZSBzZXR0aW5nc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHdoZW5cclxuXHQgKiBAcGFyYW0gdHlwZVxyXG5cdCAqIEBwYXJhbSBuZXdWYWx1ZVxyXG5cdCAqL1xyXG5cdGNvbnN0IHNldFZhbHVlSW5PYmplY3QgPSAoIHdoZW4sIHR5cGUsIG5ld1ZhbHVlICkgPT4ge1xyXG5cdFx0c2V0R2F0ZXdheUlubmVyKCB7XHJcblx0XHRcdGtleTogd2hlbixcclxuXHRcdFx0dmFsdWU6IHtcclxuXHRcdFx0XHRbIHR5cGUgXTogbmV3VmFsdWUsXHJcblx0XHRcdH0sXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHQvKipcclxuXHQgKiBVc2VkIGZvciBnZXQgbm90aWZpY2F0aW9ucyBhbmQgZ2F0ZXdheSB0eXBlIHNldHRpbmdzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gd2hlblxyXG5cdCAqIEBwYXJhbSB0eXBlXHJcblx0ICogQHBhcmFtIGlzRW1wdHlSZXN1bHRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbnwqfVxyXG5cdCAqL1xyXG5cdGNvbnN0IGdldE5vdGlmaWNhdGlvbnMgPSAoIHdoZW4sIHR5cGUsIGlzRW1wdHlSZXN1bHQgPSBmYWxzZSApID0+IHtcclxuXHRcdGlmICggZ2F0ZXdheUdlbmVyYWxbIHdoZW4gXSAmJiBnYXRld2F5R2VuZXJhbFsgd2hlbiBdWyB0eXBlIF0gKSB7XHJcblx0XHRcdHJldHVybiBnYXRld2F5R2VuZXJhbFsgd2hlbiBdWyB0eXBlIF07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaXNFbXB0eVJlc3VsdDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRSZXN1bHRNZXNzYWdlID0gKCBrZXksIHZhbHVlICkgPT4ge1xyXG5cdFx0c2V0VmFsdWVJbk9iamVjdCggJ21lc3NhZ2VzJywga2V5LCB2YWx1ZSApO1xyXG5cdH07XHJcblx0Y29uc3QgZ2V0UmVzdWx0TWVzc2FnZSA9ICgga2V5ICkgPT4ge1xyXG5cdFx0cmV0dXJuIGdldE5vdGlmaWNhdGlvbnMoICdtZXNzYWdlcycsIGtleSwgZ2F0ZXdheXNEYXRhLm1lc3NhZ2VzWyBrZXkgXSApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IEdhdGV3YXlGb290ZXIgPSA8PlxyXG5cdFx0eyByZW5kZXJHYXRld2F5V2l0aFBsYWNlaG9sZGVyKFxyXG5cdFx0XHRnYXRld2F5R2VuZXJhbC5nYXRld2F5LFxyXG5cdFx0XHR7IGdhdGV3YXlHZW5lcmFsLCBDVVJSRU5UX1NDRU5BUklPLCBjdXJyZW50U2NlbmFyaW8gfSxcclxuXHRcdFx0J21hY3Jvc0xpc3QnLFxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tYWNyb3NfYmFzZV9jb250cm9sXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxoND5cclxuXHRcdFx0XHRcdHsgX18oICdBdmFpbGFibGUgbWFjcm9zIGxpc3Q6ICcsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdFx0eyBfXyggJyVnYXRld2F5X2Ftb3VudCUgLSBwYXltZW50IGFtb3VudCByZXR1cm5lZCBmcm9tIGdhdGV3YXkgdGVtcGxhdGU7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHR7IF9fKCAnJWdhdGV3YXlfc3RhdHVzJSAtIHBheW1lbnQgc3RhdHVzIHJldHVybmVkIGZyb20gcGF5bWVudCBnYXRld2F5OycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdFx0eyBfXyggJyVmaWVsZF9uYW1lJSAtIHJlcGxhY2UgXCJmaWVsZF9uYW1lXCIgd2l0aCBhbnkgZmllbGQgbmFtZSBmcm9tIHRoZSBmb3JtOycsICdqZXQtZm9ybS1idWlsZGVyJyApIH08YnIvPlxyXG5cdFx0XHRcdDwvaDQ+XHJcblx0XHRcdDwvQmFzZUNvbnRyb2w+ICkgfVxyXG5cdFx0PFRleHRhcmVhQ29udHJvbFxyXG5cdFx0XHRrZXk9XCJwYXltZW50X3Jlc3VsdF9tZXNzYWdlX3N1Y2Nlc3NcIlxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnbWVzc2FnZV9zdWNjZXNzJyApIH1cclxuXHRcdFx0dmFsdWU9eyBnZXRSZXN1bHRNZXNzYWdlKCAnc3VjY2VzcycgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgbmV3VmFsdWUgPT4gc2V0UmVzdWx0TWVzc2FnZSggJ3N1Y2Nlc3MnLCBuZXdWYWx1ZSApIH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21lc3NhZ2VfZmFpbGVkXCJcclxuXHRcdFx0bGFiZWw9eyBsYWJlbCggJ21lc3NhZ2VfZmFpbGVkJyApIH1cclxuXHRcdFx0dmFsdWU9eyBnZXRSZXN1bHRNZXNzYWdlKCAnZmFpbGVkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRSZXN1bHRNZXNzYWdlKCAnZmFpbGVkJywgbmV3VmFsdWUgKSB9XHJcblx0XHQvPlxyXG5cdDwvPjtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHR7IHJlbmRlckdhdGV3YXkoIGdhdGV3YXlHZW5lcmFsLmdhdGV3YXksIHsgc2V0VmFsdWVJbk9iamVjdCwgZ2V0Tm90aWZpY2F0aW9ucyB9ICkgfVxyXG5cdFx0eyAoXHJcblx0XHRcdCAgLSAxID09PSBnYXRld2F5UmVxdWVzdC5pZFxyXG5cdFx0XHQgIHx8IGxvYWRpbmdHYXRld2F5LnN1Y2Nlc3NcclxuXHRcdFx0ICB8fCAhIGdhdGV3YXlSZXF1ZXN0LmlkLmluY2x1ZGVzKCBnYXRld2F5R2VuZXJhbC5nYXRld2F5IClcclxuXHRcdCAgKSAmJiBHYXRld2F5Rm9vdGVyIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aFNlbGVjdCggKCAuLi5wcm9wcyApID0+IChcclxuXHRcdHtcclxuXHRcdFx0Li4ud2l0aFNlbGVjdEdhdGV3YXlzKCAuLi5wcm9wcyApLFxyXG5cdFx0fVxyXG5cdCkgKSxcclxuXHR3aXRoRGlzcGF0Y2goIHdpdGhEaXNwYXRjaEdhdGV3YXlzICksXHJcbikoIEdhdGV3YXlzRWRpdG9yICk7IiwiY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHdpdGhTZWxlY3QsXHJcblx0ICAgICAgd2l0aERpc3BhdGNoLFxyXG4gICAgICB9ID0gd3AuZGF0YTtcclxuY29uc3Qge1xyXG5cdCAgICAgIF9fLFxyXG4gICAgICB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBUZXh0Q29udHJvbCxcclxuXHQgICAgICBTZWxlY3RDb250cm9sLFxyXG5cdCAgICAgIHdpdGhOb3RpY2VzLFxyXG4gICAgICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VFZmZlY3QsXHJcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHJlbmRlckdhdGV3YXksXHJcbiAgICAgIH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgd2l0aFNlbGVjdEdhdGV3YXlzLFxyXG5cdCAgICAgIHdpdGhEaXNwYXRjaEdhdGV3YXlzLFxyXG4gICAgICB9ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBUb2dnbGVDb250cm9sLFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUGF5cGFsTWFpbigge1xyXG5cdHNldEdhdGV3YXlSZXF1ZXN0LFxyXG5cdGdhdGV3YXlTcGVjaWZpYyxcclxuXHRzZXRHYXRld2F5U3BlY2lmaWMsXHJcblx0Z2F0ZXdheVNjZW5hcmlvLFxyXG5cdHNldEdhdGV3YXlTY2VuYXJpbyxcclxuXHRnZXRTcGVjaWZpY09yR2xvYmFsLFxyXG5cdGFkZGl0aW9uYWxTb3VyY2VHYXRld2F5LFxyXG5cdHNwZWNpZmljR2F0ZXdheUxhYmVsLFxyXG5cdG5vdGljZU9wZXJhdGlvbnMsXHJcblx0bm90aWNlVUksXHJcbn0gKSB7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdCAgICAgIGlkOiBzY2VuYXJpbyA9ICdQQVlfTk9XJyxcclxuXHQgICAgICB9ID0gZ2F0ZXdheVNjZW5hcmlvO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdHNldEdhdGV3YXlSZXF1ZXN0KCB7IGlkOiBzY2VuYXJpbyB9ICk7XHJcblx0fSwgWyBzY2VuYXJpbyBdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0R2F0ZXdheVJlcXVlc3QoIHsgaWQ6IHNjZW5hcmlvIH0gKTtcclxuXHR9LCBbXSApO1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgbm90aWNlVUkgfVxyXG5cdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0Y2hlY2tlZD17IGdhdGV3YXlTcGVjaWZpYy51c2VfZ2xvYmFsIH1cclxuXHRcdFx0b25DaGFuZ2U9eyB1c2VfZ2xvYmFsID0+IHNldEdhdGV3YXlTcGVjaWZpYyggeyB1c2VfZ2xvYmFsIH0gKSB9XHJcblx0XHQ+XHJcblx0XHRcdHsgX18oICdVc2UnLCAnamV0LWZvcm0tYnVpbGRlcicgKSArICcgJyB9XHJcblx0XHRcdDxhIGhyZWY9eyBKZXRGb3JtRWRpdG9yRGF0YS5nbG9iYWxfc2V0dGluZ3NfdXJsICtcclxuXHRcdFx0JyNwYXltZW50cy1nYXRld2F5c19fcGF5cGFsJyB9PlxyXG5cdFx0XHRcdHsgX18oICdHbG9iYWwgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdDwvYT5cclxuXHRcdDwvVG9nZ2xlQ29udHJvbD5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IHNwZWNpZmljR2F0ZXdheUxhYmVsKCAnY2xpZW50X2lkJyApIH1cclxuXHRcdFx0a2V5PVwicGF5cGFsX2NsaWVudF9pZF9zZXR0aW5nXCJcclxuXHRcdFx0dmFsdWU9eyBnZXRTcGVjaWZpY09yR2xvYmFsKCAnY2xpZW50X2lkJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBjbGllbnRfaWQgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IGNsaWVudF9pZCB9ICkgfVxyXG5cdFx0XHRkaXNhYmxlZD17IGdhdGV3YXlTcGVjaWZpYy51c2VfZ2xvYmFsIH1cclxuXHRcdC8+XHJcblx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBzcGVjaWZpY0dhdGV3YXlMYWJlbCggJ3NlY3JldCcgKSB9XHJcblx0XHRcdGtleT1cInBheXBhbF9zZWNyZXRfc2V0dGluZ1wiXHJcblx0XHRcdHZhbHVlPXsgZ2V0U3BlY2lmaWNPckdsb2JhbCggJ3NlY3JldCcgKSB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgc2VjcmV0ID0+IHNldEdhdGV3YXlTcGVjaWZpYyggeyBzZWNyZXQgfSApIH1cclxuXHRcdFx0ZGlzYWJsZWQ9eyBnYXRld2F5U3BlY2lmaWMudXNlX2dsb2JhbCB9XHJcblx0XHQvPlxyXG5cdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRsYWJlbD17IHNwZWNpZmljR2F0ZXdheUxhYmVsKCAnZ2F0ZXdheV90eXBlJyApIH1cclxuXHRcdFx0dmFsdWU9eyBzY2VuYXJpbyB9XHJcblx0XHRcdG9uQ2hhbmdlPXsgaWQgPT4ge1xyXG5cdFx0XHRcdHNldEdhdGV3YXlTY2VuYXJpbyggeyBpZCB9ICk7XHJcblx0XHRcdH0gfVxyXG5cdFx0XHRvcHRpb25zPXsgYWRkaXRpb25hbFNvdXJjZUdhdGV3YXkuc2NlbmFyaW9zIH1cclxuXHRcdC8+XHJcblx0XHR7IHJlbmRlckdhdGV3YXkoICdwYXlwYWwnLCB7IG5vdGljZU9wZXJhdGlvbnMgfSwgc2NlbmFyaW8gKSB9XHJcblx0PC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxyXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RHYXRld2F5cyApLFxyXG5cdHdpdGhEaXNwYXRjaCggd2l0aERpc3BhdGNoR2F0ZXdheXMgKSxcclxuXHR3aXRoTm90aWNlcyxcclxuKSggUGF5cGFsTWFpbiApO1xyXG5cclxuXHJcbiIsImNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0LFxyXG5cdHdpdGhEaXNwYXRjaCxcclxufSA9IHdwLmRhdGE7XHJcblxyXG5jb25zdCB7XHJcblx0VGV4dENvbnRyb2wsXHJcblx0U2VsZWN0Q29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxuXHRSYWRpb0NvbnRyb2wsXHJcbn0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3RGb3JtRmllbGRzLFxyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxuXHR3aXRoU2VsZWN0QWN0aW9uc0J5VHlwZSxcclxufSA9IEpldEZCSG9va3M7XHJcblxyXG5jb25zdCB7IEdhdGV3YXlGZXRjaEJ1dHRvbiB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuZnVuY3Rpb24gUGF5Tm93U2NlbmFyaW8oIHtcclxuXHRnYXRld2F5R2VuZXJhbCxcclxuXHRnYXRld2F5U3BlY2lmaWMsXHJcblx0c2V0R2F0ZXdheSxcclxuXHRzZXRHYXRld2F5U3BlY2lmaWMsXHJcblx0Zm9ybUZpZWxkcyxcclxuXHRnZXRTcGVjaWZpY09yR2xvYmFsLFxyXG5cdGxvYWRpbmdHYXRld2F5LFxyXG5cdHNjZW5hcmlvU291cmNlLFxyXG5cdG5vdGljZU9wZXJhdGlvbnMsXHJcblx0c2NlbmFyaW9MYWJlbCxcclxuXHRnbG9iYWxHYXRld2F5TGFiZWwsXHJcbn0gKSB7XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlOb3RpY2UgPSBzdGF0dXMgPT4gcmVzcG9uc2UgPT4ge1xyXG5cdFx0bm90aWNlT3BlcmF0aW9ucy5yZW1vdmVOb3RpY2UoIGdhdGV3YXlHZW5lcmFsLmdhdGV3YXkgKTtcclxuXHRcdG5vdGljZU9wZXJhdGlvbnMuY3JlYXRlTm90aWNlKCB7XHJcblx0XHRcdHN0YXR1cyxcclxuXHRcdFx0Y29udGVudDogcmVzcG9uc2UubWVzc2FnZSxcclxuXHRcdFx0aWQ6IGdhdGV3YXlHZW5lcmFsLmdhdGV3YXksXHJcblx0XHR9ICk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIDw+XHJcblx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0bGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uX2xhYmVsJyApIH1cclxuXHRcdD5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZXQtdXNlci1maWVsZHMtbWFwX19saXN0XCI+XHJcblx0XHRcdFx0eyAoICEgbG9hZGluZ0dhdGV3YXkuc3VjY2VzcyAmJiAhIGxvYWRpbmdHYXRld2F5LmxvYWRpbmcgKSAmJiA8c3BhblxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPXsgJ2Rlc2NyaXB0aW9uLWNvbnRyb2xzJyB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uX2hlbHAnICkgfVxyXG5cdFx0XHRcdDwvc3Bhbj4gfVxyXG5cdFx0XHRcdDxHYXRld2F5RmV0Y2hCdXR0b25cclxuXHRcdFx0XHRcdGluaXRpYWxMYWJlbD17IHNjZW5hcmlvTGFiZWwoICdmZXRjaF9idXR0b24nICkgfVxyXG5cdFx0XHRcdFx0bGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnZmV0Y2hfYnV0dG9uX3JldHJ5JyApIH1cclxuXHRcdFx0XHRcdGFwaUFyZ3M9eyB7XHJcblx0XHRcdFx0XHRcdC4uLnNjZW5hcmlvU291cmNlLmZldGNoLFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0Y2xpZW50X2lkOiBnZXRTcGVjaWZpY09yR2xvYmFsKCAnY2xpZW50X2lkJyApLFxyXG5cdFx0XHRcdFx0XHRcdHNlY3JldDogZ2V0U3BlY2lmaWNPckdsb2JhbCggJ3NlY3JldCcgKSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0b25GYWlsPXsgZGlzcGxheU5vdGljZSggJ2Vycm9yJyApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvQmFzZUNvbnRyb2w+XHJcblx0XHR7IGxvYWRpbmdHYXRld2F5LnN1Y2Nlc3MgJiYgPD5cclxuXHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBzY2VuYXJpb0xhYmVsKCAnY3VycmVuY3knICkgfVxyXG5cdFx0XHRcdGtleT0ncGF5cGFsX2N1cnJlbmN5X2NvZGVfc2V0dGluZydcclxuXHRcdFx0XHR2YWx1ZT17IGdhdGV3YXlTcGVjaWZpYy5jdXJyZW5jeSB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyBjdXJyZW5jeSA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgY3VycmVuY3kgfSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGdsb2JhbEdhdGV3YXlMYWJlbCggJ3ByaWNlX2ZpZWxkJyApIH1cclxuXHRcdFx0XHRrZXk9eyAnZm9ybV9maWVsZHNfcHJpY2VfZmllbGQnIH1cclxuXHRcdFx0XHR2YWx1ZT17IGdhdGV3YXlHZW5lcmFsLnByaWNlX2ZpZWxkIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdzaWRlJ1xyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcHJpY2VfZmllbGQgPT4ge1xyXG5cdFx0XHRcdFx0c2V0R2F0ZXdheSggeyBwcmljZV9maWVsZCB9ICk7XHJcblx0XHRcdFx0fSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0PC8+IH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aFNlbGVjdCggKCAuLi5wcm9wcyApID0+IChcclxuXHRcdHtcclxuXHRcdFx0Li4ud2l0aFNlbGVjdEZvcm1GaWVsZHMoIFtdLCAnLS0nICkoIC4uLnByb3BzICksXHJcblx0XHRcdC4uLndpdGhTZWxlY3RHYXRld2F5cyggLi4ucHJvcHMgKSxcclxuXHRcdH1cclxuXHQpICksXHJcblx0d2l0aERpc3BhdGNoKCAoIC4uLnByb3BzICkgPT4gKFxyXG5cdFx0e1xyXG5cdFx0XHQuLi53aXRoRGlzcGF0Y2hHYXRld2F5cyggLi4ucHJvcHMgKSxcclxuXHRcdH1cclxuXHQpICksXHJcbikoIFBheU5vd1NjZW5hcmlvICk7IiwiaW1wb3J0IFBsdWdpbkdhdGV3YXlzIGZyb20gJy4vcmVuZGVyJztcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBiYXNlID0ge1xyXG5cdG5hbWU6ICdqZi1nYXRld2F5cy1wYW5lbCcsXHJcblx0dGl0bGU6IF9fKCAnR2F0ZXdheXMgU2V0dGluZ3MnLCAnamV0LWZvcm0tYnVpbGRlcicgKSxcclxufTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG5cdHJlbmRlcjogUGx1Z2luR2F0ZXdheXMsXHJcblx0aWNvbjogJ21vbmV5LWFsdCcsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0YmFzZSxcclxuXHRzZXR0aW5ncyxcclxufTsiLCJpbXBvcnQgR2F0ZXdheXNFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9nYXRld2F5cy1lZGl0b3InO1xyXG5cclxuY29uc3Qge1xyXG5cdEJ1dHRvbixcclxuXHRUb2dnbGVDb250cm9sLFxyXG5cdE5vdGljZSxcclxuXHRfX2V4cGVyaW1lbnRhbEl0ZW1Hcm91cDogSXRlbUdyb3VwLFxyXG5cdF9fZXhwZXJpbWVudGFsSXRlbTogSXRlbSxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7IHdpdGhEaXNwYXRjaCwgd2l0aFNlbGVjdCwgdXNlU2VsZWN0LCBkaXNwYXRjaCB9ID0gd3AuZGF0YTtcclxuY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSB3cC5lbGVtZW50O1xyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5jb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcbmNvbnN0IHsgY3JlYXRlQmxvY2sgfSA9IHdwLmJsb2NrcztcclxuXHJcbmNvbnN0IHsgQWN0aW9uTW9kYWwgfSA9IEpldEZCQ29tcG9uZW50cztcclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoRGlzcGF0Y2hHYXRld2F5cyxcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0dXNlTWV0YVN0YXRlLFxyXG59ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IGdhdGV3YXlzRGF0YSA9IHdpbmRvdy5KZXRGb3JtRWRpdG9yRGF0YS5nYXRld2F5cztcclxuXHJcbmNvbnN0IE1PREVfU0lOR0xFID0gJ3NpbmdsZSc7XHJcbmNvbnN0IE1PREVfTUFOVUFMID0gJ21hbnVhbCc7XHJcblxyXG5jb25zdCBNVUxUSV9HQVRFV0FZX0JMT0NLID0gJ2pldC1mb3Jtcy9tdWx0aS1nYXRld2F5JztcclxuXHJcbmNvbnN0IGdldEdhdGV3YXlMYWJlbCA9ICggdHlwZSApID0+IHtcclxuXHRyZXR1cm4gZ2F0ZXdheXNEYXRhLmxpc3QuZmluZCggZWwgPT4gZWwudmFsdWUgPT09IHR5cGUgKT8ubGFiZWwgfHwgdHlwZTtcclxufTtcclxuXHJcbmNvbnN0IGhhc0Jsb2NrUmVjdXJzaXZlID0gKCBibG9ja3MsIG5hbWUgKSA9PiB7XHJcblx0Zm9yICggY29uc3QgYmxvY2sgb2YgYmxvY2tzICkge1xyXG5cdFx0aWYgKCBibG9jay5uYW1lID09PSBuYW1lICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGlmICggYmxvY2suaW5uZXJCbG9ja3M/Lmxlbmd0aCAmJiBoYXNCbG9ja1JlY3Vyc2l2ZSggYmxvY2suaW5uZXJCbG9ja3MsIG5hbWUgKSApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIFBsdWdpbkdhdGV3YXlzKCBwcm9wcyApIHtcclxuXHRjb25zdCB7XHJcblx0XHRzZXRHYXRld2F5LFxyXG5cdFx0c2V0R2F0ZXdheVNjZW5hcmlvLFxyXG5cdFx0Y2xlYXJHYXRld2F5LFxyXG5cdFx0Y2xlYXJTY2VuYXJpbyxcclxuXHRcdGdhdGV3YXlHZW5lcmFsLFxyXG5cdFx0Z2F0ZXdheVNjZW5hcmlvLFxyXG5cdH0gPSBwcm9wcztcclxuXHJcblx0Y29uc3QgWyBtZXRhLCBzZXRNZXRhIF0gPSB1c2VNZXRhU3RhdGUoICdfamZfZ2F0ZXdheXMnICk7XHJcblx0Y29uc3QgWyBpc0VkaXQsIHNldEVkaXQgXSA9IHVzZVN0YXRlKCBmYWxzZSApO1xyXG5cclxuXHQvLyBVSS1zZWxlY3RlZCB2YWx1ZSAoY2FuIGJlIFwibWFudWFsXCIgd2l0aG91dCB0b3VjaGluZyBtZXRhLmdhdGV3YXkpXHJcblx0Y29uc3QgWyBzZWxlY3RlZEdhdGV3YXksIHNldFNlbGVjdGVkR2F0ZXdheSBdID0gdXNlU3RhdGUoIG1ldGE/LmdhdGV3YXkgPz8gJ25vbmUnICk7XHJcblxyXG5cdC8vIHdoaWNoIGdhdGV3YXkgaXMgY3VycmVudGx5IGJlaW5nIGVkaXRlZCBpbiBtb2RhbFxyXG5cdGNvbnN0IFsgZWRpdEdhdGV3YXksIHNldEVkaXRHYXRld2F5IF0gPSB1c2VTdGF0ZSggbnVsbCApO1xyXG5cclxuXHRjb25zdCBpc01hbnVhbE1vZGUgPSBtZXRhPy5tb2RlID09PSBNT0RFX01BTlVBTDtcclxuXHJcblx0Y29uc3QgaGFzTXVsdGlHYXRld2F5QmxvY2sgPSB1c2VTZWxlY3QoXHJcblx0XHQoIHNlbGVjdCApID0+IHtcclxuXHRcdFx0Y29uc3QgZWRpdG9yID0gc2VsZWN0KCAnY29yZS9ibG9jay1lZGl0b3InICk7XHJcblx0XHRcdGlmICggIWVkaXRvcj8uZ2V0QmxvY2tzICkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gaGFzQmxvY2tSZWN1cnNpdmUoIGVkaXRvci5nZXRCbG9ja3MoKSwgTVVMVElfR0FURVdBWV9CTE9DSyApO1xyXG5cdFx0fSxcclxuXHRcdFtdXHJcblx0KTtcclxuXHJcblx0Y29uc3QgaW5zZXJ0TXVsdGlHYXRld2F5QmxvY2sgPSAoKSA9PiB7XHJcblx0XHRkaXNwYXRjaCggJ2NvcmUvYmxvY2stZWRpdG9yJyApLmluc2VydEJsb2NrcyhcclxuXHRcdFx0Y3JlYXRlQmxvY2soIE1VTFRJX0dBVEVXQVlfQkxPQ0sgKVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggaXNNYW51YWxNb2RlICkge1xyXG5cdFx0XHRzZXRTZWxlY3RlZEdhdGV3YXkoIE1PREVfTUFOVUFMICk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHNldFNlbGVjdGVkR2F0ZXdheSggbWV0YT8uZ2F0ZXdheSA/PyAnbm9uZScgKTtcclxuXHR9LCBbIG1ldGE/LmdhdGV3YXksIG1ldGE/Lm1vZGUgXSApO1xyXG5cclxuXHR1c2VFZmZlY3QoICgpID0+IHtcclxuXHRcdGlmICggIWlzRWRpdCApIHtcclxuXHRcdFx0Y2xlYXJHYXRld2F5KCk7XHJcblx0XHRcdGNsZWFyU2NlbmFyaW8oKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGd3ID0gZWRpdEdhdGV3YXkgfHwgbWV0YT8uZ2F0ZXdheTtcclxuXHJcblx0XHRpZiAoICFndyB8fCBndyA9PT0gJ25vbmUnICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBpc01hbnVhbE1vZGUgJiYgIWVkaXRHYXRld2F5ICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0c2V0R2F0ZXdheSggeyAuLi5tZXRhLCBnYXRld2F5OiBndyB9ICk7XHJcblx0XHRzZXRHYXRld2F5U2NlbmFyaW8oIG1ldGE/LlsgZ3cgXT8uc2NlbmFyaW8gKTtcclxuXHR9LCBbIGlzRWRpdCwgZWRpdEdhdGV3YXkgXSApO1xyXG5cclxuXHRjb25zdCBjbG9zZU1vZGFsID0gKCBuZXdNZXRhID0gZmFsc2UgKSA9PiB7XHJcblx0XHRpZiAoIGZhbHNlICE9PSBuZXdNZXRhICkge1xyXG5cdFx0XHRzZXRNZXRhKCBuZXdNZXRhICk7XHJcblx0XHR9XHJcblx0XHRzZXRFZGl0KCBmYWxzZSApO1xyXG5cdFx0c2V0RWRpdEdhdGV3YXkoIG51bGwgKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvcHRpb25zID0gW1xyXG5cdFx0eyBsYWJlbDogJ05vbmUnLCB2YWx1ZTogJ25vbmUnIH0sXHJcblx0XHQuLi5nYXRld2F5c0RhdGEubGlzdCxcclxuXHRcdHsgbGFiZWw6ICdNYW51YWwnLCB2YWx1ZTogTU9ERV9NQU5VQUwgfSxcclxuXHRdO1xyXG5cclxuXHRjb25zdCBzdHlsZXMgPSB7XHJcblx0XHRyb3c6IHtcclxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHRcdFx0anVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuXHRcdFx0d2lkdGg6ICcxMDAlJyxcclxuXHRcdH0sXHJcblx0XHRpdGVtOiB7XHJcblx0XHRcdGRpc3BsYXk6ICdmbGV4JyxcclxuXHRcdFx0bWluSGVpZ2h0OiAnNTBweCcsXHJcblx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcblx0XHR9LFxyXG5cdFx0dG9nZ2xlOiB7XHJcblx0XHRcdHBhZGRpbmdUb3A6ICcxMHB4JyxcclxuXHRcdFx0cGFkZGluZ0xlZnQ6ICcyMHB4JywgXHJcblx0XHRcdGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG5cdFx0fSxcclxuXHRcdG5vdGljZToge1xyXG5cdFx0XHRtYXJnaW5Ub3A6ICcxMHB4JyxcclxuXHRcdH0sXHJcblx0XHRub3RpY2VfX2J0bjoge1xyXG5cdFx0XHRtYXJnaW5MZWZ0OiAnMCcsXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxJdGVtR3JvdXAgY2xhc3NOYW1lPVwiamZiLWdhdGV3YXlzXCIgaXNCb3JkZXJlZCBpc1NlcGFyYXRlZD5cclxuXHRcdFx0XHR7IG9wdGlvbnMubWFwKCAoIG9wdCApID0+IHtcclxuXHRcdFx0XHRcdGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZEdhdGV3YXkgPT09IG9wdC52YWx1ZTtcclxuXHJcblx0XHRcdFx0XHRjb25zdCBjYW5FZGl0ID1cclxuXHRcdFx0XHRcdFx0b3B0LnZhbHVlICE9PSAnbm9uZSdcclxuXHRcdFx0XHRcdFx0JiYgb3B0LnZhbHVlICE9PSBNT0RFX01BTlVBTFxyXG5cdFx0XHRcdFx0XHQmJiAoIGlzTWFudWFsTW9kZSB8fCBpc1NlbGVjdGVkICk7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY2FuVG9nZ2xlID1cclxuXHRcdFx0XHRcdFx0aXNNYW51YWxNb2RlXHJcblx0XHRcdFx0XHRcdCYmIG9wdC52YWx1ZSAhPT0gJ25vbmUnXHJcblx0XHRcdFx0XHRcdCYmIG9wdC52YWx1ZSAhPT0gTU9ERV9NQU5VQUw7XHJcblxyXG5cdFx0XHRcdFx0cmV0dXJuIChcclxuXHRcdFx0XHRcdFx0PEl0ZW1cclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBvcHQudmFsdWUgfVxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19faXRlbVwiXHJcblx0XHRcdFx0XHRcdFx0c3R5bGU9eyBzdHlsZXMuaXRlbSB9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fcm93XCIgc3R5bGU9eyBzdHlsZXMucm93IH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiamZiLWdhdGV3YXlzX19vcHRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiamZiX2dhdGV3YXlcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXsgb3B0LnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgaXNTZWxlY3RlZCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRTZWxlY3RlZEdhdGV3YXkoIG9wdC52YWx1ZSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggb3B0LnZhbHVlID09PSBNT0RFX01BTlVBTCApIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TWV0YSggeyAuLi5tZXRhLCBtb2RlOiBNT0RFX01BTlVBTCB9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRNZXRhKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLm1ldGEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGU6IE1PREVfU0lOR0xFLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRnYXRld2F5OiBvcHQudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fbGFiZWxcIj57IG9wdC5sYWJlbCB9PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fYWN0aW9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7IGNhbkVkaXQgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17ICgpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdEdhdGV3YXkoIG9wdC52YWx1ZSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRFZGl0KCB0cnVlICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJhZG1pbi10b29sc1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc1NlY29uZGFyeVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnRWRpdCcsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzcGFjZXIgdG8gcHJldmVudCBqdW1wc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fZWRpdC1zcGFjZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHR7IGNhblRvZ2dsZSAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fdG9nZ2xlXCIgc3R5bGU9eyBzdHlsZXMudG9nZ2xlIH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ1Nob3cgb24gZnJvbnRlbmQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17ICEhbWV0YT8uWyBvcHQudmFsdWUgXT8uc2hvd19vbl9mcm9udCB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIHZhbHVlICkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TWV0YSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbIG9wdC52YWx1ZSBdOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uKCBtZXRhPy5bIG9wdC52YWx1ZSBdIHx8IHt9ICksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2hvd19vbl9mcm9udDogdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpIH1cclxuXHJcblx0XHRcdFx0XHRcdFx0eyBvcHQudmFsdWUgPT09IE1PREVfTUFOVUFMICYmIGlzTWFudWFsTW9kZSAmJiAhaGFzTXVsdGlHYXRld2F5QmxvY2sgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX25vdGljZVwiIHN0eWxlPXsgc3R5bGVzLm5vdGljZSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Tm90aWNlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RhdHVzPVwid2FybmluZ1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNEaXNtaXNzaWJsZT17IGZhbHNlIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBfXyhcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1RvIGRpc3BsYXkgZ2F0ZXdheXMgb24gdGhlIGZyb250ZW5kIGluIE1hbnVhbCBtb2RlLCBhZGQgdGhlIE11bHRpIEdhdGV3YXkgYmxvY2sgdG8gdGhlIGZvcm0uJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2pldC1mb3JtLWJ1aWxkZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBpbnNlcnRNdWx0aUdhdGV3YXlCbG9jayB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPVwic21hbGxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9eyBzdHlsZXMubm90aWNlX19idG4gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgX18oICdBZGQgYmxvY2snLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L05vdGljZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdCkgfVxyXG5cdFx0XHRcdFx0XHQ8L0l0ZW0+XHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0gKSB9XHJcblx0XHRcdDwvSXRlbUdyb3VwPlxyXG5cclxuXHRcdFx0eyBpc0VkaXQgJiYgKFxyXG5cdFx0XHRcdDxBY3Rpb25Nb2RhbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcz17IFsgJ3dpZHRoLTYwJyBdIH1cclxuXHRcdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsgKCkgPT4gY2xvc2VNb2RhbCgpIH1cclxuXHRcdFx0XHRcdG9uQ2FuY2VsQ2xpY2s9eyAoKSA9PiBjbG9zZU1vZGFsKCkgfVxyXG5cdFx0XHRcdFx0b25VcGRhdGVDbGljaz17ICgpID0+IGNsb3NlTW9kYWwoIHtcclxuXHRcdFx0XHRcdFx0Li4uZ2F0ZXdheUdlbmVyYWwsXHJcblx0XHRcdFx0XHRcdFsgZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSBdOiB7XHJcblx0XHRcdFx0XHRcdFx0Li4uKCBnYXRld2F5R2VuZXJhbFsgZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSBdIHx8IHt9ICksXHJcblx0XHRcdFx0XHRcdFx0c2NlbmFyaW86IGdhdGV3YXlTY2VuYXJpbyxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0gKSB9XHJcblx0XHRcdFx0XHR0aXRsZT17IGBFZGl0ICR7IGdldEdhdGV3YXlMYWJlbCggZWRpdEdhdGV3YXkgfHwgbWV0YT8uZ2F0ZXdheSApIH0gU2V0dGluZ3NgIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8R2F0ZXdheXNFZGl0b3IvPlxyXG5cdFx0XHRcdDwvQWN0aW9uTW9kYWw+XHJcblx0XHRcdCkgfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuXHR3aXRoRGlzcGF0Y2goIHdpdGhEaXNwYXRjaEdhdGV3YXlzICksXHJcblx0d2l0aFNlbGVjdCggd2l0aFNlbGVjdEdhdGV3YXlzICksXHJcbikoIFBsdWdpbkdhdGV3YXlzICk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wiUmVhY3RcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQYXlwYWxNYWluIGZyb20gJy4vcGF5cGFsL21haW4nO1xyXG5pbXBvcnQgUGF5Tm93U2NlbmFyaW8gZnJvbSAnLi9wYXlwYWwvcGF5LW5vdy1zY2VuYXJpbyc7XHJcbmltcG9ydCBnYXRld2F5UGx1Z2luIGZyb20gJy4vcGx1Z2luJztcclxuXHJcbmNvbnN0IHsgcmVnaXN0ZXJHYXRld2F5IH0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciwgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IGdhdGV3YXlJRCA9ICdwYXlwYWwnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VmFsaWRhdGlvbkRhdGEoKSB7XHJcblx0cmV0dXJuIHdpbmRvdz8uSmV0Rm9ybUVkaXRvckRhdGE/LmdhdGV3YXlzPy52YWxpZGF0aW9uIHx8IHt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZXF1aXJlZE1hcCgpIHtcclxuXHRyZXR1cm4gZ2V0VmFsaWRhdGlvbkRhdGEoKT8ucmVxdWlyZWRfbWFwIHx8IHt9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHbG9iYWxWYWxpZCgpIHtcclxuXHRyZXR1cm4gZ2V0VmFsaWRhdGlvbkRhdGEoKT8uZ2xvYmFsX3ZhbGlkIHx8IHt9O1xyXG59XHJcblxyXG5KZXRGQkFjdGlvbnMuaXNHYXRld2F5VmFsaWQgPSBmdW5jdGlvbiBpc0dhdGV3YXlWYWxpZCggZ2F0ZXdheUlkLCBnYXRld2F5c01ldGEgKSB7XHJcblx0aWYgKCB0eXBlb2YgZ2F0ZXdheXNNZXRhID09PSAnc3RyaW5nJyApIHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGdhdGV3YXlzTWV0YSA9IEpTT04ucGFyc2UoIGdhdGV3YXlzTWV0YSB8fCAne30nICk7XHJcblx0XHR9IGNhdGNoICggZSApIHtcclxuXHRcdFx0Z2F0ZXdheXNNZXRhID0ge307XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRjb25zdCByZXF1aXJlZE1hcCA9IGdldFJlcXVpcmVkTWFwKCk7XHJcblx0Y29uc3QgcmVxdWlyZWQgPSByZXF1aXJlZE1hcD8uWyBnYXRld2F5SWQgXTtcclxuXHJcblx0aWYgKCAhIEFycmF5LmlzQXJyYXkoIHJlcXVpcmVkICkgfHwgISByZXF1aXJlZC5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRjb25zdCBzcGVjaWZpYyAgPSBnYXRld2F5c01ldGE/LlsgZ2F0ZXdheUlkIF0gfHwge307XHJcblx0Y29uc3QgdXNlR2xvYmFsID0gISFzcGVjaWZpYy51c2VfZ2xvYmFsO1xyXG5cclxuXHRpZiAoIHVzZUdsb2JhbCApIHtcclxuXHRcdGNvbnN0IGdsb2JhbFZhbGlkID0gZ2V0R2xvYmFsVmFsaWQoKTtcclxuXHRcdHJldHVybiAhIWdsb2JhbFZhbGlkPy5bIGdhdGV3YXlJZCBdO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHJlcXVpcmVkLmV2ZXJ5KCAoIGtleSApID0+IHtcclxuXHRcdGNvbnN0IHZhbHVlID0gc3BlY2lmaWM/Llsga2V5IF07XHJcblx0XHRyZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlLnRyaW0oKSAhPT0gJycgOiAhIXZhbHVlO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0UGF5cGFsTWFpbixcclxuKTtcclxuXHJcbnJlZ2lzdGVyR2F0ZXdheShcclxuXHRnYXRld2F5SUQsXHJcblx0UGF5Tm93U2NlbmFyaW8sXHJcblx0J1BBWV9OT1cnLFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVnaXN0ZXIucGx1Z2luLmpmLXZhbGlkYXRpb24tcGFuZWwuYWZ0ZXInLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL2dhdGV3YXlzJyxcclxuXHRmdW5jdGlvbiAoIHBsdWdpbnMgKSB7XHJcblx0XHRwbHVnaW5zLnB1c2goIGdhdGV3YXlQbHVnaW4gKTtcclxuXHJcblx0XHRyZXR1cm4gcGx1Z2lucztcclxuXHR9LFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=