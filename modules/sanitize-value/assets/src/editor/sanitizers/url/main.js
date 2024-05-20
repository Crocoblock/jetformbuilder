const {
	      __,
      } = wp.i18n;

const UrlSanitizer = {
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
};

export default UrlSanitizer;