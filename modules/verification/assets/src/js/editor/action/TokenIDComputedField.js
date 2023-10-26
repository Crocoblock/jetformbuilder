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

	this.getName = function () {
		return TOKEN_FIELD_ID;
	};

	this.getLabel = function () {
		return __( 'ID of secure unique token', 'jet-form-builder' );
	};

	this.getHelp = function () {
		return __(
			'A computed field from the Verification action.',
			'jet-form-builder',
		);
	};
}

TokenIDComputedField.prototype = Object.create( BaseComputedField.prototype );

export default TokenIDComputedField;