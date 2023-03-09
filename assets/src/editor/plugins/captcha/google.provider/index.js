import GoogleCaptchaOptions from './GoogleCaptchaOptions';

const { CaptchaOptions } = JetFBComponents;

export default function GoogleProvider() {
	return <CaptchaOptions provider={ 'google' }>
		{ ( props ) => <GoogleCaptchaOptions { ...props } /> }
	</CaptchaOptions>;
}