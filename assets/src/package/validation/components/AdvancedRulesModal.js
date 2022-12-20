import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import useOnUpdateModal from '../../action-modal/hooks/useOnUpdateModal';
import Repeater from '../../repeater/components/repeater';
import RepeaterAddNew from '../../repeater/components/repeater.add.new';
import AdvancedRuleModalItem from './AdvancedRuleModalItem';
import RepeaterState from '../../repeater/components/repeater.state';
import RepeaterHeadContext
	from '../../repeater/context/repeater.custom.item.head';
import humanReadableRule from '../helpers/humanReadableRule';

const {
	      useState,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

function AdvancedRulesModal() {
	const [ attributes, setAttributes ] = useBlockAttributes();
	const [ current, setCurrent ]       = useState(
		() => attributes.validation?.rules ?? [],
	);

	useOnUpdateModal( () => {
		setAttributes( prev => (
			{
				...prev,
				validation: {
					...attributes.validation,
					rules: current,
				},
			}
		) );
	} );

	return <RepeaterState state={ setCurrent }>
		<RepeaterHeadContext.Provider value={ {
			isSupported: () => true,
			render: ( { currentItem } ) => <span
				className={ 'repeater-item-title' }
				dangerouslySetInnerHTML={ {
					__html: humanReadableRule( currentItem ),
				} }
			/>
		} }>
			<Repeater items={ current }>
				<AdvancedRuleModalItem/>
			</Repeater>
		</RepeaterHeadContext.Provider>
		<RepeaterAddNew>
			{ __( 'Add Rule', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</RepeaterState>;

}

export default AdvancedRulesModal;