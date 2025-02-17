const {
	      ToggleControl,
	      withFilters,
      } = wp.components;

const { __ } = wp.i18n;

const {
	      useBlockAttributes,
      } = JetFBHooks;

let HeaderControls = function () {
	const [ attributes, setAttributes ] = useBlockAttributes();

	return <>
		{ 'referer_url' !== attributes.field_value && <ToggleControl
			label={ __( 'Render in HTML', 'jet-form-builder' ) }
			checked={ attributes.render }
			help={ __(
				`Enable this option if you use this field in Calculated Field, Conditional Block, Advanced Validation, Global Macros, or Dynamic Value.`,
				'jet-form-builder',
			) }
			onChange={ render => setAttributes(
				{ render: Boolean( render ) } ) }
		/> }
		<ToggleControl
			label={ __( 'Return the raw value', 'jet-form-builder' ) }
			help={ __( `If this option is enabled, the value of the field will be JSON-encoded if the value is an array or object`,
				'jet-form-builder',
			) }
			checked={ attributes.return_raw }
			onChange={ val => setAttributes( { return_raw: val } ) }
		/>
	</>;
};

HeaderControls = withFilters(
	'jfb.hidden-field.header.controls',
)( HeaderControls );

export default HeaderControls;