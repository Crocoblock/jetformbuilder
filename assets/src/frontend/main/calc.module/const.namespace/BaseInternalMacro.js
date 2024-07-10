function BaseInternalMacro() {
}

BaseInternalMacro.prototype = {
	// eslint-disable-next-line jsdoc/require-returns-check
	/**
	 * @return {string}
	 */
	getId () {
		throw new Error( 'You need to rewrite this method' );
	},
	getResult () {
		throw new Error( 'You need to rewrite this method' );
	},
};

export default BaseInternalMacro;