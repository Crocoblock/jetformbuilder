export default {
	isLoading: state => what => {
		return (
			state.loading[ what ] ?? false
		);
	},
}