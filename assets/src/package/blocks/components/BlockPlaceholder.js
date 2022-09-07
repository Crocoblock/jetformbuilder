import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockPlaceholder( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <TextControl
		label={ label ?? __( 'Placeholder', 'jet-form-builder' ) }
		value={ attributes.placeholder }
		help={ help ?? '' }
		onChange={ placeholder => setAttributes( { placeholder } ) }
	/>;
}

export default BlockPlaceholder;