const {
	      Modal,
	      TextareaControl,
	      Button,
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

function GenerateFormModal( { setShowModal } ) {
	const [ prompt, setPrompt ]       = useState( '' );
	const [ blocks, setBlocks ]       = useState( [] );
	const [ isLoading, setIsLoading ] = useState( false );

	return <Modal
		style={ {
			width: '60vw',
		} }
		onRequestClose={ () => setShowModal( false ) }
		title={ __( 'Generate Form with AI', 'jet-form-builder' ) }
	>
		<TextareaControl
			label={ __( 'Describe the form you want', 'jet-form-builder' ) }
			value={ prompt }
			onChange={ setPrompt }
		/>
		<Button
			variant="primary"
			isBusy={ isLoading }
			onClick={ () => {
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
			} }
		>
			{ __( 'Generate', 'jet-form-builder' ) }
		</Button>
		{ Boolean( blocks.length ) && <BlockPreview
			blocks={ blocks }
		/> }
	</Modal>;
}

export default GenerateFormModal;