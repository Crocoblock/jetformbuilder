function convertListToFieldsMap ( ...sources ) {
	const response = [];

	for ( const source of sources ) {
		if ( ! Array.isArray( source ) ) {
			continue;
		}
		response.push( ...source.map( item => {
			const id = item.value;

			return [ id, item ];
		} ) );
	}

	return response;
}

export default convertListToFieldsMap;