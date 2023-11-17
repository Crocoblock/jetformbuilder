import useLoopedAction from '../hooks/useLoopedAction';
import useActionsEdit from '../hooks/useActionsEdit';

const {
	      SelectControl,
      } = wp.components;

const {
	      useSelect,
      } = wp.data;

function SelectActionsControl() {
	const { updateActionObj } = useActionsEdit();

	const { action }  = useLoopedAction();
	const actionTypes = useSelect(
		select => select( 'jet-forms/actions' ).getActionsList(),
	);

	return <SelectControl
		value={ action.type }
		options={ actionTypes }
		onChange={ type => updateActionObj( action.id, { type } ) }
	>
		{ actionTypes.map( type => <option
			key={ action.id + '__' + type.value }
			value={ type.value }
			disabled={ type.disabled }
		>{ type.label }</option> ) }
	</SelectControl>;
}

export default SelectActionsControl;