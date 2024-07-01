import { select } from '@wordpress/data';
import { STORE_NAME } from '../store';

export default [
	( { settings } ) => {
		if ( settings.use_global ) {
			return false;
		}
		return settings?.api_key
		       ? false
		       : { type: 'empty', property: 'api_key' };
	},
	( { settings } ) => {
		if ( settings.use_global ) {
			return false;
		}
		return settings?.api_url
		       ? false
		       : { type: 'empty', property: 'api_url' };
	},
	( { settings } ) => {
		const fields = select( STORE_NAME ).getFields();

		if ( !Object.keys( fields ).length ) {
			return false;
		}
		const errors = [];

		if ( !fields?.length ) {
			return false;
		}

		for ( const field of fields ) {
			if ( !field.required ) {
				continue;
			}
			const fieldValue = settings?.fields_map?.[ field.value ];

			if ( !fieldValue ) {
				errors.push(
					{ type: 'empty', property: 'field_' + field.value },
				);
			}
		}

		return errors;
	},
];