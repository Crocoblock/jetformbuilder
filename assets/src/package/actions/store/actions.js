import constants from './constants';

const {
	      dispatch,
      } = wp.data;

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
	addCallback( actionType, callback ) {
		return {
			type: constants.addCallback,
			actionType,
			callback,
		};
	},
	addDetail( actionType, item ) {
		return {
			type: constants.addDetail,
			actionType,
			item,
		};
	},
	addComputedField( field, settings = {} ) {
		return {
			type: constants.addComputedField,
			field,
			settings,
		};
	},
	editAction( actionType, replace ) {
		return {
			type: constants.editAction,
			actionType,
			replace,
		};
	},
	openActionSettings( { item, index } ) {
		dispatch( 'jet-forms/actions' ).setCurrentAction( {
			...item,
			index,
		} );

		return {
			type: constants.setMeta,
			item: {
				index,
				modalType: 'settings',
			},
		};
	},
};