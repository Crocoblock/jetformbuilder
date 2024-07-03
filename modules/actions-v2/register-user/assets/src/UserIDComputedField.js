import { BaseComputedField } from 'jet-form-builder-actions';
import { __ } from '@wordpress/i18n';

function UserIDComputedField() {
	BaseComputedField.call( this );

	this.isSupported = function ( action ) {
		return (
			'register_user' === action.type &&
			action.selfSettings.add_user_id
		);
	};

	this.getName = function () {
		return 'user_id';
	};

	this.getHelp = function () {
		return __(
			'A computed field from the <b>Register User</b> action.',
			'jet-form-builder',
		);
	};
}

UserIDComputedField.prototype = Object.create( BaseComputedField.prototype );

export default UserIDComputedField;