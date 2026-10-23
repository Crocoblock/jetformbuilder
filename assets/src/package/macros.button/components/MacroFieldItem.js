import PopoverItem from '../context/PopoverItem';

const { useContext } = wp.element;
const { Button } = wp.components;

/**
 * Field help could be a string with HTML or a function,
 * the native tooltip needs a plain text.
 */
function getHelpText( help ) {
	const text = 'function' === typeof help ? help() : help;

	if ( 'string' !== typeof text ) {
		return undefined;
	}

	return text.replace( /<[^>]*>/g, '' ).trim() || undefined;
}

function MacroFieldItem( { onClick } ) {
	const field = useContext( PopoverItem );

	const value = field.fullName
		? field.fullName()
		: `%${ field.value }%`;

	const baseLabel = typeof field.label === 'function'
		? field.label()
		: ( field.label || value );

	const title = getHelpText( field.help );

	const isRepeater = Boolean( field.is_repeater );
	const isChild    = Boolean( field.is_repeater_child );

	const label = isRepeater
		? `${baseLabel} (repeater)`
		: baseLabel;
	const prefix = isChild ? '- ' : '';

	if (field.supports_option_label) {
		return (
			<div className="jet-fb-macro-field-item" style={{ whiteSpace: 'nowrap' }}>
				<div className="jet-fb-macro-field-item__label">
					{label}
				</div>
				<div className="jet-fb-macro-field-item__formats">
					- <Button
						isLink
						onClick={() => onClick(value, field)}
					>
						Format: value
					</Button> <br/>
					- <Button
						isLink
						onClick={() => onClick(value, field, 'option-label')}
					>
						Format: label value
					</Button>
				</div>
			</div>
		);
	}

	return (
		<>
		{ prefix }
			<Button
				style={{ whiteSpace: 'nowrap' }}
				title={ title }
				isLink
				onClick={ () => onClick( value, field ) }
			>
				{ label }
			</Button>
		</>
	);
}

export default MacroFieldItem;
