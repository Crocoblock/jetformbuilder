import useActionValidatorProvider from '../hooks/useActionValidatorProvider';

function ValidatorProvider( { isSupported, children } ) {
	return children( useActionValidatorProvider( { isSupported } ) );
}

export default ValidatorProvider;