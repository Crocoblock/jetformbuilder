import PluginLimitFormResponses from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-limit-responses-panel',
	title: __( 'Limit Form Responses','jet-form-builder' )
};

const settings = {
	render: PluginLimitFormResponses,
	icon: 'lock'
};

export default {
	base,
	settings
};