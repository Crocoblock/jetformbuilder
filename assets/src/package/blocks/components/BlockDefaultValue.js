import useBlockAttributes from '../hooks/useBlockAttributes';
import AdvancedInspectorControl
	from '../../components/AdvancedInspectorControl';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';
import ClientSideMacros from '../../macros.button/components/ClientSideMacros';
import useInsertMacro from '../../macros.button/hooks/useInsertMacro';
import AttributeHelp from './AttributeHelp';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockDefaultValue( { label, help, hasMacro = true } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	const [ input, updateInput ] = useInsertMacro( 'default' );

	if ( !useIsHasAttribute( 'default' ) ) {
		return null;
	}

	return <ClientSideMacros>
		<AdvancedInspectorControl
			value={ attributes.default }
			label={ label ?? __( 'Default Value', 'jet-form-builder' ) }
			onChangePreset={ val => setAttributes( { default: val } ) }
			onChangeMacros={ hasMacro ? updateInput : false }
		>
			{ ({ instanceId }) => {
				return <>
					<TextControl
						ref={ input }
						id={ instanceId }
						value={ attributes.default }
						className="jet-fb m-unset"
						onChange={ val => setAttributes( { default: val } ) }
					/>
					<AttributeHelp name="default">
						{ help ?? '' }
					</AttributeHelp>
				</>;
			} }
		</AdvancedInspectorControl>
	</ClientSideMacros>;
}

export default BlockDefaultValue;