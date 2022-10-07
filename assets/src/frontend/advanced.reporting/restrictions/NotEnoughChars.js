import Restriction from './Restriction';

function NotEnoughChars() {
	Restriction.call( this );

	this.isSupported = function ( node, reporting ) {
		const { minLength = false } = reporting.input.attrs;

		return false !== minLength;
	};

	this.validate = function () {
		const { minLength } = this.reporting.input.attrs;

		return this.getValue()?.length >= minLength.value.current;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'char_min' );
	};
}

NotEnoughChars.prototype = Object.create( Restriction.prototype );

export default NotEnoughChars;