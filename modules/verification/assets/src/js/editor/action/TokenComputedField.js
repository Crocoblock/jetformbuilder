import { SUCCESS_EVENT } from '../constants';

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
		return '_jfb_verification_token';
	};

	this.getLabel = function () {
		return __( 'Secure unique token', 'jet-form-builder' );
	};

	this.getHelp = function () {
		return sprintf(
			__(
				'A computed field on <code>%s</code> event.',
				'jet-form-builder',
			),
			SUCCESS_EVENT,
		);
	};
}

TokenComputedField.prototype = Object.create( BaseComputedField.prototype );

export default TokenComputedField;