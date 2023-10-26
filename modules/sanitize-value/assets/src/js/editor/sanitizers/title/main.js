const {
	      __,
      } = wp.i18n;

const TitleSanitizer = {
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
};

export default TitleSanitizer;