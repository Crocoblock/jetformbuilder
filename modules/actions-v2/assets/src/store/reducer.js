import {
	SET_CURRENT_ACTION,
	SET_META,
	EDIT_META,
	CLEAR_CURRENT,
	SET_LOADING,
	UPDATE_CURRENT_CONDITIONS,
	REGISTER_ACTION,
	REGISTER_CATEGORY,
	ADD_COMPUTED_FIELD,
	EDIT_ACTION,
	SHOW_ACTIONS_INSERTER_MODAL,
} from './constants';
import withActionLocalizeScript from '../helpers/withActionLocalizeScript';
import DEFAULT_STATE from './default.state';

// eslint-disable-next-line max-lines-per-function
export default function ( state = DEFAULT_STATE, action ) {
	switch ( action?.type ) {
		case SET_CURRENT_ACTION:
			const update = {};

			if ( typeof action.item === 'function' ) {
				update.currentAction = action.item( state.currentAction );
			}
			else {
				update.currentAction = action.item;
			}

			return {
				...state,
				...update,
			};

		case SET_META:
			return {
				...state,
				meta: {
					...action.item,
				},
			};

		case EDIT_META:
			return {
				...state,
				meta: {
					...state.meta,
					...action.item,
				},
			};

		case CLEAR_CURRENT:
			return {
				...state,
				currentAction: {},
				meta: {},
			};

		case SET_LOADING:
			return {
				...state,
				loadingState: action.payload,
			};

		case UPDATE_CURRENT_CONDITIONS:
			const { conditions = [] } = state.currentAction;

			const updateConditions = typeof action.item === 'function'
			                         ? action.item( conditions )
			                         : action.item;

			return {
				...state,
				currentAction: {
					...state.currentAction,
					conditions: updateConditions,
				},
			};

		case REGISTER_ACTION:
			const { actionSettings } = action;

			// backward compatibility
			if ( !actionSettings.hasOwnProperty( 'label' ) ) {
				actionSettings.label = window.jetFormActionTypes.find(
					currentAction => (
						currentAction.id === actionSettings.type
					) )?.name;
			}

			return {
				...state,
				types: [
					...state.types,
					{
						...actionSettings,
						edit: withActionLocalizeScript(
							actionSettings.type,
							actionSettings.edit,
						),
					},
				],
			};

		case REGISTER_CATEGORY:
			return {
				...state,
				categories: [
					...state.categories,
					{
						...action.category,
					},
				],
			};

		case ADD_COMPUTED_FIELD:
			const computedFields = [
				...state.computedFields,
				{ field: action.field, settings: action.settings },
			].sort( ( current, next ) => (
				(
					current.settings?.priority ?? 10
				) - (
					next.settings?.priority ?? 10
				)
			) );

			return {
				...state,
				computedFields,
			};

		case EDIT_ACTION:
			const { actionSettings: editActionSettings } = action;

			if ( 'edit' in editActionSettings ) {
				editActionSettings.edit = withActionLocalizeScript(
					editActionSettings.type,
					editActionSettings.edit,
				);
			}

			const types = state.types.map( current => (
				current.type !== editActionSettings.type ? current : {
					...current,
					...editActionSettings,
				}
			) );

			return {
				...state,
				types,
			};

		case SHOW_ACTIONS_INSERTER_MODAL:
			return {
				...state,
				showActionsInserterModal: action.show,
			};

		default:
			return state;
	}
}
