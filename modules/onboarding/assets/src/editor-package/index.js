import patternsStore from './patternsStore';
import useFormStore from './useFormStore';
import constants from './patternsStore/constants';
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
import { register, dispatch } from '@wordpress/data';
import BuilderHelpSlotFill from './components/BuilderHelpSlotFill';

register( patternsStore );
register( useFormStore );

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
	BuilderHelpSlotFill,
};

window.JetFBHooks = {
	...(
		window.JetFBHooks ?? {}
	),
	usePattern,
};