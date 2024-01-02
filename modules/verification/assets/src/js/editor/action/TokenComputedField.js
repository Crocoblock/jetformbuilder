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
}

TokenComputedField.prototype = Object.create( BaseComputedField.prototype );

TokenComputedField.prototype.getName = function () {
	return TOKEN_FIELD;
};

TokenComputedField.prototype.getLabel = function () {
	return __( 'Secure unique token', 'jet-form-builder' );
};

TokenComputedField.prototype.getHelp = function () {
	return __(
		'A computed field. Usually used to save it in the password fields',
		'jet-form-builder',
	);
};

export default TokenComputedField;