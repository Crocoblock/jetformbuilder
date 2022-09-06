import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockDescription( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <TextControl
		label={ label ?? __( "Field Description", 'jet-form-builder' ) }
		value={ attributes.desc }
		help={ help ?? '' }
		onChange={ desc => setAttributes( { desc } ) }
	/>;
}

export default BlockDescription;