const {
	      __,
	      sprintf,
      } = wp.i18n;

/**
 * @param  restUrl {string}
 * @param  props   {Object}
 * @return {string}
 *
 * @throws {Error}
 */
function resolveRestUrl( restUrl, props ) {
	if ( 'object' !== typeof props || !Object.keys( props )?.length ) {
		return restUrl;
	}

	for ( let [ name, value ] of Object.entries( props ) ) {
		const regexp = new RegExp( `\\(\\?P<${name}>(.*?)\\)` );
		const parts  = restUrl.match( regexp );

		if ( !Array.isArray( parts ) ) {
			continue;
		}

		// to string
		value            = '' + value;
		const partRegexp = new RegExp( parts[ 1 ] );

		if ( !partRegexp.test( value ) ) {
			throw new Error(
				sprintf(
					__(
						`Invalid parameter for rest url. RegExp: %s, Value: %s`,
						'jet-form-builder',
					),
					parts[ 1 ],
					value,
				),
			);
		}

		restUrl = restUrl.replace( regexp, value );
	}

	return restUrl;
}

export default resolveRestUrl;