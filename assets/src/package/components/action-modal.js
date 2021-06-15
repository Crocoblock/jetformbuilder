function ActionModal( {
						  onRequestClose,
						  children,
						  title,
						  classNames = [],
						  onUpdateClick,
						  onCancelClick,
						  updateBtnLabel = 'Update',
						  updateBtnProps = {},
						  cancelBtnProps = {},
						  cancelBtnLabel = 'Cancel',
					  } ) {

	const {
			  Button,
			  ButtonGroup,
			  Modal,
		  } = wp.components;

	const {
			  useState,
			  useEffect,
		  } = wp.element;

	const modalClasses = [ 'jet-form-edit-modal', ...classNames ].join( ' ' );

	const [ actionClick, setActionClick ] = useState( null );

	const updateClick = () => {
		if ( onUpdateClick ) {
			onUpdateClick();
		}
		setActionClick( true )
	}
	const cancelClick = () => {
		if ( onCancelClick ) {
			onCancelClick();
		}
		setActionClick( false );
	}

	return <Modal
		onRequestClose={ onRequestClose }
		className={ modalClasses }
		title={ title }
	>
		{ ! children && <div
			className="jet-form-edit-modal__content"
		>
			{ 'Action callback is not found.' }
		</div> }
		{ children && <div>
			<div className="jet-form-edit-modal__content">
				{ 'function' === typeof children && children( { actionClick, onRequestClose } ) }
				{ 'function' !== typeof children && children }
			</div>
			<ButtonGroup
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
		</div> }
	</Modal>;
}

export default ActionModal;