import { TOKEN_URL } from '../constants';

const {
	      BaseComputedField,
      } = JetFBComponents;

const {
	      __,
      } = wp.i18n;

function VerificationURLComputedField() {
	BaseComputedField.call( this );

	this.getSupportedActions = function () {
		return [ 'verification' ];
	};

	this.getName = function () {
		return TOKEN_URL;
	};

	this.getLabel = function () {
		return __( 'Verification URL', 'jet-form-builder' );
	};

	this.getHelp = function () {
		return __(
			`A computed field from the Verification action. 
Usually used to send it using the Send by Email action.`,
			'jet-form-builder',
		);
	};
}

VerificationURLComputedField.prototype = Object.create(
	BaseComputedField.prototype,
);

export default VerificationURLComputedField;