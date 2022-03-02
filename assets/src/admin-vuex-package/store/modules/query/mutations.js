export default {
	setTotal( state, newTotal ) {
		state.total = + newTotal;
	},
	setLimit( state, limit ) {
		state.limit = + limit;
	},
	setCurrentPage( state, pageNum ) {
		state.currentPage = + pageNum;
	},
	setOffset( state, offset ) {
		const itemTo = offset + state.limit;

		state.itemsFrom = offset + 1;
		state.itemsTo = itemTo > state.total ? state.total : itemTo;
	},
	setFilters( state, filters ) {
		state.filters = filters;
	},
	setFilter( state, { slug, props } ) {
		state.filters[ slug ] = state.filters[ slug ] ?? {};
		state.filters[ slug ] = {
			...state.filters[ slug ],
			...props,
		};
	},
	clearSelectedFilters( state, replaceMap = {} ) {
		for ( const filter in state.filters ) {
			state.filters[ filter ].selected = replaceMap[ filter ] ?? '';
		}
	},
};