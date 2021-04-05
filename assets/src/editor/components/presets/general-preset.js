const {
	GlobalField,
	AvailableMapField
} = JetFBComponents;

const { withPreset } = JetFBActions;

function GeneralPreset( {
							value,
							availableFields,
							isMapFieldVisible,
							isVisible,
							onChange,
						} ) {
	const position = 'general';

	const onChangeValue = ( newValue, name ) => {
		onChange( { ...value, [ name ]: newValue } );
	}

	return <>
		{ window.JetFormEditorData.presetConfig.global_fields.map( ( data, index ) => <GlobalField
			key={ data.name + index }
			value={ value }
			index={ index }
			data={ data }
			options={ data.options }
			onChangeValue={ onChangeValue }
			isVisible={ isVisible }
			position={ position }
		/> ) }

		{ value.from && (
			availableFields.map( ( field, index ) => <AvailableMapField
				key={ field + index }
				fieldsMap={ value.fields_map }
				field={ field }
				index={ index }
				onChangeValue={ onChangeValue }
				isMapFieldVisible={ isMapFieldVisible }
				value={ value }
			/> )
		) }
	</>;
}

export default withPreset( GeneralPreset );