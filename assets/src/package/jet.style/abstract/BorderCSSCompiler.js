import BaseCSSCompiler from './BaseCSSCompiler';
import { isEmpty } from '../../tools';

const { get } = window._;

function BorderCSSCompiler() {
	BaseCSSCompiler.call( this );

	this.isSupported = function ( path ) {
		return 'border' === path.at( -1 );
	};

	this.modifyDeclarations = function ( styleRoot, response, path ) {
		const baseBorder = get( styleRoot, path );

		if ( isEmpty( baseBorder ) ) {
			return;
		}

		for ( const type of [ 'style', 'width', 'color' ] ) {
			const topValue = this.getTopValue( baseBorder, type );

			if ( topValue ) {
				response[ this.getTopVar( type ) ] = topValue;
			}

			const rightValue = this.getRightValue( baseBorder, type );

			if ( topValue ) {
				response[ this.getRightVar( type ) ] = rightValue;
			}

			const bottomValue = this.getBottomValue( baseBorder, type );

			if ( topValue ) {
				response[ this.getBottomVar( type ) ] = bottomValue;
			}

			const leftValue = this.getLeftValue( baseBorder, type );

			if ( topValue ) {
				response[ this.getLeftVar( type ) ] = leftValue;
			}
		}
	};
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

	return [ 'top', 'left', 'right', 'bottom' ].includes( firstKey );
};

BorderCSSCompiler.prototype.getTopValue = function ( value, property ) {
	return this.isLinked( value )
	       ? value.top?.[ property ]
	       : value?.[ property ];
};

BorderCSSCompiler.prototype.getRightValue = function ( value, property ) {
	return this.isLinked( value )
	       ? value.right?.[ property ]
	       : value?.[ property ];
};

BorderCSSCompiler.prototype.getBottomValue = function ( value, property ) {
	return this.isLinked( value )
	       ? value.bottom?.[ property ]
	       : value?.[ property ];
};

BorderCSSCompiler.prototype.getLeftValue = function ( value, property ) {
	return this.isLinked( value )
	       ? value.left?.[ property ]
	       : value?.[ property ];
};

export default BorderCSSCompiler;