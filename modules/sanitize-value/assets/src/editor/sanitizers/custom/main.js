import CustomSanitizerRender from './CustomSanitizerRender';

const {
	      __,
      } = wp.i18n;

const CustomSanitizer = {
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
	allowMerge: true,
};

export default CustomSanitizer;