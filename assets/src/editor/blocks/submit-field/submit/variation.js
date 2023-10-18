const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'submit',
	isDefault: true,
	title: __( 'Action Button', 'jet-form-builder' ),
	isActive: [ 'action_type' ],
	description: __(
		`Add the button by clicking which users can submit the form`,
		'jet-form-builder',
	),
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24"
	           height="24" aria-hidden="true" focusable="false">
		<path
			d="M8 12.5h8V11H8v1.5Z M19 6.5H5a2 2 0 0 0-2 2V15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2ZM5 8h14a.5.5 0 0 1 .5.5V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8.5A.5.5 0 0 1 5 8Z"/>
	</svg>,
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		action_type: 'submit',
	},
};

export default variation;