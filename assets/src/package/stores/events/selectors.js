const selectors = {
	getTypeIndex( state, slug ) {
		return state.types.findIndex( event => event.value === slug );
	},
	getTypes( state ) {
		return state.types;
	},
	getGatewayTypes( state ) {
		return state.types.filter( event => (
			'gateway' in event
		) );
	},
	getAlwaysTypes( state ) {
		return state.types.filter( event => (
			'always' in event
		) );
	},
	getType( state, slug ) {
		const index = selectors.getTypeIndex( state, slug );

		return state.types[ index ];
	},
	getUnsupported( state, actionId ) {
		const action = state.lockedActions[ actionId ] ?? false;

		if ( false === action ) {
			return [];
		}

		return action.unsupported;
	},
	getSupported( state, actionId ) {
		const action = state.lockedActions[ actionId ] ?? false;

		if ( false === action ) {
			return [];
		}

		return action.supported;
	},
	isValid( state, actionId, eventSlug ) {
		const unsupported = selectors.getUnsupported( state, actionId );

		if ( unsupported.length && unsupported.includes( eventSlug ) ) {
			return false;
		}

		const supported = selectors.getSupported( state, actionId );

		return (
			! supported.length || supported.includes( eventSlug )
		);
	},
	filterList( state, actionId, eventList ) {
		return eventList.filter( current => selectors.isValid( state, actionId, current ) );
	},
};

export default {
	...selectors,
};