import PluginCaptcha from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-captcha-panel',
	title: __( 'Captcha Settings' )
};

const settings = {
	render: PluginCaptcha,
	icon: null
};

export {
	base,
	settings
};