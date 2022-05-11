const selectors = {
	getTypeIndex( state, slug ) {
		return state.types.findIndex( event => event.value === slug );
	},
};
export default {
	...selectors,
	getTypes( state ) {
		return state.types;
	},
	getGatewayTypes( state ) {
		return state.types.filter( event => (
			'gateway' in event
		) );
	},
	getType( state, slug ) {
		const index = selectors.getTypeIndex( state, slug );

		return state.types[ index ];
	},
};