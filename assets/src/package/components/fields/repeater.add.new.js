import RepeaterStateContext from '../../context/repeater.state';

const {
	      Button,
      } = wp.components;
const {
	      useContext,
      } = wp.element;

function RepeaterAddNew( props ) {
	const {
		      item,
		      functions,
		      children,
	      } = props;

	const { addNewItem } = functions ?? useContext( RepeaterStateContext );

	return <Button
		isSecondary
		onClick={ () => addNewItem( item ) }
	>
		{ children }
	</Button>;
}

export default RepeaterAddNew;