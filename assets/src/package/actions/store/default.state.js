import Functions from './functions';

export default {
	currentAction: {},
	callbacks: {},
	details: {},
	meta: {},
	loadingState: [
		Functions.getLoadingItem(),
	],
	computedFields: [],
	list: window.jetFormActionTypes.map( function ( action ) {
		return {
			value: action.id,
			label: action.name,
			disabled: !!action.disabled,
		};
	} ),
};