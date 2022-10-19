const {
	      ToolBarFields,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      BlockName,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
      } = JetFBComponents;
const {
	      useIsAdvancedValidation,
      } = JetFBHooks;
const {
	      __,
      } = wp.i18n;
const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;
const {
	      PanelBody,
	      __experimentalInputControl,
	      __experimentalNumberControl,
      } = wp.components;

let { InputControl, NumberControl } = wp.components;

if ( typeof InputControl === 'undefined' ) {
	InputControl = __experimentalInputControl;
}

if ( typeof NumberControl === 'undefined' ) {
	NumberControl = __experimentalNumberControl;
}

export default function NumberEdit( props ) {
	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey },
	      } = props;

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
					<BlockLabel/>
					<BlockName/>
					<BlockDescription/>
				</PanelBody>
				<PanelBody title={ __( 'Value settings', 'jet-form-builder' ) }>
					<BlockAdvancedValue/>
				</PanelBody>
				<FieldSettingsWrapper { ...props }>
					<NumberControl
						label={ __( 'Min Value' ) }
						labelPosition="top"
						key="min"
						value={ attributes.min }
						onChange={ min => setAttributes( { min } ) }
					/>
					<NumberControl
						label={ __( 'Max Value' ) }
						labelPosition="top"
						key="max"
						value={ attributes.max }
						onChange={ max => setAttributes( { max } ) }
					/>
					<NumberControl
						label={ __( 'Step' ) }
						labelPosition="top"
						key="step"
						step={ 0.01 }
						value={ attributes.step }
						onChange={ step => setAttributes( { step } ) }
					/>
				</FieldSettingsWrapper>
				<PanelBody
					title={ __( 'Validation', 'jet-form-builder' ) }
				>
					<ValidationToggleGroup/>
					{ isAdvancedValidation && <>
						<ValidationBlockMessage name="empty"/>
						<ValidationBlockMessage name="number_max"/>
						<ValidationBlockMessage name="number_min"/>
					</> }
				</PanelBody>
				<AdvancedFields/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<NumberControl
					placeholder={ attributes.placeholder }
					key={ uniqKey( 'place_holder_block' ) }
					min={ attributes.min || 0 }
					max={ attributes.max || 1000 }
					step={ attributes.step || 1 }
				/>
			</FieldWrapper>
		</div>,
	];
}