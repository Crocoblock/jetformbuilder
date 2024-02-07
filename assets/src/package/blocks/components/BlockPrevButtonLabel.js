import useBlockAttributes from '../hooks/useBlockAttributes';
import AttributeHelp from './AttributeHelp';

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

	return <>
		<TextControl
			label={
				label ?? __( 'Prev Page Button Label', 'jet-form-builder' )
			}
			value={ attributes.prev_label }
			className="jet-fb m-unset"
			onChange={ val => setAttributes( { prev_label: val } ) }
		/>
		<AttributeHelp name="prev_label">
			{ help ?? '' }
		</AttributeHelp>
	</>;
}

export default BlockPrevButtonLabel;