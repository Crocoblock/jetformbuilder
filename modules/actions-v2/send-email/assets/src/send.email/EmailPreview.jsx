import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { seen } from '@wordpress/icons';
import EmailPreviewModal from './EmailPreviewModal';

function EmailPreview( { settings } ) {
	const [ isOpen, setIsOpen ] = useState( false );

	return <>
		<Button
			variant="tertiary"
			icon={ seen }
			label={ __( 'Preview email', 'jet-form-builder' ) }
			showTooltip
			isSmall
			className="jet-fb-is-thick"
			disabled={ !settings.content?.trim() }
			onClick={ () => setIsOpen( true ) }
		/>
		{ isOpen && <EmailPreviewModal
			settings={ settings }
			onRequestClose={ () => setIsOpen( false ) }
		/> }
	</>;
}

export default EmailPreview;
