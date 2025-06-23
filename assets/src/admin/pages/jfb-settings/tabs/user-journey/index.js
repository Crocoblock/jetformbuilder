import UserJourneyTab from './UserJourneyTab.vue';

const { __ } = wp.i18n;

const title         = __( 'User Journey', 'jet-form-builder' );
const component     = UserJourneyTab;
const displayButton = false;

export {
	title,
	component,
	displayButton,
};