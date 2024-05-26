import * as mapField from './block';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/map-field',
	blocks => {
		blocks.push( mapField );

		return blocks;
	},
);