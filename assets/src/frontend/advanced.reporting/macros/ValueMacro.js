import DynamicMacro from './DynamicMacro';

function ValueMacro() {
	DynamicMacro.call( this );

	this.getSlug     = function () {
		return 'value';
	};
	this.isSupported = function ( restriction ) {
		return true;
	};
	this.value       = function () {
		return this.restriction.getValue();
	};
}

ValueMacro.prototype = Object.create( DynamicMacro.prototype );

export default ValueMacro;