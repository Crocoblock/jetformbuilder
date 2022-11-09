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
	getRenderStatesList( state ) {
		return state.renderStates.map( ( { value } ) => value );
	},
	getCustomRenderStates( state ) {
		return state.renderStates.filter(
			( { is_custom = false } ) => is_custom );
	},
	getCustomRenderStatesList( state ) {
		return selectors.getCustomRenderStates( state ).
			map( ( { value } ) => value );
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