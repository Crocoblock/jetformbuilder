const {
	      __,
      } = wp.i18n;

const UserSanitizer = {
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
};

export default UserSanitizer;