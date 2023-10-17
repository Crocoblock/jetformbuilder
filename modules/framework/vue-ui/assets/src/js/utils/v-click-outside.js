const CLICK = 'click';
const captureInstances = Object.create( null );
const nonCaptureInstances = Object.create( null );
const captureEventHandlers = Object.create( null );
const nonCaptureEventHandlers = Object.create( null );
const instancesList = [ captureInstances, nonCaptureInstances ];

/**
 * The common event handler for bot capture and non-capture events.
 *
 * @param {!object} context - The event context.
 * @param {!object} instances - The capture or non-capture registered instances.
 * @param {Event} event - The event object.
 * @param {string} arg - The event type.
 * @returns {undefined} Default.
 */
const commonHandler = function onCommonEvent(context, instances, event, arg) {
	const {target} = event;

	const itemIteratee = function itemIteratee(item) {
		const {el} = item;

		if (el !== target && !el.contains( target )) {
			const {binding} = item;

			if (binding.modifiers.stop) {
				event.stopPropagation();
			}

			if (binding.modifiers.prevent) {
				event.preventDefault();
			}

			binding.value.call( context, event );
		}
	};

	instances[ arg ].forEach( itemIteratee );
};

/**
 * Get the correct event handler: Capture or non-capture.
 *
 * @param {boolean} useCapture - Indicate which handler to use; 'true' to use
 *  capture handler or 'false' for non-capture.
 * @param {string} arg - The event type.
 * @returns {Function} - The event handler.
 */
const getEventHandler = function getEventHandler(useCapture, arg) {
	if (useCapture) {
		if (captureEventHandlers[ arg ]) {
			return captureEventHandlers[ arg ];
		}

		/**
		 * Event handler for capture events.
		 *
		 * @param {Event} event - The event object.
		 */
		captureEventHandlers[ arg ] = function onCaptureEvent(event) {
			commonHandler( this, captureInstances, event, arg );
		};

		return captureEventHandlers[ arg ];
	}

	if (nonCaptureEventHandlers[ arg ]) {
		return nonCaptureEventHandlers[ arg ];
	}

	/**
	 * Event handler for non-capture events.
	 *
	 * @param {Event} event - The event object.
	 */
	nonCaptureEventHandlers[ arg ] = function onNonCaptureEvent(event) {
		commonHandler( this, nonCaptureInstances, event, arg );
	};

	return nonCaptureEventHandlers[ arg ];
};

/**
 *
 * @type {{value: bindHandler.value}}
 */
const bindHandler = {
  value: function bind(el, binding) {
    if (typeof binding.value !== 'function') {
      throw new TypeError( 'Binding value must be a function.' );
    }

    const arg = binding.arg || CLICK;
    const normalisedBinding = {
      ...binding,
      ...{
        arg,
        modifiers: {
          ...{
            capture: false,
            prevent: false,
            stop: false,
          },
          ...binding.modifiers,
        },
      },
    };

    const useCapture = normalisedBinding.modifiers.capture;
    const instances = useCapture ? captureInstances : nonCaptureInstances;

    if (!Array.isArray( instances[ arg ] )) {
      instances[ arg ] = [];
    }

    if (instances[ arg ].push( {el, binding: normalisedBinding} ) === 1) {
      /* istanbul ignore next */
      if (typeof document === 'object' && document) {
        document.addEventListener( arg, getEventHandler( useCapture, arg ), useCapture );
      }
    }
  },
};

/**
 *
 * @type {{value: unBindHandler.value}}
 */
const unBindHandler = {
	value: function unbind(el) {
		const compareElements = function compareElements(item) {
			return item.el !== el;
		};

		const instancesIteratee = function instancesIteratee(instances) {
			const instanceKeys = Object.keys(instances);

			if (instanceKeys.length) {
				const useCapture = instances === captureInstances;

				const keysIteratee = function keysIteratee(eventName) {
					const newInstance = instances[eventName].filter(compareElements);

					if (newInstance.length) {
						instances[eventName] = newInstance;
					} else {
						/* istanbul ignore next */
						if (typeof document === 'object' && document) {
							document.removeEventListener(eventName, getEventHandler(useCapture, eventName), useCapture);
						}

						delete instances[eventName];
					}
				};

				instanceKeys.forEach(keysIteratee);
			}
		};

		instancesList.forEach(instancesIteratee);
	},
};

/**
 * The directive definition.
 * {@link https://vuejs.org/v2/guide/custom-directive.html|Custom directive}.
 *
 * @type {VClickOutsidePlugin.directive}
 * @property {!object} $captureInstances - Registered capture instances.
 * @property {!object} $nonCaptureInstances - Registered non-capture instances.
 * @property {Function} $_onCaptureEvent - Event handler for capture events.
 * @property {Function} $_onNonCaptureEvent - Event handler for non-capture events.
 * @property {Function} bind - Called only once, when the directive is first
 *  bound to the element.
 * @property {Function} unbind - Called only once, when the directive is unbound
 *  from the element.
 * @property {string} version - The version number of this release.
 */
export const clickOutsideDirective = Object.defineProperties(
	{},
	{
		$captureInstances: {
			value: captureInstances,
		},

		$nonCaptureInstances: {
			value: nonCaptureInstances,
		},

		$captureEventHandlers: {
			value: captureEventHandlers,
		},

		$nonCaptureEventHandlers: {
			value: nonCaptureEventHandlers,
		},

		bind: bindHandler,

		unbind: unBindHandler,

		beforeMount: bindHandler,

		unmounted: unBindHandler,

	},
);

/**
 * A Vue.js plugin should expose an install method. The method will be called
 * with the Vue constructor as the first argument, along with possible options.
 * {@link https://vuejs.org/v2/guide/plugins.html#Writing-a-Plugin|Writing a plugin}.
 *
 * @type {VClickOutsidePlugin.install}
 * @param {import("vue")} Vue - The Vue constructor.
 */
export function installOutsideDirective(Vue) {
	Vue.directive( 'click-outside', clickOutsideDirective );
}
