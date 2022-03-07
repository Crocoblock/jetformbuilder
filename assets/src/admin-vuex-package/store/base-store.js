import doingAction from './modules/doing-action';

export default {
	state: {
		...doingAction.state,
	},
	getters: {
		...doingAction.getters,
	},
	mutations: {
		...doingAction.mutations,
	}
}