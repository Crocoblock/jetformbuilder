const {
	      ToolBarFields,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      AdvancedFields,
	      FieldWrapper,
	      FieldSettingsWrapper,
      } = JetFBComponents;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	      TextControl,
	      ToggleControl,
	      PanelBody,
      } = wp.components;

export default function DateTimeEdit( props ) {
	const blockProps = useBlockProps();

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
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
				<AdvancedFields
					key={ uniqKey( 'JetForm-advanced' ) }
					{ ...props }
				/>
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