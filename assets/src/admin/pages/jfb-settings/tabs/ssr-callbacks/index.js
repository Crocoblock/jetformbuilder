import SsrCallbacksTab from './SsrCallbacksTab.vue';

const { __ } = wp.i18n;

const title         = __( 'Allowed Server-Side Callbacks', 'jet-form-builder' );
const component     = SsrCallbacksTab;
const displayButton = false;

export {
	title,
	component,
	displayButton,
};
