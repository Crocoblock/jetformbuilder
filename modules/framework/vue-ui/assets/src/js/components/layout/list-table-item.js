import { checkConditions } from '../../mixins/check-conditions';

const ListTableItem = {
	name: 'cx-vui-list-table-item',
	template: '#cx-vui-list-table-item',
	mixins: [ checkConditions ],
	props: {
		slots: {
			type: Array,
			default() {
				return [];
			}
		},
		conditions: {
			type: Array,
			default() {
				return [];
			}
		},
		className: {
			type: String,
			default: '',
		},
	},
};

export default ListTableItem;