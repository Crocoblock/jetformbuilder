import store from './store';
import constants from './store/constants';
import insertPostPattern from '@patterns/insert.post.json';
import registerUserPattern from '@patterns/register.user.json';
import defaultPattern from '@patterns/default.json';
import usePattern from './hooks/usePattern';
import PatternInserterButton from './components/PatternInserterButton';

const {
	      register,
	      dispatch,
      } = wp.data;

register( store );

dispatch( constants.store ).register( [
	defaultPattern,
	insertPostPattern,
	registerUserPattern,
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