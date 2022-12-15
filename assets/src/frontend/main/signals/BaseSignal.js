import ReactiveVar from '../reactive/ReactiveVar';

function BaseSignal() {
	this.input = null;
	this.lock  = new ReactiveVar();
	this.lock.make();
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

			return;
		}

		if ( !this.lock.signals.length ) {
			this.lock.watchOnce( () => this.runSignal( prevValue ) );
		}
	},
	/**
	 * @protected
	 */
	runSignal: function ( prevValue ) {
		// your code
	},
};

export default BaseSignal;