import PopoverItem from '../context/PopoverItem';

const {
	      useContext,
      } = wp.element;
const {
	      Button,
      } = wp.components;

function MacroFieldItem( { onClick } ) {
	const field = useContext( PopoverItem );

	const value = field.fullName
	              ? field.fullName()
	              : `%${ field.value }%`;

	return <Button
		isLink
		onClick={ () => onClick( value ) }
	>
		{ value }
	</Button>;
}

export default MacroFieldItem;