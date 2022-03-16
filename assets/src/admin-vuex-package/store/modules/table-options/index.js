import showOverFlow from './show-overflow';

export default {
	state: () => (
		{
			...showOverFlow.state
		}
	),
	getters: {
		...showOverFlow.getters,
	},
	mutations: {
		...showOverFlow.mutations,
	}
};