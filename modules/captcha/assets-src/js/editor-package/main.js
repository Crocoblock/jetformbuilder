import CaptchaOptions from './components/CaptchaOptions';
import CaptchaBlockEdit from './components/CaptchaBlockEdit';
import useCaptchaProvider from './hooks/useCaptchaProvider';
import getCaptchaProviders from './helpers/getCaptchaProviders';
import CaptchaBlockTip from './components/CaptchaBlockTip';

window.JetFBComponents = {
	...window.JetFBComponents,
	CaptchaOptions,
	CaptchaBlockEdit,
	CaptchaBlockTip,
};

window.JetFBActions = {
	...window.JetFBActions,
	getCaptchaProviders,
};

window.JetFBHooks = {
	...window.JetFBHooks,
	useCaptchaProvider,
};