const {
	      __,
      } = wp.i18n;

const variations = [
	{
		name: 'google',
		title: __( 'reCaptcha', 'jet-form-builder' ),
		description: __(
			`reCAPTCHA v3 allows you to verify if an interaction 
is legitimate without any user interaction.`,
			'jet-form-builder',
		),
		icon: 'admin-site',
		scope: [ 'block', 'inserter', 'transform' ],
		attributes: {
			provider: 'google',
		},
	},
	{
		name: 'hcaptcha',
		title: __( 'hCaptcha', 'jet-form-builder' ),
		description: __(
			`hCaptcha is an anti-bot solution that protects user privacy 
and rewards websites. It is the most popular reCAPTCHA alternative.`,
			'jet-form-builder',
		),
		icon: 'cover-image',
		scope: [ 'block', 'inserter', 'transform' ],
		attributes: {
			provider: 'hcaptcha',
		},
	},
	{
		name: 'friendly',
		title: __( 'Friendly Captcha', 'jet-form-builder' ),
		description: __(
			`Friendly Captcha is a powerful anti-spam service that 
blocks spam-bots without annoying captcha images and protects user privacy.`,
			'jet-form-builder',
		),
		icon: 'share-alt',
		scope: [ 'block', 'inserter', 'transform' ],
		attributes: {
			'provider': 'friendly',
		},
	},
];

variations.forEach( ( variation ) => {
	if ( variation.isActive ) {
		return;
	}
	variation.isActive = ( blockAttributes, variationAttributes ) => (
		blockAttributes.provider === variationAttributes.provider
	);
} );

export default variations;