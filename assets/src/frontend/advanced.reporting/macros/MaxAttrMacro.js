import DynamicMacro from './DynamicMacro';

function MaxAttrMacro() {
	DynamicMacro.call( this );

	this.getSlug     = function () {
		return 'max';
	};
	this.isSupported = function ( restriction ) {
		return restriction.hasOwnProperty( 'max' );
	};
	this.value       = function () {
		return this.restriction?.max ?? '';
	};
}

MaxAttrMacro.prototype   = Object.create( DynamicMacro.prototype );

export default MaxAttrMacro;