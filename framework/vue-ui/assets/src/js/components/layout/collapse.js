import { checkConditions } from '../../mixins/check-conditions';

const Collapse = {
	name: 'cx-vui-collapse',
	template: '#cx-vui-collapse',
	mixins: [ checkConditions ],
	props: {
		collapsed: {
			type: Boolean,
			default: false
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
			state: '',
		};
	},
	mounted() {
		if ( this.collapsed ) {
			this.state = 'collapsed';
		}
	},
	computed: {
		iconArrow() {
			if ( 'collapsed' === this.state ) {
				return 'dashicons-arrow-right-alt2';
			} else {
				return 'dashicons-arrow-down-alt2';
			}
		},
	},
	methods: {
		switchState() {

			if ( 'collapsed' === this.state ) {
				this.state = '';
			} else {
				this.state = 'collapsed';
			}

			this.$emit( 'state-switched', this.state );

		},
	},
};

export default Collapse;