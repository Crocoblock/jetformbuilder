import useBlockAttributes from '../hooks/useBlockAttributes';
import SanitizeFieldName from '../helpers/SanitizeFieldName';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockName( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	if ( ! useIsHasAttribute( 'name' ) ) {
		return null;
	}

	return <TextControl
		label={ label ?? __( 'Form field name', 'jet-form-builder' ) }
		value={ attributes.name }
		help={ help ?? __(
			'Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case',
			'jet-form-builder',
		) }
		onChange={ name => setAttributes( {
			name: SanitizeFieldName( name ),
		} ) }
	/>;
}

export default BlockName;