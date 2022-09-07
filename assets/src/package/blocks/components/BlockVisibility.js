import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      __,
      } = wp.i18n;
const {
	      SelectControl,
      } = wp.components;

function BlockVisibility( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <SelectControl
		options={ [
			{
				"value": "all",
				"label": __( "For all", 'jet-form-builder' ),
			},
			{
				"value": "logged_id",
				"label": __( "Only for logged in users", 'jet-form-builder' ),
			},
			{
				"value": "not_logged_in",
				"label": __( "Only for NOT-logged in users", 'jet-form-builder' ),
			},
		] }
		label={ label ?? __( "Field Visibility", 'jet-form-builder' ) }
		help={ help ?? '' }
		value={ attributes.visibility }
		onChange={ visibility => setAttributes( { visibility } ) }
	/>;
}

export default BlockVisibility;