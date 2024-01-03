import BaseCSSCompiler from './BaseCSSCompiler';

const { get } = window._;

const {
	      isEmpty,
      } = JetFBActions;

export const SIDES = [ 'top', 'right', 'bottom', 'left' ];

function BoxCSSCompiler() {
	BaseCSSCompiler.call( this );

	this.isSupported = function ( path ) {
		return [ 'padding', 'margin' ].includes( path.at( -1 ) );
	};

	this.compileDeclarations = function (
		styleRoot,
		declarations,
	) {
		const baseBox = get( styleRoot, this.path );

		if ( isEmpty( baseBox ) ) {
			return;
		}

		for ( const side of SIDES ) {
			declarations[ `${ this.cssVar }-${ side }` ] = (
				this.getSideValue( side, baseBox )
			).trim();
		}
	};

	this.compileClassNames = () => {};
}

BoxCSSCompiler.prototype = Object.create(
	BaseCSSCompiler.prototype,
);

/**
 * @param side
 * @param value
 * @returns {string}
 */
BoxCSSCompiler.prototype.getSideValue = function ( side, value ) {
	if ( 'string' === typeof value ) {
		return value;
	}
	return value[ side ] ?? '';
};

export default BoxCSSCompiler;