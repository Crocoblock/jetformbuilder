import { Button } from '@wordpress/components';
import { external } from '@wordpress/icons';
import { useState, useEffect, useRef } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';

function PreviewButton() {
	const [ previewPage, setPreviewPage ] = useState( false );

	const isSavingForm = useSelect( select => {
		const coreEditor = select( 'core/editor' );

		return coreEditor.isSavingPost() || coreEditor.isAutosavingPost();
	}, [] );

	const { autosave } = useDispatch( 'core/editor' );

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
			autosave().finally( () => {
				previewPage.focus();
			} );

			return;
		}

		autosave().then( () => {
			setPreviewPage( window.open( JFBOnboardingConfig.previewURL ) );
		} );
	};

	return <Button
		icon={ external }
		onClick={ openPreviewPage }
	/>;
}

export default PreviewButton;