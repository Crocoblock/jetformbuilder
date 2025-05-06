import FromManualFieldsContent from './FromManualFieldsContent';
import BulkOptions from './BulkOptions';

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

const hideBulkIcon = <svg
	width="24"
	height="24"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	>
	<path
		d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
		fill="currentColor"
	/>
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
		>
			{ __( 'Manage items', 'jet-form-builder' ) }
		</Button>
		{ showManualModal && <ActionModal
			title={ <Flex align="center">
				{ __( 'Edit Options', 'jet-form-builder' ) }
				<Button
					onClick={
						() => setModalContent( prev => prev ? '' : 'bulk' )
					}
					icon={ modalContent ? hideBulkIcon : showBulkIcon }
					variant="tertiary"
				>
					{ modalContent
					  ? __( 'Switch to manual editor', 'jet-form-builder' )
					  : __( 'Switch to bulk editor', 'jet-form-builder' ) }
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