import constants from './constants';
import selectors from './selectors';
import functions from './functions';
import withActionLocalizeScript from '../../helpers/actions/action-wrapper';

export default {
	[ constants.setCurrentAction ]: ( state, action ) => (
		{
			...state,
			currentAction: action.item,
		}
	),
	[ constants.setLoading ]: ( state, action ) => {
		const actionIndex = selectors.getLoadingIndex( state, action.state.id );
		const loading = [ ...state.loadingState ];

		if ( - 1 !== actionIndex ) {
			loading[ actionIndex ] = functions.getLoadingItem( action.state );
		} else {
			loading.push( functions.getLoadingItem( action.state ) );
		}

		return {
			...state,
			loadingState: loading,
		};
	},
	[ constants.updateCurrentSettings ]: ( state, action ) => {
		const { settings, type } = state.currentAction;

		const updateSettings = {
			...selectors.getCurrentSettings( state ),
			...action.item,
		};

		return {
			...state,
			currentAction: {
				...state.currentAction,
				settings: {
					...settings,
					[ type ]: updateSettings,
				}
			},
		};
	},
	[ constants.addCallback ]: ( state, action ) => (
		{
			...state,
			callbacks: {
				...state.callbacks,
				[ action.actionType ]: withActionLocalizeScript( action.actionType, action.callback ),
			}
		}
	),

};