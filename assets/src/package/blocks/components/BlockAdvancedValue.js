import BlockDefaultValue from './BlockDefaultValue';
import DynamicValues from '../../dynamic.value/components/DynamicValues';

function BlockAdvancedValue( { help, label, hasMacro = true, ...props } ) {
	return <div { ...props }>
		<BlockDefaultValue
			help={ help }
			label={ label }
			hasMacro={ hasMacro }
		/>
		<hr/>
		<DynamicValues/>
	</div>;
}

export default BlockAdvancedValue;