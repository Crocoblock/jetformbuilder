import constants from './constants';

export default {
	[ constants.register ]( state, action ) {
		const { operators, functions } = action.items;

		state.operators = [ ...operators ];
		state.functions = [ ...functions ];

		return state;
	},
	[ constants.registerFunctionsFilters ]( state, action ) {
		state.functionFilters = {
			...state.functionFilters,
			...action.item,
		};

		return state;
	},
};