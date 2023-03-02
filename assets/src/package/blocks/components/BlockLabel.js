import useBlockAttributes from '../hooks/useBlockAttributes';
import ChangeNameByLabel from '../helpers/ChangeNameByLabel';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

let {
	    __experimentalUseFocusOutside,
	    useFocusOutside,
    } = wp.compose;

useFocusOutside = useFocusOutside || __experimentalUseFocusOutside;

function BlockLabel( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	function onBlurLabel() {
		ChangeNameByLabel( attributes, setAttributes );
	}

	const ref = useFocusOutside( onBlurLabel );

	return <TextControl
		label={ label ?? __( 'Field Label', 'jet-form-builder' ) }
		value={ attributes.label }
		help={ help ?? '' }
		onChange={ label => setAttributes( { label } ) }
		{ ...ref }
	/>;
}

export default BlockLabel;