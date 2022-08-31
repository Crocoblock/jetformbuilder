import ActionModalContext from '../../context/action.modal';

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

export { useOnUpdateModal };