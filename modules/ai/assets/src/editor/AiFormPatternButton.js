import GenerateFormModal from '../components/GenerateFormModal';
import AiEditorFooterFill from './AiEditorFooterFill';
import { useState } from '@wordpress/element';
import { FlexItem, Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

const {
	      PatternInserterButton,
      } = JetFBComponents;

function AiFormPatternButton( { pattern } ) {
	const [ showModal, setShowModal ] = useState( false );

	return <>
		<FlexItem
			className="block-editor-block-variation-picker__or"
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