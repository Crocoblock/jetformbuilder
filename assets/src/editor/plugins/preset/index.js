import PluginPreset from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-preset-panel',
	title: __( 'Preset Settings' ),
};

const settings = {
	render: PluginPreset,
	icon: null
};

export {
	base,
	settings
};