import BaseControl from './base-control';

const { useInstanceId } = wp.compose;

function SelectControl( {
							label,
							value,
							help,
							className,
							onChange,
							baseProps = {},
							options = [],
							...props
						} ) {

	const instanceId = useInstanceId( SelectControl );
	const id = `jet-fb-select-control-${ instanceId }`;
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
		<select
			className="jet-fb-control__input"
			id={ id }
			value={ value }
			onChange={ onChangeValue }
			{ ...props }
		>
			{ options.map( ( option, index ) => {
				const key =
						  option.id ||
						  `${ option.label }-${ option.value }-${ index }`;

				return (
					<option
						key={ key }
						value={ option.value }
						disabled={ option.disabled }
					>
						{ option.label }
					</option>
				);
			} ) }
		</select>
	</BaseControl>;
}

export default SelectControl;