import showOverFlow from './show-overflow';
import renderType from './render-type';
import single from './single';
import emptyMessage from './empty-message';

export default {
	state: () => (
		{
			...showOverFlow.state,
			...renderType.state,
			...single.state,
			...emptyMessage.state,
		}
	),
	getters: {
		...showOverFlow.getters,
		...renderType.getters,
		...single.getters,
		...emptyMessage.getters,
	},
	mutations: {
		...showOverFlow.mutations,
		...renderType.mutations,
		...single.mutations,
		...emptyMessage.mutations,
	},
	actions: {},
};