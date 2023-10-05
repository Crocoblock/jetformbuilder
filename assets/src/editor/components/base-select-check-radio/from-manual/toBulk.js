const {
	      isEmpty,
      } = JetFBActions;

const JSON_PROPERTIES = [ 'label', 'value', 'calculate' ];

function toBulk( source ) {
	if ( isEmpty( source ) ) {
		return '';
	}
	if ( 'object' === typeof source ) {
		return arrayToBulk( source );
	}

	if ( 'string' !== typeof source ) {
		return '';
	}

	if ( ![ '[', '{' ].includes( source[ 0 ] ) ) {
		return source;
	}

	let jsonBulk;

	try {
		jsonBulk = JSON.parse( source );
	}
	catch ( error ) {
		return source;
	}

	return arrayToBulk( jsonBulk );
}

function arrayToBulk( source ) {
	const rows = [];

	if ( !Array.isArray( source ) ) {
		return objectToBulk( source );
	}

	for ( const valItem of source ) {
		rows.push( objectToBulk( valItem ) );
	}

	return rows.join( '\n' );
}

function objectToBulk( source ) {
	if ( 'object' !== typeof source ) {
		return [ 'number', 'string' ].includes(
			typeof source,
		) ? source : '';
	}
	const row = [];

	for ( const property of JSON_PROPERTIES ) {
		if ( 'undefined' === typeof source[ property ] ) {
			continue;
		}
		if ( ![ 'number', 'string' ].includes(
			typeof source[ property ],
		) ) {
			row.push( 0 );

			continue;
		}
		row.push( source[ property ] );
	}

	return row.join( ' : ' );
}

export default toBulk;