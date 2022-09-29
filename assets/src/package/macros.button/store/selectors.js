const selectors = {
	getClientMacros( state ) {
		return state.macros.filter(
			/**
			 * @param macro {BaseMacro}
			 */
			function ( macro ) {
				return macro.isClientSide;
			},
		);
	},
	getServerMacros( state ) {
		return state.macros.filter(
			/**
			 * @param macro {BaseMacro}
			 */
			function ( macro ) {
				return macro.isServerSide;
			},
		);
	},
	getClientFilters( state ) {
		return state.filters.filter(
			/**
			 * @param macro {BaseFilter}
			 */
			function ( macro ) {
				return macro.isClientSide;
			},
		);
	},
	getServerFilters( state ) {
		return state.filters.filter(
			/**
			 * @param macro {BaseFilter}
			 */
			function ( macro ) {
				return macro.isServerSide;
			},
		);
	},
};

export default {
	...selectors,
};