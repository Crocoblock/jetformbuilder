import BlockDefaultValue from './BlockDefaultValue';
import DynamicValues from '../../dynamic.value/components/DynamicValues';

function BlockAdvancedValue( { help, label } ) {
	return <>
		<BlockDefaultValue
			help={ help }
			label={ label }
		/>
		<hr/>
		<DynamicValues/>
	</>;
}

export default BlockAdvancedValue;