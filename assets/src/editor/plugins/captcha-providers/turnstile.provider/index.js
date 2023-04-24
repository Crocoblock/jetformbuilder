import TurnstileOptions from './TurnstileOptions';
import TurnstileBlockEdit from './TurnstileBlockEdit';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
	      CaptchaBlockTip,
      } = JetFBComponents;

export default function TurnstileProvider() {
	return <>
		<CaptchaOptions provider={ 'turnstile' }>
			{ props => {
				return <>
					<TurnstileOptions { ...props } />
					<CaptchaBlockTip/>
				</>;
			} }
		</CaptchaOptions>
		<CaptchaBlockEdit provider={ 'turnstile' }>
			{ props => <TurnstileBlockEdit { ...props } /> }
		</CaptchaBlockEdit>
	</>;
}