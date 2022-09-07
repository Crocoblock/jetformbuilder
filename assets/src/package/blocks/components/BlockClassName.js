import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockClassName( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <TextControl
		label={ label ?? __( "CSS Class Name", 'jet-form-builder' ) }
		value={ attributes.class_name }
		help={ help ?? '' }
		onChange={ class_name => setAttributes( { class_name } ) }
	/>;
}

export default BlockClassName;