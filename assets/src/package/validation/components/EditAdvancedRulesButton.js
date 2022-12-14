import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import useUniqKey from '../../blocks/hooks/useUniqKey';
import AdvancedRulesModal from './AdvancedRulesModal';
import ActionModal from '../../action-modal/components/ActionModal';

const {
	      Button,
      } = wp.components;
const {
	      useState,
	      Fragment,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

function EditAdvancedRulesButton() {
	const [ showModal, setShowModal ] = useState( false );
	const [ attributes ]              = useBlockAttributes();
	const uniqKey                     = useUniqKey();

	const rules = attributes.validation?.rules ?? [];

	const icon = rules.length ? <span
		className="dashicon dashicons dashicons-editor-spellcheck"
		data-count={ rules.length }
	/> : <span className="dashicon dashicons dashicons-editor-spellcheck"/>;

	return <Fragment key={ uniqKey( 'edit-rule-component' ) }>
		<Button
			isSecondary
			icon={ icon }
			className={ 'jet-fb-button w-100 jc-center jet-fb mb-24' }
			onClick={ () => setShowModal( prev => !prev ) }
		>
			{ __( 'Edit Advanced Rules', 'jet-form-builder' ) }
		</Button>
		{ showModal && <ActionModal
			title={ __( 'Edit Advanced Rules', 'jet-form-builder' ) }
			classNames={ [ 'width-60' ] }
			onRequestClose={ () => setShowModal( false ) }
		>
			<AdvancedRulesModal
				key={ uniqKey( 'edit-rule-modal' ) }
			/>
		</ActionModal> }
	</Fragment>;
}

export default EditAdvancedRulesButton;