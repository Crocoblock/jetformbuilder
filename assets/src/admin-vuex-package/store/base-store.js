import action from './modules/action';

export default {
	state: {
		...action.state,
	},
	getters: {
		...action.getters,
	},
	mutations: {
		...action.mutations,
	},
	actions: {
		...action.actions
	},
}