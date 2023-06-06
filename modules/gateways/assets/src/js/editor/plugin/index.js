import PluginGateways from './render';

const { __ } = wp.i18n;

const base = {
	name: 'jf-gateways-panel',
	title: __( 'Gateways Settings', 'jet-form-builder' ),
};

const settings = {
	render: PluginGateways,
	icon: 'money-alt',
};

export default {
	base,
	settings,
};