"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["editor_form-actions_redirect_to_page_render_js"],{

/***/ "./editor/form-actions/redirect.to.page/render.js":
/*!********************************************************!*\
  !*** ./editor/form-actions/redirect.to.page/render.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar _JetFBActions = JetFBActions,\n    Tools = _JetFBActions.Tools,\n    addAction = _JetFBActions.addAction,\n    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;\nvar _JetFBComponents = JetFBComponents,\n    FieldWithPreset = _JetFBComponents.FieldWithPreset,\n    DynamicPreset = _JetFBComponents.DynamicPreset;\n/**\r\n * Internal dependencies\r\n */\n\nvar _wp$components = wp.components,\n    TextControl = _wp$components.TextControl,\n    ToggleControl = _wp$components.ToggleControl,\n    SelectControl = _wp$components.SelectControl,\n    BaseControl = _wp$components.BaseControl,\n    CheckboxControl = _wp$components.CheckboxControl;\nvar __ = wp.i18n.__;\nvar _wp$element = wp.element,\n    useState = _wp$element.useState,\n    useEffect = _wp$element.useEffect;\nvar _JetFBHooks = JetFBHooks,\n    withRequestFields = _JetFBHooks.withRequestFields;\nvar withSelect = wp.data.withSelect;\nvar applyFilters = wp.hooks.applyFilters;\n\nfunction RedirectToPageRender(props) {\n  var source = props.source,\n      label = props.label,\n      settings = props.settings,\n      onChangeSetting = props.onChangeSetting,\n      onChangeSettingObj = props.onChangeSettingObj,\n      requestFields = props.requestFields;\n\n  var _useState = useState(source.redirect_types),\n      _useState2 = _slicedToArray(_useState, 2),\n      typePages = _useState2[0],\n      setTypePages = _useState2[1];\n\n  var _useState3 = useState([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      fields = _useState4[0],\n      setFields = _useState4[1];\n\n  useEffect(function () {\n    var hasInserted = requestFields.findIndex(function (field) {\n      return 'inserted_post_id' === field.value;\n    });\n\n    if (-1 === hasInserted) {\n      setTypePages(function (prev) {\n        return prev.filter(function (type) {\n          return 'inserted_post' !== type.value;\n        });\n      });\n    }\n\n    var filterTypes = applyFilters('jet.fb.redirect_to_page.types', [], props);\n\n    if (filterTypes.length) {\n      setTypePages(function (prev) {\n        return [].concat(_toConsumableArray(prev), _toConsumableArray(filterTypes));\n      });\n    }\n\n    setFields([].concat(_toConsumableArray(getFormFieldsBlocks()), _toConsumableArray(requestFields)));\n  }, []);\n\n  var isChecked = function isChecked(name) {\n    var args_fields = Array.from(settings.redirect_args || []);\n    return Boolean(args_fields.includes(name));\n  };\n\n  var onChangeRedirectArgs = function onChangeRedirectArgs(value, field_name) {\n    var redirect_args = Array.from(settings.redirect_args || []);\n\n    if (!value) {\n      var field_id = redirect_args.indexOf(field_name);\n      redirect_args.splice(field_id, 1);\n    } else {\n      redirect_args.push(field_name);\n    }\n\n    onChangeSettingObj({\n      redirect_args: redirect_args\n    });\n  };\n  /* eslint-disable jsx-a11y/no-onchange */\n\n\n  return wp.element.createElement(\"div\", {\n    key: \"redirect_to_page\"\n  }, wp.element.createElement(SelectControl, {\n    className: \"full-width\",\n    key: \"redirect_type\",\n    label: label('redirect_type'),\n    labelPosition: \"side\",\n    value: settings.redirect_type,\n    options: typePages,\n    onChange: function onChange(redirect_type) {\n      return onChangeSettingObj({\n        redirect_type: redirect_type\n      });\n    }\n  }), 'static_page' === settings.redirect_type && wp.element.createElement(SelectControl, {\n    key: \"redirect_type_page\",\n    className: \"full-width\",\n    label: label('redirect_page'),\n    labelPosition: \"side\",\n    value: settings.redirect_page,\n    options: source.pages,\n    onChange: function onChange(redirect_page) {\n      return onChangeSettingObj({\n        redirect_page: redirect_page\n      });\n    }\n  }), 'custom_url' === settings.redirect_type && wp.element.createElement(FieldWithPreset, {\n    key: 'custom_url-FieldWithPreset',\n    ModalEditor: function ModalEditor(_ref) {\n      var actionClick = _ref.actionClick,\n          onRequestClose = _ref.onRequestClose;\n      return wp.element.createElement(DynamicPreset, {\n        value: settings.redirect_url,\n        isSaveAction: actionClick,\n        onSavePreset: function onSavePreset(redirect_url) {\n          return onChangeSettingObj({\n            redirect_url: redirect_url\n          });\n        },\n        onUnMount: onRequestClose,\n        excludeSources: ['query_var']\n      });\n    },\n    triggerClasses: ['trigger__text-control']\n  }, wp.element.createElement(TextControl, {\n    key: \"redirect_url_control\",\n    label: label('redirect_url'),\n    value: settings.redirect_url,\n    className: 'jet-control-with-dynamic',\n    onChange: function onChange(redirect_url) {\n      return onChangeSettingObj({\n        redirect_url: redirect_url\n      });\n    }\n  })), wp.element.createElement(BaseControl, {\n    label: label('redirect_args'),\n    key: \"redirect_args_control\"\n  }, wp.element.createElement(\"div\", {\n    className: \"jet-user-fields-map__list\"\n  }, fields.map(function (_ref2, index) {\n    var name = _ref2.name;\n    return wp.element.createElement(CheckboxControl, {\n      key: \"checkbox_args_\".concat(name, \"_\").concat(index),\n      label: name,\n      checked: isChecked(name),\n      onChange: function onChange(newVal) {\n        return onChangeRedirectArgs(newVal, name);\n      }\n    });\n  }))), wp.element.createElement(TextControl, {\n    key: \"redirect_hash_control\",\n    label: label('redirect_hash'),\n    value: settings.redirect_hash,\n    onChange: function onChange(redirect_hash) {\n      return onChangeSettingObj({\n        redirect_hash: redirect_hash\n      });\n    }\n  }));\n  /* eslint-enable jsx-a11y/no-onchange */\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSelect(withRequestFields)(RedirectToPageRender));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9lZGl0b3IvZm9ybS1hY3Rpb25zL3JlZGlyZWN0LnRvLnBhZ2UvcmVuZGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUlVQSxZQUpWO0FBQUEsSUFDT0MsS0FEUCxpQkFDT0EsS0FEUDtBQUFBLElBRU9DLFNBRlAsaUJBRU9BLFNBRlA7QUFBQSxJQUdPQyxtQkFIUCxpQkFHT0EsbUJBSFA7QUFNQSx1QkFHVUMsZUFIVjtBQUFBLElBQ09DLGVBRFAsb0JBQ09BLGVBRFA7QUFBQSxJQUVPQyxhQUZQLG9CQUVPQSxhQUZQO0FBS0E7QUFDQTtBQUNBOztBQUNBLHFCQU1VQyxFQUFFLENBQUNDLFVBTmI7QUFBQSxJQUNPQyxXQURQLGtCQUNPQSxXQURQO0FBQUEsSUFFT0MsYUFGUCxrQkFFT0EsYUFGUDtBQUFBLElBR09DLGFBSFAsa0JBR09BLGFBSFA7QUFBQSxJQUlPQyxXQUpQLGtCQUlPQSxXQUpQO0FBQUEsSUFLT0MsZUFMUCxrQkFLT0EsZUFMUDtBQVFBLElBQVFDLEVBQVIsR0FBZVAsRUFBRSxDQUFDUSxJQUFsQixDQUFRRCxFQUFSO0FBRUEsa0JBR1VQLEVBQUUsQ0FBQ1MsT0FIYjtBQUFBLElBQ09DLFFBRFAsZUFDT0EsUUFEUDtBQUFBLElBRU9DLFNBRlAsZUFFT0EsU0FGUDtBQUtBLGtCQUE4QkMsVUFBOUI7QUFBQSxJQUFRQyxpQkFBUixlQUFRQSxpQkFBUjtBQUVBLElBQVFDLFVBQVIsR0FBdUJkLEVBQUUsQ0FBQ2UsSUFBMUIsQ0FBUUQsVUFBUjtBQUVBLElBQVFFLFlBQVIsR0FBeUJoQixFQUFFLENBQUNpQixLQUE1QixDQUFRRCxZQUFSOztBQUVBLFNBQVNFLG9CQUFULENBQStCQyxLQUEvQixFQUF1QztBQUV0QyxNQUNPQyxNQURQLEdBT1VELEtBUFYsQ0FDT0MsTUFEUDtBQUFBLE1BRU9DLEtBRlAsR0FPVUYsS0FQVixDQUVPRSxLQUZQO0FBQUEsTUFHT0MsUUFIUCxHQU9VSCxLQVBWLENBR09H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b25zL3JlZGlyZWN0LnRvLnBhZ2UvcmVuZGVyLmpzP2U0MDMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIFRvb2xzLFxyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuXHQgICAgICBnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG4gICAgICB9ID0gSmV0RkJBY3Rpb25zO1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIEZpZWxkV2l0aFByZXNldCxcclxuXHQgICAgICBEeW5hbWljUHJlc2V0LFxyXG4gICAgICB9ID0gSmV0RkJDb21wb25lbnRzO1xyXG5cclxuLyoqXHJcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xyXG4gKi9cclxuY29uc3Qge1xyXG5cdCAgICAgIFRleHRDb250cm9sLFxyXG5cdCAgICAgIFRvZ2dsZUNvbnRyb2wsXHJcblx0ICAgICAgU2VsZWN0Q29udHJvbCxcclxuXHQgICAgICBCYXNlQ29udHJvbCxcclxuXHQgICAgICBDaGVja2JveENvbnRyb2wsXHJcbiAgICAgIH0gPSB3cC5jb21wb25lbnRzO1xyXG5cclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICB1c2VTdGF0ZSxcclxuXHQgICAgICB1c2VFZmZlY3QsXHJcbiAgICAgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3QgeyB3aXRoUmVxdWVzdEZpZWxkcyB9ID0gSmV0RkJIb29rcztcclxuXHJcbmNvbnN0IHsgd2l0aFNlbGVjdCB9ID0gd3AuZGF0YTtcclxuXHJcbmNvbnN0IHsgYXBwbHlGaWx0ZXJzIH0gPSB3cC5ob29rcztcclxuXHJcbmZ1bmN0aW9uIFJlZGlyZWN0VG9QYWdlUmVuZGVyKCBwcm9wcyApIHtcclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ICAgICAgc291cmNlLFxyXG5cdFx0ICAgICAgbGFiZWwsXHJcblx0XHQgICAgICBzZXR0aW5ncyxcclxuXHRcdCAgICAgIG9uQ2hhbmdlU2V0dGluZyxcclxuXHRcdCAgICAgIG9uQ2hhbmdlU2V0dGluZ09iaixcclxuXHRcdCAgICAgIHJlcXVlc3RGaWVsZHMsXHJcblx0ICAgICAgfSA9IHByb3BzO1xyXG5cclxuXHRjb25zdCBbIHR5cGVQYWdlcywgc2V0VHlwZVBhZ2VzIF0gPSB1c2VTdGF0ZSggc291cmNlLnJlZGlyZWN0X3R5cGVzICk7XHJcblx0Y29uc3QgWyBmaWVsZHMsIHNldEZpZWxkcyBdICAgICAgID0gdXNlU3RhdGUoIFtdICk7XHJcblxyXG5cdHVzZUVmZmVjdCggKCkgPT4ge1xyXG5cdFx0Y29uc3QgaGFzSW5zZXJ0ZWQgPSByZXF1ZXN0RmllbGRzLmZpbmRJbmRleChcclxuXHRcdFx0ZmllbGQgPT4gJ2luc2VydGVkX3Bvc3RfaWQnID09PSBmaWVsZC52YWx1ZSApO1xyXG5cclxuXHRcdGlmICggLTEgPT09IGhhc0luc2VydGVkICkge1xyXG5cdFx0XHRzZXRUeXBlUGFnZXMoXHJcblx0XHRcdFx0cHJldiA9PiBwcmV2LmZpbHRlciggdHlwZSA9PiAnaW5zZXJ0ZWRfcG9zdCcgIT09IHR5cGUudmFsdWUgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IGZpbHRlclR5cGVzID0gYXBwbHlGaWx0ZXJzKCAnamV0LmZiLnJlZGlyZWN0X3RvX3BhZ2UudHlwZXMnLCBbXSxcclxuXHRcdFx0cHJvcHMgKTtcclxuXHJcblx0XHRpZiAoIGZpbHRlclR5cGVzLmxlbmd0aCApIHtcclxuXHRcdFx0c2V0VHlwZVBhZ2VzKCBwcmV2ID0+IChcclxuXHRcdFx0XHRbIC4uLnByZXYsIC4uLmZpbHRlclR5cGVzIF1cclxuXHRcdFx0KSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldEZpZWxkcyggWyAuLi5nZXRGb3JtRmllbGRzQmxvY2tzKCksIC4uLnJlcXVlc3RGaWVsZHMgXSApO1xyXG5cdH0sIFtdICk7XHJcblxyXG5cdGNvbnN0IGlzQ2hlY2tlZCA9IGZ1bmN0aW9uICggbmFtZSApIHtcclxuXHRcdGNvbnN0IGFyZ3NfZmllbGRzID0gQXJyYXkuZnJvbSggc2V0dGluZ3MucmVkaXJlY3RfYXJncyB8fCBbXSApO1xyXG5cclxuXHRcdHJldHVybiBCb29sZWFuKCBhcmdzX2ZpZWxkcy5pbmNsdWRlcyggbmFtZSApICk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DaGFuZ2VSZWRpcmVjdEFyZ3MgPSBmdW5jdGlvbiAoIHZhbHVlLCBmaWVsZF9uYW1lICkge1xyXG5cdFx0bGV0IHJlZGlyZWN0X2FyZ3MgPSBBcnJheS5mcm9tKCBzZXR0aW5ncy5yZWRpcmVjdF9hcmdzIHx8IFtdICk7XHJcblxyXG5cdFx0aWYgKCAhdmFsdWUgKSB7XHJcblx0XHRcdGNvbnN0IGZpZWxkX2lkID0gcmVkaXJlY3RfYXJncy5pbmRleE9mKCBmaWVsZF9uYW1lICk7XHJcblxyXG5cdFx0XHRyZWRpcmVjdF9hcmdzLnNwbGljZSggZmllbGRfaWQsIDEgKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRyZWRpcmVjdF9hcmdzLnB1c2goIGZpZWxkX25hbWUgKTtcclxuXHRcdH1cclxuXHJcblx0XHRvbkNoYW5nZVNldHRpbmdPYmooIHsgcmVkaXJlY3RfYXJncyB9ICk7XHJcblx0fTtcclxuXHJcblx0LyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBrZXk9XCJyZWRpcmVjdF90b19wYWdlXCI+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZnVsbC13aWR0aFwiXHJcblx0XHRcdFx0a2V5PVwicmVkaXJlY3RfdHlwZVwiXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlZGlyZWN0X3R5cGUnICkgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249XCJzaWRlXCJcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnJlZGlyZWN0X3R5cGUgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyB0eXBlUGFnZXMgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgcmVkaXJlY3RfdHlwZSA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHR7IHJlZGlyZWN0X3R5cGUgfSApIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0eyAnc3RhdGljX3BhZ2UnID09PSBzZXR0aW5ncy5yZWRpcmVjdF90eXBlICYmIDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicmVkaXJlY3RfdHlwZV9wYWdlXCJcclxuXHRcdFx0XHRjbGFzc05hbWU9XCJmdWxsLXdpZHRoXCJcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfcGFnZScgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj1cInNpZGVcIlxyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfcGFnZSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IHNvdXJjZS5wYWdlcyB9XHJcblx0XHRcdFx0b25DaGFuZ2U9eyByZWRpcmVjdF9wYWdlID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdHsgcmVkaXJlY3RfcGFnZSB9ICkgfVxyXG5cdFx0XHQvPiB9XHJcblxyXG5cdFx0XHR7ICdjdXN0b21fdXJsJyA9PT0gc2V0dGluZ3MucmVkaXJlY3RfdHlwZSAmJiA8RmllbGRXaXRoUHJlc2V0XHJcblx0XHRcdFx0a2V5PXsgJ2N1c3RvbV91cmwtRmllbGRXaXRoUHJlc2V0JyB9XHJcblx0XHRcdFx0TW9kYWxFZGl0b3I9eyAoIHsgYWN0aW9uQ2xpY2ssIG9uUmVxdWVzdENsb3NlIH0gKSA9PlxyXG5cdFx0XHRcdFx0PER5bmFtaWNQcmVzZXRcclxuXHRcdFx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF91cmwgfVxyXG5cdFx0XHRcdFx0XHRpc1NhdmVBY3Rpb249eyBhY3Rpb25DbGljayB9XHJcblx0XHRcdFx0XHRcdG9uU2F2ZVByZXNldD17IHJlZGlyZWN0X3VybCA9PiBvbkNoYW5nZVNldHRpbmdPYmooXHJcblx0XHRcdFx0XHRcdFx0eyByZWRpcmVjdF91cmwgfSApIH1cclxuXHRcdFx0XHRcdFx0b25Vbk1vdW50PXsgb25SZXF1ZXN0Q2xvc2UgfVxyXG5cdFx0XHRcdFx0XHRleGNsdWRlU291cmNlcz17IFsgJ3F1ZXJ5X3ZhcicgXSB9XHJcblx0XHRcdFx0XHQvPiB9XHJcblx0XHRcdFx0dHJpZ2dlckNsYXNzZXM9eyBbICd0cmlnZ2VyX190ZXh0LWNvbnRyb2wnIF0gfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0XHRrZXk9XCJyZWRpcmVjdF91cmxfY29udHJvbFwiXHJcblx0XHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfdXJsJyApIH1cclxuXHRcdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVkaXJlY3RfdXJsIH1cclxuXHRcdFx0XHRcdGNsYXNzTmFtZT17ICdqZXQtY29udHJvbC13aXRoLWR5bmFtaWMnIH1cclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsgcmVkaXJlY3RfdXJsID0+IG9uQ2hhbmdlU2V0dGluZ09iaihcclxuXHRcdFx0XHRcdFx0eyByZWRpcmVjdF91cmwgfSApIH1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L0ZpZWxkV2l0aFByZXNldD4gfVxyXG5cdFx0XHQ8QmFzZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfYXJncycgKSB9XHJcblx0XHRcdFx0a2V5PVwicmVkaXJlY3RfYXJnc19jb250cm9sXCJcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiamV0LXVzZXItZmllbGRzLW1hcF9fbGlzdFwiPlxyXG5cdFx0XHRcdFx0eyBmaWVsZHMubWFwKCAoIHsgbmFtZSB9LCBpbmRleCApID0+IDxDaGVja2JveENvbnRyb2xcclxuXHRcdFx0XHRcdFx0XHRrZXk9eyBgY2hlY2tib3hfYXJnc18keyBuYW1lIH1fJHsgaW5kZXggfWAgfVxyXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgbmFtZSB9XHJcblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IGlzQ2hlY2tlZCggbmFtZSApIH1cclxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG5ld1ZhbCA9PiBvbkNoYW5nZVJlZGlyZWN0QXJncyggbmV3VmFsLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZSApIH1cclxuXHRcdFx0XHRcdFx0Lz4sXHJcblx0XHRcdFx0XHQpIH1cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9CYXNlQ29udHJvbD5cclxuXHRcdFx0PFRleHRDb250cm9sXHJcblx0XHRcdFx0a2V5PVwicmVkaXJlY3RfaGFzaF9jb250cm9sXCJcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAncmVkaXJlY3RfaGFzaCcgKSB9XHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy5yZWRpcmVjdF9oYXNoIH1cclxuXHRcdFx0XHRvbkNoYW5nZT17IHJlZGlyZWN0X2hhc2ggPT4gb25DaGFuZ2VTZXR0aW5nT2JqKFxyXG5cdFx0XHRcdFx0eyByZWRpcmVjdF9oYXNoIH0gKSB9XHJcblx0XHRcdC8+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG5cdC8qIGVzbGludC1lbmFibGUganN4LWExMXkvbm8tb25jaGFuZ2UgKi9cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlbGVjdCggd2l0aFJlcXVlc3RGaWVsZHMgKSggUmVkaXJlY3RUb1BhZ2VSZW5kZXIgKTtcclxuXHJcbiJdLCJuYW1lcyI6WyJKZXRGQkFjdGlvbnMiLCJUb29scyIsImFkZEFjdGlvbiIsImdldEZvcm1GaWVsZHNCbG9ja3MiLCJKZXRGQkNvbXBvbmVudHMiLCJGaWVsZFdpdGhQcmVzZXQiLCJEeW5hbWljUHJlc2V0Iiwid3AiLCJjb21wb25lbnRzIiwiVGV4dENvbnRyb2wiLCJUb2dnbGVDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIkJhc2VDb250cm9sIiwiQ2hlY2tib3hDb250cm9sIiwiX18iLCJpMThuIiwiZWxlbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSmV0RkJIb29rcyIsIndpdGhSZXF1ZXN0RmllbGRzIiwid2l0aFNlbGVjdCIsImRhdGEiLCJhcHBseUZpbHRlcnMiLCJob29rcyIsIlJlZGlyZWN0VG9QYWdlUmVuZGVyIiwicHJvcHMiLCJzb3VyY2UiLCJsYWJlbCIsInNldHRpbmdzIiwib25DaGFuZ2VTZXR0aW5nIiwib25DaGFuZ2VTZXR0aW5nT2JqIiwicmVxdWVzdEZpZWxkcyIsInJlZGlyZWN0X3R5cGVzIiwidHlwZVBhZ2VzIiwic2V0VHlwZVBhZ2VzIiwiZmllbGRzIiwic2V0RmllbGRzIiwiaGFzSW5zZXJ0ZWQiLCJmaW5kSW5kZXgiLCJmaWVsZCIsInZhbHVlIiwicHJldiIsImZpbHRlciIsInR5cGUiLCJmaWx0ZXJUeXBlcyIsImxlbmd0aCIsImlzQ2hlY2tlZCIsIm5hbWUiLCJhcmdzX2ZpZWxkcyIsIkFycmF5IiwiZnJvbSIsInJlZGlyZWN0X2FyZ3MiLCJCb29sZWFuIiwiaW5jbHVkZXMiLCJvbkNoYW5nZVJlZGlyZWN0QXJncyIsImZpZWxkX25hbWUiLCJmaWVsZF9pZCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwicmVkaXJlY3RfdHlwZSIsInJlZGlyZWN0X3BhZ2UiLCJwYWdlcyIsImFjdGlvbkNsaWNrIiwib25SZXF1ZXN0Q2xvc2UiLCJyZWRpcmVjdF91cmwiLCJtYXAiLCJpbmRleCIsIm5ld1ZhbCIsInJlZGlyZWN0X2hhc2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./editor/form-actions/redirect.to.page/render.js\n");

/***/ })

}]);