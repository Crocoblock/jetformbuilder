import FromManualFieldsContent from './from-manual-fields-content';
import BulkOptions from './bulk-options';

const {
	      ActionModal,
	      ScopedAttributesProvider,
      } = JetFBComponents;

const {
	      Button,
      } = wp.components;

const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;

const {
	      SVG,
	      Path,
      } = wp.primitives;

function FromManualFields() {

	const [ showManualModal, setShowModal ] = useState( false );
	const [ modalContent, setModalContent ] = useState( '' );

	const toggleModal = () => {
		setShowModal( toggle => !toggle );
	};

	return <>
		<Button
			isSecondary
			onClick={ toggleModal }
			icon="admin-tools"
			style={ {
				marginBottom: '15px',
			} }
		>
			{ __( 'Manage items', 'jet-form-builder' ) }
		</Button>
		{ showManualModal && <ActionModal
			title={ <>
				{ __( 'Edit Manual Options', 'jet-form-builder' ) }
				<Button
					isSecondary
					onClick={
						() => setModalContent( prev => prev ? '' : 'bulk' )
					}
					style={ {
						marginBottom: '15px',
					} }
				>
					{ modalContent
					  ? __( 'Hide bulk options', 'jet-form-builder' )
					  : __( 'Show bulk options', 'jet-form-builder' ) }
				</Button>
			</> }
			onRequestClose={ toggleModal }
			classNames={ [ 'width-60' ] }
		>
			<ScopedAttributesProvider>
				{ 'bulk' === modalContent
				  ? <BulkOptions setModalContent={ setModalContent }/>
				  : <FromManualFieldsContent/> }
			</ScopedAttributesProvider>
		</ActionModal> }
	</>;
}

export default FromManualFields;