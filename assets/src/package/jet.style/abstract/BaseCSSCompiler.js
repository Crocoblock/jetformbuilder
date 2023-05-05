const { get } = window._;

function BaseCSSCompiler() {
	this.cssVar = '';
	/**
	 * @type {String[]}
	 */
	this.path = [];
}

BaseCSSCompiler.prototype = {
	/**
	 * @param path {String[]}
	 * @returns {boolean}
	 */
	isSupported( path ) {
		return true;
	},
	compileDeclarations( styleRoot, response, classNames ) {
		const value = get( styleRoot, this.path );

		if ( !value ) {
			return;
		}

		response[ this.cssVar ] = value;
	},
	compileClassNames( classNames, styleRoot ) {
		if (
			!this.hasHoverPath() ||
			!get( styleRoot, this.path )
		) {
			return;
		}

		// Remove selector from path
		const withoutFirst = this.path.slice( 1 );

		classNames.push( 'has-hover-' + withoutFirst.join( '-' ) );
	},
	hasHoverPath() {
		const parts = this.path[ 0 ].split( ':' );

		return (
			parts?.[ 1 ] && 'hover' === parts[ 1 ]
		);
	},
	/**
	 * @param cssVar {String}
	 * @returns {BaseCSSCompiler}
	 */
	setCssVar( cssVar ) {
		this.cssVar = cssVar;

		return this;
	},

	/**
	 * @param path {String[]}
	 * @returns {BaseCSSCompiler}
	 */
	setPath( path ) {
		this.path = path;

		return this;
	},
};

export default BaseCSSCompiler;