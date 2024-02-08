import useRepeaterState from '../../hooks/useRepeaterState';
import RepeaterStateContext from '../context/repeater.state';

const {
	      Button,
      } = wp.components;
const {
	      useContext,
      } = wp.element;

/**
 * @param  props {{ item, onSetState, functions, children }}
 * @return {JSX.Element}
 * @class
 */
function RepeaterAddNew( props ) {
	const {
		      item,
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
		icon={ 'plus-alt2' }
		isSecondary
		onClick={ () => addNewItem( item ) }
	>
		{ children }
	</Button>;
}

export default RepeaterAddNew;