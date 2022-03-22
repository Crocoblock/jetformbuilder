import getters from './getters';
import mutations from './mutations';

export default {
	state: () => (
		{
			notices: [],
		}
	),
	getters,
	mutations,
};