import { __ } from '@wordpress/i18n';
// eslint-disable-next-line import/no-extraneous-dependencies
import { commentAuthorAvatar } from '@wordpress/icons';

export default [
	{
		type: 'login',
		label: __( 'User Login', 'jet-form-builder' ),
		icon: commentAuthorAvatar,
		disabled: true,
		category: 'user',
		proActionLink: 'https://jetformbuilder.com/addons/user-login/'
	},
	{
		type: 'redirect_to_woo_checkout',
		label: __(
			'Add to Cart & Redirect to Checkout',
			'jet-form-builder',
		),
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
			<rect x="0" fill="none" width="20" height="20"/>
			<g>
				<path
					d="M6 13h9c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1V4H2c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1v2h13l-4 7H6v1zm-.5 3c.83 0 1.5.67 1.5 1.5S6.33 19 5.5 19 4 18.33 4 17.5 4.67 16 5.5 16zm9 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z"/>
			</g>
		</svg>,
		disabled: true,
		proActionLink: 'https://jetformbuilder.com/addons/woocommerce-cart-checkout-action/'
	},
];