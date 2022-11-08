import AdvancedRestriction from './AdvancedRestriction';

function ReachLimitNumbers() {
	AdvancedRestriction.call( this );

	this.watchedAttrs.push( 'max' );

	this.isSupported   = function ( node, reporting ) {
		const { max = false } = reporting.input.attrs;

		return false !== max && [ 'number', 'range' ].includes( node.type );
	};
	this.validate      = function () {
		const value   = this.getValue();
		const { max } = this.reporting.input.attrs;

		return !value || +value <= +max.value.current;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'number_max' );
	};
}

ReachLimitNumbers.prototype = Object.create( AdvancedRestriction.prototype );

export default ReachLimitNumbers;