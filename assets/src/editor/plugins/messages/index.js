import PluginMessages from './render';

const { __ } = wp.i18n;

const base = {
	name: 'jf-messages-panel',
	title: __( 'General Messages Settings', 'jet-form-builder' ),
};

const settings = {
	render: PluginMessages,
	icon: 'format-status'
};

export default {
	base,
	settings
};