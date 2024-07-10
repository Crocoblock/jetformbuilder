import { registerPlugin } from '@wordpress/plugins';
import { sprintf, __ } from '@wordpress/i18n';

const addNotice = () => {
	const container = jQuery( '.interface-interface-skeleton__footer' );

	container.find( '.jet-fb-rating-message' ).remove();

	const message = sprintf(
		// translators: %1$s - link to the wp org, %2$s - link to the crocoblock support
		__(
			`Liked <strong>JetFormBuilder</strong>? Please <a href="%1$s" target="_blank">rate it ★★★★★</a>. For troubleshooting, contact <a href="%2$s" target="_blank">Crocoblock support</a>.`,
			'jet-form-builder',
		),
		'https://wordpress.org/support/plugin/jetformbuilder/reviews/?filter=5',
		'https://support.crocoblock.com/support/home/',
	);

	container.append(
		`<div
class="jet-fb-rating-message" 
style="display: flex; flex: 1; justify-content: flex-end;"
>
	<div style="padding: 0.2em">${ message }</div>
</div>`,
	);
};

registerPlugin(
	'jf-rating-popover',
	{
		render: () => {
			addNotice();

			return null;
		},
	},
);