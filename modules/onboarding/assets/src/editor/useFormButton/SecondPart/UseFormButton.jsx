import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

function UseFormButton( { disabled = false } ) {
	const { useForm } = useDispatch( 'jet-forms/use-form' );

	const isExecuting = useSelect( select => (
		select( 'jet-forms/use-form' ).isExecuting()
	), [] );

	return <Button
		variant="primary"
		onClick={ useForm }
		isBusy={ isExecuting }
		disabled={ isExecuting || disabled }
	>
		{ __( 'Use the form', 'jet-form-builder-pdf' ) }
	</Button>;
}

export default UseFormButton;