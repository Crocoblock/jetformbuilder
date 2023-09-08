const {
	      createSlotFill,
      } = wp.components;

const { Slot, Fill } = createSlotFill( 'JFBActionItemDetails' );

function ActionItemDetailsSlotFill( { children, type } ) {
	return <Fill>{ ( { type: currentType } ) => {
		return currentType !== type ? null : children;
	} }</Fill>;
}

ActionItemDetailsSlotFill.Slot = Slot;

export default ActionItemDetailsSlotFill;