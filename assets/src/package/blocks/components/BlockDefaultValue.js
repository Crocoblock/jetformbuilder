import useBlockAttributes from '../hooks/useBlockAttributes';
import AdvancedInspectorControl
	from '../../components/AdvancedInspectorControl';
import useIsHasAttribute from '../../hooks/useIsHasAttribute';
import ClientSideMacros from '../../macros.button/components/ClientSideMacros';

const {
	      __,
      } = wp.i18n;
const {
	      TextareaControl,
      } = wp.components;

function BlockDefaultValue( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	if ( !useIsHasAttribute( 'default' ) ) {
		return null;
	}

	return <ClientSideMacros>
		<AdvancedInspectorControl
			value={ attributes.default }
			label={ label ?? __( 'Default Value', 'jet-form-builder' ) }
			onChangePreset={ val => setAttributes( { default: val } ) }
			onChangeMacros={ name => setAttributes( {
				default: attributes.default + `%${ name }%`,
			} ) }
		>
			{ ( { instanceId } ) => <TextareaControl
				rows={ 1 }
				id={ instanceId }
				value={ attributes.default }
				help={ help ?? '' }
				onChange={ val => setAttributes( { default: val } ) }
			/> }
		</AdvancedInspectorControl>
	</ClientSideMacros>;
}

export default BlockDefaultValue;