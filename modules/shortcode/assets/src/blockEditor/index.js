import { dispatch } from '@wordpress/data';
import shortcodeBuilder from './shortcodeBuilder';

dispatch( 'jet-forms/use-form' ).registerBuilders( [
	shortcodeBuilder,
] );