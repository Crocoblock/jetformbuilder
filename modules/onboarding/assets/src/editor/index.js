import * as welcome from './welcomeBlock';
import './previewButton';
import './useFormButton';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/welcome-block',
	function ( blocks ) {
		blocks.push( welcome );

		return blocks;
	},
);