import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import useOnUpdateModal from '../../action-modal/hooks/useOnUpdateModal';
import Repeater from '../../repeater/components/repeater';
import RepeaterAddNew from '../../repeater/components/repeater.add.new';
import AdvancedRuleItem from './AdvancedRuleItem';
import RepeaterState from '../../repeater/components/repeater.state';

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
		<Repeater items={ current }>
			<AdvancedRuleItem/>
		</Repeater>
		<RepeaterAddNew>
			{ __( 'Add Rule', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</RepeaterState>;

}

export default AdvancedRulesModal;