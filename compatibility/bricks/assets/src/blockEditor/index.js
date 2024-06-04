import { dispatch } from '@wordpress/data';
import bricksBuilder from './bricksBuilder';

dispatch( 'jet-forms/use-form' ).registerBuilders( [
	bricksBuilder,
] );