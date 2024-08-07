/* eslint-disable import/no-extraneous-dependencies */
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
		tooltipPosition="top"
		onClick={ () => {
			setCurrentAction( { ...action, index } );
			setMeta( { index, modalType: 'settings' } );
		} }
	/>;
}

// backward compatibility
window.JetFBComponents                          = window?.JetFBComponents ?? {};
window.JetFBComponents.EditActionSettingsButton = EditActionSettingsButton;

export default EditActionSettingsButton;