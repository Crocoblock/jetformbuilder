import { useState } from '@wordpress/element';
import ControlsPopover from './controls-popover';

const PopoverContainer = ( { children, trigger, label } ) => {

	const [ popoverAnchor, setPopoverAnchor ] = useState( null );
	const [ showPopover, setShowPopover ] = useState( false );

	return (
		<>
			<div
				ref={ setPopoverAnchor }
				onClick={ () => {
					setShowPopover( ! showPopover );
				} }
			>
				{ trigger }
			</div>
			<ControlsPopover
				anchor={ popoverAnchor }
				label={ label }
				isOpen={ showPopover }
				onClose={ () => {
					setShowPopover( false );
				} }
			>
				{ children }
			</ControlsPopover>
		</>
	);
}

export default PopoverContainer;