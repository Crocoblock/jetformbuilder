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
			<div class="jet-form-builder-html-parser-preview">
				<style>
					.jet-form-builder-html-parser-preview {
						pointer-events: none;
					}
					.jet-form-builder-html-parser-preview textarea,
					.jet-form-builder-html-parser-preview input:not([type="checkbox"]):not([type="radio"]):not([type="submit"]),
					.jet-form-builder-html-parser-preview select {
						display: block;
						width: 100% !important;
						max-width: 100% !important;
						margin-bottom: 10px;
					}
					.jet-form-builder-html-parser-preview label {
						display:block;
						margin-bottom:5px;
					}
					.jet-form-builder-html-parser-preview br {
						display:none;
					}
					.jet-form-builder-html-parser-preview input[type="submit"],
					.jet-form-builder-html-parser-preview button {
						display:block;
						border: none;
						background-color: #0071a1;
						color: #fff;
						padding: 10px 20px;
						cursor: pointer;
					}
				</style>
				${innerHTML}
			</div>
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

					<ul style={ {
						listStyle: 'disc',
						paddingInlineStart: '1em',
					} }>
						<li>{ __(
							'You can use any HTML code that contains form elements, but only headings, form controls, and buttons will be parsed.',
							'jet-form-builder',
						) }</li>
						<li>{ __(
							`All the code you paste here will be parsed into a single Form, even if it contains more than one <form> tag.`,
							'jet-form-builder',
						) }</li>
						<li>{ __(
							`The parser can only understand form elements and structure; it can't parse styling or behavior.`,
							'jet-form-builder',
						) }</li>
					</ul>

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
