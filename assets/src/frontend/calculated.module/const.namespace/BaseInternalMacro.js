function BaseInternalMacro() {
}

BaseInternalMacro.prototype = {
	/**
	 * @return {String}
	 */
	getId: function () {
		throw new Error( 'You need to rewrite this method' );
	},
	getResult: function () {
		throw new Error( 'You need to rewrite this method' );
	},
};

export default BaseInternalMacro;