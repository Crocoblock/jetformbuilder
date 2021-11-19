import { initClasses } from '../helpers/hooks/hooks-helper';

const { createReduxStore, register } = wp.data;

const DEFAULT_LOADING_STATE = {
	id: - 1,
	state: '',
	success: false,
	response: {},
	loading: false,
	buttonClassName: [ ...initClasses ],
};

const getLoadingItem = ( additional = {} ) => {
	const item = { ...DEFAULT_LOADING_STATE };
	if ( additional.state ) {
		item.buttonClassName = [ ...initClasses, additional.state ];
	}
	return { ...item, ...additional };
};

const DEFAULT_STATE = {
	currentAction: {},
	loadingState: [
		getLoadingItem(),
	],
};

const actions = {
	setCurrentAction( item ) {
		return {
			type: 'SET_CURRENT_ACTION',
			item,
		};
	},
	setLoading( item ) {
		return {
			type: 'SET_LOADING',
			state: {
				id: item.actionId,
				state: 'loading',
				loading: true,
			},
		};
	},
	setLoadingResult( item ) {
		return {
			type: 'SET_LOADING',
			state: {
				id: item.actionId,
				state: item.success ? 'is-valid' : 'is-invalid',
				success: item.success,
				response: item.response,
				loading: false,
			},
		};
	},
};

const selectors = {
	getCurrentAction( state ) {
		return state.currentAction;
	},
	getLoadingIndex( state, actionId ) {
		return state.loadingState.findIndex( action => action.id === actionId );
	},
	getLoading( state, actionId ) {
		const actionIndex = selectors.getLoadingIndex( state, actionId );

		return - 1 !== actionIndex ? state.loadingState[ actionIndex ] : DEFAULT_LOADING_STATE;
	},
	getCurrentLoading( state ) {
		const actionId = state.currentAction?.id;

		return selectors.getLoading( state, actionId );
	},
	dangerGetAllLoading( state ) {
		return state.loadingState;
	},
};

register( createReduxStore( 'jet-forms/actions', {
	reducer( state = DEFAULT_STATE, action ) {
		switch ( action.type ) {
			case 'SET_CURRENT_ACTION':
				return {
					...state,
					currentAction: action.item,
				};
			case 'SET_LOADING':
				const actionIndex = selectors.getLoadingIndex( state, action.state.id );
				const loading = [ ...state.loadingState ];

				if ( - 1 !== actionIndex ) {
					loading[ actionIndex ] = getLoadingItem( action.state );
				} else {
					loading.push( getLoadingItem( action.state ) );
				}

				return {
					...state,
					loadingState: loading,
				};
		}
		return state;
	},
	actions,
	selectors,
} ) );