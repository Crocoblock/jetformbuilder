import * as welcome from './welcomeBlock';
import './previewButton';

const {
	      addFilter,
      } = wp.hooks;

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/welcome-block',
	function ( blocks ) {
		blocks.push( welcome );

		return blocks;
	},
);