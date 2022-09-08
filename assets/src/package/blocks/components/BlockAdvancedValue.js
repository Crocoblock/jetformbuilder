import BlockDefaultValue from './BlockDefaultValue';
import DynamicValues from '../../dynamic.value/components/DynamicValues';

function BlockAdvancedValue() {
	return <>
		<BlockDefaultValue/>
		<hr/>
		<DynamicValues/>
	</>;
}

export default BlockAdvancedValue;