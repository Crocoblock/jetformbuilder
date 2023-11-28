const {
	      ToggleControl,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

function DisableRawValueControl( DefaultComponent ) {
	return props => {
		const { attributes, setAttributes } = props;

		return 'random_string' !== attributes.field_value
		       ? <DefaultComponent { ...props }/>
		       : <ToggleControl
			       label={ __( 'Render in HTML', 'jet-form-builder' ) }
			       checked={ attributes.render }
			       help={ __(
				       `Enable this option if you use this field in Calculated Field, 
Conditional Block, Advanced Validation, Global Macros, or Dynamic Value.`,
				       'jet-form-builder',
			       ) }
			       onChange={ render => setAttributes( {
				       render: Boolean( render ),
			       } ) }
		       />;
	};
}

export default DisableRawValueControl;