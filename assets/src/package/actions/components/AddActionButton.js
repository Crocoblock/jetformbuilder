import useActionsEdit from '../hooks/useActionsEdit';
import BaseAction from '../abstract/BaseAction';

const {
	      __,
      } = wp.i18n;

const {
	      Button,
      } = wp.components;

function AddActionButton() {
	const { actions, setActions } = useActionsEdit();

	return <Button
		isPrimary
		onClick={ () => {
			setActions( [ ...actions, { ...new BaseAction() } ] );
		} }
	>
		{ __( '+ New Action', 'jet-form-builder' ) }
	</Button>;
}

export default AddActionButton;