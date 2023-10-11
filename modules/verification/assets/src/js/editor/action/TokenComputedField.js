import { TOKEN_FIELD } from '../constants';

const {
	      BaseComputedField,
      } = JetFBComponents;

const {
	      sprintf,
	      __,
      } = wp.i18n;

function TokenComputedField() {
	BaseComputedField.call( this );

	this.getSupportedActions = function () {
		return [ 'register_user' ];
	};

	this.getName = function () {
		return TOKEN_FIELD;
	};

	this.getLabel = function () {
		return __( 'Secure unique token', 'jet-form-builder' );
	};

	this.getHelp = function () {
		return __(
			'A computed field. Usually used to save it in the password fields',
			'jet-form-builder',
		);
	};
}

TokenComputedField.prototype = Object.create( BaseComputedField.prototype );

export default TokenComputedField;