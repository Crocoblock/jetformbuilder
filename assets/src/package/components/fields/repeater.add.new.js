import useRepeaterState from '../../helpers/hooks/useRepeaterState';

const { Button } = wp.components;

function RepeaterAddNew( props ) {
	const {
		item,
		onSetState,
		functions,
		children
	} = props;

	const { addNewItem } = functions ?? useRepeaterState( onSetState );

	return <Button
		isSecondary
		onClick={ () => addNewItem( item ) }
	>
		{ children }
	</Button>;
}

export default RepeaterAddNew;