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
	// eslint-disable-next-line react-hooks/rules-of-hooks
	?? useRepeaterState( onSetState )
	// eslint-disable-next-line react-hooks/rules-of-hooks
	?? useContext( RepeaterStateContext );

	return <Button
		isSecondary
		icon={ 'randomize' }
		onClick={ () => addNewItem( {
			__visible: false,
			or_operator: true,
		} ) }
	>
		{ children }
	</Button>;
}

export default RepeaterAddOrOperator;