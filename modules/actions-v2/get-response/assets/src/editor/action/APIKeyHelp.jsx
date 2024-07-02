import { __ } from '@wordpress/i18n';
import { ExternalLink } from '@wordpress/components';

function APIKeyHelp( { ...props } ) {
	return <div { ...props }>
		{ __(
			'How to obtain your GetResponse API Key?',
			'jet-form-builder',
		) }
		&nbsp;
		<ExternalLink
			href="https://app.getresponse.com/api"
		>
			{ __( 'More info here', 'jet-form-builder' ) }
		</ExternalLink>
	</div>;
}

export default APIKeyHelp;