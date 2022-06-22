import constants from './constants';

const dispatchers = {
	[ constants.register ]( state, action ) {
		const { operators, functions, render_states } = action.items;

		state.operators = [ ...operators ];
		state.functions = [ ...functions ];
		state.renderStates = [ ...render_states ];

		return state;
	},
	[ constants.registerFunctionsFilters ]( state, action ) {
		state.functionFilters = {
			...state.functionFilters,
			...action.item,
		};

		return state;
	},
	[ constants.addRenderState ]( state, action ) {
		state.renderStates.push( action.item );

		return state;
	},
	[ constants.addRenderStates ]( state, action ) {
		for ( const item of action.items ) {
			state.renderStates.push( item );
		}

		return state;
	},
};

export default {
	...dispatchers
};