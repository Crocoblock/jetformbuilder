const { sprintf, __ } = wp.i18n;

const help = {
	ipinfo_token: sprintf(
		// translators: %1$s - ipinfo.io website URL, %2$s - token dashboard URL
		__(
			'Sign in at <a href="%1$s" target="_blank" rel="noopener noreferrer">ipinfo.io</a> and get your API token <a href="%2$s" target="_blank" rel="noopener noreferrer">here</a>.',
			'jet-form-builder'
		),
		'https://ipinfo.io',
		'https://ipinfo.io/dashboard/token'
	),
};

const label = {
	ipinfo_token: __( 'API Token', 'jet-form-builder' ),
};

export { help, label };
