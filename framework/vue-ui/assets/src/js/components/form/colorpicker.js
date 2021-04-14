import { directive as clickOutside } from 'v-click-outside-x';
import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';
import { Chrome } from '../../../../../node_modules/vue-color';

const Colorpicker = {
	name: 'cx-vui-colorpicker',
	template: '#cx-vui-colorpicker',
	mixins: [ checkConditions ],
	directives: { clickOutside },
	props: {
		type: {
			validator ( value ) {
				return oneOf( value, [ 'rgba', 'hsla', 'hex', 'hex8' ] );
			},
			default: 'rgba'
		},
		value: {
			type: [String],
			default: ''
		},
		size: {
			validator (value) {
				return oneOf( value, [ 'small', 'large', 'default' ] );
			},
			default: 'default'
		},
		name: {
			type: String
		},
		elementId: {
			type: String
		},
		conditions: {
			type: Array,
			default: function() {
				return [];
			}
		},
		// Wrapper related props (should be passed into wrapper component)
		preventWrap: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		wrapperCss: {
			type: Array,
			default: function() {
				return [];
			}
		},
	},
	components: {
		'chrome-picker': Chrome
	},
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId,
			panelActive: false,
		};
	},
	mounted() {

		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}
	},
	computed: {
		controlClasses: function() {
			let classesList = [ 'cx-vui-colorpicker' ];

			classesList.push( 'size-' + this.size );

			return classesList;
		},
		isCloseVisible: function() {
			return !this.currentValue ? false : true;
		}
	},
	methods: {
		setCurrentValue ( value ) {

			let colorValue = '';

			switch ( this.type ) {
				case 'rgba':
					colorValue = `rgba(${ value.rgba.r },${ value.rgba.g },${ value.rgba.b },${ value.rgba.a })`;
					break;

				case 'hsl':
					colorValue = `rgba(${ value.hsl.h },${ value.hsl.s }%,${ value.hsl.l }%,${ value.hsl.a })`;
					break;

				case 'hex':
					colorValue = value.hex;
					break;

				case 'hex8':
					colorValue = value.hex8;
					break;

				default:
					colorValue = '';
				break;
			}

			if ( colorValue === this.currentValue ) {
				return;
			}

			this.$emit( 'input', colorValue );
			this.currentValue = colorValue;
			this.$emit( 'on-change', colorValue );
		},
		onClickOutside( event ) {
			this.closePanel();
		},
		closePanel() {

			if ( this.panelActive ) {
				this.panelActive = false;
				this.$emit( 'on-panel-closed' );
			}
		},
		clearColor() {
			this.$emit( 'input', '' );
			this.currentValue = '';
			this.$emit( 'on-change', '' );
		}
	},
};

export default Colorpicker;
