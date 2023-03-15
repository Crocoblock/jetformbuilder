import { captchaItems } from './options';
import GoogleProvider from './google.provider';
import HCaptchaProvider from './hcaptcha.provider';
import FriendlyCaptchaProvider from './friendly.provider';
import GeneralSettings from './settings';

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
const {
	      PluginDocumentSettingPanel,
      } = wp.editPost;

function PluginCaptcha() {
	const [ args, setArgs ] = useMetaState( '_jf_recaptcha' );

	return <>
		<PluginDocumentSettingPanel { ...GeneralSettings }>
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
		</PluginDocumentSettingPanel>
		<GoogleProvider/>
		<HCaptchaProvider/>
		<FriendlyCaptchaProvider/>
	</>;
}

export default PluginCaptcha;
