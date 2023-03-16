import FriendlyCaptchaOptions from './FriendlyCaptchaOptions';
import FriendlyCaptchaBlockEdit from './FriendlyCaptchaBlockEdit';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
      } = JetFBComponents;

export default function HCaptchaProvider() {
	return <>
		<CaptchaOptions provider={ 'friendly' }>
			{ props => <FriendlyCaptchaOptions { ...props } /> }
		</CaptchaOptions>
		<CaptchaBlockEdit provider={ 'friendly' }>
			{ props => <FriendlyCaptchaBlockEdit { ...props } /> }
		</CaptchaBlockEdit>
	</>;
}