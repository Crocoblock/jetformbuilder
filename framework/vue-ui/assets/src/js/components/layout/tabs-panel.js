const TabsPanel = {
	name: 'cx-vui-tabs-panel',
	template: '#cx-vui-tabs-panel',
	props: {
		tab: {
			type: String,
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		label: {
			type: String,
			default: ''
		},
	},
	data() {
		return {
			show: false,
		};
	},
	methods: {
	},
};

export default TabsPanel;