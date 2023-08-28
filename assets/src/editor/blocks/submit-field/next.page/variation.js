const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'next',
	title: __( 'Next Page', 'jet-form-builder' ),
	isActive: [ 'action_type' ],
	description: __(
		`Go to Next Page button`,
		'jet-form-builder',
	),
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
	           height="24" aria-hidden="true" focusable="false">
		<path
	d="M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"/>
	</svg>,
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		action_type: 'next',
	},
};

export default variation;