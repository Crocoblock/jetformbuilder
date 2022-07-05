class BaseSignal {
	/**
	 * @param inputData {InputData}
	 * @returns {boolean}
	 */
	isSupported( inputData ) {
		return false;
	}

	/**
	 * @param inputData {InputData}
	 */
	runSignal( inputData ) {
		// your code
	}
}

export default BaseSignal;