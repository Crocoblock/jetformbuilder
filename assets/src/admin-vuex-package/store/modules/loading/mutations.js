export default {
	toggleLoading( state, what ) {
		state.loading = {
			...state.loading,
			[ what ]: ! (
				state.loading[ what ] ?? false
			),
		};
	},
}