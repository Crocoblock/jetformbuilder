import { dispatch } from '@wordpress/data';
import elementorBuilder from './elementorBuilder';

dispatch( 'jet-forms/use-form' ).registerBuilders( [
	elementorBuilder,
] );