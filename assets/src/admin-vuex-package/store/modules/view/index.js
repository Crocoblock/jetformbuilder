import loading from '../loading';
import query from '../query';
import table from '../table';
import chooseColumn from '../choose-column';
import actions from './actions';
import action from '../action';

export default {
	actions,
	modules: {
		action,
		chooseColumn,
		loading,
		query,
		table,
	},
};