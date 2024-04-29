import { TOKEN_FIELD_ID } from '../constants';

const {
	      BaseComputedField,
      } = JetFBComponents;

const {
	      sprintf,
	      __,
      } = wp.i18n;

function TokenIDComputedField() {
	BaseComputedField.call( this );

	this.getSupportedActions = function () {
		return [ 'verification' ];
	};
}

TokenIDComputedField.prototype = Object.create( BaseComputedField.prototype );

TokenIDComputedField.prototype.getName = function () {
	return TOKEN_FIELD_ID;
};

TokenIDComputedField.prototype.getLabel = function () {
	return __( 'ID of secure unique token', 'jet-form-builder' );
};

TokenIDComputedField.prototype.getHelp = function () {
	return __(
		'A computed field from the Verification action.',
		'jet-form-builder',
	);
};

export default TokenIDComputedField;