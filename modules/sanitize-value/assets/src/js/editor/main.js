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
		icon: <svg width="24" height="24" viewBox="0 0 24 24"
		           xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
		           focusable="false">
			<path
				d="M12.5939 21C14.1472 21 16.1269 20.5701 17.0711 20.1975L16.6447 18.879C16.0964 19.051 14.3299 19.6242 12.6548 19.6242C7.4467 19.6242 4.67513 16.8726 4.67513 12C4.67513 7.21338 7.50762 4.34713 12.2893 4.34713C17.132 4.34713 19.4162 7.55732 19.4162 10.7675C19.4162 14.035 19.0508 15.4968 17.4975 15.4968C16.5838 15.4968 16.0964 14.7803 16.0964 13.9777V7.5H14.4822V8.30255H14.3909C14.1777 7.67198 12.9898 7.12739 11.467 7.2707C9.18274 7.5 7.4467 9.27707 7.4467 11.8567C7.4467 14.5796 8.81726 16.672 11.467 16.758C13.203 16.8153 14.1168 16.0127 14.4822 15.1815H14.5736C14.7563 16.414 16.401 16.8439 17.467 16.8439C20.6954 16.8439 21 13.5764 21 10.7962C21 6.86943 18.0761 3 12.3807 3C6.50254 3 3 6.3535 3 11.9427C3 17.7325 6.38071 21 12.5939 21ZM11.7107 15.2962C9.73096 15.2962 9.03046 13.6051 9.03046 11.7707C9.03046 10.1083 10.0355 8.67516 11.7716 8.67516C13.599 8.67516 14.5736 9.36306 14.5736 11.7707C14.5736 14.1497 13.7513 15.2962 11.7107 15.2962Z"/>
		</svg>,
	},
	{
		value: 'key',
		label: __( 'Sanitize key', 'jet-form-builder' ),
		help: __(
			`Keys are used as internal identifiers. Lowercase 
alphanumeric characters, dashes, and underscores are allowed.`,
			'jet-form-builder',
		),
		icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
		           width="24" height="24" aria-hidden="true" focusable="false">
			<path
				d="M9 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 16a4.002 4.002 0 003.8-2.75H15V16h2.5v-2.75H19v-2.5h-6.2A4.002 4.002 0 005 12a4 4 0 004 4z"
				fillRule="evenodd" clipRule="evenodd"/>
		</svg>,
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
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		           width="24" height="24" aria-hidden="true" focusable="false">
			<path
				d="M12.9 6h-2l-4 11h1.9l1.1-3h4.2l1.1 3h1.9L12.9 6zm-2.5 6.5l1.5-4.9 1.7 4.9h-3.2z"/>
		</svg>,
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
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		           width="24" height="24" aria-hidden="true" focusable="false">
			<path
				d="M7.1 6.8L3.1 18h1.6l1.1-3h4.3l1.1 3h1.6l-4-11.2H7.1zm-.8 6.8L8 8.9l1.7 4.7H6.3zm14.5-1.5c-.3-.6-.7-1.1-1.2-1.5-.6-.4-1.2-.6-1.9-.6-.5 0-.9.1-1.4.3-.4.2-.8.5-1.1.8V6h-1.4v12h1.3l.2-1c.2.4.6.6 1 .8.4.2.9.3 1.4.3.7 0 1.2-.2 1.8-.5.5-.4 1-.9 1.3-1.5.3-.6.5-1.3.5-2.1-.1-.6-.2-1.3-.5-1.9zm-1.7 4c-.4.5-.9.8-1.6.8s-1.2-.2-1.7-.7c-.4-.5-.7-1.2-.7-2.1 0-.9.2-1.6.7-2.1.4-.5 1-.7 1.7-.7s1.2.3 1.6.8c.4.5.6 1.2.6 2 .1.8-.2 1.4-.6 2z"/>
		</svg>,
	},
	{
		value: 'title',
		label: __( 'Sanitize title', 'jet-form-builder' ),
		help: __(
			`Sanitizes a string into a slug, which can be used in 
URLs or HTML attributes`,
			'jet-form-builder',
		),
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		           width="24" height="24" aria-hidden="true" focusable="false">
			<path
				d="M17.6 7c-.6.9-1.5 1.7-2.6 2v1h2v7h2V7h-1.4zM11 11H7V7H5v10h2v-4h4v4h2V7h-2v4z"/>
		</svg>,
	},
	{
		value: 'url',
		label: __( 'Sanitize url', 'jet-form-builder' ),
		help: __(
			`Sanitizes a URL for database or redirect usage`,
			'jet-form-builder',
		),
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		           width="24" height="24" aria-hidden="true" focusable="false">
			<path
				d="M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"/>
		</svg>,
	},
	{
		value: 'user',
		label: __( 'Sanitize user name', 'jet-form-builder' ),
		help: __(
			'Sanitizes a username, stripping out unsafe characters',
			'jet-form-builder',
		),
		icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
		           width="24" height="24" aria-hidden="true" focusable="false">
			<path fillRule="evenodd"
			      d="M7.25 16.437a6.5 6.5 0 1 1 9.5 0V16A2.75 2.75 0 0 0 14 13.25h-4A2.75 2.75 0 0 0 7.25 16v.437Zm1.5 1.193a6.47 6.47 0 0 0 3.25.87 6.47 6.47 0 0 0 3.25-.87V16c0-.69-.56-1.25-1.25-1.25h-4c-.69 0-1.25.56-1.25 1.25v1.63ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
			      clipRule="evenodd"/>
		</svg>,
	},
	{
		value: 'custom',
		label: __( 'Custom transform', 'jet-form-builder' ),
		render: CustomSanitizerRender,
		help: __(
			'Specify the name of the PHP function that will process the value',
			'jet-form-builder',
		),
		icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
		           width="24" height="24" aria-hidden="true" focusable="false">
			<path
				d="M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"/>
		</svg>,
	},
] );

