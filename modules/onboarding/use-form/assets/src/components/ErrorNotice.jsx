import { useDispatch, useSelect } from '@wordpress/data';
import NoticeWithoutMargin from './NoticeWithoutMargin';

function ErrorNotice() {
	const error = useSelect( select => (
		select( 'jet-forms/use-form' ).getError()
	), [] );

	const { setError } = useDispatch( 'jet-forms/use-form' );

	return Boolean( error?.message ) && <NoticeWithoutMargin
		status="error"
		onDismiss={ () => setError( {} ) }
	>
		{ error.message }
	</NoticeWithoutMargin>;
}

export default ErrorNotice;