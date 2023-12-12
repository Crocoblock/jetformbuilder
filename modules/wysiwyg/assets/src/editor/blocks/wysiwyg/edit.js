import preview from './preview';
import CustomWysiwyg from './CustomWysiwyg';

const {
	      ToolBarFields,
	      GeneralFields,
	      AdvancedFields,
	      FieldWrapper,
	      ValidationToggleGroup,
	      ValidationBlockMessage,
	      StylePanel,
	      StyleColorItem,
	      StyleColorItemsWrapper,
	      StyleBorderItem,
	      StyleBorderRadiusItem,
      } = JetFBComponents;

const {
	      useIsAdvancedValidation,
	      useUniqueNameOnDuplicate,
	      useJetStyle,
      } = JetFBHooks;

const { __ } = wp.i18n;

const {
	      InspectorControls,
	      useBlockProps,
      } = wp.blockEditor;

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

	const jetStyle = useJetStyle( {
		className: [
			'jet-form-builder-row',
			'field-type-wysiwyg-field',
			'wp-block-jet-forms-wysiwyg-field',
			'wp-core-ui',
			'wp-editor-wrap',
			'tmce-active',
		].join( ' ' ),
	} );

	const blockProps           = useBlockProps( jetStyle );
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
			<InspectorControls group="styles">
				<StylePanel
					label={ __( 'Editor container', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-container-text"
							label={ __( 'Text color', 'jet-form-builder' ) }
						/>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-container-bg"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
				</StylePanel>
				<StylePanel
					label={ __( 'Toolbar', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-toolbar-bg"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
				</StylePanel>
				<StylePanel
					label={ __( 'Toolbar buttons', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-buttons-text"
							label={ __( 'Text color', 'jet-form-builder' ) }
						/>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-buttons-bg"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
					<StyleBorderItem
						cssVar="--jfb-wysiwyg-buttons-border"
						label={ __( 'Checked border', 'jet-form-builder' ) }
						enableAlpha
						labelForControl
					/>
					<StyleBorderRadiusItem
						cssVar="--jfb-wysiwyg-buttons-border-radius"
						label={ __( 'Checked Radius', 'jet-form-builder' ) }
					/>
				</StylePanel>
				<StylePanel
					label={ __( 'Hover toolbar buttons', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-buttons-hover-text"
							label={ __( 'Text color', 'jet-form-builder' ) }
						/>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-buttons-hover-bg"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
					<StyleBorderItem
						cssVar="--jfb-wysiwyg-buttons-hover-border"
						label={ __( 'Border', 'jet-form-builder' ) }
						enableAlpha
						labelForControl
					/>
					<StyleBorderRadiusItem
						cssVar="--jfb-wysiwyg-buttons-hover-border-radius"
						label={ __( 'Radius', 'jet-form-builder' ) }
					/>
				</StylePanel>
				<StylePanel
					label={ __( 'Checked toolbar buttons',
						'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-buttons-checked-text"
							label={ __( 'Text color', 'jet-form-builder' ) }
						/>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-buttons-checked-bg"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
					<StyleBorderItem
						cssVar="--jfb-wysiwyg-buttons-checked-border"
						label={ __( 'Border', 'jet-form-builder' ) }
						enableAlpha
						labelForControl
					/>
					<StyleBorderRadiusItem
						cssVar="--jfb-wysiwyg-buttons-checked-radius"
						label={ __( 'Radius', 'jet-form-builder' ) }
					/>
				</StylePanel>
				<StylePanel
					label={ __( 'Status bar', 'jet-form-builder' ) }
				>
					<StyleColorItemsWrapper>
						<StyleColorItem
							cssVar="--jfb-wysiwyg-statusbar-bg"
							label={ __( 'Background', 'jet-form-builder' ) }
						/>
					</StyleColorItemsWrapper>
				</StylePanel>
			</InspectorControls>
		</> }
		<div { ...blockProps }>
			<FieldWrapper
				key={ uniqKey( 'FieldWrapper' ) }
				{ ...props }
			>
				<CustomWysiwyg
					rows={ attributes.rows }
					{ ...jetStyle }
				/>
			</FieldWrapper>
		</div>
	</>;

}