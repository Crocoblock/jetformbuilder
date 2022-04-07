export default {
	namespaced: true,
	state: () => (
		{
			options: {},
		}
	),
	getters: {
		all: state => {
			return state.options;
		}
	},
	mutations: {
		insert( state, options ) {
			state.options = options;
		}
	}
};