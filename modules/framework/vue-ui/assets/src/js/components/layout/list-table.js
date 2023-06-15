import { checkConditions } from '../../mixins/check-conditions';

const ListTable = {
	name: 'cx-vui-list-table',
	template: '#cx-vui-list-table',
	mixins: [ checkConditions ],
	props: {
		conditions: {
			type: Array,
			default() {
				return [];
			}
		},
		isEmpty: {
			type: Boolean,
			default: false,
		},
		emptyMessage: {
			type: String,
			default: '',
		},
	},
};

export default ListTable;