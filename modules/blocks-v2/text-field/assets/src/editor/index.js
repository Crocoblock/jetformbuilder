import * as textField from './block';
import { addFilter } from "@wordpress/hooks";

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/text-field',
	function ( blocks ) {
		blocks.push( textField );

		return blocks;
	},
);