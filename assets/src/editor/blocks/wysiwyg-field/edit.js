const {
	ToolBarFields,
	GeneralFields,
	AdvancedFields,
	FieldWrapper,
} = JetFBComponents;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextareaControl,
} = wp.components;

export default function WysiwygEdit( props ) {

	const { editProps: { uniqKey }, isSelected } = props;
	const blockProps = useBlockProps();

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
					key={ uniqKey( 'GeneralFields' ) }
					{ ...props }
				/>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		),
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<TextareaControl
					key={ uniqKey( 'place_holder_block' ) }
					onChange={ () => {
					} }
				/>
			</FieldWrapper>
		</div>
	];

}