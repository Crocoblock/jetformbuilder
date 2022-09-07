import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockPrevButtonLabel( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	if ( !attributes.add_prev ) {
		return null;
	}

	return <TextControl
		label={ label ?? __( 'Prev Page Button Label', 'jet-form-builder' ) }
		value={ attributes.prev_label }
		help={ help ?? '' }
		onChange={ prev_label => setAttributes( { prev_label } ) }
	/>;
}

export default BlockPrevButtonLabel;