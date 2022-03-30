import showOverFlow from './show-overflow';
import renderType from './render-type';
import single from './single';

export default {
	state: () => (
		{
			...showOverFlow.state,
			...renderType.state,
			...single.state,
		}
	),
	getters: {
		...showOverFlow.getters,
		...renderType.getters,
		...single.getters,
	},
	mutations: {
		...showOverFlow.mutations,
		...renderType.mutations,
		...single.mutations,
	},
	actions: {},
};