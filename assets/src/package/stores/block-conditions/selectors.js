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
	getFilteredFunctions( state, blockProps ) {
		return state.functions.filter( item => {
			const callback = state.functionFilters[ item.value ] ?? false;

			if ( false === callback ) {
				return true;
			}

			return callback( item, blockProps );
		} )
	}
};

export default {
	...selectors,
};