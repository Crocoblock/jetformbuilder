import preview from './preview';

const {
	      __,
      } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const {
	      PanelBody,
	      TextControl,
	      ToggleControl,
      } = wp.components;

const {
	      ToolBarFields,
	      AdvancedFields,
	      FieldWrapper,
	      BlockName,
	      BlockLabel,
	      BlockDescription,
	      AdvancedInspectorControl,
      } = JetFBComponents;

const {
	      useUniqueNameOnDuplicate,
	      useJetStyle,
	      useUniqKey,
      } = JetFBHooks;

export default function WysiwygEdit( props ) {

	const {
		      isSelected,
		      attributes,
		      setAttributes,
	      } = props;

	const uniqKey  = useUniqKey();
	const jetStyle = useJetStyle?.( {
		className: [
			'jet-form-builder-row',
			'field-type-switcher',
		].join( ' ' ),
	} ) ?? {};

	const blockProps = useBlockProps( jetStyle );

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

	return <>
		{ isSelected && <>
			<ToolBarFields
				key={ uniqKey( 'ToolBarFields' ) }
				{ ...props }
			/>
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<PanelBody
					title={ __( 'General', 'jet-form-builder' ) }
				>
					<BlockLabel/>
					<BlockName/>
					<BlockDescription/>
				</PanelBody>
				<PanelBody
					title={ __( 'Value', 'jet-form-builder' ) }
				>
					<ToggleControl
						label={ __(
							'Switcher enabled by default',
							'jet-form-builder',
						) }
						checked={ attributes.checked }
						onChange={ checked => setAttributes( { checked } ) }
					/>
					<AdvancedInspectorControl
						value={ attributes.value_active }
						label={ __( 'Value', 'jet-form-builder' ) }
						onChangePreset={ value_active => (
							setAttributes( { value_active } )
						) }
					>
						{ ( { instanceId } ) => <TextControl
							id={ instanceId }
							className="jet-fb m-unset"
							value={ attributes.value_active }
							help={ __(
								'For enabled switcher',
								'jet-form-builder',
							) }
							onChange={ value_active => (
								setAttributes( { value_active } )
							) }
						/> }
					</AdvancedInspectorControl>
					<AdvancedInspectorControl
						value={ attributes.calc_value_active }
						label={ __( 'Calculated value', 'jet-form-builder' ) }
						onChangePreset={ calc_value_active => (
							setAttributes( { calc_value_active } )
						) }
					>
						{ ( { instanceId } ) => <TextControl
							id={ instanceId }
							className="jet-fb m-unset"
							value={ attributes.calc_value_active }
							help={ __(
								'For enabled switcher',
								'jet-form-builder',
							) }
							onChange={ calc_value_active => (
								setAttributes( { calc_value_active } )
							) }
						/> }
					</AdvancedInspectorControl>
				</PanelBody>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		</> }
		<div { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<input
					type="checkbox"
					role="switch"
					className="jet-form-builder__field"
				/>
			</FieldWrapper>
		</div>
	</>;

}