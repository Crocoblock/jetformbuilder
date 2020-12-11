export default function ActionModal( {
										 onRequestClose,
										 children,
										 title,
										 onCancelClick,
										 onUpdateClick,
										 classNames = []
									 } ) {

	const {
		Button,
		ButtonGroup,
		Modal,
	} = wp.components;

	const modalClasses = [ 'jet-form-edit-modal', ...classNames ].join( ' ' );

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
				{ children }
			</div>
			<ButtonGroup
				className="jet-form-edit-modal__actions"
			>
				<Button
					isPrimary
					onClick={ onUpdateClick }
				>Update</Button>
				<Button
					isSecondary
					style={ {
						margin: '0 0 0 10px'
					} }
					onClick={ onCancelClick }
				>Cancel</Button>
			</ButtonGroup>
		</div> }
	</Modal>;
}