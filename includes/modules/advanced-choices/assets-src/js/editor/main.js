import * as choicesField from './choices-field';
import * as choice from './choice';
import * as choiceControl from './choice-control';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/advanced-choices',
	function ( blocks ) {
		blocks.push(
			choicesField,
			choice,
			choiceControl,
		);

		return blocks;
	},
);