import store from './store';
import constants from './store/constants';
import insertPostPattern from './patterns/insert.post.json';
import defaultPattern from './patterns/default.json';
import feedBackPattern from './patterns/feedback.json';
import registerUserPattern from './patterns/register.user.json';
import resetPasswordPattern from './patterns/reset.password.json';
import userLoginPattern from './patterns/user.login.json';
import donationPattern from './patterns/donation.json';
import usePattern from './hooks/usePattern';
import PatternInserterButton from './components/PatternInserterButton';
import ProSinglePattern from './components/ProSinglePattern';

const {
	      register,
	      dispatch,
      } = wp.data;

register( store );

dispatch( constants.store ).register( [
	defaultPattern,
	feedBackPattern,
	insertPostPattern,
	registerUserPattern,
	donationPattern,
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