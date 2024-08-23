import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { useContext } from '@wordpress/element';
import FormAttributesContext from '../context/FormAttributesContext';

function UseFormButton( { disabled = false } ) {
	const { useForm } = useDispatch( 'jet-forms/use-form' );

	const {
		      formId,
		      shouldUpdateForm,
	      } = useContext( FormAttributesContext );

	const isExecuting = useSelect( select => (
		select( 'jet-forms/use-form' ).isExecuting()
	), [] );

	return <Button
		variant="primary"
		onClick={ () => useForm( { formId, shouldUpdateForm } ) }
		isBusy={ isExecuting }
		disabled={ isExecuting || disabled }
		__next40pxDefaultSize
	>
		{ __( 'Use the form', 'jet-form-builder' ) }
	</Button>;
}

export default UseFormButton;