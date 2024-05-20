const {
	      getSupport,
      } = JetFBActions;

function registerAttribute( settings, name ) {
	if (
		!getSupport( settings, 'jetStyle' ) ||
		settings.attributes.hasOwnProperty( 'style' )
	) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,
		style: {
			type: 'object',
			default: {},
		},
	};

	return settings;
}

export default registerAttribute;