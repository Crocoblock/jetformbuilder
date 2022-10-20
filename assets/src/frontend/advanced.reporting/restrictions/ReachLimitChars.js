import AdvancedRestriction from './AdvancedRestriction';

function ReachLimitChars() {
	AdvancedRestriction.call( this );

	this.isSupported = function ( node, reporting ) {
		const { maxLength = false } = reporting.input.attrs;

		return false !== maxLength;
	};

	this.validate      = function () {
		const value         = this.getValue()?.length;
		const { maxLength } = this.reporting.input.attrs;

		return !value || value <= +maxLength.value.current;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'char_max' );
	};
}

ReachLimitChars.prototype = Object.create( AdvancedRestriction.prototype );

export default ReachLimitChars;