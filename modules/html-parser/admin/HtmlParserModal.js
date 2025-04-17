import { Modal, TextareaControl, Button } from '@wordpress/components';
import { useState, createElement } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import parseHTMLtoBlocks from '../assets/src/parseHTMLtoBlocks';

export default function HtmlParserModal( { setShowModal } ) {
	const [ html, setHtml ] = useState( '' );
	const [ isParsing, setParsing ] = useState( false );

	const handleSubmit = () => {
		setParsing( true );

		try {
			const blocks = parseHTMLtoBlocks( html );

			wp.data.dispatch( 'core/block-editor' ).replaceBlocks(
				wp.data.select( 'core/block-editor' ).getSelectedBlockClientId(),
				blocks
			);

			setShowModal( false );
		} catch ( error ) {
			console.error( 'Parse error:', error );
		} finally {
			setParsing( false );
		}
	};

	return createElement(
		Modal,
		{
			title: __( 'Import HTML Form', 'jet-form-builder' ),
			onRequestClose: () => setShowModal( false ),
		},
		createElement( TextareaControl, {
			label: __( 'Paste your HTML here', 'jet-form-builder' ),
			value: html,
			onChange: setHtml,
			rows: 12,
		} ),
		createElement(
			Button,
			{
				isPrimary: true,
				onClick: handleSubmit,
				disabled: isParsing,
			},
			isParsing ? __( 'Parsing...', 'jet-form-builder' ) : __( 'Import' )
		)
	);
}