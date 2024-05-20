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
		width: 100,
		height: 100,
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
		title: __( 'Text', 'jet-form-builder' ),
		description: __(
			'Simple buttons list with labels',
			'jet-form-builder',
		),
		icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M24.7125 10.7017C25.1 10.3082 25.0952 9.67505 24.7017 9.28752C24.3082 8.89998 23.675 8.90482 23.2875 9.29831L12.1609 20.5961L8.69122 17.2774C8.29212 16.8956 7.65911 16.9097 7.27736 17.3088C6.89561 17.7079 6.90967 18.3409 7.30878 18.7226L12.2028 23.4039L24.7125 10.7017Z" fill="#0F172A"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4ZM4 2H28C29.1046 2 30 2.89543 30 4V28C30 29.1046 29.1046 30 28 30H4C2.89543 30 2 29.1046 2 28V4C2 2.89543 2.89543 2 4 2Z" fill="#0F172A"/>
		</svg>,
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
		icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M16.5 15C18.433 15 20 13.433 20 11.5C20 9.567 18.433 8 16.5 8C14.567 8 13 9.567 13 11.5C13 13.433 14.567 15 16.5 15ZM16.5 13C17.3284 13 18 12.3284 18 11.5C18 10.6716 17.3284 10 16.5 10C15.6716 10 15 10.6716 15 11.5C15 12.3284 15.6716 13 16.5 13Z" fill="#0F172A"/>
			<path d="M20.7917 17.2985C20.6037 17.1076 20.3469 17 20.0789 17C19.811 17 19.5542 17.1076 19.3662 17.2985L15.1579 21.5744L12.2917 18.6622C12.1037 18.4712 11.8469 18.3636 11.5789 18.3636C11.311 18.3636 11.0542 18.4712 10.8662 18.6622L7.28729 22.2985C6.89989 22.6922 6.90492 23.3253 7.29854 23.7127C7.69216 24.1001 8.32531 24.0951 8.71271 23.7015L11.5789 20.7892L14.4452 23.7015C14.6332 23.8924 14.8899 24 15.1579 24C15.4259 24 15.6826 23.8924 15.8706 23.7015L20.0789 19.4256L24.2873 23.7015C24.6747 24.0951 25.3078 24.1001 25.7015 23.7127C26.0951 23.3253 26.1001 22.6922 25.7127 22.2985L20.7917 17.2985Z" fill="#0F172A"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V28C32 30.2091 30.2091 32 28 32H4C1.79086 32 0 30.2091 0 28V4ZM4 2H28C29.1046 2 30 2.89543 30 4V28C30 29.1046 29.1046 30 28 30H4C2.89543 30 2 29.1046 2 28V4C2 2.89543 2.89543 2 4 2Z" fill="#0F172A"/>
		</svg>,
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
		icon: <svg width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M16.5 13C18.433 13 20 11.433 20 9.5C20 7.567 18.433 6 16.5 6C14.567 6 13 7.567 13 9.5C13 11.433 14.567 13 16.5 13ZM16.5 11C17.3284 11 18 10.3284 18 9.5C18 8.67157 17.3284 8 16.5 8C15.6716 8 15 8.67157 15 9.5C15 10.3284 15.6716 11 16.5 11Z" fill="#0F172A"/>
			<path d="M20.7917 15.2985C20.6037 15.1076 20.3469 15 20.0789 15C19.811 15 19.5542 15.1076 19.3662 15.2985L15.1579 19.5744L12.2917 16.6622C12.1037 16.4712 11.8469 16.3636 11.5789 16.3636C11.311 16.3636 11.0542 16.4712 10.8662 16.6622L7.28729 20.2985C6.89989 20.6922 6.90492 21.3253 7.29854 21.7127C7.69216 22.1001 8.32531 22.0951 8.71271 21.7015L11.5789 18.7892L14.4452 21.7015C14.6332 21.8924 14.8899 22 15.1579 22C15.4259 22 15.6826 21.8924 15.8706 21.7015L20.0789 17.4256L24.2873 21.7015C24.6747 22.0951 25.3078 22.1001 25.7015 21.7127C26.0951 21.3253 26.1001 20.6922 25.7127 20.2985L20.7917 15.2985Z" fill="#0F172A"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M0 4C0 1.79086 1.79086 0 4 0H28C30.2091 0 32 1.79086 32 4V24C32 26.2091 30.2091 28 28 28H4C1.79086 28 0 26.2091 0 24V4ZM4 2H28C29.1046 2 30 2.89543 30 4V24C30 25.1046 29.1046 26 28 26H4C2.89543 26 2 25.1046 2 24V4C2 2.89543 2.89543 2 4 2Z" fill="#0F172A"/>
			<path d="M1 32C0.447715 32 0 32.4477 0 33C0 33.5523 0.447715 34 1 34H31C31.5523 34 32 33.5523 32 33C32 32.4477 31.5523 32 31 32H1Z" fill="#0F172A"/>
			<path d="M0 37C0 36.4477 0.447715 36 1 36H27C27.5523 36 28 36.4477 28 37C28 37.5523 27.5523 38 27 38H1C0.447715 38 0 37.5523 0 37Z" fill="#0F172A"/>
		</svg>,
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
	{
		name: 'images-with-controls',
		title: __( 'Images with controls', 'jet-form-builder' ),
		description: __(
			'Image buttons with controls in footer',
			'jet-form-builder',
		),
		icon: <svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0ZM2 5C2 6.65685 3.34315 8 5 8C6.65685 8 8 6.65685 8 5C8 3.34315 6.65685 2 5 2C3.34315 2 2 3.34315 2 5Z" fill="#0F172A"/>
			<path d="M12 3C12 2.44772 12.4477 2 13 2H31C31.5523 2 32 2.44772 32 3C32 3.55228 31.5523 4 31 4H13C12.4477 4 12 3.55228 12 3Z" fill="#0F172A"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M16.5 25C18.433 25 20 23.433 20 21.5C20 19.567 18.433 18 16.5 18C14.567 18 13 19.567 13 21.5C13 23.433 14.567 25 16.5 25ZM16.5 23C17.3284 23 18 22.3284 18 21.5C18 20.6716 17.3284 20 16.5 20C15.6716 20 15 20.6716 15 21.5C15 22.3284 15.6716 23 16.5 23Z" fill="#0F172A"/>
			<path d="M20.7917 27.2985C20.6037 27.1076 20.3469 27 20.0789 27C19.811 27 19.5542 27.1076 19.3662 27.2985L15.1579 31.5744L12.2917 28.6622C12.1037 28.4712 11.8469 28.3636 11.5789 28.3636C11.311 28.3636 11.0542 28.4712 10.8662 28.6622L7.28729 32.2985C6.89989 32.6922 6.90492 33.3253 7.29854 33.7127C7.69216 34.1001 8.32531 34.0951 8.71271 33.7015L11.5789 30.7892L14.4452 33.7015C14.6332 33.8924 14.8899 34 15.1579 34C15.4259 34 15.6826 33.8924 15.8706 33.7015L20.0789 29.4256L24.2873 33.7015C24.6747 34.0951 25.3078 34.1001 25.7015 33.7127C26.0951 33.3253 26.1001 32.6922 25.7127 32.2985L20.7917 27.2985Z" fill="#0F172A"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M4 12C1.79086 12 0 13.7909 0 16V36C0 38.2091 1.79086 40 4 40H28C30.2091 40 32 38.2091 32 36V16C32 13.7909 30.2091 12 28 12H4ZM28 14H4C2.89543 14 2 14.8954 2 16V36C2 37.1046 2.89543 38 4 38H28C29.1046 38 30 37.1046 30 36V16C30 14.8954 29.1046 14 28 14Z" fill="#0F172A"/>
			<path d="M13 6C12.4477 6 12 6.44772 12 7C12 7.55228 12.4477 8 13 8H31C31.5523 8 32 7.55228 32 7C32 6.44772 31.5523 6 31 6H13Z" fill="#0F172A"/>
		</svg>,
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
						'jet-forms/choice-control',
						{ label: 'Book Name #1' },
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
						'jet-forms/choice-control',
						{ label: 'Book Name #1' },
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
						'jet-forms/choice-control',
						{ label: 'Book Name #1' },
					],
				],
			],
		],
		scope: [ 'block' ],
	},
];

export default variations;