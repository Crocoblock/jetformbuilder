import showOverFlow from './show-overflow';
import renderType from './render-type';
import single from './single';
import emptyMessage from './empty-message';
import footerHeading from './footer-heading';

export default {
	state: () => (
		{
			...showOverFlow.state,
			...renderType.state,
			...single.state,
			...emptyMessage.state,
			...footerHeading.state,
		}
	),
	getters: {
		...showOverFlow.getters,
		...renderType.getters,
		...single.getters,
		...emptyMessage.getters,
		...footerHeading.getters,
	},
	mutations: {
		...showOverFlow.mutations,
		...renderType.mutations,
		...single.mutations,
		...emptyMessage.mutations,
		...footerHeading.mutations,
	},
	actions: {},
};