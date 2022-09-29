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

function MacrosFields( {
	onClick = () => {},
	...props
} ) {
	return <MacrosFieldsTemplate { ...props }>
		<FieldItem onClick={ onClick }/>
	</MacrosFieldsTemplate>;
}

export default MacrosFields;