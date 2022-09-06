import ActionModalContext from '../context/ActionModalContext';

const {
	      useContext,
	      useEffect,
      } = wp.element;

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
	}, [ actionClick ] );
}

export default useOnUpdateModal;