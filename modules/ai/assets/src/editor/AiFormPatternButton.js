import GenerateFormModal from '../components/GenerateFormModal';
import AiEditorFooterFill from './AiEditorFooterFill';

const {
	      PatternInserterButton,
      } = JetFBComponents;

const {
	      useState,
      } = wp.element;

const {
	      FlexItem,
	      Flex,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

function AiFormPatternButton( { pattern } ) {
	const [ showModal, setShowModal ] = useState( false );

	return <>
		<FlexItem
			style={ {
				height: 'calc( 32px + 3em )',
				margin: '0.6em',
				alignSelf: 'center',
			} }
		>
			{ __( 'or', 'jet-form-builder' ) }
		</FlexItem>
		<li>
			<PatternInserterButton
				patternName={ 'ai' }
				variant="secondary"
				withPatternIcon
				iconSize={ 32 }
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