import PresetButton from '../preset/components/PresetButton';
import MacrosFields from '../macros.button/components/MacrosFields';

const {
	      Flex,
	      FlexItem,
      } = wp.components;
const {
	      useInstanceId,
      } = wp.compose;

function AdvancedModalControl( {
	children,
	value,
	label,
	onChangePreset = false,
	onChangeMacros = false,
} ) {

	const instanceId = useInstanceId( FlexItem, 'jfb-AdvancedModalControl' );

	return <div className={ 'components-base-control' }>
		<Flex
			align={ 'flex-start' }
			className={ 'components-base-control__field' }
		>
			<FlexItem isBlock>
				<Flex
					align={ 'center' }
					justify={ 'flex-start' }
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
			</FlexItem>
			<FlexItem isBlock style={ { flex: 3, marginLeft: 'unset' } }>
				{ 'function' === typeof children
				  ? children( { instanceId } )
				  : children
				}
			</FlexItem>
		</Flex>
	</div>;
}

export default AdvancedModalControl;