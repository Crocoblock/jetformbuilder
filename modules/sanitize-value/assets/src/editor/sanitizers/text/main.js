const {
	      __,
      } = wp.i18n;

const TextSanitizer = {
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
};

export default TextSanitizer;