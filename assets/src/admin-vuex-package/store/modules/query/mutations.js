export default {
	setQueryState( state, newState ) {
		state.queryState = {
			...state.queryState,
			...newState,
		};
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
}