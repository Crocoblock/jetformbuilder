function applyFilters( value, filters ) {
	if ( null === filters || !filters?.length ) {
		return value;
	}
	for ( const filter of filters ) {
		value = filter.applyWithProps( value );
	}

	return value;
}

export default applyFilters;