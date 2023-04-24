import HCaptchaOptions from './HCaptchaOptions';
import HCaptchaBlockEdit from './HCaptchaBlockEdit';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
	      CaptchaBlockTip,
      } = JetFBComponents;

export default function HCaptchaProvider() {
	return <>
		<CaptchaOptions provider={ 'hcaptcha' }>
			{ props => {
				return <>
					<HCaptchaOptions { ...props } />
					<CaptchaBlockTip />
				</>;
			}}
		</CaptchaOptions>
		<CaptchaBlockEdit provider={ 'hcaptcha' }>
			{ props => <HCaptchaBlockEdit { ...props } /> }
		</CaptchaBlockEdit>
	</>;
}