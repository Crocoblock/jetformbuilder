const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
      } = JetFBComponents;

const {
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	      TextareaControl,
	      PanelBody,
      } = wp.components;

export default function WysiwygEdit( props ) {

	const { editProps: { uniqKey }, isSelected } = props;

	const blockProps           = useBlockProps();
	const isAdvancedValidation = useIsAdvancedValidation();

	useUniqueNameOnDuplicate();

	return [
		<ToolBarFields
			key={ uniqKey( 'ToolBarFields' ) }
			{ ...props }
		/>,
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<GeneralFields hasMacro={ false }/>
				<PanelBody
					title={ __( 'Validation', 'jet-form-builder' ) }
				>
					<ValidationToggleGroup/>
					{ isAdvancedValidation && <>
						<ValidationBlockMessage name="empty"/>
					</> }
				</PanelBody>
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
		</div>,
	];

}