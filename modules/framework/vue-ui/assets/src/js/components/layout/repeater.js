import { ContainerMixin } from 'vue-slicksort';
import { checkConditions } from '../../mixins/check-conditions';

const Repeater = {
	name: 'cx-vui-repeater',
	template: '#cx-vui-repeater',
	mixins: [ ContainerMixin, checkConditions ],
	props: {
		buttonLabel: {
			type: String,
		},
		buttonStyle: {
			type: String,
			default: 'accent',
		},
		buttonSize: {
			type: String,
			default: 'default',
		},
		value: {
			type: Array,
			default() {
				return [];
			}
		},
		distance: {
			type: Number,
			default: 20,
		},
		useDragHandle: {
			type: Boolean,
			default: true,
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
			inFocus: false,
		}
	},
	methods: {
		handleClick( event ) {
			this.$emit( 'add-new-item', event );
		},
	},
};

export default Repeater;