import PluginActions from './render';
import sendEmail from './send.email';
import insertPost from './insert.post';
import registerUser from './register.user';
import updateUser from './update.user';
import callHook from './call.hook';
import callWebhook from './call.webhook';
import redirectToPage from './redirect.to.page';
import mailchimp from './mailchimp';
import getresponse from './getresponse';
import proActions from './pro.actions';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

dispatch( 'jet-forms/actions' ).registerActions( [
	sendEmail,
	insertPost,
	registerUser,
	proActions[ 0 ],
	updateUser,
	callHook,
	callWebhook,
	redirectToPage,
	proActions[ 1 ],
	mailchimp,
	getresponse,
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