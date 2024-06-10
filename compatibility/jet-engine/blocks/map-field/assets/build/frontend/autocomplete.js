/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/autocomplete/DropdownList.js":
/*!***********************************************!*\
  !*** ./frontend/autocomplete/DropdownList.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  ReactiveVar
} = JetFormBuilderAbstract;

/**
 * @param listNode {Element}
 */
function DropdownList(listNode) {
  this.listNode = listNode;
  this.selected = new ReactiveVar();
  this.selected.make();
  this.initEventListeners();
}
DropdownList.prototype.createItem = function (item) {
  const li = document.createElement('li');
  li.textContent = item.label;
  li.tabIndex = 0; // Make the li element focusable
  return li;
};
DropdownList.prototype.setItems = function (items) {
  this.listNode.innerHTML = '';
  const liElements = items.map(this.createItem.bind(this));
  this.listNode.append(...liElements);
  this.listNode.classList.toggle('show', Boolean(liElements.length));
};
DropdownList.prototype.onSelect = function () {
  const selectedItems = this.listNode.querySelectorAll('.selected');
  selectedItems.forEach(function (selectedItem) {
    selectedItem.classList.remove('selected');
  });
  this.selected.current.classList.add('selected');
};
DropdownList.prototype.initEventListeners = function () {
  this.listNode.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
      this.selected.current = event.target;
    }
  });
  this.listNode.addEventListener('keydown', event => {
    const focusedElement = document.activeElement;
    if (focusedElement.tagName === 'LI' && focusedElement.parentNode === this.listNode) {
      switch (event.key) {
        case 'ArrowDown':
          this.focusNextItem(focusedElement);
          event.preventDefault();
          break;
        case 'ArrowUp':
          this.focusPreviousItem(focusedElement);
          event.preventDefault();
          break;
        case 'Enter':
          this.selected.current = focusedElement;
          event.preventDefault();
          break;
      }
    }
  });
  this.selected.watch(this.onSelect.bind(this));
};
DropdownList.prototype.focusNextItem = function (current) {
  const next = current.nextElementSibling;
  if (next) {
    next.focus();
  }
};
DropdownList.prototype.focusPreviousItem = function (current) {
  const prev = current.previousElementSibling;
  if (prev) {
    prev.focus();
  } else {
    this.focusTopOutside();
  }
};
DropdownList.prototype.focusTopOutside = function () {};
DropdownList.prototype.focusFirstItem = function () {
  const firstItem = this.listNode.querySelector('li');
  if (firstItem) {
    firstItem.focus();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownList);

/***/ }),

/***/ "./frontend/autocomplete/SearchAddressBox.js":
/*!***************************************************!*\
  !*** ./frontend/autocomplete/SearchAddressBox.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownList */ "./frontend/autocomplete/DropdownList.js");
/* harmony import */ var _SearchBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBox */ "./frontend/autocomplete/SearchBox.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);





/**
 * @param searchInput {SearchInput}
 * @param dropDown {DropdownList}
 */
function SearchAddressBox(searchInput, dropDown) {
  _SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"].call(this, searchInput, dropDown);
  this.getDropDown().selected.watch(() => {
    const selectedNode = this.getDropDown().selected.current;
    if (selectedNode.dataset.lat && selectedNode.dataset.lng) {
      this.getMapInput().callable.setMarker({
        lat: selectedNode.dataset.lat,
        lng: selectedNode.dataset.lng
      });
    } else {
      this.geocodeSearch();
    }
  });
  this.getSearchInput().loading.watch(() => {
    this.getLoaderNode().classList.toggle('show', this.getSearchInput().loading.current);
  });
  this.getSearchInput().response.watch(() => {
    const {
      current
    } = this.getSearchInput().response;
    const items = current.success ? current.response?.data : [{
      label: current.response.html
    }];
    this.getDropDown().setItems(items);
  });
  this.getDropDown().createItem = item => {
    /**
     * @type {Element}
     */
    const element = _DropdownList__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.createItem.call(this.dropDown, item);
    element.classList.add('jet-fb-map-field__search-item');
    if ('label' in item) {
      return element;
    }
    element.textContent = item.address;
    if (item?.lat && item?.lng) {
      element.dataset.lat = item.lat;
      element.dataset.lng = item.lng;
    }
    return element;
  };
}
SearchAddressBox.prototype = Object.create(_SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
SearchAddressBox.prototype.setLoaderNode = function (node) {
  this.loader = node;
};
SearchAddressBox.prototype.getLoaderNode = function () {
  return this.loader;
};
SearchAddressBox.prototype.setMapInput = function (input) {
  this.input = input;
};

/**
 * @returns {MapFieldData}
 */
SearchAddressBox.prototype.getMapInput = function () {
  return this.input;
};
SearchAddressBox.prototype.geocodeSearch = function () {
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)(JetMapFieldsSettings.apiLocation, {
    address: this.getSearchInput().search.current
  });
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({
    path
  }).then(response => {
    if (response.success) {
      this.getMapInput().callable.setMarker(response.data);
    } else {
      window.alert(response.html);
    }
  }).catch(function (e) {
    console.error(e);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchAddressBox);

/***/ }),

/***/ "./frontend/autocomplete/SearchBox.js":
/*!********************************************!*\
  !*** ./frontend/autocomplete/SearchBox.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput */ "./frontend/autocomplete/SearchInput.js");
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownList */ "./frontend/autocomplete/DropdownList.js");



/**
 * @param searchInput {SearchInput}
 * @param dropDown {DropdownList}
 */
function SearchBox(searchInput, dropDown) {
  this.searchInput = searchInput;
  this.dropDown = dropDown;
  this.getDropDown().selected.signals = [];
  this.getDropDown().selected.watch(() => {
    this.searchInput.searchNode.value = this.getDropDown().selected.current.textContent;
    this.dropDown.setItems([]);
  });
  this.getDropDown().focusTopOutside = () => {
    this.searchInput.focus();
  };
  this.getSearchInput().searchNode.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
      this.dropDown.focusFirstItem();
      event.preventDefault();
    }
  });
  this.getSearchInput().search.watch(() => {
    if (2 > this.searchInput.search.current?.length) {
      this.dropDown.setItems([]);
    }
  });
}

/**
 * @returns {DropdownList}
 */
SearchBox.prototype.getDropDown = function () {
  return this.dropDown;
};

/**
 * @returns {SearchInput}
 */
SearchBox.prototype.getSearchInput = function () {
  return this.searchInput;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);

/***/ }),

/***/ "./frontend/autocomplete/SearchInput.js":
/*!**********************************************!*\
  !*** ./frontend/autocomplete/SearchInput.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_1__);


const {
  ReactiveVar,
  LoadingReactiveVar
} = JetFormBuilderAbstract;
function SearchInput(searchNode) {
  this.searchNode = searchNode;
  this.controller = null;
  this.search = new ReactiveVar('');
  this.search.make();
  this.search.watch(this.onChangeSearch.bind(this));
  this.response = new ReactiveVar(false);
  this.response.make();
  this.loading = new LoadingReactiveVar();
  this.loading.make();
  this.initEventListeners();
}
SearchInput.prototype.initEventListeners = function () {
  this.searchNode.addEventListener('input', event => {
    this.search.current = event.target.value;
  });
};
SearchInput.prototype.onChangeSearch = function () {
  this.abort();
  if (2 > this.search.current?.length) {
    return;
  }
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_1__.addQueryArgs)(JetMapFieldsSettings.apiAutocomplete, {
    query: this.search.current
  });
  this.loading.start();
  _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path,
    signal: this.controller.signal
  }).then(response => {
    this.response.current = {
      success: !!response.success,
      response
    };
  }).catch(error => {
    this.response.current = {
      success: false,
      response: error
    };
  }).finally(() => {
    this.loading.end();
  });
};
SearchInput.prototype.abort = function () {
  this.controller?.abort?.();
  this.controller = new AbortController();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchInput);

/***/ }),

/***/ "./frontend/autocomplete/handleMapFieldWithAutocomplete.js":
/*!*****************************************************************!*\
  !*** ./frontend/autocomplete/handleMapFieldWithAutocomplete.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput */ "./frontend/autocomplete/SearchInput.js");
/* harmony import */ var _SearchAddressBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchAddressBox */ "./frontend/autocomplete/SearchAddressBox.js");
/* harmony import */ var _DropdownList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DropdownList */ "./frontend/autocomplete/DropdownList.js");




/**
 * @param input {InputData}
 */
function handleMapFieldWithAutocomplete(input) {
  if ('map' !== input.inputType || !input.nodes?.[0]?.parentElement?.querySelector?.('.jet-fb-map-field__search')) {
    return;
  }
  const search = input.nodes[0].parentElement.querySelector('.jet-fb-map-field__search');
  const dropDown = new _DropdownList__WEBPACK_IMPORTED_MODULE_2__["default"](search.querySelector('.jet-fb-map-field__search-list'));
  const searchInput = new _SearchInput__WEBPACK_IMPORTED_MODULE_0__["default"](search.querySelector('[type="text"]'));
  const box = new _SearchAddressBox__WEBPACK_IMPORTED_MODULE_1__["default"](searchInput, dropDown);
  box.setLoaderNode(search.querySelector('.jet-fb-map-field__search-loader'));
  box.setMapInput(input);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleMapFieldWithAutocomplete);

/***/ }),

/***/ "./frontend/autocomplete/index.pcss":
/*!******************************************!*\
  !*** ./frontend/autocomplete/index.pcss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

module.exports = window["wp"]["url"];

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************************!*\
  !*** ./frontend/autocomplete/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.pcss */ "./frontend/autocomplete/index.pcss");
/* harmony import */ var _handleMapFieldWithAutocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleMapFieldWithAutocomplete */ "./frontend/autocomplete/handleMapFieldWithAutocomplete.js");


const {
  addAction
} = JetPlugins.hooks;
addAction('jet.fb.input.makeReactive', 'jet-form-builder/map-field-autocomplete', _handleMapFieldWithAutocomplete__WEBPACK_IMPORTED_MODULE_1__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYXV0b2NvbXBsZXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBR0E7QUFLQTtBQUlBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7O0FDdENBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL2F1dG9jb21wbGV0ZS9Ecm9wZG93bkxpc3QuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9hdXRvY29tcGxldGUvU2VhcmNoQWRkcmVzc0JveC5qcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL2F1dG9jb21wbGV0ZS9TZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9hdXRvY29tcGxldGUvU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9hdXRvY29tcGxldGUvaGFuZGxlTWFwRmllbGRXaXRoQXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkLy4vZnJvbnRlbmQvYXV0b2NvbXBsZXRlL2luZGV4LnBjc3MiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJhcGlGZXRjaFwiXSIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInVybFwiXSIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkLy4vZnJvbnRlbmQvYXV0b2NvbXBsZXRlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgUmVhY3RpdmVWYXIgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG4vKipcclxuICogQHBhcmFtIGxpc3ROb2RlIHtFbGVtZW50fVxyXG4gKi9cclxuZnVuY3Rpb24gRHJvcGRvd25MaXN0KCBsaXN0Tm9kZSApIHtcclxuXHR0aGlzLmxpc3ROb2RlID0gbGlzdE5vZGU7XHJcblx0dGhpcy5zZWxlY3RlZCA9IG5ldyBSZWFjdGl2ZVZhcigpO1xyXG5cdHRoaXMuc2VsZWN0ZWQubWFrZSgpO1xyXG5cclxuXHR0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xyXG59XHJcblxyXG5Ecm9wZG93bkxpc3QucHJvdG90eXBlLmNyZWF0ZUl0ZW0gPSBmdW5jdGlvbiAoIGl0ZW0gKSB7XHJcblx0Y29uc3QgbGkgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGknICk7XHJcblx0bGkudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xyXG5cdGxpLnRhYkluZGV4ICAgID0gMDsgLy8gTWFrZSB0aGUgbGkgZWxlbWVudCBmb2N1c2FibGVcclxuXHRyZXR1cm4gbGk7XHJcbn07XHJcblxyXG5Ecm9wZG93bkxpc3QucHJvdG90eXBlLnNldEl0ZW1zID0gZnVuY3Rpb24gKCBpdGVtcyApIHtcclxuXHR0aGlzLmxpc3ROb2RlLmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHRjb25zdCBsaUVsZW1lbnRzID0gaXRlbXMubWFwKCB0aGlzLmNyZWF0ZUl0ZW0uYmluZCggdGhpcyApICk7XHJcblxyXG5cdHRoaXMubGlzdE5vZGUuYXBwZW5kKCAuLi5saUVsZW1lbnRzICk7XHJcblx0dGhpcy5saXN0Tm9kZS5jbGFzc0xpc3QudG9nZ2xlKCAnc2hvdycsIEJvb2xlYW4oIGxpRWxlbWVudHMubGVuZ3RoICkgKTtcclxufTtcclxuXHJcbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUub25TZWxlY3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMubGlzdE5vZGUucXVlcnlTZWxlY3RvckFsbCggJy5zZWxlY3RlZCcgKTtcclxuXHRzZWxlY3RlZEl0ZW1zLmZvckVhY2goIGZ1bmN0aW9uICggc2VsZWN0ZWRJdGVtICkge1xyXG5cdFx0c2VsZWN0ZWRJdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdzZWxlY3RlZCcgKTtcclxuXHR9ICk7XHJcblxyXG5cdHRoaXMuc2VsZWN0ZWQuY3VycmVudC5jbGFzc0xpc3QuYWRkKCAnc2VsZWN0ZWQnICk7XHJcbn07XHJcblxyXG5Ecm9wZG93bkxpc3QucHJvdG90eXBlLmluaXRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0dGhpcy5saXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCAnY2xpY2snLCAoIGV2ZW50ICkgPT4ge1xyXG5cdFx0aWYgKCBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJyApIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZC5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0dGhpcy5saXN0Tm9kZS5hZGRFdmVudExpc3RlbmVyKCAna2V5ZG93bicsICggZXZlbnQgKSA9PiB7XHJcblx0XHRjb25zdCBmb2N1c2VkRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XHJcblx0XHRpZiAoIGZvY3VzZWRFbGVtZW50LnRhZ05hbWUgPT09ICdMSScgJiZcclxuXHRcdFx0Zm9jdXNlZEVsZW1lbnQucGFyZW50Tm9kZSA9PT0gdGhpcy5saXN0Tm9kZVxyXG5cdFx0KSB7XHJcblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleSApIHtcclxuXHRcdFx0XHRjYXNlICdBcnJvd0Rvd24nOlxyXG5cdFx0XHRcdFx0dGhpcy5mb2N1c05leHRJdGVtKCBmb2N1c2VkRWxlbWVudCApO1xyXG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgJ0Fycm93VXAnOlxyXG5cdFx0XHRcdFx0dGhpcy5mb2N1c1ByZXZpb3VzSXRlbSggZm9jdXNlZEVsZW1lbnQgKTtcclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdFbnRlcic6XHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkLmN1cnJlbnQgPSBmb2N1c2VkRWxlbWVudDtcclxuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0dGhpcy5zZWxlY3RlZC53YXRjaCggdGhpcy5vblNlbGVjdC5iaW5kKCB0aGlzICkgKTtcclxufTtcclxuXHJcbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUuZm9jdXNOZXh0SXRlbSA9IGZ1bmN0aW9uICggY3VycmVudCApIHtcclxuXHRjb25zdCBuZXh0ID0gY3VycmVudC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcblx0aWYgKCBuZXh0ICkge1xyXG5cdFx0bmV4dC5mb2N1cygpO1xyXG5cdH1cclxufTtcclxuXHJcbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUuZm9jdXNQcmV2aW91c0l0ZW0gPSBmdW5jdGlvbiAoIGN1cnJlbnQgKSB7XHJcblx0Y29uc3QgcHJldiA9IGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZztcclxuXHRpZiAoIHByZXYgKSB7XHJcblx0XHRwcmV2LmZvY3VzKCk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0dGhpcy5mb2N1c1RvcE91dHNpZGUoKTtcclxuXHR9XHJcbn07XHJcbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUuZm9jdXNUb3BPdXRzaWRlICAgPSBmdW5jdGlvbiAoKSB7XHJcbn07XHJcblxyXG5Ecm9wZG93bkxpc3QucHJvdG90eXBlLmZvY3VzRmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGZpcnN0SXRlbSA9IHRoaXMubGlzdE5vZGUucXVlcnlTZWxlY3RvciggJ2xpJyApO1xyXG5cdGlmICggZmlyc3RJdGVtICkge1xyXG5cdFx0Zmlyc3RJdGVtLmZvY3VzKCk7XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRHJvcGRvd25MaXN0OyIsImltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSAnLi9Ecm9wZG93bkxpc3QnO1xyXG5pbXBvcnQgU2VhcmNoQm94IGZyb20gJy4vU2VhcmNoQm94JztcclxuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcclxuaW1wb3J0IHsgYWRkUXVlcnlBcmdzIH0gZnJvbSAnQHdvcmRwcmVzcy91cmwnO1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSBzZWFyY2hJbnB1dCB7U2VhcmNoSW5wdXR9XHJcbiAqIEBwYXJhbSBkcm9wRG93biB7RHJvcGRvd25MaXN0fVxyXG4gKi9cclxuZnVuY3Rpb24gU2VhcmNoQWRkcmVzc0JveCggc2VhcmNoSW5wdXQsIGRyb3BEb3duICkge1xyXG5cdFNlYXJjaEJveC5jYWxsKCB0aGlzLCBzZWFyY2hJbnB1dCwgZHJvcERvd24gKTtcclxuXHJcblx0dGhpcy5nZXREcm9wRG93bigpLnNlbGVjdGVkLndhdGNoKCAoKSA9PiB7XHJcblx0XHRjb25zdCBzZWxlY3RlZE5vZGUgPSB0aGlzLmdldERyb3BEb3duKCkuc2VsZWN0ZWQuY3VycmVudDtcclxuXHJcblx0XHRpZiAoIHNlbGVjdGVkTm9kZS5kYXRhc2V0LmxhdCAmJiBzZWxlY3RlZE5vZGUuZGF0YXNldC5sbmcgKSB7XHJcblx0XHRcdHRoaXMuZ2V0TWFwSW5wdXQoKS5jYWxsYWJsZS5zZXRNYXJrZXIoIHtcclxuXHRcdFx0XHRsYXQ6IHNlbGVjdGVkTm9kZS5kYXRhc2V0LmxhdCxcclxuXHRcdFx0XHRsbmc6IHNlbGVjdGVkTm9kZS5kYXRhc2V0LmxuZyxcclxuXHRcdFx0fSApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMuZ2VvY29kZVNlYXJjaCgpO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHJcblx0dGhpcy5nZXRTZWFyY2hJbnB1dCgpLmxvYWRpbmcud2F0Y2goICgpID0+IHtcclxuXHRcdHRoaXMuZ2V0TG9hZGVyTm9kZSgpLmNsYXNzTGlzdC50b2dnbGUoXHJcblx0XHRcdCdzaG93JyxcclxuXHRcdFx0dGhpcy5nZXRTZWFyY2hJbnB1dCgpLmxvYWRpbmcuY3VycmVudCxcclxuXHRcdCk7XHJcblx0fSApO1xyXG5cclxuXHR0aGlzLmdldFNlYXJjaElucHV0KCkucmVzcG9uc2Uud2F0Y2goICgpID0+IHtcclxuXHRcdGNvbnN0IHsgY3VycmVudCB9ID0gdGhpcy5nZXRTZWFyY2hJbnB1dCgpLnJlc3BvbnNlO1xyXG5cclxuXHRcdGNvbnN0IGl0ZW1zID0gY3VycmVudC5zdWNjZXNzXHJcblx0XHQgICAgICAgICAgICAgID8gY3VycmVudC5yZXNwb25zZT8uZGF0YVxyXG5cdFx0ICAgICAgICAgICAgICA6IFsgeyBsYWJlbDogY3VycmVudC5yZXNwb25zZS5odG1sIH0gXTtcclxuXHJcblx0XHR0aGlzLmdldERyb3BEb3duKCkuc2V0SXRlbXMoIGl0ZW1zICk7XHJcblx0fSApO1xyXG5cclxuXHR0aGlzLmdldERyb3BEb3duKCkuY3JlYXRlSXRlbSA9ICggaXRlbSApID0+IHtcclxuXHRcdC8qKlxyXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XHJcblx0XHQgKi9cclxuXHRcdGNvbnN0IGVsZW1lbnQgPSBEcm9wZG93bkxpc3QucHJvdG90eXBlLmNyZWF0ZUl0ZW0uY2FsbChcclxuXHRcdFx0dGhpcy5kcm9wRG93bixcclxuXHRcdFx0aXRlbSxcclxuXHRcdCk7XHJcblxyXG5cdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCAnamV0LWZiLW1hcC1maWVsZF9fc2VhcmNoLWl0ZW0nICk7XHJcblxyXG5cdFx0aWYgKCAnbGFiZWwnIGluIGl0ZW0gKSB7XHJcblx0XHRcdHJldHVybiBlbGVtZW50O1xyXG5cdFx0fVxyXG5cclxuXHRcdGVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtLmFkZHJlc3M7XHJcblxyXG5cdFx0aWYgKCBpdGVtPy5sYXQgJiYgaXRlbT8ubG5nICkge1xyXG5cdFx0XHRlbGVtZW50LmRhdGFzZXQubGF0ID0gaXRlbS5sYXQ7XHJcblx0XHRcdGVsZW1lbnQuZGF0YXNldC5sbmcgPSBpdGVtLmxuZztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZWxlbWVudDtcclxuXHR9O1xyXG59XHJcblxyXG5TZWFyY2hBZGRyZXNzQm94LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIFNlYXJjaEJveC5wcm90b3R5cGUgKTtcclxuXHJcblNlYXJjaEFkZHJlc3NCb3gucHJvdG90eXBlLnNldExvYWRlck5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0dGhpcy5sb2FkZXIgPSBub2RlO1xyXG59O1xyXG5cclxuU2VhcmNoQWRkcmVzc0JveC5wcm90b3R5cGUuZ2V0TG9hZGVyTm9kZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5sb2FkZXI7XHJcbn07XHJcblxyXG5TZWFyY2hBZGRyZXNzQm94LnByb3RvdHlwZS5zZXRNYXBJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XHJcblx0dGhpcy5pbnB1dCA9IGlucHV0O1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEByZXR1cm5zIHtNYXBGaWVsZERhdGF9XHJcbiAqL1xyXG5TZWFyY2hBZGRyZXNzQm94LnByb3RvdHlwZS5nZXRNYXBJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5pbnB1dDtcclxufTtcclxuXHJcblNlYXJjaEFkZHJlc3NCb3gucHJvdG90eXBlLmdlb2NvZGVTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgcGF0aCA9IGFkZFF1ZXJ5QXJncyhcclxuXHRcdEpldE1hcEZpZWxkc1NldHRpbmdzLmFwaUxvY2F0aW9uLFxyXG5cdFx0e1xyXG5cdFx0XHRhZGRyZXNzOiB0aGlzLmdldFNlYXJjaElucHV0KCkuc2VhcmNoLmN1cnJlbnQsXHJcblx0XHR9LFxyXG5cdCk7XHJcblxyXG5cdGFwaUZldGNoKCB7XHJcblx0XHRwYXRoLFxyXG5cdH0gKS50aGVuKCAoIHJlc3BvbnNlICkgPT4ge1xyXG5cdFx0aWYgKCByZXNwb25zZS5zdWNjZXNzICkge1xyXG5cdFx0XHR0aGlzLmdldE1hcElucHV0KCkuY2FsbGFibGUuc2V0TWFya2VyKCByZXNwb25zZS5kYXRhICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0d2luZG93LmFsZXJ0KCByZXNwb25zZS5odG1sICk7XHJcblx0XHR9XHJcblxyXG5cdH0gKS5jYXRjaCggZnVuY3Rpb24gKCBlICkge1xyXG5cdFx0Y29uc29sZS5lcnJvciggZSApO1xyXG5cdH0gKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFkZHJlc3NCb3g7IiwiaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vU2VhcmNoSW5wdXQnO1xyXG5pbXBvcnQgRHJvcGRvd25MaXN0IGZyb20gJy4vRHJvcGRvd25MaXN0JztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gc2VhcmNoSW5wdXQge1NlYXJjaElucHV0fVxyXG4gKiBAcGFyYW0gZHJvcERvd24ge0Ryb3Bkb3duTGlzdH1cclxuICovXHJcbmZ1bmN0aW9uIFNlYXJjaEJveCggc2VhcmNoSW5wdXQsIGRyb3BEb3duICkge1xyXG5cdHRoaXMuc2VhcmNoSW5wdXQgPSBzZWFyY2hJbnB1dDtcclxuXHR0aGlzLmRyb3BEb3duICAgID0gZHJvcERvd247XHJcblxyXG5cdHRoaXMuZ2V0RHJvcERvd24oKS5zZWxlY3RlZC5zaWduYWxzID0gW107XHJcblx0dGhpcy5nZXREcm9wRG93bigpLnNlbGVjdGVkLndhdGNoKCAoKSA9PiB7XHJcblx0XHR0aGlzLnNlYXJjaElucHV0LnNlYXJjaE5vZGUudmFsdWUgPSAoXHJcblx0XHRcdHRoaXMuZ2V0RHJvcERvd24oKS5zZWxlY3RlZC5jdXJyZW50LnRleHRDb250ZW50XHJcblx0XHQpO1xyXG5cdFx0dGhpcy5kcm9wRG93bi5zZXRJdGVtcyggW10gKTtcclxuXHR9ICk7XHJcblxyXG5cdHRoaXMuZ2V0RHJvcERvd24oKS5mb2N1c1RvcE91dHNpZGUgPSAoKSA9PiB7XHJcblx0XHR0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRTZWFyY2hJbnB1dCgpLnNlYXJjaE5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCAoIGV2ZW50ICkgPT4ge1xyXG5cdFx0aWYgKCBldmVudC5rZXkgPT09ICdBcnJvd0Rvd24nICkge1xyXG5cdFx0XHR0aGlzLmRyb3BEb3duLmZvY3VzRmlyc3RJdGVtKCk7XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9XHJcblx0fSApO1xyXG5cclxuXHR0aGlzLmdldFNlYXJjaElucHV0KCkuc2VhcmNoLndhdGNoKCAoKSA9PiB7XHJcblx0XHRpZiAoIDIgPiB0aGlzLnNlYXJjaElucHV0LnNlYXJjaC5jdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRcdHRoaXMuZHJvcERvd24uc2V0SXRlbXMoIFtdICk7XHJcblx0XHR9XHJcblx0fSApO1xyXG59XHJcblxyXG4vKipcclxuICogQHJldHVybnMge0Ryb3Bkb3duTGlzdH1cclxuICovXHJcblNlYXJjaEJveC5wcm90b3R5cGUuZ2V0RHJvcERvd24gPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMuZHJvcERvd247XHJcbn07XHJcblxyXG4vKipcclxuICogQHJldHVybnMge1NlYXJjaElucHV0fVxyXG4gKi9cclxuU2VhcmNoQm94LnByb3RvdHlwZS5nZXRTZWFyY2hJbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5zZWFyY2hJbnB1dDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveDsiLCJpbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xyXG5pbXBvcnQgeyBhZGRRdWVyeUFyZ3MgfSBmcm9tICdAd29yZHByZXNzL3VybCc7XHJcblxyXG5jb25zdCB7IFJlYWN0aXZlVmFyLCBMb2FkaW5nUmVhY3RpdmVWYXIgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hJbnB1dCggc2VhcmNoTm9kZSApIHtcclxuXHR0aGlzLnNlYXJjaE5vZGUgPSBzZWFyY2hOb2RlO1xyXG5cclxuXHR0aGlzLmNvbnRyb2xsZXIgPSBudWxsO1xyXG5cdHRoaXMuc2VhcmNoICAgICA9IG5ldyBSZWFjdGl2ZVZhciggJycgKTtcclxuXHR0aGlzLnNlYXJjaC5tYWtlKCk7XHJcblx0dGhpcy5zZWFyY2gud2F0Y2goIHRoaXMub25DaGFuZ2VTZWFyY2guYmluZCggdGhpcyApICk7XHJcblxyXG5cdHRoaXMucmVzcG9uc2UgPSBuZXcgUmVhY3RpdmVWYXIoIGZhbHNlICk7XHJcblx0dGhpcy5yZXNwb25zZS5tYWtlKCk7XHJcblxyXG5cdHRoaXMubG9hZGluZyA9IG5ldyBMb2FkaW5nUmVhY3RpdmVWYXIoKTtcclxuXHR0aGlzLmxvYWRpbmcubWFrZSgpO1xyXG5cclxuXHR0aGlzLmluaXRFdmVudExpc3RlbmVycygpO1xyXG59XHJcblxyXG5TZWFyY2hJbnB1dC5wcm90b3R5cGUuaW5pdEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xyXG5cdHRoaXMuc2VhcmNoTm9kZS5hZGRFdmVudExpc3RlbmVyKCAnaW5wdXQnLCAoIGV2ZW50ICkgPT4ge1xyXG5cdFx0dGhpcy5zZWFyY2guY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5TZWFyY2hJbnB1dC5wcm90b3R5cGUub25DaGFuZ2VTZWFyY2ggPSBmdW5jdGlvbiAoKSB7XHJcblx0dGhpcy5hYm9ydCgpO1xyXG5cclxuXHRpZiAoIDIgPiB0aGlzLnNlYXJjaC5jdXJyZW50Py5sZW5ndGggKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRjb25zdCBwYXRoID0gYWRkUXVlcnlBcmdzKFxyXG5cdFx0SmV0TWFwRmllbGRzU2V0dGluZ3MuYXBpQXV0b2NvbXBsZXRlLFxyXG5cdFx0e1xyXG5cdFx0XHRxdWVyeTogdGhpcy5zZWFyY2guY3VycmVudCxcclxuXHRcdH0sXHJcblx0KTtcclxuXHJcblx0dGhpcy5sb2FkaW5nLnN0YXJ0KCk7XHJcblxyXG5cdGFwaUZldGNoKCB7XHJcblx0XHRwYXRoLFxyXG5cdFx0c2lnbmFsOiB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLFxyXG5cdH0gKS50aGVuKCByZXNwb25zZSA9PiB7XHJcblx0XHR0aGlzLnJlc3BvbnNlLmN1cnJlbnQgPSB7XHJcblx0XHRcdHN1Y2Nlc3M6ICEhcmVzcG9uc2Uuc3VjY2VzcyxcclxuXHRcdFx0cmVzcG9uc2UsXHJcblx0XHR9O1xyXG5cdH0gKS5jYXRjaCggZXJyb3IgPT4ge1xyXG5cdFx0dGhpcy5yZXNwb25zZS5jdXJyZW50ID0ge1xyXG5cdFx0XHRzdWNjZXNzOiBmYWxzZSxcclxuXHRcdFx0cmVzcG9uc2U6IGVycm9yLFxyXG5cdFx0fTtcclxuXHR9ICkuZmluYWxseSggKCkgPT4ge1xyXG5cdFx0dGhpcy5sb2FkaW5nLmVuZCgpO1xyXG5cdH0gKTtcclxufTtcclxuXHJcblNlYXJjaElucHV0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcclxuXHR0aGlzLmNvbnRyb2xsZXI/LmFib3J0Py4oKTtcclxuXHJcblx0dGhpcy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7IiwiaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vU2VhcmNoSW5wdXQnO1xyXG5pbXBvcnQgU2VhcmNoQWRkcmVzc0JveCBmcm9tICcuL1NlYXJjaEFkZHJlc3NCb3gnO1xyXG5pbXBvcnQgRHJvcGRvd25MaXN0IGZyb20gJy4vRHJvcGRvd25MaXN0JztcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0gaW5wdXQge0lucHV0RGF0YX1cclxuICovXHJcbmZ1bmN0aW9uIGhhbmRsZU1hcEZpZWxkV2l0aEF1dG9jb21wbGV0ZSggaW5wdXQgKSB7XHJcblx0aWYgKCAnbWFwJyAhPT0gaW5wdXQuaW5wdXRUeXBlIHx8XHJcblx0XHQhaW5wdXQubm9kZXM/LlsgMCBdPy5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oXHJcblx0XHRcdCcuamV0LWZiLW1hcC1maWVsZF9fc2VhcmNoJyxcclxuXHRcdClcclxuXHQpIHtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdGNvbnN0IHNlYXJjaCAgICAgID0gaW5wdXQubm9kZXNbIDAgXS5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHQnLmpldC1mYi1tYXAtZmllbGRfX3NlYXJjaCcsXHJcblx0KTtcclxuXHRjb25zdCBkcm9wRG93biAgICA9IG5ldyBEcm9wZG93bkxpc3QoXHJcblx0XHRzZWFyY2gucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZmItbWFwLWZpZWxkX19zZWFyY2gtbGlzdCcsXHJcblx0XHQpLFxyXG5cdCk7XHJcblx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBuZXcgU2VhcmNoSW5wdXQoXHJcblx0XHRzZWFyY2gucXVlcnlTZWxlY3RvciggJ1t0eXBlPVwidGV4dFwiXScgKSxcclxuXHQpO1xyXG5cclxuXHRjb25zdCBib3ggPSBuZXcgU2VhcmNoQWRkcmVzc0JveCggc2VhcmNoSW5wdXQsIGRyb3BEb3duICk7XHJcblx0Ym94LnNldExvYWRlck5vZGUoXHJcblx0XHRzZWFyY2gucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0Jy5qZXQtZmItbWFwLWZpZWxkX19zZWFyY2gtbG9hZGVyJyxcclxuXHRcdCksXHJcblx0KTtcclxuXHRib3guc2V0TWFwSW5wdXQoIGlucHV0ICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVNYXBGaWVsZFdpdGhBdXRvY29tcGxldGU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3dbXCJ3cFwiXVtcImFwaUZldGNoXCJdOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJ1cmxcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9pbmRleC5wY3NzJztcclxuaW1wb3J0IGhhbmRsZU1hcEZpZWxkV2l0aEF1dG9jb21wbGV0ZSBmcm9tICcuL2hhbmRsZU1hcEZpZWxkV2l0aEF1dG9jb21wbGV0ZSc7XHJcblxyXG5jb25zdCB7IGFkZEFjdGlvbiB9ID0gSmV0UGx1Z2lucy5ob29rcztcclxuXHJcbmFkZEFjdGlvbihcclxuXHQnamV0LmZiLmlucHV0Lm1ha2VSZWFjdGl2ZScsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWFwLWZpZWxkLWF1dG9jb21wbGV0ZScsXHJcblx0aGFuZGxlTWFwRmllbGRXaXRoQXV0b2NvbXBsZXRlLFxyXG4pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==