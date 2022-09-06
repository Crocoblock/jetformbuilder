const {
	      useState,
	      useEffect,
      } = wp.element;

const {
	      useDispatch,
      } = wp.data;


function useSuccessNotice ( text, options = {} ) {
	const [ hasCopied, setHasCopied ] = useState( false );
	const noticeStore                 = useDispatch( wp.notices.store );

	useEffect( () => {
		if ( hasCopied ) {
			noticeStore.createWarningNotice( text,
				{ type: 'snackbar', ...options } );
		}
	}, [ hasCopied ] );

	return setHasCopied;
}

export default useSuccessNotice;