import FromManualFieldsContent from './from-manual-fields-content';
import BulkOptions from './bulk-options';

const {
	      ActionModal,
	      ScopedAttributesProvider,
      } = JetFBComponents;

const {
	      Button,
	      Flex,
      } = wp.components;

const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;

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
			title={ <Flex align="center">
				{ __( 'Edit Manual Options', 'jet-form-builder' ) }
				<Button
					onClick={
						() => setModalContent( prev => prev ? '' : 'bulk' )
					}
					icon={ <svg viewBox="0 0 24 24"
					            xmlns="http://www.w3.org/2000/svg" width="24"
					            height="24" aria-hidden="true"
					            focusable="false">
						<path
							d="M18 4H6c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H6c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h12c.3 0 .5.2.5.5v12zM7 11h2V9H7v2zm0 4h2v-2H7v2zm3-4h7V9h-7v2zm0 4h7v-2h-7v2z"/>
					</svg> }
				>
					{ modalContent
					  ? __( 'Hide bulk options', 'jet-form-builder' )
					  : __( 'Show bulk options', 'jet-form-builder' ) }
				</Button>
			</Flex> }
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