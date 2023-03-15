import useCaptchaProvider from '../hooks/useCaptchaProvider';

const {
	      createSlotFill,
      } = wp.components;

const { Slot, Fill } = createSlotFill( 'JFBCaptchaOptions' );

function CaptchaOptions( { children, provider = false } ) {
	return <Fill>{ ( { args, setArgs } ) => {
		if ( provider && provider !== args.captcha ) {
			return null;
		}

		if ( 'function' !== typeof children ) {
			return children;
		}

		return children( { args, setArgs } );
	} }</Fill>;
}

CaptchaOptions.Slot = Slot;

export default CaptchaOptions;
