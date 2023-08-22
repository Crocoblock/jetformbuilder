import registerAttribute from './registerAttribute';
import sanitizersStore from './store';
import constants from './store/constants';
import BlockControls from './components/BlockControls';
import CustomSanitizerRender from './components/CustomSanitizerRender';

const {
	      register,
	      dispatch,
      } = wp.data;

const {
	      addFilter,
      } = wp.hooks;

const {
	      __,
      } = wp.i18n;

addFilter(
	'blocks.registerBlockType',
	'jet-form-builder/sanitize-value-support',
	registerAttribute,
);

addFilter(
	'editor.BlockEdit',
	'jet-form-builder/sanitize-value-controls',
	BlockControls,
);

register( sanitizersStore );

/**
 * @type {Array}
 */
const sanitizers = window.JetFBValueSanitizers;

// php based
dispatch( constants.store ).register( sanitizers );

dispatch( constants.store ).register( [
	{
		value: 'email',
		label: __( 'Sanitize Email', 'jet-form-builder' ),
	},
	{
		value: 'custom',
		label: __( 'Custom transform', 'jet-form-builder' ),
		render: CustomSanitizerRender,
	},
] );

