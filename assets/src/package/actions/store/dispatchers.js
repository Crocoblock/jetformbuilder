import constants from './constants';
import selectors from './selectors';
import functions from './functions';
import withActionLocalizeScript from '../helpers/withActionLocalizeScript';

export default {
	[ constants.setCurrentAction ]: ( state, action ) => {
		const update = {};

		if ( 'function' === typeof action.item ) {
			update.currentAction = action.item( state.currentAction );
		}
		else {
			update.currentAction = action.item;
		}

		return {
			...state,
			...update,
		};
	},
	[ constants.setMeta ]: ( state, action ) => (
		{
			...state,
			meta: {
				...action.item,
			},
		}
	),
	[ constants.clearCurrent ]: ( state ) => (
		{
			...state,
			currentAction: {},
			meta: {},
		}
	),
	[ constants.setLoading ]: ( state, action ) => {
		const actionIndex = selectors.getLoadingIndex( state, action.state.id );
		const loading     = [ ...state.loadingState ];

		if ( -1 !== actionIndex ) {
			loading[ actionIndex ] = functions.getLoadingItem( action.state );
		}
		else {
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
				},
			},
		};
	},
	[ constants.updateCurrentConditions ]: ( state, action ) => {
		const { conditions = [] } = state.currentAction;

		const update = 'function' === typeof action.item ? action.item(
			conditions ) : action.item;

		return {
			...state,
			currentAction: {
				...state.currentAction,
				conditions: update,
			},
		};
	},
	[ constants.addCallback ]: ( state, action ) => (
		{
			...state,
			callbacks: {
				...state.callbacks,
				[ action.actionType ]: withActionLocalizeScript(
					action.actionType,
					action.callback,
				),
			},
		}
	),
	[ constants.addDetail ]: ( state, action ) => (
		{
			...state,
			details: {
				...state.details,
				[ action.actionType ]: action.item,
			},
		}
	),
	[ constants.addComputedField ]: ( state, action ) => {
		const computedFields = [
			...state.computedFields,
			{ field: action.field, settings: action.settings },
		].sort( ( { settings: current }, { settings: next } ) => {
			return (
				current?.priority ?? 10
			) - (
				next?.priority ?? 10
			);
		} );

		return {
			...state,
			computedFields,
		};
	},
	[ constants.editAction ]: ( state, action ) => {
		const list = state.list.map( current => {
			return current.value !== action.actionType
			       ? current
			       : {
					...current,
					...action.replace,
					value: action.actionType, // .value should not changed
				};
		} );

		return {
			...state,
			list,
		};
	},
	[ constants.openActionSettings ]: ( state, action ) => {
		const { index, item } = action;

		return {
			...state,
			meta: {
				index,
				modalType: 'settings',
			},
			currentAction: item,
		};
	},

};