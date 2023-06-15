const Popup = {
	name: 'cx-vui-popup',
	template: '#cx-vui-popup',
	props: {
		value: {
			type: Boolean,
			default: false,
		},
		overlay: {
			type: Boolean,
			default: true,
		},
		close: {
			type: Boolean,
			default: true,
		},
		showOk: {
			type: Boolean,
			default: true,
		},
		showCancel: {
			type: Boolean,
			default: true,
		},
		header: {
			type: Boolean,
			default: true,
		},
		footer: {
			type: Boolean,
			default: true,
		},
		okLabel: {
			type: String,
			default: 'OK',
		},
		cancelLabel: {
			type: String,
			default: 'Cancel',
		},
		bodyWidth: {
			type: String,
			default: 'auto',
		},
	},
	data() {
		return {
			currentValue: this.value,
		};
	},
	watch: {
		value( val ) {
			this.setCurrentValue( val );
		}
	},
	methods: {
		handleCancel() {
			this.setCurrentValue( false );
			this.$emit( 'input', false );
			this.$emit( 'on-cancel' );
		},
		handleOk() {
			this.setCurrentValue( false );
			this.$emit( 'input', false );
			this.$emit( 'on-ok' );
		},
		setCurrentValue( value ) {

			if ( this.currentValue === value ) {
				return;
			}

			this.currentValue = value;
		},
	},
};

export default Popup;