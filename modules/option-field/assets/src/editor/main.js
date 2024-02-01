import * as select from './blocks/select';
import * as checkbox from './blocks/checkbox';
import * as radio from './blocks/radio';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/select',
	function ( blocks ) {
		blocks.push(
			select,
			checkbox,
			radio
		);

		return blocks;
	},
);