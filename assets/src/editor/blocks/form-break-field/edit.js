const {
	GeneralFields,
	AdvancedFields,
	FieldSettingsWrapper
} = JetFBComponents;

const { __ } = wp.i18n;

const {
	InspectorControls,
	useBlockProps,
	RichText,
} = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
	TextareaControl,
	TextControl,
	PanelBody,
	Button,
} = wp.components;


export default function FormBreakEdit( props ) {

	const blockProps = useBlockProps();

	const {
		attributes,
		setAttributes,
		editProps: { uniqKey, attrHelp }
	} = props;

	return [
		props.isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props }>
				<TextControl
					label={ __( 'Label of progress' ) }
					value={ attributes.label_progress }
					help={ attrHelp( 'label_progress' ) }
					onChange={ ( newValue ) => {
						props.setAttributes( { label_progress: newValue } );
					} }
				/>
				<TextareaControl
					key="page_break_disabled"
					value={ attributes.page_break_disabled }
					label={ __( 'Disabled message' ) }
					help={ attrHelp( 'page_break_disabled' ) }
					onChange={ ( newValue ) => {
						setAttributes( { page_break_disabled: newValue } );
					} }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div className={ 'jet-form-builder__next-page-wrap' }>
				<Button
					isSecondary
					key="next_page_button"
					className="jet-form-builder__next-page"
				>
					<RichText
						placeholder='Next...'
						allowedFormats={ [] }
						value={ attributes.label }
						onChange={ label => setAttributes( { label } ) }
					/>
				</Button>

				{ attributes.add_prev && <Button
					isSecondary
					key="prev_page_button"
					className="jet-form-builder__prev-page"
				>
					<RichText
						placeholder='Prev...'
						allowedFormats={ [] }
						value={ attributes.prev_label }
						onChange={ prev_label => setAttributes( { prev_label } ) }
					/>
				</Button> }
			</div>
		</div>
	];

}