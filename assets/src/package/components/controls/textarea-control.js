import BaseControl from './base-control';

const { useInstanceId } = wp.compose;

function TextareaControl( {
							  label,
							  value,
							  help,
							  onChange,
							  rows = 4,
							  className,
							  baseProps = {},
							  ...props
						  } ) {

	const instanceId = useInstanceId( TextareaControl );
	const id = `jet-fb-textarea-control-${ instanceId }`;
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
		<textarea
			className="jet-fb-control__input"
			id={ id }
			rows={ rows }
			onChange={ onChangeValue }
			value={ value }
			{ ...props }
		/>
	</BaseControl>;
}

export default TextareaControl;