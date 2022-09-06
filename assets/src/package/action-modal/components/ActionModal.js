import ActionModalContext from '../context/ActionModalContext';

const {
	Button,
	ButtonGroup,
	Modal,
} = wp.components;

const {
	useState,
	useEffect,
} = wp.element;

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
	isUseActions = true
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
		{ ! children && <div
			className="jet-form-edit-modal__content"
		>
			{ 'Action callback is not found.' }
		</div> }
		{ children && <>
			<div className='jet-form-edit-modal__wrapper'>
				<ActionModalContext.Provider value={ { actionClick, onRequestClose } }>
					<div className="jet-form-edit-modal__content">
						{ 'function' === typeof children && children( { actionClick, onRequestClose } ) }
						{ 'function' !== typeof children && children }
					</div>
				</ActionModalContext.Provider>
			</div>
			{ isUseActions && <ButtonGroup
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
			</ButtonGroup> }
		</> }
	</Modal>;
}

export default ActionModal;