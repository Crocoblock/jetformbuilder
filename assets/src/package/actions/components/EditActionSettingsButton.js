import useActionCallback from '../hooks/useActionCallback';
import useLoopedAction from '../hooks/useLoopedAction';
import { __ } from '@wordpress/i18n';
import { useDispatch } from '@wordpress/data';
import { Button } from '@wordpress/components';
import { edit } from '@wordpress/icons';

function EditActionSettingsButton() {
	const { action, index } = useLoopedAction();

	const {
		      setCurrentAction,
		      setMeta,
	      } = useDispatch( 'jet-forms/actions' );

	const ActionCallback = useActionCallback( action.type );

	return <Button
		disabled={ !ActionCallback }
		size="small"
		icon={ edit }
		label={ __( 'Edit Action', 'jet-form-builder' ) }
		onClick={ () => {
			setCurrentAction( { ...action, index } );
			setMeta( { index, modalType: 'settings' } );
		} }
	/>;
}

export default EditActionSettingsButton;