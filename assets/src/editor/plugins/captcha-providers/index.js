import GoogleProvider from './google.provider';
import HCaptchaProvider from './hcaptcha.provider';
import FriendlyCaptchaProvider from './friendly.provider';

const {
	      registerPlugin,
      } = wp.plugins;

registerPlugin(
	'jf-captcha-providers',
	{
		render: () => <>
			<GoogleProvider/>
			<HCaptchaProvider/>
			<FriendlyCaptchaProvider/>
		</>,
	},
);