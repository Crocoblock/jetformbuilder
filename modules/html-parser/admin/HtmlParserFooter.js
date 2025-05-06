import { Button, Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useState } from '@wordpress/element';
import serialize from './serialize';

const { parseHTMLtoBlocks } = JetFormBuilderParser;

const getPostEditUrl = id => {
	const url = new URL( JetFormBuilderAdmin.edit_url );
	url.searchParams.set( 'post', id );

	return url.href;
};

export default function HtmlParserFooter( { clearHTML, rawHTML, setShowModal } ) {
	const [ isBusy, setIsBusy ] = useState( false );
	const createForm = async () => {
		setIsBusy( true );
		try {
			const blocks = parseHTMLtoBlocks( rawHTML );

			if ( !blocks.length ) {
				console.error( __( 'JFB: Could not parse blocks', 'jet-form-builder' ), rawHTML );
				setIsBusy( false );
				return;
			}

			const serialized = serialize( blocks );

			const response = await apiFetch( {
				method: 'POST',
				path: '/wp/v2/jet-form-builder',
				data: {
					title: __( 'Imported HTML Form', 'jet-form-builder' ),
					content: serialized,
					status: 'publish',
				},
			} );

			window.location.href = getPostEditUrl( response.id );

		} catch ( error ) {
			console.error( 'Failed to create form:', error );
			setIsBusy( false );
		}
	};

	return (
		<Flex justify="space-between">
			<Button
				variant="secondary"
				onClick={ clearHTML }
			>
				{ __( 'Back', 'jet-form-builder' ) }
			</Button>
			<Button
				variant="primary"
				onClick={ createForm }
				isBusy={ isBusy }
				disabled={ isBusy }
			>
				{ __( 'Create Form', 'jet-form-builder' ) }
			</Button>
		</Flex>
	);
}
