const selectors = {
	getTypeIndex( state, name ) {
		return state.types.findIndex( pattern => pattern.name === name );
	},
	getTypes( state ) {
		return state.types.filter( ( { name } ) => 'default' !== name );
	},
	getType( state, slug ) {
		const index = selectors.getTypeIndex( state, slug );

		return state.types[ index ];
	},
	getSetting( state, name ) {
		return state.settings[ name ];
	},
	getSettings( state ) {
		return state.settings;
	},
};

export default {
	...selectors,
};