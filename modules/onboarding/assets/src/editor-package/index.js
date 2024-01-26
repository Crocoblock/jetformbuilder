import store from './store';
import constants from './store/constants';
import insertPostPattern from './patterns/insert.post.js';
import defaultPattern from './patterns/default.js';
import feedBackPattern from './patterns/feedback.js';
import registerUserPattern from './patterns/register.user.js';
import resetPasswordPattern from './patterns/reset.password.js';
import userLoginPattern from './patterns/user.login.js';
import donationPattern from './patterns/donation.js';
import contactPattern from './patterns/contact.js';
import newsletterPattern from './patterns/newsletter.js';
import usePattern from './hooks/usePattern';
import PatternInserterButton from './components/PatternInserterButton';

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
	contactPattern,
	feedBackPattern,
	newsletterPattern,
	insertPostPattern,
	registerUserPattern,
	donationPattern,
	resetPasswordPattern,
	userLoginPattern,
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