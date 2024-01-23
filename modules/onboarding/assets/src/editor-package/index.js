import store from './store';
import constants from './store/constants';
import insertPostPattern from './patterns/insert.post.json';
import defaultPattern from './patterns/default.js';
import feedBackPattern from './patterns/feedback.json';
import registerUserPattern from './patterns/register.user.json';
import resetPasswordPattern from './patterns/reset.password.json';
import userLoginPattern from './patterns/user.login.json';
import donationPattern from './patterns/donation.json';
import contactPattern from './patterns/contact.json';
import newsletterPattern from './patterns/newsletter.json';
import usePattern from './hooks/usePattern';
import PatternInserterButton from './components/PatternInserterButton';
import ProSinglePattern from './components/ProSinglePattern';

const {
	      register,
	      dispatch,
      } = wp.data;

const {
	      __,
      } = wp.i18n;

register( store );

dispatch( constants.store ).register( [
	defaultPattern,
	{
		...contactPattern,
		applyText: __(
			'4 blocks and Send Email action have been added',
			'jet-form-builder',
		),
	},
	{
		...feedBackPattern,
		applyText: __(
			'5 blocks and Send Email action have been added',
			'jet-form-builder',
		),
	},
	{
		...newsletterPattern,
		applyText: __(
			'2 form fields and Mailchimp action have been added',
			'jet-form-builder',
		),
	},
	{
		...insertPostPattern,
		applyText: __(
			'4 blocks and Insert/Update Post action have been added',
			'jet-form-builder',
		),
	},
	{
		...registerUserPattern,
		applyText: __(
			'3 blocks and Register User with Verification action have been added',
			'jet-form-builder',
		),
	},
	{
		...donationPattern,
		applyText: __(
			'2 blocks and PayPal Gateway have been added',
			'jet-form-builder',
		),
	},
	{
		...resetPasswordPattern,
		view: ProSinglePattern,
	},
	{
		...userLoginPattern,
		view: ProSinglePattern,
	},
] );

window.JetFBComponents = {
	...(
		window.JetFBComponents ?? {}
	),
	PatternInserterButton,
};

window.JetFBHooks = {
	...(
		window.JetFBHooks ?? {}
	),
	usePattern,
};