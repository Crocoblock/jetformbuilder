import * as MacrosInserter from './blocks/macros-inserter';
import { addFilter } from '@wordpress/hooks';

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/macros-inserter',
	( blocks ) => {
		blocks.push( MacrosInserter );
		return blocks;
	}
);