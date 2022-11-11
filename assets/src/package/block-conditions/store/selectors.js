const selectors = {
	getFunctions( state ) {
		return state.functions;
	},
	getOperators( state ) {
		return state.operators;
	},
	getRenderStates( state ) {
		return state.renderStates;
	},
	getSwitchableRenderStates( state ) {
		return state.renderStates.filter(
			( { is_custom = false, can_be_switched = false } ) => (
				is_custom || can_be_switched
			),
		);
	},
	getCustomRenderStates( state ) {
		return state.renderStates.filter(
			( { is_custom = false } ) => is_custom,
		);
	},
	getOperator( state, operator ) {
		const index = state.operators.findIndex(
			( { value } ) => value === operator,
		);

		if ( -1 === index ) {
			return false;
		}

		return state.operators[ index ];
	},
	readCondition( state, condition ) {
		const { operator = '' } = condition;

		if ( !operator ) {
			return '';
		}

		/**
		 * @type {Function}
		 */
		const callback = state.conditionReaders[ operator ] ?? false;

		if ( 'function' === typeof callback ) {
			return callback( condition );
		}

		return state.conditionReaders.default( condition );
	},
};

export default {
	...selectors,
};