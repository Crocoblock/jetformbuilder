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

function GenerateFormModal( { setShowModal } ) {
	const [ query, setQuery ] = useState( '' );

	return <Modal
		style={ {
			width: '60vw',
		} }
		onRequestClose={ () => setShowModal( false ) }
		title={ __( 'Generate Form with AI', 'jet-form-builder' ) }
	>
		<TextareaControl
			label={ __( 'Describe the form you want', 'jet-form-builder' ) }
			value={ query }
			onChange={ setQuery }
		/>
		<Button
			variant="primary"
		>
			{ __( 'Generate', 'jet-form-builder' ) }
		</Button>
	</Modal>;
}

export default GenerateFormModal;