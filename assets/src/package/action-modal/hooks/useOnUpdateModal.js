import ActionModalContext from '../context/ActionModalContext';
import { useContext, useEffect } from '@wordpress/element';

/**
 * @param callback {Function}
 */
function useOnUpdateModal( callback ) {
	const { actionClick, onRequestClose } = useContext( ActionModalContext );

	useEffect( () => {
		// update field attributes
		if ( actionClick ) {
			callback();
		}

		if ( null !== actionClick ) {
			onRequestClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ actionClick ] );
}

export default useOnUpdateModal;