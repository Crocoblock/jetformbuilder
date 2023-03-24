import TurnstileOptions from './TurnstileOptions';
import TurnstileBlockEdit from './TurnstileBlockEdit';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
      } = JetFBComponents;

export default function TurnstileProvider() {
	return <>
		<CaptchaOptions provider={ 'turnstile' }>
			{ props => <TurnstileOptions { ...props } /> }
		</CaptchaOptions>
		<CaptchaBlockEdit provider={ 'turnstile' }>
			{ props => <TurnstileBlockEdit { ...props } /> }
		</CaptchaBlockEdit>
	</>;
}