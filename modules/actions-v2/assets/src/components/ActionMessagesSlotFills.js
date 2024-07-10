import { createSlotFill } from '@wordpress/components';

const ActionMessagesSlotFills = {};

for ( const { self } of window.jetFormActionTypes ) {
	if (
		!window[ self ]?.hasOwnProperty?.( '__messages' ) ||
		!Object.keys( window[ self ].__messages )?.length
	) {
		continue;
	}

	for ( const messageKey of Object.keys( window[ self ].__messages ) ) {
		// eslint-disable-next-line max-depth
		if ( ActionMessagesSlotFills.hasOwnProperty( messageKey ) ) {
			continue;
		}
		ActionMessagesSlotFills[ messageKey ] = createSlotFill(
			`JFBActionMessageRow-${ messageKey }`,
		);
	}
}

// backward compatibility
window.JetFBComponents                         = window?.JetFBComponents ?? {};
window.JetFBComponents.ActionMessagesSlotFills = ActionMessagesSlotFills;

export default ActionMessagesSlotFills;