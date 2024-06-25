import { __ } from '@wordpress/i18n';
import { ExternalLink } from '@wordpress/components';

function APIKeyHelp( { ...props } ) {
	return <div { ...props }>
		{ __(
			'How to obtain your MailChimp API Key?',
			'jet-form-builder',
		) }
		&nbsp;
		<ExternalLink
			href="https://mailchimp.com/help/about-api-keys/"
		>
			{ __( 'More info here', 'jet-form-builder' ) }
		</ExternalLink>
	</div>;
}

export default APIKeyHelp;