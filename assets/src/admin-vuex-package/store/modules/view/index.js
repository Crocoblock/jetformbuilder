import loading from '../loading';
import query from '../query';
import table from '../table';
import chooseColumn from '../choose-column';
import actions from './actions';

export default {
	strict: true,
	actions,
	modules: {
		chooseColumn,
		loading,
		query,
		table,
	},
};