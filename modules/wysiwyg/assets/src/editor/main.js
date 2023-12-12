import * as wysiwyg from './blocks/wysiwyg';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/wysiwyg',
	function ( blocks ) {
		blocks.push(
			wysiwyg,
		);

		return blocks;
	},
);