class BaseSignal {

	constructor() {
		/**
		 * @type {InputData}
		 */
		this.input = null;
	}

	/**
	 * @param node {HTMLElement}
	 * @param inputData {InputData}
	 * @returns {boolean}
	 */
	isSupported( node, inputData ) {
		return false;
	}

	setInput( input ) {
		this.input = input;
	}

	runSignal() {
		// your code
	}
}

export default BaseSignal;