import useRepeaterState from '../../helpers/hooks/useRepeaterState';

const { Button } = wp.components;

function RepeaterAddOrOperator( props ) {
	const {
		      onSetState,
		      functions,
		      children,
	      } = props;

	const { addNewItem } = functions ?? useRepeaterState( onSetState );

	return <Button
		isSecondary
		onClick={ () => addNewItem( {
			__visible: false,
			or_operator: true,
		} ) }
	>
		{ children }
	</Button>;
}

export default RepeaterAddOrOperator;