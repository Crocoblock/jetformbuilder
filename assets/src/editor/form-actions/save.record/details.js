const {
	      __,
      } = wp.i18n;
const {
	      ExternalLink,
      } = wp.components;

const href = 'https://jetformbuilder.com/features/wordpress-custom-form-records-page/';

function SaveRecordDetails() {
	return <>
		<div data-title={ __( 'Tutorial:', 'jet-form-builder' ) }>
			<ExternalLink href={ href }>
				{ __( 'Form Records Page', 'jet-form-builder' ) }
			</ExternalLink>
		</div>
	</>;
}

export default SaveRecordDetails;