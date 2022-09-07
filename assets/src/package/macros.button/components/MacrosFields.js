import MacrosFieldsTemplate from './MacrosFieldsTemplate';
import PopoverItem from '../context/PopoverItem';

const {
	      useContext,
      } = wp.element;
const {
	      Button,
      } = wp.components;

function FieldItem( { onClick } ) {
	const field = useContext( PopoverItem );

	return <Button
		isLink
		onClick={ () => onClick( field.value ) }
	>
		{ '%' + field.value + '%' }
	</Button>;
}

function MacrosFields( {
	onClick = () => {},
	...props
} ) {
	return <MacrosFieldsTemplate { ...props }>
		<FieldItem onClick={ onClick }/>
	</MacrosFieldsTemplate>;
}

export default MacrosFields;