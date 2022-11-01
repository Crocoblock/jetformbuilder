const {
	      __,
      } = wp.i18n;

const href = 'https://jetformbuilder.com/features/insert-update-post/';

function InsertUpdatePostDetails() {
	return <>
		<div data-title={ __( 'Tutorial:', 'jet-form-builder' ) }>
			<a href={ href }>{ __( 'Insert/Update Post',
				'jet-form-builder' ) }</a>
		</div>
	</>;
}

export default InsertUpdatePostDetails;