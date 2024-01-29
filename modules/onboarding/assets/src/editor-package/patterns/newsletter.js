const { __ } = wp.i18n;

export default {
	name: 'newsletter',
	title: __( 'Newsletter Signup Form', 'jet-form-builder' ),
	icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
	           xmlns="http://www.w3.org/2000/svg">
		<path
			d="M29.7071 14.7071C30.0976 14.3166 30.0976 13.6834 29.7071 13.2929C29.3166 12.9024 28.6834 12.9024 28.2929 13.2929L23 18.5858L19.7071 15.2929C19.3166 14.9024 18.6834 14.9024 18.2929 15.2929C17.9024 15.6834 17.9024 16.3166 18.2929 16.7071L21.9393 20.3536C22.5251 20.9393 23.4749 20.9393 24.0607 20.3536L29.7071 14.7071Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M8.4701 21.7063L14 18.2511V11C14 9.34315 15.3431 8 17 8H31C32.6569 8 34 9.34315 34 11V18.2511L39.5299 21.7063C39.8223 21.889 40 22.2095 40 22.5544V37C40 38.6569 38.6569 40 37 40H11C9.34315 40 8 38.6569 8 37V22.5544C8 22.2095 8.17766 21.889 8.4701 21.7063ZM17 10H31C31.5523 10 32 10.4477 32 11V25.6793L29.2193 27.6258L25.4551 23.6332C24.6657 22.7958 23.3341 22.7958 22.5446 23.6332L18.7806 27.6257L16 25.6793V11C16 10.4477 16.4477 10 17 10ZM17.394 29.0965L10 23.9207V36.9393L17.394 29.0965ZM14 20.6094L11.2298 22.3402L14 24.2793V20.6094ZM34 24.2793V20.6094L36.7701 22.3402L34 24.2793ZM30.6059 29.0966L38 23.9207V36.9395L30.6059 29.0966ZM10.991 38H37.009L37 38H11L10.991 38ZM11.759 37.9891H36.2408L23.9999 25.0051L11.759 37.9891Z"
		/>
	</svg>,
	actions: [
		{
			'type': 'mailchimp',
		},
	],
	blocks: [
		[
			'core/columns',
			{},
			[
				[
					'core/column',
					{},
					[
						[
							'jet-forms/text-field',
							{
								'name': 'email',
								'field_type': 'email',
								'placeholder': 'Enter you email',
							},
						],
					],
				],
				[
					'core/column',
					{},
					[
						[
							'jet-forms/submit-field',
						],
					],
				],
			],
		],
	],
	applyText: __(
		'2 form fields and Mailchimp action have been added',
		'jet-form-builder',
	),
};