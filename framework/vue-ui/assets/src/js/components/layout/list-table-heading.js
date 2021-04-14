const ListTableHeading = {
	name: 'cx-vui-list-table-heading',
	template: '#cx-vui-list-table-heading',
	props: {
		slots: {
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

export default ListTableHeading;