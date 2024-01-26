const {
	      __,
      } = wp.i18n;

export default {
	name: 'contact',
	title: __( 'Contact form', 'jet-form-builder' ),
	icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
	           xmlns="http://www.w3.org/2000/svg">
		<path
			d="M16.8 10C16.3582 10 16 10.4477 16 11C16 11.5523 16.3582 12 16.8 12H31.2C31.6418 12 32 11.5523 32 11C32 10.4477 31.6418 10 31.2 10H16.8Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M12 19C12 17.3431 13.3431 16 15 16H33C34.6569 16 36 17.3431 36 19C36 20.6569 34.6569 22 33 22H15C13.3431 22 12 20.6569 12 19ZM15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H33C33.5523 20 34 19.5523 34 19C34 18.4477 33.5523 18 33 18H15Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M15 24C13.3431 24 12 25.3431 12 27C12 28.6569 13.3431 30 15 30H33C34.6569 30 36 28.6569 36 27C36 25.3431 34.6569 24 33 24H15ZM14 27C14 26.4477 14.4477 26 15 26H33C33.5523 26 34 26.4477 34 27C34 27.5523 33.5523 28 33 28H15C14.4477 28 14 27.5523 14 27Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M18 35C18 33.3431 19.3431 32 21 32H27C28.6569 32 30 33.3431 30 35C30 36.6569 28.6569 38 27 38H21C19.3431 38 18 36.6569 18 35ZM21 34C20.4477 34 20 34.4477 20 35C20 35.5523 20.4477 36 21 36H27C27.5523 36 28 35.5523 28 35C28 34.4477 27.5523 34 27 34H21Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M8 8C8 5.79086 9.79086 4 12 4H36C38.2091 4 40 5.79086 40 8V40C40 42.2091 38.2091 44 36 44H12C9.79086 44 8 42.2091 8 40V8ZM12 6H36C37.1046 6 38 6.89543 38 8V40C38 41.1046 37.1046 42 36 42H12C10.8954 42 10 41.1046 10 40V8C10 6.89543 10.8954 6 12 6Z"
		/>
	</svg>,
	actions: [
		{
			'type': 'send_email',
			'settings': {
				'mail_to': 'form',
				'from_field': 'email',
				'subject': '%subject%',
				'content': '%message%',
			},
		},
	],
	blocks: [
		[
			'jet-forms/text-field',
			{
				'name': 'email',
				'label': 'Email',
				'field_type': 'email',
			},
		],
		[
			'jet-forms/text-field',
			{
				'name': 'subject',
				'label': 'Subject',
			},
		],
		[
			'jet-forms/wysiwyg-field',
			{
				'name': 'message',
				'label': 'Message',
			},
		],
		[
			'jet-forms/submit-field',
		],
	],
	applyText: __(
		'4 blocks and Send Email action have been added',
		'jet-form-builder',
	),
};