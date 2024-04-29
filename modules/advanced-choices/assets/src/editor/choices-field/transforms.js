import { name } from './index';

const {
	      createBlock,
      } = wp.blocks;

const isMatch = attributes => (
	'manual_input' === attributes.field_options_from &&
	Array.isArray( attributes.field_options ) &&
	attributes.field_options.length > 0
);

const transform = ( attributes, allow_multiple ) => {
	const choices = attributes.field_options.map(
		option => createBlock(
			'jet-forms/choice',
			{
				value: option.value,
				calc_value: option.calculate ?? '',
			},
			[
				createBlock(
					'jet-forms/choice-control',
					{
						label: option.label ?? '',
					},
				),
			],
		),
	);

	return createBlock(
		name,
		{
			name: attributes.name,
			label: attributes.label,
			desc: attributes.desc,
			value: attributes.value,
			default: attributes.default,
			required: attributes.required,
			visibility: attributes.visibility,
			switch_on_change: attributes.switch_on_change ?? false,
			allow_multiple: !!allow_multiple,
		},
		choices,
	);
};

const transforms = {
	from: [
		{
			type: 'block',
			blocks: [
				'jet-forms/checkbox-field'
			],
			isMatch,
			transform: ( attributes ) => transform( attributes, true ),
			priority: -1,
		},
		{
			type: 'block',
			blocks: [
				'jet-forms/radio-field'
			],
			isMatch,
			transform: ( attributes ) => transform( attributes, false ),
			priority: -1,
		},
		{
			type: 'block',
			blocks: [
				'jet-forms/select-field'
			],
			isMatch,
			transform: ( attributes ) => transform( attributes, attributes.multiple ),
			priority: -1,
		},
	],
};

export default transforms;