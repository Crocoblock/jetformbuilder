import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const Radio = {

	name: 'cx-vui-radio',
	template: '#cx-vui-radio',
	mixins: [ checkConditions ],
	props: {
		value: {
			default: ''
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String
		},
		optionsList: {
			type: Array,
			default() {
				return [];
			}
		},
		elementId: {
			type: String
		},
		conditions: {
			type: Array,
			default() {
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
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId,
			optionInFocus: null,
		};
	},
	watch: {
		value( val ) {
			this.setCurrentValue( val );
		},
	},
	mounted() {
		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}
	},
	methods: {
		handleEnter( event ) {
			this.$emit( 'on-enter', event );
		},
		handleClick( event ) {
			this.$emit( 'on-click', event );
		},
		handleFocus( event, value ) {

			if ( this.disabled ) {
				return;
			}

			this.optionInFocus = value;
			this.$emit( 'on-focus', event, value );

		},
		handleBlur ( event, value ) {

			if ( this.disabled ) {
				return;
			}

			if ( value === this.optionInFocus ) {
				this.optionInFocus = null;
			}

			this.$emit( 'on-blur', event, value );

		},
		handleInput ( event, value ) {

			if ( this.disabled ) {
				return;
			}

			this.setCurrentValue( value );

			this.$emit( 'input', this.currentValue );
			this.$emit( 'on-change', event );
		},
		isOptionInFocus( value ) {
			return value === this.optionInFocus;
		},
		setCurrentValue( value ) {

			if ( value !== this.currentValue ) {
				this.currentValue = value;
			}

		},
	},
};

export default Radio;
