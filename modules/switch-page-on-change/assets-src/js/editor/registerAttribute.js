import { SUPPORT_NAME, ATTRIBUTE_NAME } from './constants';

const {
	      getSupport,
      } = JetFBActions;

function registerAttribute( settings, name ) {
	if ( !getSupport( settings, SUPPORT_NAME ) ) {
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