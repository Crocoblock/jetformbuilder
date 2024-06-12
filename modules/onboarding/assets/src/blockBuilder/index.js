import blockBuilder from './builder';
import { dispatch } from '@wordpress/data';

dispatch( 'jet-forms/use-form' ).registerBuilders( [
	blockBuilder,
] );