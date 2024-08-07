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
			( { is_custom: isCustom = false, can_be_switched: canBeSwitched = false } ) => (
				isCustom || canBeSwitched
			),
		);
	},
	getCustomRenderStates( state ) {
		return state.renderStates.filter(
			( { is_custom: isCustom = false } ) => isCustom,
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
	getFunction( state, funcType ) {
		return state.functions.find(
			( { value } ) => value === funcType,
		);
	},
	getFunctionDisplay( state, funcType ) {
		return selectors.getFunction( state, funcType )?.display;
	},
};

export default {
	...selectors,
};