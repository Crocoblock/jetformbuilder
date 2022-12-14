import PresetButton from '../preset/components/PresetButton';
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
	onChangePreset = false,
	onChangeMacros = false,
} ) {

	const instanceId = useInstanceId( FlexItem, 'jfb-AdvancedModalControl' );

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
			{ false !== onChangeMacros && <MacrosFields
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