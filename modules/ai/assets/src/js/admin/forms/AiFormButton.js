import GenerateFormModal from '../../components/GenerateFormModal';
import AiModalFooter from './AiModalFooter';

const {
	      useState,
      } = wp.element;

const {
	      __,
      } = wp.i18n;

function AiFormButton() {
	const [ showModal, setShowModal ] = useState( false );

	return <>
		<a
			href="#"
			className="page-title-action"
			onClick={ event => {
				event.preventDefault();

				setShowModal( prev => !prev );
			} }
		>
			{ __( 'Generate with AI', 'jet-form-builder' ) }
		</a>
		{ showModal && <GenerateFormModal
			setShowModal={ setShowModal }
			footer={ AiModalFooter }
		/> }
	</>;
}

export default AiFormButton;