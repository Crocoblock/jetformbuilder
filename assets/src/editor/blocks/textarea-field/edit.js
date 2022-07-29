const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationMessage,
      } = JetFBComponents;

const { useIsAdvancedValidation } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	      TextareaControl,
	      PanelBody,
	      __experimentalNumberControl,
      } = wp.components;

let { NumberControl } = wp.components;

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

export default function TextareaEdit( props ) {

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	const changeNumberValue = ( key, newValue ) => {
		const value = (
			              newValue && newValue > 0
		              ) ? parseInt( newValue ) : null;
		setAttributes( { [ key ]: value } );
	};

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props }>
				<NumberControl
					label={ __( 'Min length (symbols)' ) }
					labelPosition="top"
					key="minlength"
					min={ 1 }
					value={ attributes.minlength }
					onChange={ ( newValue ) => changeNumberValue( 'minlength',
						newValue ) }
				/>
				<NumberControl
					label={ __( 'Max length (symbols)' ) }
					labelPosition="top"
					key="maxlength"
					min={ 1 }
					value={ attributes.maxlength }
					onChange={ ( newValue ) => changeNumberValue( 'maxlength',
						newValue ) }
				/>
			</FieldSettingsWrapper>
			<PanelBody
				title={ __( 'Validation', 'jet-form-builder' ) }
			>
				<ValidationToggleGroup/>
				{ isAdvancedValidation && <>
					<ValidationMessage name="empty"/>
					<ValidationMessage name="char_max"/>
					<ValidationMessage name="char_min"/>
				</> }
			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextareaControl
					key={ uniqKey( 'place_holder_block' ) }
					placeholder={ attributes.placeholder }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>,
	];
}
