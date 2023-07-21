import useBlockAttributes from '../hooks/useBlockAttributes';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';
import AttributeHelp from './AttributeHelp';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockDescription( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	if ( !useIsHasAttribute( 'desc' ) ) {
		return null;
	}

	return <>
		<TextControl
			label={ label ?? __( 'Field Description', 'jet-form-builder' ) }
			value={ attributes.desc }
			className="jet-fb m-unset"
			onChange={ desc => setAttributes( { desc } ) }
		/>
		<AttributeHelp name="desc">
			{ help ?? '' }
		</AttributeHelp>
	</>;
}

export default BlockDescription;