import BaseCSSCompiler from './BaseCSSCompiler';
import { isEmpty } from '../../tools';

const { get } = window._;

function BorderRadiusCSSCompiler() {
	BaseCSSCompiler.call( this );

	this.isSupported = function ( path ) {
		return (
			'border' === path.at( 1 ) &&
			'radius' === path.at( -1 )
		);
	};

	this.modifyDeclarations = function ( styleRoot, response, path ) {
		const baseRadius = get( styleRoot, path );

		if ( isEmpty( baseRadius ) ) {
			return;
		}

		const topLeft = this.getTopLeft( baseRadius );

		if ( topLeft ) {
			response[ `${ this.cssVar }-top-left` ] = topLeft;
		}

		const topRight = this.getTopRight( baseRadius );

		if ( topRight ) {
			response[ `${ this.cssVar }-top-right` ] = topRight;
		}

		const bottomRight = this.getBottomRight( baseRadius );

		if ( bottomRight ) {
			response[ `${ this.cssVar }-bottom-right` ] = bottomRight;
		}

		const bottomLeft = this.getBottomLeft( baseRadius );

		if ( bottomLeft ) {
			response[ `${ this.cssVar }-bottom-left` ] = bottomLeft;
		}
	};
}

BorderRadiusCSSCompiler.prototype = Object.create(
	BaseCSSCompiler.prototype,
);

BorderRadiusCSSCompiler.prototype.isLinked = function ( value ) {
	const [ firstKey ] = Object.keys( value );

	return [ 'topLeft', 'topRight', 'bottomLeft', 'bottomRight' ].includes(
		firstKey,
	);
};

BorderRadiusCSSCompiler.prototype.getTopLeft = function ( value ) {
	return this.isLinked( value ) ? value?.topLeft : value;
};

BorderRadiusCSSCompiler.prototype.getTopRight = function ( value ) {
	return this.isLinked( value ) ? value?.topRight : value;
};

BorderRadiusCSSCompiler.prototype.getBottomLeft = function ( value ) {
	return this.isLinked( value ) ? value?.bottomLeft : value;
};

BorderRadiusCSSCompiler.prototype.getBottomRight = function ( value ) {
	return this.isLinked( value ) ? value?.bottomRight : value;
};

export default BorderRadiusCSSCompiler;