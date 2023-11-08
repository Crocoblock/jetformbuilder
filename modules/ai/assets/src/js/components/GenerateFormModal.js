const {
	      Modal,
	      TextareaControl,
	      Button,
	      Flex,
      } = wp.components;

const {
	      useState,
      } = wp.element;

const {
	      __,
      } = wp.i18n;

const {
	      apiFetch,
      } = wp;

const {
	      BlockPreview,
      } = wp.blockEditor;

const {
	      parseHTMLtoBlocks,
      } = JetFormBuilderParser;

const {
	      createBlocksFromInnerBlocksTemplate,
      } = wp.blocks;

const promptsExamples = [
	'Registration form with minimum inputs',
	'Opt-in form with gender selector like radio',

];

function GenerateFormModal( { setShowModal } ) {
	const [ prompt, setPrompt ]       = useState( '' );
	const [ blocks, setBlocks ]       = useState( [] );
	const [ isLoading, setIsLoading ] = useState( false );

	const generateForm = () => {
		setIsLoading( true );
		apiFetch( {
			path: '/jet-form-builder/v1/ai/generate',
			method: 'POST',
			data: { prompt },
		} ).then( response => {
			setBlocks(
				createBlocksFromInnerBlocksTemplate(
					parseHTMLtoBlocks( response.form ),
				),
			);
		} ).catch( response => {
			console.error( response );
		} ).finally( () => {
			setIsLoading( false );
		} );
	};

	const useGeneratedForm = () => {

	};

	return <Modal
		style={ {
			width: '60vw',
		} }
		onRequestClose={ () => setShowModal( false ) }
		title={ __( 'Generate Form with AI', 'jet-form-builder' ) }
	>
		{ Boolean( blocks.length ) ? <>
			<BlockPreview
				blocks={ blocks }
			/>
			<Flex justify="flex-start">
				<Button
					variant="primary"
					onClick={ useGeneratedForm }
				>
					{ __( 'Use this form', 'jet-form-builder' ) }
				</Button>
				<Button
					variant="secondary"
					onClick={ () => setBlocks( [] ) }
				>
					{ __( 'Change generation prompt', 'jet-form-builder' ) }
				</Button>
			</Flex>
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
			  <Button
				  variant="primary"
				  isBusy={ isLoading }
				  onClick={ generateForm }
			  >
				  { __( 'Generate', 'jet-form-builder' ) }
			  </Button>
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
					  `If you need some specific fields - describe 
them also in prompt.`,
					  'jet-form-builder',
				  ) }</li>
				  <li>{ __(
					  `Better to use English language for 
the prompt - AI understand it better than other`,
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
				  <li>
					  <Button
						  onClick={ () => setPrompt() }
					  >{ __( '' ) }</Button>
				  </li>
				  <li>{ __(
					  `If you need some specific fields - describe 
them also in prompt.`,
					  'jet-form-builder',
				  ) }</li>
				  <li>{ __(
					  `Better to use English language for 
the prompt - AI understand it better than other`,
					  'jet-form-builder',
				  ) }</li>
			  </ul>
		  </> }
	</Modal>;
}

export default GenerateFormModal;