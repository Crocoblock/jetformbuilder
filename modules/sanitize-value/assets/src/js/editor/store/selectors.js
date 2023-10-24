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
};

export default {
	...selectors,
};