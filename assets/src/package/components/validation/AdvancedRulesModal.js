import { useBlockAttributes, useUniqKey } from '../../helpers/hooks/blocks';
import { useOnUpdateModal } from '../../helpers/hooks/modal';
import Repeater from '../fields/repeater';
import RepeaterAddNew from '../fields/repeater.add.new';
import AdvancedRuleItem from './AdvancedRuleItem';

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

	return <>
		<Repeater
			items={ current }
			onSetState={ setCurrent }
		>
			<AdvancedRuleItem/>
		</Repeater>
		<RepeaterAddNew onSetState={ setCurrent }>
			{ __( 'Add Rule', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</>;

}

export default AdvancedRulesModal;