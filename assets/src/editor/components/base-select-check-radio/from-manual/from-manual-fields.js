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
		fill="#0F172A"/>
</svg>;

const hideBulkIcon = <svg width="24" height="24"
                          viewBox="0 0 24 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
	<path
		d="M8.99985 7.00009H6.99985V9.00009H8.99985V7.00009Z"
		fill="#0F172A"/>
	<path
		d="M6.99985 11.0001H8.99985V13.0001H6.99985V11.0001Z"
		fill="#0F172A"/>
	<path fillRule="evenodd" clipRule="evenodd"
	      d="M22.707 3.12141C23.0975 2.73089 23.0975 2.09772 22.707 1.7072C22.3164 1.31668 21.6833 1.31668 21.2927 1.7072L19.9998 3.00009H3.89985C3.39985 3.00009 2.99985 3.40009 2.99985 3.90009V20.0001L1 22.0858C0.609476 22.4763 0.609476 23.1095 1 23.5C1.39052 23.8905 2.02369 23.8905 2.41421 23.5L22.707 3.12141ZM4.99985 18.0001L6.99985 16.0001V15.0001H7.99985L10.9998 12.0001V11.0001H11.9998L13.9998 9.00009H10.9998V7.00009H15.9998L17.9998 5.00009H4.99985V18.0001Z"
	      fill="#0F172A"/>
	<path
		d="M20.9998 7.32852L18.9998 9.32852V19.0001H9.32828L7.32828 21.0001H20.0998C20.4998 21.0001 20.9998 20.5001 20.9998 20.1001V7.32852Z"
		fill="#0F172A"/>
	<path
		d="M16.9998 17.0001H11.3283L13.3283 15.0001H16.9998V17.0001Z"
		fill="#0F172A"/>
	<path
		d="M15.3283 13.0001H16.9998V11.3285L15.3283 13.0001Z"
		fill="#0F172A"/>
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