import Restriction from './Restriction';

function ReachLimitChars() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		const { maxLength = false } = reporting.input.attrs;

		return false !== maxLength;
	};

	this.validate      = function () {
		const { maxLength } = this.reporting.input.attrs;

		return this.getValue()?.length <= maxLength.value.current;
	};
	this.getRawMessage = function () {
		return this.getMessageBySlug( 'char_max' );
	};
}

ReachLimitChars.prototype = Object.create( Restriction.prototype );

export default ReachLimitChars;