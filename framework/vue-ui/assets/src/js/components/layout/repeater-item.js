import { ElementMixin, HandleDirective } from 'vue-slicksort';

const RepeaterItem = {
	name: 'cx-vui-repeater-item',
	template: '#cx-vui-repeater-item',
	mixins: [ ElementMixin ],
	directives: { handle: HandleDirective },
	props: {
		title: {
			type: String,
		},
		subtitle: {
			type: String,
		},
		collapsed: {
			type: Boolean,
			default: true,
		},
		index: {
			type: Number,
		},
		customCss: {
			type: String,
		}
	},
	data() {
		return {
			fieldData: this.field,
			isCollapsed: this.collapsed,
			showConfirmTip: false,
		};
	},
	computed: {
		customCssClass() {
			return this.customCss;
		},
	},
	methods: {
		handleCopy() {
			this.$emit( 'clone-item', this.index );
		},
		handleDelete() {
			this.showConfirmTip = true;
		},
		confrimDeletion() {
			this.showConfirmTip = false;
			this.$emit( 'delete-item', this.index );
		},
		cancelDeletion() {
			this.showConfirmTip = false;
		},
	},
};

export default RepeaterItem;