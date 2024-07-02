import { createSlotFill } from '@wordpress/components';

const ActionModalHeaderSlotFill = createSlotFill( 'JFBActionModalHeader' );

// backward compatibility
window.JetFBComponents                           = window?.JetFBComponents ??
	{};
window.JetFBComponents.ActionModalHeaderSlotFill = ActionModalHeaderSlotFill;

export default ActionModalHeaderSlotFill;