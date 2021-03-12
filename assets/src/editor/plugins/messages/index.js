import PluginMessages from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-messages-panel',
	title: __( 'General Messages Settings' ),
};

const settings = {
	render: PluginMessages,
	icon: null
};

export {
	base,
	settings
};