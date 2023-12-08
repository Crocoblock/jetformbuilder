const {
	      useState,
	      useRef,
      } = wp.element;

/**
 * @returns {{ref, setShowPopover: *, showPop<>over: *, popoverProps: {onClose: (function(): *), onFocusOutside: popoverProps.onFocusOutside, anchorRef}}}
 */
function useTriggerPopover() {
	const [ showPopover, setShowPopover ] = useState( false );

	const buttonRef = useRef();

	const popoverProps = {
		anchor: buttonRef.current,
		onFocusOutside: event => {
			/**
			 * We should skip handling if focused node it's not equals
			 * the button which triggers popover
			 */
			if ( event.relatedTarget !== buttonRef.current ) {
				setShowPopover( false );
			}
		},
		onClose: () => setShowPopover( false ),
	};

	return {
		ref: buttonRef,
		setShowPopover,
		showPopover,
		popoverProps,
	};
}

export default useTriggerPopover;