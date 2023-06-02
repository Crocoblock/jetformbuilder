import * as mapField from './map-field';
import UpdateOptionsAction from './update.options.action'

const {
	      addAction,
      } = JetFBActions;

const {
	      addFilter,
      } = wp.hooks;

addAction( 'update_options', UpdateOptionsAction );

addFilter(
	'jet.fb.register.fields',
	'jet-form-builder/map-field',
	blocks => {
		blocks.push( mapField );

		return blocks;
	},
);