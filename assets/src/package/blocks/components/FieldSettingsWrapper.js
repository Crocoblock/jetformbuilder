const {
	      __,
      } = wp.i18n;
const {
	      PanelBody,
      } = wp.components;
const {
	      applyFilters,
      } = wp.hooks;
const {
	      useBlockProps,
      } = wp.blockEditor;

/**
 * @param props
 * @return {boolean|JSX.Element}
 * @constructor
 */
function FieldSettingsWrapper( props ) {
	const {
		      title,
		      children,
	      } = props;

	const blockProps = useBlockProps();
	const blockName = blockProps[ 'data-type' ].replace( '/', '-' );

	const CustomSettings = applyFilters(
		`jet.fb.render.settings.${ blockName }`,
		null,
	);

	return (
		children || CustomSettings
	) && <PanelBody
		title={ title || __( 'Field', 'jet-form-builder' ) }
	>
		{ children }
		{ CustomSettings }
	</PanelBody>;
}

export default FieldSettingsWrapper;