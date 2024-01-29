const { __ } = wp.i18n;

export default {
	name: 'insert_post',
	title: __( 'Insert Post', 'jet-form-builder' ),
	icon: <svg width="48" height="48" viewBox="0 0 48 48" fill="currentColor"
	           xmlns="http://www.w3.org/2000/svg">
		<path
			d="M12 15.0074C12 14.451 12.4477 14 13 14H27C27.5523 14 28 14.451 28 15.0074C28 15.5638 27.5523 16.0148 27 16.0148H13C12.4477 16.0148 12 15.5638 12 15.0074Z"
		/>
		<path
			d="M13 18.0296C12.4477 18.0296 12 18.4806 12 19.037C12 19.5933 12.4477 20.0444 13 20.0444H27C27.5523 20.0444 28 19.5933 28 19.037C28 18.4806 27.5523 18.0296 27 18.0296H13Z"
		/>
		<path
			d="M13 22.0591C12.4477 22.0591 12 22.5102 12 23.0665C12 23.6229 12.4477 24.0739 13 24.0739H22C22.5523 24.0739 23 23.6229 23 23.0665C23 22.5102 22.5523 22.0591 22 22.0591H13Z"
		/>
		<path
			d="M12 26.9926C12 26.4362 12.4477 25.9852 13 25.9852H19C19.5523 25.9852 20 26.4362 20 26.9926C20 27.549 19.5523 28 19 28H13C12.4477 28 12 27.549 12 26.9926Z"
		/>
		<path
			d="M30 28C30 27.4477 30.4477 27 31 27C31.5523 27 32 27.4477 32 28V30H34C34.5523 30 35 30.4477 35 31C35 31.5523 34.5523 32 34 32H32V34C32 34.5523 31.5523 35 31 35C30.4477 35 30 34.5523 30 34V32H28C27.4477 32 27 31.5523 27 31C27 30.4477 27.4477 30 28 30H30V28Z"
		/>
		<path fillRule="evenodd" clipRule="evenodd"
		      d="M32 12V22.0549C36.5 22.5524 40 26.3674 40 31C40 35.9706 35.9706 40 31 40C28.8567 40 26.8884 39.2508 25.3427 38H12C9.79086 38 8 36.2091 8 34V12C8 9.79086 9.79086 8 12 8H28C30.2091 8 32 9.79086 32 12ZM12 10H28C29.1046 10 30 10.8954 30 12V22.0549C25.5 22.5524 22 26.3674 22 31C22 32.8501 22.5583 34.5699 23.5155 36H12C10.8954 36 10 35.1046 10 34V12C10 10.8954 10.8954 10 12 10ZM38 31C38 34.866 34.866 38 31 38C27.134 38 24 34.866 24 31C24 27.134 27.134 24 31 24C34.866 24 38 27.134 38 31Z"
		/>
	</svg>,
	actions: [
		{
			'type': 'insert_post',
			'settings': {
				'fields_map': {
					'title': 'post_title',
					'excerpt': 'post_excerpt',
					'content': 'post_content',
				},
				'post_type': 'post',
			},
		},
	],
	blocks: [
		[
			'jet-forms/text-field',
			{
				'name': 'title',
				'label': 'Post Title',
			},
		],
		[
			'jet-forms/textarea-field',
			{
				'name': 'excerpt',
				'label': 'Post Excerpt',
			},
		],
		[
			'jet-forms/wysiwyg-field',
			{
				'name': 'content',
				'label': 'Post Content',
			},
		],
		[
			'jet-forms/submit-field',
		],
	],
	applyText: __(
		'4 blocks and Insert/Update Post action have been added',
		'jet-form-builder',
	),
};