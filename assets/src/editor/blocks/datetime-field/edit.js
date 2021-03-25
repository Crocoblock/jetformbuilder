const {
	ToolBarFields,
	GeneralFields,
	AdvancedFields,
	FieldWrapper,
} = JFBComponents;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextControl,
	TextareaControl,
	SelectControl,
	ToggleControl,
	PanelBody,
} = wp.components;


export default function DateTimeEdit( props ) {
	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		isSelected,
		editProps: { uniqKey, attrHelp }
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
				<GeneralFields
					key={ uniqKey( 'JetForm-general' ) }
					{ ...props }
				/>
				<PanelBody
					title={ __( 'Field Settings' ) }
				>
					<ToggleControl
						key={ uniqKey( 'is_timestamp' ) }
						label={ __( 'Is Timestamp' ) }
						checked={ attributes.is_timestamp }
						help={ attrHelp( 'is_timestamp' ) }
						onChange={ newValue => {
							setAttributes( { is_timestamp: Boolean( newValue ) } );
						} }
					/>
				</PanelBody>
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
		</div>
	];
}