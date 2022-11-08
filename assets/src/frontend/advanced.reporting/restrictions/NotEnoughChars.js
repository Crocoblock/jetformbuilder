import AdvancedRestriction from './AdvancedRestriction';

function NotEnoughChars() {
	AdvancedRestriction.call( this );

	this.watchedAttrs.push( 'minLength' );

	this.isSupported = function ( node, reporting ) {
		const { minLength = false } = reporting.input.attrs;

		return false !== minLength;
	};

	this.validate = function () {
		const length        = this.getValue()?.length;
		const { minLength } = this.reporting.input.attrs;

		return !length || length >= +minLength.value.current;
	};

	this.getRawMessage = function () {
		return this.getMessageBySlug( 'char_min' );
	};
}

NotEnoughChars.prototype = Object.create( AdvancedRestriction.prototype );

export default NotEnoughChars;