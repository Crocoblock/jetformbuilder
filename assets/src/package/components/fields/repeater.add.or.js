import RepeaterStateContext from '../../context/repeater.state';

const {
	      Button,
      } = wp.components;
const {
	      useContext,
      } = wp.element;

function RepeaterAddOrOperator( props ) {
	const {
		      functions,
		      children,
	      } = props;

	const { addNewItem } = functions ?? useContext( RepeaterStateContext );

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