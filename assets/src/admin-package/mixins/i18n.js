import { sprintf, __ } from '@wordpress/i18n';

/* eslint-disable @wordpress/i18n-no-variables, @wordpress/i18n-text-domain */

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