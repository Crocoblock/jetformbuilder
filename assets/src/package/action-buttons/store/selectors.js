const selectors = {
	getButtonEdit( state, slug ) {
		return state.buttons[ slug ] ?? null;
	},
};

export default {
	...selectors,
};