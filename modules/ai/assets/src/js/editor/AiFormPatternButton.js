import GenerateFormModal from '../components/GenerateFormModal';
import GenerateFormModalFooterSlotFill
	from '../components/GenerateFormModalFooterSlotFill';

const {
	      __,
      } = wp.i18n;

const {
	      PatternInserterButton,
      } = JetFBComponents;

const {
	      useDispatch,
      } = wp.data;
const {
	      useEffect,
	      useState,
      } = wp.element;

const {
	      Fill: FooterFill,
      } = GenerateFormModalFooterSlotFill;

const {
	      Button,
	      Flex,
      } = wp.components;

function AiFormPatternButton( { pattern } ) {
	const [ showModal, setShowModal ] = useState( false );

	function appendGeneratedForm() {

	}

	function replaceWithGeneratedForm() {

	}

	return <>
		<li>
			<PatternInserterButton
				patternName={ 'ai' }
				variant="secondary"
				withPatternIcon
				iconSize={ 64 }
				className="block-editor-block-variation-picker__variation"
				onClick={ () => setShowModal( true ) }
			/>
			<span
				className="block-editor-block-variation-picker__variation-label"
			>
			{ pattern.title }
		</span>
		</li>
		{ showModal && <GenerateFormModal setShowModal={ setShowModal }/> }
		<FooterFill>
			{ ( { clearHTML } ) => <Flex justify="flex-start">
				<Button
					variant="primary"
					onClick={ () => { /* show tooltip */ } }
				>
					{ __( 'Use this form', 'jet-form-builder' ) }
				</Button>
				<Button
					variant="secondary"
					onClick={ clearHTML }
				>
					{ __( 'Change generation prompt', 'jet-form-builder' ) }
				</Button>
			</Flex> }
		</FooterFill>
	</>;
}

export default AiFormPatternButton;