import GenerateFormModal from '../components/GenerateFormModal';
import AiEditorFooterFill from './AiEditorFooterFill';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

function AiFormHeaderButton() {
	const [ showModal, setShowModal ] = useState( false );

	return <>
		<Button
			variant="tertiary"
			iconSize="16"
			icon={ <svg width="16" height="16" viewBox="0 0 22 22" fill="none"
			            xmlns="http://www.w3.org/2000/svg">
				<path
					d="M7.5 3.6L10 5L8.6 2.5L10 0L7.5 1.4L5 0L6.4 2.5L5 5L7.5 3.6ZM19.5 13.4L17 12L18.4 14.5L17 17L19.5 15.6L22 17L20.6 14.5L22 12L19.5 13.4ZM22 0L19.5 1.4L17 0L18.4 2.5L17 5L19.5 3.6L22 5L20.6 2.5L22 0ZM14.37 5.29C13.98 4.9 13.35 4.9 12.96 5.29L1.29 16.96C0.899998 17.35 0.899998 17.98 1.29 18.37L3.63 20.71C4.02 21.1 4.65 21.1 5.04 20.71L16.7 9.05C17.09 8.66 17.09 8.03 16.7 7.64L14.37 5.29ZM13.34 10.78L11.22 8.66L13.66 6.22L15.78 8.34L13.34 10.78Z"
					fill="currentColor"/>
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