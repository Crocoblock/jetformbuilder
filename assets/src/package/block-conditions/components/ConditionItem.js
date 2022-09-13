import RepeaterItemContext from '../../repeater/context/repeater.item';
import useUniqKey from '../../blocks/hooks/useUniqKey';
import useBlockConditions from '../hooks/useBlockConditions';
import ConditionOptions from './ConditionOptions';

const {
	      useContext,
      } = wp.element;
const {
	      SelectControl,
      } = wp.components;
const {
	      __,
      } = wp.i18n;

function ConditionItem() {
	const {
		      currentItem,
		      changeCurrentItem,
	      } = useContext( RepeaterItemContext );

	const uniqKey       = useUniqKey();
	const { operators } = useBlockConditions();

	return <>
		<SelectControl
			key={ uniqKey( 'SelectControl-operator' ) }
			label={ __( 'Operator', 'jet-form-builder' ) }
			labelPosition="side"
			value={ currentItem.operator }
			options={ operators }
			onChange={ newValue => changeCurrentItem( { operator: newValue } ) }
		/>
		<ConditionOptions
			currentItem={ currentItem }
			changeCurrentItem={ changeCurrentItem }
		/>
	</>;
}

export default ConditionItem;