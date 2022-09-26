import BlockDefaultValue from './BlockDefaultValue';
import DynamicValues from '../../dynamic.value/components/DynamicValues';

function BlockAdvancedValue( { help, label, ...props } ) {
	return <div { ...props }>
		<BlockDefaultValue
			help={ help }
			label={ label }
		/>
		<hr/>
		<DynamicValues/>
	</div>;
}

export default BlockAdvancedValue;