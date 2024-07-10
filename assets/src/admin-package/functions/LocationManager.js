export function getCurrentPath() {
	return window.location.pathname;
}

export function getRawSearch() {
	return window.location.search;
}

export function getSearch() {
	const args = {};
	getRawSearch().replace( '?', '' ).split( '&' ).forEach( pair => {
		const [ name, value ] = pair.split( '=' );

		args[ name ] = value;
	} );

	return args;
}

function prepareQueryArgs( key, value ) {
	if ( 'object' !== typeof value ) {
		return [
			[ key, value ],
		];
	}

	const response = [];

	for ( let [ valueKey, valueItem ] of Object.entries( value ) ) {
		valueKey = `${ key }[${ valueKey }]`;

		response.push( ...prepareQueryArgs( valueKey, valueItem ) );
	}

	return response;
}

/**
 * @param  args {Object}
 * @param  url  {module:url.URL}
 * @return {string}
 */
export function addQueryArgs( args, url ) {
	url = new URL( url );

	const params = new URLSearchParams( url.search );
	const pairs  = [];

	for ( const [ key, value ] of Object.entries( args ) ) {
		pairs.push( ...prepareQueryArgs( key, value ) );
	}

	for ( const [ key, value ] of pairs ) {
		if ( !value ) {
			continue;
		}
		params.append( key, value );
	}

	return url.origin + url.pathname + '?' + params;
}

// eslint-disable-next-line no-unused-vars
export function createPath( queryArgs = {}, hashes = {}, clearArgs = [] ) {
	const params = [];
	queryArgs    = {
		...getSearch(),
		...queryArgs,
	};

	for ( const [ key, value ] of Object.entries( queryArgs ) ) {
		if ( clearArgs.includes( key ) ) {
			continue;
		}
		params.push( `${ key }=${ encodeURIComponent( value ) }` );
	}

	const urlParts = [ getCurrentPath(), params.join( '&' ) ];

	return urlParts.filter( part => part ).join( '?' );

}