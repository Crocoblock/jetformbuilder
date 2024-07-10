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

	/* eslint-disable react-hooks/rules-of-hooks */

	const { addNewItem } = functions
	?? useRepeaterState( onSetState )
	?? useContext( RepeaterStateContext );

	/* eslint-disable react-hooks/rules-of-hooks */

	return <Button
		icon={ 'plus-alt2' }
		isSecondary
		onClick={ () => addNewItem( item ) }
	>
		{ children }
	</Button>;
}

export default RepeaterAddNew;