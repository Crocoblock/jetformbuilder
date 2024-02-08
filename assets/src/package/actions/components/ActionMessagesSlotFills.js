const {
	      createSlotFill,
      } = wp.components;

const ActionMessagesSlotFills = {};

// eslint-disable-next-line no-undef
for ( const { self } of jetFormActionTypes ) {
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

export default ActionMessagesSlotFills;