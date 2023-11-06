const {
	      __,
      } = wp.i18n;

const KeySanitizer = {
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
};

export default KeySanitizer;