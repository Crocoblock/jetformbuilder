import preview from './preview';

const {
	      BlockClassName,
	      BlockAddPrevButton,
	      BlockPrevButtonLabel,
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
	      ToggleControl,
      } = wp.components;

// eslint-disable-next-line max-lines-per-function,complexity
export default function FormBreakEdit( props ) {

	const blockProps = useBlockProps();

	const {
		      attributes,
		      setAttributes,
		      editProps: { uniqKey, attrHelp },
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
		props.isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<PanelBody
				title={ __( 'Buttons Settings', 'jet-form-builder' ) }
			>
				<ToggleControl
					key={ uniqKey( 'add_next_button' ) }
					label={ __( 'Enable "Next" Button', 'jet-form-builder' ) }
					checked={ attributes.add_next_button }
					help={ attrHelp( 'add_next_button' ) }
					onChange={ addNextButton => setAttributes(
						{ add_next_button: addNextButton } ) }
				/>
				{ attributes.add_next_button && <TextControl
					label={ __( 'Next Button label', 'jet-form-builder' ) }
					value={ attributes.label }
					onChange={ label => setAttributes( { label } ) }
				/> }
				<BlockAddPrevButton/>
				<BlockPrevButtonLabel/>
			</PanelBody>
			<PanelBody
				title={ __( 'Page Settings', 'jet-form-builder' ) }
			>
				<TextControl
					label={ __( 'Label of progress', 'jet-form-builder' ) }
					value={ attributes.label_progress }
					help={ attrHelp( 'label_progress' ) }
					onChange={ ( newValue ) => {
						props.setAttributes( { label_progress: newValue } );
					} }
				/>
				<TextareaControl
					key="page_break_disabled"
					value={ attributes.page_break_disabled }
					label={ __( 'Validation message', 'jet-form-builder' ) }
					help={ attrHelp( 'page_break_disabled' ) }
					onChange={ ( newValue ) => {
						setAttributes( { page_break_disabled: newValue } );
					} }
				/>
			</PanelBody>
			<PanelBody
				title={ __( 'Advanced', 'jet-form-builder' ) }
			>
				<BlockClassName/>
			</PanelBody>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<div
				className={ 'jet-form-builder__next-page-wrap jet-form-builder__bottom-line' }>
				{ attributes.add_next_button && <Button
					isSecondary
					key="next_page_button"
					className="jet-form-builder__next-page"
				>
					<RichText
						placeholder="Next..."
						allowedFormats={ [] }
						value={ attributes.label }
						onChange={ label => setAttributes( { label } ) }
					/>
				</Button> }
				{ attributes.add_prev && <Button
					isSecondary
					key="prev_page_button"
					className="jet-form-builder__prev-page"
				>
					<RichText
						placeholder="Prev..."
						allowedFormats={ [] }
						value={ attributes.prev_label }
						onChange={ prevLabel => setAttributes(
							{ prev_label: prevLabel } ) }
					/>
				</Button> }
				{ (
					!attributes.add_next_button && !attributes.add_prev
				) && <span>
				{ __( 'Form Break', 'jet-form-builder' ) }
					</span> }
			</div>
		</div>,
	];

}