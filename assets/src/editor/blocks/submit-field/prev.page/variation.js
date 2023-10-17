const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'prev',
	title: __( 'Prev Page', 'jet-form-builder' ),
	isActive: [ 'action_type' ],
	description: __(
		`Go to Prev Page button`,
		'jet-form-builder',
	),
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
	           height="24" aria-hidden="true" focusable="false">
		<path
	d="M11.6 7l-1.1-1L5 12l5.5 6 1.1-1L7 12l4.6-5zm6 0l-1.1-1-5.5 6 5.5 6 1.1-1-4.6-5 4.6-5z"/>
	</svg>,
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		action_type: 'prev',
	},
};

export default variation;