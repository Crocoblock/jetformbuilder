import GoogleCaptchaOptions from './GoogleCaptchaOptions';
import GoogleCaptchaBlockEdit from './GoogleCaptchaBlockEdit';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
      } = JetFBComponents;

export default function GoogleProvider() {
	return <>
		<CaptchaOptions provider={ 'google' }>
			{ props => <GoogleCaptchaOptions { ...props } /> }
		</CaptchaOptions>
		<CaptchaBlockEdit provider={ 'google' }>
			{ props => <GoogleCaptchaBlockEdit { ...props } /> }
		</CaptchaBlockEdit>
	</>;
}