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

export function addQueryArgs( args, url ) {
	url = new URL( url );

	const params = new URLSearchParams( url.search );

	for ( const [ key, value ] of Object.entries( args ) ) {
		params.append( key, value );
	}

	return url.origin + url.pathname + '?' + params;
}

export function createPath( queryArgs = {}, hashes = {}, clearArgs = [] ) {
	const params = [];
	queryArgs = {
		...getSearch(),
		...queryArgs,
	}

	for ( const [ key, value ] of Object.entries( queryArgs ) ) {
		if ( clearArgs.includes( key ) ) {
			continue;
		}
		params.push( `${ key }=${ encodeURIComponent( value ) }` );
	}

	const urlParts = [ getCurrentPath(), params.join( '&' ) ];

	return urlParts.filter( part => part ).join( '?' );

}