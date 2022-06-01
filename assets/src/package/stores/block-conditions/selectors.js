const selectors = {
	getFunctions( state ) {
		return state.functions;
	},
	getOperators( state ) {
		return state.operators;
	}
};

export default {
	...selectors,
};