import * as MultiGateway from './blocks/multi-gateway';

import { addFilter } from '@wordpress/hooks';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/multi-gateway',
	function ( blocks ) {
		blocks.push(
			MultiGateway,
		);

		return blocks;
	},
);