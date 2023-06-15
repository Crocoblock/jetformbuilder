import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const Input = {

	name: 'cx-vui-textarea',
	template: '#cx-vui-textarea',
	mixins: [ checkConditions ],
	props: {
		value: {
			type: [String, Number],
			default: ''
		},
		size: {
			validator (value) {
				return oneOf( value, [ 'small', 'large', 'default', 'fullwidth' ] );
			},
			default: 'default'
		},
		placeholder: {
			type: String,
			default: ''
		},
		rows: {
			type: Number
		},
		disabled: {
			type: Boolean,
			default: false
		},
		error: {
			type: Boolean,
			default: false
		},
		readonly: {
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
	computed: {
		controlClasses() {

			var classesList = [ 'cx-vui-textarea' ]

			classesList.push( 'size-' + this.size );

			if ( this.error ) {
				classesList.push( 'has-error' );
			}

			return classesList;
		},
	},
	methods: {
		handleEnter( event ) {
			this.$emit( 'on-enter', event );
		},
		handleKeydown( event ) {
			this.$emit( 'on-keydown', event );
		},
		handleKeypress( event ) {
			this.$emit( 'on-keypress', event );
		},
		handleKeyup ( event ) {
			this.$emit( 'on-keyup', event );
		},
		handleFocus ( event ) {
			this.$emit( 'on-focus', event );
		},
		handleBlur ( event ) {
			this.$emit( 'on-blur', event );
		},
		handleInput ( event ) {
			let value = event.target.value;
			this.$emit( 'input', value );
			this.setCurrentValue( value );
			this.$emit( 'on-change', event );
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

export default Input;
