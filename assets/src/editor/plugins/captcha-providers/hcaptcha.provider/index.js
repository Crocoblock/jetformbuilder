import HCaptchaOptions from './HCaptchaOptions';
import HCaptchaBlockEdit from './HCaptchaBlockEdit';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
      } = JetFBComponents;

export default function HCaptchaProvider() {
	return <>
		<CaptchaOptions provider={ 'hcaptcha' }>
			{ props => <HCaptchaOptions { ...props } /> }
		</CaptchaOptions>
		<CaptchaBlockEdit provider={ 'hcaptcha' }>
			{ props => <HCaptchaBlockEdit { ...props } /> }
		</CaptchaBlockEdit>
	</>;
}