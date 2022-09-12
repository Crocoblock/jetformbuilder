import DynamicMacro from './DynamicMacro';

function MinAttrMacro() {
	DynamicMacro.call( this );

	this.getSlug     = function () {
		return 'min';
	};
	this.isSupported = function ( restriction ) {
		return restriction.hasOwnProperty( 'min' );
	};
	this.value       = function () {
		return this.restriction?.min ?? '';
	};
}

MinAttrMacro.prototype   = Object.create( DynamicMacro.prototype );

export default MinAttrMacro;