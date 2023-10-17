import ActionModalContext from '../context/ActionModalContext';
import ActionModalFooterSlotFill from './ActionModalFooterSlotFill';

const {
	      Button,
	      ButtonGroup,
	      Modal,
      } = wp.components;

const {
	      useState,
      } = wp.element;

const {
	      __,
      } = wp.i18n;

const {
	      Slot: FooterSlot,
      } = ActionModalFooterSlotFill;

function ActionModal( {
	onRequestClose,
	children,
	title = '',
	classNames = [],
	onUpdateClick,
	onCancelClick,
	updateBtnLabel = 'Update',
	updateBtnProps = {},
	cancelBtnProps = {},
	cancelBtnLabel = 'Cancel',
	fixedHeight = '',
} ) {

	const modalClasses = [ 'jet-form-edit-modal', ...classNames ];

	const [ actionClick, setActionClick ] = useState( null );

	const updateClick = () => {
		if ( onUpdateClick ) {
			onUpdateClick();
		}
		setActionClick( true );
	};
	const cancelClick = () => {
		if ( onCancelClick ) {
			onCancelClick();
		}
		setActionClick( false );
	};

	let style = {};
	if ( fixedHeight ) {
		style = { height: fixedHeight };
		modalClasses.push( 'jet-modal-fixed-height' );
	}

	return <Modal
		onRequestClose={ onRequestClose }
		className={ modalClasses.join( ' ' ) }
		title={ title }
		style={ style }
	>
		{ !children && <div
			className="jet-form-edit-modal__content"
		>
			{ __( 'Action callback is not found.', 'jet-form-builder' ) }
		</div> }
		{ children && <>
			<div className="jet-form-edit-modal__wrapper">
				<ActionModalContext.Provider
					value={ { actionClick, onRequestClose } }>
					<div className="jet-form-edit-modal__content">
						{ 'function' === typeof children &&
						children( { actionClick, onRequestClose } ) }
						{ 'function' !== typeof children && children }
					</div>
				</ActionModalContext.Provider>
			</div>
			<FooterSlot fillProps={ { updateClick, cancelClick } }>
				{ ( fills ) => (
					Boolean( fills?.length )
					? fills : <ButtonGroup
						className="jet-form-edit-modal__actions"
					>
						<Button
							isPrimary
							onClick={ updateClick }
							{ ...updateBtnProps }
						>{ updateBtnLabel }</Button>
						<Button
							isSecondary
							style={ {
								margin: '0 0 0 10px',
							} }
							onClick={ cancelClick }
							{ ...cancelBtnProps }
						>{ cancelBtnLabel }</Button>
					</ButtonGroup>
				) }
			</FooterSlot>
		</> }
	</Modal>;
}

export default ActionModal;