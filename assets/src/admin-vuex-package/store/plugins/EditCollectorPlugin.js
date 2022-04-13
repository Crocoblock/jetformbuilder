const EditCollectorModule = {
	namespaced: true,
	state: () => (
		{
			edited: {},
		}
	),
	mutations: {
		collectScope( state, { rootGetters, scope } ) {
			if ( ! scope.includes( 'scope-' ) ) {
				return;
			}

			if ( ! rootGetters[ `${ scope }/hasChanges` ] ) {
				Vue.delete( state.edited, scope );
			} else {
				state.edited[ scope ] = rootGetters[ `${ scope }/editedListValues` ];
			}
		},
	},
	getters: {
		all: state => {
			return state.edited;
		},
	},
	actions: {
		collect( { rootState, rootGetters, commit } ) {
			for ( const scope in rootState ) {
				commit( 'collectScope', { rootGetters, scope } );
			}
		},
	},
};

function EditCollectorPlugin( store ) {
	store.registerModule( 'editCollector', EditCollectorModule );

	store.subscribe( ( mutation, state ) => {
		const typeParts = mutation.type.split( '/' );

		if ( ! typeParts.includes( 'updateEditableCell' ) ) {
			return;
		}
		store.dispatch( 'editCollector/collect' );
	} );
}

export default EditCollectorPlugin;