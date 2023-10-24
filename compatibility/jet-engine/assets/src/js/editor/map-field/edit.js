import preview from './preview';

const {
	      AdvancedFields,
	      FieldWrapper,
	      ToolBarFields,
	      AdvancedInspectorControl,
	      AttributeHelp,
	      BlockLabel,
	      BlockDescription,
	      BlockName,
	      BlockDefaultValue,
      } = JetFBComponents;

const {
	      useUniqueNameOnDuplicate,
	      useMetaState,
      } = JetFBHooks;

const {
	      isEmpty,
      } = JetFBActions;

const {
	      PanelBody,
	      RangeControl,
	      TextControl,
	      __experimentalToggleGroupControl: ToggleGroupControl,
	      __experimentalToggleGroupControlOption: ToggleGroupControlOption,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

const {
	      RawHTML,
	      useMemo,
      } = wp.element;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

const defaults = {
	height: 300,
	zoom: 14,
};

export default function MapEdit( props ) {
	const blockProps = useBlockProps();
	useUniqueNameOnDuplicate();

	const {
		      isSelected,
		      attributes,
		      setAttributes,
		      editProps: { uniqKey },
	      } = props;

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	const isCustomZoom = (
		-1 === [ 11, 14 ].indexOf( attributes.zoom )
	);

	const [ presetArgs ] = useMetaState( '_jf_preset' );

	const hasPreset = (
		!isEmpty( attributes.default ) ||
		(
			presetArgs.enabled &&
			!isEmpty(
				presetArgs?.fields_map?.[ attributes.name ],
			)
		)
	);

	return [
		JetFBMapField.is_supported && <ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		(
			isSelected && JetFBMapField.is_supported
		) && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
				<BlockLabel/>
				<BlockName/>
				<BlockDescription/>
			</PanelBody>
			<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
				<ToggleGroupControl
					onChange={ format => setAttributes( { format } ) }
					value={ attributes.format }
					label={ __( 'Value format', 'jet-form-builder' ) }
					isBlock={ true }
					isAdaptiveWidth={ false }
				>
					{ JetFBMapField.formats.map(
						current => <ToggleGroupControlOption
							key={ uniqKey( current.value ) }
							label={ current.label }
							value={ current.value }
							aria-label={ current.title }
							showTooltip
						/> ) }
				</ToggleGroupControl>
				<BlockDefaultValue
					hasMacro={ false }
					help={ __(
						`Latitude and longitude can be entered by separating 
them with a comma: 50.45, 30.53`,
						'jet-form-builder',
					) }
				/>
				{ hasPreset && <AdvancedInspectorControl
					value={ attributes.zoom }
					label={ __( 'Zoom', 'jet-form-builder' ) }
					onChangePreset={
						isCustomZoom ? zoom => setAttributes( { zoom } ) : false
					}
				>
					{ ( { instanceId } ) => <>
						<ToggleGroupControl
							onChange={ zoom => setAttributes( { zoom } ) }
							value={
								'number' === typeof attributes.zoom
								? attributes.zoom
								: ''
							}
							isBlock={ true }
							isAdaptiveWidth={ false }
						>
							<ToggleGroupControlOption
								label={ __( 'Default', 'jet-form-builder' ) }
								value={ 14 }
								aria-label={ 14 }
								showTooltip
							/>
							<ToggleGroupControlOption
								label={ __( 'Small', 'jet-form-builder' ) }
								value={ 11 }
								aria-label={ 11 }
								showTooltip
							/>
							<ToggleGroupControlOption
								label={ __( 'Custom', 'jet-form-builder' ) }
								value=""
							/>
						</ToggleGroupControl>
						{ isCustomZoom && <>
							<TextControl
								id={ instanceId }
								className="jet-fb m-unset"
								value={ attributes.zoom ?? defaults.zoom }
								onChange={ zoom => setAttributes( { zoom } ) }
							/>
							<AttributeHelp name="zoom">
								{ __(
									'Enter a number from 1 to 18.',
									'jet-form-builder',
								) }
							</AttributeHelp>
						</> }
					</> }
				</AdvancedInspectorControl> }
			</PanelBody>
			<PanelBody title={ __( 'Map Settings', 'jet-form-builder' ) }>
				<RangeControl
					label={ __( 'Height', 'jet-form-builder' ) }
					value={ attributes.height ?? defaults.height }
					onChange={ height => setAttributes( { height } ) }
					allowReset
					resetFallbackValue={ defaults.height }
					min={ 50 }
					max={ 1000 }
				/>
			</PanelBody>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			{ JetFBMapField.is_supported ? <FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				{ preview }
			</FieldWrapper> : <RawHTML>{ JetFBMapField.help }</RawHTML> }
		</div>,
	];
}