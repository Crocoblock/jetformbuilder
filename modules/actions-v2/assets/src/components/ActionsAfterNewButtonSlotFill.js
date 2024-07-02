import { createSlotFill } from '@wordpress/components';

const ActionsAfterNewButtonSlotFill = createSlotFill(
	'JFBActionsAfterNewButton',
);

// backward compatibility
window.JetFBComponents                               = window?.JetFBComponents ??
	{};
window.JetFBComponents.ActionsAfterNewButtonSlotFill = ActionsAfterNewButtonSlotFill;

export default ActionsAfterNewButtonSlotFill;