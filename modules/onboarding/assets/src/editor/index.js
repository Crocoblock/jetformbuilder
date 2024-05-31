import * as welcome from './welcomeBlock';
import './previewButton';
import './useFormButton';
import { addFilter } from '@wordpress/hooks';
import { dispatch } from '@wordpress/data';
import blockBuilder from './useFormButton/blockBuilder';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/welcome-block',
	function ( blocks ) {
		blocks.push( welcome );

		return blocks;
	},
);

dispatch( 'jet-forms/use-form' ).registerBuilders( [
	blockBuilder,
] );