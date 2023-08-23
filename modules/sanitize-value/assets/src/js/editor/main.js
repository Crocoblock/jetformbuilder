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
		label: __( 'Sanitize email', 'jet-form-builder' ),
		help: __(
			'Strips out all characters that are not allowable in an email',
			'jet-form-builder',
		),
	},
	{
		value: 'key',
		label: __( 'Sanitize key', 'jet-form-builder' ),
		help: __(
			`Keys are used as internal identifiers. Lowercase 
alphanumeric characters, dashes, and underscores are allowed.`,
			'jet-form-builder',
		),
	},
	{
		value: 'text',
		label: __( 'Sanitize text', 'jet-form-builder' ),
		help: __(
			`Checks for invalid UTF-8, converts single \`<\` characters 
to entities, strips all tags, removes line breaks, tabs, and extra whitespace, 
strips percent-encoded characters`,
			'jet-form-builder',
		),
	},
	{
		value: 'textarea',
		label: __( 'Sanitize textarea', 'jet-form-builder' ),
		help: __(
			`The function is like "Sanitize text", but preserves 
new lines (\\n) and other whitespace, which are legitimate 
input in textarea elements`,
			'jet-form-builder',
		),
	},
	{
		value: 'title',
		label: __( 'Sanitize title', 'jet-form-builder' ),
		help: __(
			`Sanitizes a string into a slug, which can be used in 
URLs or HTML attributes`,
			'jet-form-builder',
		),
	},
	{
		value: 'url',
		label: __( 'Sanitize url', 'jet-form-builder' ),
		help: __(
			`Sanitizes a URL for database or redirect usage`,
			'jet-form-builder',
		),
	},
	{
		value: 'user',
		label: __( 'Sanitize user name', 'jet-form-builder' ),
		help: __(
			'Sanitizes a username, stripping out unsafe characters',
			'jet-form-builder'
		),
	},
	{
		value: 'custom',
		label: __( 'Custom transform', 'jet-form-builder' ),
		render: CustomSanitizerRender,
	},
] );

