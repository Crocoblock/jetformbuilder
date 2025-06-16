/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/components/common/controls-popover.jsx":
/*!***********************************************************!*\
  !*** ./assets/src/components/common/controls-popover.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ControlsPopover = ({
  children,
  isOpen,
  onClose,
  label,
  anchor
}) => {
  if (!isOpen) {
    return null;
  }
  const closeIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    "aria-hidden": "true",
    focusable: "false",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover, {
    className: "crocoblock-style-manager__popover",
    placement: "left",
    onClose: onClose,
    shouldCloseOnClickOutside: true,
    anchor: anchor,
    noArrow: false,
    offset: 10,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "crocoblock-style-manager__popover",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "crocoblock-style-manager__popover-header",
        children: [label, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Button, {
          className: "crocoblock-style-manager__popover-close",
          onClick: onClose,
          icon: closeIcon,
          label: "Close"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "crocoblock-style-manager__popover-content",
        children: children
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlsPopover);

/***/ }),

/***/ "./assets/src/components/common/controls-tabs-navigation.jsx":
/*!*******************************************************************!*\
  !*** ./assets/src/components/common/controls-tabs-navigation.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ControlsTabsNavigation = props => {
  const tabClasses = tabId => {
    return `crocoblock-style-manager__controls-tabs-button ${props.activeTab === tabId ? 'is-active' : ''}`;
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "crocoblock-style-manager__controls-tabs-navigation",
    children: props.tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", {
      className: tabClasses(tab.id),
      onClick: () => props.onTabChange(tab.id),
      children: tab.title
    }, tab.id))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlsTabsNavigation);

/***/ }),

/***/ "./assets/src/components/common/controls-tabs.jsx":
/*!********************************************************!*\
  !*** ./assets/src/components/common/controls-tabs.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls_tabs_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls-tabs-navigation */ "./assets/src/components/common/controls-tabs-navigation.jsx");
/* harmony import */ var _control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../control-component */ "./assets/src/components/control-component.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ControlsTabs = props => {
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(props.control.children[0].id);
  const activeTabContent = () => {
    const activeTabControl = props.control.children.find(tab => tab.id === activeTab);
    if (!activeTabControl || !activeTabControl.children) {
      return null;
    }
    return activeTabControl.children.map(control => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_control_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
        control: control,
        props: props
      }, control.id);
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "crocoblock-style-manager__controls-tabs",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_controls_tabs_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tabs: props.control.children,
      activeTab: activeTab,
      onTabChange: setActiveTab
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "crocoblock-style-manager__controls-tabs-content",
      children: activeTabContent()
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlsTabs);

/***/ }),

/***/ "./assets/src/components/common/popover-container.jsx":
/*!************************************************************!*\
  !*** ./assets/src/components/common/popover-container.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls-popover */ "./assets/src/components/common/controls-popover.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const PopoverContainer = ({
  children,
  trigger,
  label
}) => {
  const [popoverAnchor, setPopoverAnchor] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [showPopover, setShowPopover] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      ref: setPopoverAnchor,
      onClick: () => {
        setShowPopover(!showPopover);
      },
      children: trigger
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_controls_popover__WEBPACK_IMPORTED_MODULE_1__["default"], {
      anchor: popoverAnchor,
      label: label,
      isOpen: showPopover,
      onClose: () => {
        setShowPopover(false);
      },
      children: children
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverContainer);

/***/ }),

/***/ "./assets/src/components/control-component.jsx":
/*!*****************************************************!*\
  !*** ./assets/src/components/control-component.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls_text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/text */ "./assets/src/components/controls/text.jsx");
/* harmony import */ var _controls_choose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/choose */ "./assets/src/components/controls/choose.jsx");
/* harmony import */ var _controls_border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/border */ "./assets/src/components/controls/border.jsx");
/* harmony import */ var _controls_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/color */ "./assets/src/components/controls/color.jsx");
/* harmony import */ var _controls_typography__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/typography */ "./assets/src/components/controls/typography.jsx");
/* harmony import */ var _controls_dimensions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/dimensions */ "./assets/src/components/controls/dimensions.jsx");
/* harmony import */ var _controls_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/range */ "./assets/src/components/controls/range.jsx");
/* harmony import */ var _common_controls_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/controls-tabs */ "./assets/src/components/common/controls-tabs.jsx");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_breakpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/breakpoints */ "./assets/src/helpers/breakpoints.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);












/**
 * Renders control depending on it's type and attach attributes handlers.
 */

const ControlComponent = ({
  control,
  props
}) => {
  const {
    attributes,
    setAttributes
  } = props;
  const supportName = window.crocoStyleEditorData.support_name;
  const prefixedName = name => {
    return `__${name.toLowerCase()}`;
  };
  const device = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => {
    const editPost = select('core/edit-post');
    let previewDevice = 'Desktop';
    if (editPost && typeof editPost.__experimentalGetPreviewDeviceType === 'function') {
      previewDevice = editPost.__experimentalGetPreviewDeviceType();
    }
    return prefixedName(previewDevice);
  }, []);
  const devicesHierarchy = (0,_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_9__.getBreakpointsHierarchy)();

  // Check if the control has a value in the attributes
  if (!attributes[supportName]?.[control.id]) {
    attributes[supportName][control.id] = control.defaultValue;
  }
  const handleChange = value => {
    setStyleAttr(control.id, value);
  };
  const getResponsiveValue = attr => {
    if ('__desktop' === device) {
      return attributes[supportName][attr];
    } else if (attributes[supportName][device]?.[attr]) {
      return attributes[supportName][device][attr];
    } else {
      // If the value is not set for the current device - get previous device value
      const currentDeviceIndex = devicesHierarchy.indexOf(device);
      const prevDeviceIndex = currentDeviceIndex - 1;
      const previousDevice = devicesHierarchy[prevDeviceIndex];
      if (prevDeviceIndex && previousDevice && attributes[supportName][previousDevice]?.[attr]) {
        return attributes[supportName][previousDevice][attr];
      }

      // If no previous device value - return desktop value
      return attributes[supportName][attr];
    }
  };
  const usageMarker = () => {
    const value = getResponsiveValue(control.id);
    if (!value) {
      return null;
    }
    let isUsedForCurrentDevice = false;
    let tooltipText = 'Is inherited from the previous breakpoints';

    // Check if the value is set for the current device
    if ('__desktop' === device && attributes[supportName][control.id]) {
      isUsedForCurrentDevice = true;
      tooltipText = 'Explicitly set for the current device';
    } else if (attributes[supportName]?.[device]?.[control.id]) {
      isUsedForCurrentDevice = true;
      tooltipText = 'Explicitly set for the current device';
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_10__.Tooltip, {
      text: tooltipText,
      placement: "top",
      delay: 300,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: `crocoblock-style-manager__usage-marker is-${isUsedForCurrentDevice ? 'used' : 'inherited'}`
      })
    });
  };
  const setStyleAttr = (attr, value) => {
    let newStyles = {};
    if ('__desktop' === device) {
      newStyles = {
        ...attributes[supportName],
        [attr]: value
      };
    } else {
      newStyles = {
        ...attributes[supportName],
        [device]: {
          ...attributes[supportName][device],
          [attr]: value
        }
      };
    }
    setAttributes({
      [supportName]: newStyles
    });
  };
  const renderControl = () => {
    const controlProps = {
      control: control,
      value: getResponsiveValue(control.id),
      handleChange: handleChange
    };
    switch (control.type) {
      case 'text':
      case 'input':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_controls_text__WEBPACK_IMPORTED_MODULE_0__["default"], {
          ...controlProps
        });
      case 'color-picker':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_controls_color__WEBPACK_IMPORTED_MODULE_3__["default"], {
          ...controlProps
        });
      case 'toggle':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {});
      case 'range':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_controls_range__WEBPACK_IMPORTED_MODULE_6__["default"], {
          ...controlProps
        });
      case 'choose':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_controls_choose__WEBPACK_IMPORTED_MODULE_1__["default"], {
          ...controlProps
        });
      case 'dimensions':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_controls_dimensions__WEBPACK_IMPORTED_MODULE_5__["default"], {
          ...controlProps
        });
      case 'border':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_controls_border__WEBPACK_IMPORTED_MODULE_2__["default"], {
          ...controlProps
        });
      case 'typography':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_controls_typography__WEBPACK_IMPORTED_MODULE_4__["default"], {
          ...controlProps
        });
      case 'select':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {});
      case 'tabs':
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_common_controls_tabs__WEBPACK_IMPORTED_MODULE_7__["default"], {
          control: control,
          attributes: attributes,
          setAttributes: setAttributes
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: `crocoblock-style-manager__control is-control--${control.type}`,
    children: [usageMarker(), renderControl()]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlComponent);

/***/ }),

/***/ "./assets/src/components/control-section.jsx":
/*!***************************************************!*\
  !*** ./assets/src/components/control-section.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./assets/src/helpers/utils.js");
/* harmony import */ var _control_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-component */ "./assets/src/components/control-component.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ControlSection = ({
  section,
  props
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: section.title,
    initialOpen: section.initialOpen,
    className: "crocoblock-style-manager__control-section",
    children: (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.hasChildren)(section) && section.children.map(control => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_control_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
        control: control,
        props: props
      }, control.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlSection);

/***/ }),

/***/ "./assets/src/components/control-stack.jsx":
/*!*************************************************!*\
  !*** ./assets/src/components/control-stack.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/utils */ "./assets/src/helpers/utils.js");
/* harmony import */ var _control_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-section */ "./assets/src/components/control-section.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ControlStack = props => {
  const blockControls = (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.getBlockControls)(props.name);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
    group: "styles",
    children: blockControls.map(control => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_control_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        section: control,
        props: props
      }, control.id);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlStack);

/***/ }),

/***/ "./assets/src/components/controls/border.jsx":
/*!***************************************************!*\
  !*** ./assets/src/components/controls/border.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/utils */ "./assets/src/helpers/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ControlBorder = ({
  control,
  value,
  handleChange
}) => {
  const colorsList = wp.data.select('core/block-editor').getSettings().colors;
  const currentValue = value || {};
  const updateValue = (property, newValue) => {
    const newBorderValue = {
      ...currentValue
    };
    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_2__.isObject)(newValue)) {
      const curretSubValue = currentValue[property] || {};
      newBorderValue[property] = {
        ...curretSubValue,
        ...newValue
      };
    } else {
      newBorderValue[property] = newValue;
    }
    handleChange(newBorderValue);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BorderBoxControl, {
      label: control.label,
      value: currentValue.border,
      onChange: newValue => updateValue('border', newValue),
      className: "crocoblock-style-manager__border-control crocoblock-style-manager__with-spacing",
      help: control.help,
      colors: colorsList,
      enableStyle: true,
      __experimentalIsRenderedInSidebar: true,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalBorderRadiusControl, {
      label: 'Radius',
      values: currentValue.radius,
      value: currentValue.radius,
      onChange: newValue => updateValue('radius', newValue),
      className: "crocoblock-style-manager__border-radius-control",
      __experimentalIsRenderedInSidebar: true,
      __next40pxDefaultSize: true,
      __nextHasNoMarginBottom: true
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlBorder);

/***/ }),

/***/ "./assets/src/components/controls/choose.jsx":
/*!***************************************************!*\
  !*** ./assets/src/components/controls/choose.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ControlChoose = ({
  control,
  value,
  handleChange
}) => {
  let controlValue = value;
  if (undefined === controlValue && control.options) {
    // If the value is undefined, set it to the first option
    controlValue = Object.keys(control.options)[0];
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToggleGroupControl, {
    label: control.label,
    value: value,
    onChange: handleChange,
    isBlock: true,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true,
    children: control.options && Object.entries(control.options).map(([optionValue, optionData]) => {
      var icon = optionData.icon || false;
      if (icon) {
        if (icon.includes('dashicons-')) {
          icon = icon.replace('dashicons-', '');
        }
        icon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dashicon, {
          icon: icon
        });
      }
      if (icon) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToggleGroupControlOptionIcon, {
          icon: icon,
          value: optionValue,
          label: optionData.label,
          "aria-label": optionData.label
        });
      } else {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalToggleGroupControlOption, {
          value: optionValue,
          label: optionData.label,
          "aria-label": optionData.label
        }, optionValue);
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlChoose);

/***/ }),

/***/ "./assets/src/components/controls/color.jsx":
/*!**************************************************!*\
  !*** ./assets/src/components/controls/color.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_popover_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/popover-container */ "./assets/src/components/common/popover-container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ControlColor = ({
  control,
  value,
  handleChange
}) => {
  // Get color palette from the global WP data store
  const colorsList = wp.data.select('core/block-editor').getSettings().colors;
  const popoverTrigger = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
    label: control.label,
    id: control.id,
    className: "crocoblock-style-manager__inline-control",
    __nextHasNoMarginBottom: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "crocoblock-style-manager__color-indicator",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorIndicator, {
        colorValue: value
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "crocoblock-style-manager__color-indicator-label",
        children: value
      })]
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_common_popover_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    trigger: popoverTrigger,
    label: control.label,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorPicker, {
      onChange: newValue => {
        handleChange(newValue);
      },
      color: value,
      enableAlpha: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      className: "crocoblock-style-manager__color-palette",
      justify: "flex-start",
      align: "center",
      direction: "row",
      wrap: true,
      gap: 2,
      children: colorsList.map(color => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.FlexItem, {
          className: "crocoblock-style-manager__color-palette-item",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.ColorIndicator, {
            colorValue: color.color,
            onClick: () => {
              handleChange(color.color);
            },
            className: {
              'crocoblock-style-manager__color-palette-item-indicator': true,
              'crocoblock-style-manager__color-palette-item-indicator--active': color.color === value
            }
          })
        }, color.slug);
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlColor);

/***/ }),

/***/ "./assets/src/components/controls/dimensions.jsx":
/*!*******************************************************!*\
  !*** ./assets/src/components/controls/dimensions.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./assets/src/helpers/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const ControlDimensions = ({
  control,
  value,
  handleChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BoxControl, {
    label: control.label,
    values: value,
    value: value,
    onChange: newValue => handleChange(newValue),
    className: "crocoblock-style-manager__dimensions-control",
    __experimentalIsRenderedInSidebar: true,
    __next40pxDefaultSize: true,
    __nextHasNoMarginBottom: true
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlDimensions);

/***/ }),

/***/ "./assets/src/components/controls/range.jsx":
/*!**************************************************!*\
  !*** ./assets/src/components/controls/range.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Allowed units format:
 * [
 *     { value: 'px', intervals: { step: 1, min: 1, max: 1000 } },
 *     { value: '%', intervals: { step: 1, min: 1, max: 100 } },
 *     { value: 'vw', intervals: { step: 1, min: 1, max: 100 } },
 * ]
 */

const ControlRange = ({
  control,
  value,
  handleChange
}) => {
  const [currentValue, setCurrentValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(value);
  const getDefaultUnit = () => {
    // Return the first unit from the allowed units or 'px' if no units are specified
    return control.units && control.units.length > 0 ? control.units[0].value : '';
  };
  const getCurrentUnit = () => {
    if (currentValue) {
      const match = currentValue.match(/[a-zA-Z%]+/);
      if (match && match.length > 0) {
        return match[0];
      }
    }
    return getDefaultUnit();
  };
  const addUnits = value => {
    // Get current unit from current value
    const currentUnit = getCurrentUnit();
    const result = currentUnit ? `${value}${currentUnit}` : value;
    return result;
  };
  const withoutUnits = value => {
    // Remove units from the value
    return value ? parseFloat(value) : 0;
  };
  const allowedUnits = () => {
    // Return allowed units list in the format required by UnitControl
    const units = [];
    if (control.units && control.units.length > 0) {
      for (const unit of control.units) {
        units.push({
          value: unit.value,
          label: unit.label || unit.value,
          default: unit.default || 0
        });
      }
    }
    return units;
  };
  const getCurrentUnitMin = () => {
    // Get the minimum value for the current unit
    const currentUnit = getCurrentUnit();
    const unit = control.units.find(u => u.value === currentUnit);
    return unit && unit.intervals ? unit.intervals.min : 0;
  };
  const getCurrentUnitMax = () => {
    // Get the maximum value for the current unit
    const currentUnit = getCurrentUnit();
    const unit = control.units.find(u => u.value === currentUnit);
    return unit && unit.intervals ? unit.intervals.max : 100;
  };

  // Return simple RangeControl if no units are specified
  if (!control.units) {
    const min = control.min || 0;
    const max = control.max || 100;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
      label: control.label,
      value: currentValue,
      onChange: newValue => {
        setCurrentValue(newValue);
        handleChange(newValue);
      },
      placeholder: control.placeholder,
      className: "crocoblock-style-manager__text-control",
      help: control.help,
      min: min,
      max: max,
      disabled: control.disabled,
      __nextHasNoMarginBottom: true,
      __next40pxDefaultSize: true
    });
  }

  // Return RangeControl with units if specified
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
    label: control.label,
    help: control.help,
    className: "crocoblock-style-manager__range-control",
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalHStack, {
      className: "crocoblock-style-manager__range-control__hstack",
      alignment: "center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          flex: '1 1 0%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
          value: withoutUnits(currentValue),
          onChange: newValue => {
            setCurrentValue(addUnits(newValue));
            handleChange(addUnits(newValue));
          },
          placeholder: control.placeholder,
          className: "crocoblock-style-manager__text-control",
          withInputField: false,
          min: getCurrentUnitMin(),
          max: getCurrentUnitMax(),
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        style: {
          flex: '0 0 80px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, {
          value: currentValue,
          onChange: newValue => {
            handleChange(newValue);
            setCurrentValue(newValue);
          },
          units: allowedUnits(),
          className: "crocoblock-style-manager__unit-control",
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlRange);

/***/ }),

/***/ "./assets/src/components/controls/text.jsx":
/*!*************************************************!*\
  !*** ./assets/src/components/controls/text.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const ControlText = ({
  control,
  value,
  handleChange
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.TextControl, {
    label: control.label,
    value: value,
    onChange: newValue => handleChange(newValue),
    placeholder: control.placeholder,
    className: "crocoblock-style-manager__text-control",
    help: control.help,
    disabled: control.disabled,
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlText);

/***/ }),

/***/ "./assets/src/components/controls/typography.jsx":
/*!*******************************************************!*\
  !*** ./assets/src/components/controls/typography.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_popover_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/popover-container */ "./assets/src/components/common/popover-container.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const ControlTypography = ({
  control,
  value,
  handleChange
}) => {
  const editIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("svg", {
    "clip-rule": "evenodd",
    "fill-rule": "evenodd",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "2",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("path", {
      d: "m19 20.25c0-.402-.356-.75-.75-.75-2.561 0-11.939 0-14.5 0-.394 0-.75.348-.75.75s.356.75.75.75h14.5c.394 0 .75-.348.75-.75zm-7.403-3.398 9.124-9.125c.171-.171.279-.423.279-.684 0-.229-.083-.466-.28-.662l-3.115-3.104c-.185-.185-.429-.277-.672-.277s-.486.092-.672.277l-9.143 9.103c-.569 1.763-1.555 4.823-1.626 5.081-.02.075-.029.15-.029.224 0 .461.349.848.765.848.511 0 .991-.189 5.369-1.681zm-3.27-3.342 2.137 2.137-3.168 1.046zm.955-1.166 7.651-7.616 2.335 2.327-7.637 7.638z",
      "fill-rule": "nonzero"
    })
  });
  const [blockLevelFontFamilies] = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useSettings)('typography.fontFamilies');
  const fontFamilies = [{
    label: 'Default',
    value: ''
  }];
  const fontWeights = [{
    label: 'Default',
    value: ''
  }, {
    label: 'Thin 100',
    value: '100'
  }, {
    label: 'Extra Light 200',
    value: '200'
  }, {
    label: 'Light 300',
    value: '300'
  }, {
    label: 'Regular 400',
    value: '400'
  }, {
    label: 'Medium 500',
    value: '500'
  }, {
    label: 'Semi Bold 600',
    value: '600'
  }, {
    label: 'Bold 700',
    value: '700'
  }, {
    label: 'Extra Bold 800',
    value: '800'
  }, {
    label: 'Black 900',
    value: '900'
  }];
  const fontStyle = [{
    label: 'Default',
    value: ''
  }, {
    label: 'Normal',
    value: 'normal'
  }, {
    label: 'Italic',
    value: 'italic'
  }, {
    label: 'Oblique',
    value: 'oblique'
  }];
  for (const fontsType in blockLevelFontFamilies) {
    for (const font of blockLevelFontFamilies[fontsType]) {
      //fontFamilies.push( font );
      fontFamilies.push({
        label: font.name,
        value: font.fontFamily
      });
    }
  }
  const currentValue = value || {};
  const updateTypography = (key, value) => {
    const newValue = {
      ...currentValue,
      [key]: value
    };
    handleChange(newValue);
  };
  const unitsList = [{
    a11yLabel: 'Pixels (px)',
    label: 'px',
    step: 1,
    value: 'px'
  }, {
    a11yLabel: 'Ems (em)',
    label: 'em',
    step: 0.1,
    value: 'em'
  }, {
    a11yLabel: 'Percent (%)',
    label: '%',
    step: 1,
    value: '%'
  }, {
    a11yLabel: 'Rems (rem)',
    label: 'rem',
    step: 0.1,
    value: 'rem'
  }];
  const popoverTrigger = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.BaseControl, {
    label: control.label,
    id: control.id,
    className: "crocoblock-style-manager__inline-control",
    __nextHasNoMarginBottom: true,
    __next40pxDefaultSize: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      class: "crocoblock-style-manager__popover-trigger",
      children: editIcon
    })
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_popover_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    trigger: popoverTrigger,
    label: control.label,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "crocoblock-style-manager__typography-controls",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
        label: 'Font Family',
        value: currentValue.family,
        onChange: newValue => {
          updateTypography('family', newValue);
        },
        options: fontFamilies,
        className: "crocoblock-style-manager__popover-control",
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "crocoblock-style-manager__popover-controls-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, {
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          label: 'Font Size',
          value: currentValue.size,
          onChange: newValue => {
            updateTypography('size', newValue);
          },
          units: unitsList,
          allowEmpty: true,
          className: "crocoblock-style-manager__popover-control w-50"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, {
          __next40pxDefaultSize: true,
          __nextHasNoMarginBottom: true,
          label: 'Line Height',
          value: currentValue.lineHeight,
          onChange: newValue => {
            updateTypography('lineHeight', newValue);
          },
          units: unitsList,
          allowEmpty: true,
          className: "crocoblock-style-manager__popover-control w-50"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "crocoblock-style-manager__popover-controls-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "w-50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: 'Font Weight',
            value: currentValue.weight,
            onChange: newValue => {
              updateTypography('weight', newValue);
            },
            options: fontWeights,
            className: "crocoblock-style-manager__popover-control",
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "w-50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.SelectControl, {
            label: 'Font Style',
            value: currentValue.style,
            onChange: newValue => {
              updateTypography('style', newValue);
            },
            options: fontStyle,
            className: "crocoblock-style-manager__popover-control",
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "crocoblock-style-manager__popover-controls-row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "w-50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalTextTransformControl, {
            label: 'Text Transform',
            value: currentValue.transform,
            onChange: newValue => {
              updateTypography('transform', newValue);
            },
            className: "crocoblock-style-manager__popover-control",
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "w-50",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.__experimentalTextDecorationControl, {
            label: 'Text Decoration',
            value: currentValue.decoration,
            onChange: newValue => {
              updateTypography('decoration', newValue);
            },
            className: "crocoblock-style-manager__popover-control",
            __next40pxDefaultSize: true,
            __nextHasNoMarginBottom: true
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.__experimentalUnitControl, {
        __next40pxDefaultSize: true,
        __nextHasNoMarginBottom: true,
        label: 'Letter Spacing',
        value: currentValue.letterSpacing,
        onChange: newValue => {
          updateTypography('letterSpacing', newValue);
        },
        units: unitsList,
        allowEmpty: true,
        className: "crocoblock-style-manager__popover-control"
      })]
    })
  });
};

/*
+ {{SIZE}}{{S_UNIT}}
+ {{LINEHEIGHT}}{{LH_UNIT}}
+ {{WEIGHT}}
{{TRANSFORM}}
{{STYLE}}
{{DECORATION}}
+ {{LETTERSPACING}}{{LS_UNIT}}
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlTypography);

/***/ }),

/***/ "./assets/src/css-engine/fields/base-field.js":
/*!****************************************************!*\
  !*** ./assets/src/css-engine/fields/base-field.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseField)
/* harmony export */ });
class BaseField {
  static getType() {
    return 'base-field';
  }
  constructor(uniqueClassName, rawValue) {
    this.uniqueClassName = uniqueClassName;
    this.rawValue = rawValue;
  }
  getSelectorMacros() {
    return {
      wrapper: '.' + this.uniqueClassName
    };
  }
  parseSelector(selector, props) {
    const macros = this.getSelectorMacros();
    selector = this.replaceData(selector, macros);
    props = this.getParsedProps(props);
    let css = ` ${selector} { ${props} }`;
    return css;
  }
  getParsedProps(props) {
    const values = this.getParsedValue();
    return this.replaceData(props, values);
  }

  /**
   * Replace in the give string macros with an actual values from the data.
   *
   * Expected formats:
   * - string: {{ WRAPPER }} .my-class
   * - data: { 'wrapper': '.csm-block-unique-class' }
   */
  replaceData(string, data) {
    return string.replace(/{{\s*([\w-]+)\s*}}/g, (match, p1) => {
      p1 = p1.toLowerCase();
      if (undefined !== data[p1]) {
        return data[p1];
      } else {
        return match;
      }
    });
  }
  getParsedValue() {
    return {
      'value': this.rawValue
    };
  }
  cssVarValueFormat() {
    return '{{VALUE}}';
  }
  parseVariable(variable) {
    const prefix = variable.prefix || '';
    const name = variable.name || false;
    let fullName = variable.full_name || prefix + '-' + name;
    if (!fullName) {
      return '';
    }
    if (variable.suffix) {
      fullName += variable.suffix;
    }
    let parsedValues = this.getParsedValue();
    let result = {};
    if (parsedValues.value) {
      result[fullName] = parsedValues.value;
    } else {
      result[fullName] = this.replaceData(this.cssVarValueFormat(), parsedValues);
    }
    return result;
  }
}

/***/ }),

/***/ "./assets/src/css-engine/fields/border.js":
/*!************************************************!*\
  !*** ./assets/src/css-engine/fields/border.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Border)
/* harmony export */ });
/* harmony import */ var _base_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-field */ "./assets/src/css-engine/fields/base-field.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./assets/src/helpers/utils.js");


class Border extends _base_field__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static getType() {
    return 'border';
  }
  getParsedValue() {
    if (!this.rawValue) {
      return {
        border: {},
        radius: {}
      };
    } else {
      return {
        border: this.parseBorderValue(this.rawValue.border),
        radius: this.rawValue.radius
      };
    }
  }
  parseBorderValue(value) {
    if (!value) {
      return {};
    }
    if (value.color || value.width || value.style) {
      return {
        global: {
          color: value.color || 'inherit',
          width: value.width || 'inherit',
          style: value.style || 'inherit'
        }
      };
    } else {
      return value;
    }
  }
  getParsedProps(props) {
    const values = this.getParsedValue();
    let result = '';
    if (values.border) {
      for (const [key, value] of Object.entries(values.border)) {
        if ('global' === key) {
          result += this.getBorderCSS(value);
        } else {
          result += this.getBorderCSS(value, key);
        }
      }
    }
    if (values.radius) {
      if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(values.radius)) {
        const propsMap = {
          'border-top-left-radius': 'topLeft',
          'border-top-right-radius': 'topRight',
          'border-bottom-right-radius': 'bottomRight',
          'border-bottom-left-radius': 'bottomLeft'
        };
        for (const [key, value] of Object.entries(propsMap)) {
          if (values.radius[value]) {
            result += `${key}: ${values.radius[value]};`;
          }
        }
      } else {
        result += `border-radius: ${values.radius};`;
      }
    }
    return result;
  }
  getBorderCSS(props, key) {
    let css = '';
    if (key) {
      key = '-' + key;
    } else {
      key = '';
    }
    if (props && props.color) {
      css += `border${key}-color: ${props.color};`;
    }
    if (props && props.width) {
      css += `border${key}-width: ${props.width};`;
    }
    if (props && props.style) {
      css += `border${key}-style: ${props.style};`;
    }
    return css;
  }
}

/***/ }),

/***/ "./assets/src/css-engine/fields/color.js":
/*!***********************************************!*\
  !*** ./assets/src/css-engine/fields/color.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var _base_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-field */ "./assets/src/css-engine/fields/base-field.js");

class Color extends _base_field__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static getType() {
    return 'color-picker';
  }
}

/***/ }),

/***/ "./assets/src/css-engine/fields/dimensions.js":
/*!****************************************************!*\
  !*** ./assets/src/css-engine/fields/dimensions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dimensions)
/* harmony export */ });
/* harmony import */ var _base_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-field */ "./assets/src/css-engine/fields/base-field.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/utils */ "./assets/src/helpers/utils.js");


class Dimensions extends _base_field__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static getType() {
    return 'dimensions';
  }
  getParsedValue() {
    if (!this.rawValue) {
      return {
        top: '',
        right: '',
        bottom: '',
        left: ''
      };
    }
    if ((0,_helpers_utils__WEBPACK_IMPORTED_MODULE_1__.isObject)(this.rawValue)) {
      return {
        top: this.rawValue.top || '',
        right: this.rawValue.right || '',
        bottom: this.rawValue.bottom || '',
        left: this.rawValue.left || ''
      };
    } else {
      return {
        top: this.rawValue,
        right: this.rawValue,
        bottom: this.rawValue,
        left: this.rawValue
      };
    }
  }
}

/***/ }),

/***/ "./assets/src/css-engine/fields/index.js":
/*!***********************************************!*\
  !*** ./assets/src/css-engine/fields/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseField: () => (/* reexport safe */ _base_field_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   Border: () => (/* reexport safe */ _border_js__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   Color: () => (/* reexport safe */ _color_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   Dimensions: () => (/* reexport safe */ _dimensions_js__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   Range: () => (/* reexport safe */ _range_js__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   Typography: () => (/* reexport safe */ _typography_js__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _base_field_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-field.js */ "./assets/src/css-engine/fields/base-field.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./assets/src/css-engine/fields/color.js");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typography.js */ "./assets/src/css-engine/fields/typography.js");
/* harmony import */ var _border_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./border.js */ "./assets/src/css-engine/fields/border.js");
/* harmony import */ var _dimensions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dimensions.js */ "./assets/src/css-engine/fields/dimensions.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range.js */ "./assets/src/css-engine/fields/range.js");








/***/ }),

/***/ "./assets/src/css-engine/fields/range.js":
/*!***********************************************!*\
  !*** ./assets/src/css-engine/fields/range.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Range)
/* harmony export */ });
/* harmony import */ var _base_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-field */ "./assets/src/css-engine/fields/base-field.js");

class Range extends _base_field__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static getType() {
    return 'range';
  }
  getParsedValue() {
    return {
      value: this.rawValue || 0,
      unit: ''
    };
  }
}

/***/ }),

/***/ "./assets/src/css-engine/fields/typography.js":
/*!****************************************************!*\
  !*** ./assets/src/css-engine/fields/typography.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Typography)
/* harmony export */ });
/* harmony import */ var _base_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-field */ "./assets/src/css-engine/fields/base-field.js");

class Typography extends _base_field__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static getType() {
    return 'typography';
  }
  getParsedValue() {
    return {
      family: this.rawValue.family || 'inherit',
      weight: this.rawValue.weight || 'inherit',
      transform: this.rawValue.transform || 'inherit',
      style: this.rawValue.style || 'inherit',
      decoration: this.rawValue.decoration || 'inherit',
      lineheight: this.rawValue.lineheight || 'inherit',
      lh_unit: '',
      // legacy from old SM for style decorations consisitency
      letterspacing: this.rawValue.letterSpacing || 'inherit',
      ls_unit: '',
      // legacy from old SM for style decorations consisitency
      size: this.rawValue.size || 'inherit',
      s_unit: '' // legacy from old SM for style decorations consisitency
    };
  }
}

/***/ }),

/***/ "./assets/src/css-engine/generator.js":
/*!********************************************!*\
  !*** ./assets/src/css-engine/generator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Generator: () => (/* binding */ Generator)
/* harmony export */ });
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fields */ "./assets/src/css-engine/fields/index.js");
/* harmony import */ var _helpers_breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/breakpoints */ "./assets/src/helpers/breakpoints.js");


class Generator {
  constructor(blockName, attributes) {
    this.blockName = blockName;
    this.attributes = attributes;
    this.uniqueClassName = attributes._uniqueClassName || false;
    this.css = '';
    this.cssVariables = {};
    this.responsiveCSS = {};
    this.controlHandlers = {
      [_fields__WEBPACK_IMPORTED_MODULE_0__.Color.getType()]: _fields__WEBPACK_IMPORTED_MODULE_0__.Color,
      [_fields__WEBPACK_IMPORTED_MODULE_0__.Typography.getType()]: _fields__WEBPACK_IMPORTED_MODULE_0__.Typography,
      [_fields__WEBPACK_IMPORTED_MODULE_0__.Border.getType()]: _fields__WEBPACK_IMPORTED_MODULE_0__.Border,
      [_fields__WEBPACK_IMPORTED_MODULE_0__.Dimensions.getType()]: _fields__WEBPACK_IMPORTED_MODULE_0__.Dimensions,
      [_fields__WEBPACK_IMPORTED_MODULE_0__.Range.getType()]: _fields__WEBPACK_IMPORTED_MODULE_0__.Range
    };
  }
  getControlHandler(control) {
    const controlType = control.type || false;
    if (!controlType) {
      return false;
    }
    return this.controlHandlers[controlType] || false;
  }
  getCSS() {
    // Ensure we reset CSS on block re-render
    this.css = '';
    const {
      blockName
    } = this;
    if (!window.crocoBlockStyleEditor.blocks[blockName]) {
      return this.css;
    }
    for (const control of window.crocoBlockStyleEditor.blocks[blockName]) {
      this.generateControlStyles(control);
    }
    for (const device in this.responsiveCSS) {
      if (!this.responsiveCSS[device]) {
        continue;
      }
      const mediaQueryCSS = (0,_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_1__.withMediaQuery)(this.responsiveCSS[device], device);
      if (mediaQueryCSS) {
        this.css += mediaQueryCSS;
      }
    }
    return {
      styles: this.css,
      variables: this.cssVariables
    };
  }
  generateResponsiveStyles(controlID, cssSelectors, ControlHandler) {
    for (const device in (0,_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_1__.getBreakpoints)()) {
      if (!this.attributes?.[device]?.[controlID]) {
        continue;
      }
      const controlInstance = new ControlHandler(this.uniqueClassName, this.attributes[device][controlID]);
      for (const selector in cssSelectors) {
        const selectorStyles = controlInstance.parseSelector(selector, cssSelectors[selector]);
        if (!this.responsiveCSS[device]) {
          this.responsiveCSS[device] = '';
        }
        this.responsiveCSS[device] += selectorStyles;
      }
    }
  }
  generateResponsiveVariables(controlID, cssVar, ControlHandler) {
    for (const device in (0,_helpers_breakpoints__WEBPACK_IMPORTED_MODULE_1__.getBreakpoints)()) {
      cssVar.suffix = '';
      if (!this.attributes?.[device]?.[controlID]) {
        continue;
      }
      cssVar.suffix = device;
      const controlInstance = new ControlHandler(this.uniqueClassName, this.attributes[device][controlID]);
      this.cssVariables = {
        ...this.cssVariables,
        ...controlInstance.parseVariable(cssVar)
      };
    }
  }
  generateControlStyles(control) {
    const ControlHandler = this.getControlHandler(control);
    const controlID = control.id || false;
    const {
      attributes
    } = this;
    if (ControlHandler && controlID && attributes[controlID]) {
      const controlInstance = new ControlHandler(this.uniqueClassName, this.attributes[controlID]);
      if (control.css_selector) {
        for (const selector in control.css_selector) {
          this.css += controlInstance.parseSelector(selector, control.css_selector[selector]);
        }
        this.generateResponsiveStyles(controlID, control.css_selector, ControlHandler);
      }
      if (control.css_var) {
        this.cssVariables = {
          ...this.cssVariables,
          ...controlInstance.parseVariable(control.css_var)
        };
        this.generateResponsiveVariables(controlID, control.css_var, ControlHandler);
      }
    }
    if (control.children) {
      for (const childControl of control.children) {
        this.generateControlStyles(childControl);
      }
    }
  }
}

/***/ }),

/***/ "./assets/src/editor.scss":
/*!********************************!*\
  !*** ./assets/src/editor.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/src/helpers/breakpoints.js":
/*!*******************************************!*\
  !*** ./assets/src/helpers/breakpoints.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBreakpoints: () => (/* binding */ getBreakpoints),
/* harmony export */   getBreakpointsHierarchy: () => (/* binding */ getBreakpointsHierarchy),
/* harmony export */   withMediaQuery: () => (/* binding */ withMediaQuery)
/* harmony export */ });
const breakpoints = {
  __desktop: {
    minWidth: 992
  },
  __tablet: {
    maxWidth: 991
  },
  __mobile: {
    maxWidth: 478
  }
};
const getBreakpoints = () => {
  return breakpoints;
};
const getBreakpointsHierarchy = () => {
  return Object.keys(breakpoints);
};
const withMediaQuery = (css, device) => {
  const mediaQuery = breakpoints[device];
  if (!mediaQuery) {
    return css;
  }
  let mediaQueryString = '';
  if (mediaQuery.minWidth) {
    mediaQueryString += `(min-width: ${mediaQuery.minWidth}px)`;
  }
  if (mediaQuery.maxWidth) {
    if (mediaQueryString) {
      mediaQueryString += ' and ';
    }
    mediaQueryString += `(max-width: ${mediaQuery.maxWidth}px)`;
  }
  if (!mediaQueryString) {
    return css;
  }
  return `@media ${mediaQueryString} { ${css} }`;
};

/***/ }),

/***/ "./assets/src/helpers/utils.js":
/*!*************************************!*\
  !*** ./assets/src/helpers/utils.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockControls: () => (/* binding */ getBlockControls),
/* harmony export */   hasChildren: () => (/* binding */ hasChildren),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isObject: () => (/* binding */ isObject)
/* harmony export */ });
/**
 * Get all block controls for given block
 *
 * @param {string} blockName
 * @returns {object} blockControls
 */
const getBlockControls = blockName => {
  const blockControls = window.crocoBlockStyleEditor.getBlockControls(blockName);
  if (!blockControls) {
    return {};
  }
  return blockControls;
};

/**
 * Check if given stack has children
 *
 * @param {object} stack
 * @returns {boolean}
 */
const hasChildren = stack => {
  if (!stack.children) {
    return false;
  }
  if (Array.isArray(stack.children) && stack.children.length > 0) {
    return true;
  }

  // Otherwise, return false
  return false;
};

/**
 * Check if given variable is an object
 *
 * @param {any} variable
 * @returns {boolean}
 */
const isObject = variable => {
  return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
};
const isEmpty = variable => {
  if (variable === null || variable === undefined) {
    return true;
  }
  if (typeof variable === 'string' && variable.trim() === '') {
    return true;
  }
  if (Array.isArray(variable) && variable.length === 0) {
    return true;
  }
  if (isObject(variable) && Object.keys(variable).length === 0) {
    return true;
  }
  return false;
};

/***/ }),

/***/ "./assets/src/hoc-wrappers/with-block-class.js":
/*!*****************************************************!*\
  !*** ./assets/src/hoc-wrappers/with-block-class.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateUniqueClassName: () => (/* binding */ generateUniqueClassName),
/* harmony export */   withBlockUniqueClass: () => (/* binding */ withBlockUniqueClass)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const withBlockUniqueClass = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(BlockListBlockComponent => {
  return props => {
    const {
      name,
      className = '',
      clientId,
      setAttributes,
      attributes
    } = props;

    // Pull the block’s registration info
    const blockType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select('core/blocks').getBlockType(name), [name]);

    // If crocoblock_styles support is present, add our class
    if (blockType?.supports?.crocoblock_styles) {
      const uniqueClass = props?.attributes?.[window.crocoStyleEditorData.support_name]?.['_uniqueClassName'];
      (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
        if (window.crocoBlockStyleEditor.classIsUsed(uniqueClass, clientId)) {
          // If the class is already used, we need to generate a new one
          const newUniqueClass = generateUniqueClassName();
          setAttributes({
            [window.crocoStyleEditorData.support_name]: {
              ...attributes[window.crocoStyleEditorData.support_name],
              _uniqueClassName: newUniqueClass
            }
          });
        }
      }, []);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockListBlockComponent, {
        ...props,
        className: `${className} ${uniqueClass}`.trim()
      });
    }

    // Otherwise render unmodified
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(BlockListBlockComponent, {
      ...props
    });
  };
}, 'withBlockUniqueClass');
const generateUniqueClassName = () => {
  const length = 8;
  let chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      // Ensure the first character is a letter
      result += chars.charAt(Math.floor(Math.random() * 26));
      continue;
    }
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return window.crocoStyleEditorData.class_prefix + result;
};

/***/ }),

/***/ "./assets/src/hoc-wrappers/with-styles-controls.js":
/*!*********************************************************!*\
  !*** ./assets/src/hoc-wrappers/with-styles-controls.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withStylesControls: () => (/* binding */ withStylesControls)
/* harmony export */ });
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_control_stack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/control-stack */ "./assets/src/components/control-stack.jsx");
/* harmony import */ var _css_engine_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css-engine/generator */ "./assets/src/css-engine/generator.js");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/utils */ "./assets/src/helpers/utils.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const withStylesControls = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_0__.createHigherOrderComponent)(BlockEdit => {
  return props => {
    const {
      attributes
    } = props;
    const supportName = window.crocoStyleEditorData.support_name;
    console.log('withStylesControls', props);

    // We need to check it by attributes, because 'supports' are not available in the props
    if (!attributes || !attributes[supportName]) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BlockEdit, {
        ...props
      });
    }
    const cssGenerator = new _css_engine_generator__WEBPACK_IMPORTED_MODULE_2__.Generator(props.name, attributes[supportName]);
    const {
      styles,
      variables
    } = cssGenerator.getCSS();
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [!(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(styles) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("style", {
        children: styles
      }), !(0,_helpers_utils__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(variables) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        style: variables,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BlockEdit, {
          ...props
        })
      }), (0,_helpers_utils__WEBPACK_IMPORTED_MODULE_3__.isEmpty)(variables) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BlockEdit, {
        ...props
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_control_stack__WEBPACK_IMPORTED_MODULE_1__["default"], {
        ...props
      })]
    });
  };
}, 'withStylesControls');

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/***/ ((module) => {

module.exports = window["wp"]["hooks"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/*!******************************!*\
  !*** ./assets/src/editor.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./assets/src/editor.scss");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_wrappers_with_styles_controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hoc-wrappers/with-styles-controls */ "./assets/src/hoc-wrappers/with-styles-controls.js");
/* harmony import */ var _hoc_wrappers_with_block_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hoc-wrappers/with-block-class */ "./assets/src/hoc-wrappers/with-block-class.js");




class CrocoBlockStyleEditor {
  init() {
    this.blocks = window?.crocoStyleEditorData?.blocks_supports || {};
    this.supportName = window.crocoStyleEditorData.support_name;
    this.usedClasses = {};
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('blocks.registerBlockType', 'crocoblock-style-manager/enable-block-support', this.registerBlock.bind(this));
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockEdit', 'crocoblock-style-manager/enable-block-support', _hoc_wrappers_with_styles_controls__WEBPACK_IMPORTED_MODULE_2__.withStylesControls);
    (0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)('editor.BlockListBlock', 'crocoblock-style-manager/with-crocoblock-editor-class', _hoc_wrappers_with_block_class__WEBPACK_IMPORTED_MODULE_3__.withBlockUniqueClass);
  }
  classIsUsed(className, clientId) {
    if (!className || !clientId) {
      return false;
    }
    if (this.usedClasses[className]) {
      if (this.usedClasses[className] === clientId) {
        // It's the same clientId, so we can use this class
        return false;
      } else {
        // The class is already used by another block
        return true;
      }
    } else {
      // The class is not used yet, so we can use it
      this.usedClasses[className] = clientId;
      return false;
    }
  }
  getBlockControls(blockName) {
    return this.blocks[blockName] || false;
  }
  registerBlock(settings, name) {
    if (!this.getBlockControls(name)) {
      return settings;
    }
    const supports = settings.supports || {};
    supports[this.supportName] = true;
    const attributes = settings.attributes || {};
    if (!attributes[this.supportName]) {
      attributes[this.supportName] = {
        type: 'object',
        default: {
          _uniqueClassName: (0,_hoc_wrappers_with_block_class__WEBPACK_IMPORTED_MODULE_3__.generateUniqueClassName)()
        }
      };
    }
    return {
      ...settings,
      supports: supports,
      attributes: attributes
    };
  }
}
window.crocoBlockStyleEditor = new CrocoBlockStyleEditor();
window.crocoBlockStyleEditor.init();
})();

/******/ })()
;
//# sourceMappingURL=editor.js.map