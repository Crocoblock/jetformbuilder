import * as switcher from './blocks/switcher';

import { addFilter } from '@wordpress/hooks';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/switcher',
	function ( blocks ) {
		blocks.push(
			switcher,
		);

		return blocks;
	},
);