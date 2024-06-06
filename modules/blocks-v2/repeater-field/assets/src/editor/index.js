import * as repeaterField from './block';
import { addFilter } from "@wordpress/hooks";

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/repeater-field',
	function ( blocks ) {
		blocks.push( repeaterField );

		return blocks;
	},
);