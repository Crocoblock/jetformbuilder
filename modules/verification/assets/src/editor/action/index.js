/* eslint-disable import/no-extraneous-dependencies */
import { ACTION, FAILED_EVENT, SUCCESS_EVENT } from '../constants';
import VerificationRender from './VerificationRender';
import { __ } from '@wordpress/i18n';
import { key } from '@wordpress/icons';
import DisabledOverlay from '@root/assets/src/editor/action/DisabledOverlay';

export default {
	type: ACTION,
	edit: VerificationRender,
	label: __( 'Verification', 'jet-form-builder' ),
	icon: key,
	docHref: 'https://jetformbuilder.com/features/email-verification/',
	provideEvents: () => [ SUCCESS_EVENT, FAILED_EVENT ],
	fixed: true,
	disableConditions: true,
	category: 'user',
	disabledOverlay: DisabledOverlay,
};