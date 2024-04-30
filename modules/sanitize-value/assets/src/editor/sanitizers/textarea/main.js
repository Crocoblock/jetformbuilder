const {
	      __,
      } = wp.i18n;

const TextareaSanitizer = {
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
};

export default TextareaSanitizer;