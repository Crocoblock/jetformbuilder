import preview from './preview';

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
	      ClientSideMacros,
      } = JetFBComponents;
const {
	      useInsertMacro,
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
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
	useUniqueNameOnDuplicate();

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

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
				<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
					<BlockAdvancedValue
						help={ __(
							'Plain date should be in yyyy-MM-ddThh:mm format',
							'jet-form-builder',
						) }
						style={ { marginBottom: '1em' } }
					/>
					<ClientSideMacros>
						<AdvancedInspectorControl
							value={ attributes.min }
							label={ __( 'Starting from date',
								'jet-form-builder' ) }
							onChangePreset={ min => setAttributes( { min } ) }
							onChangeMacros={ updateMin }
						>
							{ ( { instanceId } ) => <TextControl
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
							{ ( { instanceId } ) => <TextControl
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
					</ClientSideMacros>
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