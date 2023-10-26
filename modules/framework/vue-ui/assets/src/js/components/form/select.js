import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const SelectPlain = {

	name: 'cx-vui-select',
	template: '#cx-vui-select',
	mixins: [ checkConditions ],
	props: {
		value: {
			type: [String, Number, Array],
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
		optionsList: {
			type: Array,
			default: function() {
				return [];
			}
		},
		groupsList: {
			type: Array,
			default: function() {
				return [];
			}
		},
		disabled: {
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
		multiple: {
			type: Boolean,
			default: false
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
		remote: {
			type: Boolean,
			default: false
		},
		remoteCallback: {
			type: Function
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
			options: this.optionsList,
			currentValue: this.value,
			currentId: this.elementId,
			groups: this.groupsList,
		};
	},
	watch: {
		value( val ) {
			this.storeCurrentValue( val );
		},
		optionsList( options ) {
			this.setOptions( options );
		},
	},
	created() {

		if ( this.multiple ) {

			if ( this.currentValue && 'object' !== typeof this.currentValue ) {
				this.currentValue = [ this.currentValue ];
			}

		} else {

			if ( this.currentValue && 'object' === typeof this.currentValue ) {
				this.currentValue = this.currentValue[0];
			}

		}

	},
	mounted() {

		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}

		if ( this.remote && this.remoteCallback ) {

			const promise = this.remoteCallback();

			if ( promise && promise.then ) {
				promise.then( options => {
					if ( options ) {
						this.options = options;
					}
				} );
			}

		}

	},
	methods: {
		controlClasses() {
			var classesList = [ 'cx-vui-select' ]
			classesList.push( 'size-' + this.size );
			return classesList;
		},
		handleFocus ( event ) {
			this.$emit( 'on-focus', event );
		},
		handleBlur ( event ) {
			this.$emit( 'on-blur', event );
		},
		handleInput() {
			this.$emit( 'input', this.currentValue );
			this.$emit( 'on-input', this.currentValue );
			this.$emit( 'on-change', event );
		},
		storeCurrentValue( value ) {

			if ( this.multiple ) {

				if ( oneOf( value, this.currentValue ) ) {
					return;
				}

				if ( 'object' === typeof value ) {
					if ( '[object Array]' === Object.prototype.toString.call( value ) ) {
						this.currentValues.concat( value );
					} else {
						this.currentValues.push( value );
					}
				} else {
					this.currentValue.push( value );
				}

			} else {

				if ( value === this.currentValue ) {
					return;
				}

				this.currentValue = value;
			}

		},
		setOptions( options ) {
			this.options = options;
		},
		isOptionSelected( option ) {

			if ( ! this.currentValue ) {
				return false;
			}

			if ( this.multiple ) {
				return oneOf( option.value, this.currentValue );
			} else {
				return option.value === this.currentValue;
			}

		},
	},
};

export default SelectPlain;
