import { TOKEN_FIELD } from '../constants';
import TokenComputedField from './TokenComputedField';

function GeneratedTokenComputedField() {
	TokenComputedField.call( this );

	this.isSupported = function ( action ) {
		if ( 'verification' === action.type ) {
			return true;
		}
		if ( 'register_user' !== action.type ) {
			return false;
		}

		const fields = Object.values( action.selfSettings.fields_map );

		return fields.includes( TOKEN_FIELD );
	};
}

GeneratedTokenComputedField.prototype = Object.create(
	TokenComputedField.prototype );

export default GeneratedTokenComputedField;