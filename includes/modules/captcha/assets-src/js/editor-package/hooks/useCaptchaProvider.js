const {
	      useMetaState,
      } = JetFBHooks;

function useCaptchaProvider() {
	const [ args, setArgs ] = useMetaState( '_jf_recaptcha' );
	const { captcha }       = args;

	if ( !captcha ) {
		return [ {}, () => {} ];
	}

	const providerArgs = args?.[ captcha ] ?? {};

	const setProviderArgs = ( props = {} ) => {
		if ( !captcha ) {
			return;
		}
		setArgs( prev => (
			{
				...prev,
				[ captcha ]: {
					...providerArgs,
					...props,
				},
			}
		) );
	};

	return [ providerArgs, setProviderArgs ];
}

export default useCaptchaProvider;