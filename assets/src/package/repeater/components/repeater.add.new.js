import useRepeaterState from '../../hooks/useRepeaterState';
import RepeaterStateContext from '../context/repeater.state';

const {
	      Button,
      } = wp.components;
const {
	      useContext,
      } = wp.element;

function RepeaterAddNew( props ) {
	const {
		      item,
		      onSetState,
		      functions,
		      children,
	      } = props;

	const { addNewItem } = functions
	?? useRepeaterState( onSetState )
	?? useContext( RepeaterStateContext );

	return <Button
		icon={ 'plus-alt2' }
		isSecondary
		onClick={ () => addNewItem( item ) }
	>
		{ children }
	</Button>;
}

export default RepeaterAddNew;