import preview from './preview';

const {
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      ToolBarFields,
	      AdvancedInspectorControl,
	      AttributeHelp,
      } = JetFBComponents;
const {
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const {
	      PanelBody,
	      RangeControl,
	      TextControl,
	      __experimentalToggleGroupControl: ToggleGroupControl,
	      __experimentalToggleGroupControlOption: ToggleGroupControlOption,
      } = wp.components;

const { __ } = wp.i18n;

const { RawHTML } = wp.element;

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

	return [
		JetFBMapField.is_supported && <ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		(
			isSelected && JetFBMapField.is_supported
		) && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				hasMacro={ false }
			/>
			<PanelBody title={ __( 'Map Settings', 'jet-form-builder' ) }>
				<ToggleGroupControl
					onChange={ format => setAttributes( { format } ) }
					value={ attributes.format }
					label={ __( 'Field format', 'jet-form-builder' ) }
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
				<RangeControl
					label={ __( 'Height', 'jet-form-builder' ) }
					value={ attributes.height ?? defaults.height }
					onChange={ height => setAttributes( { height } ) }
					allowReset
					resetFallbackValue={ defaults.height }
					min={ 50 }
					max={ 1000 }
				/>
				<AdvancedInspectorControl
					value={ attributes.zoom }
					label={ __( 'Zoom', 'jet-form-builder' ) }
					onChangePreset={ zoom => setAttributes( { zoom } ) }
				>
					{ ( { instanceId } ) => <>
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
				</AdvancedInspectorControl>
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