import { directive as clickOutside } from 'v-click-outside-x';
import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const Iconpicker = {

	name: 'cx-vui-iconpicker',
	template: '#cx-vui-iconpicker',
	mixins: [ checkConditions ],
	directives: { clickOutside },
	props: {
		value: {
			type: [String],
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
		autofocus: {
			type: Boolean,
			default: false
		},
		elementId: {
			type: String
		},
		autocomplete: {
			validator (value) {
				return oneOf(value, ['on', 'off']);
			},
			default: 'off'
		},
		conditions: {
			type: Array,
			default: function() {
				return [];
			}
		},
		iconBase: {
			type: String,
			default: '',
		},
		iconPrefix: {
			type: String,
			default: '',
		},
		icons: {
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
			filterQuery: '',
			panelActive: false,
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
		prefixedIcons() {
			let prefixedIcons = [];

			this.icons.forEach( icon => {
				prefixedIcons.push( this.iconPrefix + icon )
			} );

			return prefixedIcons;
		},
		filteredIcons() {
			if ( ! this.filterQuery ) {
				return this.prefixedIcons;
			} else {
				return this.prefixedIcons.filter( icon => {
					return icon.includes( this.filterQuery );
				});
			}
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
		handleKeyup( event ) {
			this.$emit( 'on-keyup', event );
		},
		handleFocus( event ) {
			this.panelActive = true;
			this.$emit( 'on-focus', event );
		},
		handleBlur( event ) {
			this.$emit( 'on-blur', event );
		},
		seclectIcon( icon ) {

			this.$emit( 'input', icon );
			this.setCurrentValue( icon );
			this.$emit( 'on-change', icon );

			this.closePanel();

		},
		handleInput( event ) {

			let value = event.target.value;

			this.filterQuery = value;
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
		onClickOutside( event ) {
			this.closePanel();
		},
		closePanel() {

			if ( this.panelActive ) {

				this.panelActive = false;
				this.filterQuery = '';

				this.$emit( 'on-panel-closed' );

			}

		}
	},
};

export default Iconpicker;
