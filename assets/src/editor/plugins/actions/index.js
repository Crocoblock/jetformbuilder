import PluginActions from './render';
import proActions from './pro.actions';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

dispatch( 'jet-forms/actions' ).registerActions( [
	proActions[ 0 ],
	proActions[ 1 ]
] );

dispatch( 'jet-forms/actions' ).registerCategory(
	{
		type: 'communication',
		label: __( 'Communication & Notifications', 'jet-form-builder' ),
	},
);
dispatch( 'jet-forms/actions' ).registerCategory(
	{
		type: 'user',
		label: __( 'User Management', 'jet-form-builder' ),
	},
);
dispatch( 'jet-forms/actions' ).registerCategory(
	{
		type: 'content',
		label: __( 'Content & Data Management', 'jet-form-builder' ),
	},
);
dispatch( 'jet-forms/actions' ).registerCategory(
	{
		type: 'advanced',
		label: __( 'Advanced Integration', 'jet-form-builder' ),
	},
);

const base = {
	name: 'jf-actions-panel',
	jfbApiVersion: 2,
};

const settings = {
	render: PluginActions,
};

export default {
	base,
	settings,
};