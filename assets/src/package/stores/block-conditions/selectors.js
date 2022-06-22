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
	getCustomRenderStates( state ) {
		return state.renderStates.filter( ( { is_custom = false } ) => is_custom );
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