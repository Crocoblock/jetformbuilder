const {
	      __,
      } = wp.i18n;
const {
	      PanelBody,
      } = wp.components;

/**
 * @deprecated 3.0.0
 *
 * @param props
 * @return {boolean|JSX.Element}
 * @constructor
 */
function FieldSettingsWrapper( props ) {
	const {
		      title,
		      children,
	      } = props;

	return <PanelBody
		title={ title || __( 'Field Settings', 'jet-form-builder' ) }
	>
		{ children }
	</PanelBody>;
}

export default FieldSettingsWrapper;