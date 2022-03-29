import showOverFlow from './show-overflow';
import renderType from './render-type';

export default {
	state: () => (
		{
			...showOverFlow.state,
			...renderType.state,
		}
	),
	getters: {
		...showOverFlow.getters,
		...renderType.getters,
	},
	mutations: {
		...showOverFlow.mutations,
		...renderType.mutations,
	},
	actions: {},
};