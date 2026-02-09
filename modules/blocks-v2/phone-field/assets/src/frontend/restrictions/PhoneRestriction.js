let {
		AdvancedRestriction,
		Restriction,
    } = window.JetFormBuilderAbstract || {};

// Fallback if AdvancedRestriction is not available
AdvancedRestriction = AdvancedRestriction || Restriction;

/**
 * Phone Number Validation Restriction
 */
function PhoneRestriction() {
	AdvancedRestriction.call( this );

	this.type = 'phone_validation';
}

PhoneRestriction.prototype = Object.create( AdvancedRestriction.prototype );

/**
 * Only apply this restriction if field is a phone field
 */
PhoneRestriction.prototype.isSupported = function ( node ) {
	const isPhoneField = node.classList.contains( 'phone-field' );

	return isPhoneField;
};

/**
 * Validate phone number using intl-tel-input
 */
PhoneRestriction.prototype.validate = function () {
	const input     = this.reporting.input;
	const wrapper   = input.getWrapperNode();
	const intlInput = wrapper?.querySelector('input.phone-field-intl');

	// If itiInstance is not ready yet, skip validation (return true)
	if ( ! input.itiInstance ) {
		return true;
	}

	// If intl input field is empty, let required restriction handle it
	if ( ! intlInput || ! intlInput.value.trim() ) {
		return true;
	}

	// Validate using intl-tel-input
	const isValid = input.itiInstance.isValidNumber();

	return isValid;
};

/**
 * Return validation error message
 */
PhoneRestriction.prototype.getRawMessage = function () {
	// Try to get custom message from field configuration
	const customMessage = this.getMessageBySlug?.( 'phone_invalid' );

	if ( customMessage ) {
		return customMessage;
	}

	// Default message
	return 'Please enter a valid phone number';
};

export default PhoneRestriction;
