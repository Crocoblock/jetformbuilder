import { __ } from '@wordpress/i18n';
import { useDispatch, useSelect } from '@wordpress/data';
import NoticeWithoutMargin from './NoticeWithoutMargin';

function ErrorNotice() {
	const error = useSelect( select => (
		select( 'jet-forms/use-form' ).getError()
	), [] );

	const { setError } = useDispatch( 'jet-forms/use-form' );

	return Boolean( error?.code ) && <NoticeWithoutMargin
		status="error"
		onDismiss={ () => setError( {} ) }
	>
		{ 'invalid_form_id' === error.message
		  ? __(
				'Related form field should be filled',
				'jet-form-builder-formless-actions-endpoints',
			)
		  : error.message }
	</NoticeWithoutMargin>;
}

export default ErrorNotice;