const {
	GeneralFields,
	AdvancedFields,
	FieldWrapper,
} = JetFBComponents;

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

	const {
		isSelected,
		attributes,
		setAttributes,
		editProps: { uniqKey },
	} = props;


	return [
		( isSelected && JetFBMapField.is_supported ) && <InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<PanelBody title={ __( 'Map Settings', 'jet-form-builder' ) }>
				<ToggleGroupControl
					onChange={ format => setAttributes( { format } ) }
					value={ attributes.format }
					label={ __( 'Field format', 'jet-form-builder' ) }
					isBlock={ true }
					isAdaptiveWidth={ false }
				>
					{ JetFBMapField.formats.map( current => <ToggleGroupControlOption
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
				<img
					style={ { height: attributes.height ?? 300 } }
					src={ JetFBMapField.image }
					alt={ __( 'Map Field placeholder', 'jet-form-builder' ) }
				/>
			</FieldWrapper> : <RawHTML>{ JetFBMapField.help }</RawHTML>}
		</div>,
	];
}