import PluginArgs from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-args-panel',
	title: __( 'Form Settings' )
};

const settings = {
	render: PluginArgs,
	icon: null
};

export {
	base,
	settings
};