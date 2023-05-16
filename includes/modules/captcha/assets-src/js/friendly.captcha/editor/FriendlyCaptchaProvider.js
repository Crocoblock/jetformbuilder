import FriendlyCaptchaOptions from './FriendlyCaptchaOptions';
import FriendlyCaptchaBlockEdit from './FriendlyCaptchaBlockEdit';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
	      CaptchaBlockTip,
      } = JetFBComponents;

export default function FriendlyCaptchaProvider() {
	return <>
		<CaptchaOptions provider={ 'friendly' }>
			{ props => {
				return <>
					<FriendlyCaptchaOptions { ...props } />
					<CaptchaBlockTip/>
				</>;
			} }
		</CaptchaOptions>
		<CaptchaBlockEdit provider={ 'friendly' }>
			{ props => <FriendlyCaptchaBlockEdit { ...props } /> }
		</CaptchaBlockEdit>
	</>;
}