import * as checkMark from './block';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/check-mark',
	blocks => {
		blocks.push( checkMark );

		return blocks;
	},
);