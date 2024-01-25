const { __, sprintf } = wp.i18n;

/* eslint-disable */
export default {
	methods: {
		__( value, context ) {
			return __( value, context );
		},
		sprintf( format, ...values ) {
			return sprintf( format, ...values );
		},
		__s( format, domain, ...values ) {
			return sprintf( __( format, domain ), ...values );
		}
	},
}