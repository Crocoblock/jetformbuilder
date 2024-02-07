const {
	      useState,
	      useRef,
      } = wp.element;

/**
 * @return {Object}
 * @property {Object}   ref            Reference on button
 * @property {Function} setShowPopover function for show / hide popover
 * @property {boolean}  showPopover    Popover is visible on not
 * @property {Object}   popoverProps   Object with props for <Popover> component
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