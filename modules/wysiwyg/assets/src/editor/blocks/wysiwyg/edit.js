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
	      RangeControl,
	      ToggleControl,
      } = wp.components;

export default function WysiwygEdit( props ) {

	const {
		      editProps: { uniqKey },
		      isSelected,
		      attributes,
		      setAttributes,
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
					title={ __( 'Editor', 'jet-form-builder' ) }
				>
					<RangeControl
						label={ __( 'Rows', 'jet-form-builder' ) }
						value={ attributes.rows }
						onChange={ rows => setAttributes( { rows } ) }
						allowReset
						resetFallbackValue={ 8 }
						min={ 4 }
						max={ 25 }
					/>
					<ToggleControl
						label={ __( 'Quick tags', 'jet-form-builder' ) }
						help={ __(
							`To switch from Visual editor to Text editor`,
							'jet-form-builder',
						) }
						checked={ attributes.quick_tags }
						onChange={ quick_tags => setAttributes( {
							quick_tags,
						} ) }
					/>
					<ToggleControl
						label={ __(
							'Save text styles when pasting',
							'jet-form-builder',
						) }
						help={ __(
							`Preserves text formatting when copying 
from other text editors.`,
							'jet-form-builder',
						) }
						checked={ attributes.keep_format }
						onChange={ keep_format => setAttributes( {
							keep_format,
						} ) }
					/>
				</PanelBody>
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
				<CustomWysiwyg
					rows={ attributes.rows }
					quickTags={ attributes.quick_tags }
				/>
			</FieldWrapper>
		</div>
	</>;

}