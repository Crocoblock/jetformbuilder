const {
	      __,
      } = wp.i18n;

const {
	      assetUrl,
      } = JetFBActions;

const imageBlock = ( alt ) => [
	'core/image',
	{
		alt,
		url: assetUrl( 'img/image-placeholder.jpg' ),
		width: 188,
		height: 188,
	},
];

const variations = [
	{
		name: 'simple-empty',
		title: __( 'Simple Empty', 'jet-form-builder' ),
		innerBlocks: [
			[ 'jet-forms/choice' ],
			[ 'jet-forms/choice' ],
		],
		isDefault: true,
		scope: [ 'hidden' ],
	},
	{
		name: 'simple-buttons',
		title: __( 'Buttons', 'jet-form-builder' ),
		description: __(
			'Simple buttons list with labels',
			'jet-form-builder',
		),
		icon: 'editor-ul',
		innerBlocks: [
			[
				'jet-forms/choice',
				{
					value: 'Book Name #1',
					calc_value: '100',
				},
				[
					[
						'core/paragraph',
						{ content: 'Book Name #1' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Book Name #2',
					calc_value: '200',
				},
				[
					[
						'core/paragraph',
						{ content: 'Book Name #2' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Book Name #3',
					calc_value: '200',
				},
				[
					[
						'core/paragraph',
						{ content: 'Book Name #3' },
					],
				],
			],
		],
		scope: [ 'block' ],
	},
	{
		name: 'images',
		title: __( 'Images', 'jet-form-builder' ),
		description: __(
			'Image buttons',
			'jet-form-builder',
		),
		icon: 'images-alt2',
		innerBlocks: [
			[
				'jet-forms/choice',
				{
					value: 'Book Name #1',
					calc_value: '100',
				},
				[
					imageBlock( 'Book Name #1' ),
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Book Name #2',
					calc_value: '200',
				},
				[
					imageBlock( 'Book Name #2' ),
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Book Name #3',
					calc_value: '200',
				},
				[
					imageBlock( 'Book Name #3' ),
				],
			],
		],
		scope: [ 'block' ],
	},
	{
		name: 'buttons-with-images',
		title: __( 'Images with description', 'jet-form-builder' ),
		description: __(
			'Image buttons with labels in footer',
			'jet-form-builder',
		),
		icon: 'images-alt2',
		innerBlocks: [
			[
				'jet-forms/choice',
				{
					value: 'Book Name #1',
					calc_value: '100',
				},
				[
					imageBlock( 'Book Name #1' ),
					[
						'core/paragraph',
						{ content: 'Book Name #1' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Book Name #2',
					calc_value: '200',
				},
				[
					imageBlock( 'Book Name #2' ),
					[
						'core/paragraph',
						{ content: 'Book Name #2' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Book Name #3',
					calc_value: '200',
				},
				[
					imageBlock( 'Book Name #3' ),
					[
						'core/paragraph',
						{ content: 'Book Name #3' },
					],
				],
			],
		],
		scope: [ 'block' ],
	},
];

export default variations;