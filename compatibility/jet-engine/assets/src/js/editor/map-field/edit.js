import preview from './preview';

const {
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      ToolBarFields,
      } = JetFBComponents;
const {
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const {
	      PanelBody,
	      RangeControl,
	      __experimentalToggleGroupControl: ToggleGroupControl,
	      __experimentalToggleGroupControlOption: ToggleGroupControlOption,
      } = wp.components;

const { __ } = wp.i18n;

const { RawHTML } = wp.element;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

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
					value={ attributes.height ?? 300 }
					onChange={ height => setAttributes( { height } ) }
					allowReset
					resetFallbackValue={ 300 }
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