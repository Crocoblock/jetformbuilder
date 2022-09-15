import ShowPopoverContext from '../context/ShowPopoverContext';

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
	title = '',
	...props
} ) {
	const [ showPopover, setShowPopover ] = useState( false );
	const buttonRef                       = useRef();

	return <ShowPopoverContext.Provider
		value={ { showPopover, setShowPopover } }
	>
		<Button
			ref={ buttonRef }
			icon={ 'admin-tools' }
			variant="tertiary"
			isSmall
			isDestructive={ showPopover }
			className={ 'jet-fb-is-thick' }
			onClick={ () => setShowPopover( true ) }
			{ ...props }
		/>
		{ showPopover && (
			<Popover
				anchorRef={ buttonRef.current }
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				onClose={ () => setShowPopover( false ) }
			>
				{ children }
			</Popover>
		) }
	</ShowPopoverContext.Provider>;
}

export default MacrosButtonTemplate;