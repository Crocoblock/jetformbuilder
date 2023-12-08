import preview from './preview';
import CustomWysiwyg from './CustomWysiwyg';

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
	      PanelBody,
      } = wp.components;

export default function WysiwygEdit( props ) {

	const {
		      editProps: { uniqKey },
		      isSelected,
		      attributes,
	      } = props;

	const blockProps           = useBlockProps();
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

	return <>
		{ isSelected && <>
			<ToolBarFields
				key={ uniqKey( 'ToolBarFields' ) }
				{ ...props }
			/>
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
		</> }
		<div { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<CustomWysiwyg/>
			</FieldWrapper>
		</div>
	</>;

}

/**
 * <textarea
							className="wp-editor-area"
							rows="8"
							autoComplete="off"
							cols="40"
							style="display: none;"
							aria-hidden="true"
						></textarea>
 */