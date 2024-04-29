const {
	      createSlotFill,
      } = wp.components;

const { Slot, Fill } = createSlotFill( 'JFBCaptchaBlockEdit' );

function CaptchaBlockEdit( { children, provider } ) {
	return <Fill>{ ( { attributes, ...props } ) => {
		if ( provider && provider !== attributes.provider ) {
			return null;
		}
		if ( 'function' !== typeof children ) {
			return children;
		}

		return children( { attributes, ...props } );
	} }</Fill>;
}

CaptchaBlockEdit.Slot = Slot;

export default CaptchaBlockEdit;