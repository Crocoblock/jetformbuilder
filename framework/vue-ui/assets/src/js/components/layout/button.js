import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const Button = {
	name: 'cx-vui-button',
	template: '#cx-vui-button',
	mixins: [ checkConditions ],
	props: {
		type: {
			validator ( value ) {
				return oneOf( value, [ 'button', 'submit', 'reset' ] );
			},
			default: 'button'
		},
		buttonStyle: {
			validator ( value ) {
				return oneOf( value, [ 'default', 'accent', 'link-accent', 'link-error', 'accent-border', 'default-border' ] );
			},
			default: 'default'
		},
		size: {
			validator ( value ) {
				return oneOf( value, [ 'default', 'mini', 'link' ] );
			},
			default: 'default'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		loading: {
			type: Boolean,
			default: false
		},
		customCss: {
			type: String,
		},
		url: {
			type: String,
		},
		target: {
			type: String,
		},
		tagName: {
			validator( value ) {
				return oneOf( value, [ 'a', 'button' ] );
			},
			default: 'button'
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
	},
	data() {
		return {
			baseClass: 'cx-vui-button',
		};
	},
	computed: {
		classesList() {

			let classesList = [
				this.baseClass,
				this.baseClass + '--style-' + this.buttonStyle,
				this.baseClass + '--size-' + this.size,
			];

			if ( this.loading ) {
				classesList.push( this.baseClass + '--loading' );
			}

			if ( this.disabled ) {
				classesList.push( this.baseClass + '--disabled' );
			}

			if ( this.customCss ) {
				classesList.push( this.customCss );
			}

			return classesList;
		},
		tagAtts() {

			let atts = {};

			if ( 'a' === this.tagName ) {

				if ( this.url ) {
					atts.href = this.url;
				}

				if ( this.target ) {
					atts.target = this.target;
				}

			} else {
				atts.type = this.type;
			}

			return atts;
		}
	},
	methods: {
		handleClick() {

			if ( this.loading || this.disabled ) {
				return;
			}

			this.$emit( 'click', event );
		}
	},
};

export default Button;