import DynamicMacro from './DynamicMacro';

function RemainingMacro() {
	DynamicMacro.call( this );

	this.getSlug     = function () {
		return 'remaining';
	};
	this.isSupported = function ( restriction ) {
		return restriction.hasOwnProperty( 'max' );
	};
	this.value       = function () {
		const { max } = this.restriction;
		const value   = this.restriction.getValue();

		return max - value;
	};
}

RemainingMacro.prototype = Object.create( DynamicMacro.prototype );

export default RemainingMacro;