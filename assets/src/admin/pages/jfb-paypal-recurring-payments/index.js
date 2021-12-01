import RecurringPayments from './RecurringPayments';

Vue.use( Vuex );

const options = {
	store: new Vuex.Store( {
		state: {
			columns: {},
		},
		getters: {
			isChecked: state => id => {
				return state.checked.includes( id );
			},
			getCurrent: state => {
				return state.currentPopupData;
			},
			getColumns: state => {
				return state.columns;
			}
		},
		mutations: {
			setColumns( state, columns ) {
				state.columns = columns;
			},
			setCurrent( state, current ) {
				state.currentPopupData = current;
			},
			clearCurrent( state ) {
				state.currentPopupData = {};
			},
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

const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( RecurringPayments, options );
