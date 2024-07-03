import {
	SET_CURRENT_ACTION,
	SET_LOADING,
	UPDATE_CURRENT_CONDITIONS,
	SET_META,
	EDIT_META,
	CLEAR_CURRENT,
	ADD_COMPUTED_FIELD,
	EDIT_ACTION,
	REGISTER_ACTION,
	REGISTER_CATEGORY,
	SHOW_ACTIONS_INSERTER_MODAL,
} from './constants';
import { getLoadingItem } from './functions';

export function setCurrentAction( item = {} ) {
	return {
		type: SET_CURRENT_ACTION,
		item,
	};
}

export function setMeta( item ) {
	return {
		type: SET_META,
		item,
	};
}

export function editMeta( item ) {
	return {
		type: EDIT_META,
		item,
	};
}

export function clearCurrent() {
	return { type: CLEAR_CURRENT };
}

export function setLoading( { actionId } ) {
	return ( { dispatch, select } ) => {
		const loadingState = {
			id: actionId,
			state: 'loading',
			loading: true,
		};

		const actionIndex = select.getLoadingIndex( actionId );
		const loading     = [ ...select.getAllLoading() ];

		if ( actionIndex !== -1 ) {
			loading[ actionIndex ] = getLoadingItem( loadingState );
		}
		else {
			loading.push( getLoadingItem( loadingState ) );
		}

		dispatch( {
			type: SET_LOADING,
			payload: loading,
		} );
	};
}

export function setLoadingResult( item ) {
	return {
		type: SET_LOADING,
		state: {
			id: item.actionId,
			state: item.success ? 'is-valid' : 'is-invalid',
			success: item.success,
			response: item.response,
			loading: false,
		},
	};
}

export function updateCurrentSettings( item ) {
	return ( { select, dispatch } ) => {
		const currentAction = select.getCurrentAction();

		const updateSettings = {
			...select.getCurrentSettings(),
			...item,
		};

		dispatch( {
			type: SET_CURRENT_ACTION,
			item: {
				...currentAction,
				settings: {
					...currentAction.settings,
					[ currentAction.type ]: updateSettings,
				},
			},
		} );
	};
}

export function updateCurrentConditions( item ) {
	return {
		type: UPDATE_CURRENT_CONDITIONS,
		item,
	};
}

export function registerActions( types ) {
	return ( { dispatch } ) => {
		for ( const actionType of types ) {
			dispatch.registerAction( actionType );
		}
	};
}

export function registerAction( actionSettings ) {
	return ( { select, dispatch } ) => {
		const action = select.getAction( actionSettings.type );

		if ( !action ) {
			dispatch.addAction( actionSettings );

			return;
		}

		dispatch.addAction( actionSettings );
	};
}

/**
 * @param category {{ type: string, label: string }}
 * @returns {{type: string, category}}
 */
export function registerCategory( category ) {
	return {
		type: REGISTER_CATEGORY,
		category,
	};
}

export function addAction( actionSettings ) {
	return {
		type: REGISTER_ACTION,
		actionSettings,
	};
}

/**
 * @deprecated 3.4.0. Use registerAction instead of this
 *
 * @param actionType
 * @param callback
 * @returns {{actionSettings: {edit, type}, type: string}}
 */
export function addCallback( actionType, callback ) {
	return {
		type: REGISTER_ACTION,
		actionSettings: {
			type: actionType,
			edit: callback,
		},
	};
}

export function addComputedField( field, settings = {} ) {
	return {
		type: ADD_COMPUTED_FIELD,
		field,
		settings,
	};
}

/**
 * @deprecated 3.4.0. Use registerAction instead of this
 *
 * @param actionType
 * @param replace
 * @returns {{actionSettings: (*&{type}), type: string}}
 */
export function editAction( actionType, replace ) {
	return {
		type: EDIT_ACTION,
		actionSettings: {
			type: actionType,
			...replace,
		},
	};
}

export function openActionSettings( { item, index, scenario = '' } ) {
	return ( { dispatch } ) => {
		dispatch.setCurrentAction( {
			...item,
			index,
		} );
		dispatch.setMeta( {
			index,
			modalType: 'settings',
			scenario,
		} );
	};
}

/**
 * @param show {Boolean}
 */
export function showActionsInserterModal( show ) {
	return {
		type: SHOW_ACTIONS_INSERTER_MODAL,
		show,
	};
}
