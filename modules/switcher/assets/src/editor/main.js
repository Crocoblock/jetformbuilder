import * as switcher from './blocks/switcher';

const {
	      addFilter,
      } = wp.hooks;

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