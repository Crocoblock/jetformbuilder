const selectors = {
	getTypeIndex( state, slug ) {
		return state.types.findIndex( sanitizer => sanitizer.value === slug );
	},
	getTypes( state ) {
		return state.types;
	},
	getType( state, slug ) {
		const index = selectors.getTypeIndex( state, slug );

		return state.types[ index ];
	},
	getAllowedToMergeTypes( state ) {
		return state.types.filter(
			( { allowMerge = false } ) => allowMerge,
		).map(
			( { value } ) => value,
		);
	},
};

export default {
	...selectors,
};