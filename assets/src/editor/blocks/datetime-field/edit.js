const {
	      ToolBarFields,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
	      AdvancedInspectorControl,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
      } = JetFBComponents;
const {
	      useInsertMacro,
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
	      TextControl,
	      TextareaControl,
	      ToggleControl,
	      PanelBody,
      } = wp.components;

export default function DateTimeEdit( props ) {
	const blockProps = useBlockProps();

	const [ minInput, updateMin ] = useInsertMacro( 'min' );
	const [ maxInput, updateMax ] = useInsertMacro( 'max' );

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const isAdvancedValidation = useIsAdvancedValidation();

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
					<BlockAdvancedValue
						help={ __(
							'Plain date should be in yyyy-MM-ddThh:mm format',
							'jet-form-builder',
						) }
						style={ { marginBottom: '1em' } }
					/>
					<AdvancedInspectorControl
						value={ attributes.min }
						label={ __( 'Starting from date', 'jet-form-builder' ) }
						onChangePreset={ min => setAttributes( { min } ) }
						onChangeMacros={ updateMin }
					>
						{ ( { instanceId } ) => <TextareaControl
							rows={ 1 }
							id={ instanceId }
							ref={ minInput }
							value={ attributes.min }
							help={ __(
								'Plain date should be in yyyy-MM-ddThh:mm format',
								'jet-form-builder',
							) }
							onChange={ min => setAttributes( { min } ) }
						/> }
					</AdvancedInspectorControl>
					<AdvancedInspectorControl
						value={ attributes.max }
						label={ __( 'Limit dates to', 'jet-form-builder' ) }
						onChangePreset={ max => setAttributes( { max } ) }
						onChangeMacros={ updateMax }
					>
						{ ( { instanceId } ) => <TextareaControl
							rows={ 1 }
							id={ instanceId }
							ref={ maxInput }
							value={ attributes.max }
							help={ __(
								'Plain date should be in yyyy-MM-ddThh:mm format',
								'jet-form-builder',
							) }
							onChange={ max => setAttributes( { max } ) }
						/> }
					</AdvancedInspectorControl>
				</PanelBody>
				<FieldSettingsWrapper { ...props }>
					<ToggleControl
						key={ uniqKey( 'is_timestamp' ) }
						label={ __( 'Is Timestamp', 'jet-form-builder' ) }
						checked={ attributes.is_timestamp }
						help={ attrHelp( 'is_timestamp' ) }
						onChange={ newValue => {
							setAttributes(
								{ is_timestamp: Boolean( newValue ) } );
						} }
					/>
				</FieldSettingsWrapper>
				<PanelBody
					title={ __( 'Validation', 'jet-form-builder' ) }
				>
					<ValidationToggleGroup/>
					{ isAdvancedValidation && <>
						{ Boolean( attributes.min ) && <>
							<ValidationBlockMessage name="date_min"/>
						</> }
						{ Boolean( attributes.max ) && <>
							<ValidationBlockMessage name="date_max"/>
						</> }
						<ValidationBlockMessage name="empty"/>
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
				<TextControl
					onChange={ () => {
					} }
					key={ uniqKey( 'place_holder_block' ) }
					placeholder={ 'Input type="datetime-local"' }
				/>
			</FieldWrapper>
		</div>,
	];
}