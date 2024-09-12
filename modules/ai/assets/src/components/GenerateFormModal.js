import './GenerateFormModal.pcss';
import {
	TextareaControl,
	Button,
	Flex,
	ExternalLink,
	Notice,
	Modal,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { sprintf, __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';

const {
	      parseHTMLtoBlocks,
	      getFormInnerFields,
      } = JetFormBuilderParser;

const promptsExamples = [
	'Registration form with minimum inputs',
	'Opt-in form with gender selector like radio',
	'Quiz form with 5 questions with choices about math',
];

function GenerateFormModal( {
	setShowModal,
	footer: Footer = () => 'Here may be buttons',
} ) {
	const [ prompt, setPrompt ]       = useState( '' );
	const [ formHTML, setFormHTML ]   = useState( '' );
	const [ isLoading, setIsLoading ] = useState( false );
	const [ error, setError ]         = useState( '' );
	const [ usage, setUsage ]         = useState( 0 );
	const [ limit, setLimit ]         = useState( 0 );

	const generateForm = () => {
		setIsLoading( true );
		apiFetch( {
			path: '/jet-form-builder/v1/ai/generate',
			method: 'POST',
			data: { prompt },
		} ).then( response => {

			setError( '' );
			setFormHTML( getFormInnerFields( response.form ) );
			console.group( __(
				'JFB: Parsed blocks from generated HTML',
				'jet-form-builder',
			) );
			console.log( parseHTMLtoBlocks( response.form ) );
			console.groupEnd();

			setUsage( response.usage );
			setLimit( response.limit );

		} ).catch( response => {
			setError( response?.message ??
				__( 'Undefined error.', 'jet-form-builder' ),
			);
		} ).finally( () => {
			setIsLoading( false );
		} );
	};

	return <Modal
		style={ {
			width: '60vw',
		} }
		onRequestClose={ () => setShowModal( false ) }
		title={ <Flex>
			{ __( 'Generate Form with AI', 'jet-form-builder' ) }
			<span className="badge">
				{ __(
					'Beta. Limited 10 requests per month',
					'jet-form-builder',
				) }
			</span>
		</Flex> }
		className="jfb-ai-modal"
	>
		{ error && <Notice
			status="error"
			onRemove={ () => setError( '' ) }
		>
			<Flex direction="column">
				{ error }
				<ExternalLink
					href="https://support.crocoblock.com/support/home/"
				>
					{ __( 'Contact Crocoblock support', 'jet-form-builder' ) }
				</ExternalLink>
			</Flex>
		</Notice> }
		{ Boolean( formHTML.length ) ? <>
			<div
				dangerouslySetInnerHTML={ { __html: formHTML } }
				style={ {
					padding: '2em 1em',
					backgroundColor: '#f6f7f7',
					marginBottom: '1em',
				} }
			/>
			<Footer
				clearHTML={ () => setFormHTML( '' ) }
				formHTML={ formHTML }
				prompt={ prompt }
			>
				<span
					style={ {
						flex: '1',
						textAlign: 'end',
						color: 'rgb( 117, 117, 117 )',
					} }
				>
					{ sprintf(
						__( 'Requests used: %d/%d', 'jet-form-builder' ),
						usage,
						limit,
					) }
				</span>
			</Footer>
		</> : <>
			  <TextareaControl
				  label={ __( 'Describe the form you want',
					  'jet-form-builder' ) }
				  value={ prompt }
				  onChange={ setPrompt }
				  help={ __(
					  'Prompt example: Simple contact form',
					  'jet-form-builder',
				  ) }
			  />
			  { Boolean( prompt.length ) && <Button
				  variant="primary"
				  isBusy={ isLoading }
				  disabled={ isLoading }
				  onClick={ generateForm }
			  >
				  { __( 'Generate', 'jet-form-builder' ) }
			  </Button> }
			  <h4>
				  { __( 'Tips to write good prompt:', 'jet-form-builder' ) }
			  </h4>
			  <ul style={ {
				  listStyle: 'disc',
				  paddingInlineStart: '1em',
			  } }>
				  <li>{ __(
					  'Start with the main purpose of the form.',
					  'jet-form-builder',
				  ) }</li>
				  <li>{ __(
					  `If you need specific fields – describe them in the prompt as well.`,
					  'jet-form-builder',
				  ) }</li>
				  <li>{ __(
					  `It is better to use the English language for the prompt, as AI understands it better than others.`,
					  'jet-form-builder',
				  ) }</li>
			  </ul>
			  <h4>
				  { __( 'Examples of the good prompts:', 'jet-form-builder' ) }
			  </h4>
			  <ul style={ {
				  listStyle: 'disc',
				  paddingInlineStart: '1em',
			  } }>
				  { promptsExamples.map( textPrompt => <li key={ textPrompt }>
					  <Button
						  onClick={ () => setPrompt( textPrompt ) }
						  variant="link"
					  >{ textPrompt }</Button>
				  </li> ) }
			  </ul>
		  </> }
	</Modal>;
}

export default GenerateFormModal;
