import ActiveCampaignAction from './render';
import { __ } from '@wordpress/i18n';
import icon from './icon';

export default {
	type: 'active_campaign',
	label: __( 'Active Campaign', 'jet-form-builder' ),
	edit: ActiveCampaignAction,
	icon,
	docHref: 'https://jetformbuilder.com/features/activecampaign/',
	category: 'communication',
};