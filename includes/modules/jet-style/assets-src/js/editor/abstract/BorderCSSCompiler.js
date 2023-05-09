import BaseCSSCompiler from './BaseCSSCompiler';

const { get } = window._;

const {
	      isEmpty,
      } = JetFBActions;

const SIDES = [ 'top', 'right', 'bottom', 'left' ];

function BorderCSSCompiler() {
	BaseCSSCompiler.call( this );

	this.isSupported = function ( path ) {
		return 'border' === path.at( -1 );
	};

	this.compileDeclarations = function (
		styleRoot,
		declarations,
		classNames,
	) {
		const baseBorder = get( styleRoot, this.path );

		if ( isEmpty( baseBorder ) ) {
			return;
		}

		const isHover = this.hasHoverPath();

		[ 'style', 'width', 'color' ].forEach( type => {
			const topValue = this.getSideValue( baseBorder, 'top', type );

			if ( topValue ) {
				declarations[ this.getTopVar( type ) ] = topValue;
			}

			const rightValue = this.getSideValue( baseBorder, 'right', type );

			if ( rightValue ) {
				declarations[ this.getRightVar( type ) ] = rightValue;
			}

			const bottomValue = this.getSideValue( baseBorder, 'bottom', type );

			if ( bottomValue ) {
				declarations[ this.getBottomVar( type ) ] = bottomValue;
			}

			const leftValue = this.getSideValue( baseBorder, 'left', type );

			if ( leftValue ) {
				declarations[ this.getLeftVar( type ) ] = leftValue;
			}

			if ( !isHover ) {
				return;
			}

			// Get non-empty values
			const values = [
				topValue,
				rightValue,
				bottomValue,
				leftValue,
			].filter( Boolean );

			if ( values.length ) {
				classNames.push( `has-hover-border-${ type }` );
			}
		} );
	};

	this.compileClassNames = () => {};
}

BorderCSSCompiler.prototype = Object.create(
	BaseCSSCompiler.prototype,
);

BorderCSSCompiler.prototype.getTopVar    = function ( type ) {
	return `${ this.cssVar }-top-${ type }`;
};
BorderCSSCompiler.prototype.getRightVar  = function ( type ) {
	return `${ this.cssVar }-right-${ type }`;
};
BorderCSSCompiler.prototype.getBottomVar = function ( type ) {
	return `${ this.cssVar }-bottom-${ type }`;
};
BorderCSSCompiler.prototype.getLeftVar   = function ( type ) {
	return `${ this.cssVar }-left-${ type }`;
};

BorderCSSCompiler.prototype.isLinked = function ( value ) {
	const [ firstKey ] = Object.keys( value );

	return SIDES.includes( firstKey );
};

BorderCSSCompiler.prototype.getSideValue = function ( value, side, property ) {
	if ( !SIDES.includes( side ) ) {
		return '';
	}

	let response = '';

	if ( this.isLinked( value ) ) {
		response = value[ side ]?.[ property ] ?? '';
	}
	else {
		response = value[ property ] ?? '';
	}

	return response.trim();
};

export default BorderCSSCompiler;