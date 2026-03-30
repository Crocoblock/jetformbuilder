const {
	      __,
      } = wp.i18n;

const variation = {
	name: 'update',
	title: __( 'Update Field', 'jet-form-builder' ),
	isActive: [ 'action_type' ],
	description: __(
		'Update dependent fields without submitting the form',
		'jet-form-builder',
	),
	icon: 'update-alt',
	scope: [ 'block', 'inserter', 'transform' ],
	attributes: {
		action_type: 'update',
	},
};

export default variation;
