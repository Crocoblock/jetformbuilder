import { checkConditions } from '../../mixins/check-conditions';

const Switcher = {

	name: 'cx-vui-switcher',
	template: '#cx-vui-switcher',
	mixins: [ checkConditions ],
	props: {
		value: {
			type: [String, Number, Boolean],
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
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
		returnTrue: {
			type: [String, Number, Boolean],
			default: true,
		},
		returnFalse: {
			type: [String, Number, Boolean],
			default: '',
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
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId,
			isOn: false,
			inFocus: false,
		};
	},
	watch: {
		value( val ) {

			this.setCurrentValue( val );

			if ( val === this.returnTrue ) {
				this.isOn = true;
			} else {
				this.isOn = false;
			}

		},
	},
	mounted() {

		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}

		if ( this.value === this.returnTrue ) {
			this.isOn = true;
		}

	},
	methods: {
		handleEnter( event ) {
			this.$emit( 'on-enter', event );
			this.switchState();
			this.inFocus = true;
		},
		handleFocus ( event ) {
			this.inFocus = true;
			this.$emit( 'on-focus', event );
		},
		handleBlur ( event ) {
			this.inFocus = false;
			this.$emit( 'on-blur', event );
		},
		switchState () {

			let value;

			this.isOn = ! this.isOn;

			if ( this.isOn ) {
				value = this.returnTrue;
			} else {
				value = this.returnFalse;
			}

			this.$emit( 'input', value );
			this.setCurrentValue( value );
			this.$emit( 'on-change', event );

			this.inFocus = false;

		},
		handleChange ( event ) {
			this.$emit( 'on-input-change', event );
		},
		setCurrentValue ( value ) {

			if ( value === this.currentValue ) {
				return;
			}

			this.currentValue = value;
		},
	},
};

export default Switcher;
