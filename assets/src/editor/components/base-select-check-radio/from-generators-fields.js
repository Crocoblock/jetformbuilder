const {
		  TextControl,
		  SelectControl,
		  BaseControl,
		  __experimentalNumberControl,
	  } = wp.components;

const { __ } = wp.i18n;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

function FromGeneratorsFields( props ) {

	const {
			  attributes,
			  setAttributes,
			  editProps: { attrHelp },
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
		{ 'num_range_manual' === attributes.generator_function && <>
			<BaseControl
				label={ __( 'Start of range', 'jet-form-builder' ) }
			>
				<NumberControl
					labelPosition='top'
					step={ 0.01 }
					value={ attributes.generator_numbers_min }
					onChange={ newValue => {
						setAttributes( { generator_numbers_min: Number( newValue ) } );
					} }
				/>
			</BaseControl>
			<BaseControl
				label={ __( 'End of range', 'jet-form-builder' ) }
			>
				<NumberControl
					labelPosition='top'
					step={ 0.01 }
					value={ attributes.generator_numbers_max }
					onChange={ newValue => {
						setAttributes( { generator_numbers_max: Number( newValue ) } );
					} }
				/>
			</BaseControl>
			<BaseControl
				label={ __( 'Step', 'jet-form-builder' ) }
			>
				<NumberControl
					labelPosition='top'
					key='step'
					step={ 0.01 }
					value={ attributes.generator_numbers_step }
					onChange={ newValue => {
						setAttributes( { generator_numbers_step: Number( newValue ) } );
					} }
				/>
			</BaseControl>
		</> }
		{ 'num_range_manual' !== attributes.generator_function && <TextControl
			key='generator_field'
			label='Field Name'
			value={ attributes.generator_field }
			help={ attrHelp( 'generator_field', attributes ) }
			onChange={ ( newValue ) => {
				setAttributes( { generator_field: newValue } );
			} }
		/> }
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