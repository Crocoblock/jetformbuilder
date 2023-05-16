import PluginCaptcha from './render';

const { __ } = wp.i18n;

const {
	      useEffect,
      } = wp.element;

const {
	      useMetaState,
      } = JetFBHooks;

const settings = {
	render: () => {
		const [ args, setArgs ] = useMetaState( '_jf_recaptcha' );

		/* Backward compatibility */

		useEffect( () => {
			if ( !args.enabled || args.hasOwnProperty( 'captcha' ) ) {
				return;
			}
			setArgs( prev => {
				delete prev.enabled;

				return {
					captcha: 'google',
					google: {
						use_global: prev.use_global,
						key: prev.key,
						secret: prev.secret,
						threshold: prev.threshold,
					},
				};
			} );
		}, [] );

		return <PluginCaptcha/>;
	},
	icon: 'filter',
};

export default {
	base: {
		name: 'jf-captcha-panel',
		title: __( 'Captcha Settings', 'jet-form-builder' ),
	},
	settings,
};