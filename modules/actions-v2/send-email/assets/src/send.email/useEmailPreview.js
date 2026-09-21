import apiFetch from '@wordpress/api-fetch';
import { useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

function useEmailPreview( settings ) {
	const formId = useSelect(
		select => select( 'core/editor' ).getCurrentPostId(),
		[],
	);
	const [ preview, setPreview ] = useState( null );
	const [ error, setError ] = useState( '' );
	const [ attempt, setAttempt ] = useState( 0 );
	const { content, content_type: contentType, disable_format: disableFormat } = settings;

	useEffect( () => {
		const controller = new AbortController();
		setPreview( null );
		setError( '' );
		apiFetch( {
			path: '/jet-form-builder/v1/send-email/preview',
			method: 'POST',
			signal: controller.signal,
			data: {
				form_id: formId,
				content: content ?? '',
				content_type: contentType ?? '',
				disable_format: Boolean( disableFormat ),
			},
		} ).then( result => {
			if ( !controller.signal.aborted ) {
				setPreview( result );
			}
		} ).catch( () => {
			if ( !controller.signal.aborted ) {
				setError( __( 'Could not load the email preview. Please try again.', 'jet-form-builder' ) );
			}
		} );
		return () => controller.abort();
	}, [ formId, content, contentType, disableFormat, attempt ] );

	return { preview, error, retry: () => setAttempt( value => value + 1 ) };
}

export default useEmailPreview;
