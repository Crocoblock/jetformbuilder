import constants from './constants';

const dispatchers = {
	[ constants.register ]( state, action ) {
		const { operators, functions, render_states } = action.items;

		state.operators = [ ...operators ];
		state.functions = [ ...functions ];
		state.renderStates = [ ...render_states ];

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
	[ constants.deleteRenderStates ]( state, action ) {
		let items = Array.isArray( action.items ) ? [ ...action.items ] : [ action.items ];

		state.renderStates = state.renderStates.filter( ( { value } ) => (
			! items.includes( value )
		) );

		return state;
	},
};

export default {
	...dispatchers,
};