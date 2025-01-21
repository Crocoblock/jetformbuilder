/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/map.field/NotEmptyMapRestriction.js":
/*!******************************************************!*\
  !*** ./frontend/map.field/NotEmptyMapRestriction.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  NotEmptyRestriction = function () {}
} = JetFormBuilderAbstract;
const {
  isEmpty
} = JetFormBuilderFunctions;
function NotEmptyMapRestriction() {
  NotEmptyRestriction.call(this);
}
NotEmptyMapRestriction.prototype = Object.create(NotEmptyRestriction.prototype);
NotEmptyMapRestriction.prototype.isSupported = function (node, reporting) {
  return NotEmptyRestriction.prototype?.isSupported?.call?.(this, node, reporting) && 'map' === reporting.input.inputType;
};
NotEmptyMapRestriction.prototype.validate = function () {
  const [mainInput] = this.reporting.input.nodes;
  return NotEmptyRestriction.prototype.validate.call(this) && !isEmpty(mainInput.value);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotEmptyMapRestriction);

/***/ }),

/***/ "./frontend/map.field/RequiredMapRestriction.js":
/*!******************************************************!*\
  !*** ./frontend/map.field/RequiredMapRestriction.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const {
  RequiredRestriction
} = JetFormBuilderAbstract;
const {
  isEmpty
} = JetFormBuilderFunctions;
function RequiredMapRestriction() {
  RequiredRestriction.call(this);
}
RequiredMapRestriction.prototype = Object.create(RequiredRestriction.prototype);
RequiredMapRestriction.prototype.isSupported = function (node, reporting) {
  return RequiredRestriction.prototype.isSupported.call(this, node, reporting) && 'map' === reporting.input.inputType;
};
RequiredMapRestriction.prototype.validate = function () {
  const [mainInput] = this.reporting.input.nodes;
  return RequiredRestriction.prototype.validate.call(this) && !isEmpty(mainInput.value);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequiredMapRestriction);

/***/ }),

/***/ "./frontend/map.field/functions.js":
/*!*****************************************!*\
  !*** ./frontend/map.field/functions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getProvider: () => (/* binding */ getProvider),
/* harmony export */   isMapField: () => (/* binding */ isMapField)
/* harmony export */ });
function isMapField(node) {
  return node.parentElement.classList.contains('jet-fb-map-field');
}
let provider = false;

/**
 * @returns {Window.JetEngineMapsProvider}
 */
function getProvider() {
  if (false === provider) {
    provider = new window.JetEngineMapsProvider();
  }
  return provider;
}


/***/ }),

/***/ "./frontend/map.field/input.js":
/*!*************************************!*\
  !*** ./frontend/map.field/input.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/map.field/functions.js");

const {
  InputData
} = JetFormBuilderAbstract;

/**
 * @property {SignalMapField} callable
 *
 * @constructor
 */
function MapFieldData() {
  InputData.call(this);
  this.isSupported = function (node) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isMapField)(node);
  };

  /**
   * @param node {HTMLInputElement}
   */
  this.setNode = function (node) {
    InputData.prototype.setNode.call(this, node);
    const container = node.parentElement;
    this.nodes.push(container.querySelector('[data-map-field="hash"]'), container.querySelector('[data-map-field="lat"]'), container.querySelector('[data-map-field="lng"]'));
    this.fieldSettings = {
      ...this.fieldSettings,
      ...JSON.parse(node.dataset.settings)
    };
    this.fieldSettings.zoom = +this.fieldSettings.zoom;
    this.inputType = 'map';
  };
  this.setValue = function () {
    const [node] = this.nodes;
    if (!node.value) {
      return;
    }
    const getCoordsFromString = value => {
      const valueParts = value.split(','),
        latNum = Number(valueParts[0]),
        lngNum = Number(valueParts[1]);
      if (2 !== valueParts.length || Number.isNaN(latNum) || Number.isNaN(lngNum)) {
        return {};
      }
      return {
        lat: latNum,
        lng: lngNum
      };
    };
    switch (this.fieldSettings.format) {
      case 'location_string':
        this.value.current = getCoordsFromString(node.value);
        break;
      case 'location_address':
        const [main, hash, lat, lng] = this.nodes;
        if (!lat?.value || !lng?.value) {
          return false;
        }
        this.value.current = {
          lat: Number(lat.value),
          lng: Number(lng?.value)
        };
        break;
      case 'location_array':
        try {
          this.value.current = JSON.parse(node.value);
        } catch (error) {
          // for case, when we used inline preset
          this.value.current = getCoordsFromString(node.value);
        }
        break;
    }
  };
  this.makeReactive = function () {
    InputData.prototype.makeReactive.call(this);

    // disable aria attributes
    this.reporting.makeInvalid = () => {};
    this.reporting.makeValid = () => {};
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        }
        this.callable.render();
        this.silenceNotify();

        // Detach observer after the first render the map
        observer.unobserve(entry.target);
      });
    });
    observer.observe(this.nodes[0].parentElement);
  };
  this.hasAutoScroll = function () {
    return false;
  };
}
MapFieldData.prototype = Object.create(InputData.prototype);

/**
 *
 * @property {'location_string'|'location_address'|'location_array'} format
 */
MapFieldData.prototype.fieldSettings = {
  height: '300',
  format: 'location_string',
  field_prefix: false,
  zoom: 14
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MapFieldData);

/***/ }),

/***/ "./frontend/map.field/signal.js":
/*!**************************************!*\
  !*** ./frontend/map.field/signal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./frontend/map.field/functions.js");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__);


const {
  BaseSignal
} = JetFormBuilderAbstract;
const {
  toHTML
} = JetFormBuilderFunctions;
function SignalMapField() {
  BaseSignal.call(this);
  this.lock.current = true;
  this.map = null;
  this.marker = null;
  this.mapFrame = null;
  this.position = null;
  this.preview = null;
  this.markerDefaults = {
    ...SignalMapField.prototype.markerDefaults
  };
  this.isSupported = function (node, input) {
    return (0,_functions__WEBPACK_IMPORTED_MODULE_0__.isMapField)(node);
  };
  this.runSignal = function () {
    let location;
    const {
      current: position
    } = this.input.value;
    if (!position || !Object.keys(position).length) {
      this.removeMarker();
      return;
    }
    const [main, hash, lat, lng] = this.input.nodes;
    this.setPreview(JetMapFieldsSettings.i18n.loading);

    /**
     * @see https://github.com/Crocoblock/issues-tracker/issues/3158
     */
    const onEndRequest = () => {
      this.input.reporting.valuePrev = null;
      this.input.report();
      this.input.loading.end();
    };
    this.input.loading.start();
    switch (this.input.fieldSettings.format) {
      case 'location_string':
        location = position.lat + ',' + position.lng;
        this.updateHashFieldPromise(location).then(() => {
          main.value = location;
          this.setPreview(position);
        }).finally(onEndRequest);
        break;
      case 'location_array':
        location = JSON.stringify(position);
        this.updateHashFieldPromise(location).then(() => {
          main.value = location;
          this.setPreview(position);
        }).finally(onEndRequest);
        break;
      case 'location_address':
        _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
          method: 'get',
          path: JetMapFieldsSettings.api + '?lat=' + position.lat + '&lng=' + position.lng,
          headers: {
            'nonce': JetMapFieldsSettings.nonce
          }
        }).then(response => {
          if (response.success) {
            if (response.data) {
              this.updateHashFieldPromise(response.data).then(() => {
                main.value = response.data;
                this.setPreview(response.data);
              }).finally(onEndRequest);
            } else {
              main.value = null;
              this.setPreview(JetMapFieldsSettings.i18n.notFound);
              onEndRequest();
            }
          } else {
            main.value = null;
            this.setPreview(response.html);
            onEndRequest();
          }
        }).catch(function (e) {
          console.log(e);
        });
        break;
    }
    if (lat) {
      lat.value = position.lat;
    }
    if (lng) {
      lng.value = position.lng;
    }
  };
}
SignalMapField.prototype = Object.create(BaseSignal.prototype);
/**
 * @type {null}
 */
SignalMapField.prototype.map = null;
/**
 * @type {null}
 */
SignalMapField.prototype.marker = null;
/**
 * @type {null}
 */
SignalMapField.prototype.preview = null;
/**
 * @type {null}
 */
SignalMapField.prototype.position = null;
/**
 * @type {null}
 */
SignalMapField.prototype.mapFrame = null;
SignalMapField.prototype.mapDefaults = {
  center: {
    lat: 41,
    lng: 71
  },
  zoom: 1
};
SignalMapField.prototype.markerDefaults = {
  content: '<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" fill="#C92C2C"/></svg>',
  shadow: false
};
SignalMapField.prototype.removeMarker = function () {
  const [main, hash, lat, lng] = this.input.nodes;
  if (this.marker) {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getProvider)().removeMarker(this.marker);
  }
  this.setPreview(null);
  main.value = null;
  if (lat) {
    lat.value = null;
  }
  if (lng) {
    lng.value = null;
  }
  if (hash) {
    hash.value = null;
  }
};
SignalMapField.prototype.setPreview = function (position) {
  let positionText;
  if (position && position.lat && position.lng) {
    positionText = '<span title="Lat">' + position.lat + '</span>, <span title="Lng">' + position.lng + '</span>';
  } else {
    positionText = position;
  }
  this.position.innerHTML = positionText;
  this.preview.style.display = position ? 'flex' : 'none';
};
SignalMapField.prototype.updateHashFieldPromise = function (location) {
  const [main, hash] = this.input.nodes;
  if (!hash) {
    return new Promise(function (resolve) {
      resolve();
    });
  }
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1___default()({
    method: 'get',
    path: JetMapFieldsSettings.apiHash + '?loc=' + location,
    headers: {
      'nonce': JetMapFieldsSettings.nonce
    }
  }).then(response => {
    if (response.success) {
      hash.value = response.data;
    }
  }).catch(function (e) {
    console.log(e);
  });
};
SignalMapField.prototype.render = function () {
  const container = this.input.nodes[0].parentElement;
  this.preview = container.querySelector('.jet-fb-map-field__preview');
  this.position = container.querySelector('.jet-fb-map-field__position');
  this.mapFrame = container.querySelector('.jet-fb-map-field__frame');
  const provider = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getProvider)();
  if (null !== this.input.value.current) {
    this.mapDefaults = {
      ...this.mapDefaults,
      center: this.input.value.current,
      zoom: this.input.fieldSettings.zoom
    };
  }
  this.map = provider.initMap(this.mapFrame, this.mapDefaults);
  if (null !== this.input.value.current) {
    this.marker = provider.addMarker({
      ...this.markerDefaults,
      position: this.input.value.current,
      map: this.map
    });
  }
  provider.markerOnClick(this.map, this.markerDefaults, marker => {
    if (this.marker) {
      provider.removeMarker(this.marker);
    }
    this.marker = marker;
    this.input.value.current = provider.getMarkerPosition(marker, true);
  });
  const resetBtn = container.querySelector('.jet-fb-map-field__reset');
  resetBtn.addEventListener('click', () => {
    this.input.value.current = null;
  });

  // allow to run signal
  this.lock.current = false;
};
SignalMapField.prototype.setMarker = function ({
  lat,
  lng
}) {
  lat = Number(lat);
  lng = Number(lng);
  this.input.value.current = {
    lat,
    lng
  };
  const provider = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getProvider)();
  this.marker = provider.addMarker({
    ...this.markerDefaults,
    position: this.input.value.current,
    map: this.map
  });
  this.setCenterByPosition();
};
SignalMapField.prototype.setCenterByPosition = function () {
  const provider = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.getProvider)();
  provider.setCenterByPosition({
    position: this.input.value.current,
    map: this.map,
    zoom: 12
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignalMapField);

/***/ }),

/***/ "./frontend/map.field/index.pcss":
/*!***************************************!*\
  !*** ./frontend/map.field/index.pcss ***!
  \***************************************/
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
/*!*************************************!*\
  !*** ./frontend/map.field/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ "./frontend/map.field/input.js");
/* harmony import */ var _signal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signal */ "./frontend/map.field/signal.js");
/* harmony import */ var _NotEmptyMapRestriction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotEmptyMapRestriction */ "./frontend/map.field/NotEmptyMapRestriction.js");
/* harmony import */ var _RequiredMapRestriction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RequiredMapRestriction */ "./frontend/map.field/RequiredMapRestriction.js");
/* harmony import */ var _index_pcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.pcss */ "./frontend/map.field/index.pcss");





const {
  addFilter
} = JetPlugins.hooks;
addFilter('jet.fb.inputs', 'jet-form-builder/map-field', function (inputs) {
  inputs = [_input__WEBPACK_IMPORTED_MODULE_0__["default"], ...inputs];
  return inputs;
});
addFilter('jet.fb.signals', 'jet-form-builder/map-field', function (signals) {
  signals = [_signal__WEBPACK_IMPORTED_MODULE_1__["default"], ...signals];
  return signals;
});
addFilter('jet.fb.restrictions', 'jet-form-builder/map-field', function (restrictions) {
  restrictions.push(_NotEmptyMapRestriction__WEBPACK_IMPORTED_MODULE_2__["default"]);
  return restrictions;
});
addFilter('jet.fb.restrictions.default', 'jet-form-builder/map-field', function (restrictions) {
  restrictions.push(_RequiredMapRestriction__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return restrictions;
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDL1NBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkLy4vZnJvbnRlbmQvbWFwLmZpZWxkL05vdEVtcHR5TWFwUmVzdHJpY3Rpb24uanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9tYXAuZmllbGQvUmVxdWlyZWRNYXBSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL21hcC5maWVsZC9mdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9tYXAuZmllbGQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9tYXAuZmllbGQvc2lnbmFsLmpzIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkLy4vZnJvbnRlbmQvbWFwLmZpZWxkL2luZGV4LnBjc3M/NmQ3MSIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImFwaUZldGNoXCJdIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9tYXAuZmllbGQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xuXHQgICAgICBOb3RFbXB0eVJlc3RyaWN0aW9uID0gZnVuY3Rpb24gKCkge30sXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcblxuY29uc3Qge1xuXHQgICAgICBpc0VtcHR5LFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBOb3RFbXB0eU1hcFJlc3RyaWN0aW9uKCkge1xuXHROb3RFbXB0eVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcbn1cblxuTm90RW1wdHlNYXBSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxuXHROb3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZSxcbik7XG5cbk5vdEVtcHR5TWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XG5cdHJldHVybiAoXG5cdFx0Tm90RW1wdHlSZXN0cmljdGlvbi5wcm90b3R5cGU/LmlzU3VwcG9ydGVkPy5jYWxsPy4oXG5cdFx0XHR0aGlzLFxuXHRcdFx0bm9kZSxcblx0XHRcdHJlcG9ydGluZyxcblx0XHQpICYmXG5cdFx0J21hcCcgPT09IHJlcG9ydGluZy5pbnB1dC5pbnB1dFR5cGVcblx0KTtcbn07XG5cbk5vdEVtcHR5TWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG1haW5JbnB1dCBdID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQubm9kZXM7XG5cblx0cmV0dXJuIChcblx0XHROb3RFbXB0eVJlc3RyaWN0aW9uLnByb3RvdHlwZS52YWxpZGF0ZS5jYWxsKCB0aGlzICkgJiZcblx0XHQhaXNFbXB0eSggbWFpbklucHV0LnZhbHVlIClcblx0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEVtcHR5TWFwUmVzdHJpY3Rpb247IiwiY29uc3Qge1xuXHQgICAgICBSZXF1aXJlZFJlc3RyaWN0aW9uLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbmNvbnN0IHtcblx0ICAgICAgaXNFbXB0eSxcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcblxuZnVuY3Rpb24gUmVxdWlyZWRNYXBSZXN0cmljdGlvbigpIHtcblx0UmVxdWlyZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XG59XG5cblJlcXVpcmVkTWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcblx0UmVxdWlyZWRSZXN0cmljdGlvbi5wcm90b3R5cGUsXG4pO1xuXG5SZXF1aXJlZE1hcFJlc3RyaWN0aW9uLnByb3RvdHlwZS5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgcmVwb3J0aW5nICkge1xuXHRyZXR1cm4gKFxuXHRcdFJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkLmNhbGwoXG5cdFx0XHR0aGlzLFxuXHRcdFx0bm9kZSxcblx0XHRcdHJlcG9ydGluZyxcblx0XHQpICYmXG5cdFx0J21hcCcgPT09IHJlcG9ydGluZy5pbnB1dC5pbnB1dFR5cGVcblx0KTtcbn07XG5cblJlcXVpcmVkTWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuXHRjb25zdCBbIG1haW5JbnB1dCBdID0gdGhpcy5yZXBvcnRpbmcuaW5wdXQubm9kZXM7XG5cblx0cmV0dXJuIChcblx0XHRSZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZS52YWxpZGF0ZS5jYWxsKCB0aGlzICkgJiZcblx0XHQhIGlzRW1wdHkoIG1haW5JbnB1dC52YWx1ZSApXG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXF1aXJlZE1hcFJlc3RyaWN0aW9uOyIsImZ1bmN0aW9uIGlzTWFwRmllbGQoIG5vZGUgKSB7XG5cdHJldHVybiBub2RlLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCAnamV0LWZiLW1hcC1maWVsZCcgKTtcbn1cblxubGV0IHByb3ZpZGVyID0gZmFsc2U7XG5cbi8qKlxuICogQHJldHVybnMge1dpbmRvdy5KZXRFbmdpbmVNYXBzUHJvdmlkZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFByb3ZpZGVyKCkge1xuXHRpZiAoIGZhbHNlID09PSBwcm92aWRlciApIHtcblx0XHRwcm92aWRlciA9IG5ldyB3aW5kb3cuSmV0RW5naW5lTWFwc1Byb3ZpZGVyKCk7XG5cdH1cblxuXHRyZXR1cm4gcHJvdmlkZXI7XG59XG5cbmV4cG9ydCB7IGlzTWFwRmllbGQsIGdldFByb3ZpZGVyIH07IiwiaW1wb3J0IHsgaXNNYXBGaWVsZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcblxuY29uc3QgeyBJbnB1dERhdGEgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XG5cbi8qKlxuICogQHByb3BlcnR5IHtTaWduYWxNYXBGaWVsZH0gY2FsbGFibGVcbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWFwRmllbGREYXRhKCkge1xuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0cmV0dXJuIGlzTWFwRmllbGQoIG5vZGUgKTtcblx0fTtcblxuXHQvKipcblx0ICogQHBhcmFtIG5vZGUge0hUTUxJbnB1dEVsZW1lbnR9XG5cdCAqL1xuXHR0aGlzLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5zZXROb2RlLmNhbGwoIHRoaXMsIG5vZGUgKTtcblx0XHRjb25zdCBjb250YWluZXIgPSBub2RlLnBhcmVudEVsZW1lbnQ7XG5cblx0XHR0aGlzLm5vZGVzLnB1c2goXG5cdFx0XHRjb250YWluZXIucXVlcnlTZWxlY3RvciggJ1tkYXRhLW1hcC1maWVsZD1cImhhc2hcIl0nICksXG5cdFx0XHRjb250YWluZXIucXVlcnlTZWxlY3RvciggJ1tkYXRhLW1hcC1maWVsZD1cImxhdFwiXScgKSxcblx0XHRcdGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCAnW2RhdGEtbWFwLWZpZWxkPVwibG5nXCJdJyApLFxuXHRcdCk7XG5cblx0XHR0aGlzLmZpZWxkU2V0dGluZ3MgICAgICA9IHtcblx0XHRcdC4uLnRoaXMuZmllbGRTZXR0aW5ncyxcblx0XHRcdC4uLkpTT04ucGFyc2UoIG5vZGUuZGF0YXNldC5zZXR0aW5ncyApLFxuXHRcdH07XG5cdFx0dGhpcy5maWVsZFNldHRpbmdzLnpvb20gPSArdGhpcy5maWVsZFNldHRpbmdzLnpvb207XG5cblx0XHR0aGlzLmlucHV0VHlwZSA9ICdtYXAnO1xuXHR9O1xuXG5cdHRoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Y29uc3QgWyBub2RlIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0aWYgKCAhbm9kZS52YWx1ZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBnZXRDb29yZHNGcm9tU3RyaW5nID0gdmFsdWUgPT4ge1xuXHRcdFx0Y29uc3QgdmFsdWVQYXJ0cyA9IHZhbHVlLnNwbGl0KCAnLCcgKSxcblx0XHRcdCAgICAgIGxhdE51bSAgICAgPSBOdW1iZXIoIHZhbHVlUGFydHNbIDAgXSApLFxuXHRcdFx0ICAgICAgbG5nTnVtICAgICA9IE51bWJlciggdmFsdWVQYXJ0c1sgMSBdICk7XG5cblx0XHRcdGlmICggMiAhPT0gdmFsdWVQYXJ0cy5sZW5ndGggfHxcblx0XHRcdFx0TnVtYmVyLmlzTmFOKCBsYXROdW0gKSB8fFxuXHRcdFx0XHROdW1iZXIuaXNOYU4oIGxuZ051bSApXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuIHt9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRsYXQ6IGxhdE51bSxcblx0XHRcdFx0bG5nOiBsbmdOdW0sXG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHRzd2l0Y2ggKCB0aGlzLmZpZWxkU2V0dGluZ3MuZm9ybWF0ICkge1xuXHRcdFx0Y2FzZSAnbG9jYXRpb25fc3RyaW5nJzpcblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gZ2V0Q29vcmRzRnJvbVN0cmluZyggbm9kZS52YWx1ZSApO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2xvY2F0aW9uX2FkZHJlc3MnOlxuXHRcdFx0XHRjb25zdCBbIG1haW4sIGhhc2gsIGxhdCwgbG5nIF0gPSB0aGlzLm5vZGVzO1xuXG5cdFx0XHRcdGlmICggIWxhdD8udmFsdWUgfHwgIWxuZz8udmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0ge1xuXHRcdFx0XHRcdGxhdDogTnVtYmVyKCBsYXQudmFsdWUgKSxcblx0XHRcdFx0XHRsbmc6IE51bWJlciggbG5nPy52YWx1ZSApLFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2xvY2F0aW9uX2FycmF5Jzpcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBKU09OLnBhcnNlKCBub2RlLnZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2F0Y2ggKCBlcnJvciApIHtcblx0XHRcdFx0XHQvLyBmb3IgY2FzZSwgd2hlbiB3ZSB1c2VkIGlubGluZSBwcmVzZXRcblx0XHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBnZXRDb29yZHNGcm9tU3RyaW5nKCBub2RlLnZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9O1xuXG5cdHRoaXMubWFrZVJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xuXHRcdElucHV0RGF0YS5wcm90b3R5cGUubWFrZVJlYWN0aXZlLmNhbGwoIHRoaXMgKTtcblxuXHRcdC8vIGRpc2FibGUgYXJpYSBhdHRyaWJ1dGVzXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZUludmFsaWQgPSAoKSA9PiB7fTtcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlVmFsaWQgICA9ICgpID0+IHt9O1xuXG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoICggZW50cmllcywgb2JzZXJ2ZXIgKSA9PiB7XG5cblx0XHRcdGVudHJpZXMuZm9yRWFjaCggKCBlbnRyeSApID0+IHtcblx0XHRcdFx0aWYgKCAhZW50cnkuaXNJbnRlcnNlY3RpbmcgKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dGhpcy5jYWxsYWJsZS5yZW5kZXIoKTtcblx0XHRcdFx0dGhpcy5zaWxlbmNlTm90aWZ5KCk7XG5cblx0XHRcdFx0Ly8gRGV0YWNoIG9ic2VydmVyIGFmdGVyIHRoZSBmaXJzdCByZW5kZXIgdGhlIG1hcFxuXHRcdFx0XHRvYnNlcnZlci51bm9ic2VydmUoIGVudHJ5LnRhcmdldCApO1xuXHRcdFx0fSApO1xuXHRcdH0gKTtcblxuXHRcdG9ic2VydmVyLm9ic2VydmUoIHRoaXMubm9kZXNbIDAgXS5wYXJlbnRFbGVtZW50ICk7XG5cdH07XG5cblx0dGhpcy5oYXNBdXRvU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fTtcbn1cblxuTWFwRmllbGREYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcblxuLyoqXG4gKlxuICogQHByb3BlcnR5IHsnbG9jYXRpb25fc3RyaW5nJ3wnbG9jYXRpb25fYWRkcmVzcyd8J2xvY2F0aW9uX2FycmF5J30gZm9ybWF0XG4gKi9cbk1hcEZpZWxkRGF0YS5wcm90b3R5cGUuZmllbGRTZXR0aW5ncyA9IHtcblx0aGVpZ2h0OiAnMzAwJyxcblx0Zm9ybWF0OiAnbG9jYXRpb25fc3RyaW5nJyxcblx0ZmllbGRfcHJlZml4OiBmYWxzZSxcblx0em9vbTogMTQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXBGaWVsZERhdGE7IiwiaW1wb3J0IHsgZ2V0UHJvdmlkZXIsIGlzTWFwRmllbGQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XG5pbXBvcnQgYXBpRmV0Y2ggZnJvbSAnQHdvcmRwcmVzcy9hcGktZmV0Y2gnO1xuXG5jb25zdCB7XG5cdCAgICAgIEJhc2VTaWduYWwsXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcbmNvbnN0IHtcblx0ICAgICAgdG9IVE1MLFxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xuXG5mdW5jdGlvbiBTaWduYWxNYXBGaWVsZCgpIHtcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XG5cblx0dGhpcy5sb2NrLmN1cnJlbnQgPSB0cnVlO1xuXG5cdHRoaXMubWFwICAgICAgPSBudWxsO1xuXHR0aGlzLm1hcmtlciAgID0gbnVsbDtcblx0dGhpcy5tYXBGcmFtZSA9IG51bGw7XG5cdHRoaXMucG9zaXRpb24gPSBudWxsO1xuXHR0aGlzLnByZXZpZXcgID0gbnVsbDtcblxuXHR0aGlzLm1hcmtlckRlZmF1bHRzID0ge1xuXHRcdC4uLlNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5tYXJrZXJEZWZhdWx0cyxcblx0fTtcblxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCBpbnB1dCApIHtcblx0XHRyZXR1cm4gaXNNYXBGaWVsZCggbm9kZSApO1xuXHR9O1xuXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xuXHRcdGxldCBsb2NhdGlvbjtcblx0XHRjb25zdCB7IGN1cnJlbnQ6IHBvc2l0aW9uIH0gPSB0aGlzLmlucHV0LnZhbHVlO1xuXG5cdFx0aWYgKCAhcG9zaXRpb24gfHwgIU9iamVjdC5rZXlzKCBwb3NpdGlvbiApLmxlbmd0aCApIHtcblx0XHRcdHRoaXMucmVtb3ZlTWFya2VyKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBbIG1haW4sIGhhc2gsIGxhdCwgbG5nIF0gPSB0aGlzLmlucHV0Lm5vZGVzO1xuXG5cdFx0dGhpcy5zZXRQcmV2aWV3KCBKZXRNYXBGaWVsZHNTZXR0aW5ncy5pMThuLmxvYWRpbmcgKTtcblxuXHRcdC8qKlxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzMxNThcblx0XHQgKi9cblx0XHRjb25zdCBvbkVuZFJlcXVlc3QgPSAoKSA9PiB7XG5cdFx0XHR0aGlzLmlucHV0LnJlcG9ydGluZy52YWx1ZVByZXYgPSBudWxsO1xuXHRcdFx0dGhpcy5pbnB1dC5yZXBvcnQoKTtcblx0XHRcdHRoaXMuaW5wdXQubG9hZGluZy5lbmQoKTtcblx0XHR9O1xuXG5cdFx0dGhpcy5pbnB1dC5sb2FkaW5nLnN0YXJ0KCk7XG5cblx0XHRzd2l0Y2ggKCB0aGlzLmlucHV0LmZpZWxkU2V0dGluZ3MuZm9ybWF0ICkge1xuXHRcdFx0Y2FzZSAnbG9jYXRpb25fc3RyaW5nJzpcblxuXHRcdFx0XHRsb2NhdGlvbiA9IHBvc2l0aW9uLmxhdCArICcsJyArIHBvc2l0aW9uLmxuZztcblxuXHRcdFx0XHR0aGlzLnVwZGF0ZUhhc2hGaWVsZFByb21pc2UoIGxvY2F0aW9uICkudGhlbiggKCkgPT4ge1xuXHRcdFx0XHRcdG1haW4udmFsdWUgPSBsb2NhdGlvbjtcblx0XHRcdFx0XHR0aGlzLnNldFByZXZpZXcoIHBvc2l0aW9uICk7XG5cdFx0XHRcdH0gKS5maW5hbGx5KCBvbkVuZFJlcXVlc3QgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbG9jYXRpb25fYXJyYXknOlxuXG5cdFx0XHRcdGxvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoIHBvc2l0aW9uICk7XG5cblx0XHRcdFx0dGhpcy51cGRhdGVIYXNoRmllbGRQcm9taXNlKCBsb2NhdGlvbiApLnRoZW4oICgpID0+IHtcblx0XHRcdFx0XHRtYWluLnZhbHVlID0gbG9jYXRpb247XG5cdFx0XHRcdFx0dGhpcy5zZXRQcmV2aWV3KCBwb3NpdGlvbiApO1xuXHRcdFx0XHR9ICkuZmluYWxseSggb25FbmRSZXF1ZXN0ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2xvY2F0aW9uX2FkZHJlc3MnOlxuXG5cdFx0XHRcdGFwaUZldGNoKCB7XG5cdFx0XHRcdFx0bWV0aG9kOiAnZ2V0Jyxcblx0XHRcdFx0XHRwYXRoOiBKZXRNYXBGaWVsZHNTZXR0aW5ncy5hcGkgKyAnP2xhdD0nICsgcG9zaXRpb24ubGF0ICtcblx0XHRcdFx0XHRcdCcmbG5nPScgKyBwb3NpdGlvbi5sbmcsXG5cdFx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFx0J25vbmNlJzogSmV0TWFwRmllbGRzU2V0dGluZ3Mubm9uY2UsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSApLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XG5cblx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLmRhdGEgKSB7XG5cblx0XHRcdFx0XHRcdFx0dGhpcy51cGRhdGVIYXNoRmllbGRQcm9taXNlKCByZXNwb25zZS5kYXRhICkuXG5cdFx0XHRcdFx0XHRcdFx0dGhlbiggKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bWFpbi52YWx1ZSA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnNldFByZXZpZXcoIHJlc3BvbnNlLmRhdGEgKTtcblxuXHRcdFx0XHRcdFx0XHRcdH0gKS5maW5hbGx5KCBvbkVuZFJlcXVlc3QgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtYWluLnZhbHVlID0gbnVsbDtcblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRQcmV2aWV3KFxuXHRcdFx0XHRcdFx0XHRcdEpldE1hcEZpZWxkc1NldHRpbmdzLmkxOG4ubm90Rm91bmQsXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdG9uRW5kUmVxdWVzdCgpO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdFx0bWFpbi52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdFx0XHR0aGlzLnNldFByZXZpZXcoIHJlc3BvbnNlLmh0bWwgKTtcblx0XHRcdFx0XHRcdG9uRW5kUmVxdWVzdCgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9ICkuY2F0Y2goIGZ1bmN0aW9uICggZSApIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyggZSApO1xuXHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXG5cdFx0aWYgKCBsYXQgKSB7XG5cdFx0XHRsYXQudmFsdWUgPSBwb3NpdGlvbi5sYXQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBsbmcgKSB7XG5cdFx0XHRsbmcudmFsdWUgPSBwb3NpdGlvbi5sbmc7XG5cdFx0fVxuXHR9O1xufVxuXG5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBCYXNlU2lnbmFsLnByb3RvdHlwZSApO1xuLyoqXG4gKiBAdHlwZSB7bnVsbH1cbiAqL1xuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLm1hcCA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtudWxsfVxuICovXG5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUubWFya2VyID0gbnVsbDtcbi8qKlxuICogQHR5cGUge251bGx9XG4gKi9cblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5wcmV2aWV3ID0gbnVsbDtcbi8qKlxuICogQHR5cGUge251bGx9XG4gKi9cblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHtudWxsfVxuICovXG5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUubWFwRnJhbWUgPSBudWxsO1xuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLm1hcERlZmF1bHRzICAgID0ge1xuXHRjZW50ZXI6IHtcblx0XHRsYXQ6IDQxLFxuXHRcdGxuZzogNzEsXG5cdH0sXG5cdHpvb206IDEsXG59O1xuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLm1hcmtlckRlZmF1bHRzID0ge1xuXHRjb250ZW50OiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzNlwiIGhlaWdodD1cIjM2XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTIgMGMtNC4xOTggMC04IDMuNDAzLTggNy42MDIgMCA0LjE5OCAzLjQ2OSA5LjIxIDggMTYuMzk4IDQuNTMxLTcuMTg4IDgtMTIuMiA4LTE2LjM5OCAwLTQuMTk5LTMuODAxLTcuNjAyLTgtNy42MDJ6bTAgMTFjLTEuNjU3IDAtMy0xLjM0My0zLTNzMS4zNDMtMyAzLTMgMyAxLjM0MyAzIDMtMS4zNDMgMy0zIDN6XCIgZmlsbD1cIiNDOTJDMkNcIi8+PC9zdmc+Jyxcblx0c2hhZG93OiBmYWxzZSxcbn07XG5cblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5yZW1vdmVNYXJrZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IFsgbWFpbiwgaGFzaCwgbGF0LCBsbmcgXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0aWYgKCB0aGlzLm1hcmtlciApIHtcblx0XHRnZXRQcm92aWRlcigpLnJlbW92ZU1hcmtlciggdGhpcy5tYXJrZXIgKTtcblx0fVxuXG5cdHRoaXMuc2V0UHJldmlldyggbnVsbCApO1xuXHRtYWluLnZhbHVlID0gbnVsbDtcblxuXHRpZiAoIGxhdCApIHtcblx0XHRsYXQudmFsdWUgPSBudWxsO1xuXHR9XG5cblx0aWYgKCBsbmcgKSB7XG5cdFx0bG5nLnZhbHVlID0gbnVsbDtcblx0fVxuXG5cdGlmICggaGFzaCApIHtcblx0XHRoYXNoLnZhbHVlID0gbnVsbDtcblx0fVxuXG59O1xuXG5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUuc2V0UHJldmlldyA9IGZ1bmN0aW9uICggcG9zaXRpb24gKSB7XG5cdGxldCBwb3NpdGlvblRleHQ7XG5cblx0aWYgKCBwb3NpdGlvbiAmJiBwb3NpdGlvbi5sYXQgJiYgcG9zaXRpb24ubG5nICkge1xuXHRcdHBvc2l0aW9uVGV4dCA9ICc8c3BhbiB0aXRsZT1cIkxhdFwiPicgKyBwb3NpdGlvbi5sYXQgK1xuXHRcdFx0Jzwvc3Bhbj4sIDxzcGFuIHRpdGxlPVwiTG5nXCI+JyArIHBvc2l0aW9uLmxuZyArICc8L3NwYW4+Jztcblx0fVxuXHRlbHNlIHtcblx0XHRwb3NpdGlvblRleHQgPSBwb3NpdGlvbjtcblx0fVxuXG5cdHRoaXMucG9zaXRpb24uaW5uZXJIVE1MICAgID0gcG9zaXRpb25UZXh0O1xuXHR0aGlzLnByZXZpZXcuc3R5bGUuZGlzcGxheSA9IHBvc2l0aW9uID8gJ2ZsZXgnIDogJ25vbmUnO1xufTtcblxuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLnVwZGF0ZUhhc2hGaWVsZFByb21pc2UgPSBmdW5jdGlvbiAoIGxvY2F0aW9uICkge1xuXHRjb25zdCBbIG1haW4sIGhhc2ggXSA9IHRoaXMuaW5wdXQubm9kZXM7XG5cblx0aWYgKCAhaGFzaCApIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcblx0XHRcdHJlc29sdmUoKTtcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gYXBpRmV0Y2goIHtcblx0XHRtZXRob2Q6ICdnZXQnLFxuXHRcdHBhdGg6IEpldE1hcEZpZWxkc1NldHRpbmdzLmFwaUhhc2ggKyAnP2xvYz0nICsgbG9jYXRpb24sXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J25vbmNlJzogSmV0TWFwRmllbGRzU2V0dGluZ3Mubm9uY2UsXG5cdFx0fSxcblx0fSApLnRoZW4oIHJlc3BvbnNlID0+IHtcblx0XHRpZiAoIHJlc3BvbnNlLnN1Y2Nlc3MgKSB7XG5cdFx0XHRoYXNoLnZhbHVlID0gcmVzcG9uc2UuZGF0YTtcblx0XHR9XG5cdH0gKS5jYXRjaCggZnVuY3Rpb24gKCBlICkge1xuXHRcdGNvbnNvbGUubG9nKCBlICk7XG5cdH0gKTtcbn07XG5cblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuaW5wdXQubm9kZXNbIDAgXS5wYXJlbnRFbGVtZW50O1xuXG5cdHRoaXMucHJldmlldyAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvciggJy5qZXQtZmItbWFwLWZpZWxkX19wcmV2aWV3JyApO1xuXHR0aGlzLnBvc2l0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZiLW1hcC1maWVsZF9fcG9zaXRpb24nICk7XG5cdHRoaXMubWFwRnJhbWUgPSBjb250YWluZXIucXVlcnlTZWxlY3RvciggJy5qZXQtZmItbWFwLWZpZWxkX19mcmFtZScgKTtcblxuXHRjb25zdCBwcm92aWRlciA9IGdldFByb3ZpZGVyKCk7XG5cblx0aWYgKCBudWxsICE9PSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgKSB7XG5cdFx0dGhpcy5tYXBEZWZhdWx0cyA9IHtcblx0XHRcdC4uLnRoaXMubWFwRGVmYXVsdHMsXG5cdFx0XHRjZW50ZXI6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCxcblx0XHRcdHpvb206IHRoaXMuaW5wdXQuZmllbGRTZXR0aW5ncy56b29tLFxuXHRcdH07XG5cdH1cblxuXHR0aGlzLm1hcCA9IHByb3ZpZGVyLmluaXRNYXAoIHRoaXMubWFwRnJhbWUsIHRoaXMubWFwRGVmYXVsdHMgKTtcblxuXHRpZiAoIG51bGwgIT09IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCApIHtcblx0XHR0aGlzLm1hcmtlciA9IHByb3ZpZGVyLmFkZE1hcmtlcigge1xuXHRcdFx0Li4udGhpcy5tYXJrZXJEZWZhdWx0cyxcblx0XHRcdHBvc2l0aW9uOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQsXG5cdFx0XHRtYXA6IHRoaXMubWFwLFxuXHRcdH0gKTtcblx0fVxuXG5cdHByb3ZpZGVyLm1hcmtlck9uQ2xpY2soIHRoaXMubWFwLCB0aGlzLm1hcmtlckRlZmF1bHRzLCAoIG1hcmtlciApID0+IHtcblxuXHRcdGlmICggdGhpcy5tYXJrZXIgKSB7XG5cdFx0XHRwcm92aWRlci5yZW1vdmVNYXJrZXIoIHRoaXMubWFya2VyICk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XG5cblx0XHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSBwcm92aWRlci5nZXRNYXJrZXJQb3NpdGlvbiggbWFya2VyLCB0cnVlICk7XG5cdH0gKTtcblxuXHRjb25zdCByZXNldEJ0biA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFxuXHRcdCcuamV0LWZiLW1hcC1maWVsZF9fcmVzZXQnLFxuXHQpO1xuXG5cdHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcblx0XHR0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgPSBudWxsO1xuXHR9ICk7XG5cblx0Ly8gYWxsb3cgdG8gcnVuIHNpZ25hbFxuXHR0aGlzLmxvY2suY3VycmVudCA9IGZhbHNlO1xufTtcblxuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLnNldE1hcmtlciA9IGZ1bmN0aW9uICggeyBsYXQsIGxuZyB9ICkge1xuXHRsYXQgPSBOdW1iZXIoIGxhdCApO1xuXHRsbmcgPSBOdW1iZXIoIGxuZyApO1xuXG5cdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IHsgbGF0LCBsbmcgfTtcblxuXHRjb25zdCBwcm92aWRlciA9IGdldFByb3ZpZGVyKCk7XG5cblx0dGhpcy5tYXJrZXIgPSBwcm92aWRlci5hZGRNYXJrZXIoIHtcblx0XHQuLi50aGlzLm1hcmtlckRlZmF1bHRzLFxuXHRcdHBvc2l0aW9uOiB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQsXG5cdFx0bWFwOiB0aGlzLm1hcCxcblx0fSApO1xuXG5cdHRoaXMuc2V0Q2VudGVyQnlQb3NpdGlvbigpO1xufTtcblxuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLnNldENlbnRlckJ5UG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXIoKTtcblxuXHRwcm92aWRlci5zZXRDZW50ZXJCeVBvc2l0aW9uKCB7XG5cdFx0cG9zaXRpb246IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCxcblx0XHRtYXA6IHRoaXMubWFwLFxuXHRcdHpvb206IDEyLFxuXHR9ICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxNYXBGaWVsZDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYXBpRmV0Y2hcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNYXBGaWVsZERhdGEgZnJvbSAnLi9pbnB1dCc7XG5pbXBvcnQgU2lnbmFsTWFwRmllbGQgZnJvbSAnLi9zaWduYWwnO1xuaW1wb3J0IE5vdEVtcHR5TWFwUmVzdHJpY3Rpb24gZnJvbSAnLi9Ob3RFbXB0eU1hcFJlc3RyaWN0aW9uJztcbmltcG9ydCBSZXF1aXJlZE1hcFJlc3RyaWN0aW9uIGZyb20gJy4vUmVxdWlyZWRNYXBSZXN0cmljdGlvbic7XG5pbXBvcnQgJy4vaW5kZXgucGNzcyc7XG5cbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xuXG5hZGRGaWx0ZXIoXG5cdCdqZXQuZmIuaW5wdXRzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWFwLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBpbnB1dHMgKSB7XG5cdFx0aW5wdXRzID0gWyBNYXBGaWVsZERhdGEsIC4uLmlucHV0cyBdO1xuXG5cdFx0cmV0dXJuIGlucHV0cztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5zaWduYWxzJyxcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWFwLWZpZWxkJyxcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xuXHRcdHNpZ25hbHMgPSBbIFNpZ25hbE1hcEZpZWxkLCAuLi5zaWduYWxzIF07XG5cblx0XHRyZXR1cm4gc2lnbmFscztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMnLFxuXHQnamV0LWZvcm0tYnVpbGRlci9tYXAtZmllbGQnLFxuXHRmdW5jdGlvbiAoIHJlc3RyaWN0aW9ucyApIHtcblx0XHRyZXN0cmljdGlvbnMucHVzaCggTm90RW1wdHlNYXBSZXN0cmljdGlvbiApO1xuXG5cdFx0cmV0dXJuIHJlc3RyaWN0aW9ucztcblx0fSxcbik7XG5cbmFkZEZpbHRlcihcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXG5cdCdqZXQtZm9ybS1idWlsZGVyL21hcC1maWVsZCcsXG5cdGZ1bmN0aW9uICggcmVzdHJpY3Rpb25zICkge1xuXHRcdHJlc3RyaWN0aW9ucy5wdXNoKCBSZXF1aXJlZE1hcFJlc3RyaWN0aW9uICk7XG5cblx0XHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xuXHR9LFxuKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==