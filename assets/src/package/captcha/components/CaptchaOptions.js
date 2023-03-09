const {
	      createSlotFill,
      } = wp.components;

const { Slot, Fill } = createSlotFill( 'JFBCaptchaOptions' );

function CaptchaOptions( { children, provider = false } ) {
	return <Fill>{ ( { args, setArgs } ) => {
		if ( 'function' !== typeof children ) {
			return children;
		}
		const { captcha } = args;

		if ( provider && provider !== captcha ) {
			return null;
		}

		const providerArgs = args?.[ captcha ] ?? false;

		const setProviderArgs = ( props = {} ) => {
			if ( !captcha ) {
				return;
			}
			setArgs( prev => (
				{
					...prev,
					[ captcha ]: {
						...(
							providerArgs || {}
						),
						...props,
					},
				}
			) );
		};

		return children( { args, providerArgs, setProviderArgs } );
	} }</Fill>;
}

CaptchaOptions.Slot = Slot;

export default CaptchaOptions;
