const {
	      __,
      } = wp.i18n;

/**
 * @param restUrl {String}
 * @param props {Object}
 * @returns {String}
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
				__(
					`Invalid parameter for rest url. RegExp: ${ parts[ 1 ] }, 
Value: ${ value }`,
					'jet-form-builder',
				),
			);
		}

		restUrl = restUrl.replace( regexp, value );
	}

	return restUrl;
}

export default resolveRestUrl;