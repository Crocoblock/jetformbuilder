import FriendlyCaptchaOptions from './FriendlyCaptchaOptions';

const {
	      CaptchaOptions,
	      CaptchaBlockEdit,
      } = JetFBComponents;

export default function FriendlyCaptchaProvider() {
	return <CaptchaOptions provider={ 'friendly' }>
		{ ( props ) => <FriendlyCaptchaOptions { ...props } /> }
	</CaptchaOptions>;
}