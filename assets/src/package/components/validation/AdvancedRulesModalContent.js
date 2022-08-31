import Repeater from '../fields/repeater';
import AdvancedRuleItem from './AdvancedRuleItem';
import RepeaterAddNew from '../fields/repeater.add.new';
import RepeaterState from '../fields/repeater.state';
import { useBlockAttributes } from '../../helpers/hooks/blocks';
import { useOnUpdateModal } from '../../helpers/hooks/modal';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;

function AdvancedRulesModalContent() {
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
		<Repeater
			items={ current }
		>
			<AdvancedRuleItem/>
		</Repeater>
		<RepeaterAddNew>
			{ __( 'Add Rule', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</RepeaterState>;
}

export default AdvancedRulesModalContent;