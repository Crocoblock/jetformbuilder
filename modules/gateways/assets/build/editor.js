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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQU9BO0FBRUE7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckdBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBS0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBR0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBT0E7QUFFQTs7Ozs7Ozs7OztBQ2xTQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBS0E7QUFNQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1nYXRld2F5cy8uL2VkaXRvci9jb21wb25lbnRzL2dhdGV3YXlzLWVkaXRvci5qcyIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvLi9lZGl0b3IvcGF5cGFsL21haW4uanMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL3BheXBhbC9wYXktbm93LXNjZW5hcmlvLmpzIiwid2VicGFjazovL2pmYi1nYXRld2F5cy8uL2VkaXRvci9wbHVnaW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzLy4vZWRpdG9yL3BsdWdpbi9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL2V4dGVybmFsIHdpbmRvdyBcIlJlYWN0XCIiLCJ3ZWJwYWNrOi8vamZiLWdhdGV3YXlzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1nYXRld2F5cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItZ2F0ZXdheXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2pmYi1nYXRld2F5cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1nYXRld2F5cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1nYXRld2F5cy8uL2VkaXRvci9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtcclxuXHRnYXRld2F5QXR0cixcclxuXHRyZW5kZXJHYXRld2F5LFxyXG5cdHJlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXIsXHJcbn0gPSBKZXRGQkFjdGlvbnM7XHJcblxyXG5jb25zdCB7IF9fIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdFRleHRhcmVhQ29udHJvbCxcclxuXHRCYXNlQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFNlbGVjdCxcclxuXHR3aXRoRGlzcGF0Y2gsXHJcbn0gPSB3cC5kYXRhO1xyXG5cclxuY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuXHJcbmNvbnN0IHtcclxuXHR3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0d2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgZ2F0ZXdheXNEYXRhID0gZ2F0ZXdheUF0dHIoKTtcclxuY29uc3QgbGFiZWwgPSBnYXRld2F5QXR0ciggJ2xhYmVscycgKTtcclxuXHJcbmZ1bmN0aW9uIEdhdGV3YXlzRWRpdG9yKCB7XHJcblx0Z2F0ZXdheUdlbmVyYWwsXHJcblx0c2V0R2F0ZXdheUlubmVyLFxyXG5cdGxvYWRpbmdHYXRld2F5LFxyXG5cdGdhdGV3YXlSZXF1ZXN0LFxyXG5cdENVUlJFTlRfU0NFTkFSSU8sXHJcblx0Y3VycmVudFNjZW5hcmlvLFxyXG59ICkge1xyXG5cclxuXHQvKipcclxuXHQgKiBVc2VkIGZvciBzZXQgbm90aWZpY2F0aW9ucyBhbmQgZ2F0ZXdheSB0eXBlIHNldHRpbmdzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gd2hlblxyXG5cdCAqIEBwYXJhbSB0eXBlXHJcblx0ICogQHBhcmFtIG5ld1ZhbHVlXHJcblx0ICovXHJcblx0Y29uc3Qgc2V0VmFsdWVJbk9iamVjdCA9ICggd2hlbiwgdHlwZSwgbmV3VmFsdWUgKSA9PiB7XHJcblx0XHRzZXRHYXRld2F5SW5uZXIoIHtcclxuXHRcdFx0a2V5OiB3aGVuLFxyXG5cdFx0XHR2YWx1ZToge1xyXG5cdFx0XHRcdFsgdHlwZSBdOiBuZXdWYWx1ZSxcclxuXHRcdFx0fSxcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cdC8qKlxyXG5cdCAqIFVzZWQgZm9yIGdldCBub3RpZmljYXRpb25zIGFuZCBnYXRld2F5IHR5cGUgc2V0dGluZ3NcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB3aGVuXHJcblx0ICogQHBhcmFtIHR5cGVcclxuXHQgKiBAcGFyYW0gaXNFbXB0eVJlc3VsdFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufCp9XHJcblx0ICovXHJcblx0Y29uc3QgZ2V0Tm90aWZpY2F0aW9ucyA9ICggd2hlbiwgdHlwZSwgaXNFbXB0eVJlc3VsdCA9IGZhbHNlICkgPT4ge1xyXG5cdFx0aWYgKCBnYXRld2F5R2VuZXJhbFsgd2hlbiBdICYmIGdhdGV3YXlHZW5lcmFsWyB3aGVuIF1bIHR5cGUgXSApIHtcclxuXHRcdFx0cmV0dXJuIGdhdGV3YXlHZW5lcmFsWyB3aGVuIF1bIHR5cGUgXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpc0VtcHR5UmVzdWx0O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldFJlc3VsdE1lc3NhZ2UgPSAoIGtleSwgdmFsdWUgKSA9PiB7XHJcblx0XHRzZXRWYWx1ZUluT2JqZWN0KCAnbWVzc2FnZXMnLCBrZXksIHZhbHVlICk7XHJcblx0fTtcclxuXHRjb25zdCBnZXRSZXN1bHRNZXNzYWdlID0gKCBrZXkgKSA9PiB7XHJcblx0XHRyZXR1cm4gZ2V0Tm90aWZpY2F0aW9ucyggJ21lc3NhZ2VzJywga2V5LCBnYXRld2F5c0RhdGEubWVzc2FnZXNbIGtleSBdICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgR2F0ZXdheUZvb3RlciA9IDw+XHJcblx0XHR7IHJlbmRlckdhdGV3YXlXaXRoUGxhY2Vob2xkZXIoXHJcblx0XHRcdGdhdGV3YXlHZW5lcmFsLmdhdGV3YXksXHJcblx0XHRcdHsgZ2F0ZXdheUdlbmVyYWwsIENVUlJFTlRfU0NFTkFSSU8sIGN1cnJlbnRTY2VuYXJpbyB9LFxyXG5cdFx0XHQnbWFjcm9zTGlzdCcsXHJcblx0XHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21hY3Jvc19iYXNlX2NvbnRyb2xcIlxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGg0PlxyXG5cdFx0XHRcdFx0eyBfXyggJ0F2YWlsYWJsZSBtYWNyb3MgbGlzdDogJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHR7IF9fKCAnJWdhdGV3YXlfYW1vdW50JSAtIHBheW1lbnQgYW1vdW50IHJldHVybmVkIGZyb20gZ2F0ZXdheSB0ZW1wbGF0ZTsnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9PGJyLz5cclxuXHRcdFx0XHRcdHsgX18oICclZ2F0ZXdheV9zdGF0dXMlIC0gcGF5bWVudCBzdGF0dXMgcmV0dXJuZWQgZnJvbSBwYXltZW50IGdhdGV3YXk7JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0XHR7IF9fKCAnJWZpZWxkX25hbWUlIC0gcmVwbGFjZSBcImZpZWxkX25hbWVcIiB3aXRoIGFueSBmaWVsZCBuYW1lIGZyb20gdGhlIGZvcm07JywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfTxici8+XHJcblx0XHRcdFx0PC9oND5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD4gKSB9XHJcblx0XHQ8VGV4dGFyZWFDb250cm9sXHJcblx0XHRcdGtleT1cInBheW1lbnRfcmVzdWx0X21lc3NhZ2Vfc3VjY2Vzc1wiXHJcblx0XHRcdGxhYmVsPXsgbGFiZWwoICdtZXNzYWdlX3N1Y2Nlc3MnICkgfVxyXG5cdFx0XHR2YWx1ZT17IGdldFJlc3VsdE1lc3NhZ2UoICdzdWNjZXNzJyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBuZXdWYWx1ZSA9PiBzZXRSZXN1bHRNZXNzYWdlKCAnc3VjY2VzcycsIG5ld1ZhbHVlICkgfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0YXJlYUNvbnRyb2xcclxuXHRcdFx0a2V5PVwicGF5bWVudF9yZXN1bHRfbWVzc2FnZV9mYWlsZWRcIlxyXG5cdFx0XHRsYWJlbD17IGxhYmVsKCAnbWVzc2FnZV9mYWlsZWQnICkgfVxyXG5cdFx0XHR2YWx1ZT17IGdldFJlc3VsdE1lc3NhZ2UoICdmYWlsZWQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IG5ld1ZhbHVlID0+IHNldFJlc3VsdE1lc3NhZ2UoICdmYWlsZWQnLCBuZXdWYWx1ZSApIH1cclxuXHRcdC8+XHJcblx0PC8+O1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdHsgcmVuZGVyR2F0ZXdheSggZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSwgeyBzZXRWYWx1ZUluT2JqZWN0LCBnZXROb3RpZmljYXRpb25zIH0gKSB9XHJcblx0XHR7IChcclxuXHRcdFx0ICAtIDEgPT09IGdhdGV3YXlSZXF1ZXN0LmlkXHJcblx0XHRcdCAgfHwgbG9hZGluZ0dhdGV3YXkuc3VjY2Vzc1xyXG5cdFx0XHQgIHx8ICEgZ2F0ZXdheVJlcXVlc3QuaWQuaW5jbHVkZXMoIGdhdGV3YXlHZW5lcmFsLmdhdGV3YXkgKVxyXG5cdFx0ICApICYmIEdhdGV3YXlGb290ZXIgfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuXHR3aXRoU2VsZWN0KCAoIC4uLnByb3BzICkgPT4gKFxyXG5cdFx0e1xyXG5cdFx0XHQuLi53aXRoU2VsZWN0R2F0ZXdheXMoIC4uLnByb3BzICksXHJcblx0XHR9XHJcblx0KSApLFxyXG5cdHdpdGhEaXNwYXRjaCggd2l0aERpc3BhdGNoR2F0ZXdheXMgKSxcclxuKSggR2F0ZXdheXNFZGl0b3IgKTsiLCJjb25zdCB7IGNvbXBvc2UgfSA9IHdwLmNvbXBvc2U7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgd2l0aFNlbGVjdCxcclxuXHQgICAgICB3aXRoRGlzcGF0Y2gsXHJcbiAgICAgIH0gPSB3cC5kYXRhO1xyXG5jb25zdCB7XHJcblx0ICAgICAgX18sXHJcbiAgICAgIH0gPSB3cC5pMThuO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFRleHRDb250cm9sLFxyXG5cdCAgICAgIFNlbGVjdENvbnRyb2wsXHJcblx0ICAgICAgd2l0aE5vdGljZXMsXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIHVzZUVmZmVjdCxcclxuICAgICAgfSA9IHdwLmVsZW1lbnQ7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgcmVuZGVyR2F0ZXdheSxcclxuICAgICAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB3aXRoU2VsZWN0R2F0ZXdheXMsXHJcblx0ICAgICAgd2l0aERpc3BhdGNoR2F0ZXdheXMsXHJcbiAgICAgIH0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXHJcbiAgICAgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5mdW5jdGlvbiBQYXlwYWxNYWluKCB7XHJcblx0c2V0R2F0ZXdheVJlcXVlc3QsXHJcblx0Z2F0ZXdheVNwZWNpZmljLFxyXG5cdHNldEdhdGV3YXlTcGVjaWZpYyxcclxuXHRnYXRld2F5U2NlbmFyaW8sXHJcblx0c2V0R2F0ZXdheVNjZW5hcmlvLFxyXG5cdGdldFNwZWNpZmljT3JHbG9iYWwsXHJcblx0YWRkaXRpb25hbFNvdXJjZUdhdGV3YXksXHJcblx0c3BlY2lmaWNHYXRld2F5TGFiZWwsXHJcblx0bm90aWNlT3BlcmF0aW9ucyxcclxuXHRub3RpY2VVSSxcclxufSApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgaWQ6IHNjZW5hcmlvID0gJ1BBWV9OT1cnLFxyXG5cdCAgICAgIH0gPSBnYXRld2F5U2NlbmFyaW87XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0c2V0R2F0ZXdheVJlcXVlc3QoIHsgaWQ6IHNjZW5hcmlvIH0gKTtcclxuXHR9LCBbIHNjZW5hcmlvIF0gKTtcclxuXHJcblx0dXNlRWZmZWN0KCAoKSA9PiB7XHJcblx0XHRzZXRHYXRld2F5UmVxdWVzdCggeyBpZDogc2NlbmFyaW8gfSApO1xyXG5cdH0sIFtdICk7XHJcblxyXG5cdHJldHVybiA8PlxyXG5cdFx0eyBub3RpY2VVSSB9XHJcblx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRjaGVja2VkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0XHRvbkNoYW5nZT17IHVzZV9nbG9iYWwgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IHVzZV9nbG9iYWwgfSApIH1cclxuXHRcdD5cclxuXHRcdFx0eyBfXyggJ1VzZScsICdqZXQtZm9ybS1idWlsZGVyJyApICsgJyAnIH1cclxuXHRcdFx0PGEgaHJlZj17IEpldEZvcm1FZGl0b3JEYXRhLmdsb2JhbF9zZXR0aW5nc191cmwgK1xyXG5cdFx0XHQnI3BheW1lbnRzLWdhdGV3YXlzX19wYXlwYWwnIH0+XHJcblx0XHRcdFx0eyBfXyggJ0dsb2JhbCBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApIH1cclxuXHRcdFx0PC9hPlxyXG5cdFx0PC9Ub2dnbGVDb250cm9sPlxyXG5cdFx0PFRleHRDb250cm9sXHJcblx0XHRcdGxhYmVsPXsgc3BlY2lmaWNHYXRld2F5TGFiZWwoICdjbGllbnRfaWQnICkgfVxyXG5cdFx0XHRrZXk9XCJwYXlwYWxfY2xpZW50X2lkX3NldHRpbmdcIlxyXG5cdFx0XHR2YWx1ZT17IGdldFNwZWNpZmljT3JHbG9iYWwoICdjbGllbnRfaWQnICkgfVxyXG5cdFx0XHRvbkNoYW5nZT17IGNsaWVudF9pZCA9PiBzZXRHYXRld2F5U3BlY2lmaWMoIHsgY2xpZW50X2lkIH0gKSB9XHJcblx0XHRcdGRpc2FibGVkPXsgZ2F0ZXdheVNwZWNpZmljLnVzZV9nbG9iYWwgfVxyXG5cdFx0Lz5cclxuXHRcdDxUZXh0Q29udHJvbFxyXG5cdFx0XHRsYWJlbD17IHNwZWNpZmljR2F0ZXdheUxhYmVsKCAnc2VjcmV0JyApIH1cclxuXHRcdFx0a2V5PVwicGF5cGFsX3NlY3JldF9zZXR0aW5nXCJcclxuXHRcdFx0dmFsdWU9eyBnZXRTcGVjaWZpY09yR2xvYmFsKCAnc2VjcmV0JyApIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBzZWNyZXQgPT4gc2V0R2F0ZXdheVNwZWNpZmljKCB7IHNlY3JldCB9ICkgfVxyXG5cdFx0XHRkaXNhYmxlZD17IGdhdGV3YXlTcGVjaWZpYy51c2VfZ2xvYmFsIH1cclxuXHRcdC8+XHJcblx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRsYWJlbFBvc2l0aW9uPVwic2lkZVwiXHJcblx0XHRcdGxhYmVsPXsgc3BlY2lmaWNHYXRld2F5TGFiZWwoICdnYXRld2F5X3R5cGUnICkgfVxyXG5cdFx0XHR2YWx1ZT17IHNjZW5hcmlvIH1cclxuXHRcdFx0b25DaGFuZ2U9eyBpZCA9PiB7XHJcblx0XHRcdFx0c2V0R2F0ZXdheVNjZW5hcmlvKCB7IGlkIH0gKTtcclxuXHRcdFx0fSB9XHJcblx0XHRcdG9wdGlvbnM9eyBhZGRpdGlvbmFsU291cmNlR2F0ZXdheS5zY2VuYXJpb3MgfVxyXG5cdFx0Lz5cclxuXHRcdHsgcmVuZGVyR2F0ZXdheSggJ3BheXBhbCcsIHsgbm90aWNlT3BlcmF0aW9ucyB9LCBzY2VuYXJpbyApIH1cclxuXHQ8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aFNlbGVjdCggd2l0aFNlbGVjdEdhdGV3YXlzICksXHJcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hHYXRld2F5cyApLFxyXG5cdHdpdGhOb3RpY2VzLFxyXG4pKCBQYXlwYWxNYWluICk7XHJcblxyXG5cclxuIiwiY29uc3QgeyBjb21wb3NlIH0gPSB3cC5jb21wb3NlO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhTZWxlY3QsXHJcblx0d2l0aERpc3BhdGNoLFxyXG59ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHtcclxuXHRUZXh0Q29udHJvbCxcclxuXHRTZWxlY3RDb250cm9sLFxyXG5cdEJhc2VDb250cm9sLFxyXG5cdFJhZGlvQ29udHJvbCxcclxufSA9IHdwLmNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0d2l0aFNlbGVjdEZvcm1GaWVsZHMsXHJcblx0d2l0aFNlbGVjdEdhdGV3YXlzLFxyXG5cdHdpdGhEaXNwYXRjaEdhdGV3YXlzLFxyXG5cdHdpdGhTZWxlY3RBY3Rpb25zQnlUeXBlLFxyXG59ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IHsgR2F0ZXdheUZldGNoQnV0dG9uIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5mdW5jdGlvbiBQYXlOb3dTY2VuYXJpbygge1xyXG5cdGdhdGV3YXlHZW5lcmFsLFxyXG5cdGdhdGV3YXlTcGVjaWZpYyxcclxuXHRzZXRHYXRld2F5LFxyXG5cdHNldEdhdGV3YXlTcGVjaWZpYyxcclxuXHRmb3JtRmllbGRzLFxyXG5cdGdldFNwZWNpZmljT3JHbG9iYWwsXHJcblx0bG9hZGluZ0dhdGV3YXksXHJcblx0c2NlbmFyaW9Tb3VyY2UsXHJcblx0bm90aWNlT3BlcmF0aW9ucyxcclxuXHRzY2VuYXJpb0xhYmVsLFxyXG5cdGdsb2JhbEdhdGV3YXlMYWJlbCxcclxufSApIHtcclxuXHJcblx0Y29uc3QgZGlzcGxheU5vdGljZSA9IHN0YXR1cyA9PiByZXNwb25zZSA9PiB7XHJcblx0XHRub3RpY2VPcGVyYXRpb25zLnJlbW92ZU5vdGljZSggZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSApO1xyXG5cdFx0bm90aWNlT3BlcmF0aW9ucy5jcmVhdGVOb3RpY2UoIHtcclxuXHRcdFx0c3RhdHVzLFxyXG5cdFx0XHRjb250ZW50OiByZXNwb25zZS5tZXNzYWdlLFxyXG5cdFx0XHRpZDogZ2F0ZXdheUdlbmVyYWwuZ2F0ZXdheSxcclxuXHRcdH0gKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gPD5cclxuXHRcdDxCYXNlQ29udHJvbFxyXG5cdFx0XHRsYWJlbD17IHNjZW5hcmlvTGFiZWwoICdmZXRjaF9idXR0b25fbGFiZWwnICkgfVxyXG5cdFx0PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImpldC11c2VyLWZpZWxkcy1tYXBfX2xpc3RcIj5cclxuXHRcdFx0XHR7ICggISBsb2FkaW5nR2F0ZXdheS5zdWNjZXNzICYmICEgbG9hZGluZ0dhdGV3YXkubG9hZGluZyApICYmIDxzcGFuXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyAnZGVzY3JpcHRpb24tY29udHJvbHMnIH1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHR7IHNjZW5hcmlvTGFiZWwoICdmZXRjaF9idXR0b25faGVscCcgKSB9XHJcblx0XHRcdFx0PC9zcGFuPiB9XHJcblx0XHRcdFx0PEdhdGV3YXlGZXRjaEJ1dHRvblxyXG5cdFx0XHRcdFx0aW5pdGlhbExhYmVsPXsgc2NlbmFyaW9MYWJlbCggJ2ZldGNoX2J1dHRvbicgKSB9XHJcblx0XHRcdFx0XHRsYWJlbD17IHNjZW5hcmlvTGFiZWwoICdmZXRjaF9idXR0b25fcmV0cnknICkgfVxyXG5cdFx0XHRcdFx0YXBpQXJncz17IHtcclxuXHRcdFx0XHRcdFx0Li4uc2NlbmFyaW9Tb3VyY2UuZmV0Y2gsXHJcblx0XHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0XHRjbGllbnRfaWQ6IGdldFNwZWNpZmljT3JHbG9iYWwoICdjbGllbnRfaWQnICksXHJcblx0XHRcdFx0XHRcdFx0c2VjcmV0OiBnZXRTcGVjaWZpY09yR2xvYmFsKCAnc2VjcmV0JyApLFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRvbkZhaWw9eyBkaXNwbGF5Tm90aWNlKCAnZXJyb3InICkgfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdHsgbG9hZGluZ0dhdGV3YXkuc3VjY2VzcyAmJiA8PlxyXG5cdFx0XHQ8VGV4dENvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IHNjZW5hcmlvTGFiZWwoICdjdXJyZW5jeScgKSB9XHJcblx0XHRcdFx0a2V5PSdwYXlwYWxfY3VycmVuY3lfY29kZV9zZXR0aW5nJ1xyXG5cdFx0XHRcdHZhbHVlPXsgZ2F0ZXdheVNwZWNpZmljLmN1cnJlbmN5IH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IGN1cnJlbmN5ID0+IHNldEdhdGV3YXlTcGVjaWZpYyggeyBjdXJyZW5jeSB9ICkgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgZ2xvYmFsR2F0ZXdheUxhYmVsKCAncHJpY2VfZmllbGQnICkgfVxyXG5cdFx0XHRcdGtleT17ICdmb3JtX2ZpZWxkc19wcmljZV9maWVsZCcgfVxyXG5cdFx0XHRcdHZhbHVlPXsgZ2F0ZXdheUdlbmVyYWwucHJpY2VfZmllbGQgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249J3NpZGUnXHJcblx0XHRcdFx0b25DaGFuZ2U9eyBwcmljZV9maWVsZCA9PiB7XHJcblx0XHRcdFx0XHRzZXRHYXRld2F5KCB7IHByaWNlX2ZpZWxkIH0gKTtcclxuXHRcdFx0XHR9IH1cclxuXHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdC8+XHJcblx0XHQ8Lz4gfVxyXG5cdDwvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZShcclxuXHR3aXRoU2VsZWN0KCAoIC4uLnByb3BzICkgPT4gKFxyXG5cdFx0e1xyXG5cdFx0XHQuLi53aXRoU2VsZWN0Rm9ybUZpZWxkcyggW10sICctLScgKSggLi4ucHJvcHMgKSxcclxuXHRcdFx0Li4ud2l0aFNlbGVjdEdhdGV3YXlzKCAuLi5wcm9wcyApLFxyXG5cdFx0fVxyXG5cdCkgKSxcclxuXHR3aXRoRGlzcGF0Y2goICggLi4ucHJvcHMgKSA9PiAoXHJcblx0XHR7XHJcblx0XHRcdC4uLndpdGhEaXNwYXRjaEdhdGV3YXlzKCAuLi5wcm9wcyApLFxyXG5cdFx0fVxyXG5cdCkgKSxcclxuKSggUGF5Tm93U2NlbmFyaW8gKTsiLCJpbXBvcnQgUGx1Z2luR2F0ZXdheXMgZnJvbSAnLi9yZW5kZXInO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGJhc2UgPSB7XHJcblx0bmFtZTogJ2pmLWdhdGV3YXlzLXBhbmVsJyxcclxuXHR0aXRsZTogX18oICdHYXRld2F5cyBTZXR0aW5ncycsICdqZXQtZm9ybS1idWlsZGVyJyApLFxyXG59O1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcblx0cmVuZGVyOiBQbHVnaW5HYXRld2F5cyxcclxuXHRpY29uOiAnbW9uZXktYWx0JyxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRiYXNlLFxyXG5cdHNldHRpbmdzLFxyXG59OyIsImltcG9ydCBHYXRld2F5c0VkaXRvciBmcm9tICcuLi9jb21wb25lbnRzL2dhdGV3YXlzLWVkaXRvcic7XHJcblxyXG5jb25zdCB7XHJcblx0QnV0dG9uLFxyXG5cdFRvZ2dsZUNvbnRyb2wsXHJcblx0Tm90aWNlLFxyXG5cdF9fZXhwZXJpbWVudGFsSXRlbUdyb3VwOiBJdGVtR3JvdXAsXHJcblx0X19leHBlcmltZW50YWxJdGVtOiBJdGVtLFxyXG59ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgd2l0aERpc3BhdGNoLCB3aXRoU2VsZWN0LCB1c2VTZWxlY3QsIGRpc3BhdGNoIH0gPSB3cC5kYXRhO1xyXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHdwLmVsZW1lbnQ7XHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcbmNvbnN0IHsgY29tcG9zZSB9ID0gd3AuY29tcG9zZTtcclxuY29uc3QgeyBjcmVhdGVCbG9jayB9ID0gd3AuYmxvY2tzO1xyXG5cclxuY29uc3QgeyBBY3Rpb25Nb2RhbCB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuY29uc3Qge1xyXG5cdHdpdGhEaXNwYXRjaEdhdGV3YXlzLFxyXG5cdHdpdGhTZWxlY3RHYXRld2F5cyxcclxuXHR1c2VNZXRhU3RhdGUsXHJcbn0gPSBKZXRGQkhvb2tzO1xyXG5cclxuY29uc3QgZ2F0ZXdheXNEYXRhID0gd2luZG93LkpldEZvcm1FZGl0b3JEYXRhLmdhdGV3YXlzO1xyXG5cclxuY29uc3QgTU9ERV9TSU5HTEUgPSAnc2luZ2xlJztcclxuY29uc3QgTU9ERV9NQU5VQUwgPSAnbWFudWFsJztcclxuXHJcbmNvbnN0IE1VTFRJX0dBVEVXQVlfQkxPQ0sgPSAnamV0LWZvcm1zL211bHRpLWdhdGV3YXknO1xyXG5cclxuY29uc3QgZ2V0R2F0ZXdheUxhYmVsID0gKCB0eXBlICkgPT4ge1xyXG5cdHJldHVybiBnYXRld2F5c0RhdGEubGlzdC5maW5kKCBlbCA9PiBlbC52YWx1ZSA9PT0gdHlwZSApPy5sYWJlbCB8fCB0eXBlO1xyXG59O1xyXG5cclxuY29uc3QgaGFzQmxvY2tSZWN1cnNpdmUgPSAoIGJsb2NrcywgbmFtZSApID0+IHtcclxuXHRmb3IgKCBjb25zdCBibG9jayBvZiBibG9ja3MgKSB7XHJcblx0XHRpZiAoIGJsb2NrLm5hbWUgPT09IG5hbWUgKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBibG9jay5pbm5lckJsb2Nrcz8ubGVuZ3RoICYmIGhhc0Jsb2NrUmVjdXJzaXZlKCBibG9jay5pbm5lckJsb2NrcywgbmFtZSApICkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gUGx1Z2luR2F0ZXdheXMoIHByb3BzICkge1xyXG5cdGNvbnN0IHtcclxuXHRcdHNldEdhdGV3YXksXHJcblx0XHRzZXRHYXRld2F5U2NlbmFyaW8sXHJcblx0XHRjbGVhckdhdGV3YXksXHJcblx0XHRjbGVhclNjZW5hcmlvLFxyXG5cdFx0Z2F0ZXdheUdlbmVyYWwsXHJcblx0XHRnYXRld2F5U2NlbmFyaW8sXHJcblx0fSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBbIG1ldGEsIHNldE1ldGEgXSA9IHVzZU1ldGFTdGF0ZSggJ19qZl9nYXRld2F5cycgKTtcclxuXHRjb25zdCBbIGlzRWRpdCwgc2V0RWRpdCBdID0gdXNlU3RhdGUoIGZhbHNlICk7XHJcblxyXG5cdC8vIFVJLXNlbGVjdGVkIHZhbHVlIChjYW4gYmUgXCJtYW51YWxcIiB3aXRob3V0IHRvdWNoaW5nIG1ldGEuZ2F0ZXdheSlcclxuXHRjb25zdCBbIHNlbGVjdGVkR2F0ZXdheSwgc2V0U2VsZWN0ZWRHYXRld2F5IF0gPSB1c2VTdGF0ZSggbWV0YT8uZ2F0ZXdheSA/PyAnbm9uZScgKTtcclxuXHJcblx0Ly8gd2hpY2ggZ2F0ZXdheSBpcyBjdXJyZW50bHkgYmVpbmcgZWRpdGVkIGluIG1vZGFsXHJcblx0Y29uc3QgWyBlZGl0R2F0ZXdheSwgc2V0RWRpdEdhdGV3YXkgXSA9IHVzZVN0YXRlKCBudWxsICk7XHJcblxyXG5cdGNvbnN0IGlzTWFudWFsTW9kZSA9IG1ldGE/Lm1vZGUgPT09IE1PREVfTUFOVUFMO1xyXG5cclxuXHRjb25zdCBoYXNNdWx0aUdhdGV3YXlCbG9jayA9IHVzZVNlbGVjdChcclxuXHRcdCggc2VsZWN0ICkgPT4ge1xyXG5cdFx0XHRjb25zdCBlZGl0b3IgPSBzZWxlY3QoICdjb3JlL2Jsb2NrLWVkaXRvcicgKTtcclxuXHRcdFx0aWYgKCAhZWRpdG9yPy5nZXRCbG9ja3MgKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBoYXNCbG9ja1JlY3Vyc2l2ZSggZWRpdG9yLmdldEJsb2NrcygpLCBNVUxUSV9HQVRFV0FZX0JMT0NLICk7XHJcblx0XHR9LFxyXG5cdFx0W11cclxuXHQpO1xyXG5cclxuXHRjb25zdCBpbnNlcnRNdWx0aUdhdGV3YXlCbG9jayA9ICgpID0+IHtcclxuXHRcdGRpc3BhdGNoKCAnY29yZS9ibG9jay1lZGl0b3InICkuaW5zZXJ0QmxvY2tzKFxyXG5cdFx0XHRjcmVhdGVCbG9jayggTVVMVElfR0FURVdBWV9CTE9DSyApXHJcblx0XHQpO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCBpc01hbnVhbE1vZGUgKSB7XHJcblx0XHRcdHNldFNlbGVjdGVkR2F0ZXdheSggTU9ERV9NQU5VQUwgKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0c2V0U2VsZWN0ZWRHYXRld2F5KCBtZXRhPy5nYXRld2F5ID8/ICdub25lJyApO1xyXG5cdH0sIFsgbWV0YT8uZ2F0ZXdheSwgbWV0YT8ubW9kZSBdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0aWYgKCAhaXNFZGl0ICkge1xyXG5cdFx0XHRjbGVhckdhdGV3YXkoKTtcclxuXHRcdFx0Y2xlYXJTY2VuYXJpbygpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZ3cgPSBlZGl0R2F0ZXdheSB8fCBtZXRhPy5nYXRld2F5O1xyXG5cclxuXHRcdGlmICggIWd3IHx8IGd3ID09PSAnbm9uZScgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGlzTWFudWFsTW9kZSAmJiAhZWRpdEdhdGV3YXkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRzZXRHYXRld2F5KCB7IC4uLm1ldGEsIGdhdGV3YXk6IGd3IH0gKTtcclxuXHRcdHNldEdhdGV3YXlTY2VuYXJpbyggbWV0YT8uWyBndyBdPy5zY2VuYXJpbyApO1xyXG5cdH0sIFsgaXNFZGl0LCBlZGl0R2F0ZXdheSBdICk7XHJcblxyXG5cdGNvbnN0IGNsb3NlTW9kYWwgPSAoIG5ld01ldGEgPSBmYWxzZSApID0+IHtcclxuXHRcdGlmICggZmFsc2UgIT09IG5ld01ldGEgKSB7XHJcblx0XHRcdHNldE1ldGEoIG5ld01ldGEgKTtcclxuXHRcdH1cclxuXHRcdHNldEVkaXQoIGZhbHNlICk7XHJcblx0XHRzZXRFZGl0R2F0ZXdheSggbnVsbCApO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9wdGlvbnMgPSBbXHJcblx0XHR7IGxhYmVsOiAnTm9uZScsIHZhbHVlOiAnbm9uZScgfSxcclxuXHRcdC4uLmdhdGV3YXlzRGF0YS5saXN0LFxyXG5cdFx0eyBsYWJlbDogJ01hbnVhbCcsIHZhbHVlOiBNT0RFX01BTlVBTCB9LFxyXG5cdF07XHJcblxyXG5cdGNvbnN0IHN0eWxlcyA9IHtcclxuXHRcdHJvdzoge1xyXG5cdFx0XHRkaXNwbGF5OiAnZmxleCcsXHJcblx0XHRcdGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cdFx0XHRqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG5cdFx0XHR3aWR0aDogJzEwMCUnLFxyXG5cdFx0fSxcclxuXHRcdGl0ZW06IHtcclxuXHRcdFx0ZGlzcGxheTogJ2ZsZXgnLFxyXG5cdFx0XHRtaW5IZWlnaHQ6ICc1MHB4JyxcclxuXHRcdFx0ZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcblx0XHRcdGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuXHRcdH0sXHJcblx0XHR0b2dnbGU6IHtcclxuXHRcdFx0cGFkZGluZ1RvcDogJzEwcHgnLFxyXG5cdFx0XHRmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuXHRcdH0sXHJcblx0XHRub3RpY2U6IHtcclxuXHRcdFx0bWFyZ2luVG9wOiAnMTBweCcsXHJcblx0XHR9LFxyXG5cdFx0bm90aWNlX19idG46IHtcclxuXHRcdFx0bWFyZ2luTGVmdDogJzAnLFxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SXRlbUdyb3VwIGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c1wiIGlzQm9yZGVyZWQgaXNTZXBhcmF0ZWQ+XHJcblx0XHRcdFx0eyBvcHRpb25zLm1hcCggKCBvcHQgKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWRHYXRld2F5ID09PSBvcHQudmFsdWU7XHJcblxyXG5cdFx0XHRcdFx0Y29uc3QgY2FuRWRpdCA9XHJcblx0XHRcdFx0XHRcdG9wdC52YWx1ZSAhPT0gJ25vbmUnXHJcblx0XHRcdFx0XHRcdCYmIG9wdC52YWx1ZSAhPT0gTU9ERV9NQU5VQUxcclxuXHRcdFx0XHRcdFx0JiYgKCBpc01hbnVhbE1vZGUgfHwgaXNTZWxlY3RlZCApO1xyXG5cclxuXHRcdFx0XHRcdGNvbnN0IGNhblRvZ2dsZSA9XHJcblx0XHRcdFx0XHRcdGlzTWFudWFsTW9kZVxyXG5cdFx0XHRcdFx0XHQmJiBvcHQudmFsdWUgIT09ICdub25lJ1xyXG5cdFx0XHRcdFx0XHQmJiBvcHQudmFsdWUgIT09IE1PREVfTUFOVUFMO1xyXG5cclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxJdGVtXHJcblx0XHRcdFx0XHRcdFx0a2V5PXsgb3B0LnZhbHVlIH1cclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX2l0ZW1cIlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXsgc3R5bGVzLml0ZW0gfVxyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX3Jvd1wiIHN0eWxlPXsgc3R5bGVzLnJvdyB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImpmYi1nYXRld2F5c19fb3B0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImpmYl9nYXRld2F5XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IG9wdC52YWx1ZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGlzU2VsZWN0ZWQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0U2VsZWN0ZWRHYXRld2F5KCBvcHQudmFsdWUgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG9wdC52YWx1ZSA9PT0gTU9ERV9NQU5VQUwgKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE1ldGEoIHsgLi4ubWV0YSwgbW9kZTogTU9ERV9NQU5VQUwgfSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0TWV0YSgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQuLi5tZXRhLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb2RlOiBNT0RFX1NJTkdMRSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Z2F0ZXdheTogb3B0LnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX2xhYmVsXCI+eyBvcHQubGFiZWwgfTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX2FjdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0eyBjYW5FZGl0ID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldEVkaXRHYXRld2F5KCBvcHQudmFsdWUgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0RWRpdCggdHJ1ZSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPVwiYWRtaW4tdG9vbHNcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aXNTZWNvbmRhcnlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU9XCJzbWFsbFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyBfXyggJ0VkaXQnLCAnamV0LWZvcm0tYnVpbGRlcicgKSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc3BhY2VyIHRvIHByZXZlbnQganVtcHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX2VkaXQtc3BhY2VyXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0eyBjYW5Ub2dnbGUgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJqZmItZ2F0ZXdheXNfX3RvZ2dsZVwiIHN0eWxlPXsgc3R5bGVzLnRvZ2dsZSB9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdTaG93IG9uIGZyb250ZW5kJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyAhIW1ldGE/Llsgb3B0LnZhbHVlIF0/LnNob3dfb25fZnJvbnQgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCB2YWx1ZSApID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNldE1ldGEoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Li4ubWV0YSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0WyBvcHQudmFsdWUgXToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLiggbWV0YT8uWyBvcHQudmFsdWUgXSB8fCB7fSApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNob3dfb25fZnJvbnQ6IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0KSB9XHJcblxyXG5cdFx0XHRcdFx0XHRcdHsgb3B0LnZhbHVlID09PSBNT0RFX01BTlVBTCAmJiBpc01hbnVhbE1vZGUgJiYgIWhhc011bHRpR2F0ZXdheUJsb2NrICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamZiLWdhdGV3YXlzX19ub3RpY2VcIiBzdHlsZT17IHN0eWxlcy5ub3RpY2UgfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PE5vdGljZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0YXR1cz1cIndhcm5pbmdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzRGlzbWlzc2libGU9eyBmYWxzZSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgX18oXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdUbyBkaXNwbGF5IGdhdGV3YXlzIG9uIHRoZSBmcm9udGVuZCBpbiBNYW51YWwgbW9kZSwgYWRkIHRoZSBNdWx0aSBHYXRld2F5IGJsb2NrIHRvIHRoZSBmb3JtLicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqZXQtZm9ybS1idWlsZGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzU2Vjb25kYXJ5XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgaW5zZXJ0TXVsdGlHYXRld2F5QmxvY2sgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT1cInNtYWxsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXsgc3R5bGVzLm5vdGljZV9fYnRuIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnQWRkIGJsb2NrJywgJ2pldC1mb3JtLWJ1aWxkZXInICkgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Ob3RpY2U+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHRcdFx0PC9JdGVtPlxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9ICkgfVxyXG5cdFx0XHQ8L0l0ZW1Hcm91cD5cclxuXHJcblx0XHRcdHsgaXNFZGl0ICYmIChcclxuXHRcdFx0XHQ8QWN0aW9uTW9kYWxcclxuXHRcdFx0XHRcdGNsYXNzTmFtZXM9eyBbICd3aWR0aC02MCcgXSB9XHJcblx0XHRcdFx0XHRvblJlcXVlc3RDbG9zZT17ICgpID0+IGNsb3NlTW9kYWwoKSB9XHJcblx0XHRcdFx0XHRvbkNhbmNlbENsaWNrPXsgKCkgPT4gY2xvc2VNb2RhbCgpIH1cclxuXHRcdFx0XHRcdG9uVXBkYXRlQ2xpY2s9eyAoKSA9PiBjbG9zZU1vZGFsKCB7XHJcblx0XHRcdFx0XHRcdC4uLmdhdGV3YXlHZW5lcmFsLFxyXG5cdFx0XHRcdFx0XHRbIGdhdGV3YXlHZW5lcmFsLmdhdGV3YXkgXToge1xyXG5cdFx0XHRcdFx0XHRcdC4uLiggZ2F0ZXdheUdlbmVyYWxbIGdhdGV3YXlHZW5lcmFsLmdhdGV3YXkgXSB8fCB7fSApLFxyXG5cdFx0XHRcdFx0XHRcdHNjZW5hcmlvOiBnYXRld2F5U2NlbmFyaW8sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9ICkgfVxyXG5cdFx0XHRcdFx0dGl0bGU9eyBgRWRpdCAkeyBnZXRHYXRld2F5TGFiZWwoIGVkaXRHYXRld2F5IHx8IG1ldGE/LmdhdGV3YXkgKSB9IFNldHRpbmdzYCB9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PEdhdGV3YXlzRWRpdG9yLz5cclxuXHRcdFx0XHQ8L0FjdGlvbk1vZGFsPlxyXG5cdFx0XHQpIH1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2UoXHJcblx0d2l0aERpc3BhdGNoKCB3aXRoRGlzcGF0Y2hHYXRld2F5cyApLFxyXG5cdHdpdGhTZWxlY3QoIHdpdGhTZWxlY3RHYXRld2F5cyApLFxyXG4pKCBQbHVnaW5HYXRld2F5cyApO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIlJlYWN0XCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUGF5cGFsTWFpbiBmcm9tICcuL3BheXBhbC9tYWluJztcclxuaW1wb3J0IFBheU5vd1NjZW5hcmlvIGZyb20gJy4vcGF5cGFsL3BheS1ub3ctc2NlbmFyaW8nO1xyXG5pbXBvcnQgZ2F0ZXdheVBsdWdpbiBmcm9tICcuL3BsdWdpbic7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgcmVnaXN0ZXJHYXRld2F5LFxyXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGFkZEZpbHRlcixcclxuICAgICAgfSA9IHdwLmhvb2tzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IGdhdGV3YXlJRCA9ICdwYXlwYWwnO1xyXG5cclxucmVnaXN0ZXJHYXRld2F5KFxyXG5cdGdhdGV3YXlJRCxcclxuXHRQYXlwYWxNYWluLFxyXG4pO1xyXG5cclxucmVnaXN0ZXJHYXRld2F5KFxyXG5cdGdhdGV3YXlJRCxcclxuXHRQYXlOb3dTY2VuYXJpbyxcclxuXHQnUEFZX05PVycsXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZWdpc3Rlci5wbHVnaW4uamYtdmFsaWRhdGlvbi1wYW5lbC5hZnRlcicsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvZ2F0ZXdheXMnLFxyXG5cdGZ1bmN0aW9uICggcGx1Z2lucyApIHtcclxuXHRcdHBsdWdpbnMucHVzaCggZ2F0ZXdheVBsdWdpbiApO1xyXG5cclxuXHRcdHJldHVybiBwbHVnaW5zO1xyXG5cdH0sXHJcbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9