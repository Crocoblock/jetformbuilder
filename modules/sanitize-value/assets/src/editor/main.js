import registerAttribute from './registerAttribute';
import sanitizersStore from './store';
import constants from './store/constants';
import BlockControls from './components/BlockControls';
import CustomSanitizer from './sanitizers/custom/main';
import EmailSanitizer from './sanitizers/email/main';
import KeySanitizer from './sanitizers/key/main';
import TextSanitizer from './sanitizers/text/main';
import TextareaSanitizer from './sanitizers/textarea/main';
import TitleSanitizer from './sanitizers/title/main';
import UrlSanitizer from './sanitizers/url/main';
import UserSanitizer from './sanitizers/user/main';
import IntegerSanitizer from './sanitizers/integer/main';
import NumberSanitizer from './sanitizers/number/main';
import PositiveIntegerSanitizer from './sanitizers/positive.integer/main';
import PositiveNumberSanitizer from './sanitizers/positive.number/main';

const {
	      register,
	      dispatch,
      } = wp.data;

const {
	      addFilter,
      } = wp.hooks;

const {
	      __,
      } = wp.i18n;

addFilter(
	'blocks.registerBlockType',
	'jet-form-builder/sanitize-value-support',
	registerAttribute,
);

addFilter(
	'editor.BlockEdit',
	'jet-form-builder/sanitize-value-controls',
	BlockControls,
);

register( sanitizersStore );

/**
 * @type {Array}
 */
const sanitizers = window.JetFBValueSanitizers;

// php based
dispatch( constants.store ).register( sanitizers );

dispatch( constants.store ).register( [
	EmailSanitizer,
	KeySanitizer,
	TextSanitizer,
	TextareaSanitizer,
	TitleSanitizer,
	UrlSanitizer,
	UserSanitizer,
	IntegerSanitizer,
	NumberSanitizer,
	PositiveIntegerSanitizer,
	PositiveNumberSanitizer,
	CustomSanitizer,
] );

