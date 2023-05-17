import * as choicesField from './choices-field';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/advanced-choices-not-supported',
	function ( blocks ) {
		blocks.push(
			choicesField,
		);

		return blocks;
	},
);