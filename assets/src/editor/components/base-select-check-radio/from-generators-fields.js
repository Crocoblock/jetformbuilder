const {
	TextControl,
	SelectControl,
} = wp.components;

function FromGeneratorsFields( props ) {

	const {
		attributes,
		setAttributes,
		editProps: { attrHelp }
	} = props;

	return <>
		<SelectControl
			key='generator_function'
			label='Generator Function'
			labelPosition='top'
			value={ attributes.generator_function }
			onChange={ ( newValue ) => {
				setAttributes( { generator_function: newValue } );
			} }
			options={ window.JetFormSelectFieldData.generators_list }
		/>
		<TextControl
			key='generator_field'
			label='Field Name'
			value={ attributes.generator_field }
			help={ attrHelp( 'generator_field', attributes ) }
			onChange={ ( newValue ) => {
				setAttributes( { generator_field: newValue } );
			} }
		/>
		<TextControl
			key='from_generator__value_from_meta'
			label='Value from meta field'
			help={ attrHelp( 'value_from_meta' ) }
			value={ attributes.from_generator__value_from_meta }
			onChange={ ( newValue ) => {
				setAttributes( { from_generator__value_from_meta: newValue } );
			} }
		/>
		<TextControl
			key='calculated_value_from_key'
			label='Calculated value from meta field'
			help={ attrHelp( 'calculated_value_from_key' ) }
			value={ attributes.calculated_value_from_key }
			onChange={ ( newValue ) => {
				setAttributes( { calculated_value_from_key: newValue } );
			} }
		/>
	</>;
}

export default FromGeneratorsFields;