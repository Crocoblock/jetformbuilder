import useBlockAttributes from '../hooks/useBlockAttributes';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';

const {
	      __,
      } = wp.i18n;
const {
	      ToggleControl,
      } = wp.components;

function BlockRequired( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	if ( !useIsHasAttribute( 'required' ) ) {
		return null;
	}

	return <ToggleControl
		label={ label ?? __( 'Is required', 'jet-form-builder' ) }
		checked={ attributes.required }
		help={ help ?? '' }
		onChange={ required => setAttributes( { required } ) }
	/>;
}

export default BlockRequired;