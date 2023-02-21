import ReactiveVar from '../reactive/ReactiveVar';

function BaseSignal() {
	this.input = null;
	this.lock  = new ReactiveVar();
	this.lock.make();

	this.triggerjQuery = true;
}

BaseSignal.prototype = {
	/**
	 * @type {InputData}
	 */
	input: null,
	/**
	 * @type {ReactiveVar}
	 */
	lock: null,
	/**
	 * @param node {HTMLElement}
	 * @param inputData {InputData}
	 * @returns {boolean}
	 */
	isSupported: function ( node, inputData ) {
		return false;
	},
	setInput: function ( input ) {
		this.input = input;
	},
	run: function ( prevValue ) {
		if ( !this.lock.current ) {
			this.runSignal( prevValue );
			this.unlockTrigger();

			return;
		}

		if ( !this.lock.signals.length ) {
			this.lock.watchOnce( () => this.runSignal( prevValue ) );
		}
	},
	triggerJQuery( node ) {
		if ( !this.triggerjQuery ) {
			return;
		}
		jQuery( node ).trigger( 'change' );
	},
	/**
	 * @protected
	 */
	runSignal: function ( prevValue ) {
		// your code
	},
	/**
	 * @since 3.0.1
	 */
	lockTrigger: function () {
		this.triggerjQuery = false;
	},
	/**
	 * @since 3.0.1
	 */
	unlockTrigger: function () {
		this.triggerjQuery = true;
	},
};

export default BaseSignal;