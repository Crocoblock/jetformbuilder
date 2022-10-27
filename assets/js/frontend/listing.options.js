/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/listing.options/main.js":
/*!******************************************!*\
  !*** ./frontend/listing.options/main.js ***!
  \******************************************/
/***/ (() => {

eval("var _window$JetFormBuilde;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar addAction = wp.hooks.addAction;\n/**\r\n * @param input {InputData}\r\n */\n\nfunction isSupported(input) {\n  var _iterator = _createForOfIteratorHelper(input.nodes),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var node = _step.value;\n\n      if (['radio', 'checkbox'].includes(node === null || node === void 0 ? void 0 : node.type)) {\n        return true;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return false;\n}\n\nfunction ListingTemplateClick(_ref) {\n  var pointerId = _ref.pointerId,\n      target = _ref.target;\n\n  // prevent recursive call by .click()\n  if (-1 === pointerId) {\n    return;\n  }\n\n  if (!target.classList.contains('jet-form-builder__field-template')) {\n    target = target.closest('.jet-form-builder__field-template');\n  } // click on <label> programmatically\n  // it has <input> inside\n\n\n  target.nextElementSibling.click();\n}\n/**\r\n * @param input {InputData}\r\n */\n\n\nfunction ListingAddTemplateWatcher(input) {\n  input.watch(function () {\n    var _input$nodes = _slicedToArray(input.nodes, 1),\n        node = _input$nodes[0];\n\n    var row = node.closest('.jet-form-builder-row');\n\n    var _iterator2 = _createForOfIteratorHelper(row.querySelectorAll('input.checkradio-field')),\n        _step2;\n\n    try {\n      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n        var _node = _step2.value;\n\n        var currentTemp = _node.closest('.jet-form-builder__field-wrap').querySelector('.jet-form-builder__field-template');\n\n        currentTemp.classList.toggle('jet-form-builder__field-template--checked', _node.checked);\n      }\n    } catch (err) {\n      _iterator2.e(err);\n    } finally {\n      _iterator2.f();\n    }\n  });\n}\n\naddAction('jet.fb.input.makeReactive', 'jet-form-builder/listing-options',\n/**\r\n * @param input {InputData}\r\n */\nfunction (input) {\n  if (!isSupported(input)) {\n    return;\n  }\n\n  var template = null;\n\n  var _iterator3 = _createForOfIteratorHelper(input.nodes),\n      _step3;\n\n  try {\n    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n      var node = _step3.value;\n\n      /**\r\n       * @type {Element}\r\n       */\n      template = node.closest('.jet-form-builder__field-wrap').querySelector('.jet-form-builder__field-template');\n\n      if (!template) {\n        continue;\n      }\n\n      template.addEventListener('click', ListingTemplateClick);\n    }\n  } catch (err) {\n    _iterator3.e(err);\n  } finally {\n    _iterator3.f();\n  }\n\n  if (!template) {\n    return;\n  }\n\n  ListingAddTemplateWatcher(input);\n});\nwindow.JetFormBuilderFunctions = _objectSpread(_objectSpread({}, (_window$JetFormBuilde = window.JetFormBuilderFunctions) !== null && _window$JetFormBuilde !== void 0 ? _window$JetFormBuilde : {}), {}, {\n  ListingAddTemplateWatcher: ListingAddTemplateWatcher,\n  ListingTemplateClick: ListingTemplateClick\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcm9udGVuZC9saXN0aW5nLm9wdGlvbnMvbWFpbi5qcy5qcyIsIm5hbWVzIjpbImFkZEFjdGlvbiIsIndwIiwiaG9va3MiLCJpc1N1cHBvcnRlZCIsImlucHV0Iiwibm9kZXMiLCJub2RlIiwiaW5jbHVkZXMiLCJ0eXBlIiwiTGlzdGluZ1RlbXBsYXRlQ2xpY2siLCJwb2ludGVySWQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImNsb3Nlc3QiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbGljayIsIkxpc3RpbmdBZGRUZW1wbGF0ZVdhdGNoZXIiLCJ3YXRjaCIsInJvdyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjdXJyZW50VGVtcCIsInF1ZXJ5U2VsZWN0b3IiLCJ0b2dnbGUiLCJjaGVja2VkIiwidGVtcGxhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwid2luZG93IiwiSmV0Rm9ybUJ1aWxkZXJGdW5jdGlvbnMiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Zyb250ZW5kL2xpc3Rpbmcub3B0aW9ucy9tYWluLmpzP2E3NTYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIGFkZEFjdGlvbixcclxuICAgICAgfSA9IHdwLmhvb2tzO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gaXNTdXBwb3J0ZWQoIGlucHV0ICkge1xyXG5cdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XHJcblx0XHRpZiAoIFsgJ3JhZGlvJywgJ2NoZWNrYm94JyBdLmluY2x1ZGVzKCBub2RlPy50eXBlICkgKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBMaXN0aW5nVGVtcGxhdGVDbGljayggeyBwb2ludGVySWQsIHRhcmdldCB9ICkge1xyXG5cdC8vIHByZXZlbnQgcmVjdXJzaXZlIGNhbGwgYnkgLmNsaWNrKClcclxuXHRpZiAoIC0xID09PSBwb2ludGVySWQgKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRpZiAoICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFxyXG5cdFx0J2pldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXRlbXBsYXRlJyxcclxuXHQpICkge1xyXG5cdFx0dGFyZ2V0ID0gdGFyZ2V0LmNsb3Nlc3QoXHJcblx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdGVtcGxhdGUnLFxyXG5cdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIGNsaWNrIG9uIDxsYWJlbD4gcHJvZ3JhbW1hdGljYWxseVxyXG5cdC8vIGl0IGhhcyA8aW5wdXQ+IGluc2lkZVxyXG5cdHRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuY2xpY2soKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxyXG4gKi9cclxuZnVuY3Rpb24gTGlzdGluZ0FkZFRlbXBsYXRlV2F0Y2hlciggaW5wdXQgKSB7XHJcblx0aW5wdXQud2F0Y2goICgpID0+IHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gaW5wdXQubm9kZXM7XHJcblx0XHRjb25zdCByb3cgICAgICA9IG5vZGUuY2xvc2VzdCggJy5qZXQtZm9ybS1idWlsZGVyLXJvdycgKTtcclxuXHJcblx0XHRmb3IgKCBjb25zdCBub2RlIG9mIHJvdy5xdWVyeVNlbGVjdG9yQWxsKCAnaW5wdXQuY2hlY2tyYWRpby1maWVsZCcgKSApIHtcclxuXHRcdFx0Y29uc3QgY3VycmVudFRlbXAgPSBub2RlLmNsb3Nlc3QoXHJcblx0XHRcdFx0Jy5qZXQtZm9ybS1idWlsZGVyX19maWVsZC13cmFwJyxcclxuXHRcdFx0KS5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdGVtcGxhdGUnLFxyXG5cdFx0XHQpO1xyXG5cclxuXHRcdFx0Y3VycmVudFRlbXAuY2xhc3NMaXN0LnRvZ2dsZShcclxuXHRcdFx0XHQnamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtdGVtcGxhdGUtLWNoZWNrZWQnLFxyXG5cdFx0XHRcdG5vZGUuY2hlY2tlZCxcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHR9ICk7XHJcbn1cclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLmlucHV0Lm1ha2VSZWFjdGl2ZScsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbGlzdGluZy1vcHRpb25zJyxcclxuXHQvKipcclxuXHQgKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiAoIGlucHV0ICkge1xyXG5cdFx0aWYgKCAhaXNTdXBwb3J0ZWQoIGlucHV0ICkgKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgdGVtcGxhdGUgPSBudWxsO1xyXG5cclxuXHRcdGZvciAoIGNvbnN0IG5vZGUgb2YgaW5wdXQubm9kZXMgKSB7XHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBAdHlwZSB7RWxlbWVudH1cclxuXHRcdFx0ICovXHJcblx0XHRcdHRlbXBsYXRlID0gbm9kZS5jbG9zZXN0KFxyXG5cdFx0XHRcdCcuamV0LWZvcm0tYnVpbGRlcl9fZmllbGQtd3JhcCcsXHJcblx0XHRcdCkucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHQnLmpldC1mb3JtLWJ1aWxkZXJfX2ZpZWxkLXRlbXBsYXRlJyxcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdGlmICggIXRlbXBsYXRlICkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHR0ZW1wbGF0ZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCBMaXN0aW5nVGVtcGxhdGVDbGljayApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggIXRlbXBsYXRlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0TGlzdGluZ0FkZFRlbXBsYXRlV2F0Y2hlciggaW5wdXQgKTtcclxuXHR9LFxyXG4pO1xyXG5cclxud2luZG93LkpldEZvcm1CdWlsZGVyRnVuY3Rpb25zID0ge1xyXG5cdC4uLihcclxuXHRcdHdpbmRvdy5KZXRGb3JtQnVpbGRlckZ1bmN0aW9ucyA/PyB7fVxyXG5cdCksXHJcblx0TGlzdGluZ0FkZFRlbXBsYXRlV2F0Y2hlcixcclxuXHRMaXN0aW5nVGVtcGxhdGVDbGljayxcclxufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUNPQSxTQURQLEdBRVVDLEVBQUUsQ0FBQ0MsS0FGYixDQUNPRixTQURQO0FBSUE7QUFDQTtBQUNBOztBQUNBLFNBQVNHLFdBQVQsQ0FBc0JDLEtBQXRCLEVBQThCO0VBQUEsMkNBQ1RBLEtBQUssQ0FBQ0MsS0FERztFQUFBOztFQUFBO0lBQzdCLG9EQUFrQztNQUFBLElBQXRCQyxJQUFzQjs7TUFDakMsSUFBSyxDQUFFLE9BQUYsRUFBVyxVQUFYLEVBQXdCQyxRQUF4QixDQUFrQ0QsSUFBbEMsYUFBa0NBLElBQWxDLHVCQUFrQ0EsSUFBSSxDQUFFRSxJQUF4QyxDQUFMLEVBQXNEO1FBQ3JELE9BQU8sSUFBUDtNQUNBO0lBQ0Q7RUFMNEI7SUFBQTtFQUFBO0lBQUE7RUFBQTs7RUFPN0IsT0FBTyxLQUFQO0FBQ0E7O0FBRUQsU0FBU0Msb0JBQVQsT0FBdUQ7RUFBQSxJQUF0QkMsU0FBc0IsUUFBdEJBLFNBQXNCO0VBQUEsSUFBWEMsTUFBVyxRQUFYQSxNQUFXOztFQUN0RDtFQUNBLElBQUssQ0FBQyxDQUFELEtBQU9ELFNBQVosRUFBd0I7SUFDdkI7RUFDQTs7RUFFRCxJQUFLLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsUUFBakIsQ0FDTCxrQ0FESyxDQUFOLEVBRUk7SUFDSEYsTUFBTSxHQUFHQSxNQUFNLENBQUNHLE9BQVAsQ0FDUixtQ0FEUSxDQUFUO0VBR0EsQ0FacUQsQ0FjdEQ7RUFDQTs7O0VBQ0FILE1BQU0sQ0FBQ0ksa0JBQVAsQ0FBMEJDLEtBQTFCO0FBQ0E7QUFFRDtBQUNBO0FBQ0E7OztBQUNBLFNBQVNDLHlCQUFULENBQW9DYixLQUFwQyxFQUE0QztFQUMzQ0EsS0FBSyxDQUFDYyxLQUFOLENBQWEsWUFBTTtJQUNsQixrQ0FBaUJkLEtBQUssQ0FBQ0MsS0FBdkI7SUFBQSxJQUFRQyxJQUFSOztJQUNBLElBQU1hLEdBQUcsR0FBUWIsSUFBSSxDQUFDUSxPQUFMLENBQWMsdUJBQWQsQ0FBakI7O0lBRmtCLDRDQUlFSyxHQUFHLENBQUNDLGdCQUFKLENBQXNCLHdCQUF0QixDQUpGO0lBQUE7O0lBQUE7TUFJbEIsdURBQXVFO1FBQUEsSUFBM0RkLEtBQTJEOztRQUN0RSxJQUFNZSxXQUFXLEdBQUdmLEtBQUksQ0FBQ1EsT0FBTCxDQUNuQiwrQkFEbUIsRUFFbEJRLGFBRmtCLENBR25CLG1DQUhtQixDQUFwQjs7UUFNQUQsV0FBVyxDQUFDVCxTQUFaLENBQXNCVyxNQUF0QixDQUNDLDJDQURELEVBRUNqQixLQUFJLENBQUNrQixPQUZOO01BSUE7SUFmaUI7TUFBQTtJQUFBO01BQUE7SUFBQTtFQWdCbEIsQ0FoQkQ7QUFpQkE7O0FBRUR4QixTQUFTLENBQ1IsMkJBRFEsRUFFUixrQ0FGUTtBQUdSO0FBQ0Q7QUFDQTtBQUNDLFVBQVdJLEtBQVgsRUFBbUI7RUFDbEIsSUFBSyxDQUFDRCxXQUFXLENBQUVDLEtBQUYsQ0FBakIsRUFBNkI7SUFDNUI7RUFDQTs7RUFFRCxJQUFJcUIsUUFBUSxHQUFHLElBQWY7O0VBTGtCLDRDQU9FckIsS0FBSyxDQUFDQyxLQVBSO0VBQUE7O0VBQUE7SUFPbEIsdURBQWtDO01BQUEsSUFBdEJDLElBQXNCOztNQUNqQztBQUNIO0FBQ0E7TUFDR21CLFFBQVEsR0FBR25CLElBQUksQ0FBQ1EsT0FBTCxDQUNWLCtCQURVLEVBRVRRLGFBRlMsQ0FHVixtQ0FIVSxDQUFYOztNQU1BLElBQUssQ0FBQ0csUUFBTixFQUFpQjtRQUNoQjtNQUNBOztNQUVEQSxRQUFRLENBQUNDLGdCQUFULENBQTJCLE9BQTNCLEVBQW9DakIsb0JBQXBDO0lBQ0E7RUF0QmlCO0lBQUE7RUFBQTtJQUFBO0VBQUE7O0VBd0JsQixJQUFLLENBQUNnQixRQUFOLEVBQWlCO0lBQ2hCO0VBQ0E7O0VBRURSLHlCQUF5QixDQUFFYixLQUFGLENBQXpCO0FBQ0EsQ0FuQ08sQ0FBVDtBQXNDQXVCLE1BQU0sQ0FBQ0MsdUJBQVAsNERBRUVELE1BQU0sQ0FBQ0MsdUJBRlQseUVBRW9DLEVBRnBDO0VBSUNYLHlCQUF5QixFQUF6QkEseUJBSkQ7RUFLQ1Isb0JBQW9CLEVBQXBCQTtBQUxEIn0=\n//# sourceURL=webpack-internal:///./frontend/listing.options/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./frontend/listing.options/main.js"]();
/******/ 	
/******/ })()
;