import OptionsTab from './OptionsTab.vue';

const { __ } = wp.i18n;

const title         = __( 'Options', 'jet-form-builder' );
const component     = OptionsTab;
const displayButton = false;

export {
	title,
	component,
	displayButton,
};