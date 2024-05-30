const selectors = {
	getBuilderIndex( state, name ) {
		return state.builders.findIndex( pattern => pattern.name === name );
	},
	getBuilders( state ) {
		return state.builders.filter( ( { name } ) => 'default' !== name );
	},
	getBuilder( state, slug ) {
		const index = selectors.getBuilderIndex( state, slug );

		return state.builders[ index ];
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