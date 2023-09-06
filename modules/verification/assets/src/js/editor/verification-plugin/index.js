import PluginCaptcha from './render';

const { __ } = wp.i18n;

const settings = {
	render: PluginCaptcha,
	icon: 'filter',
};

export default {
	base: {
		name: 'jf-verification',
		title: __( 'Verification', 'jet-form-builder' ),
	},
	settings,
};