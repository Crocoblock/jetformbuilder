const {
		  TextControl,
		  SelectControl,
		  BaseControl,
		  __experimentalNumberControl,
	  } = wp.components;

const { __ } = wp.i18n;
const { applyFilters, addFilter } = wp.hooks;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

function getGeneratorFields( genFunction, props ) {
	const {
			  attributes,
			  setAttributes,
			  editProps: { attrHelp },
		  } = props;

	switch ( genFunction ) {
		case 'num_range_manual':
			return <>
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
			</>;
		default:
			return applyFilters( 'jet.fb.select.radio.check.generator.controls', <TextControl
				key='generator_field'
				label='Field Name'
				value={ attributes.generator_field }
				help={ attrHelp( 'generator_field', attributes ) }
				onChange={ ( newValue ) => {
					setAttributes( { generator_field: newValue } );
				} }
			/>, genFunction, props );
	}
}

function getGeneratorAdditionalFields( genFunction, props ) {
	const {
			  attributes,
			  setAttributes,
			  editProps: { attrHelp },
		  } = props;

	switch ( genFunction ) {
		case 'num_range_manual':
			return null;
		default:
			return applyFilters( 'jet.fb.select.radio.check.generator.additionalControls', <>
				<TextControl
					key='from_generator__value_from_meta'
					label='Value from meta field'
					help={ attrHelp( 'value_from_meta' ) }
					value={ attributes.value_from_key }
					onChange={ value_from_key => {
						setAttributes( { value_from_key } );
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
			</>, genFunction, props );
	}

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
		{ getGeneratorFields( attributes.generator_function, props ) }
		{ getGeneratorAdditionalFields( attributes.generator_function, props ) }
	</>;
}

export default FromGeneratorsFields;