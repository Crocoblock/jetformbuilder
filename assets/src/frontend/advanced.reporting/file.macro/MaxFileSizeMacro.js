import DynamicMacro from '../macros/DynamicMacro';

function MaxFileSizeMacro() {
	DynamicMacro.call( this );

	this.getSlug     = function () {
		return 'max_size';
	};
	this.isSupported = function ( restriction ) {
		return restriction.hasOwnProperty( 'max_size' );
	};
	this.value       = function () {
		return this.restriction?.max_size ?? '';
	};
}

MaxFileSizeMacro.prototype = Object.create( DynamicMacro.prototype );

export default MaxFileSizeMacro;