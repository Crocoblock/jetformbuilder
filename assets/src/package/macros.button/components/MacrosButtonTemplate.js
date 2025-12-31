import PopoverContext from '../context/PopoverContext';

const {
	      useState,
	      useRef,
      } = wp.element;
const {
	      Button,
	      Popover,
      } = wp.components;

function MacrosButtonTemplate( {
	children,
	...props
} ) {
	const [ showPopover, setShowPopover ] = useState( false );
	const buttonRef                       = useRef();

	return <PopoverContext.Provider
		value={ { showPopover, setShowPopover } }
	>
		<Button
			ref={ buttonRef }
			icon={ 'admin-tools' }
			variant="tertiary"
			isSmall
			className={ 'jet-fb-is-thick' }
			onClick={ () => setShowPopover( prev => !prev ) }
			{ ...props }
		/>
		{ showPopover && (
			<Popover
				anchor={ buttonRef.current }
				position={ 'top-start' }
				noArrow={ false }
				variant={ 'toolbar' }
				onFocusOutside={ event => {
					/**
					 * We should skip handling if focused node it's not equals
					 * the button which triggers popover
					 */
					if ( event.relatedTarget !== buttonRef.current ) {
						setShowPopover( false );
					}
				} }
				onClose={ () => setShowPopover( false ) }
			>
				{ children }
			</Popover>
		) }
	</PopoverContext.Provider>;
}

export default MacrosButtonTemplate;