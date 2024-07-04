import SendEmailRender from './render';
import { __ } from '@wordpress/i18n';
import validators from './validators';

export default {
	type: 'send_email',
	label: __( 'Send Email', 'jet-form-builder' ),
	edit: SendEmailRender,
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
		<rect x="0" fill="none" width="20" height="20"/>
		<g>
			<path
				d="M19 14.5v-9c0-.83-.67-1.5-1.5-1.5H3.49c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5H17.5c.83 0 1.5-.67 1.5-1.5zm-1.31-9.11c.33.33.15.67-.03.84L13.6 9.95l3.9 4.06c.12.14.2.36.06.51-.13.16-.43.15-.56.05l-4.37-3.73-2.14 1.95-2.13-1.95-4.37 3.73c-.13.1-.43.11-.56-.05-.14-.15-.06-.37.06-.51l3.9-4.06-4.06-3.72c-.18-.17-.36-.51-.03-.84s.67-.17.95.07l6.24 5.04 6.25-5.04c.28-.24.62-.4.95-.07z"/>
		</g>
	</svg>,
	docHref: 'https://jetformbuilder.com/features/send-email/',
	category: 'communication',
	validators,
};
