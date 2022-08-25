import BlockValueItemContext from '../../context/block.value.item.context';
import ActionModalContext from '../../context/action.modal';
import Repeater from '../fields/repeater';
import RepeaterAddNew from '../fields/repeater.add.new';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
	      useContext,
	      useEffect,
      } = wp.element;

function DynamicItemBody() {
	const {
		      current: currentValue,
		      update,
	      } = useContext( BlockValueItemContext );
	const {
		      actionClick,
		      onRequestClose,
	      } = useContext( ActionModalContext );

	const [ current, setCurrent ] = useState( () => currentValue );

	const updateConditions = conditions => {
		setCurrent( {
			...current,
			conditions: 'function' === typeof conditions
			            ? conditions( current.conditions ?? [] )
			            : conditions,
		} );
	};

	useEffect( () => {
		// update field attributes
		if ( actionClick ) {
			update( current );
		}

		if ( null !== actionClick ) {
			onRequestClose();
		}
	}, [ actionClick ] );

	return <>
		<Repeater
			onSetState={ updateConditions }
			items={ current.conditions ?? [] }
		>
			Test
		</Repeater>
		<RepeaterAddNew
			onSetState={ updateConditions }
		>
			{ __( 'Add New Condition', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</>;
}

export default DynamicItemBody;