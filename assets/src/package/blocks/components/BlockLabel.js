import { getConvertedName } from '../../tools';
import useBlockAttributes from '../hooks/useBlockAttributes';

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
		onBlur={ () => {
			if ( 1 < attributes.label.length
				&& (
					!attributes.name || 'field_name' ===
					attributes.name
				)
			) {
				setAttributes( {
					name: getConvertedName( attributes.label ),
				} );
			}
		} }
	/>;
}

export default BlockLabel;