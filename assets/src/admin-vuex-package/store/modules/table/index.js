import state from './state';
import mutations from './mutations';
import getters from './getters';

export default {
	state: () => (
		{ ...state }
	),
	getters,
	mutations,
};