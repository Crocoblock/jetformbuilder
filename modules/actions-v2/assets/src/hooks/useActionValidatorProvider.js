import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import useActionErrors from './useActionErrors';
import { STORE_NAME } from '../store';

function useActionValidatorProvider( { isSupported } ) {
	const { currentAction, isShowErrors } = useSelect( select => (
		{
			currentAction: select( STORE_NAME ).getCurrentAction(),
			isShowErrors: select( STORE_NAME ).getErrorVisibility(),
		}
	), [] );

	const [ isShowLocalError, setShowError ] = useState( false );

	/**
	 * We could receive errors only after changing local state
	 * (probably on blur event) or after changing global state
	 * (probably after click on the Update button)
	 */
	const errors = useActionErrors(
		(
			isShowLocalError || isShowErrors
		)
		? currentAction
		: { type: false },
	);

	const hasSupportedError = errors.some( isSupported );

	return { hasError: hasSupportedError, setShowError };
}

export default useActionValidatorProvider;