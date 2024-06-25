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
		return settings?.list_id
		       ? false
		       : { type: 'empty', property: 'list_id' };
	},
	( { settings } ) => {
		const fields = select( STORE_NAME ).getFields();

		if ( !Object.keys( fields ).length ) {
			return false;
		}
		const errors              = [];
		const { list_id: listId } = settings;
		const listFields          = fields[ listId ];

		if ( !listFields?.length ) {
			return false;
		}

		for ( const listField of listFields ) {
			if ( !listField.required ) {
				continue;
			}
			const fieldValue = settings?.fields_map?.[ listField.value ];

			if ( !fieldValue ) {
				errors.push(
					{ type: 'empty', property: 'field_' + listField.value },
				);
			}
		}

		return errors;
	},
];