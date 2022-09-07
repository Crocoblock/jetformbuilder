import useBlockAttributes from '../hooks/useBlockAttributes';
import ChangeNameByLabel from '../helpers/ChangeNameByLabel';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockLabel( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <TextControl
		label={ label ?? __( 'Field Label', 'jet-form-builder' ) }
		value={ attributes.label }
		help={ help ?? '' }
		onChange={ label => setAttributes( { label } ) }
		onBlur={ () => ChangeNameByLabel( attributes, setAttributes ) }
	/>;
}

export default BlockLabel;