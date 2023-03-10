import HCaptchaOptions from './HCaptchaOptions';

const { CaptchaOptions } = JetFBComponents;

export default function HCaptchaProvider() {
	return <CaptchaOptions provider={ 'hcaptcha' }>
		{ ( props ) => <HCaptchaOptions { ...props } /> }
	</CaptchaOptions>;
}