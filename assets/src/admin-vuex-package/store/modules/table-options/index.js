import renderType from './render-type';
import single from './single';
import emptyMessage from './empty-message';

export default {
	state: () => (
		{
			...renderType.state,
			...single.state,
			...emptyMessage.state,
		}
	),
	getters: {
		...renderType.getters,
		...single.getters,
		...emptyMessage.getters,
	},
	mutations: {
		...renderType.mutations,
		...single.mutations,
		...emptyMessage.mutations,
	},
	actions: {},
};