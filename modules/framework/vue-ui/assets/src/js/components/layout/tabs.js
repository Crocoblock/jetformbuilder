import { checkConditions } from '../../mixins/check-conditions';
import { oneOf } from '../../utils/assist';

const Tabs = {
	name: 'cx-vui-tabs',
	template: '#cx-vui-tabs',
	mixins: [ checkConditions ],
	props: {
		value: {
			type: [ String, Number ],
			default: ''
		},
		name: {
			type: String,
			default: ''
		},
		invert: {
			type: Boolean,
			default: false,
		},
		inPanel: {
			type: Boolean,
			default: false,
		},
		layout: {
			validator( value ) {
				return oneOf( value, [ 'horizontal', 'vertical' ] );
			},
			default: 'horizontal',
		},
		conditions: {
			type: Array,
			default() {
				return [];
			}
		},
	},
	data() {
		return {
			navList: [],
			activeTab: this.value,
		}
	},
	mounted() {

		const tabs = this.getTabs();

		this.navList = tabs;

		if ( ! this.activeTab ) {
			this.activeTab = tabs[0].name;
		}

		this.updateState();
	},
	methods: {
		isActive( name ) {
			return ( name === this.activeTab );
		},
		onTabClick( tab ) {
			this.activeTab = tab;
			this.$emit( 'input', this.activeTab );
			this.updateState();
		},
		updateState() {
			const tabs = this.getTabs();
			this.navList = tabs;
			tabs.forEach( tab => {
				tab.show = this.activeTab === tab.name;
			} );
		},
		getTabs() {

			const allTabs = this.$children.filter( item => {
				return 'cx-vui-tabs-panel' === item.$options.name;
			} );
			const tabs = [];

			allTabs.forEach( item => {
				if ( item.tab && this.name ) {
					if ( item.tab === this.name ) {
						tabs.push( item );
					}
				} else {
					tabs.push( item );
				}
			});

			return tabs;
		},
	},
};

export default Tabs;
