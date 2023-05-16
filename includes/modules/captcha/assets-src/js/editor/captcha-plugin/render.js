import { captchaItems } from './options';

const {
	      __,
      } = wp.i18n;
const {
	      useMetaState,
      } = JetFBHooks;
const {
	      CaptchaOptions,
      } = JetFBComponents;
const {
	      SelectControl,
      } = wp.components;

function PluginCaptcha() {
	const [ args, setArgs ] = useMetaState( '_jf_recaptcha' );

	return <>
		<SelectControl
			label={ __( 'Captcha Provider', 'jet-form-builder' ) }
			value={ args.captcha }
			options={ captchaItems }
			onChange={ captcha => {
				setArgs( ( prevArgs ) => (
					{
						...prevArgs,
						captcha,
					}
				) );
			} }
		/>
		{ Boolean( args.captcha ) && (
			<CaptchaOptions.Slot fillProps={ { args, setArgs } }/>
		) }
	</>;
}

export default PluginCaptcha;
