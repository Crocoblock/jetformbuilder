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
	      BlockDefaultValue,
	      AdvancedInspectorControl,
	      StylePanel,
	      StyleColorItem,
	      StyleColorItemsWrapper,
	      StyleSize,
	      SwitchPageOnChangeControls,
      } = JetFBComponents;

const {
	      useUniqueNameOnDuplicate,
	      useJetStyle,
	      useUniqKey,
      } = JetFBHooks;

export default function SwitcherEdit( props ) {

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
			<SwitchPageOnChangeControls/>
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
					<BlockDefaultValue
						help={ __(
							`If default value would be not empty 
- switcher would be enabled`,
							'jet-form-builder',
						) }
						hasMacro={ false }
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
			<InspectorControls group="styles">
				<StylePanel
					label={ __( 'Track', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--track-bg-color"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
						<StyleColorItem
							cssVar="--checked-track-bg-color"
							label={ __(
								'Checked background',
								'jet-form-builder',
							) }
						/>
					</StyleColorItemsWrapper>
					<StyleSize
						cssVar="--track-size"
						label={ __( 'Track size', 'jet-form-builder' ) }
					/>
					<StyleSize
						cssVar="--track-padding"
						label={ __( 'Track padding', 'jet-form-builder' ) }
					/>
				</StylePanel>
				<StylePanel
					label={ __( 'Thumb', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--thumb-bg-color"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
					<StyleSize
						cssVar="--thumb-size"
						label={ __( 'Thumb size', 'jet-form-builder' ) }
					/>
				</StylePanel>
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