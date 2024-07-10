import useBlockAttributes from '../hooks/useBlockAttributes';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';

const {
	      __,
      } = wp.i18n;
const {
	      ToggleControl,
      } = wp.components;

function BlockAddPrevButton( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	if ( ! useIsHasAttribute( 'add_prev' ) ) {
		return null;
	}

	return <ToggleControl
		label={ label ?? __( 'Add Prev Page Button', 'jet-form-builder' ) }
		help={ help ?? __(
			`It is recommended to use the "Action Button" block with the "Go to Prev Page" type`,
			'jet-form-builder',
		) }
		checked={ attributes.add_prev }
		onChange={ val => setAttributes( { add_prev: val } ) }
	/>;
}

export default BlockAddPrevButton;