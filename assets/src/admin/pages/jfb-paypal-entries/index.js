import PaypalEntries from './PaypalEntries';

Vue.use( Vuex );

window.jfbEventBus = window.jfbEventBus || new Vue();

const {
		  createPath,
	  } = window.JetFBActions;

const {
		  StoreHelper: {
			  getActions,
			  getGetters,
			  getMutations,
			  getBaseState,
		  },
	  } = JetFBMixins;

const options = {
	store: new Vuex.Store( {
		state: {
			...getBaseState(),
			currentPopupData: {},
			actions: {},
			fetchedSubscriptions: {},
			isShowPopup: false,
			// for showing loader, while subscription details is loading
			loadingPopup: false,
			// for disable action buttons: cancel subscription, suspend subscription & add note
			doingAction: false,
		},
		getters: {
			...getGetters(),
			getSubscription: state => id => {
				return state.fetchedSubscriptions[ id ] || {};
			},
			currentSubscription: ( state, getters ) => {
				const id = state.currentPopupData?.record_id?.value;

				return getters.getSubscription( id );
			},
			lastRow: state => {
				return state.currentList[ state.currentList.length - 1 ];
			},
		},
		mutations: {
			...getMutations(),
			setCurrent( state, current ) {
				state.currentPopupData = current;
			},
			clearCurrent( state ) {
				state.currentPopupData = {};
			},
			saveSubscription( state, subDetails ) {
				state.fetchedSubscriptions[ subDetails?.sub_id ] = subDetails;
			},
			setActions( state, actions ) {
				state.actions = actions;
			},
			togglePopup( state ) {
				state.isShowPopup = ! state.isShowPopup;
			},
			toggleLoadingPopup( state ) {
				state.loadingPopup = ! state.loadingPopup;
			},
			toggleDoingAction( state ) {
				state.doingAction = ! state.doingAction;
			},
		},
		actions: {
			...getActions(),
			replaceCurrent( { commit, state }, { sub_id, replace } ) {
				commit( 'setCurrent', {
					...state.currentPopupData,
					...replace,
				} );

				commit( 'setList', state.currentList.map( subscription => {
					if ( sub_id !== subscription.record_id.value ) {
						return subscription;
					}
					return {
						...subscription,
						...replace,
					};
				} ) );
			},
			openPopup( { commit, state, getters, dispatch }, entryID ) {
				const current = state.currentList[ entryID ] || {};

				commit( 'setCurrent', current );

				window.history.replaceState(
					'on_open_modal',
					document.title,
					createPath( {
						sub: current.record_id.value,
					} ),
				);

				if ( getters.currentSubscription.sub_id ) {
					commit( 'togglePopup' )
					return;
				}

				commit( 'toggleLoadingPopup' );

				const options = {
					...current?.links?.value?.plan_details || {},
				};

				dispatch( 'fetch', options ).then( response => {
					dispatch( 'replaceCurrent', response.data );

					commit( 'saveSubscription', response.data );
					commit( 'togglePopup' );

				} ).finally( () => {
					commit( 'toggleLoadingPopup' );
				} );
			},
			closePopup( { commit } ) {
				commit( 'togglePopup' );
				commit( 'clearCurrent' );

				window.history.replaceState(
					'on_open_modal',
					document.title,
					createPath( {}, {}, [ 'sub' ] ),
				);
			},
			addNote( { commit, dispatch, state }, note ) {

				const options = {
					...state.currentPopupData?.links?.value?.add_note || {},
					data: {
						sub_id: state.currentPopupData.record_id.value,
						order_id: state.currentPopupData.id.value,
						note,
					},
				};

				commit( 'toggleDoingAction' );

				return new Promise( resolve => dispatch( 'fetch', options ).then( response => {
					dispatch( 'replaceCurrent', response.data );

				} ).finally( () => {
					commit( 'toggleDoingAction' );
					resolve();
				} ) );
			},
			processAction( { commit, getters, dispatch }, { reason, type } ) {
				const options = {
					...getters.getCurrent?.links?.value[ type ],
					data: {
						form_id: getters.getCurrent._FORM_ID.value,
						reason,
					},
				};

				commit( 'toggleDoingAction' );

				return new Promise( resolve => dispatch( 'fetch', options ).then( response => {
					jfbEventBus.$CXNotice.add( {
						message: response.message,
						type: 'success',
						duration: 4000,
					} );
				} ).finally( () => {
					commit( 'toggleDoingAction' );
					resolve();
				} ) );
			},
		},
	} ),
};

const { renderCurrentPage } = window.JetFBActions;

renderCurrentPage( PaypalEntries, options );
