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
  return wp.apiFetch({
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
  let template = '<div class="jet-fb-map-field__preview">' + '<address class="jet-fb-map-field__position"></address>' + '<div class="jet-fb-map-field__reset" role="button">× ' + JetMapFieldsSettings.i18n.resetBtn + '</div>' + '</div>' + '<div class="jet-fb-map-field__frame" style="height: ' + this.input.fieldSettings.height + 'px; width: 100%;"></div>';

  // map field in repeater
  if (this.input.root.parent) {
    template += '<div class="jet-fb-map-field__description">' + '<p style="margin-bottom: 0;"><strong>' + JetMapFieldsSettings.i18n.descTitle + ':</strong> <i>' + this.input.fieldSettings.field_prefix + '_lat, ' + this.input.fieldSettings.field_prefix + '_lng</i></p>' + '</div>';
  }
  const container = this.input.nodes[0].parentElement;
  container.append(toHTML(template));
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
  this.removeMarker();
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJvbnRlbmQvbWFwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBUUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUVBOzs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFRQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FDcFVBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQ1BBOzs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFFQTtBQUNBO0FBR0E7QUFJQTtBQUVBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUdBO0FBSUE7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9tYXAuZmllbGQvTm90RW1wdHlNYXBSZXN0cmljdGlvbi5qcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL21hcC5maWVsZC9SZXF1aXJlZE1hcFJlc3RyaWN0aW9uLmpzIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkLy4vZnJvbnRlbmQvbWFwLmZpZWxkL2Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL21hcC5maWVsZC9pbnB1dC5qcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC8uL2Zyb250ZW5kL21hcC5maWVsZC9zaWduYWwuanMiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9tYXAuZmllbGQvaW5kZXgucGNzcyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC9leHRlcm5hbCB3aW5kb3cgW1wid3BcIixcImFwaUZldGNoXCJdIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qZmItZW5naW5lLW1hcC1maWVsZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2pmYi1lbmdpbmUtbWFwLWZpZWxkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamZiLWVuZ2luZS1tYXAtZmllbGQvLi9mcm9udGVuZC9tYXAuZmllbGQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge1xyXG5cdCAgICAgIE5vdEVtcHR5UmVzdHJpY3Rpb24gPSBmdW5jdGlvbiAoKSB7fSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyQWJzdHJhY3Q7XHJcblxyXG5jb25zdCB7XHJcblx0ICAgICAgaXNFbXB0eSxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gTm90RW1wdHlNYXBSZXN0cmljdGlvbigpIHtcclxuXHROb3RFbXB0eVJlc3RyaWN0aW9uLmNhbGwoIHRoaXMgKTtcclxufVxyXG5cclxuTm90RW1wdHlNYXBSZXN0cmljdGlvbi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFxyXG5cdE5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLFxyXG4pO1xyXG5cclxuTm90RW1wdHlNYXBSZXN0cmljdGlvbi5wcm90b3R5cGUuaXNTdXBwb3J0ZWQgPSBmdW5jdGlvbiAoIG5vZGUsIHJlcG9ydGluZyApIHtcclxuXHRyZXR1cm4gKFxyXG5cdFx0Tm90RW1wdHlSZXN0cmljdGlvbi5wcm90b3R5cGU/LmlzU3VwcG9ydGVkPy5jYWxsPy4oXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdG5vZGUsXHJcblx0XHRcdHJlcG9ydGluZyxcclxuXHRcdCkgJiZcclxuXHRcdCdtYXAnID09PSByZXBvcnRpbmcuaW5wdXQuaW5wdXRUeXBlXHJcblx0KTtcclxufTtcclxuXHJcbk5vdEVtcHR5TWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFsgbWFpbklucHV0IF0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5ub2RlcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdE5vdEVtcHR5UmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwoIHRoaXMgKSAmJlxyXG5cdFx0IWlzRW1wdHkoIG1haW5JbnB1dC52YWx1ZSApXHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vdEVtcHR5TWFwUmVzdHJpY3Rpb247IiwiY29uc3Qge1xyXG5cdCAgICAgIFJlcXVpcmVkUmVzdHJpY3Rpb24sXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckFic3RyYWN0O1xyXG5cclxuY29uc3Qge1xyXG5cdCAgICAgIGlzRW1wdHksXHJcbiAgICAgIH0gPSBKZXRGb3JtQnVpbGRlckZ1bmN0aW9ucztcclxuXHJcbmZ1bmN0aW9uIFJlcXVpcmVkTWFwUmVzdHJpY3Rpb24oKSB7XHJcblx0UmVxdWlyZWRSZXN0cmljdGlvbi5jYWxsKCB0aGlzICk7XHJcbn1cclxuXHJcblJlcXVpcmVkTWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShcclxuXHRSZXF1aXJlZFJlc3RyaWN0aW9uLnByb3RvdHlwZSxcclxuKTtcclxuXHJcblJlcXVpcmVkTWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlLCByZXBvcnRpbmcgKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdFJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLmlzU3VwcG9ydGVkLmNhbGwoXHJcblx0XHRcdHRoaXMsXHJcblx0XHRcdG5vZGUsXHJcblx0XHRcdHJlcG9ydGluZyxcclxuXHRcdCkgJiZcclxuXHRcdCdtYXAnID09PSByZXBvcnRpbmcuaW5wdXQuaW5wdXRUeXBlXHJcblx0KTtcclxufTtcclxuXHJcblJlcXVpcmVkTWFwUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFsgbWFpbklucHV0IF0gPSB0aGlzLnJlcG9ydGluZy5pbnB1dC5ub2RlcztcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdFJlcXVpcmVkUmVzdHJpY3Rpb24ucHJvdG90eXBlLnZhbGlkYXRlLmNhbGwoIHRoaXMgKSAmJlxyXG5cdFx0ISBpc0VtcHR5KCBtYWluSW5wdXQudmFsdWUgKVxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXF1aXJlZE1hcFJlc3RyaWN0aW9uOyIsImZ1bmN0aW9uIGlzTWFwRmllbGQoIG5vZGUgKSB7XHJcblx0cmV0dXJuIG5vZGUucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoICdqZXQtZmItbWFwLWZpZWxkJyApO1xyXG59XHJcblxyXG5sZXQgcHJvdmlkZXIgPSBmYWxzZTtcclxuXHJcbi8qKlxyXG4gKiBAcmV0dXJucyB7V2luZG93LkpldEVuZ2luZU1hcHNQcm92aWRlcn1cclxuICovXHJcbmZ1bmN0aW9uIGdldFByb3ZpZGVyKCkge1xyXG5cdGlmICggZmFsc2UgPT09IHByb3ZpZGVyICkge1xyXG5cdFx0cHJvdmlkZXIgPSBuZXcgd2luZG93LkpldEVuZ2luZU1hcHNQcm92aWRlcigpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHByb3ZpZGVyO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc01hcEZpZWxkLCBnZXRQcm92aWRlciB9OyIsImltcG9ydCB7IGlzTWFwRmllbGQgfSBmcm9tICcuL2Z1bmN0aW9ucyc7XHJcblxyXG5jb25zdCB7IElucHV0RGF0YSB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuXHJcbi8qKlxyXG4gKiBAcHJvcGVydHkge1NpZ25hbE1hcEZpZWxkfSBjYWxsYWJsZVxyXG4gKlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmZ1bmN0aW9uIE1hcEZpZWxkRGF0YSgpIHtcclxuXHRJbnB1dERhdGEuY2FsbCggdGhpcyApO1xyXG5cclxuXHR0aGlzLmlzU3VwcG9ydGVkID0gZnVuY3Rpb24gKCBub2RlICkge1xyXG5cdFx0cmV0dXJuIGlzTWFwRmllbGQoIG5vZGUgKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBAcGFyYW0gbm9kZSB7SFRNTElucHV0RWxlbWVudH1cclxuXHQgKi9cclxuXHR0aGlzLnNldE5vZGUgPSBmdW5jdGlvbiAoIG5vZGUgKSB7XHJcblx0XHRJbnB1dERhdGEucHJvdG90eXBlLnNldE5vZGUuY2FsbCggdGhpcywgbm9kZSApO1xyXG5cdFx0Y29uc3QgY29udGFpbmVyID0gbm9kZS5wYXJlbnRFbGVtZW50O1xyXG5cclxuXHRcdHRoaXMubm9kZXMucHVzaChcclxuXHRcdFx0Y29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoICdbZGF0YS1tYXAtZmllbGQ9XCJoYXNoXCJdJyApLFxyXG5cdFx0XHRjb250YWluZXIucXVlcnlTZWxlY3RvciggJ1tkYXRhLW1hcC1maWVsZD1cImxhdFwiXScgKSxcclxuXHRcdFx0Y29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoICdbZGF0YS1tYXAtZmllbGQ9XCJsbmdcIl0nICksXHJcblx0XHQpO1xyXG5cclxuXHRcdHRoaXMuZmllbGRTZXR0aW5ncyAgICAgID0ge1xyXG5cdFx0XHQuLi50aGlzLmZpZWxkU2V0dGluZ3MsXHJcblx0XHRcdC4uLkpTT04ucGFyc2UoIG5vZGUuZGF0YXNldC5zZXR0aW5ncyApLFxyXG5cdFx0fTtcclxuXHRcdHRoaXMuZmllbGRTZXR0aW5ncy56b29tID0gK3RoaXMuZmllbGRTZXR0aW5ncy56b29tO1xyXG5cclxuXHRcdHRoaXMuaW5wdXRUeXBlID0gJ21hcCc7XHJcblx0fTtcclxuXHJcblx0dGhpcy5zZXRWYWx1ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNvbnN0IFsgbm9kZSBdID0gdGhpcy5ub2RlcztcclxuXHJcblx0XHRpZiAoICFub2RlLnZhbHVlICkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3QgZ2V0Q29vcmRzRnJvbVN0cmluZyA9IHZhbHVlID0+IHtcclxuXHRcdFx0Y29uc3QgdmFsdWVQYXJ0cyA9IHZhbHVlLnNwbGl0KCAnLCcgKSxcclxuXHRcdFx0ICAgICAgbGF0TnVtICAgICA9IE51bWJlciggdmFsdWVQYXJ0c1sgMCBdICksXHJcblx0XHRcdCAgICAgIGxuZ051bSAgICAgPSBOdW1iZXIoIHZhbHVlUGFydHNbIDEgXSApO1xyXG5cclxuXHRcdFx0aWYgKCAyICE9PSB2YWx1ZVBhcnRzLmxlbmd0aCB8fFxyXG5cdFx0XHRcdE51bWJlci5pc05hTiggbGF0TnVtICkgfHxcclxuXHRcdFx0XHROdW1iZXIuaXNOYU4oIGxuZ051bSApXHJcblx0XHRcdCkge1xyXG5cdFx0XHRcdHJldHVybiB7fTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRsYXQ6IGxhdE51bSxcclxuXHRcdFx0XHRsbmc6IGxuZ051bSxcclxuXHRcdFx0fTtcclxuXHRcdH07XHJcblxyXG5cdFx0c3dpdGNoICggdGhpcy5maWVsZFNldHRpbmdzLmZvcm1hdCApIHtcclxuXHRcdFx0Y2FzZSAnbG9jYXRpb25fc3RyaW5nJzpcclxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBnZXRDb29yZHNGcm9tU3RyaW5nKCBub2RlLnZhbHVlICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvY2F0aW9uX2FkZHJlc3MnOlxyXG5cdFx0XHRcdGNvbnN0IFsgbWFpbiwgaGFzaCwgbGF0LCBsbmcgXSA9IHRoaXMubm9kZXM7XHJcblxyXG5cdFx0XHRcdGlmICggIWxhdD8udmFsdWUgfHwgIWxuZz8udmFsdWUgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSB7XHJcblx0XHRcdFx0XHRsYXQ6IE51bWJlciggbGF0LnZhbHVlICksXHJcblx0XHRcdFx0XHRsbmc6IE51bWJlciggbG5nPy52YWx1ZSApLFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvY2F0aW9uX2FycmF5JzpcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0dGhpcy52YWx1ZS5jdXJyZW50ID0gSlNPTi5wYXJzZSggbm9kZS52YWx1ZSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoIGVycm9yICkge1xyXG5cdFx0XHRcdFx0Ly8gZm9yIGNhc2UsIHdoZW4gd2UgdXNlZCBpbmxpbmUgcHJlc2V0XHJcblx0XHRcdFx0XHR0aGlzLnZhbHVlLmN1cnJlbnQgPSBnZXRDb29yZHNGcm9tU3RyaW5nKCBub2RlLnZhbHVlICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHRoaXMubWFrZVJlYWN0aXZlID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0SW5wdXREYXRhLnByb3RvdHlwZS5tYWtlUmVhY3RpdmUuY2FsbCggdGhpcyApO1xyXG5cclxuXHRcdC8vIGRpc2FibGUgYXJpYSBhdHRyaWJ1dGVzXHJcblx0XHR0aGlzLnJlcG9ydGluZy5tYWtlSW52YWxpZCA9ICgpID0+IHt9O1xyXG5cdFx0dGhpcy5yZXBvcnRpbmcubWFrZVZhbGlkICAgPSAoKSA9PiB7fTtcclxuXHJcblx0XHRjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlciggKCBlbnRyaWVzLCBvYnNlcnZlciApID0+IHtcclxuXHJcblx0XHRcdGVudHJpZXMuZm9yRWFjaCggKCBlbnRyeSApID0+IHtcclxuXHRcdFx0XHRpZiAoICFlbnRyeS5pc0ludGVyc2VjdGluZyApIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FsbGFibGUucmVuZGVyKCk7XHJcblx0XHRcdFx0dGhpcy5zaWxlbmNlTm90aWZ5KCk7XHJcblxyXG5cdFx0XHRcdC8vIERldGFjaCBvYnNlcnZlciBhZnRlciB0aGUgZmlyc3QgcmVuZGVyIHRoZSBtYXBcclxuXHRcdFx0XHRvYnNlcnZlci51bm9ic2VydmUoIGVudHJ5LnRhcmdldCApO1xyXG5cdFx0XHR9ICk7XHJcblx0XHR9ICk7XHJcblxyXG5cdFx0b2JzZXJ2ZXIub2JzZXJ2ZSggdGhpcy5ub2Rlc1sgMCBdLnBhcmVudEVsZW1lbnQgKTtcclxuXHR9O1xyXG5cclxuXHR0aGlzLmhhc0F1dG9TY3JvbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fTtcclxufVxyXG5cclxuTWFwRmllbGREYXRhLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIElucHV0RGF0YS5wcm90b3R5cGUgKTtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcHJvcGVydHkgeydsb2NhdGlvbl9zdHJpbmcnfCdsb2NhdGlvbl9hZGRyZXNzJ3wnbG9jYXRpb25fYXJyYXknfSBmb3JtYXRcclxuICovXHJcbk1hcEZpZWxkRGF0YS5wcm90b3R5cGUuZmllbGRTZXR0aW5ncyA9IHtcclxuXHRoZWlnaHQ6ICczMDAnLFxyXG5cdGZvcm1hdDogJ2xvY2F0aW9uX3N0cmluZycsXHJcblx0ZmllbGRfcHJlZml4OiBmYWxzZSxcclxuXHR6b29tOiAxNCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1hcEZpZWxkRGF0YTsiLCJpbXBvcnQgeyBnZXRQcm92aWRlciwgaXNNYXBGaWVsZCB9IGZyb20gJy4vZnVuY3Rpb25zJztcclxuaW1wb3J0IGFwaUZldGNoIGZyb20gJ0B3b3JkcHJlc3MvYXBpLWZldGNoJztcclxuXHJcbmNvbnN0IHtcclxuXHQgICAgICBCYXNlU2lnbmFsLFxyXG4gICAgICB9ID0gSmV0Rm9ybUJ1aWxkZXJBYnN0cmFjdDtcclxuY29uc3Qge1xyXG5cdCAgICAgIHRvSFRNTCxcclxuICAgICAgfSA9IEpldEZvcm1CdWlsZGVyRnVuY3Rpb25zO1xyXG5cclxuZnVuY3Rpb24gU2lnbmFsTWFwRmllbGQoKSB7XHJcblx0QmFzZVNpZ25hbC5jYWxsKCB0aGlzICk7XHJcblxyXG5cdHRoaXMubG9jay5jdXJyZW50ID0gdHJ1ZTtcclxuXHJcblx0dGhpcy5tYXAgICAgICA9IG51bGw7XHJcblx0dGhpcy5tYXJrZXIgICA9IG51bGw7XHJcblx0dGhpcy5tYXBGcmFtZSA9IG51bGw7XHJcblx0dGhpcy5wb3NpdGlvbiA9IG51bGw7XHJcblx0dGhpcy5wcmV2aWV3ICA9IG51bGw7XHJcblxyXG5cdHRoaXMubWFya2VyRGVmYXVsdHMgPSB7XHJcblx0XHQuLi5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUubWFya2VyRGVmYXVsdHMsXHJcblx0fTtcclxuXHJcblx0dGhpcy5pc1N1cHBvcnRlZCA9IGZ1bmN0aW9uICggbm9kZSwgaW5wdXQgKSB7XHJcblx0XHRyZXR1cm4gaXNNYXBGaWVsZCggbm9kZSApO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucnVuU2lnbmFsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0bGV0IGxvY2F0aW9uO1xyXG5cdFx0Y29uc3QgeyBjdXJyZW50OiBwb3NpdGlvbiB9ID0gdGhpcy5pbnB1dC52YWx1ZTtcclxuXHJcblx0XHRpZiAoICFwb3NpdGlvbiB8fCAhT2JqZWN0LmtleXMoIHBvc2l0aW9uICkubGVuZ3RoICkge1xyXG5cdFx0XHR0aGlzLnJlbW92ZU1hcmtlcigpO1xyXG5cclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGNvbnN0IFsgbWFpbiwgaGFzaCwgbGF0LCBsbmcgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdFx0dGhpcy5zZXRQcmV2aWV3KCBKZXRNYXBGaWVsZHNTZXR0aW5ncy5pMThuLmxvYWRpbmcgKTtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL0Nyb2NvYmxvY2svaXNzdWVzLXRyYWNrZXIvaXNzdWVzLzMxNThcclxuXHRcdCAqL1xyXG5cdFx0Y29uc3Qgb25FbmRSZXF1ZXN0ID0gKCkgPT4ge1xyXG5cdFx0XHR0aGlzLmlucHV0LnJlcG9ydGluZy52YWx1ZVByZXYgPSBudWxsO1xyXG5cdFx0XHR0aGlzLmlucHV0LnJlcG9ydCgpO1xyXG5cdFx0XHR0aGlzLmlucHV0LmxvYWRpbmcuZW5kKCk7XHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMuaW5wdXQubG9hZGluZy5zdGFydCgpO1xyXG5cclxuXHRcdHN3aXRjaCAoIHRoaXMuaW5wdXQuZmllbGRTZXR0aW5ncy5mb3JtYXQgKSB7XHJcblx0XHRcdGNhc2UgJ2xvY2F0aW9uX3N0cmluZyc6XHJcblxyXG5cdFx0XHRcdGxvY2F0aW9uID0gcG9zaXRpb24ubGF0ICsgJywnICsgcG9zaXRpb24ubG5nO1xyXG5cclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUhhc2hGaWVsZFByb21pc2UoIGxvY2F0aW9uICkudGhlbiggKCkgPT4ge1xyXG5cdFx0XHRcdFx0bWFpbi52YWx1ZSA9IGxvY2F0aW9uO1xyXG5cdFx0XHRcdFx0dGhpcy5zZXRQcmV2aWV3KCBwb3NpdGlvbiApO1xyXG5cdFx0XHRcdH0gKS5maW5hbGx5KCBvbkVuZFJlcXVlc3QgKTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdsb2NhdGlvbl9hcnJheSc6XHJcblxyXG5cdFx0XHRcdGxvY2F0aW9uID0gSlNPTi5zdHJpbmdpZnkoIHBvc2l0aW9uICk7XHJcblxyXG5cdFx0XHRcdHRoaXMudXBkYXRlSGFzaEZpZWxkUHJvbWlzZSggbG9jYXRpb24gKS50aGVuKCAoKSA9PiB7XHJcblx0XHRcdFx0XHRtYWluLnZhbHVlID0gbG9jYXRpb247XHJcblx0XHRcdFx0XHR0aGlzLnNldFByZXZpZXcoIHBvc2l0aW9uICk7XHJcblx0XHRcdFx0fSApLmZpbmFsbHkoIG9uRW5kUmVxdWVzdCApO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2xvY2F0aW9uX2FkZHJlc3MnOlxyXG5cclxuXHRcdFx0XHRhcGlGZXRjaCgge1xyXG5cdFx0XHRcdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdFx0XHRcdHBhdGg6IEpldE1hcEZpZWxkc1NldHRpbmdzLmFwaSArICc/bGF0PScgKyBwb3NpdGlvbi5sYXQgK1xyXG5cdFx0XHRcdFx0XHQnJmxuZz0nICsgcG9zaXRpb24ubG5nLFxyXG5cdFx0XHRcdFx0aGVhZGVyczoge1xyXG5cdFx0XHRcdFx0XHQnbm9uY2UnOiBKZXRNYXBGaWVsZHNTZXR0aW5ncy5ub25jZSxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSApLnRoZW4oICggcmVzcG9uc2UgKSA9PiB7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCByZXNwb25zZS5zdWNjZXNzICkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIHJlc3BvbnNlLmRhdGEgKSB7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRoaXMudXBkYXRlSGFzaEZpZWxkUHJvbWlzZSggcmVzcG9uc2UuZGF0YSApLlxyXG5cdFx0XHRcdFx0XHRcdFx0dGhlbiggKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtYWluLnZhbHVlID0gcmVzcG9uc2UuZGF0YTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5zZXRQcmV2aWV3KCByZXNwb25zZS5kYXRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0fSApLmZpbmFsbHkoIG9uRW5kUmVxdWVzdCApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdG1haW4udmFsdWUgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc2V0UHJldmlldyhcclxuXHRcdFx0XHRcdFx0XHRcdEpldE1hcEZpZWxkc1NldHRpbmdzLmkxOG4ubm90Rm91bmQsXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRvbkVuZFJlcXVlc3QoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRtYWluLnZhbHVlID0gbnVsbDtcclxuXHRcdFx0XHRcdFx0dGhpcy5zZXRQcmV2aWV3KCByZXNwb25zZS5odG1sICk7XHJcblx0XHRcdFx0XHRcdG9uRW5kUmVxdWVzdCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9ICkuY2F0Y2goIGZ1bmN0aW9uICggZSApIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCBlICk7XHJcblx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGxhdCApIHtcclxuXHRcdFx0bGF0LnZhbHVlID0gcG9zaXRpb24ubGF0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggbG5nICkge1xyXG5cdFx0XHRsbmcudmFsdWUgPSBwb3NpdGlvbi5sbmc7XHJcblx0XHR9XHJcblx0fTtcclxufVxyXG5cclxuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQmFzZVNpZ25hbC5wcm90b3R5cGUgKTtcclxuLyoqXHJcbiAqIEB0eXBlIHtudWxsfVxyXG4gKi9cclxuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLm1hcCA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7bnVsbH1cclxuICovXHJcblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5tYXJrZXIgPSBudWxsO1xyXG4vKipcclxuICogQHR5cGUge251bGx9XHJcbiAqL1xyXG5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUucHJldmlldyA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7bnVsbH1cclxuICovXHJcblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5wb3NpdGlvbiA9IG51bGw7XHJcbi8qKlxyXG4gKiBAdHlwZSB7bnVsbH1cclxuICovXHJcblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5tYXBGcmFtZSA9IG51bGw7XHJcblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5tYXBEZWZhdWx0cyAgICA9IHtcclxuXHRjZW50ZXI6IHtcclxuXHRcdGxhdDogNDEsXHJcblx0XHRsbmc6IDcxLFxyXG5cdH0sXHJcblx0em9vbTogMSxcclxufTtcclxuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLm1hcmtlckRlZmF1bHRzID0ge1xyXG5cdGNvbnRlbnQ6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjM2XCIgaGVpZ2h0PVwiMzZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAwYy00LjE5OCAwLTggMy40MDMtOCA3LjYwMiAwIDQuMTk4IDMuNDY5IDkuMjEgOCAxNi4zOTggNC41MzEtNy4xODggOC0xMi4yIDgtMTYuMzk4IDAtNC4xOTktMy44MDEtNy42MDItOC03LjYwMnptMCAxMWMtMS42NTcgMC0zLTEuMzQzLTMtM3MxLjM0My0zIDMtMyAzIDEuMzQzIDMgMy0xLjM0MyAzLTMgM3pcIiBmaWxsPVwiI0M5MkMyQ1wiLz48L3N2Zz4nLFxyXG5cdHNoYWRvdzogZmFsc2UsXHJcbn07XHJcblxyXG5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUucmVtb3ZlTWFya2VyID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFsgbWFpbiwgaGFzaCwgbGF0LCBsbmcgXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdGlmICggdGhpcy5tYXJrZXIgKSB7XHJcblx0XHRnZXRQcm92aWRlcigpLnJlbW92ZU1hcmtlciggdGhpcy5tYXJrZXIgKTtcclxuXHR9XHJcblxyXG5cdHRoaXMuc2V0UHJldmlldyggbnVsbCApO1xyXG5cdG1haW4udmFsdWUgPSBudWxsO1xyXG5cclxuXHRpZiAoIGxhdCApIHtcclxuXHRcdGxhdC52YWx1ZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRpZiAoIGxuZyApIHtcclxuXHRcdGxuZy52YWx1ZSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRpZiAoIGhhc2ggKSB7XHJcblx0XHRoYXNoLnZhbHVlID0gbnVsbDtcclxuXHR9XHJcblxyXG59O1xyXG5cclxuU2lnbmFsTWFwRmllbGQucHJvdG90eXBlLnNldFByZXZpZXcgPSBmdW5jdGlvbiAoIHBvc2l0aW9uICkge1xyXG5cdGxldCBwb3NpdGlvblRleHQ7XHJcblxyXG5cdGlmICggcG9zaXRpb24gJiYgcG9zaXRpb24ubGF0ICYmIHBvc2l0aW9uLmxuZyApIHtcclxuXHRcdHBvc2l0aW9uVGV4dCA9ICc8c3BhbiB0aXRsZT1cIkxhdFwiPicgKyBwb3NpdGlvbi5sYXQgK1xyXG5cdFx0XHQnPC9zcGFuPiwgPHNwYW4gdGl0bGU9XCJMbmdcIj4nICsgcG9zaXRpb24ubG5nICsgJzwvc3Bhbj4nO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdHBvc2l0aW9uVGV4dCA9IHBvc2l0aW9uO1xyXG5cdH1cclxuXHJcblx0dGhpcy5wb3NpdGlvbi5pbm5lckhUTUwgICAgPSBwb3NpdGlvblRleHQ7XHJcblx0dGhpcy5wcmV2aWV3LnN0eWxlLmRpc3BsYXkgPSBwb3NpdGlvbiA/ICdmbGV4JyA6ICdub25lJztcclxufTtcclxuXHJcblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS51cGRhdGVIYXNoRmllbGRQcm9taXNlID0gZnVuY3Rpb24gKCBsb2NhdGlvbiApIHtcclxuXHRjb25zdCBbIG1haW4sIGhhc2ggXSA9IHRoaXMuaW5wdXQubm9kZXM7XHJcblxyXG5cdGlmICggIWhhc2ggKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIGZ1bmN0aW9uICggcmVzb2x2ZSApIHtcclxuXHRcdFx0cmVzb2x2ZSgpO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHdwLmFwaUZldGNoKCB7XHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGF0aDogSmV0TWFwRmllbGRzU2V0dGluZ3MuYXBpSGFzaCArICc/bG9jPScgKyBsb2NhdGlvbixcclxuXHRcdGhlYWRlcnM6IHtcclxuXHRcdFx0J25vbmNlJzogSmV0TWFwRmllbGRzU2V0dGluZ3Mubm9uY2UsXHJcblx0XHR9LFxyXG5cdH0gKS50aGVuKCByZXNwb25zZSA9PiB7XHJcblx0XHRpZiAoIHJlc3BvbnNlLnN1Y2Nlc3MgKSB7XHJcblx0XHRcdGhhc2gudmFsdWUgPSByZXNwb25zZS5kYXRhO1xyXG5cdFx0fVxyXG5cdH0gKS5jYXRjaCggZnVuY3Rpb24gKCBlICkge1xyXG5cdFx0Y29uc29sZS5sb2coIGUgKTtcclxuXHR9ICk7XHJcbn07XHJcblxyXG5TaWduYWxNYXBGaWVsZC5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gKCkge1xyXG5cdGxldCB0ZW1wbGF0ZSA9ICc8ZGl2IGNsYXNzPVwiamV0LWZiLW1hcC1maWVsZF9fcHJldmlld1wiPicgK1xyXG5cdFx0JzxhZGRyZXNzIGNsYXNzPVwiamV0LWZiLW1hcC1maWVsZF9fcG9zaXRpb25cIj48L2FkZHJlc3M+JyArXHJcblx0XHQnPGRpdiBjbGFzcz1cImpldC1mYi1tYXAtZmllbGRfX3Jlc2V0XCIgcm9sZT1cImJ1dHRvblwiPsOXICcgK1xyXG5cdFx0SmV0TWFwRmllbGRzU2V0dGluZ3MuaTE4bi5yZXNldEJ0biArICc8L2Rpdj4nICtcclxuXHRcdCc8L2Rpdj4nICtcclxuXHRcdCc8ZGl2IGNsYXNzPVwiamV0LWZiLW1hcC1maWVsZF9fZnJhbWVcIiBzdHlsZT1cImhlaWdodDogJyArXHJcblx0XHR0aGlzLmlucHV0LmZpZWxkU2V0dGluZ3MuaGVpZ2h0ICsgJ3B4OyB3aWR0aDogMTAwJTtcIj48L2Rpdj4nO1xyXG5cclxuXHQvLyBtYXAgZmllbGQgaW4gcmVwZWF0ZXJcclxuXHRpZiAoIHRoaXMuaW5wdXQucm9vdC5wYXJlbnQgKSB7XHJcblx0XHR0ZW1wbGF0ZSArPSAnPGRpdiBjbGFzcz1cImpldC1mYi1tYXAtZmllbGRfX2Rlc2NyaXB0aW9uXCI+JyArXHJcblx0XHRcdCc8cCBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDA7XCI+PHN0cm9uZz4nICtcclxuXHRcdFx0SmV0TWFwRmllbGRzU2V0dGluZ3MuaTE4bi5kZXNjVGl0bGUgKyAnOjwvc3Ryb25nPiA8aT4nICtcclxuXHRcdFx0dGhpcy5pbnB1dC5maWVsZFNldHRpbmdzLmZpZWxkX3ByZWZpeCArICdfbGF0LCAnICtcclxuXHRcdFx0dGhpcy5pbnB1dC5maWVsZFNldHRpbmdzLmZpZWxkX3ByZWZpeCArICdfbG5nPC9pPjwvcD4nICtcclxuXHRcdFx0JzwvZGl2Pic7XHJcblx0fVxyXG5cclxuXHRjb25zdCBjb250YWluZXIgPSB0aGlzLmlucHV0Lm5vZGVzWyAwIF0ucGFyZW50RWxlbWVudDtcclxuXHJcblx0Y29udGFpbmVyLmFwcGVuZCggdG9IVE1MKCB0ZW1wbGF0ZSApICk7XHJcblxyXG5cdHRoaXMucHJldmlldyAgPSBjb250YWluZXIucXVlcnlTZWxlY3RvciggJy5qZXQtZmItbWFwLWZpZWxkX19wcmV2aWV3JyApO1xyXG5cdHRoaXMucG9zaXRpb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvciggJy5qZXQtZmItbWFwLWZpZWxkX19wb3NpdGlvbicgKTtcclxuXHR0aGlzLm1hcEZyYW1lID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoICcuamV0LWZiLW1hcC1maWVsZF9fZnJhbWUnICk7XHJcblxyXG5cdGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXIoKTtcclxuXHJcblx0aWYgKCBudWxsICE9PSB0aGlzLmlucHV0LnZhbHVlLmN1cnJlbnQgKSB7XHJcblx0XHR0aGlzLm1hcERlZmF1bHRzID0ge1xyXG5cdFx0XHQuLi50aGlzLm1hcERlZmF1bHRzLFxyXG5cdFx0XHRjZW50ZXI6IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCxcclxuXHRcdFx0em9vbTogdGhpcy5pbnB1dC5maWVsZFNldHRpbmdzLnpvb20sXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dGhpcy5tYXAgPSBwcm92aWRlci5pbml0TWFwKCB0aGlzLm1hcEZyYW1lLCB0aGlzLm1hcERlZmF1bHRzICk7XHJcblxyXG5cdGlmICggbnVsbCAhPT0gdGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ICkge1xyXG5cdFx0dGhpcy5tYXJrZXIgPSBwcm92aWRlci5hZGRNYXJrZXIoIHtcclxuXHRcdFx0Li4udGhpcy5tYXJrZXJEZWZhdWx0cyxcclxuXHRcdFx0cG9zaXRpb246IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCxcclxuXHRcdFx0bWFwOiB0aGlzLm1hcCxcclxuXHRcdH0gKTtcclxuXHR9XHJcblxyXG5cdHByb3ZpZGVyLm1hcmtlck9uQ2xpY2soIHRoaXMubWFwLCB0aGlzLm1hcmtlckRlZmF1bHRzLCAoIG1hcmtlciApID0+IHtcclxuXHJcblx0XHRpZiAoIHRoaXMubWFya2VyICkge1xyXG5cdFx0XHRwcm92aWRlci5yZW1vdmVNYXJrZXIoIHRoaXMubWFya2VyICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5tYXJrZXIgPSBtYXJrZXI7XHJcblxyXG5cdFx0dGhpcy5pbnB1dC52YWx1ZS5jdXJyZW50ID0gcHJvdmlkZXIuZ2V0TWFya2VyUG9zaXRpb24oIG1hcmtlciwgdHJ1ZSApO1xyXG5cdH0gKTtcclxuXHJcblx0Y29uc3QgcmVzZXRCdG4gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcclxuXHRcdCcuamV0LWZiLW1hcC1maWVsZF9fcmVzZXQnLFxyXG5cdCk7XHJcblxyXG5cdHJlc2V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsICgpID0+IHtcclxuXHRcdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IG51bGw7XHJcblx0fSApO1xyXG5cclxuXHQvLyBhbGxvdyB0byBydW4gc2lnbmFsXHJcblx0dGhpcy5sb2NrLmN1cnJlbnQgPSBmYWxzZTtcclxufTtcclxuXHJcblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5zZXRNYXJrZXIgPSBmdW5jdGlvbiAoIHsgbGF0LCBsbmcgfSApIHtcclxuXHRsYXQgPSBOdW1iZXIoIGxhdCApO1xyXG5cdGxuZyA9IE51bWJlciggbG5nICk7XHJcblxyXG5cdHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCA9IHsgbGF0LCBsbmcgfTtcclxuXHJcblx0Y29uc3QgcHJvdmlkZXIgPSBnZXRQcm92aWRlcigpO1xyXG5cclxuXHR0aGlzLnJlbW92ZU1hcmtlcigpO1xyXG5cdHRoaXMubWFya2VyID0gcHJvdmlkZXIuYWRkTWFya2VyKCB7XHJcblx0XHQuLi50aGlzLm1hcmtlckRlZmF1bHRzLFxyXG5cdFx0cG9zaXRpb246IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCxcclxuXHRcdG1hcDogdGhpcy5tYXAsXHJcblx0fSApO1xyXG5cclxuXHR0aGlzLnNldENlbnRlckJ5UG9zaXRpb24oKTtcclxufTtcclxuXHJcblNpZ25hbE1hcEZpZWxkLnByb3RvdHlwZS5zZXRDZW50ZXJCeVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IHByb3ZpZGVyID0gZ2V0UHJvdmlkZXIoKTtcclxuXHJcblx0cHJvdmlkZXIuc2V0Q2VudGVyQnlQb3NpdGlvbigge1xyXG5cdFx0cG9zaXRpb246IHRoaXMuaW5wdXQudmFsdWUuY3VycmVudCxcclxuXHRcdG1hcDogdGhpcy5tYXAsXHJcblx0XHR6b29tOiAxMixcclxuXHR9ICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWduYWxNYXBGaWVsZDsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvd1tcIndwXCJdW1wiYXBpRmV0Y2hcIl07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBNYXBGaWVsZERhdGEgZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCBTaWduYWxNYXBGaWVsZCBmcm9tICcuL3NpZ25hbCc7XHJcbmltcG9ydCBOb3RFbXB0eU1hcFJlc3RyaWN0aW9uIGZyb20gJy4vTm90RW1wdHlNYXBSZXN0cmljdGlvbic7XHJcbmltcG9ydCBSZXF1aXJlZE1hcFJlc3RyaWN0aW9uIGZyb20gJy4vUmVxdWlyZWRNYXBSZXN0cmljdGlvbic7XHJcbmltcG9ydCAnLi9pbmRleC5wY3NzJztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSBKZXRQbHVnaW5zLmhvb2tzO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIuaW5wdXRzJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tYXAtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggaW5wdXRzICkge1xyXG5cdFx0aW5wdXRzID0gWyBNYXBGaWVsZERhdGEsIC4uLmlucHV0cyBdO1xyXG5cclxuXHRcdHJldHVybiBpbnB1dHM7XHJcblx0fSxcclxuKTtcclxuXHJcbmFkZEZpbHRlcihcclxuXHQnamV0LmZiLnNpZ25hbHMnLFxyXG5cdCdqZXQtZm9ybS1idWlsZGVyL21hcC1maWVsZCcsXHJcblx0ZnVuY3Rpb24gKCBzaWduYWxzICkge1xyXG5cdFx0c2lnbmFscyA9IFsgU2lnbmFsTWFwRmllbGQsIC4uLnNpZ25hbHMgXTtcclxuXHJcblx0XHRyZXR1cm4gc2lnbmFscztcclxuXHR9LFxyXG4pO1xyXG5cclxuYWRkRmlsdGVyKFxyXG5cdCdqZXQuZmIucmVzdHJpY3Rpb25zJyxcclxuXHQnamV0LWZvcm0tYnVpbGRlci9tYXAtZmllbGQnLFxyXG5cdGZ1bmN0aW9uICggcmVzdHJpY3Rpb25zICkge1xyXG5cdFx0cmVzdHJpY3Rpb25zLnB1c2goIE5vdEVtcHR5TWFwUmVzdHJpY3Rpb24gKTtcclxuXHJcblx0XHRyZXR1cm4gcmVzdHJpY3Rpb25zO1xyXG5cdH0sXHJcbik7XHJcblxyXG5hZGRGaWx0ZXIoXHJcblx0J2pldC5mYi5yZXN0cmljdGlvbnMuZGVmYXVsdCcsXHJcblx0J2pldC1mb3JtLWJ1aWxkZXIvbWFwLWZpZWxkJyxcclxuXHRmdW5jdGlvbiAoIHJlc3RyaWN0aW9ucyApIHtcclxuXHRcdHJlc3RyaWN0aW9ucy5wdXNoKCBSZXF1aXJlZE1hcFJlc3RyaWN0aW9uICk7XHJcblxyXG5cdFx0cmV0dXJuIHJlc3RyaWN0aW9ucztcclxuXHR9LFxyXG4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=