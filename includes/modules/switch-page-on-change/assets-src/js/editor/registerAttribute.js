import getSupport from './getSupport';
import { ATTRIBUTE_NAME } from './constants';

function registerAttribute( settings, name ) {
	if ( !getSupport( settings ) ) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,
		[ ATTRIBUTE_NAME ]: {
			type: 'boolean',
			default: false,
		},
	};

	return settings;
}

export default registerAttribute;