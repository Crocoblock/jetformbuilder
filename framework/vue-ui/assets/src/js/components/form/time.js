import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';
import VueTimepicker from 'vue2-timepicker';

const Time = {
	name: 'cx-vui-time',
	template: '#cx-vui-time',
	components: { VueTimepicker },
	mixins: [ checkConditions ],
	props: {
		format: {
			type: String,
			default: 'HH:mm'
		},
		minValue: {
			type: Number,
			default: 4800
		},
		maxValue: {
			type: Number,
			default: 0
		},
		minuteInterval: {
			type: Number,
			default: 1
		},
		secondInterval: {
			type: Number,
			default: 1
		},
		hideClearButton: {
			type: Boolean,
			default: false
		},
		closeOnComplete: {
			type: Boolean,
			default: false
		},
		autoScroll: {
			type: Boolean,
			default: true
		},
		hourRange: {
			type: Array,
			default: function() {
				return null;
			}
		},
		minuteRange: {
			type: Array,
			default: function() {
				return null;
			}
		},
		secondRange: {
			type: Array,
			default: function() {
				return null;
			}
		},
		hideDisabledHours: {
			type: Boolean,
			default: false
		},
		hideDisabledMinutes: {
			type: Boolean,
			default: false
		},
		hideDisabledSeconds: {
			type: Boolean,
			default: false
		},
		hideDisabledItems: {
			type: Boolean,
			default: false
		},
		advancedKeyboard: {
			type: Boolean,
			default: false
		},
		blurDelay: {
			type: Number,
			default: 300
		},
		manualDnput: {
			type: Boolean,
			default: false
		},
		manualInputTimeout: {
			type: Number,
			default: 1000
		},
		hideDropdown: {
			type: Boolean,
			default: false
		},
		fixedDropdownButton: {
			type: Boolean,
			default: false
		},
		dropDirection: {
			validator (value) {
				return oneOf( value, [ 'down', 'up', 'auto' ] );
			},
			default: 'down'
		},
		containerId: {
			type: String,
			default: ''
		},
		dropOffsetHeight: {
			type: Number,
			default: 160
		},
		lazy: {
			type: Boolean,
			default: true
		},
		debugMode: {
			type: Boolean,
			default: true
		},
		type: {
			validator ( value ) {
				return oneOf(value, [ 'time' ]);
			},
			default: 'time'
		},
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
		disabled: {
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
		autocomplete: {
			validator (value) {
				return oneOf(value, ['on', 'off']);
			},
			default: 'off'
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
			var classesList = [ 'cx-vui-time' ]

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
		handleOpen ( event ) {
			this.$emit( 'on-open', event );
		},
		handleClose ( event ) {
			this.$emit( 'on-close', event );
		},
		handleError ( event ) {
			this.$emit( 'on-error', event );
		},
		handleInput ( value ) {
			this.$emit( 'input', value );
			this.setCurrentValue( value );
			this.$emit( 'on-change', value );
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

export default Time;
