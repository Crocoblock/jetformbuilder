import BaseControl from './base-control';

const { useInstanceId } = wp.compose;

function TextControl( {
						  label,
						  value,
						  help,
						  className,
						  onChange,
						  type = 'text',
						  baseProps = {},
						  ...props
					  } ) {

	const instanceId = useInstanceId( TextControl );
	const id = `jet-fb-text-control-${ instanceId }`;
	const onChangeValue = (
		event,
	) => onChange( event.target.value );

	return <BaseControl
		label={ label }
		id={ id }
		help={ help }
		className={ className }
		{ ...baseProps }
	>
		<input
			className="jet-fb-control__input"
			type={ type }
			id={ id }
			value={ value }
			onChange={ onChangeValue }
			{ ...props }
		/>
	</BaseControl>;
}

export default TextControl;