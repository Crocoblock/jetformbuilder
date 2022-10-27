import useBlockAttributes from '../hooks/useBlockAttributes';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';

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

	if ( ! useIsHasAttribute( 'desc' ) ) {
		return null;
	}

	return <TextControl
		label={ label ?? __( "Field Description", 'jet-form-builder' ) }
		value={ attributes.desc }
		help={ help ?? '' }
		onChange={ desc => setAttributes( { desc } ) }
	/>;
}

export default BlockDescription;