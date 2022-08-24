const { __ } = wp.i18n;

const { ToggleControl, SelectControl } = wp.components;

const { jetEngineVersion } = window.JetFormEditorData;

function CustomTemplateControls( props ) {
	const {
		      listingTypes,
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey, attrHelp },
	      } = props;

	const { field_options_from = '' } = attributes;

	return (
			Boolean( jetEngineVersion.length ) &&
			[ 'terms', 'posts', 'generate' ].includes( field_options_from )
		)
		&& <>
			<ToggleControl
				key={ uniqKey( 'use_custom_template' ) }
				label={ __( 'Use custom template', 'jet-form-builder' ) }
				checked={ attributes.custom_item_template }
				help={ attrHelp( 'custom_item_template' ) }
				onChange={ custom_item_template => setAttributes(
					{ custom_item_template } ) }
			/>
			{ attributes.custom_item_template && <SelectControl
				key={ uniqKey( 'SelectControl-custom_item_template_id' ) }
				label={ __( 'Choose custom template', 'jet-form-builder' ) }
				value={ attributes.custom_item_template_id }
				options={ listingTypes }
				onChange={ custom_item_template_id => setAttributes(
					{ custom_item_template_id } ) }
			/> }
		</>;
}

export default CustomTemplateControls;