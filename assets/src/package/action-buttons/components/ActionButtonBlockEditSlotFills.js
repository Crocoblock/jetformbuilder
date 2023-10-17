const {
	      createSlotFill,
      } = wp.components;

const { Slot, Fill } = createSlotFill( 'JFBActionButtonBlockEdit' );

function ActionButtonBlockEditSlotFills( { children, action_type } ) {
	return <Fill>{ ( { attributes, ...props } ) => {
		if ( action_type && action_type !== attributes.action_type ) {
			return null;
		}
		if ( 'function' !== typeof children ) {
			return children;
		}

		return children( { attributes, ...props } );
	} }</Fill>;
}

ActionButtonBlockEditSlotFills.Slot = Slot;

export default ActionButtonBlockEditSlotFills;