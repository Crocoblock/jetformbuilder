import {
	TextareaControl,
	Button,
	Flex,
	Notice,
	Modal,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import HtmlParserFooter from './HtmlParserFooter';

const {
	parseHTMLtoBlocks,
	getFormInnerFields,
} = JetFormBuilderParser;

export default function HtmlParserModal( {setShowModal} ) {
	const [ html, setHtml ]         = useState( '' );
	const [ formHTML, setFormHTML ] = useState( '' );
	const [ isParsing, setParsing ] = useState( false );
	const [ error, setError ]       = useState( '' );

	const handleSubmit = () => {
		setParsing( true );
		setError( '' );

		try {
			const innerHTML = getFormInnerFields( html );

			const styledHTML = `
			<style>
				textarea, input:not([type="checkbox"]):not([type="radio"]) {
					display: block;
					margin-bottom: 20px;
				}
				label {
					display:block;
					margin-bottom:5px;
				}
				br {
					display:none;
				}
				input[type="submit"], button {
					display:block;
				}
			</style>
			${innerHTML}
		`;

			setFormHTML( styledHTML );
		} catch ( err ) {
			console.error( err );
			setError(
				err?.message ||
				__( 'Failed to parse HTML.', 'jet-form-builder' )
			);
		} finally {
			setParsing( false );
		}
	};

	return (
		<Modal
			style={ { width: '60vw' } }
			onRequestClose={ () => setShowModal( false ) }
			title={ __( 'Import HTML Form', 'jet-form-builder' ) }
			className="jfb-html-parser-modal"
		>
			{ error && (
				<Notice
					status="error"
					isDismissible
					onRemove={ () => setError( '' ) }
				>
					{ error }
				</Notice>
			) }

			{ Boolean( formHTML.length ) ? (
				<>
					<div
						dangerouslySetInnerHTML={ { __html: formHTML } }
						style={ {
							padding: '2em 1em',
							backgroundColor: '#f6f7f7',
							marginBottom: '1em',
						} }
					/>

					<HtmlParserFooter
						clearHTML={ () => setFormHTML( '' ) }
						formHTML={ formHTML }
						rawHTML={ html }
						setShowModal={ setShowModal }
					/>
				</>
			) : (
				<>
					<TextareaControl
						label={ __( 'Paste your HTML here', 'jet-form-builder' ) }
						value={ html }
						onChange={ setHtml }
						rows={ 7 }
					/>

					<Flex justify="flex-end" style={ { marginTop: '1em' } }>
						<Button
							isPrimary
							isBusy={ isParsing }
							disabled={ isParsing || !html.trim().length }
							onClick={ handleSubmit }
						>
							{ isParsing
								? __( 'Parsing...', 'jet-form-builder' )
								: __( 'Parse HTML', 'jet-form-builder' ) }
						</Button>
					</Flex>
				</>
			) }
		</Modal>
	);
}
