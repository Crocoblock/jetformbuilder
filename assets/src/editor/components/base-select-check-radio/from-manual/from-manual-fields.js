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

const showBulkIcon = <svg width="24" height="24" viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
	<path
		d="M11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM19 19H5V5H19V19Z"
		fill="currentColor"/>
</svg>;

const hideBulkIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                          width="36" height="36" aria-hidden="true"
                          focusable="false">
	<path d="M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"/>
</svg>;

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
					icon={ modalContent ? hideBulkIcon : showBulkIcon }
					variant="tertiary"
				>
					{ modalContent
					  ? __( 'Back to options manager', 'jet-form-builder' )
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