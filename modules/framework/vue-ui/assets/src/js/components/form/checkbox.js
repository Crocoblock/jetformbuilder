import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const Checkbox = {

	name: 'cx-vui-checkbox',
	template: '#cx-vui-checkbox',
	mixins: [ checkConditions ],
	props: {
		returnType: {
			validator ( value ) {
				return oneOf( value, [ 'array', 'object', 'single' ] );
			},
			default: 'object'
		},
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
		returnTrue: {
			type: [ Boolean, String, Number ],
			default: true,
		},
		returnFalse: {
			type: [ Boolean, String, Number ],
			default: false,
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
			currentValues: this.value,
			currentId: this.elementId,
			optionInFocus: null,
		};
	},
	watch: {
		value( val ) {
			this.setCurrentValues( val );
		},
	},
	mounted() {
		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}
	},
	computed: {
		inputType() {
			if ( 'array' === this.returnType ) {
				return 'checkbox';
			} else {
				return 'hidden';
			}
		},
	},
	methods: {
		inputValue( optionValue ) {

			if ( 'checkbox' === this.inputType ) {
				return this.returnTrue;
			} else {
				if ( this.isChecked( optionValue ) ) {
					return this.returnTrue;
				} else {
					return this.returnFalse;
				}
			}
		},
		isChecked( optionValue ) {

			if ( ! this.currentValues ) {
				return false;
			}

			switch ( this.returnType ) {

				case 'single':

					return optionValue === this.currentValues;

				case 'array':

					return oneOf( optionValue, this.currentValues );

				case 'object':

					if ( ! this.currentValues[ optionValue ] ) {
						return false;
					} else {
						if ( this.currentValues[ optionValue ] === this.returnTrue ) {
							return true;
						} else {
							return false;
						}
					}

					break;

			};

		},
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
		handleParentFocus() {

			if ( this.disabled ) {
				return;
			}

			if ( null === this.optionInFocus && this.optionsList.length ) {
				this.optionInFocus = this.optionsList[0].value;
			}
		},
		handleInput ( event, value ) {

			if ( this.disabled ) {
				return;
			}

			this.updateValueState( value );

			this.$emit( 'input', this.currentValues );
			this.$emit( 'on-change', event );
		},
		isOptionInFocus( value ) {
			return value === this.optionInFocus;
		},
		updateValueState( value ) {

			switch ( this.returnType ) {

				case 'single':

					if ( value !== this.currentValues ) {
						this.currentValues = value;
					}

					break;

				case 'array':

					if ( ! oneOf( value, this.currentValues ) ) {
						this.currentValues.push( value );
					} else {
						this.currentValues.splice( this.currentValues.indexOf( value ), 1 );
					}

					break;

				case 'object':

					if ( ! this.currentValues[ value ] ) {
						this.$set( this.currentValues, value, this.returnTrue );
					} else {
						if ( this.currentValues[ value ] === this.returnTrue ) {
							this.$set( this.currentValues, value, this.returnFalse );
						} else {
							this.$set( this.currentValues, value, this.returnTrue );
						}
					}

					break;
			}

		},
		setCurrentValues( value ) {

			switch ( this.returnType ) {

				case 'single':

					if ( value !== this.currentValues ) {
						this.currentValues = value;
					}

					break;

				case 'array':
				case 'object':

					this.currentValues = value;
					break;

			};

		},
	},
};

export default Checkbox;
