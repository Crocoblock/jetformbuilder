const {
	      registerPlugin,
      } = wp.plugins;
const {
	      __,
	      sprintf,
      } = wp.i18n;

const addNotice = () => {
	const container = jQuery( '.interface-interface-skeleton__footer' );

	container.find( '.jet-fb-rating-message' ).remove();

	const message = sprintf(
		__(
			`Enjoyed <strong>JetFormBuilder</strong>? 
Please leave us a <a href="%s" target="_blank">★★★★★</a> rating. 
We really appreciate your support!`,
			'jet-form-builder',
		),
		'https://wordpress.org/support/plugin/jetformbuilder/reviews/?filter=5',
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