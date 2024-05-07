import BorderCSSCompiler from './BorderCSSCompiler';

const { get } = window._;

const {
	      isEmpty,
      } = JetFBActions;

function BorderV2CSSCompiler() {
	BorderCSSCompiler.call( this );

	this.isSupported = function ( path ) {
		return 'border-v2' === path.at( -1 );
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
		} );
	};
}

BorderV2CSSCompiler.prototype = Object.create(
	BorderCSSCompiler.prototype,
);

BorderV2CSSCompiler.prototype.getTopVar    = function ( type ) {
	return `${ this.cssVar }-${ type }-top`;
};
BorderV2CSSCompiler.prototype.getRightVar  = function ( type ) {
	return `${ this.cssVar }-${ type }-right`;
};
BorderV2CSSCompiler.prototype.getBottomVar = function ( type ) {
	return `${ this.cssVar }-${ type }-bottom`;
};
BorderV2CSSCompiler.prototype.getLeftVar   = function ( type ) {
	return `${ this.cssVar }-${ type }-left`;
};


export default BorderV2CSSCompiler;