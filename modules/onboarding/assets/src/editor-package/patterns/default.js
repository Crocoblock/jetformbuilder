const {
	      __,
      } = wp.i18n;

export default {
	name: 'default',
	title: __( 'From scratch', 'jet-form-builder' ),
	blocks: [
		[
			'jet-forms/hidden-field',
			{
				'name': 'post_id',
				'field_value': 'post_id',
			},
		],
		[
			'jet-forms/text-field',
			{
				'name': 'text_field',
				'label': 'Text',
			},
		],
		[
			'jet-forms/submit-field',
		],
	],
	actions: [],
	applyText: __( '3 block has been added', 'jet-form-builder' ),
};