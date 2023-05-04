const { get } = window._;

function BaseCSSCompiler() {
	this.cssVar = '';
}

BaseCSSCompiler.prototype = {
	/**
	 * @param path {String[]}
	 * @returns {boolean}
	 */
	isSupported( path ) {
		return true;
	},
	modifyDeclarations( styleRoot, response, path ) {
		const value = get( styleRoot, path );

		if ( !value ) {
			return;
		}

		response[ this.cssVar ] = value;
	},
	/**
	 * @param cssVar {String}
	 * @returns {BaseCSSCompiler}
	 */
	setCssVar( cssVar ) {
		this.cssVar = cssVar;

		return this;
	},
};

export default BaseCSSCompiler;