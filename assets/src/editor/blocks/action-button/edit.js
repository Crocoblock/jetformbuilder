const {
		  GeneralFields,
		  AdvancedFields,
		  FieldSettingsWrapper,
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

export default function ActionButton( props ) {

	const blockProps = useBlockProps();

	const {
			  attributes,
			  setAttributes,
			  editProps: { uniqKey, attrHelp },
			  context,
		  } = props;

	return [
		props.isSelected && <InspectorControls
			key={ uniqKey( 'InspectorControls' ) }
		>
			<GeneralFields
				key={ uniqKey( 'GeneralFields' ) }
				autoCompleteLabel={ false }
				{ ...props }
			/>
			<FieldSettingsWrapper { ...props }>
				<TextControl
					key={ uniqKey( 'action_type' ) }
					label={ __( 'Button Action Type' ) }
					value={ attributes.action_type }
					onChange={ action_type => setAttributes( { action_type } ) }
				/>
			</FieldSettingsWrapper>
			<AdvancedFields
				key={ uniqKey( 'AdvancedFields' ) }
				{ ...props }
			/>
		</InspectorControls>,
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<Button
				isSecondary
				key="next_page_button"
				className="jet-form-builder__action-button"
			>
				<RichText
					placeholder='Label...'
					allowedFormats={ [] }
					value={ attributes.label }
					onChange={ label => setAttributes( { label } ) }
				/>
			</Button>

		</div>,
	];

}