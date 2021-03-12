import PluginGateways from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-gateways-panel',
	title: __( 'Gateways Settings' ),
	condition: window.JetFormEditorData.gateways.allowed
};

const settings = {
	render: PluginGateways,
	icon: null
};

export {
	base,
	settings
};