export default {
	namespaced: true,
	state: () => (
		{
			messages: {},
		}
	),
	getters: {
		label: state => slug => {
			return state.messages[ slug ] ?? '';
		},
	},
	mutations: {
		insert( state, messages ) {
			state.messages = JSON.parse( JSON.stringify( messages ) );
		},
	},
};