import BlockDefaultValue from './BlockDefaultValue';
import DynamicValues from '../../dynamic.value/components/DynamicValues';
import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      ToggleControl,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

function BlockAdvancedValue() {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <>
		<ToggleControl
			label={ __( 'Enable advanced value settings', 'jet-form-builder' ) }
			checked={ attributes.value.is_advanced }
			onChange={ is_advanced => setAttributes( {
				value: {
					...attributes.value,
					is_advanced,
				},
			} ) }
		/>
		{ attributes.value.is_advanced
		  ? <DynamicValues/>
		  : <BlockDefaultValue/> }
	</>;
}

export default BlockAdvancedValue;