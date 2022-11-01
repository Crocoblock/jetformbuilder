const {
	      __,
      } = wp.i18n;

const href = 'https://jetformbuilder.com/features/wordpress-custom-form-records-page/';

function SaveRecordDetails() {
	return <>
		<div data-title={ __( 'Info:', 'jet-form-builder' ) }>
			{ __(
				'Action that stores the form entries in the database',
				'jet-form-builder',
			) }
			<br/>
			{ __(
				'and makes them easily accessible from the dashboard.',
				'jet-form-builder',
			) }
		</div>
		<div data-title={ __( 'Tutorial:', 'jet-form-builder' ) }>
			<a href={ href }>{ __( 'Form Records Page',
				'jet-form-builder' ) }</a>
		</div>
	</>;
}

export default SaveRecordDetails;