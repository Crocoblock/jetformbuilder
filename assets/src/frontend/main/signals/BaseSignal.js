function BaseSignal() {
	this.input = null;
}

BaseSignal.prototype = {
	/**
	 * @type {InputData}
	 */
	input: null,
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
	runSignal: function () {
		// your code
	},
};

export default BaseSignal;