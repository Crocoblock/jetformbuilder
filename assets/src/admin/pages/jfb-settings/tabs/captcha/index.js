import CaptchaTab from './CaptchaTab.vue';

const { __ } = wp.i18n;

const title         = __( 'Captcha Settings', 'jet-form-builder' );
const component     = CaptchaTab;
const displayButton = false;

export {
	title,
	component,
	displayButton,
};