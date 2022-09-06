import useRepeaterState from '../../hooks/useRepeaterState';
import RepeaterStateContext from '../context/repeater.state';

const {
	      Button,
      } = wp.components;
const {
	      useContext,
      } = wp.element;

function RepeaterAddOrOperator( props ) {
	const {
		      onSetState,
		      functions,
		      children,
	      } = props;

	const { addNewItem } = functions
	?? useRepeaterState( onSetState )
	?? useContext( RepeaterStateContext );

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