import useBlockAttributes from '../hooks/useBlockAttributes';

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

	return <TextControl
		label={ label ?? __( 'Form field name', 'jet-form-builder' ) }
		value={ attributes.name }
		help={ help ?? __(
			'Should contain only Latin letters, numbers, `-` or `_` chars, no spaces only lower case',
			'jet-form-builder',
		) }
		onChange={ name => setAttributes( { name } ) }
	/>;
}

export default BlockName;