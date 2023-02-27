import PresetButton from '../preset/components/PresetButton';
import MacrosFieldsInBlock
	from '../macros.button/components/MacrosFieldsInBlock';
import MacrosFields from '../macros.button/components/MacrosFields';

const {
	      Flex,
	      FlexItem,
      } = wp.components;
const {
	      useInstanceId,
      } = wp.compose;

function AdvancedInspectorControl( {
	children,
	value,
	label,
	inBlock = false,
	onChangePreset = false,
	onChangeMacros = false,
} ) {

	const instanceId = useInstanceId( FlexItem, 'jfb-AdvancedModalControl' );

	const MacroComponent = inBlock ? MacrosFieldsInBlock : MacrosFields;

	return <>
		<Flex
			align={ 'center' }
			justify={ 'flex-start' }
			style={ {
				marginBottom: '8px',
			} }
		>
			<label
				htmlFor={ instanceId }
				className={ 'jet-fb label' }
			>{ label }</label>
			{ false !== onChangePreset && <PresetButton
				value={ value }
				onChange={ onChangePreset }
			/> }
			{ false !== onChangeMacros && <MacroComponent
				onClick={ onChangeMacros }
			/> }
		</Flex>
		{ 'function' === typeof children
		  ? children( { instanceId } )
		  : children
		}
	</>;
}

export default AdvancedInspectorControl;