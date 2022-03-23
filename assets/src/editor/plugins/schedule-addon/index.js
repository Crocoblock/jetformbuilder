import PluginScheduleForm from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-schedule-panel',
	title: __( 'Form Schedule', 'jet-form-builder' )
};

const settings = {
	render: PluginScheduleForm,
	icon: 'lock'
};

export default {
	base,
	settings
};