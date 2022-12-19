import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import useUniqKey from '../../blocks/hooks/useUniqKey';
import AdvancedRulesModal from './AdvancedRulesModal';
import ActionModal from '../../action-modal/components/ActionModal';
import AdvancedRulesList from './AdvancedRulesList';
import EditRulesModalContext from './EditRulesModalContext';

const {
	      useState,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

function EditAdvancedRulesButton() {
	const [ showModal, setShowModal ] = useState( false );

	return <>
		<EditRulesModalContext.Provider value={ {
			showModal,
			setShowModal,
		} }>
			<div className="jet-fb mb-24">
				<AdvancedRulesList/>
			</div>
		</EditRulesModalContext.Provider>
		{ showModal && <ActionModal
			title={ __( 'Edit Advanced Rules', 'jet-form-builder' ) }
			classNames={ [ 'width-60' ] }
			onRequestClose={ () => setShowModal( false ) }
		>
			<AdvancedRulesModal/>
		</ActionModal> }
	</>;
}

export default EditAdvancedRulesButton;