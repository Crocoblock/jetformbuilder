import PopoverItem from '../context/PopoverItem';

const { useContext } = wp.element;
const { Button } = wp.components;

function MacroFieldItem( { onClick } ) {
	const field = useContext( PopoverItem );

	const value = field.fullName
		? field.fullName()
		: `%${ field.value }%`;

	const baseLabel = typeof field.label === 'function'
		? field.label()
		: ( field.label || value );

	const isRepeater = Boolean( field.is_repeater );
	const isChild    = Boolean( field.is_repeater_child );

	const label = isRepeater
		? `${ baseLabel } (repeater)`
		: ( isChild ? `— ${ baseLabel }` : baseLabel );

	return (
		<Button
			style={{ whiteSpace: 'nowrap' }}
			isLink
			onClick={ () => onClick( value, field ) }
		>
			{ label }
		</Button>
	);
}

export default MacroFieldItem;
