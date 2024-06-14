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
import { dispatch } from '@wordpress/data';

dispatch( 'jet-forms/actions' ).registerActions( [
	sendEmail,
	insertPost,
	registerUser,
	updateUser,
	callHook,
	callWebhook,
	redirectToPage,
	mailchimp,
	getresponse,
] );

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