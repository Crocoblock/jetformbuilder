import * as intlPhoneField from './block';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/phone-field',
	function ( blocks ) {
		blocks.push( intlPhoneField );
		return blocks;
	},
);
