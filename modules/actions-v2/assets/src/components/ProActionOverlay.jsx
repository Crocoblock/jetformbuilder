import { __ } from '@wordpress/i18n';
import { ExternalLink, Flex } from '@wordpress/components';

function ProActionOverlay( { action } ) {

	return <Flex
		direction="column"
		justify="space-evenly"
		align="center"
	>
		<span>{ __(
			'This is paid addon. You can buy it here:',
			'jet-form-builder',
		) }</span>
		<ExternalLink
			href={ (
				action.proActionLink ??
				'https://jetformbuilder.com/pricing/'
			) }
		>
			jetformbuilder.com
		</ExternalLink>
	</Flex>;
}

export default ProActionOverlay;