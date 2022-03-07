export default {
	state: () => ({
		doingAction: false,
	}),
	getters: {
		isDoing: state => {
			return state.doingAction;
		}
	},
	mutations: {
		toggleDoingAction( state ) {
			state.doingAction = ! state.doingAction;
		},
	},
};