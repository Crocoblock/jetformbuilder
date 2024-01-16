import GenerateFormModal from '../components/GenerateFormModal';
import AiEditorFooterFill from './AiEditorFooterFill';

const {
	      PatternInserterButton,
      } = JetFBComponents;

const {
	      useState,
      } = wp.element;

function AiFormPatternButton( { pattern } ) {
	const [ showModal, setShowModal ] = useState( false );

	return <>
		<li>
			<PatternInserterButton
				patternName={ 'ai' }
				variant="secondary"
				withPatternIcon
				iconSize={ 48 }
				className="block-editor-block-variation-picker__variation"
				onClick={ () => setShowModal( true ) }
			/>
			<span
				className="block-editor-block-variation-picker__variation-label"
			>
			{ pattern.title }
		</span>
		</li>
		{ showModal && <>
			<GenerateFormModal
				setShowModal={ setShowModal }
				footer={ AiEditorFooterFill }
			/>
		</> }
	</>;
}

export default AiFormPatternButton;