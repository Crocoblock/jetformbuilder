import PresetButton from '../preset/components/PresetButton';
import MacrosFields from '../macros.button/components/MacrosFields';
import BaseLabel from './BaseLabel';

const {
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

	const instanceId = useInstanceId( FlexItem,
		'jfb-AdvancedInspectorControl' );

	return <>
		<BaseLabel
			label={ label }
			htmlFor={ instanceId }
		>
			{ false !== onChangePreset && <PresetButton
				value={ value }
				onChange={ onChangePreset }
			/> }
			{ false !== onChangeMacros && <MacrosFields
				onClick={ onChangeMacros }
			/> }
		</BaseLabel>
		{ 'function' === typeof children
		  ? children( { instanceId } )
		  : children
		}
	</>;
}

export default AdvancedInspectorControl;