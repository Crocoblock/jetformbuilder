export default {
	setTotal( state, newTotal ) {
		state.total = +newTotal;
	},
	setLimit( state, limit ) {
		if ( +limit < 1 ) {
			limit = 1;
		}
		state.limit = +limit;
	},
	setCurrentPage( state, pageNum ) {
		state.currentPage = +pageNum;
	},
	setOffset( state, offset ) {
		const itemTo = offset + state.limit;

		state.itemsFrom = offset + 1;
		state.itemsTo   = itemTo > state.total ? state.total : itemTo;
	},
	setReceiveEndpoint( state, endpoint ) {
		state.receiveEndpoint = { ...endpoint };
	},
	setFilters( state, filters ) {
		state.filters = {
			...state.filters,
			...filters
		};
	},
	setFilter( state, { slug, props = {} } ) {
		state.filters = {
			...state.filters,
			[ slug ]: {
				...(
					state.filters[ slug ] ?? {}
				),
				...props,
			},
		};
	},
	clearSelectedFilters( state, replaceMap = {} ) {
		for ( const filter in state.filters ) {
			state.filters[ filter ].selected = replaceMap[ filter ] ?? '';
		}
	},
	setApiOptions( state, options ) {
		state.apiOptions = options;
	},
	setApiData( state, data ) {
		state.apiData = data;
	},
};