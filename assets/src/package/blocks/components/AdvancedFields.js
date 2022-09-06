const {
	      PanelBody,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

function AdvancedFields() {
	return <PanelBody
		title={ __( 'Advanced', 'jet-form-builder' ) }
		key={ 'jet-form-advanced-fields' }
		initialOpen={ false }
	>
		// controls
	</PanelBody>;
}

export default AdvancedFields;