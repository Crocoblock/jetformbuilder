import GoogleProvider from './google.provider';
import HCaptchaProvider from './hcaptcha.provider';
import FriendlyCaptchaProvider from './friendly.provider';

function CaptchaProviders() {
	return <>
		<GoogleProvider/>
		<HCaptchaProvider/>
		<FriendlyCaptchaProvider/>
	</>;
}

export default CaptchaProviders;