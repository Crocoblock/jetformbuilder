import AdvancedRestriction from './AdvancedRestriction';

function NotEnoughNumbers() {
	AdvancedRestriction.call( this );

	this.isSupported   = function ( node, reporting ) {
		const { min = false } = reporting.input.attrs;

		return false !== min;
	};
	this.validate      = function () {
		const value   = this.getValue();
		const { min } = this.reporting.input.attrs;

		return !value || +value >= +min.value.current;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'number_min' );
	};
}

NotEnoughNumbers.prototype = Object.create( AdvancedRestriction.prototype );

export default NotEnoughNumbers;