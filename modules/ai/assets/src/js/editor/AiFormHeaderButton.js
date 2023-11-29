import GenerateFormModal from '../components/GenerateFormModal';
import AiEditorFooterFill from './AiEditorFooterFill';

const {
	      Button,
      } = wp.components;

const {
	      useState,
      } = wp.element;

const {
	      __,
      } = wp.i18n;

function AiFormHeaderButton() {
	const [ showModal, setShowModal ] = useState( false );

	return <>
		<Button
			icon={ <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			            width="24" height="24" aria-hidden="true"
			            focusable="false">
				<path
					d="M11.776 4.454a.25.25 0 01.448 0l2.069 4.192a.25.25 0 00.188.137l4.626.672a.25.25 0 01.139.426l-3.348 3.263a.25.25 0 00-.072.222l.79 4.607a.25.25 0 01-.362.263l-4.138-2.175a.25.25 0 00-.232 0l-4.138 2.175a.25.25 0 01-.363-.263l.79-4.607a.25.25 0 00-.071-.222L4.754 9.881a.25.25 0 01.139-.426l4.626-.672a.25.25 0 00.188-.137l2.069-4.192z"/>
			</svg> }
			onClick={ () => setShowModal( prev => !prev ) }
		>
			{ __( 'Generate Form with AI', 'jet-form-builder' ) }
		</Button>
		{ showModal && <>
			<GenerateFormModal
				setShowModal={ setShowModal }
				footer={ AiEditorFooterFill }
			/>
		</> }
	</>;
}

export default AiFormHeaderButton;