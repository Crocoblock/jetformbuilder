import useBlockAttributes from '../hooks/useBlockAttributes';
import ChangeNameByLabel from '../helpers/ChangeNameByLabel';
import AttributeHelp from './AttributeHelp';

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

	return <>
		<TextControl
			label={ label ?? __( 'Field Label', 'jet-form-builder' ) }
			className="jet-fb m-unset"
			value={ attributes.label }
			onChange={ label => setAttributes( { label } ) }
			{ ...ref }
		/>
		<AttributeHelp name="label">
			{ help ?? '' }
		</AttributeHelp>
	</>;
}

export default BlockLabel;