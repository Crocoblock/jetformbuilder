import ValidationPlugin from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-validation-panel',
	title: __( 'Validation', 'jet-form-builder' )
};

const settings = {
	render: ValidationPlugin,
	icon: 'shield-alt'
};

export default {
	base,
	settings
};