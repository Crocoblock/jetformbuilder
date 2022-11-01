const {
	      __,
      } = wp.i18n;

const href = 'https://jetformbuilder.com/features/register-user/';

function RegisterUserDetails() {
	return <>
		<div data-title={ __( 'Tutorial:', 'jet-form-builder' ) }>
			<a href={ href }>{ __( 'Register User action',
				'jet-form-builder' ) }</a>
		</div>
	</>;
}

export default RegisterUserDetails;