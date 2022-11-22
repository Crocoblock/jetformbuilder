const {
	      __,
      } = wp.i18n;
const {
	      ExternalLink,
      } = wp.components;

const href = 'https://jetformbuilder.com/features/register-user/';

function RegisterUserDetails() {
	return <>
		<div data-title={ __( 'Tutorial:', 'jet-form-builder' ) }>
			<ExternalLink href={ href }>
				{ __( 'Register User action', 'jet-form-builder' ) }
			</ExternalLink>
		</div>
	</>;
}

export default RegisterUserDetails;