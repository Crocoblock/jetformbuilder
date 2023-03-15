const {
	      __,
      } = wp.i18n;

const variations = [
	{
		name: 'google',
		title: __( 'reCaptcha', 'jet-form-builder' ),
		icon: 'admin-site',
		scope: [ 'block', 'inserter', 'transform' ],
		attributes: {
			provider: 'google',
		},
	},
	{
		name: 'hcaptcha',
		title: __( 'hCaptcha', 'jet-form-builder' ),
		icon: 'cover-image',
		scope: [ 'block', 'inserter', 'transform' ],
		attributes: {
			provider: 'hcaptcha',
		},
	},
	{
		name: 'friendly',
		title: __( 'Friendly Captcha', 'jet-form-builder' ),
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