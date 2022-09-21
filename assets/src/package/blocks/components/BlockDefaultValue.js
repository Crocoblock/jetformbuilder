import useBlockAttributes from '../hooks/useBlockAttributes';
import AdvancedInspectorControl
	from '../../components/AdvancedInspectorControl';

const {
	      __,
      } = wp.i18n;
const {
	      TextControl,
      } = wp.components;

function BlockDefaultValue( { label, help } ) {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <AdvancedInspectorControl
		value={ attributes.default }
		label={ label ?? __( 'Default Value', 'jet-form-builder' ) }
		onChangePreset={ val => setAttributes( { default: val } ) }
		onChangeMacros={ name => setAttributes( {
			default: attributes.default + `%${ name }%`,
		} ) }
	>
		{ ( { instanceId } ) => <TextControl
			id={ instanceId }
			value={ attributes.default }
			help={ help ?? '' }
			onChange={ val => setAttributes( { default: val } ) }
		/> }
	</AdvancedInspectorControl>;
}

export default BlockDefaultValue;