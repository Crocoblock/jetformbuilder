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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ hasCopied ] );

	return setHasCopied;
}

export default useSuccessNotice;