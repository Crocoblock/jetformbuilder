import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

export default {
	state: () => (
		{ ...state }
	),
	getters,
	mutations,
	actions,
};