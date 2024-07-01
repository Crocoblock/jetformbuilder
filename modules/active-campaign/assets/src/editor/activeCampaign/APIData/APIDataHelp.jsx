import { __ } from '@wordpress/i18n';
import { ExternalLink } from '@wordpress/components';

function APIDataHelp( { ...props } ) {
	return <div { ...props }>
		{ __(
			'How to obtain your ActiveCampaign API URL and Key?',
			'jet-form-builder',
		) }
		&nbsp;
		<ExternalLink
			href="https://help.activecampaign.com/hc/en-us/articles/207317590-Getting-started-with-the-API"
		>
			{ __( 'More info here', 'jet-form-builder' ) }
		</ExternalLink>
	</div>;
}

export default APIDataHelp;