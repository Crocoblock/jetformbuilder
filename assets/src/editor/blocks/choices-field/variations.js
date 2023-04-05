const {
	      __,
      } = wp.i18n;

const {
	      assetUrl,
      } = JetFBActions;

const variations = [
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
					value: 'The Timeless Depths of Yesterday\'s Memories',
					calc_value: '100',
				},
				[
					[
						'core/paragraph',
						{ content: 'The Timeless Depths of Yesterday\'s Memories' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Echoes of the Forgotten Woods',
					calc_value: '200',
				},
				[
					[
						'core/paragraph',
						{ content: 'Echoes of the Forgotten Woods' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Whispers in the Attic of Secrets',
					calc_value: '200',
				},
				[
					[
						'core/paragraph',
						{ content: 'Whispers in the Attic of Secrets' },
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
					value: 'The Timeless Depths of Yesterday\'s Memories',
					calc_value: '100',
				},
				[
					[
						'core/image',
						{
							url: assetUrl( 'img/image-placeholder.png' ),
							alt: 'The Timeless Depths of Yesterday\'s Memories',
						},
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Echoes of the Forgotten Woods',
					calc_value: '200',
				},
				[
					[
						'core/image',
						{
							url: assetUrl( 'img/image-placeholder.png' ),
							alt: 'Echoes of the Forgotten Woods',
						},
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Whispers in the Attic of Secrets',
					calc_value: '200',
				},
				[
					[
						'core/image',
						{
							url: assetUrl( 'img/image-placeholder.png' ),
							alt: 'Whispers in the Attic of Secrets',
						},
					],
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
					value: 'The Timeless Depths of Yesterday\'s Memories',
					calc_value: '100',
				},
				[
					[
						'core/image',
						{
							url: assetUrl( 'img/image-placeholder.png' ),
							alt: 'The Timeless Depths of Yesterday\'s Memories',
						},
					],
					[
						'core/paragraph',
						{ content: 'The Timeless Depths of Yesterday\'s Memories' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Echoes of the Forgotten Woods',
					calc_value: '200',
				},
				[
					[
						'core/image',
						{
							url: assetUrl( 'img/image-placeholder.png' ),
							alt: 'Echoes of the Forgotten Woods',
						},
					],
					[
						'core/paragraph',
						{ content: 'Echoes of the Forgotten Woods' },
					],
				],
			],
			[
				'jet-forms/choice',
				{
					value: 'Whispers in the Attic of Secrets',
					calc_value: '200',
				},
				[
					[
						'core/image',
						{
							url: assetUrl( 'img/image-placeholder.png' ),
							alt: 'Whispers in the Attic of Secrets',
						},
					],
					[
						'core/paragraph',
						{ content: 'Whispers in the Attic of Secrets' },
					],
				],
			],
		],
		scope: [ 'block' ],
	},
];

export default variations;