import constants from './constants';
import { dispatch } from '@wordpress/data';

export default {
	setCurrentAction( item = {} ) {
		return {
			type: constants.setCurrentAction,
			item,
		};
	},
	setMeta( item ) {
		return {
			type: constants.setMeta,
			item,
		};
	},
	editMeta( item ) {
		return {
			type: constants.editMeta,
			item,
		};
	},
	clearCurrent() {
		return { type: constants.clearCurrent };
	},
	setLoading( item ) {
		return {
			type: constants.setLoading,
			state: {
				id: item.actionId,
				state: 'loading',
				loading: true,
			},
		};
	},
	setLoadingResult( item ) {
		return {
			type: constants.setLoadingResult,
			state: {
				id: item.actionId,
				state: item.success ? 'is-valid' : 'is-invalid',
				success: item.success,
				response: item.response,
				loading: false,
			},
		};
	},
	updateCurrentSettings( item ) {
		return {
			type: constants.updateCurrentSettings,
			item,
		};
	},
	updateCurrentConditions( item ) {
		return {
			type: constants.updateCurrentConditions,
			item,
		};
	},
	registerActions: ( types ) => ( { dispatch } ) => {
		for ( const actionType of types ) {
			dispatch.registerAction( actionType );
		}
	},
	/**
	 * @param actionSettings {{
	 *     type: string,
	 *     label: string,
	 *     edit: Function,
	 *     icon: Object,
	 *     category: string,
	 *     docHref: string,
	 *     provideEvents: Function
	 *     disableConditions: Boolean,
	 *     disabled: Boolean,
	 *     fixed: Boolean
	 * }}
	 * @returns {(function({select: *, dispatch: *}): void)|*}
	 */
	registerAction: ( actionSettings ) => ( { select, dispatch } ) => {
		const action = select.getAction( actionSettings.type );

		if ( !action ) {
			dispatch.addAction( actionSettings );

			return;
		}

		dispatch.addAction( actionSettings );
	},
	/**
	 * @param category {{ type: string, label: string }}
	 * @returns {{type: string, category}}
	 */
	registerCategory( category ) {
		return {
			type: constants.registerCategory,
			category,
		};
	},
	addAction( actionSettings ) {
		return {
			type: constants.registerAction,
			actionSettings,
		};
	},
	/**
	 * @deprecated 3.4.0. Use registerAction instead of this
	 *
	 * @param actionType
	 * @param callback
	 * @returns {{actionSettings: {edit, type}, type: string}}
	 */
	addCallback( actionType, callback ) {
		return {
			type: constants.registerAction,
			actionSettings: {
				type: actionType,
				edit: callback,
			},
		};
	},
	addComputedField( field, settings = {} ) {
		return {
			type: constants.addComputedField,
			field,
			settings,
		};
	},
	/**
	 * @deprecated 3.4.0. Use registerAction instead of this
	 *
	 * @param actionType
	 * @param replace
	 * @returns {{actionSettings: (*&{type}), type: string}}
	 */
	editAction( actionType, replace ) {
		return {
			type: constants.editAction,
			actionSettings: {
				type: actionType,
				...replace,
			},
		};
	},
	openActionSettings( { item, index, scenario = '' } ) {
		dispatch( 'jet-forms/actions' ).setCurrentAction( {
			...item,
			index,
		} );

		return {
			type: constants.setMeta,
			item: {
				index,
				modalType: 'settings',
				scenario,
			},
		};
	},
	/**
	 * @param show {Boolean}
	 */
	showActionsInserterModal( show ) {
		return {
			type: constants.showActionsInserterModal,
			show,
		};
	},
};