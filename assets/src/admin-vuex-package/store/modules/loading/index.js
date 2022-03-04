import state from './state';
import getters from './getters';
import mutations from './mutations';

export default {
	state: () => state,
	getters,
	mutations,
};