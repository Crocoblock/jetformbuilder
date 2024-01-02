import { TOKEN_URL } from '../constants';

const {
	      BaseComputedField,
      } = JetFBComponents;

const {
	      __,
      } = wp.i18n;

function VerificationURLComputedField() {
	BaseComputedField.call( this );

	this.isSupported = function ( action ) {
		return 'verification' === action.type && !action.selfSettings.who_can;
	};
}

VerificationURLComputedField.prototype = Object.create(
	BaseComputedField.prototype,
);

VerificationURLComputedField.prototype.getName = function () {
	return TOKEN_URL;
};

VerificationURLComputedField.prototype.getLabel = function () {
	return __( 'Verification URL', 'jet-form-builder' );
};

VerificationURLComputedField.prototype.getHelp = function () {
	return __(
		`A computed field from the Verification action. 
Usually used to send it using the Send by Email action.`,
		'jet-form-builder',
	);
};

export default VerificationURLComputedField;