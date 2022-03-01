const getOffset = ( page, limit ) => {
	return 1 !== page ? (
		(
			page - 1
		) * limit
	) : 0;
};

const prepareFiltersQuery = filters => {
	const query = {};

	for ( const filtersKey in filters ) {
		const filter = filters[ filtersKey ];

		query[ filtersKey ] = filter.selected;
	}

	return query;
};

export { getOffset, prepareFiltersQuery };