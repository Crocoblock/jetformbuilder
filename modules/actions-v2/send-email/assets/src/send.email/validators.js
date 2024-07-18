export default [
	( { settings } ) => {
		return settings?.mail_to
		       ? false
		       : { type: 'empty', property: 'mail_to' };
	},
	( { settings } ) => {
		return settings?.content
		       ? false
		       : { type: 'empty', property: 'content' };
	},
	( { settings } ) => {
		if ( 'custom' !== settings?.mail_to ) {
			return false;
		}
		return settings?.custom_email
		       ? false
		       : { type: 'empty', property: 'custom_email' };
	},
	( { settings } ) => {
		if ( 'form' !== settings?.mail_to ) {
			return false;
		}
		return settings?.from_field
		       ? false
		       : { type: 'empty', property: 'from_field' };
	},
	( { settings } ) => {
		if ( 'custom' !== settings?.cc_from || ! settings.use_cc_bcc ) {
			return false;
		}
		return settings?.cc_email
		       ? false
		       : { property: 'cc_email' };
	},
	( { settings } ) => {
		if ( 'form' !== settings?.cc_from || ! settings.use_cc_bcc ) {
			return false;
		}
		return settings?.cc_field
		       ? false
		       : { property: 'cc_field' };
	},
	( { settings } ) => {
		if ( 'custom' !== settings?.bcc_from || ! settings.use_cc_bcc ) {
			return false;
		}
		return settings?.bcc_email
		       ? false
		       : { property: 'bcc_email' };
	},
	( { settings } ) => {
		if ( 'form' !== settings?.bcc_from || ! settings.use_cc_bcc ) {
			return false;
		}
		return settings?.bcc_field
		       ? false
		       : { property: 'bcc_field' };
	},
];