function BaseInternalMacro() {
}

BaseInternalMacro.prototype = {
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