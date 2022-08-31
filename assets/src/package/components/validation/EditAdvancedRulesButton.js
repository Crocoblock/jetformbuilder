import { useBlockAttributes, useUniqKey } from '../../helpers/hooks/blocks';
import ActionModal from '../action-modal';
import AdvancedRulesModal from './AdvancedRulesModal';

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
	const [ showModal, setShowModal ]   = useState( false );
	const [ attributes ] = useBlockAttributes();
	const uniqKey                       = useUniqKey();

	const rules = attributes.validation?.rules ?? [];

	const icon = rules.length ? <span
		className="dashicon dashicons dashicons-editor-spellcheck"
		data-count={ rules.length }
	/> : <span className="dashicon dashicons dashicons-editor-spellcheck"/>;

	return <Fragment key={ uniqKey( 'edit-rule-component' ) }>
		<Button
			isSecondary
			icon={ icon }
			className={ 'jfb-button' }
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