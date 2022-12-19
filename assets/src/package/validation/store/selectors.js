const selectors = {
	getRule( state, type ) {
		const index = state.ruleTypes.findIndex(
			( { value } ) => value === type,
		);

		if ( -1 === index ) {
			return false;
		}

		return state.ruleTypes[ index ];
	},
	readRule( state, rule ) {
		const { type = '' } = rule;

		if ( !type ) {
			return '';
		}

		/**
		 * @type {Function}
		 */
		const callback = state.ruleReaders[ type ] ?? false;

		if ( 'function' === typeof callback ) {
			return callback( rule );
		}

		return state.ruleReaders.default( rule );
	},
};

export default {
	...selectors,
};