const selectors = {
	getFunctions( state ) {
		return state.functions;
	},
	getOperators( state ) {
		return state.operators;
	},
	getFunctionFilters( state ) {
		return state.functionFilters;
	},
	getRenderStates( state ) {
		return state.renderStates;
	},
	getRenderStatesList( state ) {
		return state.renderStates.map( ( { value } ) => value );
	},
	getFilteredFunctions( state, blockProps ) {
		return state.functions.filter( item => {
			const callback = state.functionFilters[ item.value ] ?? false;

			if ( false === callback ) {
				return true;
			}

			return callback( item, blockProps );
		} );
	},
};

export default {
	...selectors,
};