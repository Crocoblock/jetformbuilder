import ValueItem from './ValueItem';

function createValues( json, input ) {
	let groups = [];

	try {
		groups = JSON.parse( json );
	}
	catch ( error ) {
		console.error( error );
		return;
	}

	for ( const group of groups ) {
		new ValueItem( group, input );
	}
}

export default createValues;