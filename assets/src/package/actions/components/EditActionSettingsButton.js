import useActionCallback from '../hooks/useActionCallback';
import useLoopedAction from '../hooks/useLoopedAction';

const {
	      __,
      } = wp.i18n;

const {
	      useDispatch,
      } = wp.data;

const {
	      Button,
      } = wp.components;

function EditActionSettingsButton() {
	const { action, index } = useLoopedAction();

	const {
		      setCurrentAction,
		      setMeta,
	      } = useDispatch( 'jet-forms/actions', [] );

	const ActionCallback = useActionCallback( action.type );

	return <Button
		disabled={ !ActionCallback }
		icon="edit"
		label={ __( 'Edit Action', 'jet-form-builder' ) }
		onClick={ () => {
			setCurrentAction( { ...action, index } );
			setMeta( { index, modalType: 'settings' } );
		} }
	/>;
}

export default EditActionSettingsButton;