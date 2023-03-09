const { __ } = wp.i18n;

const base = {
	name: 'jf-captcha-panel',
	title: __( 'Captcha Settings', 'jet-form-builder' ),
};

const {
	      lazy,
	      Suspense,
	      useEffect,
      } = wp.element;

const {
	      useMetaState,
      } = JetFBHooks;

const PluginCaptcha = lazy( () => import('./render') );

const settings = {
	render: () => {
		const [ args, setArgs ] = useMetaState( '_jf_recaptcha' );

		useEffect( () => {
			if ( !args.enabled ) {
				return;
			}
			setArgs( prev => {
				delete prev.enabled;

				return {
					captcha: 'google',
					google: {
						...prev,
					},
				};
			} );
		}, [] );

		return <Suspense fallback={ 'Loading...' }>
			<PluginCaptcha/>
		</Suspense>;
	},
	icon: 'filter',
};

export default {
	base,
	settings,
};