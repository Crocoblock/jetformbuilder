import { Popover, Button } from '@wordpress/components';

const ControlsPopover = ( { children, isOpen, onClose, label, anchor } ) => {

	if ( ! isOpen ) {
		return null;
	}

	const closeIcon = (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false"><path d="M12 13.06l3.712 3.713 1.061-1.06L13.061 12l3.712-3.712-1.06-1.06L12 10.938 8.288 7.227l-1.061 1.06L10.939 12l-3.712 3.712 1.06 1.061L12 13.061z"></path></svg>
	);

	return (
		<Popover
			className="crocoblock-style-manager__popover"
			placement="left"
			onClose={ onClose }
			shouldCloseOnClickOutside={ true }
			anchor={ anchor }
			noArrow={ false }
			offset={ 10 }
		>
			<div className="crocoblock-style-manager__popover">
				<div className="crocoblock-style-manager__popover-header">
					{ label}
					<Button
						className="crocoblock-style-manager__popover-close"
						onClick={ onClose }
						icon={ closeIcon } label="Close"
					></Button>
				</div>
				<div className="crocoblock-style-manager__popover-content">
					{ children }
				</div>
			</div>
		</Popover>
	);
};

export default ControlsPopover;
