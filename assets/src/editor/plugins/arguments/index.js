import PluginArgs from './render';

const { __ } = wp.i18n;

const base = {
	name: 'jf-args-panel',
	title: __( 'Form Settings', 'jet-form-builder' ),
	jfbTest: 2,
};

const settings = {
	render: PluginArgs,
	icon: 'admin-settings',
};

export default {
	base,
	settings,
};