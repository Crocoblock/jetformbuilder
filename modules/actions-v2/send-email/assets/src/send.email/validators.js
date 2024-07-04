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
];