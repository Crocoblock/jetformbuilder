import constants from './constants';

const { doAction } = wp.hooks;

const dispatchers = {
	[ constants.register ]( state, action ) {
		const { operators, functions, render_states: renderStates } = action.items;

		state.operators    = [ ...operators ];
		state.functions    = [ ...functions ];
		state.renderStates = [ ...renderStates ];

		doAction(
			'jet.fb.change.blockConditions.renderState',
			state.renderStates,
		);

		return state;
	},
	[ constants.addRenderState ]( state, action ) {
		state.renderStates.push( action.item );

		doAction(
			'jet.fb.change.blockConditions.renderState',
			state.renderStates,
		);

		return state;
	},
	[ constants.addRenderStates ]( state, action ) {
		for ( const item of action.items ) {
			state.renderStates.push( item );
		}

		doAction(
			'jet.fb.change.blockConditions.renderState',
			state.renderStates,
		);

		return state;
	},
	[ constants.deleteRenderStates ]( state, action ) {
		const items = Array.isArray( action.items )
		            ? [ ...action.items ]
		            : [ action.items ];

		state.renderStates = state.renderStates.filter(
			( { value } ) => !items.includes( value ),
		);

		doAction(
			'jet.fb.change.blockConditions.renderState',
			state.renderStates,
		);

		return state;
	},
};

export default {
	...dispatchers,
};