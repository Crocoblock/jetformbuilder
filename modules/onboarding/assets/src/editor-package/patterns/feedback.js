const { __ } = wp.i18n;

export default {
	'name': 'feedback',
	'title': __( 'Feedback', 'jet-form-builder' ),
	icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
	           xmlns="http://www.w3.org/2000/svg">
		<path
			d="M11 14.0444C10.4477 14.0444 10 14.4954 10 15.0517C10 15.6081 10.4477 16.0591 11 16.0591H31C31.5523 16.0591 32 15.6081 32 15.0517C32 14.4954 31.5523 14.0444 31 14.0444H11Z"
		/>
		<path
			d="M10 19.0813C10 18.5249 10.4477 18.0739 11 18.0739H31C31.5523 18.0739 32 18.5249 32 19.0813C32 19.6377 31.5523 20.0887 31 20.0887H11C10.4477 20.0887 10 19.6377 10 19.0813Z"
		/>
		<path
			d="M11 22.1035C10.4477 22.1035 10 22.5545 10 23.1109C10 23.6672 10.4477 24.1183 11 24.1183H26C26.5523 24.1183 27 23.6672 27 23.1109C27 22.5545 26.5523 22.1035 26 22.1035H11Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M6 12.0296C6 9.8041 7.79086 8 10 8H32C34.2091 8 36 9.8041 36 12.0296V23.1109H38C40.2091 23.1109 42 24.915 42 27.1404V33.1848C42 35.4103 40.2091 37.2144 38 37.2144H37.2857L34.8664 39.839C34.6686 40.0537 34.3314 40.0537 34.1336 39.839L31.7143 37.2144H26C23.7909 37.2144 22 35.4103 22 33.1848V30.1626H19.2143L15.8664 33.7947C15.6686 34.0093 15.3314 34.0093 15.1336 33.7947L11.7857 30.1626H10C7.79086 30.1626 6 28.3585 6 26.1331V12.0296ZM12.6579 28.1478L15.5 31.2312L18.3421 28.1478H32C33.1046 28.1478 34 27.2458 34 26.1331V12.0296C34 10.9168 33.1046 10.0148 32 10.0148H10C8.89543 10.0148 8 10.9168 8 12.0296V26.1331C8 27.2458 8.89543 28.1478 10 28.1478H12.6579ZM24 30.1626V33.1848C24 34.2975 24.8954 35.1996 26 35.1996H32.5864L34.5 37.2756L36.4136 35.1996H38C39.1046 35.1996 40 34.2975 40 33.1848V27.1404C40 26.0277 39.1046 25.1257 38 25.1257H36V26.1331C36 28.3585 34.2091 30.1626 32 30.1626H24Z"
		/>
	</svg>,
	'actions': [
		{
			'type': 'send_email',
			'settings': {
				'mail_to': 'form',
				'from_field': 'email',
				'subject': 'User feedback',
				'content': 'Name: %name% - %rating%<br/>%how_improve%',
			},
		},
	],
	'blocks': [
		[
			'jet-forms/text-field',
			{
				'name': 'name',
				'label': 'Name',
				'required': true,
			},
		],
		[
			'jet-forms/text-field',
			{
				'name': 'email',
				'label': 'Email',
				'field_type': 'email',
				'required': true,
			},
		],
		[
			'jet-forms/radio-field',
			{
				'name': 'rating',
				'label': 'Please rate our website',
				'required': true,
			},
		],
		[
			'jet-forms/textarea-field',
			{
				'name': 'how_improve',
				'label': 'How would you suggest to improve it?',
			},
		],
		[
			'jet-forms/submit-field',
		],
	],
	applyText: __(
		'5 blocks and Send Email action have been added',
		'jet-form-builder',
	),
};