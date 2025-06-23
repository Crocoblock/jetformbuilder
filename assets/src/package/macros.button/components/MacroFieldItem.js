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

	const label = typeof field.label === 'function' ? field.label() : value;

	return <Button
		isLink
		onClick={ () => onClick( value ) }
	>
		{ label }
	</Button>;
}

export default MacroFieldItem;