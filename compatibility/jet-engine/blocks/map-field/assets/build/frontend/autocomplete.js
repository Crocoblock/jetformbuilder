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
};
DropdownList.prototype.showList = function () {
  if (!this.listNode.querySelector('li')) {
    return;
  }
  this.listNode.classList.add('show');
};
DropdownList.prototype.hideList = function () {
  this.listNode.classList.remove('show');
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
}
SearchAddressBox.prototype = Object.create(_SearchBox__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
SearchAddressBox.prototype.initHooks = function () {
  this.getDropDown().selected.watch(() => {
    const selectedNode = this.getDropDown().selected.current;
    if (selectedNode.dataset.lat && selectedNode.dataset.lng) {
      this.getMapInput().callable.setMarker({
        lat: selectedNode.dataset.lat,
        lng: selectedNode.dataset.lng
      });
    } else {
      this.geocodeSearch(selectedNode.textContent);
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
    this.getDropDown().showList();
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
  this.getMapInput().value.watch(() => {
    if (this.getMapInput().value.current) {
      return;
    }
    this.getSearchInput().search.current = '';
    this.getDropDown().setItems([]);
  });
};
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
SearchAddressBox.prototype.geocodeSearch = function (query) {
  query = query || this.getSearchInput().search.current;
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.addQueryArgs)(JetMapFieldsSettings.apiLocation, {
    address: query
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
    this.getDropDown().hideList();
  });
  this.getDropDown().focusTopOutside = () => {
    this.getSearchInput().searchNode.focus();
  };
  this.getSearchInput().searchNode.addEventListener('keydown', event => {
    if (event.key === 'ArrowDown') {
      this.dropDown.focusFirstItem();
      event.preventDefault();
    }
  });
  this.getSearchInput().searchNode.addEventListener('focus', event => {
    this.getDropDown().showList();
  });
  this.getSearchInput().searchNode.addEventListener('blur', event => {
    if (event.relatedTarget?.parentElement === this.getDropDown().listNode) {
      return;
    }
    this.getDropDown().hideList();
  });
  this.getDropDown().listNode.addEventListener('focusout', event => {
    if (
    // is it a search field?
    event.relatedTarget === this.getSearchInput().searchNode ||
    // is it one of the elements in the list?

    event.relatedTarget?.parentElement === this.getDropDown().listNode) {
      return;
    }
    this.getDropDown().hideList();
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
  if (this.searchNode.value !== this.search.current) {
    this.searchNode.value = this.search.current;
  }
  if (2 > this.search.current?.length) {
    this.loading.end();
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
    this.loading.end();
  }).catch(error => {
    if ('AbortError' === error.name) {
      return;
    }
    this.response.current = {
      success: false,
      response: error
    };
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
  box.initHooks();
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvYXV0b2NvbXBsZXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBR0E7QUFLQTtBQUlBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7QUN2Q0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL2F1dG9jb21wbGV0ZS9Ecm9wZG93bkxpc3QuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9hdXRvY29tcGxldGUvU2VhcmNoQWRkcmVzc0JveC5qcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL2F1dG9jb21wbGV0ZS9TZWFyY2hCb3guanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9hdXRvY29tcGxldGUvU2VhcmNoSW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9hdXRvY29tcGxldGUvaGFuZGxlTWFwRmllbGRXaXRoQXV0b2NvbXBsZXRlLmpzIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkLy4vZnJvbnRlbmQvYXV0b2NvbXBsZXRlL2luZGV4LnBjc3MiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvZXh0ZXJuYWwgd2luZG93IFtcIndwXCIsXCJhcGlGZXRjaFwiXSIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcInVybFwiXSIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkLy4vZnJvbnRlbmQvYXV0b2NvbXBsZXRlL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgUmVhY3RpdmVWYXIgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHBhcmFtIGxpc3ROb2RlIHtFbGVtZW50fVxuICovXG5mdW5jdGlvbiBEcm9wZG93bkxpc3QoIGxpc3ROb2RlICkge1xuXHR0aGlzLmxpc3ROb2RlID0gbGlzdE5vZGU7XG5cdHRoaXMuc2VsZWN0ZWQgPSBuZXcgUmVhY3RpdmVWYXIoKTtcblx0dGhpcy5zZWxlY3RlZC5tYWtlKCk7XG5cblx0dGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuRHJvcGRvd25MaXN0LnByb3RvdHlwZS5jcmVhdGVJdGVtID0gZnVuY3Rpb24gKCBpdGVtICkge1xuXHRjb25zdCBsaSAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdsaScgKTtcblx0bGkudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xuXHRsaS50YWJJbmRleCAgICA9IDA7IC8vIE1ha2UgdGhlIGxpIGVsZW1lbnQgZm9jdXNhYmxlXG5cdHJldHVybiBsaTtcbn07XG5cbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUuc2V0SXRlbXMgPSBmdW5jdGlvbiAoIGl0ZW1zICkge1xuXHR0aGlzLmxpc3ROb2RlLmlubmVySFRNTCA9ICcnO1xuXG5cdGNvbnN0IGxpRWxlbWVudHMgPSBpdGVtcy5tYXAoIHRoaXMuY3JlYXRlSXRlbS5iaW5kKCB0aGlzICkgKTtcblxuXHR0aGlzLmxpc3ROb2RlLmFwcGVuZCggLi4ubGlFbGVtZW50cyApO1xufTtcblxuRHJvcGRvd25MaXN0LnByb3RvdHlwZS5zaG93TGlzdCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKCAhdGhpcy5saXN0Tm9kZS5xdWVyeVNlbGVjdG9yKCAnbGknICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHRoaXMubGlzdE5vZGUuY2xhc3NMaXN0LmFkZCggJ3Nob3cnICk7XG59O1xuXG5Ecm9wZG93bkxpc3QucHJvdG90eXBlLmhpZGVMaXN0ID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmxpc3ROb2RlLmNsYXNzTGlzdC5yZW1vdmUoICdzaG93JyApO1xufTtcblxuRHJvcGRvd25MaXN0LnByb3RvdHlwZS5vblNlbGVjdCA9IGZ1bmN0aW9uICgpIHtcblx0Y29uc3Qgc2VsZWN0ZWRJdGVtcyA9IHRoaXMubGlzdE5vZGUucXVlcnlTZWxlY3RvckFsbCggJy5zZWxlY3RlZCcgKTtcblx0c2VsZWN0ZWRJdGVtcy5mb3JFYWNoKCBmdW5jdGlvbiAoIHNlbGVjdGVkSXRlbSApIHtcblx0XHRzZWxlY3RlZEl0ZW0uY2xhc3NMaXN0LnJlbW92ZSggJ3NlbGVjdGVkJyApO1xuXHR9ICk7XG5cblx0dGhpcy5zZWxlY3RlZC5jdXJyZW50LmNsYXNzTGlzdC5hZGQoICdzZWxlY3RlZCcgKTtcbn07XG5cbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUuaW5pdEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gKCkge1xuXG5cdHRoaXMubGlzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2NsaWNrJywgKCBldmVudCApID0+IHtcblx0XHRpZiAoIGV2ZW50LnRhcmdldC50YWdOYW1lID09PSAnTEknICkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZC5jdXJyZW50ID0gZXZlbnQudGFyZ2V0O1xuXHRcdH1cblx0fSApO1xuXG5cdHRoaXMubGlzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCAoIGV2ZW50ICkgPT4ge1xuXHRcdGNvbnN0IGZvY3VzZWRFbGVtZW50ID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0XHRpZiAoIGZvY3VzZWRFbGVtZW50LnRhZ05hbWUgPT09ICdMSScgJiZcblx0XHRcdGZvY3VzZWRFbGVtZW50LnBhcmVudE5vZGUgPT09IHRoaXMubGlzdE5vZGVcblx0XHQpIHtcblx0XHRcdHN3aXRjaCAoIGV2ZW50LmtleSApIHtcblx0XHRcdFx0Y2FzZSAnQXJyb3dEb3duJzpcblx0XHRcdFx0XHR0aGlzLmZvY3VzTmV4dEl0ZW0oIGZvY3VzZWRFbGVtZW50ICk7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAnQXJyb3dVcCc6XG5cdFx0XHRcdFx0dGhpcy5mb2N1c1ByZXZpb3VzSXRlbSggZm9jdXNlZEVsZW1lbnQgKTtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdFbnRlcic6XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZC5jdXJyZW50ID0gZm9jdXNlZEVsZW1lbnQ7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH0gKTtcblxuXHR0aGlzLnNlbGVjdGVkLndhdGNoKCB0aGlzLm9uU2VsZWN0LmJpbmQoIHRoaXMgKSApO1xufTtcblxuRHJvcGRvd25MaXN0LnByb3RvdHlwZS5mb2N1c05leHRJdGVtID0gZnVuY3Rpb24gKCBjdXJyZW50ICkge1xuXHRjb25zdCBuZXh0ID0gY3VycmVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG5cdGlmICggbmV4dCApIHtcblx0XHRuZXh0LmZvY3VzKCk7XG5cdH1cbn07XG5cbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUuZm9jdXNQcmV2aW91c0l0ZW0gPSBmdW5jdGlvbiAoIGN1cnJlbnQgKSB7XG5cdGNvbnN0IHByZXYgPSBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG5cdGlmICggcHJldiApIHtcblx0XHRwcmV2LmZvY3VzKCk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0dGhpcy5mb2N1c1RvcE91dHNpZGUoKTtcblx0fVxufTtcbkRyb3Bkb3duTGlzdC5wcm90b3R5cGUuZm9jdXNUb3BPdXRzaWRlICAgPSBmdW5jdGlvbiAoKSB7XG59O1xuXG5Ecm9wZG93bkxpc3QucHJvdG90eXBlLmZvY3VzRmlyc3RJdGVtID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLmxpc3ROb2RlLnF1ZXJ5U2VsZWN0b3IoICdsaScgKTtcblx0aWYgKCBmaXJzdEl0ZW0gKSB7XG5cdFx0Zmlyc3RJdGVtLmZvY3VzKCk7XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duTGlzdDtcbiIsImltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSAnLi9Ecm9wZG93bkxpc3QnO1xuaW1wb3J0IFNlYXJjaEJveCBmcm9tICcuL1NlYXJjaEJveCc7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xuaW1wb3J0IHsgYWRkUXVlcnlBcmdzIH0gZnJvbSAnQHdvcmRwcmVzcy91cmwnO1xuXG4vKipcbiAqIEBwYXJhbSBzZWFyY2hJbnB1dCB7U2VhcmNoSW5wdXR9XG4gKiBAcGFyYW0gZHJvcERvd24ge0Ryb3Bkb3duTGlzdH1cbiAqL1xuZnVuY3Rpb24gU2VhcmNoQWRkcmVzc0JveCggc2VhcmNoSW5wdXQsIGRyb3BEb3duICkge1xuXHRTZWFyY2hCb3guY2FsbCggdGhpcywgc2VhcmNoSW5wdXQsIGRyb3BEb3duICk7XG59XG5cblNlYXJjaEFkZHJlc3NCb3gucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggU2VhcmNoQm94LnByb3RvdHlwZSApO1xuXG5TZWFyY2hBZGRyZXNzQm94LnByb3RvdHlwZS5pbml0SG9va3MgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuZ2V0RHJvcERvd24oKS5zZWxlY3RlZC53YXRjaCggKCkgPT4ge1xuXHRcdGNvbnN0IHNlbGVjdGVkTm9kZSA9IHRoaXMuZ2V0RHJvcERvd24oKS5zZWxlY3RlZC5jdXJyZW50O1xuXG5cdFx0aWYgKCBzZWxlY3RlZE5vZGUuZGF0YXNldC5sYXQgJiYgc2VsZWN0ZWROb2RlLmRhdGFzZXQubG5nICkge1xuXHRcdFx0dGhpcy5nZXRNYXBJbnB1dCgpLmNhbGxhYmxlLnNldE1hcmtlcigge1xuXHRcdFx0XHRsYXQ6IHNlbGVjdGVkTm9kZS5kYXRhc2V0LmxhdCxcblx0XHRcdFx0bG5nOiBzZWxlY3RlZE5vZGUuZGF0YXNldC5sbmcsXG5cdFx0XHR9ICk7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5nZW9jb2RlU2VhcmNoKCBzZWxlY3RlZE5vZGUudGV4dENvbnRlbnQgKTtcblx0XHR9XG5cdH0gKTtcblxuXHR0aGlzLmdldFNlYXJjaElucHV0KCkubG9hZGluZy53YXRjaCggKCkgPT4ge1xuXHRcdHRoaXMuZ2V0TG9hZGVyTm9kZSgpLmNsYXNzTGlzdC50b2dnbGUoXG5cdFx0XHQnc2hvdycsXG5cdFx0XHR0aGlzLmdldFNlYXJjaElucHV0KCkubG9hZGluZy5jdXJyZW50LFxuXHRcdCk7XG5cdH0gKTtcblxuXHR0aGlzLmdldFNlYXJjaElucHV0KCkucmVzcG9uc2Uud2F0Y2goICgpID0+IHtcblx0XHRjb25zdCB7IGN1cnJlbnQgfSA9IHRoaXMuZ2V0U2VhcmNoSW5wdXQoKS5yZXNwb25zZTtcblxuXHRcdGNvbnN0IGl0ZW1zID0gY3VycmVudC5zdWNjZXNzXG5cdFx0ICAgICAgICAgICAgICA/IGN1cnJlbnQucmVzcG9uc2U/LmRhdGFcblx0XHQgICAgICAgICAgICAgIDogWyB7IGxhYmVsOiBjdXJyZW50LnJlc3BvbnNlLmh0bWwgfSBdO1xuXG5cdFx0dGhpcy5nZXREcm9wRG93bigpLnNldEl0ZW1zKCBpdGVtcyApO1xuXHRcdHRoaXMuZ2V0RHJvcERvd24oKS5zaG93TGlzdCgpO1xuXHR9ICk7XG5cblx0dGhpcy5nZXREcm9wRG93bigpLmNyZWF0ZUl0ZW0gPSAoIGl0ZW0gKSA9PiB7XG5cdFx0LyoqXG5cdFx0ICogQHR5cGUge0VsZW1lbnR9XG5cdFx0ICovXG5cdFx0Y29uc3QgZWxlbWVudCA9IERyb3Bkb3duTGlzdC5wcm90b3R5cGUuY3JlYXRlSXRlbS5jYWxsKFxuXHRcdFx0dGhpcy5kcm9wRG93bixcblx0XHRcdGl0ZW0sXG5cdFx0KTtcblxuXHRcdGVsZW1lbnQuY2xhc3NMaXN0LmFkZCggJ2pldC1mYi1tYXAtZmllbGRfX3NlYXJjaC1pdGVtJyApO1xuXG5cdFx0aWYgKCAnbGFiZWwnIGluIGl0ZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbWVudDtcblx0XHR9XG5cblx0XHRlbGVtZW50LnRleHRDb250ZW50ID0gaXRlbS5hZGRyZXNzO1xuXG5cdFx0aWYgKCBpdGVtPy5sYXQgJiYgaXRlbT8ubG5nICkge1xuXHRcdFx0ZWxlbWVudC5kYXRhc2V0LmxhdCA9IGl0ZW0ubGF0O1xuXHRcdFx0ZWxlbWVudC5kYXRhc2V0LmxuZyA9IGl0ZW0ubG5nO1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9O1xuXG5cdHRoaXMuZ2V0TWFwSW5wdXQoKS52YWx1ZS53YXRjaCggKCkgPT4ge1xuXHRcdGlmICggdGhpcy5nZXRNYXBJbnB1dCgpLnZhbHVlLmN1cnJlbnQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMuZ2V0U2VhcmNoSW5wdXQoKS5zZWFyY2guY3VycmVudCA9ICcnO1xuXHRcdHRoaXMuZ2V0RHJvcERvd24oKS5zZXRJdGVtcyggW10gKTtcblx0fSApO1xufVxuXG5TZWFyY2hBZGRyZXNzQm94LnByb3RvdHlwZS5zZXRMb2FkZXJOb2RlID0gZnVuY3Rpb24gKCBub2RlICkge1xuXHR0aGlzLmxvYWRlciA9IG5vZGU7XG59O1xuXG5TZWFyY2hBZGRyZXNzQm94LnByb3RvdHlwZS5nZXRMb2FkZXJOb2RlID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5sb2FkZXI7XG59O1xuXG5TZWFyY2hBZGRyZXNzQm94LnByb3RvdHlwZS5zZXRNYXBJbnB1dCA9IGZ1bmN0aW9uICggaW5wdXQgKSB7XG5cdHRoaXMuaW5wdXQgPSBpbnB1dDtcbn07XG5cbi8qKlxuICogQHJldHVybnMge01hcEZpZWxkRGF0YX1cbiAqL1xuU2VhcmNoQWRkcmVzc0JveC5wcm90b3R5cGUuZ2V0TWFwSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiB0aGlzLmlucHV0O1xufTtcblxuU2VhcmNoQWRkcmVzc0JveC5wcm90b3R5cGUuZ2VvY29kZVNlYXJjaCA9IGZ1bmN0aW9uICggcXVlcnkgKSB7XG5cblx0cXVlcnkgPSBxdWVyeSB8fCB0aGlzLmdldFNlYXJjaElucHV0KCkuc2VhcmNoLmN1cnJlbnQ7XG5cblx0Y29uc3QgcGF0aCA9IGFkZFF1ZXJ5QXJncyhcblx0XHRKZXRNYXBGaWVsZHNTZXR0aW5ncy5hcGlMb2NhdGlvbixcblx0XHR7XG5cdFx0XHRhZGRyZXNzOiBxdWVyeSxcblx0XHR9LFxuXHQpO1xuXG5cdGFwaUZldGNoKCB7XG5cdFx0cGF0aCxcblx0fSApLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XG5cdFx0aWYgKCByZXNwb25zZS5zdWNjZXNzICkge1xuXHRcdFx0dGhpcy5nZXRNYXBJbnB1dCgpLmNhbGxhYmxlLnNldE1hcmtlciggcmVzcG9uc2UuZGF0YSApO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHdpbmRvdy5hbGVydCggcmVzcG9uc2UuaHRtbCApO1xuXHRcdH1cblxuXHR9ICkuY2F0Y2goIGZ1bmN0aW9uICggZSApIHtcblx0XHRjb25zb2xlLmVycm9yKCBlICk7XG5cdH0gKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEFkZHJlc3NCb3g7XG4iLCJpbXBvcnQgU2VhcmNoSW5wdXQgZnJvbSAnLi9TZWFyY2hJbnB1dCc7XG5pbXBvcnQgRHJvcGRvd25MaXN0IGZyb20gJy4vRHJvcGRvd25MaXN0JztcblxuLyoqXG4gKiBAcGFyYW0gc2VhcmNoSW5wdXQge1NlYXJjaElucHV0fVxuICogQHBhcmFtIGRyb3BEb3duIHtEcm9wZG93bkxpc3R9XG4gKi9cbmZ1bmN0aW9uIFNlYXJjaEJveCggc2VhcmNoSW5wdXQsIGRyb3BEb3duICkge1xuXHR0aGlzLnNlYXJjaElucHV0ID0gc2VhcmNoSW5wdXQ7XG5cdHRoaXMuZHJvcERvd24gICAgPSBkcm9wRG93bjtcblxuXHR0aGlzLmdldERyb3BEb3duKCkuc2VsZWN0ZWQuc2lnbmFscyA9IFtdO1xuXHR0aGlzLmdldERyb3BEb3duKCkuc2VsZWN0ZWQud2F0Y2goICgpID0+IHtcblx0XHR0aGlzLnNlYXJjaElucHV0LnNlYXJjaE5vZGUudmFsdWUgPSAoXG5cdFx0XHR0aGlzLmdldERyb3BEb3duKCkuc2VsZWN0ZWQuY3VycmVudC50ZXh0Q29udGVudFxuXHRcdCk7XG5cdFx0dGhpcy5nZXREcm9wRG93bigpLmhpZGVMaXN0KCk7XG5cdH0gKTtcblxuXHR0aGlzLmdldERyb3BEb3duKCkuZm9jdXNUb3BPdXRzaWRlID0gKCkgPT4ge1xuXHRcdHRoaXMuZ2V0U2VhcmNoSW5wdXQoKS5zZWFyY2hOb2RlLmZvY3VzKCk7XG5cdH07XG5cblx0dGhpcy5nZXRTZWFyY2hJbnB1dCgpLnNlYXJjaE5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2tleWRvd24nLCAoIGV2ZW50ICkgPT4ge1xuXHRcdGlmICggZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyApIHtcblx0XHRcdHRoaXMuZHJvcERvd24uZm9jdXNGaXJzdEl0ZW0oKTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9ICk7XG5cblx0dGhpcy5nZXRTZWFyY2hJbnB1dCgpLnNlYXJjaE5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgKCBldmVudCApID0+IHtcblx0XHR0aGlzLmdldERyb3BEb3duKCkuc2hvd0xpc3QoKTtcblx0fSApO1xuXG5cdHRoaXMuZ2V0U2VhcmNoSW5wdXQoKS5zZWFyY2hOb2RlLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgKCBldmVudCApID0+IHtcblx0XHRpZiAoIGV2ZW50LnJlbGF0ZWRUYXJnZXQ/LnBhcmVudEVsZW1lbnQgPT09XG5cdFx0XHR0aGlzLmdldERyb3BEb3duKCkubGlzdE5vZGVcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5nZXREcm9wRG93bigpLmhpZGVMaXN0KCk7XG5cdH0gKTtcblxuXHR0aGlzLmdldERyb3BEb3duKCkubGlzdE5vZGUuYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3Vzb3V0JywgKCBldmVudCApID0+IHtcblx0XHRpZiAoXG5cdFx0XHQvLyBpcyBpdCBhIHNlYXJjaCBmaWVsZD9cblx0XHRcdGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IHRoaXMuZ2V0U2VhcmNoSW5wdXQoKS5zZWFyY2hOb2RlIHx8XG5cdFx0XHQvLyBpcyBpdCBvbmUgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBsaXN0P1xuXHRcdFx0KFxuXHRcdFx0XHRldmVudC5yZWxhdGVkVGFyZ2V0Py5wYXJlbnRFbGVtZW50ID09PVxuXHRcdFx0XHR0aGlzLmdldERyb3BEb3duKCkubGlzdE5vZGVcblx0XHRcdClcblx0XHQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5nZXREcm9wRG93bigpLmhpZGVMaXN0KCk7XG5cdH0gKTtcbn1cblxuLyoqXG4gKiBAcmV0dXJucyB7RHJvcGRvd25MaXN0fVxuICovXG5TZWFyY2hCb3gucHJvdG90eXBlLmdldERyb3BEb3duID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5kcm9wRG93bjtcbn07XG5cbi8qKlxuICogQHJldHVybnMge1NlYXJjaElucHV0fVxuICovXG5TZWFyY2hCb3gucHJvdG90eXBlLmdldFNlYXJjaElucHV0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gdGhpcy5zZWFyY2hJbnB1dDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEJveDsiLCJpbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xuaW1wb3J0IHsgYWRkUXVlcnlBcmdzIH0gZnJvbSAnQHdvcmRwcmVzcy91cmwnO1xuXG5jb25zdCB7IFJlYWN0aXZlVmFyLCBMb2FkaW5nUmVhY3RpdmVWYXIgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmZ1bmN0aW9uIFNlYXJjaElucHV0KCBzZWFyY2hOb2RlICkge1xuXHR0aGlzLnNlYXJjaE5vZGUgPSBzZWFyY2hOb2RlO1xuXG5cdHRoaXMuY29udHJvbGxlciA9IG51bGw7XG5cdHRoaXMuc2VhcmNoICAgICA9IG5ldyBSZWFjdGl2ZVZhciggJycgKTtcblx0dGhpcy5zZWFyY2gubWFrZSgpO1xuXHR0aGlzLnNlYXJjaC53YXRjaCggdGhpcy5vbkNoYW5nZVNlYXJjaC5iaW5kKCB0aGlzICkgKTtcblxuXHR0aGlzLnJlc3BvbnNlID0gbmV3IFJlYWN0aXZlVmFyKCBmYWxzZSApO1xuXHR0aGlzLnJlc3BvbnNlLm1ha2UoKTtcblxuXHR0aGlzLmxvYWRpbmcgPSBuZXcgTG9hZGluZ1JlYWN0aXZlVmFyKCk7XG5cdHRoaXMubG9hZGluZy5tYWtlKCk7XG5cblx0dGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKTtcbn1cblxuU2VhcmNoSW5wdXQucHJvdG90eXBlLmluaXRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5zZWFyY2hOb2RlLmFkZEV2ZW50TGlzdGVuZXIoICdpbnB1dCcsICggZXZlbnQgKSA9PiB7XG5cdFx0dGhpcy5zZWFyY2guY3VycmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblx0fSApO1xufTtcblxuU2VhcmNoSW5wdXQucHJvdG90eXBlLm9uQ2hhbmdlU2VhcmNoID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLmFib3J0KCk7XG5cblx0aWYgKCB0aGlzLnNlYXJjaE5vZGUudmFsdWUgIT09IHRoaXMuc2VhcmNoLmN1cnJlbnQgKSB7XG5cdFx0dGhpcy5zZWFyY2hOb2RlLnZhbHVlID0gdGhpcy5zZWFyY2guY3VycmVudDtcblx0fVxuXG5cdGlmICggMiA+IHRoaXMuc2VhcmNoLmN1cnJlbnQ/Lmxlbmd0aCApIHtcblx0XHR0aGlzLmxvYWRpbmcuZW5kKCk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgcGF0aCA9IGFkZFF1ZXJ5QXJncyhcblx0XHRKZXRNYXBGaWVsZHNTZXR0aW5ncy5hcGlBdXRvY29tcGxldGUsXG5cdFx0e1xuXHRcdFx0cXVlcnk6IHRoaXMuc2VhcmNoLmN1cnJlbnQsXG5cdFx0fSxcblx0KTtcblxuXHR0aGlzLmxvYWRpbmcuc3RhcnQoKTtcblxuXHRhcGlGZXRjaCgge1xuXHRcdHBhdGgsXG5cdFx0c2lnbmFsOiB0aGlzLmNvbnRyb2xsZXIuc2lnbmFsLFxuXHR9ICkudGhlbiggcmVzcG9uc2UgPT4ge1xuXHRcdHRoaXMucmVzcG9uc2UuY3VycmVudCA9IHtcblx0XHRcdHN1Y2Nlc3M6ICEhcmVzcG9uc2Uuc3VjY2Vzcyxcblx0XHRcdHJlc3BvbnNlLFxuXHRcdH07XG5cdFx0dGhpcy5sb2FkaW5nLmVuZCgpO1xuXHR9ICkuY2F0Y2goIGVycm9yID0+IHtcblx0XHRpZiAoICdBYm9ydEVycm9yJyA9PT0gZXJyb3IubmFtZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5yZXNwb25zZS5jdXJyZW50ID0ge1xuXHRcdFx0c3VjY2VzczogZmFsc2UsXG5cdFx0XHRyZXNwb25zZTogZXJyb3IsXG5cdFx0fTtcblx0XHR0aGlzLmxvYWRpbmcuZW5kKCk7XG5cdH0gKTtcbn07XG5cblNlYXJjaElucHV0LnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy5jb250cm9sbGVyPy5hYm9ydD8uKCk7XG5cblx0dGhpcy5jb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7IiwiaW1wb3J0IFNlYXJjaElucHV0IGZyb20gJy4vU2VhcmNoSW5wdXQnO1xuaW1wb3J0IFNlYXJjaEFkZHJlc3NCb3ggZnJvbSAnLi9TZWFyY2hBZGRyZXNzQm94JztcbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSAnLi9Ecm9wZG93bkxpc3QnO1xuXG4vKipcbiAqIEBwYXJhbSBpbnB1dCB7SW5wdXREYXRhfVxuICovXG5mdW5jdGlvbiBoYW5kbGVNYXBGaWVsZFdpdGhBdXRvY29tcGxldGUoIGlucHV0ICkge1xuXHRpZiAoICdtYXAnICE9PSBpbnB1dC5pbnB1dFR5cGUgfHxcblx0XHQhaW5wdXQubm9kZXM/LlsgMCBdPy5wYXJlbnRFbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oXG5cdFx0XHQnLmpldC1mYi1tYXAtZmllbGRfX3NlYXJjaCcsXG5cdFx0KVxuXHQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBzZWFyY2ggICAgICA9IGlucHV0Lm5vZGVzWyAwIF0ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuamV0LWZiLW1hcC1maWVsZF9fc2VhcmNoJyxcblx0KTtcblx0Y29uc3QgZHJvcERvd24gICAgPSBuZXcgRHJvcGRvd25MaXN0KFxuXHRcdHNlYXJjaC5xdWVyeVNlbGVjdG9yKFxuXHRcdFx0Jy5qZXQtZmItbWFwLWZpZWxkX19zZWFyY2gtbGlzdCcsXG5cdFx0KSxcblx0KTtcblx0Y29uc3Qgc2VhcmNoSW5wdXQgPSBuZXcgU2VhcmNoSW5wdXQoXG5cdFx0c2VhcmNoLnF1ZXJ5U2VsZWN0b3IoICdbdHlwZT1cInRleHRcIl0nICksXG5cdCk7XG5cblx0Y29uc3QgYm94ID0gbmV3IFNlYXJjaEFkZHJlc3NCb3goIHNlYXJjaElucHV0LCBkcm9wRG93biApO1xuXHRib3guc2V0TG9hZGVyTm9kZShcblx0XHRzZWFyY2gucXVlcnlTZWxlY3Rvcihcblx0XHRcdCcuamV0LWZiLW1hcC1maWVsZF9fc2VhcmNoLWxvYWRlcicsXG5cdFx0KSxcblx0KTtcblx0Ym94LnNldE1hcElucHV0KCBpbnB1dCApO1xuXHRib3guaW5pdEhvb2tzKCk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlTWFwRmllbGRXaXRoQXV0b2NvbXBsZXRlOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93W1wid3BcIl1bXCJhcGlGZXRjaFwiXTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1widXJsXCJdOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5pbXBvcnQgaGFuZGxlTWFwRmllbGRXaXRoQXV0b2NvbXBsZXRlIGZyb20gJy4vaGFuZGxlTWFwRmllbGRXaXRoQXV0b2NvbXBsZXRlJztcblxuY29uc3QgeyBhZGRBY3Rpb24gfSA9IEpldFBsdWdpbnMuaG9va3M7XG5cbmFkZEFjdGlvbihcblx0J2pldC5mYi5pbnB1dC5tYWtlUmVhY3RpdmUnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tYXAtZmllbGQtYXV0b2NvbXBsZXRlJyxcblx0aGFuZGxlTWFwRmllbGRXaXRoQXV0b2NvbXBsZXRlLFxuKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=