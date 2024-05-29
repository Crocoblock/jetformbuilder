import { Button } from '@wordpress/components';
import { external } from '@wordpress/icons';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useSelect } from '@wordpress/data';

function PreviewButton() {
	const [ previewPage, setPreviewPage ] = useState( false );

	const isSavingForm = useSelect( select => {
		return select( 'core/editor' ).isSavingPost();
	}, [] );

	const wasSaving = useRef( false );

	useEffect( () => {
		if ( !previewPage ) {
			return;
		}
		if ( !wasSaving.current && isSavingForm ) {
			wasSaving.current = true;
		}

		if ( wasSaving.current && !isSavingForm ) {
			// The post has finished saving
			previewPage.location.reload();
			wasSaving.current = false; // Reset the flag
		}
	}, [ isSavingForm ] );

	const openPreviewPage = () => {
		if ( previewPage && !previewPage?.closed ) {
			previewPage.focus();

			return;
		}

		setPreviewPage( window.open( JFBOnboardingConfig.previewURL ) );
	};

	return <Button
		variant="tertiary"
		icon={ external }
		onClick={ openPreviewPage }
	/>;
}

export default PreviewButton;