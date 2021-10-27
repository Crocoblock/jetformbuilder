import PaypalEntries from './PaypalEntries';

const component = PaypalEntries;

Vue.use( Vuex );

const options = {
	store: new Vuex.Store( {
		state: {
			checked: [],
			idList: [],
		},
		getters: {
			isChecked: state => id => {
				return state.checked.includes( id );
			},
		},
		mutations: {
			addToStore( state, { id } ) {
				state.idList.push( id );
			},
			addChecked( state, { id } ) {
				state.checked.push( id );
			},
			removeAll( state ) {
				state.checked = [];
			},
			activeAll( state ) {
				state.checked = [ ...state.idList ];
			},
			removeChecked( state, { id } ) {
				state.checked = state.checked.filter( checked => (
					checked !== id
				) );
			},
		},
		actions: {
			changeChecked( { commit }, { id, active } ) {
				if ( active ) {
					commit( 'addChecked', { id } );
				} else {
					commit( 'removeChecked', { id } );
				}
			},
		},
	} ),
};

export { component, options };